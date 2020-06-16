

<div dir='rtl'>

# قائــمة أسئلة جافا سكريبت (مستوى متقدم)
أقوم بنشر عدة أسئلة جافاسكريبت بصورة يومية على حسابي في [انستغرام](https://www.instagram.com/theavocoder/).

تتدرج الأسئلة إبتداءا من المستوى الأساسي أو البسيط الى المستوى المتقدم لإختبار مدى معرفتك بلغة الجافا سكريبت, قم بمراجعة و إنعاش معرفتك باللغة قليلا, أو قم بالتجهيز لمقابلة عمل لوظيفة مبرمج عن طريق هذه الأسئلة!

أقوم بتحديث هذا المستودع أسبوعيا بإضافة المزيد من الأسئلة. :muscle: :rocket:


الأجوبة توجد في الجزء المطوي بالأسفل أدناه تحت كل سؤال على حدة, فقط قم بالضغط على كلمة الإجابة لكي تحصل على الإجابة, حظا موفقا  :heart: 

اللغات المتوفرة:

* [English](../en-EN/README.md)
* [العربية](../ar-AR/README_AR.md)
* [اللغة العامية - Egyptian Arabic](../ar-EG/README_ar-EG.md)
* [Bosanski](../bs-BS/README-bs_BS.md)  
* [Deutsch](../de-DE/README.md)  
* [Español](../es-ES/README-ES.md)
* [Français](../fr-FR/README_fr-FR.md)
* [日本語](../ja-JA/README-ja_JA.md)  
* [한국어](../ko-KR/README-ko_KR.md)
* [Nederlands](./nl-NL/README.md)
* [Português Brasil](../pt-BR/README_pt_BR.md)  
* [Русский](../ru-RU/README.md)
* [Українська мова](../ua-UA/README-ua_UA.md)  
* [Tiếng Việt](../vi-VI/README-vi.md)
* [中文版本](../zh-CN/README-zh_CN.md)
* [Türkçe](../tr-TR/README-tr_TR.md)
* [ไทย](../th-TH/README-th_TH.md)
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

بسبب ترتيب تسلسل الأحداث في الجافا سكريبت, دالة `setTimeout` والتي هي دالة من نوع callbackقد تم استدعائها بعد ان تم تنفيذ ال loop. بماأن المتغير `i` في الloop  الاولى قد تم تعريفه عن طريق الكلمة المفتاحية `var` فإن هذه القيمة هي global. أثناء تنفيذ هذه ال loop قد تم إضافة 1 الى المتغير `var` في كل دورة باستخدام العملية `++`. بنهاية الدورة و عندما تم استدعاء الدالة `setTimeout` كانت قيمة المتغير `i` قد أصبحت تساوي `3` في المثال الأول.        
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

تقوم بعمل log على الconsole  ل object. و لأننا قمنا بإنشاء object فارغ في global object! عندما قمنا بالخطأ بطباعة  `greetign` بدل ان نقوم بطباعتها بصورة صحيحة هكذا `greeting`, هنا قام مترجم الجافاسكريبت بترجمة الآتي `global.greetign = {}` أو `window.greetign = {}` في المتصفح.   

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

هذا يقوم بإرجاع `0 2 2`.

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

بإستخدام `"use strict"`, يمكنك التأكد بأنك لن تقوم عن طريق الخطأ بتعريف global variables. نحن لم نقم قط بتعريف المتغير `age`, و بما أننا قمنا بإستخدام `"use strict"` ستقوم بإرجاع reference error. اذا لم نقم بإستخدام `"use strict"` لكانت قد أدت المطلوب, بما أن الخاصية `age` تم إضافتها لل global object.      
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
26. في سياق تنفيذ global في لغة الجافاسكريبت, فإن الجافاسكريبت تقوم بإنشاء شيئين لك: الglobal object و الكلمة المفتاحية "this". 
</div>

- A: true
- B: false
- C: تعتمد على 

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيارالأول: A

سياق التنفيذ الأساسي هو سياق تنفيذ الglobal, وهي الشيء الذي يمكن الوصول إليه من أي مكان في الكود الذي ببرنامجك.
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

و لكن, عندما نقوم بمحاول جعل object الى نوع string, سيصبح `"[object Object]"`. لذا ما نحاول أن نقوله هنا, هو أن `a["object Object"] = 123`.
إذا, سنحاول أن نفعل هذا مرة أخرى , `c` هو object آخر سنقوم بتحويله الى string بصورة صريحة, لذا `a["object Object"] = 456`.  

إذاَ, نحن نقوم بعمل log ل `a[b]`, و التي هي في الحقيقة `a["object Object"]`. و نحن قبل قليل قمنا بوضع قيمتها التي تساوي `456`, لذا ستقوم بإرجاع `456`.    
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
<div dir='rtl'>
31. ماهو ال event.target عندما نقوم بالضغط على الزر
</div>

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A:  الخارجي `div`
- B: الداخلي `div`
- C: `button`
- D: array تحتوي على جميع العناصرالمتداخلة.

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

العنصر المتداخل الأعمق الذي تسبب بتنفيذ الevent  هو العنصر الذي يستهدفه هذا الevent, بإمكانك إيقاف ال bubbling عن طريق `event.stopPropagation`.
</p>
</details>
</div>

---

<div dir='rtl'>
32. عندما تقوم بالضغط على الفقرة (P), ماهو الناتج الذي ستتحصل عليه؟
</div>

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

إذا قمنا بالضغط على `p` سنرى إثنان من الlogs, ألا و هما `p` و `div`, أثناء عملية event propagation, هنالك ثلاث مراحل: الا وهي capturing, target و bubbling. بصورة افتراضية, الevent handlers يتم تنفيذهم في مرحلة الbubbling (إلا في حال أنك قمت بضبط قيمة `useCapture` ل `true` ). هي تتسلسل ابتداءا من أعمق عنصر متداخل تصاعدا الى الأقل عمقاً. 
</p>
</details>
</div>

---

33. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الرابع: D

في الحالتين, بإمكاننا تمرير ال object الذي نود أن تشير اليه الكلمة المفتاحية `this`, ولكن, `.call` هي أيضا تم تنفيذها حالا.  

`.bind.` تقوم بإرجاع نسخة من الدالة, ولكن مع سياق محدد, لذا هي لا يتم تنفيذها حالاً.
</p>
</details>
</div>

---

34. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

دالة `sayHi` تقوم بإرجاع القيمة المرجعة من الدالة المناداة في اللحظة (IIFE). هذه الدالة تقوم بإرجاع `0`, و الذي نوعه عبارة عن `"number"`.   

لمعلوماتك: لدينا فقط سبعة أنواع من ال built-in و هي : `null`, `undefined`, `boolean`, `number`, `string`, `object`, و `symbol`, و `bigint`.`"function"` هي ليست نوع, وبما أن الدوال عبارة عن objects, ف هي ليست من النوع `"object"`.  
</p>
</details>
</div>

---

35. أي هذه القيم هي قيم خطئية؟

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
- D: جميعها

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

لدينا فقط ستة قيم خطئية:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

Function constructors, مثل `new Number` و  `new Boolean` هي قيم صحيحية.

</p>
</details>
</div>

---

36. ماهو الناتج؟

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

`typeof 1` تقوم بإرجاع `"number"`.
`typeof "number"` تقوم بإرجاع `"string"`

</p>
</details>
</div>

---

37. ماهو الناتج؟

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

عندما تقوم بضبط قيمة ما لعنصر في الarray , و بعد إضافة هذا العنصر انت تكون قد تجاوزت طول الarray, لغة الجافاسكريبت تنشيء شيئا يسمى ب "empty slots", أي خانة فارغة, و هي في الحقيقة تحمل القيمة `undefined`, و لكنك سترى شيئا كالتالي:

`[1, 2, 3, 7 x empty, 11]`

وذلك يعتمد على المكان الذي قمت فيه بتشغيل البرنامج ( هو مختلف لكل متصفح, node, ...الخ)
</p>
</details>
</div>

---

38. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

النطاق أو الblock `catch`يستقبل ال arguemnt الذي يساوي `x`, هذا ليس نفس القيمة `x` عندما قمنا بتمرير الarguments, هذا المتغير `x` هو متغير block-scoped, أي يتم التعامل معه أو مناداته فقط بداخل الblock الذي تم تعريفه به.

لاحقا, قمنا بضبط القيمة `1` لهذا المتغير من نوع block-scoped, وقمنا أيضا بضبط قيمة للمتغير `y`. الآن نحن نقوم بطباعة قيمة المتغير الذي من نوع block-scoped و الذي هو `x` عن طريق الlog, و الذي هو يساوي `1`.    

بخارج نطاق ال`catch` block, `x` هي لاتزال `undefined`, و قيمة ال `y` تساوي `2`. عندما نريد طباعة قيمة ال x عن طريق الlog خارج نطاق ال `catch` block, فهي تقوم بإرجاع `undefined`, و ال `y` تقوم بإرجاع `2`.      
</p>
</details>
</div>

---

39. كل شيء في الجافاسكريبت هو عبارة عن ...

- A: primitive أو object
- B: function أو object
- C: فقط objects , سؤال مخادع
- D: number or object

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

لغة الجافاسكريبت لديها فقط primitive types و objects.

نقصد بال Primitive types:  `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, و `symbol`.

مايميز ال primitive من ال object هو أن ال primitives ليس لديها أي خصائص أو methods; ولكنك ستلاحظ أن `'foo'.toUpperCase()`يتم تقييمها ومعالجتها الى `'FOO'`و لا نتحصل على الخطأ `TypeError`. هذا لأنه عندما تحاول الوصول الى خاصية أو method لمتغير من من نوع primitive مثل ال string, فإن لغة الجافاسكريبت ستقوم بشكل ضمني بعمل wrap لل object بإستخدام واحدة من ال wrapper Classes, أي مانعنيه `String`, و لاحقا بصورة مباشرة يقوم بالتخلص من الwrapper, بعد أن يتم تقييم و تنفيذ الexpression.  جميع الprimitives, ماعدا `null` و `undefined` تقوم بعمل هذه العملية.    
</p>
</details>
</div>

---

40. ماهو الناتج؟ 

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيارالثالث: C

`[1, 2]` هي القيمة المبدئية.هذه القيمة هي التي بدأنا بها, و هي القيمة الأولى ل `acc`. أثناء الدورة الأولى`acc` تساوي `[1,2]` و `cur` تساوي `[0, 1]`, عندما نقوم بدمجهما سويا عن طريق concat يصبح لدينا الناتج `[1, 2, 0, 1]`.

إذاً, `[1, 2, 0, 1]`  هي `acc` و `[2, 3]` هي `cur`. نقوم بدمجهما سوية و نتحصل على `[1, 2, 0, 1, 2, 3]`.
</p>
</details>
</div>

---

41. ماهو الناتج؟

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيارالثاني: B

`null` قيمة خطئية.

`!null` تقوم بإرجاع `true`. 

`!true` تقوم بإرجاع `false`.
*********
 
`""` قيمة خطئية.

`!""`تقوم بإرجاع `true`. 

`!true` تقوم بإرجاع `false`.
*********
   
`1` قيمة صحيحية.

`!1` تقوم بإرجاع `false`.

`!false` تقوم بإرجاع `true`. 

</p>
</details>
</div> 

---

<div dir='rtl'>
  
42. ماهو الذي تقوم الدالة `setInterval` بإرجاعه في المتصفح؟ 
</div>

```javascript
setInterval(() => console.log("Hi"), 1000);
```

<div dir='rtl'>

A - رقم فريد أو متفرد id
 
 
 B - قيمة محددة لل milliseconds

 C - الدالة التي تم تمريرها 

`undefined` - D

</div>

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

تقوم بإرجاع ال id الفريد, هذا الid يمكن استخدامه لكي يقوم بتصفير عداد الفترات المفصلة أي الinterval عن طريق استخدام الدالة `clearInterval()` 
</p>
</details>
</div>

---

43. مالذي يتم ارجاعه بعد تنفيذ الكود أدناه؟ 

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

الstring هي تكرارية, و عملية الspread (...) تقوم بتحويل اي حرف تم فيه تنفيذ فئة تكرارية الى عنصر منفرد واحد.
</p>
</details>
</div>

---

44. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

الدوال العادية ليس بإمكانها ان تتوقف في وسط التنفيذ بعد أن يتم مناداتها, و لكن الدوال من نوع generator من الممكن أن يتم ايقافها وسط التنفيذ, و لاحقا يتم مواصلة تنفيذها من حيث المكان الذي توقفت به. في كل مرة تواجه فيها الدالة من نوع generator الكلمة المفتاحية `yield`, فإن الدالة تخضع أو تستسلم للقيمة المحددة بعدها. مع ملاحظة أن الدالة من نوع generator  في هذه الحالة, لاتقوم بإرجاع القيمة, بل تخضع لتلك القيمة. 

أولا, نقوم بإنشاء الدالة من نوع generator مع وجود المتغير `i` مساوي ل `10`. نقوم بمناداة الدالةمن نوع generator باستخدام الدالة `next()`. في المرة الأولى التي ننادي فيها الدالة من نوع generator, فإن ال `i` تساوي `10`. هي تواجه الكلمة المفتاحية `yield`, فتخضع لقيمة ال `i`. الدالة generator في هذه اللحظة تم توقيفها مؤقتا, و القيمة `10` تم طباعتها عن طريق log.

اذاً, نقوم بمناداة الدالة مرة أخرى عن طريق الدالة `next()`, هي تبدأ لتواصل من المكان الذي تم توقفيها فيه مؤقتا سابقاً, و ماتزال قيمة `i` تساوي `10`. الآن هي تواجه الكلمة المفتاحية `yield` التالية, و تواجه `i * 2`. `i` تساوي `10`,لهذا تقوم بإرجاع `10 * 2` و التي هي تساوي `20`, و هذا سيوصلنا للنتيجة `10, 20`.         
</p>
</details>
</div>

---

45. ما الذي يتم ارجاعه عند تنفيذ الكود؟

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

عندما نقوم بتمرير عدد من الpromises للدالة `Promise.race`. فهي تقوم برفض أو فصل الpromise  الاولى. للدالة `setTimeout` نحن نقوم بتمرير timer: 500ms لل promise الأولى و التي هي (`firstPromise`), و 100ms اي 100ملي ثانية للpromise الثانية والتي هي (`secondPromise`) هذا يعني ان ال `secondPromise` يتم فصلها اولاً مع القيمة `'two'`. `res` الآن تحمل قيمة `'two'`, وهي التي تم طباعتها عن طريق الlog.        
</p>
</details>
</div>

---

46. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الرابع: D

أولا, نقوم بتعريف المتغير `person` مع قيمة عبارة عن object لديه الخاصية `name`.  

<img src="https://i.imgur.com/TML1MbS.png" width="200">

ثم ,نقوم بتعريف المتغير الذي يسمى ب `members`. نقوم بضيط قيمة أول عنصر في ال array بالقيمة التي يحملها المتغير `person`.
الobjects تتفاعل عن طريق الrefrence عندما نقوم بضبطها مساويةً لبعضها البعض, عندما تقوم بتعريف أو إنشاء refrence معين من متغير الى متغير آخر, أنت فعليا تقوم بعمل نسخة من ذلك الrefrence. (مع ملاحظة أنهم ليس لديهم نفس الrefrence)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

ثم , نقوم بضبط قمية المتغير `person` بقيمة تساوي `null`.  

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

نحن فقط نقوم بتعديل قيمة المتغير `person`, وليس أول عنصر في ال array, بما أن ذلك العنصر لديه refrence منسوخ من ال object. أول عنصر في `members` لا يزال لديه refrence للobject الأصلي. و عندما نقوم بطباع الarray `members` عن طريق الlog, فإن العنصر الأول لايزال يحمل قيمة الobject, و التي سيتم طباعتها عن طريق log.  
</p>
</details>
</div>

---

47. ماهو الناتج؟

```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

بإستخدام `for-in` التكرارية, بامكاننا أن نصل الى جميع المفاتيح التي تخص object معين. في هذه الحالة `name` و `age`. ماوراء الكواليس, مفاتيح ال objects هي عبارة عن strings (إذا لم تكن هذه المفاتيح عبارة عن symbol), في أي حلقة من الحلقات التكرارية, نقوم بضبط القيمة `item`مساوية للمفتاح الحالي الذي هي تتكرر فيه اوعنده. أولا `item`  تساوي `name`, و يتم طباعتها عن طريق الlog, ثم `item` تساوي `age` و التي ايضا تم طباعتها عن طريق الlog.
</p>
</details>
</div>

---

48. ماهو الناتج؟

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

Operator associativity او ترابطية العامل هي الترتيب أو التسلسل الذي يقيم به الcompiler ال expressions, ف هو إما أن يكون من اليسار الى اليمين أو من اليمين الى اليسار. هذا يحدث فقط إذا كان جميع الoperators لديها نفس الأسبقية. لدينا فقط نوع واحد من الoperator ألا و هو `+`. بالإضافة الى التالي, الترابطية هي من اليسار الى اليمين.  

`3 + 4` يتم تقييمها أولا. هذا مايعطينا الناتج الذي هو عبارة عن الرقم `7`.

`7 + '5'` تقوم بإرجاع الناتج `"75"` بسبب عملية ال coercion وهي العمليةالتي تقوم بالتحويل من نوع الى آخر, لغة الجافاسكريبت تقوم بتحويل الرقم `7` الى النوع string, أنظرالى السؤال رقم 15 في الأعلى. بإمكاننا عمل concatenate لمتغيرين من النوع string بإستخدام العملية `+`. `"7" + "5"` سترجع الناتج `"75"`.   
</p>
</details>
</div>

---

<div dir='rtl'>
49. ماهي قيمة `num`؟ 
</div>

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

فقط الأرقام الأولى في الstring يتم إرجاعها. بناءاً على _radix_ (الargument الثاني لكي يتم تحديدنوعية الرقم الذي نود أن نقوم بعمل parse له الى: base 10, hexadecimal, octal, binary, الخ. ). تقوم `parseInt` بالتحقق عن إذا ماكانت الحروف في الstring صالحة. و بمجرد أن تجد حرف غير صالح في ال radix, ف هي تقوم بإيقاف عملية الparsing مباشرة و تتجاهل الحروف التي تليه.   

`*` ليست رقم صالح. هي فقط تقوم بعمل parse ل `"7"` الى عدد عشري `7`. `num` الآن تحمل القيمة `7`.   
</p>
</details>
</div>

---

50. ماهو الناتج؟

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

عندما يتم عمل mapping لل array, فإن قيمة `num` ستساوي قيمة العنصر الذي يتم حاليا المرور به, فكما نعرف أن الmapping يدور على جميع عناصر الarray. في هذه الحالة, العناصر عبارة عن أرقام, لهذا فإن شرط ال if statement `typeof num === "number"` يقوم بإرجاع `true`. دالة map  تقوم بإنشاء array جديدة, و إدخال القيم المرجعة من الدالة في هذه الarray.

ولكن, لا نقوم بإرجاع قيمة. عندما لا نقوم بإرجاع قيمة من الدالة, فإن الدالة تقوم بإرجاع `undefined`. لكل عنصرٍ في الarray, فإن نطاق الدالة او نعني الfunction block يتم مناداته, لهذا لأي عنصر نقوم بإرجاع `undefined`.  
</p>
</details>
</div>

---

51. ماهو الناتج؟

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A

الArguments يتم تمريرها عن طريق قيمها, إلا في حالة كان قيمتها عبارة عن object, ففي هذه الحالة يتم تمريرها عن طريق الrefrence. `birthYear` تم تمريرها عن طريق القيمة, و بما أنها من النوع string وليس object. عندما نقوم بتمرير الarguments عن طريق القيمة, فإن نسخة من هذه القيمة يتم إنشاءها (أنظر للسؤال رقم 46 في الاعلى).

المتغير `birthYear` لديه refrence للقيمة `"1997"`. الargument `year` أيضا لديه refrence للقيمة `"1997"`, لكنها ليست نفس القيمة التي `birthYear` لديها refrence لها. عندما نقوم بتحديث قيمة `year` عن طريق ضبط `year` تساوي ل `"1998"`, نحن فقط نقوم بتحديث قيمة `year`. `birthYear` لا تزال تساوي `"1997"`.

قيمة `person` هي object. الargument `member` لديه نسخة refrence لنفس الobject. عندما نقوم بتعديل او تحديث خاصية للobject `member`و الذي لديه refrence لها, فإن قيمة `person` ستتعدل و تتغير أيضا,بما أن كلاهما لديهما refrence لنفس الobject. الخصائص `person` و `name` هما الأىن مساويان للقيمة `"Lydia"`.      
</p>
</details>
</div>

---

52. ماهو الناتج؟

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error!", e);
  }
}

