<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>سوالات جاوا اسکریپت</h1>
</div>

> [!NOTE]  
> این repo در سال 2019 ایجاد شد و سوالات ارائه شده در اینجا بر اساس نحو و رفتار جاوا اسکریپت در آن زمان است. از آنجا که جاوا اسکریپت یک زبان مداوم در حال تکامل است، ویژگی های زبان جدید وجود دارد که توسط سوالات در اینجا پوشش داده نمی شود.

---

<p align="center">
از پایه تا پیشرفته: تست کنید که چگونه جاوا اسکریپت را می شناسید، کمی دانش خود را تازه کنید یا برای مصاحبه برنامه نویسی خود آماده شوید! :muscle: :rocket: من این repo را به طور منظم با سوالات جدید به روز می کنم. پاسخ ها را در پاسخ اضافه کردم **بخش های سقوط** در زیر سوالات، به سادگی بر روی آنها کلیک کنید تا آن را گسترش دهید. فقط برای سرگرمی، خوش شانسی! :heart:</p>

<p align="center">احساس رایگان برای رسیدن به من</p>

<p align="center">
  <a href="https://www.instagram.com/theavocoder">اینستاگرام</a> || <a href="https://www.twitter.com/lydiahallie">توییتر</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.io/">وبلاگ</a>
</p>

| احساس رایگان برای استفاده از آنها در یک پروژه _واقعا_ قدردانی از یک مرجع به این repo، من سوالات و توضیحات ایجاد می کنم (بله من غمگین هستم) و جامعه به من کمک می کند تا آن را حفظ و بهبود بخشد! ممنون و تفریح کنید! |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

<details><summary><strong> مشاهده 22 ترجمه موجود 🇸🇦🇪🇬🇮🇷🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇮🇹🇯🇵🇰🇷🇳🇱🇵🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼🇽🇰</strong></summary>
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
- [🇷🇴 Română](../ro-RO/README.ro.md)
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

###### 1. خروجی چیست؟?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` و `undefined`
- B: `Lydia` و `ReferenceError`
- C: `ReferenceError` و `21`
- D: `undefined` و `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

در داخل تابع، ما ابتدا اعلام می کنیم `name` متغیر با `var` کلمه کلیدی این بدان معنی است که متغیر بالا می رود (فضای خیالی در طول مرحله ایجاد تنظیم می شود) با ارزش پیش فرض از آن `undefined`تا زمانی که به خط برسیم که متغیر را تعریف کنیم. ما متغیر را هنوز در خط تعریف نکرده ایم که سعی می کنیم آن را وارد کنیم `name` متغیر، بنابراین هنوز هم ارزش `undefined`.

متغیرهای با `let` کلمه کلیدی (و `const`بالا می رود، اما برخلاف `var`, دریافت نکنید <i>اولیه</i>آنها قبل از اینکه خط را اعلام کنیم، قابل دسترسی نیستند. این منطقه را "منطقه مرگ گاه" می نامند. هنگامی که سعی می کنیم قبل از اعلام آنها به متغیرهای دسترسی پیدا کنیم، جاوا اسکریپت یک بار پرتاب می کند `ReferenceError`.

</p>
</details>

---

###### 2. خروجی چیست؟?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` و `0 1 2`
- B: `0 1 2` و `3 3 3`
- C: `3 3 3` و `0 1 2`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

به دلیل صف رویداد در جاوا اسکریپت، `setTimeout` تابع callback نامیده می شود _بعد از بعد_ حلقه اعدام شده است. از آنجا که متغیر `i` در حلقه اول با استفاده از `var` کلمه کلیدی، این ارزش جهانی بود. در طول حلقه، ما ارزش را افزایش دادیم `i` سوگند `1` هر بار با استفاده از اپراتور غیر قانونی `++`در زمان `setTimeout` تابع callback فراخوانی شد،, `i` برابر با `3` در مثال اول.

در حلقه دوم، متغیر `i` اعلام شده با استفاده از `let` کلمه کلیدی: متغیرهای اعلام شده با `let` (و) `const`کلمه کلیدی مسدود شده است (یک بلوک بین هر چیزی بین یک بلوک است) `{ }`) در هر مرحله،, `i` ارزش جدیدی خواهد داشت و هر مقدار در داخل حلقه قرار می گیرد.

</p>
</details>

---

###### 3. خروجی چیست؟?

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

- A: `20` و `62.83185307179586`
- B: `20` و `NaN`
- C: `20` و `63`
- D: `NaN` و `63`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

توجه داشته باشید که ارزش `diameter` یک تابع منظم است، در حالی که ارزش `perimeter` یک تابع فلش است.

با فلش توابع، `this` کلمه کلیدی به محدوده فعلی اطراف آن، بر خلاف توابع منظم اشاره می کند! این بدان معنی است که وقتی ما تماس بگیریم `perimeter`به جسم شکل اشاره نمی کند، بلکه به محدوده اطراف آن (به عنوان مثال پنجره).

از آنجا که هیچ ارزشی وجود ندارد `radius` در محدوده تابع فلش،, `this.radius` بازگشت `undefined` و هنگامی که `2 * Math.PI`نتایج `NaN`.

</p>
</details>

---

###### 4. خروجی چیست؟?

```javascript
+true;
!'Lydia';
```

- A: `1` و `false`
- B: `false` و `NaN`
- C: `false` و `false`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

به علاوه تلاش می کند تا یک اپرا را به یک عدد تبدیل کند. `true` است `1`و `false` است `0`.

رشته `'Lydia'` یک ارزش واقعی است. چیزی که ما در واقع می پرسیم این است: «آیا این ارزش واقعی است؟» این بازگشت `false`.

</p>
</details>

---

###### 5. کدام یک درست است؟?

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` معتبر نیست
- B: `mouse[bird.size]` معتبر نیست
- C: `mouse[bird["size"]]` معتبر نیست
- D: همه آنها معتبر هستند

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

در جاوا اسکریپت، تمام کلید های شی رشته هستند (مگر اینکه یک نماد باشد). حتی اگر ما نتوانیم _نوع_ آنها به عنوان رشته، همیشه به رشته های زیر کاپوت تبدیل می شوند.

کلمات جاوا اسکریپت (یا Unboxes) را تفسیر می کند. هنگامی که از نشانه گذاری براکت استفاده می کنیم، اولین براکت باز را می بیند `[` و ادامه می دهد تا زمانی که آن را پیدا کند `]`فقط پس از آن، این بیانیه را ارزیابی خواهد کرد.

`mouse[bird.size]`اول: ارزیابی `bird.size`که است، `"small"`. `mouse["small"]` بازگشت `true`

با این حال، با عدم تعهد، این اتفاق نمی افتد. `mouse` کلید به نام ندارد `bird`این بدان معنی است که `mouse.bird` است `undefined`سپس از ما درخواست می کنیم `size` استفاده از عدم تعهد: `mouse.bird.size`از `mouse.bird` است `undefined`ما در واقع درخواست می کنیم `undefined.size`این معتبر نیست و خطایی شبیه به خطایی شبیه به آن پرتاب خواهد کرد `Cannot read property "size" of undefined`.

</p>
</details>

---

###### 6. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

در جاوا اسکریپت، همه اشیاء با هم ارتباط برقرار می کنند _مرجع_ هنگامی که آنها را با یکدیگر برابر کنید.

اول، متغیر `c` یک ارزش برای یک شی دارد. بعداً، ما اختصاص می دهیم `d` با همان مرجع که `c` باید جسم داشته باشد.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

هنگامی که یک شی را تغییر می دهید، همه آنها را تغییر می دهید.

</p>
</details>

---

###### 7. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

`new Number()` یک سازنده تابع داخلی است. اگر چه به نظر می رسد مانند یک عدد، آن را واقعا یک شماره نیست: آن را یک دسته از ویژگی های اضافی و یک شی است.

وقتی استفاده می کنیم `==` اپراتور (Equality) تنها بررسی می کند که آیا دارای همان _ارزش_هر دو ارزش دارند `3`پس باز می گردد `true`.

اما وقتی از آن استفاده می کنیم `===` اپراتور (Strict برابری عملگر)، هر دو ارزش _و_ نوع باید یکسان باشد. نه: `new Number()` شماره نیست، بلکه یک شماره است **object**هر دو بازگشت `false.`

</p>
</details>

---

###### 8. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `colorChange` عملکرد ثابت است. روش های استاتیک طراحی شده اند تا فقط بر روی سازنده ای که در آن ایجاد شده اند زندگی کنند و نمی توانند به هر کودک یا موارد کلاسی منتقل شوند. از `freddie` یک نمونه از کلاس Chameleon است، تابع را نمی توان بر آن نامید. A A A A A `TypeError` پرتاب می شود.

</p>
</details>

---

###### 9. خروجی چیست؟?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

این موضوع را وارد می کند، زیرا ما فقط یک جسم خالی را بر روی جسم جهانی ایجاد کردیم! وقتی اشتباه می کنیم `greeting` مانند `greetign`در واقع مترجم JS این را دید:

1. `global.greetign = {}` در Node.js
2. `window.greetign = {}`, `frames.greetign = {}` و `self.greetign` در مرورگرها.
3. `self.greetign` در کارکنان وب.
4. `globalThis.greetign` در تمام محیط ها.

برای جلوگیری از این، می توانیم از آن استفاده کنیم `"use strict"`این اطمینان حاصل می کند که شما قبل از تنظیم آن با هر چیزی یک متغیر را اعلام کرده اید.

</p>
</details>

---

###### 10. چه اتفاقی می افتد وقتی این کار را انجام می دهیم؟?

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: هیچ چیز، این کاملا خوب است!
- B: `SyntaxError`شما نمی توانید خواص را به این روش اضافه کنید.
- C: `"Woof"` وارد می شود.
- D: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

این در جاوا اسکریپت امکان پذیر است، زیرا توابع اشیاء هستند! (همه چیز غیر از انواع ابتدایی، اشیاء هستند)

یک تابع یک نوع خاص از جسم است. کدی که خودتان می نویسید تابع واقعی نیست. تابع یک شی با خواص است. این اموال قابل اعتماد است.

</p>
</details>

---

###### 11. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

در جاوا اسکریپت، توابع اشیاء هستند و بنابراین، روش `getFullName` به خود تابع سازنده اضافه می شود. به همین دلیل می توانیم تماس بگیریم `Person.getFullName()`اما، اما `member.getFullName` پرتاب یک `TypeError`. 

اگر می خواهید یک روش برای در دسترس همه موارد شی، شما باید آن را به اموال نمونه اولیه اضافه کنید:

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

</p>
</details>

---

###### 12. خروجی چیست؟?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` و `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` و `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` و `{}`
- D: `Person {firstName: "Lydia", lastName: "Hallie"}` و `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

برای `sarah`ما استفاده نکردیم `new` کلمه کلیدی هنگام استفاده `new`, `this` به جسم خالی جدیدی که ایجاد می کنیم اشاره می کنیم. اما اگر اضافه نکنید `new`, `this` اشاره به **اعتراض جهانی**!

گفتیم: `this.firstName` برابر برابر با `"Sarah"` و `this.lastName` برابر برابر با `"Smith"`آنچه در واقع انجام دادیم، تعریف کردن است `global.firstName = 'Sarah'` و `global.lastName = 'Smith'`. `sarah` خود چپ است `undefined`از آنجایی که ما ارزش را از آن باز نمی گردانیم `Person` تابع.

</p>
</details>

---

###### 13. سه مرحله انتشار رویداد چیست؟?

- A: هدف > برچسب ها: Bubbling
- B: برچسب ها: Bubbling > هدف > Caping
- C: هدف > برچسب ها: Bubbling > Caping
- D: » Caping > هدف > Bubbling

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

در طول **ثبت** مرحله، این رویداد از طریق عناصر جد به عنصر هدف می رود. سپس به آن می رسد **هدف** عنصر، و **bubbling** شروع کنید.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. همه چیز نمونه های اولیه دارد.

- A: حقیقت واقعی
- B: دروغ دروغین

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

همه اشیاء نمونه های اولیه دارند، به جز برای **پایه object**جسم پایه شی است که توسط کاربر ایجاد شده است یا یک شی که با استفاده از آن ایجاد می شود `new` کلمه کلیدی شیء پایه دسترسی به برخی از روش ها و خواص، مانند `.toString`به همین دلیل است که می توانید از روش های جاوا اسکریپت داخلی استفاده کنید! همه این روش ها در نمونه اولیه در دسترس هستند. اگر چه جاوا اسکریپت نمی تواند آن را به طور مستقیم بر روی جسم شما پیدا کند، آن را به زنجیره نمونه اولیه می رود و آن را پیدا می کند، که آن را برای شما قابل دسترس می کند.

</p>
</details>

---

###### 15. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

جاوا اسکریپت یک **dynamic typed language**ما مشخص نمی کنیم که چه نوع متغیرهای خاصی هستند. ارزش ها را می توان به طور خودکار به نوع دیگری تبدیل کرد بدون اینکه بدانید، که نامیده می شود _اجبار نوع ضمنی_. **Coercion** تبدیل از یک نوع به یک دیگر.

در این مثال، جاوا اسکریپت عدد را تبدیل می کند `1` به یک رشته، به منظور عملکرد برای ایجاد حس و بازگشت یک ارزش. در طول اضافه کردن یک نوع عددی (`1`و نوع رشته (`'2'`تعداد به عنوان یک رشته درمان می شود. ما می توانیم رشته هایی مانند `"Hello" + "World"`بنابراین آنچه در اینجا اتفاق می افتد، `"1" + "2"` آنچه بازگشت `"12"`.

</p>
</details>

---

###### 16. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The **postfix** اپراتور غیر قانونی `++`:

1. بازگشت ارزش (این بازگشت) `0`)
2. ارزیابی ارزش (شماره در حال حاضر است `1`)

The **پیشوند** اپراتور غیر قانونی `++`:

1. ارزیابی ارزش (شماره در حال حاضر است `2`)
2. بازگشت ارزش (این بازگشت) `2`)

این بازگشت `0 2 2`.

</p>
</details>

---

###### 17. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

اگر از قالب های برچسب خورده استفاده می کنید، ارزش استدلال اول همیشه یک آرایه از ارزش های رشته است. استدلال های باقی مانده ارزش های بیانات تصویب شده را به دست می آورند!

</p>
</details>

---

###### 18. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

هنگام تست تساوی، ابتدایی ها با آنها مقایسه می شوند _ارزش_در حالی که اشیاء با آنها مقایسه می شوند _مرجع_چک های جاوا اسکریپت اگر اشیاء مرجع به همان مکان در حافظه.

دو شی که ما در مقایسه با آن مقایسه می کنیم این را ندارند: شی که به عنوان یک پارامتر تصویب کردیم، اشاره به یک مکان مختلف در حافظه نسبت به آنچه که برای بررسی برابری استفاده کردیم، دارد.

به همین دلیل است که هر دو `{ age: 18 } === { age: 18 }` و `{ age: 18 } == { age: 18 }` بازگشت `false`.

</p>
</details>

---

###### 19. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

پارامتر استراحت (`...args`به ما اجازه می دهد تا همه استدلال های باقی مانده را در یک آرایه قرار دهیم. یک آرایه یک شی است، بنابراین `typeof args` بازگشت `"object"`

</p>
</details>

---

###### 20. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `"use strict"`شما می توانید مطمئن شوید که به طور تصادفی متغیرهای جهانی را اعلام نمی کنید. ما هرگز متغیر را اعلام نکردیم `age`و چون استفاده می کنیم `"use strict"`این یک خطای مرجع است. اگر استفاده نکردیم `"use strict"`این کار می کرد، از آنجا که اموال `age` به جسم جهانی اضافه می شد.

</p>
</details>

---

###### 21. ارزش چیست `sum`?

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

`eval` ارزیابی کد که به عنوان یک رشته تصویب می شود. اگر این یک بیان است، مانند این، بیان را ارزیابی می کند. بیان است `10 * 10 + 5`این عدد را برمی گرداند `105`.

</p>
</details>

---

###### 22. چه مدت در دسترس است؟?

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: تا ابد، داده ها گم نمی شوند.
- B: هنگامی که کاربر زبانه را ببندد.
- C: هنگامی که کاربر تمام مرورگر را ببندد، نه تنها تب.
- D: هنگامی که کاربر کامپیوتر خود را خاموش می کند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

داده های ذخیره شده در `sessionStorage` پس از بسته شدن برداشته می شود _tab_.

اگر استفاده می کردید `localStorage`داده ها برای همیشه وجود داشته اند، مگر برای مثال `localStorage.clear()` استفاده می شود.

</p>
</details>

---

###### 23. خروجی چیست؟?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `var` کلمه کلیدی، شما می توانید متغیرهای متعدد را با همان نام اعلام کنید. سپس متغیر آخرین ارزش را حفظ خواهد کرد.

شما نمی توانید این کار را با `let` یا `const` از آنجایی که آنها مسدود شده اند و بنابراین نمی توانند قرمز شوند.

</p>
</details>

---

###### 24. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

تمام کلید های شی (به استثنای نمادها) زیر کاپوت هستند، حتی اگر آن را به عنوان یک رشته تایپ نکنید. به همین دلیل است `obj.hasOwnProperty('1')` همچنین حقیقت دارد.

این کار را برای یک مجموعه انجام نمی دهد. وجود ندارد `'1'` در مجموعه ما: `set.has('1')` بازگشت `false`این نوع عددی دارد `1`, `set.has(1)` بازگشت `true`.

</p>
</details>

---

###### 25. خروجی چیست؟?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

اگر دو کلید با یک نام داشته باشید، کلید جایگزین خواهد شد. هنوز در جایگاه اول خود قرار دارد، اما با آخرین ارزش مشخص شده.

</p>
</details>

---

###### 26. زمینه اجرای جهانی جاوا اسکریپت دو چیز برای شما ایجاد می کند: شی جهانی و کلمه کلیدی "این".

- A: حقیقت واقعی
- B: دروغ دروغین
- C: بستگی دارد

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

زمینه اجرای پایه، زمینه اعدام جهانی است: این چیزی است که در همه جا در کد شما قابل دسترس است.

</p>
</details>

---

###### 27. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `continue` بیانیه حذف یک تکرار اگر یک وضعیت خاص بازگشت `true`.

</p>
</details>

---

###### 28. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

`String` یک سازنده داخلی است که می توانیم به آن اضافه کنیم. من فقط یک روش به نمونه اولیه آن اضافه کردم. رشته های اولیه به طور خودکار به یک شیء رشته تبدیل می شوند که توسط تابع نمونه اولیه رشته ایجاد می شود. بنابراین، تمام رشته ها (کلمات رشته ای) به این روش دسترسی دارند!

</p>
</details>

---

###### 29. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

کلید های شی به طور خودکار به رشته تبدیل می شوند. ما سعی می کنیم یک شی را به عنوان یک کلید برای اعتراض قرار دهیم `a`با ارزش `123`.

با این حال، هنگامی که ما یک شی را تنظیم می کنیم، آن را می شود `"[object Object]"`آنچه در اینجا می گوییم این است که `a["[object Object]"] = 123`سپس می توانیم دوباره همین کار را انجام دهیم. `c` یکی دیگر از چیزهایی است که ما به طور ضمنی آن را تقویت می کنیم. سپس،, `a["[object Object]"] = 456`.

سپس وارد می شویم `a[b]`که در واقع `a["[object Object]"]`ما فقط آن را تنظیم کردیم تا `456`پس باز می گردد `456`.

</p>
</details>

---

###### 30. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

ما یک `setTimeout` اول عمل کنید و آن را بخوانید. اما بالاخره آن را ثبت کرد.

این به این دلیل است که در مرورگرها، ما فقط موتور زمان اجرا نداریم، ما همچنین چیزی به نام یک چیز داریم `WebAPI`.. `WebAPI` به ما می دهد `setTimeout` برای شروع، و به عنوان مثال DOM.

بعد از آن _callback_ به WebAPI فشار داده می شود، `setTimeout` خود تابع (اما نه callback!).

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

حالا،, `foo` می شود و `"First"` ثبت شده است.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` و از آن خارج می شود و `baz` دعوت می شود. `"Third"` وارد می شود.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI نمی تواند فقط هر زمان که آماده باشد به پشته اضافه کند. در عوض، تابع callback را به چیزی به نام _صف_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

