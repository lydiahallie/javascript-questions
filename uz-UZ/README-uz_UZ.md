<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Savollari (JavaScript Questions)</h1>
</div>

> [!NOTE]  
> Ushbu repozitoriy 2019-yilda yaratilgan bo'lib, bu yerdagi savollar o'sha davrdagi JavaScript sintaksisi va xulq-atvoriga asoslangan. JavaScript uzluksiz rivojlanib borayotgan til bo'lgani sababli, ba'zi yangi xususiyatlar bu yerdagi savollarda qamrab olinmagan bo'lishi mumkin.

---

<p align="center">
Boshlang'ich darajadan mukammalgacha: JavaScript bilimlaringizni sinab ko'ring, bilimlaringizni yangilang yoki texnik suhbatlarga tayyorlaning! :muscle: :rocket: Men ushbu repozitoriyni muntazam ravishda yangi savollar bilan boyitib boraman. Javoblarni savollar ostidagi **butilgan (collapsed) bo'limlarga** joylashtirganman, ularni ko'rish uchun shunchaki ustiga bosing. Omad yor bo'lsin! :heart:</p>

<p align="center">Menga murojaat qilishingiz mumkin! 😊</p>

<p align="center">
  <a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.io/">Blog</a>
</p>

| Ularni o'z loyihalaringizda bemalol ishlatishingiz mumkin! 😃 Ushbu repozitoriyga havola bersangiz juda mamnun bo'lar edim. Savollar va tushuntirishlarni men yarataman, hamjamiyat esa uni saqlash va takomillashtirishda menga katta yordam beradi! 💪🏼 Rahmat va maroqli hordiq chiqaring! |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

