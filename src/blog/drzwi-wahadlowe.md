---
author: "Jakub Spórna"
title: "Drzwi wahadłowe"
description: "Nie ma gwarancji sukcesu, ale kiedy nie podejmujesz żadnych decyzji, masz gwarancję, że nigdy nie odniesiesz sukcesu."
date: 2025-02-08
---

# {{ $frontmatter.title }}

<Quote author="Rani Manicka">
Najmniejsza zmiana w jednym człowieku może wywołać wielkie fale w jego przyszłości, a czasem cała przyszłość ludzkości może się odmienić z powodu drobnej decyzji jednej osoby w maluteńkim zakątku świata.
</Quote>

{{ $frontmatter.description }}

Są momenty, kiedy zespół utyka decyzyjnie. Wiele zależy jakiego typu to jest decyzja.  
Bazując na wypowiedzi [Jeffa Bezosa](https://www.inc.com/jeff-haden/amazon-founder-jeff-bezos-this-is-how-successful-people-make-such-smart-decisions.html)
możemy spotkać się z dwoma rodzajami decyzji:

## Typ 1 &nbsp; **Prawie nieodwracalne** (one-way door)

Te decyzje można określić jako _jednokierunkowe_, ponieważ są często strategiczne i mają długofalowe efekty.  
Zmiany ich są uciążliwe i kosztowne. To powoduje, że wymagają dokładnych badań, starannego planowania i udziału 
interesariuszy.

### Architektura projektu / systemu
Fundamentalna decyzja przy wyborze monolit czy mikroserwisy jest trudna do odwrócenia oraz wpływa długoterminowo.

### Wybór języka programowania
Ta zasadnicza decyzja wpływa na rekrutacje zespołu, wydajność oprogramowania czy ekosystem.  
Wybór pomiędzy Pythonem czy Javą znacząco wpłynie na wydajność aplikacji, czy jego skalowalność

### Wybór bazy danych
Decyzja pomiędzy SQL a NoSQL lub wybór silnika bazodanowego spośród MySQL, PostreSQL czy MongoDB ma długotrwałe 
implikacje na wydajność, skalowalność czy spójność danych aplikacji.

## Typ 2 &nbsp; **Łatwe do odwrócenia** (two-way door)

Są to decyzje typu _drzwi wahadłowe_, z którymi spotykamy się najczęściej. Promują innowacje oraz ciągłe doskonalenie,
można je traktować jako kamienie milowe na ścieżce zespołu.  

### Wybór nowego narzędzia czy procesu
Jeżeli nowe narzędzie czy proces nie spotkają się z naszymi oczekiwaniami, możemy się z nich wycofać lub je zmodyfikować
w stosunkowo łatwy sposób. 

### Nowe funkcjonalności
Nowinki w oprogramowaniu, które nie spotkały się z pozytywnym odbiorem użytkowników, można łatwo wyłączyć lub wycofać.

### Zmiany w interfejsie
Małe zmiany w interfejsie użytkownika można wycofać lub poprawić bazując na informacjach zwrotnych czy zbieranych 
metrykach.

### Eksperymenty
Testowanie nowych funkcjonalności w modelu A/B czy nowy model cenowy można wycofać, jeżeli się nie sprawdzą.

## W głąb
Dla przykładu mamy zespół inżynierów oprogramowania, który chce sprawdzić nowe narzędzie do zarządzania projektami.
Po okresie próbnym okazuje się, że nie wpisuje się ono w przyjętą organizację pracy lub nie dostarcza oczekiwanych 
korzyści. W takiej sytuacji można dość łatwo powrócić do poprzedniego narzędzia. Wpływ tej decyzji jest ograniczony
do czasu i wysiłków poświęconych na eksperymenty przez zespół. Jest to cenne doświadczenie, ponieważ zespół się 
rozwinął, a samo narzędzie może nie zostać ostatecznie przyjęte.

Podobnie, jeżeli nowo zaimplementowany proces — dla przykładu inne podejście do _code review_ lub _standup'u_— 
nie przyniesie korzyści lub negatywnie wpłynie na dynamikę zespołu, można go odrzucić, a zespół powróci do starego 
procesu lub go zmodyfikować iteracyjnie, aby lepiej spełniał ich potrzeby.

Istotne jest, aby potraktować powyższe typy jako ogólne kategorie. Określenie, do której kategorii decyzja należy, może 
zależeć od konkretnych okoliczności, skali i potencjalnego wpływu na zespół lub projekt.
W zależności od kontekstu wdrożenie nowego narzędzia lub procesu może być decyzją jednokierunkową, szczególnie jeżeli
jest to związane ze znacznymi nakładami finansowymi, wpływem na znaczną liczbę użytkowników lub proces wdrożenia jest 
złożony, a powrót do poprzednika byłby uciążliwy. 

## Balans
Kluczowe jest zachowanie zrównoważonego podejścia. Trzeba brać pod uwagę potencjalne ryzyko oraz korzyści z niego 
płynące. Należy zachęcać do eksperymentów i innowacji oraz równocześnie edukować o konsekwencjach, aby móc otwarcie 
omawiać potencjalne obawy.

Inżynieria oprogramowania lubi podejście iteracyjne również w podejmowaniu decyzji. Regularne przeglądy i poprawki są 
niezbędne. Weryfikuj założenia, mierz wskaźniki i optymalizuj w razie potrzeby.  
Wspierajmy kulturę, która postrzega **decyzję** jako **okazję do nauki i doskonalenia**.

![drzwi-wahadlowe-1](/static/blog/drzwi-wahadlowe-1.png "Nie stójmy w miejscu!")

<Quote author="Kabaret Moralnego Niepokoju">
S: No to jakie pan chce w końcu drzwi?! Prawe czy lewe?! Prawe czy lewe?!<br>  
K: OBROTOWE!
</Quote>
