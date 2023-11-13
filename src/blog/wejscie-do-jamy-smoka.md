---
author: Jakub Spórna
title: Wejście do jamy smoka
description: Od czego tu zacząć? Często zadawane pytanie przez osoby chcące zacząć swoją przygodę jako DevOps. Nurtuje to osoby będące jeszcze na studiach i tych, którzy chcą się przebranżowić. Nie mam na celu zaprezentowania uniwersalnego rozwiązania, ponieważ każdy jest indywidualnym przypadkiem. Inaczej będzie wyglądać ścieżka studenta(ki) kierunku technicznego czy kierunku humanistycznego oraz osoby wchodzącej do IT z wiedzą i doświadczeniem domenowym z innej branży.
date: 2020-11-16
---

# {{ $frontmatter.title }}

<Quote author="Antoine de Saint-Exupéry">
Tylko nieznane przeraża człowieka. Ale dla tego kto mu stawia czoło, ono już nie jest nieznane.
</Quote>

{{ $frontmatter.description }}

## Wiedza

Podstawą jest oczywiście wiedza, bez której ciężko cokolwiek zrobić. Ale zanim zaczniemy jej szukać i przyswajać należy najpierw dobrać obszary. Należy dokonać wyboru adekwatnego do naszej obecnej wiedzy czy poziomu skomplikowania nowe zagadnienia.

