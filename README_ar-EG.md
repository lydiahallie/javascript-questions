<div dir="rtl">

# قائمة اسئلة جافاسكربت متقدمة
أنا بنشر أسئلة اختر جافاسكربت كل يوم على [انستجرام](https://www.instagram.com/theavocoder) واللي بدوري هنشرهم هنا

من البسيط للمتطور: اختبر نفسك في الجافاسكربت, افتكر حاجات كنت ناسيها, او جهز نفسك لمقابلة عمل جايه! :muscle: :rocket: 

الاجابات في الجزء المخفي تحت, ببساطة دوس على السؤال عشان تفتح تفاصيله. اتمنالكم حظ سعيد :heart:

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

<details><summary><b>Answer</b></summary>
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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

All objects have prototypes, except for the **base object**. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

</p>
</details>

---

###### 15. What's the output?
<div dir="ltr">

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
</div>

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.

In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what's happening here is `"1" + "2"` which returns `"12"`.

</p>
</details>

---

###### 16. What's the output?

<div dir="ltr">

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```
</div>

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The **postfix** unary operator `++`:

1. Returns the value (this returns `0`)
2. Increments the value (number is now `1`)

The **prefix** unary operator `++`:

1. Increments the value (number is now `2`)
2. Returns the value (this returns `2`)

This returns `0 2 2`.

</p>
</details>

---

###### 17. What's the output?

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


- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

</p>
</details>

---

###### 18. What's the output?

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


- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.

</p>
</details>

---

###### 19. What's the output?

<div dir="ltr">

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
</div>


- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The spread operator (`...args`.) returns an array with arguments. An array is an object, so `typeof args` returns `"object"`

</p>
</details>

---

###### 20. What's the output?

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


- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

With `"use strict"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn't use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.

</p>
</details>

---

###### 21. What's value of `sum`?

<div dir="ltr">

```javascript
const sum = eval("10*10+5");
```
</div>


- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.

</p>
</details>

---

###### 22. How long is cool_secret accessible?

<div dir="ltr">

```javascript
sessionStorage.setItem("cool_secret", 123);
```
</div>


- A: Forever, the data doesn't get lost.
- B: When the user closes the tab.
- C: When the user closes the entire browser, not only the tab.
- D: When the user shuts off their computer.

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The data stored in `sessionStorage` is removed after closing the _tab_.

If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.

</p>
</details>

---

###### 23. What's the output?

<div dir="ltr">

```javascript
var num = 8;
var num = 10;

console.log(num);
```
</div>


- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with `let` or `const` since they're block-scoped.

</p>
</details>

---

###### 24. What's the output?

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


- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</p>
</details>

---

###### 25. What's the output?

<div dir="ltr">

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```
</div>


- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</p>
</details>

---

###### 26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

- A: true
- B: false
- C: it depends

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The base execution context is the global execution context: it's what's accessible everywhere in your code.

</p>
</details>

---

###### 27. What's the output?

<div dir="ltr">

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
</div>


- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The `continue` statement skips an iteration if a certain condition returns `true`.

</p>
</details>

---

###### 28. What's the output?

<div dir="ltr">

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```
</div>


- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</p>
</details>

---

###### 29. What's the output?

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


- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[Object object]"`. So what we are saying here, is that `a["Object object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["Object object"] = 456`.

Then, we log `a[b]`, which is actually `a["Object object"]`. We just set that to `456`, so it returns `456`.

</p>
</details>

---

###### 30. What's the output?

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


- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

We have a `setTimeout` function and invoked it first. Yet, it was logged last.

This is because in browsers, we don't just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.

After the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Now, `foo` gets invoked, and `"First"` is being logged.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` is popped off the stack, and `baz` gets invoked. `"Third"` gets logged.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

The WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

This is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` gets invoked, `"Second"` gets logged, and it's popped off the stack.

</p>
</details>

---

###### 31. What is the event.target when clicking the button?
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


- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: An array of all nested elements.

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`

</p>
</details>

---

###### 32. When you click the paragraph, what's the logged output?
<div dir="ltr">

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```
</div>

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. What's the output?

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


- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</p>
</details>

---

###### 34. What's the output?

<div dir="ltr">

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```
</div>


- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it's of type `"object"`.

</p>
</details>

---

###### 35. Which of these values are falsy?

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


- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

There are only six falsy values:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

Function constructors, like `new Number` and `new Boolean` are truthy.

</p>
</details>

---

###### 36. What's the output?

<div dir="ltr">

```javascript
console.log(typeof typeof 1);
```
</div>


- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. What's the output?

<div dir="ltr">

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```
</div>


- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)

</p>
</details>

---

###### 38. What's the output?

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


- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.

Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.

Outside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.

</p>
</details>

---

###### 39. Everything in JavaScript is either a...

- A: primitive or object
- B: function or object
- C: trick question! only objects
- D: number or object

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicity wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.

</p>
</details>

---

###### 40. What's the output?

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


- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. What's the output?

<div dir="ltr">

```javascript
!!null;
!!"";
!!1;
```
</div>


- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</p>
</details>

---

###### 42. What does the `setInterval` method return in the browser?

<div dir="ltr">

```javascript
setInterval(() => console.log("Hi"), 1000);
```
</div>


- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

</p>
</details>

---

###### 43. What does this return?

<div dir="ltr">

```javascript
[..."Lydia"];
```
</div>


- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

A string is an iterable. The spread operator maps every character of an iterable to one element.

</p>
</details>
</div>