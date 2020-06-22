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

FYI: er zijn slechts 7 ingebouwde types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol` en `bigint`. `"function"` is geen type omdat functies objecten zijn, en dus van het type `"object"`.

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

`String.raw` geeft een string terug waarbij de escapes (`\n`, `\v`, `\t` etc.) genegeerd worden! Backslashes kunnen een probleem zijn omdat je kunt eindigen met zoiets als:

`` const path = `C:\Documents\Projects\table.html` ``

Wat resulteert in:

`"C:DocumentsProjects able.html"`

Met `String.raw` worden de escapes simpelweg genegeerd:

`C:\Documents\Projects\table.html`

In dit geval wordt `Hello\nworld` gelogd.

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

Een asynchrone functie geeft altijd een promise terug. De `await` moet nog steeds wachten op de oplossing van de promise: een wachtende promise wordt teruggegeven wanneer we `getData()` aanroepen om daarmee `data` te vullen.

Als we de teruggegeven waarde van de promise `"I made it"` willen benaderen zouden we de `then()` method kunnen gebruiken op `data`:

`data.then(res => console.log(res))`

Dit zou wel `"I made it!"` loggen.

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

De `push()` methode geeft de _Lengte_ terug van de nieuwe array! In eerste instantie bevatte de array één element (de string `"banana"`) en had een lengte van `1`. Nadat de string `"apple"` toegevoegd wordt aan de array bevat de array twee elementen en heeft een lengte van `2`. Dit wordt dan ook teruggegeven door de `addToList` functie.

De `push()` methode past de originele array aan. Als je de _array_ zelf terug zou willen geven in plaats van de _lengte van de array_ zou je de `list` moeten teruggeven nadat de `item` toegevoegd is.

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

`Object.freeze` maakt het onmogelijk om properties van een object toe te voegen, te verwijderen of aan te passen (tenzij de waarde van de propertie zelf een object is).

Wanneer we de variabele `shape` aanmaken en hieraan het bevroren object `box` toewijzen zal de referentie naar het bevroren object blijven bestaan. Je kunt checken of een object bevroren is door `Object.isFrozen` te gebruiken. In dit geval geeft `Object.isFrozen(shape)` true terug omdat de referentie naar het bevroren object `box` is blijven bestaan.

Omdat `shape` bevroren is en omdat de waarde van `x` geen object is kunnen we de propertie `x` niet aanpassen. `x` is nog steeds gelijk aan `10` en `{ x: 10, y: 20 }` wordt gelogd.

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

Wanneer we de propertie `name` opvragen van het object aan de rechterkant wijzen we de waarde `"Lydia"` toe aan de variabele met de naam `myName`.

Met `{ name: myName }` zeggen we in JavaScript dat we een nieuwe variabele aan willen maken met de naam `myName` met de waarde van de `name` propertie van het object aan de rechterkant.

Omdat we proberen `name` te loggen, een variabele die niet gedefinieerd is, wordt er een ReferenceError gegooid.

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

Een `pure function` is een functie die _altijd_ dezelfde waarde teruggeeft, zolang hetzelfde argument wordt meegegeven.

De `sum` functie geeft altijd dezelfde waarde terug. Als we `1` en `2` meegeven zal het _altijd_ `3` teruggeven. Als we de waarde `5` en `10` meegeven zal het _altijd_ `15` teruggeven. Dit is de definitie van een `pure function`.

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

De `add` functie is een _memoized_ functie. Met memoization kunnen we het resultaat van een functie cachen om de uitvoering ervan te versnellen. In dit geval maken we een `cache` object aan waarin we de waarde van dat de vorige keer werd teruggegeven opslaan.

Als we de functie `addFunction` aanroepen met hetzelfde argument wordt eerst gecheckt of de waarde al in de cache voorkomt. Als dat het geval is wordt de opgeslagen waarde teruggegeven, waardoor de functie niet helemaal hoeft te worden uitgevoerd. Anders, als de waarde nog niet is opgeslagen in de cache, zal het de waarde berekenen en daarna opslaan in de cache.

We roepen de functie `addFunction` drie keer aan met dezelfde waarde: Tijdens de eerste aanroep is de waarde van de functie `num` wanneer het gelijk is aan `10` nog niet opgslagen in de cache. De conditie van de if-statement `num in cache` geeft `false` terug waardoor we in de else-statement komen: `Calculated! 20` wordt gelogd en de waarde van het resultaat wordt opgeslagen in het cache object. `cache` ziet er nu uit als `{ 10: 20 }`.

De tweede keer bevat het object `cache` de waarde dat teruggegeven wordt wanneer `10` wordt meegegeven. De conditie van de if-statement `num in cache` geeft `true` terug en `'From cache! 20'` wordt gelogd.

De derde keer geven we `5 * 2` mee aan de functie wat `10` oplevert. Het `cache` object bevat de waarde dat teruggegeven gaat worden voor `10`. De conditie van de if-statement `num in cache` geeft `true` terug en `'From cache! 20'` wordt gelogd.

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

Met de _for-in_ loop kunnen we itereren over de **enumerable** properties. In een array zijn de "keys" van de array elementen enumarable, wat eigenlijk hun indexen zijn. Je kunt een array zien als:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Waar de keys de enumarable properties zijn. `0` `1` `2` `3` worden gelogd.

Met de _for-of_ loop kunnen we itereren over **iterables**. Een array is een iterable. Wanneer we itereren over een array is de waarde van de variabele "item" gelijk aan het huidige element, `"☕"` ` "💻"` `"🍷"` `"🍫"` wordt gelogd.

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

Array elementen kunnen elke waarde bevatten. Nummers, strings, objecten, andere arrays, null, boolean waarden, undefined en andere expressies zoals datums, functies en berekeningen. 

Het element zal gelijk zijn aan de teruggegeven waarde. `1 + 2` geeft `3` terug, `1 * 2` geeft `2` terug en `1 / 2` geeft `0.5` terug.

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

Argumenten hebben standaard de waarde `undefined`, tenzij de waarde wordt meegegeven aan de functie. In dit geval hebben we geen waarde meegegeven voor het argument `name`. `name` is gelijk aan `undefined` wat gelogd wordt.

In ES6 kunnen we argumenten een standaard waarde geven. Als voorbeeld:

`function sayHi(name = "Lydia") { ... }`

In dit geval zal de waarde van het argument `name`, als we geen waarde meegeven aan de functie, standaard `Lydia` bevatten. 

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

De waarde van het keyword `this` hangt af van in welke scope je het gebruikt. In een **methode**, zoals de `getStatus` methode, het `this` keyword verwijst naar _het object waartoe de methode behoort_. De methode behoort toe aan het `data` object, dus `this` verwijst naar het `data` object. Wanneer we `this.status` loggen wordt de `status` propertie van het `data` object gelogd, wat `"🥑"` is.

Met de `call` methode kunnen we het object veranderen waarnaar het keyword `this` verwijst. In **functies** refereert het keyword `this` naar _het object waartoe de function behoort_. We declareren de `setTimeout` functie op het _globale object_, dus binnen de `setTimeout` functie refereert het keyword `this` naar het _globale object_. Op het globale object bestaat de variabele genaamd _status_ met de waarde `"😎"`. Wanneer we `this.status` loggen wordt `"😎"` gelogd.

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

We vullen de variabele `city` met de waarde van de propertie `city` op het object `person`. Er is echter geen propertie `city` op dit object, dus de variabele `city` krijgt de waarde `undefined`.

Let op dat we _niet_ refereren naar het object `person` zelf! We vullen de waarde van de variabele `city` enkel met de waarde van de propertie `city` op het `person` object.

Daarna zetten we de waarde van `city` gelijk aan de string `"Amsterdam"`. Dit verandert niets aan het object `person`: we hebben geen referentie naar dat object.

Wanneer we het object `person` loggen, wordt het onaangepaste object gelogd.

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

Variabelen gedeclareerd met de keywords `const` en `let` zijn _block-scoped_. Een block is alles tussen accolades (`{ }`). In dit geval de accolades van de if/else statements. Je kunt niet refereren naar een variabele buiten het block waarin het gedeclareerd is. Een ReferenceError wordt gegooid.

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

De waarde van `res` in de tweede `.then` is gelijk aan de geretourneerde waarde in de vorige `.then`. Je kunt `.then`s zoals dit blijven `chainen`, waarbij de waarde wordt meegegeven aan de volgende `handler`.

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

Met `!!name` stellen we vast of de waarde van `name` truthy of falsy is. Als `name` truthy is, dit is wat we willen testen, zal `!name` `false` teruggeven. `!false` (wat `!!name` feitelijk is) geeft `true` terug.

Wanneer we `hasName` vullen met `name`, vullen we het met dat wat we meegeven aan de `getName` functie, niet de boolean waarde `true`. 

`new Boolean(true)` geeft een object wrapper terug, niet de boolean waarde zelf.

`name.length` geeft de lengte terug van de meegegeven waarde, niet of het `true` is.

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

Om een karakter van een string op een specifieke index te krijgen kun je blokhaken gebruiken. Het eerste karakter in de string heeft de index 0. In dit geval willen we het element hebben met de index 0, het karakter `"I"`, wat gelogd wordt.

Let op dat deze methode niet ondersteund wordt in IE7 en daaronder. In dat geval maak je gebruik van `.charAt()`.

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

Je kunt een parameters standaard waarde gelijk zetten aan een andere parameter van diezelfde functie, zolang deze definieerd is _voor_ de parameter met een standaard waarde. We geen de waarde `10` mee aan de `sum` functie. Als de `sum` functie maar één argument meekrijgt betekent dit dat de waarde van `num2` gevuld wordt met de waarde van `num1`. `10` in dit geval. De standaard waarde van `num2` is de waarde van `num1`, wat `10` is. `num1 + num2` geeft `20` terug.

Als je probeert de standaard waarde van een parameter te vullen met de waarde van een parameter welke gedefinieerd is _na_ de standaard parameter, dan is de parameter nog niet geïnitialiseerd  en wordt er een error gegooid.

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
Met de `import * as name` syntax importeren we _alle exports_ van `module.js` bestand in het bestand `index.js` als een nieuw object met de naam `data`. In het bestand `module.js` zijn er twee exports: de standaard export en de benoemde export. De standaard export is een functie dat de string `"Hello world"` teruggeeft, en de benoemde export is de variabele `name` wat de waarde van de string `"Lydia"` bevat.

Het object `data` bevat een propertie `default` voor de standaard export. Andere properties hebben de naam van de benoemde exports en hun corresponderende waarden.

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

Classes zijn een syntactisch sausje voor functie constructors. Het equivalent van de class `Person` als een functie constructor zou zijn:

```javascript
function Person() {
  this.name = name
}
```

Het aanroepen van de functie contructor met `new` resulteert in het creëeren van een instantie van `Person`. Het keyword `typeof` geeft voor een instantie `"object"` terug. `typeof member` geeft `"object"` terug.

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

De `.push` methode retourneert de _nieuwe lengte_ van de array, niet de array zelf! Door `newList` te vullen met `[1, 2, 3].push(4)`, zetten we `newList` gelijk aan de nieuwe lengte van de array: `4`.

Dan gebruiken we de `.push` methode op `newList`. Omdat `newList` nu de numerieke waarde `4` bevat, kunnen we de `.push` methode niet gebruiker: een TypeError wordt gegooid.

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

Reguliere functies zoals de `giveLydiaPizza` functie hebben een `prototype` propertie, wat een object is (prototype object) met een `constructor` propertie. Arrow functies zoals de `giveLydiaChocolate` functie hebben geen `prototype` functie. `undefined` wordt geretourneerd wanneer we proberen om de `prototype` propertie te benaderen door gebruik te maken van `giveLydiaChocolate.prototype`.

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

`Object.entries(person)` retourneert een array van geneste arrays, welke de keys en objecten bevat:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]` 

