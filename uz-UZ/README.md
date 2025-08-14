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

<details><summary><b> Mavjud 19 tildagi tarjimalarni ko'rish 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼</b></summary>
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

`defineProperty` usuli yordamida biz obyektga yangi xususiyatlar qo'shishimiz yoki mavjudlarini o'zgartirishimiz mumkin. `defineProperty` usuli orqali obyektga xususiyat qo'shganimizda, ular sukut bo'yicha _hisobga olinmaydi_ (enumerable emas). `Object.keys` usuli obyektdan barcha _hisobga olinadigan_ xususiyat nomlarini qaytaradi, bu holatda faqat `"name"` qaytadi.

`defineProperty` usuli orqali qo'shilgan xususiyatlar sukut bo'yicha o'zgarmas hisoblanadi. Siz bu xatti-harakatni `writable`, `configurable` va `enumerable` xususiyatlari yordamida o'zgartirishingiz mumkin. Shunday qilib, `defineProperty` usuli sizga obyektga qo'shayotgan xususiyatlar ustidan ko'proq nazorat beradi.

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

`JSON.stringify`ning ikkinchi argumenti _replacer_ (almashtiruvchi)dir. Replacer funksiya yoki massiv bo'lishi mumkin va qaysi qiymatlar va qanday usulda stringga aylantirilishini nazorat qilishga imkon beradi.

Agar replacer _massiv_ bo'lsa, faqat massivda ko'rsatilgan xususiyat nomlari JSON stringga qo'shiladi. Bu holatda faqat `"level"` va `"health"` nomli xususiyatlar kiritiladi, `"username"` chiqarib tashlanadi. `data` endi `"{"level":19, "health":90}"` ga teng.

Agar replacer _funksiya_ bo'lsa, bu funksiya siz stringga aylantirmoqchi bo'lgan obyektning har bir xususiyati uchun chaqiriladi. Bu funksiyadan qaytarilgan qiymat JSON stringga qo'shilganda xususiyatning qiymati bo'ladi. Agar qiymat `undefined` bo'lsa, bu xususiyat JSON stringdan chiqarib tashlanadi.

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

Unary `++` operatori _avval_ operandning qiymatini qaytaradi, _keyin_ operandning qiymatini oshiradi. `num1`ning qiymati `10`, chunki `increaseNumber` funksiyasi avval `num`ning qiymatini qaytaradi, ya'ni `10`, va faqat shundan keyin `num`ning qiymatini oshiradi.

`num2` ham `10`, chunki biz `num1`ni `increasePassedNumber`ga uzatdik. `number` `10`ga teng (`num1`ning qiymati). Yana, unary `++` operatori _avval_ operandning qiymatini qaytaradi, _keyin_ operandning qiymatini oshiradi. `number`ning qiymati `10`, shuning uchun `num2` ham `10`ga teng.

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

ES6(**EcmaScript 6**)da, biz parametrlarni boshlang'ich qiymat bilan yaratishimiz mumkin. Agar funksiya parametriga biror qiymat berilmasa o'sha parametrning qiymati boshlang'ich qiymat sifatida tenlangan qiymatga teng bo'ladi yoki `"undefined"`ga teng bo'ladi. Bu holatda, biz `spread` operatoridan foydalanib `value` obyektining qiymatlarini obyekt ichiga yoyib yubordik, shu sabab `x`ning boshlang'ich qiymati `{ number: 10 }`ga teng.

Boshlang'ich argument \_call time_da hisoblanadi! Har safat bir funksiyani chaqirganimzda, **yangi** obyekt yaratiladi. Biz `multiply` ni dastlab ikki marta qiymat bermasdan cahqirdik: `x` esa boshlang'ich `{ number: 10 }` qiymatiga ega. Keyin uning ko'paytmasini `console`ga chiqaridk ya'ni `20`ni.

Uchinchi marta `multiply` funksiyasini chaqirganimizda, biz unga argument bilan murojaat qildik: ya'ni `value` nomli obyekt bilan. `*=` operatori aslida `x.number = x.number * 2` uchun qisqa yozish shakli hisoblanadi.Bundan kelib chiqadiki biz `x.number` qiymatini o'zgartirdik, va ko'paytmani `console`ga chiqardik. Natija `20`.

Tortinchi marta esa, biz `value` obyektini yana argument sifatida berdik. `x.number` qiymati oxirgi ko'paytmadan keyin `20`ga teng edi, endi esa `x.number *= 2`ning natijasi `40`ga teng.

</p>
</details>

---

###### 65. Natija qanday bo'ladi?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` va `3` `3` va `6` `4`
- B: `1` `2` va `2` `3` va `3` `4`
- C: `1` `undefined` va `2` `undefined` va `3` `undefined` va `4` `undefined`
- D: `1` `2` va `undefined` `3` va `undefined` `4`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`reduce` metodi qabul qiladigan birinchi qiymat `callback`, ikkinchisi esa `initial value` (boshlang&apos;ich qiymat). `callback` ham o&apos;z o&apos;rnida ikkita qiymat qabul qiladi ular `accumulator` va `current`. Biz _accumulator_ sifatida `x` va _current_ sifatida esa `y`ni berdik. `callback` _reduce_ bog&apos;langan `array`dagi barcha elementlar uchun bir martadan ishga tushadi va oxirida yagona qiymat qaytaradi.

Bu kodda, birorta qiymat qaytarmadik, biz shunchaki `console`ga chiqardik.

_accumulator_ning qiymati `callback` bir iteratsiya oldin hisoblagan qiymatga teng. Agar siz ixtiyoriy `initialValue` argumentini bermasangiz, \_accumulator_ arraydagi birinchi iteratsiyadagi birinchi qiymatga teng bo&apos;ladi.

Birinchi chaqiruvda, _accumulator_ (`x`) `1`ga teng, va \_current_ning qiymati (`y`) esa `2`ga. Biz buni `callback`dan qaytarmadik, biz shunchaki `accumulator` va `current`ning qiymatini `console`ga chiqardik.

Agar funksiyadan qiymat qaytmasa, u `undefined` qaytaradu. Keyingi chaqiruvda esa, _accumulator_ `undefined`ga teng bo&apos;ladi, \_current_ning qiymati `3`ga teng bo&apos;ladi. `undefined` va `3` \_console_ga chiqadi.

To&apos;rtinchi chaqiruvda esa, biz yana `callback`dan hech narsa qaytarmadik. _accumulator_ yana `undefined`ga tenf, _current_ esa `4`ga. `undefined` va `4` `console`ga chiqadi.

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

###### 71. `console.log`dan keyin commentda berilgan qiymatlarni qanday qilib olishimiz mumkin?

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're done here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Generator funksiyasi `yield`ni ko'rgach o'z ishini to'xtatib turadi. Dastlab, biz `yield`ga "Do you love JavaScript?" satrini `game.next().value`ni chaqirish orqali beramiz.

Har bir qatordagi kod bajariladi, qachonki birinchi `yield` topilmaguncha. Va bu yerda bitta `yield` kalit so'zi birinchi qatorda topildi va funksiya shu yerda ishini to'xtatadi! Bu shuni anglatadiki `answer` o'zgaruvchisi hali aniqlangani yo'q.

Biz endi `game.next("Yes").value`ni chaqirdik, oldingi `yield` `next()` funksiyasiga berilgan parametrlar bilan almashtirildi, ya&apos;ni `"Ha"` bilan. `answer` o&apos;zgaruvchisining qiymati endi `"Ha"`ga teng. `if-else` ifodasi `false` qaytaradi, va `JavaScript loves you back ❤️` satri `console`da ko'rinadi.

</p>
</details>

---

###### 72. Natija qanday bo'ladi?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

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
  return await Promise.resolve("I made it!");
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

**Diqqat:** `global scope` xususiyatlarida ehtiyot bo'ling:

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

###### 77. Bu `pure` sof funksiyami?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Ha
- B: Yo'q

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Sof funksiya - bu bir xil argumentlar uzatilganda _doimo_ bir xil natijani qaytaradigan funksiya.

`sum` funksiyasi doimo bir xil natijani qaytaradi. Agar biz `1` va `2` ni uzatsak, u yon ta'sirlarsiz _doimo_ `3` ni qaytaradi. Agar biz `5` va `10` ni uzatsak, u _doimo_ `15` ni qaytaradi va hokazo. Bu sof funksiyaning ta'rifidir.

</p>
</details>

---

###### 78. Natija qanday bo'ladi?

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

`add` funksiyasi _memoizatsiya qilingan_ funksiya. Memoizatsiya yordamida biz funksiyaning natijalarini keshda saqlashimiz mumkin, bu uning bajarilishini tezlashtiradi. Bu holatda biz avval qaytarilgan qiymatlarni saqlaydigan `cache` obyektini yaratamiz.