<details><summary><strong> 21 ta Mavjud Tarjimalarni Ko'rish 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼🇽🇰🇺🇿</strong></summary>
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
- [🇽🇰 Shqip](../sq-KS/README_sq_KS.md)
- [🇹🇭 ไทย](../th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇺🇿 O'zbekcha](./README-uz_UZ.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. Natija qanday bo'ladi?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` va `undefined`
- B: `Lydia` va `ReferenceError`
- C: `ReferenceError` va `21`
- D: `undefined` va `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Funktsiya ichida biz avval `name` o'zgaruvchisini `var` kalit so me'yori orqali e'lon qilamiz. Bu shuni anglatadiki, o'zgaruvchi **hoisted** qilinadi (yaratish bosqichida xotiradan joy ajratiladi) va koding ijro chizig'i o'zgaruvchi qiymati berilgan joyga yetib bormaguncha ko'rsatuvchisi `undefined` bo'ladi. Biz `name` ni konsolga chiqarishga urinayotgan satrda uni hali qiymat bilan ta'minlamaganmiz, shuning uchun u `undefined` qiymatini saqlaydi.

`let` (va `const`) kalit so'zlari bilan e'lon qilingan o'zgaruvchilar ham hoist qilinadi, lekin `var`dan farqli o'laroq, ularga *initsializatsiya* (boshlang'ich qiymat) berilmaydi. Ular e'lon qilingan satrgacha ularga kirish imkonsiz. Bu holat **"Temporal Dead Zone"** (Vaqtinchalik o o'lik hudud) deb ataladi. Ular e'lon qilinishidan oldin o'zgaruvchilarga kirishga harakat qilganimizda, JavaScript `ReferenceError` xatosini tashlaydi.

</p>
</details>

---

###### 2. Natija qanday bo'ladi?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` va `0 1 2`
- B: `0 1 2` va `3 3 3`
- C: `3 3 3` va `0 1 2`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

JavaScript'dagi hodisalar navbati (event queue) sababli, `setTimeout` qayta chaqiruv (callback) funktsiyasi sikl to'liq bajarib bo'linganidan *keyin* chaqiriladi. Birinchi sikldagi `i` o'zgaruvchisi `var` kalit so'zi yordamida e'lon qilinganligi sababli, bu qiymat global bo'ladi. Sikl davomida biz unar `++` operatori yordamida `i` qiymatini har safar `1` ga oshirib borganmiz. `setTimeout` callback funktsiyasi chaqirilgan vaqtda, birinchi misoldagi `i` qiymati `3` ga teng bo'lib bo'lgan edi.

Ikkinchi siklda `i` o'zgaruvchisi `let` kalit so'zi yordamida e'lon qilingan: `let` (va `const`) bilan e'lon qilingan o'zgaruvchilar blok doirasiga (block-scoped) ega (blok - bu `{ }` qavslar orasidagi har qanday kod). Har bir iteratsiya davomida `i` yangi qiymatga ega bo'ladi va har bir qiymat sikl ichidagi o'zining alohida konyunkturasida (scope) saqlanib qoladi.

</p>
</details>

---

###### 3. Natija qanday bo'ladi?

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

- A: `20` va `62.83185307179586`
- B: `20` va `NaN`
- C: `20` va `63`
- D: `NaN` and `63`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

E'tibor bering, `diameter` qiymati oddiy funktsiya, `perimeter` qiymati esa ko'rsatkichli (arrow) funktsiyadir.

Arrow funktsiyalarda `this` kalit so'zi oddiy funktsiyalardan farqli o'laroq, o'zi o me'yorida joylashgan tashqi qamrovga (surrounding scope) ishora qiladi! Bu shuni anglatadiki, biz `perimeter`ni chaqirganimizda, u `shape` ob'ektiga emas, balki uning tashqi qamroviga (masalan, `window` ob'ektiga) ishora qiladi.

Arrow funktsiya qamrovida `radius` qiymati mavjud bo'lmagani uchun, `this.radius` ifodasi `undefined` qaytaradi, bu esa `2 * Math.PI` ga ko'paytirilganda `NaN` natijasini beradi.

</p>
</details>

---

###### 4. Natija qanday bo'ladi?

```javascript
+true;
!'Lydia';
```

- A: `1` va `false`
- B: `false` va `NaN`
- C: `false` va `false`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Unar plyus operatori operandni songa aylantirishga harakat qiladi. `true` - bu `1`, `false` esa `0`.

`'Lydia'` satri rost (truthy) qiymatdir. Biz aslida "Ushbu rost qiymat yolg'onmi?" deb so'ramoqdamiz. Bu `false` qaytaradi.

</p>
</details>

---

###### 5. Mantiqan qaysi biri to'g'ri?

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` haqiqiy emas (not valid)
- B: `mouse[bird.size]` haqiqiy emas
- C: `mouse[bird["size"]]` haqiqiy emas
- D: Hamma javoblar haqiqiy

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScript-da barcha ob'ekt kalitlari satr (string) hisoblanadi (Symbol bo'lmagan holatda). Biz ularni satr sifatida yozmasak ham, ular kapot ostida har doim satrga o'giriladi.

JavaScript ifodalarni izohlaydi va baholaydi. Qavs notatsiyasidan (`[]`) foydalanganimizda, u birinchi ochiluvchi `[` qavsni ko'radi va yopiluvchi `]` qavsni topguncha davom etadi. Shundan keyingina u qavs ichidagi ifodani hisoblaydi.

`mouse[bird.size]`: Dastlab u `bird.size` ni hisoblaydi va u `"small"` ga teng. `mouse["small"]` esa `true` qaytaradi.

Biroq, nuqta notatsiyasi bilan bunday bo'lmaydi. `mouse` ob'ektida `bird` degan kalit yo'q, ya'ni `mouse.bird` - `undefined` ga teng. Keyin biz nuqta notatsiyasi yordamida `size` ni so'raymiz: `mouse.bird.size`. `mouse.bird` - `undefined` bo'lgani uchun, biz aslida `undefined.size` ni so'rayapmiz. Bu noto'g'ri va `Cannot read property "size" of undefined` kabi xatolikni keltirib chiqaradi.

</p>
</details>

---

###### 6. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScript-da barcha ob'ektlar bir-biriga tenglashtirilganda *havola (reference)* bo'yicha o'zaro ta'sir qiladi.

Birinchidan, `c` o'zgaruvchisi ob'ektga havolani saqlaydi. Keyinchalik, biz `d` ga `c` saqlayotgan o'sha ob'ekt havolasini tayinlaymiz.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Bitta ob'ektni o'zgartirganingizda, siz barcha havolalar ko'rsatib turgan ob'ektni o'zgartirasiz.

</p>
</details>

---

###### 7. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`new Number()` - bu ichki funktsiya konstruktori. U songa o'xshab ko'rinsa-da, haqiqiy son emas: u ko'plab qo'shimcha xususiyatlarga ega va u ob'ektdir.

Biz `==` (tenglik) operatoridan foydalanganimizda, u faqat ularning bir xil *qiymatga* ega yoki yo me'yorida ekanligini checks qiladi. Ikkalasining ham qiymati `3` ga teng, shuning uchun u `true` qaytaradi.

Biroq, `===` (qat'iy tenglik) operatoridan foydalanganimizda, qiymat *va* tur bir xil bo'lishi kerak. Bizning holatda unday emas: `new Number()` son emas, u **ob'ekt**. Shuning uchun ikkinchi va uchinchi tengliklar `false` qaytaradi.

</p>
</details>

---

###### 8. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`colorChange` funktsiyasi statik (`static`) hisoblanadi. Statik metodlar faqat ular yaratilgan konstruktorda yashash uchun mo'ljallangan va ularni har qanday vorislarga o'tkazish yoki sinf nusxalari (instances) orqali chaqirish mumkin emas. `freddie` sinf nusxasi (instance) bo'lgani uchun, statik metodni u orqali chaqirib bo'lmaydi. Shuning uchun `TypeError` xatosi tashlanadi.

</p>
</details>

---

###### 9. Natija qanday bo me'yorda bo'ladi?

```javascript
let greeting;
greetign = {}; // Typo! (Imlo xatosi)
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

U konsolga ob'ektni chiqaradi, chunki biz global ob'ektda shunchaki bo'sh ob'ekt yaratdik! Biz `greeting` so'zini adashib `greetign` deb yozganimizda, JS interpretatori buni quyidagicha ko'rdi:

1. Node.js'da `global.greetign = {}`
2. Brauzerlarda `window.greetign = {}`, `frames.greetign = {}` va `self.greetign`
3. Web worker'larda `self.greetign`
4. Barcha muhitlarda `globalThis.greetign`

Bunday holatning oldini olish uchun `"use strict"` (qat'iy rejim)dan foydalanishimiz mumkin. Bu o'zgaruvchiga qiymat berishdan oldin u e'lon qilinganligiga ishonch hosil qiladi.

</p>
</details>

---

###### 10. Buni qilganimizda nima sodir bo'ladi?

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: Hech narsa, bu mutlaqo joyida!
- B: `SyntaxError`. Funktsiyaga bu tarzda xususiyat qo'shib bo'lmaydi.
- C: `"Woof"` konsolga chiqariladi.
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Bu JavaScript-da mumkin, chunki funktsiyalar ob'ektdir! (Primitiv turlardan tashqari barcha narsa ob'ektdir).

Funktsiya - bu ob'ektning maxsus turi. Siz yozgan kodingiz haqiqiy funktsiyaning o me me'yori emas. Funktsiya xususiyatlarga ega ob'ektdir va ushbu xususiyat chaqiriluvchi (invocable) hisoblanadi.

</p>
</details>
---

###### 11. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScript-da funktsiyalar ob'ektdir, shuning uchun `getFullName` metodi funktsiya-konstruktor ob'ektining o'ziga qo'shiladi. Shu sababli biz `Person.getFullName()` ni chaqirishimiz mumkin, lekin `member.getFullName()` chaqirilsa `TypeError` xatosi tashlanadi.

Agar biror metod ob'ektning barcha nusxalari (instances) uchun mavjud bo'lishini xohlasangiz, uniy prototip (`prototype`) xususiyatiga qo'shishingiz kerak:

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

</p>
</details>

---

###### 12. Natija qanday bo'ladi?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` va `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` va `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` va `{}`
- D: `Person {firstName: "Lydia", lastName: "Hallie"}` va `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`sarah` uchun biz `new` kalit so'zidan foydalanmadik. `new` ishlatilganda, `this` biz yaratgan yangi bo'sh ob'ektga ishora qiladi. Biroq, agar `new` qo'shmasangiz, `this` **global ob'ekt**ga ishora qiladi!

Biz `this.firstName` ni `"Sarah"` ga va `this.lastName` ni `"Smith"` ga teng deb aytdik. Biz aslida `global.firstName = 'Sarah'` va `global.lastName = 'Smith'` ni belgilab qo'ydik. `sarah`ning o'zi esa `undefined` bo'lib qoladi, chunki biz `Person` funktsiyasidan hech qanday qiymat qaytarmaymiz.

</p>
</details>

---

###### 13. Hodisalarning tarqalishi (event propagation)ning 3 ta bosqichi qaysilar?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

**Capturing** (Tutilish) bosqichida hodisa ajdod elementlar orqali nishon (target) elementgacha tushib boradi. So'ngra u **target** (nishon) elementga yetib boradi va **bubbling** (ko'piklanish/yuqoriga ko'tarilish) bosqichi boshlanadi.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Barcha ob'ektlar prototipga ega.

- A: rost (true)
- B: yolg'on (false)

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

**Baza ob'ekt (base object)**dan tashqari barcha ob me'yori ob'ektlar prototipga ega. Baza ob'ekt - bu foydalanuvchi tomonidan yaratilgan yoki `new` kalit so'zi yordamida yaratilgan ob'ekt. Baza ob'ekt `.toString` kabi ba'zi metod va xususiyatlarga kirish imkoniga ega. Shuning uchun siz JavaScript-ning ichki metodlaridan foydalanishingiz mumkin! Bunday metodlarning barchasi prototipda mavjud. JavaScript metodni to'g'ridan-to me'yori ob'ektda topa olmasa ham, u prototiplar zanjiri (prototype chain) bo'ylab pastga tushadi va uni o'sha yerdan topadi.

</p>
</details>

---

###### 15. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

JavaScript **dinamik tiplangan til**dir: biz o'zgaruvchilarning tiplarini belgilamaymiz. Qiymatlar siz bilmagan holda avtopilotda boshqa tipga o'girilishi mumkin, bu **yashirin tiplarni o'g'irish (implicit type coercion)** deb ataladi. **Coercion** - bu bir tipdan boshqasiga o'girishdir.

Ushbu misolda, funktsiya mantiqan to'g'ri ishlashi va qiymat qaytarishi uchun JavaScript `1` sonini satrga (string) o'g'iradi. Sonli tip (`1`) va satrli tip (`'2'`) qo'shilayotganda, son satr sifatida ko'riladi. Biz satrlarni `"Hello" + "World"` kabi birhtirishimiz mumkin, shuning uchun bu yerda `"1" + "2"` sodir bo'ladi va `"12"` qaytaradi.

</p>
</details>

---

###### 16. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

**Postfiks** unar `++` operatori:
1. Qiymatni qaytaradi (bu `0` qaytaradi)
2. Qiymatni oshiradi (son endi `1` ga teng)

**Prefiks** unar `++` operatori:
1. Qiymatni oshiradi (son endi `2` ga teng)
2. Qiymatni qaytaradi (bu `2` qaytaradi)

Natijada `0 2 2` chiqadi.

</p>
</details>

---

###### 17. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Siz **tagged template literals** (teglangan shablon satrlari)dan foydalansangiz, birinchi argumentning qiymati har doim satr qiymatlari massivi bo'ladi. Qolgan argumentlar esa uzatilgan ifodalarning qiymatlarini oladi!

</p>
</details>

---

###### 18. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Tenglikni tekshirayotganda, primitivlar ularning *qiymati* bo'yicha taqqoslanadi, ob'ektlar esa ularning *havolasi (reference)* bo'yicha taqqoslanadi. JavaScript ob'ektlar xotiradagi bir xil joyga havola ko'rsatayotganini tekshiradi.

Biz taqqoslayotgan ikkita ob'ektda unday emas: parametr sifatida uzatilgan ob'ekt tenglikni tekshirish uchun ishlatgan ob'ektimizdan xotirada boshqa joyga ishora qiladi.

Shu sababli `{ age: 18 } === { age: 18 }` va `{ age: 18 } == { age: 18 }` ikkalasi ham `false` qaytaradi.

</p>
</details>

---

###### 19. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Rest parametri (`...args`) bizga barcha qolgan argumentlarni massivga "yig'ish" imkonini beradi. Massiv bu ob'ektdir, shuning uchun `typeof args` `"object"` qaytaradi.

</p>
</details>

---

###### 20. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`"use strict"` yordamida adashib global o'zgaruvchilar e'lon qilib qo'ymasligingizga ishonch hosil qilishingiz mumkin. Biz hech qachon `age` o'zgaruvchisini e'lon qilmaganmiz va `"use strict"` ishlatganimiz uchun u `ReferenceError` tashlaydi. Agar `"use strict"` ishlatmaganimizda edi, u ishlagan bo'lardi, chunki `age` xususiyati global ob'ektga qo'shilgan bo'lardi.

</p>
</details>

---

###### 21. `sum` qiymati nimaga teng bo'ladi?

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`eval` satr sifatida uzatilgan kodni hisoblaydi va bajaradi. Agar u ushbu holatdagidek ifoda bo'lsa, u ifodani hisoblaydi. `10 * 10 + 5` ifodasi `105` sonini qaytaradi.

</p>
</details>

---

###### 22. `cool_secret` qancha vaqt davomida foydalanish mumkin bo'ladi?

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: Abadiy, ma'lumotlar yo'qolmaydi.
- B: Foydalanuvchi ilovani/vkladkani (tab) yopganigacha.
- C: Foydalanuvchi nafaqat vkladkani, balki butun brauzerni yopganigacha.
- D: Foydalanuvchi kompyuterni o'chirganigacha.

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`sessionStorage`da saqlangan ma'lumotlar *vkladka (tab)* yopilgandan keyin o'chirib tashlanadi.

Agar siz `localStorage`dan foydalanganingizda edi, ma'lumotlar masalan `localStorage.clear()` chaqirilmaguncha abadiy u yerda saqlanib qolardi.

</p>
</details>

---

###### 23. Natija qanday bo'ladi?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`var` kalit so'zi bilan siz bir xil nomli bir nechta o'zgaruvchilarni e'lon qilishingiz mumkin. O'zgaruvchi keyin oxirgi tayinlangan qiymatni saqlab qoladi.

Siz buni `let` yoki `const` bilan qila olmaysiz, chunki ular blok doirasiga ega va shuning uchun qayta e'lon qilinishi mumkin emas.

</p>
</details>

---

###### 24. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Barcha ob'ekt kalitlari (Symbol'lardan tashqari) o'zingiz satr sifatida yozmasangiz ham kapot ostida satrlardir. Shuning uchun `obj.hasOwnProperty('1')` ham true qaytaradi.

Set uchun bu tarzda ishlamaydi. Bizning setda `'1'` (satr) yo'q: `set.has('1')` `false` qaytaradi. Unda sonli `1` tipi bor, `set.has(1)` `true` qaytaradi.

</p>
</details>

---

###### 25. Natija qanday bo'ladi?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Agar bir xil nomli ikkita kalit bo'lsa, kalit ustidan qayta yoziladi. Uninig o'rni saqlanib qoladi, lekin qiymati oxirgi ko'rsatilgan qiymat bo'ladi.

</p>
</details>
---

###### 26. JavaScript global ijro konteksti (global execution context) siz uchun ikkita narsani yaratadi: global ob'ekt va "this" kalit so'zi.

- A: rost (true)
- B: yolg'on (false)
- C: vaziyatga bog'liq (it depends)

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Baza ijro konteksti - bu global ijro kontekstidir: bu kodingizning har qanday joyida mavjud bo'lgan narsadir.

</p>
</details>

---

###### 27. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`continue` operatori shart `true` qaytarganda joriy iteratsiyani o'tkazib yuboradi va keyingi iteratsiyaga o'tadi. `i` qiymati `3` bo'lganda konsolga chiqarish o'tkazib yuboriladi, shuning uchun `1`, `2`, `4` chiqadi.

</p>
</details>

---

###### 28. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`String` - bu ichki konstruktor bo'lib, uning prototipiga xususiyatlar va metodlar qo'shishingiz mumkin. Men uning prototipiga metod qo'shdim. Primitiv satrlar avtopilotda ob'ekt-satrlarga o'giriladi. Shuning uchun barcha satrlar ushbu metoddan foydalanish imkoniyatiga ega bo'ladi!

</p>
</details>

---

###### 29. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Ob'ekt kalitlari kapot ostida avtomatik ravishda satrlarga o'giriladi. Biz `a` ob'ektiga `b` ob'ektini kalit sifatida `123` qiymati bilan qo'shmoqchimiz. Biroq, ob'ektni satrga o'girganimizda u `"[object Object]"`ga aylanadi. Demak, biz `a["object Object"] = 123` deb yozgan bo'lamiz. Keyin xuddi shu ishni `c` bilan qilamiz: `a["object Object"] = 456`. Shuning uchun konsolga `a[b]` chiqarilganda, u `456`ni qaytaradi.

</p>
</details>

---

###### 30. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Biz birinchi bo'lib `bar` funktsiyasini chaqiramiz (u `setTimeout`ni chaqiradi). Biroq, u konsolga eng oxirida chiqadi. Bunga sabab JavaScript-dagi Event Loop (hodisalar sikli) va WebAPI'dir. Callback funktsiya WebAPI'ga yuborilgach, ijro steki bo'shaydi va `foo` bajarilib `"First"` chiqadi, so'ng `baz` bajarilib `"Third"` chiqadi. Stek bo'shagach, Event Loop navbatdagi callback'ni stekga o'tkazadi va `"Second"` konsolga chiqadi.

</p>
</details>

---

###### 31. Tugmani bosganda `event.target` nima bo'ladi?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Tashqi `div`
- B: Ichki `div`
- C: `button`
- D: Barcha ichma-ich elementlar massivi

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Hodisa nishoni (event target) - bu hodisani keltirib chiqargan eng ichki element hisoblanadi. Hodisalar tarqalishini to'xtatish uchun `event.stopPropagation()`dan foydalanish mumkin.

</p>
</details>

---

###### 32. Paragraf ustiga bosilganda konsolga nima chiqadi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`p` elementiga bosilgandan keyin `p` va `div` konsolga chiqadi. Hodisalar hayot siklida 3 ta bosqich bor: capturing, target va bubbling. Odatiy bo'lib hodisa ishlovchilari (event handlers) bubbling (ko'piklanish) bosqichida bajariladi, ya'ni eng ichki elementdan yuqoriga qarab tarqaladi.

</p>
</details>

---

###### 33. Natija qanday bo'ladi?

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
- C: `Lydia is 21` `function`
- D: `Lydia is 21` `Lydia is 21`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Ikkala holatda ham biz `this` kalit so'zi ishora qilishi kerak bo'lgan ob'ektni uzatamiz. Ammo `.call()` funktsiyani **darhol bajaradi**! `.bind()` esa funktsiyaning biriktirilgan kontekstli *nusxasini* qaytaradi, lekin uni darhol bajarmaydi.

</p>
</details>

---

###### 34. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`sayHi` funktsiyasi darhol chaqiriluvchi ko'rsatkichli funktsiya (IIFE) qaytargan qiymatni qaytaradi. Uning natijasi `0` bo'lib, uning tipi `"number"` (son) hisoblanadi.

</p>
</details>

---

###### 35. Ushbu qiymatlarning qaysilari yolg'on (falsy) hisoblanadi?

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
- D: Barchasi falsy

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScript-da faqat 8 ta falsy (yolgon) qiymat bor: `undefined`, `null`, `NaN`, `false`, `''` (bo'sh satr), `0`, `-0`, `0n`. `new Number` va `new Boolean` kabi funktsiya-konstruktorlar esa truthy (rost) ob'ektlar hisoblanadi.

</p>
</details>
---

###### 36. Natija qanday bo'ladi?

```javascript
typeof typeof 1;
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`typeof 1` ifodasi `"number"` qaytaradi (chunki 1 bu son). Keyin `typeof "number"` bajariladi va u `"string"` (satr) qaytaradi.

</p>
</details>

---

###### 37. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x empty, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, undefined x 7, 11]`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Massivga uning uzunligidan katta bo'lgan indeks bo'yicha qiymat biriktirilganda, JavaScript "bo'sh kataklar (empty slots)" deb ataladigan bo'shliqlarni yaratadi. Ularning qiymati teg ostida `undefined` bo'ladi, lekin konsolda brauzerga qarab `[1, 2, 3, 7 x empty, 11]` kabi ko'rinishda chiqariladi.

</p>
</details>

---

###### 38. Natija qanday bo'ladi?

```javascript
javascript() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1, y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
}

javascript();
```

- A: `1` `undefined` `2`
- B: `1` `1` `2`
- C: `1` `2` `2`
- D: `undefined` `undefined` `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`catch` bloki `x` argumentini oladi. Bu `try` blokidan tashqarida e'lon qilingan `x` o'zgaruvchisi emas. `catch` bloki ichida `x` ga `1` va `y` ga `2` biriktiriladi. Konsolga `x` chiqarilganda `1` chiqadi. Blokdan tashqarida `x` o'zgaruvchisi hali ham `undefined` bo'lib qoladi, `y` esa `2` ga teng bo'ladi (chunki `var` funktsiya doirasiga ega).

</p>
</details>

---

###### 39. JavaScript-dagi barcha narsalar yoki...

- A: primitiv yoki ob'ekt
- B: funktsiya yoki ob'ekt
- C: faqat ob'ekt
- D: minut yoki sekund

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScript-da faqat primitiv turlar va ob'ektlar bor. Primitiv turlar: `boolean`, `null`, `undefined`, `bigint`, `number`, `string` va `symbol`. Primitiv va ob'ekt o'rtasidagi farq shundaki, primitivlarda xususiyatlar yoki metodlar bo'lmaydi. Ammo `'foo'.toUpperCase()` xatosiz ishlaydi, chunki JS primitiv metodini chaqirmoqchi bo'lganingizda uni vaqtinchalik o'rab oluvchi ob'ektga (wrapper class) o'raydi va chaqirib bo'lgach yo'q qiladi.

</p>
</details>

---

###### 40. Natija qanday bo'ladi?

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2, 3]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 3, 4]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`[1, 2]` - bu `acc` o'zgaruvchisi boshlang'ich qiymat sifatida oladigan massiv. Birinchi iteratsiyadan keyin `acc` `[1, 2]` va `cur` `[0, 1]` bo'ladi. Birlashtirilgandan keyin natija `[1, 2, 0, 1]` bo'ladi. Keyin `cur` `[2, 3]` bilan birlashadi va yakuniy natija `[1, 2, 0, 1, 2, 3]` bo'ladi.

</p>
</details>

---

###### 41. Natija qanday bo'ladi?

```javascript
!!null;
!!'';
!!1;
```

- A: `true` `true` `true`
- B: `false` `false` `true`
- C: `false` `true` `false`
- D: `true` `false` `true`

<details><summary><b>Javob</b></summary>

#### Javob: B

`null` falsy qiymat. `!null` `true` qaytaradi, `!true` esa `false` qaytaradi.
`""` bo'sh satr falsy qiymat. `!""` `true` qaytaradi, `!true` esa `false` qaytaradi.
`1` truthy qiymat. `!1` `false` qaytaradi, `!false` esa `true` qaytaradi.

</details>

---

###### 42. `setInterval` metodi nimani qaytaradi?

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: unikal ID
- B: belgilangan sekundlar miqdori
- C: berilgan funktsiyani
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

Ushbu metod unikal ID qaytaradi. Bu ID intervalni `clearInterval()` funktsiyasi yordamida to'xtatish va tozalash uchun ishlatiladi.

</details>

---

###### 43. Natija qanday bo'ladi?

```javascript
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Javob</b></summary>

#### Javob: A

Satr takrorlanuvchi (iterable) ob'ektdir. Spread operatori (`...`) har bir belgini alohida massiv elementiga ajratib beradi.

</details>

---

###### 44. Natija qanday bo'ladi?

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `10` `20`
- B: `20` `20`
- C: `10` `10`
- D: `undefined` `20`

<details><summary><b>Javob</b></summary>

#### Javob: A

Odatiy funktsiyalarni to'xtatib bo me'yorib bo'lmaydi. Ammo generator-funktsiyalarni `yield` kalit so'zi yordamida to'xtatib turish mumkin. Birinchi marta `gen.next().value` chaqirilganda u birinchi `yield i` ya'ni `10`ni qaytaradi. Ikkinchi marta chaqirilganda esa `yield i * 2` ya'ni `20`ni qaytaradi.

</details>

---

###### 45. Natija qanday bo'ladi?

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
- C: `"one" "two"`
- D: `"two" "one"`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Promise.race()` metodiga bir nechta promiselar uzatilganda, u eng birinchi (eng tez) bajarilgan promisning natijasini qaytaradi. `secondPromise` 100ms ichida bajariladi, `firstPromise` esa 500ms oladi. Shuning uchun `"two"` konsolga chiqadi.

</details>
---

###### 46. Natija qanday bo'ladi?

```javascript
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```

- A: `[null]`
- B: `[{ name: "Lydia" }]`
- C: `[[]]`
- D: `[{}]`

<details><summary><b>Javob</b></summary>

#### Javob: B

Avval `person` o'zgaruvchisiga ob'ekt berildi. `members` massivining birinchi elementi ushbu ob'ekt xotiradagi manziliga havola sifatida qo'shildi. Keyin `person = null` qilinganda faqat `person` o'zgaruvchisining havolasi o'chirildi, lekin `members[0]` hali ham xotiradagi o'sha ob'ektga ishora qilib turadi. Shuning uchun `[{ name: "Lydia" }]` konsolga chiqadi.

</details>

---

###### 47. Natija qanday bo'ladi?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia", age: 21 }`
- B: `"name"`, `"age"`
- C: `"Lydia"`, `21`
- D: `["name", "Lydia"]`, `["age", 21]`

<details><summary><b>Javob</b></summary>

#### Javob: B

`for...in` sikli ob'ektning **kalitlari (keys)** bo'ylab takrorlanadi. Ob'ekt kalitlari stringlar bo'lgani uchun konsolga `"name"` va `"age"` chiqadi. Agar qiymatlarni olmoqchi bo'lsangiz `person[item]` deb yozishingiz kerak bo'lardi.

</details>

---

###### 48. Natija qanday bo'ladi?

```javascript
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Javob</b></summary>

#### Javob: B

Operatorlar chapdan o'ngga qarab bajariladi. Avval `3 + 4` amali bajarilib `7` soni hosil bo'ladi. Keyin `7 + '5'` bajariladi: son va satr qo'shilayotgani uchun `7` satrga o'girilib `"75"` natijasi hosil bo'ladi.

</details>

---

###### 49. `num` qiymati nimaga teng bo'ladi?

```javascript
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `7`
- C: `NaN`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: B

`parseInt()` satrning boshidan boshlab raqamlarni o'qiydi. U `7` raqamini o'qiydi va undan keyin son bo'lmagan `*` belgisiga duch kelgach o me me'yorida to me me'yorxtaydi. Shuning uchun u faqat `7` sonini qaytaradi.

</details>

---

###### 50. Natija qanday bo'ladi?

```javascript
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});
```

- A: `[2, 4, 6]`
- B: `[undefined, undefined, undefined]`
- C: `[]`
- D: `[null, null, null]`

<details><summary><b>Javob</b></summary>

#### Javob: B

Massivdagi har bir element uchun `typeof num === 'number'` sharti `true` bo'ladi va shunchaki `return` chaqiriladi. Bo'sh `return` avtomatik ravishda `undefined` qaytaradi. Shuning uchun `map` metodi 3 ta `undefined`dan iborat massiv qaytaradi.

</details>

---

###### 51. Natija qanday bo'ladi?

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

- A: `{ name: "Lydia" }` `"1997"`
- B: `{ name: "Sarah" }` `"1998"`
- C: `{ name: "Lydia" }` `"1998"`
- D: `{ name: "Sarah" }` `"1997"`

<details><summary><b>Javob</b></summary>

#### Javob: A

Ob'ektlar funktsiyaga **havola (reference)** bo'yicha uzatiladi. Shuning uchun `member.name` o'zgartirilganda asl `person` ob'ekti ham o'zgaradi va `name` `"Lydia"` bo'ladi. Primitivlar (satrlar) esa **qiymat (value)** bo'yicha uzatiladi, shuning uchun funktsiya ichidagi `year` o'zgarishi tashqaridagi `birthYear` o'zgaruvchisiga ta'sir qilmaydi (`"1997"` bo'lib qoladi).

</details>

---

###### 52. Natija qanday bo'ladi?

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
- C: `SyntaxError: Hello world!`
- D: `Oh no an error: Hello world!`

<details><summary><b>Javob</b></summary>

#### Javob: D

JavaScript-da `throw` yordamida nafaqat `Error` ob'ektlarini, balki har qanday qiymatni (satr, son, ob'ekt) xatolik sifatida otish mumkin. `greeting()` chaqirilganda u `'Hello world!'` satrini xatolik sifatida otadi va `catch (e)` bloki uni `e` parametri sifatida ushlab olib konsolga chiqaradi.

</details>

---

###### 53. Natija qanday bo'ladi?

```javascript
function Car() {
  this.make = 'Toyota';
  return { make: 'Ford' };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Toyota"`
- B: `"Ford"`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: B

Konstruktor funktsiyada agar siz aniq bir ob'ektni `return` qilsangiz, `new` operatori `this` orqali yaratilgan ob'ektni emas, balki aynan o'sha qaytarilgan ob'ektni (`{ make: 'Ford' }`) qaytaradi.

</details>

---

###### 54. Natija qanday bo'ladi?

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- A: `"undefined"` `"number"`
- B: `"number"` `"number"`
- C: `"undefined"` `"undefined"`
- D: `"number"` `"undefined"`

<details><summary><b>Javob</b></summary>

#### Javob: A

`let x = (y = 10)` ifodasi aslida ikkita amal: `y = 10` va `let x = y`. `y = 10` qilinganda `y` global o'zgaruvchi sifatida e'lon qilinadi (chunki u o'zidan oldin kalit so'zga ega emas). `x` esa `let` bilan e'lon qilingani uchun faqat IIFE funktsiyasi ichida mavjud bo'ladi. Tashqarida `typeof x` `"undefined"` va `typeof y` `"number"` qaytaradi.

</details>

---

###### 55. Natija qanday bo'ladi?

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

- A: `Woof I am Mara`, `TypeError`
- B: `Woof I am Mara`, `Woof I am Mara`
- C: `Woof I am Mara`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: A

Birinchi `pet.bark()` chaqirilganda u prototipdagi metodni topib bajaradi. Keyin `delete Dog.prototype.bark` orqali prototipdagi ushbu metod o'chiriladi. Ikkinchi marta `pet.bark()` chaqirilganda, u prototipda va ob me me'yorida metodni topa olmaydi va `TypeError: pet.bark is not a function` xatosini tashlaydi.

</details>
---

###### 56. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[1, 2, 3, 4, 5]`
- B: `1`
- C: `[1]`
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: B

Biz bu yerda **massiv destrukturizatsiyasi (array destructuring)**dan foydalandik. `[y]` massivning birinchi elementini oladi va uni `y` o'zgaruvchisiga tayinlaydi. Shuning uchun `y` ning qiymati `1` bo'ladi.

</details>

---

###### 57. Natija qanday bo'ladi?

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `admin`

<details><summary><b>Javob</b></summary>

#### Javob: B

Spread operatori (`...`) ob'ektning barcha o me'yori kalit-qiymat juftliklarini nusxalab yangi ob'ektga yoyib beradi. Shuning uchun `admin` ob me me'yori `{ admin: true, name: "Lydia", age: 21 }` ko'rinishida bo'ladi.

</details>

---

###### 58. Natija qanday bo'ladi?

```javascript
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia" }`, `["name"]`
- D: `{ name: "Lydia" }`, `["name", "age"]`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Object.defineProperty` yordamida ob'ektga yangi xususiyat qo'shilganda, uning `enumerable` (sanoqli/sanab o'tish mumkin bo'lgan) deskriptor qiymati odatiy bo'lib `false` bo'ladi. Bu shuni anglatadiki, xususiyat ob'ektning o'zida saqlanadi, lekin `Object.keys()` yoki `for...in` siklida ko'rinmaydi. Shuning uchun konsolga `{ name: "Lydia", age: 21 }` va `["name"]` chiqadi.

</details>

---

###### 59. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>

#### Javob: A

`JSON.stringify` funktsiyasining ikkinchi argumenti **replacer** (almashtiruvchi) deb ataladi. Agar replacer sifatida satrlar massivi uzatilsa, u faqat o'sha massivda ko'rsatilgan kalitlarni JSON satriga o me me'yoriingizga aylantirib beradi. Shuning uchun faqat `"level"` va `"health"` kalitlari JSON qilinadi.

</details>

---

###### 60. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>

#### Javob: A

`increaseNumber` funktsiyasidagi `num++` postfiks operatori bo'lgani uchun u avval `num`ning joriy qiymatini (`10`) qaytaradi, so'ng `num`ni `11` qiladi. Demak `num1 = 10`.
`increasePassedNumber(10)` chaqirilganda ham `number++` postfiks operatori bo'lgani uchun u avval `10`ni qaytaradi va `num2 = 10` bo'ladi.

</details>

---

###### 61. Natija qanday bo'ladi?

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
- B: `20`, `20`, `20`, `40`
- C: `20`, `20`, `40`, `80`
- D: `20`, `40`, `20`, `40`

<details><summary><b>Javob</b></summary>

#### Javob: C

Birinchi va ikkinchi `multiply()` chaqiriqlarida hech qanday argument uzatilmaydi, shuning uchun odatiy argument `x = { ...value }` har safar yangi nusxa (copy) yaratadi va `20` chiqaradi.
Uchinchi va to'rtinchi chaqiriqlarda esa biz asl `value` ob'ektini uzatamiz. Uchinchi chaqiriqda `value.number` `20` bo'ladi va konsolga `40` chiqadi. To'rtinchi chaqiriqda esa `40 * 2` bajarilib konsolga `80` chiqadi.

</details>

---

###### 62. Natija qanday bo'ladi?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` va `undefined` `3` va `undefined` `4`
- B: `1` `2` va `2` `3` va `3` `4`
- C: `1` `undefined` 2 `undefined` 3 `undefined` 4 `undefined`
- D: `1` `2` `3` `4`

<details><summary><b>Javob</b></summary>

#### Javob: A

`reduce` metodida agar boshlang'ich qiymat (initialValue) ko'rsatilmassa, birinchi element (`1`) accumulator (`x`), ikkinchi element (`2`) esa currentValue (`y`) bo'ladi. Birinchi iteratsiyada `1 2` konsolga chiqadi. Funktsiyadan hech narsa qaytarilmagani uchun (`return` yo'q), keyingi iteratsiyalarda `x` qiymati `undefined` bo'ladi va `undefined 3`, keyin `undefined 4` konsolga chiqadi.

</details>

---

###### 63. Qaysi me'yor yordamida sinfga metod qo'shish mumkin?

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const pet = new Dog('Mara');
```

- A: `Dog.prototype.bark = function() {}`
- B: `Dog.bark = function() {}`
- C: `pet.bark = function() {}`
- D: `Dog.prototype.bark = () => {}`

<details><summary><b>Javob</b></summary>

#### Javob: A

Sinf nusxalarining barchasi uchun metod mavjud bo'lishi uchun uni sinfning prototipiga (`Dog.prototype.bark`) qo'shish kerak.

</details>

---

###### 64. Natija qanday bo'ladi?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `Set(4) {1, 2, 3, 4}`
- C: `{1, 1, 2, 3, 4}`
- D: `Set(5) {1, 1, 2, 3, 4}`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Set` ob'ekti faqat unikal (takrorlanmas) qiymatlarni saqlaydi. Takrorlangan `1` qiymati olib tashlanadi va uning hajmi 4 ta elementdan iborat `Set(4) {1, 2, 3, 4}` bo'ladi.

</details>

---

###### 65. Natija qanday bo'ladi?

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

- A: `11`
- B: `Error`
- C: `NaN`
- D: `10`

<details><summary><b>Javob</b></summary>

#### Javob: B

ES6 modullaridan import qilingan o'zgaruvchilar **faqat o'qish uchun (read-only live bindings)** hisoblanadi. Siz ularni import qilgan faylingizda to'g'ridan-to me me'yori o'zgartira olmaysiz (`myCounter += 1` xatolik beradi).

</details>
---

###### 66. Natija qanday bo'ladi?

```javascript
const name = 'Lydia';
age = 21;

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `true`, `false`
- C: `false`, `false`
- D: `true`, `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

`delete` operatori ob'ekt xususiyatlarini o me'yochirish uchun mo'ljallangan. `const`, `let` yoki `var` bilan e'lon qilingan o'zgaruvchilarni `delete` orqali o me me'yochirib bo'lmaydi va u `false` qaytaradi. Lekin `age = 21` kalit so'zsiz yozilgani uchun u global ob'ektning xususiyati bo'lib qoladi va uni `delete` qilsa bo'ladi (`true` qaytaradi).

</details>

---

###### 67. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [x, ...y] = numbers;

console.log(x, y);
```

- A: `1` `[2, 3, 4, 5]`
- B: `[1]` `[2, 3, 4, 5]`
- C: `1` `2`
- D: `[1]` `2`

<details><summary><b>Javob</b></summary>

#### Javob: A

Destrukturizatsiyada `x` massivning birinchi elementini (`1`) oladi. Rest operatori (`...y`) esa massivning qolgan barcha elementlarini yig'ib yangi massiv (`[2, 3, 4, 5]`) ko'rinishida `y`ga beradi.

</details>

---

###### 68. Natija qanday bo'ladi?

```javascript
const box = { x: 10, y: 20 };
Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape.x);
```

- A: `100`
- B: `10`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Object.freeze()` ob'ektni muzlatib qo'yadi, ya'ni uning xususiyatlarini o'zgartirib, o me me'yochirib yoki yangi xususiyat qo'shib bo'lmaydi. `shape` va `box` bir xil ob'ektga havola ko'rsatgani uchun `shape.x = 100` amali ob'ektni o'zgartirmaydi va `10` bo'lib qolaveradi.

