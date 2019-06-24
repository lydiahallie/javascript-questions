

<div dir='rtl'>

# قائــمة أسئلة جافا سكريبت (مستوى متقدم)
أقوم بنشر عدة أسئلة جافاسكريبت بصورة يومية على حسابي في [انستغرام](https://www.instagram.com/theavocoder/).

تتدرج الأسئلة إبتداءا من المستوى الأساسي أو البسيط الى المستوى المتقدم لإختبار مدى معرفتك بلغة الجافا سكريبت, قم بمراجعة و إنعاش معرفتك باللغة قليلا, أو قم بالتجهيز لمقابلة عمل لوظيفة مبرمج عن طريق هذه الأسئلة!

أقوم بتحديث هذا المستودع أسبوعيا بإضافة المزيد من الأسئلة. :muscle: :rocket:

الأجوبة توجد في الجزء المطوي بالأسفل أدناه تحت كل سؤال على حدة, فقط قم بالضغط على كلمة الإجابة لكي تحصل على الإجابة, حظا موفقا  :heart: 

[English](https://github.com/SaraAli26/javascript-questions/blob/master/README.md)

[中文版本](https://github.com/SaraAli26/javascript-questions/blob/master/README-zh_CN.md)

[Русский](https://github.com/SaraAli26/javascript-questions/blob/master/README_ru-RU.md)

[Western Balkan](https://github.com/SaraAli26/javascript-questions/blob/master/README-bs_BS.md)

[Deutsch](https://github.com/SaraAli26/javascript-questions/blob/master/README-de_DE.md)

[Tiếng Việt](https://github.com/SaraAli26/javascript-questions/blob/master/README-vi.md)
</div>
____________

###### 1. ماهو الناتج ؟

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
