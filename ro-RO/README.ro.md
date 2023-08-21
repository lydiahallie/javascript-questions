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
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

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
  var name = "Lydia";
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
!"Lydia";
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
  size: "small",
};

const mouse = {
  name: "Mickey",
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
  console.log("Woof!");
}

bark.animal = "dog";
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
