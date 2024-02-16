<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Fragen (für Fortgeschrittene)</h1>

---

<span>Ich veröffentliche jeden Tag mehrere Multiple-Choice-Fragen über JavaScript auf meinem [Instagram-Account](https://www.instagram.com/theavocoder), die ich nun auch hier veröffentliche.

Von einfach bis fortgeschritten: teste, wie gut du JavaScript kennst, frische dein Wissen auf oder bereite dich auf ein Vorstellungsgespräch vor! :muscle: :rocket: Ich werde dieses Repo regelmäßig mit neuen Fragen erweitern. Die Antworten sind unterhalb der Fragen **versteckt**. Du kannst einfach darauf klicken, um die Antworten anzuzeigen. Viel Glück :heart:</span>

Kontaktiert mich, wenn ihr möchtet! 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a>
</div>

| Benutzt die Fragen und Lösungen in einem Projekt! 😃  Ich würde mich _sehr_ freuen, wenn ihr dieses Repo verlinkt. Ich erstelle die Fragen und antworten (ja, ich bin traurig, lol) und die Community hilft mir unglaublich dabei, das ganze zu pflegen und verbessern! 💪🏼 Danke und habt Spaß!   |
|---|

</div>

---

<details><summary><b> Alle 20 Übersetzungen anzeigen 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼🇽🇰</b></summary>
<p>

- [🇸🇦 العربية](../ar-AR/README_AR.md)
- [🇪🇬 اللغة العامية](../ar-EG/README_ar-EG.md)
- [🇧🇦 Bosanski](../bs-BS/README-bs_BS.md)
- [🇬🇧 English](../README.md)
- [🇪🇸 Español](../es-ES/README-ES.md)
- [🇫🇷 Français](../fr-FR/README_fr-FR.md)
- [🇮🇩 Indonesia](../id-ID/README.md)
- [🇮🇹 Italiano](../it-IT/README.md)
- [🇯🇵 日本語](../ja-JA/README-ja_JA.md)
- [🇰🇷 한국어](../ko-KR/README-ko_KR.md)
- [🇳🇱 Nederlands](../nl-NL/README.md)
- [🇵🇱 Polski](../pl-PL/README.md)
- [🇧🇷 Português Brasil](../pt-BR/README_pt_BR.md)
- [🇷o Română](../ro-RO/README.ro.md)
- [🇷🇺 Русский](../ru-RU/README.md)
- [🇽🇰 Shqip](../sq-KS/README_sq_KS.md)
- [🇹🇭 ไทย](../th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. Was wird ausgegeben?

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

###### 2. Was wird ausgegeben?

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

###### 3. Was wird ausgegeben?

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

###### 4. Was wird ausgegeben?

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

###### 6. Was wird ausgegeben?

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

###### 7. Was wird ausgegeben?

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

###### 8. Was wird ausgegeben?

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

###### 9. Was wird ausgegeben?

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

###### 11. Was wird ausgegeben?

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

###### 12. Was wird ausgegeben?

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

###### 15. Was wird ausgegeben?

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

###### 16. Was wird ausgegeben?

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

###### 17. Was wird ausgegeben?

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

###### 18. Was wird ausgegeben?

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

###### 19. Was wird ausgegeben?

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

###### 20. Was wird ausgegeben?

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

###### 23. Was wird ausgegeben?

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

###### 24. Was wird ausgegeben?

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

###### 25. Was wird ausgegeben?

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

###### 27. Was wird ausgegeben?

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

###### 28. Was wird ausgegeben?

```javascript
String.prototype.giveLydiaPizza = () => {
	return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza())
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

###### 29. Was wird ausgegeben?

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

Allerdings wird ein Object, wenn es in einen String umgewandelt wird als `"[object Object]"` ausgegeben. Was wir hier also sagen ist, dass `a["object Object"] = 123` ist. Wir versuchen das gleiche erneut - `c` ist ein anderes Objekt, welches wir implizit zu einem String umwandeln, sodass `a["object Object"] = 456` ist.

Dann loggen wir `a[b]`, was eigentlich `a["object Object"]` ist und gerade von uns zu `456` gesetzt wurde, sodass `456` ausgegeben wird.

</p>
</details>

---

###### 30. Was wird ausgegeben?

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

###### 33. Was wird ausgegeben?

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

###### 34. Was wird ausgegeben?

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

Es gibt nur 7 eingebaute Typen in JavaScript: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol`, und `bigint`. `"function"` ist kein Typ, weil Funktionen Objekte sind und daher dem Typ `"object"` entsprechen.

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

###### 36. Was wird ausgegeben?

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

###### 37. Was wird ausgegeben?

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

###### 38. Was wird ausgegeben?

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

###### 40. Was wird ausgegeben?

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

###### 41. Was wird ausgegeben?

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

###### 44. Was wird ausgegeben?

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
- D: `0, 10 und 10, 20`

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

###### 46. Was wird ausgegeben?

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

###### 47. Was wird ausgegeben?

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

###### 48. Was wird ausgegeben?

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

###### 50. Was wird ausgegeben?

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

###### 51. Was wird ausgegeben?

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

###### 52. Was wird ausgegeben?

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

###### 53. Was wird ausgegeben?

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

###### 54. Was wird ausgegeben?

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

###### 55. Was wird ausgegeben?

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

###### 56. Was wird ausgegeben?

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

###### 57. Was wird ausgegeben?

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

###### 58. Was wird ausgegeben?

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

###### 59. Was wird ausgegeben?

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

###### 60. Was wird ausgegeben?

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

###### 61. Was wird ausgegeben?

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

###### 62. Was wird ausgegeben?

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

###### 63. Was wird ausgegeben?

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

###### <a name=20190707></a>64. Was wird ausgegeben?

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

###### 65. Was wird ausgegeben?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` und `3` `3` und `6` `4`
- B: `1` `2` und `2` `3` und `3` `4`
- C: `1` `undefined` und `2` `undefined` und `3` `undefined` und `4` `undefined`
- D: `1` `2` und `undefined` `3` und `undefined` `4`

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

###### 68. Was wird ausgegeben?

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

###### 69. Was wird ausgegeben?

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

---

###### 70. Was wird ausgegeben?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: Ein String, der den Emoji Code beinhaltet
- D: Error

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Mit dem `+` Operator können Strings zusammengesetzt werden. In diesem Fall werden die Strings `"🥑"` und `"💻"` zusammengesetzt, was `"🥑💻"` ergibt.

</p>
</details>

---

###### 71. Wie können wir die Werte loggen, die nach dem `console.log` auskommentiert wurden?

```javascript
function* startGame() {
  const Antwort = yield "Do you love JavaScript?";
  if (Antwort !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` und `game.next().value`
- B: `game.next.value("Yes")` und `game.next.value()`
- C: `game.next().value` und `game.next("Yes").value`
- D: `game.next.value()` und `game.next.value("Yes")`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Eine Generator Funktion pausiert die Ausführung, wenn das `yield` Keyword vorliegt. Zuerst müssen wir den String "Do you love JavaScript?" abwarten, was mit `game.next().value` möglich ist.

Jede Zeile wird ausgeführt, bis das erste `yield` Keyword auftritt. Da auf der ersten Zeile ein `yield` in der Funktion vorliegt wird die Ausführung damit angehalten. Das bedeutet, dass die Variable `Antwort` _noch nicht definiert_ wurde.

Wenn wir `game.next("Yes").value` aufrufen wird das vorhergehende `yield` durch den Wert des Parameters ersetzt, der an `next()` übergeben wird - `"Yes"` in diesem Fall. Der Wert der Variable `Antwort` ist jetzt gleich `"Yes"`. Das if-Statement gibt `false` aus und `JavaScript loves you back ❤️` wird geloggt.

</p>
</details>

---

###### 72. Was wird ausgegeben?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

`String.raw` gibt einen String aus, in dem die Escapes (`\n`, `\v`, `\t` etc.) ignoriert werden! Backslashes sind problematisch, weil man mit sowas in der Art rechnen muss:

`` const path = `C:\Documents\Projects\table.html` ``

Das würde dann wiefolgt gerendert werden:

`"C:DocumentsProjects able.html"`

Mit `String.raw` werden diese ignoriert und das Ergebnis ist:

`C:\Documents\Projects\table.html`

In unserem Fall ist das Ergebnis `Hello\nworld`, was geloggt wird.

</p>
</details>

---

###### 73. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Eine `async` Funktion gibt immer ein Promise zurück. Mit `await` wird das Ergebnis des Promises abgewartet und ein ausstehendes Promise wird ausgegeben, wenn wir `getData()` aufrufen um `data` gleich zu setzen.

Wenn wir auf den finalen Wert `"I made it"` zugreifen wollen, nutzen wir die `.then()` Methode an `data`:

`data.then(res => console.log(res))`

Das hätte `"I made it!"` ausgegeben.

</p>
</details>

---

###### 74. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Die `.push()` Methode gibt die _Länge_ des Arrays aus! Das Array beinhaltete zuerst ein einziges Element (`"banana"`) und hatte eine Länge von `1`. Nachdem wir `"apple"` hinzugefügt haben beinhaltet das Array zwei Elemente und hat eine Länge von `2`. Das wird letztlich von der `addToList` Funktion ausgegeben.

Die `push` Methode verändert das ursprüngliche Array. Wenn wir das _Array_ der Funktion anstelle der _Länge des Arrays_ ausgeben möchten, hätten wir `list` ausgeben müssen.

</p>
</details>

---

###### 75. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

`Object.freeze` macht es unmöglich das Objekt zu verändern (hinzufügen, entfernen, verändern), es sei denn der Wert ist ein weiteres Objekt.

Wenn wir die Variable `shape` erstellen und gleich dem eingefrorenen Objekt `box` setzen, ist `shape` ebenso eingefroren. Man kann mit `Object.isFrozen` prüfen, ob ein Objekt eingefroren ist.
In unserem Fall gibt `Object.isFrozen(shape)` `true` zurück, da die Variable `shape` eine Referenz zu einem eingefrorenen Objekt ist.

Da `shape` eingefroren ist und der Wert von `x` kein Objekt ist, können wir den Wert von `x` nicht verändern. `x` ist immernoch gleich `10` und `{ x: 10, y: 20 }` wird geloggt.

</p>
</details>

---

###### 76. Was wird ausgegeben?

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Wenn wir die Property `name` aus dem Objekt auf der rechten Seite destructuren, weisen wir den Wert einer neuen Variable `myName` zu.

Mit `{ name: myName }` sagen wir JavaScript, dass wir eine neue Variable mit dem Namen `myName` erstellen möchten und den Wert von `name` zuweisen.

Da `name` nicht definiert ist, wird ein ReferenceError ausgeworfen.

</p>
</details>

---

###### 77. Is this a pure function?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Ja
- B: Nein

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Eine pure Funktion ist eine Funktion, die _immer_ das gleiche Ergebnis zurück gibt, wenn die gleichen Argumente eingegeben werden.

Die `sum` Funktion gibt daher immer das gleiche Ergebnis aus. Wenn wir `1` und `2` eingeben wird _immer_ `3` ausgegeben. Wenn wir `5` und `10` eingeben wird _immer_ `15` ausgegeben usw. Das ist die Definition einer puren Funktion.

</p>
</details>

---

###### 78. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Die `add` Funktion ist _memoized_. Mit Memoization können wir Ergebnisse einer Funktion cachen, um die Performance zu beschleunigen. In diesem Fall erstellen wir ein `cache` Objekt, welches die zuvor ausgegebenen Werte speichert.

Wenn wir die `addFunction` Funktion erneut mit den gleichen Argumenten aufrufen wird zuerst geprüft, ob der Wert bereits im Cache vorhanden sind. Ist das der Fall, so wird der Cache diesen Wert ausgeben und damit Ausführzeit sparen. Wenn der Wert nicht gecached ist wird der neue Wert berechnet und danach im Cache gespeichert.

Wir rufen die `addFunction` Funktion drei mal mit dem gleichen Wert auf: bei der ersten Ausführung. ist der Wert der Funktion `10` nicht im Cache. Die Kondition des if-Statements `num in cache` gibt `false` aus und der else Block wird ausgeführt: `Calculated! 20` wird geloggt und der Wert des Ergebnisses wird dem Cache Objekt hinzugefügt. `cache` sieht jetzt wiefolgt aus: `{ 10: 20 }`.

Bei der zweiten Ausführung beinhaltet das `cache` Objekt den Wert `10`. Die Kondition des if-Statements `num in cache` gibt `true` aus und `'From cache! 20'` wird geloggt.

Beim dritten Mal geben wir `5 * 2` als Argument in die Funktion ein, was `10` ergibt. Das `cache` Objekt beinhaltet den Wert `10` und das if-Statement `num in cache` gibt wieder `true` aus und `'From cache! 20'` wird geloggt.

</p>
</details>

---

###### <a name=20190726></a>79. Was wird ausgegeben?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` und `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` und `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` und `0` `1` `2` `3`
- D:  `0` `1` `2` `3` und `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Mit einer _for-in_ Schleife können wir über **zählbare** Properties iterieren. In einem Array sind die zählbaren Properties die "Keys" des Array Elements, sprich deren Indexe. Ein Array könnte man also wiefolgt sehen:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Daher werden die zählbaren Properties `0` `1` `2` `3` geloggt.

Mit einer _for-of_ Schleife können wir über **wiederholbare** Elemente iterieren. Ein Array ist wiederholbar. Wenn wir also über das Array iterieren, ist die Variable "item" gleich dem Element, welches momentan iteriert wird: `"☕"` ` "💻"` `"🍷"` `"🍫"` wird geloggt.

</p>
</details>

---

###### 80. Was wird ausgegeben?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Array Elemente können jeden Wert halten: Nummern, Strings, Objekte, andere Arrays, null, Booleans, undefined und andere Expressions wie Funktionen, Berechnungen oder ein Datum.

Das Element ist gleich dem ausgegebenen Wert. `1 + 2` ergibt `3`, `1 * 2` ergibt `2`, und `1 / 2` ergibt `0.5`.

</p>
</details>

---

###### 81. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Standardmäßig haben Argumente den Wert `undefined`, es sei denn der Funktion wurde ein Wert zugewiesen. In diesem Fall haben wir dem `name` Argument keinen Wert zugewiesen, weshalb `name` `undefined` ist.

In ES6 können wir diesen Standardwert `undefined` mit Standard Parametern überschreiben, zum Beispiel:

`function sayHi(name = "Lydia") { ... }`

In diesem Fall, falls wir kein Argument oder `undefined` eingeben ist `name` immer `Lydia`.

</p>
</details>

---

###### 82. Was wird ausgegeben?

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

- A: `"🥑"` und `"😍"`
- B: `"🥑"` und `"😎"`
- C: `"😍"` und `"😎"`
- D: `"😎"` und `"😎"`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Der Wert des `this` Keywords hängt davon ab, wo es verwendet wird. In einer **Methode**, wie `getStatus` bezieht sich das `this` Keyword auf das _Objekt, zu dem die Methode gehört_. Die Methode gehört zum `data` Objekt, sodass `this` sich auf das `data` Objekt bezieht. Wenn wir `this.status` loggen wird die `status` Property des `data` Objekts geloggt, was `"🥑"` ist.

Mit der `call` Methode können wir das Objekt, auf welches sich das `this` Keyword bezieht ändern. In **Funktionen** bezieht sich `this` auf das _Objekt, zu dem die Funktion gehört_. Wir erklären die `setTimeout` Funktion im _globalen Objekt_, sodass sich `this` in `setTimeout` auf das _globale Objekt_ bezieht. Im globalen Objekt gibt es _status_ mit dem Wert `"😎"`, was geloggt wird.


</p>
</details>

---

###### 83. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Wir setzen die Variable `city` gleich dem Wert der Property `city` am `person` Objekt. Da am `person` Objekt keine Property namens `city` existiert wird der Wert gleich `undefined` gesetzt.

Da wir _nicht_ das `person` Objekt selbst referenzieren, sondern einfach die Variable `city` gleich dem aktuellen Wert von `city` am `person` Objekt setzen bleibt dieses `undefined`.

Dann setzen wir `city` gleich dem String `"Amsterdam"`. Das verändert aber nicht das `person` Objekt, da es keine Referenz dazu am Objekt gibt.

Wenn wir `person` loggen bekommen wir daher das unveränderte Objekt angezeigt.

</p>
</details>

---

###### 84. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Variablen mit dem `const` und `let` Keyword sind _block-scoped_. Ein Block ist alles zwischen geschweiften Klammern (`{ }`), in diesem Fall die geschweiften Klammern des if/else Statements. Es ist nicht möglich eine solche Variable außerhalb des Blocks in dem sie erklärt wurde aufzurufen, daher wird ein ReferenceError ausgegeben.

</p>
</details>

---

###### 85. Welche Information wird geloggt?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: Das Ergebnis der `fetch` Methode.
- B: Das Ergebnis des zweiten Aufrufs der `fetch` Methode.
- C: Das Ergebnis des Callbacks im vorhergehenden `.then()`.
- D: Immer `undefined`.

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Der Wert von `res` im zweiten `.then` ist gleich dem ausgegebenen Wert des vorhergehenden `.then`. Man kann soviele `.then`s aneinander reihen, wie man möchte und der Wert wird immer an den nächsten Handler übergeben.

</p>
</details>

---

###### 86. Wie können wir `hasName` gleich `true` setzen, vorausgesetzt wir können `true` nicht als Argument übergeben?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Mit `!!name` können wir feststellen, ob `name` truthy oder falsey ist. Ist `name` truthy, so würde `!name` `false` ausgeben. `!false` (das Gleiche wie `!!name`) ergibt `true`.

Wenn wir `hasName` gleich `name` setzen, so beinhaltet `hasName` den Wert von `name`, nicht den Boolean Wert `true`.

`new Boolean(true)` gibt einen Objekt Wrapper aus, nicht ein Boolean ansich.

`name.length` gibt die Länge des Arguments aus, nicht den Boolean Wert.
</p>
</details>


---

###### <a name=20190805></a>87. Was wird ausgegeben?

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Um ein Zeichen an einer bestimmten Stelle eines Strings zu bekommen kann man Bracket Notation verwenden. Das erste Zeichen in einem String hat den Index 0, usw. In diesem Fall möchten wir das Zeichen mit dem Index 0, was das Zeichen `"I"` loggt.

Diese Methode funktioniert nicht in IE7 und davor. Hier muss `.charAt()` verwendet werden.

</p>
</details>

---

###### 88. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Man kann den Wert eines Standard Parameters gleich einem anderen Parameter in der Funktion setzen, sofern diese _vor_ dem Standard Parameter definiert wurden. Wir übergeben den Wert `10` an die `sum` Funktion. Wenn die `sum` Funktion nur ein Argument übergeben bekommt bedeutet das, dass der Wert für `num2` nicht gesetzt wurde und der Wert von `num1` ist gleich dem Wert `10`. Der Standardwert von `num2` ist gleich dem Wert von `num1`, sprich `10`. `num1 + num2` gibt `20` aus.

Wenn man den Wert des Standard Paramenters gleich dem Parameter setztm der _danach_ definiert wurde, bekommen wir einen Fehler ausgegeben, da der Wert noch nicht initialisiert wurde.

</p>
</details>

---

###### 89. Was wird ausgegeben?

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
- D: Globales Objekt von `module.js`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Mit `import * as name` importieren wir _alle Exporte_ der `module.js` in `index.js` als `data`. In der Datei `module.js` haben wir zwei Exporte: den Standard Export und einen benannten Export. Der Standard Export ist eine Funktion, die `"Hello World"` ausgibt und der benannte Export ist eine Variable namens `name` mit dem Wert `"Lydia"`.

Das `data` Objekt hat eine Standard Property für alle Standard Exporte, andere Properties haben die Namen des benannten Exports und der entsprechenden Werte.

</p>
</details>

---

###### 90. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Klassen sind syntaktischer Zucker für Funktionskontruktoren. Das Equivalent der `Person` Klasse als Funktionskonstruktor wäre:

```javascript
function Person() {
  this.name = name
}
```

Das Aufrufen eines Funktionskonstruktors mit `new` hat zur Folge, dass eine Instanz von `Person` erstellt wird. `typeof` gibt `"object"` für die instanz aus. `typeof member` gibt `"object"` aus.

</p>
</details>

---

###### 91. Was wird ausgegeben?

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Die `.push` Methode gibt die _neue Länge_ des Arrays aus, nicht die Länge des Arrays selbst. Wenn wir `newList` gleich `[1, 2, 3].push(4)` setzen, setzen wir `newList` auch gleich der Länge des Arrays: `4`.

Dann versuchen wir die `.push` Methode auf `newList` anzuwenden. Da `newList` den numerischen Wert `4` beinhaltet können wir die `.push` Methode nicht anwenden: ein TypeError wird ausgegeben.

</p>
</details>

---

###### 92. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Reguläre Funktionen wie `giveLydiaPizza` haben eine `prototype` Property, die ein Objekt (Prototype Object) mit einem `constructor` ist. Arrow Funktionen dagegen (wie `giveLydiaChocolate`) haben keinen `prototype`. `undefined` wird ausgegeben, wenn wir versuchen den `prototype` mit `giveLydiaChocolate.prototype` aufzurufen.

</p>
</details>

---

###### 93. Was wird ausgegeben?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` und `age` `21`
- B: `["name", "Lydia"]` und `["age", 21]`
- C: `["name", "age"]` und `undefined`
- D: `Error`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

`Object.entries(person)` gibt ein Array mit verschachtelten Arrays der Keys aus:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

Mit der `for-of` Schleife iterieren wir über jedes Element in dem Array, in diesem Fall die verschachtelten Arrays. Wir können die verschachtelten Arrays mit `const [x, y]` in der for-of Schleife destrukturieren. `x` ist gleich dem ersten Element, `y` ist gleich dem zweiten Element in dem verschachtelten Array.

Das erste verschachtelte Array ist `[ "name", "Lydia" ]`. `x` ist gleich `"name"` und `y` gleich `"Lydia"`, was geloggt wird.
Das zweite verschachtelte Array ist `[ "age", 21 ]`. `x` ist gleich `"age"` und `y` ist gleich `21`, was geloggt wird.

</p>
</details>

---

###### 94. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

`...args` ist ein Rest-Parameter. Der Wert des Rest-Parameters ist ein Array mit allen weiteren Argumenten **und kann nur der letzte Parameter sein**! In diesem Beispiel war der Rest-Parameter das zweite Argument, was nicht möglich ist und daher einen Syntax Error ausgibt.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

Dieses Beispiel würde funktionieren und `[ 'banana', 'apple', 'orange', 'pear' ]` ausgeben.
</p>
</details>

---

###### <a name=20190817></a>95. Was wird ausgegeben?

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

- A: `a is bigger`, `6` und `b is bigger`, `3`
- B: `a is bigger`, `undefined` und `b is bigger`, `undefined`
- C: `undefined` und `undefined`
- D: `SyntaxError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

In JavaScript muss das Semikolon _nicht_ explizit gesetzt werden, allerdings setzt die JavaScript Engine Semikolons nach Statements. Diesen Vorgang nennt man **automatische Semikolonsetzung**. Ein Statement ist zum Beispiel eine Variable oder ein Keyword wie `throw`, `return`, `break`, usw.

In unserem Beispiel haben wir ein `return` Statement gefolgt von einem anderen Wert `a + b` auf der _nächsten Zeile_. Da es eine neue Zeile ist, weiß JavaScript nicht, dass das der Wert ist, den wir eigentlich ausgeben wollten. Stattdessen wird automatisch ein Semikolon nach `return` gesetzt, was man wiefolgt lesen kann:

```javascript
  return;
  a + b
```

Das bedeutet, dass `a + b` nie erreicht wird, da die Funktion auf der Zeile davor mit dem `return` Keyword endet. Wenn wie hier kein Wert ausgegeben wird, gibt die Funktion `undefined` aus.
Bedenke: Semikolons werden **nicht** automatisch nach `if/else` Statements gesetzt!

</p>
</details>

---

###### 96. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Wir können Klassen gleich anderen Klassen oder Funktions Konstruktoren setzen. In diesem Beispiel setzen wir `Person` gleich `AnotherPerson`. Der Name in diesem Konstruktor ist `Sarah`, sodass die name-Property der neuen `Person` Instanz `member` gleich `"Sarah"` ist.

</p>
</details>

---

###### 97. Was wird ausgegeben?

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` und `["{Symbol('a')"]`
- B: `{}` und `[]`
- C: `{ a: "b" }` und `["a"]`
- D: `{Symbol('a'): 'b'}` und `[]`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Ein Symbol ist nicht _zählbar_. Die `Object.keys` Methode gibt alle zählbaren Key Properties eines Objekts aus. Das Symbol ist nicht sichtbar, sodass ein leeres Array ausgegeben wird. Wenn wir das gesamte Objekt loggen sind alle Properties sichtbar, auch nicht zählbare.

Das ist einer der vielen Vorteile eines Symbols: nebem einem einzigartigen Wert (welcher verhindert, dass versehentlich zwei Objekte gleiche Namen haben, zum Beispiel wenn wir mit verschiedenen Libraries arbeiten) können Properties von Objekten auf diese Art versteckt werden.
Bedenke: Man kann die Symbole dennoch mit der `Object.getOwnPropertySymbols()` Methode einsehen.

</p>
</details>

---

###### 98. Was wird ausgegeben?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` und `undefined`
- B: `[1, [2, 3, 4]]` und `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` und `{ name: "Lydia", age: 21 }`
- D: `Error` und `{ name: "Lydia", age: 21 }`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Die `getList` Funktion bekommt ein Array als Argument zugewiesen. Zwischen den Klammern der `getList` Funktion wird das Array direkt destrukturiert. Man könnte das auch wiefolgt sehen:

 `[x, ...y] = [1, 2, 3, 4]`

Mit dem Rest Parameter `...y` packen wir alle übrigen Argumente in ein Array. Die übrigen Argumente sind in dem Fall `2`, `3` und `4`. Der Wert von `y` ist ein Array mit den restlichen Parametern. Der Wert von `x` ist gleich `1` sodass `[1, [2, 3, 4]]` geloggt wird.

Die `getUser` Funktion bekommt ein Objekt zugewiesen. Bei Arrow Funktionen müssen wir keine geschweiften Klammern verwenden, wenn wir nur einen Wert ausgeben. Wenn wir aber ein _Objekt_ von einer Arrow Funktion ausgeben lassen möchten, so muss dieses zwischen Klammern stehen, ansonsten wird nichts ausgegeben. Die folgende Funktion hätte ein Objekt ausgegeben:

```const getUser = user => ({ name: user.name, age: user.age })```

Da kein Wert ausgegeben wird, gibt die Funktion `undefined` aus.

</p>
</details>

---

###### 99. Was wird ausgegeben?

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Die Variable `name` beinhaltet einen String, welcher logischer Weise keine Funktion ist und daher nicht ausgeführt werden kann.

TypeErrors werden ausgeworfen, wenn ein Wert einen falschen Typ aufweist. JavaScript hat eine Funktion erwartet, da wir `name` ausführen. Da es aber ein String war bekommen wir den TypeError: name is not a function!

SyntaxErrors werden ausgeworfen, wenn wir etwas schreiben, was kein gültiger JavaScript Code ist, zum Beispiel wenn wir uns vertippen und anstatt `return` `retrun` schreiben.

ReferenceErrors werden ausgeworfen, wenn JavaScript eine Referenz zu einem Wert nicht finden kann.

</p>
</details>

---

###### 100. Was wird ausgegeben?

```javascript
// 🎉✨ Das ist unsere 100. Frage! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

`[]` ist ein "truthy" Wert. Mit dem `&&` Operator geben wir den rechten Wert aus, wenn der linke truthy ist. In diesem Fall ist `[]` truthy, wodurch `"Im'` ausgegeben wird.

`""` ein ein "falsy" Wert. Wenn der linke Wert falsy ist wird nichts ausgegeben. In diesem Fall wird `n't` _nicht_ ausgegeben.

</p>
</details>

---

###### 101. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Mit dem `||` Operator geben wir den ersten truthy Operand aus. Wenn alle Werte falsy sind wird der letzte Operand ausgegeben.

`(false || {} || null)`: das leere Objekt `{}` ist truthy. Das ist der erste und einzige truthy Wert und wird daher ausgegeben. `one` ist gleich `{}`.

`(null || false || "")`: alle Operanden sind falsy. Das bedeutet, dass der letzte Wert `""` ausgegeben wird. `two` ist gleich `""`.

`([] || 0 || "")`: das leere Array `[]` ist truthy. Das ist der erste truthy Wert, und wird daher ausgegeben. `three` ist gleich `[]`.

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
```

- A: `I have resolved!`, `second` und `I have resolved!`, `second`
- B: `second`, `I have resolved!` und `second`, `I have resolved!`
- C: `I have resolved!`, `second` und `second`, `I have resolved!`
- D: `second`, `I have resolved!` und `I have resolved!`, `second`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Mit einem Promise sagen wir _Ich möchte diese Funktion ausführen, aber ich lege sie erstmal beiseite, weil sie eine Weile braucht. Erst wenn ein bestimmter Wert ausgegeben (oder rejected) wird und der Call Stack leer ist möchte ich den Wert nutzen._

Wir können auf den Wert mit `.then()` oder `await` in einer `async` Funktion zugreifen, aber `.then()` und `await` unterscheiden sich in einem bestimmten Punkt.

In `firstFunction` legen wir `myPromise` beiseite, während die Funktion durchläuft, aber wir arbeiten anderen Code ab, hier `console.log('second')`.
Dann wird die Funktion abgeschlossen und der String `I have resolved` wird ausgegeben, nachdem sich der Call Stack geleert hat.

Mit dem `await` Keyword in `secondFunction` wird die Funktion gestoppt bis der Wert ausgegeben wurde, erst dann wird die nächste Zeile ausgeführt.

Das bedeutet, dass auf `myPromise` gewartet und dann der Wert `I have resolved` ausgegeben wird und erst dann wird die nächste Zeile ausgeführt und `second` wird geloggt.

</p>
</details>

---

###### 103. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Der `+` Operator wird nicht nur für numerische Werte verwendet, wir können mit ihm ebenso Strings zusammenfügen. Immer, wenn JavaScript merkt, dass mindestens ein Wert keine Nummer ist, wird ein String erstellt.

Der erste Wert ist `1`, was ein numerischer Wert ist. `1 + 2` ergibt die Zahl `3`.

Der zweite Wert hingegen ist der String `"Lydia"`. `"Lydia"` ist ein String und `2` ist eine Nummer: `2` wird in einem String umgewandelt. `"Lydia"` und `"2"` werden zusammengesetzt, was den String `"Lydia2"` ausgibt.

`{ name: "Lydia" }` ist ein Objekt. Weder eine Nummer, noch ein Objekt sind ein String, aber beide werden zu Strings konvertiert und `"[object Object]"` wird ausgegeben. `"[object Object]"` zusammengesetzt mit `"2"` wird `"[object Object]2"`.

</p>
</details>

---

###### 104. Was wird ausgegeben?

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wir können jeden Wert an `Promise.resolve` übergeben, es muss nicht unbedingt ein Promise sein. Die Methode selbst gibt ein Promise zurück, was einen Wert ausgibt (`<fulfilled>`). Wenn man eine normale Funktion übergibt wird das Promise einen normalen Wert ausgeben. Wenn ein Promise übergeben wird so wird ein Promise gelöst und der Wert des gelösten Promises ausgegeben.

In diesem Fall haben wir nur die Zahl `5` übergeben und diese wird genauso ausgegeben: `5`.

</p>
</details>

---

###### 105. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Objekte werden durch eine Referenz übergeben. Wenn wir Objekte auf strikte Gleichheit (`===`) prüfen, vergleichen wir nur deren Referenz.

Wir setzen den Standardwert für `person2` gleich dem `person` Objekt und übergeben dem `person` Objekt den Wert von `person1`.

Das bedeutet, dass beide Werte eine Referenz zum gleichen Ort im Speicher aufweisen und daher gleich sind.

Der Code im `else` Statement wird aufgerufen und `They are the same!` wird geloggt.

</p>
</details>

---

###### 106. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

In JavaScript gibt es zwei Wege auf Properties an Objekten zuzugreifen: Punkt-Notation oder Klammern-Notation. In diesem Beispiel nutzen wir Punkt-Notation (`colorConfig.colors`) anstelle von Klammern-Notation (`colorConfig["colors"]`).

Mit Punkt-Notation versucht JavaScript die Property am Objekt mit diesem exakten Namen zu finden. In unserem Beispiel `colors` im `colorConfig` Objekt. Da es keine Property `colorConfig` gibt wird `undefined` ausgegeben. Dann versuchen wir den Wert des ersten Elements mit `[1]` aufzurufen, was an `undefined` nicht möglich ist, wodurch wir `TypeError: Cannot read property '1' of undefined` ausgegeben bekommen.

JavaScript interpretiert Statements. Wenn wir Klammern-Notation verwenden wird die erste Klammer `[` gefunden und JavaScript sucht solange, bis eine schließende Klammer `]` gefunden wird. Erst dann wird das Statement interpretiert. Hätten wir `colorConfig[colors[1]]` verwendet, wäre der Wert `red` ausgegeben worden.

</p>
</details>

---

###### 107. Was wird ausgegeben?

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Emojis sind im Endeffekt nur Unicodes. Der Unicode für das Herz Emoji ist `"U+2764 U+FE0F"`. Dieser ist immer gleich, für das selbe Emoji und daher wird `true` ausgegeben.

</p>
</details>

---

###### 108. Welche Methode verändert das ursprüngliche Array?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Mit der `splice` Methode ändern wir das ursprüngliche Array durch löschen, ersetzen oder ergänzen von Elementen. In diesem Fall haben wir 2 Elemente vom Index 1 (`'🥑'` und `'😍'`) entfernt und ✨ stattdessen eingefügt.

`map`, `filter` und `slice` geben ein neues Array aus, `find` gibt ein Element aus und `reduce` gibt einen neuen Wert aus.

</p>
</details>


---

###### <a name=20191009></a>109. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

In JavaScript interagieren primitive Datentypen (alles außer Objekte) anhand des _Wertes_. In diesem Beispiel setzen wir den Wert von `favoriteFood` am `info` Objekt gleich dem Wert des ersten Elements im `food` Array, in dem Fall ein String mit dem Pizza Emoji (`'🍕'`). Ein String ist ein primitiver Datentyp und agiert daher in JavaScript nach Referenz. (Siehe mein [Blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) für mehr Informationen)

Dann ändern wir den Wert von `favoriteFood` am `info` Objekt. Das `food` Array hat sich nicht verändert, da der Wert von `favoriteFood` nur eine _Kopie_ des Wertes des ersten Elements im Array war und keine Referenz zum Element `food[0]` im Speicher finden kann. Wenn wir also das Essen loggen ist es immernoch das ursprüngliche Array `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. Was macht diese Methode?

```javascript
JSON.parse()
```

- A: Parsed JSON in einen JavaScript Wert
- B: Parsed ein JavaScript Objekt zu JSON
- C: Parsed jegliche JavaScript Werte zu JSON
- D: Parsed JSON zu jeglichem JavaScript Objekt

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Mit der `JSON.parse()` Methode können wir einen JSON String zu einem JavaScript Wert umwandeln.

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

###### 111. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Jede Funktion hat ihren eigenen _Ausführungskontext_ (oder _scope_). Die `getName` Funktion sucht zuerst in ihrem eigenen Kontext (scope) um zu sehen, ob sie den Wert `name` finden kann. In diesem Fall beinhaltet die `getName` Funktion ihre eigene Variable `name`: wir setzen die Variable `name` mit dem `let` Keyword und dem Wert `'Sarah'`.

Variablen mit dem `let` und `const` Keyword werden gehoisted, aber entgegen `var` werden diese nicht _initialisiert_. Sie sind nicht aufrufbar, bevor wir sie deklarieren (initialisieren). Das ist eine "vorübergehende tote Zone" (temporal dead zone). Wir bekommen einen `ReferenceError` ausgegeben.

Hätten wir die `name` Variable nicht innerhalb `getName` deklariert, so hätte JavaScript außerhalb der Funktion in der _Scope-Kette_ weitergesucht. Der äußere Scope beinhaltet ebenfalls eine Variable `name` mit dem Wert `'Lydia'`. In diesem Fall wäre `Lydia` geloggt worden.

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

###### 112. Was wird ausgegeben?

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

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Mit dem `yield` Keyword, halten wir Werte in einer Generator-Funktion. Mit dem `yield*` Keyword können wir Werte einer anderen Generator-Funktion oder Objekte und Arrays halten.

In `generatorOne` halten wir das gesamte Array `['a', 'b', 'c']` mit dem `yield` Keyword. Der Wert von `value` am Objekt gibt die `next` Methode an `one` (`one.next().value`) aus, was dem gesamten Array entspricht: `['a', 'b', 'c']`.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

In `generatorTwo` verwenden wir das `yield*` Keyword. Das bedeutet, dass der erste gehaltene Wert von `two` gleich dem ersten gehaltenen Wert ist. Das ist das Array `['a', 'b', 'c']`. Der erste gehaltene Wert ist `a`, was ausgegeben wird.

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

###### 113. Was wird ausgegeben?

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Expressions innerhalb von Template Literals werden zuerst berechnet. Das bedeutet, dass der String den ausgegebenen Wert der Expression beinhaltet, hier die IIFE (immediately invoked Function) `(x => x)('I love')`. Wir geben den Wert `'I love'` als Argument an die `x => x` Arrow Funktion. `x` ist gleich `'I love'` und wird ausgegeben. Das Ergebnis ist `I love to program`.

</p>
</details>

---

###### 114. What will happen?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!)
  }, 1000)
}

