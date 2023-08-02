<div dir="rtl">

# قائمة اسئلة جافاسكربت متقدمة
أنا بنشر أسئلة اختر جافاسكربت كل يوم على [انستجرام](https://www.instagram.com/theavocoder) واللي بدوري هنشرهم هنا

من البسيط للمتطور: اختبر نفسك في الجافاسكربت, افتكر حاجات كنت ناسيها, او جهز نفسك لمقابلة عمل جايه! :muscle: :rocket: 

الاجابات في الجزء المخفي تحت, ببساطة دوس على السؤال عشان تفتح تفاصيله. اتمنالكم حظ سعيد :heart:

ملحوظة المترجم: الترجمه دي معموله بمزيج من اللغه الانجليزية و اللغه العامية العربية المستخدمه في مصر. انا مشيت في اتجاه اني استخدم اللغه الانجليزية في جزئيات معينه لأن مينفعش تتكتب بالعربي بطريقة او بأخرى من غير ما تفقد المعنى او يبقى البحث عنها بعد كده صعب. لو عندك اقتراح للترجمه اعمل منشن وانت بتعمل `issue` على الموقع هنا. 

---

###### 1. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```
</div>

- أ: `Lydia` و `undefined`
- ب: `Lydia` و `ReferenceError`
- ج: `ReferenceError` و `21`
- د: `undefined` و `ReferenceError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: د

جوا الدالة احنا الاول عملنا متغير `name` بالكلمة الدالة `var`. ده معناه ان المتغير ده هيكون موجود في الذاكرة في مرحلة التكوين بالقيمة `undefined` قبل ما الكود يشتغل لحد ما نوصل تحديداً للسطر اللي فيه بنحط قيمة للمتغير ده. احنا بقى لحد السطر اللي بنبطع فيه المتغير ده مكانش لسه اتعمل وبالتالي كان لسه فيه قيمة `undefined`.

المتغيرات اللي بتتعمل بكلمة `let` و `const` بيعملوا نفس الموضوع, بس الفرق ان مبنقدرش ناخد قيم منهم الا لحد ما نضيفلهم قيم من الأساس. دي اسمها `temporal dead zone` او بالعربي "منطقة الموت المؤقتة". لما بنحاول ناخد قيمة متغير قبل ما نعمله جافاسكربت بترجع خطأ من نوع `ReferenceError`

</p>
</details>

---

###### 2. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```
</div>

- أ: `0 1 2` و `0 1 2` 
- ب: `0 1 2` و `3 3 3`
- ج: `3 3 3` و `0 1 2`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة: ج

الفنكشن اللي`setTimeout` بتشغلها بيتم تشغليها _بعد_ ما اللووب تخلص بسبب قائمة الاحداث `event queue` في جافاسكربت. بما ان اول لووب اتعملت كان المتغير بتاعها معمول بكلمة `var` اذا كان `global` وبالتالي في اللوب احنا كل شوية كنا بنزود `i` لحد ما وصل ل 3 و _بعد_ كده قامت الفنكشن اللي جوا `setTimeout` اشتغلت. ده كده اول لووب. 

اما بقى في تاني لووب المتغير `i` كان معمول بكلمة `let` و بالتالي المنظور بتاعه `scope` محدد بالاقواس المحيطة بيه `block` وبالتالي في كل مره اللوب هتزيد هيكون في قيمة جديدة تماماً للمتغير `i` و كل قيمة من دول موجوده جوا ال`block scope` اللي هي حصلت فيه, و بالتالي هيبقى كأن البرنامج شايف 3 قيم للمتغير `i` في 3 اماكن مختلفه!

</p>
</details>

---

###### 3. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```
</div>

- أ: `20` و `62.83185307179586`
- ب: `20` و `NaN`
- ج: `20` و `63`
- د: `NaN` و `63`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة: ب

خلي بالك من نوعية الفنكشن `diameter` و هي `regular`و نوعية الفنكشن `perimeter` واللي هي `arrow function`.

في النوع الاخير, الكلمة الدالة `this` بتشاور الى المحيط بالدالة دي. وده معناه اننا لما بنشغل `perimeter` احنا مش بنشاور ب`this` على `shape` بل بنشاور على المحيط و هو `window` مثلاً! 

وبالتالي مفيش قيمة `radius` في النطاق ده, و بالتالي البرنامج بيدينا `undefined`.
</p>
</details>

---

###### 4. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
+true;
!"Lydia";
```
</div>

- أ: `1` و `false` 
- ب: `NaN` و `false`
- ج: `false` و `false`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

علامة الجمع تحاول دائما ان تغير قيم من قيم مدخلاتها الى رقم باعتبار ان اي قيمة حقيقية ايجابية `true` يتم تحويلها لرقم `1` و القيم السالبية `false` تتحول الى `0`. 
The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.

و في الحالة دي القيمة الكتابية `'Lydia'` تعتبر ايجابية. هنا بقى السؤال: "هل القيمه الايجابيه دي سالبيه؟ و بالتالي الاجابة لا اللي هي `false`.

</p>
</details>

---

###### 5. اختر الاجابة الصحيحة
<div dir="ltr">

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```
</div>

- أ: `mouse.bird.size` متنفعش
- ب: `mouse[bird.size]` متنفعش
- ج: mouse[bird["size"]]` متنفعش
- د: كلهم ينفعوا

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

في جافاسكربت كل مفاتيح العناصر `object keys` من النوع `string` الا في حالة الـ `symbol`. وعلى الرغم من اننا ممكن منكتبهمش في شكل `string` فهما دايماً بيتحولوا ل`string`
بص المثال: 
<div dir="ltr">

```javascriptlet obj = {
  size: 'big'
}
```
</div>

في المثال ده احنا عملنا عنصر و كان ليه مفتاح اسمه size. شكل size احنا عاملينه من غير علامة التنصيص `""` ولكن لما البرنامج بيشتغل بيتم تحويلها الى سترنج و بالتالي بتكون في شكل `"size"`

غير بقى ان جافاسكربت بتفك كل جمله لوحدها. ده معناه انها لما بنستعمل علامات ال `[]` واسمها `bracket notation` هتفضل تمشي من اول `[` لحد ما توصل للي يقفله اللي هو `]`. و بعد كده هتقوم مشغله الجمله بعد ما تعرف ان الجمله دي مفيهاش اخطاء. 

فا عشان كده عندنا `mouse[bird.size]` الاول هتجيب `bird.size` اللي قيمته `"small"` وبالتالي تبقى الجمله `mouse["small"]` هترجع `true` 

ولكن لما بنستعمل ال `dot notation` مبيحصلش كده. `mouse` ملوش مفتاح اسمه `bird` و بالتالي احنا بنطلب قيمه موجوده جوا حاجه مش موجودة اصلاً و بالتالي بيرجعلنا خطأ `cannot read property of undefined`.

</p>
</details>

---

---

###### 6. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```
</div>

- أ: `Hello`
- ب: `Hey`
- ج: `undefined`
- د: `ReferenceError`
- هـ: `TypeError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

في جافاسكربت كل العناصر `objects` بيتعاملوا بالـ`reference` لما بنساويهم ببعض. ده معناه ان الاوبجكت مش بيتعمل منه نسخه جديدة و انما بيتم الاشارة اليه بأسم جديد مش اكتر. 

في الاول المتغير `c` جواه قيمة اوبجكت و بعد كده بنقوم عاملين اشارة للاوبجكت ده عن طريق المتغير `d` 
.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

وبالتالي لما بتغير متغير واحد منهم انت بتغير الاتنين لان الاتنين بيشيروا لنفس العنصر في الميموري.

</p>
</details>

---

###### 7. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```
</div>

- أ: `true` `false` `true`
- ب: `false` `false` `true`
- ج: `true` `false` `false`
- د: `false` `true` `true`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

`new Number()` ده `constructor` مبني في اللغه و على الرغم من ان شكل القيمه اللي هتطلع منه مجرد رقم `primitive` لكن الحقيقه ان القيمة اللي هتيجي `object` وهيكون فيه زيادات زي ال`methods` وهكذا.

لما بنستعمل علامة المساواه `==` احنا بنشوف بس لو القيمتين اللي بنقارنهم ليهم نفس **القيمة** فقط ولا لا. الاتنين ليهم قيمة `3` وبالتالي هترجع `true`

اما بقى لما بنستعمل المساواة `===` احنا بنشوف **القيمة** و **النوع** و بالتالي بما ان الاتنين `object` بس موجودين في اماكن مختلفه في الميموري اذاً احنا مش عاملين اشارة لنفس العنصر و بالتالي هترجع `false`.

</p>
</details>

---

###### 8. ايه اللي هيتطبع؟
<div dir="ltr">

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
freddie.colorChange("orange");
```
</div>

- أ: `orange`
- ب: `purple`
- ج: `green`
- د: `TypeError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: د

الدالة `colorChange` من نوع `static` و بالتالي هي مموجوده فقط في ال`constructor` اللي بتتعمل فيه و مش بتروح لأي عنصر بيتعمل من ال`class` ده و بما ان `freddie` ده عنصر معمول من الكلاس ده فا الدالة `colorChange` مش بتروحله و بالتالي مش موجوده معاه و عشان كده هتدينا `TypeError`.

</p>
</details>

---

###### 9. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```
</div>

- أ: `{}`
- ب: `ReferenceError: greetign is not defined`
- ج: `undefined`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

بتطبع العنصر الفاضي لأننا عملنا الاوبجكت ده من نوع `global` لما كتبنا `greetign` بدل `greeting` و بالتالي البرنامج شاف `greetign` على انها `window.greetign={}` لو في المتصفح. 

عشان نبعد عن المشكلة دي نقدر نستعمل `"use strict"` و اللي بدورها بتتأكد ان انت عملت المتغير قبل ما تحاول تتعامل معاه.

</p>
</details>

---

###### 10. ايه اللي هيحصل لما نعمل كده؟
<div dir="ltr">

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```
</div>

- أ: مش هيحصل اي حاجه غلط, الكود ده صحيح تماماً!
- ب:  `SyntaxError`
- ج: `undefined`
- د: `ReferenceError`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

كل حاجه في جافاسكربت عبارة عن `object` حتى الدوال و بالتالي نقدر بكل سهولة اننا نعمل اللي احنا عملناه في الكود و نضيف مفاتيح و قيم للداله على انها عنصر اوبجكت عادي جداً.

</p>
</details>

---

###### 11. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```
</div>

- أ: `TypeError`
- ب: `SyntaxError`
- ج: `Lydia Hallie`
- د: `undefined` `undefined`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

مينفعش تضيف قيم لـ `constructor`بالشكل ده. لو عايز تضيف قيمة لكل الاوبجكتس اللي معمولين من الـ`constructor` ده لازم تستعمل الـ `prototype` 

بص  المثال ده:
<div dir="ltr">

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```
</div>

في المثال ده هنقدر نضيف القيمه لكل العناصر اللي معموله من الـ`constructor` ده. ايه الفايده من ده بقى؟ تخيل معايا ان احنا عملنا كوبي من دالة دي جوا كل عنصر لوحدة --مع التغاضي عن اعتبار ان بعضهم ممكن ميكونوش محتاجينها اصلاً-- احنا كده بنستخدم ميموري كتير جداً على الفاضي بينما عن طريق الـ`prototype` بنقدر اننا نعملها مره واحدة فقط و بتكون موجوده لكل العناصر اللي معموله منها! 


</p>
</details>

---

###### 12. ايه اللي هيتطبع؟
<div dir="ltr">

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
</div>

- أ: `Person {firstName: "Lydia", lastName: "Hallie"}` و `undefined`
- ب: `Person {firstName: "Lydia", lastName: "Hallie"}` و `Person {firstName: "Sarah", lastName: "Smith"}`
- ج: `Person {firstName: "Lydia", lastName: "Hallie"}` و `{}`
- د: `Person {firstName: "Lydia", lastName: "Hallie"}` و `ReferenceError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

كلمة `new` بتشير الى الاوبجكت الفاضي الجديد اللي احنا بنعمله قبل ما يتم اضافة اي قيم ليه. لكن لما مش بتستعمل `new` بيتم الاشارة الى الـ`global` او `window` على حسب انت بتشغل الكود فين و بالتالي لما عملنا `this.firstName = "Sarah"` احنا كده كأننا قولنا `window.firstName = "Sarah"` وبالتالي الاوبجكت `sarah نفسه فضل `undefined` 

</p>
</details>

---

###### 13. ايه  الـ3 مراحل بتوع الـ `event propagation`؟

- أ: Target > Capturing > Bubbling
- ب: Bubbling > Target > Capturing
- ج: Target > Bubbling > Capturing
- د: Capturing > Target > Bubbling

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: د

في مرحلة الـ`capturing` الحدث بيمر الاول خلال العناصر الكبيره المحتوية على العنصر اللي حصلت فيه الحدث اصلاً لحد ما توصل للعنصر ده. بعد كده بتوصل لـ `target` واللي هو العنصر اللي عمل الحدث و بعد كده بترد تاني لفوق في مرحلة الـ`bubbling`


<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. كل العناصر `objects` ليهم `prototype`. هذه العبارة: 

- أ: صحيحة
- ب: خطأ

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

كل العناصر في جافاسكربت ليها `prototype` ما عدا الـ**base object** و اللي كل العناصر بتاخد منه الدوال بتاعته. ده السبب اللي بيخليك تقدر تستعمل الدوال دي في اي عنصر تعمله.


</p>
</details>

---

###### 15. ايه اللي هيتطبع؟
<div dir="ltr">

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
</div>

- أ: `NaN`
- ب: `TypeError`
- ج: `12`
- د: `3`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

جافاسكربت `dynamic` و بالتالي احنا مش بنحدد نوع المتغير لما بنعمله و المتغير نوعه بيتغير عادي جداً و ممكن ده يحصل من غير ما تعرف حتى و ده اسمه `implicit coercion`. 

في المثال ده بقى جافاسكربت هتحول رقم `1` الى `string` عشان الدالة تقدر تتعامل معاه و ترجع قيمة. و في عملية الجمع مابين القيمة العددية `1` و السترنج `"2"` الرقم هيتحول الى سترنج و بعد كده هيقوم متضاف الى السترنج التانية عشان يعمل سترنج `"12"`.

</p>
</details>

---

###### 16. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```
</div>

- أ: `1` `1` `2`
- ب: `1` `2` `2`
- ج: `0` `2` `2`
- د: `0` `1` `2`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

العامل البعدي `x++` بيرجع القيمة الاصلية الاول بعد كده يزود واحد على المتغير

اما العامل القبلي `++x` بيعدل القيمة الاول و يرجع القيمة المعدلة

</p>
</details>

---

###### 17. ايه اللي هيتطبع؟ (جرب تشغل السؤال ده عشان تفهمه كويس)

<div dir="ltr">

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
</div>

- أ: `"Lydia"` `21` `["", " is ", " years old"]`
- ب: `["", " is ", " years old"]` `"Lydia"` `21`
- ج: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب


لو بتستعمل `tagged template literals` اول قيمة داخله للدالة دايماً هتكون `array` مليانه بالسترنج اللي داخله فقط من غير اي متغيرات و الباقي هياخدوا القيم اللي داخله بالترتيب. 

</p>
</details>

---

###### 18. ايه اللي هيتطبع؟

<div dir="ltr">

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
</div>

- أ: `You are an adult!`
- ب: `You are still an adult.`
- ج: `Hmm.. You don't have an age I guess`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

لما بنقارن في جافاسكربت, القيم الـ`primitive` زي الارقام و السترنج البسيطة بيتم مقارنة قيمتها فقط بينما الاوبجكتس بيتم مقارنة الاشارة ليهم `reference`. يعني لما بنقارن اوبجكتس ببعض جافاسكربت بتشوف هل الاتنين بيشاوروا لنفس المكان في الرام ولا لا.

و بما ان الاوبجكتس اللي بنقارنهم احنا هنا داخلين على انهم قيمتين مختلفتين للداله وبالتالي مش بيشيروا لنفس المكان ف الرام يبقى مش متساويين و ده السبب اللي بيخلي الاجابة بالشكل ده. المقارنه عشان تتم بشكل صحيح بقى ممكن تحولهم ل سترنج او تشوف القيم اللي جوا كل اوبجكت.


</p>
</details>

---

###### 19. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
</div>


- أ: `"number"`
- ب: `"array"`
- ج: `"object"`
- د: `"NaN"`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

معامل التفكيك `spread operator ...args` بيرجع `array` فيها الـقيم اللي داخله للدالة. و بما ان كل حاجه في جافاسكربت عبارة عن اوبجكت بما فيها الـ`array` يبقى القيمه اللي هترجع `"object"`

</p>
</details>

---

###### 20. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```
</div>


- أ: `21`
- ب: `undefined`
- ج: `ReferenceError` 
- د: `TypeError`

<details><summary><b>الاجابة</b></summary>
<p>

####  الاجابة الصحيحة: ج

لما بنستعمل `"use strict"` تقدر تتأكد ان انت مش بتعمل متغيرات `global` عن طريق الخطأ. احنا هنا عمرنا ما عملنا `declare` للمتغير `age` اصلاً و بما اننا بنستعمل `"use strict"` البرنامج هيدينا خطأ من نوع `ReferenceError`.


</p>
</details>

---

###### 21. ايه قيمة `sum`?

<div dir="ltr">

```javascript
const sum = eval("10*10+5");
```
</div>

- أ: `105`
- ب: `"105"`
- ج: `TypeError`
- د: `"10*10+5"`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

الدالة `eval` بتشغل الكود اللي داخلها على هيئة `string`. لو السترنج دي بتعبر عن عملية حسابية مثلاً هتقوم مشغله العملية دي و بالتالي `10 * 10 + 5` هيرجع القيمة العددية `105`.


</p>
</details>

---

###### 22. cool_secret هتفضل موجوده قد ايه؟

<div dir="ltr">

```javascript
sessionStorage.setItem("cool_secret", 123);
```
</div>

- أ: للأبد, عمرها ما هتتمسح 
- ب: لما المستخدم يقفل التبويب
- ج: لما المستخدم يقفل نافذة المتصفح كلها
- د: لما المستخدم يطفي الكمبيوتر بتاعه

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

اي معلومات بيتم تخزينها في الـ`sessionStorage` بتتمسح مجرد ما المستخدم يقفل التبويب.

لو استخدمت `localStorage` المعلومات هتفضل موجوده للأبد او لحد ما تمسحها انت بنفسك في الكود.

</p>
</details>

---

###### 23. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
var num = 8;
var num = 10;

console.log(num);
```
</div>

- أ: `8`
- ب: `10`
- ج: `SyntaxError`
- د: `ReferenceError`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

مع كلمة `var` احنا بنعمل المتغير من اول و جديد بنفس الاسم و بقيم مختلفه و بالتالي اخر قيمه بس هي اللي هتكون موجودة. مش بيحصل كده مع `let` و `const`.

</p>
</details>

---

###### 24. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```
</div>

- أ: `false` `true` `false` `true`
- ب: `false` `true` `true` `true`
- ج: `true` `true` `false` `true`
- د: `true` `true` `true` `true`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

كل مفاتيح العناصر `object keys` ما عدا اللي من نوع `Symbol` عبارة عن قيم `string` حتى لو انت مش كاتبها كسترنج. و ده السبب ان `obj.hasOwnProperty('1')` برضه بترجع `true`

اما بالنسبه لنوع `set` فا اللي معانا حالياً جواها قيم عددية فقط و بالتالي الـ`string` `'1'` مش موجوده.

</p>
</details>

---

###### 25. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```
</div>


- أ: `{ a: "one", b: "two" }`
- ب: `{ b: "two", a: "three" }`
- ج: `{ a: "three", b: "two" }`
- د: `SyntaxError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

لو عندك في العنصر اكتر من قيمة `object key` بنفس الاسم, هيتم استبدال القيم اللي موجوده بآخر قيمة تم تسجيلها.


</p>
</details>

---

###### 26. في جافاسكربت, بنلاقي حاجتين موجودين دايماً وهما الـ `global` و كلمة ال `this` المفتاحية. العبارة دي: 

- أ: صحيحة
- ب: خاطئة
- ج: تعتمد

<details><summary><b>الاجابة</b></summary>
<p>

####  الاجابة الصحيحة: أ

و دي حاجه اسمها `global execution context` واللي يمكن اعتباره عن محيط او البيئة اللي الكوود بيشتغل فيه و بيكون فيه المتغيرات الـ`global` كلها.


</p>
</details>

---

###### 27. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
</div>

- أ: `1` `2`
- ب: `1` `2` `3`
- ج: `1` `2` `4`
- د: `1` `3` `4`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

كلمة `continue` بتخلي اللووب تكمل لو الشرط اللي هي جواه اتحقق. 

</p>
</details>

---

###### 28. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza())
```
</div>



- أ: `"Just give Lydia pizza already!"`
- ب: `TypeError: not a function`
- ج: `SyntaxError`
- د: `undefined`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

`String` هو فنكشن `constructor` واللي بنقدر نضيف خواص و قيم ليه. انا هنا ضيفت دالة للـ`prototype` بتاعه. المتغيرات البدائية `primitive` بيتم تحويلها بطريقة تلقائياً الى عنصر `object` وبالتالي بيكون ليها القدره انها تشغل الدوال الخاصه بالنوع ده. 

</p>
</details>

---

###### 29. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```
</div>

- أ: `123`
- ب: `456`
- ج: `undefined`
- د: `ReferenceError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

مفاتيح العناصر `Object keys` بيتم تحويلهم تلقائياً الى string. احنا هنا بنحاول نحط اوبجكت على انه مفتاح لأوبجكت تاني. بس المشكلة ان لما نعمل كده مش بيترجم لأسمه او لمحتوياته بل بيتحول الى `[object Object] و بالتالي احنا كنا كأننا بالظبط عاملين `a["object Object"]=123` و بنكرر كده مع `c` و بعد كده بنقوم طابعين `a[b]` اللي احنا لسه مخليين مفتاحها من شوية `a["object Object"]` و خلينا القيمة بتاعته 456 و بالتالي دي اللي بتطبع.


</p>
</details>

---

###### 30. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```
</div>

- أ: `First` `Second` `Third`
- ب: `First` `Third` `Second`
- ج: `Second` `First` `Third`
- د: `Second` `Third` `First`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

عندنا دالة `setTimeout` و المفروض تشتغل الاول و لكن اللي جواها اتشغل اخر حاجه. ايه اللي حصل؟ 

في المتصفحات محرك الجافاسكربت مش لوحده اللي موجود, بل موجود كمان معاه حاجه اسمها `Web Application APIs` واختصارها `WebAPIs` ودي بتديلك شوية دوال و حاجات زيادة عن اللغه الاساسية زي `setTimeout` اللي مش في اللغه اصلاً. 

اللي بيحصل بقى ان الدالة اللي جوا `setTimeout` اللي هي الـ `callback` بتتجهز عشان تشتغل, و `setTimeout` نفسها بتخلص, و بعد كده البرنامج بينط على طول على الدالة اللي بعدها و بتشغلها و اللي بعدها و بتشغلها لحد ما ميتبقاش حاجه شاغله المتصفح بعد كده يقوم البرنامج مشغل الـ`callback` اللي كانت متجهزه. 

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

<img src="https://i.imgur.com/uyiScAI.png" width="200">

</p>
</details>

---

###### 31. ايه قيمة `event.target` لما تدوس على الزرار؟ 
<div dir="ltr">

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```
</div>

- أ: Outer `div`
- ب: Inner `div`
- ج: `button`
- د: اراي جواها كل العناصر اللي جوا الزرار


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

هدف الحدث بيكون اخر عنصر في سلسلة الابناء و تقدر تمنع ده عن طريق `event.stopPropagation`.

</p>
</details>

---

###### 32. لما تدوس على البرجراف ايه اللي هيتطبع؟

<div dir="ltr">

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```
</div>

- أ: `p` `div`
- ب: `div` `p`
- ج: `p`
- د: `div`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

لما تدوس على البرجراف هتلاقي حاجتين ظهروا: `p` و `div`. و اثناء ما الحدث بيتم التعامل معاه بيحصل 3 مراحل زي ما قولنا في سؤال قبل كده. الاساسي ان الدوال اللي انت بتحددها عشان تتعامل مع الاحداث بتشتغل في اخر مرحله و هي الـ`Bubbling` و بالتالي هيتشغل من اعمق عنصر الى اكبر عنصر.

</p>
</details>

---

###### 33. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```
</div>

- أ: `undefined is 21` `Lydia is 21`
- ب: `function` `function`
- ج: `Lydia is 21` `Lydia is 21`
- د: `Lydia is 21` `function`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: د

في الحالتين بنقدر نحدد احنا عايزين كلمة `this` تشير لأيه بالظبط. بس الفرق ان `call` بتشتغل على طول اما `bind` بترجع نسخة جديدة من الدالة اللي دخلتلها قيمة `this` بتاعتها اللي احنا محددينها بس مش بتشتغل على طول.


</p>
</details>

---

###### 34. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```
</div>

- أ: `"object"`
- ب: `"number"`
- ج: `"function"`
- د: `"undefined"`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

الدالة `sayHi` بترجع القيمة اللي بتيجي من الدالة ذاتية التشغيل (IIFE) و اللي بدورها بترجع قيمة نوعها `"number"`. 

ولمعلومات القارئ: في 3 انواع فقط في الجافاسكربت: `null`, `undefined`, `boolean`, `number`, `string`, `object` و `symbol`. الدوال ليست نوع و انما هما عناصر من نوع `object`.

</p>
</details>

---

###### 35. انهي قيمة من دول سالبية `false`؟

<div dir="ltr">

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```
</div>

- أ: `0`, `''`, `undefined`
- ب: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- ج: `0`, `''`, `new Boolean(false)`, `undefined`
- د: كلهم

<details><summary><b>الاجابة</b></summary>
<p>

####  الاجابة الصحيحة: أ

موجود في اللغه 6 قيم سالبية `false` فقط:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

اي `constructor` بيكون ايجابي `truthy` علشان بيرجع قيمة مش واحدة من اللي 6 دول.

</p>
</details>

---

###### 36. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
console.log(typeof typeof 1);
```
</div>

- أ: `"number"`
- ب: `"string"`
- ج: `"object"`
- د: `"undefined"`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

`typeof 1` هترجع `"number"` و لاحظ ان دي مابين `""` يعني سترنج و بالتالي لما تدخل في الـ `typeof "number"` هترجع `"string"`

</p>
</details>

---

###### 37. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```
</div>

- أ: `[1, 2, 3, 7 x null, 11]`
- ب: `[1, 2, 3, 11]`
- ج: `[1, 2, 3, 7 x empty, 11]`
- د: `SyntaxError`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

لما بتحط قيمة في مكان في `array` و المكان ده بيتعدى عدد المساحات الموجوده في الاراي (طولها) بتقوم جافاسكربت بعمل حاجه اسمها "مساحات فارغه" "empty slots" واللي بيكونوا قيمهم `undefined` ولكن لما تبص في الكونسول بتاعت المتصفح مثلاً هتلاقي الشكل طالعلك كده: 

`[1, 2, 3, 7 x empty, 11]`

و الشكل بيعتمد على حسب انت بتشغل الكود فين. كل متصفح بيطلعها بشكل مختلف, و تقدر تجربها بنفسك.


</p>
</details>

---

###### 38. ايه اللي هيتطبع؟

<div dir="ltr">

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
</div>

- أ: `1` `undefined` `2`
- ب: `undefined` `undefined` `undefined`
- ج: `1` `1` `2`
- د: `1` `undefined` `undefined`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

جزء الـ`catch` بيستلم متغير `x` بس الفرق ان الاكس في الحاله دي مش بتاعت الداله و انما ده متغير موجود فقط لجزء الـ `catch`. بعد كده احنا قومنا مغيرين القيمة بتاعته الى `1` و غيرنا قيمة المتغير `y` الى `2`. بعد كده قومنا طابعين القيم اللي موجودة جوا جزء الـ`catch` فقط. 

برا الجزء بتاع الـ`catch` اكس هيفضل برضه `undefined` و `y` بما ان مفيش الا واحدة بس و هي بتاعت الدالة الاساسية واحنا غيرنا قيمتها بالتالي هتفضل على القيمة المتغيره اللي هي `2`.

</p>
</details>

---

###### 39. كل حاجه في جافاسكربت ...

- أ: primitive او  عنصر `object`
- ب: function او عنصر `object`
- ج: عناصر `object` بس!
- د: رقم او عنصر `object`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

جافاسكربت فيها انواع بدائية\بسيطة `primitives` و عناصر `object` فقط. الانواع البسيطة هما:  `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, و `symbol` 

الفرق بين البسيطة و العناصر ان البسيطة مفيهاش اي دوال `methods` ولكن بنلاحظ ان لما مثلاُ بنحاول نشغل دالة على نوع بسيط زي `'foo'.toUpperCase()` الداله بتشتغل عادي جداً من غير ما تدينا خطأ `TypeError` و ده لأن زي ما قولنا في اجابة سابقه ان لما بنحاول نستغل الدوال دول جافاسكربت بتقوم تلقائياً بتحويل القيم البدائية اللي بنحاول نشغل عليها الدوال دي الى قيم من نوع `object` عشان تقدر تشغل الدوال دول و بعد كده ترجعها زي ما كانت. كل الانواع البسيطة بينطبق عليها الكلام ده ما عدا `undefined` و `null`.

</p>
</details>

---

###### 40. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```
</div>

- أ: `[0, 1, 2, 3, 1, 2]`
- ب: `[6, 1, 2]`
- ج: `[1, 2, 0, 1, 2, 3]`
- د: `[1, 2, 6]`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ج

الاراي `[1,2]` هي القيمه الاساسية اللي معانا و اللي هنبدأ بيها و هي برضه اول قيمة للمتغير `acc`. في الدورة الاولى المتغير `acc` قيمته `[1,2]` و المتغير `cur` قيمته `[0,1]` و لما نجمعهم سوا بيكون الناتج `[1,2,0,1]` و بعد كده المتغير `acc` بياخد القيمة دي و يقوم دامجها مع `[2,3]` اللي هي قيمة `cur` في الدورة التانية و اللي بدوره بيدي الناتج النهائي `[1, 2, 0, 1, 2, 3]`.


</p>
</details>

---

###### 41. ايه اللي هيتطبع؟

<div dir="ltr">

```javascript
!!null;
!!"";
!!1;
```
</div>


- أ: `false` `true` `false`
- ب: `false` `false` `true`
- ج: `false` `true` `true`
- د: `true` `true` `false`


<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: ب

`null` قيمة سالبية `falsy` و بالتالي `!null` هترجع قيمة ايجابية `true` و بعد كده بتخش `!true` فا تتحول `false` 

وزي ما قولنا `""` دي قيمة سالبية لما نجيب عكسها هتتحول هي لـ`false` و بعد كده السالب بتاعها هيكون `true` و بعد كده تدخل في سالب تاني فتبقى `false`

بعد كده عندنا رقم `1` اللي هو قيمة ايجابية و بدوره بيتحول مره يبقى سالبية و بعد كده يبقى ايجابية `true`.


</p>
</details>

---

###### 42. دالة `setInterval` بترجع ايه في المتصفح؟

<div dir="ltr">

```javascript
setInterval(() => console.log("Hi"), 1000);
```
</div>


- أ: اسم تعريفي فريد من نوعه `unique id`
- ب: الوقت المحدد
- ج: الداله المدخله معاها
- د: `undefined`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

دالة `setInterval` بترجع اسم تعريفي فريد تقدر تستعمله في `clearInterval` عشان توقف بيه التكرار.


</p>
</details>

---

###### 43. ايه القيمة اللي هتطلع هنا؟

<div dir="ltr">

```javascript
[..."Lydia"];
```
</div>


- أ: `["L", "y", "d", "i", "a"]`
- ب: `["Lydia"]`
- ج: `[[], "Lydia"]`
- د: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>الاجابة</b></summary>
<p>

#### الاجابة الصحيحة: أ

القيم اللي من نوع `string` بنقدر نعدي عليها عادي و بالتالي بنقدر نستعمل الـ Spread operator `...x` عشان نحول كل حرف الى عنصر في اراي.


</p>
</details>
</div>