</details>

---

###### 69. Natija qanday bo'ladi?

```javascript
const { name: myName } = { name: 'Lydia' };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: C

Ob'ekt destrukturizatsiyasida `{ name: myName }` sintaksisi `name` xususiyatini olib, uni `myName` nomli yangi o'zgaruvchiga tayinlashni anglatadi. Shuning uchun `name` degan o'zgaruvchi umuman yaratilmaydi va uni konsolga chiqarishda `ReferenceError` tashlanadi.

</details>

---

###### 70. Ushbu funktsiya sof (pure function) hisoblanadimi?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Ha
- B: Yo'q

<details><summary><b>Javob</b></summary>

#### Javob: A

Sof funktsiya (pure function) - bu bir xil argumentlar uzatilganda har doim bir xil natija qaytaradigan va hech qanday nojo'ya ta'sirlarga (side-effects, masalan tashqi o'zgaruvchilarni o'zgartirish) ega bo'lmagan funktsiyadir. `sum(a, b)` aynan shunday funktsiya.

</details>

---

###### 71. Natija qanday bo'ladi?

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
```

- A: `Calculated! 20`, `Calculated! 20`
- B: `Calculated! 20`, `From cache! 20`
- C: `From cache! 20`, `Calculated! 20`
- D: `From cache! 20`, `From cache! 20`