Gebruikmakend van de `for-of` loop kunnen we itereren over elk element in de array, de subarrays in dit geval. We kunnen de subarrays direct destructureren door `const [x, y]` te gebruiken. `x` is gelijk aan het eerste element in de subarray, `y` is gelijk aan het tweede element in de subarray.

De eerste subarray wat wordt gelogd is `[ "name", "Lydia" ]`, waarbij `x` gelijk is aan `"name"` en `y` gelijk is aan `"Lydia"`. 
De tweede subarray wat wordt gelogd is `[ "age", "21" ]`, waarbij `x` gelijk is aan `"age"` en `y` gelijk is aan `"21"`.

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

`...args` is een rest parameter. De waarde van een rest parameter is een array die alle overgebleven argumenten bevat, en om die reden **alleen de laatste parameter kan zijn**! In dit voorbeeld is de rest parameter niet de laatste parameter, wat niet mogelijk is. Er wordt een syntax error gegooid.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

Het bovenstaande voorbeeld werkt. Dit geeft de array `[ 'banana', 'apple', 'orange', 'pear' ]` terug.

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

In JavaScript _hoeven_ we geen puntkomma's te schrijven, alhoewel de JavaScript engine ze toch zal toevoegen na statements. Dit wordt **Automatic Semicolon Insertion** genoemd. Een statement kan bijvoorbeeld een variabele zijn of een keyword zoals `throw`, `return`, `break`, etc.

