---
author: "Jakub Spórna"
title: "Światło w tunelach"
description: "Kolejna infrastruktura, kolejna twierdza nie do zdobycia. Oczko w głowie klienta. Zawiłe procedury aby uzyskać dostęp. I tu pojawia się cały na biało VPN."
date: 2021-01-12
---
# {{ $frontmatter.title }}

<Quote author="Terry Pratchett">
Światło wierzy, że przemieszcza się  szybciej od wszystkiego, ale się myli. Nieważne, jak szybko pędzi,  zawsze odkrywa, że ciemność dotarła na miejsce wcześniej i już na nie  czeka.
</Quote>

{{ $frontmatter.description }}

## Tunel do Eldorado

Dla mnie jako DevOpsa infrastruktura to jak woda dla rybek. Można się pławić we własnym akwarium ucząc się nowych sztuczek czy ćwicząc stare. Ale dostęp do prawdziwych otwartych akwenów to jest "to co tygryski lubią najbardziej".

Na szczęście są momenty, że trzeba dostać się do prywatnych i zamkniętych akwenów - to środowiska produkcyjne. Zazwyczaj są pilnie strzeżone, obwarowane procedurami, monitoringiem, oknami serwisowymi - a przynajmniej w teorii.  Czasem trzeba mimo wszystko w nim coś naprawić, poprawić, ulepszyć.

Niejednokrotnie otrzymujemy dostęp do VPNa  i musimy dokonfigurować naszą maszynę uzbrajając ją w odpowiednie oprogramowanie zależny od technologi tunelowania. Jeden tunel to nie problem, bo światło na jego końcu jest dobre.

A co kiedy mamy tych tuneli kilka i mają pracować równocześnie? Dla przykładu:

⊛ tunel 1		→	 repozytorium kodu  
⊛ tunel 2		→	 CI/CD  
⊛ tunel 3		→	 środowisko aplikacyjne

Nadal nie jest źle jak tylko sieci nie nachodzą na siebie i poszczególne tunele nie są dla siebie antagonistami w tym ekosystemie.

Kiedy jednak nie jest różowo i nie można mieć równocześnie zestawionych tuneli trzeba znaleźć inne rozwiązanie.  
Oczywiście ile głów tyle pomysłów: dodatkowe interfejsy sieciowe, kolejne warstwy sieci, niezależne maszyny, wirtualizacja...

## Mleko i miód w tunelu

### Łyżka dziegciu

Jak już wspomniałem przy jednym tunelu światło na jego końcu jest dobre. Jednak może się zdarzyć sytuacja, że trafi nam się klient / pracodawca, który chce kontrolować cały ruch osób, które korzystają z VPNa. I w takiej sytuacji wszelkie nasze działania sieciowe mogą podlegać logowaniu i monitorowaniu. Niekoniecznie jesteśmy o tym informowani lub świadomi poziomu kontroli. 

### Odrobina słodyczy