sayHi();
```

- A: `"It worked! Hello world!"`
- B: `"Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error: Hello world!`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الرابع: D

مع عبارة `throw` , بإمكاننا إنشاء errors حسب الطلب, أي ليست كا الإخطاء العامة في اللغة, بإستخدام هذه العبارة بإمكانك أن تضع exception, الexception يمكن أن يكون : <b>string</b>,  <b>number</b>, <b>boolean</b> أو <b>object</b>. في هذه الحالة, الexcption لدينا هو ال string `'Hello world'`.

مع عبارة `catch`, بإمكاننا ان نحدد ما الذي يتوجب فعله عندما يتم وضع أو إلقاء الexception في نطاق ال `try`. تم إلقاء أو وضع exception: الstring `'Hello world'`.  `e` الآن تساوي تلك الstring,log. هذا سيعطينا النتيجة `'Oh an error: Hello world'`.  
</p>
</details>
</div>

---

53. ماهو الناتج؟ 

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

عندما تقوم بإرجاع خاصية, فإن قيمة هذه الخاصية هي تساوي القيمة المرجعة, ليس القيمة التي تم ضبطها في دالة الconstructor. نقوم بإرجاع ال string `"Maserati"`, لذا فإن `myCar.make` تساوي `"Maserati"`.   
</p>
</details>
</div>

