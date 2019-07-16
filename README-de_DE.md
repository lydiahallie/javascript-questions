# JavaScript Fragen (für Fortgeschrittene)

Täglich poste ich mehrere Multiple-Choice-Fragen über JavaScript auf meinem [Instagram](https://www.instagram.com/theavocoder), die ich nun auch hier veröffentlichen werde.

Von einfach bis fortgeschritten: teste wie gut du JavaScript kennst, frische dein Wissen auf oder bereite dich auf ein Vorstellungsgespräch vor! :muscle: :rocket: Ich werde dieses Repo wöchentlich mit neuen Fragen erweitern.

Die Antworten sind unterhalb der Fragen versteckt. Du kannst einfach darauf klicken um die Antworten anzuzeigen. Viel Glück :heart:

### Alle verfügbaren Sprachen
* [English](./README.md)
* [العربية](./README_AR.md)
* [اللغة العامية - Egyptian Arabic](./README_ar-EG.md)
* [Bosanski](./README-bs_BS.md)  
* [Deutsch](./README-de_DE.md)  
* [Español](./README-ES.md)
* [日本語](./README-ja_JA.md)  
* [한국어](./README-ko_KR.md) 
* [Português Brasil](./README_pt_BR.md)  
* [Русский](./README_ru-RU.md)  
* [Türkçe](./README-tr_TR.md)
* [Українська мова](./README-ua_UA.md)  
* [Tiếng Việt](./README-vi.md)
* [中文版本](./README-zh_CN.md)

---

###### 1. Was ist der Output?

```javascript
function sayHi() {
	console.log(name);
	console.log(age);
	var name = "Lydia";
	let age = 21;
}

sayHi();
```

-   A: `Lydia` und `undefined`
-   B: `Lydia` und `ReferenceError`
-   C: `ReferenceError` und `21`
-   D: `undefined` und `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Innerhalb der Funktion wird zuerst der `name` mit dem `var` Keyword gesetzt. Das bedeuted, dass die Variable mit dem Standardwert `undefined` gehoisted wird (Speicher wird während der Erstellung bereitgestellt), bis zu der Zeile, wo wir die Variable definieren. Da wir die Variable auf der Zeile, wo wir den `name` loggen noch nicht gesetzt haben, ist dieser noch `undefined`.

Variablen mit dem `let` (oder `const`) Keyword werden ebenfalls gehoisted, aber im Gegensatz zu `var` werden diese nicht <i>initialisiert</i>. Auf sie können wir daher nicht zugreifen, bevor sie definiert wurden. JavaScript wirft einen `ReferenceError` aus.

</p>
</details>

---

###### 2. Was ist der Output?

```javascript
for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
}
```

-   A: `0 1 2` und `0 1 2`
-   B: `0 1 2` und `3 3 3`
-   C: `3 3 3` und `0 1 2`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Aufgrund der Event Queue in JavaScript, wird die Callback Funktion in `setTimeout` _nach_ der Schleife ausgeführt. Da die Variable `i` in der ersten Schleife mit dem `var` Keyword definiert wurde, ist dieser Wert global verfügbar. Während der Schleife wird der Wert von `i` jedesmal mithilfe des `++` Operators um `1` erhöht. Zu dem Zeitpunkt, wenn die Callback Funktion in `setTimeout` aufgerufen wird, ist `i` gleich `3` im ersten Beispiel.

In der zweiten Schleife wurde die Variable `i` mit dem `let` Keyword definiert: Variablen, die mit `let` (oder `const`) deklariert werden sind block-scoped (Ein Block ist alles zwischen `{ }`). Während jedem Durchlauf bekommt `i` einen neuen Wert zugewiesen, der jeweils innerhalb des Scopes der Schleife liegt.

</p>
</details>

---

###### 3. Was ist der Output?

```javascript
const shape = {
	radius: 10,
	diameter() {
		return this.radius * 2;
	},
	perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();
```

-   A: `20` und `62.83185307179586`
-   B: `20` und `NaN`
-   C: `20` und `63`
-   D: `NaN` und `63`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Merke, dass der Wert von `diameter` eine reguläre Funktion ist, während der Wert von `perimeter` eine Arrow Function ist.

In Arrow Functions bezieht sich das `this` Keyword auf den aktuellen Scope, was bei regulären Funktionen nicht der Fall ist. Das bedeutet, wenn wir `perimeter` aufrufen, bezieht es sich nicht auf das shape Object, sondern auf den umliegenden Scope (zum Beispiel `window`).

Es gibt keinen Wert `radius` in dem Object, daher wird `undefined` zurückgegeben.

</p>
</details>

---

###### 4. Was ist der Output?

```javascript
+true;
!"Lydia";
```

-   A: `1` und `false`
-   B: `false` und `NaN`
-   C: `false` und `false`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Das unäre Plus versucht einen Operand zu einer Nummer umzuwandeln. `true` ist `1` und `false` ist `0`.

Der String `'Lydia'` ist truthy. Was wir eigentlich fragen ist: "ist dieser truthy Wert falsy?". Die Antwort ist `false`.

</p>
</details>

---

###### 5. Was ist wahr?

```javascript
const bird = {
	size: "small",
};

const mouse = {
	name: "Mickey",
	small: true,
};
```

-   A: `mouse.bird.size` ist nicht korrekt
-   B: `mouse[bird.size]` ist nicht korrekt
-   C: `mouse[bird["size"]]` ist nicht korrekt
-   D: Keine der Antworten ist korrekt.

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

In JavaScript sind alle Object Keys strings (außer bei Symbols). Selbst wenn diese nicht als strings _getyped_ sind, werden sie im Endeffekt zu Strings konvertiert.

JavaScript interpretiert lediglich Aussagen. Wenn wir Bracket Notation verwenden, sieht JavaScript so zuerst eine öffnende eckige Klammer `[` und geht weiter, bis es eine schließende eckige Klammer `]` findet. Erst dann wird die Aussage evaluiert.

`mouse[bird.size]`: Erst wird `bird.size` evaluiert, was `"small"` zurück gibt. `mouse["small"]` gibt `true` zurück.

Mit der Dot Notation ist das nicht der Fall. `mouse` hat keinen Key namens `bird`, was bedeutet, dass `mouse.bird` `undefined` ist. Dann fragen wir nach der `size` mit Dot Notation: `mouse.bird.size`. Da `mouse.bird` `undefined` ist, fragen wir eigentlich nach `undefined.size`. Das ist fehlerhaft und wirft daher einen Fehler, wie zum Beispiel `Cannot read property "size" of undefined` zurück.

</p>
</details>

---

###### 6. Was ist der Output?

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

-   A: `Hello`
-   B: `Hey`
-   C: `undefined`
-   D: `ReferenceError`
-   E: `TypeError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

In JavaScript interagieren alle Objekte durch _Referenz_, wenn diese gleich sind.

Zuerst hält die Variable `c` ein Object. Später wird `d` die selbe Referenz zugewiesen wie `c`.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Wenn ein Object geändert wird, werden alle Referenzen zu diesem Object ebenfalls aktualisiert.

</p>
</details>

---

###### 7. Was ist der Output?

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

-   A: `true` `false` `true`
-   B: `false` `false` `true`
-   C: `true` `false` `false`
-   D: `false` `true` `true`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

`new Number()` ist ein eingebauter Function Constructor. Auch wenn der Wert wie eine Nummer aussieht, ist es in Wirklichkeit keine Nummer, sondern beinhaltet eine Menge zusätzlicher Werte und ist daher ein Object.

Wenn wir `==` nutzen wird nur geprüft, ob der _Wert_ gleich ist. Da beide den Wert `3` haben, wird `true` zurückgegeben.

Wenn wir aber `===` nutzen müssen sowohl der Wert _als auch_ der Typ übereinstimmen. Das ist `false`, da `new Number()` keine Nummer, sondern ein **Object** ist.

</p>
</details>

---

###### 8. Was ist der Output?

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
freddie.colorChange("orange");
```

-   A: `orange`
-   B: `purple`
-   C: `green`
-   D: `TypeError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Die `colorChange` Funktion ist statisch (`static`). Statische Methoden existieren nur am Constructor wo sie erstellt wurden und können nicht an ihre Kinder weitergegeben werden. Da `freddie` ein Kind ist, wird die Funktion nicht runter gereicht und ist daher auch nicht in der `freddie` Instanz verfügbar. Ein `TypeError` wird zurückgeworfen.

</p>
</details>

---

###### 9. Was ist der Output?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

-   A: `{}`
-   B: `ReferenceError: greetign is not defined`
-   C: `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Das Object wird geloggt, da wir ein leeres Object am globalen Object erstellt haben. Als wir uns bei `greeting` verschrieben haben (als `greetign`) hat JavaScript das als neues Objekt `global.greetign = {}` (oder `window.greetign = {}` im Browser) angesehen.

Um das zu verhindern, können wir `"use strict"` verwenden. Das stellt sicher, dass eine Variable erst definiert sein muss, bevor dieser ein Wert zugewiesen werden kann.

</p>
</details>

---

###### 10. Was passiert, wenn wir das tun?

```javascript
function bark() {
	console.log("Woof!");
}

bark.animal = "dog";
```

-   A: Nichts, das ist absolut in Ordnung.
-   B: `SyntaxError`. Man kann einer Funktion keine Properties in der Form zuweisen.
-   C: `undefined`
-   D: `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

In JavaScript ist das ohne Weiteres möglich, da Funktionen Objekte sind. (Alle Typen außer primitiven Typen sind Objekte)

Eine Funktion ist ein spezieller Typ eines Objekts. Der Code, den wir schreiben ist keine eigentliche Funktion, sondern ein Object mit Properties. Die Property ist aufrufbar.

</p>
</details>

---

###### 11. Was ist der Output?

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

-   A: `TypeError`
-   B: `SyntaxError`
-   C: `Lydia Hallie`
-   D: `undefined` `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Man kann keine Properties einem Constructor zuweisen, wie es bei normalen Objects der Fall ist. Wenn man ein Feature allen Objects zugleich zuweisen möchte, muss man den Prototype verwenden. In diesem Fall also:

```js
Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};
```

So hätte `member.getFullName()` funktioniert. Warum ist das von Vorteil? Sagen wir, wir hätten diese Methode dem Constructor selbst zugewiesen, aber vielleicht benötigt nicht jede Instanz von `Person` diese Methode. So hätte das eine Menge Arbeitsspeicher verschwendet, weil jede Instanz die Property zugewiesen bekommt, auch wenn sie diese gar nicht benötigt.
Stattdessen haben wir sie nur dem Prototype zugewiesen, sodass sie nur an einer Stelle im Arbeitsspeicher hinterlegt ist, aber dennoch haben alle Instanzen Zugriff darauf.

</p>
</details>

---

###### 12. Was ist der Output?

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

-   A: `Person {firstName: "Lydia", lastName: "Hallie"}` und `undefined`
-   B: `Person {firstName: "Lydia", lastName: "Hallie"}` und `Person {firstName: "Sarah", lastName: "Smith"}`
-   C: `Person {firstName: "Lydia", lastName: "Hallie"}` und `{}`
-   D:`Person {firstName: "Lydia", lastName: "Hallie"}` und `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Für `sarah` haben wir nicht das `new` Keyword verwendet. Wenn wir `new` verwenden, bezieht sich das auf das neue, leere Object, welches wir erstellen. Wenn wir allerdings das `new` Keyword nicht verwenden, bezieht es sich auf das **globale Objekt**.

