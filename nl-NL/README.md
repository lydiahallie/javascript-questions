<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png"> 
  <h1>JavaScript Vragen</h1>

  ---

  <span>Ik plaats JavaScript meerkeuzevragen op mijn [Instagram](https://www.instagram.com/theavocoder) **stories**, welke ik ook hier zal plaatsen! Laatste update: <a href=#20191224><b>24 december</b></a>

  Van beginner naar expert: test hoe goed je JavaScript kent, fris je kennis een beetje op, of bereid je voor op een sollicitatiegesprek! :muscle: :rocket: Ik zal deze repository regelmatig updaten met nieuwe vragen. Ik heb de antwoorden toegevoegd in de **ingeklapte secties** onder een vraag, zodat je er makkelijk op kan klikken om ze uit te klappen. Het is gewoon voor je plezier, veel succes! :heart:</span>

  Voel je vrij om contact met mij op te nemen! 😊 <br />
  <a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https:/www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="www.lydiahallie.dev">Blog</a>
  </div>

---

<details><summary><b> Zie alle 17 beschikbare vertalingen</b></summary>
<p>

* [English](../en-EN/README.md)
* [العربية](../ar-AR/README_AR.md)
* [اللغة العامية - Egyptian Arabic](../ar-EG/README_ar-EG.md)
* [Bosanski](../bs-BS/README-bs_BS.md)  
* [Deutsch](../de-DE/README.md)  
* [Español](../es-ES/README-ES.md)
* [Français](../fr-FR/README_fr-FR.md)
* [日本語](../ja-JA/README-ja_JA.md)  
* [한국어](../ko-KR/README-ko_KR.md)
* [Nederlands](./nl-NL/README.md)
* [Português Brasil](../pt-BR/README_pt_BR.md)  
* [Русский](../ru-RU/README.md)
* [Українська мова](../ua-UA/README-ua_UA.md)  
* [Tiếng Việt](../vi-VI/README-vi.md)
* [中文版本](../zh-CN/README-zh_CN.md)
* [Türkçe](../tr-TR/README-tr_TR.md)
* [ไทย](../th-TH/README-th_TH.md)

</p>
</details>

---

###### 1. Wat is de uitkomst?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` en `undefined`
- B: `Lydia` en `ReferenceError`
- C: `ReferenceError` en `21`
- D: `undefined` en `ReferenceError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

In de functie declareren we eerst de `name` variabele met het keyword `var`. Dit betekent dat de variabele gehoisted wordt (geheugen wordt vrijgemaakt tijdens de Creation Phase) met de waarde `undefined`, tot het niveau waar we de variabele daadwerkelijk definiëren. We hebben de variable nog niet gedefinieerd tot op de lijn waar we proberen de `name` variabele te loggen naar het console. De variabele is dus wel al aanwezig, maar de waarde is nog steeds `undefined`.

Variabelen die gedeclareerd worden met het keyword `let` (en `const`) worden ook gehoisted, maar worden niet, in tegenstelling tot `var`, <i>geïnitialiseerd</i>. Ze zijn niet toegankelijk totaan de lijn waarop ze gedeclareerd (geïnitialiseerd) worden. Dit wordt de "temporal dead zone" genoemd. Wanneer we de variabele proberen te benaderen voordat deze gedeclareerd is gooit JavaScript een `ReferenceError`.

</p>
</details>

---

###### 2. Wat is de uitkomst?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` en `0 1 2`
- B: `0 1 2` en `3 3 3`
- C: `3 3 3` en `0 1 2`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Vanwege de Event Queue in JavaScript wordt de `setTimeout` callback functie aangeroepen _nadat_ de volledige loop is uitgevoerd. Omndat in de eerste loop de variabele `i` gedeclareerd wordt met het keyword `var`, wordt deze global gemaakt. Tijdens de loop verhogen we de waarde van `i` met `1` door middel van de unary operator `++`. Tegen de tijd dat de `setTimeout` callback functie wordt aangeroepen is de waarde van `i` al `3`, zoals te zien is in het eerste voorbeeld.

In de tweede loop wordt de variabele `i` gedeclareerd met het keyword `let`: variabelen die gedeclareerd worden met het keyword `let` (en `const`) zijn block-scoped (een scope is alles tussen `{ }`). Tijdens elke iteratie zal `i` een nieuwe waarde krijgen, en elke waarde is scoped (te gebruiken tussen `{ }`) in de loop.

</p>
</details>

---

###### 3. Wat is de uitkomst?

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

- A: `20` en `62.83185307179586`
- B: `20` en `NaN`
- C: `20` en `63`
- D: `NaN` en `63`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Merk op dat de waarde van `diameter` een gewone functie is, waarbij de waarde van `perimeter` een zogenaamde arrow functie is.

Bij arrow functies refereert het `this` keyword naar z'n huidige omliggende scope, zo niet bij gewone functie! Dat betekent dat wanneer we `perimeter` aanroepen het niet refereert naar het shape object, maar naar de omliggende scope (window bijvoorbeeld).

Er is geen propertie `radius` op dat object, daarom wordt `undefined` teruggegeven.

</p>
</details>

---

###### 4. Wat is de uitkomst?

```javascript
+true;
!"Lydia";
```

- A: `1` en `false`
- B: `false` en `NaN`
- C: `false` en `false`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

De unaire plus probeert een operand naar een nummer te converteren. `true` is `1`, en `false` is `0`.

De string `'Lydia'` is een truthy waarde. Wat we eigenlijk vragen, is "is deze truthy waarde falsy?". Dit geeft `false` terug.

</p>
</details>

---

###### 5. Welk antwoord is juist?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` is ongeldig
- B: `mouse[bird.size]` is ongeldig
- C: `mouse[bird["size"]]` is ongeldig
- D: Alle antwoorden zijn geldig

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

In JavaScript zijn alle object keys strings (tenzij het een Symbol is). En ook al zijn ze niet van het _type_ string, onder de motorkap worden ze altijd geconverteerd naar een string.

JavaScript interpreteert (of unboxed) statements. Wanneer we de bracket notatie gebruiken zal de interpreter de opening bracket `[` zien en net zolang doorgaan tot het een closing bracket `]` vindt. Alleen dan zal het de waarde bepalen van de declaratie.

`mouse[bird.size]`: Eerst wordt `bird.size` geëvalueerd, wat `"small"` teruggeeft. `mouse["small"]` geeft `true` terug.

Echter, met de dot notatie zal dit niet gebeuren. `mouse` heeft geen propertie genaamd `bird`, wat betekent dat `mouse.bird` `undefined` teruggeeft. Daarna vragen we de waarde op van `size` gebruikmakend van de dot notatie. Omdat `mouse.bird` `undefined` is vragen we eigenlijk de waarde op van `undefined.size`. Dit is ongeldig en zal een error gooien gelijk aan ``.

</p>
</details>

---


###### 6. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

In JavaScript worden alle objecten verwerkt _by reference_, ook wanneer we de waarde van een variabele vullen met een ander object.

In de eerste instantie verwijst de variabele `c` naar een object. Daarna wordt de waarde van de variabele `d` gezet met de waarde van `c`. Daardoor verwijst `d` naar hetzelfde object als `c`.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Wanneer je één object veranderd, verander je ze allemaal.

</p>
</details>

---

###### 7. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

`new Number()` is een ingebouwde functie constructor. En ook al lijkt het misschien op een nummer, dat is het niet. Het is een object en bevat ten opzichte van een nummer veel extra opties.

Wanneer we de `==` operator gebruiken wordt er alleen op de _waarde_ gecheckt. Zowel `a` als `b` bevatten de waarde `3`, dus geeft dit `true` terug. 

Echter, wanneer we de `===` operator gebruiken wordt er zowel op de _waarde_ als op het _type_ gecheckt. Omdat `new Number()` een **object** is en geen nummer zal dit `false` teruggeven.

</p>
</details>

---

###### 8. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

De `colorChange` functie is static. Static methods zijn alleen toegankelijk binnen de class waarin ze gedefinieerd worden, en zijn niet toegankelijk voor instanties van deze class. Omdat `freddie` een instantie is van `Cameleon` zijn static functies niet beschikbaar op deze instantie: een `TypeError` wordt gegooid.

</p>
</details>

---

###### 9. Wat is de uitkomst?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Het object wordt gelogd omdat we een leeg object hebben gedefinieerd op het global object! Wanneer we `greeting` verkeerd spellen als `greetign` ziet de JavaScript interpreter dit als `global.greetign = {}` (of `window.greetign = {}` in een browser).

Om dit te voorkomen kunnen we gebruik maken van `"use strict"`. Dit vangt af dat de variabele gedeclareerd moet zijn voordat het een waarde krijgt.

</p>
</details>

---

###### 10. What happens when we do this?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Niets, dit is helemaal goed!
- B: `SyntaxError`. Je kunt op deze manier geen properties toevoegen aan een functie.
- C: `"Woof"` wordt gelogd.
- D: `ReferenceError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Dit is mogelijk in JavaScript, omdat functies objecten zijn! (Alles behalve primitives zijn objecten)

Een functie is een speciaal object. De code die je schrijft is niet de uiteindelijke functie. De functie is een object met properties. Deze properties zijn gewoon benaderbaar.

</p>
</details>

---

###### 11. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Je kunt geen properties toevoegen aan een instantie van een object, zoals je kan met normale objecten. Als je een feature toe wilt voegen aan alle objecten in één keer zul je dit middels de prototype van een object moeten doen. In dit geval,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

Zou `member.getFullName()` aanroepbaar maken. Waarom is dit voordelig? Zeg dat we deze methode toe zouden kunnen voegen aan de instantie van een object. Misschien hebben niet alle instanties van `Person` deze methode nodig. Dit zou een hoop plaats innemen in het geheugen omdat alle objecten toch deze propertie krijgen. In plaats daarvan kunnen we het alleen aan de prototype van een object toevoegen, en wordt het maar één keer in het geheugen geplaatst, terwijl alle instanties er toch bij kunnen!

</p>
</details>

---

###### 12. Wat is de uitkomst?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` en `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` en `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` en `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` en `ReferenceError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Bij het declareren van `sarah` maakte we geen gebruik van het `new` keyword. Wanneer we `new` gebruiken refereert dit naar een nieuw object dat we aan willen maken. Als je geen gebruik maakt van `new` refereert het naar het **global object**!

We zeiden dat `this.firstName` gelijk is aan `"Sarah"` en `this.lastName` gelijk is aan `"Smith"`. Wat we eigenlijk deden is `global.firstName = 'Sarah'` en `global.lastName = 'Smith'` defineren. `sarah` zelf blijft `undefined` omdat we geen waarde teruggeven van de `Person` functie.

</p>
</details>

---

###### 13. Wat zijn de drie fases van event propagation?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Tijdens de **capturing** fase gaat het event door alle elementen in de boom naar beneden totaan het target element. Het komt dan bij het **target** element, en **bubbling** begint.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Alle objecten bevatten prototypes.

- A: true
- B: false

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Alle objecten bevatten een prototype, behalve het **base object**. Het base object is het object aangemaakt door de gebruiker, of een object dat is aangemaakt gebruikmakend van het `new` keyword. Het base object heeft toegang tot sommige methodes en properties, zoals `.toString`. Dit is de reden waarom je gebruik kan maken van ingebouwde JavaScript methodes! Al deze methodes zijn beschikbaar op het prototype. Wanneer JavaScript de methode niet direct kan vinden op het hoofd object zal het door de prototype chain naar beneden zoeken totdat het gevonden worden. Dit maakt het beschikbaar voor jou.

</p>
</details>

---

###### 15. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

JavaScript is een **dynamically typed language**: we specificeren niet van welk type variabelen zijn. Waarden kunnen automatisch worden geconverteerd naar andere typen zonder dat je het weet. Dit wordt _implicit type coercion_ genoemd. **Coercion** is converteren van het ene type naar het andere type.

In dit voorbeeld wordt het nummer `1` door JavaScript geconverteerd naar een string, dit om de functie logisch te maken, en de waarde teruggeven. Tijdens het optellen van het numerieke type (`1`) en een string (`'2'`) wordt het nummer gezien als een string. We kunnen strings aaneenschakelen zoals `"Hello" + "World"`. Wat er dus gebeurt hier is `"1" + "2"` wat `"12"` teruggeeft.

</p>
</details>

---

###### 16. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

De **postfix** unary operator `++`:

1. Geeft de waarde terug (in dit geval `0`)
2. Vermeerderd de waarde (number is nu `1`)

De **prefix** unary operator `++`:

1. Vermeerderd de waarde (number is nu `2`)
2. Geeft de waarde terug (in dit geval `2`)

Dit geeft `0 2 2` terug.

</p>
</details>

---

###### 17. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Als je gebruik maakt van taggedd template literals is de waarde van het eerste argument altijd een array van de meegegeven string waarden. De overgebleven argumenten krijgen de waarde van de doorgegeven expressies!

</p>
</details>

---

###### 18. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Wanneer we waarden vergelijken worden primitieven vergelijken _by value_, terwijl objecten vergelijken worden _by reference_. JavaScript bekijkt of de objecten een referentie hebben naar dezelfde lokatie in het geheugen.

De twee objecten die we vergelijken hebben dat niet: het object die we doorgeven als een parameter refereert naar een andere lokatie in het geheugen dan het object waarmee we vergelijken.

Dit is waarom `{ age: 18 } === { age: 18 }` en `{ age: 18 } == { age: 18 }` allebei `false` teruggeven.

</p>
</details>

---

###### 19. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

De rest parameter (`...args`.) laat ons alle overgebleven argumenten "verzamelen" in een array. Een array is een object, dus `typeof args` geeft `"object"` terug.

</p>
</details>

---

###### 20. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Door gebruik te maken van `"use strict"` kun je er zeker van zijn dat je niet perongeluk globale variabelen declareert. We hebben de variabele `age` nooit gedeclareerd, en omdat we `"use strict"` gebruiken zal dit een reference error gooien. Als we geen gebruik hadden gemaakt van `"use strict"` had het wel gewerkt, omdat de propertie `age` dan was toegevoegd aan het globale object.

</p>
</details>

---

###### 21. Wat is de waarde van `sum`?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

`eval` voert code uit dat is meegegeven als string. Als het een expressie is, zoals in dit geval, zal het de expressie uitvoeren. De expressie is `10 * 10 + 5`. Dit geeft het getal `105` terug.

</p>
</details>

---

###### 22. Hoe lang is cool_secret benaderbaar?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Voor altijd, de data gaat niet verloren.
- B: Wanneer de gebruiker de tab sluit.
- C: Wanneer de gebruiker de gehele browser sluit, niet alleen de tab.
- D: Wanneer de gebruiker zijn computer afsluit.

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

De data opgeslagen in `sessionStorage` wordt verwijderd na het sluiten van de _tab_.

Als je `localStorage` had gebruikt was de data wel voor altijd opgeslagen, zolang bijvoorbeeld `localStorage.clear()` wordt aangeroepen.

</p>
</details>

---

###### 23. Wat is de uitkomst?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Met het `var` keyword kun je meerdere variabelen met dezelfde naam declareren. De variabele zal dan de laatst gezette waarde bevatten.

Je kunt dit niet doen met `let` of `const`, omdat deze block-scoped zijn.

</p>
</details>

---

###### 24. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Alle object keys (Symbols uitgesloten) zijn onder de motorkap strings, zelfs als je het zelf niet een string gemaakt hebt. Dat is waarom `obj.hasOwnProperty('1')` ook `true` teruggeeft.

Dit werkt niet op deze manier voor een set. Er is geen `'1'` in onze set: `set.has('1')` geeft `false` terug. Het heeft de numerieke waarde `1`, `set.has(1)` geeft `true` terug.

</p>
</details>

---

###### 25. Wat is de uitkomst?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Als je twee properties met dezelfde naam hebt zal de waarde van de al bestaande propertie overschreven worden. Het zal dan ook in de eerste positie blijven, maar met de laatste waarde.

</p>
</details>

---

###### 26. De JavaScript global execution context maakt twee dingen aan voor je: het globale object, en het "this" keyword.

- A: true
- B: false
- C: het hangt er vanaf

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

De base execution context is de global execution context: dit is benaderbaar overal in je code.

</p>
</details>

---

###### 27. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

De `continue` statement slaat een iteratie over als een bepaalde conditie `true` teruggeeft.

</p>
</details>

---

###### 28. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

`String` is een built-in constructor waaraan we properties kunnen toevoegen. Primitieve strings worden automatisch geconverteerd naar een string object, gegenereerd door de string prototype functie. Daarom hebben alle strings (string objecten) toegang tot de methode!

</p>
</details>

---

###### 29. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Object keys worden automatisch geconverteerd naar strings. We proberen een object aan een propertie toe te wijzen van object `a`, met de waarde `123`.

Maar als we een object converteren naar een string krijgen we `"[object Object]"` terug. Wat we hier dus schrijven is `a["object Object"] = 123`. Dan kunnen we hetzelfde nog een keer proberen. `c` is een ander object dat converteren naar een string. En dan, `a["object Object"] = 456`.

Dan loggen we `a[b]`, waar eigenlijk `a["object Object"]` staat. We overschrijven dat met `456`, en dit is ook wat gelogd wordt.

</p>
</details>

---

###### 30. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

We hebben een `setTimeout` functie en roepen het als eerste aan. Toch wordt het als laatste gelogd.

Dit komt doordat we in browsers niet alleen een runtime engine hebben, maar ook iets dat een `WebAPI` genoemd wordt. De `WebAPI` geeft ons een `setTimeout` functie, en bijvoorbeeld ook de DOM.

Nadat de _calback_ naar de WebAPI is gestuurd wordt de `setTimeout` functie zelf (niet de callback functie) van de stack gegooid.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Dan wordt `foo` uitgevoerd en `"First"` wordt gelogd.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` wordt van de stack gegooid en `baz` wordt uitgevoerd. `"Third"` wordt gelogd.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

De WebAPI kan niet zomaar dingen toevoegen aan de stack. In plaats daarvan wordt de callback functie op de zogenaamde _queue_ gezet.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Dit is waar de event loop zijn intrede doet. Een ***event loop* naar de stack en de task queue. Als de stack leeg is pakt het het eerste ding op van de queue en zet het op de stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` wordt uitgevoerd, `"Second"` wordt gelogd, en het verdwijnt van de stack.

</p>
</details>

---

###### 31. Wat is de event.target wanneer geklikt wordt op de knop?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Buitenste `div`
- B: Binnenste `div`
- C: `button`
- D: Een array van alle geneste elementen.

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Het diepst geneste element dat het event afvuurt is de target van het event. Je kunt bubbling stoppen met `event.stopPropagation`.

</p>
</details>

---

###### 32. Wat wordt er gelogd wanneer je op de paragraaf klikt?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Als we op `p` klikken zien we twee logs: `p` en `div`. Tijdens de event propagation zijn er 3 fases: capturing, target, en bubbling. Standaard worden event handlers uitgevoerd in de bubbling fase (tenzij je `useCapture` op `true` zet). Bubbling begint bij het diepst geneste element omhoog.

</p>
</details>

---

###### 33. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Op beide manieren kunnen we een object doorgeven waarnaar het `this` keyword verwijst. Echter, `.call` wordt _direct uitgevoerd_!

`.bind` geeft een _kopie_ terug van de functie, maar met een bound context! Het wordt niet direct uitgevoerd!

</p>
</details>

---

###### 34. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

De `sayHi` functie geeft de waarde terug van de direct aangeroepen functie (IIFE). Deze functie geeft `0` terug, die het type `number` heeft.

FYI: er zijn slechts 7 ingebouwde types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, en `symbol`. `"function"` is geen type omdat functies objecten zijn, en dus van het type `"object"`.

</p>
</details>

---

###### 35. Welke van deze waarden zijn falsy?

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
- D: Ze zijn allemaal falsy

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Er zijn slechts zes falsy waarden:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (lege string)
- `false`

Functie constructors, zoals `new Number` en `new Boolean`, zijn truthy.

</p>
</details>

---

###### 36. Wat is de uitkomst?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

`typeof 1` geeft `"number"` terug.
`typeof "number"` geeft `"string"` terug.

</p>
</details>

---

###### 37. Wat is de uitkomst?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Wanneer je een element van een array een waarde geeft die buiten de lengte van de array ligt zal JavaScript voor de tussenliggende elementen zogenaamde "empty slots" aanmaken. Deze hebben eigenlijk de waarde `undefined`, maar je zult zoiets zien als:

`[1, 2, 3, 7 x empty, 11]`

afhankelijk van waar je de code uitvoert (het verschilt in alle browsers, node, etc.)

</p>
</details>

---

###### 38. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Het `catch` block krijgt het argument `x` mee. Dit is niet dezelfde `x` als de variabele zoals bovenaan gedefinieerd. De meegegeven `x` is block-scoped.

Later vullen we deze block-scoped variabele met `1`, en zetten de waarde van de variabele `y`. Dan loggen we de block-scoped variabele `x`, die op dat moment `1` bevat.

Buiten het `catch` block is de variable `x` nog steeds `undefined`, `y` is echter `2`. Wanneer we beide variabelen buiten de try...catch statement loggen zal `x` `undefined` teruggeven en `y` `2`.

</p>
</details>

---

###### 39. Alles in JavaScript is of een...

- A: primitieve of een object
- B: functie of een object
- C: lastige vraag! alleen objecten
- D: nummer of een object

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

JavaScript bestaat alleen uit primitieve types en objecten.

Primitieve types zijn `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, en `symbol`.

Wat primitieven onderscheidt van objecten is dat primitieven geen properties of methodes bevatten. Echter, je zal opmerken dan `'foo'.toUpperCase()` resulteert in `'FOO'` en geen `TypeError` gooit. Dit komt doordat wanneer je een propertie of een methode benadert van een primitieve zoals een string, JavaScript impliciet het object wrapped gebruikmakend van één van de wrapper classen, in dit geval `String`, en daarna direct de wrapper weghaalt als de expressie heeft geresulteerd in een waarde. Alle primitieven vertonen dit gedrag, met uitzondering van `null` en `undefined`.

</p>
</details>

---

###### 40. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

`[1, 2]` is onze initiële waarde. Dit is de waarde waarmee we starten, en de waarde van de allereerste `acc`. Tijdens de eerste iteratie, `acc` is `[1, 2]` en `cur` is `[0, 1]`. Deze waarden concateneren we, wat resulteerd in `[1, 2, 0, 1]`.

Tijdens de volgende iteratie `acc` is `[1, 2, 0, 1]` en `cur` is `[2, 3]`. Deze worden wederom geconcateneerd en resulteerd in `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

---

###### 41. Wat is de uitkomst?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

`null` is falsy. `!null` geeft `true` terug. `!true` geeft `false` terug.

`""` is falsy. `!""` geeft `true` terug. `!true` geeft `false` terug.

`1` is truthy. `!1` geeft `false` terug. `!false` geeft `true` terug.

</p>
</details>

---

###### 42. Wat geeft de `setInterval` methode terug in de browser?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: een uniek id
- B: het aantal opgegeven milliseconden
- C: de doorgegeven functie
- D: `undefined`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Het geeft een uniek id terug. Dit id kan gebruikt worden om de interval te stoppen door het mee te geven aan de `clearInterval()` functie.

</p>
</details>

---

###### 43. Wat geeft dit terug?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Een string is een iterable. The spread operator arrangeert elk karakter van een iterable naar één element.

</p>
</details>

---

###### 44. Wat is de uitkomst?

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
- D: `0, 10 en 10, 20`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C
Reguliere functies kunnen niet worden gestopt halverwege na de aanroep. Echter, een generator functie kan wel "gestopt" worden halverwege, en later verder gaan waar ik gestopt is. Elke keer als een generator functie het keyword `yield` aantreft levert de functie de waarde op gespecificeerd achter `yield`. Let op dat een generator functie in dat geval niet de waarde _teruggeeft_, maar de waarde _oplevert_.

Eerst initialiseren we de generator functie met `i`, dat gelijk is aan `10`. We roepen de generator functie aan met de `next()` methode. De eerste keer dat we de generator functie aanroepen is `i` gelijk aan `10`. De eerste `yield` wordt aangetroffen: het levert de waarde op van `i`. De generator is nu "gepauzeerd" en `10` wordt gelogd.

Dan roepen we de functie nog een keer aan met de `next()` methode. Het gaat verder waar het eerder gebleven is, waarbij `i` nog steeds gelijk is aan `10`. Nu wordt de volgende `yield` aangetroffen, en levert `i * 2` op. `i` is gelijk aan `10`, dus het levert `10 * 2` op, wat gelijk is aan `20`. Het resultaat is dus `10, 20`.

</p>
</details>

---

###### 45. Wat geeft dit terug?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Wanneer we meerdere promises meegeven aan de `Promise.race` methode zal het de _eerste_ promise resolven/rejecten. Aan de `setTimeout` methodes geven we een timer mee: 500ms voor de eerste promise (`firstPromise`) en 100ms voor de tweede promise (`secondPromise`). Dit betekent dat de `secondPromise` als eerste resolved met de waarde `'two'`. `res` bevat nu de waarde `'two'`, wat dus gelogd wordt.

</p>
</details>

---

###### 46. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Allereerst declareren we een variabele `person` met de waarde van een object met een propertie `name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Dan declareren we een variabele genaamd `members`. We vullen het eerste element van die array met de waarde van de variabele `person`. Objecten interacteren _by reference_. Wanneer je de ene referentie van een variabele toewijst aan een andere variabele, maak je een _kopie_ van die referentie (let op dat ze niet _dezelfde_ referentie hebben!).

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Dan zetten we de variabele `person` gelijk aan `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

We passaen alleen de waarde aan van de `person` variabele en niet van het eerste element in de array, omdat dat element een andere referentie heeft (gekopieerd) naar dat object. Het eerste element behoudt nog steeds een referentie naar het eerste object. Wanneer we de array `members` loggen heeft het eerste element nog steeds de waarde van het object, wat dus gelogd wordt.

</p>
</details>

---

###### 47. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Met een `for-in` loop kunnen we itereren over object keys, in dit geval `name` en `age`. Onder de motorkap zijn object keys strings (als het geen Symbols zijn). Bij elke iteratie is de waarde van `item` gelijk aan de huidige key waarover wordt geïtereerd. Bj de eerste iteratie is `item` gelijk aan `name` en wordt gelogd. Bij de tweede iteratie is `item` gelijk aan `age` en wordt gelogd.

</p>
</details>

---

###### 48. Wat is de uitkomst?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Operator associativiteit is de volgorde waarin de compiler de expressies evalueerd, of van links naar recht of van rechts naar links. Dat gebeurt alleen als alle operators _dezelfde_ prioriteit hebben. In dit geval hebben we maar één type operator: `+`. In beginsel, de associativiteit is van links naar rechts.

`3 + 4` wordt eerst geëvalueerd. Dit levert het getal `7` op.

`7 + '5'` resulteert in `"75"` door coersion. JavaScript converteert het getal `7` naar een string, zo ook te zien bij vraag 15. We kunnen twee stringen concateneren door gebruik te maken van de `+` operator. `"7" + "5"` resulteert in `"75"`.

</p>
</details>

---

###### 49. Wat is de waarde van `num`?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Alleen het eerste getal in de string wordt geretourneerd. Gebaseerd op de _radix_ (het tweede argument om te speciferen naar welk type nummer we het willen parsen: base 10, hexadecimal, octal, binary, etc.), de `parseInt` methode checkt of de karakters in de string geldig zijn. Zodra het een karakter tegenkomt dat niet een geldig getal is in het eerste argument stopt het parsen en worden opvolgende karakters genegeerd.

`*` is geen geldig getal. Alleen `"7"` wordt geparsed naar een decimal `7`. `num` bevat nu de waarde `7`.

</p>
</details>

---

###### 50. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Wanneer je iterate over een array gebruik makend van de `map()` methode is de waarde van `num` gelijk aan het huidige element dat verwerkt wordt. In dit geval zijn de elementen getallen en de conditie van de if statement `typeof num === "number"` geeft `true` terug. De `map()` methode maakt een nieuwe array aan met als inhoud het resultaat van het aanroepen van de meegegeven functie op elk van de elementen uit de originele array.

Echter geven wij nooit een waarde terug. Wanneer we geen waarde toevoegen in de functie zal de functie `undefined` teruggeven. De functie wordt voor elk element in de originele array aangeroepen en voor elk element geven we `undefined` terug.

</p>
</details>

---

###### 51. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A
Argumenten worden meegegeven _by value_, tenzij de waarde een object is. Dan worden ze meegegeven _by reference_. `birthYear` is een string en geen object, waardoor het dus doorgegeven wordt _by value_. Wanneer we een argument meegeven _by value_ wordt er een _copy_ aangemaakt van het argument (zie vraag 46).

De variabele `birthYear` heeft een referentie naar de waarde `"1997"`. Het argument `year` heeft ook een referentie naar de waarde '"1997"', maar het is niet dezelfde waarde als waar `birthYear` een referentie naar heeft. Wanneer we de waarde van `year` veranderen naar `"1998"`, veranderen we alleen de waarde van `year`. `birthYear` is nog steeds gelijk aan `"1997"`.

De waarde van `person` is een object. Het argument `member` heeft een (gekopieerde) referentie naar _hetzelfde_ object. Wanneer we een propertie veranderen van het object waar `member` een referentie naartoe heeft zal de waarde van `person` ook veranderen, omdat beide een referentie hebben naar hetzelfde object. De propertie `name` van `person` is nu gelijk aan `"Lydia"`.

</p>
</details>

---

###### 52. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Met de `throw` statement kunnen we custom errors gooien. Een exceptie kan een <b>string</b>, een <b>number</b>, een <b>boolean</b> of een <b>object</b> zijn. In dit geval onze exceptie is aan string met de waarde `'Hello world'`.

Met de `catch` statement kunnen we specificeren wat er moet gebeuren als er een exceptie is gegooid in het `try` blok. Een exceptie is gegooid: de string `'Hello world'`. `e` is nu gelijk aan deze string en wordt dus gelogd. Dat resulteert in `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Wanneer je een propertie teruggeeft zal de waarde van de propertie gelijk zijn aan de _geretourneerde_ waarde, niet de waarde die gezet wordt in de constructor. We geven de string `"Maserati"` terug, dus `myCar.make` is gelijk aan `"Maserati"`.

</p>
</details>

---

###### 54. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

`let x = y = 10;` is een verkorte versie van:

```javascript
y = 10;
let x = y;
```

Wanneer we de waarde van `y` vullen met `10` voegen we eigenlijk een propertie `y` toe aan het globale object (`window` in de browser, `global` in Node). In de browser is `window.y` nu gelijk aan `10`.

Daarna declareren we de variabele `x` met de waarde van `y`, wat 10 is. Variabelen die gedeclareerd worden met het keyword `let` zijn _block scoped_, ze zijn alleen gedefinieerd binnen het blok waarin ze gedeclareerd zijn. In dit geval de direct aangeroepen functie (IIFE). Wanneer we de operator `typeof` gebruiken is `x` dus niet gedefinieerd; we proberen `x` te benaderen buiten de scope waarin het gedeclareerd is. Dat betekent dat `x` niet gedefinieerd is. variabelen die nog geen waarde toegewezen hebben gekregen zijn van het type `"undefined"`. `console.log(typeof x)` geeft `"undefined"` terug.

Echter, we hebben een globale variabele `y` aangemaakt toen we 'y' vulde met `10`. Deze waarde is overal toegankelijk in onze code. `y` is gedefinieerd en bevat de waarde `"number"`. `console.log(typeof y)` geeft `"number"` terug.

</p>
</details>

---

###### 55. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

We kunnen properties verwijderen van een object als we gebruik maken van het `delete` keyword, en ook op het prototype. Bij het verwijderen van een propertie op de prototype zal het niet meer beschikbaar zijn in de prototype chain. In dit geval is de `bark()` methode niet meer beschikbaar op de protoype na `delete Dog.prototype.bark`. 

Wanneer we iets proberen aan te roepen dat geen functie is zal er een `TypeError` gegooid worden. In dit geval `TypeError: pet.bark is not a function`, omdat `pet.bark` `undefined` is.

</p>
</details>

---

###### 56. Wat is de uitkomst?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Het `Set` object is een collectie van _unieke_ waarden: een waarde kan maar één keer voorkomen in een set.

We geven de array `[1, 1, 2, 3, 4]` mee met de dubbele waarde `1`. Omdat we niet twee keer dezelfde waarde kunnen hebben in een set zal één van deze dubbele waarden verwijderd worden. Dit resulteert in `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Een geïmporteerde module is _readonly_: je kunt de geïmporteerde module niet aanpassen. Alleen de module die de exports doet kan de waarde aanpassen.

Wanneer we de waarde van `myCounter` aanpassen zal dit een error gooien: `myCounter` is read-only en cannot be modified.

</p>
</details>

---

###### 58. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

De `delete` operatot geeft een boolean waarde terug: `true` bij een succesvolle verwijdering, anders zal het `false` teruggeven. Echter, variabelen die gedeclareerd worden met de keywords `var`, `const` en `let` kunnen niet verwijderd worden met de `delete` operator.

De variabele `name` werd gedeclareerd met het keyword `const`, dus het verwijderen is niet succesvol: `false` wordt teruggegeven. Wanneer we `age` de waarde `21` geven voegen we eigenlijk een propertie `age` toe aan het globale object. Properties van objecten kunnen prima verwijderd worden op deze manier, ook van het globale object, dus `delete age` geeft `true` terug.

</p>
</details>

---

###### 59. Wat is de uitkomst?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

We kunnen waarden van arrays en objecten uitpakken door `destructuring`. Voorbeeld:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

De waarde van `a` is nu `1` en de waarde van `b` is nu `2`. Wat we dus eigenlijk deden in de vraag is:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Dat betekent dat de waarde van `y` gelijk is aan de eerste waarde van de array, het getal `1`. Wanneer we `y` loggen, geeft dit `1` terug.

</p>
</details>

---

###### 60. Wat is de uitkomst?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Het is mogelijk om objecten samen te voegen door gebruik te maken van de spread operator `...`. Het geeft je de mogelijkheid om key/value pairs van het ene object te kopiëren naar een ander object. In dit geval maken we een kopie van het `user` object en voegen het samen met het `admin` object. Het `admin` object bevat nu de gekopieerde key/value pairs, wat resulteert in `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Met de `defineProperty` methode kunnen we properties toevoegen aan een object, of bestaande properties aanpassen. Wanneer we properties toevoegen aan een object door gebruik te maken van `defineProperty` zijn deze standaard _not enumerable_. De `Object.keys` methode geeft alle _enumerable_ propertie namen terug van een object, in dit geval alleen `"name"`. 

Properties toegevoegd met de `defineProperty` methode zijn standaard onveranderbaar. Je kunt dit gedrag aanpassen door, in het derde argument, de `writable`, `configurable` en `enumerable` opties mee te geven. Op die manier geeft de `defineProperties` je veel controle over de properties die je wilt toevoegen aan een object.

</p>
</details>

---

###### 62. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Het tweede argument van `JSON.stringify` is de _replacer_. De replacer kan óf een functie zijn óf een array, en geeft je controle over wat en hoe de waarden gestringified worden.

Als de replacer een _array_ is zullen alleen de propertie namen die in de array zitten toegevoegd worden aan de JSON string. In dit geval worden alleen de properties `"level"` en `"health"` toegevoegd, `"username"` niet. `data` is nu gelijk aan `"{"level":19, "health":90}"`.

Als de replacer een _functie_ is zal die functie worden aangeroepen over elke propertie in het object dat je omzet naar een string. De waarde die teruggegeven wordt door die functie zal de waarde zijn van die propertie wanneer het wordt toegevoegd aan de JSON string. Als de waarde `undefined` is zal de property niet worden toegevoegd aan de JSON string.

</p>
</details>

---

###### 63. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

De unary operator `++` geeft eerst de waarde van de variabele terug, en pas daarna de waarde verhogen van de variabele. De waarde van `num1` is `10` omdat de `increaseNumber` functie eerst de waarde van `num` teruggeeft, wat `10` is, en pas daarna de waarde van `num` verhogen met 1.

`num2` is `10` omdat we `num1` meegeven aan de functie `increasePassedNumber`. `number` is gelijk aan `10` (de waarde van ` num1`). Nogmaals, de unary operator `++` zal _eerst_ de huidige waarde van de variabele teruggeven en pas _daarna_ de waarde verhogen. De waarde van `number` is `10`, dus de waarde van `num2` is ook `10`.

</p>
</details>

---

###### 64. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

In ES6 kunnen we parameters initialiseren met een standaard waarde. De waarde van de parameter zal deze standaard waarde behouden zolang er geen andere waarde wordt meegegeven aan de functie, of als de waarde van de parameter `"undefined"` is. In dit geval kopiëren we de properties van het `value` object
naar een nieuw object gebruikmakend van de spread operator, dus `x` heeft de standaard waarde `{ number: 10 }`.

De standaard waarde wordt geëvalueerd tijdens _call time_ (aanroeptijd)! Elke keer wanneer we de functie aanroepen wordt er een nieuw object aangemaakt. We roepen de `multiply` functie de eerste twee keer aan zonder een waarde mee te geven: `x` heeft de standaard waarde van `{ number: 10 }`. We loggen dan de vermenigvuldigde waarde van dat getal, wat `20` is. 

De derde keer dat we de functie `multiply` aanroepen geven we wel een waarde mee: het object genaamd `value`. De `*=` operator is eigenlijk een verkorting van `x.number = x.number * 2`: we passen de waarde van `x.number` aan en loggen de vermenigvuldigde waarde `20`.

De vierde keer geven we weer het `value` object mee. `x.number` was al aangepast naar `20`, en `x.number *= 2` logt `40`.

</p>
</details>

---

###### 65. Wat is de uitkomst?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` en `3` `3` en `6` `4`
- B: `1` `2` en `2` `3` en `3` `4`
- C: `1` `undefined` en `2` `undefined` en `3` `undefined` en `4` `undefined`
- D: `1` `2` en `undefined` `3` en `undefined` `4`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Het eerste argument van de `reduce` methode is de _accumulator_, in dit geval `x`. Het tweede argument is de _huidige waarde_, `y`. Met de `reduce` methode voeren we een functie uit op elk element in de array, wat uiteindelijk zal resulteren in een enkele waarde.

In dit voorbeeld geven we geen waarde terug. We loggen enkel the waarden van de accumulator en de huidige waarde.

De waarde van de accumulator is gelijk aan de vorige teruggegeven waarde van de callback functie. Als je niet de optionele `initialValue` meegeeft aan de `reduce` methode, de accumulator is gelijk aan het eerste element tijdens de eerste aanroep. 

Tijdens de eerste aanroep is de accumulator (`x`) `1` en de huidige waarde (`y`) `2`. We geven niets terug in de callback function, we loggen de accumulator en de huidige waarde: `1` en `2` worden gelogd.

Als je niets teruggeeft in een functie, zal de functie `undefined` teruggeven. Tijdens de volgende aanroep is de accumulator `undefined` en de huidige waarde `3`. `undefined` en `3` worden gelogt. 

Tijdens de vierde aanroep geven we wederom niets terug in de callback functie. De accumulator is wederom `undefined`, en de huidige waarde `4`. `undefined` en `4` worden gelogt.

</p>
</details>
  
---

###### 66. Met welke constructor kunnen we succesvol de `Dog` class extenden?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

In de afgeleide class kun je het `this` keyword niet benaderen totdat je `super` hebt aangeroepen. Als je toch probeert zal dit een _ReferenceError_ gegooid worden: 1 en 4 zouden een reference error gooien.

Met het `super` keyword roepen we de parent class zijn contructor aan met het meegegeven argument. De parent class' contructor verwacht het argument `name`, dus we moeten `name` meegeven aan `super`.

De `Labrador` class verwacht twee argumenten, `name` omdat het een afgeleide is van `Dog`, en `size` als een propertie van de `Labrador` class zelf. Ze zullen allebei meegegeven moeten worden aan de contructor van `Labrador`, wat op de juiste manier gebeurt bij constructor 2.

</p>
</details>

---

###### 67. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Met het `import` keyword worden alle geïmporteerde modules _pre-parsed_. Dat betekent dat de geïmporteerde modules _als eerste_ uitgevoerd zal worden en de code waarin de module geïmporteerde wordt _als tweede_.

Dit is een verschil tussen `require()` in CommonJS en `import`! Met `require()` kun je dependencies inladen tijdens dat de code uitgevoerd wordt. Als we `require` gebruikt hadden in plaats van `import` zou er `running index.js`, `running sum.js`, `3` gelogt worden in het console.

</p>
</details>

---

###### 68. Wat is de uitkomst?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Elk Symbol is volledig uniek. Het doel van het argument dat meegegeven wordt aan de Symbol is om de Symbol een omschrijving te geven. De waarde van de Symbol is niet afhankelijk van het doorgegeven argument. Als we de waarden vergelijken creëeren we compleet nieuwe Symbols: de eerste `Symbol('foo')` en de tweede `Symbol('foo')`. Deze twee waarden zijn uniek en niet gelijk aan elkaar, `Symbol('foo') === Symbol('foo')` geeft `false` terug.

</p>
</details>

---

###### 69. Wat is de uitkomst?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`, 

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Met de `padStart` methode kunnen we witruimte toevoegen aan het begin van de string. De waarde die meegegeven wordt aan de methode is de _totale_ lengte van de string, samen met de witruimte. De string `"Lydia Hallie"` heeft een lengte van `13`. `name.padStart(13)` plaatst 1 spatie toe aan het begin van de string omdat 12 + 1 = 13. 

Als het argument dat we meegeven aan de `padStart` methode kleiner is dan de lengte van de string zullen er geen spaties worden toegevoegd.

</p>
</details>

---

###### 70. Wat is de uitkomst?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: Een string die hun code points bevat
- D: Error

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Met de `+` operator kun je strings concateneren. In dit geval concateneren we de string `"🥑"` met de string `"💻"`, wat `"🥑💻"` oplevert.

</p>
</details>

---

###### 71. Hoe kunnen we de waarden loggen die uitgecommentarieerd zijn achter de console.log statement?

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` en `game.next().value`
- B: `game.next.value("Yes")` en `game.next.value()`
- C: `game.next().value` en `game.next("Yes").value`
- D: `game.next.value()` en `game.next.value("Yes")`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Een generator functie "pauzeert" tijdens de uitvoering wanneer het het keyword `yield` tegenkomt. Allereerst laten we de functie de string "Do you love JavaScript?" opleveren. Dat kunnen we doen door `game.next().value` te gebruiken.

Elke lijn van de functie wordt uitgevoerd totaan het eerste `yield` keyword. Er is een `yield` aanwezig op de eerste lijn van de functie: de uitvoering stopt bij de eerste `yield`! _Dat betekent dat de variabele `answer` nog niet gedefinieerd is!_

Wanneer we `game.next("Yes").value` aanroepen wordt de vorige `yield` vervangen met de waarde van de parameters die zijn meegegeven aan de `next()` functie, `"Yes"` in dit geval. De waarde van de variabele `answer` is nu gelijk aan `"Yes"`. De conditie van de if-statement geeft `false` terug en `JavaScript loves you back ❤️` wordt gelogd.

</p>
</details>

---

###### 72. Wat is de uitkomst?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

`String.raw` returns a string where the escapes (`\n`, `\v`, `\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:

`` const path = `C:\Documents\Projects\table.html` ``

Which would result in:

`"C:DocumentsProjects able.html"`

With `String.raw`, it would simply ignore the escape en print:

`C:\Documents\Projects\table.html`

In this case, the string is `Hello\nworld`, which gets logged.

</p>
</details>

---

###### 73. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.

If we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:

`data.then(res => console.log(res))`

This would've logged `"I made it!"`

</p>
</details>

---

###### 74. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) en had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, en has a length of `2`. This gets returned from the `addToList` function.

The `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.

</p>
</details>

---

###### 75. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

When we create the variable `shape` en set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.

Since `shape` is frozen, en since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, en `{ x: 10, y: 20 }` gets logged.

</p>
</details>

---

###### 76. Wat is de uitkomst?

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.

With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.

Since we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.

</p>
</details>

---

###### 77. Is dit een pure function?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Ja
- B: Nee

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

A pure function is a function that _always_ returns the same result, if the same arguments are passed.

The `sum` function always returns the same result. If we pass `1` en `2`, it will _always_ return `3` without side effects. If we pass `5` en `10`, it will _always_ return `15`, en so on. This is the definition of a pure function.

</p>
</details>

---

###### 78. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.

If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value en store it afterwards.

We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, en the else block gets executed: `Calculated! 20` gets logged, en the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.

The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, en `'From cache! 20'` gets logged.

The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, en `'From cache! 20'` gets logged.

</p>
</details>

---

###### 79. Wat is de uitkomst?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` en `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` en `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` en `0` `1` `2` `3`
- D:  `0` `1` `2` `3` en `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Where the keys are the enumerable properties. `0` `1` `2` `3` get logged.

With a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it's currently iterating over, `"☕"` ` "💻"` `"🍷"` `"🍫"` get logged.

</p>
</details>

---

###### 80. Wat is de uitkomst?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, en other expressions such as dates, functions, en calculations.

The element will be equal to the returned value.  `1 + 2` returns `3`, `1 * 2` returns `2`, en `1 / 2` returns `0.5`.

</p>
</details>

---

###### 81. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.

In ES6, we can overwrite this default `undefined` value with default parameters. For example:

`function sayHi(name = "Lydia") { ... }`

In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`

</p>
</details>

---

###### 82. Wat is de uitkomst?

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

- A: `"🥑"` en `"😍"`
- B: `"🥑"` en `"😎"`
- C: `"😍"` en `"😎"`
- D: `"😎"` en `"😎"`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"🥑"`.

With the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `"😎"`. When logging `this.status`, `"😎"` gets logged.


</p>
</details>

---

###### 83. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`. 

Note that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.

Then, we set `city` equal to the string `"Amsterdam"`. This doesn't change the person object: there is no reference to that object.

When logging the `person` object, the unmodified object gets returned. 

</p>
</details>

---

###### 84. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Variables with the `const` en `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.

</p>
</details>

---

###### 85. Welke informatie zal worden gelogd?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: Het resultaat van de `fetch` methode.
- B: Het resultaat van de tweede aanroep van de `fetch` methode.
- C: Het resultaat van de callback in de vorige `.then()`.
- D: Het zal altijd undefined zijn.

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.

</p>
</details>

---

###### 86. Welke optie is een manier om `hasName` te vullen met de boolean waarde `true`, terwijl je geen `true` mee kan geven als argument?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.

By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.

`new Boolean(true)` returns an object wrapper, not the boolean value itself.

`name.length` returns the length of the passed argument, not whether it's `true`.

</p>
</details>

---

###### 87. Wat is de uitkomst?

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, en so on. In this case we want to get the element which index is 0, the character `"I'`, which gets logged.

Note that this method is not supported in IE7 en below. In that case, use `.charAt()`

</p>
</details>

---

###### 88. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, en the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`.  `num1 + num2` returns `20`.

If you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error. 

</p>
</details>

---

###### 89. Wat is de uitkomst?

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
- D: Globale object of `module.js`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, en a named export. The default export is a function which returns the string `"Hello World"`, en the named export is a variable called `name` which has the value of the string `"Lydia"`. 

The `data` object has a `default` property for the default export, other properties have the names of the named exports en their corresponding values. 

</p>
</details>

---

###### 90. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```javascript
function Person() {
  this.name = name
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`. 

</p>
</details>

---

###### 91. Wat is de uitkomst?

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`. 

Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.

</p>
</details>

---

###### 92. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`. 

</p>
</details>

---

###### 93. Wat is de uitkomst?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` en `age` `21`
- B: `["name", "Lydia"]` en `["age", 21]` 
- C: `["name", "age"]` en `undefined`
- D: `Error`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

`Object.entries(person)` returns an array of nested arrays, containing the keys en objects:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]` 

Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray. 

The first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, en `y` equal to `"Lydia"`, which get logged.
The second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, en `y` equal to `21`, which get logged.

</p>
</details>

---

###### 94. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **en can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, en will throw a syntax error. 

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`
</p>
</details>

---

###### 95. Wat is de uitkomst?

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

- A: `a is bigger`, `6` en `b is bigger`, `3`
- B: `a is bigger`, `undefined` en `b is bigger`, `undefined`
- C: `undefined` en `undefined`
- D: `SyntaxError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc. 

Here, we wrote a `return` statement, en another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:

```javascript
  return;
  a + b
```

This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!

</p>
</details>

---

###### 96. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.

</p>
</details>

---

###### 97. Wat is de uitkomst?

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` en `["{Symbol('a')"]`
- B: `{}` en `[]`
- C: `{ a: "b" }` en `["a"]`
- D: `{Symbol('a'): 'b'}` en `[]`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, en an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).

