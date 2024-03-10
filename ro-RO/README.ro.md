<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Întrebări JavaScript</h1>

---

<span>Postez întrebări JavaScript cu opțiuni multiple pe [Instagram](https://www.instagram.com/theavocoder) **stories**, pe care le voi posta și aici! Ultima actualizare: <a href=#20200612><b>12 Iunie</b></a>

De la nivel de bază la avansat: testează cât de bine cunoști JavaScript, reîmprospătează-ți puțin cunoștințele sau pregătește-te pentru interviul tău de codare! :muscle: :rocket: Actualizez acest depozit în mod regulat cu întrebări noi. Am adăugat răspunsurile în **secțiunile restrânse** de sub întrebări, pur și simplu dă clic pe ele pentru a le extinde. Este doar pentru distracție, mult noroc! :heart:</span>

Nu ezita să mă contactezi! 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a>

</div>

| Simte-te liber să le folosești într-un proiect! 😃 Aș aprecia _cu adevărat_ o referință la acest depozit, eu creez întrebările și explicațiile (da, sunt tristă lol) și comunitatea mă ajută foarte mult să îl mențin și să îl îmbunătățesc! 💪🏼 Mulțumesc și distracție plăcută! |
|---|

---

<details><summary><b> Vezi 20 de traduceri disponibile 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼🇽🇰</b></summary>
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
- [🇵🇱 Polski](./pl-PL/README.md)
- [🇧🇷 Português Brasil](./pt-BR/README_pt_BR.md)
- [🇷🇺 Русский](./ru-RU/README.md)
- [🇽🇰 Shqip](./sq-KS/README_sq_KS.md)
- [🇹🇭 ไทย](./th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](./tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](./uk-UA/README.md)
- [🇻🇳 Tiếng Việt](./vi-VI/README-vi.md)
- [🇨🇳 简体中文](./zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](./zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. Care este rezultatul?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` și `undefined`
- B: `Lydia` și `ReferenceError`
- C: `ReferenceError` și `21`
- D: `undefined` și `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

În interiorul funcției, mai întâi declarăm variabila `name` cu cuvântul cheie `var`. Acest lucru înseamnă că variabila este hoisted (spațiul de memorie este configurat în faza de creare) cu valoarea implicită `undefined`, până când ajungem efectiv la linia în care definim variabila. Nu am definit încă variabila pe linia în care încercăm să înregistrăm variabila `name`, așa că aceasta păstrează încă valoarea `undefined`.

Variabilele create cu cuvântul cheie `let` (și `const`) sunt hoisted, dar, spre deosebire de `var`, nu sunt <i>inițializate</i>. Acestea nu sunt accesibile înainte de linia în care le declarăm (initializăm). Aceasta se numește zona moartă temporală (temporal dead zone). Atunci când încercăm să accesăm variabilele înainte de a fi declarate, JavaScript aruncă o excepție de tip `ReferenceError`.

</p>
</details>

---

###### 2. Care este rezultatul?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` și `0 1 2`
- B: `0 1 2` și `3 3 3`
- C: `3 3 3` și `0 1 2`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Datorită cozii de evenimente din JavaScript, funcția de callback `setTimeout` este apelată _după_ ce bucla a fost executată. Deoarece variabila `i` din prima buclă a fost declarată folosind cuvântul cheie `var`, această valoare a fost globală. În timpul buclei, am incrementat valoarea lui `i` cu `1` de fiecare dată, folosind operatorul unary `++`. Până când funcția de callback `setTimeout` a fost invocată, `i` era egal cu `3` în primul exemplu.

În cea de-a doua buclă, variabila `i` a fost declarată folosind cuvântul cheie `let`: variabilele declarate cu cuvântul cheie `let` (și `const`) sunt cu scop la nivel de bloc (un bloc este orice între `{ }`). În fiecare iterație, `i` va avea o valoare nouă, iar fiecare valoare este în cadrul buclei.

</p>
</details>

---

###### 3. Care este rezultatul?

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

- A: `20` și `62.83185307179586`
- B: `20` și `NaN`
- C: `20` și `63`
- D: `NaN` și `63`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Rețineți că valoarea lui `diameter` este o funcție obișnuită, în timp ce valoarea lui `perimeter` este o funcție arrow.

Cu funcțiile arrow, cuvântul cheie `this` se referă la contextul său curent de încadrare, spre deosebire de funcțiile obișnuite! Acest lucru înseamnă că atunci când apelăm `perimeter`, acesta nu se referă la obiectul formei, ci la încadrarea sa curentă (de exemplu, fereastra).

Nu există nicio valoare `radius` pe acel obiect, ceea ce returnează `NaN`.

</p>
</details>

---

###### 4. Care este rezultatul?

```javascript
+true;
!'Lydia';
```

- A: `1` și `false`
- B: `false` și `NaN`
- C: `false` și `false`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Operatorul unary plus încearcă să convertească un operand într-un număr. `true` este `1`, și `false` este `0`.

Șirul de caractere `'Lydia'` este o valoare adevărată. Ceea ce întrebăm de fapt, este "este această valoare adevărată falsă?". Acest lucru returnează `false`.

</p>
</details>

---

###### 5. Care este rezultatul?

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` nu este valid
- B: `mouse[bird.size]` nu este valid
- C: `mouse[bird["size"]]` nu este valid
- D: Toate sunt valide

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

În JavaScript, toate cheile obiectelor sunt șiruri de caractere (cu excepția simbolurilor). Chiar dacă nu le _tipizăm_ ca șiruri de caractere, ele sunt întotdeauna convertite în șiruri de caractere în fundal.

avaScript interpretează (sau dezambalează) instrucțiunile. Atunci când folosim notația cu paranteze pătrate, vede prima paranteză pătrată de deschidere `[` și continuă până când găsește paranteza pătrată de închidere `]`. Doar atunci va evalua instrucțiunea.

`mouse[bird.size]`: Întâi evaluează `bird.size`, care este `"small"`. `mouse["small"]` returnează `true`

Cu toate acestea, cu notația cu punct, acest lucru nu se întâmplă. `mouse` nu are o cheie numită `bird`, ceea ce înseamnă că `mouse.bird` este `undefined`. Apoi, cerem `size` folosind notația cu punct: `mouse.bird.size`. Deoarece `mouse.bird` este `undefined`, de fapt cerem `undefined.size`. Acest lucru nu este valid și va arunca o eroare similară cu `Cannot read property "size" of undefined` (Nu se poate citi proprietatea "size" a unei valori nedefinite).

</p>
</details>

---

###### 6. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

În JavaScript, toate obiectele interacționează prin _referință_ atunci când sunt setate ca egale între ele.

Mai întâi, variabila `c` deține o valoare care face referire la un obiect. Ulterior, atribuim variabilei `d` aceeași referință pe care o are `c` la obiect.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Când modifici un obiect, le modifici pe toate.

</p>
</details>

---

###### 7. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

`new Number()` este un constructor de funcții încorporat. Deși arată ca un număr, nu este într-adevăr un număr: are o mulțime de funcționalități suplimentare și este un obiect.

Atunci când folosim operatorul `==` (operatorul de egalitate), acesta verifică doar dacă au aceeași _valuare_. Ambele au valoarea `3`, șa că returnează `true`.

Cu toate acestea, atunci când folosim operatorul `===` (operatorul de egalitate strictă), atât valoarea, cât _și_ tipul trebuie să fie la fel. Nu sunt: `new Number()` nu este un număr, este un **object**. Ambele returnează `false.`

</p>
</details>

---

###### 8. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Funcția `colorChange` este statică. Metodele statice sunt concepute să existe doar pe constructorul în care sunt create și nu pot fi transmise către niciun copil sau apelate pe instanțele clasei. Deoarece `freddie` este o instanță a clasei Chameleon, funcția nu poate fi apelată pe aceasta. Se aruncă o eroare de tip `TypeError`.

</p>
</details>

---

###### 9. Care este rezultatul?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Se afișează obiectul, deoarece tocmai am creat un obiect gol pe obiectul global! Atunci când am greșit și am scris `greeting` în loc de `greetign`, interpretorul JavaScript a văzut efectiv acest lucru ca:

1. `global.greetign = {}` în Node.js
2. `window.greetign = {}`, `frames.greetign = {}` și `self.greetign` în browser-e.
3. `self.greetign` în web workers.
4. `globalThis.greetign` în toate mediile.

Pentru a evita acest lucru, putem folosi `"use strict"`. Acest lucru se asigură că ai declarat o variabilă înainte de a-i atribui o valoare.

</p>
</details>

---

###### 10. Ce se întâmplă când facem asta?

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: Nimic, este absolut în regulă!
- B: `SyntaxError`. Nu poți adăuga proprietăți la o funcție în acest fel.
- C: `"Woof"` este înregistrat.
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Acest lucru este posibil în JavaScript, deoarece funcțiile sunt obiecte! (Totul, în afară de tipurile primitive, sunt obiecte)

O funcție este un tip special de obiect. Codul pe care îl scrii tu însuți nu este funcția efectivă. Funcția este un obiect cu proprietăți. Această proprietate este invocabilă.

</p>
</details>

---

###### 11. Care este rezultatul?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

În JavaScript, funcțiile sunt obiecte și, prin urmare, metoda `getFullName` este adăugată obiectului constructor al funcției în sine. Din acest motiv, putem apela `Person.getFullName()`, dar `member.getFullName` aruncă o eroare de tip `TypeError`.

Dacă doriți ca o metodă să fie disponibilă pentru toate instanțele obiectului, trebuie să o adăugați la proprietatea prototype:

```js
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
```

</p>
</details>

---

###### 12. Care este rezultatul?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` și `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` și `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` și `{}`
- D: `Person {firstName: "Lydia", lastName: "Hallie"}` și `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Pentru `sarah`, nu am folosit cuvântul cheie `new`. Când folosim `new`, `this` se referă la noul obiect gol pe care îl creăm. Cu toate acestea, dacă nu adăugăm `new`, `this` se referă la **obiectul global**!

Am spus că `this.firstName` este egal cu `"Sarah"` și `this.lastName` este egal cu `"Smith"`. Ceea ce am făcut de fapt este să definim `global.firstName = 'Sarah'` și `global.lastName = 'Smith'`. `sarah` în sine rămâne `undefined`, deoarece nu returnăm o valoare din funcția `Person`.

</p>
</details>

---

###### 13. Care sunt cele trei faze ale propagării evenimentelor?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

În timpul fazei de **capturing**, evenimentul trece prin elementele părinte până la elementul țintă. Apoi ajunge la elementul **target**, și începe **bubbling**.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Toate obiectele au prototipuri.

- A: true
- B: false

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Toate obiectele au prototipuri, cu excepția **obiectului de bază**. Obiectul de bază este obiectul creat de utilizator sau un obiect creat folosind cuvântul cheie `new`. Obiectul de bază are acces la unele metode și proprietăți, cum ar fi `.toString`. Acesta este motivul pentru care puteți utiliza metode JavaScript încorporate! Toate aceste metode sunt disponibile în prototip. Deși JavaScript nu le poate găsi direct în obiectul dvs., merge în jos pe lanțul prototip și le găsește acolo, ceea ce le face accesibile pentru dvs.

</p>
</details>

---

###### 15. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

JavaScript este un limbaj **dinamic tipizat**: nu specificăm tipurile variabilelor. Valorile pot fi convertite automat în alt tip fără să știți, ceea ce se numește _coerție de tip implicită_. **Coerția** este conversia dintr-un tip în altul.

În acest exemplu, JavaScript convertește numărul `1` într-un șir de caractere, pentru ca funcția să aibă sens și să returneze o valoare. În timpul adunării unui tip numeric (`1`) și unui tip șir de caractere (`'2'`), numărul este tratat ca un șir de caractere. Putem concatena șiruri de caractere, așa cum facem cu `"Hello" + "World"`, deci ceea ce se întâmplă aici este `"1" + "2"` care returnează `"12"`.

</p>
</details>

---

###### 16. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Operatorul unary **postfix** `++`:

1. Returnează valoarea (aceasta returnează `0`)
2. Incrementează valoarea (numărul este acum `1`)

Operatorul unary **prefix** `++`:

1. Incrementează valoarea (numărul este acum `2`)
2. Returnează valoarea (aceasta returnează `2`)

Aceasta returnează `0 2 2`.

</p>
</details>

---

###### 17. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Dacă utilizați șiruri template etichetate, valoarea primului argument este întotdeauna un șir de valori. Argumentele rămase primesc valorile expresiilor transmise!

</p>
</details>

---

###### 18. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Când se testează egalitatea, primitivele sunt comparate în funcție de valoarea lor, în timp ce obiectele sunt comparate în funcție de _referința_ lor. JavaScript verifică dacă obiectele au o referință către aceeași locație în memorie.

Cele două obiecte pe care le comparăm nu au aceeași referință: obiectul pe care l-am trecut ca parametru se referă la o altă locație în memorie decât obiectul pe care l-am folosit pentru a verifica egalitatea.

Acesta este motivul pentru care ambele `{ age: 18 } === { age: 18 }` și `{ age: 18 } == { age: 18 }` returnează `false`.

</p>
</details>

---

###### 19. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Parametrul rest (`...args`) ne permite să "colectăm" toate argumentele rămase într-un array. Un array este un obiect, așa că `typeof args` returnează `"object"`

</p>
</details>

---

###### 20. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu `"use strict"`, puteți asigura că nu declarați accidental variabile globale. Niciodată nu am declarat variabila `age`, și deoarece folosim `"use strict"`, va arunca o eroare de referință. Dacă nu am fi folosit `"use strict"`, ar fi funcționat, deoarece proprietatea `age` ar fi fost adăugată la obiectul global.

</p>
</details>

---

###### 21. Care este valoarea lui `sum`?

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

`eval` evaluează codul care este trecut ca un șir de caractere. Dacă este o expresie, așa cum este în acest caz, evaluează expresia. Expresia este `10 * 10 + 5`. Aceasta returnează numărul `105`.

</p>
</details>

---

###### 22. Cât timp este accesibil cool_secret?

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: Pentru totdeauna, datele nu se pierd.
- B: Când utilizatorul închide fila.
- C: Când utilizatorul închide întregul browser, nu doar fila.
- D: Când utilizatorul oprește computerul.

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Datele stocate în `sessionStorage` sunt eliminate după închiderea _filei_.

Dacă ați fi folosit `localStorage`, datele ar fi rămas acolo pentru totdeauna, cu excepția cazului în care, de exemplu, este invocată comanda `localStorage.clear()`.

</p>
</details>

---

###### 23. Care este rezultatul?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu cuvântul cheie `var`, puteți declara mai multe variabile cu același nume. Variabila va reține apoi cea mai recentă valoare.

Nu puteți face acest lucru cu `let` sau `const` deoarece acestea sunt cu scop de bloc.

</p>
</details>

---

###### 24. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Toate cheile obiectelor (cu excepția simbolurilor) sunt șiruri de caractere în culise, chiar dacă nu le tastați ca șiruri de caractere. De aceea `obj.hasOwnProperty('1')` returnează de asemenea `true`.

Acest lucru nu funcționează în același fel pentru un set. Nu există `'1'` în setul nostru: `set.has('1')` returnează `false`. Acesta are tipul numeric `1`, `set.has(1)` returnează `true`.

</p>
</details>

---

###### 25. Care este rezultatul?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Dacă aveți două chei cu același nume, cheia va fi înlocuită. Va rămâne totuși în prima sa poziție, dar cu ultima valoare specificată.

</p>
</details>

---

###### 26. Contextul global de execuție JavaScript creează două lucruri pentru dvs.: obiectul global și cuvântul cheie "this".

- A: true
- B: false
- C: it depends

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Contextul de execuție de bază este contextul global de execuție: este ceea ce este accesibil peste tot în codul dvs.

</p>
</details>

---

###### 27. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Instrucțiunea `continue` sare peste o iterație dacă o anumită condiție returnează `true`.

</p>
</details>

---

###### 28. Care este rezultatul?

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza());
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

`String` este un constructor încorporat, la care putem adăuga proprietăți. Am adăugat doar o metodă la prototipul său. Șirurile primitive sunt convertite automat într-un obiect șir, generat de funcția prototip a șirului. Prin urmare, toate șirurile (obiecte de șir) au acces la acea metodă!

</p>
</details>

---

###### 29. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cheile obiectului sunt convertite automat în șiruri de caractere. Încercăm să setăm un obiect ca cheie pentru obiectul `a`, cu valoarea `123`.

Cu toate acestea, când transformăm în șir un obiect, acesta devine `"[object Object]"`. Deci ceea ce spunem aici este că `a["[object Object]"] = 123`. Apoi, putem încerca să facem același lucru din nou. `c` este un alt obiect pe care îl transformăm implicit în șir. Așadar, `a["[object Object]"] = 456`.

Apoi, afișăm înregistrarea `a[b]`, care de fapt este `a["[object Object]"]`. Am setat doar asta la `456`, deci returnează `456`.

</p>
</details>

---

###### 30. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Avem o funcție `setTimeout` și am invocat-o mai întâi. Cu toate acestea, a fost înregistrată în ultimul rând.

Acest lucru se datorează faptului că în browsere, nu avem doar motorul de execuție, avem și ceva numit `WebAPI`.`WebAPI` ne oferă funcția `setTimeout` de exemplu, și DOM-ul.

După ce _callback_-ul este trimis către WebAPI, funcția `setTimeout` în sine (dar nu și callback-ul!) este scos din stivă.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Acum, `foo` este invocată, iar`"First"` este înregistrat.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` este scoasă din stivă, iar `baz` este invocată. Se înregistrează `"Third"`.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI-ul nu poate adăuga pur și simplu lucruri în stivă atunci când este gata. În schimb, împinge funcția de callback într-o structură numită _coadă_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Aici începe să lucreze un event loop. Un **event loop** se uită la stivă și la coada de sarcini. Dacă stiva este goală, ia primul lucru din coadă și-l adaugă în stivă.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` este invocată, `"Second"` este înregistrat și este scos din stivă.

</p>
</details>

---

###### 31. Ce reprezintă "event.target" atunci când se face clic pe buton?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: În afara `div`
- B: În interior `div`
- C: `button`
- D: Un șir de toate elementele înglobate.

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cel mai profund element înglobat care a cauzat evenimentul este ținta evenimentului. Puteți opri propagarea acestuia prin `event.stopPropagation`

</p>
</details>

---

###### 32. Când faceți clic pe paragraf, care este ieșirea înregistrată?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Dacă facem clic pe `p`, vom vedea două înregistrări: `p` și `div`. În timpul propagării evenimentului, există 3 faze: capturare, țintă și propagare. În mod implicit, gestionarii de evenimente sunt executați în faza de propagare (cu excepția cazului în care setați `useCapture` la `true`). Aceștia se execută de la cel mai profund element înglobat către exterior.

</p>
</details>

---

###### 33. Care este rezultatul?

```javascript
const person = { name: 'Lydia' };

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Cu ambele metode, putem transmite obiectul la care dorim să se refere cuvântul cheie `this`. Cu toate acestea, `.call` este de asemenea _executat imediat_!

`.bind.` returnează o _copie_ a funcției, dar cu un context legat! Nu este executat imediat.

</p>
</details>

---

###### 34. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Funcția `sayHi` returnează valoarea returnată de expresia funcției invocate imediat (IIFE). This function returned `0`, care este de tip `"number"`.
	
Informație utilă: `typeof` poate returna următoarele valori: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` și `object`. Notați că `typeof null` returnează `"object"`.

</p>
</details>

---

###### 35. Care dintre aceste valori sunt considerate falsy?

```javascript
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: Toate dintre ele sunt considerate falsy

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Există 8 valori considerate falsy:

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (șir de caractere gol)
- `0`
- `-0`
- `0n` (BigInt(0))

Constructorii de funcții, cum ar fi `new Number` și `new Boolean` sunt considerați truthy.

</p>
</details>

---

###### 36. Care este rezultatul?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

`typeof 1` returnează `"number"`.
`typeof "number"` returnează `"string"`

</p>
</details>

---

###### 37. Care este rezultatul?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, null x 7, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, empty x 7, 11]`
- D: `SyntaxError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Când setați o valoare pentru un element într-un array care depășește lungimea array-ului, JavaScript creează ceea ce se numește "slot-uri goale" (empty slots). Acestea au de fapt valoarea `undefined`, dar veți vedea ceva de genul:

`[1, 2, 3, empty x 7, 11]`

în funcție de locul în care îl rulați (este diferit pentru fiecare browser, Node.js, etc.)

</p>
</details>

---

###### 38. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Blocul `catch` primește argumentul `x`. Acesta nu este același `x` ca variabila când transmitem argumente. Această variabilă `x` este având domeniu de bloc (block-scoped).

Mai târziu, setăm această variabilă cu domeniu de bloc la valoarea `1`, și stabilim valoarea variabilei `y`. Acum, înregistrăm în consolă variabila cu domeniu de bloc `x`, care este egală cu `1`.

În afara blocului `catch`, `x` rămâne `undefined`, și `y` este `2`. Atunci când dorim să afișăm în consolă `console.log(x)` în afara blocului `catch`, acesta returnează `undefined`, și `y` returnează `2`.

</p>
</details>

---

###### 39. Totul în JavaScript este fie un...

- A: primitiv sau obiect
- B: funcție sau obiect
- C: întrebare trucată! doar obiecte
- D: număr sau obiect

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

JavaScript are doar tipuri primitive și obiecte.

Tipurile primitive sunt `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, și `symbol`.

Ceea ce diferențiază un tip primitiv de un obiect este faptul că tipurile primitive nu au proprietăți sau metode. Cu toate acestea, veți observa că `'foo'.toUpperCase()` se evaluează la `'FOO'` și nu duce la o eroare `TypeError`. Acest lucru se întâmplă pentru că atunci când încercați să accesați o proprietate sau o metodă pe un tip primitiv, cum ar fi un șir de caractere (string), JavaScript va înconjura implicit tipul primitiv folosind una dintre clasele de înveliș, adică `String`, și apoi va renunța imediat la înveliș după ce expresia se evaluează. Toate tipurile primitive, cu excepția `null` și `undefined` prezintă acest comportament.

</p>
</details>

---

###### 40. Care este rezultatul?

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

`[1, 2]` este valoarea noastră inițială. Aceasta este valoarea cu care începem și valoarea primului `acc`. În prima rundă, `acc` este `[1,2]`, și `cur` este `[0, 1]`. Le concatenăm, ceea ce duce la rezultatul `[1, 2, 0, 1]`.

Atunci, `[1, 2, 0, 1]` este `acc` și `[2, 3]` este `cur`. Le concatenăm și obținem `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. Care este rezultatul?

```javascript
!!null;
!!'';
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

`null` este falsy. `!null` returnează `true`. `!true` returnează `false`.

`""` este falsy. `!""` returnează `true`. `!true` returnează `false`.

`1` este truthy. `!1` returnează `false`. `!false` returnează `true`.

</p>
</details>

---

###### 42. Ce returnează metoda `setInterval` în browser?

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: un id unic
- B: cantitatea de milisecunde specificată
- C: funcția furnizată
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Aceasta returnează un identificator unic. Acest id poate fi utilizat pentru a opri intervalul respectiv cu ajutorul funcției `clearInterval()`.

</p>
</details>

---

###### 43. Ce returnează acest lucru?

```javascript
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Un șir de caractere este un obiect iterabil. Operatorul de răspândire (spread operator) mapează fiecare caracter dintr-un obiect iterabil la un element separat.

</p>
</details>

---

###### 44. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Funcțiile regulate nu pot fi oprite în mijlocul execuției după invocare. Cu toate acestea, o funcție generator poate fi "oprită" în mijloc și ulterior poate continua de la locul unde s-a oprit. De fiecare dată când o funcție generator întâlnește un cuvânt cheie `yield`, funcția furnizează valoarea specificată după el. Notați că funcția generator în acest caz nu _returnează_ the valoarea, ci _furnizează_ valoarea.

Mai întâi, inițializăm funcția generator cu `i` egal cu `10`. Invocăm funcția generator folosind metoda `next()`. Prima dată când invocăm funcția generator, `i` este egal cu `10`. Aceasta întâlnește primul cuvânt cheie `yield`: furnizează valoarea lui `i`. Generatorul este acum "pauzat", și se înregistrează valoarea `10`.

Apoi, invocăm din nou funcția cu metoda `next()`. Ea începe să continue de unde s-a oprit anterior, încă cu `i` egal cu `10`. Acum, întâlnește următorul cuvânt cheie `yield`, și furnizează `i * 2`. `i` este egal cu `10`, așa că returnează `10 * 2`, adică `20`. Acest lucru duce la rezultatul `10, 20`.

</p>
</details>

---

###### 45. Ce returnează asta?

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Atunci când transmitem mai multe promisiuni metodei `Promise.race`, ea rezolvă/rejectează _prima_ promisiune care se rezolvă/rejectează. Pentru metoda `setTimeout`, transmitem un cronometru: 500ms pentru prima promisiune (`firstPromise`), și 100ms pentru a doua promisiune (`secondPromise`). Acest lucru înseamnă că `secondPromise` se rezolvă primul cu valoarea `'two'`. `res` conține acum valoarea `'two'`, care se înregistrează în consolă.

</p>
</details>

---

###### 46. Care este resultatul?

```javascript
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

În primul rând, declarăm o variabilă `person` cu valoarea unui obiect care are o proprietate `name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Apoi, declarăm o variabilă numită `members`. Setăm primul element al acestui array egal cu valoarea variabilei `person`. Obiectele interacționează prin _referință_ atunci când le setăm egale între ele. Atunci când atribuiți o referință de la o variabilă la alta, faceți o _copie_ a acelei referințe. (notați că acestea nu au _aceași_ referință!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Apoi, setăm variabila `person` egală cu `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Noi modificăm doar valoarea variabilei `person` nu și primul element din array, deoarece acel element are o referință diferită (copiată) la obiect. Primul element din `members` încă păstrează referința sa la obiectul original. Când înregistrăm în consolă array-ul `members` primul element păstrează valoarea obiectului, care este afișată în consolă.

</p>
</details>

---

###### 47. Care este rezultatul?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu un ciclu `for-in` putem itera prin cheile obiectului, în acest caz `name` și `age`. În interior, cheile obiectului sunt șiruri de caractere (dacă nu sunt de tip Symbol). În fiecare iterație, setăm valoarea lui `item` egală cu cheia curentă pe care o parcurge. Mai întâi, `item` este egal cu `name`, și este înregistrat în consolă. Apoi, `item` este egal cu `age`, care este, de asemenea, înregistrat în consolă.

</p>
</details>

---

###### 48. Care este rezultatul?

```javascript
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Asociativitatea operatorilor este ordinea în care compilatorul evaluează expresiile, fie de la stânga la dreapta, fie de la dreapta la stânga. Acest lucru se întâmplă doar dacă toți operatorii au aceeași precedență. În cazul nostru, avem doar un tip de operator: `+`. Pentru adunare, asociativitatea este de la stânga la dreapta.

`3 + 4` este evaluat mai întâi. Acest lucru duce la numărul `7`.

`7 + '5'` duce la rezultatul `"75"` datorită coerției. JavaScript convertește numărul `7` într-un șir de caractere, așa cum am discutat în întrebarea 15. Putem concatena două șiruri de caractere folosind operatorul `+`. `"7" + "5"` rezultă în `"75"`.

</p>
</details>

---

###### 49. Care este valoarea lui`num`?

```javascript
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Este returnat doar primul număr din șir. Bazat pe _radix_ (al doilea argument pentru a specifica în ce tip de număr dorim să-l parsăm: bază 10, hexazecimal, octal, binar, etc.), `parseInt` verifică dacă caracterele din șir sunt valide. Odată ce întâlnește un caracter care nu este un număr valid în baza specificată, oprește parsarea și ignoră caracterele ulterioare.

`*` nu este un număr valid. Parsează doar `"7"` în numărul zecimal `7`. Acum, `num` conține valoarea `7`.

</p>
</details>

---

###### 50. Care este rezultatul?

```javascript
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Când se parcurge array-ul, valoarea lui `num` este egală cu elementul prin care parcurge în acel moment. În acest caz, elementele sunt numere, astfel că condiția din instrucțiunea `typeof num === "number"` returnează `true`. Funcția map creează un nou array și introduce valorile returnate de funcție.

Cu toate acestea, nu returnăm o valoare. Atunci când nu returnăm o valoare din funcție, funcția returnează `undefined`. Pentru fiecare element din array, blocul funcției este apelat, deci pentru fiecare element returnăm `undefined`.

</p>
</details>

---

###### 51. Care este rezultatul?

```javascript
function getInfo(member, year) {
  member.name = 'Lydia';
  year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Argumentele sunt transmise prin _valoare_, cu excepția cazului în care valoarea lor este un obiect, caz în care sunt transmise prin _referință_. `birthYear` este transmis prin valoare, deoarece este un șir de caractere (string), nu un obiect. Atunci când transmitem argumente prin valoare, se creează o _copie_ a acelei valori (consultați întrebarea 46).

Variabila `birthYear` are o referință la valoarea `"1997"`. Argumentul `year` are, de asemenea, o referință la valoarea `"1997"`, dar nu este aceeași valoare la care se referă `birthYear`. Atunci când actualizăm valoarea lui `year` prin setarea lui `year` egal cu `"1998"`, actualizăm doar valoarea lui `year`. `birthYear` rămâne în continuare egal cu `"1997"`.

Valoarea lui `person` este un obiect. Argumentul `member` are o referință (copiată) către _același_ obiect. Atunci când modificăm o proprietate a obiectului la care se referă `member` valoarea lui `person` va fi de asemenea modificată, deoarece ambele au o referință la același obiect. Proprietatea `name` a lui `person` este acum egală cu valoarea `"Lydia"`.

</p>
</details>

---

###### 52. Care este rezultatul?

```javascript
function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

sayHi();
```

- A: `It worked! Hello world!`
- B: `Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Oh no an error: Hello world!`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Cu instrucțiunea `throw` putem crea erori personalizate. Cu această instrucțiune, puteți arunca excepții. O excepție poate fi un <b>șir de caractere</b>, un <b>număr</b>, un <b>boolean</b> sau un <b>obiect</b>. În acest caz, excepția noastră este șirul `'Hello world!'`.

Cu instrucțiunea `catch` putem specifica ce să facem dacă o excepție este aruncată în blocul `try`. O excepție este aruncată: șirul `'Hello world!'`. `e` este acum egal cu acel șir, pe care îl înregistrăm. Acest lucru duce la rezultatul `'Oh an error: Hello world!'`.

</p>
</details>

---

###### 53. Care este rezultatul?

```javascript
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Lamborghini"`
- B: `"Maserati"`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Atunci când o funcție constructor este apelată cu cuvântul cheie `new`, aceasta creează un obiect și stabilește cuvântul cheie `this` să se refere la acel obiect. În mod implicit, dacă funcția constructor nu returnează explicit nimic, va returna obiectul creat recent.

În acest caz, funcția constructor `Car` returnează în mod explicit un obiect nou cu proprietatea `make` setată la `"Maserati"`, ceea ce suprascrie comportamentul implicit. Prin urmare, atunci când este apelat `new Car()` obiectul _returnat_ este atribuit lui `myCar`, ceea ce duce la rezultatul `"Maserati"` atunci când se accesează `myCar.make`.

</p>
</details>

---

###### 54. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

`let x = (y = 10);` este de fapt o prescurtare pentru

```javascript
y = 10;
let x = y;
```

Când setăm `y` egal cu `10`, adăugăm de fapt o proprietate `y` la obiectul global (`window` într-un browser, `global` în Node). Într-un browser, `window.y` este acum egal cu `10`.

Apoi, declarăm o variabilă `x` cu valoarea `y`, care este `10`. Variabilele declarate cu cuvântul cheie `let` au domeniu de bloc _block scoped_, ele sunt definite doar în blocul în care sunt declarate; în cazul de față, în funcția expresie invocată imediat (IIFE). Atunci când folosim operatorul `typeof` operandul `x` nu este definit: încercăm să accesăm `x` în afara blocului în care este declarat. Acest lucru înseamnă că `x` nu este definit. Valorile care nu au primit o valoare sau nu au fost declarate sunt de tip `"undefined"`. `console.log(typeof x)` returnează `"undefined"`.

Cu toate acestea, am creat o variabilă globală `y` atunci când am setat `y` egal cu `10`. Această valoare este accesibilă oriunde în codul nostru. `y` este definită și deține o valoare de tip `"number"`. `console.log(typeof y)` returnează `"number"`.

</p>
</details>

---

###### 55. Care este rezultatul?

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Putem șterge proprietăți din obiecte folosind cuvântul cheie `delete` inclusiv de pe prototip. Prin ștergerea unei proprietăți de pe prototip, aceasta nu mai este disponibilă în lanțul prototipului. În acest caz, funcția `bark` nu mai este disponibilă pe prototip după `delete Dog.prototype.bark`, dar încercăm totuși să o accesăm.

Când încercăm să apelăm ceva care nu este o funcție, este aruncată o excepție  `TypeError`. În acest caz, se generează eroarea `TypeError: pet.bark is not a function`, deoarece `pet.bark` este `undefined`.

</p>
</details>

---

###### 56. Care este rezultatul?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Obiectul `Set` este o colecție de valori unice: o valoare poate apărea doar o singură dată într-un set.

m transmis iterable-ul `[1, 1, 2, 3, 4]` cu o valoare duplicată `1`. Deoarece nu putem avea două valori identice într-un set, una dintre ele este eliminată. Acest lucru duce la rezultatul `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Care este rezultatul?

```javascript
// counter.js
let counter = 10;
export default counter;
```

```javascript
// index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter);
```

- A: `10`
- B: `11`
- C: `Error`
- D: `NaN`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Un modul importat este _doar pentru citire_: nu puteți modifica modulul importat. Doar modulul care le exportă poate schimba valorile acestora.

Când încercăm să incrementăm valoarea lui `myCounter`, apare o eroare: `myCounter` este doar pentru citire și nu poate fi modificat.

</p>
</details>

---

###### 58. Care este rezultatul?

```javascript
const name = 'Lydia';
age = 21;

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `"Lydia"`, `21`
- C: `true`, `true`
- D: `undefined`, `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Operatorul `delete` returnează o valoare booleană: `true` în cazul ștergerii reușite, în caz contrar va returna `false`. Cu toate acestea, variabilele declarate cu cuvintele cheie `var`, `const` sau `let` nu pot fi șterse folosind operatorul `delete`.

Variabila `name` a fost declarată cu cuvântul cheie `const` așa că ștergerea sa nu reușește: se returnează `false`. Atunci când setăm `age` egal cu `21`, de fapt am adăugat o proprietate numită `age` la obiectul global. În acest fel, puteți șterge cu succes proprietăți din obiecte, inclusiv din obiectul global, așa că `delete age` returnează `true`.

</p>
</details>

---

###### 59. Care este rezultatul?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Putem dezasambla (unpack) valori din array-uri sau proprietăți din obiecte prin destructurare. De exemplu:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

Valoarea lui `a` este acum `1`, iar valoarea lui `b` este acum `2`. Ceea ce am făcut în întrebare este:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Acest lucru înseamnă că valoarea lui `y` este egală cu prima valoare din array, care este numărul `1`. Când înregistrăm în consolă `y`, se returnează `1`.

</p>
</details>

---

###### 60. Care este rezultatul?

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Este posibil să combinăm obiecte folosind operatorul de răspândire`...`. Acesta vă permite să creați copii ale perechilor cheie/valoare dintr-un obiect și să le adăugați la alt obiect. În acest caz, creăm copii ale obiectului `user` și le adăugăm la obiectul `admin`. Obiectul `admin` conține acum perechile cheie/valoare copiate, ceea ce duce la rezultatul `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. Care este rezultatul?

```javascript
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia"}`, `["name", "age"]`
- D: `{ name: "Lydia"}`, `["age"]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu metoda `defineProperty` putem adăuga noi proprietăți la un obiect sau să modificăm cele existente. Atunci când adăugăm o proprietate la un obiect folosind metoda `defineProperty` aceasta nu este, în mod implicit, _nu enumerabilă_. Metoda `Object.keys` returnează toate numele de proprietăți _enumerabile_ dintr-un obiect, în acest caz doar `"name"`.

Proprietățile adăugate folosind metoda `defineProperty` sunt, în mod implicit, imutabile (nu pot fi schimbate). Puteți anula acest comportament folosind proprietățile `writable`, `configurable` și `enumerable` În acest fel, metoda `defineProperty` vă oferă un control mai mare asupra proprietăților pe care le adăugați la un obiect.

</p>
</details>

---

###### 62. Care este rezultatul?

```javascript
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Al doilea argument al funcției `JSON.stringify` este _replacer-ul_. Replacer-ul poate fi fie o funcție, fie un array, și vă permite să controlați ce și cum ar trebui să fie serializate (convertite în șir de caractere) valorile.

Dacă replacer-ul este un _array_, în șirul JSON vor fi incluse doar numele de proprietăți care sunt prezente în array. În acest caz, doar proprietățile cu numele `"level"` și `"health"` sunt incluse, în timp ce `"username"` este exclus. Astfel, `data` devine egal cu `"{"level":19, "health":90}"`.

Dacă replacer-ul este o _funcție_, această funcție este apelată pentru fiecare proprietate din obiectul pe care îl serializați. Valoarea returnată de această funcție va fi valoarea proprietății atunci când este adăugată în șirul JSON. Dacă valoarea este `undefined`, această proprietate este exclusă din șirul JSON.

</p>
</details>

---

###### 63. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Operatorul unary `++` _returnează mai întâi_ valoarea operandului și _apoi incrementează_ valoarea operandului. Valoarea lui `num1` este `10`, deoarece funcția `increaseNumber` returnează mai întâi valoarea lui `num`, care este `10`, și numai apoi incrementează valoarea lui `num`.

`num2` este `10`, deoarece am transmis `num1` către funcția `increasePassedNumber`. `number` ieste egal cu `10`(valoarea lui `num1`). Iarăși, operatorul unary `++` _returnează mai întâi_ valoarea operandului și _apoi incrementeazăs_ valoarea operandului. Valoarea lui `number` este `10`, așa că `num2` este egal cu `10`.

</p>
</details>

---

###### 64. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

În ES6, putem inițializa parametri cu o valoare implicită. Valoarea parametrului va fi valoarea implicită, dacă nu a fost furnizată nicio altă valoare funcției sau dacă valoarea parametrului este `"undefined"`. În acest caz, răspândim proprietățile obiectului `value`  într-un obiect nou, astfel încât `x` are valoarea implicită `{ number: 10 }`.

Argumentul implicit este evaluat la _momentul apelului_! De fiecare dată când apelăm funcția, se creează un obiect _nou_. Invocăm funcția `multiply` primele două ori fără a furniza o valoare: `x` are valoarea implicită `{ number: 10 }`. Apoi înregistrăm în consolă valoarea înmulțită a acelui număr, care este `20`.

A treia oară când apelăm `multiply`, furnizăm un argument: obiectul numit `value`. Operatorul `*=` este, de fapt, o prescurtare pentru `x.number = x.number * 2`: modificăm valoarea lui`x.number`, și înregistrăm în consolă valoarea înmulțită, care este `20`.

A patra oară, trecem din nou obiectul `value`. `x.number` a fost modificat anterior la `20`, deci `x.number *= 2` înregistrează `40`.

</p>
</details>

---

###### 65. Care este rezultatul?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` și `3` `3` și `6` `4`
- B: `1` `2` și `2` `3` și `3` `4`
- C: `1` `undefined` și `2` `undefined` și `3` `undefined` și `4` `undefined`
- D: `1` `2` și `undefined` `3` și `undefined` `4`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Primul argument pe care îl primește metoda `reduce` este _acumulator-ul_, `x` în acest caz. Al doilea argument este _valoarea curentă_, `y`. Cu metoda `reduce`, executăm o funcție de apel pe fiecare element din array, ceea ce poate duce în cele din urmă la o singură valoare.

În acest exemplu, nu returnăm nicio valoare, ci doar înregistrăm valorile accumulatorului și valorii curente.

Valoarea accumulatorului este egală cu valoarea returnată anterior de funcția de apel. Dacă nu furnizați argumentul opțional `initialValue` metodei `reduce`, accumulatorul este egal cu primul element la prima apelare.

La prima apelare, accumulatorul (`x`) este `1`, iar valoarea curentă (`y`) este `2`. Nu returnăm din funcția de apel, ci înregistrăm valorile accumulatorului și valoarea curentă: se înregistrează `1` și `2`.

Dacă nu returnați o valoare dintr-o funcție, aceasta va returna `undefined`. OLa următoarea apelare, accumulatorul este `undefined`, iar valoarea curentă este `3`. Se înregistrează `undefined` și `3`.

La a patra apelare, din nou nu returnăm din funcția de apel. Accumulatorul este din nou `undefined`, iar valoarea curentă este `4`. Se înregistrează `undefined` și `4`.

</p>
</details>
  
---

###### 66. Cu ce constructor putem extinde cu succes clasa `Dog`?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Într-o clasă derivată, nu puteți accesa cuvântul cheie `this` înainte de a apela `super`. Dacă încercați să faceți acest lucru, va arunca o ReferenceError: 1 și 4 ar arunca o eroare de referință.

Cu cuvântul cheie `super`, apelăm constructorul clasei părinte cu argumentele date. Constructorul părintelui primește argumentul `name`, deci trebuie să transmitem `name` la `super`.

Clasa `Labrador` primește doi argumente, `name` deoarece extinde clasa `Dog`, și `size` ca o proprietate suplimentară în clasa `Labrador`. Ambele trebuie să fie transmise funcției constructor din clasa `Labrador`, ceea ce se face corect utilizând constructorul 2.

</p>
</details>

---

###### 67. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu cuvântul cheie `import`, toate modulele importate sunt _preparate în prealabil_. Acest lucru înseamnă că modulele importate sunt executate _mai întâi_, codul din fișierul care importă modulul este executat _după accea_.

Acesta este un diferență între `require()` în CommonJS și `import`! Cu `require()`, puteți încărca dependențele la cerere în timp ce codul este în curs de desfășurare. Dacă am fi folosit `require` în loc de `import`, ar fi fost înregistrate în consolă mesajele `running index.js`, `running sum.js`, `3`.

</p>
</details>

---

###### 68. Care este rezultatul?

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Fiecare Symbol este complet unic. Scopul argumentului furnizat către Symbol este de a oferi Symbolului o descriere. Valoarea Symbolului nu depinde de argumentul furnizat. În timp ce testăm egalitatea, creăm două simboluri complet noi: primul `Symbol('foo')`, și al doilea `Symbol('foo')`. Aceste două valori sunt unice și nu sunt egale între ele, `Symbol('foo') === Symbol('foo')` returnează `false`.

</p>
</details>

---

###### 69. Care este rezultatul?

```javascript
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu metoda `padStart` putem adăuga umplutură la începutul unui șir. Valoarea transmisă acestei metode este lungimea _totală_ a șirului împreună cu umplutura. Șirul `"Lydia Hallie"` are o lungime de `12`. `name.padStart(13)` introduce 1 spațiu la începutul șirului, deoarece 12 + 1 este 13.

Dacă argumentul transmis metodei `padStart` este mai mic decât lungimea șirului, nu va fi adăugată nicio umplutură.

</p>
</details>

---

###### 70. Care este rezultatul?

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: Un șir care conține punctele de cod ale caracterelor
- D: Eroare

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Cu operatorul `+`, puteți concatena șiruri. În acest caz, concatenăm șirul `"🥑"` cu șirul `"💻"`, rezultând `"🥑💻"`.

</p>
</details>

---

###### 71. Cum putem înregistra valorile aflate în comentarii după instrucțiunea console.log?

```javascript
function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're done here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` și `game.next().value`
- B: `game.next.value("Yes")` și `game.next.value()`
- C: `game.next().value` și `game.next("Yes").value`
- D: `game.next.value()` și `game.next.value("Yes")`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

O funcție generator "pauzează" execuția când întâlnește cuvântul cheie `yield`. Mai întâi, trebuie să permitem funcției să emită șirul "Do you love JavaScript?", ceea ce poate fi făcut apelând `game.next().value`.

Fiecare linie este executată până când găsește primul cuvânt cheie `yield`. Există un cuvânt cheie `yield` pe prima linie din funcție: execuția se oprește cu primul `yield`. _Acest lucru înseamnă că variabila `answer` nu este definită încă!_

Când apelăm `game.next("Yes").value`, cuvântul cheie `yield` anterior este înlocuit cu valoarea parametrilor transmiși funcției `next()`, `"Yes"` în acest caz. Valoarea variabilei `answer` este acum egală cu `"Yes"`. Condiția declarației if returnează `false`, și `JavaScript loves you back ❤️` este înregistrat în consolă.

</p>
</details>

---

###### 72. Care este rezultatul?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

`String.raw` returnează un șir în care escape-urile (`\n`, `\v`, `\t` etc.) sunt ignorate! Backslash-urile pot fi o problemă, deoarece puteți ajunge cu ceva similar cu:

`` const path = `C:\Documents\Projects\table.html` ``

Acest lucru ar rezulta în:

`"C:DocumentsProjects able.html"`

Cu `String.raw`, acesta ar ignora pur și simplu escape-ul și ar afișa:

`C:\Documents\Projects\table.html`

În acest caz, șirul este `Hello\nworld`, care este înregistrat în consolă.

</p>
</details>

---

###### 73. Care este rezultatul?

```javascript
async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

O funcție `async` întotdeauna returnează o promisiune. Instrucțiunea `await` încă trebuie să aștepte ca promisiunea să se rezolve: o promisiune în așteptare este returnată atunci când apelăm `getData()` pentru a o atribui variabilei `data`.

Dacă dorim să avem acces la valoarea rezolvată `"I made it"`, am putea folosi metoda `.then()` pe `data`:

`data.then(res => console.log(res))`

Acest lucru ar fi înregistrat `"I made it!"`

</p>
</details>

---

###### 74. Care este rezultatul?

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Metoda`.push()` returnează _lungimea_ noului șir! Înainte, șirul conținea un element (șirul `"banana"`) și avea o lungime de `1`. După adăugarea șirului `"apple"` în șir, șirul conține două elemente și are o lungime de `2`. Aceasta este valoarea returnată de funcția `addToList`.

Metoda `push` modifică șirul original. Dacă doreați să returnați _șirul_ din funcție în loc de _lungimea șirului_, ar fi trebuit să returnați `list` după ce ați adăugat `item` la el.

</p>
</details>

---

###### 75. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

`Object.freeze` face imposibilă adăugarea, eliminarea sau modificarea proprietăților unui obiect (cu excepția cazului în care valoarea proprietății este un alt obiect).

Când creăm variabila `shape` și o setăm egală cu obiectul înghețat `box`, `shape` de asemenea se referă la un obiect înghețat. Puteți verifica dacă un obiect este înghețat folosind `Object.isFrozen`. În acest caz, `Object.isFrozen(shape)` ar returna true, deoarece variabila `shape` are o referință către un obiect înghețat.

Deoarece `shape` este înghețat și deoarece valoarea lui`x` nu este un obiect, nu putem modifica proprietatea `x`. `x` rămâne egal cu `10`, și `{ x: 10, y: 20 }` este afișat în consolă.

</p>
</details>

---

###### 76. Care este rezultatul?

```javascript
const { firstName: myName } = { firstName: 'Lydia' };

console.log(firstName);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Folosind [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) cu sintaxa de mai jos putem extrage valori din array-uri sau proprietăți din obiecte în variabile distincte:

```javascript
const { firstName } = { firstName: 'Lydia' };
// ES5 version:
// var firstName = { firstName: 'Lydia' }.firstName;

console.log(firstName); // "Lydia"
```

De asemenea, o proprietate poate fi extras dintr-un obiect și atribuită unei variabile cu un nume diferit decât proprietatea obiectului:

```javascript
const { firstName: myName } = { firstName: 'Lydia' };
// ES5 version:
// var myName = { firstName: 'Lydia' }.firstName;

console.log(myName); // "Lydia"
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

Prin urmare, `firstName` nu există ca variabilă, astfel încât încercarea de a accesa valoarea sa va genera o eroare `ReferenceError`.

**Notă:** Fiți conștienți de proprietățile în `global scope` (spațiul global):

```javascript
const { name: myName } = { name: 'Lydia' };

console.log(myName); // "lydia"
console.log(name); // "" ----- Browser e.g. Chrome
console.log(name); // ReferenceError: name is not defined  ----- NodeJS

```

În cazul în care JavaScript nu poate găsi o variabilă în _cadrul curent_, acesta urcă pe [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) și o caută. Dacă ajunge la nivelul superior al cadrului, adică la **spațiul global**, și tot nu o găsește, va arunca o excepție `ReferenceError`.

- În **Browser-e** cum ar fi _Chrome_, `name` este o _proprietate de spațiu global depășită_. În acest exemplu, codul rulează în _spațiul global_ și nu există o variabilă locală definită de utilizator pentru `name`, așa că caută _variabilele/proprietățile_ predefinite în spațiul global, care în cazul browser-elor înseamnă că caută în obiectul `window` de unde extrage valoarea [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) care este egală cu un **șir gol**.

- În **NodeJS**, nu există o astfel de proprietate pe obiectul `global` așadar încercarea de a accesa o variabilă inexistentă va genera o [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined).

</p>
</details>

---

###### 77. Este aceasta o funcție pură?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Da
- B: Nu

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

O funcție pură este o funcție care _întotdeauna_ returnează același rezultat, dacă aceleași argumente sunt furnizate.

Funcția `sum` întotdeauna returnează același rezultat. Dacă îi furnizăm `1` și `2`, va returna _întotdeauna_ `3` fără efecte secundare. Dacă îi furnizăm `5` și `10`, va returna _întotdeauna_ `15`, și tot așa. Aceasta este definiția unei funcții pure.

</p>
</details>

---

###### 78. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Funcția `add` este o funcție _memoizată_. Cu ajutorul memoizării, putem să memorăm rezultatele unei funcții pentru a accelera execuția ulterioară. În acest caz, creăm un obiect `cache` care stochează valorile returnate anterior.

Dacă apelăm din nou funcția `addFunction` cu același argument, funcția verifică mai întâi dacă a primit deja acea valoare în memoria sa cache. Dacă acest lucru este adevărat, se va returna valoarea din cache, economisind timp de execuție. Dacă nu este în cache, funcția va calcula valoarea și o va memora ulterior.

Apelăm funcția `addFunction` de trei ori cu aceeași valoare: în prima invocare, valoarea funcției când `num` este egal cu `10` nu este încă în cache. Condiția instrucțiunii `num in cache` returnează `false`, iar blocul `else` este executat: se afișează `Calculated! 20` iar valoarea rezultatului este adăugată în obiectul de cache. Acum, `cache` arată astfel `{ 10: 20 }`.

A doua oară, obiectul `cache` conține valoarea care este returnată pentru `10`. Condiția instrucțiunii `num in cache` returnează `true`, și se afișează `'From cache! 20'`.

A treia oară, trecem `5 * 2` funcției, care este evaluat la `10`. Obiectul `cache` conține valoarea care este returnată pentru `10`. Condiția instrucțiunii `num in cache` returnează `true`, și se afișează `'From cache! 20'`.

</p>
</details>

---

###### 79. Care este rezultatul?

```javascript
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` și `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` și `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` și `0` `1` `2` `3`
- D: `0` `1` `2` `3` și `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Cu o buclă _for-in_, putem itera peste proprietățile **enumerabile**. Într-un șir, proprietățile enumerate sunt "cheile" elementelor din șir, care sunt de fapt indexurile lor. Puteți vedea un șir ca:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Unde cheile sunt proprietățile enumerate. `0` `1` `2` `3` sunt afișate.

Cu o buclă _for-of_, putem itera peste obiecte **iterabile**. Un șir este un obiect iterabil. Când iterăm peste șir, variabila "item" este egală cu elementul pe care îl parcurge în acel moment, sunt afișate `"☕"` `"💻"` `"🍷"` `"🍫"`.

</p>
</details>

---

###### 80. Care este rezultatul?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Elementele dintr-un șir pot stoca orice valoare. Numere, șiruri, obiecte, alte șiruri, null, valori booleane, undefined și alte expresii precum date, funcții și calculații.

Elementul va fi egal cu valoarea returnată. `1 + 2` returnează `3`, `1 * 2` returnează `2`, și `1 / 2` returnează `0.5`.

</p>
</details>

---

###### 81. Care este rezultatul?

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

În mod implicit, argumentele au valoarea `undefined`, cu excepția cazului în care s-a transmis o valoare funcției. În acest caz, nu am transmis o valoare pentru argumentul `name`. `name` este egal cu `undefined` iar acesta este afișat.

În ES6, putem suprascrie această valoare implicită `undefined` cu parametri impliciti. De exemplu:

`function sayHi(name = "Lydia") { ... }`

În acest caz, dacă nu am fi furnizat o valoare sau am fi furnizat `undefined`, `name` ar fi fost întotdeauna egal cu șirul `Lydia`.

</p>
</details>

---

###### 82. Care este rezultatul?

```javascript
var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
```

- A: `"🥑"` și `"😍"`
- B: `"🥑"` și `"😎"`
- C: `"😍"` și `"😎"`
- D: `"😎"` și `"😎"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Valoarea cuvântului cheie `this` depinde de locul în care este utilizat. Într-o **metodă**, cum ar fi metoda `getStatus`, cuvântul cheie `this` se referă la _obiectul la care aparține metoda_. Metoda aparține obiectului `data`, deci `this` se referă la obiectul `data`. Când înregistrăm `this.status`, se înregistrează proprietatea `status` de pe obiectul `data` care este `"🥑"`.

Cu metoda `call` putem schimba obiectul la care se referă cuvântul cheie `this`. În **funcții**, cuvântul cheie `this` se referă la _obiectul la care aparține funcția_. Am declarat funcția `setTimeout` pe _obiectul global_, deci în interiorul funcției `setTimeout`, cuvântul cheie `this` se referă la _obiectul global_. Pe obiectul global există o variabilă numită status cu valoarea `"😎"`. Când înregistrați `this.status`, se înregistrează `"😎"`.

</p>
</details>

---

###### 83. Care este rezultatul?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Am setat variabila `city` egală cu valoarea proprietății numită `city` pe obiectul `person`. Nu există o proprietate pe acest obiect numită `city`, astfel că variabila `city` are valoarea `undefined`.

Rețineți că nu facem referire la obiectul `person` în sine! Pur și simplu am setat variabila `city` egală cu valoarea curentă a proprietății `city` de pe obiectul `person`.

Apoi, am setat `city` egal cu șirul de caractere `"Amsterdam"`. Acest lucru nu schimbă obiectul `person` nu există o referință la acel obiect.

Atunci când se afișează obiectul `person` se va afișa obiectul original, nealterat.

</p>
</details>

---

###### 84. Care este rezultatul?

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Variabilele declarate cu cuvintele cheie `const` și `let` au _domeniu de vizibilitate la nivel de bloc_. Un bloc poate fi definit între parantezele acolade (`{ }`). În acest caz, parantezele acolade ale instrucțiunilor if/else. Nu puteți face referire la o variabilă în afara blocului în care a fost declarată, va fi generată o eroare de tip ReferenceError.

</p>
</details>

---

###### 85. Ce tip de informații ar fi înregistrate?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));
```

- A: Rezultatul metodei `fetch`.
- B: Rezultatul celei de-a doua apelări a metodei `fetch`.
- C: Rezultatul funcției de retur (callback) din `.then()`-ul anterior.
- D: Ar fi întotdeauna `undefined`.

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Valoarea lui `res` în al doilea `.then` este egală cu valoarea returnată de `.then` anterior. Puteți continua să înșirați `.then`-uri în acest fel, unde valoarea este pasată către următorul manipulator.

</p>
</details>

---

###### 86. Care opțiune este o modalitate de a seta `hasName` egala cu `true`, cu condiția să nu puteți furniza `true` ca argument?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Cu `!!name`, determinăm dacă valoarea lu `name` este adevărată sau falsă. Dacă `name` este adevărat, ceea ce dorim să testăm, `!name` returnează `false`. `!false` (practic, ceea ce este `!!name`) returnează `true`.

Prin setarea lui `hasName` egal cu `name`, se face ca `hasName` să fie egal cu valoarea pe care ați furnizat-o funcției `getName`, nu cu valoarea booleană `true`.

`new Boolean(true)` returnează un obiect încapsulator, nu valoarea booleană în sine.

`name.length` returnează lungimea argumentului furnizat, nu dacă acesta este `true`.

</p>
</details>

---

###### 87. Care este rezultatul?

```javascript
console.log('I want pizza'[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Pentru a obține un caracter la un anumit index dintr-un șir de caractere, puteți utiliza notația cu paranteze pătrate. Primul caracter din șir are indexul 0, și așa mai departe. În acest caz, dorim să obținem elementul cu indexul 0, adică caracterul `"I'`, care va fi afișat în jurnal.

Rețineți că această metodă nu este suportată în IE7 și versiunile anterioare. În acest caz, utilizați `.charAt()`.

</p>
</details>

---

###### 88. Care este rezultatul?

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Puteți seta valoarea implicită a unui parametru la valoarea altui parametru al funcției, atâta timp cât acestea sunt definite _înainte_ de parametrul cu valoarea implicită. Am transmis valoarea `10` funcției `sum`. Dacă funcția `sum` primește doar un argument, înseamnă că valoarea pentru `num2` nu este transmisă, iar valoarea lui `num1` este egală cu valoarea transmisă `10` în acest caz. Valoarea implicită a lui `num2` este valoarea lui `num1`, care este `10`. `num1 + num2` returnează `20`.

Dacă încercați să setați valoarea implicită a unui parametru egală cu un parametru care este definit _după_ (în dreapta), valoarea parametrului nu a fost încă inițializată, ceea ce va genera o eroare.

</p>
</details>

---

###### 89. Care este rezultatul?

```javascript
// module.js
export default () => 'Hello world';
export const name = 'Lydia';

// index.js
import * as data from './module';

console.log(data);
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Obiectul global al `module.js`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Cu sintaxa `import * as name`, importăm _toate exporturile_ din fișierul `module.js` în fișierul `index.js` sub forma unui nou obiect numit `data`. În fișierul `module.js` există două exporturi: exportul implicit și un export cu nume. Exportul implicit este o funcție care returnează șirul de caractere `"Hello World"`, iar exportul cu nume este o variabilă numită `name` care are valoarea șirului de caractere `"Lydia"`.

Obiectul `data` are o proprietate `default` pentru exportul implicit, iar celelalte proprietăți au numele exporturilor cu nume și valorile lor corespunzătoare.

</p>
</details>

---

###### 90. Care este rezultatul?

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Clasele sunt o sintaxă mai simplă pentru constructorii de funcții. Echivalentul clasei `Person` sub forma unui constructor de funcții ar fi:

```javascript
function Person(name) {
  this.name = name;
}
```

Apelarea unui constructor de funcții cu `new` duce la crearea unei instanțe a obiectului `Person`, iar cuvântul cheie `typeof` returnează `"object"` pentru o astfel de instanță. `typeof member` returnează `"object"`.

</p>
</details>

---

###### 91. Care este rezultatul?

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Metoda `.push` returnează _lungimea nouă_ a array-ului, nu array-ul însuși! Prin setarea `newList` egal cu `[1, 2, 3].push(4)`, am setat `newList` egal cu noua lungime a array-ului: `4`.

Apoi, încercăm să folosim metoda `.push` pe `newList`. Deoarece `newList` este o valoare numerică `4`, nu putem folosi metoda `.push` se va genera o eroare de tip TypeError.

</p>
</details>

---

###### 92. Care este rezultatul?

```javascript
function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Funcțiile obișnuite, cum ar fi funcția `giveLydiaPizza` au o proprietate `prototype` care este un obiect (obiectul prototip) cu o proprietate `constructor`. Cu toate acestea, funcțiile arrow, cum ar fi funcția `giveLydiaChocolate`, nu au această proprietate `prototype`. `undefined` este returnat atunci când încearca să acceseze proprietatea `prototype` folosind `giveLydiaChocolate.prototype`.

</p>
</details>

---

###### 93. Care este rezultatul?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` și `age` `21`
- B: `["name", "Lydia"]` și `["age", 21]`
- C: `["name", "age"]` și `undefined`
- D: `Error`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

`Object.entries(person)` returnează un array de array-uri imbricate, care conțin cheile și obiectele:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

Folosind bucla `for-of` putem itera prin fiecare element din array, în acest caz, subarray-urile. Putem dezasambla subarray-urile instantaneu în bucla `for-of`, folosind `const [x, y]`. Astfel, `x` este egal cu primul element din subarray, iar `y` este egal cu al doilea element din subarray.

Primul subarray este `[ "name", "Lydia" ]`, cu `x` egal cu `"name"`, și `y` egal cu `"Lydia"`, care sunt afișate în jurnal.
Al doilea subarray este `[ "age", 21 ]`, cu `x` egal cu `"age"`, și `y` egal cu `21`, care sunt afișate în jurnal.

</p>
</details>

---

###### 94. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

`...args`  este un parametru rest. Valoarea parametrului rest este un array care conține toate argumentele rămase și **poate fi doar ultimul parametru**! În acest exemplu, parametrul rest era al doilea parametru. Acest lucru nu este posibil și va genera o eroare de sintaxă.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
```

Exemplul de mai sus funcționează. Acesta returnează array-ul `[ 'banana', 'apple', 'orange', 'pear' ]`

</p>
</details>

---

###### 95. Care este rezultatul?

```javascript
function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- A: `a is bigger`, `6` și `b is bigger`, `3`
- B: `a is bigger`, `undefined` și `b is bigger`, `undefined`
- C: `undefined` și `undefined`
- D: `SyntaxError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

În JavaScript, nu _trebuie_ să scriem explicit semnul punct și virgulă (`;`) totuși motorul JavaScript le adaugă automat după instrucțiuni. Acest lucru se numește **Inserția Automată a Semnelor de Punct și Virgulă**. O instrucțiune poate fi, de exemplu, variabile sau cuvinte cheie precum `throw`, `return`, `break`, etc.

Aici, am scris o instrucțiune `return` și o altă valoare `a + b` pe o _linie nouă_. Cu toate acestea, deoarece este o linie nouă, motorul JavaScript nu știe că este de fapt valoarea pe care am dorit să o returnăm. În schimb, a adăugat automat un punct și virgulă după `return`. Puteți vedea acest lucru ca:

```javascript
return;
a + b;
```

Acest lucru înseamnă că `a + b` nu este niciodată atins, deoarece o funcție se oprește din executare după cuvântul cheie `return`. Dacă nu se returnează nicio valoare, așa cum se întâmplă aici, funcția returnează `undefined`. Rețineți că nu există inserție automată a semnelor de punct și virgulă după instrucțiunile `if/else`!

</p>
</details>

---

###### 96. Care este rezultatul?

```javascript
class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Putem seta clasele egale cu alte clase sau constructori de funcții. În acest caz, am setat `Person` egal cu `AnotherPerson`. Numele în acest constructor este `Sarah`, astfel încât proprietatea `Person` de pe noua instanță `member` este `"Sarah"`.

</p>
</details>

---

###### 97. Care este rezultatul?

```javascript
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` și `["{Symbol('a')"]`
- B: `{}` și `[]`
- C: `{ a: "b" }` și `["a"]`
- D: `{Symbol('a'): 'b'}` și `[]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Un simbol nu este _enumerabil_. Metoda `Object.keys` returnează toate proprietățile cheie _enumerabil_ ale unui obiect. Simbolul nu va fi vizibil, și va fi returnat un array gol. Atunci când se afișează întregul obiect, vor fi vizibile toate proprietățile, inclusiv cele care nu sunt enumerate.

Asta este una dintre multele calități ale unui simbol: pe lângă faptul că reprezintă o valoare complet unică (ceea ce previne coliziunile accidentale de nume pe obiecte, de exemplu, atunci când lucrați cu două biblioteci care doresc să adauge proprietăți la același obiect), puteți "ascunde" proprietăți pe obiecte în acest fel (deși nu în întregime. Încă puteți accesa simbolurile folosind metoda `Object.getOwnPropertySymbols()`).

</p>
</details>

---

###### 98. Care este rezultatul?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` și `SyntaxError`
- B: `[1, [2, 3, 4]]` și `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` și `{ name: "Lydia", age: 21 }`
- D: `Error` și `{ name: "Lydia", age: 21 }`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Funcția `getList` primește un array ca argument. Între parantezele funcției `getList` dezasamblăm acest array imediat. Puteți vedea acest lucru ca:

`[x, ...y] = [1, 2, 3, 4]`

Cu ajutorul parametrului rest `...y`, punem toți "parametrii rămași" într-un array. Parametrii rămași în acest caz sunt `2`, `3` și `4`. Valoarea lui `y` este un array care conține toți parametrii rămași. Valoarea lui `x` este egal cu `1` în acest caz, deci când afișăm `[x, y]`, va fi afișat `[1, [2, 3, 4]]`.

Funcția `getUser` primește un obiect ca argument. Cu funcțiile arrow, nu _trebuie_ să scriem acolade dacă dorim să returnăm doar o valoare. Cu toate acestea, dacă doriți să returnați instantaneu un _obiect_ dintr-o funcție arrow, trebuie să-l scrieți între paranteze. Altfel, tot ce este între acolade va fi interpretat ca o instrucțiune bloc. În acest caz, codul dintre acolade nu este un cod JavaScript valid, așa că se va genera o eroare de sintaxă `SyntaxError`. 

Funcția următoare ar fi returnat un obiect:

`const getUser = user => ({ name: user.name, age: user.age })`

</p>
</details>

---

###### 99. Care este rezultatul?

```javascript
const name = 'Lydia';

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Variabila `name` conține o valoare de tip șir de caractere (string), care nu este o funcție și, prin urmare, nu poate fi invocată.

TypeError-urile sunt generate atunci când o valoare nu este de tipul așteptat. JavaScript e aștepta ca `name` să fie o funcție, deoarece încercăm să o apelăm. Cu toate acestea, era de tip șir de caractere (string), așa că a generat o eroare de tip TypeError: name nu este o funcție!

SyntaxError-urile sunt generate atunci când ați scris ceva care nu este JavaScript valid, de exemplu, atunci când ați scris cuvântul `return` ca `retrun`.
ReferenceError-urile sunt generate atunci când JavaScript nu poate găsi o referință la o valoare la care încercați să accesați.

</p>
</details>

---

###### 100. Care este valoarea lui output?

```javascript
// 🎉✨ Aceasta este a 100-a mea întrebare! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

`[]` este o valoare adevărată (truthy). Cu operatorul `&&` valoarea din partea dreaptă va fi returnată dacă valoarea din partea stângă este adevărată. În acest caz, valoarea din partea stângă, `[]` este adevărată, astfel că se va returna `"Im'`.

`""` este o valoare falsă (falsy). Dacă valoarea din partea stângă este falsă, nu se returnează nimic. `n't` nu va fi returnat.

</p>
</details>

---

###### 101. Care este valoarea ieșirii?

```javascript
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu operatorul  `||` utem returna primul operand adevărat (truthy). Dacă toate valorile sunt false, se va returna ultimul operand.

`(false || {} || null)`: obiectul go `{}` este o valoare adevărată (truthy). Aceasta este prima (și singura) valoare adevărată, care este returnată. `one` este egal cu `{}`.

`(null || false || "")`: toate operanzii sunt valori false. Acest lucru înseamnă că ultimul operand `""` este returnat. `two` este egal cu `""`.

`([] || 0 || "")`: array-ul gol `[]` este o valoare adevărată (truthy). Aceasta este prima valoare adevărată, care este returnată. `three` este egal cu `[]`.

</p>
</details>

---

###### 102. Care este valoarea ieșirii?

```javascript
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();
```

- A: `I have resolved!`, `second` și `I have resolved!`, `second`
- B: `second`, `I have resolved!` și `second`, `I have resolved!`
- C: `I have resolved!`, `second` și `second`, `I have resolved!`
- D: `second`, `I have resolved!` și `I have resolved!`, `second`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Cu o promisiune, spunem în principiu _Vreau să execut această funcție, dar o pun deoparte pentru moment în timp ce rulează, deoarece acest lucru poate dura ceva timp. Doar atunci când o anumită valoare este rezolvată (sau respinsă), și atunci când stiva de apeluri este goală, doresc să folosesc această valoare._

Putem obține această valoare atât cu `.then` cât și cu cuvântul cheie `await` într-o funcție `async`. Cu toate că putem obține valoarea unei promisiuni cu ambele metode `.then` și `await`, ele funcționează puțin diferit.

În `firstFunction`, am pus (într-un fel) funcția `myPromise` deoparte în timp ce aceasta se executa, dar am continuat să executăm restul codului, care este `console.log('second')` în acest caz. Apoi, funcția a fost rezolvată cu șirul `I have resolved`, care a fost apoi înregistrat în jurnal după ce s-a constatat că stiva de apeluri era goală.

Cu cuvântul cheie `await` în `secondFunction`, efectiv pauzăm execuția unei funcții asincrone până când valoarea a fost rezolvată înainte de a trece la următoarea linie.

Acest lucru înseamnă că a așteptat ca `myPromise` să fie rezolvat cu valoarea `I have resolved`, și doar după ce s-a întâmplat acest lucru, s-a trecut la următoarea linie: a fost înregistrat `second`.

</p>
</details>

---

###### 103. Care este valoarea ieșirii?

```javascript
const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[object Object]2`
- D: `"12"`, `Lydia2`, `[object Object]2`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Operatorul `+` nu este folosit doar pentru adunarea valorilor numerice, ci îl putem utiliza și pentru concatenarea șirurilor de caractere. Ori de câte ori motorul JavaScript observă că una sau mai multe valori nu sunt de tip număr, va converti numărul într-un șir de caractere.

Primul operand este `1`, care este o valoare numerică. `1 + 2` returnează numărul 3.

Cu toate acestea, al doilea operand este un șir de caractere `"Lydia"`. `"Lydia"` este un șir de caractere și `2` este un număr: `2` este convertit într-un șir de caractere. `"Lydia"` și `"2"` sunt concatenate, rezultând șirul de caractere `"Lydia2"`.

`{ name: "Lydia" }` este un obiect. Niciun număr, niciun obiect nu este un șir de caractere, astfel că sunt convertite în șiruri. Ori de câte ori convertim un obiect regulat în șir de caractere, devine `"[object Object]"`. `"[object Object]"` concatenat cu `"2"` devine `"[object Object]2"`.

</p>
</details>

---

###### 104. Care este rezultatul?

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Putem pasa orice tip de valoare dorim către `Promise.resolve`, fie o promisiune, fie o valoare non-promisiune. Metoda în sine returnează o promisiune cu valoarea rezolvată (`<fulfilled>`). Dacă pasați o funcție regulată, va fi o promisiune rezolvată cu o valoare regulată. Dacă pasați o promisiune, va fi o promisiune rezolvată cu valoarea rezolvată a promisiunii respective pasate.

În acest caz, am pasat doar valoarea numerică `5`. Aceasta returnează o promisiune rezolvată cu valoarea `5`.

</p>
</details>

---

###### 105. Care este rezultatul?

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };

compareMembers(person);
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Obiectele sunt pasate prin referință. Atunci când verificăm obiecte pentru egalitate strictă (`===`), comparăm referințele lor.

Am setat valoarea implicită pentru `person2` egală cu obiectul `person` și am pasat obiectul `person` ca valoare pentru `person1`.

Acest lucru înseamnă că ambele valori au o referință către aceeași locație în memorie, astfel că sunt egale.

Blocul de cod din instrucțiunea `else` se execută, și este înregistrat mesajul`They are the same!`.

</p>
</details>

---

###### 106. Care este rezultatul?

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

În JavaScript, avem două moduri de a accesa proprietăți pe un obiect: notare cu paranteze pătrate sau notare cu punct. În acest exemplu, folosim notarea cu punct (`colorConfig.colors`) în loc de notarea cu paranteze pătrate  (`colorConfig["colors"]`).

Cu notarea cu punct, JavaScript încearcă să găsească proprietatea pe obiect cu exact același nume. În acest exemplu, JavaScript încearcă să găsească o proprietate numită `colors` pe obiectul `colorConfig`. Nu există o proprietate numită `colors`, așa că acest lucru returnează `undefined`. Apoi, încercăm să accesăm valoarea primului element folosind `[1]`. Nu putem face acest lucru pe o valoare care este `undefined`, astfel că se generează o eroare de tip `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interpretează (sau deschide) declarațiile. Atunci când folosim notația cu paranteze pătrate, vede prima paranteză deschisă `[` și continuă până găsește paranteza de închidere `]`. Abia atunci va evalua declarația. Dacă am fi folosit `colorConfig[colors[1]]`, ar fi returnat valoarea proprietății `red` pe obiectul `colorConfig`.

</p>
</details>

---

###### 107. Care este rezultatul?

```javascript
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

În culise, emoji-urile sunt reprezentate ca coduri Unicode. Codurile Unicode pentru emoji-ul inimii sunt `"U+2764 U+FE0F"`. Acestea sunt întotdeauna aceleași pentru aceleași emoji-uri, așa că comparăm două șiruri identice între ele, ceea ce returnează

</p>
</details>

---

###### 108. Care dintre aceste metode modifică array-ul original?

```javascript
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- A: `Toate`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Cu metoda `splice` mmodificăm array-ul original prin ștergerea, înlocuirea sau adăugarea de elemente. În acest caz, am eliminat 2 elemente de la indexul 1 (am eliminat `'🥑'` și `'😍'`) și am adăugat emoji-ul ✨ în locul lor.

`map`, `filter` și `slice` returnează un nou array, `find` returnează un element, ia `reduce` returnează o valoare redusă.

</p>
</details>

---

###### 109. Care este rezultatul?

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Am setat valoarea proprietății `favoriteFood` pe obiectul `info` egal cu șirul de caractere cu emoji-ul de pizza, `'🍕'`. Un șir de caractere este un tip de date primitiv. În JavaScript, tipurile de date primitive nu interacționează prin referință.

În JavaScript, tipurile de date primitive (tot ceea ce nu este obiect) interacționează prin _valoare_. În acest caz, am setat valoarea proprietății `favoriteFood` pe obiectul `info` egală cu valoarea primului element din array-ul `food` care este un șir de caractere cu emoji-ul de pizza în acest caz (`'🍕'`). Un șir de caractere este un tip de date primitiv și interacționează prin valoare (vedeți [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) meu dacă doriți să aflați mai multe).

Apoi, schimbăm valoarea proprietății `favoriteFood` pe obiectul `info`. Array-ul `food` nu s-a schimbat, deoarece valoarea `favoriteFood` era doar o _copie_ a valorii primului element din array și nu are o referință la aceeași locație în memorie ca elementul din `food[0]`. Când înregistrăm array-ul `food`, acesta rămâne neschimbat, `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. Ce face această metodă?

```javascript
JSON.parse();
```

- A: Parcurge JSON-ul pentru a obține o valoare JavaScript
- B: Parcurge un obiect JavaScript pentru a obține un JSON
- C: Parcurge orice valoare JavaScript într-un JSON
- D: Parcurge doar JSON-ul într-un obiect JavaScript

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Cu metoda `JSON.parse()` putem parsa un șir JSON într-o valoare JavaScript.

```javascript
// Transformarea unui număr într-un JSON valid, apoi parsarea șirului JSON într-o valoare JavaScript:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Transformarea unei valori de tip array într-un JSON valid, apoi parsarea șirului JSON într-o valoare JavaScript:
const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Transformarea unui obiect într-un JSON valid, apoi parsarea șirului JSON într-o valoare JavaScript:
const jsonArray = JSON.stringify({ name: 'Lydia' }); // '{"name":"Lydia"}'
JSON.parse(jsonArray); // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. Care este rezultatul?

```javascript
let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Fiecare funcție are propriul său _context de execuție_ (sau _domeniu_). Funcția `getName` caută mai întâi în propriul său context (domeniu) pentru a vedea dacă conține variabila `name` pe care încercăm să o accesăm. În acest caz, funcția `getName` conține propria sa variabilă `name` declarăm variabila `name` cu cuvântul cheie `let`, și cu valoarea `'Sarah'`.

Variabilele declarate cu cuvântul cheie `let` (și `const`) sunt hoisted, dar, spre deosebire de `var`, nu sunt <i>inițializate</i>. Ele nu sunt accesibile înainte de linia în care le declarăm (inițializăm). Acest lucru se numește "zona temporală moartă" (temporal dead zone). Atunci când încercăm să accesăm variabilele înainte de a fi declarate, JavaScript aruncă o eroare de tip `ReferenceError`.

Dacă nu am fi declarat variabila `name` în interiorul funcției `getName` motorul JavaScript ar fi căutat în josul lanțului de _domenii_. Domeniul exterior are o variabilă numită `name` cu valoarea `Lydia`. În acest caz, ar fi afișat `Lydia`.

```javascript
let name = 'Lydia';

function getName() {
  console.log(name);
}

getName(); // Lydia
```

</p>
</details>

---

###### 112. Care este rezultatul?

```javascript
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

- A: `a` și `a`
- B: `a` și `undefined`
- C: `['a', 'b', 'c']` și `a`
- D: `a` și `['a', 'b', 'c']`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu cuvântul cheie `yield`, cedăm valorile într-o funcție generator. Cu cuvântul cheie `yield*`, putem ceda valori dintr-o altă funcție generator sau dintr-un obiect iterabil (de exemplu, un array).

În `generatorOne`, folosim cuvântul cheie `yield` pentru a ceda intrega mulțime `['a', 'b', 'c']`. Valoarea proprietății `value` a obiectului returnat de metoda `next` pe obiectul `one` (`one.next().value`) este egală cu întregul array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

În `generatorTwo`, folosim cuvântul cheie `yield*`. Acest lucru înseamnă că prima valoare cedată din `two`, este egală cu prima valoare cedată din iterator. Iteratorul este mulțimea `['a', 'b', 'c']`. Prima valoare cedată este `a`, așa că prima dată când apelăm `two.next().value`, este returnată valoarea  `a`.

```javascript
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</p>
</details>

---

###### 113. Care este rezultatul?

```javascript
console.log(`${(x => x)('I love')} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Expresiile din șirurile șablon (template literals) sunt evaluate mai întâi. Acest lucru înseamnă că șirul va conține valoarea returnată de expresie, funcția imediat invocată `(x => x)('I love')` în acest caz. Trecem valoarea `'I love'` ca argument către funcția arrow `x => x`. `x` este egal cu `'I love'`, care este returnată. Aceasta duce la rezultatul `I love to program`.

</p>
</details>

---

###### 114. Ce se va întâmpla?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- A: Funcția de callback a `setInterval` nu va fi invocată
- B: Funcția de callback a `setInterval` este invocată o singură dată
- C: Funcția de callback a `setInterval` va fi totuși apelată în fiecare secundă
- D: Nu am apelat niciodată `config.alert()`, config este `null`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

În mod normal, atunci când setăm obiecte egal cu `null`, acele obiecte sunt _colectate de gunoi_ (garbage collected), deoarece nu mai există nicio referință către acel obiect. Cu toate acestea, deoarece funcția de callback din `setInterval` este o funcție arrow (și, prin urmare, legată de obiectul `config`), funcția de callback încă menține o referință la obiectul  `config`. 
Atâta timp cât există o referință, obiectul nu va fi colectat de gunoi (garbage collected). 
Deoarece aceasta este o intervală de timp, setarea lui `config` la `null` sau `delete` lui `config.alert` nu va colecta intervalul de gunoi și intervalul va continua să fie apelat.
Pentru a-l opri și a-l elimina din memorie, trebuie să folosiți `clearInterval(config.alert)`.
Deoarece acest lucru nu a fost făcut, funcția de callback a `setInterval` va fi în continuare invocată la fiecare 1000 ms (1 secundă).

</p>
</details>

---

###### 115. Ce metodă(e) va returna valoarea `'Hello world!'`?

```javascript
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

//1
myMap.get('greeting');
//2
myMap.get(myFunc);
//3
myMap.get(() => 'greeting');
```

- A: 1
- B: 2
- C: 2 și 3
- D: Toate

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Când adăugăm o pereche cheie/valoare folosind metoda `set`, cheia va fi valoarea primului argument transmis funcției `set`, iar valoarea va fi cea de-a doua valoare transmisă funcție `set`. Cheia în acest caz este _funcția_ `() => 'greeting'`, iar valoarea `'Hello world'`. `myMap` este acum `{ () => 'greeting' => 'Hello world!' }`.

1 este incorect pentru că cheia nu este `'greeting'` ci `() => 'greeting'`.
3 este incorect pentru că creăm o nouă funcție prin transmiterea ei ca parametru către metoda `get`. Obiectele interacționează prin _referință_. Funcțiile sunt obiecte, motiv pentru care două funcții nu sunt niciodată strict egale, chiar dacă sunt identice: ele au o referință către un loc diferit în memorie.

</p>
</details>

---

###### 116. Care este rezultatul?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Ambele funcții `changeAge` și `changeAgeAndName` au un parametru implicit, și anume un obiect _nou_ creat `{ ...person }`. Acest obiect conține copii ale tuturor cheilor/valorilor din obiectul `person`.

În primul rând, apelăm funcția `changeAge` și transmitem obiectul `person` ca argument. Această funcție crește valoarea proprietății `age` cu 1. `person` devine `{ name: "Lydia", age: 22 }`.

Apoi, apelăm funcția `changeAgeAndName`, însă nu transmitem un parametru. În schimb, valoarea lui `x` este egală cu un obiect _nou_: `{ ...person }`. Deoarece este un obiect nou, acesta nu afectează valorile proprietăților din obiectul `person`. `person` rămâne egal cu `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### 117. Care dintre opțiunile următoare va returna `6`?

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu operatorul spread `...`, putem _răspândi_ obiecte iterabile în elemente individuale. Funcția `sumValues` primește trei argumente: `x`, `y` și `z`. `...[1, 2, 3]` va rezulta în `1, 2, 3`, pe care le transmitem funcției `sumValues`.

</p>
</details>

---

###### 118. Care este rezultatul?

```javascript
let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu operandul `+=` incrementăm valoarea lui `num` cu `1`. Inițial, `num` avea valoarea `1`, deci `1 + 1` este `2`. Elementul de pe al doilea index în mulțimea `list` este 🥰, `console.log(list[2])` va afișa 🥰.

</p>
</details>

---

###### 119. Care este rezultatul?

```javascript
const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```

- A: `undefined` `undefined` `undefined` `undefined`
- B: `Mara` `undefined` `Lydia Hallie` `ReferenceError`
- C: `Mara` `null` `Lydia Hallie` `null`
- D: `null` `ReferenceError` `null` `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu operatorul de verificare opțională `?.`, nu mai este necesar să verificăm explicit dacă valorile mai profunde încorporate sunt valide sau nu. Dacă încercăm să accesăm o proprietate pe o valoare `undefined` sau `null` valoarea (_nullish_), expresia face un scurtcircuit și returnează `undefined`.

`person.pet?.name`: `person` are o proprietate numită `pet`: `person.pet` nu este `nullish`. Are o proprietate numită `name`, și returnează `Mara`.
`person.pet?.family?.name`: `person` are o proprietate numită `pet`: `person.pet` nu este `nullish`. `pet` _nu_ are o proprietate numită `family`, `person.pet.family` este `nullish`. Expresia returnează `undefined`.
`person.getFullName?.()`: `person` are o proprietate `getFullName`: `person.getFullName()` nu este `nullish` și poate fi invocată, care returnează `Lydia Hallie`.
`member.getLastName?.()`: variabila `member` nu există, prin urmare se va genera o excepție de tip `ReferenceError` gets thrown!

</p>
</details>

---

###### 120. Care este rezultatul?

```javascript
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Am trecut condiția `groceries.indexOf("banana")` în instrucțiunea `if`. `groceries.indexOf("banana")` returnează `0`, care este o valoare falsă. Deoarece condiția din instrucțiunea `if` este falsă, se execută codul din blocul `else`, și `We don't have to buy bananas!` se afișează.

</p>
</details>

---

###### 121. Care este rezultatul?

```javascript
const config = {
  languages: [],
  set language(lang) {
    return this.languages.push(lang);
  },
};

console.log(config.language);
```

- A: `function language(lang) { this.languages.push(lang }`
- B: `0`
- C: `[]`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Metoda `language` este un `setter`. Setter-urile nu rețin o valoare reală; scopul lor este să _modifice_ proprietăți. Atunci când apelați o metodă `setter`, aceasta va returna `undefined`.

</p>
</details>

---

###### 122. Care este rezultatul?

```javascript
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

`typeof name` returnează `"string"`. Șirul de caractere `"string"` este o valoare adevărată (truthy), așa că `!typeof name` returnează valoarea booleană `false`. `false === "object"` și `false === "string"` ambele returnează `false`.

(Dacă dorim să verificăm dacă tipul este (ne)egal cu un anumit tip, ar trebui să folosim `!==` în loc de `!typeof`)

</p>
</details>

---

###### 123. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Funcția `add` returnează o funcție arrow, care returnează o altă funcție arrow, care la rândul ei returnează o altă funcție arrow (încă sunteți cu mine?). Prima funcție primește un argument `x` cu valoarea `4`. Apelăm a doua funcție, care primește un argument `y` cu valoarea `5`. Apoi apelăm a treia funcție, care primește un argument `z` cu valoarea `6`. Când încercăm să accesăm valorile `x`, `y` și `z` în ultima funcție arrow, motorul JavaScript urcă lanțul de domenii pentru a găsi valorile pentru `x` și `y` în consecință. Aceasta returnează `4` `5` `6`.

</p>
</details>

---

###### 124. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Funcția generator `range` returnează un obiect asincron cu promisiuni pentru fiecare element din intervalul pe care îl transmitem: `Promise{1}`, `Promise{2}`, `Promise{3}`. Setăm variabila `gen` egală cu obiectul asincron, după care facem o buclă peste el folosind o buclă `for await ... of`. Setăm variabila `item` eegală cu valorile promisiunilor returnate: mai întâi `Promise{1}`, apoi `Promise{2}`, apoi `Promise{3}`. Deoarece _așteptăm_ valoarea lui `item`, adică promisiunea rezolvată, _valorile_ rezolvate ale promisiunilor sunt returnate: `1`, `2`, apoi `3`.

</p>
</details>

---

###### 125. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

`myFunc` așteaptă ca argument un obiect cu proprietățile `x`, `y` și `z`. Deoarece transmitem doar trei valori numerice separate (1, 2, 3) în loc de un obiect cu proprietățile `x`, `y` și `z` ({x: 1, y: 2, z: 3}), `x`, `y` și `z` primesc valoarea lor implicită, care este `undefined`.

</p>
</details>

---

###### 126. Care este rezultatul?

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

  return `Șoferul a condus ${formattedSpeed} și trebuie să plătească ${formattedAmount}`;
}

console.log(getFine(130, 300))
```

- A: Șoferul a condus 130 și trebuie să plătească 300
- B: Șoferul a condus 130 mph și trebuie să plătească \$300.00
- C: Șoferul a condus undefined și trebuie să plătească undefined
- D: Șoferul a condus 130.00 și trebuie să plătească 300.00

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu metoda `Intl.NumberFormat` putem formata valorile numerice în orice locație. Formatez valoarea numerică `130` pentru locația `en-US` ca o `unitate` în `mile-per-hour`, ceea ce rezultă în `130 mph`. Valoarea numerică `300` pentru locația `en-US` ca `monedă` în `USD` rezultă în `$300.00`.

</p>
</details>

---

###### 127. Care este rezultatul?

```javascript
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Prin destrucțurarea obiectelor, putem extrage valorile din obiectul din partea dreaptă și le atribui valorii cu același nume de proprietate din obiectul din partea stângă. În acest caz, atribuim valoarea "💀" lui `spookyItems[3]`. Acest lucru înseamnă că modificăm array-ul `spookyItems`, adăugăm "💀" la el. La afișarea în consolă a lui `spookyItems`, se va afișa `["👻", "🎃", "🕸", "💀"]`.

</p>
</details>

---

###### 128. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu metoda `Number.isNaN` puteți verifica dacă valoarea pe care o transmiteți este o _valoare numerică_ și este egală cu `NaN`. `name` nu este o valoare numerică, așa că `Number.isNaN(name)` returnează `false`. `age` este o valoare numerică, dar nu este egală cu `NaN`, astfel că `Number.isNaN(age)` returnează `false`.

Cu metoda `isNaN` puteți verifica dacă valoarea pe care o transmiteți nu este un număr. `name` nu este un număr, așa că `isNaN(name)` returnează `true`. `age` este un număr, astfel că `isNaN(age)` returnează `false`.

</p>
</details>

---

###### 129. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Variabilele declarate cu cuvântul cheie `const` nu pot fi referite înainte de inițializare: acest lucru se numește _zona temporală moartă_ (temporal dead zone). În funcția `getInfo`, variabila`randomValue` este de domeniu în domeniul funcțional al funcției `getInfo`. Pe linia în care dorim să afișăm valoarea `typeof randomValue`, variabila `randomValue` nu este încă inițializată: se va genera o eroare de tip `ReferenceError`! Motorul nu a căutat în josul lanțului de domenii deoarece am declarat variabila `randomValue` în funcția `getInfo`.

</p>
</details>

---

###### 130. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

În blocul `try`  înregistrăm valoarea așteptată a variabilei `myPromise`: `"Woah some cool data"`. Deoarece nu s-au generat erori în blocul `try` codul din blocul `catch` nu se execută. Codul din blocul `finally` se execută _întotdeauna_, și se va afișa `"Oh finally!"`.

</p>
</details>

---

###### 131. Care este rezultatul?

```javascript
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cu metoda `flat` putem crea un nou array aplatizat. Adâncimea array-ului aplatizat depinde de valoarea pe care o transmitem. În acest caz, am transmis valoarea `1` (care nu era necesară, deoarece aceasta este valoarea implicită), ceea ce înseamnă că vor fi concatenate doar array-urile de pe primul nivel de adâncime. `['🥑']` și `['✨', '✨', ['🍕', '🍕']]`. Concatenarea acestor două array-uri rezultă în `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### 132. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

`counterOne` este o instanță a clasei `Counter`. Clasa `Counter` conține o proprietate `count` în constructorul său și o metodă `increment`. Mai întâi, am invocat metoda `increment` de două ori, apelând `counterOne.increment()`. În prezent, `counterOne.count` este `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Apoi, creăm o nouă variabilă `counterTwo`, și o setăm egală cu `counterOne`. Deoarece obiectele interacționează prin referință, creăm doar o nouă referință către același loc în memorie la care indică `counterOne`. Deoarece au același loc în memorie, orice modificări făcute asupra obiectului la care `counterTwo` are o referință se aplică și la `counterOne`. În prezen, `counterTwo.count` este `2`.

Apelăm `counterTwo.increment()`, ceea ce setează `count` la `3`. Apoi, afișăm valoarea lui `counterOne`, ceea ce va afișa `3`.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. Care este rezultatul?

```javascript
const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));
  console.log('Last line 1!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`)
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
}

funcOne();
funcTwo();
```

- A: `Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`
- B: `Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! `
- C: `Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`
- D: `Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

În primul rând, apelăm `funcOne`. Pe prima linie a lui `funcOne`, apelăm funcția _asincronă_ `setTimeout`, din care funcția de apel se trimite către API-ul Web. (vezi articolul meu despre bucla evenimentelor <a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif">aici</a>.)

Apoi apelăm promisiunea `myPromise` care este o operațiune _asincronă_.

Ambele promisiuni și întârzierile (timeout) sunt operațiuni asincrone, iar funcția continuă să ruleze în timp ce finalizează promisiunea și gestionează apelul de întârziere `setTimeout`. Acest lucru înseamnă că se va afișa mai întâi `Last line 1!`, deoarece aceasta nu este o operațiune asincronă. 

Deoarece stiva de apel nu este încă goală, funcția `setTimeout` și promisiunea din `funcOne` nu pot fi adăugate încă la stiva de apel.

În `funcTwo`, variabila `res` primește o `Promise` pentru că `Promise.resolve(Promise.resolve('Promise'))` este echivalent cu `Promise.resolve('Promise')` deoarece rezolvarea unei promisiuni rezolvă doar valoarea acesteia. Cuvântul cheie `await` din această linie oprește execuția funcției până când primește rezoluția promisiunii și apoi continuă să ruleze sincron până la finalizare, așa că sunt afișate `Promise 2!` apoi `Last line 2!` iar apelul `setTimeout` este trimis către API-ul Web.

Apoi stiva de apel este goală. Promisiunile sunt _microtask-uri_ astfel că sunt rezolvate în primul rând atunci când stiva de apel este goală, așa că se afișează `Promise 1!`.

Acum, deoarece `funcTwo` pa fost scoasă din stiva de apel, stiva de apel este goală. Callback-urile așteptând în coadă (`() => console.log("Timeout 1!")` din `funcOne`, și `() => console.log("Timeout 2!")` din `funcTwo`) sunt adăugate pe stivă unul câte unul. Primul callback afișează `Timeout 1!`, și este eliminat din stivă. Apoi, al doilea callback afișează `Timeout 2!`, și este eliminat din stivă.

</p>
</details>

---

###### 134. Cum putem apela funcția `sum` în `sum.js` din `index.js`?

```javascript
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';
```

- A: `sum(4)`
- B: `sum.sum(4)`
- C: `sum.default(4)`
- D: Exporturile implicite nu sunt importate cu `*`, doar exporturile numite

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu asteriscul `*`, importăm toate valorile exportate din acel fișier, atât exporturile implicite, cât și cele numite. Dacă avem următorul fișierȘ

```javascript
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
console.log(info);
```

Acesta ar fi rezultatul înregistrărilor:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

Pentru exemplul cu funcția `sum`, înseamnă că valoarea importată `sum` arată în felul următor:

```javascript
{ default: function sum(x) { return x + x } }
```

Putem invoca această funcție, apelând `sum.default`

</p>
</details>

---

###### 135. Care este rezultatul?

```javascript
const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};

const person = new Proxy({}, handler);

person.name = 'Lydia';
person.name;
```

- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: Nu se înregistrează nimic

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Cu un obiect Proxy, putem adăuga comportament personalizat unui obiect pe care îl transmitem ca al doilea argument. În acest caz, transmitem obiectul `handler` care conține două proprietăți: `set` și `get`. `set` este invocată ori de câte ori _set_ (setăm) valori de proprietate, `get` este invocată ori de câte ori _get_ (accesăm) valori de proprietate.

Primul argument este un obiect gol `{}`, care este valoarea lui `person`. La acest obiect, se adaugă comportamentul personalizat specificat în obiectul `handler`. Dacă adăugăm o proprietate la obiectul `person`, `set` va fi invocată. Dacă accesăm o proprietate a obiectului `person`, `get` va fi invocată.

În primul rând, am adăugat o nouă proprietate `name` la obiectul proxy (`person.name = "Lydia"`). `set` este invocată și înregistrează mesajul `"Added a new property!"`.

Then, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.

</p>
</details>

---

###### 136. Care dintre următoarele va modifica obiectul `person`?

```javascript
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Cu `Object.seal` putem preveni _adăugarea_ de noi proprietăți sau _eliminarea_ proprietăților existente.

Cu toate acestea, puteți încă să modificați valoarea proprietăților existente.

</p>
</details>

---

###### 137. Care dintre următoarele va modifica obiectul `person`?

```javascript
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Metoda `Object.freeze` _îngheață_ un obiect. Nu se pot adăuga, modifica sau elimina proprietăți.

Cu toate acestea, aceasta îngheață obiectul doar în mod _superficial_, ceea ce înseamnă că numai proprietățile _directe_ ale obiectului sunt înghețate. Dacă proprietatea este un alt obiect, cum ar fi `address` în acest caz, proprietățile de pe acel obiect nu sunt înghețate și pot fi modificate.

</p>
</details>

---

###### 138. Care este rezultatul?

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` și `3` `6`
- B: `2` `NaN` și `3` `NaN`
- C: `2` `Error` și `3` `6`
- D: `2` `4` și `3` `Error`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

În primul rând, am apelat `myFunc()` fără a transmite niciun argument. Deoarece nu am transmis argumente, `num` și `value` au primit valorile lor implicite: `num` este `2`, și `value` este valoarea returnată de funcția `add`. Funcției `add` îi transmitem `num` ca argument, care avea valoarea `2`. `add` returnează `4`, care este valoarea lui `value`.

Apoi, am apelat `myFunc(3)` și am transmis valoarea `3` ca valoare pentru argumentul `num`. Nu am transmis un argument pentru `value`. Deoarece nu am transmis o valoare pentru argumentul `value` acesta a primit valoarea implicită: valoarea returnată de funcția `add`. Funcției `add`, îi transmitem `num`, care are valoarea `3`. `add` returnează `6`, care este valoarea lui `value`.

</p>
</details>

---

###### 139. Care este rezultatul?

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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

În ES2020, putem adăuga variabile private în clase folosind simbolul `#`. Nu putem accesa aceste variabile în afara clasei. Atunci când încercăm să înregistrăm `counter.#number`, se aruncă o eroare de sintaxă (SyntaxError): nu putem accesa această variabilă în afara clasei `Counter`!

</p>
</details>

---

###### 140. Ce lipsește?

```javascript
const teams = [
  { name: 'Team 1', members: ['Paul', 'Lisa'] },
  { name: 'Team 2', members: ['Laura', 'Tim'] },
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

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Pentru a itera prin `membrii` din fiecare element din array-ul `members` trebuie să transmitem `teams[i].members` către funcția generator `getMembers`. Funcția generator returnează un obiect generator. Pentru a itera prin fiecare element din acest obiect generator, trebuie să folosim `yield*`.

Dacă am fi scris `yield`, `return yield`, sau `return`, întreaga funcție generator ar fi fost returnată prima dată când am apelat metoda `next`.

</p>
</details>

---

###### 141. Care este rezultatul?

```javascript
const person = {
  name: 'Lydia Hallie',
  hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby('running', []);
addHobby('dancing');
addHobby('baking', person.hobbies);

console.log(person.hobbies);
```

- A: `["coding"]`
- B: `["coding", "dancing"]`
- C: `["coding", "dancing", "baking"]`
- D: `["coding", "running", "dancing", "baking"]`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Funcția `addHobby` primește două argumente, `hobby` și `hobbies` cu valoarea implicită a array-ului `hobbies` din obiectul `person`.

În primul rând, apelăm funcția `addHobby`, și transmitem `"running"` ca valoare pentru `hobby` și un array gol ca valoare pentru `hobbies`. Deoarece transmitem un array gol ca valoare pentru `hobbies`, `"running"` este adăugat la acest array gol.

Apoi, apelăm funcția `addHobby` și transmitem `"dancing"` ca valoare pentru `hobby`. Nu am transmis o valoare pentru `hobbies`, astfel că aceasta primește valoarea implicită, adică proprietatea `hobbies` din obiectul `person`. Adăugăm hobby-ul `dancing` în array-ul `person.hobbies`.

În final, apelăm funcția `addHobby`, și transmitem `"baking"` ca valoare pentru `hobby`, și array-ul `person.hobbies` ca valoare pentru `hobbies`. Adăugăm hobby-ul `baking` în array-ul `person.hobbies`.

După adăugarea lui `dancing` și `baking`, valoarea lui `person.hobbies` este `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 142. Care este rezultatul?

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
- D: Nimic, nu am apelat la nicio metodă

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Creăm variabila `pet` care este o instanță a clasei `Flamingo`. Când instantiem această instanță, `constructor` din clasa `Flamingo` este apelat. Mai întâi, se înregistrează `"I'm pink. 🌸"` după care apelăm `super()`. `super()` apelează constructorul clasei părinte, `Bird`. Constructorul din clasa `Bird` este apelat și înregistrează `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 143. Care dintre opțiuni rezultă într-o eroare?

```javascript
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 și 2
- C: 3 și 4
- D: 3

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Cuvântul cheie `const` înseamnă pur și simplu că nu putem _redeclara_ valoarea acelei variabile, aceasta este _numai pentru citire_ (read-only). Cu toate acestea, valoarea în sine nu este imutabilă. Proprietățile din array-ul `emojis` pot fi modificate, de exemplu, prin adăugarea de valori noi, prin decuparea lor sau prin setarea lungimii array-ului la 0.

</p>
</details>

---

###### 144. Ce trebuie să adăugăm la obiectul `person` pentru a obține `["Lydia Hallie", 21]` ca rezultat al `[...person]`?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: Nimic, obiectele sunt iterabile în mod implicit
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Obiectele nu sunt iterabile în mod implicit. Un obiect devine iterabil atunci când protocolul iterator este prezent. Putem adăuga acest protocol manual prin adăugarea simbolului iterator `[Symbol.iterator]`, care trebuie să returneze un obiect generator, de exemplu, prin definirea unei funcții generator `*[Symbol.iterator]() {}`. Această funcție generator trebuie să furnizeze `Object.values` ale obiectulu `person` pentru a obține array-ul `["Lydia Hallie", 21]`: `yield* Object.values(this)`.

</p>
</details>

---

###### 145. Care este rezultatul?

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Condiția `if` din interiorul buclei `forEach` verifică dacă valoarea lui `num` este adevărată (truthy) sau falsă (falsy). Deoarece primul număr din array-ul `nums` este `0`, o valoare falsă, blocul de cod al instrucțiunii `if` nu va fi executat. `count` se incrementează doar pentru celelalte 3 numere din array-ul `nums`, adică `1`, `2` și `3`. Deoarece `count` se incrementează cu `1` de 3 ori, valoarea lui `count` este `3`.

</p>
</details>

---

###### 146. Care este rezultatul?

```javascript
function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])
```

- A: `null`, `undefined`, 🍌
- B: `[]`, `null`, 🍌
- C: `[]`, `[]`, 🍌
- D: `undefined`, `undefined`, 🍌

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Simbolul `?` ne permite să accesăm opțional proprietăți mai adânc în obiecte. Încercăm să înregistrăm elementul de pe indexul `1` din sub-array-ul de pe indexul `1` al array-ului `fruits`. Dacă sub-array-ul de pe indexul `1` din array-ul `fruits` nu există, va returna pur și simplu `undefined`. Dacă sub-array-ul de pe indexul `1` din array-ul `fruits` există, dar acest sub-array nu are un element pe indexul `1` va returna, de asemenea, `undefined`. 

În primul rând, încercăm să înregistrăm al doilea element din sub-array-ul`['🍍']` din `[['🍊', '🍌'], ['🍍']]`. Acest sub-array conține doar un singur element, ceea ce înseamnă că nu există niciun element pe indexul `1`, și va returna `undefined`.

Apoi, apelăm funcția `getFruits` fără a transmite o valoare ca argument, ceea ce înseamnă că `fruits` are implicit o valoare de `undefined`. Deoarece facem o verificare condițională pentru accesarea elementului de pe indexul `1` al `fruits`, aceasta va returna `undefined` deoarece acest element de pe indexu `1` nu există. 

În cele din urmă, încercăm să înregistrăm al doilea element din sub-array-ul `['🍊', '🍌']` din `['🍍'], ['🍊', '🍌']`. Elementul de pe indexul `1` în acest sub-array este `🍌`, are este înregistrat.

</p>
</details>

---

###### 147. Care este rezultatul?

```javascript
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```

- A: `0`
- B: `1`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Am setat variabila `calc` gal cu o nouă instanță a clasei `Calc`. Apoi, am creat o altă instanță nouă a clasei `Calc`, și am apelat metoda `increase` pe această instanță. Deoarece proprietatea `count` se află în constructorul clasei `Calc`, proprietatea `count` nu este partajată în prototipul clasei `Calc`. Acest lucru înseamnă că valoarea lui `count` nu a fost actualizată pentru instanța către care arată `calc` astfel încât `count` rămâne `0`.

</p>
</details>

---

###### 148. Care este rezultatul?

```javascript
const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)
```

- A: `false`
- B: `true`
- C: `TypeError`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Funcția `updateUser` actualizează valorile proprietăților `email` și `password` ale obiectului `user`, dacă aceste valori sunt transmise funcției, după care funcția returnează obiectul `user`. Valoarea returnată a funcției `updateUser` este obiectul `user`, ceea ce înseamnă că valoarea lui `updatedUser` este o referință către același obiect `user` la care face referință și `user`. `updatedUser === user` este egal cu `true`.

</p>
</details>

---

###### 149. Care este rezultatul?

```javascript
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

În primul rând, apelăm metoda `slice` pe array-ul `fruit`. Metoda `slice` nu modifică array-ul original, ci returnează valoarea pe care a tăiat-o din array: emoji-ul de banană.
Apoi, apelăm metoda `splice` pe array-ul `fruit`. Metoda `splice` modifică array-ul original, ceea ce înseamnă că array-ul `fruit` acum conține `['🍊', '🍎']`.
În cele din urmă, apelăm metoda `unshift` pe array-u `fruit`, care modifică array-ul original prin adăugarea valorii furnizate, în acest caz, ‘🍇’ ca prim element în array. Array-ul `fruit` acum conține `['🍇', '🍊', '🍎']`.

</p>
</details>

---

###### 150. Care este rezultatul?

```javascript
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Cheile obiectelor sunt convertite în șiruri de caractere.

Deoarece valoarea lui `dog` este un obiect, `animals[dog]` înseamnă de fapt că creăm o nouă proprietate numită `"object Object"` egală cu noul obiect. `animals["object Object"]` este acum egal cu `{ emoji: "🐶", name: "Mara"}`.

`cat` este, de asemenea, un obiect, ceea ce înseamnă că `animals[cat]` înseamnă de fapt că suprascriem valoarea lui  `animals["object Object"]` cu noile proprietăți ale pisicii. 

Înregistrarea `animals[dog]`, sau mai exact `animals["object Object"]` deoarece convertirea obiectului `dog` într-un șir rezultă în `"object Object"`, returnează `{ emoji: "🐈", name: "Sara" }`.

</p>
</details>

---

###### 151. Care este rezultatul?

```javascript
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: A

Funcția `updateEmail` este o funcție săgeată și nu este legată de obiectul `user`. Acest lucru înseamnă că cuvântul cheie `this` nu se referă la obiectul `user`, ci se referă la domeniul global în acest caz. Valoarea `email` din obiectul `user` nu se actualizează. Când se înregistrează valoarea `user.email`, se returnează valoarea originală `my@email.com`. 

</p>
</details>

---

###### 152. Care este rezultatul?

```javascript
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
```

- A: `[['First', 'Second'], ['Fourth']]`
- B: `[['First', 'Second'], ['Third', 'Fourth']]`
- C: `[['First', 'Second']]`
- D: `'Third'`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: D

Metoda `Promise.all` rulează promisiunile transmise în paralel. Dacă o promisiune eșuează, metoda `Promise.all` se _respinge_ cu valoarea promisiunii respinse. În acest caz, `promise3` a fost respinsă cu valoarea `"Third"`. Prindem valoarea respinsă în metoda `catch` lantată în invocarea `runPromises` pentru a prinde orice erori din interiorul funcției `runPromises`. Se înregistrează doar `"Third"` deoarece `promise3` a fost respinsă cu această valoare.

</p>
</details>

---

###### 153. Ce valoare ar trebui să aibă `method` pentru a înregistra `{ name: "Lydia", age: 22 }`? 

```javascript
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
```

- A: `entries`
- B: `values`
- C: `fromEntries`
- D: `forEach`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Metoda `fromEntries` transformă o matrice 2D într-un obiect. Primul element din fiecare submatrice va fi cheia, iar al doilea element din fiecare submatrice va fi valoarea. În acest caz, facem mapare peste matricea `keys` care returnează o matrice în care primul element este elementul din matricea cheilor la indexul curent, iar al doilea element este elementul din matricea valorilor la indexul curent. 

Acest lucru creează o matrice de submatrici care conțin cheile și valorile corecte, rezultând în `{ name: "Lydia", age: 22 }`

</p>
</details>

---

###### 154. Care este rezultatul?

```javascript
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
```

- A: `{ email: "my@email.com", address: null }`
- B: `{ email: "my@email.com" }`
- C: `{ email: "my@email.com", address: {} }`
- D: `{ email: "my@email.com", address: undefined }`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: C

Valoarea implicită a lui `address` este un obiect gol `{}`. Când setăm variabila `member` egală cu obiectul returnat de funcția `createMember`, nu am transmis o valoare pentru `address`, ceea ce înseamnă că valoarea lui `address` este obiectul gol implicit `{}`. Un obiect gol este o valoare adevărată (truthy), ceea ce înseamnă că condiția din expresia ternară `address ? address : null` returnează `true`. Prin urmare, valoarea lui `address` este obiectul gol `{}`.

</p>
</details>

---

###### 155. Care este rezultatul?

```javascript
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Răspuns</b></summary>
<p>

#### Răspuns: B

Condiția din instrucțiunea `if` verifică dacă valoarea lui `!typeof randomValue` este egală cu `"string"`. Operatorul `!` convertește valoarea la o valoare booleană. Dacă valoarea este adevărată (truthy), valoarea returnată va fi `false`, iar dacă valoarea este falsă (falsy), valoarea returnată va fi `true`. În acest caz, valoarea returnată de `typeof randomValue` este valoarea adevărată (truthy) `"number"`, ceea ce înseamnă că valoarea lui `!typeof randomValue` este valoarea booleană `false`.

`!typeof randomValue === "string"` întotdeauna returnează `false`, deoarece de fapt verificăm `false === "string"`. Deoarece condiția returnează `false`, blocul de cod al instrucțiunii `else` se execută, iar `Yay it's a string!` este înregistrat.

</p>
</details>
