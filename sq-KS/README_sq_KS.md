<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Pyetje Javascript</h1>

---

Pyetjet të cilat mund të kenë më shumë se një përgjigje të saktë postohen në **storie** në këtë [Instagram](https://www.instagram.com/theavocoder), të cilat do të postohen edhe këtu! Përditësimi i fundit: 12 Qershor

Nga konceptet bazike tek ato të avancuara: testo se sa mirë e njeh JavaScript-in, freskoni sado pak njohuritë e juaja ose edhe përgatitu për intervisten tuaj të ardhshme! 💪 🚀! Përgjigjet gjenden në **seksionet e mbyllura** përfundi pyetjeve, thjesht kliko mbi to për të hapur seksionin e përgjigjeve. Është vetëm për argëtim, paç fat! ❤️

Mos hezitoni të më kontaktoni! 😊
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a>
</div>

| Ndjehuni të lirë të i përdorni në projektet e juaja |😃  Do të e vlerësoja shumë referencimin tuaj në ketë repositori, unë i krijoj pyetjet dhe poashtu edhe përgjigjet (lol) dhe komuniteti me ndihmon shumë të e përmirësoj dhe të mirëmbajë! 💪🏼 Faleminderit!

---

<details><summary><b> See 20 Available Translations 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼🇽🇰</b></summary>
<p>

- [🇸🇦 العربية](../ar-AR/README_AR.md)
- [🇪🇬 اللغة العامية](../ar-EG/README_ar-EG.md)
- [🇧🇦 Bosanski](../bs-BS/README-bs_BS.md)
- [🇩🇪 Deutsch](../de-DE/README.md)
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
- [🇽🇰 Shqip](./sq-KS/README_sq_KS.md)
- [🇹🇭 ไทย](../th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1.  Cila është vlera e saj?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` dhe `undefined`
- B: `Lydia` dhe `ReferenceError`
- C: `ReferenceError` dhe `21`
- D: `undefined` dhe `ReferenceError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Brenda funksionit, fillimisht deklarojmë variablën `name` me fjalën kyçe `var`. Kjo do të thotë se variabla ngrihet - hoistohet (hapësira e memories caktohet gjatë fazës së krijimit) me vlerën e paracaktuar `undefined`, deri sa të arrijmë në rreshtin ku e definojmë variablën. Nuk kemi definuar ende variablën në rreshtin ku përpiqemi të shfaqim variablën `name`, kështu që ajo ende mban vlerën `undefined`.

Variablat me fjalën kyçe `let` (dhe `const`) hoistohen, por ndryshe nga `var`, nuk inicializohen. Ato nuk janë të qasshme para rreshtit ku i deklarojmë (inicializojmë) ato. Kjo quhet "zona e vdekur temporale". Kur përpiqemi të iu qasemi variablave para se ato të jenë të deklaruara, JavaScript hedh një `ReferenceError`.

</p>
</details>

---

###### 2.  Cila është vlera e saj?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` dhe `0 1 2`
- B: `0 1 2` dhe `3 3 3`
- C: `3 3 3` dhe `0 1 2`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Për shkak të ***event queque*** në JavaScript, funksioni callback `setTimeout` thirret pas ekzekutimit të unazës. Pasi që variabla `i` në iterimin e parë u deklarua duke përdorur fjalën kyçe `var`, kjo vlerë ishte globale. Gjatë unazës, ne rritëm vlerën e `i` me `1` çdo herë, duke përdorur operatorin unar `++`. Deri në kohën që funksioni callback `setTimeout` u thirr, `i` ishte e barabartë me `3` në unazën e parë. Për shkak të hoisting-ut, `var` ndan një vend të vetëm në memorie për variablin, kështu që çdo përsëritje mbishkruan të njëjtin variabël në vend që të krijojë një të ri.

Në unazën e dytë, variabla `i` u deklarua duke përdorur fjalën kyçe `let`: variablat e deklaruara me fjalën kyçe `let` (dhe `const`) janë të qasshme në bllok (një bllok është çdo gjë mes `{ }`). Gjatë çdo iteracioni, `i` do të ketë një vlerë të re, dhe çdo vlerë është e qasshme brenda unazës. Ndryshe nga `var`, `let` krijon një lidhje të re (një vend të ri në memorie) për çdo përsëritje, prandaj çdo callback i `setTimeout` kap një vlerë të ndryshme.

</p>
</details>

---

###### 3. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Vini re se vlera e `diameter` është një funksion i zakonshëm, ndërsa vlera e `perimeter` është një funksion shigjete (arrow function).

Në funksionet shigjeta, fjala kyçe `this` referohet në qasjen në rrethinën aktuale përreth saj, ndryshe nga funksionet e zakonshme! Kjo do të thotë se kur ne e thërrasim `perimeter`, ajo nuk referohet tek objekti shape, por tek rrethina e saj (për shembull "window").

`radius` nuk ka ndonjë vlerë të caktuar në atë objekt, prandaj do të kemi si rezultat `NaN`.

</p>
</details>

---

###### 4. Cila është vlera e saj?

```javascript
+true;
!'Lydia';
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Operatori unar `+` provon të e konvertojë operandin në numër. `true` është `1`, dhe `false` është `0`.

Vargu i karaktereve (stringu) `'Lydia'` konsiderohet si vlerë `true`. Çfarë ne realisht po pyesim është "a është kjo vlerë e vërtetë e pavërtetë?". Kjo do të kthejë vlerën `false`.

</p>
</details>

---

###### 5. Cila përgjigje është e saktë?

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` nuk është sintaksë valide
- B: `mouse[bird.size]` nuk është sintaksë valide
- C: `mouse[bird["size"]]` nuk është sintaksë valide
- D: Të gjitha sintaksat janë valide

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Në JavaScript, të gjithë çelësat (keys) e objektit janë stringje (përveç nëse është Symbol). Edhe nëse nuk i _shkruajmë_ si stringje, ato gjithmonë konvertohen në stringje në prapavijë.

JavaScript interpreton deklarimet. Kur përdorim notacionin e kllapave, ai shikon kllapën e parë hapëse `[` dhe vazhdon derisa të gjejë kllapën mbyllëse `]`. Vetëm atëherë do të vlerësohet deklarata (kthehet vlera e caktuar për atë deklarim).

`mouse[bird.size]`: Fillimisht gjendet vlera e `bird.size`, e cila është `"small"`. `mouse["small"]` kthen `true`

Megjithatë, me notacionin pikë, kjo nuk ndodh. `mouse` nuk ka një çelës të quajtur `bird`, që do të thotë se `mouse.bird` është `undefined`. Pastaj, ne kërkojmë "size" duke përdorur notacionin pikë: "mouse.bird.size". Meqenëse `mouse.bird` është `undefined`, ne në fakt po pyesim 'undefined.size'. Kjo nuk është valide dhe do të marrim një gabim të ngjashëm me `Cannot read property "size" of undefined`.

</p>
</details>

---

###### 6. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Në JavaScript, të gjitha objektet ndërveprojnë me _referencë_ kur i vendosin me vlera të barabarta me njëri-tjetrin.

Fillimisht, variabla `c` mbanë vlerën për një objekt. Më vonë, ne e caktojmë `d` me të njejtën reference të cilën `c` ka tek objekti.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Kur e ndryshoni një objekt, i ndryshoni të gjitha objektet.

</p>
</details>

---

###### 7. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

`new Number()` është konstruktor i integruar (built-in function). Edhe pse duket si një numër, nuk është në të vërtetë një numër: ai ka një mori karakteristikash shtesë dhe si rrjedhojë është një objekt.

Kur përdorim operatorin `==` (operatorin i barazimit), ai kontrollon vetëm nëse ka të njëjtën _vlerë_. Të dy kanë vlerën `3`, kështu që kthen `true`.

Megjithatë, kur përdorim operatorin `===` (operatori i barazisë strikte), të dy vlerat dhe tipi i tyre duhet të jenë të njëjta. Nuk është: `new Number()` nuk është një numër, është një __objekt__. Të dy kthejnë `false`.

</p>
</details>

---

###### 8. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Funksioni `colorChange` është statik. Metodat statike janë krijuar për të "jetuar" vetëm në konstruktorin në të cilin janë krijuar dhe nuk mund t'i kalohen asnjë fëmije ose të thirren në instancat e klasës. Meqenëse `freddie` është një instancë e klasës Chameleon, funksioni nuk mund të thirret. Në këtë rast do të kthehet `TypeError`.

</p>
</details>

---

###### 9. Cila është vlera e saj?

```javascript
let greeting;
greetign = {}; // Typo - gabim drejtëshkrimor!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Do të printojë objekt, sepse ne sapo krijuam një objekt bosh në objektin global! Kur e shkruajtëm gabim `greeting` si `greetign`, interpretuesi i JS në fakt e pa këtë si:

1. `global.greetign = {}` në Node.js
2. `window.greetign = {}`, `frames.greetign = {}` dhe `self.greetign` në shfletues (browser).
3. `self.greetign` në web workers.
4. `globalThis.greetign` në të gjitha mjediset.

Për të shmangur këtë, ne mund të përdorim `"use strict"`. Kjo siguron që ju të keni deklaruar një variabël përpara se ta vendosni atë të barabartë (inicializoni ndonjë variabël tjetër me vlerën e saj) me ndonjë gjë.

</p>
</details>

---

###### 10. Çfarë do të ndodh kur e bëjmë këtë veprim?

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: Asgjë, gjithçka është në rregull!
- B: `SyntaxError`. Nuk mund të shtoni veti te një funksion në këtë mënyrë.
- C: `"Woof"` do të printohet.
- D: `ReferenceError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Kjo është e mundshme në JavaScript, spese funksionet janë objekte! (Gjithçka, përveç tipeve primitive janë objekte)

Një funksion është një lloj i veçantë objekti. Kodi që shkruani vetë nuk është funksioni aktual. Funksioni është një objekt me veti. Kjo veti është e pavokueshme.

</p>
</details>

---

###### 11. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Në JavaScript, funksionet janë objekte dhe për këtë arsye metoda `getFullName` i shtohet vetë objektit të funksionit të konstruktorit. Për këtë arsye, ne mund të thërrasim `Person.getFullName()`, por `member.getFullName` do të kthejë `TypeError`.

Nëse dëshironi që një metodë të jetë e qasshme për të gjitha instancat e objektit, duhet ta shtoni atë në vetinë e quajtur "prototype":

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

</p>
</details>

---

###### 12. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Për `sarah`, ne nuk përdorëm fjalën kyçe `new`. Kur përdorim `new`, `this` i referohet objektit të ri bosh që krijojmë. Megjithatë, nëse nuk shtoni `new`, `this` i referohet **objektit global**!

E cekëm se `this.firstName` është `"Sarah"` dhe `this.lastName` është `"Smith"`. Çfarë bëmë realisht është se ne e definuam `global.firstName = 'Sarah'` dhe `global.lastName = 'Smith'`. `sarah` vetë mbetet `undefined`, pasi ne nuk kthejmë ndonjë vlerë nga funksioni `Person`.

</p>
</details>

---

###### 13. Cilat janë tri fazat e "event propagation"?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Gjatë fazës **capturing** (kapjes), eventi kalon nëpër elementet paraardhëse deri te elementi i synuar. Më pas arrin në elementin **target** (e synuar) dhe fillon **bubbling**.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Të gjitha objektet kanë prototipe.

- A: e vërtetë
- B: e pavërtetë

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Të gjitha objektet kanë prototipe, me përjashtim të **objektit bazë**. Objekti bazë është objekti i krijuar nga përdoruesi, ose një objekt që krijohet duke përdorur fjalën kyçe "new". Objekti bazë ka qasje në disa metoda dhe veti, të tilla si `.toString`. Kjo është arsyeja pse ju mund të përdorni metoda të integruara të JavaScript! Të gjitha këto metoda janë të disponueshme në prototip. Megjithëse JavaScript nuk mund ta gjejë atë drejtpërdrejt në objektin tuaj, ai zbret në zinxhirin e prototipit dhe e gjen atje, gjë që e bën atë të qasshëm për ju.

</p>
</details>

---

###### 15. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

JavaScript është gjuhë e shkruar në mënyrë dinamike __dynamically typed language__: ne nuk specifikojmë se çfarë tipe janë variablat e caktuara. Vlerat mund të konvertohen automatikisht në një tip tjetër pa e ditur ju dhe ky proces quhet _implicit type coercion_ (shndërrimi i tipit në mënyrë të nënkuptuar). __Coercion__ është shndërrimi nga një tip në një tjetër.

Në këtë shembull, JavaScript konverton numrin `1` në string, në mënyrë që për funksionin të ketë kuptim dhe të kthejë një vlerë. Përgjatë mbledhjes të një tipi number (`1`) dhe një tipi string (`'2'`), numri trajtohet si string. Ne mund ti bashkojmë stringjet si `"Hello" + "World"`, kështu që ajo që po ndodh këtu është `"1" + "2"` e cila kthen "12"`.

</p>
</details>

---

###### 16. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

**postfiks** operatori unar `++`:

1. Kthen vlerën (kthen `0`)
2. Rrit vleren (numri tani është `1`)

**prefiks** operatori unar `++`:

1. Rrit vlerën (numri tani është `2`)
2. Kthen vlerën (kthen `2`)

Prandaj rezultati që kthehet është `0 2 2`.

</p>
</details>

---

###### 17. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Nëse përdorni literale të shabllonit (template literals) të etiketuar, vlera e argumentit të parë është gjithmonë një array vlerash stringu. Argumentet e mbetura marrin vlerat e shprehjeve të vendosura në variablat e dhëna!

</p>
</details>

---

###### 18. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Kur testojmë barazinë, primitivet krahasohen me _vlerën_ e tyre, ndërsa objektet krahasohen me _referencën_ e tyre. JavaScript kontrollon nëse objektet kanë një referencë në të njëjtin vend në memorie.

Dy objektet që po krahasojmë nuk e kanë këtë: objekti që kemi vendosur si parametër i referohet një vendndodhjeje të ndryshme në memorie nga objekti që kemi përdorur për të kontrolluar barazinë.

Kjo tregon pse të dyja: `{ age: 18 } === { age: 18 }` dhe `{ age: 18 } == { age: 18 }` kthen `false`.

</p>
</details>

---

###### 19. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Parametri "rest" (`...args`) na lejon të "mbledhim" të gjitha argumentet e mbetura në një array. Një array është një objekt, kështu që `typeof args` kthen `“objekt”`

</p>
</details>

---

###### 20. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me `"use strict"`, mund të siguroheni se nuk do të deklaroni variabla globale pa qëllim. Ne asnjëherë nuk e kemi deklaruar variablen `age`, dhe pasi ne e përdorim `"use strict"`, do të na kthehet një error reference. Në qoftesë nuk përdorim `"use strict"`, do të kishte funksionuar pasi vetia `age` do të ishte shtuar në objektin global.

</p>
</details>

---

###### 21. Sa do të jetë vlera e `sum`?

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

`eval` vlerëson kodet që i pasohen si string. Nëse është një shprehje, si në këtë rast, ajo vlerëson shprehjen. Shprehja është `10 * 10 + 5`. Kjo kthen numrin '105'.

</p>
</details>

---

###### 22. Sa kohë është e qasshme cool_secret?

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: Përgjithmonë, e dhëna nuk humb.
- B: Kur përdoruesi mbyll dritaren.
- C: Kur përdoruesi mbyll browser-in në tërësi, jo vetëm dritaren.
- D: Kur përdoruesi ndal kompjuterin e tyre.

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Të dhënat e ruajtura në `sessionStorage` largohen pasi të mbyllet _dritarja_.

Nëse keni përdorur 'localStorage', të dhënat do të kishin mbetur aty përgjithmonë, përveç nëse për shembull thirret 'localStorage.clear()'.

</p>
</details>

---

###### 23. Cila është vlera e saj?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me fjalën kyçe `var`, mund të deklaroni shumë variabla me të njëjtin emër. Më pas variabla do të mbajë vlerën e fundit të inicializuar në të.

Ju nuk mund ta bëni këtë me 'let' ose 'const' pasi ato kanë qasje në bllok (block-scoped).

</p>
</details>

---

###### 24. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Të gjitha çelësat e objektit (përjashto Simbolet) janë stringje në prapavijë, edhe nëse ju vetë nuk e shkruani atë si string. Kjo është arsyeja pse `obj.hasOwnProperty('1')` gjithashtu kthen vlerën true.

Nuk funksionon në këtë mënyrë për një "set". Nuk ka asnjë `'1'` në set-in tonë: `set.has('1')` kthen `false`. Nëse ka tipin numër `1`, `set.has(1)` kthen `true`.

</p>
</details>

---

###### 25. Cila është vlera e saj?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Nëse keni dy çelësa me të njëjtin emër, çelësi do të zëvendësohet. Do të jetë ende në pozitën e parë, por me vlerën e fundit të specifikuar.

</p>
</details>

---

###### 26. Konteksti global i ekzekutimit në JavaScript krijon dy gjëra për ju: objektin global, dhe fjalën kyçe "this".

- A: e vërtetë
- B: e pavërtetë
- C: varet

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Konteksti bazë i ekzekutimit është konteksti global i ekzekutimit: është ajo që është e qasshme kudo në kodin tuaj.

</p>
</details>

---

###### 27. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Deklarata `continue` kalon një iterim nëse një kusht i caktuar kthen `true`.

</p>
</details>

---

###### 28. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

`String` është një konstruktor i integruar, të cilit mund t'i shtojmë veti. Sapo shtuam një metodë në prototipin e saj. Stringjet primitive konvertohen automatikisht në një objekt string, të gjeneruara nga funksioni i prototipit të stringut. Pra, të gjitha vargjet (objektet e stringut) kanë qasje në atë metodë!

</p>
</details>

---

###### 29. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Çelësat e objekteve konvertohen automatikisht në stringje. Ne po provojmë të vendosim një objekt si çelës për objektin 'a', me vlerën '123'.

Megjithatë, kur e përdorim "stringify" në një objekt, ai bëhet `"[object Object]"`. Pra, ajo që po themi këtu, është se `a["[object Object]"] = 123`. Pastaj, ne mund të provojmë të bëjmë të njëjtën gjë përsëri. `c` është një objekt tjetër që ne po e "stringify" në mënyrë implicite. Pra, atëherë, `a["[object Object]"] = 456`.

Pastaj ne e printojmë `a[b]` e cila është `a["[object Object]"]`. We sapo e vendosëm `456` në të, prandaj edhe do të kthejë `456`

</p>
</details>

---

###### 30. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Ne kemi një funksion "setTimeout" të cilin e thirrëm së pari. Megjithatë, ai u printua i fundit.

Kjo është për shkak se në browser-a, ne nuk kemi vetëm "runtime" funksionalitet, ne gjithashtu kemi diçka që quhet `WebAPI`. `WebAPI` na jep funksionin `setTimeout` dhe poashtu për shembull DOM.

Pasi _callback_ të vendoset në WebAPI, vetë funksioni "setTimeout" (por jo callback!) del nga pirgu (stack).

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Tani `foo` thirret dhe `"First"` do të printohet.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` del nga stack, dhe `baz` thirret. `"Third"` do të printohet.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI nuk mund të shtojë gjëra në stack sa herë që është gati. Në vend të kësaj, ai vendos callback në diçka që quhet _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Këtu fillon të funksionojë event loop. Një **event loop** shikon "stack" dhe "task queue". Nëse "stack" është bosh, ai merr gjënë e parë në radhë dhe e vendos atë në stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` thirret, `"Second"` do të printohet dhe do të largohet nga stack.

</p>
</details>

---

###### 31. Çfarë do të jetë event.target kur e klikojmë butonin?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: `div` i jashtëm
- B: `div` i brendshëm
- C: `button`
- D: Një array i elementeve të ndërthurura.

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Elementi më thellë i mbivendosur që shkaktoi ngjarjen është objektivi i ngjarjes. Ju mund të ndaloni bubbling me "event.stopPropagation".

</p>
</details>

---

###### 32. Kur klikoni paragrafin, çfarë do të printohet në dalje?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Nëse klikojmë `p`, shohim dy dalje: `p` dhe `div`. Gjatë "event propagation", ekzistojnë 3 faza: kapja, objektivi dhe flluska. Si parazgjedhje, mbajtësit e ngjarjeve (event handlers) ekzekutohen në fazën e flluskimit (përveç nëse e vendosni "useCapture" në "true"). Ai shkon nga elementi më i thellë i mbivendosur jashtë.

</p>
</details>

---

###### 33. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Në të dy rastet, ne mund të e vendosim objektin si argument varësisht në cilin funksion dëshirojmë të referohemi me fjalën kyçe `this`. Megjithatë, `.call` gjithashtu ekzekutohet menjëherë!

`.bind.` kthen një _kopje_ të funksionit, por me një kontekst të lidhur! Nuk ekzekutohet menjëherë.

</p>
</details>

---

###### 34. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Funksioni `sayHi` kthen vlerën e kthyer të shprehjes së funksionit të thirrur menjëherë (IIFE). Ky funksion ktheu `0`, që është i tipit `“numër”`.

FYI: `typeof` mund të kthejë listën e mëposhtme të vlerave: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` dhe `object`. Vini re se `typeof null` kthen `“object”`.

</p>
</details>

---

###### 35. Cilat nga këto vlera janë false?

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
- D: Të gjitha paraqesin vlerë false

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Ekzistojnë këto 8 vlera të cilat paraqesin false:

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (string i zbrazët)
- `0`
- `-0`
- `0n` (BigInt(0))

Konstruktorët e funksioneve, si `new Number` dhe `new Boolean` kthejnë vlerë të vërtetë (truthy).

</p>
</details>

---

###### 36. Cila është vlera e saj?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

`typeof 1` kthen `"number"`.
`typeof "number"` kthen `"string"`

</p>
</details>

---

###### 37. Cila është vlera e saj?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, null x 7, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, empty x 7, 11]`
- D: `SyntaxError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Kur inicializoni një vlerë për një element të vargut (array) i cili e kalon gjatësinë e tij, Javascript-i krijon diçka që quhet "empty slots (vende të zbrazëta)". Këto realisht e kanë vlerën `undefined`, por ju do të shihni diçka si:

`[1, 2, 3, empty x 7, 11]`

varësisht ku e ekzekutoni kodin tuaj (dallon për çdo browser, node, etj.)

</p>
</details>

---

###### 38. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Blloku `catch` merr argumentin `x`. Kjo nuk është e njëjta `x` si variabla kur ne japim argumente. Variabla `x` (në bllokun `catch`) ka shtrirje blloku (është block-scoped).

Më vonë, ne e inicializojmë këtë variabël me shtrirje blloku të barabartë me `1` dhe inicializojmë vlerën e ndryshores `y`. Tani, ne printojmë ndryshoren me shtrirje blloku `x`, e cila është e barabartë me `1`.

Jashtë bllokut `catch`, `x` është ende `undefined`, dhe `y` është `2`. Kur dëshirojmë të bëjmë `console.log(x)` jashtë bllokut `catch`, do të kthejë `undefined`, dhe `y` kthen `2`.

</p>
</details>

---

###### 39. Çdo gjë në JavaScript është ose...

- A: primitive ose objekt
- B: funksion ose objekt
- C: pyetje me trik! vetëm objekt
- D: numër ose objekt

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

JavaScript ka vetëm tipe primitive dhe objekte.

Tipet primitive janë `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, dhe `symbol`.

Ajo që e dallon një tip primitiv nga një objekt është se primitivët nuk kanë asnjë veti ose metodë; megjithatë, do të vini re se `foo.toUpperCase()` vlerësohet në `'FOO'` dhe nuk rezulton në `TypeError`. Kjo ndodh sepse kur përpiqeni të qasni një veçori ose metodë në një primitive si një string, JavaScript do të mbështjellë në mënyrë implicite tipin primitiv duke përdorur një nga klasat e mbështjellësit, d.m.th. `String`, dhe më pas do ta heqë menjëherë mbështjellësin pasi të vlerësohet shprehja. Të gjithë primitivët përveç `null` dhe `undefined` e shfaqin këtë sjellje.

</p>
</details>

---

###### 40. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

`[1, 2]` është vlera jonë fillestare. Kjo është vlera me të cilën fillojmë, dhe vlera e parë e `acc`. Gjatë iterimit të parë, `acc` është `[1,2]`, dhe `cur` është `[0, 1]`. Ne i bashkojmë ato dhe kjo rezulton në `[1, 2, 0, 1]`.

Pastaj, `[1, 2, 0, 1]` është `acc` dhe `[2, 3]` është `cur`. I bashkojmë ato dhe marrim `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. Cila është vlera e saj?

```javascript
!!null;
!!'';
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

`null` është false. `!null` kthen `true`. `!true` kthen `false`.

`""` është false. `!""` kthen `true`. `!true` kthen `false`.

`1` është e vërtetë (truthy). `!1` kthen `false`. `!false` kthen `true`.

</p>
</details>

---

###### 42. Çfarë do të kthejë në browser funksioni `setInterval`?

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: një id unike
- B: numrin e milisekondave të specifikuara
- C: funksionin të cilin e kemi kaluar si argument
- D: `undefined`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Kthen një id unike. Kjo id mund të përdoret për të pastruar intervalin me funksionin `clearInterval()`.

</p>
</details>

---

###### 43. Çfarë do të kthehet si rezultat?

```javascript
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Stringu është i iterueshëm. Operatori i përhapjes (spread operator) iteron çdo karakter të një elementi të iterueshëm në një element (në këtë rast array []).

</p>
</details>

---

###### 44.  Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Funksionet e rregullta nuk mund të ndalen në mes të ekzekutimit pas thirrjes. Sidoqoftë, funksioni i gjeneratorit (generator function) mund të "ndalohet" në mes të rrugës dhe më vonë të vazhdojë nga vendi ku ndaloi. Sa herë që një funksion gjenerues ndeshet me fjalën kyçe `yield`, funksioni jep vlerën e specifikuar pas saj. Vini re se funksioni i gjeneratorit në atë rast nuk e _kthen_ (return) vlerën, por e _jep_ (yield) vlerën.

Së pari, ne inicializojmë funksionin e gjeneratorit me `i` të barabartë me `10`. Ne thërrasim funksionin e gjeneratorit duke përdorur metodën `next()`. Herën e parë që thërrasim funksionin e gjeneratorit, `i` është i barabartë me `10`. Ai ndeshet me fjalën kyçe të parë `yield`: jep vlerën e `i`. Gjeneratori tani është `në pauzë` dhe `10` regjistrohet.

Pastaj, ne e thirrim funksionin përsëri me metodën `next()`. Fillon dhe vazhdon aty ku ka ndaluar më parë, ende me `i` të barabartë me `10`. Tani, ai ndeshet me fjalën kyçe tjetër "yield" dhe jep `i * 2`. `i` është e barabartë me `10`, kështu që kthen `10 * 2`, që është `20`. Kjo rezulton në `10, 20`.

</p>
</details>

---

###### 45. Çfarë do të kthehet si rezultat?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Kur i kalojmë premtime (promises) të shumta metodës `Promise.race`, ajo zgjidh/refuzon premtimin _e parë_ që do të zgjidhet/refuzohet. Me metodën `setTimeout`, kalojmë një kohëmatës: 500 ms për premtimin e parë (`firstPromise`) dhe 100 ms për premtimin e dytë (`secondPromise`). Kjo do të thotë se `secondPromise`zgjidhet fillimisht me vlerën `'two'`. `res` tani mban vlerën e `'two'`, e cila printohet.

</p>
</details>

---

###### 46. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Së pari, deklarojmë variablën `person` me vlerën e objektit i cili e ka vetinë `name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Më pas, ne deklarojmë një variabël të quajtur `members`. E caktojmë elementin e parë të atij array të barabartë me vlerën e variablës `person`. Objektet ndërveprojnë me _referencë_ kur i vendosin të barabartë me njëri-tjetrin. Kur caktoni një referencë nga një ndryshore në tjetrën, ju bëni një _kopje_ të asaj reference. (vini re se ato nuk kanë të njëjtën referencë!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Pastaj e ri-inicializojmë variablën `person` të barabartë me `null`

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Ne po e modifikojmë vetëm vlerën e variblës `person`, dhe jo të elementit të parë ne array, meqenëse ai element ka një referencë të ndryshme (të kopjuar) për objektin. Elementi i parë në `members` ende mban referencën e tij ndaj objektit origjinal. Kur printojmë array `members`, elementi i parë ende mban vlerën e objektit, i cili printohet.

</p>
</details>

---

###### 47. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me unazën `for-in`, ne mund të iterojmë përgjatë çelësave të objektit, në këtë rast `name` dhe `age`. Në prapavijë, çelësat e objektit janë stringje (në qoftesë nuk janë Symbol). Në çdo unazë, ne vendosim vlerën e `item` të barabartë me çelësin aktual në të cilin po iterohet. Së pari, `item` është i barabartë me `name`, dhe printohet. Pastaj, `item` është e barabartë me `age` dhe printohet.

</p>
</details>

---

###### 48. Cila është vlera e saj?

```javascript
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Radha e veprimeve matematikore të operatorit është rendi në të cilin përpiluesi (kompajleri) vlerëson shprehjet, qoftë nga e majta në të djathtë ose nga e djathta në të majtë. Kjo ndodh vetëm nëse të gjithë operatorët kanë përparësinë _të njejtë_. Ne kemi vetëm një lloj operatori: `+`. Për më tepër, radha e veprimeve matematikore është nga e majta në të djathtë.

`3 + 4` llogaritet së pari. Kjo rezulton në numrin `7`.

`7 + '5'` rezulton në `"75"` për shkak të shndërrimit të tipit (coercion). JavaScript-i e konverton numrin `7` ne një string, shiko pyetjen 15. Ne mund të i bashkojmë dy stringje duke e përdorur operatorin `+`. `"7"` + `"5"` rezulton në `"75"`

</p>
</details>

---

###### 49. What's the value of `num`?

```javascript
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Kthehen vetëm numrat e parë në string. Bazuar në _radix (bazë)_ (argumenti i dytë për të specifikuar se në çfarë tipi duam ta parsojmë atë: bazën 10, heksadecimal, oktal, binar, etj.), `parseInt` kontrollon nëse karakteret në string janë të vlefshme. Pasi të ndeshet me një karakter që nuk është një numër i vlefshëm në bazë, ai ndalon parsimin dhe injoron karakteret e ardhshme.

`*` nuk është numër valid. Parson vetëm `"7"` në decimal `7`. `num` tani mban vlerën `7`.

</p>
</details>

---

###### 50. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Kur iterojmë (map-ojmë) një array, vlera e `num` është e barabartë me elementin që është duke u iteruar aktualisht. Në këtë rast, elementet janë numra, kështu që kushti i deklaratës if `typeof num === "number"` kthen `true`. Funksioni map krijon një grup të ri dhe fut vlerat e kthyera nga funksioni.

Megjithatë, ne nuk kthejmë një vlerë. Kur nuk kthejmë një vlerë nga funksioni, funksioni kthen `undefined`. Për çdo element në array, blloku i funksionit thirret, kështu që për secilin element ne kthejmë `undefined`.

</p>
</details>

---

###### 51. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Argumentet kalohen si _vlerë_, përveç nëse vlera e tyre është një objekt, atëherë ato kalohen si _referencë_. `birthYear` kalohet sipas vlerës, pasi është një string, jo një objekt. Kur kalojmë argumente sipas vlerës, krijohet një _kopje_ e asaj vlere (shih pyetjen 46).

Variabla `birthYear` ka referencë në vlerën `“1997”`. Argumenti `year` gjithashtu ka referencë në vlerën `"1997"`, por nuk është e njëjta vlerë si `birthYear`. Kur përditësojmë vlerën e `year` duke vendosur `year` të barabartë me `"1998"`, ne po përditësojmë vetëm vlerën e `year`. `birthYear` është ende i barabartë me `"1997"`.

Vlera e `person` është objekt. Argumenti `member` ka referencë (të kopjuar) për objektin e njejtë. Kur modifikojmë një veti të objektit që `member` ka një referencë, vlera e `person` gjithashtu do të modifikohet, pasi të dy kanë një referencë për të njëjtin objekt. Vetia `name` e `person` tani është e barabartë me vlerën `"Lydia"`.

</p>
</details>

---

###### 52. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Me deklaratën `throw`, ne mund të krijojmë gabime (error) të personalizuara. Me këtë deklaratë, ju mund të bëni përjashtime. Një përjashtim mund të jetë një string, një numër, një boolean ose një objekt. Në këtë rast, përjashtimi ynë është stringy `'Hello world!'`.

Me deklaratën `catch`, ne mund të specifikojmë se çfarë të bëjmë nëse një përjashtim hidhet në bllokun `try`. Bëhet një përjashtim: stringu `'Hello world!'`. `e` tani është e barabartë me atë string, të cilin e regjistrojmë. Kjo rezulton në `'Oh an error: Hello world!'`.

</p>
</details>

---

###### 53. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Kur një konstruktor thirret me fjalën kyçe `new`, ai krijon një objekt dhe vendos fjalën kyçe `this` për t'iu referuar atij objekti. Si parazgjedhje, nëse konstruktori nuk kthen asgjë në mënyrë të qartë, ai do të kthejë objektin e krijuar së fundi.

Në këtë rast, konstruktori `Car` kthen në mënyrë eksplicite një objekt të ri me `make` të vendosur në `"Maserati"`, i cili mbishkruan sjelljen e paracaktuar. Prandaj, kur thirret `New Car()`, objekti i kthyer i caktohet `myCar`, duke rezultuar në daljen `“Maserati”` kur qaset `myCar.make`.

</p>
</details>

---

###### 54. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

`let x = (y = 10);` është shkurtesë për:

```javascript
y = 10;
let x = y;
```

Kur e vendosim `y` të barabartë me `10`, ne në të vërtetë e shtojmë vetinë `y` në objektin global (`window` në browser, `global` në Node). Në browser, `window.y` është tani e barabartë me `10`.

Më pas, ne deklarojmë variablën `x` me vlerën `y`, e cila është `10`. Variablat e deklaruara me fjalën kyçe 'let' janë _block scoped_, ato përcaktohen vetëm brenda bllokut ku janë deklaruar; shprehja e funksionit të thirrur menjëherë (IIFE) në këtë rast. Kur përdorim operatorin `typeof`, operandi `x` nuk është i përcaktuar: ne po përpiqemi të qasim `x` jashtë bllokut ku ai është deklaruar. Kjo do të thotë se `x` nuk është përcaktuar. Vlerat e të cilave nuk u është caktuar një vlerë ose nuk janë deklaruar janë të tipit `"undefined"`. `console.log(typeof x)` kthen `"undefined"`.

Megjithatë, ne krijuam një variabël globale `y` kur vendosëm `y` të barabartë me `10`. Kjo vlerë është e qasshme kudo në kodin tonë. `y` është përcaktuar dhe mban vlerën e tipit `"number"`. `console.log(typeof y)` kthen `"number"`.

</p>
</details>

---

###### 55. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Ne mund të fshijmë veti nga objektet duke përdorur fjalën kyçe `delete`, gjithashtu në prototip. Duke fshirë një veti në prototip, ajo nuk është më e qasshme në zinxhirin e prototipit. Në këtë rast, funksioni `bark` nuk është më i qasshëm në prototip pas `delete Dog.prototype.bark`, por ne ende provojmë të i qasemi.

Kur përpiqemi të thërrasim diçka që nuk është funksion, hidhet një 'TypeError'. Në këtë rast `TypeError: pet.bark is not a function`, pasi `pet.bark` është `undefined`.

</p>
</details>

---

###### 56. Cila është vlera e saj?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Objekti `Set` është një koleksion vlerash _unike_: një vlerë mund të paraqitet vetëm një herë në një grup (set).

Vendosëm `[1, 1, 2, 3, 4]` me një vlerë dublikate `1`. Meqenëse nuk mund të kemi dy vlera të njëjta në një "set", njëra prej tyre largohet. Kjo rezulton në `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Një modul i importuar mund vetëm të i lexohet vlera (_read-only_): nuk mund të modifikohet. Vetëm moduli i cili i importon ato mund të ndërrojë atë vlerë.

Kur tentojmë të rrisim vlerën e `myCounter`, do të marrim një error: `myCounter` mundet vetëm të lexohet dhe nuk mund të modifikohet.

</p>
</details>

---

###### 58. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Operatori "delete" kthen një vlerë booleane: `true` në fshirje të suksesshme, përndryshe do të kthejë `false`. Megjithatë, variablat e deklaruara me fjalën kyçe `var`, `const` ose `let` nuk mund të fshihen duke përdorur operatorin  `delete`.

Variabla `name` u deklarua me fjalën kyçe `const`, kështu që fshirja e saj nuk ishte e suksesshme: u kthye `false`. Kur vendosëm `age` të barabartë me `21`, ne në fakt shtuam një veti të quajtur `age` në objektin global. Ju mund të fshini me sukses vetitë nga objektet në këtë mënyrë, gjithashtu edhe objektin global, kështu që `delete age` kthen `true`.

</p>
</details>

---

###### 59. Cila është vlera e saj?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Ne mund të targetojmë vlerat nga vargjet ose vetitë nga objektet përmes destrukturimit. Për shembull:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

Vlera `a` tani është `1`, dhe vlera `b` tani është `2`. Çfarë ne bëmë në të vërtetë në pyetje, është:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Kjo do të thotë se vlera e `y` është e barabartë me vlerën e parë në array, që është numri `1`. Kur printojmë `y`, do të kthehet `1`.

</p>
</details>

---

###### 60. Cila është vlera e saj?

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Është e mundur të kombinohen objektet duke përdorur operatorin e përhapjes (spread) `...`. Kjo ju lejon të krijoni kopje të çifteve çelës/vlerë të një objekti dhe t'i shtoni ato në një objekt tjetër. Në këtë rast, ne krijojmë kopje të objektit `user` dhe i shtojmë ato në objektin `admin`. Objekti `admin` tani përmban çiftet e kopjuara të çelësit/vlerës, që rezulton në `{ admin: true, emri: "Lydia", mosha: 21 }`.

</p>
</details>

---

###### 61. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me metodën `defineProperty`, ne mund të shtojmë veti të reja në një objekt, ose të modifikojmë ato ekzistuese. Kur shtojmë një veti në një objekt duke përdorur metodën `defineProperty`, ato janë si parazgjedhje _not enumerable_. Metoda `Object.keys` kthen të gjithë emrat e vetive _numerable_ nga një objekt, në këtë rast vetëm `"name"`.

Vetitë e shtuara duke përdorur metodën `defineProperty` janë të pandryshueshme si parazgjedhje. Ju mund ta mbishkruani këtë sjellje duke përdorur veçoritë `writable`, `configurable` dhe `enumerable`. Në këtë mënyrë, metoda `defineProperty` ju jep shumë më tepër kontroll mbi vetitë që po i shtoni një objekti.

</p>
</details>

---

###### 62. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Argumenti i dytë i "JSON.stringify" është _zëvendësuesi_. Zëvendësuesi mund të jetë ose një funksion ose një array, dhe ju lejon të kontrolloni se çfarë dhe si duhet të konvertohet një vlerë e JavaScript në JSON string.

Nëse zëvendësuesi është një _array_, vetëm emrat e vetive të përfshira në array do të shtohen në stringun JSON. Në këtë rast, përfshihen vetëm vetitë me emrat `"level"` dhe `"health"`, përjashtohet `"username"`. `data` tani është e barabartë me `"{"level":19, "health":90}"`.

Nëse zëvendësuesi është një _funksion_, ky funksion thirret në çdo veti në objektin që po e përdorni metodën 'stringify'. Vlera e kthyer nga ky funksion do të jetë vlera e vetive kur të shtohet në vargun JSON. Nëse vlera është `undefined`, kjo veti përjashtohet nga vargu JSON.

</p>
</details>

---

###### 63. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Operatori unar `++` fillimisht kthen vlerën e operandit, pastaj e rrit vlerën e tij. Vlera e `num1` është `10`, meqenëse funksioni `increaseNumber` fillimisht kthen vlerën e `num`, e cila është `10`, dhe vetëm pastaj e rrit vlerën e `num`.

`num2` është `10`, pasi ne e kaluam `num1` si argument tek `increasePassedNumber`. `number` është i barabartë me `10`(vlera e  `num1`). Përsëri, operatori unar `++` _së pari kthen_ vlerën e operandit, dhe pastaj rrit vlerën e tij. Vlera e `number` është `10`, kështu që `num2` është e barabartë me `10`.

</p>
</details>

---

###### 64. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Në ES6, ne mund të inicializojmë parametrat me një vlerë të paracaktuar (default). Vlera e parametrit do të jetë vlera e paracaktuar, nëse asnjë vlerë tjetër nuk i është kaluar funksionit, ose nëse vlera e parametrit është `"undefined"`. Në këtë rast, ne i shpërndajmë vetitë e objektit `value` në një objekt të ri, kështu që `x` ka vlerën e paracaktuar të `{ number: 10 }`.

Argumenti i paracaktuar vlerësohet (llogaritet) në _kohën e thirrjes_! Sa herë që thërrasim funksionin, krijohet një objekt i ri. Ne e thërrasim funksionin `multiply` dy herët e para pa kaluar vlerën: `x` ka vlerën e paracaktuar të `{ number: 10 }`. Më pas printojmë vlerën e shumëzuar të atij numri, që është `20`.

Herën e tretë që thërrasim funksionin `multiply`, kalojmë një argument: objektin e quajtur `value`. Operatori `*=` është në fakt shkurtesë për `x.number = x.number * 2`: ne e modifikojmë vlerën e `x.number` dhe printojmë vlerën e shumëzuar `20`.

Herën e katërt, ne e kalojmë përsëri objektin `value`. `x.number` është modifikuar më parë në `20`, kështu që `x.number *= 2` printon `40`.

</p>
</details>

---

###### 65. Cila është vlera e saj?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` dhe `3` `3` dhe `6` `4`
- B: `1` `2` dhe `2` `3` dhe `3` `4`
- C: `1` `undefined` dhe `2` `undefined` dhe `3` `undefined` dhe `4` `undefined`
- D: `1` `2` dhe `undefined` `3` dhe `undefined` `4`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Argumenti i parë që merr metoda `reduce` është _akumulatori_, në këtë rast `x`. Argumenti i dytë është _vlera aktuale_, `y`. Me metodën e reduktimit, ne ekzekutojmë një funksion të kthimit (callback) në çdo element në array, i cili përfundimisht mund të rezultojë në një vlerë të vetme.

Në këtë shembull, ne nuk jemi duke kthyer ndonjë vlerë, jemi vetëm duke printuar vlerat e akumulatorit dhe vlerën aktuale.

Vlera e akumulatorit është e barabartë me vlerën e kthyer më parë të funksionit të kthimit (callback). Nëse nuk e kaloni argumentin opsional `initialValue` në metodën `reduce`, akumuluesi është i barabartë me elementin e parë në thirrjen e parë.

Në thirrjen e parë, akumuluesi (`x`) është `1`, dhe vlera aktuale (`y`) është `2`. Ne nuk kthehemi nga callback, ne printojmë akumuluesin dhe vlerën aktuale: `1` dhe `2` printohen.

Nëse nuk ktheni një vlerë nga një funksion, ai kthen `undefined`. Në thirrjen tjetër, akumuluesi është `undefined` dhe vlera aktuale është `3`. `undefined` dhe `3` printohet.

Në thirrjen e katërt, ne përsëri nuk kthehemi nga callback. Akumulatori është përsëri `undefined` dhe vlera aktuale është `4`. `undefined` dhe `4` printohen.

</p>
</details>

---

###### 66. Me cilin konstruktor mund të zgjerojmë me sukses klasën 'Dog'?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Në një klasë të derivuar, ju nuk mund të përdorni fjalën kyçe `this` përpara se të e thirrni `super`. Nëse provoni ta bëni këtë, do të jap `ReferenceError`: 1 dhe 4 do të hedhin një gabim referimi.

Me fjalën kyçe `super`, ne e thërrasim konstruktorin e asaj klase mëmë me argumentet e dhëna. Konstruktori i prindit merr argumentin `name`, kështu që ne duhet të kalojmë `name` në `super`.

Klasa `Labrador` merr dy argumente, `name` meqenëse trashëgon klasën 'Dog', dhe `size` si një veti shtesë në klasën `Labrador`. Ata të dy duhet t'i kalojnë konstruktorit në `Labrador`, i cili implementohet saktë duke përdorur konstruktorin 2.

</p>
</details>

---

###### 67. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me fjalën kyçe `import`, të gjitha modulet e importuara parsohen fillimisht (_para-parsed_). Kjo do të thotë që modulet e importuara ekzekutohen _të parat_, kodi në file që importon modulin ekzekutohet _më pas_.

Ky është një dallimi në mes `require()` në CommonJS dhe `import`! Me `require()`, mund të ngarkoni varësitë sipas kërkesës gjatë ekzekutimit të kodit. Nëse do të kishim përdorur `require` në vend të `import`, `running index.js`, `running sum.js`, `3` do të ishte printuar në tastierë.

</p>
</details>

---

###### 68. Cila është vlera e saj?

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Çdo Symbol është tërësisht unik. Arsyeja e jepjes të argumentit në Symbol është të i jap përshkrim Symbol. Vlera e Symbol nuk është e varur nga argumenti i cili i ipet. Meqenëse po testojmë barazueshmërinë, ne jemi duke krijuar dy Symbol tërësisht të reja: `Symbol('foo')` i parë dhe `Symbol('foo)` i dytë. Të dy janë vlera unike dhe jo të barabarta me njëra tjetrën, `Symbol('foo') === Symbol('foo')` kthen `false`.

</p>
</details>

---

###### 69. Cila është vlera e saj?

```javascript
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me metodën `padStart`, mund të shtojmë mbushje (padding) në fillim të një stringu. Vlera e kaluar në këtë metodë është gjatësia totale e stringut së bashku me mbushjen. Vargu "Lydia Hallie" ka një gjatësi prej `12` karakteresh. `name.padStart(13)` vendos 1 hapësirë në fillim të vargut, sepse 12 + 1 është 13.

Nëse argumenti i kaluar në metodën `padStart` është më i vogël se gjatësia e array, nuk do të shtohet asnjë mbushje.

</p>
</details>

---

###### 70. Cila është vlera e saj?

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: Një varg që përmban kodin për t'i shfaqur këto simbole
- D: Error

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Me operatorin `+`, ju mund të bashkoni vargjet. Në këtë rast, ne po bashkojmë stringun `"🥑"` me stringun `"💻"`, duke rezultuar në `"🥑💻"`.

</p>
</details>

---

###### 71. How can we log the values that are commented out after the console.log statement?

```javascript
function* startGame() {
  const Përgjigja = yield 'Do you love JavaScript?';
  if (Përgjigja !== 'Yes') {
    return "Oh wow... Guess we're done here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` dhe `game.next().value`
- B: `game.next.value("Yes")` dhe `game.next.value()`
- C: `game.next().value` dhe `game.next("Yes").value`
- D: `game.next.value()` dhe `game.next.value("Yes")`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Një funksion gjenerues (generator function) "pauzon" ekzekutimin e tij kur sheh fjalën kyçe `yield`. Së pari, duhet ta lëmë funksionin të japë vargun "A ju pëlqen JavaScript?", i cili mund të bëhet duke thirrur `game.next().value`.

Çdo rresht ekzekutohet derisa të gjejë fjalën kyçe të parë "yield". Ekziston një fjalë kyçe `yield` në rreshtin e parë brenda funksionit: ekzekutimi ndalon me yield-in e parë! _Kjo do të thotë se variabla `Përgjigja` nuk është përcaktuar ende!_

Kur e thërrasim `game.next("Po").value`, `yield` i mëparshëm zëvendësohet me vlerën e parametrave të kaluar në funksionin `next()`, `"Yes"` në këtë rast. Vlera e ndryshores `Përgjigja` tani është e barabartë me `"Yes"`. Kushti i deklaratës if kthehet `false`, dhe `JavaScript loves you back ❤️` printohet.

</p>
</details>

---

###### 72. Cila është vlera e saj?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` &nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n`  &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

`String.raw` kthen një varg ku karakteret speciale (`\n`, `\v`, `\t` etj.) injorohen! Vizat e pasme mund të jenë një problem pasi mund të përfundoni me diçka si:

`const path = `C:\Documents\Projects\table.html``

E cila do të rezultonte në:

`"C:DocumentsProjects able.html"`

Me `String.raw`, vetëm do e injoronte karakterin special dhe do të printonte:

`C:\Documents\Projects\table.html`

Në këtë rast, `Hello\nworld` do të printohet.

</p>
</details>

---

###### 73. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Një funksion asinkron gjithmonë kthen një "promise". `await` duhet të pres për funksionin "promise" te zgjidhjet: një "promise" në pritje do të kthehet kur e thirrim `getData()` në mënyrë që të vendosim `data` në të.

Nëse do të dëshironim të kemi qasje në vlerën e zgjidhur `"I made it"` do të kishim përdorur metodën `.then()` në `data`:

`data.then(res => console.log(res))`

Kjo do të printonte `"I made it!"`

</p>
</details>

---

###### 74. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Metoda `.push()` kthen _gjatësinë_ e vargut "array" të ri! Më parë, array përmbante një element (stringun `"banana"`) dhe kishte gjatësinë `1`. Pasi shtuam stringun `"apple"` në array, ai do të përmbajë dy elemente dhe do të ketë gjatësinë `2`. Kjo kthehet nga funksioni `addToList`.

Metoda `push` modifikon array origjinal. Në qoftëse ju dëshironi të ktheni _array_ nga funksioni në vend të _gjatësisë së vargut_, ateherë ju duhet të ktheni `list` pasi e vendosni `item` në të.

</p>
</details>

---

###### 75. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

`Object.freeze` e bën të pamundur shtimin, largimin ose modifikimin e vetive në një objekt (përveç nëse vlera e një vetie është një objekt tjetër).

Kur krijojmë ndryshoren `shape` dhe e vendosim të barabartë me objektin e ngrirë `box`, `shape` i referohet gjithashtu një objekti të ngrirë. Ju mund të kontrolloni nëse një objekt është i ngrirë duke përdorur `Object.isFrozen`. Në këtë rast, `Object.isFrozen(shape)` do të kthehej e vërtetë, pasi variabla `shape` ka një referencë për një objekt të ngrirë.

Meqenëse `shape` është e ngrirë dhe meqenëse vlera e `x` nuk është një objekt, ne nuk mund të modifikojmë vetinë `x`. `x` është ende e barabartë me `10` dhe `{ x: 10, y: 20 }` do të printohet.

</p>
</details>

---

###### 76. Cila është vlera e saj?

```javascript
const { firstName: myName } = { firstName: 'Lydia' };

console.log(firstName);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Duke përdorur [sintaksen e funksioneve destruktuese](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ne mund të targetojmë vlerat nga vargjet, ose vetitë nga objektet, në variabla të veçanta:

```javascript
const { firstName } = { firstName: 'Lydia' };
// versioni i ES5:
// var firstName = { firstName: 'Lydia' }.firstName;

console.log(firstName); // "Lydia"
```

Gjithashtu, një veti mund të targetohet nga një objekt dhe t'i caktohet një variableje me një emër të ndryshëm nga vetia e objektit:

```javascript
const { firstName: myName } = { firstName: 'Lydia' };
// versioni i ES5:
// var myName = { firstName: 'Lydia' }.firstName;

console.log(myName); // "Lydia"
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

Prandaj, `firstName` nuk ekziston si variabël, kështu që tentimi për të qasur vlerën e saj do të ngrejë një `ReferenceError`.

**Shënim:** Kujdes nga vetitë e  `global scope`:

```javascript
const { name: myName } = { name: 'Lydia' };

console.log(myName); // "lydia"
console.log(name); // "" ----- Browser psh. Chrome
console.log(name); // ReferenceError: name is not defined  ----- NodeJS

```

Kurdo që JavaScript nuk mundet të gjejë një varibël në _current scope_, ngrihet në [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) dhe kërkon për të dhe në qoftëse e arrin nivelin më të lartë të shtrirjes (the top-level scope), të quajtur  __Global scope__, dhe ende nuk e gjen do të ngrejë `ReferenceError`.

- Në __Browsers__ si _Chrome_, `name` është _vetia e shtrirjes globale e vjetëruar_. Në këtë shembull, kodi funksionon brenda _global scope_ dhe nuk ka asnjë variabël lokale të përcaktuar nga përdoruesi për `name`, prandaj ai kërkon _variables/properties_ të paracaktuara në shtrirjen globale, në këtë rast shfletuesve, ai kërkon përmes objektit `window`, dhe do të nxjerrë vlerën [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) e cila është e barabartë me një varg __bosh__.
- Në __NodeJS__, nuk ka një veçori të tillë në objektin `global`, kështu që përpjekja për të iu qasur një variable joekzistente do të ngrejë një [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined).

</p>
</details>

---

###### 77. A është ky një funksion i pastër?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Po
- B: Jo

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Një funksion është gjithmonë funksion i pastër nëse sa herë që i kalojmë argumente të njëjta gjithmonë kthen rezultatin e njëjtë.

Funksioni `sum` _gjithmonë_ kthen të njëjtin rezultat. Nëse i kalojmë `1` dhe `2`, gjithmonë do të kthejë `3` pa ndonjë efekt anësorë. Nëse i kalojmë `5` dhe `10`, gjithmonë do të kthejë `15`, e kështu me radhë. Ky është definicioni i një funksioni të pastër.

</p>
</details>

---

###### 78.  Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Funksioni `add` është një funksion _memoized_. Me memoizim, ne mund të ruajmë rezultatet e një funksioni në mënyrë që të përshpejtojmë ekzekutimin e tij. Në këtë rast, ne krijojmë një objekt `cache` që ruan vlerat e kthyera më parë.

Nëse e thirrim sërish funksionin `addFunction` me të njëjtin argument, ai fillimisht kontrollon nëse e ka marrë tashmë atë vlerë në cache-in e tij. Nëse është kështu, vlera e caches do të kthehet, e cila kursen kohën e ekzekutimit. Përndryshe, nëse nuk është i ruajtur në memorie, ai do të llogarisë vlerën dhe do ta ruajë atë më pas.

Ne e thirrim funksionin `addFunction` tre herë me të njëjtën vlerë: në thirrjen e parë, vlera e funksionit kur `num`" është e barabartë me `10` nuk është ruajtur ende në memorie. Kushtëzimi if `num in cache` kthen `false`, dhe blloku else ekzekutohet: `Calculated! 20` printohet dhe vlera e rezultatit i shtohet objektit të cache-it. `cache` tani duket si `{ 10: 20 }`.

Herën e dytë, objekti `cache` përmban vlerën që kthehet për `10`. Kushtëzimi if `num in cache` kthen `true`, dhe `'From cache! 20'` printohet.

Herën e tretë, ne kalojmë `5 * 2` te funksioni i cili llogaritet si `10`. Objekti `cache` përmban vlerën që kthehet për `10`. Kushtëzimi if `num in cache` kthen `true`, dhe `'From cache! 20' printohet.

</p>
</details>

---

###### 79.  Cila është vlera e saj?

```javascript
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` dhe `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` dhe `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` dhe `0` `1` `2` `3`
- D: `0` `1` `2` `3` dhe `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Me unazën _for-in_, ne mund të iterojmë në vetitë _e numërueshme_. Në një array, vetitë e numërueshmë janë "çelësat" e elementeve të array, të cilët janë në të vërtetë indekset e tij. Mund të shikoni array si:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Ku çelësat janë vetitë e numërueshme. `0` `1` `2` `3` printohet.

Me unazën _for-of_, ne mund të iterojmë mbi __iterables__. Një array është një "iterable". Kur iterojmë mbi array, variabla "item" është e barabartë me elementin mbi të cilin po iterojmë aktualisht, "☕"` `"💻"` `"🍷"` `"🍫"` printohet.

</p>
</details>

---

###### 80.  Cila është vlera e saj?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Elementet e array mund të mbajnë çfarë vlere. Numra, stringje, objekte, array të tjerë, null, vlera boolean-e, undefined, dhe shprehje të tjera si data, funksione dhe kalkulime.

Elementi do të jetë i barabartë me vlerën e kthyer. `1 + 2` kthen `3`, `1 * 2` kthen `2` dhe `1 / 2` kthen `0.5`.

</p>
</details>

---

###### 81.  Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Paraprakisht, argumentet kane vlerën `undefined`, përveç në qoftëse ndonjë vlerë i kalohet në funksion. Në këtë rast, ne nuk e kaluam ndonjë vlerë për argumentin `name`. `name` është e barabartë me `undefined` e cila edhe printohet.

Në ES6, ne mund të mbishkruajmë këtë vlerë paraprake `undefined` me parametër të definuar paraprakisht. Për shembull:

`function sayHi(name = "Lydia") { ... }`

Në këtë rast, nëse ne nuk kalojmë ndonjë vlerë ose e kalojmë `undefined`, `name` do të ishte gjithmonë i barabartë me stringun `Lydia`.

</p>
</details>

---

###### 82.  Cila është vlera e saj?

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

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Vlera e fjalës kyçe `this` varet nga vendi ku e përdorni. Në një __metodë__, si metoda `getStatus`, fjala kyçe `this` i referohet _objektit që i përket metoda_. Metoda i përket objektit `data`, kështu që `this` i referohet objektit `data`. Kur printojmë `this.status`, vetia `status` në objektin `data` printohet, që është `"🥑"`.

Me metodën `call`, ne mund të ndryshojmë objektin të cilit i referohet fjala kyçe `this`. Në __funksione__, fjala kyçe `this` i referohet _objektit të cilit i përket funksioni_. Ne deklaruam funksionin `setTimeout` në objektin _global_, kështu që brenda funksionit `setTimeout`, fjala kyçe `this` i referohet objektit _global_. Në objektin global, ekziston një variabël e quajtur _status_ me vlerën `"😎"`. Kur printoni `this.status`, `"😎"` printohet.

</p>
</details>

---

###### 83.  Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

0Vendosëm variablën `city` të barabartë me vlerën e vetisë të quajtur `city` në objektin `person.`. Në objekt nuk ka ndonjë veti e cila quhet `city`, kështu që variabla `city` ka vlerën `undefined`.

Vini re, ne _nuk_ jemi duke iu referuar objektit `person`! Ne vetëm e vendosëm variablën `city` të barabartë me vlerën aktuale të vetisë `city` në objektin `person`.

Pastaj, ne vendosëm `city` të barabartë me stringun `"Amsterdam"`. Kjo nuk e ndryshon objektin person: nuk ka ndonjë referencë tek ai objekt.

Kur printojmë objektin `person`. objekti i pamodifikuar kthehet.

</p>
</details>

---

###### 84.  Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Variablat e deklaruara me fjalët kyçe `const` dhe `let` janë të qasshme vetëm në bllokun ku shtrihen (_block-scoped_). Një bllok quhet gjithçka që gjendet brenda kllapave gjarpërore (`{ }`). Në këtë rast, kllapat gjarpërore e deklarimeve if/else. Nuk mund të i referencohemi një variable jashtë bllokut ku është deklaruar, sepse do të ngrihet ReferenceError.

</p>
</details>

---

###### 85. Çfarë lloj informacioni do të printohet?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));
```

- A: Rezultati i metodës `fetch`.
- B: Rezultati i thirrjes së dytë së metodës `fetch`.
- C: Rezultati i callback paraprak `.then()`
- D: Do të jetë gjithmonë undefined.

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Vlera e `res` në `.then` të dytë do të jetë e barabartë me vlerën e kthyer në `.then` paraprak. You mund të bëni `.then`-ë të tjerë si në shembull, ku vlera do të kalohet në trajtuesin tjetër.

</p>
</details>

---

###### 86. Cili opsion do të mundësojë që të vendosim `hasName` të barabartë me `true`, nuk mund të kaloni si argument vlerën `true`?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Me `!!name`, ne vendosim në qoftëse vlera e `name` është e vërtetë osë false. Nëse "name" është e vërtetë, për të cilën duam të testojmë, `!name` kthen `false`. `!false` (e cila është vlera të cilën `!!name` ka) kthen `true`.

Kur vendosim `hasName` të barabartë me `name`, ju vendosni `hasName` të barabartë me çdo vlerë të cilën e kaloni si arguemnt tek funksioni `getName`, jo vlera boolean-e `true`.

`new Boolean(true)` kthen një mbështjellës së objektit, jo vetë vlerën boolean-e.

`name.length` kthen gjatësinë e argumentit të kaluar, jo në qoftëse është `true` ose jo.

</p>
</details>

---

###### 87. Cila është vlera e saj?

```javascript
console.log('I want pizza'[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Në mënyrë që të marrim karakterin në një indeks specifik në string, mund të përdorimin notacionin e kllapave të mëdha "[]". Karakteri i parë në string ka indeksin 0, dhe kështu me rradhë. Në këtë rast, ne duam të marrim elementin me indeks 0, karakterin `"I"`, i cili printohet.

Vini re se kjo metodë nuk suportohet në IE7 e më poshtë. Në këtë rast përdorni `.charAt()`.

</p>
</details>

---

###### 88. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Ne mund të përcaktojmë një vlerë paraprakisht të barabartë me ndonjë parametër tjetër të funksionit, përderisa ato janë të deinuara përpara vlerës së paradefinuar. Ne e kalojmë vlerën `10` tek funksioni `sum`. Nëse funksioni `sum` pranon vetëm një argument, do të thotë se vlera për `num2` nuk është kaluar, dhe vlera e `num1` është e barabartë me vlerën `10` e cila ka kaluar si argument në këtë rast. Vlera e paradefinuar e `num2` është vlera e `num1`, e cila është `10`. `num1 + num2` kthen `20`.

Në qoftëse provoni të vendosni një vlerë të paradefinuar të barabartë me një parametër i cili definohet _pastaj_ (në të djathë), vlera e parametrit nuk do të jetë e inicializuar ende, e cila do të kthejë një error.

</p>
</details>

---

###### 89. Cila është vlera e saj?

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
- D: Global object of `module.js`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Me sintaksën `import * as name`, ne importojmë _të gjithë eksportet_ nga fajlli `module.js` në `index.js` si një objekt i ri i cili quhet `data` i cili krijohet. Në `module.js`, gjenden dy eksporta: eksporti i paracaktuar dhe një eksport i emërtuar. Eksporti i paracaktuar është funksion i cili kthen stringun `Hello World`, dhe esksporti i emëruar është variabla e quajtur `name` e cila ka vlerën e stringut `"Lydia"`.

Objekti `data` ka një veti `default` për eksportin e paracaktuar, vetitë e tjera kanë emrat e eksporteve të emëruara dhe vlerat e tyre korrespoduese.

</p>
</details>

---

###### 90. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Klasat janë si sintaksë që është krijuar për t'i bërë gjërat më të lehta për t'u lexuar ose për t'u shprehur për funksionet e konstruktorëve. Ekuivante e klasës `Person` si funksion kontruktorë do të ishte:

```javascript
function Person(name) {
  this.name = name;
}
```

Thirrja e një konstruktori me `new` rezulton në krijimin e një instance të `Person`, `typeof` do të kthejë `"object"` për një instancë. `typeof member` kthen `"object"`.

</p>
</details>

---

###### 91. Cila është vlera e saj?

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Metoda `.push` kthen _gjatësinë e re_ të array, jo vetë array! Duke vendosur `newList` të barabartë me `[1, 2, 3].push(4)`, e vendosim `newList` të barabartë me gjatësinë e re të array: `4`.

Pastaj, ne provojmë të përdorim metodën `.push`  në `newList`. Meqenëse `newList` është vlera numerike e `4` ne nuk mund të përdorim metodën `.push`: do të ngrihet TypeError.

</p>
</details>

---

###### 92. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Funskionet e rregullta, të tillë si funksioni `giveLydiaPizza`, kanë vetinë `prototype`, e cila është një objekt (veti e objektit) me veti `constructor`. Funksionet shigjetë (arrow functions) sidoqoftë, të tilla si funskioni `giveLydiaChocolate`, nuk e kanë këtë veti `prototype`. Kur tentojmë të i qasemi vetisë `prototype` duke pëdorur `giveLydiaChocolate.prototype` do të na kthehet `undefined`.

</p>
</details>

---

###### 93. Cila është vlera e saj?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]`
- C: `["name", "age"]` and `undefined`
- D: `Error`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

`Object.entries(person)` kthen një array me array të ndërthurur, i cili përmban çelësat dhe objektet:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

Përdorimi i unazës `for-of`, na mundëson iterimin në secilin element në array, dhe nën array në këtë rast. Ne mund të destrukturojmë nën array menjëherë në unazën for-of, duke përdorur `const [x, y]`. `x` është e barabartë me elementin e parë në nën array, `y` është e barabartë me elementin e dytë në nën array.

Nën array i parë është `["name", "Lydia"]`, me `x` të barabartë me `"name"`, dhe `y` të barabartë me `"Lydia"`, e cila printohet. Nën array i dytë është `["age", 21 ]`, me `x` të barabartë me `"age"`, dhe `y` të barabartë me `21`, e cila printohet.

</p>
</details>

---

###### 94. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

`...args` është "rest" parametër. Vlera e "rest" parametrit është një array i cili përmban të gjitha argumentet e mbetura, **dhe mund të jetë vetëm parametri i fundit**! Në këtë shembull, "rest" parametri ishte parametri i dytë. Kjo nuk është e mundur, dhe do të ngrisë gabim sintaksorë.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
```

Shembulli i mësipërm funskionon. Do të kthejë array `[ 'banana', 'apple', 'orange', 'pear' ]`

</p>
</details>

---

###### 95. Cila është vlera e saj?

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

- A: `a is bigger`, `6` dhe `b is bigger`, `3`
- B: `a is bigger`, `undefined` dhe `b is bigger`, `undefined`
- C: `undefined` dhe `undefined`
- D: `SyntaxError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Në JavaScript, nuk e duhet të e shkruajmë pikëpresjen `;` në mënyrë eksplicite, sidoqoftë makina e JavaScript prapë i vendos ato pas deklarimeve. Kjo quhet __Automatic Semicolon Insertion__ (vendosja e pikëpresjes automatikisht). Një deklaratë për shembull mund të jetë variabla, ose fjalët kyçe si `throw`, `return`, `break` etj.

Në këtë rast, ne shkruajtëm deklaratën `return`, dhe vlerën tjetër `a + b` në rresht të ri. Sidoqoftë, meqenëse është rresht i ri, makina nuk e di se në të vërtetë ajo është vlera që ne po dëshirojmë të kthejmë. Në vend se të e llogarisë në atë mënyrë, në mënyrë automatike vendoset `return`. Kjo mund të shikohet edhe si kjo sintaksë:

```javascript
return;
a + b;
```

Kjo do të thotë se `a + b` nuk arrihet asnjëherë, meqenëse funksioni ndalon ekzekutimin pas fjalës kyçe `return`. Nëse asnjë vlerë nuk kthehet si në këtë rast, funksioni kthen `undefined`. Vini re se nuk ka ndonjë përfshirje automatike pas deklarimit `if/else`

</p>
</details>

---

###### 96. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Ne mund të iu shoqërojmë klasave konstruktorët e tjerë të klasave/funksioneve. Në këtë rast, ne vendosim `Person` të barabartë me `AnotherPerson`. Emri në këtë konstruktor është `Sarah`, kështu që vetia e emrit në instancën e re `Person`, `member` është `“Sarah”`.

</p>
</details>

---

###### 97. Cila është vlera e saj?

```javascript
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` dhe `["{Symbol('a')"]`
- B: `{}` dhe `[]`
- C: `{ a: "b" }` dhe `["a"]`
- D: `{Symbol('a'): 'b'}` dhe `[]`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Një Symbol nuk është i _numërueshëm_. Metoda Object.keys kthen të gjithë çelësat e _numërueshëm në një objekt. Symbol nuk do të jetë i dukshëm, dhe një array i zbrazët do të kthehet. Kur e printojmë objektin në tërësi, të gjitha vetitë janë të dukshme, edhe ato të cilat nuk janë te numërueshme.

Kjo është vetëm një nga shumë vetitë e symbol, përveç përfaqësimit të një vlere krejtësisht unike (e cila parandalon konflikt  në emërtim të objekteve, për shembull kur punoni me 2 librari që duan të shtojnë vetitë në të njëjtin objekt), ju gjithashtu mund të "fshehni" vetitë e objekteve në këtë mënyrë (edhe pse jo plotësisht. Ju mund t'i qaseni simboleve duke përdorur metodën `Object.getOwnPropertySymbols()`).

</p>
</details>

---

###### 98. Cila është vlera e saj?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `SyntaxError`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Funksioni `getList` merr një array si argument. Brenda kllapave të funksionit `getList`, ne e destrukturojmë ketë array në mënyrën e duhur. Kjo mund të shihet edhe si:

`[x, ...y] = [1, 2, 3, 4]`

Me "rest" parametrin `...y`, ne i vendosim argumentet "e mbetura" në një array. Argumentet e mbetura janë `2`, `3` dhe `4` në këtë rast. Vlera e `y` është një array, i cili i përmban të gjithë parametrat e mbetur. Vlera e `x` është e barabartë me `1` në këtë rast kur e printojmë `[x, y]`, printohet `[1, [2, 3, 4]]`.

Funskioni `getUser` merr një objekt. Me funksionet shigjetë (arrow function), ne nuk kemi nevojë të shkruajmë kllapat gjarpërore nëse vetëm dëshirojmë të kthejmë një vlerë. Sidoqoftë, nëse dëshironi që në mënyrë instante të ktheni një objekt nga një arrow funksion, mund të e shkruani brenda kllapave të vogla "()", përndryshe çdo gjë mes dy kllapave do të interpretohet si një deklaratë blloku. Në këtë rast kodi në mes të kllapave nuk është kod valid i JavaScript, kështu që do të ngrihet `SyntaxError`.

Funskioni i meposhtëm do të kthente një objekt:

`const getUser = user => ({ name: user.name, age: user.age })`

</p>
</details>

---

###### 99. Cila është vlera e saj?

```javascript
const name = 'Lydia';

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Variabla `name` mban vlerën e një stringu, i cili nuk është funksion, prandaj nuk mund të thirret si i tillë.

TypeErrors do të ngrihen kur një vlerë nuk është e tipit që pritet. JavaScript pret që `name` të jetë një funksion meqenëse po provojmë të e thirrim atë. Sidoqoftë është një string, prandaj do të marrim TypeError: "name" nuk është një funksion.

SyntaxErrors do të ngrihen kur ne shënojmë diçka e cila nuk është valide në JavaScript, për shembull kur e shënojmë fjalën `return` si `retrun`.
ReferenceErrors ngrihen kur Javascript-i nuk është në gjendje të gjejë referencë tek një vlerë të cilën ne provojmë të i qasemi.

</p>
</details>

---

###### 100. Cila është vlera në dalje?

```javascript
// 🎉✨ Kjo është pytja jonë e 100! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

`[]` është vlerë "truthy". Me operatorin `&&`, vlera në anën e djathtë do të kthehet nëse vlera në anën e majtë është vlerë "truthy". Në këtë rast, vlera në anën e majtë `[]` është vlerë "truthy" prandaj `"Im"` do të kthehet.

`""` është vlerë "falsy". Nësë ana e majtë është falsy, asgjë nuk kthehet. `n't` nuk do të kthehet.

</p>
</details>

---

###### 101. Cila është vlera në dalje?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me operatorin `||`, ne mund të kthejmë vlerën e parë "truthy" të operandit. Nëse të gjitha vlerat janë "falsy", operandi i fundit do të kthehet.

`(false || {} || null)`: objekti i zbrazët `{}` është vlerë "truthy". Ky është i pari dhe i vetmi vlerë "truthy", i cili kthehet. `one` është i barabartë me `{}`.

`(null || false || "")`: të gjithë operandët janë vlera "falsy". Kjo do të thotë se operandi i fundit, `""` do të kthehet. `two` është i barabartë me `""`.

`([] || 0 || "")`: array i zbrazët `[]` është vlerë "truthy". Kjo është vlera e parë "truthy" e cila kthehet. `three` është e barabartë me `[]`.

</p>
</details>

---

###### 102. Cila është vlera në dalje?

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

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Me një premtim, në thelb themi _Dëshiroj ta ekzekutoj këtë funksion, por do të e lë mënjanë për momentin ndërsa është duke u ekzekutuar pasi kjo mund të marrë pak kohë. Vetëm kur një vlerë e caktuar zgjidhet (ose refuzohet) dhe kur "call stack" është bosh, unë dua ta përdor këtë vlerë._

Ne mund të marrim këtë rezultat me të dy: `.then` dhe fjalën kyçe `await` në `async` funksione. Edhe pse mund të marrim vlerën e 'promise' me të dy `.then` dhe `await` ato funksionojnë pak më ndryshe.

Në funksionin e parë `firstFunction`, në një mënyrë e vendosim funksionin 'myPromise' mënjanë përgjatë ekzekutimit, por ne e vazhdojmë ekzekutimin e kodit tjetër, i cili në këtë rast është `console.log('second')`. Pastaj, funksioni zgjidhet me stringun `I have resolved`, i cili pastaj printohet pasi që e sheh se call stack është i zbrazët.

Me fjalën kyçe `secondFunction`, në të vërtetë e pauzojmë ekzekutimin e funksionit async derisa vlera të zgjidhet përpara se të vazhdojmë tek rreshti tjetër.

Kjo do të thotë se pret për `myPromise` të zgjidhet me vlerën `I have resolved`, dhe pasi ajo të ndodhë ne vazhdojmë ne rreshtin e ardhshëm: `second` do të printohet.

</p>
</details>

---

###### 103. Cila është vlera në dalje?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Operatori `+` nuk përdoret vetëm vetëm për të mbledhur vlerat numberike, por mund të e përdorim për bashkimin e stringjeve. Sa herë që makina e JavaScript e vëren se një ose më shumë vlera nuk janë numra, e shndërron numrin në string.

Ne fillim është `1` i cili është vlerë numerike. `1 + 2` kthen numrin 3.

Megjithatë, vlera e dytë është string `"Lydia"`. `"Lydia"` është string dhe `2` është numër: `2` shndërrohet në string. `"Lydia"` dhe `"2"` bashkohen, dhe kjo rezulton në stringun `"Lydia2"`.

`{ name: "Lydia"}` është objekt. Nuk është as numër as objekt është string, prandaj i konsideron si stringje të dyja. Sa herë që i konsiderojmë si stringje objektet e zakonshme, behet `"[object Object"]`.`"[object Object"]` bashkohet me `"2"` dhe bëhet `"[object Object]2"`.

</p>
</details>

---

###### 104. Cila është vlera e saj?

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Ne mund të kalojmë qfarëdo vlere që duam te `Promise.resolve`, 'promise' ose 'jo-promise'. Metoda vetë kthen një 'promise' e cila zgjidhet me vlerën (`fulfilled`). Nëse i kaloni një funksion të zakonshëm, do të zgjidhet një promise me një vlerë të zakonshme. Nëse i kaloni një 'promise' si argument, do të zgjidhjet një promise me vlerën e zgjidhur me vlerën që i kalohet si promise.

Në këtë rast, ne vetëm i kaluam si argument vlerën numerike `5`. Kthen promise të zgjidhur me vlerë `5`.

</p>
</details>

---

###### 105. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Objektet vendosen si argumente në bazë të referencës së tyre. Kur i kontrollojmë objektet me operatorin për barazim strikt (`===`), ne po kontorllojmë referencën e tyre.

Ne e paracaktuam vlerën e  `person2` të barabartë me objektin `person`, dhe e kaluam objektin `person` si vlerë të `person1`.

Kjo do të thotë që të dy vlerat kanë referencë të e njejta hapësirë memorike, dhe kështu ato janë të barabarta.

Blloku i kodit në deklarimin `else` ekzekutohet dhe `They are the same!` printohet.

</p>
</details>

---

###### 106. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Në JavaScript, kemi dy mënyra për të iu qasur vetive të një objekti: notacioni me kllapa të mëdha "[]" ose notacioni me pikë ".". Në këtë shembull ne po e perdorim notacionin (`colorConfig.colors`) në vend të notacionit me kllapë (`colorConfig["colors"]`).

Me notacionin me pikë, JavaScript provon të gjejë veti në objekt me saktësisht të njejtin emër. Në këtë shembull, JavaScript provon të gjejë një veti e cila quhet `colors` në objektin `colorConfig`. Nuk ka ndonjë veti të quajtur `colors`, prandaj kjo do të kthejë `undefined`. Pastaj ne provojmë të i qasemi vlerës së elementit të parë ne array duke përdorur `[1]`. Nuk mund të e bëjmë këtë në vlerën e cila është `undefined`, prandaj do të ngrihet `TypeError`: `Cannot read property '1' of undefined`.

JavaScript i interpreton deklarimet. Kur përdorim notacionin me kllapa të mëdha, e sheh kllapën hapëse `[` dhe vazhdon kërkon derisa të gjen kllapën mbyllëse `]`. Vetëm atëherë, e llogarit deklarimin. Nëse do të përdornim `colorConfig[colors[1]]`, do të kishte kthyer vlerën e vetisë `red` në objektin `colorConfig`.

</p>
</details>

---

###### 107. Cila është vlera e saj?

```javascript
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Në prapavijë, emoji-t janë kode të veçanta. Unikodet për emoji-t e zemrës janë `"U+2764 U+FE0F"`. Këto janë gjithmonë të njëjta për të njëjtat emoji, kështu që ne po krahasojmë dy stringje të barabarta me njëri-tjetrin, gjë që ktheh 'e vërtetë'.

</p>
</details>

---

###### 108. Cila nga këto metoda e modifikon array origjinal?

```javascript
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Me motodën `splice`, ne modifikojmë array origjinal duke fshirë, zëvendësuar ose shtuar elemente. Në këtë rast, ne larguam 2 gjëra duke filluar nga indeksi 1 ( larguam `'🥑'` dhe `'😍'`) dhe shtuam ✨ në vend të tyre.

`map`, `filter` dhe `slide` kthen array të ri, `find` kthen një element dhe `reduce` kthen një vlerë të reduktuar.

</p>
</details>

---

###### 109. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Ne vendosëm vlerën e vetisë `favoriteFood` në objektin `info` të barabartë me stringun me emoji-n e picës, `'🍕'`. Një string është një tip i të dhënave primitive. Në JavaScript, tipet primitive të të dhënave nuk ndërveprojnë me referencë.

Në JavaScript, tipet primitive të të dhënave (gjithçka që nuk është objekt) ndërveprojnë me _vlerë_. Në këtë rast, ne vendosim vlerën e vetisë `favoriteFood` në objektin `info` të barabartë me vlerën e elementit të parë në array `food`, stringu me emoji-n e picës në këtë rast (`'🍕'`). Një string është një tip i të dhënave primitive dhe ndërvepron sipas vlerës (shikoni [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) nëse jeni të interesuar të mësoni më shumë)

Më pas, ne ndryshojmë vlerën e vetisë `favoriteFood` në objektin `info`. Vargu `food` nuk ka ndryshuar, pasi vlera e `favoriteFood` ishte thjesht një _kopje_ e vlerës së elementit të parë në grup dhe nuk ka një referencë për të njëjtin vend në memorie si elementi në `food[0]`. Kur printojmë 'food', është ende array origjinal, "['🍕", "🍫", "🥑", "🍔"]".

</p>
</details>

---

###### 110. Çfarë bën kjo metodë?

```javascript
JSON.parse();
```

- A: Parson JSON në një vlerë të JavaScript.
- B: Parson një objekt të JavaScript në JSON.
- C: Parson çfarëdo vlere të JavaScript në JSON.
- D: Parson JSON vetëm në objekt të JavaScript

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Me metodën `JSON.parse()`, ne mund të parsojmë JSON stringun në një vlerë JavaScript-i.

```javascript
// Stringifimi i një numri në një JSON valid, pastaj parsimi i nje4 stringu në vlerë të JavaScript:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Stringifimi i një array në JSON valid, pastaj parsimi i JSON stringut ne një vlerë të JavaScript:
const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Stringifimi i një objekti në JSON valid, pastaj parsimi i JSON stringut në një vlerë të JavaScript:
const jsonArray = JSON.stringify({ name: 'Lydia' }); // '{"name":"Lydia"}'
JSON.parse(jsonArray); // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Secili funksion ka _kontekstin e vetë të ekzekutimit_. Funksioni `getName` së pari shikon brenda kontekstit të tij në qoftëse përmban variablën `name` të cilën po provojmë të i qasemi. Në këtë rast, funksioni `getName` përmban variablën e tij `name`: e deklaruam variablën `name` me fjalën kyçe `let`m dhe i inicializuam vlerën `'Sarah'`.

Variablat me fjalën kyçe `let` (dhe `const`) ngriten (hoistoh-en), por për dallim nga `var` nuk inicializohen. Ato nuk janë të qasshme më herët se rreshti në të cilin janë deklaruar (i kemi deklaruar). Kjo quhet "zona e vdekur e përkohshme" (temporal dead zone). Kur tentojmë të i qasemi variablave përpara se ato të deklarohen, JavaScript hedh `ReferenceError`.

Nëse nuk do të kishim deklaruar `name` brenda funksionit `getName`, makina e JavaScript do të kishte shikuar poshtë _zingjirit të shtrirjes_. Fusha e jashtme ka variabël të quajtur `name` me vlerë `Lydia`. Në këtë rast, do të kishte printuat `Lydia`.

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

###### 112. Cila është vlera e saj?

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

- A: `a` dhe `a`
- B: `a` dhe `undefined`
- C: `['a', 'b', 'c']` dhe `a`
- D: `a` dhe `['a', 'b', 'c']`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me fjalën kyçe `yield`, ne i japim vlerat në një funksion gjenerator. Me fjalën kyçe `yield*`, ne mund të nxjerrim vlera nga një funksion tjetër gjenerues, ose objekt i iterueshëm (për shembull një array).

Në `generatorOne`, ne japim të gjithë array `['a', 'b', 'c']'` duke përdorur fjalën kyçe `yield`. Vlera e vetisë `value` në objektin e kthyer me metodën `next` në `one` (`one.next().value`) është e barabartë me të gjithë grupin `['a', 'b', 'c']`.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

Në `generatorTwo`, ne përdorim fjalën kyçe `yield*`. Kjo do të thotë se vlera e parë e dhënë e `two`, është e barabartë me vlerën e dhënë në iterimin e parë. Iteratori është grupi `['a', 'b', 'c']`. Vlera e parë e dhënë është `a`, kështu që herën e parë që thërrasim `two.next().value`, kthehet `a`.

```javascript
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</p>
</details>

---

###### 113. Cila është vlera e saj?

```javascript
console.log(`${(x => x)('I love')} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Shprehjet brenda shablloneve literale vlerësohen së pari. Kjo do të thotë që stringu do të përmbajë vlerën e kthyer të shprehjes, funksionin e thirrur menjëherë `(x => x)('I love')` në këtë rast. Ne e kalojmë vlerën `'I love'` si argument në funksionin e shigjetës `x => x`. `x` është e barabartë me `'I love'`, e cila kthehet. Kjo rezulton në `I love to program`.

</p>
</details>

---

###### 114. Çfarë do të ndodhë?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- A: Callback `setInterval` nuk do të thirret.
- B: Callback `setInterval` do të thirret një herë.
- C: Callback `setInterval` do të thirret çdo sekond.
- D: Nuk e kemi thirrur asnjëherë `config.alert()`, config është `null`.

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Zakonisht kur i vendosim objektet të barabarta me `null`, ato objekte mirren nga _garbage collector_ pasi nuk ka më referencë për ato objekte. Megjithatë, meqenëse funksioni callback brenda `setInterval` është një funksion me shigjetë (pra i lidhur me objektin `config`), funksioni callback ende mban një referencë për objektin `config`.
Për sa kohë ka një referencë, objekti nuk do të merret nga 'garbage collector' (menaxhuesi i memories për të u larguar).
Meqenëse ky është një interval, vendosja e `config` në '`null` ose `delete` `config.alert` nuk do të mbledhet nga garbage-collector për  intervalin, kështu që intervali do të vazhdojë të thirret.
Për ta hequr nga memoria duhet të e pastrojmë me `clearInterval(config.alert)`.
Meqenëse nuk u fshi, funksioni `setInterval` callback do të vazhdojë të thirret çdo 1000ms (1s).

</p>
</details>

---

###### 115. Cila metodë do të kthejë vlerën `'Hello world!'`?

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
- C: 2 dhe 3
- D: Të gjitha

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Kur shtoni një çift çelës/vlerë duke përdorur metodën `set`, çelësi do të jetë vlera e argumentit të parë që i kalohet funksionit `set`, dhe vlera do të jetë argumenti i dytë që i kalohet funksionit `set`. Çelësi është _functioni_ `() => 'greeting'` në këtë rast, dhe vlera `'Hello world'`. `myMap` tani është `{ () => 'greeting' => 'Hello world!' }`.

1 është gabim, pasi çelësi nuk është `'greeting'` por `() => 'greeting'`.
3 është gabim, pasi ne po krijojmë një funksion të ri duke e kaluar atë si parametër në metodën `get`. Objekti ndërvepron me _referencë_. Funksionet janë objekte, prandaj dy funksione nuk janë kurrë rreptësisht të barabarta, edhe nëse janë identike: ato kanë një referencë në një vend të ndryshëm në memorie.

</p>
</details>

---

###### 116. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Të dy funksionet `changeAge` dhe `changeAgeAndName` kanë një parametër të paracaktuar, përkatësisht një objekt të krijuar rishtazi `{...person}`. Ky objekt ka kopje të të gjithë çelësave/vlerave në objektin `person`.

Së pari, e thirrim funksionin `changeAge` dhe e kalojmë objektin `person` si argument. Ky funksion rrit vlerën e vetisë `age` për 1. `person` tani është `{ name: "Lydia", age: 22 }`.

Pastaj, e thirrim funksionin `changeAgeAndName`, sidoqoftë ne nuk e kalojmë një parametër. Në vend të kësaj, vlera e `x` është e barabartë me objektin e ri `{ ...person }`. Meqenëse është një objekt i ri, nuk do të afektojë vlerën e vetive në objektin `person`. `person` ende është e barabartë me `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### 117. Cili nga funksionet e mëposhtme do të kthejë `6`?

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me operatorin spread `...`, me mund të _përhapim_ iteruesit në elemente individuale. Funksioni `sumValues` merr tre argumente: `x`, `y` dhe `z`. `...[1, 2, 3]` do të rezultojë në `1, 2, 3`, të cilin ia kalojmë funksionit `sumValues`.

</p>
</details>

---

###### 118. Cila është vlera e saj?

```javascript
let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me operandin `+=`, ne po rrisim vlerën e `sum` për `1`. `num` kishte vlerën iniciale `1`, kështu `1 + 1` është `2`. Elementi në indeksin e dytë në `list` është 🥰, `console.log(list[2])` printon 🥰.

</p>
</details>

---

###### 119. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me operatorin opsional të zinxhirit `?.`, nuk duhet të kontrollojmë më në mënyrë eksplicite nëse vlerat më të thella të ndërthurura janë të vlefshme apo jo. Nëse po provojmë ti qasemi një vetie me një vlerë `undefined` ose `null` (_nullish_), shprehja lidhet me qark të shkurtër dhe kthen `undefined`.

`person.pet?.name`: `person` ka një veti të quajtur `pet`: `person.pet` nuk është vlerë null. Ka një veti të quajtur `name`, dhe kthen `Mara`.
`person.pet?.family?.name`: `person` ka një veti të quajtur `pet`: `person.pet` nuk është vlerë null. `pet` nuk ka një veti të quajtur `family`, `person.pet.family` është vlerë null. Shprehja kthen `undefined`.
`person.getFullName?.()`: `person` ka një veti të quajtur `getFullName`: `person.getFullName()` nuk është vlerë null dhe mund të thirret, dhe do të kthejë `Lydia Hallie`.
`member.getLastName?.()`: variabla `member` nuk ekziston prandaj `ReferenceError` do të hedhet!

</p>
</details>

---

###### 120. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Ne e kaluam kushtëzimin `groceries.indexOf("banana")` tek deklarimi if. `groceries.indexOf("banana")` kthen `0`, e cila është vlerë false. Përderisa deklarimi i kushtëzimit if është falsy, kodi në bllokun `else` ekzekutohet, dhe `We don't have to buy bananas!` do të printohet.

</p>
</details>

---

###### 121. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Metoda `language` është metodë `setter` (vendosëse). Vendosësit nuk mbajë një vlerë aktuale, qêllimi i tyre është të _modifikojnë_ vetitë. Kur e thirrim metodën `setter`, do të kthehet `undefined`.

</p>
</details>

---

###### 122. Cila është vlera e saj?

```javascript
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

`typeof name` kthen `"string"`. Stringu `"string"` është vlerë truthy, kështu që `!typeof name` kthen vlerën booleane `false`. `false === "object"` dhe `false === "string"` të dy kthejnë `false`.

(Nëse do të dëshironim të shikojmë në qoftëse tipi ishtë (jo) i barabartë në një tip të caktuar, do të kishim shkruar `!==` në vend të `!typeof`)

</p>
</details>

---

###### 123. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Funksioni `add` kthen një funksion shigjete, i cili kthen një funksion shigjete, i cili kthen një funksion shigjete. Funksioni i parë merr një argument `x` me vlerën `4`. Ne e thërrasim funksionin e dytë, i cili merr një argument `y` me vlerën `5`. Pastaj thërrasim funksionin e tretë, i cili merr një argument `z` me vlerën `6`. Kur po provojmë të qasemi në vlerën `x`, `y` dhe `z` brenda funksionit të fundit të shigjetës, makina  JS shkon lart në zinxhirin e shtrirjes për të gjetur vlerat për `x` dhe `y` përkatësisht. Kjo kthen `4` `5` `6`.

</p>
</details>

---

###### 124. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Funksioni gjenerator `range` kthen një objekt asinkron me premtimet për çdo elemnt në rangun që ne japim: `Promise{1}`, `Promise{2}`, `Promise{3}`. Ne vendosim variablën `gen` të jetë e barabartë me objektin asinkron, pas të cilit ne e iterojmë mbi të nëpërmjet unazës `for await ... of`. Ne vendosim variablën `item` të jetë e barabartë me vlerat e kthyera të Promise: së pari `Promise{1}`, pastaj `Promise{2}`, pastaj `Promise{3}`. Pasi që po _presim_ vlerën e `item`, premtimet e zgjidhura, vlerat e zgjidhura të premtimit kthehen: `1`, `2`, pastaj `3`.

</p>
</details>

---

###### 125. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

`myFunc` pret një objekt me vetitë `x`, `y` dhe `z` si argumente të tij. Pasi që po japim vetëm tre vlera numerike të ndara (1, 2, 3) në vend të një objekti me vetitë `x`, `y` dhe `z` ({x: 1, y: 2, z: 3}), `x`, `y` dhe `z` kanë vlerën e tyre të parazgjedhur si `undefined`.

</p>
</details>

---

###### 126. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me metoden `Intl.NumberFormat`, ne mund të formatojmë vlerat numerike në çdo vend. Ne formatojmë vlerën numerike `130` në vendin `en-US` si një `unit` në `mile-per-hour`, që rezulton në `130 mph`. Vlera numerike `300` në vendin `en-US` si një `currency` në `USD` rezulton në `$300.00`.

</p>
</details>

---

###### 127. Cila është vlera e saj?

```javascript
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Duke destrukturuar objektet, ne mund të targetojmë vlerat nga objekti i djathtë, dhe të caktojmë vlerën e targetuar në vlerën e emrit të njëjtë të vetisë në objektin në anën e majtë. Në këtë rast, ne po caktojmë vlerën "💀" në `spookyItems[3]`. Kjo do të thotë se ne po ndryshojmë vargun `spookyItems`, po i shtojmë "💀". Kur printojmë `spookyItems`, `["👻", "🎃", "🕸", "💀"]` printohet.

</p>
</details>

---

###### 128. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me metoden `Number.isNaN`, ju mund të kontrolloni nëse vlera që ju jepni është një _vlerë numerike_ dhe e barabartë me `NaN`. `name` nuk është një vlerë numerike, kështu që `Number.isNaN(name)` kthen `false`. `age` është një vlerë numerike, por nuk është e barabartë me `NaN`, kështu që `Number.isNaN(age)` kthen `false`.

Me metoden `isNaN`, ju mund të kontrolloni nëse vlera që ju jepni nuk është numër. `name` nuk është numër, kështu që `isNaN(name)` kthen true. `age` është numër, kështu që `isNaN(age)` kthen `false`.

</p>
</details>

---

###### 129. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Variablat e deklaruara me fjalën kyçe `const` nuk janë të referueshme para inicializimit të tyre: kjo quhet _zona e vdekjes së përkohshme_. Në funksionin `getInfo`, variabla `randomValue` është me shtrirje në fushën e funksionit `getInfo`. Në rreshtin ku ne duam të printojmë vlerën e `typeof randomValue`, variabla `randomValue` nuk është inicializuar ende: një `ReferenceError` hidhet! Makina e JS nuk shkoi poshtë në zinxhirin e fushës pasi ne deklaruam variablën `randomValue` në funksionin `getInfo`.

</p>
</details>

---

###### 130. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Në bllokun `try`, ne jemi duke printuar vlerën e pritur të variablës `myPromise`: `"Woah some cool data"`. Pasi që nuk u hodhën gabime në bllokun `try`, kodi në bllokun `catch` nuk ekzekutohet. Kodi në bllokun `finally` _gjithmonë_ ekzekutohet, `"Oh finally!"` printohet.

</p>
</details>

---

###### 131. Cila është vlera e saj?

```javascript
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Me metodën flat, ne mund të krijojmë një varg të ri, të rrafshët. Thellësia e vargut të rrafshët varet nga vlera që ne japim. Në këtë rast, ne dhamë vlerën 1 (e cila nuk ishte e nevojshme, ajo është vlera e paracaktuar), që do të thotë se vetëm vargjet në thellësinë e parë do të bashkohen. ['🥑'] dhe ['✨', '✨', ['🍕', '🍕']] në këtë rast. Bashkimi i këtyre dy vargjeve rezulton në ['🥑', '✨', '✨', ['🍕', '🍕']].

</p>
</details>

---

###### 132. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

`counterOne` është një instancë e klasës `Counter`. Klasa Counter përmban një veti `count` në konstruktorin e saj, dhe një metodë `increment`. Së pari, ne thirrëm metodën `increment` dy herë duke thirrur `counterOne.increment()`. Aktualisht, `counterOne.count` është `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Më pas, ne krijojmë një variabël të re `counterTwo`, dhe e vendosim të barabartë me `counterOne`. Pasi objektet ndërveprojnë me referencë, ne thjesht po krijojmë një referencë të re për të njëjtin vend në memorie ku `counterOne` tregon. Meqenëse po tregon në të njëjtin vend në memorie, çdo ndryshim i bërë në objektin që `counterTwo` ka një referencë, gjithashtu vlen edhe për `counterOne`. Aktualisht, `counterTwo.count` është `2`.

Ne thërrasim `counterTwo.increment()`, i cili vendos `count` në `3`. Pastaj, printojmë numëruesin `counterOne`, i cili printon `3`.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Së pari, ne thirrim `funcOne`. Në rreshtin e parë të `funcOne`, ne thirrim funksionin _asinkron_ `setTimeout`, nga i cili callback është dërguar tek API-ja e Web-it. (shih artikullin tim mbi ciklin e ngjarjeve këtu.)

Pastaj e thirrim premtimin `myPromise`, e cila është një operacion _asinkron_.

Edhe premtimi dhe koha e pritjes janë operacione asinkrone, funksioni vazhdon të ekzekutohet ndërsa është i zënë në plotësimin e premtimeve dhe trajtimin e callback-ut `setTimeout`. Kjo do të thotë se `Last line 1!` printohet së pari, pasi kjo nuk është një operacion asinkron.

Meqenëse callstack nuk është bosh ende, funksioni `setTimeout` dhe premtimi në `funcOne` nuk mund të shtohen ende në callstack.

Në `funcTwo`, variabla `res` merr `Promise` sepse `Promise.resolve(Promise.resolve('Promise'))` është ekuivalente me `Promise.resolve('Promise')` pasi plotësimi i një premtimi thjesht i plotëson vlerat e tij. `await` në këtë rresht ndalon ekzekutimin e funksionit derisa të marrë zgjidhjen e premtimit dhe pastaj vazhdon të ekzekutohet sinkronisht deri në përfundim, kështu që `Promise 2!` dhe pastaj `Last line 2!` janë regjistruar dhe `setTimeout` është dërguar tek API-ja e Web-it.

Pastaj call stack është bosh. Premtimet janë _mikrodetyra_ (microtasks) prandaj ato zgjidhen së pari kur call stack është bosh, kështu që `Promise 1!` printohet.

Tani, pasi që `funcTwo` është larguar nga call stack, call stack është bosh. Callback-et që po presin në radhë (`() => console.log("Timeout 1!")` nga `funcOne`, dhe `() => console.log("Timeout 2!")` nga `funcTwo`) shtohen në call stack një nga një. Callback-i i parë printon `Timeout 1!`, dhe largohet nga stack. Më pas, callback-i i dytë printon `Timeout 2!`, dhe largohet nga stack.

</p>
</details>

---

###### 134. Si mund të thërrasim funksionin `sum` nga `sum.js` në `index.js`?

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
- D: Eksportimet e paracaktuar nuk importohen me `*`, vetëm eksportimet e emëruara.

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me yllin `*`, ne importojmë të gjitha vlerat e eksportuara nga ai fajll, si ato të paracaktuara dhe ato të emëruara. Nëse kemi fajllin e mëposhtëm:

```javascript
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
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

Për shembullin `sum`, do të thotë se vlera e importuar e `sum` do të dukej kështu:

```javascript
{ default: function sum(x) { return x + x } }
```

Mund të e thërrasim këtë funksion, duke thirrur `sum.default`

</p>
</details>

---

###### 135. Cila është vlera e saj?

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
- D: Asgjë nuk printohet

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Me një objekt Proxy, ne mund të shtojmë sjellje të personalizuara për një objekt të cilit i kalohet si argumenti i dytë. Në këtë rast, ne i kalojmë objektin `handler` i cili përmban dy veti: `set` dhe `get`. `set` thirret çdo herë kur ne _caktojmë_ vlerat e vetisë, `get` thirret çdo herë kur ne _marrim_ (i qasemi) vlerave të vetisë.

Argumenti i parë është një objekt i zbrazët `{}`, i cili është vlera e `person`. Tek ky objekt, shtohet sjellja e personalizuar e specifikuar në objektin `handler`. Nëse shtojmë një veti tek objekti `person`, `set` do të thirret. Nëse i qasemi një vetie në objektin `person`, `get` do të thirret.

Së pari, ne shtuam një veti të re `name` tek objekti proxy (`person.name = "Lydia"`). `set` thirret, dhe printon `"Added a new property!"`.

Pastaj, ne i qasemi një vlerë të vetisë në objektin proxy, vetia `get` në objektin handler thirret. `"Accessed a property!"` printohet.

</p>
</details>

---

###### 136. Cili nga opsionet e mëposhtme do të modifikojë objektin `person`?

```javascript
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Me `Object.seal` ne mund të parandalojmë shtimin e vetive të reja, ose fshirjen e vetive ekzistuese.

Megjithatë, ju ende mund të modifikoni vlerën e vetive ekzistuese.

</p>
</details>

---

###### 137. Cili nga opsionet e mëposhtme do të modifikojë objektin `person`?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Metoda `Object.freeze` _ngrin_ një objekt. Asnjë veti nuk mund të shtohet, të modifikohet, ose të hiqet.

Megjithatë, ajo vetëm _ngrin sipërfaqësisht_ objektin, që do të thotë se vetëm vetitë _e drejtpërdrejta_ në objekt janë të ngrira. Nëse vetia është një tjetër objekt, si `address` në këtë rast, vetitë në atë objekt nuk janë të ngrira, dhe mund të modifikohen.

</p>
</details>

---

###### 138. Cila është vlera e saj?

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` and `3` `6`
- B: `2` `NaN` and `3` `NaN`
- C: `2` `Error` and `3` `6`
- D: `2` `4` and `3` `Error`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Së pari, ne thirrëm `myFunc()` pa kaluar asnjë argument. Pasi që nuk kaluam argumente, `num` dhe `value` morën vlerat e tyre të paracaktuara: num është `2`, dhe `value` është vlera e kthyer nga funksioni `add`. Tek funksioni `add`, ne i japim si argument `num`, i cili ka vlerën `2`. `Add` kthen `4`, e cila është vlera e `value`.

Më pas, ne thirrëm `myFunc(3)` dhe kaluam vlerën `3` si vlerë për argumentin `num`. Nuk kaluam një argument për `value`. Pasi nuk kaluam një vlerë për argumentin `value`, ai mori vlerën e paracaktuar: vlerën e kthyer nga funksioni `add`. Tek `add`, ne i japim si argument `num`, i cili ka vlerën `3`. `Add` kthen `6`, e cila është vlera e `value`.

</p>
</details>

---

###### 139. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Në ES2020, mund të shtojmë variabla private në klasa duke përdorur `#`. Nuk mund t'i qasemi këtyre variablave jashtë klasës. Kur provojmë të printojmë `counter.#number`, hidhet një SyntaxError: nuk mund t'i qaseni jashtë klasës `Counter`!

</p>
</details>

---

###### 140. Çfarë po mungon?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Për të iteruar mbi `members` në çdo element në array `teams`, duhet të kaloni `teams[i].members` në funksionin gjenerator `getMembers`. Funksioni gjenerator kthen një objekt gjenerator. Për të iteruar mbi çdo element në këtë objekt gjenerator, duhet të përdorim `yield*`.

Nëse do të shkruanim `yield`, `return yield`, ose `return`, gjithë funksioni gjenerator do të kthehej herën e parë që do e thirrim metodën `next`.

</p>
</details>

---

###### 141. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Funksioni `addHobby` merr dy argumente, `hobby` dhe `hobbies` me vlerën e paracaktuar të array `hobbies` në objektin `person`.

Së pari, ne thirrim funksionin `addHobby`, dhe japim `"running"` si vlerë për `hobby` dhe një array bosh si vlerë për `hobbies`. Pasi japim një varg bosh si vlerë për `hobbies`, `"running"` shtohet në këtë varg bosh.

Pastaj, ne thirrim funksionin `addHobby`, dhe japim `"dancing"` si vlerë për `hobby`. Nuk kemi dhënë vlerë për `hobbies`, kështu që ajo merr vlerën e paracaktuar, vetinë `hobbies` në objektin `person`. Ne shtojmë hobi `dancing` në array `person.hobbies`.

Në fund, ne thirrim funksionin `addHobby`, dhe japim `"baking"` si vlerë për `hobby`, dhe array `person.hobbies` si vlerë për `hobbies`. Ne shtojmë hobi `baking` në array `person.hobbies`.

Pas shtimit të `dancing` dhe `baking`, vlera e `person.hobbies` është `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 142. Cila është vlera e saj?

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
- D: Asgjë, ne nuk kemi thirrur ndonjë metodë.

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Krijojmë variablën `pet` që është një instancë e klasës `Flamingo`. Kur ne e instantojmë këtë instancë, thirret `constructor` në `Flamingo`. Së pari, `"I'm pink. 🌸"` printohet, pas të cilit thirrim `super()`. `super()` thirr constructorin e klasës prind, `Bird`. Thirret constructori në `Bird`, dhe printon `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 143. Cila nga opsionet rezulton me gabim?

```javascript
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Fjala kyçe `const` thjesht do të thotë se nuk mund të _ri-deklarojmë_ vlerën e asaj ndryshore, është _vetëm për lexim_. Megjithatë, vlera e elementeve të array nuk është e pandryshueshme. Vetitë në vargun `emojis` mund të modifikohen, për shembull duke shtuar vlera të reja, duke i shpërndarë ato, ose duke caktuar gjatësinë e vargut në 0.

</p>
</details>

---

###### 144. Çfarë duhet të shtojmë në objektin `person` për të marrë `["Lydia Hallie", 21]` si rezultat të `[...person]`?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: Asgjë, objektet janë të iterueshme paraprakisht.
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Objektet nuk janë të paraprakisht të iterueshme. Një objekt është i iterueshëm nëse protokolli i iteratorëve është prezent. Ne mund ta shtojmë këtë manualisht duke shtuar simbolin e iteratorit `[Symbol.iterator]`, i cili duhet të kthejë një objekt gjenerator, për shembull duke e bërë atë një funksion gjenerator `*[Symbol.iterator]() {}`. Ky funksion gjenerator duhet të prodhojë `Object.values` e objektit `person` nëse dëshirojmë që të kthejë array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.

</p>
</details>

---

###### 145. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Kushti `if` brenda ciklit `forEach` kontrollon nëse vlera e `num` është e vërtetë apo false. Meqenëse numri i parë në array `nums` është `0`, një vlerë false, blloku i kodit të deklaratës `if` nuk do të ekzekutohet. `count` rritet vetëm për 3 numrat e tjerë në array `nums`, `1`, `2` dhe `3`. Meqenëse `count` rritet për `1` 3 herë, vlera e `count` është `3`.

</p>
</details>

---

###### 146. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Simboli ? na lejon të i qasemi opsionalisht vetive më të thella brenda objekteve. Ne po provojmë të shfaqim elementin në indeksin 1 brenda në nën-array që është në indeksin 1 të array fruits. Nëse nën-array në indeksin 1 në array fruits nuk ekziston, thjesht do të kthejë undefined. Nëse nën-array në indeksin 1 në vargun fruits ekziston, por ky nën-array nuk ka një artikull në indeksin e tij 1, gjithashtu do të kthejë undefined.

Së pari, ne po përpiqemi të printojmë artikullin e dytë në nën-array `['🍍']` të `[['🍊', '🍌'], ['🍍']]`. Ky nën-array përmban vetëm  një element, që do të thotë se nuk ka element në indeksin `1`, dhe kthen `undefined`.

Më pas, ne po thërrasim funksionin `getFruits` pa kaluar një vlerë si argument, që do të thotë se `fruits` ka vlerë `undefined` të paracaktuar. Pasi që po lidhim në mënyrë kushtëzuese elementin në indeksin `1` të `fruits`, kthen `undefined` pasi ky element në indeksin `1` nuk ekziston.

Së fundmi, po përpiqemi të shfaqim artikullin e dytë në nën-array `['🍊', '🍌']` të `['🍍'], ['🍊', '🍌']`. Elementi në indeksin `1` brenda këtij nën-array është `🍌` që printohet.

</p>
</details>

---

###### 147. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Ne i caktojmë variablës `calc` të jetë e barabartë me një instancë të re të klasës `Calc`. Më pas, ne krijojmë një instancë të re të `Calc`, dhe thërrasim metodën `increase` në këtë instancë. Pasi që vetia 'count' është brenda konstruktorit të klasës `Calc`, vetia 'calc' nuk është e përbashkët në prototipin e `Calc`. Kjo do të thotë se vlera 'calc' nuk është përditësuar për instancën që tregon calc, numërimi është ende `0`.

</p>
</details>

---

###### 148. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Funksioni `updateUser` përditëson vlerat e vetive `email` dhe `password` në user, nëse vlerat e tyre i janë kaluar funksionit, pas së cilës funksioni kthen objektin `user`. Vlera e kthyer e funksionit `updateUser` është objekti `user`, që do të thotë se vlera e updatedUser është një referencë për të njëjtin objekt `user` që tregon `user`. `updatedUser === user` është e barabartë me `true`.

</p>
</details>

---

###### 149. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Së pari, ne thirrim metodën `slice` në array e frutave. Metoda slice nuk modifikon array origjinal, por kthen vlerën që e ka 'prerë (slice)' nga array: emoji e bananes.
Më pas, ne thirrim metodën `splice` në array e frutave. Metoda splice modifikon array origjinal, që do të thotë se array i frutave tani përbëhet nga `['🍊', '🍎']`.
Në fund, ne thirrim metodën `unshift` në array e frutave, e cila modifikon array origjinal duke shtuar vlerën e dhënë, në këtë rast ‘🍇’, si elementin e parë në varg. Array i frutave tani përbëhet nga `['🍇', '🍊', '🍎']`.

</p>
</details>

---

###### 150. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Çelësat e objektit konvertohen në stringje.

Pasi që vlera e `dog` është një objekt, `animals[dog]` në fakt do të thotë që ne po krijojmë një veti të re të quajtur `"object Object"` të barabartë me objektin e ri. Tani `animals["object Object"]` është i barabartë me `{ emoji: "🐶", name: "Mara"}`.

`cat` është gjithashtu një objekt, që do të thotë që `animals[cat]` në fakt do të thotë se ne po mbishkruajmë vlerën e `animals["object Object"]` me vetitë e reja të macës.

Duke printuar `animals[dog]`, ose në fakt `animals["object Object"]` pasi që konvertimi i objektit `dog` në string rezulton në `"object Object"`, kthen `{ emoji: "🐈", name: "Sara" }`.

</p>
</details>

---

###### 151. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: A

Funksioni `updateEmail` është një funksion shigjetë dhe nuk është i lidhur me objektin `user`. Kjo do të thotë se fjalë kyçe `this` nuk i referohet objektit `user`, por i referohet shtrirjes globale në këtë rast. Vlera e `email` brenda objektit `user` nuk përditësohet. Kur printohet vlera e `user.email`, kthehet vlera origjinale e `my@email.com`.

</p>
</details>

---

###### 152. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: D

Metoda `Promise.all` ekzekuton premtimet e dhëna si argumente paralelisht. Nëse një premtim dështon, metoda 'Promise.all' _refuzon_ me vlerën e premtimit të refuzuar. Në këtë rast, `promise3` u refuzua me vlerën `"Third"`. Ne po kapim vlerën e refuzuar në metodën `catch` në thirrjen `runPromises` për të kapur çdo gabim brenda funksionit `runPromises`. Vetëm `"Third"` printohet, pasi `promise3` u refuzua me këtë vlerë.

</p>
</details>

---

###### 153. Cila duhet të jetë vlera e `method` për të printuar `{ name: "Lydia", age: 22 }`?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Metoda `fromEntries` transformon një array 2d në një objekt. Elementi i parë në çdo nën-array do të jetë çelësi, dhe elementi i dytë në çdo nën-array do të jetë vlera. Në këtë rast, ne jemi duke mapuar mbi array `keys`, i cili kthen një array ku elementi i parë është elementi në array të çelësave në indeksin aktual, dhe elementi i dytë është elementi i vlerave të array  në indeksin aktual.

Kjo krijon një array të nën-arrays që përmbajnë çelësat dhe vlerat e duhura, të cilat rezultojnë në `{ name: "Lydia", age: 22 }`

</p>
</details>

---

###### 154. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: C

Vlera e paracaktuar e `address` është një objekt i zbrazët `{}`. Kur vendosëm variablën `member` të barabartë me objektin që kthehet nga funksioni `createMember`, ne nuk kaluam një vlerë për adresën, që do të thotë se vlera e adresës është objekti i zbrazët parazgjedhur `{}`. Një objekt i zbrazët është një vlerë e vërtetë, që do të thotë se gjendja e `address ? address : null` kushtëzuese kthehet `true`. Vlera e adresës është objekti i zbrazët `{}`.

</p>
</details>

---

###### 155. Cila është vlera e saj?

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

<details><summary><b>Përgjigja</b></summary>
<p>

#### Përgjigja: B

Kushti brenda deklaratës `if` kontrollon nëse vlera e `!typeof randomValue` është e barabartë me `"string"`. Operatori `!` e shndërron vlerën në një vlerë booleane. Nëse vlera është e vërtetë, vlera e kthyer do të jetë `false`, nëse vlera është e pavërtetë, vlera e kthyer do të jetë `true`. Në këtë rast, vlera e kthyer e `typeof randomValue` është vlera e vërtetë `"number"`, që do të thotë se vlera e `!typeof randomValue` është vlera booleane `false`.

`!typeof randomValue === "string"` gjithmonë kthen false, pasi në fakt po kontrollojmë `false === "string"`. Pasi që kushtëzimi ktheu `false`, blloku i kodit të deklaratës `else` ekzekutohet, dhe `Yay it's a string!` printohet.

</p>
</details>