Hier schreven we een `return` statement en op de _nieuwe regel_ `a + b`. Maar omdat het een nieuwe regel betreft weet de engine niet wat we eigenlijk wilde retourneren. In plaats daarvan wordt er na `return` automatisch een puntkomma toegevoegd. Je kunt dit zien als:

```javascript
  return;
  a + b
```

Dat betekent dat `a + b` nooit bereikt zal worden, omdat de functie stopt na het keyword `return`. Als er geen waarde wordt geretourneerd, zoals nu, zal de functie `undefined` teruggeven. Let op dat er geen automatisch insertion plaatsvindt na `if/else` statements!

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

We kunnen classes gelijk zetten tot andere classes/functie constructors. In dit geval zettten we `Person` gelijk aan `AnotherPerson`. De naam op deze constructor is `Sarah`, dus de propertie naam van de nieuwe `Person` instantie `member` is `"Sarah"`.

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

Een Symbol is geen _enumerable_. De Object.keys methode retourneert alle _enumerable_ key properties van een object. De Symbol zal niet zichtbaar zijn en een lege array zal geretourneerd worden. Wanneer we het hele object loggen zullen alle properties zichtbaar zijn, zelfs de niet enumarables.

Dit is één van de goeie eigenschappen van een Symbol: naast dat het een compleet unieke waarde representeert (wat voorkomt dat namen op objecten per ongeluk conflecteren, bijvoorbeeld wanneer je werkt met 2 libraries die properties willen toevoegen aan één en hetzelfde object) kun je properties op objecten op deze manier ook verbergen (natuurlijk niet compleet verbergen. Je kunt de Symbolen altijd benaderen gebruikmakend van de `Object.getOwnPropertySymbols()` methode).

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

De `getList` functie ontvangt een array als argument. Tussen de haakjes van de `getList` functie destructureren we deze array direct. Je kunt het zien als:

 `[x, ...y] = [1, 2, 3, 4]`

Met de rest parameter `...y` stoppen we alle "overgebleven" argumenten in een array. De overgebleven argumenten zijn in dit geval `2`, `3` en `4`. De waarde van `y` is een array die alle rest parameters bevat. De waarde van `x` is gelijk aan `1` in dit geval, dus wanneer we `[x, y]` loggen wordt `[1, [2, 3, 4]]` gelogd.
 
De `getUser` functie ontvangt een object. Met arrow functies _hoeven_ we geen accolades te gebruiken als we maar één waarde willen retourneren. Echter, als je een _object_ wilt retourneren in een arraow functie zal je het tussen haakjes moeten schrijven. Anders zal er geen waarde geretourneerd worden! De volgende functie zal wel een object geretourneerd hebben:

```const getUser = user => ({ name: user.name, age: user.age })```

Omdat er geen waarde geretourneerd wordt in dit geval zal de functie `undefined` retourneren.

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

De variabele `name` bevat de waarde van een string wat geen functie is, en dus niet aangeroepen kan worden.

TypeErrors worden gegooid als een waarde niet van het verwachtte type is. JavaScript verwacht dat `name` een functie is omdat we het proberen aan te roepen. Omdat het een string is zal er een TypeError gegooid worden: `name` is geen functie!

SyntaxErrors worden gegooid wanneer je iets hebt geschreven wat geen valide JavaScript is. Als je bijvoorbeeld het woord `return` als `retrun` hebt geschreven.
ReferenceErrors worden gegooid wanneer JavaScript niet in staat is een referentie te vinden naar een waarde die je probeert te beanderen.

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