---

54. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

`let x = y = 10;` هي في الحقيقة إختصار ل: 
</div>

```javascript
y = 10;
let x = y;
```

<div dir='rtl'>
  
عندما نقوم بضبط قيمة`y` لكي تساوي `10`, فنحن فعليا نقوم بإضافة الخاصية `y` للglobal object. (`window` في المتصفح, `global` في Node). في المتصفح, `window.y` الآن تساوي `10`. 

ثم, عندما نقوم بتعريف المتغير `x` بالقيمة `y` و التي هي في الحقيقة تساوي `10`. المتغيرات التي يتم تعريفها بالكلمة المفتاحية `let`هي متغيرات block scoped, أي يتم التعامل معها في النطاق الذي تم تعريفها فيه فقط, الدالة المناداة حاليا في هذه الحالة أي immediately-invoked function (IIFE). عندما نقوم بإستخدام العملية `typeof`, فإن المعامل `x` ليس معرف, نحن نحاول الوصول الى `x` خارج النطاق الذي تم تعريفه بها. هذا يعني أن `x` ليست معرفة. المتغيرات التي لم يتم وضع قيمة لها أو لم يتم تعريفها هي من النوع `"undefined"`. `console.log(typeof x)` تقوم بإرجاع `"undefined"`.

ولكن, نحن قمنا بإنشاء و تعريف global variable `y` عندما قمنا بضبط قيمة `y` لتساوي `10`. هذه القيمة يمكن الوصول إليها من أي مكان في البرنامج. `y` هي معرفة, و لديها قيمة من النوع `"number"`.  `console.log(typeof y)` تقوم بإرجاع `"number"`.   
</p>
</details>
</div>