Agar biz `addFunction` funksiyasini bir xil argument bilan yana chaqirsak, u avval o'zining keshida bu qiymatni olganini tekshiradi. Agar shunday bo'lsa, keshlangan qiymat qaytariladi va bu bajarilish vaqtini tejaydi. Aks holda, agar keshlangan bo'lmasa, u qiymatni hisoblab, keyin saqlaydi.

Biz `addFunction` funksiyasini bir xil qiymat bilan uch marta chaqiramiz: birinchi chaqiruvda `num` `10` ga teng bo'lganda funksiyaning qiymati hali keshlanmagan. `num in cache` if shartining natijasi `false` qaytaradi va else bloki bajariladi: `Calculated! 20` chiqariladi va natija qiymati cache obyektiga qo'shiladi. `cache` endi `{ 10: 20 }` ko'rinishida.

Ikkinchi marta `cache` obyekti `10` uchun qaytariladigan qiymatni o'z ichiga oladi. `num in cache` if shartining natijasi `true` qaytaradi va `'From cache! 20'` chiqariladi.

Uchinchi marta biz funksiyaga `5 * 2` ni uzatamiz, bu `10` ga teng. `cache` obyekti `10` uchun qaytariladigan qiymatni o'z ichiga oladi. `num in cache` if shartining natijasi `true` qaytaradi va `'From cache! 20'` chiqariladi.

</p>
</details>

---