</p>
</details>

---

###### 98. Wat is de uitkomst?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` en `undefined`
- B: `[1, [2, 3, 4]]` en `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` en `{ name: "Lydia", age: 21 }`
- D: `Error` en `{ name: "Lydia", age: 21 }`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:

 `[x, ...y] = [1, 2, 3, 4]`

 With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` en `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.

 The `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:

```const getUser = user => ({ name: user.name, age: user.age })```

Since no value gets returned in this case, the function returns `undefined`.

</p>
</details>

---

###### 99. Wat is de uitkomst?

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The variable `name` holds the value of a string, which is not a function, thus cannot invoke. 

TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!

SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. 
ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.

</p>
</details>

---

###### 100. Wat is de waarde van output?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `"Im'` gets returned.

`""` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.

</p>
</details>

---

###### 101. Wat is de waarde van output?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (en only) truthy value, which gets returned. `one` is equal to `{}`.

`(null || false || "")`: all operands are falsy values. This means that the past operand, `""` gets returned. `two` is equal to `""`.

`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.

</p>
</details>

---

###### 102. Wat is de waarde van output?

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

- A: `I have resolved!`, `second` en `I have resolved!`, `second`
- B: `second`, `I have resolved!` en `second`, `I have resolved!`
- C: `I have resolved!`, `second` en `second`, `I have resolved!`
- D: `second`, `I have resolved!` en `I have resolved!`, `second`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), en when the call stack is empty, I want to use this value._

We can get this value with both `.then` en the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` en `await`, they work a bit differently. 