Wir haben `this.firstName` den Wert `"Sarah"` zugewiesen und `this.lastName` den Wert `"Smith"`. Was wir damit eigentlich zugewiesen haben, ist `global.firstName = 'Sarah'` und `global.lastName = 'Smith'`. `sarah` selbst ist daher `undefined`.

</p>
</details>

---

###### 13. Was sind die drei Phasen der Event Propagation?

-   A: Target > Capturing > Bubbling
-   B: Bubbling > Target > Capturing
-   C: Target > Bubbling > Capturing
-   D: Capturing > Target > Bubbling

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Während der **capturing** Phase geht das Event durch die Elternelemente bis hin zum Zielelement. Wenn dann das Ziel (**target**) erreicht ist, beginnt die **bubbling** Phase.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Alle Objekte haben Prototypes.

-   A: wahr
-   B: falsch

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Alle Objekte haben Prototypes, außer dem **Basis Objekt**. Das Basis Objekt hat Zugriff auf einige Methoden und Properties, wie zum Beispiel `.toString`. Das ist der Grund, warum wir eingebaute JavaScript Methoden nutzen können. All diese Methoden sind am Prototype verfügbar. Obwohl JavaScript diese nicht direkt am Objekt finden kann, folgt es der Prototype Chain, bis es die Property findet und damit verfügbar macht.

