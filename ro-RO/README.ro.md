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