In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty. 

With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved befoer moving to the next line.

This means that it waited for the `myPromise` to resolve with the value `I have resolved`, en only once that happened, we moved to the next line: `second` got logged. 

</p>
</details>

---

###### 103. Wat is de waarde van output?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string. 

The first one is `1`, which is a numerical value. `1 + 2` returns the number 3.

However, the second one is a string `"Lydia"`. `"Lydia"` is a string en `2` is a number: `2` gets coerced into a string. `"Lydia"` en `"2"` get concatenated, which results in the string `"Lydia2"`. 

`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.

</p>
</details>

---

###### 104. Wat is de waarde?

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<resolved>: 5}`
- D: `Error`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value. If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`. 

</p>
</details>

---

###### 105. Wat is de waarde?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references. 

We set the default value for `person2` equal to the `person` object, en passed the `person` object as the value for `person1`.

This means that both values have a reference to the same spot in memory, thus they are equal.

The code block in the `else` statement gets run, en `They are the same!` gets logged. 

</p>
</details>

---

###### 106. Wat is de waarde?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig["colors"]`). 

With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no proprety called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` en keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object. 

</p>
</details>

---

###### 107. Wat is de waarde?

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true. 

</p>
</details>

---

###### 108. Welke van onderstaande methoden passen de originele array aan?

```javascript
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice` 
- D: `splice`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` en `'😍'`) en added the ✨ emoji instead. 