`[]` is een truthy waarde. Met de `&&` operator wordt de rechter waarde geretourneerd wanneer de linker waarde een truthy waarde bevat. In dit geval is de linker waarde `[]` een truthy waarde, daarom wordt `"Im'` geretourneerd.

`""` is een falsy waarde. Als de linker waarde falsy is wordt er niets geretourneerd. `n't` wordt niet geretourneerd.

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

Met de `||` (or) operator kunnen we de eerste truthy waarde retourneren. Als alle waarden falsy zijn wordt de laatste waarde geretourneerd.

`(false || {} || null)`: het lege object `{}` is een truthy waarde. Dit is de eerste (en enige) truthy waarde en zal worden geretourneerd. `one` is gelijk aan `{}`.

`(null || false || "")`: alle waarden zijn falsy waarden. Dit betekent dat de laatste waarde, `""`, wordt geretourneerd. `two` is gelijk aan `""`.

`([] || 0 || "")`: de lege array `[]` is een truthy waarde. Dit is de eerste truthy waarde en wordt geretourneerd. `three` is gelijk aan `[]`.

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

Met een promise zeggen we eigenlijk _Ik wil deze functie uitvoeren, maar voor nu zet ik hem even weg omdat de uitvoer even kan duren. Alleen wanneer een bepaalde waarde is opgelost (of afgewezen), en wanneer de call stack leeg is, wil ik deze waarde gebruiken._

We kunnen deze waarde verkrijgen met `.then` en het keyword `await` is een `async` function. Ook al kunnen we de teruggegeven waarde verkrijgen met zowel `.then` als `await`, toch werken ze allebei anders.

In de functie `firstFunction` zetten we de myPromise functie (soort van) even aan de kant terwijl het wordt uitgevoerd en voeren we de rest van de code uit, wat `console.log('second')` is in dit geval. Daarna wordt de promise opgelost en zal de string `I have resolved` worden geretourneerd, wat gelogd zal worden nadat het zag dat de callstack leeg was.

Met de keyword `await` in de functie `secondFunction` pauzeren we letterlijk de executie van een async functie totdat de promise is opgelost voordat de rest van de functie wordt uitgevoerd.

Dit betekent dat het wacht tot de `myPromise` is opgelost met de waarde `I have resolved`, en alleen als dat gebeurt gaan we naar de volgende regel: `second` wordt gelogd.

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

De `+` operator wordt niet alleen gebruikt voor het optellen van numerieke waarden, maar wordt ook gebruikt om strings te concateneren. Zodra de JavaScript engine ziet dat één van de waarden niet een numerieke waarde bevat, wordt het getal omgezet naar een string.

De eerste is een `1`, wat een numerieke waarde is. `1 + 2` retourneert het getal 3.

Echter, de tweede is de string `"Lydia"`. `"Lydia"` is een string en `2` is een getal: `2` wordt omgezet naar een string. `"Lydia"` en `"2"` worden geconcateneerd wat resulteert in de string `"Lydia2"`.

`{ name: "Lydia" }` is een object. Een getal noch een object is een string, dus beide worden gestringified. Wanneer we een regulier object stringifiën levert dit `"[object Object]"` op. `"[object Object]"` geconcateneerd met `"2"` wordt `"[object Object]2"`.

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

We kunnen elk type of waarde meegeven aan `Promise.resolve`, zowel een promise als een niet-promise. De methode zelf retourneert een promise met een opgeloste waarde. Als je een reguliere functie meegeeft zal het een opgeloste promise zijn met een reguliere waarde. Als je een promise meegeeft zal het een opgeloste promise zijn met een opgeloste waarde, of de doorgegeven promise.

In dit geval geven we alleen de numerieke waarde `5` mee. Het geeft de opgeloste promise terug met de waarde `5`.

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

Objecten worden doorgegeven _by reference_. Wanneer we objecten vergelijken op type en gelijkenis (`===`), vergelijken we hun referenties.

We zetten de standaard waarde voor `person2` gelijk aan het object `person` en geven het object `person` door als de waarde voor het argument `person1`.

Dit betekent dat beide waarden een referentie hebben naar dezelfde plek in het geheugen, dus zijn ze gelijk.

De code in de `else` statement wordt uitgevoerd en `They are the same!` wordt gelogd.

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

In JavaScript kunnen we properties van een object op twee manieren benaderen: blokhaken of met een punt notitie. In dit voorbeeld gebruiken we de punt notatie (`colorConfig.colors`) in plaats van blokhaken (`colorConfig["colors"]`).

Met de punt notatie zal JavaScript proberen om de propertie van een object te vinden met exact dezelfde naam. In dit voorbeeld probeert JavaScript een propertie te vinden met de naam `colors` uit het `colorConfig` object. Er is geen property genaamd `colors` dus wordt `undefined` geretourneerd. Dan proberen we de waarde van het eerste element te benaderen door gebruik te maken van `[1]`. We kunnen dit niet doen op een waarde die `undefined` is, dus wordt er een `TypeError` gegooid: `Cannot read property '1' of undefined`.

JavaScript interpreteert (of beter gezegd unboxed) statements. Wanneer we blokhaken gebruiken ziet het de eerste blokhaak `[` en blijft doorgaan totdat het de tweede blokhaak `]` vindt. Alleen dan zal het het statement evalueren. Als we `colorConfig[colors[1]]` hadden gebruikt zou het de waarde van de `red` propertie teruggeven van het `colorConfig` object.

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

Onder de motorkap zijn emojis unicodes. De unicodes voor het hart zijn `"U+2764 U+FE0F"`. Deze zijn altijd hetzelfde voor dezelfde emojis. We vergelijken twee gelijke string met elkaar, wat true retourneert.

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