</p>
</details>

---

###### 15. Was ist der Output?

```javascript
function sum(a, b) {
	return a + b;
}

sum(1, "2");
```

-   A: `NaN`
-   B: `TypeError`
-   C: `"12"`
-   D: `3`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

JavaScript ist eine **Sprache mit dynamischen Typen**, was bedeutet, dass wir Variablen keine spezifischen Typen zuweisen. Werte können automatisch in einen anderen Typ umgewandelt werden, was _implicit type coercion_ genannt wird. **Coercion** (dt. "Zwang") ist die Umwandlung von einem Typ zu einem anderen.

In diesem Beispiel wandelt JavaScript die Nummer `1` in einem String um, sodass die Funktion Sinn ergibt und einen Wert zurückgeben kann. Während der Addition eines numerischen Types (`1`) mit einem String (`'2'`) wird die Nummer wie ein String behandelt. Wir können Strings mit einem Plus Symbol zusammensetzen, zum Beispiel: `"Hello" + "World"`. Genau das passiert hier, sodass `"1" + "2"` einen Wert von `"12"` zurückgibt.

</p>
</details>

---

###### 16. Was ist der Output?

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

-   A: `1` `1` `2`
-   B: `1` `2` `2`
-   C: `0` `2` `2`
-   D: `0` `1` `2`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Der **Postfix** Unary Operator `++`:

1. gibt den Wert zurück (hier: `0`)
2. erhöht den Wert (`number` ist jetzt `1`)

Der **Prefix** Unary Operator `++`:

1. erhöht den Wert (`number` ist jetzt `2`)
2. gibt den Wert zurück (hier: `2`)

Der Output ist daher `0 2 2`.

</p>
</details>

---

###### 17. Was ist der Output?

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

-   A: `"Lydia"` `21` `["", " is ", " years old"]`
-   B: `["", " is ", " years old"]` `"Lydia"` `21`
-   C: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Wenn man Template Literals verwendet ist das erste Argument immer ein Array der String Werte. Die restlichen Argumente bekommen die Werte der übergebenen Expressions zugewiesen.

</p>
</details>

---

###### 18. Was ist der Output?

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

-   A: `You are an adult!`
-   B: `You are still an adult.`
-   C: `Hmm.. You don't have an age I guess`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wenn man prüft, ob Werte gleich sind werden Primitives immer anhand ihrer _Value_ verglichen, während Objects anhand der _Referenz_ verglichen werden. JavaScript prüft, ob die Objekte eine Referenz zur gleichen Stelle im Speicher haben.

Die beiden Objekte, die wir hier vergleichen haben das nicht. Das Objekt, welches wir als Parameter übergeben haben bezieht sich auf eine andere Stelle im Speicher, als das Objekt, welches wir verwendet haben um die Werte zu vergleichen.

Deshalb werfen sowohl `{ age: 18 } === { age: 18 }` als auch `{ age: 18 } == { age: 18 }` den Wert `false` zurück.

</p>
</details>

---

###### 19. Was ist der Output?

```javascript
function getAge(...args) {
	console.log(typeof args);
}

getAge(21);
```

-   A: `"number"`
-   B: `"array"`
-   C: `"object"`
-   D: `"NaN"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Der Spread Operator (`...args`) gibt ein Array mit Argumenten zurück. Ein Array ist ein Objekt, sodass `typeof args` `"object"` ausgibt.

</p>
</details>

---

###### 20. Was ist der Output?

```javascript
function getAge() {
	"use strict";
	age = 21;
	console.log(age);
}

getAge();
```

-   A: `21`
-   B: `undefined`
-   C: `ReferenceError`
-   D: `TypeError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Durch `"use strict"` kann man sicher stellen, dass man nicht versehentlich globale Variablen definiert. Da wir die Variable `age` nie definiert haben und `"use strict"` verwenden wirft JavaScript einen reference error aus. Hätten wir `"use strict"` nicht verwendet, so hätte es funktioniert, da die property `age` dem globalen Objekt zugewiesen worden wäre.

</p>
</details>

---

###### 21. Was ist der Wert von `sum`?

```javascript
const sum = eval("10*10+5");
```

-   A: `105`
-   B: `"105"`
-   C: `TypeError`
-   D: `"10*10+5"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

`eval` evaluiert Code, der als String übergeben wurde. Falls es, wie in diesem Fall, eine Expression ist, so wird diese Expression auch evaluiert. Die Expression `10 * 10 + 5` gibt damit die nummer `105` aus.

</p>
</details>

---

###### 22. Wie lange ist cool_secret verfügbar?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

-   A: Für immer, der Wert geht nicht verloren.
-   B: Wenn der User den Tab schließt.
-   C: Wenn der User den Browser schließt, nicht nur den Tab.
-   D: Wenn der User den Computer neu startet.

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Der Wert in `sessionStorage` geht verloren, wenn der _Tab_ geschlossen wird.

Wenn man stattdessen `localStorage` verwendet, bleibt der Wert für immer bestehend, es sei denn `localStorage.clear()` wird ausgeführt.

</p>
</details>

---

###### 23. Was ist der Output?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

-   A: `8`
-   B: `10`
-   C: `SyntaxError`
-   D: `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit dem `var` Keyword kann man mehrere Variablen mit dem selben Namen definieren. Die Variable hält dann den letzt gesetzten Wert.

Das ist nicht möglich mit `let` oder `const`, da diese dem Block Scope unterliegen.

</p>
</details>

---

###### 24. Was ist der Output?

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

-   A: `false` `true` `false` `true`
-   B: `false` `true` `true` `true`
-   C: `true` `true` `false` `true`
-   D: `true` `true` `true` `true`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Alle Object Keys (außgenommen Symbols) sind im Endeffekt Strings, selbst, wenn man diese nicht explizit als String definiert. Deshalb gibt `obj.hasOwnProperty('1')` auch `true` zurück.

Das funktioniert nicht für Set. Da wir keine `'1'` in unserem Set haben wirft `set.has('1')` den Wert `false` zurück. Der Typ von `1` ist numerisch und `set.has(1)` gibt daher `true` zurück.

</p>
</details>

---

###### 25. Was ist der Output?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