این جایی است که یک حلقه رویداد شروع به کار می کند. An An An An **حلقه رویداد** به صف پشته و کار نگاه کنید. اگر پشته خالی باشد، اولین چیز را در صف می گیرد و آن را بر روی پشته فشار می دهد.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` دعوت می شود،, `"Second"` وارد می شود و از پشته خارج می شود.

</p>
</details>

---

###### 31. هنگام کلیک بر روی دکمه چه اتفاقی می افتد؟?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: خارجی `div`
- B: داخلی `div`
- C: `button`
- D: مجموعه ای از تمام عناصر کاشته شده.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

عمیق ترین عنصری که این رویداد را ایجاد کرد، هدف این رویداد است. شما می توانید با `event.stopPropagation`

</p>
</details>

---

###### 32. وقتی روی پاراگراف کلیک می کنید، خروجی ورودی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

اگر کلیک کنیم `p`ما دو بسته را می بینیم: `p` و `div`در طول انتشار رویداد، سه مرحله وجود دارد: ثبت، هدف گذاری و bubbling. به طور پیش فرض، مدیران رویداد در فاز آتش سوزی اعدام می شوند (مگر اینکه شما تنظیم کنید) `useCapture` برای `true`) این از عمیق ترین عنصر در خارج است.

</p>
</details>

---

###### 33. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

با هر دو، ما می توانیم شی را که می خواهیم منتقل کنیم `this` کلمه کلیدی برای اشاره به با این حال،, `.call` همچنین _اعدام بلافاصله_!

`.bind.` بازگشت _کپی_ عملکرد، اما با یک زمینه محدود! بلافاصله اعدام نمی شود.

</p>
</details>

---

###### 34. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

The `sayHi` تابع مقدار بازگشتی بیان تابع بلافاصله فراخوانی شده (IIFE) را برمی گرداند. این تابع بازگشت `0`که نوع است `"number"`.
	
FYI: `typeof` می تواند لیست ارزش های زیر را بازگرداند: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` و `object`توجه کنید که `typeof null` بازگشت `"object"`.

</p>
</details>

---

###### 35. کدام یک از این ارزش ها بد است؟?

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
- D: همه آن ها بد هستند

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

هشت ارزش وجود دارد:

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (درجه خالی)
- `0`
- `-0`
- `0n` (BigInt (0))

سازنده های تابع، مانند `new Number` و `new Boolean` حقیقت است.

</p>
</details>

---

###### 36. خروجی چیست؟?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

`typeof 1` بازگشت `"number"`.
`typeof "number"` بازگشت `"string"`

</p>
</details>

---

###### 37. خروجی چیست؟?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, null x 7, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, empty x 7, 11]`
- D: `SyntaxError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

هنگامی که شما یک ارزش را به یک عنصر در آرایه ای که از طول آرایه فراتر می رود، تنظیم می کنید، جاوا اسکریپت چیزی به نام " اسلات های خالی" ایجاد می کند. این ها در واقع ارزش `undefined`اما شما چیزی مانند:

`[1, 2, 3, empty x 7, 11]`

بسته به جایی که آن را اجرا می کنید (برای هر مرورگر، گره و غیره متفاوت است)

</p>
</details>

---

###### 38. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

The `catch` بلوک استدلال را دریافت می کند `x`این یکسان نیست `x` به عنوان متغیر زمانی که ما استدلال می کنیم. این متغیر `x` مسدود شده است.

بعد از آن، ما این متغیر بلوکی را برابر با آن تنظیم کردیم `1`و مقدار متغیر را تنظیم کنید `y`در حال حاضر، ما متغیر Block-scoped را وارد می کنیم `x`که برابر است با `1`.

خارج از آن `catch` بلوک،, `x` هنوز هم `undefined`و `y` است `2`وقتی می خواهیم `console.log(x)` خارج از `catch` بلوک، بازگشت `undefined`و `y` بازگشت `2`.

</p>
</details>

---

###### 39. همه چیز در جاوا اسکریپت یک ...

- A: ابتدایی یا شی
- B: تابع یا شی
- C: سوال حقه! فقط اشیاء
- D: شماره یا شی

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

جاوا اسکریپت فقط انواع و اشیاء ابتدایی دارد.

انواع اولیه `boolean`, `null`, `undefined`, `bigint`, `number`, `string`و `symbol`.

چیزی که یک بدوی را از یک شی متمایز می کند این است که بدوی ها هیچ ویژگی یا روش خاصی ندارند؛ با این حال، توجه داشته باشید که شما باید توجه داشته باشید که `'foo'.toUpperCase()` ارزیابی برای `'FOO'` و نتیجه ای ندارد `TypeError`این به این دلیل است که هنگامی که شما سعی می کنید به یک ملک یا روش اولیه مانند یک رشته دسترسی پیدا کنید، جاوا اسکریپت به طور ضمنی نوع ابتدایی را با استفاده از یکی از کلاس های بسته بندی، یعنی. `String`و سپس بلافاصله پس از ارزیابی بیان، بسته بندی را کنار بگذارید. همه چیز جز برای `null` و `undefined` این رفتار را نشان دهید.

</p>
</details>

---

###### 40. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

`[1, 2]` ارزش اولیه ما است. این ارزشی است که ما با آن شروع می کنیم و ارزش اول `acc`در دور اول،, `acc` است `[1,2]`و `cur` است `[0, 1]`ما آنها را متقاعد می کنیم، که منجر به `[1, 2, 0, 1]`.

سپس،, `[1, 2, 0, 1]` است `acc` و `[2, 3]` است `cur`ما آنها را به هم متصل می کنیم و می گیریم `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. خروجی چیست؟?

```javascript
!!null;
!!'';
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

`null` بد است. `!null` بازگشت `true`. `!true` بازگشت `false`.

`""` بد است. `!""` بازگشت `true`. `!true` بازگشت `false`.

`1` حقیقت است. `!1` بازگشت `false`. `!false` بازگشت `true`.

</p>
</details>

---

###### 42. چه کاری انجام می دهد `setInterval` روش بازگشت در مرورگر?

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: یک شناسه منحصر به فرد
- B: مقدار میلی ثانیه مشخص شده
- C: تابع تصویب شده
- D: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

این یک شناسه منحصر به فرد است. این شناسه می تواند برای روشن کردن این فاصله با `clearInterval()` تابع.

</p>
</details>

---

###### 43. این بازگشت چیست؟?

```javascript
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

یک رشته قابل استفاده است. اپراتور گسترش نقشه هر شخصیت از یک آن را به یک عنصر.

</p>
</details>

---

###### 44. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

عملکرد منظم را نمی توان در اواسط راه پس از استخدام متوقف کرد. با این حال، یک تابع ژنراتور می تواند در اواسط مسیر متوقف شود و بعد از آن از جایی که متوقف شد ادامه یابد. هر بار که یک تابع ژنراتور با یک `yield` کلمه کلیدی، تابع ارزش مشخص شده پس از آن را به دست می آورد. توجه داشته باشید که عملکرد ژنراتور در این مورد هیچ _بازگشت_ ارزش، آن _بهره برداری_ ارزش.

اول، ما تابع ژنراتور را با `i` برابر با `10`ما تابع ژنراتور را با استفاده از `next()` روش اولین باری که از عملکرد ژنراتور استفاده می کنیم،, `i` برابر با `10`آن را با اولین `yield` کلمه کلیدی: ارزش `i`ژنراتور در حال حاضر "از قبل" و `10` وارد می شود.

پس از آن، ما دوباره تابع را با `next()` روش این شروع به ادامه جایی می کند که قبلا متوقف شده بود، هنوز هم با `i` برابر با `10`حالا، آن را با بعدی روبرو می کند `yield` کلمه کلیدی و بازده `i * 2`. `i` برابر با `10`پس باز می گردد `10 * 2`که است، `20`این نتایج `10, 20`.

</p>
</details>

---

###### 45. این بازگشت چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

هنگامی که ما وعده های متعدد را به `Promise.race` روش، آن را حل و فصل / قضاوت _اولین اول_ قول می دهند که حل و فصل می شود. برای `setTimeout` روش، ما یک تایمر را تصویب می کنیم: ۵۰۰ میلیون برای اولین وعده (`firstPromise`و صدم برای وعده دوم`secondPromise`) این بدان معنی است که `secondPromise` حل اول با ارزش `'two'`. `res` در حال حاضر ارزش `'two'`که وارد می شود.

</p>
</details>

---

###### 46. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

اول، ما یک متغیر را اعلام می کنیم `person` با ارزش یک شی که دارای یک شی است `name` مالکیت.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

