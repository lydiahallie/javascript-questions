# List of (Advanced) JavaScript Questions

Codziennie umieszczam pytania wielokrotnego wyboru z JavaScript na moim koncie [Instagram](https://www.instagram.com/theavocoder). Pytania te możesz również znaleźć tutaj!

Od poziomu podstawowego do zaawansowanego: sprawdź jak dobrze znasz JavaScript, odśwież swoją wiedzę lub przygotuj się na rozmowę rekrutacyjną! :muscle: :rocket: Co tydzień aktualizuję repozytorium o dawkę nowych pytań. Ostatni update: <a href=#20191118><b> 18 Listopada</b></a>

Odpowiedzi znajdują się w ukrytej sekcji pod każdym pytaniem. Naciśnij na "Odpowiedź", by ją zobaczyć. Powodzenia :heart:

Chcesz otrzymać powiadomienie, gdy nowe pytania zostaną dodane? <br />
<a target="_blank" href="https://www.theavocoder.com/subscribe"><b>✨✉Subskrybuj by dostać wiadomość o aktualizacjach!✉✨</b></a>


List of available languages:
* [English](../en-EN/README.md)
* [العربية](../ar-AR/README_AR.md)
* [اللغة العامية - Egyptian Arabic](../ar-EG/README_ar-EG.md)
* [Bosanski](../bs-BS/README-bs_BS.md)
* [Deutsch](../de-DE/README.md)
* [Español](../es-ES/README-ES.md)
* [Français](../fr-FR/README_fr-FR.md)
* [日本語](../ja-JA/README-ja_JA.md)
* [한국어](../ko-KR/README-ko_KR.md)
* [Português Brasil](../pt-BR/README_pt_BR.md)
* [Русский](../ru-RU/README.md)
* [Українська мова](../ua-UA/README-ua_UA.md)
* [Tiếng Việt](../vi-VI/README-vi.md)
* [中文版本](../zh-CN/README-zh_CN.md)
* [Türkçe](../tr-TR/README-tr_TR.md)
* [ไทย](../th-TH/README-th_TH.md)
* [Polish](../pl-PL/README-pl_PL.md)

---

###### 1. Jaki jest wynik?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` i `undefined`
- B: `Lydia` i `ReferenceError`
- C: `ReferenceError` i `21`
- D: `undefined` i `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Na początku wewnątrz funkcji deklarujemy zmienną `name` przy pomocy słowa kluczowego `var`. Oznacza to, że zmienna ta zostaje wywindowana (lokowanie miejsca w pamięci ma miejsce podczas fazy kreacji - creation phase) z domyślną wartością `undefined`. Wartość ta zmienia się, gdy dotrzemy do linii, w której definiujemy zmienną. W miejscu, w którym próbujemy zastosować console.log na zmiennej `name` otrzymamy wartość undefined, ponieważ inicjacja następuje w późniejszym etapie.

Zmienne deklarowane przy pomocy słowa kluczowego `let` (lub `const`) są windowane (hoistowane), ale proces wygląda trochę inaczej niż w przypadku `var`. Nie są one <i>inicjowane</i>. Nie ma do nich dostępu przed linią, w której są deklarowane. Sytuacja taka jest nazywana "tymczasową martwą strefą". W momencie, gdy próbujemy uzyskać dostęp (odwołać się) do zmiennej zanim zostanie zadeklarowana, JavaScript wyrzuca `ReferenceError`.

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

- A: `0 1 2` i `0 1 2`
- B: `0 1 2` i `3 3 3`
- C: `3 3 3` i `0 1 2`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Kolejka zdarzeń (event queue) w JavaScript powoduje, że funkcja zwrotna `setTimeout` jest wywołana _po_ wykonaniu pętli. Zmienna `i` w pierwszej pętli została zadeklarowana z użyciem słowa kluczowego `var` co sprawia, że zmienna ta jest globalna. Podczas wykonywania pętli wartość `i` jest zwiększana o 1 za każdym razem, przy pomocy operatora `++`. Do momentu wywołania funkcji zwrotnej `setTimeout` w pierwszym przykładzie zmienna `i` ma wartość 3.

W przypadku drugiej pętli, zmienna `i` została zadeklarowana przy użyciu słowa kluczowego `let`: zmienne deklarowane przy pomocy `let` (lub `const`) mają zasięg blokowy (blok to wszystko wewnątrz nawiasów `{ }`). Podczas każdej iteracji, `i` otrzymuje nową wartość, a każda wartość zostaje objęta zakresem pętli.

</p>
</details>

---

###### 3. Jaki jest wynnik?

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` i `62.83185307179586`
- B: `20` i `NaN`
- C: `20` i `63`
- D: `NaN` i `63`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Zauważ, że funckja `diameter` jest normalną funkcją, gdzie `perimeter` jest funkcją strzełkową.

W momencie, gdy korzystamy z funkcji strzałkowej, słowo kluczowe `this` odnosi się do obecnie otaczającego go zakresu. W przypadku zwykłej funkcji jest inaczej! Gdy wywołujemy funkcję `perimeter`, nie odnosi się ona do obiektu shape, ale do otaczającego zakresu (przykładowo window);

W tym przypadku nie istnieje (nie jest w zasięgu) wartość `radius` tego obiektu, stąd zwracane jest `undefined`.

</p>
</details>

---

###### 4. Jaki jest wynnik?

```javascript
+true;
!"Lydia";
```

- A: `1` i `false`
- B: `false` i `NaN`
- C: `false` i `false`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Operator dodawania próbuje przekonwertować argument na liczbę. `true` to `1`, a `false` to `0`.

Ciąg znaków `'Lydia'` ma wartość prawdziwą (truthy). Właściwie zadajemy sobie pytanie, czy ta wartość 'truthy' jest falsy. Zostaje zwrócone 'false'.

`'Lydia'` przekonwertowane na liczbe ma wartość 1. Sotsując `!` przed zapisem, odwracamy tą wartość.


</p>
</details>

---

###### 5. Zaznacz prawidłową odpowiedź?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` nie jest poprawnym zapisem
- B: `mouse[bird.size]` nie jest poprawnym zapisem
- C: `mouse[bird["size"]]` nie jest poprawnym zapisem
- D:  Wszystkie zapisy są poprawne

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W JavaScript wszystkie klucze obiektów są stringami (chyba, że mamy do czynienia z Symbolami). Normalnie nie zapisujemy ich jako stringi. Klucze są konwertowane na stringi po stronie JS - under the hood.

JavaScript interpretuje (lub rozkapkowuje) instrukcje.
W momencie, gdy stosujemy tzw. `brakcet notation` `(object[key])`, JavaScript widzi nawias otwierający `[` i idzie dalej dopóki nie napotka zamykającej części `]`. Dopiero,gdy będzie miał komplet, instrukcja zostanie wykonana.

`mouse[bird.size]`: Na początku sprawdzane jest odniesienie do `bird.size`, które ma wartość `"small"`. W efekcie otrzymujemy: `mouse["small"]` co zwraca nam `true`

Jednak w przpadku zapisu przy użyciu tzw. `dot notation` - notacji kropkowej sytuacja wygląda inaczej. `mouse` nie ma klucza o nazwie `bird`, co oznacza że `mouse.bird` zwróci `undefined`. Następnie, pytamy o `size` przy użyciu notacji kropkowej: `mouse.bird.size`. Ponieważ `mouse.bird` zwraca nam `undefined`, pytamy w tym przypadku o `undefined.size`. Nie jest to poprawny zapis i zostanie zwrócony błąd podobny do `Cannot read property "size" of undefined`.

</p>
</details>

---


###### 6. Jaki jest wynnik?

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
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

W JavaScript wszystkie obiekty odwołują się do siebie przez _referencje_, gdy przypiszemy je do siebie.

Na początku, zmienna `c` ma wartość w postaci obiektu. Następnie tworzymy zmienną `d` i do niej przypisujemy odwołanie (referencję) do obiektu przypisanego do zmiennej `c`.
Dzięki odwołaniu (referencji) zmieniając wartość właściwości `greeting` dla `c`, zostaje ona również zmieniona dla obiekty przypisanego do zmiennej `d`.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Kiedy zmieniasz jeden obiekt, zmieniasz je wszystkie.

</p>
</details>

---

###### 7. Jaki jest wynnik?

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

`new Number()` jest wbudowaną funkcję kontrukcyjną. Wygląda jak liczba, ale tak naprawdę nią nie jest: posiada dużo dodatkowych możliwości i jest obiektem.

W przypadku, gdy stosujemy operator porównania `==`, sprawdza on tylko, czy _wartości_ są równe. Obie mają wartość `3`, więc zostaje zwrócone `true`.

Jednak, gdy do porównania stosujemy operator `===`, zarówno wartość jak i typ powinny być takie same. W tym przypadku tak nie jest: `new Number()` nie jest liczbą, jest **obiektem**. Oba porównania zwrócą więc `false`.

</p>
</details>

---

###### 8. Jaki jest wynnik?

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Funkcja `colorChange` jest funkcją statyczną (static). Metody statyczne są tak zaprojektowane, by "żyć" tylko w konstruktorze, gdzie są tworzone i nie mogą być przekazane w dół do dzieci danego elementu. `freddie` jest tzw. dzieckiem, więc funkcja nie jest przekazana dalej do niego i nie jest dostępna, gdy chcemy ją wywołać: w takim przypadku pojawia się błąd `TypeError`.

</p>
</details>

---

###### 9. Jaki jest wynnik?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W konsoli pojawi się obiekty, ponieważ właśnie stworzyliśmy pusty obiekt w obiekcie globalnym. Zauważ, że nazwy zmiennych się nie pokrywają: w jednym przapadku jest to `greeting` a w drugim  `greetign`. Nasza pomyłka sprawia, że zostaje utworzona zmienna w obiekcie globalnym. Interpreter JS widzi to jako: `global.greetign = {}` (lub `widnow.greetign = {}` w przeglądarce).

Jeśli chcemy uniknąć takich sytuacji, możemy zastosować `"use strict"`. Zapis ten sprawi, że zostanie wymuszona deklaracja zmiennej przed przypisaniem do niej czegokolwiek.

</p>
</details>

---

###### 10. Co się stanie, gdy wykonamy coś takiego?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nic, wszystko jest w porządku!
- B: `SyntaxError`. Nie można dodawać właściwości do funkcji w ten sposób.
- C: `"Woof"` pojawia się w konsoli.
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Jest to możliwe w JavaScript, ponieważ funkcje są obiektami! (Wszystko poza typami prymitywnymi jest obiektem)

Funkcja jest obiektem specjalnego typu. Kod, który piszemy nie jest właściwą funkcją. Funkcja jest obiektem z właściwościami i to właśnie te właściwości możemy wywołać.

</p>
</details>

---

###### 11. Jaki jest wynnik?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
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

Nie możesz dodawać właściwości do kontrucktora tak jak jest to możliwe z normalnymi obiektami. Jeśli chcesz dodać nową funkcjonalność do wszystkich obiektów, musisz skorzystać z prototypu. W tym przypadku,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

powyższy zapis sprawi, że `member.getFullname()` zadziała. Dlaczego jest to dla nas korzystne? Powiedzmy, że dodaliśmy powyższą metodę do kontruktora na początku, przy tworzeniu funkcji kontruującej. Możliwe, że nie każda nowa instancja `Person` potrzebuje tej metody. Taka sytuacja mogłaby sprawić, że marnujemy dużo miejsca w pamięci, ponieważ każdy stworzony obiekt posiada tą właściwość (która zajmuje miejsce), a jej nie wykorzystuje.

Jeśli wykorzystamy zapis z wykorzystaniem prototype, właściwość ta jest tworzona tylko w jednym miejscu w pamięci, a wszystkie utworzone instancje mają do niej dostęp.

</p>
</details>

---

###### 12. Jaki jest wynnik?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` i `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` i `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` i `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` i `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Dla `sarah` nie zastosowaliśmy sława kluczowego `new` do utworzenia obiektu. Gdy używamy `new` odnosi się to do nowego pustego obiektu, który tworzymy. Jednak, gdy nie zastosujemy słowa kluczowego `new`, odniesienie mamy do **obiektu globalnego**!


W przypadku `sarah` mówimy, że `this.firstName` jest równe `"Sarah"` a `this.lastName` jest równe `"Smith"`. W tym przypadku tak naprawdę zdefiniowaliśmy zmienne globalne: `global.firstName = 'Sarah'` i `global.lastName = 'Smith'`. `sarah` sama w sobie pozostaje `undefined`, ponieważ nasze działanie nie zwróciło wartości z funkcji `Person`.

</p>
</details>

---

###### 13. Jakie są trzy fazy propagacji zdarzeń (event propagation)?

- A: Target > Capturing > Bubbling (Cel > Przechwycenie > Bąbelkowanie)
- B: Bubbling > Target > Capturing (Bąbelkowanie > Cel > Przechwycenie)
- C: Target > Bubbling > Capturing (Cel > Bąbelkowanie > Przechwycenie)
- D: Capturing > Target > Bubbling (Przechwycenie > Cel > Bąbelkowanie)

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Podczas fazy **przechwycenia**, wydarzenie idzie przez rodzica aż do elementu docelowego. Następnie, gdy dociera do **celu** następuje **bąbelkowanie**.

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

Wszystkie obiekty mają prototypy poza **obiektami bazowymi**. Obiekt bazowy to obiekt stworzony przez użytkownika, lub obiekt utworzony przy użyciu słowa kluczowego `new`.
Obiekt bazowy ma dostęp do pewnych metod i właściwości takich jak: `.toString`. To właście dlatego możesz korzystać z wbudowanych metod JavaScript. Wszystkie te metody są dostępne w prototypie. W momencie, gdy JavaScript nie może ich odszukać w naszym obiekcie, poszukuje je dalej idąć przez tzw. łańcuch prototypów - to właśnie tam je znajduje, co sprawia że są one dostępne dla nas.

</p>
</details>

---

###### 15. Jaki jest wynnik?

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

JavaScript jest językiem **dynamicznie typowanym**: nie określamy jakiego typu jest dana zmienna. Wartości mogą być automatycznie przekonwertowane na inne typy bez naszego udziału i wiedzy - jest to tzw. _wymuszona koercja typów_. **Koercja** konwertuje z jednego typu na inny.

W tym przypadku, JavaScript konwertuje liczbę `1` na string, by funkcja mogła zwrócić wartość. Podczas dodawania typu number (`1`) i typu string(`'2'`), liczba jest traktowana jako string. Możemy połączyć stringi w ten sposób `"Hello" + " World"`, więc idąc tym tropem to co się tu dzieje wygląda tak: `"1" + "2"` i zwraca nam `"12"`.

</p>
</details>

---

###### 16. Jaki jest wynnik?

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

Operator dodawania `++` w postaci **postfixu**:

1. Zwraca wartość (zostaje zwrócone `0`)
2. Zwiększa wartość o 1 (teraz wartość jest równa `1`)

Operator dodawania `++` w postaci **prefixu**:

1. Zwiększa wartość o 1  (teraz wartość jest równa `2`)
2. Zwraca wartość (zostaje zwrócone `2`)

Wynik: `0 2 2`.

</p>
</details>

---

###### 17. Jaki jest wynnik?

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Jeśli używać szablonu łańcuchów z tagami, wiesz że wartość pierwszego argumentu to zawsze tablica z wartościami w postaci stringów. Pozostałe argumenty otrzymują wartości, które przesłaliśmy. Dla uproszczenia: pierwszy argument ot string który przekazaliśmy i zostaje on rozłożony na elementy tablicy: "", "is", "years old". Pozostałe dwa argumenty to person i age.

</p>
</details>

---

###### 18. Jaki jest wynnik?

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
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

W momencie, gdy testujemy równość argumentów, prymitywy są porównywane przez ich _wartość_, podczas gdy obiekty są porównywane przez _referencje_. JavaScript sprawdza, czy obiekty mają odwołanie do tych samych miejsc w pamięci.

Dwa obiekty, które porównujemy nie posiadają tego: obiekt, który przekazujemy jako parametr odnosi się do innej lokacji w pamięci niż obiekt, który wykorzystujemy do porównania.

Jest to powód dla którego zarówno `{ age: 18 } === { age: 18 }` jak i `{ age: 18 } == { age: 18 }` zwraca `false`.

</p>
</details>

---

###### 19. Jaki jest wynnik?

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

Operator reszty (`...args`) pozwala na zebranie wszystkich przesłanych argumentów w tablicę. Tablica jest obiektem, więc `typeof args` zwraca `"object"`

</p>
</details>

---

###### 20. Jaki jest wynnik?

```javascript
function getAge() {
  "use strict";
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

`"use strict"`, sprawdza czy przypadkowo nie zadeklarujemy zmiennej globalnej. Nigdy nie zadeklarowaliśmy zmiennej `age`, a odkąd używamy `"use strict"`, otrzymamy błąd `ReferenceError`. Jeśli nie zastosujemy `"use strict"` wszystko zadziała, a zmienna age zostałaby dodana do obiektu globalnego.

</p>
</details>

---

###### 21. Jaka jest wartość `sum`?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

`eval` przechodzi przez kod, który został przesłany jako string. Jeśli jest to wyrażenie, jak w tym przypadku, wykonuje wyrażenie. W tym przypadku jest to `10 * 10 + 5`. W rezultacie otrzymamy liczbę `105`.

</p>
</details>

---

###### 22. Jak długo cool_secret jest dostępne?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Zawsze będzie dostępne. Dane nie giną tutaj.
- B: Do momentu, gdy użytkownik zamknie kartę.
- C: Do momentu, gdy użytkownik zamknie przeglądarkę, nie tylko samą kartę.
- D: Do momentu, gdy użytkownik wyłączy komputer.

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Dane przechowywane w `sessionStorage` są usuwane w momencie zamknięcia _karty_.

Jeśli stosowałeś `localStorage`, dane byłyby tam zawsze, chyba że zostałaby wywołana metoda `localStorage.clear()`.

</p>
</details>

---

###### 23. Jaki jest wynnik?

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

Stosując słowo kluczowe `var`, możesz deklarować wiele zmiennych z tą samą nazwą. Zmienna będzie wtedy przechowywała ostatnią wartość.

Nie możesz zrobić tego samego z `let` lub `const`, ponieważ mają zasięg blokowy.

</p>
</details>

---

###### 24. Jaki jest wynnik?

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C


Wszystkie klucze obiektów (wyłączając Symbole) są stringami. Nawet jeśli nie zapiszemy klucza jako string, zostanie on przekonwertowany. Dlatego też, `obj.hasOwnProperty('1')` zwraca true.

Nie działo to dla set. W naszym secie (set) nie ma `"1"`: `set.has("1")` zwraca false. Nasz klucz ma wartość numeryczną `1`, `set.has(1)` zwraca `true`.

</p>
</details>

---

###### 25. Jaki jest wynnik?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Jeśli mamy dwa klucze o tej samej nazwie, to jeden zostaje nadpisany przez drugi. Nadal będzie na swojej pierwszej pozycji w tym przypadku, jednak z ostatnią wartością, którą przekazaliśmy.

</p>
</details>

---

###### 26. (Global exec. context) Globalny kontekst wywoławczy tworzy dla nas dwie rzeczy: obiekt globalny i słowo kluczowe "this"

- A: true
- B: false
- C: it depends

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Bazowym kontekst wywoławczy to globalny kontekst wywoławczy: to wszystko co jest dostępne w twoim kodzie.

</p>
</details>

---

###### 27. Jaki jest wynnik?

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

Wyrażenie `continue` pomija iterację jeśli warunek zwróci `true`.

</p>
</details>

---

###### 28. Jaki jest wynnik?

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

`String` jest wbudowanym kontruktorem do którego możemy dodać właściwości. Właśnie dodaliśmy metodę do jego prototypu. Prymityw łańcucha znaków jest automatycznie konwertowany na obiekt stringa, generowany przez funkcję jego prototypu. W efekcie, wszystkie stringi (String Objects) mają dostęp do tej metody!

</p>
</details>

---

###### 29. Jaki jest wynnik?

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

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

Klucze obiektów są automatycznie konwertowane na stringi. Tutaj ustawiamy obiekt jako klucz dla obiektu `a` z wartością `123`.

W momencie, gdy konwertujemy obiekt na string (stringify), nasz obiekt ma formę `"[object Object]"`. Mamy więc tutaj przypisanie w postaci `a["object Object"] = 123`. Następnie robimy dokładnie do samo. `c` jest kolejnym obiektem, na którym działamy w podobny sposób. W efekcie nasz zapis wygląda tak: `a["object Object"] = 456`.

Na końcu chcemy uzyskać wynik naszych działań w konsoli przez konsolowanie, `a[b]`, które ma wartość `a["object Object"]`. Wcześniej ustawiliśmy wartość tego na `456`, więc w konsoli zobaczymy `456`.

</p>
</details>

---

###### 30. Jaki jest wynnik?

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

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

Mamy funkcję `setTimout`, którą wywołujemy jako pierwszą - wynik jej działania otrzymujemy jednak na samym końcu.

Dzieje się tak, ponieważ w przeglądarce nie mamy tylko i wyłącznie silnika, który wykonuje kod (runtime engine). Oprócz tego mamy również coś, co nazywa się `WebAPI`. To właśnie `WebAPI` dostarcza nam funkcję `setTimeout`, oraz np. znany nam DOM (Document Object Model)

Po tym jak nasz _callback_ jest wypchnięty do WebPAI, `setTimeout` zostaje usunięty ze stosu wywołań (`setTimeout` zostaje usunięty, ALE nie sam callback `console.log`).

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Teraz, `foo` zostaje wywołane, w konsoli pojawia się `"First"`.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` zostaje usunięte ze stosu wywołań i następuje wywołanie `baz`. `"Third"` pojawia się w konsoli.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI nie może dodawać rzeczy do stosu kiedy tylko jest zechce. Zamiast tego, przenosi ono nasz callback do miejsca, które nazwya się _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Tutaj swoją pracę rozpoczyna pętla zdarze. **Pętla zdarzeń** (event loop) patrzy na stos wywołań i kolejkę zadań (task queue). Jeśli stos jest pusty, to bierze pierwszą rzecz z kolejki i przenosi na stos wywołań.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` zostaje wywołana, `"Second"` pojawia się w naszej konsoli i nasza funkcja zostaje usunięta po wywołaniu ze stosu.

</p>
</details>

---

###### 31. Na co wskazuje event.target podczas naciśnięcia przycisku?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Zewnętrzny `div`
- B: Wewnętrzny `div`
- C: `button`
- D: Tablicę wszystkich zagnieżdżonych elementów.

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Najbardziej zagnieżdżony element, który powoduje nasz event to właśnie target naszego eventu. Możemy zablokować bąbelkowanie (bubbling) przez zastosowanie `event.stopPropagation`

</p>
</details>

---

###### 32. Co pojawi się w konsoli, gdy naciśniemy paragraf.

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Jeśli naciśniemy na `p` zobaczymy dwa logi: `p` i `div`. Podczas propagowania wydarzenia (eventu) mamy do czynienia z 3 fazami: przechwytywania (capturing), cel (target), bąbelkowania (bubbling). Domyślnie, elementy które przechwytują event pojawiają się w fazie bąbelkowania (chyba, że ustawimy `useCapture` na `true`). Bąbelkowanie idzie w kierunku od najbardziej zagnieżdżonego elementu na zewnątrz.

</p>
</details>

---

###### 33. Jaki jest wynnik?

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

W tym przypadku, zarówno za pomocą `.call` jak i `.bind` możemy przekazać odniesienie do obiektu, na który będzie wskazywać słowo kluczowe `this`. Jednak `.call` jest wywływane od razu. `.bind` zwraca _kopię_ funkcji, ale z połączonym kontekstem. Nie zostaje wywołana od razu. Musielibyśmy przypisać wywołanie do zmiennej i wtedy ją wywołać.

```

const x = sayHi.bind(person, 21);
x(); // Lydia is 21

```

</p>
</details>

---

###### 34. Jaki jest wynnik?

```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Funkcja `sayHi` zwraca wartość zwracaną przez funkcję IIFE. Funkcja ta zwraca `0`, które jest typem `"number"`.

Dla Twojej informacji: istnieje tylko 7 wbudowanych typów: `null`, `undefined`, `boolean`, `number`, `string`, `object` i `symbol`. `"function"` nie jest typem, ponieważ funkcja jest obiektem o typie `"obiekt"`.

</p>
</details>

---

###### 35. Które z tych wartości zwracają false (są falsy)?

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: Wszystkie powyższe zwracają false ('są falsy')

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W JavaScript mamy tylko 6 wartości zwracających false:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (pusty string)
- `false`

Funkcje konstruujące, takie jak `new Number` lub `new Boolean` są wartości prawdziwej (truthy)

</p>
</details>

---

###### 36. Jaki jest wynnik?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. Jaki jest wynnik?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

W przypadku, gdy dodajemy wartość do tablicy i ustawiamy index tego elementu na wartość wyższą niż długość tablicy, JavaScript tworzy coś co nazwyamy "pustym miejscem - emplty slot". Elementy te mają wartość `undefined`, ale gdy zastosujemy console.log na takiej tablicy, otrzymamy:

`[1, 2, 3, 7 x empty, 11]`

w zależności o tego, gdzie zostanie uruchomiony kod (wygląda to trochę inaczej, zależnie od przeglądarki, środkowiska uruchomieniowego)

</p>
</details>

---

###### 38. Jaki jest wynnik?

```javascript
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Blok `catch` otrzymuje argument `x`. To nie jest ten sam `x` co zmienna, gdy przekazujemy argumenty. Ta zmienna `x` jest w zasięgu bloku.

Następnie, wartość tej zmiennej blokowej na `1` i ustawiamy wartość dla zmiennej `y`. Teraz logujemy zmienną blokową `x`, której wartość wyosi `1`.

Na zewnątrz, poza blokiem `catch`, `x` jest wciąż `undefined`, a `y` ma wartość 2. Podsumowując najważniejszy element tego bloku funkcji: przekazywany `x` to nie `x`, który został zadeklarowany na początku bloku.

</p>
</details>

---

###### 39. Wszystko w JavaScript jest zarówno...

- A: primitive or object (prymitywem albo obiektem)
- B: function or object (funkcją albo obiektem)
- C: trick question! only objects (podchwytliwe pytanie! tylko obiektami)
- D: number or object (liczbą albo obiektem)

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

JavaScript posiada tylko prymitywy i obiekty.

Typy prymitywne to: `boolean`, `null`, `undefined`, `bigint`, `number`, `string` i `symbol`

To co różni typ prymitywny od typu obiektu to to, że prymitywy nie mają właściwości lub metod; jednakże, spotkasz pewnie `'foo'.toUppserCase()`, które zmienia się w `'FOO'` i nie powoduje pojawienia się komunikatu `TypeError`. Dzieje się tak, ponieważ w momencie próby odniesiesienia się do właściwości lub metody na typie prymitywnym jak ciąg znaków (string), JavaScript dokona niejawnego owinięcia w obiekt przy pomocy jednego z opakowań klasowych, np. `String`. Następnie po wykonaniu działania na nim, opakowanie to zostanie 'usunięte'. Wszystkie prymitywy poza `null` i `undefined` wykazują takie zachowanie.

</p>
</details>

---

###### 40. Jaki jest wynnik?

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

`[1, 2]` jest naszą wartością początkową. To jest wartość od której zaczynamy i jest pierwszą wartością dla `acc`. Podczas pierwszej rundy, `acc` stanowi `[1, 2]`, a `cur` jest równe `[0, 1]`. Łączymy jest i w efekcie otrzymujemy `[1, 2, 0, 1]`.

Następnie, `[1, 2, 0, 1]` jest wartością `acc` a `[2, 3]` jest wartością `cur`. Łączymy je i otrzymujemy `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

---

###### 41. Jaki jest wynnik?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

`null` zwraca nam wartość fałszywą (falsy). `!null` zwraca `true`. `!true` zwraca `false`.

`""` zwraca nam wartość fałszywą (falsy). `!""` zwraca `true`. `!true` zwraca `false`.

`1` zwraca nam wartość prawdziwą (truthy). `!1` zwraca `false`. `!false` zwraca `true`.

</p>
</details>

---

###### 42. Co zwraca metoda `setInterval` w przeglądarce?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: unikalne id
- B: określoną liczbę milisekund
- C: przekazaną funkcję
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Zwraca unikalne id. To id może być wykorzystane do wyczyszczenia interwału przy pomocy funkcji `clearInterval()`

</p>
</details>

---

###### 43. Co jest zwracane?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

String jest iterowalny. Oznacza to, że nasz operator rozproszenia (spread operator) mapuje każdą literę do pojedyńczego elementu.

</p>
</details>

---

###### 44. Jaki jest wynnik?

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10 i 10, 20`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Normalne funkcje nie mogą być zatrzymane w połowie po wywołaniu. W przypadku generatorów jest inaczej. Generator może zostać zastopowany w trakcie i następnie kontynuować swoją pracę tam gdzie ją zakończył. Za każdym razem, gdy generator napotka słowo kluczowe `yield`, funkcja przekazuje wartość, która jest określona zaraz po niej. Zauważ, że generator w tym przypadku nie zwraca wartości, on przekazuje wartość.

Na początku inicjujemy generator funkcji z `i` równym `10`. Wywołujemy generator przy pomocy metody `next()`. Za pierwszym razem, gdy funkcja jest wywoływana, `i` jest równe `10`. Napotyka na pierwsze słowo kluczowe `yield`: przekazuje wartość `i`. Generator jest teraz zastopowany, a `10` pojawia się w konsoli.

Następnie wywołujemy funkcję ponownie przy pomocy metody `next()`. Rozpoczyna swoje wywołanie tam, gdzie wcześniej generator został zastopowany, z wartością `i` równą `10`. Teraz napotyka następne słowo kluczowe `yield` i przekazuje `i * 2`. `i` jest równe `10`, więc zwraca `10 * 2`, co daje nam `20`. Finalny wynik naszego działania to `10 20`.

</p>
</details>

---

###### 45. Co zostaje zwrócone?

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

W momencie, gdy przekazujemy wiele obietnic do metody `Promise.race`, spełnia/odrzuca ona _pierwszą_ obietnicę, która zostanie spełniona/odrzucona. Do metody `setTimeout` przekazujemy timer z wartością 500ms dla pierwszej obietnicy (`firstPromise`) i 100ms dla drugiej obietnicy (`secondPromise`). Oznacza to, że `secondPromise` zostaje zwrócona jako pierwsza z wartością `"two"`. `res` przechowuje teraz wartość `"two"`, co zostaje wyświetlone w konsoli.

</p>
</details>

---

###### 46. Jaki jest wynnik?

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Na początku deklarujemy zmienną `person` z wartością w postaci obiektu, który ma właściwość `name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Następnie deklarujemy zmienną `members`. Przypisujemy do pierwszego indeksu naszej tablicy wartość zmiennej `person`. Obiekty wspołdziałają między sobą na zasadzie _referencji_. Gdy przypisujesz referencję z jednej zmiennej do drugiej, robisz tak naprawdę _kopię_ tego odwołania. (zauważ, że nie posiadają one tego samego _odwołania_!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Następnie przypisujemy zmienną `person` do wartości `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

My tylko modyfikujemy wartość zmiennej `person` a nie pierwszego elementu tablicy. Element tablicy ma inną (skopiowaną) referencję to obiektu. Pierwszy element w tablicy nadal utrzymuje odniesienie do oryginalnego obiektu. Gdy logujemy tablicę `members`, pierwszy element nadal utryzmuje wartość obiektu, co zostaje pokazane w konsoli.

</p>
</details>

---

###### 47. Jaki jest wynnik?

```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Dzięki pętli `for-in` możemy przejść przez klucze obiektu - w tym przypadku `name` i `age`. Jak już wcześniej było wspominane klucze to stringi (jeśli akurat nie są Symbolami). Przy każdej pętli do zmiennej `item` przypisujemy aktualny klucz przez, który przechodzimy. Za pierwszym razem jest to `name` i to zostaje pokazane w konsoli. Następnie jest to `age`, co również widzimy w konsoli.

</p>
</details>

---

###### 48. Jaki jest wynnik?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

 Pierwszeństwo operatorów ustala kolejność, w jakiej operatory są ewaluowane, zarówno od lewej do prawiej i od prawej do lewej. Ma to miejsce tylko i wyłącznie jeśli wszystkie operatory mają taką samą wartość w tabeli ważności operatorów. Tutaj mamy tylko jeden typ operatora: `+`. Dla dodawania kierunek wykonywania jest od lewej do prawej.

 `3 + 4` zostaje wykonane jako pierwsze. Daje nam to wynik typu number z wartością `7`.

 `7  + "5"` daje nam `"75"` przez koercję, czyli niejawną zmianę typu. JavaScript konwertuje liczbę `7` do stringa (wróć do pytania 15). Możemy połączyć dwa stringi stosując operator `+`. `"7" + "5"` daje nam wynik `"75"`.

</p>
</details>

---

###### 49. Jaka jest wartość `num`?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Tylko pierwsza liczba z ciągu znaków jest zwracana. Bazując na _radix'ie_ (drugi argument, w celu jaki typ liczby chcemy parsować: podstawa 10, liczba szesnastkowa, liczba ósemkowa, liczba binarna, etc.), funkcja `parseInt` sprawdzam czy znaki w stringu są poprawne. Gdy funkcja napotka znak, który nie jest poprawną liczbą zatrzymuje dalej parsowanie i ignoruje dalsze znaki.

`*` nie jest poprawną liczbą. Przeprasowane zostaje tylko `"7"` na postać dziesiętną `7`. `num` przechowuje wartość `7`.

</p>
</details>

---

###### 50. Jaki jest wynnik`?

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Gdy mapujemy tablicę, wartość `num` jest równa kolejno elementom tablicy. W tym przypadku każdy element to liczba, więc instrukcja warunkowa if `typeof num === "number"` zwraca `true`. Funkcja map tworzy nową tablicę i umieszcza w niej wartości zwrócone przez funkcję.

W tym przypadku nie zwracamy wartości. Jeśli nie zwracamy wartości z funkcji, zwaraca ona `undefined`. Dla każdego elementu z tablicy wywoływany jest blok funkcyjny, więc dla każdego z elementów jest zwracane `undefined`.

</p>
</details>

---

###### 51. Jaki jest wynnik?

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Argumenty są przekazywane według _wartości_, chyba, że ich wartością jest obiekt, wtedy są przekazywane przez _referencję_. `birthYear` jest przekazane według wartości, ponieważ jest łańcuchem znaków, nie obiektem. Kiedy przekazujemy argumenty według wartości, _kopia_ thej wartości jest tworzona (patrz pytanie 46).

Zmienna `birthYear` ma referencję do wartości `"1997"`. Argument year` również ma referencję do wartości `"1997"`, ale nie jest to ta sama wartość co `birthYear` do której ma odwołanie.
Gdy aktualizujemy wartość `year` przez przypisanie `"1998"`, aktualizujemy tylko wartość `year`.Sama zmienna `birthYear` ma nadal wartość `"1997"`.

Wartość zmiennej `person` jest obiektem. Argument `member` ma (skopiowaną) referencję do tego samego obiektu. W momencie, gdy zmieniamy właściwość obiektu do którego ma odniesienie `member`, wartość `person` również ulega zmianie, ponieważ mają one odniesienie do tego samego obiektu. Właściwość `name` obiektu `person` ma teraz wartość `"Lydia"`.

</p>
</details>

---

###### 52. Jaki jest wynnik?

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `It worked! Hello world!`
- B: `Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Oh no an error: Hello world!`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Dzięki wyrażeniu `throw` możemy tworzyć niestandardowe błędy. Przy pomocy tego wyrażenia możemy wyrzucać wyjątki. Wyjątkiem może być <b>ciąg znaków</b>, <b>liczba</b> lub <b>obiekt</b>. W tym przypadku, string jest naszym wyjątkiem `"Hello world"`.

Poprzez zastosowanie wyrażenia `catch` możemy określić co zostanie wykonane w przypadku, gdy w bloku `try` zostanie zgłoszony błąd. Wyjątek/błąd zostaje zgłoszony z wartością `"Hello world"`. `e` jest teraz równe temu stringowi, który logujemy. W efekcie otrzymujemy `"Oh an error: Hello world"`.

</p>
</details>

---

###### 53. Jaki jest wynnik?

```javascript
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Lamborghini"`
- B: `"Maserati"`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Kiedy zwracamy właściwość, wartość właściwości jest równa _zwracanej_ wartości, a nie wartości ustawionej w konstruktorze. Zwracamy ciąg znaków `"Maserati"`, więc `myCar.make` jest równe `"Maserati"`.

</p>
</details>

---

###### 54. Jaki jest wynnik?

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- A: `"undefined", "number"`
- B: `"number", "number"`
- C: `"object", "number"`
- D: `"number", "undefined"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

`let x = y = 10;` jest to skrócona wersja poniższego zapisu:

```javascript
y = 10;
let x = y;
```

W momencie, gdy do `y` przypisujemy `10` przypisujemy tym samym właściwość `y` do obiektu globalnego(`window` w przeglądarce, `global` w node`). W przeglądarce, `window.y` jest teraz równe `10`.

Następnie deklarujemy zmienną `x` z wartością zmiennej `y`, która wynosi `10`. Zmienna zadeklarowana przy pomocy `let` ma zasięg bloku i jest definiowana tylko wewnątrz bloku, w którym została zadeklarowana; w tym przypadku wewnątrz funkcji IIFE. Kiedy używamy operatora `typeof`, zmienna `x` nie jest zdefiniowana: próbujemy dostać się do `x` spoza bloku, w którym została ona zadeklarowana. Oznacza to, że `x` nie jest zdefiniowane. Jeśli nie została przypisana wartość do zmiennej, oznacza to że otrzymuje ona wartość `undefined`. `console.log(typeof x)` zwraca `"undefined"`.

W momencie, gdy odwołujemy się do `y` przez `console.log(typeof y)` otrzymujemy wartość, której typ możemy określić. Dzieje się tak ponieważ, zmienna `y` jest zmienną globalną do której mamy dostęp.

</p>
</details>

---

###### 55. Jaki jest wynnik?

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Możemy usunąć właściwości obiektu przy pomocy słowa kluczowego `delete` - również w prototypie. Jeśli usuniemy właściwość w prototypie, nie jest ona już dostępna w łańcuchu prototypów. W tym przypadku funkcja `bark` nie jest już dostępna w prototypie po zastosowaniu `delete Dog.prototype.bark`.

Kiedy chcemy wywołać coś co nie jest funkcją, otrzymujemy `TypeError` jako błąd. W tym przypadku `TypeError: pet.bark is not a function`, odkąd `pet.bark` ma wartość `undefined`.

</p>
</details>

---

###### 56. Jaki jest wynnik?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Obiekt `Set` jest kolekcją _unikalnych_ wartości: wartość może pojawić się tylko raz w zestawieniu.

Przekazujemy iterowalną tablicę `[1, 1, 2, 3, 4]` ze zduplikowaną wartością `1`. Jako że nie możemy mieć dwóch takich samych wartości w zestawieniu, jedna z nich zostaje usunięta. W rezultacie otrzymujemy `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Jaki jest wynnik?

```javascript
// counter.js
let counter = 10;
export default counter;
```

```javascript
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

- A: `10`
- B: `11`
- C: `Error`
- D: `NaN`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Zaimportowany moduł jest _tylko-do-odczytu_: nie możemy modyfikować importowanych modułów. Tylko moduł, który eksportuje wartości może je zmieniać.

Kiedy próbujemy zwiększyć wartość `myCounter` otrzymujemy błąd: `myCounter` is read-only and cannot be modified.

</p>
</details>

---

###### 58. Jaki jest wynnik?

```javascript
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `"Lydia"`, `21`
- C: `true`, `true`
- D: `undefined`, `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Operator `delete` zwraca wartość w postaci boolean: `true` w przypadku usunięcia, lub `false` w przypadku, gdy operacja się nie udała. Jednak zmienne deklarowane przy pomocy słów `var`, `const`, `let` nie mogą być usuwane przy użyciu operatora `delete`.

Zmienna `name` została zadeklarowana przy pomocy słowa kluczowego `const`, więc zostanie zwrócone `false`, ponieważ operacja się nie powiodła. W momencie, gdy ustawiamy wartość zmiennej `age` na `21` tak naprawdę dodajemy właściwość `age` do obiektu globalnego. W tym przypadku możemy usunąć właściwość z obiektu globalnego przy pomocy operatora `delete` - dlatego zostaje zwrócone `true`.

</p>
</details>

---

###### 59. Jaki jest wynnik?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Dzięki destrukturyzacji możemy wydobyć poszczególne wartości z tablicy lub właściwości z obiektu. Przykładowo:


```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

Wartość dla `a` wynosi teraz `1`, a wartość dla `b` wynosi teraz `2`.  To co zrobiliśmy w tym przykładzie, to:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Oznacza to, że dla zmiennej `y` ustawiamy wartość równą pierwszej wartości z tablicy, czyli `1`. Gdy logujemy `y`, `1` zostaje zwrócone.

</p>
</details>

---

###### 60. Jaki jest wynnik?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Możemy połączyć ze sobą obiekty dzięki operatorowi rozproszenia `...` (spread operator). Pozwala on na tworzenie kopii par kluczy i wartości jednego obiektu i przekazaniu ich do innego obiektu. W tym przypadku tworzymy kopię obiektu `user` i dodajemy je do obiektu `admin`. Obiekt `admin` zawiera teraz kopie par klucz/wartość, co daje nam w rezultacie `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. Jaki jest wynnik?

```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia"}`, `["name", "age"]`
- D: `{ name: "Lydia"}`, `["age"]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Dzięki metodzie `defineProperty` możemy dodać nowe właściwości do obiektu lub zmodyfikować istniejące. Kiedy dodajemy właściwość do obiektu przy pomocy `defineProperty`, są one _nie_wyliczalne_. Metoda `Object.keys` zwraca tylko wszystkie _wyliczalne_ właściwości obiektu - w tym przypadku `"name"`.

Właściwości dodane przy pomocy `defineProperty` są niemutowalne. Możemy zmienić to zachowanie przez zastosowanie właściwości takich jak: `writable`, `configurable` i `enumerable`. Tym sposobem mamy większą kontrolę nad właściwościami, które przekazujemy do naszego obiektu - właśnie dzięki metodzie `defineProperty`.

</p>
</details>

---

###### 62. Jaki jest wynnik?

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Drugim argumentem dla metody `JSON.stringify` jest tzw. _replacer_. Replacer może być funkcją lub tablicą i pozwala na kontrolę nad tym co i jak wartości mają być zmodyfikowane.

Jeśli replacer to _tablica_, to tylko nazwy właściwości zawarte w tej tablicy zostaną zmienione na format JSON. W tym przypadku tylko wartości z nazwami `"level"` oraz `"health"` są brane pod uwagę. `"username"` natomista jest wykluczony z całej akcji. `data` jest teraz równa `"{"level":19, "health":90}"`.

Jeśli replacer to _funkcja_, to zostaje ona wywołana na każdej właściwości w obiekcie, który przekazujemy. Wartość zwrócona z funkcji będzie wartością właściwości, gdy ta zostanie dodana do ciągu JSON. Jeśli wartość jest `undefined` to właściwość ta jest wykluczona z akcji.

</p>
</details>

---

###### 63. Jaki jest wynnik?

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Operator `++` na początku zwraca wartość z operacji i dopiero później zwiększa jej wartość. Wartość `num1` jest równa `10`, ponieważ funkcja `increaseNumber` na początku zwraca wartość `num`, która wynosi `10`, a dopiero potem ją zwiększa.

`num2` jest równe `10`, ponieważ przekazaliśmy `num1` z wartością `10` do funkcji `increasePassedNumber`. `number` jest równe `10`. W rezultacie otrzymamy `10` i `10`.

</p>
</details>

---

###### 64. Jaki jest wynnik?

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- A: `20`, `40`, `80`, `160`
- B: `20`, `40`, `20`, `40`
- C: `20`, `20`, `20`, `40`
- D: `NaN`, `NaN`, `20`, `40`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Standard ES6 wprowadza możliwość inicjacji parametru z domyślną wartością. Wartość parametru będzie stanowić wartość domyślną jeśli sami nie przekażemy nic jako parametr lub jeśli przekazany już argument będzie miał wartość `"undefined"`. W tym przypadku rozpraszamy `wartości` obiektu i umieszczamy w nowym obiekcie, więc `x` ma wartość domyślną w postaci `{ number: 10 }`.

Wartość domyślna argumentu jest szacowana w _trakcie_wywoływania_! Za każdym razem, gdy wywołujemy funkcję tworzony jest _nowy_ obiekt. Wywołujemy naszą funkcję _multiply_, przy pierwszych dwóch wywołaniach bez przekazywania wartości: `x` ma wartość domyślną w postaci `{ number: 10}`. Następnie logujemy nasze wartości, na których została wykonana operacja. W rezultacie otrzymujemy 20.

Przy trzecim wywołaniu naszej funkcji przekazujemy argument: obiekt o nazwie `value`. Operator `*=` stanowi skrót od `x.number = x.number * 2`: modyfikujemy naszą wartość `x.number` i logujemy naszą zwracaną wartoś, która wynosi już 20.

Przy czwartym wywołaniu ponownie przekazujemy argument w postaci naszego obiektu. Wcześniej dokonaliśmy jego modyfikacji przy pomocy naszej funkcji. Teraz wartość `number` w obiekcie `value` wynosi `20`, więc `x.number *2` loguje `40`.

</p>
</details>

---

###### 65. Jaki jest wynnik?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` i `3` `3` i `6` `4`
- B: `1` `2` i `2` `3` i `3` `4`
- C: `1` `undefined` i `2` `undefined` i `3` `undefined` i `4` `undefined`
- D: `1` `2` i `undefined` `3` i `undefined` `4`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Pierwszym argumentem jaki przekazujemy do metody `reduce` jest tzw. _accumulator_, w tym przypadku `x`. Drugi argument jest to _bieżąca wartość_, `y`. Przy pomocy metody reduce, na każdym elemencie naszej tablicy wykonujemy funkcję (callback), co może skutkować otrzymaniem pojedynczej wartości.

W tym przypadku nie zwracamy wartości tylko zwyczajnie logujemy wartości _accumulatora_ oraz _bieżącej wartości_.

Wartość accumulatora jest równa poprzedniej zwróconej wartości z naszej funkcji callback. Jeśli nie przekażemy opcjonalnej `wartościPoczątkowej` do naszej metody `reduce`, accumulator jest równy pierwszemu elementowi z pierwszego wywołania.

Przy pierwszym naszym wywołaniu, accumulator (`x`) stanowi `1`, a warotść bieżąca (`y`) to `2`. Nie zwracamy nic z funkcji zwrotnej (callback) tylko zwyczajnie logujemy accumulator oraz wartość bieżącą: `1` oraz `2`.

Jeśli nie zwracamy z naszej funkcji wartości, zwrócone zostaje `undefined`. Przy następnym wywołaniu, accumulator ma wartość `undefined`, a wartość bieżąca `3`. W konsoli pojawia się `undefined` i `3`.

Przy czwartym wywołaniu znowu nie mamy wartości zwróconej z poprzedniego wywołania. Accumulator znowu ma wartość `undefined`, a wartość bieżąca stanowi `4`. W konsoli widzimy `undefined` i `4`.

</p>
</details>

---

###### 66. Przy pomocy którego konstruktora możemy poszerzać naszą klasę `Dog`?

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

W klasach pochodnych nie mamy dostępu do słowa kluczowego `this` bez uprzedniego wywołania `super`. Jeśli spróbujemy to zrobić otrzymamy ReferenceError: 1 i 4 wyrzuciłoby błąd.

Dzięki słowie kluczowemu `super`, wywołujemy konstruktor klasy rodzica z przekazywanym argumentem. Konstruktor otrzymuje `name` jako argument, więc musimy przekazać `name` do `super`.

Klasa `Labrador` otrzymuje dwa argumenty, `name` ponieważ poszerza naszą klasę `Dog`, i `size` jako dodatkową właściwość klasy `Labrador`. Oba te argumenty muszą być przekazane do kontstruktora `Labrador` - jest to wykonane poprawnie przy użyciu konstruktora z przykładu drugiego.

</p>
</details>

---

###### 67. Jaki jest wynnik?

```javascript
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

- A: `running index.js`, `running sum.js`, `3`
- B: `running sum.js`, `running index.js`, `3`
- C: `running sum.js`, `3`, `running index.js`
- D: `running index.js`, `undefined`, `running sum.js`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Przy użyciu słowa kluczowego `import` wszystkie importowane moduły są _wstępnie przeanalizowane_. Oznacza to, że importowane moduły są wykonywane jako _pierwsze_, a kod w pliku do którego importujemy nasze moduły zostaje wywołany _w następnej kolejności_.

Jest to inne działanie niż w przypadku `require()` w CommonJS. Wraz z `require()` możemy załadować zależności w trakcie wykonywania kodu. Jeśli w tym przypadku zastosowalibyśmy `require` zamiast `import` w konsoli zobaczylibyśmy: `running index.js`, `running sum.js`, `3`

</p>
</details>

---

###### 68. Jaki jest wynnik?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Każdy Symbol jest całkowicie unikalny. Celem przekazywanego argumentu do naszego Symbolu jest przekazanie opisu dla danego Symbolu. Wartość Symbolu nie jest zależna od przekazywanych argumentów. W naszym przypadku, gdy porównujemy nasze Symbole, jest to porównanie dwóch całkowicie nowych, unikalnych Symboli: pierwszy `Symbol('foo')`, drugi `Symbol('foo')`.Te dwie wartości są unikalne dlatego wynikiem porównania jest `false`.

</p>
</details>

---

###### 69. Jaki jest wynnik?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Przy pomocy metody `padStart` możemy dodać ekstra padding na początek naszego łańcucha znaków. Wartość przekazana w metodzie stanowi _całkowitą_ długość naszego stringa włącznie z paddingiem. String `"Lydia Hallie"` ma długość `12`. `name.padStart(13)` wstawia 1 spację na początek naszego stringu, ponieważ 12 + 1 to 13.

Jeśli jako argument w metodzie `padStart` przekażemy wartość mniejszą niż długość naszej tablicy padding nie zostanie dodany.

</p>
</details>

---

###### 70. Jaki jest wynnik?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: String zawierający wartość obrazka w postaci kodu
- D: Error

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Przy pomocy operatora `+` możemy połączyć stringi. W tym przypadku łączymy string `"🥑"` wraz ze stringiem `"💻"`, co w rezultacie daje nam `"🥑💻"`.

</p>
</details>

---

###### 71. Jak możemy pokazać w konsoli wartości, które są w komentarzach po console.log?

```javascript
function* startGame() {
  const Odpowiedź = yield "Do you love JavaScript?";
  if (Odpowiedź !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` i `game.next().value`
- B: `game.next.value("Yes")` i `game.next.value()`
- C: `game.next().value` i `game.next("Yes").value`
- D: `game.next.value()` i `game.next.value("Yes")`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Generator wstrzymuje nam wykonywanie funckcji jeśli napotka słowo kluczowe `yield`. Na początku musimy pozwolić, by funkcja dostarczyła string "Do you love JavaScript?", co może być wykonane przy pomocy zapisu `game.next().value`.

Każda linia jest wykonywana do momentu gdy napotkamy słowo klczowe `yield`. Słowo takie możemy znaleźć w pierwszej linii naszej funkcji: wykonanie zostaje wstrzymane wraz z dotarciem do pierwszego yield! - _Oznacza to, że zmienna `Odpowiedź` nie jest jeszcze zdefiniowana_

W momencie, gdy wywołujemy `game.next("Yes").value`, poprzedni `yield` jest zastąpiony wartością parametru przekazanego do funkcji `next()`, w tym przypadku jest to `"Yes"`. Wartość zmiennej `Odpowiedź` jest teraz równa `"Yes"`. Warunek zwraca namm `false` i `JavaScript loves you back ❤️` zostaje pokazane w konsoli.

</p>
</details>

---

###### 72. Jaki jest wynnik?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

`String.raw` zwraca ciąg znaków gdzie zabiegi takie jak (`\n`, `\v`, `\t` etc.) są ignorowane! Ukośnik ("\") może stanowić tutaj problem, ponieważ możemy skończyć z czyms podobnym do:

`` const path = `C:\Documents\Projects\table.html` ``

Co w efekcie da nam:

`"C:DocumentsProjects able.html"`

Poprzez zastosowanie `String.raw`, znaki takie zostaną zignorowane:

`C:\Documents\Projects\table.html`


W tym przypadku otrzymujemy `Hello\nworld` w naszej konsoli.

</p>
</details>

---

###### 73. Jaki jest wynnik?

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Funkcja async zawsze zwraca obietnicę. `await` nadal musi poczekać na spełnienie obietnicy: obietnica w stanie oczekiwania zostaje zwrócona w momencie wywołania `getData()` podczas gdy przypisujemy ją do zmiennej `data`.

Jeśli chcemy uzyskać dostęp do wartości naszej obietnicy `"I made it"`, moglibyśmy skorzystać z metody `.then()` na zmiennej `data`:

`data.then(res => console.log(res))`

W konsoli pojawiłoby się: `"I made it!"`

</p>
</details>

---

###### 74. Jaki jest wynnik?

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Metoda `.push()` zwraca nam _długość_ nowej tablicy. Wcześniej tablica zawierała jeden element (string `"banana"`) i miała długość `1`. Po dodaniu kolejnego elementu `"apple"` do talibcy, zawiera ona teraz dwa elementy i ma długość `2` - i właśnie to zostaje zwrócone z funkcji `addToList`.

Metoda `push` modyfikuje oryginalną tablicę. Jeśli chcemy zwrócić samą _tablicę_ z funkcji to w naszym return statement powinniśmy przekażać `list` po przekazaniu do niej elementu `item`

</p>
</details>

---

###### 75. Jaki jest wynnik?

```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
```

- A: `{ x: 100, y: 20 }`
- B: `{ x: 10, y: 20 }`
- C: `{ x: 100 }`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

`Object.freeze` sprawia, że dodawanie, usuwanie lub modyfikowanie właściwości w obiekcie jest niemożliwe (chyba, że wartością właściwości jest inny obiekt).

W momencie tworzenia zmiennej `shape` i przypisania do niego zamrożonego obiektu `box`, `shape` również odnosi się do zamrożonego obiektu. Możemy sprawdzić, czy obiekt jest zamrożony poprzeż zastosowanie `Object.isFrozen`. W tym przypadku `Object.isFrozen(shape)` zwróci nam true, ponieważ `shape` ma referencję do zamrożonego obiektu.

Jako że, `shape` jest zamrożony, a wartość `x` nie jest obiektem, nie możemy modyfikować właściwości `x`. `x` ma nadal wartość `10`, a w konsoli pojawi się `{ x: 10, y: 20 }`.

</p>
</details>

---

###### 76. Jaki jest wynnik?

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

W momencie, gdy pobieramy właściwość `name` z obiektu po prawej stronie, przypisujemy jej wartość `"Lydia"` do zmiennej o nazwie `myName`.

Wraz z zapisem `{ name: myName }` mówimy JavaScript'owi, że chcemy stworzyć nową zmienną `myName` z wartością właściwości `name` po prawej stronie.

Problem w tym, że chcemy pokazać w konsoli `name`, a zmienna ta nie jest zdefiniowana, pojawia się ReferenceError.

</p>
</details>

---

###### 77. Czy jest to przykład czystej funkcji (pure function)?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Tak
- B: Nie

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Funkcja czysto to taka, która _zawsze_ zwraca taki sam wynik, jeśli zostały przekazane takie same argumenty.

W naszym przypadku funkcja `sum` zawsze zwróci ten sam wynik. Jeśli przekażemy `1` i `2`, to _zawsze_ zwróci nam `3` - bez efektów ubocznych. Jeśli przekażemy `5` i `10` to _zawsze_ zwróci `15`. Jest to definicja funkcji czystych tzw. pure function.

</p>
</details>

---

###### 78. Jaki jest wynik?

```javascript
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- A: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- B: `Calculated! 20` `From cache! 20` `Calculated! 20`
- C: `Calculated! 20` `From cache! 20` `From cache! 20`
- D: `Calculated! 20` `From cache! 20` `Error`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Funckja `add` jest tzw. funkcją _zapamiętującą_. przy pomocy takiej funkcji, możemy wpisać do pamięci podręcznej wynik funkcji by przyspieszyć jej działanie. W tym przypadku tworzymy obiekt `cache`, który przechowuje wcześniej zwrócone wartości.

Jeśli wywołamy funkcję `addFunction` ponownie z tym samym argumentem, sparawdza ona czy nie mamy tej wartości w pamięci podręcznej. Jeśli tak, to zostanie zwróca wartość z pamięci podręcznej co w efekcie zaoszczędza nam czas. W innym przypadku, jeśli nie mamy takiej wartości w pamięci podręczej to zostaną wykonane działania z `else` i wynik będzie wpisany w pamięć podręczną.

Wywołujemy naszą funkcję trzy razy z taką samą przekazywaną wartością: przy pierwszym wywołaniu wartość nie jest jeszcze wpisana w pamięć podręczną. Wynik instrukcji warunkowej dla `num in cache` zwraca nam `false` i zostaje wykonany kod z bloku `else`: otrzymujemy w konsoli `Calculated! 20`. Nasz obiekt `cache` po tym wywołaniu wygląda następująco: `{ 10: 20 }`.

Przy drugim wywołaniu obiekt `cache` zawiera wartość, która nas interesuje. W przypadku instrukcji warunkowej `num in cache` zostanie zwrócone `true` i `"From cache! 20"` zostaje zwrócone w konsoli.

Za trzecim razem przekazujemy jako argument `5 * 2`, co w rezultacie daje nam `10`. Obiekt `cache` zawiera taką wartość. Warunek sprawdzający dla `num in cache` zwróci nam `true` i w konsoli zobaczymy `"From cache! 20"`.


</p>
</details>

---

###### 79. Jaki jest wynik?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` i `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` i `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` i `0` `1` `2` `3`
- D:  `0` `1` `2` `3` i `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A


Przy pomocy pętli _for-in_ iterujemy przez tzw. wyliczalne właściwości. W przypadku tablicy, wyliczalne właściwości to klucze elementów tablicy - indeksy elementów. Naszą tablicę możemy sobie wyobrazić w następujący sposób:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

W tym przypadku klucze to wyliczalne elementy. W konsoli zobaczymy: `0` `1` `2` `3`.

W przypadku pętli _for-of_ iterujemy przez iterowalne elementy. Tablica jest iterowalna. W przypadku, gdy iterujemy przez tablicę, zmienna "item" jest równa elementowi przez który obecnie iterujemy. W konsoli pojawia się `"☕"` ` "💻"` `"🍷"` `"🍫"`.

</p>
</details>

---

###### 80. Jaki jest wynik?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Tablica może przechowywać dowolną wartość. Liczby, ciągi znaków, obiekty, inne tablice, null, wartoci boolean'owskie i inne wyrażenia takie jak daty, funkcje lub obliczenia.

Element będzie miał wartość zwróconego działania. `1 + 2` zwróci `3`, `1 * 2` zwróci `2`, i `1 / 2` zwróci `0.5`.

</p>
</details>

---

###### 81. Jaki jest wynik?

```javascript
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
```

- A: `Hi there, `
- B: `Hi there, undefined`
- C: `Hi there, null`
- D:  `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Domyślną wartością dla argumentów jest `undefined`, chyba że wartość zostanie przekazana do funkcji. W tym przypadku nie przekazaliśmy wartości dla wartości dla `name`. `name` jest więc `undefined` i to zostaje pokazane w konsoli.

Od ES6 możemy ustawić wartośc domyślną dla parametrów. Na przykład: `function sayHi(name = "Lydia") { ... }`. W tym przypadku jeśli nie przekażamy nic w funkcji to `name` będzie miało wartość `Lydia`.

</p>
</details>

---

###### 82. Jaki jest wynik?

```javascript
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Wartość dla słowa kluczowego `this` jest zależna od źródła wywołania funkcji. W **metodzie** takiej jak `getStatus`, słowo kluczowe `this` odnosi się _do obiektu do którego należy sama metoda_. Metoda należy do obiektu `data`, więc `this` odnosi się do obiektu `data`. Kiedy zalogujemy `this.status`, właściwość `status` obiektu `data` zwróci nam `"🥑"`.

Przy pomocy metody `call` możemy zmienić kontekst i zmienić na co ma wskazywać słowo kluczowe `this`. W **funkcjach**, słowo kluczowe `this` odnosi się do _obiektu do którego funkcja należy_. Deklarujemy `setTimeout` w _obiekcie globalnym_, więc wewnątrz `setTimeout` `this` odnosi się do _obiektu globalnego_. W obiekcie globalnym mamy zmienną o nazwie _status_ z wartością `"😎"`. Podczas drugiego logowania, `this.status` wskazuje na `"😎"`.

</p>
</details>

---

###### 83. Jaki jest wynik?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Deklarujemy zmienną `city` z wartością równą właściwości `city` w obiekcie `person`. Nie ma właściwości w tym obiekcie o nazwie `city`, więc zmienna ta ma wartość `undefined`.

Zauważ, że _nie_ odnosimy się do samego obiektu `person`!. Zwyczajnie ustawiamy zmienną `city` równą wartości zmiennej `city` z obiekty `person`.

Następnie do `city` przypisujemy ciag znaków "Amserdam". Nie zmienia to obiektu person: nie ma odwołania do tego obiektu.

W przypadku logowania obiektu `person` zostaje zwrócony niezmodyfikowany obiekt.

</p>
</details>

---

###### 84. Jaki jest wynik?

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Zmienne deklarowane przy pomocy `const` i `let` mają zasięg blokowy. Blok to wszystk co znajduje się między nawiasami (`{ }`). W tym przypadku nasz blok stanowi instrukcja warunkowa. Nie możemy odnieść się do zmiennej spoza bloku, zostaje wyświetlony błąd ReferenceError.

</p>
</details>

---

###### 85. Jakie informacje pojawią się w konsoli?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: Wynik metody `fetch`.
- B: Wynik drugiego wywołania metody `fetch`.
- C: Wynik funkcji zwrotnej z poprzedniego wywołania `.then()`.
- D: Zawsze zwróci "undefined"

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Wartość `res` w drugim wywołaniu `.then` jest równy zwróconej wartości z poprzedniego `.then`. Można łączyć tak wywołania `.then` tworząc łańcuch, gdzie wartość jest przekazywana do następnej metody jako argument.

</p>
</details>

---

###### 86. Która opcja pozwala na ustawienie wartości `true` dla `hasName`. Nie możesz przekazać `true` jako argument.

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Przy pomocy `!!name` możemy określić czy wartość `name` jest prawdziwa, czy fałszywa. Jeśli name jest prawdziwa, co chcemy dokładnie sprawdzić: `!name` zwraca `false`. `!false` (to jest to czym `!!name` tak właściwie jest) zwraca `true`.

Przez ustawienie `hasName` równemu `name` ustawiamy tak naprawdę wartość `hasName` równą faktycznej wartości jaką przekazujemy do funkcji `getName`, a nie wartości boolean'owskiej.

`new Boolean(true)` zwraca wartość opakowaną w obiekt, a nie samą wartość boolean'owską.

`name.length` zwraca długość przekazywanego argumentu.

</p>
</details>

---

###### 87. Jaki jest wynnik?

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

By dostać się do określonej litery w stringu możemy skorzystać z notacji nawiasowej (bracket notataion). Pierwszy element w tablicy ma indeks 0 itd. W tym przypadku chcemy uzyskać literę, której indeks w stringu ma wartość 0. Dlatego w konsoli uzyskujemy `"I"`.

Metoda ta nie jest wspierana w IE7 i niżej. W tym przypadku musimy skorzystać z `.charAt()`.

</p>
</details>

---

###### 88. Jaki jest wynnik?

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Możemy ustawić wartość domyślną dla parametru. W tym przypadku przekazujemy tylko jeden argument do funkcji o wartości 10. Wartość drugiego parametru jest równa wartości pierwszego argumentu = `10`.
Oznacza to, że w naszej funkcji dodajemu `10 + 10`. Wynik konsoli będzie stanowił liczbę `20`.

</p>
</details>

---

###### 89. Jaki jest wynnik?

```javascript
// module.js
export default () => "Hello world"
export const name = "Lydia"

// index.js
import * as data from "./module"

console.log(data)
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: `Obiekt globalny z module.js`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Przy pomocy `import * as name` importujemy _wszystkie exporty_ z pliku `module.js` do pliku `index.js` jako nowy obiekt o nazwie `data`. W pliku `module.js` znajdują się dwa exporty: jeden domyślny oraz jeden z określoną nazwą. Exportem domyślnym się funkcja, która zwraca string `"Hello World"`, a export z nazwą to zmienna `name` z wartością `"Lydia"`.

Obiekt `data` ma właściwość domyślną dla domyślnych exportów (`default: export default body`). Inne właściwości mają nazwę nazwanego exportu oraz odpowiadające im wartości.

</p>
</details>

---

###### 90. Jaki jest wynnik?

```javascript
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Klasy są tzw. "syntactical sugar" w języku programistycznym dla funkcji konstruujących. "Syntactical sugar" oznacza, że jest to składnia, która ma na celu ułatwienie odczytywania lub wyrażania rzeczy - ma to być prostsze dla ludzkiego oka `:)`. Dla porównania ponieżej możesz zobaczyć powyższy zapis przy pomocy funkcji kontruującej:

```javascript
function Person() {
  this.name = name
}
```

Wywołując funkcję konstruującą ze słwem `new` tworzymy nową instancję `Person`, `typeof` zwraca `"object"` dla instancji. `typeof member` zwraca `"object"`.

</p>
</details>

---

###### 91. Jaki jest wynnik?

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Metoda `.push` zwraca _nową długość_ tablicy, a nie samą tablicę. Stosując zapis `[1, 2, 3].push(4)`, ustawiamy nową wartość dla `newList` równą długości tablicy tzn: `4`.

Następnie próbujemy dodać do `newList` przy pomocy `.push` nową wartość. Nie możemy jednak użyć metody `.push` na wartości numerycznej - otrzymujemy TypeError


</p>
</details>

---

###### 92. Jaki jest wynnik?

```javascript
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Normalne funkcje takie jak `giverLydiaPizza` mają właściwość `prototype`, która jest obiektem (prototype object) z właściwością `constructor`. Funkcje srzałkowem takie jak `giveLydiaChocolate` nie mają takiej właściwości. Dla próby dostania się do właściwości której nie ma otrzymamy `undefined`.

</p>
</details>

---

###### 93. Jaki jest wynnik?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` i `age` `21`
- B: `["name", "Lydia"]` i `["age", 21]`
- C: `["name", "age"]` i `undefined`
- D: `Error`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

`Object.entries(person)` zwraca tablicę z zagnieżdzonymi tablicami, które zawierają klucz i wartość obiektu:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

Przy zastosowaniu pętli `for-of` możemy iterować przez każdy element w tej tablicy - w tym przypadku tablicach w tablicach. Możemy dokonać destrukturyzacji takiej tablicy na zmienne już w pętli for-of dzięki zastosowaniu zapisu `const [x, y]`. `x` jest równe pierwszemy elementowi w tablicy (podtablicy), a `y` to drugi element w tablicy (podtablicy).

Pierwszą podtablicą jest `[ "name", "Lydia" ]`, z `x` równym `"name"`, oraz `y` równym `"Lydia"` i to pojawia się w konsoli.
Drugą podtablicą jest `[ "age", 21 ]`, z `x` erównym `"age"`, oraz `y` równym `21` i to pojawia się w konsoli

</p>
</details>

---

###### 94. Jaki jest wynnik?

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

`...args` jest parametrem reszty (rest parameter). Parametr reszty to tablica zawierająca wszystkie pozostałe argumenty, **i może być tylko ostatnim parametrem**! W tym przypadku, parametr reszty występuje jako drugi. Nie jest to dopuszczalne, więc zgłoszony zostanie błąd.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

Powyższy zapis działa i zostanie zwrócone: `[ 'banana', 'apple', 'orange', 'pear' ]`

</p>
</details>

---

###### 95. Jaki jest wynnik?

```javascript
function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else
  console.log('b is bigger')
  return
  a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))
```

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

W większości przypadkach w JS możemy pomijać średniki (`;`). JavaScript jednak dodaje jest po instrukcjach. Jest to tzw. **Automatyczne Wstawianie Średników** / **Automatic Semicolon Insertion**. Instrukcją może być np. zmienna, słowo kluczowe `throw`, `return`, `break` etc.

W tym przypadku napisaliśmy `return` i w nowej lini `a + b`. Jest to jednak nowa linia, silnik nie wie, że taką wartość chceś zwrócić. Zamiast tego zostanie dodany automatycznie średnik na końcu słowa `return`. Zapis wyglądałby następująco:

```javascript
  return;
  a + b
```

Oznacza to, że nigdy nie dochodzimy do operacji `a + b`. Funkcja zatrzymuje swoje działanie jak napotka `return`. Jeśli nie ma wartości do zwrócenia, to domyślnie zwracane jest `undefined`. Zauważ, że nie ma automatycznego wstawiania średnika po instrukcji warunkowej `if/else`


</p>
</details>

---

###### 96. Jaki jest wynnik?

```javascript
class Person {
  constructor() {
    this.name = "Lydia"
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah"
  }
}

const member = new Person()
console.log(member.name)
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Możemy przypisać klasę do innej klasy lub funkcji konstruująćej. W tym przypadku do `Person` przypisujemy klasę `AnotherPerson`. Wartością dla `name` w tym przypadku jest `Sarah`, więc taka wartość pojawi się w instancjach utworzonych przy pomocy `new Person`.

</p>
</details>

---

###### 97. Jaki jest wynnik?

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` i `["{Symbol('a')"]`
- B: `{}` i `[]`
- C: `{ a: "b" }` i `["a"]`
- D: `{Symbol('a'): 'b'}` i `[]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Symbol nie jest _wyliczalny_. Metoda Object.keys zwraca wszystkie _wyliczalne_ klucze dla obiektu. Symbol nie będzie widoczny, a zostanie zwrócona pusta tablica. W przypadku logowania całego obiektu, wszystkie właściwości są widoczne, nawet te które nie są wyliczalne.

Jest to jedna z wielu zalet Symbolu: poza tym, że reprezentuje całkowicie unikalną wartość ( co zapobiega przypadkowej kolizji obiektów, np. gdy pracujemy na dwóch bibliotekach które chcą dodać właściwości do tego samego obiektu ), możemy ukryć właściwości obiektu tym sposobem (chociaż nie do końca. Nadal możemy dostać się do SYmbolu poprzez `Object.getOwnPropertySymbols()`)

</p>
</details>

---

###### 98. Jaki jest wynnik?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` i `undefined`
- B: `[1, [2, 3, 4]]` i `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` i `{ name: "Lydia", age: 21 }`
- D: `Error` i `{ name: "Lydia", age: 21 }`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Funkcja `getList` otrzymuje jako argument tablicę. W momencie otrzymania tablicy dokonujemy na niej destrukturyzacji - zabieg taki może wyglądać w następujący sposób:

 `[x, ...y] = [1, 2, 3, 4]`

Parametr `...y` powoduje, że  zbierze on pozostałe elementy i umieści w tablicy. Pozostałe elementy w naszym przypadku to `2`, `3` oraz `4`. Wartością `y` jest tablica, zawierająca te elementy. `x` to pierwszy element z naszej tablicy i jest równy `1` w tym przypadku. W rezultacie w konsoli ozbaczymy `[1, [2, 3, 4]]`.

Funkcja `getUser` otrzymuje obiekt. Jeśli stosujemy funkcję strzałkową to _nie musimy_ umieszczać nawiasów klamrowych w przypadku, gdy zwracamy wartość bez operacji. Jeśli chcemy zwrócić _obiekt_ z naszej funkcji strzałkowej musimy go umieścić w nawiasach `()`, w innym przypadku nie zostanie zwrócona żadna wartość. Poniższa funkcja zwróciłaby obiekt:

```const getUser = user => ({ name: user.name, age: user.age })```

Jako, że nie została zwrócona żadna wartość, funkcja zwraca `undefined`.

</p>
</details>

---

###### 99. Jaki jest wynik?

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Zmienna `name`przechowuje wartość w postaci stringa, a nie funkcji - nie możemy wywołać stringa.

TypeError może się pojawić jeśli wartość nie jest oczekiwanego typu. JavaScript oczekuje, że `name` będzie funkcją - próbujemy ją wywołać. W naszym przypadku to string, dlatego pojawia się błąd TypeError: name is not a function!

SyntaxError pojawia się, gdy piszemy coś co nie jest dozwolone w JavaScript. Przykdładowo jeśli zamiast słowa `return` użyjemy `retrun`.

ReferenceErrors pojawiają się gdy JavaScript nie jest w stanie odszukać odwołania do wartości/zmiennej do której chcemy się dostać.

</p>
</details>

---

###### 100. Jaki jest wynik?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

`[]` jest wartością prawdziwą. Stosując w tym przypadku operator `&&` możemy się spodziewać, że wartość z jego prawej stronu zostanie zwrócona jeśli wartość po lewej stornie będzie prawdziwa. W tym przypadku po lewej stronie mamy `[]` co jest wartością prawdziwą. W tym przypadku `"Im"` zostanie zwrócone.

`""` jest wartością fałszywą. Jeśli lewa strona jest fałszywa nic nie zostanie zwrócone. `n't` nie zostaje zwrócone.

</p>
</details>

---

###### 101. Jaką wartość otrzymamy?

```javascript
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Przy pomocy operatora `||` możemy zwrócić pierwszą wartość prawdziwą. Jeśli wszystkie wartości są fałszywe (falsy), ostatni argument zostanie zwrócony.

`(false || {} || null)`: pusty obiekt zwraca true. To jest pierwsza i jedyna wartość zwracająca `true` i to ona zostanie zwrócona. `one` jest równe `{}`.

`(null || false || "")`: wszystkie argumenty są fałszywe w tym przypadku, więc zostanie zwrócona ostatnia wartość z tego zbioru. `two` ma wartość `""`.

`([] || 0 || "")`: pusta tablica zwraca true. Jest to pierwsza wartość true, więc pozostałe elementy nie są sprawdzane. `three` jest równe `[]`.

</p>
</details>

---

###### 102. What's the value of output?

```javascript
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
```

- A: `I have resolved!`, `second` i `I have resolved!`, `second`
- B: `second`, `I have resolved!` i `second`, `I have resolved!`
- C: `I have resolved!`, `second` i `second`, `I have resolved!`
- D: `second`, `I have resolved!` i `I have resolved!`, `second`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

W przypadku obietnic mówimy, że _Chcę wykonać tę funkcję, ale zostawię ją na boku teraz gdy jest wykonywana, bo może to trochę potrwać. Tylko gdy określona wartość zostanie zwrócona (lub odrzucona), oraz gdy stos wywołań (call stack) będzie pusty chcę z niej skorzystać_.

Możemy tą wartość uzyskać zarówno dzięki `.then` jak i `await` w funkcji `async`. Pomimo tego, że w przypadku tych dwóch operacji zostają zwrócone obietnice, same funkcje różnią się między sobą.

W przypadku funkcji `firstFunction` odkładamy tak jakby naszą funkcję zajmującą się obietnicą na bok - na czas wywoływania i zwracania wartości. W tym czasie kontynuujemy wykonywanie innych części naszej funkcji tzn. `console.log('second')`. Nastepnie po wykonaniu console.log otrzymujemy wynik naszej obietnicy w postaci stringa: `I have resolved`, co zostaje pokazane w konsoli jak tylko call stack będzie pusty.

W przypadku funkcji asynchronicznej `async` - `secondFunction` dosłownie zatrzymujemy działanie naszej funkcji dopóki nie uzyskamy wyniku z naszej obietnicy.

Oznacza to, że czekamy aż nasza obietnica `myPromise` zwróci `I have resolved`, a następnie przechodzimy do kolejnej linii w naszym kodzie gdzie wykonujemy `console.log('second')`.


</p>
</details>

---

###### 103. Jaki jest wynik?

```javascript
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[object Object]2`
- D: `"12"`, `Lydia2`, `[object Object]2`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Operator `+` nie jest wykorzystywany tylko do dodawania liczb. Możemy również łączyć przy jego pomocy stringi. Za każdym razem, gdy silnik JavaScript widzi, że jedna albo więcej wartości nie jest liczbą, dokonuje koercji liczby na string.

Pierwsza wartość to `1`, więc jest to wartość numeryczna. `1 + 2` zwraca nam liczbę 3.

Jednak druga wartość jest ciągiem znaków `"Lydia"`. `"Lydia"` jest stringiem a `2` jest liczbą: `2` zostaje zamienione na string. `"Lydia"` i `"2"` zostają połączone co w rezultacie daje nam `"Lydia2"`.

`{ name: "Lydia" }` jest obiektem. Ani liczba ani obiekt nie jest stringiem, więc wszystko zostaje zamienione na string. W naszym przypadku dodajemy `2` do obiektu co w rezultacie da nam: `"[object Object]2"`.

</p>
</details>

---

###### 104. Co uzyskamy po takim zabiegu?

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<resolved>: 5}`
- D: `Error`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Możemy przekazać każdy typ wartości do `Promise.resolve`, może to być obietnica lub nie. Metoda zwraca nam obietnicą z rozwiązaną/zwróconą wartością. Jeśli przekażemy normalną funkcję otrzymamy spełnioną obietnicę z normalną wartością. Jeśli przekażemy obietnicę, zostanie zwrócona spełniona obietnica ze spełnioną wartością obietnicy jaką przekazaliśmy.

W naszym przypadku przekazaliśmy wartość numeryczną `5`. Zostanie zwrócona spełniona obietnica z wartością `5`.

</p>
</details>

---

###### 105. Jaką wartość otrzymamy?

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Obiekty są przekazywane przez odwołanie. Jeśli sprawdziwmy obiekty pod względem ścisłej równości (`===`), porównujemy ich referencje.

Ustawiliśmy wartość domyślną dla `person2` równą obiektowi `person` i przekazaliśmy obiekt `person` jako pierwszy argument do funkcji.

Oznacza to, że oba obiekty mają odwołanie do tego samego miejsca w pamięci - są równe.

W rezultacie otrzymujemy wynik `They are the same!`.

</p>
</details>

---

###### 106. Jaką wartość otrzymamy?

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

W JavaScript możemy dostać się do właściwości obiektu na dwa sposoby: notacja nawiasowa `colorConfig["black"]` lub notacja kropkowa `colorConfig.black`. W tym przypadku stosujemy notację kropkową.

W przypadku notacji kropkowej JavaScript stara się odszukać właściwość w obiekcie o takiej samej nazwie. W naszej sytuacji JavaScript szuka właściwości `colors` w obiekcie `colorConfig`. Nie ma takiej właściwości, więc zostaje zwrócone `undefined`. Następnie próbujemy dostać się do wartości pierwszego elementu `[1]`. Nie możemy tego zrobić jeśli odnosimy się do `undefined`, dlatego też dostajemy `TypeError`: `Cannot read property '1' of udnefined`.

JavaScript interpretuje instrukcje. Kiedy widzi notację nawiasową widzi pierwszy nawiaz `[` i idzie dalej szukając uzupełniania w postaci nawiasu zamykającego `]`. Tylko wtedy wykona instrukcję. Jeśli zastosowalibyśmy poniższy zapis dostalibyśmy właściwość `red` obiektu `colorConfig`.

`colorConfig[colors[1]]`

</p>
</details>

---

###### 107. Jaki jest wynik?

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Emotikony mają postać unikodu. Unikod dla serca to `"U+2764 U+FE0F"`. Są one zawsze takie same dla tych samych emotikonek, więc porównujemy dwa takie same stringi - w rezultacie otrzymujemy true.

</p>
</details>

---

###### 108. Które z tych metod modyfikują oryginalną tablicę?

```javascript
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨')
emojis.splice(1, 2, '✨')
```

- A: `Wszystkie`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Stosując metodą `splice` modyfikujemy oryginalną tablicę poprzez usunięcie, zastąpienie lub dodanie elementów. W tym przypadku dwa elementy od indeksu 1 (pozbyliśmy się`'🥑'` i `'😍'`) i dodaliśmy ✨ zamiast tego.

`map`, `filter` i `slice` zwracają nowe tablice.`find` zwraca element, a `reduce` zwraca zredukowaną wartość.

</p>
</details>

---

###### 109. Jaki jest wynnik?

```javascript
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

W JavaScript, typy prymitywne (wszystko co nie jest obiektem) oddziałuje ze sobą przez _wartość_. W tym przypadku ustawiamy wartość właściwości obiektu na wartość pierwszego elementu tablicy. W tym przypadku `'🍕'`. String jest typem prymitywnym i oddziałuje przez wartość (zobacz [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference)

Następnie zmieniamy wartość właściwości obiektu `info`. Tablica z naszego przykładu się nie zmieniła, ponieważ wartość właściwości `favoriteFood` była jedynie _kopią_ wartości pierwszego elementu z tablicy i nie ma odeniesienia do tego samego miejsca w pamięci co element `food[0]`. Gdy logujemy food otrzymujemy takie wynik: `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. Co robi poniższa metoda?

```javascript
JSON.parse()
```

- A: Parsuje JSON do wartości JavaScript
- B: Parsuje obiekt JavaScript do JSON
- C: Parusje dowolną wartość JavaScript do JSON
- D: Parsuje JSON tylko na wartość obiektu JavaScript

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Dzięki metoda `JSON.parse()` możemy parsować ciągi znaków JSON do wartości JavaScript.

```javascript
// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. Jaki jest wynnik?

```javascript
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Każda funkcja ma swój _kontekst wywoławczy_ (lub _zasięg_). Funkcja `getName` na początku szuka wewnątrz własnego zasięgu funkcujnego, by sprawdzić czy zawiera on zmienną `name` i próbuje uzyskać do niej dostęp. W rtym przypadku funkcja `getName` posiada swoją własną zmienną `name`: deklarujemy zmienną przy pomocy słowa kluczowego `let` z wartością `'Sarah'` zaraz po próbie dostania się do tej wartości.

W przypadku `let` nie możemy dostać się wcześniej do zmiennej niż została zadeklarowana. JavaScript zgłasza nam błąd w postaci `ReferenceError` ponieważ staramy się uzyskać dostęp do zmiennej przed jej inicjalizacją.

Jeśli funkcja w zwoim ciele nie miała by deklaracji zmiennej `name`, silnik javascript szukałby dalej tej zmiennej poza swoim zakresem i odniósłby się do zmiennej z zasięgu globalnego z wartością `"Lydia"`.


```javascript
let name = 'Lydia'

function getName() {
  console.log(name)
}

getName() // Lydia
```

</p>
</details>

---

###### 112. Jaki jest wynnik?

```javascript
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
```

- A: `a` i `a`
- B: `a` i `undefined`
- C: `['a', 'b', 'c']` i `a`
- D: `a` i `['a', 'b', 'c']`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C


Przy pomocy słowa kluczowego `yield` możemy pozyskać wartość z funkcji generatora. Przy pomocy słowa kluczowego `yield*` możemy pozyskać wartości z innych funkcji generatora lub iterowalnego obiektu (np. tablicy).
W przypadku `generatorOne` pozyskujemy całą tablicę przez zastosowanie słowa `yield`. Wartość właściwości `value` na obiekcie zwróconym przez motodę `next` z `one` (`one.next().value`) jest równa całej tablicy.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```
W funkcji `generatorTwo` stosujemy `yield*`. Oznacza to, że pierwszą pozyskaną wartością dla `two` jest równa pierwszej pozyskanej wartości w iteracji. Iteracja dotyczy tablicy `['a', 'b', 'c']`.
Pierwszą pozyskaną wartością jest `a`, więc przy pierwszym wywołaniu `two.next().value`, `a`  jest zwracane.

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

###### 113. Jaki jest wynnik?

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Wyrażenia wewnątrz szablonu literału są wykonywane pierwsze. Oznacza to, że string będzie zawierał zwróconą wartość wyrażenia. Niezwłocznie wywołana funkcja `(x => x)('I love')` zwraca `I love` ponieważ `I love` jest tutaj argumentem.

</p>
</details>

---

###### 114. Co się wydarzy?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: Funkcja `setInterval` nie zostanie wywołana
- B: Funkcja`setInterval` zostanie wywołana raz
- C: Funkcja `setInterval` będzie wywoływana dalej w odstępach jednosekundowych
- D: Nigdy nie wywołaliśmy fukcji `config.alert()`, config ma wartość `null`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Zazwyczaj kiedy przypisujemy obiekt do wartości null trafia on do _garbage collectora_ jako, że nie ma już odenisienia do nich więcej. Jednak, w naszym przypadku funkcja wewnątrz `setInterval` jest funkcją strzałkową (przywiązaną do obiektu `config`) i funkcja zwrotna nadal ma odniesienie do obiektu `config`. Tak długo jak jest referencja, obiekt nie może być wrzucony obsłużony przez _garbage collector_. Funkcja `setInterval` nadal będzie wywoływana co 1s.

</p>
</details>

---

###### 115. Która metoda zwróci wartość 'Hello world!'`?

```javascript
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
```

- A: 1
- B: 2
- C: 2 i 3
- D: Wszystkie

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Kiedy dodajemy parę klucz/wartość przez zastosowanie metody `set`, klucz będzie wartością pierwszego przekazanego argumentu do funkcji `set`. a wartość będzie drugim argumentem przekazanym do tej funkcji. Kluczem jest _funkcja_ `() => 'greeting'` w tym przypadku, a wartością jest `'Hello world'`. `myMap` wygląda teraz tak: `{ () => 'greeting' => 'Hello world!' }`.

1 jest błędne, ponieważ kluczem nie jest `'greeting'` ale `() => 'greeting'`.
3 jest błędne, ponieważ tworzymy nową funkcję przekazując ją jako parametr do metody `get`. Obiekt oddziałuje przez referencję. Funkcje są obiektami, dlatego też te dwie funkcje nie są sobie równe, nawet jeśli z wyglądu wyglądają tak samo: mają odwołanie do innego miejsca w pamięci.

</p>
</details>

---

###### 116. Jaki jest wynnik?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Zarówno `changeAge` i `changeAgeAndName` mają domyślne parametry mianowicie _nowo utworzony_ obiekt `{ ...person }`. Ten obiekt ma kopię wszystkich kluczy/wartości obiektu `person`.

Na początku wywołujemy funkcję `changeAge` i przekazujemy obiekt `person` jako argument. Funkcja ta zwiększa wartość `age` o 1. `person` wygląda teraz tak: `{ name: "Lydia", age: 22 }`.

Następnie wywołujemy `changeAgeAndName`, ale nie przekazujemy parametru. Zamiast tego, wartość `x` stanowi teraz nasz _nowo utworozony_ obiekt `{ ...person }`. Jako, że jest to nowy obiekt, nie wpływa on na wartości właściwości obiektu `person`. `person` jest nadal równe `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### <a name=20191118></a>117. Która z następujących obpcji zwróci `6`?

```javascript
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

Stosując operator rozproszenia `...`, możemy _rozproszyć_ iterowalny obiekt na pojedyncze elementy. Funkcja `sumValues` otrzymuje trzy argumenty `x`, `y` oraz `z`. `...[1, 2, 3]` zwróci `1, 2, 3` i takie argumenty przekazujemy do funkcji.

</p>
</details>

---

###### 118. Jaki jest wynnik?

```javascript
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Wraz z zastosowaniem operatora `+=` zwiększamy wartość `num` o `1`. `num` ma wartość początkową `1`, więc `1 + 1 = 2`. Elementem z indeksem 2 w tablicy jest 🥰. `console.log(list[2])` zwraca 🥰.


</p>
</details>

---

###### 119. Jaki jest wynnik?

```javascript
const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```

- A: `undefined` `undefined` `undefined` `undefined`
- B: `Mara` `undefined` `Lydia Hallie` `undefined`
- C: `Mara` `null` `Lydia Hallie` `null`
- D: `null` `ReferenceError` `null` `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Stosując opcjolnany operator `?.` nie musimy dodatkowo sprawdzać czy zagnieżdżone głębiej wartości są poprawne czy nie. Jeśli staramy się dostać do właściwości z wartością `null` lub `undefined`, wyrażenie zwróci `undefined`.


`person.pet?.name`: `person` ma właściwość o nazwie `pet`: `person.pet` istnieje. Ma właściwość `name`, i zwraca `Mara`.
`person.pet?.family?.name`: `person` ma właściwość o nazwie  `pet`: `person.pet` istnieje. `pet` _nie ma_ właściwości `family`, `person.pet.family` nie istnieje  Wyrażanie zwraca `undefined`.
`person.getFullName?.()`: `person` ma właściwość o nazwie  `getFullName`: `person.getFullName()` istnieje i może być wywołane , zostaje zwrócone `Lydia Hallie`.
`member.getLastName?.()`: `member` nie jest zdefiniowany: `member.getLastName()` nie istnieje. Wyrażenie zwraca `undefined`.

</p>
</details>

---

###### 120. Jaki jest wynnik?

```javascript
const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
	console.log("We have to buy bananas!");
} else {
	console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

Przekazaliśmy warunek `groceries.indexOf("banana")` do instrukcji warunkowej. `groceries.indexOf("banana")` zwraca `0`. `0` przyjmuje wartość fałszywą, więc kod zostanie wykonany z bloku `else`. W rezultacie uzyskujemy `We don't have to buy bananas!`.

</p>
</details>

---

###### 121. Jaki jest wynnik?

```javascript
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
```

- A: `function language(lang) { this.languages.push(lang }`
- B: `0`
- C: `[]`
- D: `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Metoda `language` jest `setterem`. Settery nie przechowują aktualnej wartości, ich przeznaczeniem nie jest _modyfikacja_ właściwości. W momencie wywołania `settera`, zwracany jest `undefined`.

</p>
</details>

---

###### 122. Jaki jest wynnik?

```javascript
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

`typeof name` zwraca `"string"`. String `"string"` ma wartość prawdziwą, więc `!typeof name` zwraca wartość boolean'owską `false`. Zarówno `false === "object"` jak i `false === "string"` zwracają `false`.

(Jeśli chcemy sprawdzić czy typ nie jest równy w porównaniu z tym danym typem, powinniśmy napisać `!==` instead of `!typeof`)

</p>
</details>

---

###### 123. Jaki jest wynnik?

```javascript
const add = x => y => z => {
	console.log(x, y, z);
	return x + y + z;
};

add(4)(5)(6);
```

- A: `4` `5` `6`
- B: `6` `5` `4`
- C: `4` `function` `function`
- D: `undefined` `undefined` `6`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: A

Funkcja `add` zwraca funkcję strzałkową, która zwraca funkcję strzałkową, która zwraca funkcję strzałkową. Pierwsza funkcja otrzymuje argument `x` z wartością `4`. Wywołujemy drugą funkcję, która otrzymuje argument `y` z wartością `5`. Następnie wywołujemy trzecią funkcję, która otrzymuje argument `z` z wartością `6`. Kiedy staramy się dostać do wartości `x`, `y` i `z` wewnątrz ostatniej funkcji strzałkowej, silnika JS idzie w górę łańcucha zasięgu, by odszukać wartości dla `x` i `y`. W rezultacie otrzymujemy `4` `5` `6`.

</p>
</details>

---

###### TBC ----------->


###### 124. Jaki jest wynnik?

```javascript
async function* range(start, end) {
	for (let i = start; i <= end; i++) {
		yield Promise.resolve(i);
	}
}

(async () => {
	const gen = range(1, 3);
	for await (const item of gen) {
		console.log(item);
	}
})();
```

- A: `Promise {1}` `Promise {2}` `Promise {3}`
- B: `Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`
- C: `1` `2` `3`
- D: `undefined` `undefined` `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promsie, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.

</p>
</details>

---

###### 125. Jaki jest wynnik?

```javascript
const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};

myFunc(1, 2, 3);
```

- A: `1` `2` `3`
- B: `{1: 1}` `{2: 2}` `{3: 3}`
- C: `{ 1: undefined }` `undefined` `undefined`
- D: `undefined` `undefined` `undefined`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.

</p>
</details>

---

###### 126. Jaki jest wynnik?

```javascript
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat({
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  }).format(speed)

  const formattedAmount = new Intl.NumberFormat({
    'en-US',
    { style: 'currency', currency: 'USD' }
  }).format(amount)

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))
```

- A: The driver drove 130 and has to pay 300
- B: The driver drove 130 mph and has to pay \$300.00
- C: The driver drove undefined and has to pay undefined
- D: The driver drove 130.00 and has to pay 300.00

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currentcy` in `USD` results in `$300.00`.