`map`, `filter` en `slice` return a new array, `find` returns an element, en `reduce` returns a reduced value.

</p>
</details>

---

###### <a name=20191009></a>109. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types act by reference 

In JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, en interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)

Then, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, en doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. Wat doet onderstaande methode?

```javascript
JSON.parse()
```

- A: Ontleedt JSON naar een JavaScript waarde
- B: Ontleedt een JavaScript object naar JSON
- C: Ontleedt elke JavaScript waarde naar JSON
- D: Ontleedt JSON alleen naar een JavaScript object

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

With the `JSON.parse()` method, we can parse JSON string to a JavaScript value. 

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

###### 111. Wat is de uitkomst? 

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, en with the value of `'Sarah'`. 

Variables with the `let` keyword (en `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`. 

If we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`. 

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

###### 112. Wat is de uitkomst?

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

- A: `a` en `a`
- B: `a` en `undefined`
- C: `['a', 'b', 'c']` en `a`
- D: `a` en `['a', 'b', 'c']`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).

In `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

In `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned. 

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

###### 113. Wat is de uitkomst?

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`. 

</p>
</details>

---

###### 114. Wat zal er gebeuren?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: De `setInterval` callback zal niet worden aangeroepen
- B: De `setInterval` callback zal één keer aangeroepen worden
- C: De `setInterval` callback zal nog steeds elke seconde aangeroepen worden
- D: We roepen `config.alert()` nooit aan, config is `null`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since it's not garbage collected, the `setInterval` callback function will still get invoked every 1000ms (1s).

</p>
</details>

---

###### 115. Welke methode(n) zal de waarde `'Hello world!'` teruggeven?

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
- C: 2 en 3
- D: Allemaal

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, en the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, en the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`. 

1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.
3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory. 

</p>
</details>

---

###### 116. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Both the `changeAge` en `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object. 

First, we invoke the `changeAge` function en pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: "Lydia", age: 22 }`.

Then, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### 117. Welke van onderstaande opties zal `6` teruggeven?

```javascript
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` en `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.