Met de `splice` methode passen we de originele array aan door elementen te verwijderen, te vervangen of toe te voegen. In dit geval hebben we 2 elementen verwijderd vanaf index 1 (we hebben `'🥑'` en `'😍'` verwijderd) en hebben in plaats daarvan ✨ toegevoegd.

`map`, `filter` en `slice` geven een nieuwe array terug, `find` geeft een element terug en `reduce` geeft een gereduceerde waarde terug.

</p>
</details>

---

###### 109. Wat is de uitkomst?

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

We zetten de waarde van de property `favoriteFood` op het object `info` gelijk aan de string met de pizza emoji, `'🍕'`. Een string is een primitief data type. In JavaScript zijn primitieve data types _by reference_.

In JavaScript interacteren primitieve data types (alles dat geen object is) _by value_. In dit geval zetten we de waarde van de property `favoriteFood` op het object `info` gelijk aan de waarde van het eerste element in de `food` array, de string met de pizza emoji in dit geval (`'🍕'`). Een string is een primitief data type en interacteert _by value_ (neem een kijkje op mijn [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) als je geïntereseerd bent om hierover meer te leren).

Daarna veranderen we de waarde van de property `favoriteFood` op het object `info`. De `food` array is niet veranderd omdat de waarde van `favoriteFood` een _kopie_ bevat van de waarde van het eerste element van de array, en geen referentie heeft naar dezelfde plek in het geheugen van de element in `food[0]`. Wanneer we food loggen is het nog steeds dezelfde array, `['🍕', '🍫', '🥑', '🍔']`.

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

Met de `JSON.parse()` methode kunnen we een JSON string parsen naar een JavaScript waarde.

```javascript
// Stringifying een nummer naar valide JSON, daarna de JSON string parsen naar een JavaScript waarde:
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// Stringifying een array waarde naar een valide JSON, daarna de JSON string parsen naar een JavaScript waarde:
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// Stringifying een object naar valide JSON, daarna de JSON string parsen naar een JavaScript waarde:
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

Elke functie heeft zijn eigen _execution context_ (of _scope_). De `getName` functie zoekt eerst binnen zijn eigen context (scope) om te kijken of het de variabele `name` bevat, die we proberen te benaderen. In dit geval bevat de `getName` functie zijn eigen `name` variabele: we declareren de variabele `name` met het keyword `let` en met de waarde `'Sarah'`.

Variabelen gedeclareerd met het keyword `let` (en `const`) worden gehoisted, maar worden niet, zoals met het keyword `var`, <i>geïnitialiseerd</i>. Ze zijn niet benaderbaar voor de lijn waar we ze declareren (initialiseren). Dit wordt de "temporal dead zone" genoemd. Wanneer we de variabelen proberen te benaderen voordat ze gedeclareerd zijn zal JavaScript een `ReferenceError` gooien.

Als we de variabele `name` **niet** niet hadden gedeclareerd binnen de `getName` functie zou de JavaScript engine doorgezocht hebben door de _scope chain_. De bovenliggende scope heeft een variabele `name` met de waarde `Lydia`. In dat geval zou `Lydia` gelogged worden.

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

Met het keyword `yield` , we `yield` waarden in een generator functie. Met het keyword `yield*`, we `yield` waarden van een andere generator functie, of iterabel object (bijvoorbeeld een array).

In `generatorOne` leveren we de volledige array `['a', 'b', 'c']` op, gebruikmakend van het keyword `yield`. De waarde van de propertie `value` op het object geretourneerd door de `next` methode op `one` (`one.next().value`) is gelijk aan de volledige array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

In `generatorTwo` gebruiken we het keyword `yield*`. Dit betekent dat de eerste opgeleverde waarde van `two` is gelijk aan de eerste opgeleverde waarde in de iterator. The iterator is de array `['a', 'b', 'c']`. De eerste opgeleverde waarde is `a`, dus de eerste keer dat we `two.next().value` aanroepen wordt `a` geretourneerd.

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

Expressies binnen template literals worden eerste geëvalueerd. Dit betekent dat de string de geretourneerde waarde zal bevatten van de expressie, de direct aangeroepen functie `(x => x)('I love')` in dit geval. We geven de waarde `'I love'` mee als een argument aan de arrow functie `x => x`. `x` is gelijk aan `'I love'`, wat geretourneerd zal worden. Dit resulteert in `I love to program`.

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

Normaal als we objecten gelijk maken aan `null` worden deze objecten opgeruimd door de _garbage collector_, omdat er geen referentie meer is naar het object. Echter, omdat de callback functie binnen `setInterval` een arrow functie is (en dus verbonden is aan het `config` object) zal de callback functie nog steeds een referentie behouden naar het `config` object. Zolang er een referentie is zal de _garbage collector_ het object niet opruimen. Omdat het niet opgeruimd wordt door de _garbage collector_ zal de `setInterval` callback functie nog steeds iedere 1000ms (1s) aangeroepen worden.

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

Als een **key/value** paar wordt toegevoegd gebruikmakend van de `set` methode zal de **key** de waarde zijn van het eerste argument dat zal worden meegegeven aan de `set` functie, en de **value** zal het tweede argument zijn die wordt meegegeven aan de `set` functie. De **key** is de _functie_ `() => 'greeting'` in dit geval, en de waarde `'Hello world'`. `myMap` is nu `{ () => 'greeting' => 'Hello world!' }`.

1 is verkeerd omdat de **key** niet `'greeting'` is, maar `() => 'greeting'`.
3 is verkeerd omdat we een nieuwe functie creëeren door het mee te geven als een parameter aan de `get` methode. Object interacteert _by reference_. Een functie is een object, dit is ook waarom twee functies nooit strict gelijk zijn. Zelfs niet als ze identiek zijn: ze hebben een referentie naar een andere plek in het geheugen.

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

De functies `changeAge` en `changeAgeAndName` hebben beiden een standaard parameter, namelijk het _nieuw_ aangemaakte object `{ ...person }`. Dit object bevat kopieën van alle key/value paren in het `person` object.

Als eerste roepen we de `changeAge` functie aan en geven het object `person` mee als argument. Deze functie verhoogt de waarde van de propertie `age` met 1. `person` is nu `{ name: "Lydia", age: 22 }`.

Dan roepen we de functie `changeAgeAndName` aan, echter geven we geen parameter mee. In plaats daarvan is de waarde van `x` gelijk aan een _nieuw_ object: `{ ...person }`. Omdat het een nieuw object is heeft het geen effect op de waarden van de properties van het object `person`. `person` is nog steeds gelijk aan `{ name: "Lydia", age: 22 }`.

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

Met de spread operator `...` kunnen we iterabelen _ontplooien_ tot individuele elementen. De `sumValues` functie krijgt drie argumenten mee: `x`, `y` en `z`. `...[1, 2, 3]` zal resulteren in `1, 2, 3`, wat we meegeven aan de functie `sumValues`.

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

Met de `+=` operator verhogen we de waarde van `num` met `1`. `num` heeft een initiële waarde van `1`, dus `1 + 1` is `2`. Het element met de index 2 in de `list` array is 🥰, `console.log(list[2])` logt 🥰.

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

Met de _optional chaining operator_ `?.` hoeven we niet langer expliciet te checken of een dieper geneste waarde valide is, of niet. Als we een propertie proberen te benaderen op een `undefined` of `null` waarde (_nullish_) zal de expressie stoppen en `undefined` retourneren.

`person.pet?.name`: `person` heeft een propertie genaamd `pet`: `person.pet` is niet _nullish_. Het heeft een propertie genaamd ``name` en retourneerd `Mara`.
`person.pet?.family?.name`: `person` heeft een propertie genaamd `pet`: `person.pet` is niet _nullish_. `pet` heeft _geen_ propertie genaamd `family`, `person.pet.family` is _nullish_. De expressie geeft `undefined` terug.
`person.getFullName?.()`: `person` heeft een propertie genaamd `getFullName`: `person.getFullName()` is niet __nullish__ en kan worden aangeroepen, wat `Lydia Hallie` retourneerd.
`member.getLastName?.()`: `member` is niet gedefinieerd: `member.getLastName()` is _nullish_. The expressie geeft `undefined` terug.

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