config = null
```

- A: Die `setInterval` Callback Funktion wird nicht aufgerufen
- B: Die `setInterval` Callback Funktion wird ein Mal aufgerufen
- C: Die `setInterval` Callback Funktion wird weiterhin jede Sekunde aufgerufen
- D: Wir haben `config.alert()` nie aufgerufen, `config` ist `null`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Wenn wir normalerweise Objekte gleich `null` setzen, werden diese _verworfen_, weil keine Referenz mehr zu ihnen existiert. Da die Callback Funktion in `setInterval` eine Arrow Funktion (und daher an `config` gebunden) ist, hält die Callback Funktion immernoch eine Referenz zum `config` Objekt. Solange eine Referenz besteht, wird das Objekt nicht verworfen und die `setInterval` Funktion wird weiterhin alle 1000ms (1 Sekunde) aufgerufen.

</p>
</details>

---

###### 115. Welche Methode(n) geben den Wert `'Hello world!'` aus?

```javascript
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting'))
```

- A: 1
- B: 2
- C: 2 und 3
- D: Alle

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Beim Setzen eines Key/Wert Paars mit der `set` Methode wird der Key als erstes Argument an die `set` Funktion übergeben und der Wert wird als zweites Argument eingegeben. Der Key ist die _Funktion_ `() => 'greeting'` und der Wert ist `'Hello world'`. `myMap` ist jetzt `{ () => 'greeting' => 'Hello world!' }`.

1 ist falsch, weil der Key nicht `'greeting'`, sondern `() => 'greeting'` ist.
3 ist falsch, weil wir eine neue Funktion erstellen, indem wir sie als Argument übergeben. Objekte interagieren anhand von _Referenzen_. Funktionen sind Objekte, weshalb zwei Funktionen streng gesehen nie gleich sind, selbst wenn sie sich nicht unterscheiden.

</p>
</details>

---

###### 116. Was wird ausgegeben?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Beide Funktionen, `changeAge` und `changeAgeAndName`, haben Standard Parameter, nämlich ein neu erstelltes Objekt `{ ...person }`. Dieses Objekt hat Kopien aller Key/Werte Paare im `person` Objekt.

Zuerst führen wir die `changeAge` Funktion aus und übergeben ihr das `person` Objekt als Argument. Daher wird `age` um 1 erhöht. `person` ist jetzt `{ name: "Lydia", age: 22 }`.

Dann führen wir `changeAgeAndName` aus, allerdings ohne Parameter. Stattdessen ist der Wert von `x` gleich dem neuen Objekt `{ ...person }`. Da dies ein neues Objekt ist hat es keinen Einfluss auf die Werte des `person` Objekts. `person` ist immernoch gleich `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### <a name=20191118></a>117. Welche der beiden Optionen wird `6` ausgeben?