<details><summary><b>Javob</b></summary>

#### Javob: B

`add` funktsiyasi closure (konyunktura) hosil qiladi va `cache` ob'ektini xotirada saqlab qoladi. Birinchi `addFunction(10)` chaqiriqda `10` keshda bo'lmaydi va u hisoblanib `Calculated! 20` qaytariladi va keshga yoziladi. Ikkinchi chaqiriqda u keshdan olinib `From cache! 20` qaytariladi.

</details>

---

###### 72. Natija qanday bo'ladi?

```javascript
const myLifeSummed = ["🚴🏽‍♀️", "🏃🏽‍♀️", "🧗🏽‍♀️", "🏌🏽‍♀️"].reduce((acc, cur) => acc + cur, 10);

console.log(myLifeSummed);
```

- A: `10🚴🏽‍♀️🏃🏽‍♀️🧗🏽‍♀️🏌🏽‍♀️`
- B: `20`
- C: `NaN`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: A

`reduce` metodida boshlang'ich qiymat `10` (son). Birinchi iteratsiyada `10 + "🚴🏽‍♀️"` bajariladi va u satrga o me'yogirilib `"10🚴🏽‍♀️"` bo'ladi. Keyingi barcha emoji emojilar ham satr sifatida birlashib boradi.

</details>

