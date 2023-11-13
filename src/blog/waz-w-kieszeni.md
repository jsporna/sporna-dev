---
author: Jakub Spórna
title: Wąż w kieszeni
description: Python jako język programowania uważany jest za bardzo czytelny i samo opisujący się. Charakteryzuje się bardzo zwięzłą formą. Wiele osób miało już okazje rozpisywać się o składni i semantyce tego języka. Ja pójdę krok dalej. Wykorzystam wpływy krakowskie i poznańskie aby zaprzyjaźnić węża z kieszeni z Pythonem - spróbuje zaprezentować minimalizacje już minimalistycznego kodu.
date: "2021-01-09"
---
# {{ $frontmatter.title }}

<Quote author="Ernst Friedrich Schumacher">
Małe jest piękne.
</Quote>

{{ $frontmatter.description }}

## Inspiracja

Ostatnimi czasy **Maciek Kusz** z bloga [testerembyc.pl](https://testerembyc.pl/) pochylił się nad frameworkiem do testów w ramach 16 linii kodu. Swoje rozwiązanie stopniował i wzbogacał funkcjonalnie z zachowaniem założonego limitu. Nie ukrywam miałem swój wpływ na kod ale tylko od strony składniowo-semantycznej bez ingerencji w funkcjonalność.

## 3 grosze

Swój wpływ udokumentowałem w [forku repozytorium](https://github.com/jsporna/the_smallest_rest_api_testing_framework) **Maćka**. Przybliżę w tym miejscu swoje zmiany:

Jako, że plik z kodem będzie uruchamiany a nie importowany to sprawdzanie czy to jest uruchomiony skrypt jest kodem nadmiarowym. Uważam, że ta zmiana nie wymaga większego komentarza.

```python
if __name__ == '__main__':
    unittest.main(testRunner=xmlrunner.XMLTestRunner())
```

```python
unittest.main(testRunner=xmlrunner.XMLTestRunner())
```

---

Większa zamiana dotyczy zastąpienia definicji funkcji na lambdę.  
Pierwotnie była zdefiniowana funkcja, która zawierała w sobie definicję funkcji wewnętrznej wykorzystanej do tworzenia atrybutu w ramach przekazanej instancji klasy.

```python:line-numbers
def add_test(cls, name, data):
    def abstract_test(self):
       self.assertEqual(requests.request(**data['request']).status_code, data['assert']['statusCode'])
    setattr(cls, name, abstract_test)
```

```python:line-numbers
setattr(Tests, test_name, lambda self: self.assertEqual(requests.request(**test_data['request']).status_code, test_data['assert']['statusCode']))
```

```python:line-numbers
func = lambda data: lambda self: self.assertEqual(requests.request(**data['request']).status_code, data['assert']['statusCode'])
setattr(Tests, test_name, func(test_data))  
```

Była ona wywoływana w ramach pętli:

```python:line-numbers
with open('tests.json', 'r') as jfile:
    for test_name, test_data in json.load(jfile).items():
        add_test(Tests, test_name, test_data)
```

Zastąpienie funkcji wewnętrznej poprzez lambdę, która została umieszczona w wywołaniu funkcji **settattr** pozwoliło zaoszczędzić kilka linii kodu bez utraty funkcjonalności.  
Niestety pojawił się tu mały problem. Pomimo pętli na danych lambda została utworzona raz a przekazywane do jej wnętrza zmienne zostały przekazane poprzez referencję a nie wartość. Skutkiem tego jest utworzenie atrybutów o tych samych wartościach - wartościach wczytanych w ostatnim przebiegu pętli **for**.  
Rozwiązaniem na to jest wydzielenie lambdy do osobnej linii i obudowanie jej w kolejną lambdę. Pozwala to na przekazania niezbędnych zmiennych poprzez wartość. W ten sposób do funkcji **setattr** jest przekazane wywołanie lambdy, która zwraca niezbędny wywoływalny obiekt oczekiwany przez tą funkcję.

---

Kolejna optymalizacja nastąpiła już na kodzie, który Maciek wzbogacił o dodatkowe funkcjonalności.

```python:line-numbers
for file_name in glob.iglob("*.json"):
    with open(file_name, 'r') as json_file:
        test = lambda data: lambda self: abstract_test(self, data)
        suite_name = file_name.split('.')[0]
        globals()[suite_name] = type(suite_name, (unittest.TestCase,), {name: test(data) for name, data in json.load(json_file).items()})
```

```python:line-numbers
test = lambda data: lambda self: abstract_test(self, data, requests.request(**data['request']))
globals().update({file_name: type(file_name, (unittest.TestCase, ), {name: test(data) for name, data in json.load(open(file_name, 'r')).items() }) for file_name in glob.iglob("*.json")})
```

Od czego wyszliśmy? Iteracja po plikach, które są otwierane poprzez **context managera**, przygotowanie lambdy (**test**) oraz nazwy dla klasy (**suite_name**) oraz dopisywanie do słownika **globals()** nowych instancji klasy dziedziczącej po **unittest.TestCase**. Tworzenie instancji klasy zawiera w sobie **dict comprehension**, które iteruje po zawartości wczytanego pliku.

Oszczędność została osiągnięta poprzez zagnieżdżenie **list comprehension** w **dict comprehension** oraz kolejne zagnieżdżenie w **dict comprehension**.  
Idąc od najbardziej wewnętrznej struktury - **list comprehension** zastępuje zewnętrzną pętlę for.  
Jest ona zagnieżdżona w **dict comprehension** odpowiedzialnym za iteracje po danych wczytanych z plików czyli rozszerzyliśmy oryginalną strukturę. Kolejno został dodany zewnętrzny **dict comprehension** w celu wygenerowania słownika, którym rozszerzymy **globals()** zamiast dopisywać pojedyncze klucze i ich wartości.

### Rachunek

Dwukrotnie udało wspólnymi siłami zredukować kod z 15/16 do 10 linii.

## 9 groszy

### Mamy

Mieliśmy funkcje bez funkcji - lambda.  
Mieliśmy klasę bez definicji - type -> [opis Maćka](https://testerembyc.pl/posts/jeszcze-mniejszy-framework-do-testow-w-pythonie/#type).  
Mieliśmy instancje klasy bez klasy - setattr.  
Mieliśmy globalne obiekty bez obiektów - globals().

### Co jeszcze?

Co tu jeszcze można dodać bez dodawania?  
Odwróciłem rozwiązanie Maćka o 180° i postanowiłem stworzyć REST API  w jak najmniejszej linii kodu a zarazem żeby było w pełni funkcjonalne - funkcjonalnością odpowiadało testom wykonywanym przez framework.
Wykorzystałem do tego framework [fastapi](https://fastapi.tiangolo.com/). Ale co tu jest innego niż do tej pory było?
Będziemy generować funkcje, które posiadają dekorator czyli funkcję, której argumentem staje się udekorowana funkcja.

```python:line-numbers
import fastapi

app = fastapi.FastAPI()

@app.get("/")
def index():
    return {"message": "Hello from FastAPI"}
```

### Pierwsze spojrzenie

No to można powiedzieć, jak mamy funkcję dekoratora no to problem z głowy.

```python
app.get("/", lambda: {"message": "Hello from FastAPI"})
```

Niestety to nie zadziała ponieważ ani funkcja **app.get()** ani funkcja przez nią zwracana **app.router.post()** nie posiada jako argument funkcji dekorowanej.

### Otchłań

Idąc po nici do kłębka możemy się dowiedzieć, że **app.router** jest instancją **fastapi.routing.APIRouter**.  
No to schodzimy niżej i fedrujemy. Klasa **APIRouter** w swoich metodach posiada wspomnianą funkcję **get**, która natomiast zwraca funkcje **api_route**, która nadal nie posiada argumentu dla dekorowanej funkcji. Dopiero ta ostatnia zwraca funkcję **add_api_route**, której drugim argumentem jest szukane **func**. Sukces!

```python
app.get() → fastapi.FastAPI.get()
↓
app.router.get() → fastapi.routing.APIRouter.get()
↓
app.router.api_route() → fastapi.routing.APIRouter.api_route()
↓
app.router.add_api_route() → fastapi.routing.APIRouter.add_api_route()
```

I co teraz z tym możemy zrobić? Bardzo wiele.  
Poczynając od określenia ścieżki (**path**), metod (**methods**), kodu odpowiedzi (**status_code**), możemy określić model odpowiedzi (**response_model**) i wiele meta parametrów odpowiedzialnych za opis słowno-muzyczny.

### Piekło czy Niebo

Docelowo otrzymujemy:

```python
app.router.add_api_route("/", lambda: {"message": "Hello from FastAPI"})
```

Tworząc strukturę dla endpointów podobną do tej dla testów:

```json
{
  "name": {
    "path": str,
    "methods": List[str],
    "status_code": int,
    "returns": List[str]
  }
}
```

Jesteśmy wstanie stworzyć działające REST API serwis dosłownie w kilku liniach kodu:

```python:line-numbers
import fastapi, json

app = fastapi.FastAPI()

for name, values in json.load(open("routes.json", "r")).items():
   func = lambda data: lambda: {item: item for item in data}
   app.router.add_api_route(values['path'], func(values.get('returns', [])), name=name, methods=values['methods'], status_code=values['status_code'])
```

Można z linii 5 i 7 zrobić list comprehension.  
Funkcje add_api_route możemy zamienić na operacjach na liście app.router.routes.  
...

### Napiwek

Tu nasuwa się pytanie czy jaka "optymalizacja" nie ma końca? Co tym osiągniemy: programistyczne Piekło czy Niebo?

Nie jest sztuka dla sztuki! W dobie gdzie wszystko jest w Internecie, jest online ogrom danych jest pobieranych, przetwarzanych uruchamianych. Ciągły rozwój zapewnia coraz szybszy i szerszy dostęp do sieci Internet ale są miejsca gdzie kod jest limitowany.

Za przykład posłuży mi [AWS Lambda](https://aws.amazon.com/lambda/).  
Posiada ona limit 50MB spakowanego kodu, 250MB rozpakowanego kodu, 3MB edytor w konsoli.
250MB to ogrom ale AWS Lambda liczy nie tylko kod napisany przez nas ale również wszystkie moduły niezbędne do uruchomienia tego kodu.  
Za przykład niech posłuży moje 7 linii kodu - to jedyne 324B. Natomiast wszystkie niezbędne moduły to już 88MB.

Kiedy zależności doprowadzą nas do limitu to optymalizować / minimalizować możemy już tylko swój kod.

## 10 groszy

Jedna rzecz nie została utworzona w sposób generyczny: **funkcja z dynamiczną listą argumentów**. A to już nie jest obszar gdzie ubywa kodu, wręcz przeciwnie to tu kod płynie szerokim strumieniem.  
Czym to możemy osiągnąć? Python w swojej standardowej bilbiotece ma moduł **inspect** a w nim jest klasa **Signature**.

Ale już więcej nie powiem. Pozostawiam do zgłębienia dla chętnych i szczerze potrzebujących takiego podejścia.