</p>
</details>

---

###### 118. Wat is de uitkomst?

```javascript
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

With the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.

</p>
</details>

---

###### 119. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits en returns `undefined`.

`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, en returns `Mara`.
`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.
`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish en can get invoked, which returns `Lydia Hallie`.
`member.getLastName?.()`: `member` is not defined: `member.getLastName()` is nullish. The expression returns `undefined`.

</p>
</details>

---

###### 120. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

We passed the condition `groceries.indexOf("banana")` to the if-statement. `groceries.indexOf("banana")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, en `We don't have to buy bananas!` gets logged.

</p>
</details>

---

###### 121. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.

</p>
</details>

---

###### 122. Wat is de uitkomst?

```javascript
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

`typeof name` returns `"string"`. The string `"string"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === "object"` en `false === "string"` both return`false`.

(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)

</p>
</details>

---

###### 123. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` en `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` en `y` accordingly. This returns `4` `5` `6`.

</p>
</details>

---

###### 124. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promsie, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.

</p>
</details>

---

###### 125. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

`myFunc` expects an object with properties `x`, `y` en `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` en `z` ({x: 1, y: 2, z: 3}), `x`, `y` en `z` have their default value of `undefined`.

</p>
</details>

---

###### 126. Wat is de uitkomst?

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

  return `The driver drove ${formattedSpeed} en has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))
```