---

###### 73. Natija qanday bo'ladi?

```javascript
status = '😎';

const setTimeoutPromise = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  status = '🏎';
  await setTimeoutPromise(0);
  status = '😴';
}

main();
console.log(status);
```

- A: `😎`
- B: `🏎`
- C: `😴`
- D: `Promise`

<details><summary><b>Javob</b></summary>

#### Javob: B

`main()` chaqirilganda `status` avval `'🏎'` bo'ladi. Keyin `await` operatoriga duch kelgach, `main` funktsiyasi ijrosi to'xtatib turiladi va kod davom etadi. Sinxron tarzda oxiridagi `console.log(status)` bajariladi va u o'sha paytdagi qiymat `'🏎'`ni konsolga chiqaradi.

</details>

---

###### 74. Natija qanday bo'ladi?

```javascript
function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

const gen = dataConsumer();
gen.next();
gen.next('Lydia');
gen.next('Hallie');
```

- A: `Started`, `1. Lydia`, `2. Hallie`
- B: `1. undefined`, `2. Lydia`, `3. Hallie`
- C: `Started`, `1. undefined`, `2. Lydia`
- D: `Started`, `1. Lydia`, `2. undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

Birinchi `gen.next()` generatorni ishga tushiradi va u birinchi `yield`gacha bajarilib `Started` konsolga chiqadi. Ikkinchi `gen.next('Lydia')` uzatilgan `'Lydia'` qiymatini birinchi `yield` o'rniga qo'yadi va `1. Lydia` konsolga chiqadi. Uchinchi `gen.next('Hallie')` esa `2. Hallie`ni konsolga chiqaradi.

</details>

---

###### 75. Natija qanday bo'ladi?

```javascript
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch (e) {
    console.log('Oh no an error:', e);
  } finally {
    console.log('Oh finally!');
  }
})();
```

- A: `Woah some cool data`, `Oh finally!`
- B: `Woah some cool data`
- C: `Oh no an error: undefined`, `Oh finally!`
- D: `Oh finally!`

<details><summary><b>Javob</b></summary>

#### Javob: A

`await myPromise` promiselar bajarilganda `"Woah some cool data"` qaytaradi va konsolga chiqariladi. `finally` bloki esa promis muvaffaqiyatli yoki xatolik bilan tugashidan qat'i nazar har doim bajariladi va `"Oh finally!"` chiqaradi.

</details>
---

###### 76. Natija qanday bo'ladi?

```javascript
const name = 'Lydia';

console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"        Lydia"`, `"Lydia"`
- B: `"Lydia"`, `"Lydia"`
- C: `"        Lydia"`, `"  Lydia"`
- D: `"Lydia"`, `"  Lydia"`

<details><summary><b>Javob</b></summary>

#### Javob: A

`padStart()` metodi satrning boshiga ko'rsatilgan uzunlikka yetguncha bo'shliqlar (yoki berilgan belgilar) qo'shadi. Birinchisi satr uzunligini `13` qilish uchun 8 ta bo'shliq qo'shadi (`"        Lydia"`). Ikkinchisi uchun berilgan uzunlik (`2`) satrning asl uzunligidan (`5`) kichik bo'lgani uchun u satrni o'zgartirmasdan `"Lydia"` qaytaradi.

</details>

---

###### 77. Natija qanday bo'ladi?

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `25735`
- C: `NaN`
- D: `Error`

<details><summary><b>Javob</b></summary>

#### Javob: A

Emojilar ham JavaScript-da Unicode satrlar hisoblanadi. Ikki satrni `+` bilan qo'shish ularni shunchaki birlashtiradi (konkatenatsiya) va `"🥑💻"` natijasini beradi.

</details>

---

###### 78. Generator funktsiyalardan qanday qilib qiymatlar olinadi?

```javascript
function* sum(a, b) {
  return a + b;
}
```

- A: `sum(1, 2).next()`
- B: `sum(1, 2).next().value`
- C: `sum(1, 2)`
- D: `[...sum(1, 2)]`

<details><summary><b>Javob</b></summary>

#### Javob: B

Generator funktsiya chaqirilganda u generator ob'ektini qaytaradi. Qiymatni olish uchun ushbu ob'ektning `.next()` metodi chaqiriladi va u qaytargan `{ value: ..., done: ... }` ob'ektidan `.value` olinadi.

</details>

---

###### 79. Natija qanday bo'ladi?

```javascript
const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};