-   A: `{ a: "one", b: "two" }`
-   B: `{ b: "two", a: "three" }`
-   C: `{ a: "three", b: "two" }`
-   D: `SyntaxError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wenn man zwei Keys mit dem selben Namen hat, wird der erste Key ersetzt. Er wird immernoch an erster Stelle sein, allerdings mit dem zuletzt gesetzten Wert.

</p>
</details>

---

###### 26. Der JavaScript Global Execution Context erstellt zwei Dinge: das globale Objekt und das "this" Keyword.

-   A: wahr
-   B: falsch
-   C: kommt darauf an

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Der Base Execution Context entspricht dem Global Execution Context und ist überall in unserem Code verfügbar.

</p>
</details>

---

###### 27. Was ist der Output?

```javascript
for (let i = 1; i < 5; i++) {
	if (i === 3) continue;
	console.log(i);
}
```

-   A: `1` `2`
-   B: `1` `2` `3`
-   C: `1` `2` `4`
-   D: `1` `3` `4`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

`continue` überspringt einen Durchlauf, wenn eine gewisse Bedingung erfüllt ist und `true` zurück gibt.

</p>
</details>

---

###### 28. Was ist der Output?

```javascript
String.prototype.giveLydiaPizza = () => {
	return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

-   A: `"Just give Lydia pizza already!"`
-   B: `TypeError: not a function`
-   C: `SyntaxError`
-   D: `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

`String` ist ein eingebauter Constructor, dem wir Properties zuweisen können. Wir haben hier seinem Prototype eine Methode hinzugefügt. Primitive strings werden automatisch durch die String Prototype Function in ein String Objekt umgewandelt. Daher haben alle Strings (String Objects) Zugriff auf diese Methode.

</p>
</details>

---

###### 29. Was ist der Output?

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

-   A: `123`
-   B: `456`
-   C: `undefined`
-   D: `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Objekt Keys werden automatisch in Strings umgewandelt. Wir versuchen ein Objekt mit dem Wert `123` als Key dem Objekt `a` zuzuweisen.

Allerdings wird ein Object, wenn es in einen String umgewandelt wird als `"[Object object]"` ausgegeben. Was wir hier also sagen ist, dass `a["Object object"] = 123` ist. Wir versuchen das gleiche erneut - `c` ist ein anderes Objekt, welches wir implizit zu einem String umwandeln, sodass `a["Object object"] = 456` ist.

Dann loggen wir `a[b]`, was eigentlich `a["Object object"]` ist und gerade von uns zu `456` gesetzt wurde, sodass `456` ausgegeben wird.

</p>
</details>

---

###### 30. Was ist der Output?

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

-   A: `First` `Second` `Third`
-   B: `First` `Third` `Second`
-   C: `Second` `First` `Third`
-   D: `Second` `Third` `First`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Wir haben eine `setTimeout` Funktion, die zuerst ausgeführt wird und dennoch als letztes ausgegeben wird.

Der Grund dafür ist, dass Browser nicht nur die Runtime Engine, sondern auch eine `WebAPI` haben. Die `WebAPI` stellt uns `setTimeout` bereit.

Nachdem die _Callback Function_ an die WebAPI übergeben wurde wird `setTimeout` (aber nicht die Callback Function) ausgeführt und aus dem Stack entfernt.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Jetzt wird `foo` ausgeführt und `"First"` geloggt.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` wird aus dem Stack entfernt und `baz` wird ausgeführt. `"Third"` wird geloggt.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

Die WebAPI kann nicht einfach Dinge zum Stack hinzufügen, wenn sie bereit ist, stattdessen wird die Callback Function zur _queue_ hinzugefügt.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Das ist, wo die Event Loop ins Spiel kommt. Die **Event Loop** betrachtet den Stack und die Task Queue. Wenn der Stack leer ist wird das erste Element in der Queue zum Stack übertragen.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` wird ausgeführt, `"Second"` wird geloggt und aus dem Stack entfernt.

</p>
</details>

---

###### 31. Was ist event.target wenn ein Button geklickt wird?

```html
<div onclick="console.log('first div')">
	<div onclick="console.log('second div')">
		<button onclick="console.log('button')">
			Click!
		</button>
	</div>
</div>
```

-   A: Äußerer `div`
-   B: Innerer `div`
-   C: `button`
-   D: Ein Array mit allen genesteten Elementen

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Das am tiefsten genestete Element, welches das Event auslöst ist das Event Target. Man kann den Bubbling Prozess mit `event.stopPropagation` anhalten.

</p>
</details>

---

###### 32. Was ist der geloggte Output, wenn man auf den Paragraph klickt?

```html
<div onclick="console.log('div')">
	<p onclick="console.log('p')">
		Click here!
	</p>
</div>
```

-   A: `p` `div`
-   B: `div` `p`
-   C: `p`
-   D: `div`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Wenn wir auf den Paragraph klicken, sehen wir zwei logs: `p` und `div`. Während der Event Propagation werden drei Phasen ausgeführt: capturing, target und bubbling. Standardmäßig werden Event Handler in der Bubbling Phase ausgeführt (es sei denn man setzt `useCapture` auf `true`). Die Ausführung beginnt vom tiefsten Element nach Außen.

</p>
</details>

---

###### 33. Was ist der Output?

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
	console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

-   A: `undefined is 21` `Lydia is 21`
-   B: `function` `function`
-   C: `Lydia is 21` `Lydia is 21`
-   D: `Lydia is 21` `function`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

In beiden Fällen können wir das Objekt weiter reichen, auf welches sich das `this` Keyword beziehen soll. Allerdings wird `.call` _sofort ausgeführt_.

`.bind.` gibt eine _Kopie_ der Funktion mit gebundenem Context zurück und wird daher nicht sofort ausgeführt.

</p>
</details>

---

###### 34. Was ist der Output?

```javascript
function sayHi() {
	return (() => 0)();
}

typeof sayHi();
```

-   A: `"object"`
-   B: `"number"`
-   C: `"function"`
-   D: `"undefined"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Die `sayHi` Funktion gibt den Wert der sofort ausgeführten Funktion (IIFE) zurück. Die Funktion gibt `0` zurück, was vom Typ `"number"` ist.

Es gibt nur 7 eingebaute Typen in JavaScript: `null`, `undefined`, `boolean`, `number`, `string`, `object`, und `symbol`. `"function"` ist kein Typ, weil Funktionen Objekte sind und daher dem Typ `"object"` entsprechen.

</p>
</details>

---

###### 35. Welcher dieser Werte ist falsy?

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

-   A: `0`, `''`, `undefined`
-   B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
-   C: `0`, `''`, `new Boolean(false)`, `undefined`
-   D: Alle sind falsy

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Es gibt nur 6 falsy typen:

-   `undefined`
-   `null`
-   `NaN`
-   `0`
-   `''` (leerer String)
-   `false`

Funktions-Constructor, wie `new Number` und `new Boolean` sind truthy.

</p>
</details>

---

###### 36. Was ist der Output?

```javascript
console.log(typeof typeof 1);
```

-   A: `"number"`
-   B: `"string"`
-   C: `"object"`
-   D: `"undefined"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

`typeof 1` gibt `"number"` zurück.
`typeof "number"` gibt `"string"` zurück.

</p>
</details>

---

###### 37. Was ist der Output?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

-   A: `[1, 2, 3, 7 x null, 11]`
-   B: `[1, 2, 3, 11]`
-   C: `[1, 2, 3, 7 x empty, 11]`
-   D: `SyntaxError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wenn Werte einem Element in einem Array zugewiesen werden, die die Länge des Arrays übersteigen, so erstellt JavaScript "empty slots" (leere Stellen). Diese haben den Wert `undefined`, aber das Array sieht dann in etwa so aus:

`[1, 2, 3, 7 x empty, 11]`

abhängig davon wo das Array ausgeführt wird (die Ausgabe ist unterschiedlich für verschiedene Browser, Node, etc.)

</p>
</details>

---

###### 38. Was ist der Output?

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

-   A: `1` `undefined` `2`
-   B: `undefined` `undefined` `undefined`
-   C: `1` `1` `2`
-   D: `1` `undefined` `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Der `catch` Block erhält ein Argument `x`. Das ist nicht das selbe `x` wie die Variable, der wir Argumente zuweisen. Die Variable `x` ist block-scoped.

Später setzen wir die block-scoped Variable gleich `1`, und setzen ebenfalls den Wert der Variable `y`. Jetzt loggen wir die block-scoped Variable `x` mit dem Wert `1`.

Außerhalb des `catch` Blocks ist `x` noch immer `undefined` und `y` ist `2`. Wenn wir `console.log(x)` außerhalb des `catch` Block ausführen, wird für `x` der Wert `undefined` und für `y` der Wert `2` geloggt.

</p>
</details>

---

###### 39. Alles in JavaScript ist entweder ein ...

-   A: Primitive oder Object
-   B: Function oder Object
-   C: Fangfrage: nur Objects!
-   D: Number oder Object

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

JavaScript hat nur primitive Typen und Objekte.

Primitive Typen sind `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, und `symbol`.

Was einen primitiven Typ von einem Objekt unterscheidet ist, dass Primitive keine Properties oder Methoden haben, obwohl zum Beispiel `'foo'.toUpperCase()` zu `'FOO'` wird und keinen `TypeError` auswirft. Der Grund dafür ist, wenn man eine Property oder Method an einem primitiven Typ wie einem String ausführt, legt JavaScript eine Wrapper Class um das String Objekt, die danach sofort wieder entfernt wird, wenn die Expression ausgeführt wurde. Alle primitiven Typen außer `null` und `undefined` weisen dieses Verhalten auf.

</p>
</details>

---

###### 40. Was ist der Output?

```javascript
[[0, 1], [2, 3]].reduce(
	(acc, cur) => {
		return acc.concat(cur);
	},
	[1, 2],
);
```

-   A: `[0, 1, 2, 3, 1, 2]`
-   B: `[6, 1, 2]`
-   C: `[1, 2, 0, 1, 2, 3]`
-   D: `[1, 2, 6]`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

`[1, 2]` ist unser ursprünglicher Wert. Zusammen mit dem ersten `acc` ist das der Wert, mit dem wir beginnen. Während dem ersten Durchlauf ist `acc` gleich `[1, 2]`, und `cur` ist `[0, 1]`. Wir verbinden diese, was `[1, 2, 0, 1]` ergibt.

Dann entspricht `acc` gleich `[1, 2, 0, 1]` und `cur` ist gleich `[2, 3]`. Wir verbinden diese und bekommen `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

---

###### 41. Was ist der Output?

```javascript
!!null;
!!"";
!!1;
```

-   A: `false` `true` `false`
-   B: `false` `false` `true`
-   C: `false` `true` `true`
-   D: `true` `true` `false`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

`null` ist falsy. `!null` gibt `true` zurück. `!true` gibt `false` zurück.

`""` ist falsy. `!""` gibt `true` zurück. `!true` gibt `false` zurück.

`1` ist truthy. `!1` gibt `false` zurück. `!false` gibt `true` zurück.

</p>
</details>

---

###### 42. Was gibt die `setInterval` Method zurück?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

-   A: Eine unique id
-   B: Die definierte Anzahl von Millisekunden
-   C: Die Callback Function
-   D: `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Es gibt eine unique id zurück. Diese id kann zum Beispiel verwendet werden um das Interval mit der `clearInterval()` Funktion zu leeren.

</p>
</details>

---

###### 43. Was wird hier ausgegeben?

```javascript
[..."Lydia"];
```

-   A: `["L", "y", "d", "i", "a"]`
-   B: `["Lydia"]`
-   C: `[[], "Lydia"]`
-   D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Ein String ist ein Iterable. Der Spread Operator mappt jedes Zeichen eines Iterables zu einem eigenen Element.

</p>
</details>

---

###### 44. Was ist der Output?

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
- D: `0, 10 and 10, 20`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Reguläre Funktionen können nicht angehalten werden, wenn sie bereits aufgerufen wurden. Eine Generator Funktion kann dagegen auch angehalten werden, nachdem sie aufgerufen wurde und später fortgesetzt werden, wo sie angehalten wurde. Jedes Mal, wenn eine Generator Funktion ein `yield` Keyword findet, wirft die Funktion den danach ermittelten Wert aus. Wichtig: _yield_ ist nichtdas selbe wie _return_.

Zuerst initialisieren wir die Generator Funktion mit `i` gleich `10`. Wir rufen die Generator Funktion mit der `next()` Methode auf. Beim ersten Aufruf der Generator Funktion is `i` gleich `10`. Wenn wir bei `yield` ankommen wird der Wert von `i` ausgegeben. Der Generator wird angehalten und `10` wird geloggt.

Dann wird die Funktion erneut mit der `next()` Methode aufgerufen und beginnt von dort, wo sie zuletzt angehalten wurde, nach wie vor mit `i` gleich `10`. Jetzt erreichen wir das nächste `yield` Keyword bei `i * 2`. `i` ist gleich `10`, sodass das Ergebnis von `10 * 2` ausgegeben wird, was `20` ist. Das Ergebnis ist `10, 20`.

</p>
</details>

---

###### 45. Was wird hier ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Wenn wir mehrere Promises in die `Promice.race` Methode eingegeben, wird das Promise, welches _zuerst_ gelöst/abgelehnt wird auch hier gelöst/abgelehnt. Die `setTimeout` Methode bekommt einen Timer von 500ms für das erste Promise (`firstPromise`) übergeben, und 100ms für das zweite Promise (`secondPromise`). Das bedeutet, dass `secondPromise` mit dem Wert `'two'` zuerst gelöst wird und an `res` übergeben wird. Der Wert wird geloggt.

</p>
</details>

---

###### 46. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Zuerst definieren wir die Variable `person` mit dem Wert eines Objekts, welches eine `name` Property hat.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Dann definieren wir eine Variable namens `members`. Wir setzen das erste Element des Arrays gleich dem Wert der `person` Variable. Objekte interagieren durch eine _Referenz_, wenn diese gleichgesetzt werden. Wenn eine Referenz von einer Variable zur anderen gleichgesetzt wird, so wird eine _Kopie_ der Referenz erstellt (Wichtig: nicht die _selbe_ Referenz!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Dann setzen wir die Variable `person` gleich `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Wir ändern nur den Wert der Variable `person` und nicht das erste Element im Array, da das Element eine andere Referenz als das Objekt hat (Kopie). Das erste Element in `members` beinhaltet immernoch die Referenz zum original Objekt. Wenn wir das `members` Array loggen ist dieses immernoch der Wert des Objekts, welches dann geloggt wird.

</p>
</details>

---

###### 47. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit einer `for-in` Schleife können wir über Objekt Keys iterieren - in diesem Fall `name` und `age`. Im Endeffekt sind Objekt Keys Strings (oder Symbols). Bei jedem Durchlauf setzen wir den Wert von `item` gleich zum aktuellen Key. Zuerst ist `item` gleich `name` und wird geloggt. Dann wird `item` gleich `age` gesetzt und wird geloggt.

</p>
</details>

---

###### 48. Was ist der Output?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Operator Assoziativität ist die Reihenfolge, in der der Compiler die Expression evaluiert, entweder links-nach-rechts oder rechts-nach-links. Das funktioniert nur, wenn alle Operatoren die _gleiche_ Priorität haben. Hier haben wir nur einen Operator: `+`. Für Addition ist die Assoziativität links-nach-rechts.

`3 + 4` wird zuerst errechnet, das Ergebnis ist `7`.

`7 + '5'` ergibt `"75"` (aufgrund von Coercion). JavaScript wandelt `7` in einen String um (Siehe Frage 15). Zwei Strings werden durch den `+` Operator zusammengesetzt.`"7" + "5"` ergibt `"75"`.

</p>
</details>

---

###### 49. Was ist der Wert von `num`?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Nur die erste Zahl im String wird ausgegeben. Aufgrund des _radix_ (das zweite Argument definiert, welchen Typ einer Zahl wir parsen wollen: Basis 10, hexadezimal, Octal, Binary, etc.) prüft `parseInt` ob die Zeichen im String gültig sind. Wenn ein Zeichen erkannt wird, welches nicht gültig ist, wird der Parse Vorgang beendet und die nachfolgenden Zeichen werden ignoriert.

`*` ist keine gültige Nummer, sodass nur `"7"` als Dezimal geparsed wird: `7`. `num` ist jetzt gleich `7`.

</p>
</details>

---

###### 50. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wenn man über das Array mappt, ist `num` gleich dem Element, welches gerade durchlaufen wird. In diesem Fall sind die Elemente Nummern, sodass die Kondition der If-Schleife `typeof num === "number"` erfüllt ist und `true` zurück gibt. Die map Funktion erstellt ein neues Array und beinhaltet die Werte der Funktion.

Allerdings geben wir keinen Wert aus. Wenn unsere Funktion keinen Wert ausgibt, ist der Standard "return" `undefined`. Für jedes Element im Array wird die Funktion aufgerufen, sodass für jedes Element `undefined` ausgegeben wird.

</p>
</details>

---

###### 51. Was ist der Output?

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Argumente werden als _Wert_ übergeben, es sei denn ihr Wert ist ein Objekt, dann werden sie als _Referenz_ übergeben. `birthYear` wird als Wert übergeben, da es ein String ist und kein Objekt. Wenn Argumente als Wert übergeben werden, wird eine _Kopie_ des Wertes erstellt (Siehe Frage 46).

Die Variable `birthYear` beinhaltet eine Referenz zum Wert `"1997"`. Das Argument `year` beinhaltet ebenso eine Referenz zum Wert `"1997"`, aber die Werte sind nicht identisch! Wenn wir den Wert von `year` ändern, indem wir ihn gleich `"1998"` setzen, ändern wir nur den Wert von `year`. `birthYear` ist immernoch `"1997"`.

Der Wert von `person` ist ein Objekt, sodass das Argument `member` eine Kopie der Referenz des _gleichen_ Objekts hat. Wenn wir also eine Property dessen Objekt `member` eine Referenz enthält, wird der Wert von `person` ebenso geändert, da beide die gleiche Referenz zum selben Objekt beinhalten. Die Property `name` von `person` ist jetzt gleich `"Lydia"`.

</p>
</details>

---

###### 52. Was ist der Output?

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error!", e);
  }
}