```javascript
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Mit dem Spread-Operator `...` können wir Werte _spreaden_ ("verstreichen"). Die `sumValues` Funktion erhält drei Argumente: `x`, `y` und `z`. `...[1, 2, 3]` ergibt `1, 2, 3`, was wir an `sumValues` übergeben.

</p>
</details>

---

###### 118. Was ist der Output??

```javascript
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit dem`+=` Operanden erhöhen wir den Wert von `num` um `1`. `num` hatte den ursprünglichen Wert `1` und `1 + 1` ergibt `2`. Der Wert an zweiter Stelle im `list` Array ist 🥰. `console.log(list[2])` gibt 🥰 aus.

</p>
</details>

---

###### 119. Was ist der Output??

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit den optionalen Kettenoperator `?.` müssen wir nicht mehr prüfen, ob die tiefer genesteten Werte gültig sind oder nicht. Wenn wir die Property von `undefined` oder `null` aufrufen (_nullish_) gibt die Expression direkt `undefined` aus.

`person.pet?.name`: `person` hat eine Property `pet`: `person.pet` ist nicht nullish. Diese hat eine Property `name` und gibt `Mara` aus.
`person.pet?.family?.name`: `person` hat eine Property `pet`: `person.pet` ist nicht nullish. `pet` hat _keine_ Property `family`, `person.pet.family` ist nullish. Die Expression gibt `undefined` aus.
`person.getFullName?.()`: `person` hat eine Property `getFullName`: `person.getFullName()` ist nicht nullish und wird ausgeführt: `Lydia Hallie` wird ausgegeben.
`member.getLastName?.()`: `member` ist undefined: `member.getLastName()` ist nullish. Die Expression gibt `undefined` aus.