---

55. ماهو الناتج؟

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`,`"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A
  
بإمكاننا مسح خصائص object معين عن طريق استخدام الكلمة المفتاحية `delete`, أيضا يمكن فعل هذا في ال prototype. بمسح خاصية معينة من الprototype,  فهي سيتم مسحها وبالتالي لن تكون موجودة في سلسلة الprototype. في هذه الحالة فإن الدالة `bark`  لن تكون موجودة بعد الآن في الprototype بعد `delete Dog.prototype.bark`, ولكن بالرغم من هذا فنحن نحاول الوصول إليها.   

عندما نحاول أن ننادي شيئا ما في دالة و هو ليس موجود في هذه الدالة, فإننا سنتحصل على الخطأ `TypeError`, و في هذه الحالة `TypeError: pet.bark is not a function` بما أن `pet.bark` هي `undefined`.   
</p>
</details>
</div>

---

56. ماهو الناتج؟

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الرابع: D

ال object `Set` هو مجموعة من القيم الفريدة, أي القيمة بإمكانها أن تتواجد مرة واحدة فقط في المجموعة. 

نقوم بتمرير التكراري أي نعني الiterable `[1, 1, 2, 3, 4]`  بوجود قيمة مكررة ألا وهي `1` . بما أننا لا يمكن أن نضع قيمة واحدة مرتين في مجموعة, فإن واحدة من القيم المكررة سيتم إزالتها, و سيكون الناتج: `{1, 2, 3, 4}`. 
</p>
</details>
</div>