###### 79. Natija qanday bo'ladi?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` va `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` va `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` va `0` `1` `2` `3`
- D: `0` `1` `2` `3` va `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

_for-in_ sikli bilan biz **sanab o'tiladigan** xususiyatlar bo'ylab takrorlashimiz mumkin. Massivda sanab o'tiladigan xususiyatlar massiv elementlarining "kalitlari"dir, aslida ularning indekslari. Siz massivni quyidagicha ko'rishingiz mumkin:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Bu yerda kalitlar sanab o'tiladigan xususiyatlardir. `0` `1` `2` `3` chiqariladi.

_for-of_ sikli bilan biz **takrorlanuvchilar** bo'ylab takrorlashimiz mumkin. Massiv takrorlanuvchidir. Massiv bo'ylab takrorlanganimizda, "item" o'zgaruvchisi hozirda takrorlanayotgan elementga teng bo'ladi, `"☕"` `"💻"` `"🍷"` `"🍫"` chiqariladi.

</p>
</details>

---

###### 80. Natija qanday bo'ladi?

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

Massiv elementlari har qanday qiymatni saqlashi mumkin. Raqamlar, stringlar, obyektlar, boshqa massivlar, null, boolean qiymatlar, undefined va boshqa ifodalar masalan sanalar, funksiyalar va hisob-kitoblar.

Element qaytarilgan qiymatga teng bo'ladi. `1 + 2` `3` ni qaytaradi, `1 * 2` `2` ni qaytaradi va `1 / 2` `0.5` ni qaytaradi.

</p>
</details>

---

###### 81. Natija qanday bo'ladi?

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

Sukut bo'yicha argumentlar `undefined` qiymatiga ega, agar funksiyaga qiymat uzatilmagan bo'lsa. Bu holatda biz `name` argumenti uchun qiymat uzatmadik. `name` `undefined` ga teng va u chiqariladi.

ES6 da biz bu sukut bo'yicha `undefined` qiymatini standart parametrlar bilan o'zgartirishimiz mumkin. Masalan:

`function sayHi(name = "Lydia") { ... }`

Bu holatda, agar biz qiymat uzatmasak yoki `undefined` uzatsak, `name` doimo `Lydia` stringiga teng bo'ladi.

</p>
</details>

---

###### 82. Natija qanday bo'ladi?

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

- A: `"🥑"` va `"😍"`
- B: `"🥑"` va `"😎"`
- C: `"😍"` va `"😎"`
- D: `"😎"` va `"😎"`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`this` kalit so'zining qiymati uni qayerda ishlatishingizga bog'liq. **Metodda**, masalan `getStatus` metodida, `this` kalit so'zi _metodga tegishli obyektga_ ishora qiladi. Metod `data` obyektiga tegishli, shuning uchun `this` `data` obyektiga ishora qiladi. `this.status` ni chiqarganimizda, `data` obyektidagi `status` xususiyati chiqariladi, ya'ni `"🥑"`.

`call` usuli bilan biz `this` kalit so'zi qaysi obyektga ishora qilishini o'zgartirishimiz mumkin. **Funksiyalarda** `this` kalit so'zi _funksiya tegishli bo'lgan obyektga_ ishora qiladi. Biz `setTimeout` funksiyasini _global obyektda_ e'lon qildik, shuning uchun `setTimeout` funksiyasi ichida `this` kalit so'zi _global obyektga_ ishora qiladi. Global obyektda `"😎"` qiymatiga ega _status_ nomli o'zgaruvchi mavjud. `this.status` ni chiqarganimizda `"😎"` chiqariladi.

</p>
</details>

---

###### 83. Natija qanday bo'ladi?

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

Biz `city` o'zgaruvchisini `person` obyektidagi `city` nomli xususiyatning qiymatiga tenglashtiramiz. Bu obyektda `city` nomli xususiyat yo'q, shuning uchun `city` o'zgaruvchisi `undefined` qiymatiga ega.

E'tibor bering, biz `person` obyektining o'ziga _havola qilmayapmiz_! Biz shunchaki `city` o'zgaruvchisini `person` obyektidagi `city` xususiyatining joriy qiymatiga tenglashtiramiz.

Keyin biz `city` ni `"Amsterdam"` stringiga tenglashtiramiz. Bu person obyektini o'zgartirmaydi: bu obyektga havola yo'q.

`person` obyektini chiqarganimizda, o'zgartirilmagan obyekt qaytariladi.

</p>
</details>

---

###### 84. Natija qanday bo'ladi?

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

`const` va `let` kalit so'zlari bilan o'zgaruvchilar \_blok doirasi_ga ega. Blok - bu jingalak qavslar (`{ }`) orasidagi hamma narsa. Bu holatda if/else operatorlarining jingalak qavslari. Siz o'zgaruvchini e'lon qilingan blokdan tashqarida havola qila olmaysiz, ReferenceError xatosi chiqariladi.

</p>
</details>

---

###### 85. Qanday ma'lumot chiqariladi?

```javascript
fetch("https://www.website.com/api/user/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
```

- A: `fetch` metodining natijasi.
- B: `fetch` metodining ikkinchi chaqiruvining natijasi.
- C: Oldingi `.then()` dagi callback funksiyaning natijasi.
- D: U doimo undefined bo'ladi.

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Ikkinchi `.then` dagi `res` ning qiymati oldingi `.then` ning qaytarilgan qiymatiga teng. Siz `.then` larni shunday zanjirlab borishingiz mumkin, bu yerda qiymat keyingi ishlovchiga uzatiladi.

</p>
</details>

---

###### 86. `hasName` ni `true` ga tenglashtirish uchun qaysi variant ishlatiladi, `true` ni argument sifatida uzata olmasangiz?

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

`!!name` bilan biz `name` ning qiymati truthy yoki falsy ekanini aniqlaymiz. Agar name truthy bo'lsa (buni tekshirmoqchimiz), `!name` `false` qaytaradi. `!false` (amalda `!!name` bu) `true` qaytaradi.

`hasName` ni `name` ga tenglashtirish orqali siz `hasName` ni `getName` funksiyasiga uzatgan qiymatga tenglashtirasiz, `true` boolean qiymatiga emas.

`new Boolean(true)` boolean qiymatning o'zi emas, balki obyekt wrapper qaytaradi.

`name.length` uzatilgan argumentning uzunligini qaytaradi, `true` ekanligini emas.

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

Stringning ma'lum indeksidagi belgini olish uchun kvadrat qavs yozuvidan foydalanishingiz mumkin. Stringdagi birinchi belgi 0 indeksga ega va hokazo. Bu holatda biz 0 indeksli elementni olmoqchimiz, ya'ni `"I"` belgisini, u chiqariladi.

E'tibor bering, bu usul IE7 va undan pastda qo'llab-quvvatlanmaydi. Bunday holda `.charAt()` dan foydalaning.

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

Siz standart parametrning qiymatini funksiyaning boshqa parametriga tenglashtira olasiz, agar ular standart parametrdan _oldin_ e'lon qilingan bo'lsa. Biz `sum` funksiyasiga `10` qiymatini uzatamiz. Agar `sum` funksiyasi faqat 1 ta argument qabul qilsa, bu `num2` qiymati uzatilmaganligini bildiradi va bu holatda `num1` ning qiymati uzatilgan `10` qiymatiga teng. `num2` ning standart qiymati `num1` ning qiymati, ya'ni `10`. `num1 + num2` `20` ni qaytaradi.

Agar siz standart parametrning qiymatini _keyin_ (o'ngda) e'lon qilingan parametrga tenglashtirmoqchi bo'lsangiz, parametrning qiymati hali ishga tushirilmagan va bu xatolikka olib keladi.

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
- D: `module.js` ning global obyekti

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`import * as name` sintaksisi bilan biz `module.js` faylidan _barcha eksportlarni_ `index.js` fayliga `data` nomli yangi obyekt sifatida import qilamiz. `module.js` faylida ikkita eksport bor: standart eksport va nomlangan eksport. Standart eksport `"Hello World"` stringini qaytaradigan funksiya, nomlangan eksport esa `"Lydia"` stringi qiymatiga ega `name` nomli o'zgaruvchi.

`data` obyekti standart eksport uchun `default` xususiyatiga ega, boshqa xususiyatlar nomlangan eksportlarning nomlari va ularning mos qiymatlariga ega.

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

Klasslar funksiya konstruktorlari uchun sintaktik shakar. `Person` klassining funksiya konstruktori sifatidagi ekvivalenti quyidagicha bo'ladi:

```javascript
function Person(name) {
  this.name = name;
}
```

Funksiya konstruktorini `new` bilan chaqirish `Person` ning instance (voris) yaratishiga olib keladi, `typeof` kalit so'zi instance uchun `"object"` qaytaradi. `typeof member` `"object"` qaytaradi.

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

`.push` usuli massivning o'zini emas, balki massivning _yangi uzunligini_ qaytaradi! `newList` ni `[1, 2, 3].push(4)` ga tenglashtirib, biz `newList` ni massivning yangi uzunligiga tenglashtiramiz: `4`.

Keyin biz `newList` da `.push` usulini ishlatishga harakat qilamiz. `newList` `4` raqamli qiymat bo'lgani uchun, biz `.push` usulini ishlatololmaymiz: TypeError xatosi chiqariladi.

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

Oddiy funksiyalar, masalan `giveLydiaPizza` funksiyasi, `constructor` xususiyatiga ega obyekt (prototype obyekt) bo'lgan `prototype` xususiyatiga ega. Biroq strelka funksiyalari, masalan `giveLydiaChocolate` funksiyasi, bu `prototype` xususiyatiga ega emas. `giveLydiaChocolate.prototype` orqali `prototype` xususiyatiga kirmoqchi bo'lganda `undefined` qaytariladi.

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

- A: `name` `Lydia` va `age` `21`
- B: `["name", "Lydia"]` va `["age", 21]`
- C: `["name", "age"]` va `undefined`
- D: `Error`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`Object.entries(person)` kalitlar va obyektlarni o'z ichiga olgan ichki massivlar massivini qaytaradi:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

`for-of` sikli yordamida biz massivning har bir elementi bo'ylab, bu holatda ichki massivlar bo'ylab takrorlashimiz mumkin. Biz `for-of` siklida `const [x, y]` yordamida ichki massivlarni darhol destrukturatsiya qila olamiz. `x` ichki massivdagi birinchi elementga teng, `y` ikkinchi elementga teng.

Birinchi ichki massiv `[ "name", "Lydia" ]`, `x` `"name"` ga teng, `y` `"Lydia"` ga teng, ular chiqariladi.
Ikkinchi ichki massiv `[ "age", 21 ]`, `x` `"age"` ga teng, `y` `21` ga teng, ular chiqariladi.

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

`...args` qolgan parametr (rest parameter). Qolgan parametrning qiymati barcha qolgan argumentlarni o'z ichiga olgan massiv bo'lib, **u faqat oxirgi parametr bo'lishi mumkin**! Bu misolda qolgan parametr ikkinchi parametr edi. Bu mumkin emas va sintaksis xatosini keltirib chiqaradi.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");
```

Yuqoridagi misol ishlaydi. Bu `[ 'banana', 'apple', 'orange', 'pear' ]` massivini qaytaradi.

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

- A: `a is bigger`, `6` va `b is bigger`, `3`
- B: `a is bigger`, `undefined` va `b is bigger`, `undefined`
- C: `undefined` va `undefined`
- D: `SyntaxError`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

JavaScript da biz nuqta-vergul (`;`) ni aniq yozishimiz shart emas, lekin JavaScript mexanizmi ularni operatorlardan keyin qo'shadi. Bu **Avtomatik Nuqta-vergul Kiritish** deb ataladi. Operator masalan o'zgaruvchilar yoki `throw`, `return`, `break` kabi kalit so'zlar bo'lishi mumkin.

Bu yerda biz `return` operatori va boshqa qiymat `a + b` ni _yangi qatorda_ yozdik. Biroq yangi qator bo'lgani uchun mexanizm bu qaytarmoqchi bo'lgan qiymat ekanini bilmaydi. Buning o'rniga u avtomatik ravishda `return` dan keyin nuqta-vergul qo'shdi. Siz buni quyidagicha ko'rishingiz mumkin:

```javascript
return;
a + b;
```

Bu `a + b` hech qachon bajarilmasligini anglatadi, chunki funksiya `return` kalit so'zidan keyin ishlashni to'xtatadi. Agar hech qanday qiymat qaytarilmasa, bu yerda bo'lgani kabi, funksiya `undefined` qaytaradi. E'tibor bering, `if/else` operatorlaridan keyin avtomatik kiritish yo'q!

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

Biz klasslarni boshqa klasslar/funksiya konstruktorlariga tenglashtira olamiz. Bu holatda biz `Person` ni `AnotherPerson` ga tenglashtiramiz. Bu konstruktordagi nom `Sarah`, shuning uchun yangi `Person` instancesi `member` dagi nom xususiyati `"Sarah"`.

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

- A: `{Symbol('a'): 'b'}` va `["{Symbol('a')"]`
- B: `{}` va `[]`
- C: `{ a: "b" }` va `["a"]`
- D: `{Symbol('a'): 'b'}` va `[]`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Symbol _sanab o'tilmaydi_. Object.keys usuli obyektdagi barcha _sanab o'tiladigan_ kalit xususiyatlarini qaytaradi. Symbol ko'rinmaydi va bo'sh massiv qaytariladi. Butun obyektni chiqarganda barcha xususiyatlar, hatto sanab o'tilmaydigan xususiyatlar ham ko'rinadi.

Bu symbolning ko'plab sifatlaridan biri: mutlaqo noyob qiymatni ifodalashdan tashqari (masalan bir xil obyektga xususiyat qo'shmoqchi bo'lgan 2 ta kutubxona bilan ishlayotganda tasodifiy nom to'qnashuvini oldini oladi), siz bu usul bilan obyektlarda xususiyatlarni "yashira" ham olasiz (garchi to'liq emas. Siz hali ham `Object.getOwnPropertySymbols()` usuli yordamida symbollarga kira olasiz).

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

- A: `[1, [2, 3, 4]]` va `SyntaxError`
- B: `[1, [2, 3, 4]]` va `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` va `{ name: "Lydia", age: 21 }`
- D: `Error` va `{ name: "Lydia", age: 21 }`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`getList` funksiyasi argument sifatida massiv qabul qiladi. `getList` funksiyasining qavslari orasida biz bu massivni darhol destrukturatsiya qilamiz. Siz buni quyidagicha ko'rishingiz mumkin:

`[x, ...y] = [1, 2, 3, 4]`

Qolgan parametr `...y` bilan biz barcha "qolgan" argumentlarni massivga joylashtiramiz. Bu holatda qolgan argumentlar `2`, `3` va `4`. `y` ning qiymati barcha qolgan parametrlarni o'z ichiga olgan massiv. Bu holatda `x` ning qiymati `1` ga teng, shuning uchun `[x, y]` ni chiqarganimizda `[1, [2, 3, 4]]` chiqariladi.

`getUser` funksiyasi obyekt qabul qiladi. Strelka funksiyalari bilan, agar biz faqat bitta qiymat qaytarsak, jingalak qavslarni yozishimiz shart emas. Biroq, agar siz strelka funksiyasidan darhol _obyekt_ qaytarmoqchi bo'lsangiz, uni qavslar orasiga yozishingiz kerak, aks holda ikki jingalak qavs orasidagi hamma narsa blok operatori sifatida talqin qilinadi. Bu holatda qavslar orasidagi kod to'g'ri JavaScript kodi emas, shuning uchun `SyntaxError` chiqariladi.

Quyidagi funksiya obyekt qaytargan bo'lardi:

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

`name` o'zgaruvchisi string qiymatini saqlaydi, bu funksiya emas, shuning uchun chaqirib bo'lmaydi.

TypeError qiymat kutilgan turda bo'lmagan paytda chiqariladi. JavaScript `name` ning funksiya bo'lishini kutdi, chunki biz uni chaqirmoqchi bo'ldik. Lekin u string edi, shuning uchun TypeError chiqariladi: name funksiya emas!

SyntaxError to'g'ri JavaScript bo'lmagan narsani yozganda chiqariladi, masalan `return` so'zini `retrun` deb yozganda.
ReferenceError JavaScript kirishga harakat qilayotgan qiymatga havola topa olmagan paytda chiqariladi.

</p>
</details>

---

###### 100. Natija qanday bo'ladi?

```javascript
// 🎉✨ Bu mening 100-savolim! ✨🎉

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

`[]` truthy qiymat. `&&` operatori bilan, agar chap tomon qiymati truthy bo'lsa, o'ng tomon qiymati qaytariladi. Bu holatda chap tomon qiymati `[]` truthy qiymat, shuning uchun `"Im"` qaytariladi.

`""` falsy qiymat. Agar chap tomon qiymati falsy bo'lsa, hech narsa qaytarilmaydi. `n't` qaytarilmaydi.

</p>
</details>

---

###### 101. Natija qanday bo'ladi?

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

`||` operatori bilan biz birinchi truthy operandni qaytara olamiz. Agar barcha qiymatlar falsy bo'lsa, oxirgi operand qaytariladi.

`(false || {} || null)`: bo'sh obyekt `{}` truthy qiymat. Bu birinchi (va yagona) truthy qiymat, u qaytariladi. `one` `{}` ga teng.

`(null || false || "")`: barcha operandlar falsy qiymatlar. Bu oxirgi operand `""` qaytarilishini anglatadi. `two` `""` ga teng.

`([] || 0 || "")`: bo'sh massiv `[]` truthy qiymat. Bu birinchi truthy qiymat, u qaytariladi. `three` `[]` ga teng.

</p>
</details>

---

###### 102. Natija qanday bo'ladi?

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

- A: `I have resolved!`, `second` va `I have resolved!`, `second`
- B: `second`, `I have resolved!` va `second`, `I have resolved!`
- C: `I have resolved!`, `second` va `second`, `I have resolved!`
- D: `second`, `I have resolved!` va `I have resolved!`, `second`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

Promise bilan biz asosan _men bu funksiyani bajarmoqchiman, lekin bu ancha vaqt olishi mumkin bo'lgani uchun uni hozircha chetga qo'yaman. Faqat ma'lum qiymat resolve (yoki reject) bo'lganda va call stack bo'sh bo'lganda, men bu qiymatni ishlatmoqchiman_ deymiz.

Biz bu qiymatni `.then` va `async` funksiyadagi `await` kalit so'zi bilan olishimiz mumkin. Garchi biz promise qiymatini `.then` va `await` ikkalasi bilan ham olsak, ular biroz boshqacha ishlaydi.

`firstFunction` da biz (qandaydir) myPromise funksiyasini u ishlayotgan paytda chetga qo'ydik, lekin boshqa kodni bajarishni davom ettirdik, bu holatda `console.log('second')`. Keyin funksiya `I have resolved` stringi bilan resolve bo'ldi, va callstack bo'sh ekanini ko'rgandan keyin chiqarildi.

`secondFunction` dagi await kalit so'zi bilan biz async funksiyaning bajarilishini qiymat resolve bo'lgunga qadar tom ma'noda to'xtatamiz, keyin keyingi qatorga o'tamiz.

Bu `myPromise` ning `I have resolved` qiymati bilan resolve bo'lishini kutganini anglatadi va faqat bu sodir bo'lgandan keyin keyingi qatorga o'tdik: `second` chiqarildi.

</p>
</details>

---

###### 103. Natija qanday bo'ladi?

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

`+` operatori faqat raqamli qiymatlarni qo'shish uchun emas, balki stringlarni birlashtirish uchun ham ishlatiladi. JavaScript mexanizmi bir yoki bir nechta qiymat raqam emasligini ko'rganda, raqamni stringga aylantiradi.

Birinchisi `1`, bu raqamli qiymat. `1 + 2` `3` raqamini qaytaradi.

Biroq ikkinchisi `"Lydia"` string. `"Lydia"` string va `2` raqam: `2` stringga aylantiriladi. `"Lydia"` va `"2"` birlashtiriladi va natijada `"Lydia2"` string hosil bo'ladi.

`{ name: "Lydia" }` obyekt. Na raqam, na obyekt string emas, shuning uchun ikkalasi ham stringga aylantiriladi. Oddiy obyektni stringga aylantirgan paytimizda u `"[object Object]"` bo'ladi. `"[object Object]"` va `"2"` birlashtirilganda `"[object Object]2"` bo'ladi.

</p>
</details>

---

###### 104. Natija qanday bo'ladi?

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Biz `Promise.resolve` ga har qanday turdagi qiymat berishimiz mumkin, promise yoki promise bo'lmagan. Usulning o'zi resolve qilingan qiymat bilan promise qaytaradi (`<fulfilled>`). Agar siz oddiy funksiya bersangiz, u oddiy qiymat bilan resolve qilingan promise bo'ladi. Agar siz promise bersangiz, u berilgan promise ning resolve qilingan qiymati bilan resolve qilingan promise bo'ladi.

Bu holatda biz faqat `5` raqamli qiymatini berdik. U `5` qiymati bilan resolve qilingan promise qaytaradi.

</p>
</details>

---

###### 105. Natija qanday bo'ladi?

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

Obyektlar havola bo'yicha uzatiladi. Obyektlarni qattiq tenglik (`===`) uchun tekshirgan paytimizda, biz ularning havolalarini solishtiramiz.

Biz `person2` ning standart qiymatini `person` obyektiga tenglashtirdik va `person1` qiymati sifatida `person` obyektini berdik.

Bu ikki qiymat ham xotiradagi bir xil joyga havola qilishini anglatadi, shuning uchun ular teng.

`else` operatoridagi kod bloki bajariladi va `They are the same!` chiqariladi.

</p>
</details>

---

###### 106. Natija qanday bo'ladi?

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

JavaScript da obyekt xususiyatlariga kirish uchun ikki usul bor: kvadrat qavs yozuvi yoki nuqta yozuvi. Bu misolda biz kvadrat qavs yozuvi (`colorConfig["colors"]`) o'rniga nuqta yozuvidan (`colorConfig.colors`) foydalanamiz.

Nuqta yozuvi bilan JavaScript obyektda aynan o'sha nomdagi xususiyatni topishga harakat qiladi. Bu misolda JavaScript `colorConfig` obyektida `colors` nomli xususiyatni topishga harakat qiladi. `colors` nomli xususiyat yo'q, shuning uchun bu `undefined` qaytaradi. Keyin biz `[1]` yordamida birinchi elementning qiymatiga kirishga harakat qilamiz. Biz buni `undefined` qiymatida qila olmaymiz, shuning uchun `TypeError` chiqariladi: `Cannot read property '1' of undefined`.

JavaScript operatorlarni talqin qiladi (yoki ajratadi). Kvadrat qavs yozuvidan foydalanganimizda, u birinchi ochilgan qavsni `[` ko'radi va yopilgan qavsni `]` topguncha davom etadi. Faqat shunda u operatorni baholaydi. Agar biz `colorConfig[colors[1]]` ishlatgan bo'lsak, u `colorConfig` obyektidagi `red` xususiyatining qiymatini qaytargan bo'lardi.

</p>
</details>

---

###### 107. Natija qanday bo'ladi?

```javascript
console.log("❤️" === "❤️");
```

- A: `true`
- B: `false`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Ichkarisida emojilar unicode hisoblanadi. Yurak emojisi uchun unicode `"U+2764 U+FE0F"`. Bular bir xil emojilar uchun doimo bir xil, shuning uchun biz ikkita teng stringni bir-biri bilan solishtiramiz va bu true qaytaradi.

</p>
</details>

---

###### 108. Qaysi usullar asl massivni o'zgartiradi?

```javascript
const emojis = ["✨", "🥑", "😍"];

emojis.map((x) => x + "✨");
emojis.filter((x) => x !== "🥑");
emojis.find((x) => x !== "🥑");
emojis.reduce((acc, cur) => acc + "✨");
emojis.slice(1, 2, "✨");
emojis.splice(1, 2, "✨");
```

- A: `Barchasi`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`splice` usuli bilan biz elementlarni o'chirish, almashtirish yoki qo'shish orqali asl massivni o'zgartiramiz. Bu holatda biz 1-indeksdan boshlab 2 ta elementni olib tashladik (`'🥑'` va `'😍'` ni olib tashladik) va o'rniga ✨ emojisini qo'shdik.

`map`, `filter` va `slice` yangi massiv qaytaradi, `find` element qaytaradi va `reduce` qisqartirilgan qiymat qaytaradi.

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

Biz `info` obyektidagi `favoriteFood` xususiyatining qiymatini pitsa emojisi bilan stringga, ya'ni `'🍕'` ga tenglashtirdik. String primitive ma'lumot turi. JavaScript da primitive ma'lumot turlari havola bo'yicha o'zaro ta'sir qilmaydi.

JavaScript da primitive ma'lumot turlari (obyekt bo'lmagan hamma narsa) _qiymat_ bo'yicha o'zaro ta'sir qiladi. Bu holatda biz `info` obyektidagi `favoriteFood` xususiyatining qiymatini `food` massivining birinchi elementining qiymatiga tenglashtirdik, bu holatda pitsa emojisi stringi (`'🍕'`). String primitive ma'lumot turi va qiymat bo'yicha o'zaro ta'sir qiladi.