</p>
</details>

---

###### 120. Was ist der Output??

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Wir haben die Kondition `groceries.indexOf("banana")` an das if-Statement übergeben. `groceries.indexOf("banana")` gibt `0` aus, was ein _falsy_ Wert ist. Da die Kondition nicht erfüllt ist wird der `else` Block ausgeführt und `We don't have to buy bananas!` wird geloggt.

</p>
</details>

---

###### 121. Was ist der Output?

```javascript
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
```

- A: `function language(lang) { this.languages.push(lang) }`
- B: `0`
- C: `[]`
- D: `undefined`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Die Methode `language` ist ein `setter`. Setter halten keinen Wert, sondern ändern Properties. Wenn eine `setter` Methode aufgerufen wird, wird `undefined` zurückgegeben.

</p>
</details>

---

###### 122. Was ist der Output??

```javascript
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

`typeof name` gibt `"string"` aus. Der String `"string"` ist _truthy_, sodass `!typeof name` den Boolean-Wert `false` ergibt. `false === "object"` und `false === "string"` geben beide `false` aus.

(Würden wir prüfen wollen, oob der Typ (un)gleich zu einem bestimmten anderen Typen ist hätten wir `!==` anstelle von `!typeof` schreiben müssen)

</p>
</details>

---

###### 123. Was ist der Output??

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: A

Die `add` Funktion gibt eine Arrow Funktion zurück, welche eine Arrow Funktion zurückgibt, welche eine Arrow Funktion zurückgibt. Die erste Funktion erhält ein Argument `x` mit dem Wert `4`. Wir führen die zweite Funktion aus, welche ein Argument `y` mit dem Wert `5` erhält. Dann führen wir die dritte Funktion aus, die ein Argument `z` mit dem Wert `6` erhält. Wenn wir versuchen die Werte von `x`, `y` und `z` der jeweils letzten Arrow Funktion aufzurufen geht die JavaScript Engine in der Scope-Kette nach oben um die jeweiligen Werte zu finden. Das gibt `4` `5` `6` aus.

</p>
</details>

---

###### 124. Was ist der Output??

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Die Generator-Funktion `range` gibt ein asynchrones Objekt mit Promisen für jeden Wert zurück: `Promise{1}`, `Promise{2}`, `Promise{3}`. Wir setzen die Variable `gen` gleich dem asynchronen Objekt. Danach loopen wir mit einer `for await ... of` Schleife darüber. Wir setzen die Variable `item` gleich dem ausgegebenen Promise: zuerst `Promise{1}`, dann `Promise{2}`, und dann `Promise{3}`. Da wir das Ergebnis von `item` _await_-en (erwarten), werden die gelösten Ergebnisse der Promises ausgegeben: `1`, `2` und `3`.

</p>
</details>

---

###### 125. Was ist der Output??

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

`myFunc` erwartet ein Objekt mit den Properties `x`, `y` und `z` als Argumente. Da wir nur drei separate Werte anstelle eines Objektes mit den Properties `x`, `y` und `z` ({x: 1, y: 2, z: 3}) eingeben, bekommen `x`, `y` und `z` den Standardwert `undefined` zugewiesen.

</p>
</details>

---

###### 126. Was ist der Output?

```javascript
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'mile-per-hour'
  }).format(speed);

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
}

