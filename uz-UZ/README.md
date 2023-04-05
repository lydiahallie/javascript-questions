<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Savollari</h1>

---

<span>O&apos;z [Instagram](https://www.instagram.com/theavocoder) **istoriyalar** sahifamda bir nechta jablik savollarni joylaganman. Shuningdek, bu yerda ham ularni siz bilan ulashishga qaror qildim! Oxirgir o&apos;zgarishlar <a href=#20200612><b>12-iyun</b></a> da kriritildi.

Boshlang&apos;ichdan yuqori darajagacha: JavaScriptni qanchalk bilishingizni sinab ko&apos;ring, biroz bo&apos;lsada bilganlaringizni takrorlang, yoki kelgusi intervyularingiz uchun tayyorlaning! :muscle: :rocket: Bu repozitoryni muntazam yangilab boraman. Quyidagi savollarning javoblarni **ochilib yopiluvchi qismlarga ajratganman**, shunchaki istagan savolingizning javobini bir bosishda bilib oling. Bu shunchaki qiziqish uchun, omad! :heart:</span>

Men bilan aloqaga chiqishdan hech ham tortinmang! 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a>

</div>

| Ma&apos;lumotlardan loyihalaringiz uchun ishlatishingiz mumkin! 😃 Ma&apos;lumotlarni ynan shu repozitorydan olganingizni ta&apos;kidlashinigzni _juda ham_ istardim, Men savollar va ular uchun sharhlarni yarataman va jamoadoshlarim bu loyihani qo&apos;llab quvvatlashga va rivojlantirishga yordam berishadi! 💪🏼 Rahmat, loyihadan zavq olishingiz mumkin! |
|
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

---

<details><summary><b> See 19 Available Translations 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼</b></summary>
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
- [🇧🇷 Português Brasil](./pt-BR/README_pt_BR.md)
- [🇷🇺 Русский](./ru-RU/README.md)
- [🇹🇭 ไทย](./th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](./tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](./uk-UA/README.md)
- [🇻🇳 Tiếng Việt](./vi-VI/README-vi.md)
- [🇨🇳 简体中文](./zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](./zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. Natija qanday bo'ladi?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
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

Funksiya ichida `name` o&apos;zgaruvchisini `var` kalit so&apos;zi bilan e&apos;lon qildik. Bu shuni anglatadiki biz yaratgan o&apos;zgaruvchida `undefined` boshlang&apos;ich qiymati bilan `hoisting` (yaratish bosqichida xotirada joy yaratiladi) jarayoni sodir bo'ladi va bu biz o&apos;zgaruvchiga qiymat bermagunimcha mavjud bo&apos;ladi. Biz hali `name` o&apos;zgaruvchisiga qiymat bermadik, shuning uchun ham bu o&apos;zgaruvchi `undefined` qiymatini saqlab turadi.

`let` va `const` kalit so&apos;zlari orqali yaratilgan o&apos;zgaruvchilarda ham are `hoisting` jarayoni mavjud lekin `var` dan biroz farq qiladi. Farqi shundaki, `var` da dastlabki qiymat `undefined` ga teng bo&apos;ladi. Lekin `let` va `const` da esa dastlabki qiymat berilmaydi. Bu ikkisi bilan berilgan o&apos;zgaruvchilarni qiymat bermagunimizcha biror yerda ishlata olmaymiz. Va ikkisiga qiymat berilgunga qadar bo&apos;lgan joy `temporal dead zone` (vaqtinchalik "o&apos;lik hudud") deb ataladi. E&apos;lon qilishdan oldin bu kabi o&apos;zgaruvchilarga murojaat qilish, JavaScript dasturlash tilida `ReferenceError`ga sabab bo&apos;ladi.

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
- D: `3 3 3` va `3 3 3`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Birinchi misolda `event queue` sababli JavaScriptda `setTimeout` ichidagi _callback_ funksiyasi for `loop`idan _keyin_ chaqiriladi. Birinchi `loop` dagi `i` `var` kalit so&apos;zi bilan e&apos;lon qilinganligi sababli, bu _global_ qiymat sifatida xotirada saqlanadi. `loop` davomida `i`ning qiymatini `++` _post increment_ `unary` operatori yordamida `1` ga oshirib bordik. `setTimeout` ichidagi _callback_ funksiya ishga tushgunga qadar, `i` qiymati `3` ga tenglab bo&apos;lingan edi. Shu sabab `3` marta `3` (`3 3 3`) javobi `console` ga chiqdi.

Ikkinchi misolda esa `i` o&apos;zgaruvchisini `let` kalit so&apos;zi yordamida e&apos;lon qildik. `let` va `const` orqali e&apos;lon qilingan barcha o&apos;zgaruvchilar _block-scoped_ (`{ }` ichidagi maydon blok-scope deyiladi). Har bir iteratsiyada `i`ga yangi qiymat berib boriladi. Birinchi iteratsiyada `let i = 0` bilan berilgani sabab `i` 0 ga teng bo&apos;ladi va shu holicha keyingi iteratsiyaga o&apos;tiladi. Va bunda ham dastlabki qiymat `0` ga teng bo&apos;ladi, lekin bunda ana shu `0` shart bajarilgunga qadar o&apos;sib boradi va `1` ga teng bo&apos;ladi. Shunday qilib `let` bilan e&apos;lon qilinganligi sababli `i` har bir iteratsiya davomida qiymatini `0` dan boshlab hisoblaydi.

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
- D: `NaN` va `63`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`diameter` bilan aniqlangan funksiya `regular` (muntazam) funksiya hisoblanadi. `perimeter` esa `arrow` (nayza) funksiyasi hisoblanadi.

`arrow` (nayza) funksiyalarida `this` kalit so&apos;zi shu funksiya turgan obyektning tashqi doirasiga yo&apos;nalish ko&apos;rsatadi. Masalan `let obj = {arrFunc: ()=> console.log(this)}` bu yerdagi `arrFunc`dagi _this_ _global_ `window` obyektiga teng bo&apos;ladi.

Bu yerda `window` obyektida radius qiymati yo&apos;qligi sababli ham `NaN` qiymatini qaytaradi.

</p>
</details>

---

###### 4. Natija qanday bo'ladi?

```javascript
+true;
!"Lydia";
```

- A: `1` va `false`
- B: `false` va `NaN`
- C: `false` va `false`
- D: `undefined` va `0`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`+` operatori o&apos;zgaruvchi yoki biror qiymat oldida kelsa, o&apos;sha qiymatni `number` tipiga o&apos;tkazishga harakat qiladi. Masalan `true` _boolean_ qiymatidan oldin kelib, `1` qaytaradu, va `false` oldidan kelib `0` qaytaradi.

`'Lydia'` bu yerda `truthy` (rost) qiymat. `!` (emas) operatori esa o&apos;zidan keyin kelgan `truthy` (rost) qiymatlarni `falsy` (yolg&apos;on)larni esa rostga o&apos;zgartirib beradi. Bu yerda `"Lydia"` rost qiymat bo&apos;lganligi sababli ham `false` natija qaytaradi.

</p>
</details>

---

###### 5. Qaysi biri to&apos;g&apos;ri?

```javascript
const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
```

- A: `mouse.bird.size` xato
- B: `mouse[bird.size]` xato
- C: `mouse[bird["size"]]` xato
- D: All of them are valid

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScriptda barcha `object` _key_ (kalit)lari agar ular `Symbol` bo&apos;lmasagina, `string` hisoblanadi. Qanday bo&apos;lishidan qat&apos;iy nazar biz ularni `string` sifatida yoza olmaymiz lekin, aslida `string` tipiga o&apos;zgartirilib saqlanadi.

JavaScript kod qismlarini kompyuer tiliga tarjima qiladi. Biz `bracket => []` (qavs)dan foydalangainimizda, JavaScript birinchi `[` (qavs)ni ko&apos;radi va uning jusfti `]`ni qidiradi. Juftini topgandan keyingina kod qismlarini hisoblaydi.

`mouse[bird.size]` qiymatida dastlab `[]` ichidagi `bird.size` qiymatini qidirib topib oladi, va shu topilgan qiymat `mouse["small"]`ga teng bo&apos;ladi. `mouse` obyektida _small_ qiymati mavjudligi uchun ham `B` javob to&apos;g&apos;ri murojaat hisoblanadi va `small`ning qiymati `true` ni qaytaradi.

Shu bilan birga `C` javob ham to&apos;g&apos;ri hisoblanadi. Bunda `bracket notation` orqali `string` qiymatlar o&apos;z o&apos;rniga kelib tushgani uchun ham obyektning qiymatlariga to&apos;g&apos;ri murojaat qilish mumkin.

Biroq `dot notation => . ` (. obyekt qiymatiga nuqta bilan murojaat qilish) bilan bu natijaga erishib bo&apos;lmaydi. Chunki `mouse.bird.size` da `mouse` ichidan `bird` ni qidiradi va uni topa olmaydi. Shunda natija `undefined` qaytaradi va `undefined.size` holida qidirishni boshlaydi. Va bu to&apos;g&apos;ri yo&apos;li emas. Shu sabab ham `Cannot read property "size" of undefined` nomli xatolik yuzaga keladi. Ya&apos;ni `undefinedning size qiymatini o'qishning imkoni yo'q` degan tarjima chiqadi.

Javoblardan `true` qiymatiga egasini toping deyilgani uchun ham javob `A` bo&apos;ladi. Chunki qolgan barcha javoblar xato deyilgan bo&apos;lsada lekin to&apos;g&apos;ri. Buni sodda qilib quyidagicha topish mumkin:

- A: `!false`
- B: `!true`
- C: `!"Lynda"`
- D: `A === true && B === true & C === true`

</p>
</details>

---

###### 6. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScriptda barcha obyektlar bir-biriga tenglashtirilganda dastlabki obyekt bog&apos;langan nuqta orqali o'zaro ta'sirlashadi.

Dastlabki `c` o&apos;zgaruvchisi obyekt tipidagi ma&apos;lumotni saqlaydi. Undan keyin biz `d`ni `c`ga tengladik, va `d` ham `c` bog&apos;langan nuqtada yaratildi. Hozir ikkalasi ham bir joydan ma&apos;lumot olayotganligi sababli birining o&apos;zgarishi boshqasiga ham ta&apos;sir qiladi.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

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

`new Number()` maxsus funksiya konstruktori hisoblanib, raqamga o&apos;xshashiga qaramasdan, bu `number` tipiga kirmaydi. Chunki funksiya konstruktori obyekt yaratadi va `new Number()` orqali yaratilgan qiymat ham obyekt hisoblanadi.

`==` (Tenglik operatori) operatoridan foydalanganimizda, bu operator faqat qiymatlarni tekshiradi. Ikkisida ham bir xil `3` qiymati borligi sabab, `true` qaytadi.

Biroq, `===` operatori (Qat&apos;iy tenglik operatori), berilgan qiymatlarni ham qiymati bo&apos;yicha ham tipi bo&apos;yicha tekshiradi, ikki taraflama teng bo&apos;lsagina `true` qaytaradi, aks holda `false`. `new Number()` orqali yaratilgan qiymat **obyekt**. shu sabab ham `false` qaytadi.

</p>
</details>

---

###### 8. Natija qanday bo'ladi?

```javascript
class Xameleon {
  static rangniOzgartir(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "yashil" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Xameleon({ newColor: "pushti" });
console.log(freddie.rangniOzgartir("sarg'ish"));
```

- A: `sarg'ish`
- B: `pushti`
- C: `yashil`
- D: `TypeError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`rangniOzgartir` funksiydasi **static**. **Static** metodlar faqatgina o&apos;zi yaratilgan joydagi `constructor` ichida mavjuddir, va biror bir boshqa obyekt orqali bu metodni chaqirib bo&apos;lmaydi, hatto meros olingan bo&apos;lsa ham. `freddie` esa **Xameleon** klasining merosxo&apos;ri, Shu sabab ham `rangniOzgartir` statik metodini merosxo&apos;r obyekt ichida ishlatib bo&apos;lmaydi. Bunga harakat qilish `TypeError`ga sabab bo&apos;ladi.

</p>
</details>

---

###### 9. Natija qanday bo'ladi?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Bu yerda **obyekt** `console`da ko&apos;rinadi! Qachonki biz `greeting`ni `greetign` shaklida xato kiritsak, JavaScript `interpretatori` uni turli xil muhitlarda quyidagicha o&apos;qiydi:

1. **Node.js**da `global.greetign = {}`
2. `window.greetign = {}`, `frames.geetign = {}` va `self.greetign` shakllarida brauzerda.
3. `self.greetign` sifatida esa `web workers`da.
4. Va barcha muhitlarda `globalThis.greetign` sifatida ko&apos;rinadi.

Bu kabi xatolikni tuzatish uchun `"use strict"`dan foydalanishimiz mumkin. Bu bizga `var`, `let`, `const` ishlatmasdan (e&apos;lon qilmasdan) qiymat berilgan barcha qiymatlarni oldini olish imkonini beradi.

</p>
</details>

---

###### 10. Quyidagi kod bajarilganda nima sodir bo'ladi?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Hech narsa, bunda muammo yo&apos;q!
- B: `SyntaxError`. Funksiyaga bu kabi xususiyatlar qo&apos;shish mumkin emas.
- C: `"Woof"` `console`da ko&apos;rinadi.
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`JavaScrip`tda bu usulda funsiyaga xususiyat qo&apos;shish mumkin, chunki funksiyalar ham **obyekt** hisoblanadi! (`primitive`lardan boshqa barcha tip **obyekt** hisoblanadi!)

Funksiya obyektning maxsus turi hisoblanadi. Yuqorida yozilgan kod aslida funksiya emas, balki funksiya ham object ekanini hisobga olsak, bu yerda o&apos;z xususiyatlariga ega obyekt yaratiladi. Ammo bu xususiyatdan foydalanish mumkin emas.

</p>
</details>

---

###### 11. Natija qanday bo'ladi?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
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

JavaScriptda funksiyalar - obyektlardir. Shuning uchun, `getFullName` metodi faqat funksiya konstruktoriga qo&apos;shiladi. `getFullName` metodini faqat konstruktor funksiyadan chaqira olamiz, ammo `member.getFullName` funksiyasiga murojaat qilinsa `TypeError` nomli xatolik qaytaradi.

Agar siz qo&apos;shilayotgan xususiyat va metodlar obyektning merosxo&apos;rlarida ham bo&apos;lishini istasangiz uning **prototype**iga qo&shishingiz kerak. Quyida bir misolni ko&apos;rib chiqamiz:

```js
Person.prototype.getFullName = function () {
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

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D: `Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`sarah` uchun, biz `new` kalit so&apos;zidan foydalanmadik. `new` kalit so&apos;zidan foydalanilsa, `this` yangi bo&apos;sh obyektga murojaat qiladi. Lekin, `new` kalit so&apos;zi ishlatilmasa, `this` **global object**ga murojaat qiladi!

Bu yerda `this.firstName` `"Sarah"`ga teng, va `this.lastName` esa `"Smith"`ga. Aslida esa, `new` ishlatilmaganligi sabab `global.firstName = 'Sarah'` va `global.lastName = 'Smith'` shaklida murojaat bo&apos;ladi. Lekin `global` obyektda `sarah` mavjud bo&apos;lmaganligi sabab, `undefined` qaytaradi, `Person` funksiyasidan hech narsa qaytarmagunimizcha.

</p>
</details>

---

###### 13. What are the three phases of event propagation?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

**capturing** bosqichida, hodisa yuqori turgan elementdan ichki elementlarga kelib tushadi va **target**da to&apos;xtaydi. **target**ga yetib kelgach esa **bubbling** boshlanadi.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. All object have prototypes.

- A: true
- B: false

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

**base object**dan boshqa har qanday obyektda `prototype` mavjud. **base object** foydalanuvchi yoki `new` kalit so&apos;zi orqali yaratiladi. **base object** bir qancha metod va xususiyatlarga murojaat qilishi mumkin, masalan `.toString` metodiga. Bu JavaScriptdagi maxsus metodlardan foydalanish natijasida kelib chiqadi! Bunday usullarning barchasi **prototype**da mavjud. JavaScript uni to'g'ridan-to'g'ri obyektda topa olmasa ham, u prototip zanjiri bo'ylab pastga tushadi va uni o'sha erda topadi, natijada uni siz uchun ochiq qiladi.

</p>
</details>

---

###### 15. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

JavaScript dinamik dasturlash tillardan biri hisoblanganligi sababli ham qiymat yaratilayotganda uning qaysi **type**da ekanini aniqlab ketish shart emas. Qiymatlar avtomatik tarzda bir **type**dan boshqasiga o&apos;tishi mumkin. Va bu `implicit type coercion` (tipning majburiy o&apos;zgartirilishi) deb ataladi.

Bu misolda esa, JavaScript `number` tipidagi `1`ni `string`ga o&apos;tkazib yuborildi. Ikk turdagi son (`1`) va satr (`'2'`)ni qo&apos;shish davomida, raqam satrga aylantirilgach natija `"1" + "2"` shakliga keladi. Va `+` operatorining vazifalaridan biri ikki son yoki stringni bir-biriga qo&apos;shish ekanini hisobga olsak, javob `"12"` ga teng.

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

**postfix** operatori quyidagicha `++`:

1. Dastlab qiymatni qaytaradi, qiymat esa `0`)
2. Keyin qiymatni `1`ga pshiradi

**prefix** operatori quyidagicha `++`:

1. Dastlab qiymatni `1`ga oshiradi, qiymat esa `2`
2. Keyin qiymatni qaytaradi `2`

Yuqoridagi misolning javobi esa `0 2 2`.

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

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`tagged template literals` (belgilangan shablon harflar)idan foydalansangiz, birinchi argumentning qiymati har doim qator qiymatlari massivi bo'ladi. Qolgan argumentlar o'tgan ifodalarning qiymatlarini oladi!

</p>
</details>

---

###### 18. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Tenglik tekshirilganda `primitive` tipdagi o&apos;zgaruvchilarning faqat qiymati taqqoslanadi, `obyekt`lar esa _reference_ (xotiradagi manzil) bo&apos;yicha tekshiriladi. JavaScript obyektlarning xotirada joylashgan o&apos;rnini tekshiradi.

Shu sababdan ham `{ age: 18 } === { age: 18 }` va `{ age: 18 } == { age: 18 }` kabi taqqoslov natijasi `false`ga teng bo&apos;ladi.

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

_Rest_ parametri (`...args`) funksiyaning barcha argumentlarini `array` (massiv)ga jamlab beradi. Bilamizki `array` _object_ tipiga tegishli, shu sabab ham `typeof args` `"object"` qaytaradi.

</p>
</details>

---

###### 20. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`"use strict"`dan tasodifan `global` qiymat yaratib qo&apos;yishning oldini olish uchun foydalaniladi.`"use strict"` ishlatilganda, biz hech qachon `age` o&apos;zgaruvchisini e&apos;lon qilmasdan biror qiymatga tenglay olmaymiz. Bunga harakat qilib ko&apos;rish `reference error`ga sabab bo&apos;ladi. Agar `"use strict"`dan foydalanmaganimzda bu kod `global` obyektga qo&apos;shilib ishlagan bo&apos;lardi.

</p>
</details>

---

###### 21. `sum`ning qiymati nimaga teng bo'ladi?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`eval` funksiyasi `string` tipidagi amallarni hisoblash uchun ishlatiladi. Yuqoridagi holatda dastlab ikki son ko&apos;paytirildi. Natijadan keyin ikkisi ham `string` tipiga ega bo&apos;lganligi bois, `+` operatori `string`larni birlashtirib yubordi. Va natijada `eval` funksiyasi `number` tipiga oid `105` sonini qaytardi.

</p>
</details>

---

###### 22. cool_secret qachongacha mavjud bo'ladi?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Butun umr, ma'lumot yo'qolmaydi.
- B: Foydalanuvchi brauzer tabini yopguncha.
- C: Foydalanuvchi brauzerni to'liq yopguncha.
- D: Foydalanuvchi kompyuterni o'chirguncha.

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`sessionStorage`da saqlanayotgan ma&apos;lumot \_tab_ni yopgandan keyin o&apos;chib ketadi.

Agar `localStorage`dan foydalanilganda, ma&apos;lumot butun umr saqlanib qolgan bo&apos;lardi, qachonki `localStorage.clear()` chaqirilmaguncha.

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

`var` kalit so&apos;zi bilan e&apos;lon qilingan o&apos;zgaruvchilarni qayta e&apos;lon qilish mumkin, hatto bir necha marta. Va o&apos;zgaruvchi eng oxirgi berilgan qiymatni saqlab qoladi.

Lekin `let` yoki `const` bilan e&apos;lon qilingan o&apos;zgaruvchilarni bir necha marta qayta e&apos;lon qilib bo&apos;lmaydi. Chunki ular `block-scoped` qiymatlar.

</p>
</details>

---

###### 24. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Barcha `object` kalitlari => `keys` (`Symbols`dan tashqari) `string` tipida bo&apos;ladi, hatto uni siz `"string"` sifatida yozmasangiz ham. Shu sababli `obj.hasOwnProperty('1')` `true` (rost) qiymatni qaytaradi.

`Set`da esa bu ko&apos;rinishda ishlamaydi. `Set`da `'1'` kaliti mavjud emas, shuning uchun ham `set.has('1')` `false` qiymat qaytaradi. Bunda `number` tipidagi `1` mavjud, va `set.has(1)` ifodasi `true` qaytaradi.

</p>
</details>

---

###### 25. Natija qanday bo'ladi?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`object`larda ikkita bir xil nomli `key` (kalit)lar mavjud bo&apos;lsa, eng oxirgi yaratilgani olinadi. `value` (qiymat) o&apos;zgarsada, o&apos;zining o&apos;rnini yo&apos;qotmaydi.

</p>
</details>

---

###### 26. JavaScriptning `global execution context`i 2 narsa yaratadi: 1. Global Object, 2. "this" kalit so'zi.

- A: true
- B: false
- C: it depends

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`base execution context` bu `the global execution context` hisoblanadi. Bundan kodning barcha qismida foydalanish mumkin.

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

`continue` ifodasi shart bo&apos;yicha `true` qaytargan qiymatni o&apos;tkazib yuboradi..

</p>
</details>

---

###### 28. Natija qanday bo'ladi?

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza());
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`String` _built-in_ (o&apos;rnatilgan) konstruktor hisoblanadi va biz bunga istagancha xususiyat qo&apos;shishimiz mumkin. Hozirgi kodda shunchaki `String` konstruktorining `prototype`iga _giveLydiaPizza_ metodi qo&apos;shildi xolos. `primitive` satrlarning barchasi `satr obyekt`ga aylantiriladi va ixtiyoriy yaratilgan `string` tipidagi qiymatlar `String` konkstruktorining xususiyat va metodlariga murojaat qila oladi.

</p>
</details>

---

###### 29. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Obyekt `keys` (kalitlar)i avtomatik tarzda `string` tipiga o&apos;tkaziladi. Biz obyektning kaliti sifatida boshqa bir obyektni biriktirdik, va uni `123`ga tengladik.

Biroq, obyekt sifatida bergan kalitimiz `string` tipiga o&apos;tkazilgach `"[object Object]"` holida `a` obyektimizda saqlandi. Mana shu men nazarda tutayotgan nuqta hisoblanadi, ya&apos;ni hozir obyektmiz `a["[object Object]"] = 123` holiga keldi. Keyinroq, obyektimizga boshqa bir obyektni kalit sifatida berdik, lekin u ham string sifatida `"[object Object]"` sifatida saqlanadi lekin bu nomdagi kalit borligi sababli faqat shu kalitning qiymati o&apos;zgaradi xolos. Shunday qilib, `a["[object Object]"] = 456` natija chiqadi.

Endi biz `a[b]`ni `console`da chaqirdik, bu esa aslida `a["[object Object]"]` holatida xotiraga murojaat qiladi va bizga `456`ni qaytaradi.

</p>
</details>

---

###### 30. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`setTimeout` oldin chaqirilishiga qaramasdan oxirida natijasi chiqdi. Nega?

Chunki brauzerda `runtime engine`ning o&apos;zigina mavjud emas, shuningdek `WebAPI` deb ataluvchi qism ham mavjud bo&apos;lib, `WebAPI` bizga boshlash uchun `setTimeout` funksiyasini beradi, yoki DOMni.

`WebAPI` _callback_ni qabul qilib olgach, `setTimeout` funksiyasining o&apos;zi (ichidagi \_callback_ emas) `stack`ni tark etadi.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Shunda bizda `foo` chaqiriladi, va `"First"` `console`da ko&apos;rinadi.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` chaqirilgach `stack`ni tark etadi, va `baz` funksiyasi chaqiriladi. Bunda `"Third"` `console`ga chiqariladi.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

`WebAPI` tayyor bo&apos;lgan taqdirda ham, o&apos;zida saqlagan narsalarini `stack`ga qo&apos;sha olmaydi. Buning o&apos;rniga, _callback_ funksiyani _queue_ (navbat)ga qo&apos;shadi.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Aynan shu joydan `event loop` ishlashni boshlaydi. **event loop** `stack` va `task queue` (buyruqlar navbati)ni tekshiradi. Agar `stack` bo&apos;sh bo&apos;lsa, \_queue_dagi birinchi ifodani oladi va uni `stack`ga o&apos;tkazadi.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` chaqiriladi, `"Second"` `console`da ko&apos;rinadi, va `bar` ham `stack`ni tark etadi.

</p>
</details>

---

###### 31. Quyidagi kodda _button_ (tugma) bosilganda **event.target** nimaga teng?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: An array of all nested elements.

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`event` sodir bo&apos;lishiga sabab bo&apos;lgan eng quyidagi element `event`ning `target`i hisoblanadi. \_bubbling_ni `event.stopPropagation` yordamida to&apos;xtatish mumkin.

</p>
</details>

---

###### 32. Paragraf bosilganda, \_console_da nima chiqadi?

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Agar `p` bosilsa, `console`da ikkita narsa ko&apos;rnadi: `p` va `div`.`event propagation` davomida, 3 ta `phase`(faza | bosqich)dan o&apos;tadi: `capturing`, `target`, va `bubbling`. Dastlab, _bubbling_ bosqichidagi `event handler`lar ishga tushadi (faqat `useCapture` qiymati `true`ga tenglanmagan bo&apos;lsagina). Va pastdan yuqoriga qarab ya&apos;ni eng ichki elementdan tashqi elementgacha chiqib boradi.

</p>
</details>

---

###### 33. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Ikkisida ham, `this` kalit so&apos;zi obyekt qiymatlariga murojaat qilishishini tashkillashtirishimiz mumkin. Biroq, `.call` tez ishga tushadi!

`.bind.` funksiyaning nusxasini qaytaradi, ammo bog&apos;langan kontekst bilan birga! Va bu tez ishga tushmaydi.

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

`sayHi` funksiyasida `IIFE` (Immediately Invoked Function | Tezda chaqiriluvchi funksiya) qaytarilmoqda, va `IIFE` esa `"number"` tipidagi `0`ni qaytardi.
Qo&apos;shimcha: `typeof` quyidagi qiymatlarni qaytaradi: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` va `object`. Shuni yoddan chiqarmanki, `typeof null` ham `"object"` qaytaradi.

</p>
</details>

---

###### 35. Quyidagi qiymatlardan qaysi biri `falsy`?

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
- D: All of them are falsy

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

There are 8 falsy values:

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (empty string)
- `0`
- `-0`
- `0n` (BigInt(0))

Funksiya konstruktorlari `truthy` hisoblanadi, masalan `new Number` va `new Boolean` kabilar. Chunki bular obyekt qaytaradi.

</p>
</details>

---

###### 36. Natija qanday bo'ladi?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`typeof 1` `"number"` qaytaradi.
`typeof "number"` esa `"string"` qaytaradi.

</p>
</details>

---

###### 37. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, null x 7, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, <7 x empty>, 11]`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`Array` (massiv) uzunligidan ortiqcha indexda massivga qiymat berilsa o&apos;sha qiymatgachaa bo&apos;lgan qiymatlar uchun `JavaScript` "empty slots" deb nomlangan narsa yaratadi. Bular aslida `undefined`ga teng, ammo bular sizga:

`[1, 2, 3, <7 x empty>, 11]`

shaklida ko&apos;rinadi;

Har xil muhitda bu turlicha ko&apos;rinishi mumkin (masalan har ir brauzerda farq qilishi mumkin)

</p>
</details>

---

###### 38. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`catch` bloki `x` argumentini qabul qiladi. Lekin bu yuqoridagi `x` qiymati bilan bir xil emas. `catch`dagi `x` `block-scoped` qiymat hisoblanadi.

Keyinchalik biz bu qiymatni `1`ga tengladik, va `y` qiymatini esa `2`ga tenglashtirdik. Va endi, `block-scoped` qiymati bo&apos;lgan `x`ni `console`ga chiqardik, qaysiki qiymati `1`ga teng bo&apos;lgan o&apos;zgaruvchini. Bu o&apos;zgaruvchi `catch` blogida amal qiladi faqat.

`catch`dan tashqarida esa, `x` hali ham `undefined`ga teng, va `y` esa `2`ga. Qachonki biz `catch` blogidan tashqarida `console.log(x)` ga murojaat qilsak, `undefined`qiymatini olamiz va `y` esa `2`ni qaytaradi.

</p>
</details>

---

###### 39. JavaScriptda barcha narsa ... hisoblanadi.

- A: primitive or object
- B: function or object
- C: trick question! only objects
- D: number or object

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

JavaScriptda `primitive` tiplar va `object`lar mavjud.

`primitive`lar: `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, va `symbol`.

`primitive`ning `obyekt`dan farqi shundaki, u o&apos;zida bir nechta qiymat yoki metodlarni saqlamaydi faqat bitta qiymat saqlaydi; biroq, shuni yoddan chiqarmangki `'foo'.toUpperCase()`ga murojaat qilinganda `'FOO'`ni qaytaradi, lekin `TypeError` bermaydi. `string`ga o&apos;xshash biror qiymat yaratilganda, JavaScript majburan o&apos;sha o&apos;zgaruvchini `wrapper class`(o&apos;rab oluvchi klass) bilan o&apos;rab oladi, masalan `String` bilan, va amal tugatilgach darhol o&apos;rab olgan `class`idan chiqarib tashlaydi.`null` va `undefined`dan tashqari barcha `primitive`larda buni qo&apos;llash mumkin.

</p>
</details>

---

###### 40. Natija qanday bo'ladi?

```javascript
[
  [0, 1],
  [2, 3],
].reduce(
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`[1, 2]` bu yerda boshlang&apos;ich qiymat hisoblanadi. Ya&apos;ni `acc`ning birinchi qiymati. Birinchi aylanishda, `acc` `[1,2]`ga teng, va `cur` esa `[0, 1]`ga. Biz esa ularni birlashtiramiz, natijada `[1, 2, 0, 1]` hosil bo&apos;ladi.

Endi `acc` `[1, 2, 0, 1]`ga teng, `cur` esa `[2, 3]` ga teng. Barchasini birlashtirib `[1, 2, 0, 1, 2, 3]` natijani oldik.

</p>
</details>

---

###### 41. Natija qanday bo'ladi?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`null` falsy qiymat hisoblanadi. `!null` esa `true` qaytaradi. `!true` esa teskarisi bo&apos;lgan `false`ni qaytaradi.

`""` bo&apos;sh `"string"` `falsy`. `!""` esa `true`. `!true` dan keyin yana `false`.

`1` bu `truthy`. `!1` esa `false`. `!false` esa `true`.

</p>
</details>

---

###### 42. `setInterval` metodi brauzerda nima qaytaradi?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: takrorlanmas `id`
- B: berilgan millisekundlarni
- C: unga berilgan `callback` funksiyani
- D: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Brauzerga takrorlanmas `id`ni qaytaradi. Bu `id` orqali intervalni `clearInterval()` funksiyasi yordamida tozalashimiz mumkin.

</p>
</details>

---

###### 43. What does this return?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`"string"`larni iteratsiya qilish mumkinligidan kelib chiqsak, `spread` operatorini stringlarda qo&apos;llasa bo&apos;ladi va bu ham `array` kabi ichidagi har bir qiymatni sochib beradi

</p>
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

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10 and 10, 20`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`regular function` (muntazam funksiya)larni dastur davomida to&apos;xtatib bo&apos;lmaydi. Biroq, `generator function` bundan mustasno. Bu funksiya to&apos;xtatilgach qayerda to&apos;xtagan bo&apos;lsa shu yerdan yana boshlaadi.Har safar generator funksiyasi “yield” kalit so‘ziga duch kelganda, funksiya undan keyin ko‘rsatilgan qiymatni beradi. Esda tutingki, bu holda generator funktsiyasi qiymatni _qaytarmaydi_, balki qiymatni _beradi_..

Dastlab, biz generator funksiyasini `i`ni `10`ga tenglash orqali boshladik. Biz generatorni `next()` metodi yordamida ishga tushirdik. generatorga birinchi chaqiruv bo&apos;lganda, `i` `10`ga teng bo&apos;ladi. U birinchi `yield` kalit so‘ziga duch keladi: `i` qiymatini beradi. Endi generator to'xtatildi va "10" qayd qilinadi.

Keyin biz yana `next()` metodi bilan funksiyaga murojaat qildik. Oldin qayerda to&apos;xtagan bo&apos;lsa shu yeridan boshlanadi, `i` hali ham `10`ga teng. Hozir, yana `yield` kalit so&apos;zi kiritildi, va `i * 2` hisoblandi. `i` `10`ga teng,shuning uchun `10 * 2`, va natijada `20` bo&apos;ladi. Bu `10, 20` javobini chiqaradi.

</p>
</details>

---

###### 45. Quyidagi kod nima qaytaradi?

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Qachonki `Promise.race` metodiga bir qancha `promise`lar berilsa, bu birinchi `promise`ning `resolve` yoki `reject` qilingan qiymatini qaytaradi. `setTimeout` funksiyasiga, `timer` o&apos;rnatildi: birinchi `promise`ga 500ms, va ikkinchisifa 100ms. Bu shuni anglatadiki ikkinchi `promise`da `timer` qisqa ekanligi uchun ham ikkinchi `promise` oldinroq bajarilyapti. `secondPromise` esa `'two'` qiymatini `resolve` qildi, ya&apos;ni bajardi. `res` esa hozir `'two'` qiymatini oladi va `console`ga chiqaradi.

</p>
</details>

---

###### 46. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Dastlab, biz `person` o&apos;zgaruvchisini `name` xususiyatiga ega `object`ga tengladik.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Keyin biz `members` nomli boshqa o&apos;zgaruvchi yaratdik. Keyin bu arrayga `person` o&apos;zgaruvchisini berdik. Obyektlar bir-biriga tenglashtirilganda _reference_ orqali o&apos;zaro ta&apos;sir qiladi. Bir o&apos;zgaruvchidan boshqasiga havolani tayinlaganingizda, siz ushbu havolaning _nusxasini_ qilasiz. (esda tutingki, ularda bir xil _reference_ yo&apos;q!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Keyin biz `person`ni `null`ga tengladik.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Biz shunchaki `person`ning qiymatini yangiladik, lekin `array`ning birinchi elementini emas. Chunki `array`da mutlaqo boshqa (nusxalangan) \_reference_ga ega obyekt mavjud. `members`dagi birinchi element hali ham o&apos;zining original obyektdagi \_reference_ini saqlab turibdi.`members`ni `console`ga chiqarganimizda, birinchi element hali ham dastlab tenglanga obyekt qiymatini o&apos;zida saqlayotgan bo&apos;ladi.

</p>
</details>

---

###### 47. Natija qanday bo'ladi?

```javascript
const person = {
  name: "Lydia",
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`for-in` \_loop_i bilan obyekt kalitlari iteratsiya qilinad, bunda `name` va `age` kalitlari nazarda tutilyapti. Bizga ma&apos;alumki obyekt kalitlari `"string"` tipida (agar `Symbol` tipida berilmagan bo&apos;lsa). Har bir iteratsiyada, `item`ning qiymatini ayni shu iteratsiyadagi kalitga tengladik. Dastlab, `item` `name`ga teng edi, va uning qiymatini oldi. Keyin, `item` `age`ga teng bo&apos;ldi va `console`da ko&apos;rindi.

</p>
</details>

---

###### 48. Natija qanday bo'ladi?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Operator bajarilish tartibi - kompilyator chapdan o&apos;ngga yoki o&apos;ngdan chapga iboralarni hisoblash tartibidir. Bu faqat barcha operatorlar _bir xil_ ustunlikka ega bo&apos;lsa sodir bo&apos;ladi. Bizda faqat bitta turdagi operator mavjud: `+`. Bundan kelib chiqadiki, tartib chapdan o&apos;ngga barajariladi.

`3 + 4` birinchi hisoblanadi. Natija `7`.

`7 + '5'` esa `"75"` `coersion` sababidan. JavaScript `7`ni `"string"` tipiga avtomatik o&apos;tkazadi, bu haqida 15 savolda ma&apos;lumot olishingiz mumkin. Biz ikki `string`ni `+` operatori yordamida ulashimiz mumkin. `"7" + "5"` esa `"75"`.

</p>
</details>

---

###### 49. `num`ning qiymati nimaga teng?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Faqat `"string"`dagi birinchi raqamlar qaytariladi, \_radix_ning qiymatiga qarab (ikkinchi qiymat biz qaysi turdagi songa o&apos;tkazishimizni belgilab beradi: `base 10`, `hexadecimal`, `octal`, `binary`, va hk.), `parseInt` `"string"`dagi barcha elementlar to&apos;g&apos;riligini tekshiradi. Agar string ichida raqam bo&apos;lmagan biror belgini topsa, shu yerda bu funksiya ishni to&apos;xtatadi.

`*` raqam emas. Shu sabab ham faqat `"7"` raqamini qabul qiladi va `"string"` tipidan `"number"` tipiga o&apos;tkazadi.

</p>
</details>

---

###### 50. Natija qanday bo'ladi?

```javascript
[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`array`ni _map_ (iteratsiya) qilganda, `num`ning qiymati aynan iteratsiya bo&apos;layotgan `array` elementiga teng bo&apos;. Bundan keyin, barcha elementlar raqam yoki raqam emasligi `if` shartli ifodasidagi `typeof num === "number"` taqqoslov bilan tekshiriladi va barchasi raqam ekanligi sababli tekshiruv `true` qaytaradi, lekin `if` blogidan `return`ning o&apos;zini qaytarganimiz sabab, barcha qiymat `undefined`ga teng bo&apos;ladi.

</p>
</details>

---

###### 51. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Argumentlar _qiymat_ tomonidan uzatiladi, agar ularning qiymati ob'ekt bo'lmasa, ular _reference_ orqali uzatiladi. `birthYear` _qiymat_ orqali berilganva bu `"string"` tipida, obyekt emas. Biz qiymat orqali biror narsa yaratganimizda uning _nusxasi_ olinadi! (46-savolni ko&apos;zdan kechiring).

`birthYear` o&apos;zgaruvchisining `"1997"` qiymatiga \_reference_i mavjud.`year` argumentining ham `"1997"`ga \_reference_i mavjud, lekin bu `birthYear` bilan bir xil emas. Biz `year` qiymatini yangilaganimizda, `year` `"1998"`ga teng bo&apos;ladi. Biz shunchaki `year`ning qiymatini o&apos;zgartirdik. `birthYear` esa hali ham `"1997"`ga teng.

`person`ning qiymati esa obyekt. `member` argumentining (nusxalanagan) _reference_ mavjud. Va qachonki biz `member`ning xususiyatlarini o&apos;zgartirganimizda, `person` ham yangilanadi, chunki ikkisining ham `reference`lari bitta obyektga yo&apos;naltirilgan. `person`ning `name` xususiyati hozir `"Lydia"`ga teng!

</p>
</details>

---

###### 52. Natija qanday bo'ladi?

```javascript
function greeting() {
  throw "Salom dunyo!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("Kod ishladi!", data);
  } catch (e) {
    console.log("Xatolik:", e);
  }
}

sayHi();
```

- A: `Kod ishladi! Salom dunyo!`
- B: `Xatolik: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Xatolik: Salom dunyo!`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`throw` ifodasi orqali, `custrom` (maxsus) xatoliklarni yarata olamiz. Bu ifoda orqali siz istisno holatlarni ham yaratishingiz mumkin. Istisno <b>string</b>, <b>number</b>, <b>boolean</b> yoki <b>object</b> bo&apos;lishi mumkin. Bundan kelib chiqadiki, bizning istisno qiymatimiz `'Salom dunyo!'`.

`catch` orqali esa, `try` blogidagi xatolikni aniqlashimiz mumkin. Yuqoridagi kodda `"string"` tipiga ega `'Salom dunyo!'` xatoligi qaytarildi. `e` endi shu qiymatga tenglanadi. Bu esa `'Xatolik: Salom dunyo!'` qiymatini chiqaradi.

</p>
</details>

---

###### 53. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Biror xususiyatga murojaat qilinganda o&apos;sha xususiyatning qiymati _returned_ (qaytarilgan) qiymatga teng bo&apos;ladi, `constructor`da aniqlangan qiymatga emas. Yuqoridagi kodda `"Maserati"` qaytarildi, shuning uchun `myCar.make` `"Maserati"`ga teng.

</p>
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

- A: `"undefined", "number"`
- B: `"number", "number"`
- C: `"object", "number"`
- D: `"number", "undefined"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`let x = (y = 10);` aslida quyidagi kodning qisqa talqini:

```javascript
y = 10;
let x = y;
```

Biz `y`ni `10`ga tengladik, va `y`ni to&apos;g&apos;ridan to&apos;g&apos;ri global obyektga xususiyat sifatida berdik ( bu brauzerda `window`, \_Node_da esa `global`ga teng). Brauzerda, `window.y` `10`ga teng.

Keyin, biz `x` nomli a o&apos;zgaruvchini `y`ning qiymatiga tenglab yaratdik, endi uning qiymati ham `10`ga teng. Lekin `x` o&apos;zgaruvchis `let` orqali yaratilgani sabab u faqat o&apos;zi yaratilgan blokdagina ishlaydi, ya&apos;ni faqat `IIFE`ning ichida. Blokdan tashqarida `typeof` operatori orqali `x` va `y`ning tipini aniqlashga harakat qilganimizda `x` \_undefined_ga teng, chunki u faqat `IIFE` blogida ishlaydi.

Biroq, biz global o&apos;zgaruvchi `y`ni ham yaratganmiz shu sabab `typeof` bu o&apos;zgaruvchining tipini `window` global obyektidan qiyinchiliksiz oladi. Shu sabab ham javob `A`.

</p>
</details>

---

###### 55. Natija qanday bo'ladi?

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`delete` kalit so&apos;zi orqali biz nafaqat obyekt xususiyatlarini balki obyektning _prototype_i ichidagi xususiyatlarini ham o&apos;chirib yuborishimiz mumkin. \_Prototype_dagi xususiyatni o&apos;zgartirish orqali, uni \_prototype_ zanjiridan butun umrga o&apos;chirib yuboramiz. Shu sabab, `bark` metodi bundan buyin \_protptype_da mavjud emas, chunki `delete Dog.prototype.bark` orqali allaqachon bu metodni o&apos;chirib yubordik.

Qachonki biz mavjud bo&apos;lmagan funksiyaga murojaat qilsak, `TypeError` xatoligi qaytadi. `TypeError: pet.bark is not a function` degan xatolik `pet.bark` `undefined` bo&apos;lganligi sababidan.

</p>
</details>

---

###### 56. Natija qanday bo'ladi?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`Set` obyekti o&apos;zida takrorlanmas qiymatlarni saqlab turadi. Oddiy obyektdan farqi undagi qiymatlarning takrorlanmasligida ekan.

Biz `Set`ga quyidagi qiymatlarni berdik `[1, 1, 2, 3, 4]` va bunda ikkita `1` qiymati mavjud. Yuqoridagi shartga binoan bitta `Set`da faqat bitta qiymat bo&apos;lishini hisobga olsak. `1`lardan biri o&apos;chirib yuboriladi. Va natija `{1, 2, 3, 4}`ga teng bo&apos;ladi.

</p>
</details>

---

###### 57. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`Import` qilingan module _read-only_ (faqat o&apos;qish uchun) mavjud. Biz import qilingan modulni o&apos;zgartira olmaymiz.Faqat ularni eksport qiladigan modul uning qiymatini o'zgartirishi mumkin.

Qachonki biz `myCounter`ning qiymatini yangilashga urinsak, `error` qaytaradi: `myCounter` is read-only and cannot be modified (`myCounter` faqat o&apos;qish uchun uni o&apos;zgartirib bo&apos;lmaydi).

</p>
</details>

---

###### 58. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`delete` operatori `boolean` tipidagi qiymat qaytaradi va bu uning vazifasini bajargaligi va yoki bajarmaganligi bilan bog&apos;liq. Agar `true` qaytarsa demak qiymat muvaffaqiyatli o&apos;chirilgan bo&apos;ladi. Lekin `false` qaytarsa amal bajarilmagan bo&apos;ladi. Shuni esdan chiqarmaslik kerakki, `var`, `const` yoki `let` kalit so&apos;zlari bilan yaratilgan o&apos;zgaruvchilarni `delete` operatori o&apos;chira olmaydi.

`name` o&apos;zgaruvchisi `const` bilan e&apos;lon qilingan, shuning uchun uni o&apos;chirishning imkoni bo&aos;lmadi va `false` qaytarildi. Qachonki biz `age`ni `21`ga tenglaganimzda, biz `global` obyektga `age` nomli xususiyat qo&apos;shdik. `delete` operatori orqali obyekt xususiyatlarini o&apos;chirish mumkinligini hisobga olsak, `window` ham obyekt va `delete age` `true` qaytaradi.

</p>
</details>

---

###### 59. Natija qanday bo'ladi?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Biz massivlardan qiymatlarni yoki obyektlardan xususiyatlarni `destructuring` (tuzilmani buzish) orqali ochishimiz mumkin. Masalan:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

`a` hozir `1`ga teng, va `b` esa `2`ga. Savolda aynan nima so&apos;ralgan?

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Bu shuni anglatadiki `y` `array`ning birinchi elementiga teng, va birinchi element bu `1`. Qachonki biz `y`ni chaqirganimizda `1` qaytariladi.

</p>
</details>

---

###### 60. Natija qanday bo'ladi?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Obyektlarni `spread` (yoyish) operatori orqali birlashtirish mumkin `...`. Bu sizga obyektning `key/value` (kalit/qiymat) juftliklaridan nusxa olishda qo&apos;l keladi, va ularni boshqa obyektga qo&apos;shishga ham. Yuqoridagi kodda, biz `user` obyektining nusxasini yaratdik, va uni `admin` admin obyektiga qo&apos;shdik. Hozir `admin` obyekti nusxalangan `key/value` (kalit/qiymat) juftligi va o&apos;zining qiymatlarini saqlab turibdi.

</p>
</details>

---

###### 61. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.

Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.

</p>
</details>

---

###### 62. Natija qanday bo'ladi?

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.

If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

</p>
</details>

---

###### 63. Natija qanday bo'ladi?

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

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
<p>

#### Javob: A

The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.

`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.

</p>
</details>

---

###### 64. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.

The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.

The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.

The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.

</p>
</details>

---

###### 65. Natija qanday bo'ladi?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.

In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.

On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.

If you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.

On the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.

</p>
</details>
  
---

###### 66. Qaysi konstruktor bilan `Dog` klasini kengaytirish (undan meros olish) mumkin.?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Meros olingan klasda, siz `this`ga `super`ni chaqirmasdan turib murojaat qila olmaysiz. Agar buni qilishga urinsangiz, `ReferenceError` yuzaga keladi. `1` va `4`da `ReferenceError` qaytadi.

`super` kalit so&apos;zi bilan, `parent` (ota) klasning \_constructor_idagi qiymatlarga murojaat qila olamiz. `parent`ning konstruktori `name` nomli argumentni qabul qiladi, shuning uchun biz `name`ni `super` metodiga yozishimiz kerak.

`Labrador` klasi ikkita argument qabul qiladi, ular `name` argumenti `Dog` klasidan keladi, va `size` esa `Labrador` klasidagi qo&apos;shimcha xususiyat.Ularning ikkisi ham `Labrador` klasidagi konstruktorga qo&apos;shilishi kerak.

Yuqoridagi tushintirishlardan kelib chiqib, eng to&apos;g&apos;ri yasalgan konstruktor bu 2-konstruktor hisoblanadi.

</p>
</details>

---

###### 67. Natija qanday bo'ladi?

```javascript
// index.js
console.log("running index.js");
import { sum } from "./sum.js";
console.log(sum(1, 2));

// sum.js
console.log("running sum.js");
export const sum = (a, b) => a + b;
```

- A: `running index.js`, `running sum.js`, `3`
- B: `running sum.js`, `running index.js`, `3`
- C: `running sum.js`, `3`, `running index.js`
- D: `running index.js`, `undefined`, `running sum.js`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`import` kalit so&apos;zi bilan, barcha import qilingan modullar _pre-parsed_ (oldindan ishga tushadi). Bu import qilingan modul _birinchi_ bo&apos;lib ishga tushadui. Boshqa modulni import qilgan fayldagi kodlar _keyin_ ishga tushadi.

Bu yerda \_CommonJS_dagi `require()` bilan `import` o&apos;rtasida bir farq bor! `require()`, kod ishga tushayotganda ham boshqa kodni yuklaydi. Agar biz `import` o&apos;rniga `require`dan foydalanganimizda, `running index.js`, `running sum.js`, `3` kabi javob chiqqan bo&apos;lardi.

</p>
</details>

---

###### 68. Natija qanday bo'ladi?

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Barcha `Symbol`lar takrorlanmasdir. `Symbol`ga argument sifatida beriladigan qiymatdan unga izoh yozish uchungina foydalaniladi. `Symbol`ning qiymati unga beriladigan argumentga bog&apos;liq emas. Biz tenglikni tekshirganimizda, biz ikkita yangi `Symbol` yaratdik, birinchisi `Symbol('foo')`, va ikkinchisi `Symbol('foo')`. Bu ikkalasi ham takrorlanmasdir va biri-biriga teng emas, `Symbol('foo') === Symbol('foo')` taqqoslanganda `false` qaytaradi.

</p>
</details>

---

###### 69. Natija qanday bo'ladi?

```javascript
const name = "Lydia Hallie";
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`padStart` metodi bilan, biz `"string"`ning boshlanish tarafidan `padding` berishimiz mumkin. Metodga beriladigan qiymat `padding` va `"string"` uzunligining \_yig'indisi_ga teng. `"Lydia Hallie"`ning uzunligi `12`ga teng. `name.padStart(13)` esa `"string"` boshidan `1` uzunlikdagi `padding` qo&apos;shadi, chunki `12 + 1` `13`ga teng.

If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.

</p>
</details>

---

###### 70. Natija qanday bo'ladi?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: A string containing their code points
- D: Error

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`+` operatori orqali `"string"`lar bir biriga qo&apos;shiladi. Yuqoridagi kodda, biz `"🥑"` qiymatli `"string"`ni `"💻"` qiymatlisi bilan birlashtirdik, va natija esa `"🥑💻"` ga teng bo&apos;ldi.

</p>
</details>

---

###### 71. `console.log`dan keyingi commentga olingan satrlarni qanday qilib consolega chiqarishimiz mumkin? ?

```javascript
function* startGame() {
  const answer = yield "Sizga JavaScript yoqadimi?";
  if (answer !== "Ha") {
    return "Oh yo'q... Shu yerda to'xtaymmiz!";
  }
  return "JavaScript ham sizni yaxshi ko'radi ❤️";
}

const game = startGame();
console.log(/* 1 */); // Sizga JavaScript yoqadimi?
console.log(/* 2 */); // JavaScript ham sizni yaxshi ko'radi ❤️
```

- A: `game.next("Ha").value` va `game.next().value`
- B: `game.next.value("Ha")` va `game.next.value()`
- C: `game.next().value` va `game.next("Ha").value`
- D: `game.next.value()` va `game.next.value("Ha")`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Generator funksiya o&apos;zini "to'xtatadi" qachonki blok ichida `yield` kalit so&apos;zi ko&apos;rinsa. Dastlab, biz funksiyaga "Sizga JavaScript yoqadimi?" iborasini berishimiz kerak, va bu `game.next().value` orqali chaqiriladi.

Birinchi `yield` kalit so&apos;zini topmaguncha, har bir qator ishga tushadi. Bu yerda funksiyaning birinchi qatorida `yield` kalit so&apos;zi mavjud. Funksiya shu yerda o&apos;z ishini to&apos;xtatib turadi! _Bu esa `answer` o'zgaruvchisining hali undefined ekanini bildiradi!_

Biz endi `game.next("Ha").value`ni chaqirdik, oldingi `yield` `next()` funksiyasiga berilgan parametrlar bilan almashtirildi, ya&apos;ni `"Ha"` bilan. `answer` o&apos;zgaruvchisining qiymati endi `"Ha"`ga teng. `if-else` ifodasi `false` qaytaradi, va `JavaScript ham sizni yaxshi ko'radi ❤️` satri `console`da ko'rinadi.

</p>
</details>

---

###### 72. Natija qanday bo'ladi?

```javascript
console.log(String.raw`Salom\ndunyo`);
```

- A: `Salom dunyo!`
- B: `Salom` <br />&nbsp; &nbsp; &nbsp;`dunyo`
- C: `Salom\ndunyo`
- D: `Salom\n` <br /> &nbsp; &nbsp; &nbsp;`dunyo`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`String.raw` funksiyasi chaqirilganda (`\n`, `\v`, `\t` va hk.) rad etiladi! `\` (backslash)lar hisobga olinadigan bolsa quyidagicha holatda muammo keltirib chiqargan bo'lardi:

`` const path = `C:\Documents\Projects\table.html` ``

Va bu mana bu holatga kelardi:

`"C:DocumentsProjects able.html"`

`String.raw` bilan yuqoridagi belgilar bekor qilinadi va natija qanday bo'lsa shhhhhu natijaning o'zi qaytariladi:

`C:\Documents\Projects\table.html`

Bu holatda esa, `Hello\nworld` satri `console`ga chiqadi.

</p>
</details>

---

###### 73. Natija qanday bo'ladi?

```javascript
async function getData() {
  return await Promise.resolve("Men buni uddaladim!");
}

const data = getData();
console.log(data);
```

- A: `"Men buni uddaladim!"`
- B: `Promise {<resolved>: "Men buni uddaladim!"}`
- C: `Promise {<pending>}`
- D: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`Asinxron` funksiyalar har doim `promise` qaytaradu. `await` `resolve` bo'lishi uchun hali ham funksiyani kutadi: yuqoridagi misolda `getData()` funksiyasi bajarilayotgan `promise` qaytaradi, shu sabab ham `data` `Promise {<pending>}`ga teng!

Agar biz `resolve`(bajarib bo'lingan) qiymatidagi `"Men buni uddaladim!"` satrini chiqarmoqchi bo'lsak, `data`ga `.then()`ni ulab ishlatishimiz mumkin edi:

`data.then(res => console.log(res))`

Va bu kutilgan `"Men buni uddaladim!"`ni qaytarar edi!

</p>
</details>

---

###### 74. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`.push()` metodi massivning uzunligini qaytaradi! Dastlab, massiv bitta elementdan iborat edi (`"banana"`) va `1`ta uzunlikka ega edi. Massivga `"apple"`ni qo'shgandan keyin esa, massiv 2 ta elementga ega bo'ldi, uzunligi ham 1 ga ortdi. Bu esa `addToList` funksiyasidan qaytarildi.

`push` metodi `original` massivni yangilaydi. Agar siz \_massiv_ning o'zini qaytarmoqchi bo'lsangiz, yangi element qo'shilgach `list`ni qaytarish kifoya.

</p>
</details>

---

###### 75. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`Object.freeze` obyektga yangi qiymat qo'shishni, o'chirishni va yangilashni to'xtadi (xususiyatning qiymati boshqa obyekt bo'lmaguncha).

Biz `shape` o'zgaruvchisini muzlatilgan `box` obyektiga tenglashtirganimizda bu ikkisi xotirada bir manzilga murojaat qiluvchi obyektlarga aylandi. Obyektning muzlatilmaganligini `Object.isFrozen` metodi orqali tekshirishingiz mumkin. Bu holatda, `Object.isFrozen(shape)` `true` qiymat qaytaradi, chunki `shape` ham muzlatilgan `box` obyekti bilan bir xil aslida.

`shape` ham muzlatilganligni hisobga olsak, uning `x` o'zgaruvchisi o'zgarmasdir. `x` hali ham `10` ga teng.

</p>
</details>

---

###### 76. Natija qanday bo'ladi?

```javascript
const { firstName: myName } = { firstName: "Lydia" };

console.log(firstName);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

[destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)dan foydalanish orqali array qiymatlari va obuekt xususiyatlarini ulardan alohida qilib ajratib olamiz!

```javascript
const { firstName } = { firstName: "Lydia" };
// ES5 version:
// var firstName = { firstName: 'Lydia' }.firstName;

console.log(firstName); // "Lydia"
```

Shuningdek, obyektdan ajratib olingan xususiyat keyinchalik boshqa nom bilan ham o'zgartirilishi mumkin:

```javascript
const { firstName: myName } = { firstName: "Lydia" };
// ES5 version:
// var myName = { firstName: 'Lydia' }.firstName;

console.log(myName); // "Lydia"
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

Shuning uchun, `firstName` o&apos;zgaruvchi sifatida mavjud emas, va bunga murojaat qilish `ReferenceError` keltirib chiqaradi.

**Note:** `global scope` xususiyatlarida ehtiyot bo'ling:

```javascript
const { name: myName } = { name: "Lydia" };

console.log(myName); // "lydia"
console.log(name); // "" ----- Browser e.g. Chrome
console.log(name); // ReferenceError: name is not defined  ----- NodeJS
```

JavaScript berilgan o'zgaruvchini mavjud `scope`dan topa olmagach, u yuqori qismga o'tishni boshlaydi [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) va qiymat topilguncha `scope`lar orqali ko'tarilib boraveradi va bu **Global scope**gacha davom etadi. Shunda ham topa olmasa `ReferenceError` qaytaradi.

- **Brauzerlarda** masalan \_Chrome_da, `name` eskirgan `scope` qiymati hisoblanadi. Bu misolda, \_global scope_da kod bajarilmoqda va u yerda `name` o'zgaruvchisi bilan birorta qiymat mavjud emas, shuning uchun ham u \_variable/properties_ni `global scope`dan qidiradi, bu qidiruv `window` obyekti orqali bo'ladi natijada [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) holatiga borib **empty string**ga teng bo'ladi.

- **NodeJS**da `global scope`da bunday qiymat mavjud emas, shu sabab mavjud boo'lmagan qiymatga murojaat sabab [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) yuzaga keladi.

</p>
</details>

---

###### 77. Is this a pure function?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

A pure function is a function that _always_ returns the same result, if the same arguments are passed.

The `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.

</p>
</details>

---

###### 78. What is the output?

```javascript
const add = () => {
  const cache = {};
  return (num) => {
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.

If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.

We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.

The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

</p>
</details>

---

###### 79. What is the output?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Where the keys are the enumerable properties. `0` `1` `2` `3` get logged.

With a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the o&apos;zgaruvchi "item" is equal to the element it's currently iterating over, `"☕"` `"💻"` `"🍷"` `"🍫"` get logged.

</p>
</details>

---

###### 80. What is the output?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.

The element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.

</p>
</details>

---

###### 81. What is the output?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.

In ES6, we can overwrite this default `undefined` value with default parameters. For example:

`function sayHi(name = "Lydia") { ... }`

In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`

</p>
</details>

---

###### 82. What is the output?

```javascript
var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"🥑"`.

With the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a o&apos;zgaruvchi called _status_ with the value of `"😎"`. When logging `this.status`, `"😎"` gets logged.

</p>
</details>

---

###### 83. What is the output?

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

let city = person.city;
city = "Amsterdam";

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

We set the o&apos;zgaruvchi `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the o&apos;zgaruvchi `city` has the value of `undefined`.

Note that we are _not_ referencing the `person` object itself! We simply set the o&apos;zgaruvchi `city` equal to the current value of the `city` property on the `person` object.

Then, we set `city` equal to the string `"Amsterdam"`. This doesn't change the person object: there is no reference to that object.

When logging the `person` object, the unmodified object gets returned.

</p>
</details>

---

###### 84. What is the output?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

o&apos;zgaruvchis with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a o&apos;zgaruvchi outside of the block it's declared in, a ReferenceError gets thrown.

</p>
</details>

---

###### 85. What kind of information would get logged?

```javascript
fetch("https://www.website.com/api/user/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
```

- A: The result of the `fetch` method.
- B: The result of the second invocation of the `fetch` method.
- C: The result of the callback in the previous `.then()`.
- D: It would always be undefined.

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.

</p>
</details>

---

###### 86. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.

By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.

`new Boolean(true)` returns an object wrapper, not the boolean value itself.

`name.length` returns the length of the passed argument, not whether it's `true`.

</p>
</details>

---

###### 87. Natija qanday bo'ladi?

```javascript
console.log("I want pizza"[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character `"I'`, which gets logged.

Note that this method is not supported in IE7 and below. In that case, use `.charAt()`.

</p>
</details>

---

###### 88. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.

If you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.

</p>
</details>

---

###### 89. Natija qanday bo'ladi?

```javascript
// module.js
export default () => "Hello world";
export const name = "Lydia";

// index.js
import * as data from "./module";

console.log(data);
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Global object of `module.js`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a o&apos;zgaruvchi called `name` which has the value of the string `"Lydia"`.

The `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.

</p>
</details>

---

###### 90. Natija qanday bo'ladi?

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```javascript
function Person(name) {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.

</p>
</details>

---

###### 91. Natija qanday bo'ladi?

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.

Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.

</p>
</details>

---

###### 92. Natija qanday bo'ladi?

```javascript
function giveLydiaPizza() {
  return "Here is pizza!";
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.

</p>
</details>

---

###### 93. Natija qanday bo'ladi?

```javascript
const person = {
  name: "Lydia",
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.

The first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, and `y` equal to `"Lydia"`, which get logged.
The second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, and `y` equal to `21`, which get logged.

</p>
</details>

---

###### 94. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`

</p>
</details>

---

###### 95. Natija qanday bo'ladi?

```javascript
function nums(a, b) {
  if (a > b) console.log("a is bigger");
  else console.log("b is bigger");
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be o&apos;zgaruvchis, or keywords like `throw`, `return`, `break`, etc.

Here, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:

```javascript
return;
a + b;
```

This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!

</p>
</details>

---

###### 96. Natija qanday bo'ladi?

```javascript
class Person {
  constructor() {
    this.name = "Lydia";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah";
  }
};

const member = new Person();
console.log(member.name);
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.

</p>
</details>

---

###### 97. Natija qanday bo'ladi?

```javascript
const info = {
  [Symbol("a")]: "b",
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` and `["{Symbol('a')"]`
- B: `{}` and `[]`
- C: `{ a: "b" }` and `["a"]`
- D: `{Symbol('a'): 'b'}` and `[]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).

</p>
</details>

---

###### 98. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:

`[x, ...y] = [1, 2, 3, 4]`

With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.

The `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to instantly return an _object_ from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a `SyntaxError` gets thrown.

The following function would have returned an object:

`const getUser = user => ({ name: user.name, age: user.age })`

</p>
</details>

---

###### 99. Natija qanday bo'ladi?

```javascript
const name = "Lydia";

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The o&apos;zgaruvchi `name` holds the value of a string, which is not a function, thus cannot invoke.

TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!

SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`.
ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.

</p>
</details>

---

###### 100. What's the value of output?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && "Im"}possible!
You should${"" && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `"Im'` gets returned.

`""` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.

</p>
</details>

---

###### 101. What's the value of output?

```javascript
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.

`(null || false || "")`: all operands are falsy values. This means that the last operand, `""` gets returned. `two` is equal to `""`.

`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.

</p>
</details>

---

###### 102. What's the value of output?

```javascript
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();
```

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._

We can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently.

In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.

With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.

This means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.

</p>
</details>

---

###### 103. What's the value of output?

```javascript
const set = new Set();

set.add(1);
set.add("Lydia");
set.add({ name: "Lydia" });

for (let item of set) {
  console.log(item + 2);
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[object Object]2`
- D: `"12"`, `Lydia2`, `[object Object]2`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.

The first one is `1`, which is a numerical value. `1 + 2` returns the number 3.

However, the second one is a string `"Lydia"`. `"Lydia"` is a string and `2` is a number: `2` gets coerced into a string. `"Lydia"` and `"2"` get concatenated, which results in the string `"Lydia2"`.

`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.

</p>
</details>

---

###### 104. What's its value?

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (`<fulfilled>`). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.

</p>
</details>

---

###### 105. What's its value?

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}

const person = { name: "Lydia" };

compareMembers(person);
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.

We set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.

This means that both values have a reference to the same spot in memory, thus they are equal.

The code block in the `else` statement gets run, and `They are the same!` gets logged.

</p>
</details>

---

###### 106. What's its value?

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];

console.log(colorConfig.colors[1]);
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig["colors"]`).

With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.

</p>
</details>

---

###### 107. What's its value?

```javascript
console.log("❤️" === "❤️");
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.

</p>
</details>

---

###### 108. Which of these methods modifies the original array?

```javascript
const emojis = ["✨", "🥑", "😍"];

emojis.map((x) => x + "✨");
emojis.filter((x) => x !== "🥑");
emojis.find((x) => x !== "🥑");
emojis.reduce((acc, cur) => acc + "✨");
emojis.slice(1, 2, "✨");
emojis.splice(1, 2, "✨");
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.

`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.

</p>
</details>

---

###### 109. Natija qanday bo'ladi?

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.

In JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)

Then, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. What does this method do?

```javascript
JSON.parse();
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

With the `JSON.parse()` method, we can parse JSON string to a JavaScript value.

```javascript
// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify({ name: "Lydia" }); // '{"name":"Lydia"}'
JSON.parse(jsonArray); // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. Natija qanday bo'ladi?

```javascript
let name = "Lydia";

function getName() {
  console.log(name);
  let name = "Sarah";
}

getName();
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the o&apos;zgaruvchi `name` we're trying to access. In this case, the `getName` function contains its own `name` o&apos;zgaruvchi: we declare the o&apos;zgaruvchi `name` with the `let` keyword, and with the value of `'Sarah'`.

o&apos;zgaruvchis with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the o&apos;zgaruvchis before they are declared, JavaScript throws a `ReferenceError`.

If we wouldn't have declared the `name` o&apos;zgaruvchi within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a o&apos;zgaruvchi called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.

```javascript
let name = "Lydia";

function getName() {
  console.log(name);
}

getName(); // Lydia
```

</p>
</details>

---

###### 112. Natija qanday bo'ladi?

```javascript
function* generatorOne() {
  yield ["a", "b", "c"];
}

function* generatorTwo() {
  yield* ["a", "b", "c"];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).

In `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

In `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.

```javascript
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</p>
</details>

---

###### 113. Natija qanday bo'ladi?

```javascript
console.log(`${((x) => x)("I love")} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.

</p>
</details>

---

###### 114. What will happen?

```javascript
let config = {
  alert: setInterval(() => {
    console.log("Alert!");
  }, 1000),
};

config = null;
```

- A: The `setInterval` callback won't be invoked
- B: The `setInterval` callback gets invoked once
- C: The `setInterval` callback will still be called every second
- D: We never invoked `config.alert()`, config is `null`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object.
As long as there is a reference, the object won't get garbage collected.
Since this is an interval, setting `config` to `null` or `delete`-ing `config.alert` won't garbage-collect the interval, so the interval will still be called.
It should be cleared with `clearInterval(config.alert)` to remove it from memory.
Since it was not cleared, the `setInterval` callback function will still get invoked every 1000ms (1s).

</p>
</details>

---

###### 115. Which method(s) will return the value `'Hello world!'`?

```javascript
const myMap = new Map();
const myFunc = () => "greeting";

myMap.set(myFunc, "Hello world!");

//1
myMap.get("greeting");
//2
myMap.get(myFunc);
//3
myMap.get(() => "greeting");
```

- A: 1
- B: 2
- C: 2 and 3
- D: All of them

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.

1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.
3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.

</p>
</details>

---

###### 116. Natija qanday bo'ladi?

```javascript
const person = {
  name: "Lydia",
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.

First, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: "Lydia", age: 22 }`.

Then, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### 117. Which of the following options will return `6`?

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.

</p>
</details>

---

###### 118. Natija qanday bo'ladi?

```javascript
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

With the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.

</p>
</details>

---

###### 119. Natija qanday bo'ladi?

```javascript
const person = {
  firstName: "Lydia",
  lastName: "Hallie",
  pet: {
    name: "Mara",
    breed: "Dutch Tulip Hound",
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.

`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.
`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.
`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.
`member.getLastName?.()`: o&apos;zgaruvchi `member` is non existent therefore a `ReferenceError` gets thrown!

</p>
</details>

---

###### 120. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

We passed the condition `groceries.indexOf("banana")` to the if-statement. `groceries.indexOf("banana")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don't have to buy bananas!` gets logged.

</p>
</details>

---

###### 121. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.

</p>
</details>

---

###### 122. Natija qanday bo'ladi?

```javascript
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`typeof name` returns `"string"`. The string `"string"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === "object"` and `false === "string"` both return`false`.

(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)

</p>
</details>

---

###### 123. Natija qanday bo'ladi?

```javascript
const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};

add(4)(5)(6);
```

- A: `4` `5` `6`
- B: `6` `5` `4`
- C: `4` `function` `function`
- D: `undefined` `undefined` `6`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.

</p>
</details>

---

###### 124. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the o&apos;zgaruvchi `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the o&apos;zgaruvchi `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promise, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.

</p>
</details>

---

###### 125. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.

</p>
</details>

---

###### 126. Natija qanday bo'ladi?

```javascript
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "mile-per-hour",
  }).format(speed);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
}

console.log(getFine(130, 300));
```

- A: The driver drove 130 and has to pay 300
- B: The driver drove 130 mph and has to pay \$300.00
- C: The driver drove undefined and has to pay undefined
- D: The driver drove 130.00 and has to pay 300.00

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currency` in `USD` results in `$300.00`.

</p>
</details>

---

###### 127. Natija qanday bo'ladi?

```javascript
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value "💀" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the "💀" to it. When logging `spookyItems`, `["👻", "🎃", "🕸", "💀"]` gets logged.

</p>
</details>

---

###### 128. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.

With the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.

</p>
</details>

---

###### 129. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

o&apos;zgaruvchis declared with the `const` keyword are not referenceable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the o&apos;zgaruvchi `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the o&apos;zgaruvchi `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the o&apos;zgaruvchi `randomValue` in the `getInfo` function.

</p>
</details>

---

###### 130. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

In the `try` block, we're logging the awaited value of the `myPromise` o&apos;zgaruvchi: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.

</p>
</details>

---

###### 131. Natija qanday bo'ladi?

```javascript
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### 132. Natija qanday bo'ladi?

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Then, we create a new o&apos;zgaruvchi `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.

We invoke `counterTwo.increment()`, which sets `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. Natija qanday bo'ladi?

```javascript
const myPromise = Promise.resolve(Promise.resolve("Promise"));

function funcOne() {
  setTimeout(() => console.log("Timeout 1!"), 0);
  myPromise.then((res) => res).then((res) => console.log(`${res} 1!`));
  console.log("Last line 1!");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`);
  setTimeout(() => console.log("Timeout 2!"), 0);
  console.log("Last line 2!");
}

funcOne();
funcTwo();
```

- A: `Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`
- B: `Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! `
- C: `Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`
- D: `Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

First, we invoke `funcOne`. On the first line of `funcOne`, we call the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop <a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif">here</a>.)

Then we call the `myPromise` promise, which is an _asynchronous_ operation.

Both the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line 1!` gets logged first, since this is not an asynchonous operation.

Since the callstack is not empty yet, the `setTimeout` function and promise in `funcOne` cannot get added to the callstack yet.

In `funcTwo`, the o&apos;zgaruvchi `res` gets `Promise` because `Promise.resolve(Promise.resolve('Promise'))` is equivalent to `Promise.resolve('Promise')` since resolving a promise just resolves it's value. The `await` in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so `Promise 2!` and then `Last line 2!` are logged and the `setTimeout` is sent to the Web API.

Then the call stack is empty. Promises are _microtasks_ so they are resolved first when the call stack is empty so `Promise 1!` gets to be logged.

Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log("Timeout 1!")` from `funcOne`, and `() => console.log("Timeout 2!")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout 1!`, and gets popped off the stack. Then, the second callback logs `Timeout 2!`, and gets popped off the stack.

</p>
</details>

---

###### 134. How can we invoke `sum` in `sum.js` from `index.js?`

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
- D: Default aren't imported with `*`, only named exports

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

With the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:

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

###### 135. Natija qanday bo'ladi?

```javascript
const handler = {
  set: () => console.log("Added a new property!"),
  get: () => console.log("Accessed a property!"),
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```

- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: Nothing gets logged

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the `handler` object which contained two properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.

The first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.

First, we added a new property `name` to the proxy object (`person.name = "Lydia"`). `set` gets invoked, and logs `"Added a new property!"`.

Then, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.

</p>
</details>

---

###### 136. Which of the following will modify the `person` object?

```javascript
const person = { name: "Lydia Hallie" };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

With `Object.seal` we can prevent new properties from being _added_, or existing properties to be _removed_.

However, you can still modify the value of existing properties.

</p>
</details>

---

###### 137. Which of the following will modify the `person` object?

```javascript
const person = {
  name: "Lydia Hallie",
  address: {
    street: "100 Main St",
  },
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.

However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.

</p>
</details>

---

###### 138. Natija qanday bo'ladi?

```javascript
const add = (x) => x + x;

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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.

Then, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.

</p>
</details>

---

###### 139. Natija qanday bo'ladi?

```javascript
class Counter {
  #number = 10;

  increment() {
    this.#number++;
  }

  getNum() {
    return this.#number;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.#number);
```

- A: `10`
- B: `11`
- C: `undefined`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

In ES2020, we can add private o&apos;zgaruvchis in classes by using the `#`. We cannot access these o&apos;zgaruvchis outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!

</p>
</details>

---

###### 140. What's missing?

```javascript
const teams = [
  { name: "Team 1", members: ["Paul", "Lisa"] },
  { name: "Team 2", members: ["Laura", "Tim"] },
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.

If we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.

</p>
</details>

---

###### 141. Natija qanday bo'ladi?

```javascript
const person = {
  name: "Lydia Hallie",
  hobbies: ["coding"],
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

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.

First, we invoke the `addHobby` function, and pass `"running"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `hobbies`, `"running"` gets added to this empty array.

Then, we invoke the `addHobby` function, and pass `"dancing"` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.

Last, we invoke the `addHobby` function, and pass `"baking"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.

After pushing `dancing` and `baking`, the value of `person.hobbies` is `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 142. Natija qanday bo'ladi?

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
- D: Nothing, we didn't call any method

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

We create the o&apos;zgaruvchi `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `"I'm pink. 🌸"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. The constructor in `Bird` gets called, and logs `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 143. Which of the options result(s) in an error?

```javascript
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

The `const` keyword simply means we cannot _redeclare_ the value of that o&apos;zgaruvchi, it's _read-only_. However, the value itself isn't immutable. The properties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.

</p>
</details>

---

###### 144. What do we need to add to the `person` object to get `["Lydia Hallie", 21]` as the output of `[...person]`?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: Nothing, object are iterable by default
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Objects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.

</p>
</details>

---

###### 145. Natija qanday bo'ladi?

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The `if` condition within the `forEach` loop checks whether the value of `num` is truthy or falsy. Since the first number in the `nums` array is `0`, a falsy value, the `if` statement's code block won't be executed. `count` only gets incremented for the other 3 numbers in the `nums` array, `1`, `2` and `3`. Since `count` gets incremented by `1` 3 times, the value of `count` is `3`.

</p>
</details>

---

###### 146. Natija qanday bo'ladi?

```javascript
function getFruit(fruits) {
  console.log(fruits?.[1]?.[1]);
}

getFruit([["🍊", "🍌"], ["🍍"]]);
getFruit();
getFruit([["🍍"], ["🍊", "🍌"]]);
```

- A: `null`, `undefined`, 🍌
- B: `[]`, `null`, 🍌
- C: `[]`, `[]`, 🍌
- D: `undefined`, `undefined`, 🍌

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

The `?` allows us to optionally access deeper nested properties within objects. We're trying to log the item on index `1` within the subarray that's on index `1` of the `fruits` array. If the subarray on index `1` in the `fruits` array doesn't exist, it'll simply return `undefined`. If the subarray on index `1` in the `fruits` array exists, but this subarray doesn't have an item on its `1` index, it'll also return `undefined`.

First, we're trying to log the second item in the `['🍍']` subarray of `[['🍊', '🍌'], ['🍍']]`. This subarray only contains one item, which means there is no item on index `1`, and returns `undefined`.

Then, we're invoking the `getFruits` function without passing a value as an argument, which means that `fruits` has a value of `undefined` by default. Since we're conditionally chaining the item on index `1` of`fruits`, it returns `undefined` since this item on index `1` does not exist.

Lastly, we're trying to log the second item in the `['🍊', '🍌']` subarray of `['🍍'], ['🍊', '🍌']`. The item on index `1` within this subarray is `🍌`, which gets logged.

</p>
</details>

---

###### 147. Natija qanday bo'ladi?

```javascript
class Calc {
  constructor() {
    this.count = 0;
  }

  increase() {
    this.count++;
  }
}

const calc = new Calc();
new Calc().increase();

console.log(calc.count);
```

- A: `0`
- B: `1`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

We set the o&apos;zgaruvchi `calc` equal to a new instance of the `Calc` class. Then, we instantiate a new instance of `Calc`, and invoke the `increase` method on this instance. Since the count property is within the constructor of the `Calc` class, the count property is not shared on the prototype of `Calc`. This means that the value of count has not been updated for the instance calc points to, count is still `0`.

</p>
</details>

---

###### 148. Natija qanday bo'ladi?

```javascript
const user = {
  email: "e@mail.com",
  password: "12345",
};

const updateUser = ({ email, password }) => {
  if (email) {
    Object.assign(user, { email });
  }

  if (password) {
    user.password = password;
  }

  return user;
};

const updatedUser = updateUser({ email: "new@email.com" });

console.log(updatedUser === user);
```

- A: `false`
- B: `true`
- C: `TypeError`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

The `updateUser` function updates the values of the `email` and `password` properties on user, if their values are passed to the function, after which the function returns the `user` object. The returned value of the `updateUser` function is the `user` object, which means that the value of updatedUser is a reference to the same `user` object that `user` points to. `updatedUser === user` equals `true`.

</p>
</details>

---

###### 149. Natija qanday bo'ladi?

```javascript
const fruit = ["🍌", "🍊", "🍎"];

fruit.slice(0, 1);
fruit.splice(0, 1);
fruit.unshift("🍇");

console.log(fruit);
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

First, we invoke the `slice` method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji.
Then, we invoke the `splice` method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of `['🍊', '🍎']`.
At last, we invoke the `unshift` method on the `fruit` array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of `['🍇', '🍊', '🍎']`.

</p>
</details>

---

###### 150. Natija qanday bo'ladi?

```javascript
const animals = {};
let dog = { emoji: "🐶" };
let cat = { emoji: "🐈" };

animals[dog] = { ...dog, name: "Mara" };
animals[cat] = { ...cat, name: "Sara" };

console.log(animals[dog]);
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Object keys are converted to strings.

Since the value of `dog` is an object, `animals[dog]` actually means that we’re creating a new property called `"object Object"` equal to the new object. `animals["object Object"]` is now equal to `{ emoji: "🐶", name: "Mara"}`.

`cat` is also an object, which means that `animals[cat]` actually means that we’re overwriting the value of `animals["object Object"]` with the new cat properties.

Logging `animals[dog]`, or actually `animals["object Object"]` since converting the `dog` object to a string results `"object Object"`, returns the `{ emoji: "🐈", name: "Sara" }`.

</p>
</details>

---

###### 151. Natija qanday bo'ladi?

```javascript
const user = {
  email: "my@email.com",
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("new@email.com");
console.log(user.email);
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

The `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned.

</p>
</details>

---

###### 152. Natija qanday bo'ladi?

```javascript
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.reject("Third");
const promise4 = Promise.resolve("Fourth");

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

- A: `[['First', 'Second'], ['Fourth']]`
- B: `[['First', 'Second'], ['Third', 'Fourth']]`
- C: `[['First', 'Second']]`
- D: `'Third'`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

The `Promise.all` method runs the passed promises in parallel. If one promise fails, the `Promise.all` method _rejects_ with the value of the rejected promise. In this case, `promise3` rejected with the value `"Third"`. We’re catching the rejected value in the chained `catch` method on the `runPromises` invocation to catch any errors within the `runPromises` function. Only `"Third"` gets logged, since `promise3` rejected with this value.

</p>
</details>

---

###### 153. What should the value of `method` be to log `{ name: "Lydia", age: 22 }`?

```javascript
const keys = ["name", "age"];
const values = ["Lydia", 22];

const method =
  /* ?? */
  Object[method](
    keys.map((_, i) => {
      return [keys[i], values[i]];
    })
  ); // { name: "Lydia", age: 22 }
```

- A: `entries`
- B: `values`
- C: `fromEntries`
- D: `forEach`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The `fromEntries` method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the `keys` array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.

This creates an array of subarrays containing the correct keys and values, which results in `{ name: "Lydia", age: 22 }`

</p>
</details>

---

###### 154. Natija qanday bo'ladi?

```javascript
const createMember = ({ email, address = {} }) => {
  const validEmail = /.+\@.+\..+/.test(email);
  if (!validEmail) throw new Error("Valid email pls");

  return {
    email,
    address: address ? address : null,
  };
};

const member = createMember({ email: "my@email.com" });
console.log(member);
```

- A: `{ email: "my@email.com", address: null }`
- B: `{ email: "my@email.com" }`
- C: `{ email: "my@email.com", address: {} }`
- D: `{ email: "my@email.com", address: undefined }`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

The default value of `address` is an empty object `{}`. When we set the o&apos;zgaruvchi `member` equal to the object returned by the `createMember` function, we didn't pass a value for address, which means that the value of address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of address is the empty object `{}`.

</p>
</details>

---

###### 155. Natija qanday bo'ladi?

```javascript
let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

The condition within the `if` statement checks whether the value of `!typeof randomValue` is equal to `"string"`. The `!` operator converts the value to a boolean value. If the value is truthy, the returned value will be `false`, if the value is falsy, the returned value will be `true`. In this case, the returned value of `typeof randomValue` is the truthy value `"number"`, meaning that the value of `!typeof randomValue` is the boolean value `false`.

`!typeof randomValue === "string"` always returns false, since we're actually checking `false === "string"`. Since the condition returned `false`, the code block of the `else` statement gets run, and `Yay it's a string!` gets logged.

</p>
</details>