sayHi();
```

- A: `"It worked! Hello world!"`
- B: `"Oh no an error: undefined"`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error! Hello world!"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Mit dem `throw` Statement können wir individuelle Fehlermeldungen erstellen und Exceptions erstellen. Eine Exception kann ein <b>String</b>, eine <b>Nummer</b>, ein <b>Boolean</b> oder ein <b>Objekt</b> sein. In diesem Fall ist unsere Exception der String `'Hello world'`.

Mit dem `catch` Statement können wir definieren, was passiert, wenn die Exception im `try` Block eintritt. Wenn die Exception eintritt wird der String `'Hello world'` ausgegeben. Nun loggen wir `e`, was gleich dem String ist. Das Ergebnis ist `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Wenn man eine Property ausgibt ist der Wert der Property gleich dem ausgegeben Wert und nicht dem Wert, der im Constructor definiert wurde. Wir geben den String `"Maserati"` aus, sodass `myCar.make` gleich `"Maserati"` ist.

</p>
</details>

---

###### 54. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

`let x = y = 10;` ist kurz für:

```javascript
y = 10;
let x = y;
```

Wenn wir `y` gleich `10` setzen, erstellen wir eigentlich eine Property `y` im globalen Objekt (`window` im Browser oder `global` in Node). Im Browser ist jetzt `window.y` gleich `10`.

