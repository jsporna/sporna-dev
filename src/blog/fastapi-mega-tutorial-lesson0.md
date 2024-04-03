---
author: "Jakub Spórna"
title: "FastAPI Mega-Tutorial Lekcja 0"
description: "Dlaczego FastAPI? Dlaczego tutorial? Skąd na to mega pomysł?"
date: 2024-04-03
tags: [python, programowanie, flask, fastapi]
---
# {{ $frontmatter.title }}

<Quote author="Lisa See">
Jesteś jak ptak, który ulatuje prosto w chmurę, już nigdy nie wrócisz tu naprawdę.
</Quote>

{{ $frontmatter.description }}

## Prolog

Kiedyś, dawno temu, kiedy z chmur padał deszcz a nie przechowywało się w nich dane i aplikacje... byłem zwykłym 
SysAdmin'em. Pythona poznawałem wraz z [Fabric](https://github.com/fabric/fabric), zanim na dobre przesiadłem się na 
[Ansible](https://github.com/ansible/ansible). Dla tych narzędzi to miejsce na osobne historie.

Dostałem zadanie, aby stworzyć prostą stronę, która będzie integrowała kilka API i dawała użytkownikowi jakiś prosty UI.
Jako że chciałem wykorzystać to, czego się uczę, w odmętach Internetu trafiłem na framework 
[Flask](https://github.com/pallets/flask). 

Wówczas to był mini framework. Wiele rzeczy trzeba było sobie dopisać samemu. Nie wszystko dla początkującego adepta 
Pythona było oczywiste. Potrzebowałem się na czymś oprzeć i w sieci trafiłem na bardzo fajny 
[tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world-legacy) 
Miguela Grinberga z 2012 roku, autora książki [Flask Web Development](https://amzn.to/3lE2mok).
Doczekał się on rewizji w [2018](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world-2018)
i w [2023](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world).


## Akcja właściwa

Przez lata pracy zawodowej oraz tworzenia własnych pomniejszych projektów wykorzystywałem framework Flask bardzo często 
do mniejszych i większych rzeczy.

Wraz z moim przejściem do Chmury zabrałem ze sobą Flask'a.

Rozwijałem projekty integrując z coraz większą liczbą systemów, serwisów, usług. Starałem się być na bieżąco 
z nowinkami, jakie pojawiają się w nowych odsłonach framework'u.


## Epilog?

Czy to koniec mojej przygody z Flask'iem? Nie wydaje mi się!

Nastał czas ruszyć do przodu. Poznać coś nowego.

Wybór padł na [FastAPI](https://github.com/tiangolo/fastapi). Kolejny framework w Pythonie. 

Wraz z nim w tandemie przychodzi [Pydantic](https://github.com/pydantic/pydantic), biblioteka odpowiedzialna 
za walidacje danych i budowanie modeli.

## Didaskalia

Moim planem nie jest skopiowanie tutoriala Miguela z kosmetycznymi zmianami. Założenie jest aby nauczyć się jak 
najwięcej w ramach nowego framework'a i powiązanych bibliotek. Oryginalny tutorial jest drogowskazem. Wyznacznikiem
kamieni milowych jakie można osiągnąć w każdej lekcji.