add(10)(20)(30);
```

- A: `10 20 30` konsolga chiqadi va `60` qaytaradi
- B: `60` konsolga chiqadi
- C: `Promise`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: A

Bu karrirlash (currying) funktsiyasi bo'lib, har bir ichma-ich ko'rsatkichli funktsiya bittadan argument oladi va konyunktura (closure) hosil qiladi. `add(10)(20)(30)` chaqirilganda `x=10`, `y=20`, `z=30` konsolga chiqadi va ularning yig'indisi `60` qaytariladi.

</details>

---

###### 80. Natija qanday bo'ladi?

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

- A: `1` `2` `3`
- B: `Promise` `Promise` `Promise`
- C: `1` `undefined` `undefined`
- D: `Error`

<details><summary><b>Javob</b></summary>

#### Javob: A

Asinxron generatorlar (`async function*`) va `for await...of` sikli birgalikda ishlatilganda, u generator qaytargan har bir promisning bajarilishini kutadi va uning qiymatini oladi. Shuning uchun `1`, `2`, `3` ketma-ket konsolga chiqadi.

</details>

---

###### 81. Natija qanday bo'ladi?

```javascript
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

Object.values(myObject).forEach(x => console.log(x));
```

- A: `a`, `b`, `c`
- B: `1`, `2`, `3`
- C: `["a", 1]`, `["b", 2]`, `["c", 3]`
- D: `myObject`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Object.values()` metodi ob'ektning barcha xususiyatlarining qiymatlarini massiv ko'rinishida qaytaradi (`[1, 2, 3]`). `forEach` sikli esa ushbu qiymatlarni bittalab konsolga chiqaradi.

</details>

---

###### 82. Natija qanday bo'ladi?

```javascript
const str = 'Hello world!';
console.log(str.lastIndexOf('o'));
console.log(str.lastIndexOf('o', 5));
```

- A: `7`, `4`
- B: `7`, `7`
- C: `4`, `4`
- D: `4`, `7`

<details><summary><b>Javob</b></summary>

#### Javob: A

`lastIndexOf()` metodi berilgan kichik satrning oxirgi uchrashgan indeksini qaytaradi. `'Hello world!'` satrida oxirgi `'o'` indeksi `7`. Ikkinchi argument bo'lsa qidiruvni qaysi indeksgacha (orqaga qarab) amalga oshirishni belgilaydi: 5-indeksgacha bo'lgan qismda esa oxirgi `'o'` indeksi `4` hisoblanadi.

</details>

---

###### 83. Natija qanday bo'ladi?

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
changeAgeAndName(person);

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Sarah", age: 22 }`
- C: `{ name: "Sarah", age: 23 }`
- D: `{ name: "Lydia", age: 23 }`

<details><summary><b>Javob</b></summary>

#### Javob: C

Argument sifatida to'g'ridan-to me me'yori `person` ob'ekti uzatildi. Birinchi `changeAge(person)` chaqiriqda `age` `22` bo'ldi. Ikkinchi `changeAgeAndName(person)` chaqiriqda `age` `23` va `name` `"Sarah"`ga o'zgardi.

</details>

---

###### 84. Natija qanday bo'ladi?

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🥑';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🥑', '🍫', '🥑', '🍔']`
- C: `['🍕', '🍫', '🍕', '🍔']`
- D: `['🥑', '🍫', '🍕', '🍔']`

<details><summary><b>Javob</b></summary>

#### Javob: A

`info.favoriteFood` o'zgaruvchisiga `food[0]` ya'ni `'🍕'` primitiv qiymati nusxalab berilgan edi. Shuning uchun `info.favoriteFood = '🥑'` amali asl `food` massiviga hech qanday ta'sir o'tkazmaydi.

</details>

---

###### 85. `JSON.parse()` metodi nima qiladi?

```javascript
JSON.parse(str);
```

- A: Ob'ektni JSON satriga o'giradi
- B: JSON satrini JavaScript qiymati yoki ob'ektiga o'giradi
- C: Faqat javoblarni tekshiradi
- D: Satrni o me'yochiradi

<details><summary><b>Javob</b></summary>

#### Javob: B

`JSON.parse()` metodi JSON formatidagi satrni JavaScript ob'ekti, massivi yoki primitiv qiymatiga aylantirib beradi.

</details>
---

###### 86. Natija qanday bo'ladi?

```javascript
let name = 'Lydia';
function getName() {
  console.log(name);
  let name = 'Sarah';
}
getName();
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: C

Funktsiya ichidagi `let name` hoist qilinadi, lekin initsializatsiya qilinmaydi. Funktsiya ichida `console.log(name)` bajarilayotganda, u vaqtinchalik o me me'yorlik hududida (Temporal Dead Zone) bo'ladi. Tashqi `let name = 'Lydia'` ko'rilmaydi. Shuning uchun `ReferenceError` xatosi yuzaga keladi.

</details>

---

###### 87. Natija qanday bo'ladi?

```javascript
const details = {
  message: 'Hello!',
};

function getDetails() {
  return details;
}

console.log(getDetails() === details);
```

- A: `true`
- B: `false`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

`getDetails()` funktsiyasi `details` ob'ektining xotiradagi aynan o'sha havolasini (reference) qaytaradi. Shuning uchun `getDetails() === details` taqqoslovi `true` beradi.

</details>

---

###### 88. Natija qanday bo'ladi?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

changeAge(person);

function changeAge(x) {
  x.age = 25;
}

console.log(person.age);
```

- A: `21`
- B: `25`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>

#### Javob: B

Funktsiya e'lonlari (`function declaration`) hoist qilinadi, shuning uchun e'lon qilinishidan oldin chaqirilishi mumkin. `person` ob'ekti havola bo'yicha uzatilgani uchun funktsiya ichida `x.age = 25` amali asl ob'ektning `age` xususiyatini `25` ga o'zgartiradi.

</details>

---

###### 89. Natija qanday bo'ladi?

```javascript
const getList = ([x, ...y]) => [x, y];
const getUser = user => ({ name: user.name, age: user.age });

const list = [1, 2, 3, 4];
const user = { name: 'Lydia', age: 21 };

console.log(getList(list));
console.log(getUser(user));
```

- A: `[1, [2, 3, 4]]` va `{ name: "Lydia", age: 21 }`
- B: `[[1], [2, 3, 4]]` va `{ name: "Lydia", age: 21 }`
- C: `[1, [2, 3, 4]]` va `["Lydia", 21]`
- D: `[1, 2, 3, 4]` va `{ name: "Lydia", age: 21 }`

<details><summary><b>Javob</b></summary>

#### Javob: A

`getList` destrukturizatsiya orqali `x = 1` va `y = [2, 3, 4]` oladi va `[1, [2, 3, 4]]` qaytaradi. `getUser` esa `user` ob'ektidan yangi `{ name: "Lydia", age: 21 }` ob'ektini yaratib qaytaradi.

</details>

---

###### 90. Natija qanday bo'ladi?

```javascript
const name = 'Lydia Hallie';
console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
```

- A: `true` `false`
- B: `false` `false`
- C: `false` `true`
- D: `true` `true`

<details><summary><b>Javob</b></summary>

#### Javob: B

Operatorlar ustunligi bo'yicha `!` unar operatori `===` taqqoslovidan oldin bajariladi. `typeof name` `"string"` qaytaradi. `!typeof name` esa `!"string"` bo'lib `false` qaytaradi. Keyin `false === 'object'` (`false`) va `false === 'string'` (`false`) bajariladi.

</details>

---

###### 91. Natija qanday bo'ladi?

```javascript
const add = x => y => z => x + y + z;
console.log(add(1)(2)(3));
```

- A: `6`
- B: `123`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

Bu karrirlangan (curried) ko'rsatkichli funktsiya bo'lib, ketma-ket chaqiruvlarda `1 + 2 + 3 = 6` natijasini qaytaradi.

</details>

---

###### 92. Natija qanday bo'ladi?

```javascript
const name = 'Lydia';
name.age = 21;

console.log(name.age);
```

- A: `21`
- B: `undefined`
- C: `TypeError`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>

#### Javob: B

`name` bu primitiv satr (string). Primitiv turlarga yangi xususiyat qo'shib bo'lmaydi. `name.age = 21` amali o'sha vaqtning o'zida yaratilgan vaqtincha ob'ektga yoziladi va darhol yo'qotiladi. Asl satrda `age` xususiyati bo'lmaydi va `undefined` qaytaradi.

</details>

---

###### 93. Natija qanday bo'ladi?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

- A: `"name" "Lydia"` va `"age" 21`
- B: `["name", "Lydia"]` va `["age", 21]`
- C: `"Lydia" "name"` va `21 "age"`
- D: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Object.entries(person)` ob'ektni `[["name", "Lydia"], ["age", 21]]` ko'rinishida qaytaradi. `for...of` siklida destrukturizatsiya `[key, value]` qo'llanganda har bir juftlik kaliti va qiymati konsolga chiqariladi.

</details>

---

###### 94. Natija qanday bo'ladi?

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

- A: `second`, `I have resolved!`, `I have resolved!`, `second`
- B: `I have resolved!`, `second`, `I have resolved!`, `second`
- C: `second`, `I have resolved!`, `second`, `I have resolved!`
- D: `I have resolved!`, `I have resolved!`, `second`, `second`

<details><summary><b>Javob</b></summary>

#### Javob: A

`firstFunction`da promis asinxron bajariladi va sinxron `console.log('second')` birinchi chiqadi. Keyin promis microtask navbatidan chiqib `"I have resolved!"` bo'ladi. `secondFunction`da esa `await` ishlatilgani uchun birinchi promis kutiladi va `"I have resolved!"`, so'ng `second` chiqadi.