Dann erstellen wir eine Variable `x` mit dem Wert von `y` (`10`). Variablen, die mit `let` erstellt werden sind _Block-Scoped_, was bedeutet, dass sie nur in dem Block existieren, wo sie erstellt wurden – der hier erstellte Funktion (IIFE) in diesem Fall. Wenn wir den `typeof` Operator nutzen ist `x` nicht definiert. Wir versuchen auf `x` außerhalb des Scopes zuzugreifen, was bedeutet, dass `x` `"undefined"` ist. `console.log(typeof x)` gibt daher `"undefined"` aus.

Da wir die Variable `y` aber global erstellt haben ist ihr Wert `10` auch hier verfügbar und überall in userem Code aufrufbar. `y` ist definiert und beinhaltet einen Wert vom Typ `"number"`. `console.log(typeof y)` gibt daher `"number"` aus.

</p>
</details>


---

###### 55. Was ist der Output?

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
- B: `"Woof I am Mara"`,`"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Properties von Objekten können mit dem `delete` Keyword entfernt werden, selbst am Prototype. Beim entfernen von Properties am Prototype ist zu beachten, dass diese dann aus der Prototypen-Kette verschwinden. In unserem Fall existiert die `bark` Funktion nicht mehr am Prototype nachdem `delete Dog.prototype.bark` ausgeführt wurde.

Wenn wir versuchen etwas auszuführen, was keine Funktion ist, wird ein `TypeError` ausgeworfen. In diesem Fall `TypeError: pet.bark is not a function`, da `pet.bark` `undefined` ist.

</p>
</details>

---

###### 56. Was ist der Output?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Das `Set` Objekt ist eine Sammlung von _eindeutigen_ Werten: jeder Wert kann nur ein Mal in einem Set vorkommen.

Wir übergeben `[1, 1, 2, 3, 4]` mit einer doppelten `1`. Da wir keine doppelten Werte in einem Set haben können wird eine `1` entfernt. Das Ergebnis ist `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Ein importiertes Modul ist _read-only_, was bedeutet, dass importierte Module nicht geändert werden können. Nur das Modul, welches diese exportiert kann deren Wert ändern.