- A: The driver drove 130 en has to pay 300
- B: The driver drove 130 mph en has to pay \$300.00
- C: The driver drove undefined en has to pay undefined
- D: The driver drove 130.00 en has to pay 300.00

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currentcy` in `USD` results in `$300.00`.

</p>
</details>

---

###### 127. Wat is de uitkomst?

```javascript
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

By destructuring objects, we can unpack values from the right-hand object, en assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value "💀" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the "💀" to it. When logging `spookyItems`, `["👻", "🎃", "🕸", "💀"]` gets logged.

</p>
</details>

---

###### 128. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ en equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.

With the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.

</p>
</details>

---

###### 129. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

Variables declared with the `const` keyword are not referencable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.

</p>
</details>

---

###### 130. Wat is de uitkomst?

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

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

In the `try` block, we're logging the awaited value of the `myPromise` variable: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.

</p>
</details>

---

###### 131. Wat is de uitkomst?

```javascript
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` en `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### <a name=20191224></a>132. Wat is de uitkomst?

```javascript
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```

- A: `0`
- B: `1`
- C: `2`
- D: `3`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, en an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Then, we create a new variable `counterTwo`, en set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.

We invoke the `counterTwo.increment()`, which sets the `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. Wat is de uitkomst?

```javascript
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!", 0));
	console.log("Last line!");
}

async function funcTwo() {
	const res = await myPromise;
	console.log(await res);
	setTimeout(() => console.log("Timeout!", 0));
	console.log("Last line!");
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

First, we invoke `funcOne`. On the first line of `funcOne`, we call the `myPromise` promise, which is an _asynchronous_ operation. While the engine is busy completing the promise, it keeps on running the function `funcOne`. The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop here.)

Both the promise en the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise en handling the `setTimeout` callback. This means that `Last line!` gets logged first, since this is not an asynchonous operation. This is the last line of `funcOne`, the promise resolved, en `Promise!` gets logged. However, since we're invoking `funcTwo()`, the call stack isn't empty, en the callback of the `setTimeout` function cannot get added to the callstack yet.

In `funcTwo` we're, first _awaiting_ the myPromise promise. With the `await` keyword, we pause the execution of the function until the promise has resolved (or rejected). Then, we log the awaited value of `res` (since the promise itself returns a promise). This logs `Promise!`.

The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API.

We get to the last line of `funcTwo`, which logs `Last line!` to the console. Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log("Timeout!")` from `funcOne`, en `() => console.log("Timeout!")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout!`, en gets popped off the stack. Then, the second callback logs `Timeout!`, en gets popped off the stack. This logs `Last line! Promise! Promise! Last line! Timeout! Timeout!`