Czasem dyskusja o rozwiązaniach tworzonych "na kolanie", ale mających głębszy i zasadny sens, przynosi owoce. I tak dzięki rozmową z [Piotrem](https://github.com/slashbeast) powstał projekt wykorzystujący kilka buzz wordów ze stajni DevOps: Vagrant, Ansible, Dante, VPN L2TP+IPsec

https://github.com/jsporna/vagrant-vpn-l2tp-ipsec-socks5-proxy

A ma on na celu tworzenie odizolowanego tunelu VPN - w tym przypadku L2TP+IPsec - w ramach maszyny wirtualnej. Dzięki temu możemy mieć uruchomionych N tuneli VPN na osobnych maszynach wirtualnych i ich wzajemna konfiguracja oraz adresacja nie będą na siebie wpływać. Dodatkowo jako wyizolowany tunel VPN nie będzie obsługiwał całego ruchu z maszyny gospodarza a jedynie ruch jaki zostanie przekierowany na wybraną maszynę wirtualną poprzez SOCKS proxy.

### Analiza statyczna

Rozłóżmy to na czynniki pierwsze.

Wybrana została wirtualizacja, ponieważ pozwala na posiadanie całkowicie odizolowanej warstwy sieciowej od gospodarza w przeciwieństwie od rozwiązania opartego na konteneryzacji - docker.
Komunikacja z gospodarzem może odbywać się poprzez NAT albo połączenie mostkowe z wybraną kartą sieciową. Istotne, aby maszyna wirtualna miała wyjście na świat aby utworzyć tunel VPN oraz pozwalała na komunikację z maszyny gospodarza aby móc się dostać do tunelu VPN.

Do zarządzania maszyną wirtualną zastał wykorzystany [Hashicorp Vagrant](https://www.vagrantup.com/). Pozwala on zapisać definicję maszyny wraz z konfiguracją przy pomocy kodu w pliku [Vagrantfile](https://github.com/jsporna/vagrant-vpn-l2tp-ipsec-socks5-proxy/blob/main/Vagrantfile). 

```ruby
Vagrant.configure("2") do |config|
    if Vagrant.has_plugin?("vagrant-env")
        config.env.load('.env.local', '.env')
    end

    # required
    VPN_GATEWAY = default_s('VPN_GATEWAY', '')
    VPN_IPSEC_PSK = default_s('VPN_IPSEC_PSK', '')
    VPN_USER = default_s('VPN_USER', '')
    VPN_PASSWORD = default_s('VPN_PASSWORD', '')

    # optional
    VPN_SOCKS_PORT = default_i('VPN_SOCKS_PORT', 1080)
end

def default_s(key, default)
ENV[key] && ENV[key].empty? ? ENV[key] : default
end

def default_i(key, default)
default_s(key, default).to_i
end
  
Vagrant.configure("2") do |config|
    config.vm.box = "bento/ubuntu-20.04"
    config.vm.network "forwarded_port", guest: 1080, host: VPN_SOCKS_PORT

    config.vm.provision "ansible" do |ansible|
        ansible.playbook = "playbook.yml"
        ansible.extra_vars = {
            vpn_gateway: VPN_GATEWAY,
            vpn_ipsec_psk: VPN_IPSEC_PSK,
            vpn_user: VPN_USER,
            vpn_password: VPN_PASSWORD
        }
    end
end
```

Czy do samej wirtualizacji zostanie użyty [VirtualBox](https://www.virtualbox.org/) czy [libvirt](https://libvirt.org/) nie ma tu większego znaczenia. W projekcie została wykorzystana dystrybucja [Ubuntu 20.04](https://app.vagrantup.com/bento/boxes/ubuntu-20.04) przygotowana przez projekt [bento](https://github.com/chef/bento).

Szczegółowa konfiguracja krok po kroku została zapisana w kodzie [Ansible'a](https://www.ansible.com/) w postaci dedykowanej pod ten projekt [roli](https://github.com/jsporna/vagrant-vpn-l2tp-ipsec-socks5-proxy/tree/main/roles/vpn). Obejmuje on instalacje niezbędnych pakietów, konfiguracje serwisów, konfiguracje tunelu VPN.

Do zarządzania warstwą sieciową został użyty [NetworkManager](https://help.ubuntu.com/community/NetworkManager).

```yaml
- name: install packages
  apt:
    name:
    - network-manager
    - network-manager-l2tp
    - network-manager-strongswan
    - dante-server
    - net-tools
    state: present
    update_cache: yes
```

Konfiguracja połączeń została zrealizowana poprzez nmcli z poziomu konsoli.

```yaml
- name: set up vpn configuration
  shell: nmcli c add con-name vpn type vpn vpn-type l2tp vpn.data "gateway={{ vpn_gateway }}, ipsec-enabled=yes, ipsec-psk={{ vpn_ipsec_psk }}, password-flags=0, user={{ vpn_user }}" vpn.secrets password={{ vpn_password }}
  when:
  - vpn_gateway != ""
  - vpn_ipsec_psk != ""
  - vpn_user != ""
  - vpn_password != ""
```

Wisienką na torcie jest dante-server, który pełni rolę SOCKS proxy. Nasłuchując na porcie 1080, przekierowuje ruch do tunelu VPN.

```txt
logoutput: /var/log/sockd.log

internal: eth0 port = 1080
external: ppp0

clientmethod: none
socksmethod: none
user.privileged: root
user.unprivileged: nobody
timeout.negotiate: 30

client pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0
  log: error # connect disconnect
}

socks pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0
  log: error # connect disconnect
}
```

Dzięki takiemu podejściu na maszynie gospodarza możemy uruchomić naszą ulubioną przeglądarkę internetową z ustawionym SOCKS proxy aby nasza komunikacja przechodziła przez tunel i pozwalała nam na dostęp do prywatnych zasobów klienta / pracodawcy. Zarazem możemy korzystać z innej instancji przeglądarki, która będzie komunikowała się bezpośrednio ze światem, do celów prywatnych - dostęp do konta bankowego, zakupy online, komunikacja z rodziną i znajomymi.

To rozwiązanie nie obejmuje wyłącznie przeglądarek internetowych. Każde narzędzie czy aplikacja, która potrafi komunikować się za pośrednictwem SOCKS proxy, może korzystać z tak przygotowanego tunelu. Dla przykładu git i dostęp do repozytorium poprzez tunel VPN:

```shell
git clone -c core.sshCommand='ssh -o ProxyCommand="nc -x localhost:1080 %h %p"' git@git.example.com:private-repo.git
```

## Synteza

Co i jak zostało zrobione jest już omówione to pora na użycie tego w pracy codziennej.

Aktorzy:
* firefox
* ssh
* git

### Firefox

W przeglądarce tworzymy dedykowany profil → [SRC](https://support.mozilla.org/pl/kb/zarzadzanie-profilami)  
W tym profilu konfigurujemy sobie proxy → [SRC](https://support.mozilla.org/pl/kb/ustawienia-polaczenia-internetowego)

SOCKS Host to nazwa domenowa lub IP naszej wirtualnej maszyny,  
Wprowadzamy port na jakim proxy nasłuchuje.  
SOCKS v5.  
I co bardzo ważne zaznaczamy  "Proxy DNS when using SOCKS v5" aby zapytania DNS też odbywały się przez proxy a co za tym idzie tunel VPN.

I tak oto mamy przygotowaną przeglądarkę do pracy przez tunel VPN.

### SSH

W pliku **~/.ssh/config** możemy zdefiniować sobie pojedyncze hosty lub ich grupy, dla których komunikacja będzie odbywać się przez proxy.

```txt
Host 10.20.*
    ProxyCommand nc -x localhost:1081 %h %p

Host 172.16.*
    ProxyCommand nc -x localhost:1080 %h %p
    
Host 10.10.1.120
    ProxyCommand nx -x localhost:1082 %h %p
```

### GIT

Jeżeli komunikacja z repozytoriami kodu nie korzysta z SSH to dodatkowo potrzebujemy ustawić proxy.  
W pliku **~/.gitconfig** dodajemy wpisy:

```txt
[includeIf "gitdir:~/Projects/clientA/"]
        path = ~/Projects/clientA/.gitconfig

[includeIf "gitdir:~/Projects/clientB/"]
        path = ~/Projects/clientB/.gitconfig
```

co pozwala na wczytywanie dodatkowej konfiguracji w zależności od umiejscowienia lokalnej kopii repozytorium w drzewie katalogów → [SRC](https://git-scm.com/docs/git-config#_includes). Do takiego pliku **~/Projects/clientX/.gitconfig** dopisujemy:

```txt
[http]
        proxy = socks5h://localhost:1080
```

a socks5h oznacza, że zapytania DNS są rozwiązywane przez proxy a co za tym idzie tunel VPN.

## Po drugiej stronie tunelu

To oczywiście tylko minimalna konfiguracja, żeby móc pracować z jednym klientem przez tunel VPN. Każde z tych narzędzie możemy dokonfigurować według własnych potrzeb.  
Przeglądarka może mieć własny zestaw rozszerzeń.
SSH dla wybranych hostów lub grup przypisane dedykowane klucze RSA.
Konfiguracja gita dodany klucz gpg do podpisywania commitów.

Listę narzędzii można rozbudowywać według własnych potrzeb jeżeli tylko kolejne obsługuje proxy SOCKSv5.

Jako, że VMki z tunelem i proxy są bardzo lekkie, równocześnie możemy mieć ich uruchomionych kilka. Ubuntu można zamienić na mniejszą dystrybucję aby rozwiązanie stało się jeszcze lżejsze.

Gdzieś z tyłu głowy świta mi pomysł postawienie takiego rozwiązania na RaspberryPi i zrobić porównanie wydajności takich tuneli dla Maliny w wersji 1, 2, 3 i 4. Wersji Zero nie biorę pod uwagę, ponieważ nie posiada fizycznego portu ethernet.

## Bonus

W czasie tworzenia tego wpisu przygotowałem również analogiczne rozwiązanie dla [OpenConnect VPN](https://www.infradead.org/openconnect/) z konfiguracją domyślną dla [PAN GlobalProtect](https://www.paloaltonetworks.com/products/globalprotect).

https://github.com/jsporna/vagrant-vpn-openconnect-socks5-proxy

Zastosowanie jest identyczne jak w przypadku tunelu L2TP+IPSec.