We geven de conditie `groceries.indexOf("banana")` mee aan de if-statement. `groceries.indexOf("banana")` geeft `0` terug, wat een _falsy_ waarde is.Omdat de conditie in de if-statement _falsy_ is wordt de code in de else-statement uitgevoerd, en `We don't have to buy bananas!` wordt gelogd.

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

De `language` methode is een `setter`. Setters hebben geen werkelijke waarde. Hun doel is om properties te _wijzigen_. Wanneer een `setter` methode wordt aangeroepen wordt `undefined` geretourneerd.

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

`typeof name` retourneert `"string"`. De string `"string"` is een _truthy_ waarde, dus `!typeof name` retourneert de boolean waarde `false`. `false === "object"` en `false === "string"` retourneren beiden `false`.

(Als we wilden checken of het type (on)gelijk is aan een bepaald type, zouden we `!==` moeten gebruiken in plaats van `!typeof`)

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

De `add` functie retourneert een arrow functie, die een arrow functie retourneert, die ook weer een arrow functie retourneert. De eerste functie krijgt een argument `x` mee met de waarde `4`. We roepen de tweede functie aan, welke een argument `y` meekrijgt met de waarde `5`. Dan roepen we de derde functie aan en die krijgt het argument `z` meet met de waarde `6`. Wanneer we de waarden proberen op te vragen van `x`, `y` en `z` ind e laatste arrow functie de JavaScript engine gaat omhoog in de _scope chain_ om de waarden van `x` en `y` te vinden. Dit retourneert `4` `5` `6`.

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

De generator functie `range` retourneert een async object met promises voor elk item in de range die we meegeven: `Promise{1}`, `Promise{2}`, `Promise{3}`. We zetten de variabele `gen` gelijk aan het async object, waarnaar we eroverheen iteraten gebruikmakend van een `for await ... of` loop. We zetten de variabele `item` gelijk aan de promises die geretourneerd worden: eerst `Promise{1}`, dan `Promise{2}` en dan `Promise{3}`. Omdat we de waarde van `item` _awaiten_, de opgeloste promise, worden de opgeloste _waarden_ van de promises geretourneerd: `1`, `2` en `3`.

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

De functie `myFunc` verwacht een object met de properties `x`, `y` en `z` als haar argument. Omdat we maar drie separate numerieke waarden (1, 2, 3) meegeven in plaats van één object met de properties `x`, `y` en `z` ({x: 1, y: 2, z: 3}), hebben `x`, `y` en `z` hun default waarde `undefined`.

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

Met de `Intl.NumberFormat` methode kunnen we numerieke waarden formatteren naar elke lokale format. We formatteren de numerieke waarde `130` naar de lokale waarde van `en-US` als een `unit` in `mile-per-hour`, wat resulteert in `130 mph`. De numerieke waarde `300` naar de lokale waarde van `en-US` als een `currency` in `USD`, wat resulteert in `€300.00`.

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

Door objecten te destructureren (_destructuring_) kunnen we de values van een object uitpakken en een uitgepakte waarde toewijzen aan de key van dezelfde property. In dit geval wijzen we de waarde "💀" toe aan `spookyItems[3]`. Dit betekent dat we de array `spookyItems` aanpassen, we voegen namelijk "💀" toe. Wanneer we de array `spookyItems` loggen wordt `["👻", "🎃", "🕸", "💀"]` gelogd.

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