</p>
</details>

---

###### 134. Hoe kunnen we `sum` uit `sum.js` aanroepen  in `index.js`?`

```javascript
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
```

- A: `sum(4)`
- B: `sum.sum(4)`
- C: `sum.default(4)`
- D: Default wordt niet geïmporteerd met `*`, alleen named exports

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

With the asterisk `*`, we import all exported values from that file, both default en named. If we had the following file:

```javascript
// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";

// index.js
import * as info from "./info";
console.log(info);
```

The following would get logged:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

For the `sum` example, it means that the imported value `sum` looks like this:

```javascript
{ default: function sum(x) { return x + x } }
```

We can invoke this function, by calling `sum.default`

</p>
</details>

---

###### 135. Wat is de uitkomst?

```javascript
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```

- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: Niets wordt gelogd

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In tis case, we pass the `handler` object which contained to properties: `set` en `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.

The first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.

First, we added a new property `name` to the proxy object (`person.name = "Lydia"`). `set` gets invoked, en logs `"Added a new property!"`.

Then, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.

</p>
</details>

---

###### 136. Welke van onderstaande zal het `person` object aanpassen?

```javascript
const person = { name: "Lydia Hallie" };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

With `Object.seal` we can prevent new properies from being _added_, or existing properties to be _removed_.