---

57. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

هنا يوجد لدينا module مستورد وهو قابل للقراءة فقط, ليس بإمكانك تعديل او تحديث الmodule المستورد, أي imported module. فقط الmodule الذي قام بتصديره هو القادر على تغيير قيمته.

عندما نحاول أن نزيد قيمة المتغير `myCounter`, سنتحصل على الخطأ `myCounter` هو قابل للقراءة فقط و ليس من الممكن تعديله.  
</p>
</details>
</div>

---

58. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول: A
  
العامل `delete` تقوم بإرجاع قيمة boolen و هي `true` عندما تتم عملية المسح بنجاح, خلاف ذلك ستقوم بإرجاع `false`, ولكن المتغيرات المعرفة بالكلمات المفتاحية `var`, `const` أو `let` ليس بالإمكان مسحها بإستخدام العامل `delete`.        

المتغير `name` تم تعريفه باستخدام الكلمة المفتاحية `const`, لهذا فإن عملية مسحه لم تتم بنجاح, وتم إرجاع القيمة `false`, عندما نقوم بضبط المتغير `age` ليساوي القيمة `21` فإننا فعليا نقوم بإضافة خاصية تسمى `age` للglobal object. بإمكانك أن تمسح خصائص من الobjects بنجاح بإستخدام هذه الطريقة , أيضا الglobal objects, لذا فإن `delete age` تقوم بإرجاع `true`.         
</p>
</details>

