

<div dir='rtl'>

# قائــمة أسئلة جافا سكريبت (مستوى متقدم)
أقوم بنشر عدة أسئلة جافاسكريبت بصورة يومية على حسابي في [انستغرام](https://www.instagram.com/theavocoder/).

تتدرج الأسئلة إبتداءا من المستوى الأساسي أو البسيط الى المستوى المتقدم لإختبار مدى معرفتك بلغة الجافا سكريبت, قم بمراجعة و إنعاش معرفتك باللغة قليلا, أو قم بالتجهيز لمقابلة عمل لوظيفة مبرمج عن طريق هذه الأسئلة!

أقوم بتحديث هذا المستودع أسبوعيا بإضافة المزيد من الأسئلة. :muscle: :rocket:

الأجوبة توجد في الجزء المطوي بالأسفل أدناه تحت كل سؤال على حدة, فقط قم بالضغط على كلمة الإجابة لكي تحصل على الإجابة, حظا موفقا  :heart: 

اللغات المتوفرة:

[English](https://github.com/SaraAli26/javascript-questions/blob/master/README.md)

[中文版本](https://github.com/SaraAli26/javascript-questions/blob/master/README-zh_CN.md)

[Русский](https://github.com/SaraAli26/javascript-questions/blob/master/README_ru-RU.md)

[Western Balkan](https://github.com/SaraAli26/javascript-questions/blob/master/README-bs_BS.md)

[Deutsch](https://github.com/SaraAli26/javascript-questions/blob/master/README-de_DE.md)

[Tiếng Việt](https://github.com/SaraAli26/javascript-questions/blob/master/README-vi.md)
</div>
____________

1. ماهو الناتج ؟

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>الإجابة</b></summary>
<p>

<div dir='rtl'>
الإجابة هي الخيار الرابع : D

في داخل الدالة, قمنا أولا بتعريف المتغير `name` مع الكلمة المفتاحية `var`. و هذا يعني ان المتغير قد حصلت له عملية hoisting  والتي تعني انه قد تم حجز مساحة لهذا المتغير في هذه اللحظة مع قيمة مبدئية و التي هي  `undefined`  إلى ان نقوم فعليا بتعريف قيمة له لاحقا.
لم نقم بتعريف المتغير `name` بعد عندما قمنا بطباعته في السطر الاول من الدالة, لهذا لايزال يحمل القيمة `undefined`. 
المتغيرات التي تم تعريفها بجانب الكلمات المفتاحية `let` و  `const` يتم عمل عملية hoisting لها أيضا, ولكن على عكس المتغيرات التي يتم تعريفها بجانب الكلمة المفتاحية `var`, لا يتم تعريفها او الوصول اليها مالم نقم بإضافة قيمة لها فعليا. و يسمى هذا بال"temporal dead zone".عندما نحاول الوصول الى المتغيرات من النوع `var`قبل ان يتم تعريفها, نتحصل على الخطأ التالي  `ReferenceError`.  

</p>
</details>
</div>

---

2. ماهو الناتج?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>الإجابة</b></summary>
<p>

<div dir='rtl'>
الإجابة هي الخيار الثالث: C

بسبب ترتيب تسلسل الأحداث في الجافا سكريبت, دالة `setTimeout` والتي هي دالة من نوع callbackقد تم استدعائها بعد ان تم تنفيذ ال loop. بماأن المتغير `i` في الloop  الاولى قد تم تعريفه عن طريق الكلمة المفتاحية `var` فإن هذه القيمة هي glopal. أثناء تنفيذ هذه ال loop قد تم إضافة 1 الى المتغير `var` في كل دورة باستخدام العملية `++`. بنهاية الدورة و عندما تم استدعاء الدالة `setTimeout` كانت قيمة المتغير `i` قد أصبحت تساوي `3` في المثال الأول.        
في الloop  الثانية ,تم تعريف المتغير `i` باستخدام الكلمة المفتاحية `let`  المتغيرات التي يتم تعريفها باستخدام الكلمات المفتاحية `let`  و `const` هي متغيرات تنتمي فقط للBlock  الذي تم تعريفها بداخله, والذي هو بين القوسين, أثناءتنفيذ الloop, سنقوم بالتحصل على قيمة جديدة للمتغير `i` في نهاية كل دورة  , وأي قيمة تكون منتمية للScope  بداخل الloop.

</p>
</details>
<div>

---

3. ماهو الناتج?

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

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

يرجى ملاحظة أن قيمة`diameter` هي دالة Regular و في المقابل قيمة `perimeter` هي دالة من النوع arrow.  
في حال استخدام دوال ال arrow, الكلمة المفتاحية `this` ترجع و تدل على المحيط الحالي الذي توجد به الكلمة المفتاحية, على عكس وجود الكلمة المفتاحية `this` في الدالة العادية حيث أنها تعني اننا نقوم بمناداة `perimeter` و هي لا تعني اننا نقصد الshape object بل نقصد الscope الذي يحاوطه, على سبيل المثال : Window.

لا توجد قيمة `radius` في ذلك ال object لهذا يقوم بإرجاع القيمة `undefined`.


</p>
</details>
</div>

---

4. ماهو الناتج؟ 

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

عملية الزيادة الأحادية هنا وجدت لكي تقوم بتحويل المعامل الى رقم, `true` هي `1` , و `false` هي `0`.  
 المتغير من نوع string `'Lydia'` هو قيمة صدقية أو حقيقية, بمعنى أنها تساوي `true` . السؤال الذي نقوم بطرحه هنا, هو هل هذه القيمة الصدقية هي قيمة غير صدقية؟ اي تساوي `false`؟ لهذا نتحصل على الجواب `false`.   
</p>
</details>
</div>

---

5. أي الإجابات هو إجابة صحيحة؟ 

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` غير صحيحة
- B: `mouse[bird.size]` غير صحيحة
- C: `mouse[bird["size"]]` غير صحيحة
- D: كل الإجابات صحيحة

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

في لغة الجافا سكريبت, جميع مفاتيح الobjects  هي من النوع string. الا اذا كانت عبارة عن  symbol. حتى ولو أننا في بعض المرات لانقوم بوضع نوعها على انها string  بصورة صريحة, ولكنها دائما يتم تحويلها الى نوع string  وراء الكواليس.

لغة الجافاسكريبت تقوم بترجمةال statements.عندما نقوم باستعمال ال bracket notation, تقوم الجافا سكريبت اولا برؤية أول فتحة للقوس `[` و تقوم بالمتابعة الى ان تجد قفلة هذا القوس `]`.فقط عندما تصل الى قفلة القوس حتى تقوم بتقييم ال statement و من ثم معالجتها. 
`mouse[bird.size]`: اولا تقوم بتقييم`bird.size`, والتي هي تساوي `"small"`. `mouse["small"]` تقوم بإرجاع`true`

ولكن في المقابل, عندما نقوم بإستخدام ال dot notation,لا يتم معالجة الأمر هكذا. `mouse` ليس لديها مفتاح يسمى `bird`, و هذا يعني أن `mouse.bird` هي قيمة `undefined`. بالتالي نقوم بالسؤال عن ال`size` بإستخدام ال dot notation: للسؤال عن قيمة  `mouse.bird.size`.
وبما أن `mouse.bird`قيمتها `undefined` ف نحن فعليا نقوم بالسؤال عن `undefined.size` و التي هي بالتأكيد غير صحيحة و غير صالحة و ستقوم بإرجاع error مشابه ل `Cannot read property "size" of undefined`.    
</p>
</details>
</div>

---

6. ماهو الناتج؟ 

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

في لغة الجافاسكريبت, جميع ال objectsيتم التفاعل معها عن طريق _reference_ و ذلك عندما نقوم بمساواتهم ببعضهم البعض بعلامة ال=.

أولا, المتغير `c` يحمل قيمة ل object. لاحقا قمنا بإضافة `d` لنفس الrefence الذي لدى المتغير `c` لل object.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

لذا, عندما تقوم بتغيير object واحد , انت فعليا تقوم بتغيير جميع الobjects. 

</p>
</details>
</div>

---

7. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

`new Number()` هي دالة من نوع built-in function constructer. على الرغم من أنها تبدو كرقم, ولكنها في الحقيقة ليس رقم, هي عبارة عن object  ولديها العديد العديد من المميزات.
  
عندما نقوم بإستخدام العلامة او العامل `==`, هي تقوم فقط بالتحقق من إذا ماكان لديها same _value_.كلا الطرفين قيمتهم تساوي `3` لهذا تقوم بإرجاع `true`.

و لكن على الرغم من هذا, عندما نقوم بإستخدام العملية أو المعامل `===`, كلا القيمة _and_ النوع يجب ان يكونا نفس الشيء. 

هي ليست `new Number()` هي ليست عبارة عن رقم, هي عبارة عن **object** , وكلاهما سيقومان بإرجاع `false.`   

</p>
</details>
</div>

---

8. ماهو الناتج؟ 

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الرابع: D

الدالة `colorChange` هي دالة static, و الدوال التي هي من نوع static هي دوال صممت لكي يتم استخدامها فقط في الconstructor  الذي تم تعريفها به, و ليس من الممكن ان يتم تمريرها او استخدامها من قبل اي مكون children. بما أن `freddie` هي متغير children فإن الدالة لم يتم تمريرها اليه و هي غير متوفرة في ال instant من  `freddie` لذا نتحصل على الخطأ `TypeError` .    
</p>
</details>
</div>

---

9. ماهو الناتج؟

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

تقوم بعمل log على الconsole  ل object. و لأننا قمنا بإنشاء object فارغ في glopal object! عندما قمنا بالخطأ بطباعة  `greetign` بدل ان نقوم بطباعتها بصورة صحيحة هكذا `greeting`, هنا قام مترجم الجافاسكريبت بترجمة الآتي `global.greetign = {}` أو `window.greetign = {}` في المتصفح.   

لكي نتجنب حدوث مثل هذه الحالة, بإمكاننا إستخدام `"use strict"`. بفعل هذه الخطوة ستتأكد من أنك قد عرفت المتغير قبل ان تساويه بأي شي آخر. 
</p>
</details>
</div>

---

 10. ما الذي يحدث عندما نقوم بعمل الآتي؟ 

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nothing, this is totally fine!
- B: `SyntaxError`. You cannot add properties to a function this way.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

هذا ممكن في لغة الجافاسكريبت, لأن الدوال هي عبارة عن objects, (كل شيء بداخل الأنواع التي هي primitive هو عبارة عن object)

الدالة هي عبارة عن نوع خاص من الobjects, الكود الذي تقوم بكتابته بنفسك هو ليس بالدالة الفعلية, الدالة هي object لديه خصائص. و هذه الخاصية قابلة للمناداة
</p>
</details>
</div>

---

11. ماهو الناتج؟

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

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

ليس بإمكانك اضافة الخصائص ل constructor كما تقوم بإضافة الخصائص للobjects. إذا أردت أن تضيف مميزات لكل الobjects مرة واحدة, سيجب عليك أن تقوم بإستخدام الprototype. لذا في هذه الحالة,
</div>

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

<div dir='rtl'>
اذا استطعنا جعل `member.getFullName()` تعمل. لماذا ستكون ذات فائدة؟ فلنفترض أننا أضفنا هذه الmethod للconstructor نفسها. ربما ليس أي instance من `Person` تحتاج الى هذه ال method. بهذه الطريقة سنقوم بإستهلاك مساحة كبيرة من الذاكرة, بما أنهم سيظلون يحتفظون ب هذه الخاصية, و التي بدورها ستقوم بحجز مساحة في الذاكرة لأي instance. لذا من الأفضل أن نقوم بإضافتهاالى الprototype, بهذه الطريقة ستقوم بحجز مكان واحد فقط في الذاكرة, و لكنها متاحة للكل للوصول إليها.   
</p>
</details>
<div>
  
---

12. ماهو الناتج؟

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
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

للمتغير `sarah` لم نقم بإستخدام الكلمة المفتاحية `new`, عندإستخدام الكلمة المفتاحية `new` ف هي تشير الى ال object  الخالي او الفارغ الذي قمنا بإنشاءه, و لكن اذا لم تقم بإضافة`new` ف هي ستشير الى ال **global object**!.  

نحن نقول بأن `this.firstName` تساوي `"Sarah"` و `this.lastName` تساوي `"Smith"`. ماقمنا بفعله حقا هنا, هو أنه قمنا بتعريف `global.firstName = 'Sarah'` و `global.lastName = 'Smith'`. المتغير `sarah` لا يظل `undefined`.     
</p>
</details>
</div>

---

<div dir='rtl'>
13. ماهي الثلاث مراحل التي تمر بها الevent propagation?
</div>

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الرابع: D

أثناء مرحلة ال**capturing**, الevent تمر عبر العناصر العليا, أي العناصر الآباء إلى أن تصل الى العنصر المقصود أو المراد, حينها تتمكن من الوصول الى العنصر **target** , و حينها تبدأ عملية ال **bubbling**. 

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>
</div>

---

<div dir='rtl'>
14. جميع الobjects  لديها prototypes?

- A: true
- B: false

<details><summary><b>الإجابة</b></summary>
<p>

الجواب هو الخيار الثاني: B

جميع الobjects  لديها prototypes, عدا ال objects من نوع **base object**. الobject من نوع base object هو عبارة عن object  تم إنشاءه من قبل المستخدم, أو تم إنشاءه عن طريق إستخدام الكلمة المفتاحية `new`. الbase object  لديه حق الوصول الى بعض ال methods و الخصائص. مثال: `.toString`. هذا هو السبب الذي يمكنك من إستخدام built-in JavaScript methods, مثل هذه ال methods جميعها متاحة في ال ptototype, على الرغم من أن لغة الجافا سكريبت ليس بإمكانها أن تجدها بصورة مباشرة من الobject  الذي قمت أنت بإنشاءه, و لكنها تذهب الى سلسلة الprototype  حيث بإمكانها ان تجده هناك, مما يجعله قابل للوصول من قبلك, أي بإمكانك أن تصل إليه.   
</p>
</details>
</div>

---

15. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

لغة الجافاسكريبت هي لغة **dynamically typed language** بمعنى أننا لا نقوم بتعريف نوع معين للمتغيرات, المتغيرات بصورة أوتوماتيكية يتم تحويلها الى أنواع أخرى بدون أن تعرف أنت ذلك, وهذا يسمى ب _implicit type coercion_. **Coercion** تعني بأنك تقوم بالتحويل من نوع الى آخر.  

في هذا المثال, لغة الجافاسكريبت تقوم بتحويل الرقم `1` الى string, لكي تستطيع الدالةأن تقوم بعملها و تتمكن من إرجاع قيمة. أثناء قيام عملية إضافةالمتغير من النوع number  و الذي هو (`1`) و المتغير من النوع string  والذي هو (`'2'`), الرقم تم التعامل معه ك string,  بهذه الطريقة سنتمكن من عمل عملية concatenate للمتغيرين من نوع string ك مثال `"Hello" + "World"`, لهذا مايحدث هنا هو عبارة عن `"1" + "2"` و الذي بدوره يقوم بإرجاع `"12"`.      
</p>
</details>
</div>

---

16. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

ال **postfix** العامل الأحادي `++`:

1. تقوم بإرجاع القيمة (هذه ترجع `0`)
2. تقوم بزيادةالقيمة (number الآن تساوي `1`)

ال **prefix** العامل الأحادي `++`:

1. تقوم بزيادة القيمة(number الآن تساوي  `2`)
2. تقوم بإٍرجاع القيمة (هذه ترجع  `2`)

هذايقوم بإرجاع `0 2 2`.

</p>
</details>
</div>

---

17.ماهو الناتج؟   

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

اذا قمت بإستخدام tagged template literals, فإن قيمة ال argument الأول هي دائما عبارة عن array والذي نوع قيمها عبارة عن string, ماتبقى من الarguments تتحصل على القيم من الpassed expressions. 
</p>
</details>
</div>

---

18. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

عندما نقوم بإختبار المساواة أو التساوي بين طرفين, ال primitives يتم مقارنتها عن طريق قيمها, بينما ال objects  يتم مقارنتها عن طريق الreference الذي يتبع لها, لغة الجافاسكريبت تتحقق عن إذا ماكان الrefrence الذي يتبع لobject يشير الى نفس الموقع في الذاكرة. 

لدينا هنا اثنان من ال objects والتي نقوم بعمل مقارنة بينهما, واللذان بدورهما ليس لديهما ذلك, الobject الذي قمنا بتمريره ك parameter يشير الى موقع مختلف في الذاكرة من الموقع الذي يشير اليه الobject  الثاني و الذي تم استخدامه للتحق من شرط المساواة.

لهذا كلا من  `{ age: 18 } === { age: 18 }` و  `{ age: 18 } == { age: 18 }` يرجعان `false`.

</p>
</details>
</div>

---

19. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

العامل spread `...args` يقوم بإرجاع array مع  arguments. الarray  هي object, لذا فإن `typeof args` تقوم بإرجاع  `"object"`.   
</p>
</details>
</div>

---

20. ماهو الناتج؟ 

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

بإستخدام `"use strict"`, يمكنك التأكد بأنك لن تقوم عن طريق الخطأ بتعريف glopal variables. نحن لم نقم قط بتعريف المتغير `age`, و بما أننا قمنا بإستخدام `"use strict"` ستقوم بإرجاع reference error. اذا لم نقم بإستخدام `"use strict"` لكانت قد أدت المطلوب, بما أن الخاصية `age` تم إضافتها لل glopal object.      
</p>
</details>
</div>

---