console.log(getFine(130, 300))
```

- A: The driver drove 130 and has to pay 300
- B: The driver drove 130 mph and has to pay \$300.00
- C: The driver drove undefined and has to pay undefined
- D: The driver drove 130.00 and has to pay 300.00

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit der Methode `Intl.NumberFormat` können wir einen numerischen Wert in einen sprachabhängigen Wert formatieren. Wir formatieren den Zahlenwert `130` zu einem Wert der Sprache `en-US` mit der Einheit (`unit`) in `mile-per-hour`, was `130 mph` ergibt. Analog formatieren wir `300` als eine Währung (`currency`) der Sprache `en-US` in `USD`, was `$300.00` ergibt.

</p>
</details>

---

###### 127. Was ist der Output?

```javascript
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Durch die destrukturierende Zuweisung können wir Werte des Ojekts von der rechten Seite der Zuweisung extrahieren und diese Werte einem Property mit dem selben Namen dem Objekt auf der linken Seite zuweisen. In diesem Fall wird der Wert "💀" an `spookyItems[3]` zugewiesen. Das bedeutet, dass wir das Array `spookyItems` modifizieren, in dem wir "💀" hinzufügen. Beim Loggen von `spookyItems` wird darum `["👻", "🎃", "🕸", "💀"]` ausgegeben.

