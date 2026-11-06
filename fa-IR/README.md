<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>پرسش‌های جاوااسکریپت</h1>
</div>

> [!NOTE]
> این مخزن در سال ۲۰۱۹ ساخته شده است؛ بنابراین سؤال‌ها بر پایهٔ نحو و رفتار جاوااسکریپت در آن زمان نوشته شده‌اند. جاوااسکریپت پیوسته تکامل پیدا می‌کند و برخی قابلیت‌های جدیدتر زبان در این مجموعه پوشش داده نشده‌اند.

از مقدماتی تا پیشرفته: دانشتان از جاوااسکریپت را بسنجید، آموخته‌هایتان را مرور کنید یا برای مصاحبهٔ برنامه‌نویسی آماده شوید! 💪 🚀 نویسنده این مخزن را با سؤال‌های تازه به‌روز می‌کند. پاسخ‌ها در **بخش‌های بازشدنی** زیر هر سؤال قرار دارند؛ برای دیدنشان کافی است روی «پاسخ» کلیک کنید. این مجموعه برای سرگرمی و یادگیری است؛ موفق باشید! ❤️

برای ارتباط با نویسنده: [اینستاگرام](https://www.instagram.com/theavocoder) | [توییتر](https://www.twitter.com/lydiahallie) | [لینکدین](https://www.linkedin.com/in/lydia-hallie) | [وبلاگ](https://www.lydiahallie.io/)

می‌توانید از این سؤال‌ها در پروژه‌هایتان استفاده کنید! 😃 نویسنده از ارجاع به این مخزن استقبال می‌کند. سؤال‌ها و توضیح‌ها را نویسنده تهیه کرده و جامعهٔ مشارکت‌کنندگان در نگهداری و بهبود آن کمک می‌کنند. سپاس و از یادگیری لذت ببرید! 💪🏼

این نسخه شامل ترجمهٔ فارسی هر ۱۵۵ سؤال، گزینه‌ها و توضیح پاسخ‌ها است. کدها و مقدارهای خروجیِ داخل آن‌ها بدون تغییر حفظ شده‌اند.

[متن اصلی انگلیسی و ترجمه‌های دیگر](../README.md)

---

###### 1. خروجی چیست؟

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

درون تابع، متغیر `name` با `var` اعلان می‌شود. این متغیر بالاکشی (hoist) می‌شود؛ یعنی در مرحلهٔ ایجاد، حافظه‌ای برای آن اختصاص می‌یابد و تا رسیدن به خط مقداردهی، مقدار پیش‌فرض `undefined` را دارد. هنگام چاپ `name` هنوز مقداردهی انجام نشده است؛ بنابراین `undefined` چاپ می‌شود.

متغیرهای `let` و `const` نیز بالاکشی می‌شوند، اما برخلاف `var` مقداردهی اولیه نمی‌شوند. پیش از رسیدن به خط اعلان و مقداردهی اولیه نمی‌توان به آن‌ها دسترسی داشت. به این بازه «ناحیهٔ مردهٔ زمانی» (temporal dead zone) می‌گویند. دسترسی به متغیر در این بازه باعث خطای `ReferenceError` می‌شود.

</p>
</details>

---

###### 2. خروجی چیست؟

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

به‌دلیل صف رویدادها در جاوااسکریپت، تابع بازگشتی `setTimeout` پس از پایان حلقه اجرا می‌شود. در حلقهٔ اول، `i` با `var` اعلان شده و در این مثال در محدودهٔ سراسری قرار دارد. عملگر یکانی `++` در هر تکرار مقدار آن را یک واحد افزایش می‌دهد. هنگام اجرای تابع‌های بازگشتی، مقدار `i` برابر با `3` است.

در حلقهٔ دوم، `i` با `let` اعلان شده است. متغیرهای `let` و `const` محدودهٔ بلوکی دارند؛ بلوک بخشی است که میان `{ }` قرار می‌گیرد. در هر تکرار، اتصال جداگانه‌ای برای `i` ایجاد می‌شود و هر تابع بازگشتی به مقدار مربوط به همان تکرار دسترسی دارد.

</p>
</details>

---

###### 3. خروجی چیست؟

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

مقدار `diameter` یک تابع معمولی است، اما مقدار `perimeter` یک تابع پیکانی است.

در تابع پیکانی، برخلاف تابع معمولی، مقدار `this` از محدودهٔ پیرامون گرفته می‌شود. بنابراین هنگام فراخوانی `perimeter`، مقدار `this` به شیء `shape` اشاره نمی‌کند، بلکه به مقدار آن در محدودهٔ پیرامون اشاره دارد؛ برای مثال، در مرورگر می‌تواند `window` باشد.

در شرایط فرض‌شده در این مثال، ویژگی `radius` در آن محدوده وجود ندارد. بنابراین `this.radius` مقدار `undefined` می‌دهد و حاصل ضرب آن در `2 * Math.PI` برابر با `NaN` می‌شود.

</p>
</details>

---

###### 4. خروجی چیست؟

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

عملگر مثبتِ یکانی تلاش می‌کند عملوند خود را به عدد تبدیل کند. `true` به `1` و `false` به `0` تبدیل می‌شود.

رشتهٔ `'Lydia'` یک مقدار درست‌نما (truthy) است. با عملگر `!` در واقع می‌پرسیم: «آیا این مقدار درست‌نما، نادرست‌نما (falsy) است؟» نتیجه `false` است.

</p>
</details>

---

###### 5. کدام گزینه درست است؟

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` معتبر نیست.
- B: `mouse[bird.size]` معتبر نیست.
- C: `mouse[bird["size"]]` معتبر نیست.
- D: همهٔ عبارت‌ها معتبر هستند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

در جاوااسکریپت، تمام کلیدهای شیء رشته هستند، مگر اینکه از نوع `Symbol` باشند. حتی اگر آن‌ها را به‌شکل رشته ننویسیم، در پشت صحنه به رشته تبدیل می‌شوند.

جاوااسکریپت عبارت‌ها را تفسیر و ارزیابی می‌کند. هنگام استفاده از نشانه‌گذاری کروشه‌ای، عبارت میان `[` و `]` ارزیابی می‌شود و نتیجه به‌عنوان کلید ویژگی به کار می‌رود.

در `mouse[bird.size]`، ابتدا `bird.size` ارزیابی می‌شود که مقدارش `"small"` است. سپس `mouse["small"]` مقدار `true` می‌دهد.

در نشانه‌گذاری نقطه‌ای چنین اتفاقی نمی‌افتد. شیء `mouse` کلیدی به نام `bird` ندارد؛ بنابراین `mouse.bird` برابر با `undefined` است. سپس در `mouse.bird.size` ویژگی `size` را از آن درخواست می‌کنیم؛ یعنی عملاً به `undefined.size` دسترسی می‌خواهیم. این کار معتبر نیست و خطایی شبیه به `Cannot read property "size" of undefined` ایجاد می‌کند.

</p>
</details>

---

###### 6. خروجی چیست؟

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

در جاوااسکریپت، هنگام انتساب متغیرهای حاوی شیء به یکدیگر، ارجاع شیء منتقل می‌شود.

ابتدا `c` ارجاعی به یک شیء نگه می‌دارد. سپس همان ارجاعی را که `c` دارد، به `d` نسبت می‌دهیم.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

تغییر شیء از طریق یکی از این متغیرها، از طریق دیگری نیز دیده می‌شود؛ چون هر دو به همان شیء اشاره می‌کنند.

</p>
</details>

---

###### 7. خروجی چیست؟

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

`new Number()` از سازندهٔ داخلی `Number` یک شیء می‌سازد. نتیجه با اینکه شبیه عدد است، یک مقدار عددی اولیه نیست؛ بلکه شیئی با قابلیت‌های اضافی است.

عملگر برابری `==` با انجام تبدیل نوع، مقدارها را مقایسه می‌کند. در این مثال، مقدار عددی هر دو طرف `3` است؛ بنابراین نتیجه `true` می‌شود.

اما در عملگر برابری سخت‌گیرانهٔ `===`، هم مقدار و هم نوع باید یکسان باشند. نتیجهٔ `new Number()` یک شیء است، درحالی‌که طرف دیگر عدد اولیه است. بنابراین نتیجهٔ هر دو مقایسهٔ سخت‌گیرانه `false` می‌شود.

</p>
</details>

---

###### 8. خروجی چیست؟

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

تابع `colorChange` ایستا (static) است. متدهای ایستا روی خودِ سازندهٔ کلاس تعریف می‌شوند و از طریق نمونه‌های کلاس در دسترس نیستند. چون `freddie` یک نمونه از کلاس `Chameleon` است، نمی‌توان این تابع را روی آن فراخوانی کرد؛ در نتیجه خطای `TypeError` ایجاد می‌شود.

</p>
</details>

---

###### 9. خروجی چیست؟

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

شیء چاپ می‌شود، زیرا در حالت غیرسخت‌گیرانه با این انتساب، ویژگی‌ای حاوی شیء خالی روی شیء سراسری ایجاد کرده‌ایم! وقتی به‌اشتباه به‌جای `greeting` نوشتیم `greetign`، مفسر جاوااسکریپت عملاً آن را مانند موارد زیر در نظر گرفت:

1. در Node.js: عبارت `global.greetign = {}`.
2. در مرورگرها: عبارت‌های `window.greetign = {}` و `frames.greetign = {}` و دسترسی از طریق `self.greetign`.
3. در وب‌ورکرها: دسترسی از طریق `self.greetign`.
4. در همهٔ محیط‌ها: دسترسی از طریق `globalThis.greetign`.

برای جلوگیری از این اتفاق می‌توانیم از `"use strict"` استفاده کنیم. در حالت سخت‌گیرانه باید پیش از انتساب مقدار به یک متغیر، آن را اعلان کرده باشیم.

</p>
</details>

---

###### 10. با اجرای این کد چه اتفاقی می‌افتد؟

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: هیچ اتفاقی نمی‌افتد؛ این کار کاملاً مجاز است!
- B: `SyntaxError`. نمی‌توانید به این شکل به تابع ویژگی اضافه کنید.
- C: `"Woof"` چاپ می‌شود.
- D: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

این کار در جاوااسکریپت ممکن است، زیرا تابع‌ها شیء هستند! هر مقداری که از نوع‌های اولیه نباشد، شیء است.

تابع نوع خاصی از شیء است. کدی که می‌نویسید، بدنهٔ تابع را تعریف می‌کند؛ خودِ تابع شیئی است که می‌تواند ویژگی‌هایی داشته باشد. ویژگی خاص این شیء، قابل فراخوانی بودن آن است.

</p>
</details>

---

###### 11. خروجی چیست؟

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

در جاوااسکریپت، تابع‌ها شیء هستند؛ بنابراین متد `getFullName` به خودِ شیء تابع سازنده اضافه می‌شود. به همین دلیل می‌توانیم `Person.getFullName()` را فراخوانی کنیم، اما فراخوانی `member.getFullName` خطای `TypeError` ایجاد می‌کند.

اگر می‌خواهید متدی در دسترس همهٔ نمونه‌های شیء باشد، باید آن را به ویژگی `prototype` اضافه کنید:

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

</p>
</details>

---

###### 12. خروجی چیست؟

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

برای `sarah` از کلیدواژهٔ `new` استفاده نکردیم. با `new`، مقدار `this` به شیء خالی جدیدی که می‌سازیم اشاره می‌کند. اما بدون `new`، در شرایط این مثال، `this` به **شیء سراسری** اشاره دارد!

با قرار دادن `"Sarah"` در `this.firstName` و `"Smith"` در `this.lastName`، عملاً `global.firstName = 'Sarah'` و `global.lastName = 'Smith'` را تعریف کرده‌ایم. خودِ `sarah` مقدار `undefined` دارد، چون تابع `Person` مقداری برنمی‌گرداند.

</p>
</details>

---

###### 13. سه مرحلهٔ انتشار رویداد کدام‌اند؟

- A: هدف > گرفتن > حبابی
- B: حبابی > هدف > گرفتن
- C: هدف > حبابی > گرفتن
- D: گرفتن > هدف > حبابی

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

در مرحلهٔ **گرفتن (capturing)**، رویداد از عناصر والد به‌سمت عنصر هدف حرکت می‌کند. سپس به عنصر **هدف (target)** می‌رسد و مرحلهٔ **حبابی (bubbling)** آغاز می‌شود.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. همهٔ اشیا پروتوتایپ دارند.

- A: درست
- B: نادرست

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

همهٔ اشیا، به‌جز شیء پایه در انتهای زنجیرهٔ پروتوتایپ، پروتوتایپ دارند. اشیایی که کاربر ایجاد می‌کند یا با `new` ساخته می‌شوند، معمولاً از طریق این زنجیره به متدها و ویژگی‌هایی مانند `.toString` دسترسی دارند. به همین دلیل می‌توان از متدهای داخلی جاوااسکریپت استفاده کرد: اگر جاوااسکریپت متدی را مستقیماً روی شیء پیدا نکند، زنجیرهٔ پروتوتایپ را جست‌وجو می‌کند تا آن را بیابد.

نکتهٔ دقت: توضیح متن اصلی دربارهٔ «شیء پایه» مبهم است. پروتوتایپ `Object.prototype` برابر با `null` است؛ اشیای ساخته‌شده با `Object.create(null)` نیز پروتوتایپ ندارند.

</p>
</details>

---

###### 15. خروجی چیست؟

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

جاوااسکریپت زبانی با **نوع‌دهی پویا** است؛ نوع متغیرها را از پیش مشخص نمی‌کنیم. مقدارها ممکن است خودکار به نوع دیگری تبدیل شوند؛ به این فرایند «تبدیل نوع ضمنی» (implicit type coercion) می‌گویند. تبدیل نوع یعنی تبدیل یک نوع داده به نوعی دیگر.

در این مثال، هنگام جمع عدد `1` و رشتهٔ `'2'`، جاوااسکریپت عدد را به رشته تبدیل می‌کند. همان‌طور که می‌توان رشته‌ها را با `"Hello" + "World"` به هم چسباند، اینجا نیز `"1" + "2"` اجرا می‌شود و نتیجه `"12"` است.

</p>
</details>

---

###### 16. خروجی چیست؟

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

عملگر یکانی افزایشی `++` در حالت **پسوندی**:

1. مقدار فعلی را برمی‌گرداند؛ اینجا `0`.
2. مقدار را افزایش می‌دهد؛ اکنون `number` برابر با `1` است.

این عملگر در حالت **پیشوندی**:

1. ابتدا مقدار را افزایش می‌دهد؛ اکنون `number` برابر با `2` است.
2. مقدار جدید، یعنی `2` را برمی‌گرداند.

پس خروجی `0 2 2` است.

</p>
</details>

---

###### 17. خروجی چیست؟

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

در رشته‌های قالبی برچسب‌دار (tagged template literals)، آرگومان اول همیشه آرایه‌ای از بخش‌های ثابت رشته است. آرگومان‌های بعدی، مقدار عبارت‌های قرارگرفته در قالب را دریافت می‌کنند!

</p>
</details>

---

###### 18. خروجی چیست؟

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

هنگام بررسی برابری، مقدارهای اولیه براساس _مقدار_ مقایسه می‌شوند، اما اشیا براساس _ارجاع_ مقایسه می‌شوند. جاوااسکریپت بررسی می‌کند که آیا هر دو به یک محل در حافظه اشاره دارند یا خیر.

شیء ارسال‌شده به تابع و شیئی که برای مقایسه ساخته‌ایم، در دو محل متفاوت حافظه قرار دارند.

به همین دلیل، هم `{ age: 18 } === { age: 18 }` و هم `{ age: 18 } == { age: 18 }` نتیجهٔ `false` دارند.

</p>
</details>

---

###### 19. خروجی چیست؟

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

پارامتر باقی‌مانده (`...args`) تمام آرگومان‌های باقی‌مانده را در یک آرایه جمع می‌کند. آرایه یک شیء است؛ بنابراین `typeof args` مقدار `"object"` را برمی‌گرداند.

</p>
</details>

---

###### 20. خروجی چیست؟

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

با `"use strict"` می‌توان از ایجاد تصادفی متغیرهای سراسری جلوگیری کرد. متغیر `age` را اعلان نکرده‌ایم و چون حالت سخت‌گیرانه فعال است، خطای `ReferenceError` ایجاد می‌شود. بدون `"use strict"`، در شرایط این مثال، کد اجرا می‌شد و ویژگی `age` به شیء سراسری اضافه می‌شد.

</p>
</details>

---

###### 21. مقدار `sum` چیست؟

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

تابع `eval` کدی را که به‌شکل رشته دریافت می‌کند ارزیابی می‌کند. اگر ورودی یک عبارت باشد، مانند این مثال، نتیجهٔ همان عبارت محاسبه می‌شود. عبارت `10 * 10 + 5` عدد `105` را تولید می‌کند.

</p>
</details>

---

###### 22. مقدار `cool_secret` تا چه زمانی در دسترس است؟

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: برای همیشه؛ داده از بین نمی‌رود.
- B: تا زمانی که کاربر زبانه را ببندد.
- C: تا زمانی که کاربر کل مرورگر را ببندد، نه فقط زبانه را.
- D: تا زمانی که کاربر رایانه را خاموش کند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

دادهٔ ذخیره‌شده در `sessionStorage` پس از بسته‌شدن _زبانه_ حذف می‌شود.

اگر از `localStorage` استفاده می‌کردید، داده با بسته‌شدن زبانه حذف نمی‌شد و باقی می‌ماند، مگر اینکه مثلاً `localStorage.clear()` فراخوانی شود.

</p>
</details>

---

###### 23. خروجی چیست؟

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

با کلیدواژهٔ `var` می‌توان متغیری با یک نام را چند بار اعلان کرد. متغیر آخرین مقدار نسبت‌داده‌شده را نگه می‌دارد.

با `let` یا `const` نمی‌توان همان نام را دوباره در همان محدوده اعلان کرد؛ این متغیرها محدودهٔ بلوکی دارند.

</p>
</details>

---

###### 24. خروجی چیست؟

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

تمام کلیدهای شیء، به‌جز نمادها (`Symbol`)، در پشت صحنه رشته هستند؛ حتی اگر آن‌ها را به‌شکل رشته ننویسید. به همین دلیل بررسی وجود ویژگی با کلید `1` یا `'1'` در این شیء نتیجهٔ `true` می‌دهد.

اما `Set` چنین تبدیل نوعی انجام نمی‌دهد. رشتهٔ `'1'` در مجموعه نیست؛ پس `set.has('1')` برابر با `false` است. عدد `1` در مجموعه وجود دارد؛ بنابراین `set.has(1)` برابر با `true` است.

</p>
</details>

---

###### 25. خروجی چیست؟

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

اگر دو کلید هم‌نام داشته باشید، مقدار کلید با مقدار جدید جایگزین می‌شود. جایگاه کلید همان جایگاه اول باقی می‌ماند، اما آخرین مقدار مشخص‌شده را خواهد داشت.

</p>
</details>

---

###### 26. بستر اجرای سراسری جاوااسکریپت دو چیز در اختیار شما می‌گذارد: شیء سراسری و کلیدواژهٔ `this`.

- A: درست
- B: نادرست
- C: بستگی دارد

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

بستر اجرای پایه، بستر اجرای سراسری است؛ همان بستری که از سراسر کد قابل دسترسی است.

</p>
</details>

---

###### 27. خروجی چیست؟

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

دستور `continue` با برقرار شدن شرط، ادامهٔ تکرار فعلی حلقه را رد می‌کند و اجرای حلقه با تکرار بعدی ادامه می‌یابد.

</p>
</details>

---

###### 28. خروجی چیست؟

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

`String` یک سازندهٔ داخلی است که می‌توان به آن ویژگی اضافه کرد. اینجا متدی به پروتوتایپ آن اضافه کرده‌ایم. هنگام دسترسی به متد، رشتهٔ اولیه به‌طور خودکار در یک شیء رشته‌ای پوشانده می‌شود؛ بنابراین همهٔ رشته‌ها از طریق زنجیرهٔ پروتوتایپ به این متد دسترسی دارند!

</p>
</details>

---

###### 29. خروجی چیست؟

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

کلیدهای شیء به‌طور خودکار به رشته تبدیل می‌شوند. اینجا تلاش می‌کنیم یک شیء را با مقدار `123` به‌عنوان کلید شیء `a` به کار ببریم.

اما تبدیل رشته‌ای این شیء، مقدار `"[object Object]"` را می‌دهد؛ پس عملاً `a["[object Object]"] = 123` را اجرا می‌کنیم. سپس `c`، که شیء دیگری است، نیز به‌طور ضمنی به همین رشته تبدیل می‌شود و انتساب دوم برابر با `a["[object Object]"] = 456` خواهد بود.

هنگام چاپ `a[b]`، در واقع `a["[object Object]"]` خوانده می‌شود. آخرین مقدار آن `456` است؛ پس همین مقدار چاپ می‌شود.

</p>
</details>

---

###### 30. خروجی چیست؟

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

تابع حاوی `setTimeout` را زودتر فراخوانی کرده‌ایم، اما خروجی مربوط به آن آخر چاپ می‌شود.

در مرورگر، علاوه بر موتور اجرای جاوااسکریپت، رابط‌های وب یا `WebAPI` هم وجود دارند؛ از جمله `setTimeout` و DOM.

پس از ثبت تابع بازگشتی در رابط وب، خودِ فراخوانی `setTimeout`، نه تابع بازگشتی، از پشته خارج می‌شود.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

سپس `foo` فراخوانی می‌شود و `"First"` چاپ می‌شود.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

تابع `foo` از پشته خارج و `baz` فراخوانی می‌شود؛ سپس `"Third"` چاپ می‌شود.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

رابط وب نمی‌تواند هر وقت آماده شد مستقیماً چیزی به پشته اضافه کند؛ در عوض، تابع بازگشتی را در _صف_ قرار می‌دهد.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

اینجا **حلقهٔ رویداد** وارد عمل می‌شود. این حلقه پشته و صف وظایف را بررسی می‌کند. اگر پشته خالی باشد، نخستین وظیفهٔ صف را به پشته منتقل می‌کند.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

در نهایت تابع بازگشتی زمان‌سنج اجرا می‌شود، `"Second"` چاپ می‌شود و فراخوانی از پشته خارج می‌شود.

</p>
</details>

---

###### 31. هنگام کلیک روی دکمه، مقدار `event.target` چیست؟

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: عنصر `div` بیرونی
- B: عنصر `div` درونی
- C: `button`
- D: آرایه‌ای از همهٔ عناصر تو‌در‌تو

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

درونی‌ترین عنصری که رویداد از آن آغاز شده، هدف رویداد است. با `event.stopPropagation` می‌توانید انتشار رویداد به عناصر دیگر را متوقف کنید.

</p>
</details>

---

###### 32. با کلیک روی پاراگراف، چه چیزی در کنسول چاپ می‌شود؟

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

با کلیک روی `p`، دو خروجی `p` و `div` می‌بینیم. انتشار رویداد سه مرحله دارد: گرفتن، هدف و حبابی. به‌طور پیش‌فرض، گرداننده‌های رویداد در مرحلهٔ حبابی اجرا می‌شوند، مگر اینکه `useCapture` را `true` قرار دهید. در این مرحله، انتشار از درونی‌ترین عنصر به‌سمت بیرون است.

</p>
</details>

---

###### 33. خروجی چیست؟

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

با هر دو روش می‌توان شیئی را تعیین کرد که `this` به آن اشاره کند؛ اما `.call` تابع را _بلافاصله اجرا_ هم می‌کند!

متد `.bind` تابع جدیدی برمی‌گرداند که بستر اجرای آن به شیء داده‌شده متصل است؛ این تابع بلافاصله اجرا نمی‌شود.

</p>
</details>

---

###### 34. خروجی چیست؟

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

تابع `sayHi`، نتیجهٔ عبارت تابعیِ بلافاصله فراخوانی‌شونده (IIFE) را برمی‌گرداند. این تابع `0` برمی‌گرداند که از نوع `"number"` است.

برای اطلاع: خروجی `typeof` یکی از رشته‌های `undefined`، `boolean`، `number`، `bigint`، `string`، `symbol`، `function` یا `object` است. توجه کنید که `typeof null` برابر با `"object"` است.

</p>
</details>

---

###### 35. کدام‌یک از این مقدارها نادرست‌نما (falsy) هستند؟

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
- D: همهٔ آن‌ها نادرست‌نما هستند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

هشت مقدار نادرست‌نما عبارت‌اند از:

- `undefined`
- `null`
- `NaN`
- `false`
- `''`؛ رشتهٔ خالی
- `0`
- `-0`
- `0n`؛ صفر از نوع `BigInt`

اشیای ساخته‌شده با سازنده‌هایی مانند `new Number` و `new Boolean` درست‌نما (truthy) هستند.

</p>
</details>

---

###### 36. خروجی چیست؟

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

عبارت `typeof 1` مقدار `"number"` را برمی‌گرداند.

عبارت `typeof "number"` مقدار `"string"` را برمی‌گرداند.

</p>
</details>

---

###### 37. خروجی چیست؟

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

وقتی به اندیسی فراتر از انتهای فعلی آرایه مقدار بدهید، جاوااسکریپت در فاصلهٔ میان آن‌ها «جایگاه‌های خالی» ایجاد می‌کند. خواندن این جایگاه‌ها مقدار `undefined` می‌دهد، اما خودِ آن‌ها عضو تعریف‌شدهٔ آرایه نیستند. نمایش خروجی، بسته به محیط اجرا، مانند مرورگر یا Node.js، ممکن است شبیه این باشد:

`[1, 2, 3, empty x 7, 11]`

</p>
</details>

---

###### 38. خروجی چیست؟

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

بلوک `catch` پارامتری به نام `x` دریافت می‌کند. این متغیر با `x` بیرونی متفاوت است و محدودهٔ بلوکی دارد.

سپس `x` محلیِ بلوک را برابر با `1` قرار می‌دهیم و به متغیر `y` مقدار `2` می‌دهیم. چاپ `x` درون بلوک مقدار `1` را نشان می‌دهد.

بیرون از بلوک `catch`، مقدار `x` همچنان `undefined` است و `y` برابر با `2` است. بنابراین دو فراخوانی بعدی `console.log` به‌ترتیب `undefined` و `2` چاپ می‌کنند.

</p>
</details>

---

###### 39. هر مقدار در جاوااسکریپت یکی از این دو نوع است: …

- A: مقدار اولیه یا شیء
- B: تابع یا شیء
- C: سؤال انحرافی است! فقط شیء
- D: عدد یا شیء

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

جاوااسکریپت تنها مقدارهای اولیه و اشیا را دارد.

نوع‌های اولیه عبارت‌اند از `boolean`، `null`، `undefined`، `bigint`، `number`، `string` و `symbol`.

تفاوت مقدار اولیه با شیء این است که خودِ مقدار اولیه ویژگی یا متد ندارد. بااین‌حال، `'foo'.toUpperCase()` نتیجهٔ `'FOO'` می‌دهد و خطای `TypeError` ایجاد نمی‌کند. علت این است که هنگام دسترسی به ویژگی یا متد یک مقدار اولیه، مانند رشته، جاوااسکریپت آن را به‌طور ضمنی با یک کلاس پوشاننده مانند `String` می‌پوشاند و پس از ارزیابی عبارت، پوشاننده را کنار می‌گذارد. همهٔ مقدارهای اولیه به‌جز `null` و `undefined` این رفتار را دارند.

</p>
</details>

---

###### 40. خروجی چیست؟

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

مقدار اولیهٔ انباره `[1, 2]` است؛ یعنی اولین مقدار `acc`. در دور اول، `acc` برابر با `[1, 2]` و `cur` برابر با `[0, 1]` است. الحاق آن‌ها نتیجهٔ `[1, 2, 0, 1]` می‌دهد.

در دور بعد، `acc` برابر با `[1, 2, 0, 1]` و `cur` برابر با `[2, 3]` است. با الحاق دوباره، نتیجهٔ `[1, 2, 0, 1, 2, 3]` به دست می‌آید.

</p>
</details>

---

###### 41. خروجی چیست؟

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

`null` نادرست‌نما است؛ `!null` برابر با `true` و سپس `!true` برابر با `false` می‌شود.

رشتهٔ خالی `""` نادرست‌نما است؛ `!""` مقدار `true` و نقیض دوبارهٔ آن مقدار `false` می‌دهد.

عدد `1` درست‌نما است؛ `!1` برابر با `false` و `!false` برابر با `true` است.

</p>
</details>

---

###### 42. متد `setInterval` در مرورگر چه مقداری برمی‌گرداند؟

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: یک شناسهٔ یکتا
- B: تعداد میلی‌ثانیه‌های مشخص‌شده
- C: تابع ارسال‌شده
- D: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

یک شناسهٔ یکتا برمی‌گرداند. از این شناسه می‌توان برای لغو اجرای تکرارشونده با تابع `clearInterval()` استفاده کرد.

</p>
</details>

---

###### 43. نتیجهٔ این عبارت چیست؟

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

رشته یک مقدار پیمایش‌پذیر (iterable) است. عملگر گسترش (spread) هر نویسهٔ آن را به یک عضو آرایه تبدیل می‌کند.

</p>
</details>

---

###### 44. خروجی چیست؟

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

اجرای تابع معمولی را پس از فراخوانی نمی‌توان در میانه متوقف کرد، اما تابع مولد (generator) می‌تواند مکث کند و بعداً از همان نقطه ادامه دهد. هر بار که مولد به `yield` می‌رسد، مقدار بعد از آن را ارائه می‌کند. توجه کنید که این کار _بازگرداندن_ با `return` نیست، بلکه ارائهٔ مقدار با `yield` است.

ابتدا مولد را با `i` برابر با `10` ایجاد می‌کنیم. با `next()` اجرای آن را آغاز می‌کنیم. در برخورد با اولین `yield`، مقدار `i` یعنی `10` ارائه و اجرای مولد متوقف می‌شود؛ پس `10` چاپ می‌شود.

با فراخوانی دوبارهٔ `next()`، اجرا از محل توقف ادامه می‌یابد و `i` همچنان `10` است. `yield` بعدی مقدار `i * 2` یعنی `20` را ارائه می‌کند. بنابراین خروجی به‌ترتیب `10, 20` است.

</p>
</details>

---

###### 45. نتیجهٔ این کد چیست؟

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

وقتی چند پرامیس را به `Promise.race` می‌دهیم، نتیجهٔ آن با اولین پرامیسی که موفق یا رد شود تعیین می‌شود. زمان‌سنج `firstPromise` برابر با ۵۰۰ میلی‌ثانیه و زمان‌سنج `secondPromise` برابر با ۱۰۰ میلی‌ثانیه است. بنابراین `secondPromise` زودتر با مقدار `'two'` موفق می‌شود؛ `res` همین مقدار را می‌گیرد و چاپ می‌کند.

</p>
</details>

---

###### 46. خروجی چیست؟

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

ابتدا متغیر `person` را با شیئی دارای ویژگی `name` تعریف می‌کنیم.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

سپس آرایهٔ `members` را تعریف می‌کنیم و مقدار اولین عضو آن را برابر با مقدار `person` قرار می‌دهیم. در انتساب اشیا، ارجاع منتقل می‌شود؛ در واقع نسخه‌ای از ارجاع کپی می‌شود و هر دو ارجاع به همان شیء اشاره دارند.

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

بعد مقدار متغیر `person` را برابر با `null` قرار می‌دهیم.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

فقط مقدار خودِ متغیر `person` عوض شده است، نه اولین عضو آرایه. آن عضو نسخهٔ مستقلِ ارجاع به شیء اصلی را نگه داشته است. بنابراین هنگام چاپ `members`، شیء همچنان در آرایه حضور دارد و چاپ می‌شود.

</p>
</details>

---

###### 47. خروجی چیست؟

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

با حلقهٔ `for-in` می‌توان کلیدهای شیء را پیمایش کرد؛ اینجا `name` و `age`. کلیدهای شیء در پشت صحنه رشته‌اند، مگر اینکه از نوع `Symbol` باشند. در هر تکرار، `item` برابر با کلید جاری قرار می‌گیرد: ابتدا `name` و سپس `age` چاپ می‌شود.

</p>
</details>

---

###### 48. خروجی چیست؟

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

جهت گروه‌بندی عملگرها (associativity) مشخص می‌کند عبارت‌هایی با عملگرهای هم‌اولویت، از چپ به راست یا از راست به چپ ارزیابی شوند. اینجا فقط عملگر `+` را داریم که از چپ به راست گروه‌بندی می‌شود.

ابتدا `3 + 4` محاسبه می‌شود و عدد `7` را می‌دهد.

سپس `7 + '5'` به‌دلیل تبدیل نوع، مقدار `"75"` می‌دهد. جاوااسکریپت عدد `7` را به رشته تبدیل می‌کند؛ سؤال ۱۵ را ببینید. عملگر `+` رشته‌ها را به هم می‌چسباند؛ پس `"7" + "5"` برابر با `"75"` است.

</p>
</details>

---

###### 49. مقدار `num` چیست؟

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

تنها بخش عددیِ ابتدای رشته خوانده می‌شود. تابع `parseInt` براساس مبنا (radix)، یعنی آرگومان دوم، بررسی می‌کند کدام نویسه‌ها برای عدد موردنظر معتبرند؛ مانند مبنای ده، شانزده، هشت یا دو. به‌محض برخورد با نویسهٔ نامعتبر، خواندن متوقف و بقیهٔ رشته نادیده گرفته می‌شود.

نویسهٔ `*` یک رقم معتبر نیست. بنابراین فقط `"7"` به عدد ده‌دهی `7` تبدیل می‌شود و `num` برابر با `7` خواهد بود.

</p>
</details>

---

###### 50. خروجی چیست؟

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

هنگام اجرای `map`، مقدار `num` برابر با عضو جاری آرایه است. اینجا همهٔ عضوها عدد هستند؛ بنابراین شرط `typeof num === "number"` درست است. متد `map` آرایهٔ جدیدی از مقدارهای بازگشتی تابع ایجاد می‌کند.

اما اینجا `return` مقداری ندارد. تابعی که مقداری برنگرداند، `undefined` برمی‌گرداند. تابع برای هر عضو فراخوانی می‌شود؛ پس هر سه عضو آرایهٔ خروجی `undefined` هستند.

</p>
</details>

---

###### 51. خروجی چیست؟

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

آرگومان‌ها با مقدار ارسال می‌شوند. برای شیء، مقدارِ کپی‌شده یک ارجاع به شیء است. `birthYear` یک رشته است و نسخه‌ای از مقدار آن ارسال می‌شود؛ سؤال ۴۶ را ببینید.

مقدار `birthYear` برابر با `"1997"` است و پارامتر `year` نیز ابتدا همین مقدار را دارد. وقتی `year` را به `"1998"` تغییر می‌دهیم، تنها پارامتر محلی عوض می‌شود؛ `birthYear` همچنان `"1997"` می‌ماند.

مقدار `person` یک شیء است و `member` نسخه‌ای از ارجاع به _همان_ شیء را دارد. بنابراین تغییر ویژگی آن از طریق `member`، از طریق `person` هم دیده می‌شود. اکنون ویژگی `name` در `person` مقدار `"Lydia"` دارد.

</p>
</details>

---

###### 52. خروجی چیست؟

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

با دستور `throw` می‌توان استثناهای دلخواه ایجاد کرد. مقدار پرتاب‌شده می‌تواند **رشته**، **عدد**، **بولی** یا **شیء** باشد. در این مثال، استثنا رشتهٔ `'Hello world!'` است.

بلوک `catch` مشخص می‌کند اگر در `try` استثنایی رخ داد چه کنیم. اینجا رشتهٔ `'Hello world!'` پرتاب می‌شود و `e` همان رشته را دریافت می‌کند. بنابراین خروجی `Oh no an error: Hello world!` خواهد بود.

</p>
</details>

---

###### 53. خروجی چیست؟

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

وقتی تابع سازنده با `new` فراخوانی می‌شود، یک شیء ایجاد می‌شود و `this` به آن اشاره می‌کند. اگر سازنده صریحاً چیزی برنگرداند، به‌طور پیش‌فرض همان شیء جدید برگردانده می‌شود.

اینجا سازندهٔ `Car` صریحاً شیء جدیدی با `make` برابر با `"Maserati"` برمی‌گرداند و رفتار پیش‌فرض را جایگزین می‌کند. بنابراین نتیجهٔ بازگشتی در `myCar` قرار می‌گیرد و خواندن `myCar.make` مقدار `"Maserati"` می‌دهد.

</p>
</details>

---

###### 54. خروجی چیست؟

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

عبارت `let x = (y = 10);` در این مثال عملاً شکل کوتاه‌شدهٔ این کد است:

```javascript
y = 10;
let x = y;
```

وقتی در حالت غیرسخت‌گیرانه `y` اعلان‌نشده را برابر با `10` قرار می‌دهیم، ویژگی `y` به شیء سراسری اضافه می‌شود؛ در مرورگر `window` و در Node.js شیء `global`. بنابراین `window.y` مقدار `10` دارد.

سپس `x` را با مقدار `y`، یعنی `10`، اعلان می‌کنیم. متغیرهای `let` محدودهٔ بلوکی دارند و فقط در محدودهٔ اعلان خود در دسترس‌اند؛ اینجا درون عبارت تابعی بلافاصله فراخوانی‌شونده (IIFE). خارج از آن، `x` تعریف نشده است. عملگر `typeof` برای چنین نامی مقدار `"undefined"` می‌دهد؛ پس `console.log(typeof x)` همین را چاپ می‌کند.

اما `y` روی شیء سراسری ایجاد شده و بیرون تابع هم قابل دسترسی است. مقدار آن عدد است؛ پس `console.log(typeof y)` مقدار `"number"` را چاپ می‌کند.

</p>
</details>

---

###### 55. خروجی چیست؟

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

با عملگر `delete` می‌توان ویژگی‌های اشیا، از جمله ویژگی‌های پروتوتایپ، را حذف کرد. ویژگی حذف‌شده دیگر در آن نقطه از زنجیرهٔ پروتوتایپ در دسترس نیست. پس از `delete Dog.prototype.bark`، تابع `bark` روی پروتوتایپ وجود ندارد، اما باز هم می‌خواهیم آن را فراخوانی کنیم.

فراخوانی چیزی که تابع نیست، خطای `TypeError` ایجاد می‌کند. چون `pet.bark` برابر با `undefined` است، خطا به‌شکل `TypeError: pet.bark is not a function` خواهد بود.

</p>
</details>

---

###### 56. خروجی چیست؟

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

شیء `Set` مجموعه‌ای از مقدارهای _یکتا_ است؛ هر مقدار فقط یک بار می‌تواند در آن وجود داشته باشد.

آرایهٔ پیمایش‌پذیر `[1, 1, 2, 3, 4]` شامل مقدار تکراری `1` است. چون مجموعه دو مقدار یکسان را نگه نمی‌دارد، تکرار حذف می‌شود و نتیجه `{1, 2, 3, 4}` است.

</p>
</details>

---

###### 57. خروجی چیست؟

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

اتصال واردشده با `import` فقط‌خواندنی است و نمی‌توان از ماژول واردکننده به آن مقدار جدیدی نسبت داد. تغییر مقدارِ اتصالِ صادرشده، در صورت امکان، باید در ماژول صادرکننده انجام شود.

وقتی می‌خواهیم `myCounter` را افزایش دهیم، خطا رخ می‌دهد؛ زیرا این اتصال واردشده فقط‌خواندنی است.

</p>
</details>

---

###### 58. خروجی چیست؟

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

عملگر `delete` مقدار بولی برمی‌گرداند: در حذف موفق `true` و در حذف ناموفق `false`. اما متغیرهای اعلان‌شده با `var`، `const` یا `let` را نمی‌توان با آن حذف کرد.

متغیر `name` با `const` اعلان شده است؛ پس در حالت غیرسخت‌گیرانهٔ فرض‌شده در سؤال، حذف آن ناموفق است و `false` برمی‌گردد. انتساب `21` به `age` اعلان‌نشده، ویژگی‌ای روی شیء سراسری ایجاد کرده است. این ویژگی را می‌توان حذف کرد؛ بنابراین `delete age` نتیجهٔ `true` می‌دهد.

</p>
</details>

---

###### 59. خروجی چیست؟

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

با واسازی (destructuring) می‌توان مقدارهای آرایه یا ویژگی‌های شیء را در متغیرها قرار داد؛ برای مثال:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

اکنون `a` برابر با `1` و `b` برابر با `2` است. در سؤال عملاً این کار را انجام داده‌ایم:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

بنابراین `y` برابر با اولین عضو آرایه، یعنی عدد `1` است و همین مقدار چاپ می‌شود.

</p>
</details>

---

###### 60. خروجی چیست؟

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

با عملگر گسترش `...` می‌توان اشیا را ترکیب کرد. این عملگر نسخه‌ای از جفت‌های کلید/مقدار یک شیء را در شیء دیگری قرار می‌دهد. اینجا ویژگی‌های `user` در `admin` کپی می‌شوند؛ در نتیجه `admin` برابر با `{ admin: true, name: "Lydia", age: 21 }` خواهد بود.

</p>
</details>

---

###### 61. خروجی چیست؟

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

با `defineProperty` می‌توان ویژگی جدیدی به شیء اضافه کرد یا ویژگی موجود را تغییر داد. ویژگی‌ای که با این روش اضافه می‌شود، به‌طور پیش‌فرض _شمارش‌پذیر (enumerable) نیست_. متد `Object.keys` فقط نام ویژگی‌های شمارش‌پذیرِ خودِ شیء را برمی‌گرداند؛ اینجا تنها `"name"`.

ویژگی‌های تازه‌ای که با `defineProperty` ساخته می‌شوند، به‌طور پیش‌فرض نوشتنی و پیکربندی‌پذیر هم نیستند. با تنظیم `writable`، `configurable` و `enumerable` می‌توان این رفتارها را تغییر داد. بنابراین این متد کنترل بیشتری روی ویژگی‌های شیء می‌دهد.

</p>
</details>

---

###### 62. خروجی چیست؟

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

آرگومان دوم `JSON.stringify`، جایگزین‌کننده (replacer) است. این آرگومان می‌تواند تابع یا آرایه باشد و تعیین می‌کند چه مقدارهایی و به چه شکلی به رشته تبدیل شوند.

اگر آرایه باشد، تنها نام ویژگی‌های موجود در آن در رشتهٔ JSON قرار می‌گیرند. اینجا فقط `"level"` و `"health"` لحاظ می‌شوند و `"username"` کنار گذاشته می‌شود. پس `data` حاوی رشتهٔ `{"level":19,"health":90}` است.

اگر جایگزین‌کننده تابع باشد، برای ویژگی‌های شیء فراخوانی می‌شود. مقدار بازگشتی آن، مقدار ویژگی در رشتهٔ JSON خواهد بود. اگر `undefined` برگرداند، آن ویژگی از رشتهٔ خروجی حذف می‌شود.

</p>
</details>

---

###### 63. خروجی چیست؟

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

عملگر `++` در حالت پسوندی، مقدار قبلیِ عملوند را نتیجهٔ عبارت قرار می‌دهد و مقدار متغیر را افزایش می‌دهد. بنابراین `num1` برابر با `10` است: تابع `increaseNumber` مقدار قبلی `num`، یعنی `10`، را برمی‌گرداند و خودِ `num` به `11` افزایش می‌یابد.

برای `num2`، مقدار `num1` یعنی `10` به `increasePassedNumber` ارسال می‌شود. پارامتر `number` برابر با `10` است و باز هم `number++` مقدار قبلی را برمی‌گرداند؛ بنابراین `num2` نیز `10` می‌شود.

</p>
</details>

---

###### 64. خروجی چیست؟

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

از ES6 می‌توان برای پارامترها مقدار پیش‌فرض تعیین کرد. اگر آرگومانی ارسال نشود یا مقدار آن `undefined` باشد، مقدار پیش‌فرض استفاده می‌شود. اینجا ویژگی‌های `value` در شیئی جدید گسترش داده می‌شوند؛ پس مقدار پیش‌فرض `x` برابر با `{ number: 10 }` است.

عبارت پیش‌فرض در _زمان فراخوانی_ ارزیابی می‌شود! هر بار شیء تازه‌ای ساخته می‌شود. در دو فراخوانی اول، آرگومانی نمی‌فرستیم؛ هر بار `x` شیء تازه‌ای با `number` برابر با `10` است و مقدار دوبرابرشدهٔ `20` چاپ می‌شود.

بار سوم، خودِ شیء `value` را ارسال می‌کنیم. عبارت `x.number *= 2` شکل کوتاه `x.number = x.number * 2` است؛ ویژگی شیء اصلی را تغییر می‌دهد و `20` چاپ می‌کند.

بار چهارم همان شیء را دوباره می‌فرستیم. ویژگی `number` قبلاً به `20` تغییر کرده است؛ پس این بار `40` چاپ می‌شود.

</p>
</details>

---

###### 65. خروجی چیست؟

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

تابع بازگشتی `reduce` در آرگومان اول انباره (accumulator)، اینجا `x`، و در آرگومان دوم مقدار جاری، اینجا `y`، را می‌گیرد. این تابع روی عضوهای آرایه اجرا می‌شود تا در نهایت یک نتیجه تولید شود.

در این مثال مقداری برنمی‌گردانیم و فقط انباره و مقدار جاری را چاپ می‌کنیم.

مقدار انباره از نتیجهٔ اجرای قبلی تابع بازگشتی می‌آید. اگر `initialValue` اختیاری را ندهید، در اولین اجرا، انباره اولین عضو آرایه است.

در اجرای اول، `x` برابر با `1` و `y` برابر با `2` است؛ همین دو مقدار چاپ می‌شوند.

تابعی که مقداری برنگرداند، `undefined` برمی‌گرداند. بنابراین در اجرای بعد، انباره `undefined` و مقدار جاری `3` است و همین‌ها چاپ می‌شوند.

در آخرین اجرا نیز انباره `undefined` و مقدار جاری `4` است؛ پس `undefined` و `4` چاپ می‌شوند.

</p>
</details>

---

###### 66. با کدام سازنده می‌توان به‌درستی از کلاس `Dog` ارث‌بری کرد؟

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

در کلاس مشتق‌شده، پیش از فراخوانی `super` نمی‌توان به `this` دسترسی داشت؛ وگرنه `ReferenceError` رخ می‌دهد. بنابراین سازنده‌های ۱ و ۴ خطا می‌دهند.

با `super` سازندهٔ کلاس والد را با آرگومان‌های مشخص‌شده فراخوانی می‌کنیم. سازندهٔ والد پارامتر `name` را می‌گیرد؛ پس باید `name` را به `super` بدهیم.

کلاس `Labrador` دو آرگومان می‌گیرد: `name` برای بخش به‌ارث‌رسیده از `Dog` و `size` برای ویژگی اضافی خودش. هر دو باید به سازندهٔ `Labrador` داده شوند؛ سازندهٔ ۲ این کار را درست انجام می‌دهد.

</p>
</details>

---

###### 67. خروجی چیست؟

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

در واردسازی ایستا با `import`، ماژول‌های وابسته پیشاپیش پردازش می‌شوند و پیش از بدنهٔ ماژول واردکننده اجرا می‌شوند.

این یکی از تفاوت‌های `import` و `require()` در CommonJS است. با `require()` می‌توان وابستگی را هنگام اجرای برنامه و در محل فراخوانی بارگذاری کرد. اگر اینجا از `require` استفاده می‌کردیم، ترتیب چاپ `running index.js`، سپس `running sum.js` و در پایان `3` بود.

</p>
</details>

---

###### 68. خروجی چیست؟

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

هر `Symbol` کاملاً یکتا است. آرگومان ارسال‌شده فقط توضیح نماد است و هویت آن را تعیین نمی‌کند. در این مقایسه، دو نماد جدید و مستقل با توضیح یکسان می‌سازیم: `Symbol('foo')` و `Symbol('foo')`. این دو برابر نیستند؛ پس `Symbol('foo') === Symbol('foo')` نتیجهٔ `false` می‌دهد.

</p>
</details>

---

###### 69. خروجی چیست؟

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

با `padStart` می‌توان ابتدای رشته نویسه‌های پرکننده اضافه کرد. آرگومان آن _طول کل_ رشته پس از پرشدن است. طول `"Lydia Hallie"` برابر با `12` است؛ پس `name.padStart(13)` یک فاصله به ابتدای آن اضافه می‌کند، زیرا ۱۲ + ۱ = ۱۳.

اگر طول درخواستی از طول فعلی رشته کمتر باشد، هیچ نویسه‌ای اضافه نمی‌شود.

</p>
</details>

---

###### 70. خروجی چیست؟

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: رشته‌ای شامل کدپوینت‌های آن‌ها
- D: خطا

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با عملگر `+` می‌توان رشته‌ها را به هم چسباند. اینجا رشتهٔ `"🥑"` را به رشتهٔ `"💻"` متصل می‌کنیم و نتیجه `"🥑💻"` است.

</p>
</details>

---

###### 71. چطور مقدارهای نوشته‌شده در کامنت پس از `console.log` را چاپ کنیم؟

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

تابع مولد با رسیدن به `yield` اجرای خود را متوقف می‌کند. ابتدا باید رشتهٔ `"Do you love JavaScript?"` را ارائه کند؛ برای این کار `game.next().value` را فراخوانی می‌کنیم.

اجرا تا اولین `yield` پیش می‌رود و همان‌جا متوقف می‌شود. _بنابراین متغیر `answer` هنوز مقداردهی اولیه نشده است!_

با `game.next("Yes").value`، مقدار `"Yes"` نتیجهٔ عبارت `yield` قبلی می‌شود. اکنون `answer` برابر با `"Yes"` است؛ شرط `if` نادرست می‌شود و رشتهٔ `JavaScript loves you back ❤️` برگردانده و چاپ می‌شود.

</p>
</details>

---

###### 72. خروجی چیست؟

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

`String.raw` رشته‌ای برمی‌گرداند که در آن توالی‌های گریز مانند `\n`، `\v` و `\t` تفسیر نمی‌شوند. بک‌اسلش‌ها می‌توانند دردسرساز شوند؛ مثلاً:

`` const path = `C:\Documents\Projects\table.html` ``

در یک رشتهٔ معمولی، نتیجه می‌تواند چیزی شبیه این باشد که در آن `\t` به تب تبدیل شده است:

`"C:DocumentsProjects able.html"`

با `String.raw` بک‌اسلش‌ها حفظ می‌شوند و نتیجه چنین است:

`C:\Documents\Projects\table.html`

در سؤال، رشتهٔ `Hello\nworld` بدون تبدیل `\n` به خط جدید چاپ می‌شود.

</p>
</details>

---

###### 73. خروجی چیست؟

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

تابع `async` همیشه یک پرامیس برمی‌گرداند. اجرای `await` باید منتظر نتیجهٔ پرامیس بماند؛ بنابراین هنگام انتساب نتیجهٔ `getData()` به `data`، یک پرامیس در انتظار دریافت می‌کنیم.

برای دسترسی به مقدار نهایی `"I made it!"` می‌توانستیم روی `data` از `.then()` استفاده کنیم:

`data.then(res => console.log(res))`

در این صورت `"I made it!"` چاپ می‌شد.

</p>
</details>

---

###### 74. خروجی چیست؟

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

متد `.push()`، _طول جدید آرایه_ را برمی‌گرداند! آرایه ابتدا یک عضو، یعنی رشتهٔ `"banana"`، داشت و طولش `1` بود. پس از اضافه‌شدن `"apple"`، دو عضو دارد و طولش `2` است. تابع `addToList` همین مقدار را برمی‌گرداند.

متد `push` آرایهٔ اصلی را تغییر می‌دهد. اگر می‌خواستید خودِ آرایه را به‌جای طول آن برگردانید، باید پس از اضافه‌کردن `item`، مقدار `list` را برمی‌گرداندید.

</p>
</details>

---

###### 75. خروجی چیست؟

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

`Object.freeze` جلوی اضافه‌کردن، حذف‌کردن و تغییر ویژگی‌های خودِ شیء را می‌گیرد. این انجماد سطحی است؛ اگر مقدار ویژگی شیء دیگری باشد، درون آن شیء همچنان می‌تواند تغییر کند.

وقتی `shape` را برابر با `box` منجمدشده قرار می‌دهیم، هر دو به همان شیء اشاره می‌کنند. با `Object.isFrozen` می‌توان منجمدبودن را بررسی کرد؛ اینجا `Object.isFrozen(shape)` مقدار `true` می‌دهد.

چون شیء منجمد است و `x` مقدار عددی دارد، انتساب جدید ویژگی را عوض نمی‌کند. مقدار `x` همچنان `10` است و `{ x: 10, y: 20 }` چاپ می‌شود.

</p>
</details>

---

###### 76. خروجی چیست؟

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

با [انتساب واسازی](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) می‌توان مقدارهای آرایه یا ویژگی‌های شیء را در متغیرهای جداگانه قرار داد:

```javascript
const { firstName } = { firstName: 'Lydia' };
// ES5 version:
// var firstName = { firstName: 'Lydia' }.firstName;

console.log(firstName); // "Lydia"
```

همچنین می‌توان یک ویژگی را در متغیری با نام متفاوت قرار داد:

```javascript
const { firstName: myName } = { firstName: 'Lydia' };
// ES5 version:
// var myName = { firstName: 'Lydia' }.firstName;

console.log(myName); // "Lydia"
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

بنابراین متغیری به نام `firstName` ایجاد نشده است و دسترسی به آن خطای `ReferenceError` می‌دهد.

**نکته:** به ویژگی‌های محدودهٔ سراسری توجه کنید:

```javascript
const { name: myName } = { name: 'Lydia' };

console.log(myName); // "lydia"
console.log(name); // "" ----- Browser e.g. Chrome
console.log(name); // ReferenceError: name is not defined  ----- NodeJS

```

هرگاه جاوااسکریپت متغیری را در محدودهٔ فعلی پیدا نکند، [زنجیرهٔ محدوده‌ها](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) را به‌سمت بیرون جست‌وجو می‌کند. اگر در محدودهٔ سراسری هم آن را پیدا نکند، خطای `ReferenceError` ایجاد می‌شود.

- در مرورگرهایی مانند Chrome، ویژگی `name` روی شیء سراسری `window` وجود دارد. در این مثال متغیر محلی‌ای به نام `name` تعریف نکرده‌ایم؛ پس جست‌وجو به ویژگی ازپیش‌موجود [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) می‌رسد که در شرایط این مثال رشتهٔ خالی است.
- در Node.js چنین ویژگی‌ای روی `global` وجود ندارد؛ پس دسترسی به نام تعریف‌نشده خطای [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) می‌دهد.

</p>
</details>

---

###### 77. آیا این یک تابع خالص است؟

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: بله
- B: خیر

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

تابع خالص با دریافت آرگومان‌های یکسان، _همیشه_ نتیجهٔ یکسانی برمی‌گرداند.

تابع `sum` همین رفتار را دارد: برای `1` و `2`، همیشه `3` و برای `5` و `10`، همیشه `15` برمی‌گرداند و اثر جانبی ندارد. این تعریف تابع خالص است.

</p>
</details>

---

###### 78. خروجی چیست؟

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

تابع بازگشتیِ `add` از یادسپاری (memoization) استفاده می‌کند: نتیجه‌ها را برای سرعت‌بخشیدن به اجرا در حافظهٔ نهان نگه می‌داریم. اینجا شیء `cache` مقدارهای محاسبه‌شدهٔ قبلی را ذخیره می‌کند.

در فراخوانی دوباره با همان آرگومان، ابتدا بررسی می‌شود آیا نتیجه در حافظهٔ نهان هست یا خیر. اگر باشد، همان نتیجه برمی‌گردد و محاسبه تکرار نمی‌شود؛ وگرنه نتیجه محاسبه و ذخیره می‌شود.

تابع `addFunction` سه بار با مقدار یکسان فراخوانی می‌شود. بار اول، نتیجهٔ `num` برابر با `10` هنوز ذخیره نشده است؛ شرط `num in cache` نادرست است و شاخهٔ `else` اجرا می‌شود. خروجی `Calculated! 20` چاپ می‌شود و `cache` به `{ 10: 20 }` تبدیل می‌شود.

بار دوم، نتیجهٔ `10` در حافظهٔ نهان موجود است؛ شرط درست می‌شود و `From cache! 20` چاپ می‌شود.

بار سوم، عبارت `5 * 2` پیش از فراخوانی به `10` تبدیل می‌شود. نتیجه از قبل موجود است؛ بنابراین دوباره `From cache! 20` چاپ می‌شود.

</p>
</details>

---

###### 79. خروجی چیست؟

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

با حلقهٔ `for-in` ویژگی‌های **شمارش‌پذیر** را پیمایش می‌کنیم. کلیدهای اعضای آرایه همان اندیس‌های آن هستند. می‌توانید آرایه را از این نظر شبیه این شیء ببینید:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

کلیدها ویژگی‌های شمارش‌پذیرند؛ پس `0`، `1`، `2` و `3` چاپ می‌شوند.

با حلقهٔ `for-of`، مقدارهای **پیمایش‌پذیر** را پیمایش می‌کنیم. آرایه پیمایش‌پذیر است و در هر تکرار `item` برابر با عضو جاری می‌شود؛ بنابراین `"☕"`، `"💻"`، `"🍷"` و `"🍫"` چاپ می‌شوند.

</p>
</details>

---

###### 80. خروجی چیست؟

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

عضو آرایه می‌تواند هر مقداری باشد: عدد، رشته، شیء، آرایهٔ دیگر، `null`، مقدار بولی، `undefined` یا نتیجهٔ عبارت‌هایی مانند تاریخ، تابع و محاسبه.

هر عضو برابر با نتیجهٔ عبارت خودش می‌شود. عبارت `1 + 2` مقدار `3`، عبارت `1 * 2` مقدار `2` و عبارت `1 / 2` مقدار `0.5` می‌دهد.

</p>
</details>

---

###### 81. خروجی چیست؟

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

اگر آرگومانی به تابع ارسال نشود، پارامتر مربوط به آن به‌طور پیش‌فرض `undefined` است. اینجا برای `name` مقداری نداده‌ایم؛ بنابراین `undefined` در خروجی دیده می‌شود.

در ES6 می‌توان این پیش‌فرض را با پارامتر پیش‌فرض جایگزین کرد؛ مثلاً:

`function sayHi(name = "Lydia") { ... }`

در این صورت، اگر آرگومانی ارسال نکنیم یا `undefined` بفرستیم، `name` برابر با رشتهٔ `Lydia` می‌شود.

</p>
</details>

---

###### 82. خروجی چیست؟

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

مقدار `this` به نحوهٔ استفاده و فراخوانی تابع بستگی دارد. وقتی متد `getStatus` را به‌شکل `data.getStatus()` فراخوانی می‌کنیم، `this` به شیء `data` اشاره دارد؛ پس `this.status` مقدار `"🥑"` را چاپ می‌کند.

با متد `call` می‌توان مقدار `this` را صریحاً تعیین کرد. در شرایط مرورگریِ این مثال، `this` در تابع بازگشتی معمولیِ `setTimeout` به شیء سراسری اشاره دارد و همان مقدار به `getStatus.call(this)` داده می‌شود. ویژگی سراسری `status` مقدار `"😎"` دارد؛ بنابراین خروجی دوم `"😎"` است.

</p>
</details>

---

###### 83. خروجی چیست؟

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

متغیر `city` را برابر با مقدار ویژگی `city` در شیء `person` قرار می‌دهیم. چنین ویژگی‌ای وجود ندارد؛ پس مقدار اولیهٔ متغیر `city` برابر با `undefined` است.

توجه کنید که متغیر `city` به خودِ شیء `person` ارجاع نمی‌دهد؛ فقط مقدار فعلی آن ویژگی را گرفته است.

سپس به متغیر `city` رشتهٔ `"Amsterdam"` را نسبت می‌دهیم. این کار شیء `person` را تغییر نمی‌دهد.

بنابراین هنگام چاپ `person`، همان شیء اولیه و بدون تغییر را می‌بینیم.

</p>
</details>

---

###### 84. خروجی چیست؟

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

متغیرهای `const` و `let` _محدودهٔ بلوکی_ دارند. بلوک هر بخش محصور در `{ }` است؛ اینجا بدنهٔ شاخه‌های `if/else`. بیرون بلوکی که متغیر در آن اعلان شده، نمی‌توان به آن دسترسی داشت؛ بنابراین `ReferenceError` رخ می‌دهد.

</p>
</details>

---

###### 85. چه اطلاعاتی چاپ می‌شود؟

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));
```

- A: نتیجهٔ متد `fetch`
- B: نتیجهٔ دومین فراخوانی متد `fetch`
- C: نتیجهٔ تابع بازگشتیِ `.then()` قبلی
- D: همیشه `undefined` خواهد بود.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

مقدار `res` در دومین `.then` برابر با مقدار بازگشتیِ تابع بازگشتیِ `.then` قبلی است. می‌توان زنجیره‌ای از `.then`ها ساخت و نتیجهٔ هر مرحله را به مرحلهٔ بعد فرستاد.

</p>
</details>

---

###### 86. اگر نتوان `true` را مستقیماً به‌عنوان آرگومان فرستاد، کدام گزینه `hasName` را برابر با `true` می‌کند؟

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

با `!!name`، درست‌نما یا نادرست‌نما بودن مقدار `name` را به یک مقدار بولی تبدیل می‌کنیم. اگر `name` درست‌نما باشد، `!name` برابر با `false` و نقیض دوبارهٔ آن، یعنی `!false`، برابر با `true` است.

قرار دادن خودِ `name` در `hasName`، همان آرگومان دریافتیِ `getName` را ذخیره می‌کند، نه لزوماً مقدار بولی `true`.

عبارت `new Boolean(name)` یک شیء پوشاننده می‌سازد، نه مقدار بولی اولیه.

عبارت `name.length` طول آرگومان را می‌دهد، نه مقدار بولی موردنظر را.

</p>
</details>

---

###### 87. خروجی چیست؟

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

برای دسترسی به نویسهٔ یک رشته در اندیس مشخص، می‌توان از نشانه‌گذاری کروشه‌ای استفاده کرد. اندیس اولین نویسه `0` است. اینجا نویسهٔ اندیس صفر، یعنی `"I"`، چاپ می‌شود.

این روش در IE7 و نسخه‌های قدیمی‌تر پشتیبانی نمی‌شود؛ در آن محیط‌ها باید از `.charAt()` استفاده کرد.

</p>
</details>

---

###### 88. خروجی چیست؟

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

مقدار پیش‌فرض یک پارامتر می‌تواند از پارامتر دیگری گرفته شود، به‌شرط اینکه آن پارامتر _پیش از_ پارامتر فعلی تعریف شده باشد. به `sum` فقط `10` را می‌دهیم؛ پس `num1` برابر با `10` است و برای `num2` آرگومانی نداریم. مقدار پیش‌فرض `num2` همان `num1` یعنی `10` است؛ در نتیجه `num1 + num2` برابر با `20` می‌شود.

اگر مقدار پیش‌فرض را از پارامتری بگیریم که بعدتر، در سمت راست، تعریف شده است، آن پارامتر هنوز مقداردهی اولیه نشده و خطا رخ می‌دهد.

</p>
</details>

---

###### 89. خروجی چیست؟

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
- D: شیء سراسریِ `module.js`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با ساختار `import * as name`، همهٔ خروجی‌های فایل `module.js` را در فضای نامی به نام `data` در `index.js` وارد می‌کنیم. فایل مبدأ دو خروجی دارد: خروجی پیش‌فرض، که تابعی با نتیجهٔ `"Hello World"` است، و خروجی نام‌دار `name` با مقدار `"Lydia"`.

شیء فضای نام `data`، ویژگی `default` را برای خروجی پیش‌فرض دارد و ویژگی‌های دیگر آن نام و مقدار خروجی‌های نام‌دار هستند.

</p>
</details>

---

###### 90. خروجی چیست؟

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

کلاس‌ها ساختاری ساده‌تر برای تعریف الگوی سازنده و پروتوتایپ فراهم می‌کنند. معادل سازنده‌ایِ کلاس `Person` در این مثال چنین است:

```javascript
function Person(name) {
  this.name = name;
}
```

فراخوانی سازنده با `new` یک نمونه از `Person` می‌سازد. نتیجهٔ `typeof` برای این نمونه `"object"` است؛ پس `typeof member` همین مقدار را می‌دهد.

</p>
</details>

---

###### 91. خروجی چیست؟

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

متد `.push`، _طول جدید آرایه_ را برمی‌گرداند، نه خودِ آرایه را! بنابراین `[1, 2, 3].push(4)` باعث می‌شود `newList` مقدار عددی `4` بگیرد.

سپس می‌خواهیم `.push` را روی این عدد اجرا کنیم. عدد `4` چنین متدی ندارد؛ بنابراین `TypeError` رخ می‌دهد.

</p>
</details>

---

###### 92. خروجی چیست؟

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

تابع معمولیِ قابل‌ساخت مانند `giveLydiaPizza` یک ویژگی `prototype` دارد که شیئی با ویژگی `constructor` است. اما تابع پیکانی مانند `giveLydiaChocolate` چنین ویژگی‌ای ندارد؛ پس `giveLydiaChocolate.prototype` مقدار `undefined` می‌دهد.

</p>
</details>

---

###### 93. خروجی چیست؟

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

عبارت `Object.entries(person)` آرایه‌ای از زیرآرایه‌های شامل کلید و مقدار برمی‌گرداند:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

با `for-of` هر زیرآرایه را پیمایش و با `const [x, y]` همان‌جا واسازی می‌کنیم. `x` عضو اول و `y` عضو دوم زیرآرایه را می‌گیرد.

در زیرآرایهٔ اول، `x` برابر با `"name"` و `y` برابر با `"Lydia"` است و چاپ می‌شوند. در زیرآرایهٔ دوم، `x` برابر با `"age"` و `y` برابر با `21` است و چاپ می‌شوند.

</p>
</details>

---

###### 94. خروجی چیست؟

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

`...args` پارامتر باقی‌مانده است. مقدار آن آرایه‌ای از همهٔ آرگومان‌های باقی‌مانده است و **فقط می‌تواند آخرین پارامتر باشد**! در مثال سؤال، این پارامتر در جایگاه دوم و پیش از پارامتر دیگری آمده است؛ پس خطای نحوی رخ می‌دهد.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
```