</details>

---

###### 95. Natija qanday bo'ladi?

```javascript
console.log(0 || 1 && 2 || 3);
```

- A: `0`
- B: `1`
- C: `2`
- D: `3`

<details><summary><b>Javob</b></summary>

#### Javob: C

`&&` (AND) operatori `||` (OR) operatoridan ko'ra yuqori ustunlikka ega. Avval `1 && 2` bajariladi: ikkalasi ham truthy bo'lgani uchun oxirgi qiymat `2` qaytadi. Ifoda `0 || 2 || 3` bo'lib qoladi. `||` operatori birinchi truthy qiymatni oladi, ya'ni `2`ni qaytaradi.

</details>
---

###### 96. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>

#### Javob: B

Ob'ekt kalitlari kapot ostida avtomatik ravishda satrlarga o'giriladi (`"[object Object]"`). Shuning uchun `a[b]` va `a[c]` bir xil `a["[object Object]"]` xususiyatini o'zgartiradi va oxirgi berilgan `456` qiymatini saqlab qoladi.

</details>

---

###### 97. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers.length);
```

- A: `4`
- B: `11`
- C: `10`
- D: `3`

<details><summary><b>Javob</b></summary>

#### Javob: B

Massiv uzunligi (`length`) har doim eng katta indeks plus birga teng bo'ladi. Indeks `10` ga `11` qiymati biriktirilgani uchun massiv uzunligi `11` ga teng bo'ladi.

</details>

---

###### 98. Natija qanday bo'ladi?

```javascript
const person = { name: 'Lydia' };

Object.seal(person);

person.name = 'Evan';
person.age = 21;
delete person.name;

console.log(person);
```

- A: `{ name: "Evan", age: 21 }`
- B: `{ name: "Evan" }`
- C: `{ name: "Lydia" }`
- D: `{ name: "Lydia", age: 21 }`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Object.seal()` ob'ektni muhrlaydi: unga yangi xususiyat qo'shish (`age = 21`) va mavjud xususiyatlarni o me me'yochirish (`delete person.name`) taqiqlanadi. Lekin mavjud xususiyatlarning qiymatini o'zgartirishga ruxsat beriladi (`person.name = 'Evan'`). Shuning uchun konsolga `{ name: "Evan" }` chiqadi.

</details>

---

###### 99. Natija qanday bo'ladi?

```javascript
const value = 'Lydia';
console.log(Array.from(value));
```

- A: `["Lydia"]`
- B: `["L", "y", "d", "i", "a"]`
- C: `[["Lydia"]]`
- D: `["Lydia", "Lydia"]`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Array.from()` metodi takrorlanuvchi (iterable) ob'ektlardan (masalan, satrlardan) alohida massiv elementlarini yaratib beradi va `["L", "y", "d", "i", "a"]` qaytaradi.

</details>

---

###### 100. Natija qanday bo'ladi?

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
- C: `"one" "two"`
- D: `"two" "one"`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Promise.race()` eng birinchi bajarilgan promis natijasini qaytaradi. 100ms ichida bajarilgan `secondPromise` g'olib bo'ladi va `"two"` qaytaradi.

</details>

---

###### 101. Natija qanday bo'ladi?

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
  if (num) count += 1;
});

console.log(count);
```

- A: `3`
- B: `4`
- C: `0`
- D: `1`

<details><summary><b>Javob</b></summary>

#### Javob: A

`if (num)` shartida `0` falsy qiymat bo'lgani uchun u bajarilmaydi. `1`, `2`, `3` esa truthy qiymat bo'lgani uchun `count` 3 marta oshiriladi va `3` chiqadi.

</details>

---

###### 102. Natija qanday bo'ladi?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

console.log(person);
```

- A: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- B: `{ name: "Lydia", age: 21 }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>

#### Javob: B

`person.city` mavjud bo'lmagani uchun `city` o'zgaruvchisi `undefined` bo'ladi. Keyin `city = 'Amsterdam'` amali faqat mahalliy `city` o'zgaruvchisini o'zgartiradi, `person` ob'ektiga ta'sir qilmaydi.

</details>

---

###### 103. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x empty, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, undefined x 7, 11]`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>

#### Javob: A

Massivda oraliq elementlar uchun bo'sh joylar (empty slots) yaratiladi.

</details>

---

###### 104. Natija qanday bo'ladi?

```javascript
const getAge = (...args) => {
  console.log(typeof args);
};

getAge(21);
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

<details><summary><b>Javob</b></summary>

#### Javob: C

Rest parametri (`...args`) har doim massiv hosil qiladi, JavaScript-da massiv tipi `"object"`dir.

</details>

---

###### 105. Natija qanday bo'ladi?

```javascript
console.log(String.raw`Hello
world`);
```

- A: `Hello` va `world` yangi qatorda
- B: `Hello
world`
- C: `Hello world`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>

#### Javob: B

`String.raw` teglangan shablon satri barcha qochish belgilarini (`
`, `	` va b.) xom satr (raw string) sifatida ko'radi va almashtirmasdan `Hello
world` deb chiqaradi.

</details>
---

###### 106. Natija qanday bo'ladi?

```javascript
const set = new Set([1, 1, 2, 3, 4]);
console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `Set(4) {1, 2, 3, 4}`
- C: `{1, 1, 2, 3, 4}`
- D: `Set(5) {1, 1, 2, 3, 4}`

<details><summary><b>Javob</b></summary>

#### Javob: B

`Set` faqat unikal qiymatlarni saqlaydi.

</details>

---

###### 107. Natija qanday bo'ladi?

```javascript
const name = 'Lydia';
console.log(name.padStart(13));
```

- A: `"        Lydia"`
- B: `"Lydia"`
- C: `"  Lydia"`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>

#### Javob: A

`padStart(13)` uzunlikni 13 bo'lishi uchun 8 ta bo'shliq qo'shadi.

</details>

---

###### 108. Natija qanday bo'ladi?

```javascript
const box = { x: 10, y: 20 };
Object.freeze(box);
const shape = box;
shape.x = 100;
console.log(shape.x);
```

- A: `100`
- B: `10`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: B

Muzlatilgan ob'ekt o'zgarmaydi.

</details>

---

###### 109. Natija qanday bo'ladi?

```javascript
const add = x => y => z => x + y + z;
console.log(add(10)(20)(30));
```

- A: `60`
- B: `102030`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: A

Karrirlash funktsiyasi 10 + 20 + 30 = 60 qaytaradi.

</details>

---

###### 110. Natija qanday bo'ladi?

```javascript
const details = { message: 'Hello!' };
function getDetails() { return details; }
console.log(getDetails() === details);
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

Aynan bir xil havola bo'lgani uchun `true`.

</details>

---

###### 111. Natija qanday bo'ladi?

```javascript
const value = { number: 10 };
const multiply = (x = { ...value }) => { console.log((x.number *= 2)); };
multiply();
multiply();
```

- A: `20`, `20`
- B: `20`, `40`

<details><summary><b>Javob</b></summary>

#### Javob: A

Odatiy argumentlar har safar yangi ob'ekt nusxasini yaratadi.

</details>

---

###### 112. Natija qanday bo'ladi?

```javascript
const name = 'Lydia Hallie';
console.log(!typeof name === 'object');
```

- A: `false`
- B: `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

`!typeof name` -> `!"string"` -> `false`. `false === 'object'` -> `false`.

</details>

---

###### 113. Natija qanday bo'ladi?

```javascript
console.log(0 || 1 && 2 || 3);
```

- A: `2`
- B: `1`

<details><summary><b>Javob</b></summary>

#### Javob: A

`1 && 2` -> `2`, so'ng `0 || 2 || 3` -> `2`.

</details>

---

###### 114. Natija qanday bo'ladi?

```javascript
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);
console.log(a === b);
```

- A: `false`, `false`
- B: `true`, `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

Massivlar xotirada turli havolalarga ega bo'lgani uchun taqqoslash `false` qaytaradi.

</details>

---

###### 115. Natija qanday bo'ladi?

```javascript
const str = 'Hello world!';
console.log(str.includes('world'));
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

`includes` metodi satrda qidirilayotgan so'z borligini tekshiradi va `true` qaytaradi.

</details>

---

###### 116. Natija qanday bo'ladi?

```javascript
const list = [1, 2, 3];
list.push(4);
console.log(list);
```

- A: `[1, 2, 3, 4]`
- B: `4`

<details><summary><b>Javob</b></summary>

#### Javob: A

`push` metodi massiv oxiriga element qo'shadi.

</details>

---

###### 117. Natija qanday bo'ladi?

```javascript
const person = { name: 'Lydia' };
Object.seal(person);
person.name = 'Evan';
console.log(person.name);
```

- A: `"Evan"`
- B: `"Lydia"`

<details><summary><b>Javob</b></summary>

#### Javob: A

Muhrlangan ob'ektning mavjud qiymatlarini o'zgartirish mumkin.

</details>

---

###### 118. Natija qanday bo'ladi?

```javascript
console.log(typeof NaN);
```

- A: `"number"`
- B: `"NaN"`

<details><summary><b>Javob</b></summary>

#### Javob: A

JavaScript-da `NaN` (Not a Number) turi son (`"number"`) hisoblanadi.

</details>

---

###### 119. Natija qanday bo'ladi?

```javascript
const arr = [1, 2, 3];
console.log(arr.reverse());
```

- A: `[3, 2, 1]`
- B: `[1, 2, 3]`

<details><summary><b>Javob</b></summary>

#### Javob: A

`reverse` metodi massivni teskari tartibda o me me'yoringizga o me'yogiradi.

</details>

---

###### 120. Natija qanday bo'ladi?

```javascript
console.log(1 + '1');
```

- A: `"11"`
- B: `2`

<details><summary><b>Javob</b></summary>

#### Javob: A

Son va satr qo'shilganda konkatenatsiya sodir bo'ladi va `"11"` chiqadi.