</p>
</details>

---

###### 128. Was ist der Output?

```javascript
const name = 'Lydia Hallie';
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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Mit der Methode `Number.isNaN` kann geprüft werden, ob der übergebene Parameter vom Typ _Number_ mit Wert  `NaN` ist. `name` ist kein numerischer Wert, deswegen ist der Rückgabewert von `Number.isNaN(name)` in diesem Fall `false`. `age` ist zwar ein numerischer Wert, aber nicht gleich `NaN`, weswegen `Number.isNaN(age)` `false` ausgibt.

Die Methode `isNaN` prüft, ob der Eingabeparameter nicht vom Typ _Number_ ist. `name` ist ein String, darum gibt `isNaN(name)` `true` zurück. `age` ist ein numerischer Wert, weswegen `isNaN(age)` `false` ausgibt.

</p>
</details>

---

###### 129. Was ist der Output?

```javascript
const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = 'Lydia Hallie';
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Variablen die mit `const` deklariert werden, können nicht vor ihrer Initialisierung referenziert werden, das ist die so genannte "zeitweilige tote Zone" (_temporal dead zone_). In der Funktion `getInfo` befindet sich die Variable `randomValue` im Geltungsbereich der Funktion. In der Zeile, in welcher der Wert von `typeof randomValue` geloggt werden soll, ist die Variable noch nicht initialisiert. Entsprechend wird ein `ReferenceError` geworfen! Die Engine versucht nicht in der Kette der Geltungsbereiche hinab zu steigen, da die Variable `randomValue` im Geltungsbereich von `getInfo` deklariert und damit gefunden wurde.