Wenn wir also den Wert von `myCounter` erhöhen bekommen wir den Fehler `myCounter is read-only and cannot be modified`.

</p>
</details>

---

###### 58. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Der `delete` Operator gibt einen Boolean Wert zurück: `true` bei erfolgreichem entfernen, oder andernfalls `false`. Variablen, die mit `var`, `let` oder `const` deklariert werden, können andererseits  nicht mit `delete` entfernt werden.

Der Wert von `name` wurde mit `const` deklariert, weshalb `delete` nicht möglich ist und `false` zurückgegeben wird. Als wir `age` den Wert `21` zugewiesen haben, haben wir eine Property `age` zum globalen Objekt hinzugefügt. Diese Properties kann man mit `delete` entfernen, sodass `delete age` `true` zurückgibt.

</p>
</details>

---

###### 59. Was ist der Output?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wir können durch Destructuring Werte aus Arrays oder Properties aus Objekten entpacken. Zum Beispiel:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

Der Wert von `a` ist jetzt `1` und der Wert von `b` ist jetzt `2`. Was wir in der Frage eigentlich getan haben ist:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Das bedeutet, dass der Wert von `y` gleich des ersten Wertes im Array ist, sprich der Zahl `1` entspricht. Wenn wir `y` loggen bekommen wir `1` ausgegeben.

</p>
</details>

---

###### 60. Was ist der Output?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Es ist möglich Objekte mit dem Spread Operator `...` zu verbinden. Dieser erstellt Kopien der Key/Value Paare eines Objektes und fügt diese dem anderen Objekt hinzu. In diesem Fall wird eine Kopie des `user` Objekts erstellt und dem `admin` Objekt zugewiesen. Das `admin` Objekt beinhaltet nun die kopierten Key/Value Paare, sodass das Ergebnis `{ admin: true, name: "Lydia", age: 21 }` ist.

</p>
</details>

---

###### 61. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit der `defineProperty` Methode können wir neue Properties zu einem Objekt hinzufügen oder bestehende modifizieren. Wenn wir mit der `defineProperty` Methode Properties einem Objekt hinzufügen, sind diese standardmäßig _nicht zählbar_. Die `Object.keys` Methode gibt alle _zählbaren_ Property Namen eines Objektes zurück, in diesem Fall nur `"name"`.

Properties, die mit `defineProperty` erstellt wurden sind standardmäßig unveränderbar. Man kann dieses Verhalten mit den `writable`, `configurable` und `enumerable` Properties verändern. Auf diese Art gibt die `defineProperty` Methode mehr Kontrolle über die Properties, die einem Objekt hinzugefügt werden.

</p>
</details>

---

###### 62. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Das zweite Argument von `JSON.stringify` ist ein _Replacer_. Der Replacer kann entweder eine Funktion oder ein Array sein und gibt uns Kontrolle darüber, wie die Werte in Strings umgewandelt werden sollen.

Wenn der Replacer ein _Array_ ist, werden nur die Properties dem JSON String hinzugefügt, die in dem Array aufgeführt sind. In diesem Fall sind das nur `"level"` und `"health"`. `"username"` ist ausgeschlossen. `data` ist jetzt gleich `"{"level":19, "health":90}"`.

Wenn der Replacer eine _Funktion_ ist, so wird diese Funktion für jede Property im Objekt aufgerufen, die in Strings umgewandelt wird. Der Wert, den die Funktion zurückgibt, ist der Wert der Property, die dem JSON String hinzugefügt wird. Ist der Wert `undefined`, so wird die Property ausgeschlossen.