---

59. ماهو الناتج؟

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثالث: C

بإمكاننا إستخراج أو استخلاص القيم من arrays أو من objects عن طريق إستخدام الdestructing, على سبيل المثال: 
</div>

```javascript
[a, b] = [1, 2];
```

<div dir='rtl'>
<img src="https://i.imgur.com/ADFpVop.png" width="200">

قيمة `a` الآن تساوي `1`, و قيمة `b` الآن تساوي `2`. ماقمنا بفعله حقاً في هذا السؤال هو:     
</div>

```javascript
[y] = [1, 2, 3, 4, 5];
```

<div dir='rtl'>
<img src="https://i.imgur.com/NzGkMNk.png" width="200">

هذا يعني أن قيمة `y` هي مساوية للقيمة الأولى في الarray, والتي هي عبارة عن نوع رقم يساوي `1`, عندما نقوم بطباعة `y` عن طريق الlog, فإن القيمة `1` هي التي يتم إرجاعها.     
</p>
</details>
</div>

---

60. ماهو الناتج؟

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

من الممكن دمج الobjects بإستخدام العامل spread `...`. هي تمكنك من إنشاء نسخ من أزواج ال key/value أي أزواج المفاتيح و القيم التي تنتمي الى object معين, و إضافتهم الى object آخر. في هذه الحالة, نحن نقوم بعمل نسخ من الobject `user`, و من ثم إضافتهم الى ال obejct `admin`. ال object `admin` الآن يتضمن نسخ عبارة عن أزواج مفاتيح و قيم, و هذا ما سبب في إعطاء النتيجة `{ admin: true, name: "Lydia", age: 21 }`.  
</p>
</details>
</div>