</p>
</details>

---

###### 130. Was ist der Output?

```javascript
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log('Oh finally!');
  }
})();
```

- A: `Woah some cool data`
- B: `Oh finally!`
- C: `Woah some cool data` `Oh finally!`
- D: `Oops didn't work` `Oh finally!`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: C

Im `try`-Block loggen wir den mit dem `await`-Operator den Wert der Variable `myPromise`: `"Woah some cool data"`. Da in diesem Block kein Fehler geworfen wird, wird der Code im `catch`-Block nicht ausgeführt. Der Code im `finally`-Block wird _immer_ ausgeführt, `"Oh finally!"` wird geloggt.

</p>
</details>

---

###### 131. Was ist der Output?

```javascript
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: B

Mit der Methode `flat` erzeugen wir ein neues, "flacheres" Array. Die Tiefe des neuen Arrays hängt vom Parameter ab, den wir an `flat` übergeben. In diesem Fall wird der Wert `1` übergeben (welcher der Standardwert der Funktion ist, wir hätten ihn in diesem Fall also nicht explizit übergeben müssen). Das bedeutet, das alle Arrays bis zur ersten Tiefe zusammengefügt werden: `['🥑']` und `['✨', '✨', ['🍕', '🍕']]` in diesem Fall. Das Zusammenfügen dieser beiden Arrays resultiert in: `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### 132. Was ist der Output?

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

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