</details>

---

###### 121. Natija qanday bo'ladi?

```javascript
console.log(1 - '1');
```

- A: `0`
- B: `"0"`

<details><summary><b>Javob</b></summary>

#### Javob: A

Ayirish operatori satrni songa o'giradi va `1 - 1 = 0` bo'ladi.

</details>

---

###### 122. Natija qanday bo'ladi?

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj));
```

- A: `["a", "b"]`
- B: `[1, 2]`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Object.keys` ob'ekt kalitlarini massiv sifatida qaytaradi.

</details>

---

###### 123. Natija qanday bo'ladi?

```javascript
console.log(Boolean(''));
```

- A: `false`
- B: `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

Bo'sh satr falsy qiymat bo'lgani uchun `Boolean('')` `false` qaytaradi.

</details>

---

###### 124. Natija qanday bo'ladi?

```javascript
console.log(Boolean(' '));
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

Bo'shliq belgisi bor satr truthy qiymat hisoblanadi va `true` qaytaradi.

</details>

---

###### 125. Natija qanday bo'ladi?

```javascript
const person = { name: 'Lydia' };
console.log(person?.name);
```

- A: `"Lydia"`
- B: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

Koptional chaining operatori (`?.`) xavfsiz murojaat qiladi va `"Lydia"` qaytaradi.

</details>

---

###### 126. Natija qanday bo'ladi?

```javascript
const person = null;
console.log(person?.name);
```

- A: `undefined`
- B: `TypeError`

<details><summary><b>Javob</b></summary>

#### Javob: A

`person` `null` bo'lgani uchun xatolik o'rniga xavfsiz `undefined` qaytaradi.

</details>

---

###### 127. Natija qanday bo'ladi?

```javascript
console.log(null ?? 'default');
```

- A: `"default"`
- B: `null`

<details><summary><b>Javob</b></summary>

#### Javob: A

Nullish coalescing operatori (`??`) agar chap tomondagi qiymat `null` yoki `undefined` bo'lsa, o'ng tomondagi qiymatni qaytaradi.

</details>

---

###### 128. Natija qanday bo'ladi?

```javascript
console.log(undefined ?? 'default');
```

- A: `"default"`
- B: `undefined`

<details><summary><b>Javob</b></summary>

#### Javob: A

`undefined` uchun ham o me me'yoringizga o me'yori o'ng tomondagi `"default"` qaytariladi.

</details>

---

###### 129. Natija qanday bo'ladi?

```javascript
console.log(0 ?? 'default');
```

- A: `0`
- B: `"default"`

<details><summary><b>Javob</b></summary>

#### Javob: A

`0` `null` ham, `undefined` ham emas. Shuning uchun `0` ning o'zi qaytadi.

</details>

---

###### 130. Natija qanday bo'ladi?

```javascript
console.log(false ?? 'default');
```

- A: `false`
- B: `"default"`

<details><summary><b>Javob</b></summary>

#### Javob: A

`false` `null` yoki `undefined` bo'lmagani uchun `false` qaytadi.

</details>
---

###### 131. Natija qanday bo'ladi?

```javascript
console.log(1 || 2);
```

- A: `1`
- B: `2`

<details><summary><b>Javob</b></summary>

#### Javob: A

`||` birinchi truthy qiymatni qaytaradi.

</details>

---

###### 132. Natija qanday bo'ladi?

```javascript
console.log(1 && 2);
```

- A: `2`
- B: `1`

<details><summary><b>Javob</b></summary>

#### Javob: A

`&&` ikkala operand truthy bo'lsa oxirgi qiymatni qaytaradi.

</details>

---

###### 133. Natija qanday bo'ladi?

```javascript
console.log(0 && 2);
```

- A: `0`
- B: `2`

<details><summary><b>Javob</b></summary>

#### Javob: A

`&&` birinchi falsy qiymatni topganda to me me'yorxtaydi va o'shani qaytaradi.

</details>

---

###### 134. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(numbers.map(n => n * 2));
```

- A: `[2, 4, 6]`
- B: `[1, 2, 3]`

<details><summary><b>Javob</b></summary>

#### Javob: A

`map` har bir elementni har bitta o me me'yoringizga o me'yogirib yangi massiv qaytaradi.

</details>

---

###### 135. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(numbers.filter(n => n > 1));
```

- A: `[2, 3]`
- B: `[1, 2, 3]`

<details><summary><b>Javob</b></summary>

#### Javob: A

`filter` shartga mos keladigan elementlarni saralab yangi massiv qaytaradi.

</details>

---

###### 136. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(numbers.find(n => n > 1));
```

- A: `2`
- B: `[2, 3]`

<details><summary><b>Javob</b></summary>

#### Javob: A

`find` shartga mos keladigan eng birinchi elementni qaytaradi.

</details>

---

###### 137. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(numbers.findIndex(n => n > 1));
```

- A: `1`
- B: `2`

<details><summary><b>Javob</b></summary>

#### Javob: A

`findIndex` shartga mos keladigan eng birinchi elementning indeksini qaytaradi (2 sonining indeksi 1).

</details>

---

###### 138. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(numbers.some(n => n > 2));
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

`some` kamida bitta element shartga mos kelsa `true` qaytaradi.

</details>

---

###### 139. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(numbers.every(n => n > 2));
```

- A: `false`
- B: `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

`every` barcha elementlar shartga mos kelgandagina `true` qaytaradi.

</details>

---

###### 140. Natija qanday bo'ladi?

```javascript
const name = 'Lydia';
console.log(Array.isArray(name));
```

- A: `false`
- B: `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Array.isArray` berilgan qiymat massiv yoki emasligini tekshiradi, satr bo'lgani uchun `false`.

</details>

---

###### 141. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
console.log(Array.isArray(numbers));
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

`numbers` massiv bo'lgani uchun `true` qaytaradi.

</details>

---

###### 142. Natija qanday bo'ladi?

```javascript
console.log(Object.is(5, 5));
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Object.is` ikkita qiymatning bir xilligini tekshiradi va `true` qaytaradi.

</details>

---

###### 143. Natija qanday bo'ladi?

```javascript
console.log(Object.is(NaN, NaN));
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>

#### Javob: A

`===` taqqoslovidan farqli o'laroq, `Object.is(NaN, NaN)` `true` qaytaradi.

</details>

---

###### 144. Natija qanday bo'ladi?

```javascript
console.log(NaN === NaN);
```

- A: `false`
- B: `true`

<details><summary><b>Javob</b></summary>

#### Javob: A

`===` taqqoslovida `NaN` hech qachon o'ziga teng bo'lmaydi va `false` qaytaradi.

</details>

---

###### 145. Natija qanday bo'ladi?

```javascript
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);
```

- A: `{ a: 1 }`
- B: `{}`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Object.assign` ob'ektlarni nusxalash uchun ishlatiladi.

</details>

---

###### 146. Natija qanday bo'ladi?

```javascript
const a = { x: 1 };
const b = { y: 2 };
const merged = Object.assign(a, b);
console.log(merged);
```

- A: `{ x: 1, y: 2 }`
- B: `{ x: 1 }`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Object.assign` bir nechta ob me me me'yoringiz ob'ektlarni bitta ob'ektga birlashtirib beradi.

</details>

---

###### 147. Natija qanday bo'ladi?

```javascript
const str = 'Hello';
console.log(str.split(''));
```

- A: `["H", "e", "l", "l", "o"]`
- B: `["Hello"]`

<details><summary><b>Javob</b></summary>

#### Javob: A

`split('')` satrni har bir harf bo'yicha massivga bo me me'yoladi.

</details>

---

###### 148. Natija qanday bo'ladi?

```javascript
const arr = ['H', 'e', 'l', 'l', 'o'];
console.log(arr.join(''));
```

- A: `"Hello"`
- B: `"H,e,l,l,o"`

<details><summary><b>Javob</b></summary>

#### Javob: A

`join('')` massiv elementlarini satr sifatida birlashtiradi.

</details>

---

###### 149. Natija qanday bo'ladi?

```javascript
const str = '  Hello  ';
console.log(str.trim());
```

- A: `"Hello"`
- B: `"  Hello  "`

<details><summary><b>Javob</b></summary>

#### Javob: A

`trim()` satr boshidagi va oxiridagi bo'shliqlarni olib tashlaydi.

</details>

---

###### 150. Natija qanday bo'ladi?

```javascript
console.log(Math.max(1, 2, 3));
```

- A: `3`
- B: `1`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Math.max` berilgan sonlarning eng kattasini qaytaradi.

</details>

---

###### 151. Natija qanday bo'ladi?

```javascript
console.log(Math.min(1, 2, 3));
```

- A: `1`
- B: `3`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Math.min` berilgan sonlarning eng kichigini qaytaradi.

</details>

---

###### 152. Natija qanday bo'ladi?

```javascript
const num = 5.67;
console.log(Math.floor(num));
```

- A: `5`
- B: `6`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Math.floor` sonni pastga qarab yaxlitlaydi.

</details>

---

###### 153. Natija qanday bo'ladi?

```javascript
const num = 5.12;
console.log(Math.ceil(num));
```

- A: `6`
- B: `5`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Math.ceil` sonni tepaga qarab yaxlitlaydi.

</details>

---

###### 154. Natija qanday bo'ladi?

```javascript
const num = 5.5;
console.log(Math.round(num));
```

- A: `6`
- B: `5`

<details><summary><b>Javob</b></summary>

#### Javob: A

`Math.round` matematika qoidalari bo'yicha eng yaqin butun songa yaxlitlaydi.

</details>

---

###### 155. Natija qanday bo'ladi?

```javascript
console.log(typeof null);
```

- A: `"object"`
- B: `"null"`
- C: `"undefined"`
- D: `"number"`

<details><summary><b>Javob</b></summary>

#### Javob: A

JavaScript-dagi qadimgi xatolik (bug) sababli, `typeof null` har doim `"object"` qaytaradi.

</details>