مثال اصلاح‌شدهٔ بالا معتبر است و آرایهٔ `[ 'banana', 'apple', 'orange', 'pear' ]` را برمی‌گرداند.

</p>
</details>

---

###### 95. خروجی چیست؟

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

در جاوااسکریپت نوشتن صریح سمی‌کالن (`;`) همیشه اجباری نیست؛ در موقعیت‌های مشخص، موتور آن را خودکار درج می‌کند. این سازوکار **درج خودکار سمی‌کالن** نام دارد و روی دستورهایی مانند اعلان متغیر، `return`، `throw` و `break` اثر می‌گذارد.

اینجا پس از `return` به خط جدید رفته‌ایم و `a + b` را نوشته‌ایم. به‌دلیل شکست خط، سمی‌کالن پس از `return` درج می‌شود؛ گویی کد چنین است:

```javascript
return;
a + b;
```

بنابراین اجرا هرگز به `a + b` نمی‌رسد؛ تابع در `return` پایان می‌یابد و چون مقداری همراه آن نیست، `undefined` برمی‌گرداند. توجه کنید که این رفتار به‌معنای درج خودکار سمی‌کالن پس از هر ساختار `if/else` نیست.

</p>
</details>

---

###### 96. خروجی چیست؟

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

می‌توان به اتصال یک کلاس، کلاس یا تابع سازندهٔ دیگری نسبت داد. اینجا `Person` را برابر با `AnotherPerson` قرار می‌دهیم. سازندهٔ جدید، ویژگی `name` را `Sarah` قرار می‌دهد؛ بنابراین ویژگی `name` در نمونهٔ جدید `member` برابر با `"Sarah"` است.

</p>
</details>

---

###### 97. خروجی چیست؟

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

متد `Object.keys` فقط کلیدهای رشته‌ایِ شمارش‌پذیرِ خودِ شیء را برمی‌گرداند و کلیدهای `Symbol` را لحاظ نمی‌کند؛ پس اینجا آرایهٔ خالی می‌دهد. هنگام چاپ خودِ شیء، ویژگی با کلید نمادین نیز دیده می‌شود.

نمادها مقدارهایی یکتا هستند و مثلاً از تداخل تصادفی نام ویژگی‌ها هنگام کار دو کتابخانه روی یک شیء جلوگیری می‌کنند. از فهرست کلیدهای رشته‌ای هم کنار گذاشته می‌شوند، اما پنهان‌سازی کامل ایجاد نمی‌کنند؛ با `Object.getOwnPropertySymbols()` همچنان می‌توان به کلیدهای نمادین دسترسی داشت.

</p>
</details>

---

###### 98. خروجی چیست؟

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

تابع `getList` آرایه‌ای می‌گیرد که همان ابتدا در پارامترها واسازی می‌شود؛ مانند این عبارت:

`[x, ...y] = [1, 2, 3, 4]`

الگوی باقی‌ماندهٔ `...y` همهٔ عضوهای باقی‌مانده، یعنی `2`، `3` و `4`، را در آرایه‌ای قرار می‌دهد. `x` برابر با `1` و `y` برابر با `[2, 3, 4]` است؛ بنابراین نتیجهٔ `[x, y]` برابر با `[1, [2, 3, 4]]` خواهد بود.

تابع `getUser` یک شیء می‌گیرد. در تابع پیکانی، برای بازگرداندن ضمنی یک عبارت نیازی به آکولاد نداریم؛ اما اگر آن عبارت یک شیء باشد، باید آن را در پرانتز بگذاریم. وگرنه آکولادها بدنهٔ بلوکی تابع تفسیر می‌شوند. کد داخل آن‌ها در این مثال معتبر نیست و `SyntaxError` رخ می‌دهد.

شکل درستِ بازگرداندن شیء چنین است:

`const getUser = user => ({ name: user.name, age: user.age })`

نکته: اگر کل کد سؤال را یکجا اجرا کنید، خطای نحوی پیش از اجرای هر بخش رخ می‌دهد؛ خروجی مربوط به `getList` رفتار آن بخش در اجرای جداگانه است.

</p>
</details>

---

###### 99. خروجی چیست؟

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

متغیر `name` یک رشته نگه می‌دارد؛ تابع نیست و نمی‌توان آن را فراخوانی کرد.

خطای `TypeError` زمانی رخ می‌دهد که نوع مقدار برای عملیات موردنظر مناسب نباشد. اینجا چون `name` را فراخوانی می‌کنیم، جاوااسکریپت تابع انتظار دارد، اما رشته دریافت می‌کند؛ بنابراین خطای `name is not a function` رخ می‌دهد.

خطای `SyntaxError` مربوط به کد نامعتبر از نظر دستور زبان است؛ مثلاً نوشتن اشتباه `return` به‌صورت `retrun` در ساختاری که با آن نامعتبر می‌شود. خطای `ReferenceError` زمانی رخ می‌دهد که جاوااسکریپت نتواند نام مورد دسترسی را پیدا کند.

</p>
</details>

---

###### 100. مقدار خروجی چیست؟

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

آرایهٔ خالی `[]` درست‌نما است. عملگر `&&` اگر عملوند چپ درست‌نما باشد، مقدار سمت راست را برمی‌گرداند؛ پس در بخش اول رشتهٔ `"Im"` در قالب قرار می‌گیرد.

رشتهٔ خالی `""` نادرست‌نما است. در این حالت `&&` همان عملوند چپ را برمی‌گرداند و سمت راست را ارزیابی نمی‌کند؛ بنابراین بخش `n't` اضافه نمی‌شود و نتیجه مطابق گزینهٔ B است.

</p>
</details>

---

###### 101. مقدار خروجی چیست؟

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

عملگر `||` نخستین عملوند درست‌نما را برمی‌گرداند؛ اگر همه نادرست‌نما باشند، آخرین عملوند نتیجه می‌شود.

در `(false || {} || null)`، شیء خالی `{}` اولین و تنها مقدار درست‌نما است؛ پس `one` برابر با `{}` می‌شود.

در `(null || false || "")`، همهٔ مقدارها نادرست‌نما هستند؛ پس آخرین مقدار، یعنی `""`، در `two` قرار می‌گیرد.

در `([] || 0 || "")`، آرایهٔ خالی `[]` درست‌نما است و همان ابتدا برگردانده می‌شود؛ پس `three` برابر با `[]` است.

</p>
</details>

---

###### 102. مقدار خروجی چیست؟

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

پرامیس راهی برای دریافت نتیجهٔ عملیاتی است که می‌تواند بعداً کامل شود. درحالی‌که منتظر موفقیت یا رد آن هستیم، بقیهٔ کد می‌تواند اجرا شود؛ تابع‌های واکنش به نتیجه نیز پس از خالی‌شدن پشته اجرا می‌شوند.

هم با `.then` و هم با `await` در تابع `async` می‌توان نتیجه را دریافت کرد، اما ترتیب ادامهٔ کد متفاوت است.

در `firstFunction`، تابعِ `.then` برای دریافت نتیجه ثبت می‌شود و اجرای بقیهٔ کد، یعنی `console.log('second')`، ادامه می‌یابد. سپس پس از خالی‌شدن پشته، `I have resolved!` چاپ می‌شود.

در `secondFunction`، کلیدواژهٔ `await` ادامهٔ همان تابع `async` را تا دریافت نتیجه متوقف می‌کند. بنابراین ابتدا `I have resolved!` و سپس در خط بعد `second` چاپ می‌شود.

</p>
</details>

---

###### 103. مقدار خروجی چیست؟

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

عملگر `+` هم برای جمع عددها و هم برای الحاق رشته‌ها استفاده می‌شود. اگر پس از تبدیل عملوندها به مقدار اولیه، یکی از آن‌ها رشته باشد، دیگری هم به رشته تبدیل می‌شود.

ورودی اول عدد `1` است؛ پس `1 + 2` عدد `3` می‌دهد.

ورودی دوم رشتهٔ `"Lydia"` است؛ عدد `2` به `"2"` تبدیل می‌شود و نتیجهٔ الحاق `"Lydia2"` است.

شیء `{ name: "Lydia" }` در این عملیات به رشتهٔ `"[object Object]"` تبدیل می‌شود. سپس `2` نیز به رشته تبدیل شده و نتیجه `"[object Object]2"` خواهد بود.

</p>
</details>

---

###### 104. مقدار آن چیست؟

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

می‌توان مقدار پرامیس یا غیرپرامیس را به `Promise.resolve` داد. نتیجه یک پرامیس است که با مقدار داده‌شده حل می‌شود؛ اگر ورودی خودش پرامیس باشد، نتیجه وضعیت آن را دنبال می‌کند. یک تابع معمولی نیز به‌عنوان مقدار پذیرفته می‌شود و خودکار اجرا نمی‌شود.

اینجا عدد `5` را داده‌ایم؛ پس نتیجه پرامیسی موفق (fulfilled) با مقدار `5` است.

</p>
</details>

---

###### 105. مقدار آن چیست؟

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

هنگام ارسال شیء، ارجاع آن کپی می‌شود. در مقایسهٔ سخت‌گیرانهٔ اشیا با `===`، هویت و ارجاع آن‌ها مقایسه می‌شود.

مقدار پیش‌فرض `person2` همان شیء `person` است و برای `person1` نیز همان شیء را می‌فرستیم.

بنابراین هر دو به یک محل حافظه اشاره دارند و برابر هستند. شاخهٔ `else` اجرا می‌شود و `They are the same!` چاپ می‌شود.

</p>
</details>

---

###### 106. مقدار آن چیست؟

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

دو روش دسترسی به ویژگی شیء، نشانه‌گذاری نقطه‌ای و کروشه‌ای هستند. اینجا `colorConfig.colors` از نوع نقطه‌ای است و مانند `colorConfig["colors"]` کلید دقیق `colors` را جست‌وجو می‌کند.

چنین ویژگی‌ای روی `colorConfig` وجود ندارد؛ پس نتیجه `undefined` است. سپس تلاش برای دسترسی به `[1]` روی آن، خطای `TypeError` با پیامی مانند `Cannot read property '1' of undefined` می‌دهد.

در روش کروشه‌ای، عبارت داخل کروشه ابتدا ارزیابی می‌شود. اگر `colorConfig[colors[1]]` را می‌نوشتیم، `colors[1]` به `red` ارزیابی و ویژگی `red` در `colorConfig` خوانده می‌شد.

</p>
</details>

---

###### 107. مقدار آن چیست؟

```javascript
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

ایموجی‌ها در رشته‌ها با یونیکد نمایش داده می‌شوند. دنبالهٔ یونیکد این قلب `U+2764 U+FE0F` است. اینجا دو رشته با دنبالهٔ یکسان را مقایسه می‌کنیم؛ بنابراین نتیجه `true` است.

</p>
</details>

---

###### 108. کدام‌یک از این متدها آرایهٔ اصلی را تغییر می‌دهد؟

```javascript
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- A: همهٔ آن‌ها
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

متد `splice` با حذف، جایگزینی یا اضافه‌کردن عضو، آرایهٔ اصلی را تغییر می‌دهد. اینجا دو عضو از اندیس `1`، یعنی `'🥑'` و `'😍'`، حذف و ایموجی ✨ جایگزین می‌شود.

متدهای `map`، `filter` و `slice` آرایهٔ جدید برمی‌گردانند؛ `find` یک عضو و `reduce` نتیجهٔ کاهش را برمی‌گرداند. خودِ این متدها آرایهٔ اصلی را تغییر نمی‌دهند، هرچند تابع بازگشتیِ داده‌شده به آن‌ها ممکن است اثر جانبی داشته باشد.

</p>
</details>

---

###### 109. خروجی چیست؟

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

ویژگی `favoriteFood` در شیء `info` مقدار رشته‌ایِ عضو اول آرایهٔ `food`، یعنی `'🍕'`، را می‌گیرد. رشته یک نوع اولیه است و انتساب آن ارجاعی به جایگاه عضو آرایه ایجاد نمی‌کند.

نوع‌های اولیه، یعنی مقدارهای غیرشیء، با _مقدار_ کپی می‌شوند. برای توضیح بیشتر می‌توانید [نوشتهٔ نویسنده دربارهٔ مقدار و ارجاع](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) را بخوانید.

سپس فقط مقدار `info.favoriteFood` را عوض می‌کنیم. آرایهٔ `food` تغییری نمی‌کند، زیرا آن ویژگی فقط نسخه‌ای از مقدار عضو اول را گرفته بود. بنابراین خروجی همچنان `['🍕', '🍫', '🥑', '🍔']` است.

</p>
</details>

---

###### 110. این متد چه کاری انجام می‌دهد؟

```javascript
JSON.parse();
```

- A: JSON را به یک مقدار جاوااسکریپت تبدیل می‌کند.
- B: یک شیء جاوااسکریپت را به JSON تبدیل می‌کند.
- C: هر مقدار جاوااسکریپت را به JSON تبدیل می‌کند.
- D: JSON را فقط به یک شیء جاوااسکریپت تبدیل می‌کند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: A

با `JSON.parse()` می‌توان یک رشتهٔ JSON را به یک مقدار جاوااسکریپت تبدیل کرد.

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

###### 111. خروجی چیست؟

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

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

هر تابع بستر اجرا و محدودهٔ خودش را دارد. تابع `getName` ابتدا در محدودهٔ خودش به‌دنبال `name` می‌گردد. این تابع متغیر محلی `name` دارد که با `let` و مقدار `'Sarah'` اعلان شده است.

متغیرهای `let` و `const` بالاکشی می‌شوند، اما برخلاف `var` مقداردهی اولیه نمی‌شوند. پیش از خط اعلان و مقداردهی اولیه در «ناحیهٔ مردهٔ زمانی» هستند؛ دسترسی به آن‌ها در این بازه خطای `ReferenceError` ایجاد می‌کند.

اگر درون `getName` متغیر محلی `name` را اعلان نکرده بودیم، موتور جاوااسکریپت زنجیرهٔ محدوده‌ها را در بیرون جست‌وجو می‌کرد و متغیر `name` با مقدار `Lydia` را می‌یافت؛ در آن صورت `Lydia` چاپ می‌شد:

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

###### 112. خروجی چیست؟

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

در تابع مولد، `yield` یک مقدار را ارائه می‌کند. با `yield*` می‌توان ارائهٔ مقدارها را به مولد یا پیمایش‌پذیر دیگری، مانند آرایه، سپرد.

در `generatorOne`، خودِ آرایهٔ `['a', 'b', 'c']` یکجا با `yield` ارائه می‌شود؛ پس `one.next().value` برابر با کل آرایه است.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

در `generatorTwo` از `yield*` استفاده می‌کنیم. بنابراین مقدارهای آرایه یکی‌یکی ارائه می‌شوند. اولین مقدار `a` است؛ پس اولین فراخوانی `two.next().value` مقدار `a` می‌دهد.