---

61. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الثاني: B

مع إستخدام  `defineProperty` method, بإمكاننا إضافة خصائص جديدة لobject معين,أو تعديل خصائصه الحالية,. عندما نقوم بإضافة خاصية لobject بإستخدام `defineProperty` method, ف هي بطبيعة الحال ليست enumerable. ال `Object.keys` method تقوم بإرجاع جميع أسامي الخصائص من object معين و التي هي جميعها enumerable, في هذه الحالة `"name"` فقط.       

الخصائص التي تم إضافتها بإستخدام `defineProperty` method هي بطبيعة الحال غير قابلة للتغيير أو التعديل. بإمكانك عمل override بإستخدام الخصائص `writable`, `configurable` و `enumerable`.  بهذه الطريقة, ال `defineProperty` method ستعطيك تحكم أكثر بكثير على الخصائص التي قمت بإضافتها الى object معين.  
</p>
</details>
</div>

---

62. ماهو الناتج؟

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

ال argument الثاني من `JSON.stringify` هو replacer أي حالٍ محل شيء آخر, الreplacer إما أن يكون دالة أو يكون array, و سيمكنك من التحكم في كيفية و ماهية امكانية عمل stringified للقيم, أي تحويلها الى string.   

إذا كان الreplacer هو عبارة عن array, فإن الخصائص التي أساميها مضمنة في الarray هي فقط التي يمكن إضافتها الى ال JSON string. في هذه الحالة, الخصائص التي تحمل الأسامي `"level"` و `"health"` فقط هي المضمنة, `"username"` غير مضمنة. `data` الآن تساوي `"{"level":19, "health":90}"`.   

