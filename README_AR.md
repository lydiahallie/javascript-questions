

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
</div>

- A: true
- B: false

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
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

<div dir='rtl'>
21. ماهي القيمة التي تحملها `sum`؟ 
</div> 

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>الأجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

`eval` تقوم بتقييم الكود الذي تم تمريره ك string. إذا كان عبارة عن expression كما في هذه الحالة, فإنها تقوم بتقييم ال expression. ال expression هو `10 * 10 + 5`. و هذا بدوره يقوم بإرجاع الرقم `105`.   
</p>
</details>
</div>

---

<div dir='rtl'>
22. الى كم من المدة الزمنية ستكون "cool_secret" قابلة للوصول إليها؟  
</div>

```javascript
sessionStorage.setItem("cool_secret", 123);
```
<div dir='rtl'>
  
A - الى الأبد, فالبيانات لايمكن أن تفقد.
  
B - عندما يقوم المستخدم بقفل ال tab.

C - عندما يقوم المستخدم بقفل نافذه المتصفح , ليس فقط الtab.

D - عندما يقوم المستخدم بقفل جهاز الكمبيوتر.
</div>

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B
  
البيانات التي يتم تخزينها في `sessionStorage` يتم فقدها بعد قفل ال tab. 

إذا قمت بإستخدام `localStorage`, البيانات ستكون مخزنة هناك الى الأبد, و لكن اذا قمت بإستثناء ان تقوم بمناداة الدالة Clear كما في التالي `localStorage.clear()` عندها ستفقد هذه البيانات.:  
</p>
</details>
</div>

---

23. ماهو الناتج؟ 

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

مع الكلمة المفتاحية `var` بإمكانك تريف عدد من المتغيرات تحمل نفس الإسم, و المتغير سيقوم بأخذ آخر قيمة تمت إضافتها اليه.  

ليس بإمكانك أن تفعل هذا مع `let` أو `const` بما أن الكلمتان المفتاحيتان عبارة عن block-scoped, بمعنى أن القيمة ستكون متاحة في نطاق الBlock  الذي تم تعريفها به.   
</p>
</details>
</div>

---

24. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

كل مفاتيح ال object (عدا الSymbols)هي عبارة عن strings وراء الكواليس, حتى لو لم تقم بكتابة ذلك صراحة بنفسك ك string, لهذا دائما `obj.hasOwnProperty('1')` تقوم بإرجاع القيمة true.  

ولكنها لا تعمل بهذا الشكل مع set, ليس هنالك `'1'` من ضمن set, لهذا `set.has('1')` تقوم بإرجاع `false`, لديها القيمة الرقمية `1` أي من النوع number, `set.has(1)` تقوم بإرجاع `true`.     
</p>
</details>
</div>

---

25. ماهو الناتج؟ 

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C 
  
إذا كان لديك مفتاحان يحملان نفس الاسم, فإن المفتاح سيتم تبديله, سيكون المفتاح في نفس مكانه, ولكنه سيحمل فقط القيمة الأخيرة
</p>
</details>
</div>

---

<div dir='rtl'>
26. في سياق تنفيذ glopal في لغة الجافاسكريبت, فإن الجافاسكريبت تقوم بإنشاء شيئين لك: الglopal object و الكلمة المفتاحية "this". 
</div>

- A: true
- B: false
- C: تعتمد على 

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيارالأول: A

سياق التنفيذ الأساسي هو سياق تنفيذ الglopal, وهي الشيء الذي يمكن الوصول إليه من أي مكان في الكود الذي ببرنامجك.
</p>
</details>
</div> 

---

27. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

العبارة `continue`  تقوم بتخطي دورة التكرار إذا وجد شرط معين يقوم بإرجاع `true`.  
</p>
</details>
</div>

---

28. ماهو الناتج؟

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

`String` هي built-in constructor, و لهذا سنتمكن من إضافة خصائص لها. لقد قمت بإضافة method للprototype الخاص ب `String`. Primitive strings يتمتحويلهم بصورة اوتوماتيكية الى objects من نوع string, و التي بدورها تم انشائها عن طريق دالة ال string prototype, لهذا جميع الstrings و التي هي string objects  لديها حق الوصول الى الmethod.   
</p>
</details>
</div>

---

29. ماهو الناتج؟ 

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني : B

مفاتيح ال object يتم تحويلها اوتوماتيكيا الى strings. نحن نحاول أن نقوم بجعل  object عبارة عن مفتاح للobject `a`, و الذي يحمل القيمة `123`.  

و لكن, عندما نقوم بمحاول جعل object الى نوع string, سيصبح `"[Object object]"`. لذا ما نحاول أن نقوله هنا, هو أن `a["Object object"] = 123`.
إذا, سنحاول أن نفعل هذا مرة أخرى , `c` هو object آخر سنقوم بتحويله الى string بصورة صريحة, لذا `a["Object object"] = 456`.  

إذاَ, نحن نقوم بعمل log ل `a[b]`, و التي هي في الحقيقة `a["Object object"]`. و نحن قبل قليل قمنا بوضع قيمتها التي تساوي `456`, لذا ستقوم بإرجاع `456`.    
</p>
</details>
</div>

---

30. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجوا ب هو الخيار الثاني: B

لدينا الدالة `setTimeout` والتي تم استدعائها أولا, و لكن تم الخروج منها آخراً.

هذا لأن في المتصفح, ليس لدينا محرَك من نوع runtime, أيضا لدينا مايعرف ب `WebAPI`. هذا ال`WebAPI` يقوم بإعطائنا الدالة `setTimeout`  لكي نبدأ بها, على سبيل المثال: DOM.

بعد ان يتم ارسال و البدء بتنفيذ ال _callback_ الى الWebAPI, الدالة `setTimeout` نفسها (ليس ال callback!) يتم اخراجها من الstack.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

الآن, `foo` يتم إدخالها و البدء بتنفيذها, بينما `"First"` يتم تسجيل دخولها.  

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` يتم إخراجها من ال stack, بينما `baz` يتم إدخالها و البدأ بتنفيذها. `"Third"` يتم تسجيل دخولها. 

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

ال WebAPI ليس بإمكانها إضافة أشياء الى ال stack عندما تكون جاهزة. في المقابل, هي تقوم بإدخال دالة الcallback الى شيء يسمى بال _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

هنا تحديدا المكان الذي تبدأ فيه الloop بالعمل. 
ال **event loop** تنظر الى الstack و ال task queue, إذا كانت الstack خاوية, فهي تقوم بأخذ أول شيء في الqueue. و تقوم بإدخاله الى stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` يتم إدخالها و البدأ بتنفيذها, `"Second"` يتم تسجيل دخولها, و من ثم إخراجها من الstack. 
</p>
</details>
</div>

---

###### 31. What is the event.target when clicking the button?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. What's the output?

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it's of type `"object"`.
</p>
</details>

---

###### 35. Which of these values are falsy?

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

```javascript
console.log(typeof typeof 1);
```

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

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

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

```javascript
[[0, 1], [2, 3]].reduce(
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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---