Keyin biz `info` obyektidagi `favoriteFood` xususiyatining qiymatini o'zgartiramiz. `food` massivi o'zgarmagan, chunki `favoriteFood` ning qiymati massivdagi birinchi elementning qiymatining shunchaki _nusxasi_ edi va `food[0]` elementi bilan xotiradagi bir xil joyga havola qilmaydi. `food` ni chiqarganimizda, u hali ham asl massiv, ya'ni `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. Bu usul nima qiladi?

```javascript
JSON.parse();
```

- A: JSON ni JavaScript qiymatiga aylantiradi
- B: JavaScript obyektini JSON ga aylantiradi
- C: Har qanday JavaScript qiymatini JSON ga aylantiradi
- D: JSON ni faqat JavaScript obyektiga aylantiradi

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

`JSON.parse()` usuli bilan biz JSON stringini JavaScript qiymatiga aylantira olamiz.

```javascript
// Raqamni to'g'ri JSON ga stringify qilish, keyin JSON stringini JavaScript qiymatiga aylantirish:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Massiv qiymatini to'g'ri JSON ga stringify qilish, keyin JSON stringini JavaScript qiymatiga aylantirish:
const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Obyektni to'g'ri JSON ga stringify qilish, keyin JSON stringini JavaScript qiymatiga aylantirish:
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

Har bir funksiya o'zining _bajarilish kontekstiga_ (yoki _doirasiga_) ega. `getName` funksiyasi avval o'z konteksti (doirasi) ichida kirmoqchi bo'lgan `name` o'zgaruvchisi borligini ko'rish uchun qaraydi. Bu holatda `getName` funksiyasi o'zining `name` o'zgaruvchisiga ega: biz `name` o'zgaruvchisini `let` kalit so'zi bilan va `'Sarah'` qiymati bilan e'lon qilamiz.

`let` kalit so'zi bilan o'zgaruvchilar (`const` ham) hoisting qilinadi, lekin `var` dan farqli o'laroq, <i>initialize</i> qilinmaydi. Ular e'lon qilingan (initialize qilingan) qatorgacha kirish mumkin emas. Bu "temporal dead zone" deb ataladi. O'zgaruvchilar e'lon qilinishidan oldin ularga kirishga harakat qilganimizda, JavaScript `ReferenceError` chiqaradi.

Agar biz `getName` funksiyasi ichida `name` o'zgaruvchisini e'lon qilmagan bo'lsak, javascript mexanizmi _scope chain_ bo'ylab qidirgan bo'lardi. Tashqi doirada `Lydia` qiymatiga ega `name` nomli o'zgaruvchi bor. Bunday holda u `Lydia` ni chiqargan bo'lardi.

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

- A: `a` va `a`
- B: `a` va `undefined`
- C: `['a', 'b', 'c']` va `a`
- D: `a` va `['a', 'b', 'c']`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

`yield` kalit so'zi bilan biz generator funksiyasida qiymatlarni `yield` qilamiz. `yield*` kalit so'zi bilan biz boshqa generator funksiyasidan yoki takrorlanuvchi obyektdan (masalan, massiv) qiymatlarni yield qila olamiz.

`generatorOne` da biz `yield` kalit so'zi yordamida butun `['a', 'b', 'c']` massivini yield qilamiz. `one` dagi `next` usuli tomonidan qaytarilgan obyektdagi `value` xususiyatining qiymati (`one.next().value`) butun `['a', 'b', 'c']` massiviga teng.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

`generatorTwo` da biz `yield*` kalit so'zidan foydalanamiz. Bu `two` ning birinchi yield qilingan qiymati iteratordagi birinchi yield qilingan qiymatga teng ekanligini anglatadi. Iterator `['a', 'b', 'c']` massivi. Birinchi yield qilingan qiymat `a`, shuning uchun birinchi marta `two.next().value` ni chaqirganimizda `a` qaytariladi.

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

Template literal ichidagi ifodalar avval baholanadi. Bu string ifodaning qaytarilgan qiymatini o'z ichiga olishini anglatadi, bu holatda darhol chaqirilgan funksiya `(x => x)('I love')`. Biz `'I love'` qiymatini `x => x` strelka funksiyasiga argument sifatida uzatamiz. `x` `'I love'` ga teng, bu qaytariladi. Natijada `I love to program` hosil bo'ladi.

</p>
</details>

---

###### 114. Nima sodir bo'ladi?

```javascript
let config = {
  alert: setInterval(() => {
    console.log("Alert!");
  }, 1000),
};