`counterOne` ist eine Instanz der Klasse `Counter`. Diese Klasse enthält ein Property `count` in seinem Konstruktor, sowie eine Methode `increment`. Zuerst wird die Methode `increment` zweimal durch `counterOne.increment()` aufgerufen. Der Wert von `counterOne.count` ist danach `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Danach erzeugen wir eine neue Variable `counterTwo` und setzen sie gleich `counterOne`. Da Objekte via Referenz übergeben werden, erzeugen wir somit lediglich eine neue Referenz auf den selben Bereich im Speicher, auf den auch `counterOne` zeigt. Da der gleiche Speicherbereich verwendet wird, haben alle Änderungen, die am Objekt vorgenommen werden, auf das `counterTwo` zeigt, auch Auswirkungen auf `counterOne`. Aktuell ist `counterTwo.count` somit `2`.

Wir rufen nun `counterTwo.increment()` auf, wodurch der Wert von `count` auf `3` gesetzt wird. Danach loggen wir den Zustand von `counterOne`, wodurch `3` ausgegeben wird.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. Was ist der Output?

```javascript
const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res));
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

<details><summary><b>Antwort</b></summary>
<p>

#### Antwort: D

Zuerst rufen wir die Funktion `funcOne()` auf. In der ersten Zeile in `funcOne` wird das Promise `myPromise` aufgerufen, was eine _asynchrone_ Operation ist. Während die Engine damit beschäftigt ist dieses Promise zu erfüllen, wird die Funktion `funcOne` weiter ausgeführt. Die nächste Zeile ist die _asynchrone_ Funktion `setTimeout`, von welcher der Callback an die Web API geschickt wird (siehe mein Artikel zu Event Loops).

Sowohl Promise als auch Timeout sind asynchrone Operationen. Die Funktion läuft also weiter, während sie parallel damit beschäfigt ist diese beiden Operationen zu bearbeiten. Das bedeutet, dass `Last line!` zuerst geloggt wird, da dies keine asynchrone Operation ist. Es ist die letzte Zeile von `funcOne`, das Promise wird erfüllt und `Promise!` geloggt. Da wir jedoch auch `funcTwo()` aufrufen, ist der Call Stack nicht leer und der Callback der Funktion `setTimeout` kann noch nicht zum Call Stack hinzugefügt werden.

In `funcTwo` warten wir zuerst auf das Promise von `myPromise`. Mit dem `await`-Operator pausieren wir die Ausführung der Funktion bis das Promise erfüllt (oder zurück gewiesen) wurde. Anschließend loggen wir (wieder mit dem `await-Operator`, da das Promise selbst ein Promise zurückgibt) den Wert von `res`. Dadurch wird `Promise!` geloggt.

Die nächste Zeile ist die _asynchrone_ Funktion `setTimeout`, deren Callback an die Web API gesendet wird.

Wir kommen zur letzten Zeile in `funcTwo`, die `Last line!` in der Console ausgibt. Da `funcTwo` abgearbeitet und aus dem Call Stack entfernt wurde, ist der Call Stack leer. Die wartenden Callbacks (`() => console.log("Timeout!")` aus `funcOne` und `() => console.log("Timeout!")` aus `funcTwo`) werden dem Call Stack nacheinander hinzugefügt. Der erste Callback loggt `Timeout!` und wird aus dem Stack entfernt. Anschließend loggt der zweite Callback `Timeout!` und wird aus dem Stack entfernt. Somit ist das Ergebnis `Last line! Promise! Promise! Last line! Timeout! Timeout!`

</p>
</details>