---
author: "Jakub Spórna"
title: "Cześć...?"
description: "Nie dla `cześć`, nie dla `szybki call`, nie dla spotkań bez agendy"
date: 2025-02-01
---

# {{ $frontmatter.title }}

<Quote author="Wieniedikt Jerofiejew">
Witam z entuzjazmem każde odchylenie, które ludzkość uważa za normę!
</Quote>

{{ $frontmatter.description }}

Oto typowe błędy, jakie popełniają ludzie pracujący zdalnie.  
Możliwe, że organizacja, w której pracujesz, ma niską produktywność, każdy ma czas na *szybki call* lub pisanie sobie 
na czacie o dowolnej porze.  
A może jesteś managerem i nikt nie ma odwagi Ci powiedzieć, że takie przerywniki są złe.  
A może jesteś leniwy i samolubny więc nie interesuje Cię, jak wpływasz na innych, ponieważ Twoje pytania wymagają
odpowiedzi "tu i teraz" z minimalnym wkładem z Twojej strony? - Myślę, że to nie ten przypadek.

Każdy z nas jest miłą ciężkopracującą osobą, która troszczy się o swoich współpracowników i tylko czasami potrzebujemy 
odrobinę wsparcia.

Pozwolę sobie opisać 3 typowe błędy popełniane podczas pracy zdalnej, co można zrobić lepiej i dlaczego unikanie ich 
w przyszłości jest na Twoją korzyść.

## <a name="czesc"></a>`Cześć`