However, you can still modify the value of existing properties.

</p>
</details>

---

###### 137. Welke van onderstaande zal het `person` object aanpassen?

```javascript
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.

However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, en can be modified.

</p>
</details>

---

###### 138. Welke van onderstaande zal het `person` object aanpassen?

```javascript
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.

However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, en can be modified.

</p>
</details>

---

###### 139. Wat is de uitkomst?

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` en `3` `6`
- B: `2` `NaN` en `3` `NaN`
- C: `2` `Error` en `3` `6`
- D: `2` `4` en `3` `Error`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: A

First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` en `value` got their default values: num is `2`, en `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.

Then, we invoked `myFunc(3)` en passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.

</p>
</details>

---

###### 140. Wat is de uitkomst?

```javascript
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
```

- A: `10`
- B: `11`
- C: `undefined`
- D: `SyntaxError`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!

</p>
</details>

---

###### 141. Wat is de uitkomst?

```javascript
const teams = [
	{ name: "Team 1", members: ["Paul", "Lisa"] },
	{ name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
	for (let i = 0; i < members.length; i++) {
		yield members[i];
	}
}

function* getTeams(teams) {
	for (let i = 0; i < teams.length; i++) {
		// ✨ SOMETHING IS MISSING HERE ✨
	}
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
```

- A: `yield getMembers(teams[i].members)`
- B: `yield* getMembers(teams[i].members)`
- C: `return getMembers(teams[i].members)`
- D: `return yield getMembers(teams[i].members)`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.

If we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.

</p>
</details>

---

###### 142. Wat is de uitkomst?

```javascript
const person = {
	name: "Lydia Hallie",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby);
	return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);
```

- A: `["coding"]`
- B: `["coding", "dancing"]`
- C: `["coding", "dancing", "baking"]`
- D: `["coding", "running", "dancing", "baking"]`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

The `addHobby` function receives two arguments, `hobby` en `hobbies` with the default value of the `hobbies` array on the `person` object.

First, we invoke the `addHobby` function, en pass `"running"` as the value for `hobby` en an empty array as the value for `hobbies`. Since we pass an empty array as the value for `y`, `"running"` gets added to this empty array.

Then, we invoke the `addHobby` function, en pass `"dancing"` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.

Last, we invoke the `addHobby` function, en pass `"bdaking"` as the value for `hobby`, en the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.

After pushing `dancing` en `baking`, the value of `person.hobbies` is `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 143. Wat is de uitkomst?

```javascript
class Bird {
	constructor() {
		console.log("I'm a bird. 🦢");
	}
}

class Flamingo extends Bird {
	constructor() {
		console.log("I'm pink. 🌸");
		super();
	}
}

const pet = new Flamingo();
```

- A: `I'm pink. 🌸`
- B: `I'm pink. 🌸` `I'm a bird. 🦢`
- C: `I'm a bird. 🦢` `I'm pink. 🌸`
- D: Niets, we hebben geen methode aangeroepen

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: B

We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `"I'm pink. 🌸"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. THe constructor in `Bird` gets called, en logs `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 144. Welke van onderstaande opties zal resulteren in een error?

```javascript
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 en 2
- C: 3 en 4
- D: 3

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: D

The `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The propeties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.

</p>
</details>

---

###### 145. Wat moeten we aan het `person` object toevoegen om `["Lydia Hallie", 21]` als uitkomst te krijgen van `[...person]`?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: Niets, objecten zijn standaard iterabel
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { for (let x in this) yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: C

Objects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.

</p>
</details>