</p>
</details>

---

###### 63. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Der unäre Operator `++` _gibt zuerst_ den Wert des Operanden aus und _erhöht danach_ den Wert des Operanden. Der Wert `num1` ist `10`, da `increaseNumber` zuerst den Wert von `num1` (`10`) ausgibt und ihn danach erhöht.

`num2` ist gleich `10`, da wir `num1` `increasePassedNumber` zugewiesen haben. `number` ist gleich `10` (der Wert von `num1`). Der unäre Operator `++` gibt erneut _zuerst_ den Wert des Operanden aus und _erhöht danach_ den Wert. Der Wert von `number` ist `10`, sodass `num2` ebenfalls `10` ist.

</p>
</details>



---

###### <a name=20190707></a>64. Was ist der Output?

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number * 2));
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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

In ES6 können wir Parameter mit einem Standardwert initialisieren. Der Wert des Parameters wird als Standard gesetzt, wenn kein anderer Wert übergeben wird oder der Wert des Parameters `"undefined"` ist. In diesem Fall verteilen wir die Properties von `value` in einem neuen Objekt, sodass `x` den Standardwert `{ number: 10 }` bekommt.

Das Standard Argument wird beim _Aufruf_ evaluiert. Jedes Mal, wenn wir die Funktion aufrufen, wird ein _neues_ Objekt erstellt. Wir rufen die `multiply` Funktion die ersten beiden Male auf ohne einen Wert zu übergeben: `x` hat daher den Standardwert `{ number: 10 }`. Wir loggen dann den multiplizierten Wert davon, sodass wir `20` bekommen.

Beim dritten Mal wird die `multiply` Funktion mit einem Argument für `value` aufgerufen. Der `*=` Operator ist kurz für `x.number = x.number * 2`: wir ändern den Wert von `x.number` und loggen den multiplizierten Wert `20`.

Beim vierten Mal übergeben wir wieder eine `value`. `x.number` wurde zuvor in `20` geändert, sodass `x.number *= 2` jetzt `40` loggt.

</p>
</details>

---

###### 65. Was ist der Output?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Das erste Argument, welches die `reduce` Methode erhält ist der _Akkumulator_ `x`. Das zweite Argument ist der _aktuelle Wert_, `y`. Durch die `reduce` Methode führen wir eine Callback Funktion an jedem Element des Arrays aus, was im Endeffekt einen einzelnen Wert ausgibt.

In diesem Beispiel geben wir nicht irgendwelche Werte aus, sondern loggen einfach nur den Akkumulator und den momentanen Wert.

Der Wert des Akkumulators ist gleich dem vorhergehenden Wert der Callback Funktion. Wenn wir `initialValue` nicht an die `reduce` Methode übergeben bleibt der Akkumulator gleich dem ersten Element des ersten Calls.

Beim ersten Call ist der Akkumulator (`x`) gleich `1` und der aktuelle Wert (`y`) ist `2`. Da wir in der Callback Funktion bleiben loggen wir den Akkumulator und den aktuellen Wert: `1` und `2`.

Wenn wir keinen Wert einer Funktion ausgeben wird `undefined` ausgegeben. Beim nächsten Call ist der Akkumulator daher `undefined` und der aktuelle Wert ist `3`. `undefined` und `3` werden geloggt.

Beim vierten Call geben wir wieder nichts aus, sodass der Akkumulator wieder `undefined` ist und der aktuelle Wert `4`. `undefined` und `4` werden geloggt.
</p>
</details>
  
---

###### 66. Mit welchem Constructor können wir die `Dog` Klasse erweitern?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

In einer abgeleiteten Klasse kann das `this` Keyword nicht aufgerufen werden, bevor `super` aufgerufen wurde. Wenn man das versucht wird ein ReferenceError ausgeworfen: 1 und 4 würden daher einen Referenz-Fehler ausgeben.

Mit dem `super` Keyword können wir den Constructor der Elternklasse mit gegebenen Argumenten aufrufen. Der Constructor der Elternklasse erhält das `name` Argument, sodass wir `name` an `super` übergeben müssen.

Die `Dog` Klasse erhält zwei Argumente, `name` da es `Animal` erweitert und `size` als extra Property der `Dog` Klasse. Beide müssen an die Constructor Funktion von `Dog` übergeben werden, was nur bei Constructor 2 richtig ist.
</p>
</details>

---

###### 67. Mit welchem Constructor können wir die `Dog` Klasse erweitern?

```javascript
// index.js
console.log('running index.js);
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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit dem `import` Keyword werden alle importierten Module _vorgeparsed_. Das bedeutet, dass importierte Module _zuerst_ ausgeführt werden, der Code in der eigentlichen Datei wird _danach_ ausgeführt.

Das ist der große Unterschied zwischen `require()` in CommonJS und `import`. Mit `require()` können Dependencies bei Bedarf geladen werden, während der Code ausgeführt wird. Hätten wir `require()` anstelle von `import` verwendet, wäre `running index.js`, `running sum.js`, `3` in der Konsole geloggt worden.

</p>
</details>

---

###### 68. Was ist der Output?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Jedes Symbol ist eindeutig. Der Sinn des Argumentes, welches an das Symbol weitergegeben wird, ist dem Symbol eine Beschreibung zu geben. Der Wert des Symbols hängt nicht von diesem Argument ab. Beim vergleichen der Symbole werden zwei komplett neue Symbole erstellt: das erste `Symbol('foo')` und das zweite `Symbol('foo')`. Diese beiden Werte sind eindeutig und nicht identisch, weshalb `Symbol('foo') === Symbol('foo')` `false` ausgibt. 

</p>
</details>

---

###### 69. Was ist der Output?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`, 

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Mit der `padStart` Methode können wir Padding am Anfang des Strings hinzufügen. Der Wert, der an die Methode übergeben wird ist die _absolute_ Länge des Strings mit dem Padding. Der String `"Lydia Hallie"` hat eine Länge von `12`. `name.padStart(13)` fügt ein Leerzeichen am Anfang des Strings ein, weil 12 + 1 = 13 ist.

Falls der Wert, der an `padStart` übergeben wurde kleiner ist, als die Länge des Arrays, so wird kein Padding hinzugefügt.

</p>
</details>