To tak powszechny problem, że powstała strona [nohello.net](https://nohello.net/pl/) wyjaśniająca, dlaczego lepiej zadać
bezpośrednio pytanie, zamiast napisać "Cześć" i czekać na odpowiedź, zanim zadamy właściwe pytanie.  
Sedno jest takie: jeżeli napiszesz pytanie od razu, otrzymasz odpowiedź znacznie szybciej. Nie ma potrzeby czekać, aż
się odezwę, aby napisać, w czym jest problem.

Poniżej kilka wersji opisania tego samego problemu, od najgorszego do najlepszego. Powiedzmy, że mamy funkcję
**foo**, której został dodany nowy argument, ale nie zostało zaktualizowane jej użycie w kodzie. Napotkałeś problem
i decydujesz się zapytać o pomoc.

1. "Cześć" czy "Cześć, mam pytanie" to najgorszy sposób na rozpoczęcie rozmowy, kiedy mamy problem. Nie mam pojęcia,
   czego oczekujesz i czy to jest pilne. I czekasz, aż odpiszę "Cześć" zanim wyjaśnisz swój problem.
2. "Hej, funkcja **foo** nie działa". Przynajmniej mamy jakiś kontekst, ale nadal nie mam pojęcia, co znaczy
   "nie działa". Czy funkcja rzuca błąd, czy nie działa zgodnie z założeniami? Dzieje się to na Twoim komputerze czy
   na środowisku produkcyjnym?
3. "Hej, próbowałem odpalić funkcje **foo** na środowisku testowym, ale rzuciła mi `Error: missing argument 
  'count'`. Odpalam z branch'a 'feat/bar-123'".  
   Super, już wiem, co odpalasz, na jakim środowisku i jaki błąd otrzymałeś. Nadal można zrobić to lepiej.  
   Znaczący w tej informacji był błąd a dokładniej skopiowana jego treść, a nie słowno-muzyczny opis osoby.
   Przy opisywaniu błędów może wkraść się literówka i skupimy się nie na tym, co trzeba. Możemy zmarnować godziny na
   gonieniu nie tego królika. Zdecydowanie polecam dołączenie logu, a nawet całego stack trace'a do wiadomości,
   ponieważ mogą zawierać dodatkowe informacje, na które zgłaszający nie zwróci uwagi.
4. "Cześć, próbowałem odpalić funkcje **foo** na środowisku testowym, ale rzuciła mi `Error: missing argument 
  'count'`. Odpalam z branch'a 'feat/bar-123'. Porównałem kod z tym, co działa na produkcji. Dociągnąłem też ostatnie
   zmiany Staszka. Dołączam log: (...)"  
   To jest idealny przykład prośby o pomoc. Nie tylko zawiera dokładny opis błędu i kontekst, ale również podjęte kroki,
   aby samodzielnie wyeliminować problem. To wiele ułatwia, ponieważ eliminuje kroki pośrednie, bo wiem, że coś już było
   sprawdzone i nie trzeba o to dopytywać. Tak ujęty problem ma o wiele niższy próg wejścia, nawet kiedy się jest
   w trakcie innego zadania.

## Szybki call

To zbliżony problem do [**Cześć**](#czesc) z tym wyjątkiem, że przechodzimy z trybu _asynchronicznego_ w tryb
_synchroniczny_
rozwiązywania problemu. I tak jak "cześć", prośba o "szybki call" niesie ze sobą pewne problemy:

* Rozmowa jest bardziej rozpraszająca niż wiadomości na czacie. Jedna czy dwie proste odpowiedzi na czacie nie wytrącają
  z kontekstu zadania, nad którym w danym momencie pracujemy. Natomiast rozmowa wymaga skupienia i uwagi. Powrót do
  poprzedniego zadania zajmie więcej czasu. Nawet 30-sekundowa rozmowa może wybić z rytmu, na dużej niż nam się wydaje.
* Czasem wymiana wiadomości na czacie jest wystarczająca. Ten szybki call jest ekwiwalentem tych kilku wiadomości
  tekstowych.
  Brawo, zaoszczędziłeś 17 sekund, aby spisać swoje pytanie.
* Mówienie lub pisanie o problemie samo w sobie pomaga rozwiązać ten problem.
  [Metoda gumowej kaczki](https://pl.wikipedia.org/wiki/Metoda_gumowej_kaczuszki) naprawdę działa.
  Samemu doświadczyłem niezliczoną ilość razy, że wiadomość z pytaniem była kasowana lub 3,14 sekundy później
  pojawiała się kolejna wiadomość treści: *To już nieaktualne*, ponieważ autor samemu sobie poradził z problemem.
* Wiadomości są wieczne — tak długo aż działa serwer, który je przechowuje.
  Najlepsze w wiadomościach jest to, że można do nich wrócić później, przypomnieć sobie rozwiązania a czasem nawet
  powody, dla których je wybraliśmy, a nie inne.

Moja typowa odpowiedź na "Szybki call?" to "W czym problem?". I uwierz mi, takie podejście jest przede wszystkim dla
Twojego dobra. W ten sposób chcę *zmusić Cię* do pracy umysłowej nad problemem. Efektem ubocznym będą spisane kroki
analizy problemu, możliwe rozwiązania oraz decyzja, które rozwiązanie będzie wdrożone. A ja będę mógł w tym uczestniczyć
i nie będę całkowicie oderwanym od aktualnych zadań.

## Brak agendy

Byłeś kiedykolwiek zaproszony na spotkanie i nie miałeś bladego pojęcia, o czym ono będzie? Dołączasz a tu spotkanie
"niespodzianka" - brak agendy. Niektórzy najwyraźniej specjalizują się w marnowaniu czyjegoś czasu i organizują takie
spotkania, aby zmaksymalizować swój współczynnik "efektywności". Na domiar złego zapraszają nadmiarowych ludzi — tak
na wszelki wypadek. Kto by potrzebował planu spotkania? Co autor miał na myśli, organizując takie spotkania?

Staram się unikać spotkań, które nie mają agendy. Nie każdy ma komfort wyboru lub na tyle wyrozumiałych przełożonych.

Posiadanie agendy lub szczegółowego opisu spotkania ma tak wiele zalet:

* Znając agendę, mogę przygotować się do spotkania. Sprawdzić wcześniej informacje lub odświeżyć sobie pamięć 
  nie marnując czasu uczestników w trakcie.
* W przypadku podejmowania decyzji można przygotować możliwe opcje wraz z listą za i przeciw.
* Jest możliwość rozwiązania kwestii z agendy wcześniej poprzez wiadomości — spotkanie odwołane i zaoszczędzony czas.
* Agenda to nie tylko cel spotkania, a również lista kontrolna.  
  Jeżeli cel został osiągnięty przed zaplanowanym czasem, to można rozejść się wcześniej. 
  Lista pozwala nam zostać na kursie, przypomina, co trzeba przedyskutować lub jaką decyzje podjąć.
* Agenda pozwala zweryfikować konieczność naszej obecności. Czasem dostajemy zaproszenie ze względu na przynależność do
  projektu czy zespołu, ale nasze obowiązki (techniczne / nie-techniczne) nie pokrywają się z tematyką.

Z perspektywy osoby technicznej będąc zaproszonym na spotkanie, oczekuje się ode mnie:

* informacji na temat technologii
  > W większości przypadków wskazanie dokumentacji lub właściwego fragmentu będzie rozwiązaniem i problemu i spotkania.

  > Wskazana dokumentacja będzie świetną podstawą, aby móc porozmawiać o bardziej zaawansowanych kwestiach.

* odpowiedzi na techniczne pytania
  > Takie pytania lepiej zadać na piśmie, aby na spokojnie zastanowić się i przygotować merytoryczną odpowiedź,
  niż szukać odpowiedzi w pośpiechu w trakcie spotkania, marnując czyjś czas.  
  Czasem takie odpowiedzi są nietrafne lub niewystarczające.
* opowieści o implementacji rozwiązania z przeszłości
  > Podobnie jak powyższe, przygotowanie się wymaga czasu.  
  Lepiej poświęcić 10 min na przygotowanie przed spotkaniem niż chaotycznie skakać po kodzie przez 30 min
  w trakcie spotkania w poszukiwaniu tej jednej funkcji.

## Kontekst ma znaczenie

Kiedy pracujesz zdalnie, aż nęci, aby "szybko" kogoś poprosić o pomoc, gdy utkniemy w martwym punkcie. To nie jest 
jak praca w biurze, że widać czy ktoś jest zajęty lub ma spotkanie albo jest w trakcie rozmowy z kimś innym.

Aby uzyskać pomoc, musisz wykonać także pracę po swojej stronie:

* Opisz problem, z którym się mierzysz tak dokładnie, jak potrafisz.
* Spisz to, zanim zaczniesz się zdzwaniać.
* Planując spotkanie, stwórz agendę, aby każdy uczestnik mógł się do niego przygotować.

Te kilka prostych kroków spowoduje, że będziesz bardziej wydajny w pracy zdalnej. Swoje problemy będziesz rozwiązywać
szybciej, a współpracownicy będą chętniej Ci pomagać. Przestaną dostawać białej gorączki na widok okienka z czatem,
kiedy do nich napiszesz "Cześć" lub "Szybki call?".

![czesc-1](/static/blog/czesc-1.png "Poklikamy?")
> source: https://deepai.org