Często spotykam się z podpowiedziami dla ludzi, którzy chcą iść w kierunku inżyniera DevOps aby "nauczyli się" Kubernetesa lub Chmury (np. AWS).  
Każde z tych zagadnień posiada wspaniałą dokumentację oraz wiele przykładów od twórców jak i społeczności. Niestety ale próg wejścia w te technologie jest bardzo wysoki i tym samym może zniechęcić nowe osoby.  
Wręcz normą jest odesłanie do [roadmapy DevOpsa](https://roadmap.sh/devops), która jest rozbudowanym zestawieniem technologii, narzędzi i języków. Jak ona pokazuje wspomniany Kubernetes czy Chumra są bardzo zaawansowaną tematyką w ścieżce rozwoju.

Ja zawsze proponuję zacząć od zrozumienia systemu, na którym się pracuje i którym się zarządza. Pomimo, że pracuję na Linuxie od ponad 15 lat, to zawodowo zajmowałem się również infrastrukturą opartą na systemach spod znaku Windows i oprogramowaniu na nim zależnym. Łączenie dwóch światów obecnie jest bardzo ułatwione za sprawą [PowerShella](https://docs.microsoft.com/pl-pl/powershell/scripting/overview?view=powershell-7.1) oraz [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/about).

### Moje sugestie

Level 0
* Linux: polecenia, potoki, logi
* języki programowania: skrypty bash
* sieć: protokoły, warstwy, bezpieczeństwo
* system kontroli wersji: git

Level 1
* Linux: procesy, zasoby, metryki
* języki programowania: python
* serwery www / proxy: nginx, apache, haproxy

Level 2
* Linux: cgroups / docker
* języki programowania: go
* bazy danych: mysql, postgresql
  
System do nauki można postawić na maszynie wirtualnej - [HyperV](https://docs.microsoft.com/pl-pl/virtualization/hyper-v-on-windows/about/), [VirtualBox](https://www.virtualbox.org/wiki/Downloads), [QEMU](https://www.qemu.org/download/#windows). Wiele dystrybucji Linuxa obecnie ma bardzo przyjazny interfejs graficzny więc przesiadka z Windowsa nie będzie taka bolesna. Mimo wszystko praca z Linuxem to przede wszystkim konsola / terminal, do której trzeba przywyknąć ale dzięki temu poznaje się system i zdobywa pierwsze sznyty.

### Gdzie jej szukać tej wiedzy?

* książki / dokumentacja
* szkolenia
* mentoring
* fora / grupy internetowe

### Przykładowe propozycje

* Linux. Komendy i polecenia - Łukasz Sosna
* Bash Guide for Beginners - Machtelt Garrels
* Networking Basics - Hubert Arciszewski
* Git. Leksykon kieszonkowy - Richard E. Silverman
* Jak działa Linux. Podręcznik administratora - Brian Ward
* Python. Leksykon kieszonkowy - Mark Lutz
* NGINX Begginers Guide
* Docker. Praktyczne zastosowania - Karl Matthias, Sean P. Kane
* Język Go. Poznaj i programuj - Alan A. A. Donovan, Brian W. Kernighan
* MySQL. Leksykon kieszonkowy - George Reese

I co dalej ze zdobytą wiedzą?

## Praktyka

Sama wiedza to nie wszystko. Trzeba jeszcze ją ugruntować a najlepiej wykorzystać w życiu aby sprawdzić ją i siebie.  
Wspomniana wcześniej maszyna wirtualna świetnie się do tego nada jako poligon doświadczalny. Jest po to, żeby ją psuć i stawiać na nowo. Czasem dzień DevOpsa to tworzenie i niszczenie środowisk aby wypracować lepszą i stabilniejszą automatyzację aby móc skalować rozwiązania.

### Gdzie ją zdobyć?

* warsztaty
* projekty FOSS
* platformy online szkolące programowania

Myślę, że warto zacząć od konta na [Githubie](https://github.com/) i/lub [GitLabie](https://about.gitlab.com/) gdzie można tworzyć repozytoria kodu pod własne projekty, partycypować w projekty innych jako kontrybutor lub zgłaszać problemy do istniejących projektów.  
Wiele osób tworząc swoje kursy/warsztaty korzysta z powyższych serwisów jako nośnika kodu. Wymieniam je, ponieważ mają one więcej wspólnego z duchem DevOps niż nam się wydaje na pierwszy rzut oka. Dodatkową wartością jest automatyzacja w postaci Github Actions i GitLab CI - to temat na osobny wpis.  
Platform online do nauki programowania jest mnóstwo i jest w czym wybierać. Wiele pozwala na darmową naukę, jeszcze więcej ma opcje płatne. Każdy znajdzie coś dla siebie. Z mojej strony proponuje dwa serwisy:
* [CodeWars](https://www.codewars.com/)
* [CodinGame](https://www.codingame.com/)

Oba serwisy pozwalają rozwiązywać zadania, testować kod, komunikować się w ramach społeczności dzięki czemu rozwijać swoje umiejętności programistyczne i komunikacyjne.



## Umiejętności

Prócz wiedzy i praktyki istotne są również umiejętności.  
Moim zdaniem są 2 bardzo istotne: analityczne myślenie oraz komunikacja.

### Analityczne myślenie

Do wszystkiego co jest związane z systemami, serwisami czy infrastrukturą trzeba podchodzić analitycznie, rozkładając to na części pierwsze aby małe trybiki sprawnie między sobą pracowały. Dlatego zgłębianie wiedzy jest pochodną tego gdyż trzeba wiele technologi poznać bardzo dokładnie wręcz do poziomu wewnętrznej terminologii a nawet samego kodu źródłowego.  Nie jest to wymagane już dnia pierwszego czy drugiego. Nikt nie urodził się analitykiem, ale mamy wrodzoną dociekliwość, którą warto pielęgnować aby pewnego dnia stała się naszym orężem w życiu zawodowym.

### Komunikacja

Może to brzmi banalnie ale często brak lub błędna komunikacja jest powodem problemów między zespołami czy na styku firma-klient.  Moim zdaniem istotną rolę odgrywa umiejętność zadawania trafnych pytań, które mogą nas prowadzić do właściwych wniosków lub odkrywać rzeczy przemilczane a nieoczywiste dla obu stron. Świetnie wpasowuje się tutaj znajomość [logiki erotetycznej](https://pl.wikipedia.org/wiki/Erotetyka), która w sposób formalny opisuje relacje pytania z odpowiedzią.

## Smok poskromiony

Kiedy już zadomowimy się w jamie DevOpsów co powinno być kolejnym krokiem?  
Tu pojawia się cały wachlarz możliwości. Moje typy to:
* infrastruktura jako kod (Infrastructure as Code / IaC)
* niemutująca infrastruktura (immutable infrastructure)
* konfiguracja jako kod (Configuration as Code / Cac)
* ciągła integracja / ciągłe dostarczanie / ciągłe wdrażanie (Continous Integration / Continous Delivery / Conitnous Deployment / CI/CD)

Tu wspominam jedynie tematy hasłowo, ponieważ zostaną rozszerzone i uszczegółowione w osobnych wpisach.

<Quote author="Gandalf">
Wypatrujcie mnie piątego dnia o świcie, o brzasku patrzcie na wschód.
</Quote>

---

W tym miejscu chciałbym polecić kurs [Podstawy Ciągłej Integracji w Chmurze](https://jaktestowac.pl/integracja/) zespołu [jaktestowac.pl](https://jaktestowac.pl/), w którym miałem przyjemność maczać merytorycznie palce :upside_down_face: