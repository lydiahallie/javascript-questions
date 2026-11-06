# پرسش‌های جاوااسکریپت

ترجمهٔ فارسی ۱۰ سؤال اول، همراه با گزینه‌ها و توضیح پاسخ‌ها.

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