إذا كان الreplacer عبارة عن دالة, فإن هذه الدالة يتم مناداتها عند أي خاصية في الobject أنت تقوم بعمل stringifying لها.القيمة المرجعة من هذه الدالة ستكون قيمة الخاصية عندما تم إضافتها ل JSON string. إذا كانت القيمة `undefined`, فإن هذه الخاصية سيتم إستبعادها من الJSON string.  
</p>
</details>
</div>

---

63. ماهو الناتج؟

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

<details><summary><b>الإجابة</b></summary>
<p>
<div dir='rtl'>
الجواب هو الخيار الأول : A

العامل الأحادي `++` يقوم أولا بإرجاع قيمة المعامل, ثم يقوم بزيادة قيمة هذا المعامل. قيمة `num1` تساوي `10`, و بما أن دالة `increaseNumber` أولا تقوم بإرجاع قيمة `num` و التي هي تساوي `10`, و تقوم بزيادة قيمة `num` لاحقاً فقط.       

`num2` تساوي`10`, وبما أننا نقوم بتمرير `num1` ل `increasePassedNumber`. فإن `number` تساوي `10` والتي هي قيمة`num1`. مجدداً, العامل الأحادي `++`, أولاً يقوم بإرجاع قيمة المعامل, و من ثم زيادة قيمة المعامل. قيمة `number` تساوي`10`, إذاً `num2` تساوي `10`.         
</p>
</details>
</div>