config = null;
```

- A: `setInterval` callback chaqirilmaydi
- B: `setInterval` callback bir marta chaqiriladi
- C: `setInterval` callback har soniyada chaqirilishda davom etadi
- D: Biz hech qachon `config.alert()` ni chaqirmadik, config `null`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Odatda obyektlarni `null` ga tenglashtirgan paytimizda, o'sha obyektlar _garbage collect_ qilinadi, chunki bu obyektga endi havola yo'q. Biroq `setInterval` ichidagi callback funksiya strelka funksiya bo'lgani uchun (`config` obyektiga bog'langani uchun), callback funksiya hali ham `config` obyektiga havolaga ega.
Havola mavjud ekan, obyekt garbage collect qilinmaydi.
Bu interval bo'lgani uchun, `config` ni `null` ga o'rnatish yoki `config.alert` ni `delete` qilish interval ni garbage-collect qilmaydi, shuning uchun interval hali ham chaqiriladi.
Uni xotiradan o'chirish uchun `clearInterval(config.alert)` bilan tozalanishi kerak.
Tozalanmagani uchun, `setInterval` callback funksiyasi har 1000ms (1s) da chaqirilishda davom etadi.

</p>
</details>

---

###### 115. Qaysi usul(lar) `'Hello world!'` qiymatini qaytaradi?

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
- C: 2 va 3
- D: Barchasi

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

`set` usuli yordamida kalit/qiymat juftligini qo'shgan paytimizda, kalit `set` funksiyasiga uzatilgan birinchi argumentning qiymati bo'ladi va qiymat `set` funksiyasiga uzatilgan ikkinchi argument bo'ladi. Bu holatda kalit `() => 'greeting'` _funksiya_ va qiymat `'Hello world'`. `myMap` endi `{ () => 'greeting' => 'Hello world!' }`.

1 noto'g'ri, chunki kalit `'greeting'` emas, balki `() => 'greeting'`.
3 noto'g'ri, chunki biz `get` usuliga parametr sifatida uzatish orqali yangi funksiya yaratmoqdamiz. Obyektlar _havola_ bo'yicha o'zaro ta'sir qiladi. Funksiyalar obyekt bo'lgani uchun, ikkita funksiya hech qachon qattiq teng emas, agar ular bir xil bo'lsa ham: ular xotiradagi turli joylarga havolaga ega.

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

`changeAge` va `changeAgeAndName` funksiyalarining ikkalasi ham standart parametrga ega, ya'ni _yangi_ yaratilgan obyekt `{ ...person }`. Bu obyekt `person` obyektidagi barcha kalit/qiymatlarning nusxalariga ega.

Avval biz `changeAge` funksiyasini chaqiramiz va unga argument sifatida `person` obyektini uzatamiz. Bu funksiya `age` xususiyatining qiymatini 1 ga oshiradi. `person` endi `{ name: "Lydia", age: 22 }`.

Keyin biz `changeAgeAndName` funksiyasini chaqiramiz, lekin parametr uzatmaymiz. Buning o'rniga `x` ning qiymati _yangi_ obyektga teng: `{ ...person }`. Bu yangi obyekt bo'lgani uchun, u `person` obyektidagi xususiyatlarning qiymatlariga ta'sir qilmaydi. `person` hali ham `{ name: "Lydia", age: 22 }` ga teng.

</p>
</details>

---

###### 117. Quyidagi variantlardan qaysi biri `6` qaytaradi?

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

Spread operatori `...` bilan biz takrorlanuvchilarni alohida elementlarga _tarqata_ olamiz. `sumValues` funksiyasi uchta argument qabul qiladi: `x`, `y` va `z`. `...[1, 2, 3]` `1, 2, 3` ni beradi, buni biz `sumValues` funksiyasiga uzatamiz.

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

`+=` operandi bilan biz `num` ning qiymatini `1` ga oshiramiz. `num` ning boshlang'ich qiymati `1` edi, shuning uchun `1 + 1` bu `2`. `list` massividagi ikkinchi indeksdagi element 🥰, `console.log(list[2])` 🥰 ni chiqaradi.

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

Ixtiyoriy zanjir operatori `?.` bilan biz chuqurroq ichki qiymatlar to'g'ri yoki noto'g'ri ekanini aniq tekshirishimiz shart emas. Agar biz `undefined` yoki `null` qiymatida (_nullish_) xususiyatga kirishga harakat qilsak, ifoda qisqa tutashadi va `undefined` qaytaradi.

`person.pet?.name`: `person` da `pet` nomli xususiyat bor: `person.pet` nullish emas. Unda `name` nomli xususiyat bor va `Mara` qaytaradi.
`person.pet?.family?.name`: `person` da `pet` nomli xususiyat bor: `person.pet` nullish emas. `pet` da `family` nomli xususiyat _yo'q_, `person.pet.family` nullish. Ifoda `undefined` qaytaradi.
`person.getFullName?.()`: `person` da `getFullName` nomli xususiyat bor: `person.getFullName()` nullish emas va chaqirilishi mumkin, `Lydia Hallie` qaytaradi.
`member.getLastName?.()`: `member` o'zgaruvchisi mavjud emas, shuning uchun `ReferenceError` chiqariladi!

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

Biz if operatoriga `groceries.indexOf("banana")` shartini berdik. `groceries.indexOf("banana")` `0` qaytaradi, bu falsy qiymat. if operatoridagi shart falsy bo'lgani uchun, `else` blokidagi kod bajariladi va `We don't have to buy bananas!` chiqariladi.

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