Met de `Number.isNaN` methode kunnen je checken of de waarde die je meegeeft een _numerieke waarde_ is en gelijk is aan `NaN`. `name` is niet een numerieke waarde en `Number.isNaN(name)` zal `false` teruggeven. `age` is een numerieke waarde, maar is niet gelijk aan `NaN`. `Number.isNaN(age)` zal `false` teruggeven.

Met de `isNaN` methode kun je checken of een waarde die je meegeeft geen numerieke waarde is. `name` is geen numerieke waarde, dus `isNaN(name)` geeft `true` terug. `age` is wel een numerieke waarde, dus `isNaN(age)` geeft `false` terug.

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

In de `try` statement loggen we de _awaited_ waarde van de `myPromise` variabele: `"Woah some cool data"`. Omdat er geen errors gegooid worden in de `try` statement komt de code niet in de `catch`. De code in de `finally` statement wordt _altijd_ uitgevoerd, `"Oh finally!"` wordt gelogd.

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

Met de `flat` methode kunnen we een nieuwe platgemaakte array maken. De diepte van de platgemaakte array hangt af van de waarde die we meegeven. In dit geval geven we de waarde `1` mee (wat eigenlijk niet had gehoeven omdat dit de standaard waarde is), wat betekent dat alleen de arrays van het eerste niveau geconcateneerd worden. `['🥑']` en `['✨', '✨', ['🍕', '🍕']]` in dit geval. Het concateneren van deze twee arrays resulteert in `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### 132. Wat is de uitkomst?

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

`counterOne` is een instantie van de `Counter` class. De counter class bevat een `count` propertie op de constructor en een `increment` methode.Eerst roepen we de `increment` methode twee keer aan door `counterOne.increment()` aan te roepen. Op dat moment is `counterOne.count` gelijk aan `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Dan maken we de variabele `counterTwo` aan en maken het gelijk aan `counterOne`. Omdat object interacteren _by reference_ creëeren we enkel een referentie naar dezelfde plek in het geheugen waarnaar `counterOne` verwijst. Omdat dit dezelfde plek in het geheugen is worden alle veranderingen op het object `counterTwo` ook doorgevoerd op `counterOne`. Op dat moment is `counterTwo.count` ook `2`.

We roepen `counterTwo.increment()` aan, wat `count` gelijk maakt aan `3`. Als we de `count` op `counterOne` loggen is die `3`.

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

Eerst roepen we `funcOne` aan. Op de eerste regel van `funcOne` roepen we de promise `myPromise` aan, wat een _asynchrone_ operatie is. Zolang de JavaScript engine bezig is met het afmaken van de promise wordt de rest van de functie `funcOne` uitgevoerd. De volgende regel is een _asynchrone_ `setTimeout` functie, waarvan de callback functie naar de Web API wordt gestuurd. 

Zowel de promise als de timeout zijn _asynchrone_ operaties en de functie worden uitgevoerd terwijl de engine bezig is om de promise uit te voeren en de `setTimeout` callback functie af te handelen. Dit betekent dat `Last line!` als eerste wordt gelogd, omdat dit geen _asynchrone_ operatie is. Dit is de laatste regel van `funcOne`. Ondertussen wordt de promise opgelost en `Promise!` wordt gelogd. Echter, omdat we `funcTwo()` aanroepen en de callstack nog niet leeg is kan de callback van de `setTimeout` functie nog niet toegevoegd worden aan de callstack.

In `funcTwo` wachten we eerst op de promise `myPromise`. Met het keyword `await` pauzeren we de executie van de functie totdat de promise iets teruggeeft (of afwijst). Dan loggen we de _awaited_ waarde van `res` (omdat de promise zelf een promise retourneert). Dit logt `Promise!`.

De volgende regel is de _asynchrone_ `setTimeout` functie waarvan de callback functie naar de Web API gestuurd wordt.

We komen op de laatste regel van `funcTwo` wat `Last line!` logt naar het console. Omdat `funcTwo` van de callstack gaat is de callstack leeg. De callback functies die in de wachtrij stonden (`() => console.log("Timeout!")` van `funcOne` en `() => console.log("Timeout!")` van `funcTwo`) worden nu één voor één toegevoegd aan de callstack. De eerste callback functie logt `Timeout!` en wordt verwijderd van de callstack. De tweede callback functie logt dan `Timeout!` en wordt verwijderd van de callstack. Dit logt `Last line! Promise! Promise! Last line! Timeout! Timeout!`.

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

Met het sterretje `*` importeren we alle geëxporteerde waarden van een bestand, zowel de default als de benaamde. Als we het volgende bestand hadden:

```javascript
// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";

// index.js
import * as info from "./info";
console.log(info);
```

Het volgende zou gelogd worden:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

Voor het `sum` voorbeeld betekent dit dat de geïmporteerde waarde `sum` eruit ziet als:

```javascript
{ default: function sum(x) { return x + x } }
```

We kunnen deze functie aanvoeren door `sum.default` aan te roepen.

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

Met het Proxy object kunnen we functionaliteit toevoegen aan een object als we dit meegeven als tweede argument. In dit geval geven we het object `handler` mee wat de volgende properties bevat: `set` en `get`. `set` wordt aangeroepen elke keer als we een waarde van een propertie _zetten_. `get` wordt aangeroepen elke keer als we een propertie waarde opvragen.

Het eerste argument is een leeg object `{}` wat de waarde is van `person`. Aan dit object wordt de functionaliteit toegevoegd die gespecificeerd is in het object `handler`. Als we een propertie toevoegen aan het object `person` wordt `set` uitgevoerd. Als we een propertie benaderen op het object `person` wordt `get` uitgevoerd.