```javascript
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</p>
</details>

---

###### 113. خروجی چیست؟

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

عبارت‌های داخل رشتهٔ قالبی ابتدا ارزیابی می‌شوند. اینجا عبارت `(x => x)('I love')` یک تابع پیکانیِ بلافاصله فراخوانی‌شونده است. آرگومان `'I love'` در `x` قرار می‌گیرد و همان مقدار بازگردانده می‌شود. بنابراین رشتهٔ نهایی `I love to program` است.

</p>
</details>

---

###### 114. چه اتفاقی می‌افتد؟

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- A: تابع بازگشتی `setInterval` اجرا نمی‌شود.
- B: تابع بازگشتی `setInterval` یک بار اجرا می‌شود.
- C: تابع بازگشتی `setInterval` همچنان هر ثانیه اجرا می‌شود.
- D: اصلاً `config.alert()` را فراخوانی نکردیم؛ `config` برابر با `null` است.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

معمولاً وقتی دیگر هیچ ارجاعی به یک شیء وجود نداشته باشد، آن شیء می‌تواند توسط زباله‌روب حافظه (garbage collector) جمع‌آوری شود. اما تابع بازگشتی پیکانیِ `setInterval`، مقدار `this` متد را نگه می‌دارد و در این مثال همچنان به شیء اولیهٔ `config` دسترسی دارد.

تا وقتی چنین ارجاعی برقرار است، شیء قابل جمع‌آوری نیست. خودِ زمان‌سنج تکرارشونده نیز با قرار دادن `config` روی `null` یا حذف ویژگی `alert` لغو نمی‌شود. باید شناسهٔ زمان‌سنج را نگه داشت و به `clearInterval` داد؛ در این مثال، پیش از انتساب `null` می‌توان از `clearInterval(config.alert)` استفاده کرد.

چون زمان‌سنج لغو نشده، تابع بازگشتی تقریباً هر ۱۰۰۰ میلی‌ثانیه، یعنی یک ثانیه، اجرا می‌شود.

</p>
</details>

---

###### 115. کدام روش مقدار `'Hello world!'` را برمی‌گرداند؟

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
- C: ۲ و ۳
- D: همهٔ آن‌ها

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

در متد `set`، آرگومان اول کلید و آرگومان دوم مقدار است. اینجا کلید، خودِ تابع `() => 'greeting'` و مقدار، رشتهٔ `'Hello world!'` است. بنابراین نگاشت تقریباً چنین است: `{ () => 'greeting' => 'Hello world!' }`.

روش ۱ نادرست است، چون کلید رشتهٔ `'greeting'` نیست، بلکه شیء تابع است.

روش ۳ هم نادرست است، زیرا تابع جدیدی را به `get` می‌دهد. تابع‌ها شیء هستند و براساس ارجاع مقایسه می‌شوند. دو تابع جداگانه، حتی با کد یکسان، هویت متفاوتی دارند و سخت‌گیرانه برابر نیستند. روش ۲ از همان ارجاع ذخیره‌شده استفاده می‌کند.

</p>
</details>

---

###### 116. خروجی چیست؟

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

هر دو تابع `changeAge` و `changeAgeAndName` پارامتر پیش‌فرضی دارند که شیء _تازهٔ_ `{ ...person }` است. این شیء، نسخه‌ای سطحی از جفت‌های کلید/مقدار `person` دارد.

ابتدا `changeAge` را با خودِ شیء `person` فراخوانی می‌کنیم. تابع ویژگی `age` را یک واحد افزایش می‌دهد؛ پس `person` به `{ name: "Lydia", age: 22 }` تبدیل می‌شود.

سپس `changeAgeAndName` را بدون آرگومان فراخوانی می‌کنیم. این بار `x` شیء تازهٔ `{ ...person }` است. تغییر ویژگی‌های آن، ویژگی‌های سطح اول `person` را عوض نمی‌کند؛ پس `person` همچنان `{ name: "Lydia", age: 22 }` است.

</p>
</details>

---

###### 117. کدام گزینه مقدار `6` را برمی‌گرداند؟

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

با عملگر گسترش `...` می‌توان عضوهای یک مقدار پیمایش‌پذیر را جداگانه ارسال کرد. تابع `sumValues` سه آرگومان `x`، `y` و `z` می‌گیرد. عبارت `...[1, 2, 3]` آرایه را به آرگومان‌های جداگانهٔ `1, 2, 3` تبدیل می‌کند و به تابع می‌فرستد.

</p>
</details>

---

###### 118. خروجی چیست؟

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

با عملگر `+=`، مقدار `num` را یک واحد افزایش می‌دهیم. مقدار اولیه `1` است؛ پس نتیجهٔ `1 + 1` برابر با `2` می‌شود. عضو اندیس `2` در آرایهٔ `list` ایموجی 🥰 است؛ بنابراین `console.log(list[2])` همین را چاپ می‌کند.

</p>
</details>

---

###### 119. خروجی چیست؟

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

با عملگر زنجیره‌سازی اختیاری `?.`، لازم نیست پیش از هر دسترسی تو‌در‌تو، تهی‌بودن مقدار را صریحاً بررسی کنیم. اگر مقدار مبنا `undefined` یا `null` باشد، ارزیابی همان زنجیره کوتاه می‌شود و `undefined` برمی‌گردد.

- در `person.pet?.name`، ویژگی `pet` موجود و غیرتهی است و ویژگی `name` آن مقدار `Mara` دارد.
- در `person.pet?.family?.name`، ویژگی `family` وجود ندارد؛ پس نتیجه `undefined` است.
- در `person.getFullName?.()`، متد وجود دارد و قابل فراخوانی است؛ نتیجهٔ آن `Lydia Hallie` است.
- در `member.getLastName?.()`، خودِ متغیر `member` اصلاً تعریف نشده است؛ بنابراین `ReferenceError` رخ می‌دهد. زنجیره‌سازی اختیاری، نام متغیر اعلان‌نشده را ایمن نمی‌کند.

</p>
</details>

---

###### 120. خروجی چیست؟

```javascript
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}
```

- A: پیام «باید موز بخریم!»؛ `We have to buy bananas!`
- B: پیام «نیازی به خرید موز نداریم»؛ `We don't have to buy bananas`
- C: `undefined`
- D: `1`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

شرط `if` برابر با `groceries.indexOf("banana")` است. این عبارت مقدار `0` می‌دهد که نادرست‌نما است. بنابراین شاخهٔ `else` اجرا و `We don't have to buy bananas!` چاپ می‌شود.

</p>
</details>

---

###### 121. خروجی چیست؟

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

ویژگی `language` فقط یک تنظیم‌کننده (setter) دارد. هدف تنظیم‌کننده تغییر ویژگی‌ها هنگام انتساب است؛ خودش یک مقدار خواندنی ذخیره نمی‌کند. چون دریافت‌کننده (getter) متناظری تعریف نشده، خواندن `person.language` مقدار `undefined` می‌دهد.

</p>
</details>

---

###### 122. خروجی چیست؟

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

عبارت `typeof name` مقدار `"string"` می‌دهد. این رشته درست‌نما است؛ پس `!typeof name` مقدار بولی `false` می‌دهد. هر دو مقایسهٔ `false === "object"` و `false === "string"` نتیجهٔ `false` دارند.

برای بررسی نابرابری نوع، باید از `!==` استفاده می‌کردیم، نه نقیض‌کردن نتیجه با `!typeof`.

</p>
</details>

---

###### 123. خروجی چیست؟

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

تابع `add` زنجیره‌ای از تابع‌های پیکانیِ تو‌در‌تو برمی‌گرداند. فراخوانی اول آرگومان `x` را با مقدار `4` می‌گیرد. فراخوانی بعدی `y` را با مقدار `5` و فراخوانی بعد از آن `z` را با مقدار `6` دریافت می‌کند. در درونی‌ترین تابع، موتور جاوااسکریپت برای یافتن `x` و `y` در زنجیرهٔ محدوده‌ها به بیرون می‌رود. بنابراین `4`، `5` و `6` چاپ می‌شوند.

</p>
</details>

---

###### 124. خروجی چیست؟

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

مولد ناهمگام `range` یک شیء پیمایش‌پذیر ناهمگام برای بازهٔ داده‌شده ایجاد می‌کند. نتیجهٔ هر گام از طریق پرامیس دریافت می‌شود. این شیء را در `gen` قرار می‌دهیم و با `for await ... of` پیمایش می‌کنیم. حلقه منتظر نتیجهٔ هر گام می‌ماند و مقدار حل‌شده را در `item` قرار می‌دهد؛ بنابراین به‌جای خودِ پرامیس‌ها، مقدارهای `1`، `2` و `3` چاپ می‌شوند.

</p>
</details>

---

###### 125. خروجی چیست؟

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

تابع `myFunc` انتظار دارد یک شیء با ویژگی‌های `x`، `y` و `z` دریافت کند. اما به‌جای `{x: 1, y: 2, z: 3}`، سه عدد جداگانه می‌فرستیم. فقط آرگومان اول برای واسازیِ پارامتر اول استفاده می‌شود و ویژگی‌های درخواستی روی آن موجود نیستند؛ پس هر سه مقدار `undefined` می‌شوند.

</p>
</details>

---

###### 126. خروجی چیست؟

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

- A: راننده با سرعت ۱۳۰ حرکت کرده و باید ۳۰۰ بپردازد؛ `The driver drove 130 and has to pay 300`
- B: راننده با سرعت ۱۳۰ مایل‌برساعت حرکت کرده و باید ۳۰۰ دلار بپردازد؛ `The driver drove 130 mph and has to pay $300.00`
- C: سرعت و مبلغ هر دو نامشخص‌اند؛ `The driver drove undefined and has to pay undefined`
- D: سرعت و مبلغ با دو رقم اعشار نمایش داده می‌شوند؛ `The driver drove 130.00 and has to pay 300.00`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

با `Intl.NumberFormat` می‌توان عددها را متناسب با زبان و منطقه قالب‌بندی کرد. عدد `130` با منطقهٔ `en-US`، سبک `unit` و واحد `mile-per-hour` به `130 mph` تبدیل می‌شود. عدد `300` با همین منطقه، سبک `currency` و ارز `USD` به `$300.00` تبدیل می‌شود.

</p>
</details>

---

###### 127. خروجی چیست؟

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

با واسازی می‌توان ویژگی شیء سمت راست را خواند و مقدارش را در مقصد مشخص‌شده در سمت چپ قرار داد. اینجا مقدار `"💀"` به `spookyItems[3]` نسبت داده می‌شود. در نتیجه آرایه تغییر می‌کند و عضو جدید به انتهای آن اضافه می‌شود؛ خروجی `["👻", "🎃", "🕸", "💀"]` است.

</p>
</details>

---

###### 128. خروجی چیست؟

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

متد `Number.isNaN` بررسی می‌کند که ورودی واقعاً از نوع عدد و همان مقدار `NaN` باشد. `name` عدد نیست؛ پس `Number.isNaN(name)` برابر با `false` است. `age` عدد است اما `NaN` نیست؛ پس `Number.isNaN(age)` هم `false` است.

تابع سراسری `isNaN` ابتدا ورودی را به عدد تبدیل می‌کند. تبدیل رشتهٔ `name` در این مثال به `NaN` می‌رسد؛ پس نتیجه `true` است. `age` عددی معتبر است؛ بنابراین نتیجه برای آن `false` است.

</p>
</details>

---

###### 129. خروجی چیست؟

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

متغیرهای `const` پیش از مقداردهی اولیه در دسترس نیستند؛ این بازه «ناحیهٔ مردهٔ زمانی» نام دارد. تابع `getInfo` متغیر محلی `randomValue` دارد. در خط `typeof randomValue`، آن متغیر هنوز مقداردهی نشده است؛ بنابراین حتی `typeof` هم `ReferenceError` ایجاد می‌کند. موتور به محدودهٔ بیرونی رجوع نمی‌کند، چون نام محلی در همین تابع اعلان شده است.

</p>
</details>

---

###### 130. خروجی چیست؟

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

در بلوک `try`، مقدار حاصل از `await myPromise` یعنی `"Woah some cool data"` چاپ می‌شود. چون خطایی رخ نداده، بلوک `catch` اجرا نمی‌شود. اما بلوک `finally` در هر دو حالت موفقیت و خطا اجرا می‌شود؛ بنابراین `"Oh finally!"` نیز چاپ می‌شود.

</p>
</details>

---

###### 131. خروجی چیست؟

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

با `flat` می‌توان آرایهٔ تخت‌شدهٔ جدیدی ساخت. عمق تخت‌سازی به آرگومان آن بستگی دارد. اینجا `1` داده‌ایم که همان مقدار پیش‌فرض است؛ پس تنها یک سطح از تو‌در‌تویی برداشته می‌شود. آرایه‌های `['🥑']` و `['✨', '✨', ['🍕', '🍕']]` در سطح بیرونی ادغام می‌شوند و نتیجه `['🥑', '✨', '✨', ['🍕', '🍕']]` است.

</p>
</details>

---

###### 132. خروجی چیست؟

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

متغیر `counterOne` نمونه‌ای از کلاس `Counter` است. سازنده ویژگی `count` را روی نمونه قرار می‌دهد و کلاس متد `increment` دارد. ابتدا دو بار `counterOne.increment()` را فراخوانی می‌کنیم؛ پس `counterOne.count` برابر با `2` می‌شود.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

سپس `counterTwo` را برابر با `counterOne` قرار می‌دهیم. چون مقدار انتسابی ارجاع شیء است، هر دو به همان محل حافظه اشاره دارند و تغییر از طریق یکی، از طریق دیگری هم دیده می‌شود. اکنون `counterTwo.count` هم `2` است.

فراخوانی `counterTwo.increment()` مقدار `count` را به `3` می‌رساند. چاپ `counterOne.count` نیز `3` را نشان می‌دهد.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. خروجی چیست؟

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

ابتدا `funcOne` فراخوانی می‌شود. در خط اول، زمان‌سنج ناهمگام `setTimeout` در رابط وب ثبت می‌شود؛ برای جزئیات، [مقالهٔ نویسنده دربارهٔ حلقهٔ رویداد](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif) را ببینید.

سپس واکنش به `myPromise` ثبت می‌شود. فعلاً فقط تابع بازگشتیِ اولین `then` در صف ریزوظیفه‌ها (microtasks) قرار می‌گیرد.

چون دریافت نتیجهٔ پرامیس و اجرای تابع بازگشتی زمان‌سنج ناهمگام‌اند، اجرای کد عادی ادامه می‌یابد و `Last line 1!` ابتدا چاپ می‌شود. تا وقتی پشته خالی نشده، تابع‌های منتظر اجرا نمی‌شوند.

در `funcTwo`، عبارت `Promise.resolve(Promise.resolve('Promise 2!'))` همان مقدار نهایی پرامیس داخلی را دنبال می‌کند. `await` ادامهٔ تابع را تا دریافت نتیجه متوقف می‌کند. وقتی نوبت ادامهٔ تابع می‌رسد، `Promise 2!` چاپ، زمان‌سنج دوم ثبت و سپس `Last line 2!` چاپ می‌شود.

اگر اولین `then` در `funcOne` دستور چاپ داشت، پیش از `Promise 2!` دیده می‌شد. اما آن مرحله بی‌صدا اجرا می‌شود و دومین `then` را به صف ریزوظیفه‌ها اضافه می‌کند؛ بنابراین چاپ مرحلهٔ دوم، یعنی `Promise 1!`، پس از خروجی‌های `funcTwo` انجام می‌شود.

ریزوظیفه‌ها پیش از وظیفه‌های زمان‌سنج پردازش می‌شوند. پس از پایان آن‌ها، تابع بازگشتی زمان‌سنج اول `Timeout 1!` را چاپ می‌کند و از پشته خارج می‌شود؛ سپس تابع بازگشتی زمان‌سنج دوم `Timeout 2!` را چاپ می‌کند.

</p>
</details>

---

