<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Pytania dotyczące JavaScript</h1>

---

<span>Publikuję pytania wielokrotnego wyboru dotyczące JavaScriptu na swoich [Instagram](https://www.instagram.com/theavocoder) **stories**, które również zamieszczę tutaj! Ostatnia aktualizacja: <a href=#20200612><b>27 Czerwca</b></a>

Od podstawowych do zaawansowanych: sprawdź, jak dobrze znasz JavaScript, odśwież swoją wiedzę lub przygotuj się do rozmowy kwalifikacyjnej! :muscle: :rocket: Regularnie aktualizuję to repozytorium nowymi pytaniami. Odpowiedzi znajdują się w ukrytych zakładkach poniżej pytań - po prostu kliknij, aby je rozwinięć. To dla zabawy, powodzenia! :heart:</span>

Nie krępuj się ze mną kontaktować! 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a>
</div>

| Śmiało używaj ich w projekcie! 😃  Byłabym _bardzo_ wdzięczna za referencje do tego repozytorium, tworzę pytania i wyjaśnienia (tak, jestem smutna lol) i społeczność bardzo mi pomaga w utrzymaniu i ulepszaniu go! 💪🏼 Dziękuję i baw się dobrze!   |
|---|

---

<details><summary><b> Zobacz 19 dostępnych tłumaczeń 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼</b></summary>
<p>

- [🇸🇦 العربية](./ar-AR/README_AR.md)
- [🇪🇬 اللغة العامية](./ar-EG/README_ar-EG.md)
- [🇧🇦 Bosanski](./bs-BS/README-bs_BS.md)
- [🇩🇪 Deutsch](./de-DE/README.md)
- [🇪🇸 Español](./es-ES/README-ES.md)
- [🇫🇷 Français](./fr-FR/README_fr-FR.md)
- [🇮🇩 Indonesia](./id-ID/README.md)
- [🇮🇹 Italiano](./it-IT/README.md)
- [🇯🇵 日本語](./ja-JA/README-ja_JA.md)
- [🇰🇷 한국어](./ko-KR/README-ko_KR.md)
- [🇳🇱 Nederlands](./nl-NL/README.md)
- [🇧🇷 Português Brasil](./pt-BR/README_pt_BR.md)
- [🇷🇺 Русский](./ru-RU/README.md)
- [🇹🇭 ไทย](./th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](./tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](./uk-UA/README.md)
- [🇻🇳 Tiếng Việt](./vi-VI/README-vi.md)
- [🇨🇳 简体中文](./zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](./zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. Jaki jest wynik?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Wewnątrz funkcji najpierw deklarujemy zmienną `name` za pomocą słowa kluczowego `var`. Oznacza to, że zmienna jest "wyciągana" (przestrzeń pamięci jest tworzona) z domyślną wartością `undefined` podczas fazy tworzenia, aż do momentu, gdy naprawdę definiujemy zmienną. W linii, w której próbujemy wyświetlić w konsoli zmienną `name`, jeszcze jej nie zdefiniowaliśmy, więc nadal przechowuje wartość `undefined`.

Zmienne zadeklarowane za pomocą słowa kluczowego `let` (i `const`) są wyciągane, ale w przeciwieństwie do `var`, nie są <i>inicjalizowane</i>. Nie są dostępne przed linią, na której je deklarujemy (inicjalizujemy). Nazywa się to "czasową strefą martwą" (temporal dead zone). Gdy próbujemy uzyskać dostęp do zmiennych przed ich zadeklarowaniem, JavaScript generuje błąd `ReferenceError`.

</p>
</details>

---

###### 2. Jaki jest wynik?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Ze względu na kolejkę zdarzeń w JavaScript, funkcja zwrotna `setTimeout` jest wywoływana _po_ wykonaniu pętli. Ponieważ zmienna `i` w pierwszej pętli została zadeklarowana za pomocą słowa kluczowego `var`, jej wartość była globalna. Podczas pętli inkrementowaliśmy wartość `i` o `1` za każdym razem, używając operatora jednoargumentowego `++`. W momencie wywołania funkcji zwrotnej `setTimeout`, `i` miało wartość `3` w pierwszym przykładzie.

W drugiej pętli zmienna `i` została zadeklarowana za pomocą słowa kluczowego `let`: zmienne zadeklarowane za pomocą słowa kluczowego `let` (i `const`) mają zakres blokowy (blokiem jest cokolwiek między `{ }`). Podczas każdej iteracji `i` będzie miało nową wartość, a każda wartość będzie miała zakres wewnątrz pętli.

</p>
</details>

---

###### 3. Jaki jest wynik?

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Zwróć uwagę, że wartość `diameter` jest zwykłą funkcją, podczas gdy wartość `perimeter` jest funkcją strzałkową.

W przypadku funkcji strzałkowych, słowo kluczowe `this` odnosi się do bieżącego otaczającego zakresu, w przeciwieństwie do zwykłych funkcji! Oznacza to, że gdy wywołujemy `perimeter`, nie odnosi się ono do obiektu shape, ale do swojego otaczającego zakresu (np. okna).

Na tym obiekcie nie ma wartości `radius`, co powoduje zwrócenie `NaN` (Not a Number).

</p>
</details>

---

###### 4. Jaki jest wynik?

```javascript
+true;
!'Lydia';
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Operator jednoargumentowy plus próbuje przekonwertować operand na liczbę. `true` jest równoważne `1`, a `false` jest równoważne `0`.

Łańcuch znaków `'Lydia'` jest wartością prawdziwą. Tak naprawdę pytamy, "czy ta wartość prawdziwa jest fałszywa?". To zwraca `false`.

</p>
</details>

---

###### 5. Które jest prawdziwe?

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` is not valid
- B: `mouse[bird.size]` is not valid
- C: `mouse[bird["size"]]` is not valid
- D: All of them are valid

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W JavaScript wszystkie klucze obiektów są stringami (chyba że są to symbole). Nawet jeśli nie wpisujemy ich jako stringi, zawsze są one konwertowane na stringi wewnątrz.

JavaScript interpretuje (lub "odpakuowuje") instrukcje. Gdy używamy notacji nawiasów kwadratowych, interpreter widzi pierwszy otwierający nawias `[` i kontynuuje do momentu znalezienia zamykającego nawiasu `]`. Dopiero wtedy ocenia tę instrukcję.

`mouse[bird.size]`: Najpierw ocenia `bird.size`, które wynosi `"small"`. `mouse["small"]` zwraca `true`.

Jednakże, w przypadku notacji kropkowej, to się nie dzieje. `mouse` nie ma klucza o nazwie `bird`, co oznacza, że `mouse.bird` jest `undefined`. Następnie pytamy o `size` używając notacji kropkowej: `mouse.bird.size`. Ponieważ `mouse.bird` jest `undefined`, tak naprawdę pytamy o `undefined.size`. To nie jest poprawne i spowoduje błąd podobny do `Cannot read property "size" of undefined` (Nie można odczytać właściwości "size" z undefined).

</p>
</details>

---

###### 6. Jaki jest wynik?

```javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W JavaScript wszystkie obiekty komunikują się ze sobą przez _referencje_, gdy są sobie przypisywane.

Na początku zmienna `c` przechowuje referencję do obiektu. Później przypisujemy zmiennej `d` tę samą referencję, którą ma `c`, do tego obiektu.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Kiedy zmieniasz jeden obiekt, zmieniasz je wszystkie.

</p>
</details>

---

###### 7. Jaki jest wynik?

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

`new Number()` jest wbudowanym konstruktorem funkcji. Chociaż wygląda jak liczba, nie jest faktycznie liczbą: ma wiele dodatkowych funkcji i jest obiektem.

Gdy używamy operatora `==` (operator równości), sprawdza on jedynie, czy mają tą samą _wartość_. Oba mają wartość `3`, więc zwraca `true`.

Jednak gdy używamy operatora `===` (operator ścisłej równości), zarówno wartość, jak i typ powinny być takie same. Tutaj nie są: `new Number()` nie jest liczbą, lecz **obiektem**. Oba zwracają `false`.

</p>
</details>

---

###### 8. Jaki jest wynik?

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Funkcja `colorChange` jest statyczna. Metody statyczne są zaprojektowane tak, aby istniały tylko w konstruktorze, w którym zostały utworzone, i nie mogą być przekazywane do żadnych potomków (children) ani wywoływane na instancjach klasy. Ponieważ `freddie` jest instancją klasy Chameleon, funkcja nie może być na niej wywołana. Otrzymujemy błąd `TypeError`.

</p>
</details>

---

###### 9. Jaki jest wynik?

```javascript
let greeting;
greetign = {}; // Celowa Literówka!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Kod wypisuje w konsoli obiekt, ponieważ właśnie utworzyliśmy pusty obiekt w obiekcie globalnym! Gdy pomyłkowo wpisaliśmy `greeting` jako `greetign`, interpreter JavaScript faktycznie zobaczył to jako:

1. `global.greetign = {}` w Node.js.
2. `window.greetign = {}`, `frames.greetign = {}` i `self.greetign` w przeglądarkach.
3. `self.greetign` w web workerach.
4. `globalThis.greetign` we wszystkich środowiskach.

Aby temu zapobiec, możemy użyć `"use strict"`. Powoduje to, że musisz zadeklarować zmienną przed jej przypisaniem.

</p>
</details>

---

###### 10. Co się dzieje, gdy to zrobimy?

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: Nothing, this is totally fine!
- B: `SyntaxError`. You cannot add properties to a function this way.
- C: `"Woof"` gets logged.
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Jest to możliwe w JavaScript, ponieważ funkcje są obiektami! (Wszystko oprócz typów prymitywnych jest obiektem)

Funkcja jest specjalnym rodzajem obiektu. Kod, który sam piszesz, nie jest właściwą funkcją. Funkcja jest obiektem posiadającym właściwość, która jest wywoływalna.

</p>
</details>

---

###### 11. Jaki jest wynik?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W JavaScript funkcje są obiektami, więc metoda `getFullName` jest dodawana do samego obiektu funkcji konstruktora. Dlatego możemy wywołać `Person.getFullName()`, ale `member.getFullName` zwraca błąd `TypeError`.

Jeśli chcesz, aby metoda była dostępna dla wszystkich instancji obiektów, musisz dodać ją do właściwości prototype:

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

</p>
</details>

---

###### 12. Jaki jest wynik?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D: `Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Dla `sarah`, nie użyliśmy słowa kluczowego `new`. Kiedy używamy `new`, `this` odwołuje się do nowego pustego obiektu, który tworzymy. Jednak jeśli nie dodajemy `new`, `this` odwołuje się do **globalnego obiektu**!

Mówiliśmy, że `this.firstName` równa się `"Sarah"`, a `this.lastName` równa się `"Smith"`. Czyli faktycznie zdefiniowaliśmy `global.firstName = 'Sarah'` i `global.lastName = 'Smith'`. `sarah` pozostaje `undefined`, ponieważ nie zwracaliśmy żadnej wartości z funkcji `Person`.

</p>
</details>

---

###### 13. Jakie są trzy fazy propagacji zdarzeń?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

W fazie **capturing (przechwytywanie)**, zdarzenie przechodzi przez elementy nadrzędne w doł do elementu docelowego. Następnie dociera do elementu **target (cel)** i rozpoczyna się **bubbling (bąbelkowanie)**.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Wszystkie obiekty mają prototypy.

- A: true
- B: false

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Wszystkie obiekty mają prototypy, z wyjątkiem **obiektu bazowego**. Obiekt bazowy jest obiektem utworzonym przez użytkownika lub obiektem utworzonym przy użyciu słowa kluczowego `new`. Obiekt bazowy ma dostęp do niektórych metod i właściwości, takich jak `.toString`. Jest to powód, dla którego można używać wbudowanych metod JavaScript! Wszystkie takie metody są dostępne w prototypie. Chociaż JavaScript nie może znaleźć ich bezpośrednio w twoim obiekcie, przechodzi w dół łańcucha prototypów i je tam znajduje, co czyni je dostępnymi dla ciebie.

</p>
</details>

---

###### 15. Jaki jest wynik?

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

JavaScript jest językiem **dynamicznie typowanym**: nie określamy typów niektórych zmiennych. Wartości mogą być automatycznie konwertowane na inny typ bez wiedzy użytkownika, co nazywa się _implicit type coercion_. **Koercja (Wymuszenie)** to konwersja z jednego typu na inny.

W tym przykładzie JavaScript konwertuje liczbę `1` na string, aby funkcja miała sens i zwróciła wartość. Podczas dodawania typu liczbowego (`1`) i typu łańcuchowego (`'2'`), liczba traktowana jest jako string. Możemy łączyć stringi takie jak `"Hello" + "World"`, więc to co się tutaj dzieje to `"1" + "2"`, które zwraca `"12"`.

</p>
</details>

---

###### 16. Jaki jest wynik?

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Operator jednoargumentowy **Postfix** `++`:

1. Zwraca wartość (ten zwraca `0`)
2. Zwiększa wartość (liczba wynosi teraz `1`)

Operator jednoargumentowy **Prefix**  `++`:

1. Zwiększa wartość (liczba wynosi teraz `2`)
2. Zwraca wartość (to zwraca `2`)

number zwraca `0 2 2`.

</p>
</details>

---

###### 17. Jaki jest wynik?

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

W przypadku użycia `template strings`, wartością pierwszego argumentu jest zawsze tablica wartości łańcuchowych (string). Pozostałe argumenty otrzymują wartości przekazanych wyrażeń!

</p>
</details>

---

###### 18. Jaki jest wynik?

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Podczas testowania równości, liczby i ciągi znaków są porównywane przez ich _wartości_, a obiekty są porównywane przez ich _referencję_. JavaScript sprawdza, czy obiekty mają odwołanie do tej samej lokalizacji w pamięci.

Dwa obiekty, które porównujemy, nie mają tej samej lokalizacji w pamięci: obiekt, który przekazujemy jako parametr, odwołuje się do innej lokalizacji w pamięci niż obiekt, którego użyliśmy do sprawdzenia równości.

Dlatego też zarówno `{ age: 18 } == { age: 18 }` i `{ age: 18 } == { age: 18 }` zwracają `false`.

</p>
</details>

---

###### 19. Jaki jest wynik?

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Parametr reszty (`...args`) pozwala nam "zbierać" wszystkie pozostałe argumenty do tablicy. Tablica to obiekt, więc `typeof args` zwraca `"object"`.

</p>
</details>

---

###### 20. Jaki jest wynik?

```javascript
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Dzięki `"use strict"` możesz upewnić się, że przypadkowo nie zadeklarujesz zmiennych globalnych. Nigdy nie zadeklarowaliśmy zmiennej `age`, a ponieważ używamy `"use strict"`, zostanie zgłoszony błąd referencji. Gdybyśmy nie użyli `"use strict"`, to by zadziałało, ponieważ właściwość `age` zostałaby dodana do obiektu globalnego.

</p>
</details>

---

###### 21. Jaka jest wartość `sum`?

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

`eval` oblicza kod, który przekazywany jest jako ciąg znaków. Jeśli jest to wyrażenie, tak jak w tym przypadku, oblicza ono wyrażenie. Wyrażenie to `10 * 10 + 5`. Zwraca liczbę `105`.

</p>
</details>

---

###### 22. Jak długo cool_secret jest dostępny?

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: Dane nigdy nie zostaną utracone.
- B: Gdy użytkownik zamyka kartę.
- C: Gdy użytkownik zamyka cały przeglądarkę, a nie tylko kartę.
- D: Gdy użytkownik wyłącza swój komputer.

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Dane przechowywane w `sessionStorage` są usuwane po zamknięciu _zakładki_.

Gdybyś użył `localStorage`, dane pozostałyby tam na zawsze, chyba że na przykład wywołano by `localStorage.clear()`.

</p>
</details>

---

###### 23. Jaki jest wynik?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Za pomocą słowa kluczowego `var` można zadeklarować wiele zmiennych o tej samej nazwie. Zmienna będzie wtedy przechowywać najnowszą wartość.

Nie można tego zrobić za pomocą `let` lub `const`, ponieważ są one blokowe.

</p>
</details>

---

###### 24. Jaki jest wynik?

```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Wszystkie klucze obiektów (z wyjątkiem symboli) są łańcuchami znaków pod względem samego obiektu, nawet jeśli nie napiszesz ich samodzielnie jako łańcucha znaków. Dlatego `obj.hasOwnProperty('1')` również zwraca true.

Nie działa to w ten sam sposób dla zbioru. W zbiorze nie ma klucza `'1'`:`set.has('1')`, dlatego zwraca wartość false. Zawiera on liczbę całkowitą `1`, `set.has(1)` zwraca wartość true.

</p>
</details>

---

###### 25. Jaki jest wynik?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Jeśli masz dwa klucze o takiej samej nazwie, zostanie on zastąpiony. Nadal będzie umieszczony na pierwszej pozycji, ale z ostatnią zdefiniowaną wartością.

</p>
</details>

---

###### 26. Globalny kontekst wykonania JavaScript tworzy dwie rzeczy: obiekt globalny i słowo kluczowe "this".

- A: true
- B: false
- C: it depends

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Globalny kontekst wykonania jest dostępny wszędzie w kodzie.

</p>
</details>

---

###### 27. Jaki jest wynik?

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Instrukcja `continue` pomija iterację, jeśli określony warunek zwróci `true`.

</p>
</details>

---

###### 28. Jaki jest wynik?

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza())
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

`String` jest wbudowanym konstruktorem, do którego możemy dodawać właściwości. Dodana została metoda do jego prototypu. Prymitywne ciągi znaków są automatycznie konwertowane na obiekt typu string, generowany przez funkcję prototypu ciągu znaków. Tak więc wszystkie ciągi (obiekty typu string) mają dostęp do tej metody!

</p>
</details>

---

###### 29. Jaki jest wynik?

```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Klucze obiektów są automatycznie konwertowane na ciągi znaków. Próbujemy ustawić obiekt jako klucz do obiektu `a`, z wartością `123`.

Jednakże, kiedy stringujemy obiekt, staje się on `"[obiekt Object]"`. Mówimy więc, że `a["[obiekt Object]"] = 123`. Następnie próbujemy zrobić to samo. `c` jest kolejnym obiektem, który niejawnie stringujemy. Zatem `a["[obiekt Object]"] = 456`.

Następnie wyświetlamy w konsoli `a[b]`, co w rzeczywistości jest `a["[obiekt Object]"]`, ustawiony wcześniej na `456`, więc zwraca `456`.

</p>
</details>

---

###### 30. Jaki jest wynik?

```javascript
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Mamy funkcję `setTimeout` i wywołaliśmy ją jako pierwszą. Została jednak wyświetlona jako ostatnia.

Dzieje się tak, ponieważ w przeglądarkach mamy nie tylko silnik wykonawczy, ale także coś, co nazywa się `WebAPI`. Interfejs `WebAPI` daje nam na początek funkcję `setTimeout`.

Po przesłaniu _callback_ do WebAPI, sama funkcja `setTimeout` (ale nie callback!) jest usuwana ze stosu.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Teraz, `foo` jest wywoływane, a `"First"` jest wyświetlane.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` jest zdejmowane ze stosu, a `baz` jest wywoływane. "Third" zostaje wyświetlony.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI nie może dodawać rzeczy do stosu, gdy jest gotowy. Zamiast tego przesuwa funkcję zwrotną do czegoś zwanego _kolejką_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

W tym miejscu zaczyna działać pętla zdarzeń. **Pętla zdarzeń** patrzy na stos i kolejkę zadań. Jeśli stos jest pusty, pobiera pierwszą rzecz z kolejki i przesuwa ją na stos.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` zostaje wywołany, `"Second"` zostaje wyświetlony i zdjęty ze stosu.

</p>
</details>