`language` usuli `setter` hisoblanadi. Setterlar haqiqiy qiymatga ega emas, ularning maqsadi xususiyatlarni _o'zgartirish_. `setter` usulini chaqirganda `undefined` qaytariladi.

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

`typeof name` `"string"` qaytaradi. `"string"` stringi truthy qiymat, shuning uchun `!typeof name` `false` boolean qiymatini qaytaradi. `false === "object"` va `false === "string"` ikkalasi ham `false` qaytaradi.

(Agar biz turni ma'lum turga (teng yoki teng emas) tekshirmoqchi bo'lsak, `!typeof` o'rniga `!==` yozishimiz kerak edi)

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

`add` funksiyasi strelka funksiya qaytaradi, u strelka funksiya qaytaradi, u strelka funksiya qaytaradi (hali tushunasizmi?). Birinchi funksiya `4` qiymati bilan `x` argumentini qabul qiladi. Biz ikkinchi funksiyani chaqiramiz, u `5` qiymati bilan `y` argumentini qabul qiladi. Keyin biz uchinchi funksiyani chaqiramiz, u `6` qiymati bilan `z` argumentini qabul qiladi. Oxirgi strelka funksiya ichida `x`, `y` va `z` qiymatlariga kirishga harakat qilganimizda, JS mexanizmi `x` va `y` qiymatlarini topish uchun scope chain bo'ylab yuqoriga ko'tariladi. Bu `4` `5` `6` qaytaradi.

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

Generator funksiya `range` uzatilgan diapazon ichidagi har bir element uchun promise'lar bilan async obyekt qaytaradi: `Promise{1}`, `Promise{2}`, `Promise{3}`. Biz `gen` o'zgaruvchisini async obyektga tenglashtiramiz, keyin uni `for await ... of` sikli yordamida takrorlaymiz. Biz `item` o'zgaruvchisini qaytarilgan Promise qiymatlariga tenglashtiramiz: avval `Promise{1}`, keyin `Promise{2}`, keyin `Promise{3}`. Biz `item` qiymatini _kutayotganimiz_ uchun, resolve qilingan promise, promise'larning resolve qilingan _qiymatlari_ qaytariladi: `1`, `2`, keyin `3`.

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

`myFunc` argumenti sifatida `x`, `y` va `z` xususiyatlariga ega obyekt kutadi. Biz `x`, `y` va `z` xususiyatlari bilan bitta obyekt (`{x: 1, y: 2, z: 3}`) o'rniga faqat uchta alohida raqamli qiymat (1, 2, 3) uzatayotganimiz uchun, `x`, `y` va `z` ning standart qiymati `undefined` ga ega.

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

`Intl.NumberFormat` usuli bilan biz raqamli qiymatlarni istalgan localega formatlashimiz mumkin. Biz `130` raqamli qiymatini `en-US` localeda `mile-per-hour` da `unit` sifatida formatlaymiz, bu `130 mph` ni beradi. `300` raqamli qiymatini `en-US` localeda `USD` da `currency` sifatida formatlash `$300.00` ni beradi.

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

Obyektlarni destrukturatsiya qilish orqali biz o'ng tomondagi obyektdan qiymatlarni ajratishimiz va ajratilgan qiymatni chap tomondagi obyektda bir xil xususiyat nomiga assign qilishimiz mumkin. Bu holatda biz `"💀"` qiymatini `spookyItems[3]` ga assign qilmoqdamiz. Bu biz `spookyItems` massivini o'zgartirayotganimizni anglatadi, unga `"💀"` ni qo'shmoqdamiz. `spookyItems` ni chiqarganda `["👻", "🎃", "🕸", "💀"]` chiqariladi.

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

`Number.isNaN` usuli bilan siz uzatayotgan qiymat _raqamli qiymat_ ekanligini va `NaN` ga teng ekanligini tekshirishingiz mumkin. `name` raqamli qiymat emas, shuning uchun `Number.isNaN(name)` `false` qaytaradi. `age` raqamli qiymat, lekin `NaN` ga teng emas, shuning uchun `Number.isNaN(age)` `false` qaytaradi.

`isNaN` usuli bilan siz uzatayotgan qiymat raqam emasligini tekshirishingiz mumkin. `name` raqam emas, shuning uchun `isNaN(name)` true qaytaradi. `age` raqam, shuning uchun `isNaN(age)` `false` qaytaradi.

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

`const` kalit so'zi bilan e'lon qilingan o'zgaruvchilar initialize qilinishidan oldin havola qilinmaydi: bu _temporal dead zone_ deb ataladi. `getInfo` funksiyasida `randomValue` o'zgaruvchisi `getInfo` ning funksional doirasida joylashgan. `typeof randomValue` qiymatini chiqarmoqchi bo'lgan qatorda `randomValue` o'zgaruvchisi hali initialize qilinmagan: `ReferenceError` chiqariladi! Mexanizm scope chain bo'ylab pastga tushmadi, chunki biz `getInfo` funksiyasida `randomValue` o'zgaruvchisini e'lon qildik.

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

`try` blokida biz `myPromise` o'zgaruvchisining kutilgan qiymatini chiqarmoqdamiz: `"Woah some cool data"`. `try` blokida hech qanday xato chiqarilmagani uchun `catch` blokidagi kod ishlamaydi. `finally` blokidagi kod _doimo_ ishlaydi, `"Oh finally!"` chiqariladi.

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

`flat` usuli bilan biz yangi, tekislangan massiv yaratishimiz mumkin. Tekislangan massivning chuqurligi uzatayotgan qiymatga bog'liq. Bu holatda biz `1` qiymatini uzatdik (uni uzatishimiz shart emas edi, bu standart qiymat), ya'ni faqat birinchi chuqurlikdagi massivlar birlashtiriladi. Bu holatda `['🥑']` va `['✨', '✨', ['🍕', '🍕']]`. Bu ikki massivni birlashtirish `['🥑', '✨', '✨', ['🍕', '🍕']]` ni beradi.

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

`counterOne` `Counter` klassining instancesi. Counter klassi konstruktorida `count` xususiyati va `increment` usuliga ega. Avval biz `counterOne.increment()` ni chaqirish orqali `increment` usulini ikki marta chaqirdik. Hozirda `counterOne.count` `2`.

Keyin biz yangi `counterTwo` o'zgaruvchisi yaratamiz va uni `counterOne` ga tenglashtiramiz. Obyektlar havola bo'yicha o'zaro ta'sir qilgani uchun, biz shunchaki `counterOne` ishora qilayotgan xotiradagi bir xil joyga yangi havola yaratmoqdamiz. Xotirada bir xil joyi bo'lgani uchun, `counterTwo` havola qilayotgan obyektga kiritilgan har qanday o'zgarish `counterOne` ga ham tegishli. Hozirda `counterTwo.count` `2`.

Biz `counterTwo.increment()` ni chaqiramiz, bu `count` ni `3` ga o'rnatadi. Keyin biz `counterOne` dagi count ni chiqaramiz, bu `3` ni chiqaradi.

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

Avval biz `funcOne` ni chaqiramiz. `funcOne` ning birinchi qatorida biz _asinxron_ `setTimeout` funksiyasini chaqiramiz, undan callback Web API ga yuboriladi.

Keyin biz `myPromise` promise'ini chaqiramiz, bu _asinxron_ operatsiya.

Promise ham timeout ham asinxron operatsiyalar, funksiya promise'ni bajarish va `setTimeout` callback'ini boshqarish bilan band bo'lganda ishlashda davom etadi. Bu `Last line 1!` birinchi chiqarilishini anglatadi, chunki bu asinxron operatsiya emas.

Call stack hali bo'sh bo'lmagani uchun, `funcOne` dagi `setTimeout` funksiyasi va promise hali call stackga qo'shilmaydi.

`funcTwo` da `res` o'zgaruvchisi `Promise` qiymatini oladi, chunki `Promise.resolve(Promise.resolve('Promise'))` `Promise.resolve('Promise')` ga teng, chunki promise'ni resolve qilish shunchaki uning qiymatini resolve qiladi. Bu qatordagi `await` promise resolve bo'lgunga qadar funksiya bajarilishini to'xtatadi va keyin tugallanguncha sinxron ravishda ishlashda davom etadi, shuning uchun `Promise 2!` va keyin `Last line 2!` chiqariladi va `setTimeout` Web API ga yuboriladi.

Keyin call stack bo'sh. Promise'lar _microtask_ bo'lgani uchun call stack bo'sh bo'lganda ular birinchi resolve qilinadi, shuning uchun `Promise 1!` chiqariladi.

Endi `funcTwo` call stack dan chiqgani uchun call stack bo'sh. Navbatda kutayotgan callback'lar (`funcOne` dan `() => console.log("Timeout 1!")` va `funcTwo` dan `() => console.log("Timeout 2!")`) call stack ga birin-ketin qo'shiladi. Birinchi callback `Timeout 1!` ni chiqaradi va stack dan chiqariladi. Keyin ikkinchi callback `Timeout 2!` ni chiqaradi va stack dan chiqariladi.

</p>
</details>

---

###### 134. `index.js` dan `sum.js` dagi `sum` ni qanday chaqirishimiz mumkin?

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
- D: Default `*` bilan import qilinmaydi, faqat nomlangan eksportlar

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Yulduzcha `*` bilan biz o'sha fayldan barcha eksport qilingan qiymatlarni, default ham nomlangan ham import qilamiz. Agar bizda quyidagi fayl bo'lsa:

```javascript
// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";

// index.js
import * as info from "./info";
console.log(info);
```

Quyidagi chiqariladi:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

`sum` misoli uchun bu import qilingan `sum` qiymati quyidagicha ko'rinishini anglatadi:

```javascript
{ default: function sum(x) { return x + x } }
```

Biz bu funksiyani `sum.default` ni chaqirish orqali chaqirishimiz mumkin.

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
- D: Hech narsa chiqarilmaydi

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Proxy obyekti bilan biz ikkinchi argument sifatida uzatayotgan obyektga maxsus xatti-harakatni qo'shishimiz mumkin. Bu holatda biz ikkita xususiyatni o'z ichiga olgan `handler` obyektini uzatamiz: `set` va `get`. `set` xususiyat qiymatlarini _o'rnatganimizda_ chaqiriladi, `get` xususiyat qiymatlarini _olganimizda_ (kirganimizda) chaqiriladi.

Birinchi argument bo'sh obyekt `{}`, bu `person` ning qiymati. Bu obyektga `handler` obyektida belgilangan maxsus xatti-harakat qo'shiladi. Agar biz `person` obyektiga xususiyat qo'shsak, `set` chaqiriladi. Agar biz `person` obyektidagi xususiyatga kirsak, `get` chaqiriladi.

Avval biz proxy obyektiga yangi `name` xususiyatini qo'shdik (`person.name = "Lydia"`). `set` chaqiriladi va `"Added a new property!"` chiqaradi.

Keyin biz proxy obyektidagi xususiyat qiymatiga kirdik, handler obyektidagi `get` xususiyati chaqirildi. `"Accessed a property!"` chiqariladi.

</p>
</details>

---

###### 136. Quyidagilardan qaysi biri `person` obyektini o'zgartiradi?

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

`Object.seal` bilan biz yangi xususiyatlarning _qo'shilishini_ yoki mavjud xususiyatlarning _o'chirilishini_ oldini olishimiz mumkin.

Biroq siz hali ham mavjud xususiyatlarning qiymatini o'zgartirishingiz mumkin.

</p>
</details>

---

###### 137. Quyidagilardan qaysi biri `person` obyektini o'zgartiradi?

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

`Object.freeze` usuli obyektni _muzlatadi_. Hech qanday xususiyat qo'shilmaydi, o'zgartirilmaydi yoki o'chirilmaydi.

Biroq u obyektni faqat _yuzaki_ muzlatadi, ya'ni obyektdagi faqat _bevosita_ xususiyatlar muzlatiladi. Agar xususiyat boshqa obyekt bo'lsa, bu holatda `address` kabi, o'sha obyektdagi xususiyatlar muzlatilmaydi va o'zgartirilishi mumkin.

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

- A: `2` `4` va `3` `6`
- B: `2` `NaN` va `3` `NaN`
- C: `2` `Error` va `3` `6`
- D: `2` `4` va `3` `Error`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: A

Avval biz hech qanday argument uzatmasdan `myFunc()` ni chaqirdik. Argumentlar uzatmaganimiz uchun `num` va `value` o'zlarining standart qiymatlarini oldi: num `2`, va `value` `add` funksiyasining qaytarilgan qiymati. `add` funksiyasiga biz `num` ni argument sifatida uzatamiz, u `2` qiymatiga ega edi. `add` `4` qaytaradi, bu `value` ning qiymati.

Keyin biz `myFunc(3)` ni chaqirdik va `num` argumenti uchun `3` qiymatini uzatdik. Biz `value` uchun argument uzatmadik. `value` argumenti uchun qiymat uzatmaganimiz uchun, u standart qiymatni oldi: `add` funksiyasining qaytarilgan qiymati. `add` ga biz `3` qiymatiga ega `num` ni uzatamiz. `add` `6` qaytaradi, bu `value` ning qiymati.

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

ES2020 da biz `#` yordamida klasslarda private o'zgaruvchilar qo'shishimiz mumkin. Bu o'zgaruvchilarga klass tashqarisidan kira olmaymiz. `counter.#number` ni chiqarishga harakat qilganimizda SyntaxError chiqariladi: biz unga `Counter` klassi tashqarisidan kira olmaymiz!

</p>
</details>

---

###### 140. Nima yetishmayapti?

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
    // ✨ BU YERDA NIMADIR YETISHMAYAPTI ✨
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

`teams` massividagi har bir elementdagi `members` bo'ylab takrorlash uchun biz `teams[i].members` ni `getMembers` generator funksiyasiga uzatishimiz kerak. Generator funksiya generator obyekt qaytaradi. Bu generator obyektidagi har bir element bo'ylab takrorlash uchun biz `yield*` dan foydalanishimiz kerak.

Agar biz `yield`, `return yield` yoki `return` yozgan bo'lsak, `next` usulini birinchi marta chaqirganimizda butun generator funksiya qaytarilgan bo'lardi.

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

`addHobby` funksiyasi ikkita argument qabul qiladi: `hobby` va `hobbies`, standart qiymat sifatida `person` obyektidagi `hobbies` massivi.

Avval biz `addHobby` funksiyasini chaqiramiz va `hobby` uchun `"running"` qiymatini, `hobbies` uchun bo'sh massivni uzatamiz. Bo'sh massivni `hobbies` qiymati sifatida uzatganimiz uchun `"running"` bu bo'sh massivga qo'shiladi.

Keyin biz `addHobby` funksiyasini chaqiramiz va `hobby` uchun `"dancing"` qiymatini uzatamiz. Biz `hobbies` uchun qiymat uzatmadik, shuning uchun u standart qiymatni oladi - `person` obyektidagi `hobbies` xususiyati. Biz `dancing` hobbisini `person.hobbies` massiviga push qilamiz.

Oxirida biz `addHobby` funksiyasini chaqiramiz va `hobby` uchun `"baking"` qiymatini, `hobbies` uchun `person.hobbies` massivini uzatamiz. Biz `baking` hobbisini `person.hobbies` massiviga push qilamiz.

`dancing` va `baking` ni push qilgandan keyin `person.hobbies` ning qiymati `["coding", "dancing", "baking"]` bo'ladi.

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
- D: Hech narsa, biz hech qanday usul chaqirmadik

<details><summary><b>Javob</b></summary>
<p>

#### Javob: B

Biz `Flamingo` klassining instancesi bo'lgan `pet` o'zgaruvchisini yaratamiz. Bu instanceni yaratganimizda `Flamingo` dagi `constructor` chaqiriladi. Avval `"I'm pink. 🌸"` chiqariladi, keyin `super()` ni chaqiramiz. `super()` ota klassi `Bird` ning konstruktorini chaqiradi. `Bird` dagi konstruktor chaqiriladi va `"I'm a bird. 🦢"` ni chiqaradi.

</p>
</details>

---

###### 143. Qaysi variantlar xatoga olib keladi?

```javascript
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 va 2
- C: 3 va 4
- D: 3

<details><summary><b>Javob</b></summary>
<p>

#### Javob: D

`const` kalit so'zi shunchaki o'sha o'zgaruvchining qiymatini qayta _e'lon qila olmasligimizni_ anglatadi, u _faqat o'qish uchun_. Biroq qiymatning o'zi o'zgarmas emas. `emojis` massividagi xususiyatlar o'zgartirilishi mumkin, masalan yangi qiymatlar push qilish, ularni splice qilish yoki massiv uzunligini 0 ga o'rnatish orqali.

</p>
</details>

---

###### 144. `[...person]` natijasida `["Lydia Hallie", 21]` olish uchun `person` obyektiga nimani qo'shishimiz kerak?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: Hech narsa, obyektlar sukut bo'yicha takrorlanuvchi
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>Javob</b></summary>
<p>

#### Javob: C

Obyektlar sukut bo'yicha takrorlanuvchi emas. Takrorlanuvchi protocol mavjud bo'lsa, takrorlanuvchi hisoblanadi. Buni iterator belgisi `[Symbol.iterator]` qo'shish orqali qo'lda qo'shishimiz mumkin, bu generator obyekt qaytarishi kerak, masalan uni generator funksiya `*[Symbol.iterator]() {}` qilish orqali. Bu generator funksiya `["Lydia Hallie", 21]` massivini qaytarishni xohlasak `person` obyektining `Object.values` ini yield qilishi kerak: `yield* Object.values(this)`.

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

`forEach` sikli ichidagi `if` sharti `num` ning qiymati truthy yoki falsy ekanligini tekshiradi. `nums` massividagi birinchi raqam `0` bo'lgani uchun, bu falsy qiymat, `if` operatorining kod bloki bajarilmaydi. `count` faqat `nums` massividagi boshqa 3 ta raqam uchun oshiriladi: `1`, `2` va `3`. `count` 3 marta 1 ga oshirilgani uchun `count` ning qiymati `3`.

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

`?` bizga obyektlar ichidagi chuqurroq joylashgan xususiyatlarga ixtiyoriy ravishda kirish imkonini beradi. Biz `fruits` massivining 1-indeksidagi subarray ning 1-indeksidagi elementni chiqarishga harakat qilmoqdamiz. Agar `fruits` massivida 1-indeksda subarray mavjud bo'lmasa, u shunchaki `undefined` qaytaradi. Agar `fruits` massivida 1-indeksda subarray mavjud bo'lsa, lekin bu subarray da 1-indeksda element bo'lmasa, u ham `undefined` qaytaradi.

Avval biz `[['🍊', '🍌'], ['🍍']]` dan `['🍍']` subarray dagi ikkinchi elementni chiqarishga harakat qilmoqdamiz. Bu subarray faqat bitta elementga ega, ya'ni 1-indeksda element yo'q va `undefined` qaytaradi.

Keyin biz `getFruits` funksiyasini argument uzatmasdan chaqirmoqdamiz, ya'ni `fruits` ning qiymati sukut bo'yicha `undefined`. `fruits` ning 1-indeksidagi elementni shartli zanjirlaganimiz uchun u `undefined` qaytaradi, chunki bu 1-indeksdagi element mavjud emas.

Oxirida biz `['🍍'], ['🍊', '🍌']` dan `['🍊', '🍌']` subarray dagi ikkinchi elementni chiqarishga harakat qilmoqdamiz. Bu subarray dagi 1-indeksdagi element `🍌` bo'lib, u chiqariladi.

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

Biz `calc` o'zgaruvchisini `Calc` klassining yangi instancesiga tenglashtiramiz. Keyin biz `Calc` ning yangi instancesini yaratamiz va bu instanceda `increase` usulini chaqiramiz. count xususiyati `Calc` klassining konstruktorida joylashgani uchun, count xususiyati `Calc` ning prototype unda baham ko'rilmaydi. Bu calc ishora qilayotgan instance uchun count qiymati yangilanmaganligini anglatadi, count hali ham `0`.

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

`updateUser` funksiyasi user da `email` va `password` xususiyatlarining qiymatlarini yangilaydi, agar ularning qiymatlari funksiyaga uzatilsa, keyin funksiya `user` obyektini qaytaradi. `updateUser` funksiyasining qaytarilgan qiymati `user` obyekti, ya'ni updatedUser qiymati `user` ishora qilayotgan bir xil `user` obyektiga havola. `updatedUser === user` `true` ga teng.

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

Avval biz fruit massivida `slice` usulini chaqiramiz. slice usuli asl massivni o'zgartirmaydi, lekin massivdan kesib olingan qiymatni qaytaradi: banana emojisi.
Keyin biz fruit massivida `splice` usulini chaqiramiz. splice usuli asl massivni o'zgartiradi, ya'ni fruit massivi endi `['🍊', '🍎']` dan iborat.
Oxirida biz `fruit` massivida `unshift` usulini chaqiramiz, bu asl massivni berilgan qiymatni, bu holatda '🍇' ni massivning birinchi elementi sifatida qo'shish orqali o'zgartiradi. Fruit massivi endi `['🍇', '🍊', '🍎']` dan iborat.

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

Obyekt kalitlari stringga aylantiriladi.

`dog` ning qiymati obyekt bo'lgani uchun `animals[dog]` aslida yangi obyektga teng `"object Object"` nomli yangi xususiyat yaratayotganimizni anglatadi. `animals["object Object"]` endi `{ emoji: "🐶", name: "Mara"}` ga teng.

`cat` ham obyekt, ya'ni `animals[cat]` aslida `animals["object Object"]` ning qiymatini yangi cat xususiyatlari bilan qayta yozayotganimizni anglatadi.

`animals[dog]` ni, yoki aslida `animals["object Object"]` ni chiqarganda, chunki `dog` obyektini stringga aylantirish `"object Object"` ni beradi, `{ emoji: "🐈", name: "Sara" }` qaytariladi.

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

`updateEmail` funksiyasi strelka funksiya bo'lib, `user` obyektiga bog'lanmagan. Bu `this` kalit so'zi `user` obyektiga ishora qilmasligini anglatadi, balki bu holatda global doiraga ishora qiladi. `user` obyekti ichidagi `email` qiymati yangilanmaydi. `user.email` qiymatini chiqarganda asl qiymat `my@email.com` qaytariladi.

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

`Promise.all` usuli uzatilgan promise'larni parallel ravishda bajaradi. Agar bitta promise muvaffaqiyatsiz bo'lsa, `Promise.all` usuli rad etilgan promise ning qiymati bilan _rad etadi_. Bu holatda `promise3` `"Third"` qiymati bilan rad etildi. Biz rad etilgan qiymatni `runPromises` chaqiruvida zanjirli `catch` usulida `runPromises` funksiyasi ichidagi har qanday xatolarni ushlash uchun ushlamoqdamiz. Faqat `"Third"` chiqariladi, chunki `promise3` bu qiymat bilan rad etildi.

</p>
</details>

---

###### 153. `{ name: "Lydia", age: 22 }` ni chiqarish uchun `method` ning qiymati nima bo'lishi kerak?

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

`fromEntries` usuli 2d massivni obyektga aylantiradi. Har bir subarray dagi birinchi element kalit bo'ladi, ikkinchi element qiymat bo'ladi. Bu holatda biz `keys` massivi bo'ylab map qilmoqdamiz, bu birinchi elementi joriy indeksdagi keys massividagi element, ikkinchi elementi joriy indeksdagi values massividagi element bo'lgan massiv qaytaradi.

Bu to'g'ri kalitlar va qiymatlarni o'z ichiga olgan subarrays massivini yaratadi, natijada `{ name: "Lydia", age: 22 }` hosil bo'ladi.

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

`address` ning standart qiymati bo'sh obyekt `{}`. `member` o'zgaruvchisini `createMember` funksiyasi tomonidan qaytarilgan obyektga tenglashtirganimizda, biz address uchun qiymat uzatmadik, ya'ni address ning qiymati standart bo'sh obyekt `{}`. Bo'sh obyekt truthy qiymat, ya'ni `address ? address : null` shartli ifodaning sharti `true` qaytaradi. address ning qiymati bo'sh obyekt `{}`.

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

`if` operatori ichidagi shart `!typeof randomValue` ning qiymati `"string"` ga teng ekanligini tekshiradi. `!` operatori qiymatni boolean qiymatga aylantiradi. Agar qiymat truthy bo'lsa, qaytarilgan qiymat `false` bo'ladi, agar qiymat falsy bo'lsa, qaytarilgan qiymat `true` bo'ladi. Bu holatda `typeof randomValue` ning qaytarilgan qiymati truthy qiymat `"number"`, ya'ni `!typeof randomValue` ning qiymati `false` boolean qiymati.

`!typeof randomValue === "string"` doimo false qaytaradi, chunki biz aslida `false === "string"` ni tekshirmoqdamiz. Shart `false` qaytargani uchun `else` operatorining kod bloki bajariladi va `Yay it's a string!` chiqariladi.

</p>
</details>