سپس، ما یک متغیر به نام `members`ما اولین عنصر این آرایه را برابر با ارزش آن تنظیم کردیم `person` متغیر اشیاء تعامل با _مرجع_ هنگامی که آنها را با یکدیگر برابر کنید. هنگامی که شما یک مرجع را از یک متغیر به دیگری اختصاص می دهید، یک مرجع ایجاد می کنید _کپی_ این مرجع (توجه داشته باشید که آنها ندارند _همان_ مرجع!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

سپس متغیر را تنظیم کردیم `person` برابر با `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

ما فقط ارزش را تغییر می دهیم `person` متغیر، و نه عنصر اول در آرایه، از آنجایی که این عنصر دارای مرجع مختلف (کوپ) به جسم است. اولین عنصر در `members` هنوز هم اشاره خود را به موضوع اصلی دارد. وقتی وارد می شویم `members` آرایه، عنصر اول هنوز ارزش شیء را دارد که وارد می شود.

</p>
</details>

---

###### 47. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با یک `for-in` حلقه، ما می توانیم از طریق کلید های شی، در این مورد، `name` و `age`در زیر کاپوت، کلید های شی رشته هستند (اگر آنها نماد نیستند). در هر حلقه، ما ارزش را تعیین می کنیم `item` برابر با کلید فعلی است که آن را به پایان می رسد. اول،, `item` برابر با `name`و وارد می شود. سپس،, `item` برابر با `age`که وارد می شود.

</p>
</details>

---

###### 48. خروجی چیست؟?

```javascript
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

عملگر Associativity دستوری است که در آن کامپایلر عبارات را ارزیابی می کند، یا چپ به راست یا راست به چپ. این تنها زمانی اتفاق می افتد که همه اپراتورها _همان_ اولویت ما فقط یک نوع اپراتور داریم: `+`علاوه بر این، Associativity چپ به راست است.

`3 + 4` اول ارزیابی می شود. این نتیجه در عدد `7`.

`7 + '5'` نتایج `"75"` به خاطر اجبار جاوا اسکریپت عدد را تبدیل می کند `7` در یک رشته، سوال 15 را ببینید. ما می توانیم دو رشته را با استفاده از `+`اپراتور. `"7" + "5"` نتایج `"75"`.

</p>
</details>

---

###### 49. ارزش چیست `num`?

```javascript
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

تنها عدد اول در رشته برگردانده می شود. بر اساس _رای گیری_ ( دومین استدلال برای مشخص کردن اینکه چه نوع عددی می خواهیم آن را تجزیه کنیم: پایه 10، هگزادمال، octal، باینری و غیره)، `parseInt` بررسی کنید که آیا شخصیت های رشته معتبر هستند. هنگامی که با شخصیتی مواجه می شود که شماره معتبر در رادیکس نیست، متوقف می شود و شخصیت های زیر را نادیده می گیرد.

`*` یک عدد معتبر نیست. فقط پارس می کند `"7"` در decimal `7`. `num` در حال حاضر ارزش `7`.

</p>
</details>

---

###### 50. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

هنگام نقشه برداری بر روی آرایه، ارزش `num` برابر با عنصری است که در حال حاضر از آن استفاده می کند. در این مورد، عناصر اعداد هستند، بنابراین وضعیت اگر بیانیه `typeof num === "number"` بازگشت `true`تابع نقشه یک آرایه جدید ایجاد می کند و ارزش های بازگشت شده از تابع را وارد می کند.

با این حال، ما ارزش را برنمی گردانیم. هنگامی که ما یک ارزش را از تابع بازگردانیم، تابع بازگشت می کند `undefined`برای هر عنصر در آرایه، بلوک تابع نامیده می شود، بنابراین برای هر عنصر ما بازگشت `undefined`.

</p>
</details>

---

###### 51. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

داوری ها توسط _ارزش_مگر اینکه ارزش آنها یک شیء باشد، پس از آن آنها از بین می روند _مرجع_. `birthYear` با ارزش تصویب می شود، زیرا یک رشته است، نه یک شیء. هنگامی که ما با ارزش استدلال می کنیم، یک _کپی_ این ارزش ایجاد شده است (نگاه کنید به سوال 46).

متغیر `birthYear` مرجع به ارزش `"1997"`استدلال `year` همچنین یک مرجع به ارزش `"1997"`اما این همان ارزش نیست `birthYear` مرجع دارد. وقتی ارزش را به روز می کنیم `year` سوگند به نفس `year` برابر با `"1998"`ما فقط به روز رسانی ارزش `year`. `birthYear` هنوز برابر با `"1997"`.

ارزش `person` یک شی است. استدلال `member` یک مرجع (کوپ) به _همان_ جسم هنگامی که ما یک ملک از جسم را تغییر می دهیم `member` مرجع دارد، ارزش `person` همچنین اصلاح خواهد شد، زیرا هر دو به یک شیء اشاره دارند. `person`* `name` مالکیت در حال حاضر برابر با ارزش است `"Lydia"`

</p>
</details>

---

###### 52. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

با `throw` ما می توانیم خطاهای سفارشی ایجاد کنیم. با این بیانیه می توانید استثناها را پرتاب کنید. یک استثنا می تواند <b>رشته</b>, a <b>تعداد اعداد</b>, a <b>boolean</b> یا <b>object</b>در این مورد، استثنا ما رشته است `'Hello world!'`.

با `catch` ما می توانیم مشخص کنیم که اگر یک استثنا در آن پرتاب شود چه باید بکنیم `try` بلوک یک استثناء پرتاب می شود: رشته `'Hello world!'`. `e` در حال حاضر برابر با این رشته است که ما وارد آن می شویم. این نتایج `'Oh an error: Hello world!'`.

</p>
</details>

---

###### 53. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

هنگامی که یک تابع سازنده با `new` کلمه کلیدی، آن را ایجاد یک شی و مجموعه `this` کلمه کلیدی برای اشاره به این شی به طور پیش فرض، اگر تابع سازنده به طور واضح چیزی را برگرداند، به جسم تازه ایجاد شده باز می گردد.

در این مورد، تابع سازنده `Car` به وضوح یک شی جدید را با `make` تنظیم برای `"Maserati"`که رفتار پیش فرض را باطل می کند. هنگامی که `new Car()` نامیده می شود، _بازگشت_ هدف قرار داده شده است `myCar`در نتیجه خروجی `"Maserati"` زمانی که `myCar.make` قابل دسترسی است.

</p>
</details>

---

###### 54. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

`let x = (y = 10);` در واقع کوتاه است برای:

```javascript
y = 10;
let x = y;
```

هنگامی که تنظیم می کنیم `y` برابر با `10`ما در واقع یک ملک اضافه می کنیم `y` به موضوع جهانی (`window` در مرورگر،, `global` در Node) در یک مرورگر،, `window.y` اکنون برابر با `10`.

سپس یک متغیر را اعلام می کنیم `x` با ارزش `y`که است، `10`متغیرهای اعلام شده با `let` کلمه کلیدی _محدوده بلوک_آنها فقط در داخل بلوک تعریف می شوند که در آن اعلام شده اند؛ بلافاصله بیان تابع (IIFE) در این مورد. وقتی استفاده می کنیم `typeof` اپراتور، اپرا `x` تعریف نشده است: ما سعی داریم به آن دسترسی پیدا کنیم `x` در خارج از بلوک اعلام شده است. این بدان معنی است که `x` تعریف نشده است. ارزش هایی که ارزش گذاری نکرده اند یا اعلام شده اند از نوع `"undefined"`. `console.log(typeof x)` بازگشت `"undefined"`.

اما ما یک متغیر جهانی ایجاد کردیم `y` هنگام تنظیم `y` برابر با `10`این مقدار در هر نقطه در کد ما قابل دسترس است. `y` تعریف شده و دارای ارزش نوع `"number"`. `console.log(typeof y)` بازگشت `"number"`.

</p>
</details>

---

###### 55. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

ما می توانیم خواص را از اشیاء با استفاده از `delete` کلمه کلیدی، همچنین در نمونه اولیه. با حذف یک ملک در نمونه اولیه، دیگر در زنجیره نمونه اولیه موجود نیست. در این مورد، `bark` تابع دیگر در نمونه اولیه پس از آن در دسترس نیست `delete Dog.prototype.bark`اما هنوز سعی می کنیم به آن دسترسی داشته باشیم.

وقتی سعی می کنیم چیزی را که یک تابع نیست، به کار ببریم `TypeError` پرتاب می شود. در این مورد `TypeError: pet.bark is not a function`از آن زمان `pet.bark` است `undefined`.

</p>
</details>

---

###### 56. خروجی چیست؟?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `Set` شی مجموعه ای از _منحصر به فرد_ ارزش ها: یک ارزش فقط می تواند یک بار در یک مجموعه رخ دهد.

ما آن را آسان تر کردیم `[1, 1, 2, 3, 4]` با ارزش تکراری `1`از آنجایی که ما نمی توانیم دو تا از همان ارزش ها را در یک مجموعه داشته باشیم، یکی از آنها برداشته می شود. این نتایج `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

یک ماژول وارداتی _فقط خواندن_شما نمی توانید ماژول وارداتی را تغییر دهید. تنها ماژولی که آنها را صادر می کند می تواند ارزش خود را تغییر دهد.

وقتی سعی می کنیم ارزش را افزایش دهیم `myCounter`اشتباه می کند: `myCounter` فقط خواندن است و نمی تواند اصلاح شود.

</p>
</details>

---

###### 58. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

The `delete` اپراتور یک ارزش بولین را برمی گرداند: `true` در یک حذف موفق، وگرنه باز می گردد `false`با این حال، متغیرهای اعلام شده با `var`, `const`یا `let` کلمات کلیدی را نمی توان با استفاده از حذف کرد `delete` اپراتور.

The `name` متغیر با یک `const` کلمه کلیدی، بنابراین حذف آن موفق نیست: `false` بازگردانده می شود. هنگامی که تنظیم می کنیم `age` برابر با `21`در واقع، ما یک ملک به نام `age` به جسم جهانی شما می توانید با موفقیت خواص را از اشیاء به این طریق حذف کنید، همچنین جسم جهانی، بنابراین `delete age` بازگشت `true`.

</p>
</details>

---

###### 59. خروجی چیست؟?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

ما می توانیم ارزش ها را از آرایه ها یا خواص از اشیاء از طریق تخریب حذف کنیم. برای مثال:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

ارزش `a` اکنون `1`و ارزش `b` اکنون `2`آنچه در واقع در این سوال انجام دادیم این است:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

این بدان معنی است که ارزش `y` برابر با اولین ارزش در آرایه، که عدد است `1`وقتی وارد می شویم `y`, `1` بازگردانده می شود.

</p>
</details>

---

###### 60. خروجی چیست؟?

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

امکان ترکیب اشیاء با استفاده از اپراتور گسترش `...`این به شما اجازه می دهد تا نسخه هایی از جفت های کلیدی / ارزش یک شی ایجاد کنید و آنها را به یک شی دیگر اضافه کنید. در این مورد، ما نسخه هایی از `user` و آن را به آن اضافه کنید `admin` جسم The The The The The The `admin` در حال حاضر شی شامل جفت های کلیدی / ارزش کپی شده است که منجر به `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `defineProperty` روش، ما می توانیم خواص جدید را به یک شی اضافه کنیم یا ویژگی های موجود را تغییر دهیم. هنگامی که ما یک ملک را به یک شی با استفاده از `defineProperty` روش، آنها به طور پیش فرض هستند _عدم انعطاف پذیری_.. `Object.keys` روش بازگشت همه _قابل استفاده_ نام ملک از یک شی، در این مورد تنها `"name"`.

خواص اضافه شده با استفاده از `defineProperty` روش به طور پیش فرض قابل تغییر است. شما می توانید این رفتار را با استفاده از `writable`, `configurable` و `enumerable` خواص به این ترتیب، `defineProperty` روش به شما کنترل بیشتری بر خواصی که به یک شی اضافه می کنید می دهد.

</p>
</details>

---

###### 62. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

دومین استدلال `JSON.stringify` این است که _جایگزین_جایگزین می تواند یک تابع یا یک آرایه باشد و به شما اجازه می دهد تا کنترل کنید که چه و چگونه ارزش ها باید تقویت شوند.

اگر جایگزین یک _آرایه_تنها نام ملک موجود در آرایه به رشته JSON اضافه خواهد شد. در این مورد، فقط خواص با نام `"level"` و `"health"` شامل،, `"username"` حذف شده است. `data` اکنون برابر با `"{"level":19, "health":90}"`.

اگر جایگزین باشد _تابع_این تابع در هر ملک در شی که شما در حال جمع آوری آن هستید فراخوانده می شود. ارزش بازگشت از این تابع ارزش ملک خواهد بود زمانی که آن را به رشته JSON اضافه شده است. اگر ارزش باشد `undefined`این ملک از رشته JSON مستثنی نیست.

</p>
</details>

---

###### 63. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

اپراتور غیر نظامی `++` _اولین بازگشت_ ارزش اپرا،, _سپس افزایش_ ارزش اپرا ارزش `num1` است `10`از زمان `increaseNumber` تابع اول ارزش را برگرداند `num`که است، `10`و فقط ارزش را افزایش می دهد `num` بعد.

`num2` است `10`از زمانی که گذشتیم `num1` سوگند به `increasePassedNumber`. `number` برابر با `10`(ارزش `num1`) دوباره، اپراتور غیر قانونی `++` _اولین بازگشت_ ارزش اپرا،, _سپس افزایش_ ارزش اپرا ارزش `number` است `10`بنابراین، `num2` برابر با `10`.

</p>
</details>

---

###### 64. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

در ES6، ما می توانیم پارامترهای را با یک ارزش پیش فرض آغاز کنیم. ارزش پارامتر ارزش پیش فرض خواهد بود، اگر هیچ ارزش دیگری به تابع منتقل نشود، یا اگر مقدار پارامتر باشد `"undefined"`در این مورد، ما خواص خواص آن را گسترش دادیم `value` به یک جسم جدید اعتراض کنید، بنابراین `x` ارزش پیش فرض `{ number: 10 }`.

استدلال پیش فرض در _زمان تماس_هر بار که تابع را می نامیم، یک _جدید_ جسم ایجاد شده است. ما نماز می خوانیم `multiply` دو بار اول را بدون نیاز به یک ارزش انجام دهید: `x` ارزش پیش فرض `{ number: 10 }`پس از آن ما مقدار ضرب و شتم آن عدد را وارد می کنیم که `20`.

سومین بار که ما ضرب و شتم می کنیم، ما یک استدلال را رد می کنیم: `value`.. `*=` اپراتور در واقع برای `x.number = x.number * 2`ما ارزش را تغییر می دهیم `x.number`و مقدار چند برابر را وارد کنید `20`.

چهارمین بار، ما گذر می کنیم `value` دوباره اعتراض. `x.number` قبلا اصلاح شده بود `20`بنابراین، `x.number *= 2` ورود `40`.

</p>
</details>

---

###### 65. خروجی چیست؟?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` و `3` `3` و `6` `4`
- B: `1` `2` و `2` `3` و `3` `4`
- C: `1` `undefined` و `2` `undefined` و `3` `undefined` و `4` `undefined`
- D: `1` `2` و `undefined` `3` و `undefined` `4`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

اولین استدلال که `reduce` روش دریافت کننده است _accumulator_, `x` در این مورد. دومین استدلال، _ارزش فعلی_, `y`با روش کاهش، ما یک تابع callback را بر روی هر عنصر در آرایه اجرا می کنیم که در نهایت می تواند به یک ارزش واحد منجر شود.

در این مثال، ما هیچ ارزشی را بازگردانیم، ما به سادگی ارزش های شتاب دهنده و ارزش فعلی را وارد می کنیم.

ارزش پارامتراتور برابر با مقدار بازگشت قبلی تابع callback است. اگر اختیاری را قبول نکنید `initialValue` استدلال در مورد `reduce` روش، accumulator برابر با عنصر اول در تماس اول است.

در اولین تماس، شتاب دهنده (`x`) `1`و ارزش فعلی (`y`) `2`ما از تابع callback باز نمی گردیم، ما به accumulator وارد می شویم و ارزش های فعلی: `1` و `2` وارد شوید.

اگر شما یک ارزش را از یک تابع برگردانید، باز می گردد `undefined`در تماس بعدی، شتاب دهنده است `undefined`و ارزش فعلی است `3`. `undefined` و `3` وارد شوید.

در تماس چهارم، ما دوباره از تابع callback باز نمی گردیم. آسانسور دوباره تکرار می شود `undefined`و ارزش فعلی است `4`. `undefined` و `4` وارد شوید.

</p>
</details>
  
---

###### 66. با چه سازنده ای می توانیم با موفقیت گسترش دهیم `Dog` کلاس؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

در یک کلاس مشتق شده، شما نمی توانید دسترسی `this` کلمه کلیدی قبل از تماس `super`اگر سعی کنید این کار را انجام دهید، یک مرجع را پرتاب می کند: 1 و 4 یک خطای مرجع را پرتاب می کنند.

با `super` کلمه کلیدی، ما آن را سازنده کلاس والدین با استدلال های مشخص می نامیم. سازنده والدین را دریافت می کند `name` استدلال، بنابراین ما باید عبور کنیم `name` برای `super`.

The `Labrador` کلاس دو استدلال را دریافت می کند،, `name` از آنجایی که گسترش می یابد `Dog`و `size` به عنوان یک ملک اضافی در `Labrador` کلاس هر دو باید به تابع سازنده منتقل شوند `Labrador`که به درستی با استفاده از سازنده 2 انجام می شود.

</p>
</details>

---

###### 67. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `import` کلمه کلیدی، تمام ماژول های وارداتی _پیش از آپارتاید_این بدان معنی است که ماژول های وارداتی اجرا می شوند _اولین اول_و کد موجود در فایل که ماژول را وارد می کند اجرا می شود _بعد از بعد_.

این تفاوت بین `require()` در CommonJS و `import`با `require()`شما می توانید وابستگی به تقاضا را در حالی که کد در حال اجرا است، بارگیری کنید. اگر استفاده می کردیم `require` به جای `import`, `running index.js`, `running sum.js`, `3` به کنسول وارد می شد.

</p>
</details>

---

###### 68. خروجی چیست؟?

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

هر نماد کاملا منحصر به فرد است. هدف از استدلال تصویب شده به نماد این است که نماد را به شرح. ارزش نماد بستگی به استدلال تصویب شده ندارد. همانطور که ما برابری را تست می کنیم، دو نماد کاملا جدید ایجاد می کنیم: اولین نماد `Symbol('foo')`و دوم `Symbol('foo')`این دو ارزش منحصر به فرد هستند و با یکدیگر برابر نیستند, `Symbol('foo') === Symbol('foo')` بازگشت `false`.

</p>
</details>

---

###### 69. خروجی چیست؟?

```javascript
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `padStart` روش، ما می توانیم به شروع یک رشته اضافه کنیم. ارزش تصویب شده به این روش است _مجموع_ طول رشته همراه با padding رشته `"Lydia Hallie"` طول عمر `12`. `name.padStart(13)` 1 فضا را در ابتدای رشته قرار دهید، زیرا 12 + 1 13 است.

اگر بحث به سوی `padStart` روش کوچکتر از طول آرایه است، هیچ padding اضافه نخواهد شد.

</p>
</details>

---

###### 70. خروجی چیست؟?

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: یک رشته حاوی نقاط کد خود
- D: خطای خطا

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با `+` اپراتور، شما می توانید رشته های مربوطه را جذب کنید. در این مورد، ما در حال ادغام رشته هستیم `"🥑"` با رشته `"💻"`در نتیجه `"🥑💻"`.

</p>
</details>

---

###### 71. چگونه می توانیم ارزش هایی را که پس از بیانیه کنسول اظهار نظر می شود، وارد کنیم؟?

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

- A: `game.next("Yes").value` و `game.next().value`
- B: `game.next.value("Yes")` و `game.next.value()`
- C: `game.next().value` و `game.next("Yes").value`
- D: `game.next.value()` و `game.next.value("Yes")`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

یک تابع ژنراتور "وز" اجرای آن را زمانی که آن را می بیند `yield` کلمه کلیدی اول، ما باید اجازه دهیم که تابع رشته "آیا شما عاشق جاوا اسکریپت؟"، که می تواند با تماس با تماس انجام شود `game.next().value`.

هر خط اجرا می شود تا اینکه اولین را پیدا کند `yield` کلمه کلیدی وجود دارد `yield` کلمه کلیدی در خط اول در تابع: اعدام با اولین عملکرد متوقف می شود! _این بدان معنی است که "پاسخ" متغیر هنوز تعریف نشده است!_

وقتی زنگ می زنیم `game.next("Yes").value`قبلی `yield` با ارزش پارامترهایی که به پارامترهای عبور می شود جایگزین می شود `next()` عملکرد،, `"Yes"` در این مورد. ارزش متغیر `answer` اکنون برابر با `"Yes"`وضعیت بازگشت دولت اگر `false`و `JavaScript loves you back ❤️` وارد می شود.

</p>
</details>

---

###### 72. خروجی چیست؟?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />و بی تردید، و;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> و بی تردید، و;`world`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

`String.raw` بازگشت به رشته ای که در آن فرار می کند`\n`, `\v`, `\t` نادیده گرفته می شوند! Backslashes می تواند یک مسئله باشد زیرا شما می توانید با چیزی مانند:

`` مسیر `C:\Documents\Projects\table.html` ``

که منجر به:

`"C:DocumentsProjects able.html"`

با `String.raw`این به سادگی فرار و چاپ را نادیده می گیرد:

`C:\Documents\Projects\table.html`

در این مورد، رشته است `Hello\nworld`که وارد می شود.

</p>
</details>

---

###### 73. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

تابع async همیشه یک وعده را برمی گرداند. The The The The The The `await` ما باید منتظر وعده برای حل و فصل باشیم: یک وعده در انتظار بازگشت زمانی که ما تماس می گیریم `getData()` برای تنظیم `data` برابر با آن.

اگر می خواستیم به ارزش حل شده دسترسی پیدا کنیم `"I made it"`می توانستیم از آن استفاده کنیم `.then()` روش در `data`:

`data.then(res => console.log(res))`

این را می توان وارد کرد `"I made it!"`

</p>
</details>

---

###### 74. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

The `.push()` روش بازگشت _طول عمر_ از آرایه جدید! پیش از این، آرایه شامل یک عنصر (فرشته) بود `"banana"`و دارای طول `1`پس از اضافه کردن رشته `"apple"` به آرایه، آرایه شامل دو عنصر است و طول دارد `2`این از بازگشت از `addToList` تابع.

The `push` روش آرایه اصلی را اصلاح می کند. اگر می خواستید برگردید _آرایه_ از تابع به جای تابع _طول آرایه_شما باید برگردید `list` پس از فشار `item` به آن.

</p>
</details>

---

###### 75. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

`Object.freeze` اضافه کردن، حذف یا تغییر خواص یک شیء را غیر ممکن می کند (مگر اینکه ارزش ملک چیز دیگری باشد).

هنگامی که ما متغیر را ایجاد می کنیم `shape` و آن را برابر با جسم منجمد قرار دهید `box`, `shape` همچنین به یک شیء یخ زده اشاره می کند. شما می توانید بررسی کنید که آیا یک شیء با استفاده از آن منجمد شده است `Object.isFrozen`در این مورد،, `Object.isFrozen(shape)` بازگشت به حقیقت، از آنجا که متغیر `shape` یک مرجع به یک جسم منجمد دارد.

از `shape` یخ زده است و از آن زمان ارزش `x` یک چیز نیست، ما نمی توانیم ملک را تغییر دهیم `x`. `x` هنوز برابر با `10`و `{ x: 10, y: 20 }` وارد می شود.

</p>
</details>

---

###### 76. خروجی چیست؟?

```javascript
const { firstName: myName } = { firstName: 'Lydia' };

console.log(firstName);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

با استفاده از [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ما می توانیم مقادیر را از آرایه ها یا خواص از اشیاء، به متغیرهای متمایز:

```javascript
const { firstName } = { firstName: 'Lydia' };
// ES5 version:
// var firstName = { firstName: 'Lydia' }.firstName;

console.log(firstName); // "Lydia"
```

همچنین، یک ملک را می توان از یک شی جدا کرد و به یک متغیر با نام مختلف نسبت به اموال شی اختصاص داد:

```javascript
const { firstName: myName } = { firstName: 'Lydia' };
// ES5 version:
// var myName = { firstName: 'Lydia' }.firstName;

console.log(myName); // "Lydia"
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

پس،, `firstName` به عنوان یک متغیر وجود ندارد، بنابراین تلاش برای دسترسی به ارزش آن افزایش می یابد `ReferenceError`.

**توجه:** آگاه باشید از `global scope` خواص:

```javascript
const { name: myName } = { name: 'Lydia' };

console.log(myName); // "lydia"
console.log(name); // "" ----- Browser e.g. Chrome
console.log(name); // ReferenceError: name is not defined  ----- NodeJS

```

هر بار که جاوا اسکریپت قادر به پیدا کردن یک متغیر در داخل _محدوده فعلی_بالا رفتن از بالا [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) و جستجو برای آن و اگر آن را به محدوده سطح بالا، aka **محدوده جهانی**و هنوز آن را پیدا نمی کند، آن را پرتاب می کند `ReferenceError`.

- In **مرورگرها** مانند _Chrome_, `name` یک _مالکیت جهانی_در این مثال، کد در داخل اجرا می شود _محدوده جهانی_ هیچ متغیر محلی تعریف شده توسط کاربر برای `name`بنابراین، آن را جستجو از پیش تعریف شده _متغیرهای/properties_ در محدوده جهانی که در مورد مرورگرها است، از طریق جستجو می کند `window` و آن را استخراج [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) ارزش که برابر با یک **رشته خالی**.

- In **NodeJS**هیچ مالکیتی در این زمینه وجود ندارد `global` بنابراین، هدف، تلاش برای دسترسی به یک متغیر غیر موجود، افزایش می یابد [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined).

</p>
</details>

---

###### 77. آیا این یک تابع خالص است؟?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: بله
- B: هیچ

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

یک تابع خالص یک تابع است که _همیشه_ همان نتیجه را برمی گرداند، اگر همان استدلال ها تصویب شود.

The `sum` عملکرد همیشه همان نتیجه را برمی گرداند. اگر عبور کنیم `1` و `2`, آن را _همیشه_ بازگشت `3` بدون عوارض جانبی اگر عبور کنیم `5` و `10`, آن را _همیشه_ بازگشت `15`و غیره. این تعریف یک تابع خالص است.

</p>
</details>

---

###### 78. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `add` تابع یک _یادداشت برداری_ تابع با یادداشت برداری، ما می توانیم نتایج یک تابع را برای سرعت بخشیدن به اجرای آن ذخیره کنیم. در این مورد، ما ایجاد یک `cache` چیزی که ارزش های قبلی را ذخیره می کند.

اگر ما تماس بگیریم `addFunction` دوباره با همان استدلال عمل کنید، ابتدا بررسی می کند که آیا این ارزش را در حافظه خود به دست آورده است. اگر این مورد باشد، مقدار کش برگردانده می شود که زمان اجرای را نجات می دهد. در غیر این صورت، اگر ذخیره نشود، ارزش را محاسبه می کند و سپس آن را ذخیره می کند.

ما زنگ می زنیم `addFunction` عملکرد سه بار با همان ارزش: در اولین حرفه، ارزش عملکرد زمانی که `num` برابر با `10` هنوز پنهان نشده است. شرط اگر `num in cache` بازگشت `false`و بلوک دیگر اجرا می شود: `Calculated! 20` وارد می شود و ارزش نتیجه به جسم کش اضافه می شود. `cache` به نظر می رسد `{ 10: 20 }`.

دومین بار، `cache` شی شامل ارزشی است که برای آن بازگردانده می شود `10`وضعیت در صورتی `num in cache` بازگشت `true`و `'From cache! 20'` وارد می شود.

سومین بار، گذر می کنیم `5 * 2` به تابعی که ارزیابی می شود `10`.. `cache` شی شامل ارزشی است که برای آن بازگردانده می شود `10`وضعیت در صورتی `num in cache` بازگشت `true`و `'From cache! 20'` وارد می شود.

</p>
</details>

---

###### 79. خروجی چیست؟?

```javascript
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` و `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` و `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` و `0` `1` `2` `3`
- D: `0` `1` `2` `3` و `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با یک _برای_ حلقه، ما می توانیم آن را بیش از **قابل استفاده** خواص در یک آرایه، ویژگی های قابل توجه “کلمات” عناصر آرایه هستند که در واقع شاخص های آنها هستند. می توانید یک آرایه را ببینید:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

جایی که کلیدها خواص قابل بازیافت هستند. `0` `1` `2` `3` وارد شوید.

با یک _برای_ حلقه، ما می توانیم آن را بیش از **بازیگران iterables**یک آرایه قابل استفاده است. هنگامی که ما بر روی آرایه قرار می گیریم، متغیر “item” برابر با عنصری است که در حال حاضر آن را پر می کند،, `"☕"` `"💻"` `"🍷"` `"🍫"` وارد شوید.

</p>
</details>

---

###### 80. خروجی چیست؟?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

عناصر آرایه می توانند هر مقدار را نگه دارند. اعداد، رشته ها، اشیاء، آرایه های دیگر، null، مقادیر boolean، تعریف نشده و دیگر عبارات مانند تاریخ، توابع و محاسبات.

این عنصر با ارزش بازگشت برابر خواهد بود. `1 + 2` بازگشت `3`, `1 * 2` بازگشت `2`و `1 / 2` بازگشت `0.5`.

</p>
</details>

---

###### 81. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

به طور پیش فرض، استدلال ها ارزش `undefined`مگر اینکه ارزش به تابع منتقل شود. در این مورد، ما برای ارزش گذاری نکردیم `name` استدلال. `name` برابر با `undefined` که وارد می شود.

در ES6، ما می توانیم این پیش فرض را بنویسیم `undefined` ارزش با پارامترهای پیش فرض برای مثال:

`function sayHi(name = "Lydia") { ... }`

در این مورد، اگر ما یک ارزش را از دست ندهیم یا اگر ما تصویب کنیم `undefined`, `name` همیشه برابر با رشته خواهد بود `Lydia`

</p>
</details>

---

###### 82. خروجی چیست؟?

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

- A: `"🥑"` و `"😍"`
- B: `"🥑"` و `"😎"`
- C: `"😍"` و `"😎"`
- D: `"😎"` و `"😎"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

ارزش ارزش `this` کلمه کلیدی بستگی به جایی دارد که از آن استفاده می کنید. در یک **روش method**مانند `getStatus` روش، `this` کلمه کلیدی اشاره دارد _شی که روش به آن تعلق دارد_این روش متعلق به روش `data` جسم، بنابراین `this` اشاره به `data` جسم وقتی وارد می شویم `this.status` `status` اموال در `data` شی وارد می شود، که است `"🥑"`.

با `call` روش، ما می توانیم شی را تغییر دهیم که `this` کلمه کلیدی اشاره دارد. In In In **توابع** `this` کلمه کلیدی اشاره به _چیزی که تابع به آن تعلق دارد_ما اعلام کردیم که `setTimeout` عملکرد در _اعتراض جهانی_در داخل `setTimeout` تابع، `this` کلمه کلیدی اشاره به _اعتراض جهانی_در اعتراض جهانی، یک متغیر به نام وجود دارد _وضعیت_ با ارزش `"😎"`هنگام ورود `this.status`, `"😎"` وارد می شود.

</p>
</details>

---

###### 83. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

ما متغیر را تنظیم کردیم `city` برابر با ارزش ملک به نام `city` در `person` جسم هیچ اموالی در این شی به نام `city`بنابراین متغیر `city` ارزش `undefined`.

توجه داشته باشید که ما هستیم _نه_ ارجاع دادن به `person` خود اعتراض کنید! ما به سادگی متغیر را تنظیم می کنیم `city` برابر با ارزش فعلی `city` اموال در `person` جسم.

پس از آن، `city` برابر با رشته `"Amsterdam"`این موضوع فرد را تغییر نمی دهد: هیچ مرجعی به آن شیء وجود ندارد.

هنگام ورود `person` جسم، جسم غیرmodified بازگردانده می شود.

</p>
</details>

---

###### 84. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

متغیرهای با `const` و `let` کلمات کلیدی _بلوک-scoped_یک بلوک چیزی بین براکت های پیچی است (`{ }`) در این مورد، براکت های پیچی از اظهارات if/else. شما نمی توانید یک متغیر را در خارج از بلوک که در آن اعلام شده اشاره کنید، یک مرجع پرتاب می شود.

</p>
</details>

---

###### 85. چه نوع اطلاعاتی وارد می شوند؟?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));
```

- A: نتیجه `fetch` روش.
- B: نتیجه کار دوم `fetch` روش.
- C: نتیجه بازگشت در گذشته `.then()`.
- D: همیشه تعریف نشده است.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

ارزش `res` در ثانیه `.then` برابر با ارزش بازگشت قبلی `.then`شما می توانید زنجیره ای نگه دارید `.then`مانند این، جایی که ارزش به دسته بعدی منتقل می شود.

</p>
</details>

---

###### 86. کدام گزینه یک راه برای تنظیم است `hasName` برابر با `true`اگر نمی توانید `true` به عنوان یک استدلال؟?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با `!!name`ما تعیین می کنیم که آیا ارزش `name` حقیقت یا بد است. اگر نام واقعی است، که می خواهیم آن را امتحان کنیم, `!name` بازگشت `false`. `!false` (این چیزی است که `!!name` در واقع بازگشتی است) `true`.

سوگند به نفس `hasName` برابر با `name`شما تنظیم می کنید `hasName` برابر با هر ارزشی که به آن رسیده اید `getName` تابع، نه ارزش boolean `true`.

`new Boolean(true)` یک بسته بندی شی را باز می گرداند، نه ارزش بولان.

`name.length` بازگشت به طول بحث تصویب شده، نه اینکه آیا آن را `true`.

</p>
</details>

---

###### 87. خروجی چیست؟?

```javascript
console.log('I want pizza'[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

به منظور به دست آوردن یک شخصیت در یک شاخص خاص از یک رشته، شما می توانید از نشانه براکت استفاده کنید. اولین شخصیت در رشته دارای شاخص 0 و غیره است. در این مورد، ما می خواهیم عنصر را با index 0، شخصیت `"I'`که وارد می شود.

توجه داشته باشید که این روش در IE7 و زیر پشتیبانی نمی شود. در این مورد، استفاده کنید `.charAt()`.

</p>
</details>

---

###### 88. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

شما می توانید یک پارامتر پیش فرض را برابر با پارامتر دیگری از تابع تنظیم کنید، تا زمانی که آنها تعریف شده اند _قبل از قبل_ پارامتر پیش فرض ارزش را پاس می کنیم `10` سوگند به `sum` تابع اگر `sum` تابع فقط یک استدلال دریافت می کند، به این معنی است که ارزش برای `num2` نمی گذرد و ارزش `num1` برابر با ارزش تصویب شده `10` در این مورد. ارزش پیش فرض `num2` ارزش `num1`که است، `10`. `num1 + num2` بازگشت `20`.

اگر سعی دارید یک پارامتر پیش فرض را برابر با پارامتری تنظیم کنید که تعریف شده باشد _بعد از بعد_ (به سمت راست)، ارزش پارامتر هنوز اولیه نشده است، که خطایی را پرتاب می کند.

</p>
</details>

---

###### 89. خروجی چیست؟?

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
- D: اعتراض جهانی `module.js`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با `import * as name` ما واردات _همه صادرات_ از سوی `module.js` فایل در `index.js` فایل به عنوان یک شیء جدید به نام `data` ساخته شده است. در `module.js` فایل، دو صادرات وجود دارد: صادرات پیش فرض و صادرات نام دارد. صادرات پیش فرض یک تابع است که رشته را برگرداند `"Hello World"`و صادرات به نام یک متغیر به نام `name` که ارزش رشته را دارد `"Lydia"`.

The `data` یک شی `default` اموال برای صادرات پیش فرض، سایر خواص نام صادرات و ارزش های مربوطه خود را دارند.

</p>
</details>

---

###### 90. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

کلاس ها شکر عملی برای سازندگان تابع هستند. معادل آن `Person` کلاس به عنوان یک سازنده تابع خواهد بود:

```javascript
function Person(name) {
  this.name = name;
}
```

فراخوانی یک سازنده تابع با `new` نتیجه ایجاد یک نمونه `Person`, `typeof` کلمه کلیدی بازگشت `"object"` برای مثال. `typeof member` بازگشت `"object"`.

</p>
</details>

---

###### 91. خروجی چیست؟?

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `.push` روش بازگشت _طول جدید_ نه خود آرایه! سوگند به نفس `newList` برابر با `[1, 2, 3].push(4)`ما تنظیم می کنیم `newList` برابر با طول جدید آرایه: `4`.

سپس سعی می کنیم از آن استفاده کنیم `.push` روش در `newList`از `newList` ارزش عددی `4`ما نمی توانیم از آن استفاده کنیم `.push` روش: یک مهاجم پرتاب می شود.

</p>
</details>

---

###### 92. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

توابع منظم، مانند `giveLydiaPizza` عملکرد، داشتن یک `prototype` مالکیت، که یک شی (prototype object) با یک شی است `constructor` مالکیت با این حال، فلش مانند `giveLydiaChocolate` عملکرد، این را نداشته باشید `prototype` مالکیت. `undefined` بازگشت به هنگام تلاش برای دسترسی `prototype` استفاده از ملک `giveLydiaChocolate.prototype`.

</p>
</details>

---

###### 93. خروجی چیست؟?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` و `age` `21`
- B: `["name", "Lydia"]` و `["age", 21]`
- C: `["name", "age"]` و `undefined`
- D: `Error`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

`Object.entries(person)` یک آرایه از آرایه های لانه دار، حاوی کلید ها و اشیاء:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

استفاده از `for-of` حلقه، ما می توانیم بیش از هر عنصر در آرایه، زیر تابش در این مورد. ما می توانیم فوراً زیر آرایه را در حلقه برای استفاده از، با استفاده از `const [x, y]`. `x` برابر با اولین عنصر در subarray است, `y` برابر با عنصر دوم در subarray است.

اولین زیرمجموعه `[ "name", "Lydia" ]`با `x` برابر با `"name"`و `y` برابر با `"Lydia"`که وارد می شود.
دومین زیرمجموعه `[ "age", 21 ]`با `x` برابر با `"age"`و `y` برابر با `21`که وارد می شود.

</p>
</details>

---

###### 94. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

`...args` یک پارامتر استراحت است. ارزش پارامتر باقی مانده یک آرایه حاوی تمام استدلال های باقی مانده است, **و تنها می تواند آخرین پارامتر باشد**! در این مثال، پارامتر دوم بود. این کار امکان پذیر نیست و خطایی را پرتاب می کند.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
```

مثال بالا کار می کند. این آرایه را باز می گرداند `[ 'banana', 'apple', 'orange', 'pear' ]`

</p>
</details>

---

###### 95. خروجی چیست؟?

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

- A: `a is bigger`, `6` و `b is bigger`, `3`
- B: `a is bigger`, `undefined` و `b is bigger`, `undefined`
- C: `undefined` و `undefined`
- D: `SyntaxError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

در جاوا اسکریپت، ما نمی توانیم _داشته باشند_ برای نوشتن نیمکولون (`;`به وضوح، با این حال، موتور جاوا اسکریپت هنوز آنها را پس از اظهارات اضافه می کند. این نامیده می شود **Automatic Semicolon Effects**یک عبارت می تواند متغیرهای یا کلمات کلیدی مانند `throw`, `return`, `break`و غیره.

در اینجا، ما یک نوشتیم `return` بیانیه و ارزش دیگر `a + b` در یک _خط جدید_با این حال، از آنجا که یک خط جدید است، موتور نمی داند که در واقع ارزش بازگشت ما است. در عوض، آن را به طور خودکار یک نیمه پس از اضافه کردن `return`شما می توانید این را ببینید:

```javascript
return;
a + b;
```

این بدان معنی است که `a + b` هرگز به دست نمی آید، زیرا یک تابع پس از دویدن متوقف می شود `return` کلمه کلیدی اگر هیچ ارزشی بازگردانده نشود، مانند اینجا، تابع برگشت می یابد `undefined`توجه داشته باشید که پس از ورود خودکار پس از `if/else` اظهارات!

</p>
</details>

---

###### 96. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

ما می توانیم کلاس ها را برابر با سایر کلاس ها / سازنده های تابع تنظیم کنیم. در این مورد، ما تنظیم کردیم `Person` برابر با `AnotherPerson`نام این سازنده، `Sarah`نام ملک بر روی مالکیت جدید `Person` مثال `member` است `"Sarah"`.

</p>
</details>

---

###### 97. خروجی چیست؟?

```javascript
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` و `["{Symbol('a')"]`
- B: `{}` و `[]`
- C: `{ a: "b" }` و `["a"]`
- D: `{Symbol('a'): 'b'}` و `[]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

نماد نیست _قابل استفاده_روش Object.keys همه چیز را بازمی گرداند _قابل استفاده_ ویژگی های کلیدی در یک شی نماد قابل مشاهده نخواهد بود و یک آرایه خالی بازگردانده می شود. هنگامی که کل شیء را وارد کنید، تمام خواص قابل مشاهده خواهد بود، حتی غیر قابل انعطاف.

این یکی از ویژگی های بسیاری از یک نماد است: علاوه بر نمایندگی از یک ارزش کاملا منحصر به فرد (که مانع از برخورد نام تصادفی بر روی اشیاء می شود، به عنوان مثال زمانی که کار با دو کتابخانه که می خواهند خواص را به یک شی اضافه کنند)، شما همچنین می توانید خواص "پوشیدن" را بر روی اشیاء (اگر چه به طور کامل. شما هنوز هم می توانید به نمادها با استفاده از `Object.getOwnPropertySymbols()` روش).

</p>
</details>

---

###### 98. خروجی چیست؟?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` و `SyntaxError`
- B: `[1, [2, 3, 4]]` و `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` و `{ name: "Lydia", age: 21 }`
- D: `Error` و `{ name: "Lydia", age: 21 }`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

The `getList` عملکرد یک آرایه را به عنوان استدلال آن دریافت می کند. میان والدین `getList` عملکرد، ما این آرایه را بلافاصله از بین می بریم. می توانید این را ببینید:

`[x, ...y] = [1, 2, 3, 4]`

با پارامتر بقیه `...y`ما همه استدلال های "نگهداری" را در یک آرایه قرار می دهیم. استدلال های باقی مانده `2`, `3` و `4` در این مورد. ارزش `y` یک آرایه است که شامل تمام پارامترهای باقی مانده است. ارزش `x` برابر با `1` در این صورت، هنگامی که وارد می شویم `[x, y]`, `[1, [2, 3, 4]]` وارد می شود.

The `getUser` عملکرد یک شی را دریافت می کند. با فلش توابع، ما نمی کنیم _داشته باشند_ برای نوشتن براکت ها اگر فقط یک مقدار را بازگردانیم. اگر می خواهید فوراً برگردید _object_ از یک تابع فلش، شما باید آن را بین پرانتز بنویسید، در غیر این صورت همه چیز بین دو بریس به عنوان یک بیانیه بلوک تفسیر خواهد شد. در این مورد کد بین بریس ها یک کد جاوا اسکریپت معتبر نیست، بنابراین یک کد جاوا اسکریپت معتبر نیست `SyntaxError` پرتاب می شود. 

تابع زیر یک شیء را برگرداند:

`const getUser = user => ({ name: user.name, age: user.age })`

</p>
</details>

---

###### 99. خروجی چیست؟?

```javascript
const name = 'Lydia';

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

متغیر `name` ارزش یک رشته را حفظ می کند که تابع نیست و بنابراین نمی تواند مورد استفاده قرار گیرد.

TypeErrors زمانی که یک ارزش از نوع مورد انتظار نیست پرتاب می شوند. جاوا اسکریپت انتظار `name` به عنوان یک تابع از آنجایی که ما تلاش می کنیم آن را فراخوانی کنیم. با این حال، یک رشته بود، بنابراین یک تایپه پرتاب می شود: نام یک تابع نیست!

SyntaxErrors زمانی که شما چیزی نوشته اید که معتبر جاوا اسکریپت نیست پرتاب می شوند، به عنوان مثال زمانی که کلمه را نوشته اید `return` مانند `retrun`.
مرجع هنگامی که جاوا اسکریپت قادر به پیدا کردن یک مرجع به یک ارزش است که شما در حال تلاش برای دسترسی.

</p>
</details>

---

###### 100. ارزش خروجی چیست؟?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

`[]` یک ارزش واقعی است. با `&&` اپراتور، ارزش دست راست بازگردانده خواهد شد اگر ارزش دست چپ یک ارزش واقعی باشد. در این مورد، ارزش دست چپ `[]` ارزش واقعی است، بنابراین `"Im'` بازگشت.

`""` یک ارزش بد است. اگر ارزش دست چپ منفی باشد، هیچ چیز بازگردانده نمی شود. `n't` بازگردانده نمی شود.

</p>
</details>

---

###### 101. ارزش خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `||` ما می توانیم اولین اپرا واقعی را بازگردانیم. اگر تمام ارزش ها بد باشند، آخرین اپراها بازگردانده می شوند.

`(false || {} || null)`موضوع خالی: `{}` یک ارزش واقعی است. این اولین و تنها ارزش واقعی است که بازگشت می شود. `one` برابر با `{}`.

`(null || false || "")`همه اپراها ارزش های بد هستند. این بدان معنی است که آخرین اپرا, `""` بازگشت. `two` برابر با `""`.

`([] || 0 || "")`آرایه خالی`[]` یک ارزش واقعی است. این اولین ارزش واقعی است که برگردانده می شود. `three` برابر با `[]`.

</p>
</details>

---

###### 102. ارزش خروجی چیست؟?

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

- A: `I have resolved!`, `second` و `I have resolved!`, `second`
- B: `second`, `I have resolved!` و `second`, `I have resolved!`
- C: `I have resolved!`, `second` و `second`, `I have resolved!`
- D: `second`, `I have resolved!` و `I have resolved!`, `second`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

با یک وعده، ما اساسا می گوییم _من می خواهم این عملکرد را اجرا کنم، اما فعلاً آن را کنار می گذارم، در حالی که این کار ممکن است مدتی طول بکشد. تنها زمانی که یک مقدار مشخص حل می شود (یا رد می شود)، و وقتی که پشته تماس خالی است، می خواهم از این ارزش استفاده کنم._

ما می توانیم این ارزش را با هر دو `.then` و `await` کلمات کلیدی در `async` تابع اگر چه می توانیم ارزش وعده را با هر دو `.then` و `await`کمی متفاوت کار می کنند.

در `firstFunction`, ما (sort of) تابع myPromise را در حالی که در حال اجرا بود، اما ادامه اجرای کد دیگر، که است که است `console.log('second')` در این مورد. سپس، تابع حل شده با رشته `I have resolved`که پس از آن ثبت شد، دید که زنگ خالی است.

با کلمه کلیدی انتظار در `secondFunction`ما به معنای واقعی کلمه اجرای تابع async را متوقف می کنیم تا زمانی که ارزش قبل از حرکت به خط بعدی حل شود.

این بدان معنی است که آن را برای `myPromise` حل کردن با ارزش `I have resolved`و تنها زمانی که اتفاق افتاد، به خط بعدی حرکت کردیم: `second` وارد شد.

</p>
</details>

---

###### 103. ارزش خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `+` اپراتور نه تنها برای اضافه کردن ارزش های عددی مورد استفاده قرار می گیرد، بلکه می توانیم از آن برای جذب رشته استفاده کنیم. هر بار که موتور جاوا اسکریپت می بیند که یک یا چند مقدار عدد نیست، عدد را به یک رشته تقسیم می کند.

اولین کسی است که `1`که یک ارزش عددی است. `1 + 2` شماره 3 را باز کنید.

با این حال، دومی یک رشته است `"Lydia"`. `"Lydia"` یک رشته و `2` شماره: `2` وارد یک رشته می شود. `"Lydia"` و `"2"` ادغام می شوند، که منجر به رشته می شود `"Lydia2"`.

`{ name: "Lydia" }` یک شی است. نه یک عدد و نه یک شی یک رشته است، بنابراین هر دو را تقویت می کند. هر بار که ما یک جسم منظم را ایجاد می کنیم، آن را می سازد `"[object Object]"`. `"[object Object]"` همراه با `"2"` تبدیل می شود `"[object Object]2"`.

</p>
</details>

---

###### 104. ارزش آن چیست؟?

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

ما می توانیم هر نوع ارزشی را که می خواهیم را پاس کنیم `Promise.resolve`یا یک وعده یا یک وعده غیر قانونی. این روش به خودی خود وعده ای را با ارزش حل شده (`<fulfilled>`) اگر یک تابع منظم را تصویب کنید، یک وعده حل شده با ارزش منظم خواهد بود. اگر شما یک وعده را تصویب کنید، یک وعده حل شده با ارزش حل شده آن وعده تصویب شده است.

در این مورد، ما فقط ارزش عددی را تصویب کردیم `5`بازگشت یک وعده حل شده با ارزش `5`.

</p>
</details>

---

###### 105. ارزش آن چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

اشیاء توسط مرجع منتقل می شوند. هنگامی که ما اشیا را برای برابری سخت چک می کنیم (`===`ما منابع آنها را مقایسه می کنیم.

ما ارزش پیش فرض را برای `person2` برابر با `person` جسم، و عبور `person` جسم به عنوان ارزش برای `person1`.

این بدان معنی است که هر دو ارزش یک مرجع به همان نقطه در حافظه دارند، بنابراین آنها برابر هستند.

بلوک کد در `else` بیانیه اجرا می شود و `They are the same!` وارد می شود.

</p>
</details>

---

###### 106. ارزش آن چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

در جاوا اسکریپت، ما دو راه برای دسترسی به خواص بر روی یک شی داریم: پیوند براکت یا عدم اطلاع. در این مثال، ما از عدم استفاده استفاده می کنیم`colorConfig.colors`به جای ثبت براکت ()`colorConfig["colors"]`).

با اشاره، جاوا اسکریپت تلاش می کند تا ملک را در جسم با این نام دقیق پیدا کند. در این مثال، جاوا اسکریپت تلاش می کند تا یک ملک به نام آن پیدا کند `colors` در `colorConfig` جسم هیچ اموالی به نام `colors`پس این بازگشت `undefined`سپس سعی می کنیم با استفاده از استفاده از عنصر اول به ارزش عنصر اول دسترسی پیدا کنیم `[1]`ما نمی توانیم این کار را با ارزشی انجام دهیم که `undefined`پس آن را پرتاب می کند `TypeError`: `Cannot read property '1' of undefined`.

کلمات جاوا اسکریپت (یا Unboxes) را تفسیر می کند. هنگامی که از نشانه گذاری براکت استفاده می کنیم، اولین براکت باز را می بیند `[` و ادامه می دهد تا زمانی که آن را پیدا کند `]`فقط پس از آن، این بیانیه را ارزیابی خواهد کرد. اگر استفاده می کردیم `colorConfig[colors[1]]`ارزش آن را برگردانده بود `red` اموال در `colorConfig` جسم.

</p>
</details>

---

###### 107. ارزش آن چیست؟?

```javascript
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

در زیر کاپوت، ایموجی ها منحصر به فرد هستند. کد های منحصر به فرد برای Emoji قلب است `"U+2764 U+FE0F"`این ها همیشه برای همان ایموجی ها یکسان هستند، بنابراین ما دو رشته برابر را با یکدیگر مقایسه می کنیم که درست می شود.

</p>
</details>

---

###### 108. کدام یک از این روش ها آرایه اصلی را اصلاح می کنند؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

با `splice` روش، ما آرایه اصلی را با حذف، جایگزینی یا اضافه کردن عناصر تغییر می دهیم. در این مورد، ما دو مورد را از فهرست 1 حذف کردیم (ما حذف کردیم) `'🥑'` و `'😍'`و به جای آن ✨ emoji اضافه کرد.

`map`, `filter` و `slice` بازگشت یک آرایه جدید،, `find` بازگشت یک عنصر و `reduce` بازگشت به یک ارزش کاهش یافته.

</p>
</details>

---

###### 109. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

ما ارزش را تعیین می کنیم `favoriteFood` اموال در `info` شی برابر با رشته با emoji پیتزا،, `'🍕'`یک رشته یک نوع داده اولیه است. در جاوا اسکریپت، انواع داده های اولیه با مرجع ارتباط برقرار نمی کنند.

در جاوا اسکریپت، انواع داده های اولیه (همه چیز که یک شی نیست) با تعامل با _ارزش_در این مورد، ما ارزش را تعیین می کنیم `favoriteFood` اموال در `info` جسم برابر با ارزش عنصر اول در `food` آرایه، رشته با emoji پیتزا در این مورد (`'🍕'`) یک رشته یک نوع داده اولیه است و با ارزش ارتباط برقرار می کند (نگاه کنید به من [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) اگر شما علاقه مند به یادگیری بیشتر هستید)

سپس ارزش را تغییر می دهیم `favoriteFood` اموال در `info` جسم The The The The The The `food` آرایه تغییر نکرده است، زیرا ارزش `favoriteFood` فقط یک _کپی_ ارزش عنصر اول در آرایه، و مرجعی به همان نقطه در حافظه ندارد `food[0]`هنگامی که ما مواد غذایی را وارد می کنیم، هنوز آرایه اصلی است, `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. این روش چه می کند؟?

```javascript
JSON.parse();
```

- A: پارس JSON به یک ارزش جاوا اسکریپت
- B: یک شی جاوا اسکریپت به JSON
- C: هر ارزش جاوا اسکریپت به JSON
- D: JSON را به یک شی جاوا اسکریپت متصل می کند

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با `JSON.parse()` روش، ما می توانیم رشته JSON را به یک ارزش جاوا اسکریپت تجزیه کنیم.

```javascript
// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify({ name: 'Lydia' }); // '{"name":"Lydia"}'
JSON.parse(jsonArray); // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. خروجی چیست؟?

```javascript
let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();
```

- A: لیدیا
- B: سارا
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

هر تابع خود را دارد _اجرای متن_ (یا) _دامنه_) The The The The The The `getName` تابع ابتدا در متن خود (scope) ظاهر می شود تا ببیند آیا حاوی متغیر است `name` ما در تلاش برای دسترسی هستیم. در این مورد، `getName` تابع شامل خودش است `name` متغیر: ما متغیر را اعلام می کنیم `name` با `let` کلمه کلیدی و با ارزش `'Sarah'`.

متغیرهای با `let` کلمه کلیدی (و `const`بالا می رود، اما برخلاف `var`, دریافت نکنید <i>اولیه</i>آنها قبل از اینکه خط را اعلام کنیم، قابل دسترسی نیستند. این منطقه را "منطقه مرگ گاه" می نامند. هنگامی که سعی می کنیم قبل از اعلام آنها به متغیرهای دسترسی پیدا کنیم، جاوا اسکریپت یک بار پرتاب می کند `ReferenceError`.

اگر ما اعلام نکردیم `name` متغیر درون `getName` عملکرد، موتور جاوا اسکریپت به نظر می رسد _محدوده زنجیره ای_محدوده بیرونی دارای یک متغیر به نام `name` با ارزش `Lydia`در این صورت، آن را وارد کرده اند `Lydia`.

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

###### 112. خروجی چیست؟?

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

- A: `a` و `a`
- B: `a` و `undefined`
- C: `['a', 'b', 'c']` و `a`
- D: `a` و `['a', 'b', 'c']`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `yield` کلمه کلیدی، ما `yield` ارزش ها در یک تابع ژنراتور با `yield*` کلمه کلیدی، ما می توانیم ارزش ها را از یک تابع ژنراتور دیگر یا یک شیء قابل انعطاف (برای مثال آرایه) به دست آوریم.

In `generatorOne`ما کل آرایه را می سازیم `['a', 'b', 'c']` استفاده از `yield` کلمه کلیدی ارزش `value` اموال بر روی جسم بازگردانده شده توسط `next` روش در `one` (`one.next().value`برابر با کل آرایه `['a', 'b', 'c']`.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

In `generatorTwo`استفاده از `yield*` کلمه کلیدی این بدان معنی است که اولین بار ارزش `two`, برابر با اولی است که در آن دهنده ارزش دارد . سازنده آن آرایه است `['a', 'b', 'c']`اولین ارزش ارائه شده است `a`اولین باری که زنگ می زنیم `two.next().value`, `a` بازگردانده می شود.

```javascript
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</p>
</details>

---

###### 113. خروجی چیست؟?

```javascript
console.log(`${(x => x)('I love')} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

بیانات درون قالب ها ابتدا ارزیابی می شوند. این بدان معنی است که رشته حاوی مقدار بازگشتی از بیان است، بلافاصله تابع ذکر شده است `(x => x)('I love')` در این مورد. ارزش را پاس می کنیم `'I love'` به عنوان یک استدلال برای `x => x` تابع فلش. `x` برابر با `'I love'`که بازگردانده می شود. این نتایج `I love to program`.

</p>
</details>

---

###### 114. چه اتفاقی خواهد افتاد؟?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- A: The `setInterval` فراخوانی نخواهد شد
- B: The `setInterval` callback یک بار فراخوانی می شود
- C: The `setInterval` callback هر ثانیه نامیده می شود
- D: ما هرگز به آن اشاره نکردیم `config.alert()`, config is `null`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

به طور معمول هنگامی که ما اشیاء را برابر با `null`این اشیا می توانند _زباله جمع آوری شده_ همانطور که دیگر هیچ اشاره ای به این موضوع وجود ندارد. با این حال، از آنجایی که تابع callback درون `setInterval` تابع فلش (thusatta to the) `config` شی)، تابع callback هنوز هم یک مرجع به `config` جسم. 
تا زمانی که یک مرجع وجود داشته باشد، شیء زباله جمع آوری نخواهد شد. 
از آنجا که این یک فاصله است، تنظیم `config` برای `null` یا `delete`- `config.alert` فاصله را خراب نکنید، بنابراین فاصله هنوز هم نامیده می شود. 
باید با `clearInterval(config.alert)` برای حذف آن از حافظه.
از آن جا که معلوم نبود، `setInterval` تابع callback هنوز هم هر 1000m (1s) نامیده می شود.

</p>
</details>

---

###### 115. کدام روش (ها) ارزش را برگرداند `'Hello world!'`?

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
- C: 2 و 3
- D: همه آنها

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

هنگام اضافه کردن یک جفت کلید / ارزش با استفاده از `set` روش، کلید ارزش بحث اول را خواهد داشت `set` تابع، و ارزش خواهد بود دومین استدلال تصویب شده به `set` تابع کلید است _تابع_ `() => 'greeting'` در این مورد و ارزش `'Hello world'`. `myMap` اکنون `{ () => 'greeting' => 'Hello world!' }`.

1 اشتباه است، زیرا کلید نیست `'greeting'` اما `() => 'greeting'`.
3 اشتباه است، زیرا ما یک تابع جدید را با انتقال آن به عنوان یک پارامتر به پارامتر ایجاد می کنیم `get` روش تعامل با Object _مرجع_توابع اشیاء هستند، به همین دلیل دو تابع هرگز به شدت برابر نیستند، حتی اگر یکسان باشند: آنها یک مرجع به نقطه دیگری در حافظه دارند.

</p>
</details>

---

###### 116. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

هر دو `changeAge` و `changeAgeAndName` توابع یک پارامتر پیش فرض دارند، یعنی یک _تازه جدید_ ایجاد شی `{ ...person }`این شی دارای کپی از تمام کلید / ارزش ها در `person` جسم.

اول، ما نماز می خوانیم `changeAge` تابع و عبور `person` اعتراض به عنوان استدلال آن این تابع ارزش `age` مالکیت 1. `person` اکنون `{ name: "Lydia", age: 22 }`.

پس از آن، ما از آن استفاده می کنیم `changeAgeAndName` با این حال، ما یک پارامتر را رد نمی کنیم. در عوض، ارزش `x` برابر با یک _جدید_ موضوع: `{ ...person }`از آنجا که یک شی جدید است، بر ارزش های خواص موجود در خواص تاثیر نمی گذارد `person` جسم. `person` هنوز برابر با `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### 117. کدام یک از گزینه های زیر برمی گردند `6`?

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با اپراتور گسترش `...`ما می توانیم _گسترش_ آن را به عناصر فردی. The The The The The The `sumValues` عملکرد سه استدلال را دریافت می کند: `x`, `y` و `z`. `...[1, 2, 3]` در نتیجه `1, 2, 3`که به آن می رویم `sumValues` تابع.

</p>
</details>

---

###### 118. خروجی چیست؟?

```javascript
let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `+=` اپراتور، ما ارزش را افزایش می دهیم `num` سوگند `1`. `num` ارزش اولیه `1`بنابراین، `1 + 1` است `2`موضوع در شاخص دوم در `list` آرایه 🥰 است،, `console.log(list[2])` چاپ 🥰.

</p>
</details>

---

###### 119. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با اپراتور زنجیره ای اختیاری `?.`دیگر لازم نیست که به طور صریح بررسی کنیم که آیا ارزش های عمیق تر تثبیت شده معتبر هستند یا خیر. اگر می خواهیم به یک ملک در یک ملک دسترسی پیدا کنیم `undefined` یا `null` ارزش (_nullish_• اتصالات کوتاه مدت و بازگشت `undefined`.

`person.pet?.name`: `person` یک ملک به نام `pet`: `person.pet` باطل نیست. یک ملک به نام `name`و بازگشت `Mara`.
`person.pet?.family?.name`: `person` یک ملک به نام `pet`: `person.pet` باطل نیست. `pet` انجام می دهد _نه_ یک ملک به نام `family`, `person.pet.family` باطل است. بازگشت بیان `undefined`.
`person.getFullName?.()`: `person` یک ملک به نام `getFullName`: `person.getFullName()` بی فایده نیست و می تواند مورد استفاده قرار گیرد `Lydia Hallie`.
`member.getLastName?.()`متغیر: `member` بنابراین وجود ندارد `ReferenceError` پرتاب می شود!

</p>
</details>

---

###### 120. خروجی چیست؟?

```javascript
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}
```

- A: ما باید موز بخریم!
- B: ما مجبور نیستیم موز بخریم
- C: `undefined`
- D: `1`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

ما شرایط را تصویب کردیم `groceries.indexOf("banana")` در صورتی که دولت. `groceries.indexOf("banana")` بازگشت `0`که یک ارزش بد است. از آنجایی که وضعیت در حالت if-statement falsy است، کد موجود در آن `else` بلوک اجرا می شود و `We don't have to buy bananas!` وارد می شود.

</p>
</details>

---

###### 121. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `language` روش یک `setter`تنظیم کنندگان ارزش واقعی ندارند، هدف آنها این است که _اصلاح_ خواص هنگامی که یک `setter` روش،, `undefined` بازگشت.

</p>
</details>

---

###### 122. خروجی چیست؟?

```javascript
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

`typeof name` بازگشت `"string"`رشته `"string"` ارزش واقعی است، بنابراین `!typeof name` بازگشت ارزش بول `false`. `false === "object"` و `false === "string"` هر دو بازگشت`false`.

(اگر می خواستیم بررسی کنیم که آیا نوع (un) برابر با یک نوع خاص است، باید نوشته شود `!==` به جای `!typeof`)

</p>
</details>

---

###### 123. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

The `add` تابع یک تابع فلش را برمی گرداند، که تابع فلش را برمی گرداند، که تابع فلش (هنوز با من) را برمی گرداند. اولین عملکرد یک استدلال را دریافت می کند `x` با ارزش `4`ما تابع دوم را فراخوان می کنیم که یک استدلال را دریافت می کند `y` با ارزش `5`سپس تابع سوم را به کار می بریم که استدلال می کند `z` با ارزش `6`وقتی سعی می کنیم به ارزش دسترسی پیدا کنیم `x`, `y` و `z` در آخرین تابع فلش، موتور JS زنجیره محدوده را بالا می برد تا ارزش ها را برای پیدا کردن مقادیر برای `x` و `y` بنابراین. این بازگشت `4` `5` `6`.

</p>
</details>

---

###### 124. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

عملکرد ژنراتور `range` بازگشت یک شیء async با وعده برای هر آیتم در محدوده ما عبور: `Promise{1}`, `Promise{2}`, `Promise{3}`ما متغیر را تنظیم کردیم `gen` برابر با یک شیء async، پس از آن ما با استفاده از آن حلقه می کنیم `for await ... of` حلقه ما متغیر را تنظیم کردیم `item` برابر با ارزش های وعده بازگشت: اول `Promise{1}`سپس، `Promise{2}`سپس، `Promise{3}`از آنجایی که ما هستیم _انتظار_ ارزش `item`وعده حل شده، _ارزش ها_ وعده های بازگشت: `1`, `2`سپس، `3`.

</p>
</details>

---

###### 125. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

`myFunc` انتظار یک شی با خواص `x`, `y` و `z` به عنوان استدلال آن از آنجا که ما فقط سه ارزش عددی جداگانه (1، 2، 3) را به جای یک شی با خواص عبور می کنیم `x`, `y` و `z` [x: 1, y: 2 z: 3], `x`, `y` و `z` ارزش پیش فرض خود را دارند `undefined`.

</p>
</details>

---

###### 126. خروجی چیست؟?

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

- A: راننده ۱۳۰ رانندگی کرد و باید ۳۰۰ دلار پرداخت کند
- B: راننده 130 ساعت رانندگی کرد و باید 300 دلار پرداخت کند
- C: راننده بدون تعریف رانندگی کرد و مجبور به پرداخت undefined
- D: راننده 130.00 دلار رانندگی کرد و 300 دلار پرداخت کرد

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `Intl.NumberFormat` روش، ما می توانیم مقادیر عددی را به هر محلی فرمت کنیم. ما ارزش عددی را فرمت می کنیم `130` سوگند به `en-US` محلی به عنوان یک `unit` در `mile-per-hour`که منجر به `130 mph`ارزش عددی `300` سوگند به `en-US` محلی به عنوان یک `currency` در `USD` نتایج `$300.00`.

</p>
</details>

---

###### 127. خروجی چیست؟?

```javascript
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با تخریب اشیاء، ما می توانیم مقادیر را از سمت راست باز کنیم و ارزش بسته بندی نشده را به ارزش همان نام ملک در جسم دست چپ اختصاص دهیم. در این مورد، ما ارزش “💀” را برای “💀” اختصاص می دهیم `spookyItems[3]`این بدان معنی است که ما تغییر می کنیم `spookyItems` آرایه، ما "💀" را به آن اضافه می کنیم. هنگام ورود `spookyItems`, `["👻", "🎃", "🕸", "💀"]` وارد می شود.

</p>
</details>

---

###### 128. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `Number.isNaN` روش، شما می توانید بررسی کنید که آیا ارزش عبور شما یک است _ارزش عددی_ برابر با `NaN`. `name` ارزش عددی نیست، بنابراین `Number.isNaN(name)` بازگشت `false`. `age` ارزش عددی است، اما برابر با آن نیست `NaN`بنابراین، `Number.isNaN(age)` بازگشت `false`.

با `isNaN` روش، شما می توانید بررسی کنید که آیا ارزشی که از آن عبور می کنید عدد نیست. `name` شماره نیست، بنابراین `isNaN(name)` بازگشت واقعی. `age` یک عدد است، بنابراین `isNaN(age)` بازگشت `false`.

</p>
</details>

---

###### 129. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

متغیرهای اعلام شده با `const` کلمه کلیدی قبل از شروع آنها قابل ارجاع نیست: این نامیده می شود _منطقه زمانی مرده_در `getInfo` تابع، متغیر `randomValue` در محدوده عملکردی `getInfo`در خط جایی که می خواهیم ارزش را وارد کنیم `typeof randomValue`متغیر `randomValue` هنوز آغاز نشده است: `ReferenceError` پرتاب می شود! موتور از زنجیره محدوده پایین نیامد، زیرا ما متغیر را اعلام کردیم `randomValue` در `getInfo` تابع.

</p>
</details>

---

###### 130. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

در `try` بلوک، ما ارزش انتظار را وارد می کنیم `myPromise` متغیر: `"Woah some cool data"`از آنجا که هیچ خطایی در آن پرتاب نشد `try` بلوک، کد در `catch` بلوک اجرا نمی شود. کد در `finally` بلوک _همیشه_ اجرا،, `"Oh finally!"` وارد می شود.

</p>
</details>

---

###### 131. خروجی چیست؟?

```javascript
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `flat` ما می توانیم یک آرایه جدید و صاف ایجاد کنیم. عمق آرایه مسطح بستگی به ارزشی دارد که ما می گذریم. در این مورد، ما ارزش را تصویب کردیم `1` (که ما مجبور نبودیم، این ارزش پیش فرض است)، به این معنی که فقط آرایه ها در عمق اول جمع می شوند. `['🥑']` و `['✨', '✨', ['🍕', '🍕']]` در این مورد. ادغام این دو آرایه منجر به `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### 132. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

`counterOne` نمونه ای از `Counter` کلاس کلاس ضد شامل یک `count` مالکیت بر سازنده و `increment` روش اول، ما نماز می خوانیم `increment` روش دو بار با فراخوان `counterOne.increment()`در حال حاضر،, `counterOne.count` است `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

سپس یک متغیر جدید ایجاد می کنیم `counterTwo`و آن را برابر با `counterOne`از آنجا که اشیاء با مرجع ارتباط برقرار می کنند، ما فقط یک مرجع جدید را به همان نقطه در حافظه ایجاد می کنیم که در حافظه است `counterOne` اشاره به از آنجا که دارای همان نقطه در حافظه است، هر گونه تغییراتی که به جسم ایجاد شده است `counterTwo` دارای یک مرجع، همچنین درخواست برای `counterOne`در حال حاضر،, `counterTwo.count` است `2`.

ما نماز می خوانیم `counterTwo.increment()`, که `count` برای `3`پس از آن، ما حساب را بر روی `counterOne`چه کسی وارد می شود `3`.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

اول، ما دعوت می کنیم `funcOne`در خط اول `funcOne`ما زنگ می زنیم _asynchronous_ `setTimeout` تابع، که از آن callback به Web API ارسال می شود. (نگاه کنید به مقاله من در مورد حلقه رویداد <a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif">اینجا</a>.)

سپس ما را صدا می کنیم `myPromise` وعده ای که _asynchronous_ عملیات توجه داشته باشید که در حال حاضر تنها بند اول به خط microtask اضافه شده است.

هر دو وعده و زمان به عنوان عملیات همگام هستند، عملکرد در حال اجرا است در حالی که مشغول تکمیل وعده و رسیدگی به وعده است `setTimeout` callback این بدان معنی است که `Last line 1!` اول وارد می شود، زیرا این یک عملیات یکپارچه نیست. 

از آنجا که زنگ هنوز خالی نیست، `setTimeout` عملکرد و وعده در `funcOne` هنوز نمی توان به زنگ ها اضافه کرد.

In `funcTwo`متغیر `res` دریافت می شود `Promise` چون `Promise.resolve(Promise.resolve('Promise'))` معادل آن `Promise.resolve('Promise')` از زمان حل یک وعده، ارزش آن را برطرف می کند. The The The The The The `await` در این خط، اجرای تابع را متوقف می کند تا زمانی که قطعنامه وعده را دریافت کند و سپس به طور همزمان تا اتمام ادامه یابد، بنابراین `Promise 2!` و سپس `Last line 2!` وارد شده و `setTimeout` به Web API ارسال می شود. اگر پاراگراف اول در `funcOne` قبل از اینکه نوشته شود، چاپ می شود `Promise 2!`Howewer، آن را به آرامی اجرا کرد و سپس بند دوم را در صف microtask قرار داد. بنابراین، بند دوم پس از چاپ خواهد شد `Promise 2!`.

سپس زنگ خالی است. وعده ها _microtasks_ آنها برای اولین بار حل می شوند که پشته تماس خالی است `Promise 1!` وارد می شود.

حالا، از `funcTwo` پشته تماس را خاموش کنید، پشته تماس خالی است. هشدار در صف (`() => console.log("Timeout 1!")` از `funcOne`و `() => console.log("Timeout 2!")` از `funcTwo`به پشته تماس یک به یک اضافه کنید. اولین تماس گیرنده `Timeout 1!`و از پشته خارج می شود. پس از آن، دومین تماس گیرنده `Timeout 2!`و از پشته خارج می شود.

</p>
</details>

---

###### 134. چگونه می توانیم نماز بخوانیم `sum` در `sum.js` از `index.js?`

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
- D: شکست ها وارد نمی شوند `*`فقط به نام صادرات

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با Asterisk `*`ما تمام مقادیر صادر شده را از این فایل، هر دو به طور پیش فرض و نام گذاری شده وارد می کنیم. اگر فایل زیر را داشتیم:

```javascript
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
console.log(info);
```

زیر وارد می شود:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

برای `sum` به این معنی است که ارزش وارداتی `sum` اینطور به نظر می رسد:

```javascript
{ default: function sum(x) { return x + x } }
```

ما می توانیم این تابع را با تماس با `sum.default`

</p>
</details>

---

###### 135. خروجی چیست؟?

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
- D: هیچ چیز وارد نمی شود

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با یک شی پروکسی، ما می توانیم رفتار سفارشی را به یک شی اضافه کنیم که ما به عنوان استدلال دوم به آن منتقل می کنیم. در این مورد، ما عبور می کنیم `handler` چیزی که شامل دو ویژگی است: `set` و `get`. `set` هر بار که نماز بخوانیم _تنظیم_ ارزش های مالکیت و `get` هر بار که نماز بخوانیم _دریافت کنید_ (دسترسی) ارزش های مالکیت.

اولین استدلال یک جسم خالی است `{}`که ارزش آن است `person`برای این شی، رفتار سفارشی مشخص شده در `handler` جسم اضافه می شود. اگر یک ملک به آن اضافه کنیم `person` شی،, `set` دعوت خواهد شد. اگر به یک ملک در `person` شی،, `get` دعوت می شود.

اول، ما یک ملک جدید اضافه کردیم `name` به صورت پروکسی (`person.name = "Lydia"`). `set` استفاده می شود، و `"Added a new property!"`.

پس از آن، ما به یک ارزش مالکیت در جسم پروکسی و `get` اموال در جسم حاکم مورد استفاده قرار می گیرد. `"Accessed a property!"` وارد می شود.

</p>
</details>

---

###### 136. کدام یک از موارد زیر تغییر خواهد کرد `person` شی؟?

```javascript
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با `Object.seal` ما می توانیم از خواص جدید جلوگیری کنیم _اضافه شده اضافه شده_یا خواص موجود _حذف شده_.

با این حال، شما هنوز هم می توانید مقدار خواص موجود را تغییر دهید.

</p>
</details>

---

###### 137. کدام یک از موارد زیر تغییر خواهد کرد `person` شی؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `Object.freeze` روش method _یخ_ یک شی هیچ ویژگی ای نمی تواند اضافه شود، اصلاح شود یا حذف شود.

اما فقط _کم عمق_ جسم را منجمد می کند، به این معنی که فقط _مستقیم_ خواص روی جسم یخ زده است. اگر اموال چیز دیگری است، مانند `address` در این مورد، خواص آن شیء منجمد نیستند و می توانند اصلاح شوند.

</p>
</details>

---

###### 138. خروجی چیست؟?

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` و `3` `6`
- B: `2` `NaN` و `3` `NaN`
- C: `2` `Error` و `3` `6`
- D: `2` `4` و `3` `Error`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

اول، ما دعوت کردیم `myFunc()` بدون هیچ گونه بحثی از آنجا که ما استدلال نمی کنیم،, `num` و `value` ارزش های پیش فرض خود را: num `2`و `value` ارزش بازگشت تابع `add`برای `add` تابع، ما گذر می کنیم `num` به عنوان یک استدلال، که ارزش `2`. `add` بازگشت `4`که ارزش آن است `value`.

سپس به آن اشاره کردیم `myFunc(3)` و ارزش را تصویب کرد `3` ارزش استدلال `num`ما هیچ بحثی را برای `value`از آنجایی که ما برای ارزش گذاری نکردیم `value` استدلال، ارزش پیش فرض را به دست آورد: ارزش بازگشت `add` تابع برای `add`ما می گذریم `num`که ارزش دارد `3`. `add` بازگشت `6`که ارزش آن است `value`.

</p>
</details>

---

###### 139. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

در ES2020، ما می توانیم متغیرهای خصوصی را با استفاده از کلاس ها اضافه کنیم `#`ما نمی توانیم به این متغیرها خارج از کلاس دسترسی داشته باشیم. وقتی سعی می کنیم وارد شویم `counter.#number`یک SyntaxError پرتاب می شود: ما نمی توانیم به خارج از آن دسترسی داشته باشیم `Counter` کلاس!

</p>
</details>

---

###### 140. چه چیزی گم شده است؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

برای آنکه بر فراز `members` در هر عنصر در `teams` آرایه، ما باید عبور کنیم `teams[i].members` سوگند به `getMembers` عملکرد ژنراتور تابع ژنراتور یک شیء ژنراتور را باز می گرداند. برای جذب هر عنصر در این شی ژنراتور، باید از آن استفاده کنیم `yield*`.

اگر می نوشتیم `yield`, `return yield`یا `return`کل عملکرد ژنراتور برای اولین بار که ما آن را نامگذاری کردیم، برگردانده شد `next` روش.

</p>
</details>

---

###### 141. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `addHobby` عملکرد دو استدلال را دریافت می کند،, `hobby` و `hobbies` با ارزش پیش فرض `hobbies` آرایه بر روی آرایه `person` جسم.

اول، ما نماز می خوانیم `addHobby` تابع، و پاس `"running"` به عنوان ارزش برای `hobby` یک آرایه خالی به عنوان ارزش برای `hobbies`از آنجا که ما یک آرایه خالی را به عنوان ارزش برای `hobbies`, `"running"` به این آرایه خالی اضافه می شود.

پس از آن، ما از آن استفاده می کنیم `addHobby` تابع، و پاس `"dancing"` به عنوان ارزش برای `hobby`ما هیچ ارزشی برای آن قائل نبودیم `hobbies`بنابراین ارزش پیش فرض را به دست می آورد، `hobbies` اموال در `person` جسم ما سرگرمی را فشار می دهیم `dancing` سوگند به `person.hobbies` آرایه.

آخر، ما نماز می خوانیم `addHobby` تابع، و پاس `"baking"` به عنوان ارزش برای `hobby`و `person.hobbies` آرایه به عنوان ارزش برای `hobbies`ما سرگرمی را فشار می دهیم `baking` سوگند به `person.hobbies` آرایه.

پس از فشار `dancing` و `baking`ارزش `person.hobbies` است `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 142. خروجی چیست؟?

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
- D: هیچ چیز، ما هیچ روشی را نمی نامیم

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

ما متغیر را ایجاد می کنیم `pet` که نمونه ای از `Flamingo` کلاس هنگامی که ما این نمونه را خلاصه می کنیم، `constructor` در `Flamingo` فراخوانده می شود. اول،, `"I'm pink. 🌸"` پس از آن وارد می شویم، `super()`. `super()` نام سازنده کلاس پدر و مادر, `Bird`سازنده در `Bird` نامیده می شود و `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 143. کدام یک از گزینه ها منجر به خطا می شوند؟?

```javascript
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 و 2
- C: 3 و 4
- D: 3

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `const` کلمه کلیدی به این معنی است که ما نمی توانیم _قرمز_ ارزش این متغیر، آن است _فقط خواندن_با این حال، خود ارزش قابل تغییر نیست. خواص در `emojis` آرایه را می توان اصلاح کرد، به عنوان مثال با فشار دادن ارزش های جدید، جعل آنها یا تنظیم طول آرایه به 0.

</p>
</details>

---

###### 144. آنچه باید به آن اضافه کنیم `person` اعتراض به `["Lydia Hallie", 21]` به عنوان خروجی `[...person]`?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: هیچ چیز، جسم به طور پیش فرض قابل اعتماد نیست
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

اشیاء به طور پیش فرض قابل استفاده نیستند. آن قابل استفاده است اگر پروتکل محرک وجود داشته باشد. ما می توانیم این را به صورت دستی با اضافه کردن نماد آنگر اضافه کنیم `[Symbol.iterator]`به عنوان مثال، که باید یک شیء ژنراتور را بازگرداند، با تبدیل آن به یک تابع ژنراتور `*[Symbol.iterator]() {}`این تابع ژنراتور باید عملکرد را انجام دهد `Object.values` سوگند به نفس `person` اگر بخواهیم آن را بازگردانیم `["Lydia Hallie", 21]`: `yield* Object.values(this)`.

</p>
</details>

---

###### 145. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `if` وضعیت درون `forEach` حلقه چک می کند که آیا ارزش `num` حقیقت یا بد است. از اولین شماره در `nums` آرایه است `0`, یک ارزش بد  `if` بلوک کد بیانیه اجرا نخواهد شد. `count` فقط برای سه عدد دیگر افزایش می یابد `nums` آرایه،, `1`, `2` و `3`از `count` افزایش می یابد `1` 3 بار، ارزش `count` است `3`.

</p>
</details>

---

###### 146. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `?` به ما اجازه می دهد تا به صورت اختیاری به خواص عمیق تر در داخل اشیا دسترسی داشته باشیم. ما در حال تلاش برای وارد کردن آیتم در index هستیم `1` در داخل subarray که در index قرار دارد `1` سوگند به نفس `fruits` آرایه اگر زیرمجموعه در index `1` در `fruits` آرایه وجود ندارد، آن را به سادگی بازگشت `undefined`اگر زیرمجموعه در index `1` در `fruits` آرایه وجود دارد، اما این subarray یک آیتم در آن ندارد `1` شاخص، آن را نیز بازگشت `undefined`. 

اول، ما تلاش می کنیم تا آیتم دوم را وارد کنیم `['🍍']` دانلود زیرنویس فارسی فیلم subarray `[['🍊', '🍌'], ['🍍']]`این subarray فقط شامل یک آیتم است، به این معنی که هیچ موردی در شاخص وجود ندارد `1`و بازگشت `undefined`.

پس از آن، ما تسلیم می شویم `getFruits` عملکرد بدون انتقال ارزش به عنوان یک استدلال، به این معنی است که `fruits` ارزش `undefined` به طور پیش فرض از آنجایی که ما به طور مشروط محصول را در فهرست بندی می کنیم `1` از`fruits`بازگشت `undefined` از آنجا که این مورد در index `1` وجود ندارد. 

در نهایت، ما تلاش می کنیم تا آیتم دوم را وارد کنیم `['🍊', '🍌']` دانلود زیرنویس فارسی فیلم subarray `['🍍'], ['🍊', '🍌']`موضوع در index `1` در داخل این زیراب `🍌`که وارد می شود.

</p>
</details>

---

###### 147. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

ما متغیر را تنظیم کردیم `calc` برابر با یک نمونه جدید `Calc` کلاس سپس یک نمونه جدید از `Calc`و نماز را بخوانید `increase` روش در این مثال از آنجا که اموال شمارش در سازنده `Calc` طبقه، اموال شمارش در نمونه اولیه از `Calc`این بدان معنی است که ارزش شمارش به عنوان مثال نقاط calc به روز نشده است، شمارش هنوز هم است `0`.

</p>
</details>

---

###### 148. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

The `updateUser` تابع به روز رسانی ارزش های `email` و `password` ویژگی های کاربری، اگر ارزش های آنها به تابع منتقل شود، پس از آن تابع بازگشت می کند `user` جسم ارزش بازگشت `updateUser` تابع است `user` شی، که به این معنی است که ارزش کاربر به روز شده یک مرجع به همان است `user` آن شی که `user` اشاره به. `updatedUser === user` برابر برابر با `true`.

</p>
</details>

---

###### 149. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

اول، ما نماز می خوانیم `slice` روش بر روی آرایه میوه روش برش آرایه اصلی را تغییر نمی دهد، اما مقدار را که از آرایه جدا شده است، باز می گرداند: ایموجی موز.
پس از آن، ما از آن استفاده می کنیم `splice` روش بر روی آرایه میوه روش splice آرایه اصلی را تغییر می دهد، به این معنی که آرایه میوه در حال حاضر شامل `['🍊', '🍎']`.
در نهایت، ما از آن استفاده می کنیم `unshift` روش در `fruit` آرایه، که آرایه اصلی را با اضافه کردن مقدار ارائه شده، "🍇" در این مورد، به عنوان اولین عنصر در آرایه اصلاح می کند. مجموعه میوه در حال حاضر شامل `['🍇', '🍊', '🍎']`.

</p>
</details>

---

###### 150. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

کلید های شی به رشته تبدیل می شوند. 

از آنجایی که ارزش  `dog` یک شی است،,  `animals[dog]` در واقع به این معنی است که ما در حال ایجاد یک ملک جدید به نام `"[object Object]"` برابر با جسم جدید. `animals["[object Object]"]` اکنون برابر با `{ emoji: "🐶", name: "Mara"}`.

`cat` همچنین یک شی است که به این معنی است که `animals[cat]` در واقع به این معنی است که ما ارزش نوشتن را به دست می آوریم  `animals["[object Object]"]` با خواص گربه جدید. 

ورود `animals[dog]`یا در واقع `animals["[object Object]"]` از زمان تبدیل `dog` اعتراض به نتایج رشته `"[object Object]"`بازگشت `{ emoji: "🐈", name: "Sara" }`.

</p>
</details>

---

###### 151. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

The `updateEmail` تابع یک تابع فلش است و به تابع نیست `user` جسم این بدان معنی است که `this` کلمه کلیدی به کلمه کلیدی اشاره نمی کند `user` موضوع، اما اشاره به دامنه جهانی در این مورد. ارزش `email` درون `user` جسم به روز نمی شود. هنگام ثبت ارزش `user.email`ارزش اصلی `my@email.com` بازگشت. 

</p>
</details>

---

###### 152. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

The `Promise.all` این روش وعده های تصویب شده را به صورت موازی اجرا می کند. اگر یک وعده شکست بخورد، `Promise.all` روش method _انکار_ با ارزش وعده رد شده در این مورد،, `promise3` با ارزش رد می شود `"Third"`ما ارزش رد شده را در زنجیره ای می گیریم `catch` روش در `runPromises` تلاش برای گرفتن هر گونه خطا در داخل `runPromises` تابع فقط `"Third"` وارد می شود، زیرا `promise3` با این ارزش رد می شود.

</p>
</details>

---

###### 153. چه چیزی باید ارزش `method` برای ورود `{ name: "Lydia", age: 22 }`? 

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

The `fromEntries` این روش یک آرایه 2d را به یک شی تبدیل می کند. اولین عنصر در هر subarray کلید خواهد بود و عنصر دوم در هر subarray ارزش خواهد داشت. در این مورد، ما بر روی نقشه برداری می کنیم `keys` آرایه، که آرایه ای را برمی گرداند که عنصر اول در آرایه کلیدی در شاخص فعلی است، و عنصر دوم، مورد آرایه ارزش ها در شاخص فعلی است. 

این باعث ایجاد یک آرایه از زیرمجموعه حاوی کلید ها و ارزش های صحیح می شود که منجر به آن می شود `{ name: "Lydia", age: 22 }`

</p>
</details>

---

###### 154. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

ارزش پیش فرض `address` یک جسم خالی `{}`وقتی متغیر را تنظیم می کنیم `member` برابر با جسم بازگشت شده توسط `createMember` عملکرد، ما یک ارزش برای آدرس را تصویب نکردیم، به این معنی که ارزش آدرس، جسم خالی پیش فرض است `{}`یک شی خالی یک ارزش واقعی است، به این معنی که وضعیت شرایط `address ? address : null` بازگشت مشروط `true`ارزش آدرس، جسم خالی است `{}`.

</p>
</details>

---

###### 155. خروجی چیست؟?

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

وضعیت درون `if` بررسی اینکه آیا ارزش `!typeof randomValue` برابر با `"string"`.. `!` اپراتور ارزش را به یک ارزش بولی تبدیل می کند. اگر ارزش حقیقت باشد، ارزش بازگشت خواهد بود `false`اگر ارزش بد باشد، ارزش بازگشت خواهد بود `true`در این مورد، ارزش بازگشت `typeof randomValue` ارزش واقعی `"number"`به این معنی که ارزش `!typeof randomValue` ارزش boolean `false`.

`!typeof randomValue === "string"` همیشه دروغ می گوییم، چون در واقع چک می کنیم `false === "string"`از آنجا که وضعیت بازگشت `false`بلوک کد `else` بیانیه اجرا می شود و `Yay it's a string!` وارد می شود.

</p>
</details>
