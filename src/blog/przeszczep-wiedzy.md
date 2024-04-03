---
author: "Jakub Spórna"
title: "Przeszczep wiedzy"
description: "Kolejna praca, firma, kolejny zespół i projekt. Kolejna rzeka, do której wchodzę. Zanim zacznę czuć się 
pewnie w nurcie muszę poznać prądy, meandry i zakola. To jak szybko pójdę na głęboką wodą zależy od jej 
charakterystyki i dokładności opisu."
date: 2020-11-06
---
# {{ $frontmatter.title }}

<Quote author="Mikołaj Kopernik">
Zdawać sobie sprawę z tego, że wiemy, co wiemy, i zdawać sobie sprawę z tego, że nie wiemy, czego nie wiemy – to jest 
prawdziwa wiedza.
</Quote>

{{ $frontmatter.description }}

## Onboarding

Jestem nowy → jestem onboardowany.  
**Co to znaczy?**  
W wielkim uproszczeniu jestem wtajemniczony w sekrety działania organizacji 
(Tayla N. Bauer - [„Onboarding New Employees: Maximizing Success”](https://www.shrm.org/foundation/ourwork/initiatives/resources-from-past-initiatives/Documents/Onboarding%20New%20Employees.pdf) - Four C’s):
* poznaję procedury
* kulturę (tą formalną i nieformalną)
* poznaję swoje cele i obowiązki
* integruje się z zespołem.

O szczegółach tego procesu i jego istotności już niejedna osoba pisząc zjadła zęby lub oparła swój przewód doktorski.  
Ja chciałbym się skupić na “celach i obowiązkach” czyli tym czym mam się na co dzień zajmować, gdzie mam wykorzystać 
swoją wiedzę już nabytą i bagaż doświadczeń. Ale zanim to nastąpi muszę poznać wewnętrzne know-how, wiedzę plemienną, 
zaklęcia szamana.

## Księga zaklęć

![przeszczep-wiedzy-1](/static/blog/przeszczep-wiedzy-1.png "Księga zaklęć")

### Dokumentacja techniczna

To z czym stykam się na początku. Próbuje odnaleźć początek oraz koniec, interesujące obszary, połączyć rozsypane 
puzzle w całość. Z tym bywa różnie, ponieważ jest tworzona ad hoc kiedy ktoś odchodzi lub jako wypełniacz, w formie 
tytułu i 2 zdań wrzucone w przerwie między spotkaniami z dopiskiem TODO.  
Zamiast tworzyć się obraz infrastruktury, w które będę “pływał”, wyrasta lista pytań, na które będę szukał 
odpowiedzi - zazwyczaj zdawkowych lub skończe jak kulka odbijająca się między bumperami w pinballu -  między ludźmi 
w firmie, - którzy rzekomo coś wiedzą, a ostatecznie zostanę odesłany do leada.

![przeszczep-wiedzy-2](/static/blog/przeszczep-wiedzy-2.png "Dokumentacja techniczna")

Z doświadczenia wiem, że istnieją firmy, w których dokumentacja nie istniała, bo
* wszystkim zajmowała się jedna osoba
* odpowiedzialna była firma zewnętrzna

Do momentu aż zespół się nie powiększył lub odpowiedzialność obszarowa nie została przeniesiona wewnętrznie do firmy 
nie było konieczności dokumentować pracy.  
Rozpoczęcie pracy w takiej firmie jest bardzo trudne, każde zadanie, nawet najprostsze, jest bardzo wymagające. 
Nieprzewidziane problemy i pułapki czają się na każdym kroku.


**Co i jak można poprawić?**

Przede wszystkim należy tworzyć dokumentacje! Można do niej podejść w dwojaki sposób:
* tworzyć ją przed zadaniem
* tworzyć ją po zadaniu

### Documentation Driven Development (DDD)

_Dokumentacja pociąga za sobą zadanie._

Pierwszym podejściem jest tworzenie dokumentacji przed zadaniem. Zanim zadanie zostanie spisane powinno być już 
przemyślane i zaprojektowane.  
Podejście jest analogiczne do Test Driven Development, w którym są pisane testy zanim zostanie napisany kod, który ma 
zostać przetestowany.

### Definition of Done

_Zadanie pociąga za sobą dokumentację._

Drugim podejściem jest tworzenie dokumentacji jako jeden z aspektów definicji ukończenia zadania. Samo “rozwiązanie” 
zadania nie czyni go skończonym bez udokumentowania tego.

Niezależnie kiedy zostanie dokumentacja spisana powinna zawierać:
* część opisową: motywację, projekt, architekturę
* część graficzną: schematy, grafy
* część techniczną: technologię, zależności i wymagania, obszar zastosowania, przykłady użycia

To kiedy jest tworzona dokumentacja przesuwa odpowiedzialność za jest stworzenie:
* przed → tworzący / zlecający zadanie
* po → wykonujący zadanie

Moim zdaniem oba podejścia się uzupełniają i wnoszą wartościowe rzeczy w właściwym dla siebie czasie.

## Arcymag

![przeszczep-wiedzy-3](/static/blog/przeszczep-wiedzy-3.png "Arcymag")

### Tech / Team Lead

Po dokumentacji przychodzi klika chwil z Leadem, który snuje swą opowieść o wszystkim czym zajmuje się zespół, robi 
przekrój technologii. Następnie słucha mojej opowieści o doświadczeniach i technologiach, następnie stara się mnie 
umiejscowić w zespole, dopasować zadania, wspólnie wykreować cele.  
Po tym następuje seria pytań, na które nie znalazłem odpowiedzi lub odpowiedź mnie nie usatysfakcjonowała. Kolejne 
puzzle do układanki. Świat staje się wyraźniejszy.

### Trzy strony medalu

W życiu doświadczyłem pracować bez leadera, być w zespole z leaderem oraz być leaderem dla zespołu.

Będąc w jednoosobowym zespole / dziale, jest się sterem, żeglarzem i okrętem zarazem. Można nie mieć żadnego rygoru 
co do prowadzenia dokumentacji, a jedynie raportować zwierzchnikom stan wykonanych zadań.  
Krótkoterminowo → ok, "nie marnujemy" czasu na dokumentowanie.  
Długoterminowo → brak dokumentacji, może wydłużyć realizacje prostych zadań, które już wystąpiły, utrudnić rozszerzenie
zespołu.  
Nadając sobie reżim procedur, pomimo narzutu czasowego, porządkuje się swoją pracę, stając się Profesjonalistą, zyskując 
szacunek "ludzi pracy".

Należąc do zespołu, który ma swojego przewodnika, liczy się na spójną wizję procedur panujących w zespole, określona 
forma opisu "świata" - w tym dokumentacji. To one nadają zespołowi rytm i spójność, aby działał efektywnie.  
Te formalizmy nie są objawione raz na zawsze, a cały zespół powinien je kreować i modyfikować, aby zwiększać swoją 
wydajność i skuteczność. Nie pomijam tu juniorów, którzy często mają świeże spojrzenie w przeciwieństwie do seniorów, 
którzy wybierają sprawdzone pomysły i chcą je wdrażać.

Natomiast przyjmując role leadera samemu poczułem, że zespół oczekuje ode przejrzystości w decyzjach, jasno określonego
kierunku, udokumentowanych procedur. Nie chodzi o bycie wszechwiedzącym czy nieomylnym, chodzi o bycie spoiwem dla 
zespołu - jak glej dla neuronów - pełni funkcje ochronną, jest łącznikiem z innymi zespołami, "karmi" wiedzą, odpowiada
z transfer wiedzy.

To leader jest odpowiedzialny za systematyczność, powinien być wzorcem do naśladowania dla innych, wierzyć w członków 
zespołu i ich możliwości!

### Szamani

![przeszczep-wiedzy-4](/static/blog/przeszczep-wiedzy-4.png "Szamani")

Wyspecjalizowane osoby w zespole, którzy mają duże doświadczenie z wybranymi technologiami. To oni są doradcami liderów
i architektów. Jak coś szwankuje w pewnym obszarze a dokumentacja producenta i wewnętrzna nie pomagają to oni w środku
nocy z zamkniętymi oczami wiedzą co i gdzie.

Mieć w zespole ekspertów, którzy niejednokrotnie są pasjonatami, a po godzinach partycypują w rozwój oprogramowania 
FLOSS, to zaszczyt i ogromna szansa na możliwość nauczenia się wielu ciekawych rzeczy. Często to indywidualiści, ale 
i rzemieślnicy, którzy znający swój fach a ich wiedza jest olbrzymia w porównaniu z "przeciętnym" seniorem.  
Niestety nie przekłada się to na umiejętność przekazywania wiedzy, spisywania jej w postaci dokumentacji czy prowadzeniu
szkoleń lub prezentacji. Nie ma tu złotej metody jak się uczyć od ekspertów, nabywać wiedzę szamańską — wiem, że należy
to robić i to bardzo jest cenne!

## Rzeka wiedzy

![przeszczep-wiedzy-5](/static/blog/przeszczep-wiedzy-5.png "Rzeka wiedzy")

Każdego dnia wchodzę do tej rzeki, ucząc się czegoś nowego, dzieląc się wiedzą z innymi oraz wykorzystując ją w życiu 
nie tylko zawodowym.  Wszechobecny Internet przepełniony informacjami moim zdaniem deprecjonuje wiedzę. Dostrzegam 
tendencję do poszukiwania gotowych rozwiązań, a nie wiedzy, która pozwoli samemu do nich dojść.  
Nie mamy czasu na naukę, nie mamy czasu, aby dzielić się wiedzą!  
Uważam, że należy pogłębiać swoją wiedzę i kwalifikację, wykorzystywać każdy dzień. Zarazem nie popadać w skrajność, aby
posiąść wiedzę całego świata, która i tak nam nie jest potrzebna.