Als eerste voegen we de propertie `name` toe aan het proxy object (`person.name = "Lydia"`). `set` wordt aangeroepen en `"Added a new property!"` wordt gelogd.

Dan vragen we de waarde van een propertie op het proxy object op en `get` van het `handler` object wordt aangeroepen. `"Accessed a property!"` wordt gelogd.

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

Met `Object.seal`  kunnen we voorkomen dat nieuwe properties kunnen worden _toegevoegd_ of bestaande properties worden _verwijderd_.

Echter kunnen van de bestaande properties nog steeds aanpassen.

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

De `Object.freeze` methode _bevriest_ een object. Geen enkele propertie van worden toegevoegd, aangepast worden of worden verwijderd.

Echter wordt het object enkel _oppervlakkig_ bevroren wat betekent dat alleen _directe_ properties bevroren zijn. Als de propertie een ander object is, zoals `address` in dit geval, zijn de properties van dat object niet bevroren en kunnen wel worden aangepast.

</p>
</details>

---

###### 138. Wat is de uitkomst?

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

Eerst roepen we de functie `myFunc()` aan zonder argumenten mee te geven. Omdat we geen argumenten meegeven, `num` en `value` behouden hun standaard waarde: num is `2`, en `value` de geretourneerde waarde van de functie `add`. Aan de functie `add` geven we `num` als argument mee, wat de waarde `2` heeft. `add` retourneert `4` wat de waarde is van `value`.

Daarna roepen we de functie `myFunc(3)` aan het geven `3` meet als de waarde voor het argument `num`. We geven het argument `value` niet mee. Omdat we geen waarde meegeven voor het argument `value` krijgt het de standaard waarde: het retourneert de waarde van de `add` functie. Aan de functie `add` geven we `num` mee, wat de waarde `3` bevat. `add` retourneert `6` wat op dat moment de waarde is van `value`.

</p>
</details>

---

###### 139. Wat is de uitkomst?

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

In ES2020 kunnen we private variabelen toevoegen aan classes door gebruik te maken van `#`. We kunnen deze variabelen niet benaderen van buitenaf. Wanneer we `counter.#number` proberen te loggen wordt er een SuntaxError gegooid: we cannot acccess it outside the `Counter` class!

</p>
</details>

---

###### 140. Wat is de uitkomst?

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

Om te kunnen itereren over de `members` in elk element in de array `teams` moeten we `teams[i].members` meegeven aan de `getMembers` generator functie. De generator functie retourneert een generator object. Om te kunnen itereren over elk element in het generator object moeten we `yield*` gebruiken.

Als we `yield`, `return yield`, of `return` hadden geschreven zou de gehele generator functie geretourneerd worden tijdens de eerste keer dat we de `next` methode aanriepen.

</p>
</details>

---

###### 141. Wat is de uitkomst?

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

De functie `addHobby` ontvangt twee arguemnten, `hobby` en `hobbies` met als standaard waarde de waarde van de array `hobbies` op het object `person`.

Eerst roepen we de functie `addHobby` aan en geven `"running"` mee als de waarde voor `hobby`, en een lege array als de waarde voor `hobbies`. Omdat we een lege array meegeven als de waarde voor `y` wordt `"running"` toegevoegd aan deze lege array.

Daarna roepen we de functie `addHobby` aan en geven `"dancing"` mee als de waarde voor `hobby`. We gaven geen waarde mee voor `hobbies` dus krijgt het de standaard waarde, de propertie `hobbies` op het object `person`. We pushen daar de hobby `dancing` naar de array `person.hobbies`.

Als laatste roepen we de functie `addHobby` aan en geven `"baking"` als de waarde voor `hobby` en de array `person.hobbies` als de waarde voor `hobbies`. We pushen de hobby `baking` naar de array `person.hobbies`.

Na het pushen van `dancing` en `baking` is de waarde van `person.hobbies` gelijk aan `["coding", "dancing", "baking"]`.

</p>
</details>

---

###### 142. Wat is de uitkomst?

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

We declareren de variabele `pet`, wat een instantie is van de class `Flamingo`. Wanneer we deze instantie instantiëren wordt de `constructor` op `Flamingo` aangeroepen. Als eerste wordt `"I'm pink. 🌸"` gelogd, waarna we `super()` aanroepen. `super()` roept de constructor van de bovenliggende class aan, `Bird` in dit geval. De constructor op `Bird` wordt aangeroepen en logt `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 143. Welke van onderstaande opties zal resulteren in een error?

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

Het keyword `const` betekent simpelweg dat we de waarde van de variabele niet opnieuw kunnen _declareren_. Het is _read-only_. Echter, de waarde zelf is niet onaanpasbaar. De properties van de array `emojis` kunnen worden aangepast, bijvoorbeeld door nieuwe waarden te pushen, te splicen of door de lengte van de array op 0 te zetten.

</p>
</details>

---

###### 144. Wat moeten we aan het `person` object toevoegen om `["Lydia Hallie", 21]` als uitkomst te krijgen van `[...person]`?

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

Objecten zijn standaard niet itereerbaar. Een _iterable_ is een _iterable_ als het _iterator protocol_ aanwezig is. We kunnen dit met de iterator symbol `[Symbol.iterator]` handmatig toevoegen, wat een generator object zal moeten teruggeven. Bijvoorbeeld door het een generator functie te maken: `*[Symbol.iterator]() {}`. Deze generator functie moet de `Object.values` afgeven van het object `person` als we de array `["Lydia Hallie", 21]`: `yield* Object.values(this)` terug willen geven.

</p>
</details>