</p>
</details>

---

###### 127. Jaki jest wynnik?

```javascript
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value "💀" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the "💀" to it. When logging `spookyItems`, `["👻", "🎃", "🕸", "💀"]` gets logged.

</p>
</details>

---

###### 128. Jaki jest wynnik?

```javascript
const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
```

- A: `true` `false` `true` `false`
- B: `true` `false` `false` `false`
- C: `false` `false` `true` `false`
- D: `false` `true` `false` `true`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.

With the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.

</p>
</details>

---

###### 129. Jaki jest wynnik?

```javascript
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: D

Variables declared with the `const` keyword are not referencable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.

</p>
</details>

---

###### 130. Jaki jest wynnik?

```javascript
const myPromise = Promise.resolve("Woah some cool data");

(async () => {
	try {
		console.log(await myPromise);
	} catch {
		throw new Error(`Oops didn't work`);
	} finally {
		console.log("Oh finally!");
	}
})();
```

- A: `Woah some cool data`
- B: `Oh finally!`
- C: `Woah some cool data` `Oh finally!`
- D: `Oops didn't work` `Oh finally!`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: C

In the `try` block, we're logging the awaited value of the `myPromise` variable: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.

</p>
</details>

---

###### 131. Jaki jest wynnik?

```javascript
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Odpowiedź</b></summary>
<p>

#### Odpowiedź: B

With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>