###### 134. چطور از `index.js` تابع `sum` در `sum.js` را فراخوانی کنیم؟

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
- D: با `*` فقط خروجی‌های نام‌دار وارد می‌شوند، نه خروجی پیش‌فرض.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `*` همهٔ خروجی‌های فایل، چه پیش‌فرض و چه نام‌دار، وارد فضای نام می‌شوند. مثلاً اگر فایل زیر را داشته باشیم:

```javascript
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
console.log(info);
```

خروجی این‌گونه خواهد بود:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

در مثال `sum`، مقدار واردشده شبیه این است:

```javascript
{ default: function sum(x) { return x + x } }
```

بنابراین تابع پیش‌فرض را با `sum.default` فراخوانی می‌کنیم.

</p>
</details>

---

###### 135. خروجی چیست؟

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
- D: چیزی چاپ نمی‌شود.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

با `Proxy` می‌توان برای عملیاتی روی یک شیء رفتار دلخواه تعریف کرد. آرگومان اول شیء هدف و آرگومان دوم شیء گرداننده است. اینجا `handler` دو تلهٔ `set` و `get` دارد: اولی هنگام انتساب ویژگی و دومی هنگام خواندن آن فراخوانی می‌شود.

هدف، شیء خالی `{}` است و `person` پروکسیِ آن را نگه می‌دارد. انتساب ویژگی روی `person` تلهٔ `set` و دسترسی به ویژگی تلهٔ `get` را فعال می‌کند.

ابتدا `person.name = "Lydia"` اجرا می‌شود؛ `set` پیام `"Added a new property!"` را چاپ می‌کند.

سپس ویژگی خوانده می‌شود و `get` پیام `"Accessed a property!"` را چاپ می‌کند.

</p>
</details>

---

###### 136. کدام گزینه شیء `person` را تغییر می‌دهد؟

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

با `Object.seal` می‌توان از _افزودن_ ویژگی‌های جدید و _حذف_ ویژگی‌های موجود جلوگیری کرد.

اما همچنان می‌توان مقدار ویژگی‌های موجودِ نوشتنی را تغییر داد.

</p>
</details>

---

###### 137. کدام گزینه شیء `person` را تغییر می‌دهد؟

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

متد `Object.freeze` شیء را منجمد می‌کند؛ ویژگی‌های مستقیم آن را نمی‌توان اضافه، حذف یا تغییر داد.

اما این انجماد _سطحی_ است. اگر مقدار یک ویژگی شیء دیگری باشد، مانند `address` در این مثال، ویژگی‌های آن شیء داخلی منجمد نمی‌شوند و قابل تغییر باقی می‌مانند.

</p>
</details>

---

###### 138. خروجی چیست؟

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

ابتدا `myFunc()` را بدون آرگومان فراخوانی می‌کنیم. پارامترها پیش‌فرض می‌گیرند: `num` برابر با `2` و `value` برابر با نتیجهٔ `add(num)` می‌شود. چون `num` برابر با `2` است، `add` مقدار `4` برمی‌گرداند.

سپس `myFunc(3)` را فراخوانی می‌کنیم؛ `num` مقدار `3` می‌گیرد. برای `value` آرگومانی نداده‌ایم، پس عبارت پیش‌فرض `add(num)` دوباره ارزیابی می‌شود. این بار `add` مقدار `6` می‌دهد؛ بنابراین خروجی‌ها به‌ترتیب `2` و `4`، سپس `3` و `6` هستند.

</p>
</details>

---

###### 139. خروجی چیست؟

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

با نشانهٔ `#` می‌توان فیلدهای خصوصی کلاس تعریف کرد. این فیلدها از بیرونِ بدنهٔ کلاس قابل دسترسی نیستند. تلاش برای چاپ `counter.#number` در بیرون کلاس `Counter`، خطای نحوی `SyntaxError` ایجاد می‌کند.

</p>
</details>

---

###### 140. چه عبارتی کم است؟

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

برای پیمایش `members` هر عضو آرایهٔ `teams`، باید `teams[i].members` را به مولد `getMembers` بدهیم. نتیجه یک شیء مولد است. برای ارائهٔ تک‌تک مقدارهای آن، باید از `yield*` استفاده کنیم.

اگر فقط `yield`، `return yield` یا `return` بنویسیم، خودِ شیء مولد به‌عنوان یک مقدار ارائه یا بازگردانده می‌شود، نه تک‌تک اعضای آن.

</p>
</details>

---

###### 141. خروجی چیست؟

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

تابع `addHobby` دو پارامتر می‌گیرد: `hobby` و `hobbies`. مقدار پیش‌فرض دومی آرایهٔ `person.hobbies` است.

در فراخوانی اول، `"running"` و یک آرایهٔ خالی می‌فرستیم؛ پس `running` فقط به همان آرایهٔ خالی اضافه می‌شود.

در فراخوانی دوم، فقط `"dancing"` را می‌فرستیم. پارامتر `hobbies` پیش‌فرض می‌گیرد و `dancing` به `person.hobbies` اضافه می‌شود.

در فراخوانی آخر، `"baking"` و خودِ `person.hobbies` را می‌فرستیم؛ پس `baking` هم به آن اضافه می‌شود.

در پایان `person.hobbies` برابر با `["coding", "dancing", "baking"]` است.

</p>
</details>

---

###### 142. خروجی چیست؟

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
- D: هیچ‌چیز؛ هیچ متدی را فراخوانی نکردیم.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: B

متغیر `pet` نمونه‌ای از کلاس `Flamingo` است. هنگام ساخت نمونه، سازندهٔ `Flamingo` اجرا می‌شود. ابتدا `"I'm pink. 🌸"` چاپ می‌شود؛ سپس `super()` سازندهٔ والد، یعنی `Bird`، را فراخوانی می‌کند و `"I'm a bird. 🦢"` چاپ می‌شود.

</p>
</details>

---

###### 143. کدام گزینه خطا ایجاد می‌کند؟

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

کلیدواژهٔ `const` جلوی انتساب دوباره به متغیر را می‌گیرد؛ خودِ مقدار را تغییرناپذیر نمی‌کند. بنابراین ویژگی‌های آرایهٔ `emojis` را می‌توان با `push`، `splice` یا قرار دادن طول روی صفر تغییر داد. اما نسبت‌دادن یک آرایهٔ جدید به خودِ متغیر، مانند مورد ۳، خطا ایجاد می‌کند.

</p>
</details>

---

###### 144. چه چیزی به `person` اضافه کنیم تا خروجی `[...person]` برابر با `["Lydia Hallie", 21]` شود؟

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: هیچ‌چیز؛ اشیا به‌طور پیش‌فرض پیمایش‌پذیرند.
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: C

اشیای معمولی به‌طور پیش‌فرض پیمایش‌پذیر نیستند. برای پیمایش‌پذیرشدن باید متد `[Symbol.iterator]` داشته باشند که یک پیمایشگر برگرداند. می‌توان آن را با یک متد مولد مانند `*[Symbol.iterator]() {}` پیاده‌سازی کرد.

برای اینکه نتیجهٔ گسترش `["Lydia Hallie", 21]` باشد، این مولد باید مقدارهای ویژگی‌های شیء را یکی‌یکی ارائه کند؛ پس `yield* Object.values(this)` گزینهٔ درست است.

</p>
</details>

---

###### 145. خروجی چیست؟

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

شرط `if` در تابع بازگشتی `forEach`، درست‌نما بودن `num` را بررسی می‌کند. اولین عدد آرایهٔ `nums` برابر با `0` و نادرست‌نما است؛ پس بدنهٔ `if` برای آن اجرا نمی‌شود. برای سه عدد دیگر، یعنی `1`، `2` و `3`، مقدار `count` هر بار یک واحد افزایش می‌یابد. بنابراین مقدار نهایی آن `3` است.

</p>
</details>

---

###### 146. خروجی چیست؟

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

عملگر `?.` دسترسی اختیاری به ویژگی‌های تو‌در‌تو را ممکن می‌کند. اینجا عضو اندیس `1` از زیرآرایهٔ اندیس `1` در `fruits` را می‌خواهیم. اگر خودِ آرایه یا زیرآرایه تهی باشد، زنجیره `undefined` می‌دهد؛ اگر زیرآرایه وجود داشته باشد اما عضو موردنظر موجود نباشد، خواندن آن نیز `undefined` می‌دهد.

در فراخوانی اول، زیرآرایهٔ دوم `['🍍']` است و عضو دوم ندارد؛ پس خروجی `undefined` است.

در فراخوانی دوم، آرگومانی نداده‌ایم و `fruits` برابر با `undefined` است؛ زنجیرهٔ اختیاری نتیجهٔ `undefined` می‌دهد.

در فراخوانی آخر، زیرآرایهٔ دوم `['🍊', '🍌']` است و عضو اندیس `1` آن `🍌` است؛ بنابراین همین ایموجی چاپ می‌شود.

</p>
</details>

---

###### 147. خروجی چیست؟

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

متغیر `calc` یک نمونه از کلاس `Calc` نگه می‌دارد. سپس نمونهٔ _دیگری_ ساخته و متد `increase` روی آن فراخوانی می‌شود. ویژگی `count` در سازنده روی هر نمونه جداگانه ایجاد شده و میان نمونه‌ها روی پروتوتایپ مشترک نیست. بنابراین نمونه‌ای که `calc` به آن اشاره دارد تغییر نکرده و `count` آن همچنان `0` است.

</p>
</details>

---

###### 148. خروجی چیست؟

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

تابع `updateUser` در صورت دریافت مقدار، ویژگی‌های `email` و `password` را روی `user` تغییر می‌دهد و سپس همان شیء `user` را برمی‌گرداند. بنابراین `updatedUser` و `user` به یک شیء اشاره دارند و `updatedUser === user` برابر با `true` است.

</p>
</details>

---

###### 149. خروجی چیست؟

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

ابتدا `slice` را روی آرایهٔ `fruit` اجرا می‌کنیم. این متد آرایهٔ اصلی را تغییر نمی‌دهد و بخش انتخاب‌شده، یعنی آرایه‌ای حاوی ایموجی موز، را جداگانه برمی‌گرداند.

سپس `splice` اجرا می‌شود که آرایهٔ اصلی را تغییر می‌دهد. پس از حذف عضو اول، آرایه برابر با `['🍊', '🍎']` است.

در پایان، `unshift` مقدار `'🍇'` را به ابتدای همان آرایه اضافه می‌کند. نتیجهٔ نهایی `['🍇', '🍊', '🍎']` است.

</p>
</details>

---

###### 150. خروجی چیست؟

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

کلیدهای غیرنمادینِ شیء به رشته تبدیل می‌شوند.

چون `dog` یک شیء معمولی است، در `animals[dog]` به `"[object Object]"` تبدیل می‌شود. بنابراین ابتدا `animals["[object Object]"]` مقدار `{ emoji: "🐶", name: "Mara" }` می‌گیرد.

متغیر `cat` نیز شیء است و به همان رشته تبدیل می‌شود؛ پس انتساب `animals[cat]` مقدار همان کلید را با شیء گربه جایگزین می‌کند.

بنابراین خواندن `animals[dog]` در واقع خواندن `animals["[object Object]"]` است و نتیجه `{ emoji: "🐈", name: "Sara" }` خواهد بود.

</p>
</details>

---

###### 151. خروجی چیست؟

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

`updateEmail` تابع پیکانی است و `this` اختصاصیِ متصل به `user` ندارد. مقدار `this` را از محدودهٔ پیرامون می‌گیرد که در شرایط این مثال، محدودهٔ سراسری است. بنابراین ویژگی `email` در `user` تغییر نمی‌کند و چاپ `user.email` همان مقدار اولیهٔ `my@email.com` را نشان می‌دهد.

</p>
</details>

---

###### 152. خروجی چیست؟

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

متد `Promise.all` نتیجهٔ چند پرامیس را با هم دنبال می‌کند. اگر یکی رد شود، پرامیس نتیجه نیز با همان دلیل رد می‌شود. اینجا `promise3` با مقدار `"Third"` رد می‌شود.

متد `catch` که به فراخوانی `runPromises` متصل شده، خطای درون این تابع را دریافت می‌کند. بنابراین فقط `Third` چاپ می‌شود.

</p>
</details>

---

###### 153. مقدار `method` چه باشد تا `{ name: "Lydia", age: 22 }` چاپ شود؟

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

متد `fromEntries` جفت‌های کلید/مقدار، مانند یک آرایهٔ دوبعدی، را به شیء تبدیل می‌کند. عضو اول هر زیرآرایه کلید و عضو دوم مقدار خواهد بود.

اینجا با `map` روی `keys` حرکت می‌کنیم و در هر اندیس، یک زیرآرایه با کلید جاری و عضو هم‌اندیسِ `values` می‌سازیم. نتیجه مجموعه‌ای از جفت‌های درست است که با `Object.fromEntries` به `{ name: "Lydia", age: 22 }` تبدیل می‌شود.

</p>
</details>

---

###### 154. خروجی چیست؟

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

مقدار پیش‌فرض `address` شیء خالی `{}` است. هنگام فراخوانی `createMember` برای آن آرگومانی نداده‌ایم؛ بنابراین همان پیش‌فرض به کار می‌رود.

شیء خالی درست‌نما است؛ پس عبارت شرطی `address ? address : null` خودِ `address`، یعنی `{}`، را برمی‌گرداند. بنابراین ویژگی `address` در نتیجه یک شیء خالی است.

</p>
</details>

---

###### 155. خروجی چیست؟

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

شرط `if` بررسی می‌کند آیا `!typeof randomValue` با `"string"` برابر است. عملگر `!` نتیجه را به بولی تبدیل و نقیض می‌کند: برای مقدار درست‌نما `false` و برای مقدار نادرست‌نما `true` می‌دهد.

اینجا `typeof randomValue` برابر با رشتهٔ درست‌نمای `"number"` است؛ پس `!typeof randomValue` مقدار بولی `false` می‌دهد.

در نتیجه مقایسه عملاً `false === "string"` است و نادرست می‌شود. شاخهٔ `else` اجرا و `Yay it's a string!` چاپ می‌شود.

</p>
</details>

---
