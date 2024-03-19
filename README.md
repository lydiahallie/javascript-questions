<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png"> 
  <h1>JavaScript Questions</h1>

---

<span>สวัสดีพวกเราได้โพสคำถามเกี่ยวกับ Javascript เอาไว้ใน [Instagram](https://www.instagram.com/theavocoder) **stories** และก็จะโพสเอาไว้ในนี้ด้วย!
อัปเดตล่าสุด: <a href=#20191224><b>24 ธันวาคม</b></a>

คำถามประกอบไปด้วยตั้งแต่ระดับเริ่มต้นถึงขั้นสูง: จุดประสงค์เพื่อวัดความรู้ภาษา Javascript ทบทวนความรู้ เตรียมตัวสำหรับการสัมภาษณ์ :muscle: :rocket: Reposentory นี้มีการ Update อย่างสม่ำเสมอกรณีที่มีคำถามใหม่ๆเข้ามา เราได้ใส่คำตอบเอาไว้ในส่วนที่ซ่อนอยู่ **collapsed sections** ข้างใต้คำถามอย่าลืมคลิกมันนะมันจะขยายออก โชคดีจ้า :heart:</span>

สามารถติดต่อผู้พัฒนาได้ที่ 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a><br />

**_Note_**: เพิ่มเติมสำหรับนักพัฒนาไทยสามารถร่วมพัฒนาโดยการแปลภาษาหรือแก้ไขคำได้นะครับ

</div>


ลิสต์ภาษาอื่นๆ:
- [🇸🇦 العربية](../ar-AR/README_AR.md)
- [🇪🇬 اللغة العامية](../ar-EG/README_ar-EG.md)
- [🇧🇦 Bosanski](../bs-BS/README-bs_BS.md)
- [🇩🇪 Deutsch](../de-DE/README.md)
- [🇬🇧 English](../README.md)
- [🇪🇸 Español](../es-ES/README-ES.md)
- [🇫🇷 Français](../fr-FR/README_fr-FR.md)
- [🇮🇩 Indonesia](../id-ID/README.md)
- [🇮🇹 Italiano](../it-IT/README.md)
- [🇯🇵 日本語](../ja-JA/README-ja_JA.md)
- [🇰🇷 한국어](../ko-KR/README-ko_KR.md)
- [🇳🇱 Nederlands](../nl-NL/README.md)
- [🇵🇱 Polski](../pl-PL/README.md)
- [🇧🇷 Português Brasil](../pt-BR/README_pt_BR.md)
- [🇷o Română](../ro-RO/README.ro.md)
- [🇷🇺 Русский](../ru-RU/README.md)
- [🇽🇰 Shqip](../sq-KS/README_sq_KS.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)


---

###### 1. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` และ `undefined`
- B: `Lydia` และ `ReferenceError`
- C: `ReferenceError` และ `21`
- D: `undefined` และ `ReferenceError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

ในฟังก์ชันดังกล่าวได้ทำการประกาศตัวแปร `name` ด้วย `var` คีย์เวิร์ด หมายความว่าตัวแปรได้รับการ Hoisted (คือส่วนของหน่วยความจำจะถูกจองไว้ในขั้นตอน creation phase) ด้วยค่าเริ่มต้น `undefined` จนกว่าจะถึงบรรทัดที่กำหนดค่าให้กับตัวแปร เนื่องจากเราไม่ได้กำหนดค่าให้กับตัวแปรในบรรทัดที่เราแสดงผล ดังนั้นค่าของตัวแปร `name` จึงเป็น `undefined`

ตัวแปรที่ประกาศโดยใช้คีย์เวิร์ด `let` (และ `const`) ถูก Hoisted เช่นกัน แต่มันจะไม่ถูกตั้งค่าเริ่มต้น (initialize) เหมือนกับคีย์เวิร์ด `var` พวกมันไม่สามารถเข้าถึงได้หากยังไม่ถึงบรรทัดที่ถูกประกาศ (initialize) เรียกว่า "temporal dead zone" ดังนั้นเมื่อเราพยายามเข้าถึงตัวแปรก่อนที่จะมีการประกาศ JavaScript จะส่งข้อความ `ReferenceError`

</p>
</details>

---

###### 2. ผลลัพธ์ที่ได้คืออะไร?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` และ `0 1 2`
- B: `0 1 2` และ `3 3 3`
- C: `3 3 3` และ `0 1 2`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

เพราะว่าลำดับเหตุการที่เกิดขึ้นใน Javascript ฟังก์ชัน `setTimeout` ที่เป็น callback ถูกเรียก _หลังจาก_ loop รันเสร็จ เนื่องจากตัวแปร `i` ใน loop แรกถูกประกาศด้วยคีย์เวิร์ด `var` จึงทำให้มันเป็น global scope ระหว่างการวนรอบ loop เป็นการเพิ่มค่า `i` ที่ละ `1` ในแต่ละครั้งด้วย unary operator `++`. ในเวลาที่ `setTimeout` callback ถูกเรียก แต่ว่าค่า `i` มีค่าเท่ากับ `3` แล้วดังตัวอย่างแรก

ใน loop ที่สอง ตัวแปร `i` ถูกประกาศโดยใช้คีย์เวิร์ด `let` : ตัวแปรที่ประกาศด้วยคีย์เวิร์ด `let` (และ `const`) เป็น block-scope (block คืออะไรก็ตามที่อยู่ภายใน `{ }`) ค่า `i` แต่ละค่าจะถูกกำหนดขอบเขตภายใน loop ในเวลาที่ `setTimeout` callback ถูกเรียก ค่า `i` แต่ละค่าจะเป็นค่าเฉพาะของแต่ละ callback `1 2 และ 3` ตามละดับ

</p>
</details>

---

###### 3. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

- A: `20` และ `62.83185307179586`
- B: `20` และ `NaN`
- C: `20` และ `63`
- D: `NaN` และ `63`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

Note ค่าของ `diameter` เป็น regular function แต่ว่าค่าของ `perimeter` เป็น arrow function.

ด้วย arrow functions คีย์เวิร์ด `this` อ้างอิงไปที่ขอบเขตโดยรอบ (Statis scope หรือ Lexical scope) มันจะไม่เหมือนกับ regular functions! นั้นหมายถึงว่าเมื่อเราเรียก `perimeter` คำว่า `this` มันไม่ได้อ้างอิงไปที่ตัว shape object แต่มันอ้างอิงไปที่ขอบเขตโดยรอบ(ในตัวอย่าง `this` จะอ้างอิงไปที่ window object).

ไม่มีค่าของ `radius` ที่ window object ดังนั้น `this.radius` จึงมีค่าเป็น `undefined`

</p>
</details>

---

###### 4. ผลลัพธ์ที่ได้คืออะไร?

```javascript
+true;
!"Lydia";
```

- A: `1` และ `false`
- B: `false` และ `NaN`
- C: `false` และ `false`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

เครื่องหมายบวกจะพยายามแปลงตัวถูกดำเนินการเป็นตัวเลข `true` เป็น `1`, และ `false` เป็น `0`

String `'Lydia'` เป็นค่าความจริง สิ่งที่เราถามคือ "ค่าความจริงนี้เป็นเท็จหรือไม่?" (ซึ่งคำตอบก็คือ "ไม่") ค่าจึงเป็น `false`

</p>
</details>

---

###### 5. ข้อใดถูกต้อง?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` is not valid
- B: `mouse[bird.size]` is not valid
- C: `mouse[bird["size"]]` is not valid
- D: All of them are valid

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

ในภาษา Javascript, ทุกๆ object keys เป็น strings (unless it's a Symbol). แม้ว่าเราไม่ได้กำหนด _type_ ของมันให้เป็น strings, object keys มันจะถูกแปลงเป็น strings หลังบ้านขอภาษา Javscript.

JavaScript interprets (or unboxes) statements. เมื่อเราใช้ bracket notation, มันจะมองไปที่ opening bracket `[` และมองไปจนถึง closing bracket `]`. หลังจากนั้นมันจะประเมินค่า statement.

`mouse[bird.size]`: การประเมิณลำดับแรก `bird.size`, มีค่าเท่ากับ `"small"`. `mouse["small"]` returns `true`

อย่างไรก็ตามด้วย dot notation, สิ่งนี้ไม่มีทางเกิดขึ้น. `mouse` ไม่มี key `bird`, ซึ่งหมายความว่า `mouse.bird` มีค่าเป็น `undefined`. เมื่อเราเรียกหา `size` โดยใช้ dot notation: `mouse.bird.size`. เนื่องจาก `mouse.bird` มีค่าเป็น `undefined`, มันเลยเป็นการเรียก `undefined.size`. ซึ่งไม่ valid (isn't valid), และจะมี error แจ้งขึ้นมา `Cannot read property "size" of undefined`.

</p>
</details>

---


###### 6. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

ในภาษา Javascript, ทุก Object จะ interact โดย _reference_ เมื่อมีการตั้งค่าให้เท่ากัน.

จากคำถามลำดับแรก `c` เก็บค่าที่เป็น object. หลังจากนั้นทำการกำหนดค่า `d` ไปที่ Reference ที่ค่า `c` เนื่องจากค่า `c` เป็น object การกำหนดค่าจึงเป็นการ Reference

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

เมื่อมีการเปลี่ยนแปลงค่า object ตัวใดตัวหนึ่งค่าตัวอื่นจึงเปลี่ยนตามไปด้วย

</p>
</details>

---

###### 7. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

`new Number()` เป็น built-in function constructor. แม้ว่ามันจะคล้ายกับ number, แต่มันไม่ได้เป็น number จริงๆ: มันมีคุณสมบัติพิเศษมากมายเนื่องจากมันเป็น object

เมื่อใช้เครื่องหมาย `==` , มันเป็นแค่การตรวจสอบว่าข้อมูลสองค่ามีค่าเท่ากันหรือไม่ _value_. ซึ่งค่าทั้งสองมีค่าเท่ากับ `3`, จึง returns `true`.

อย่างไรก็ตามเมื่อใช้เครื่องหมาย `===` , ทั้งค่าของมัน _และ_ type ของมันควรเหมือนกันจึงจะ return `true`. เนื่องจาก `new Number()` ไม่ใช่ number, มันเป็น **object**. `a === b` _และ_ `b === c` จึง return `false.`

</p>
</details>

---

###### 8. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown.

</p>
</details>

---

###### 9. ผลลัพธ์ที่ได้คืออะไร?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as `global.greetign = {}` (or `window.greetign = {}` in a browser).

In order to avoid this, we can use `"use strict"`. This makes sure that you have declared a variable before setting it equal to anything.

</p>
</details>

---

###### 10. จะเกิดอะไรขึ้นหากเราทำเช่นนี้?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nothing, this is totally fine!
- B: `SyntaxError`. You cannot add properties to a function this way.
- C: `"Woof"` gets logged.
- D: `ReferenceError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

</p>
</details>

---

###### 11. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

would have made `member.getFullName()` work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every `Person` instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!

</p>
</details>

---

###### 12. ผลลัพธ์ที่ได้คืออะไร?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` และ `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` และ `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` และ `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` และ `ReferenceError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

For `sarah`, we didn't use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don't add `new` it refers to the **global object**!

We said that `this.firstName` equals `"Sarah"` และ `this.lastName` equals `"Smith"`. What we actually did, is defining `global.firstName = 'Sarah'` และ `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.

</p>
</details>

---

###### 13. อะไรคือ three phases ของ event propagation?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. ทุกๆ object มี prototypes.

- A: true
- B: false

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

</p>
</details>

---

###### 15. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.

In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what's happening here is `"1" + "2"` which returns `"12"`.

</p>
</details>

---

###### 16. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

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

###### 17. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

</p>
</details>

---

###### 18. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both `{ age: 18 } === { age: 18 }` และ `{ age: 18 } == { age: 18 }` return `false`.

</p>
</details>

---

###### 19. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The rest parameter (`...args`.) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`

</p>
</details>

---

###### 20. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

With `"use strict"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn't use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.

</p>
</details>

---

###### 21. จากโจทย์ `sum` มีค่าเท่ากับเท่าไหร่?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.

</p>
</details>

---

###### 22. cool_secret จะถูก accessible ได้นานเท่าไหร่?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Forever, the data doesn't get lost.
- B: When the user closes the tab.
- C: When the user closes the entire browser, not only the tab.
- D: When the user shuts off their computer.

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

The data stored in `sessionStorage` is removed after closing the _tab_.

If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.

</p>
</details>

---

###### 23. ผลลัพธ์ที่ได้คืออะไร?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with `let` or `const` since they're block-scoped.

</p>
</details>

---

###### 24. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</p>
</details>

---

###### 25. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</p>
</details>

---

###### 26. Global execution context ใน JavaScript สร้าง 2 สิ่งคือ: global object และคีย์เวิร์ด "this"

- A: true
- B: false
- C: it depends

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

The base execution context is the global execution context: it's what's accessible everywhere in your code.

</p>
</details>

---

###### 27. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The `continue` statement skips an iteration if a certain condition returns `true`.

</p>
</details>

---

###### 28. ผลลัพธ์ที่ได้คืออะไร?

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza())
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</p>
</details>

---

###### 29. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["object Object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["object Object"] = 456`.

Then, we log `a[b]`, which is actually `a["object Object"]`. We just set that to `456`, so it returns `456`.

</p>
</details>

---

###### 30. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

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

###### 31. event.target คืออะไรเมื่อคลิก button?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`

</p>
</details>

---

###### 32. เมื่อคุณคลิกที่ paragraph, ผลลัพธ์ที่ได้ใน console log คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

If we click `p`, we see two logs: `p` และ `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</p>
</details>

---

###### 34. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol`, และ `bigint`. `"function"` is not a type, since functions are objects, it's of type `"object"`.
</p>
</details>

---

###### 35. ค่าใดต่อไปนี้ที่เป็น false?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

There are only six falsy values:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

Function constructors, like `new Number` และ `new Boolean` are truthy.

</p>
</details>

---

###### 36. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)

</p>
</details>

---

###### 38. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.

Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.

Outside of the `catch` block, `x` is still `undefined`, และ `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, และ `y` returns `2`.

</p>
</details>

---

###### 39. ข้อใดคือ JavaScript

- A: primitive or object
- B: function or object
- C: trick question! only objects
- D: number or object

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, และ `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null`และd `undefined` exhibit this behaviour.

</p>
</details>

---

###### 40. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, และ `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` และ `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. ผลลัพธ์ที่ได้คืออะไร?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</p>
</details>

---

###### 42. `setInterval` method ส่งค่าอะไรให้เบราว์เซอร์?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

</p>
</details>

---

###### 43. ผลลัพธ์ทีได้คืออะไร?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

A string is an iterable. The spread operator maps every character of an iterable to one element.

</p>
</details>

---

###### 44. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.

First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.

Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.

</p>
</details>

---

###### 45. ผลลัพธ์ทีได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.

</p>
</details>

---

###### 46. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

First, we declare a variable `person` with the value of an object that has a `name` property.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Then, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Then, we set the variable `person` equal to `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

We are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.

</p>
</details>

---

###### 47. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

With a `for-in` loop, we can iterate through object keys, in this case `name` และ `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.

</p>
</details>

---

###### 48. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.

</p>
</details>

---

###### 49. `num` เท่ากับเท่าไหร่?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.

</p>
</details>

---

###### 50. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.

However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.

</p>
</details>

---

###### 51. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).

The variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.

The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `"Lydia"`

</p>
</details>

---

###### 52. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `It worked! Hello world!`
- B: `Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `Oh no an error: Hello world!`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.

With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.

</p>
</details>

---

###### 54. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

`let x = y = 10;` is actually shorthand for:

```javascript
y = 10;
let x = y;
```

When we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.

Then, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately-invoked function (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it's declared in. This means that `x` is not defined. Values who haven't been assigned a value or declared are of type `"undefined"`. `console.log(typeof x)` returns `"undefined"`.

However, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `"number"`. `console.log(typeof y)` returns `"number"`.

</p>
</details>

---

###### 55. ผลลัพธ์ที่ได้คืออะไร?

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
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.

When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.

</p>
</details>

---

###### 56. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

The `Set` object is a collection of _unique_ values: a value can only occur once in a set.

We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.

</p>
</details>

---

###### 58. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.

The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.

</p>
</details>

---

###### 59. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

We can unpack values from arrays or properties from objects through destructuring. For example:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

The value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

This means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.

</p>
</details>

---

###### 60. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.

Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` และ `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.

</p>
</details>

---

###### 62. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"`และd `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.

If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

</p>
</details>

---

###### 63. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.

`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.

</p>
</details>

---

###### 64. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.

The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.

The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`. 

The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`. 

</p>
</details>

---

###### 65. ผลลัพธ์ที่ได้คืออะไร?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` และ `3` `3` และ `6` `4`
- B: `1` `2` และ `2` `3` และ `3` `4`
- C: `1` `undefined` และ `2` `undefined` และ `3` `undefined` และ `4` `undefined`
- D: `1` `2` และ `undefined` `3` และ `undefined` `4`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value. 

In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.

On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` และ `2` get logged.  

If you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` และ `3` get logged. 

On the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` และ `4` get logged.
</p>
</details>
  
---

###### 66. constructor ไหนที่เราสามารถใช้ extend ให้กับ `Dog` class ได้?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.

With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`. 

The `Labrador` class receives two arguments, `name` since it extends `Dog`, และ `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly  using constructor 2.
</p>
</details>

---

###### 67. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.

This is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console. 

</p>
</details>

---

###### 68. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`. 

</p>
</details>

---

###### 69. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`, 

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Lydia Hallie"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.

If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.

</p>
</details>

---

###### 70. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: A string containing their code points
- D: Error

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `"🥑"` with the string `"💻"`, resulting in `"🥑💻"`.

</p>
</details>

---

###### 71. ค่าที่แสดงใน log หลังจากที่เรา commented out ใน console.log จะเป็นอย่างไร?

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` และ `game.next().value`
- B: `game.next.value("Yes")` และ `game.next.value()`
- C: `game.next().value` และ `game.next("Yes").value`
- D: `game.next.value()` และ `game.next.value("Yes")`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.

Every line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_

When we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statement returns `false`, และ `JavaScript loves you back ❤️` gets logged.

</p>
</details>

---

###### 72. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

`String.raw` returns a string where the escapes (`\n`, `\v`, `\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:

`` const path = `C:\Documents\Projects\table.html` ``

Which would result in:

`"C:DocumentsProjects able.html"`

With `String.raw`, it would simply ignore the escape and print:

`C:\Documents\Projects\table.html`

In this case, the string is `Hello\nworld`, which gets logged.

</p>
</details>

---

###### 73. ผลลัพธ์ที่ได้คืออะไร?

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.

If we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:

`data.then(res => console.log(res))`

This would've logged `"I made it!"`

</p>
</details>

---

###### 74. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) and had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.

The `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.

</p>
</details>

---

###### 75. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

When we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.

Since `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, และ `{ x: 10, y: 20 }` gets logged.

</p>
</details>

---

###### 76. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.

With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.

Since we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.

</p>
</details>

---

###### 77. นี่เป็น pure function หรือไม่?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

A pure function is a function that _always_ returns the same result, if the same arguments are passed.

The `sum` function always returns the same result. If we pass `1` และ `2`, it will _always_ return `3` without side effects. If we pass `5` และ `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.

</p>
</details>

---

###### 78. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.

If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.

We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.

The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, และ `'From cache! 20'` gets logged.

The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, และ `'From cache! 20'` gets logged.

</p>
</details>

---

###### 79. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` และ `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` และ `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` และ `0` `1` `2` `3`
- D:  `0` `1` `2` `3` และ `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Where the keys are the enumerable properties. `0` `1` `2` `3` get logged.

With a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it's currently iterating over, `"☕"` ` "💻"` `"🍷"` `"🍫"` get logged.

</p>
</details>

---

###### 80. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.

The element will be equal to the returned value.  `1 + 2` returns `3`, `1 * 2` returns `2`, และ `1 / 2` returns `0.5`.

</p>
</details>

---

###### 81. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
```

- A: `Hi there, `
- B: `Hi there, undefined`
- C: `Hi there, null`
- D:  `ReferenceError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.

In ES6, we can overwrite this default `undefined` value with default parameters. For example:

`function sayHi(name = "Lydia") { ... }`

In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`

</p>
</details>

---

###### 82. ผลลัพธ์ที่ได้คืออะไร?

```javascript
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```

- A: `"🥑"` และ `"😍"`
- B: `"🥑"` และ `"😎"`
- C: `"😍"` และ `"😎"`
- D: `"😎"` และ `"😎"`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"🥑"`.

With the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `"😎"`. When logging `this.status`, `"😎"` gets logged.


</p>
</details>

---

###### 83. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`. 

Note that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.

Then, we set `city` equal to the string `"Amsterdam"`. This doesn't change the person object: there is no reference to that object.

When logging the `person` object, the unmodified object gets returned. 

</p>
</details>

---

###### 84. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

Variables with the `const` และ `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.

</p>
</details>

---

###### 85. ข้อมูลแบบไหนที่เราได้ใน log?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: The result of the `fetch` method.
- B: The result of the second invocation of the `fetch` method.
- C: The result of the callback in the previous `.then()`.
- D: It would always be undefined. 

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.

</p>
</details>

---

###### 86. ข้อไหนคือวิธีที่เราสามารถเซ็ตให้ `hasName` มีค่าเป็น `true` กรณีที่คุณไม่สามารถส่งค่า `true` ใน argument ได้?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.

By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.

`new Boolean(true)` returns an object wrapper, not the boolean value itself.

`name.length` returns the length of the passed argument, not whether it's `true`.

</p>
</details>

---

###### <a name=20190805></a>87. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case we want to get the element which index is 0, the character `"I'`, which gets logged.

Note that this method is not supported in IE7 and below. In that case, use `.charAt()`

</p>
</details>

---

###### 88. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`.  `num1 + num2` returns `20`.

If you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error. 

</p>
</details>

---

###### 89. ผลลัพธ์ที่ได้คืออะไร?

```javascript
// module.js 
export default () => "Hello world"
export const name = "Lydia"

// index.js 
import * as data from "./module"

console.log(data)
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Global object of `module.js`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a variable called `name` which has the value of the string `"Lydia"`. 

The `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values. 

</p>
</details>

---

###### 90. ผลลัพธ์ที่ได้คืออะไร?

```javascript
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```javascript
function Person() {
  this.name = name
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`. 

</p>
</details>

---

###### 91. ผลลัพธ์ที่ได้คืออะไร?

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`. 

Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.

</p>
</details>

---

###### 92. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```

- A: `{ constructor: ...}` `{ constructor: ...}` 
- B: `{}` `{ constructor: ...}` 
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`. 

</p>
</details>

---

###### 93. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` และ `age` `21`
- B: `["name", "Lydia"]` และ `["age", 21]` 
- C: `["name", "age"]` และ `undefined`
- D: `Error`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]` 

Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray. 

The first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, และ `y` equal to `"Lydia"`, which get logged.
The second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, และ `y` equal to `21`, which get logged.

</p>
</details>

---

###### 94. ผลลัพธ์ที่ได้คืออะไร?

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

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error. 

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`
</p>
</details>

---

###### 95. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))
```

- A: `a is bigger`, `6` และ `b is bigger`, `3`
- B: `a is bigger`, `undefined` และ `b is bigger`, `undefined`
- C: `undefined` และ `undefined`
- D: `SyntaxError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc. 

Here, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:

```javascript
  return;
  a + b
```

This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!

</p>
</details>

---

###### 96. ผลลัพธ์ที่ได้คืออะไร?

```javascript
class Person {
  constructor() {
    this.name = "Lydia"
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah"
  }
}

const member = new Person()
console.log(member.name)
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.

</p>
</details>

---

###### 97. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` และ `["{Symbol('a')"]`
- B: `{}` และ `[]`
- C: `{ a: "b" }` และ `["a"]`
- D: `{Symbol('a'): 'b'}` และ `[]`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).

</p>
</details>

---

###### 98. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` และ `undefined`
- B: `[1, [2, 3, 4]]` และ `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` และ `{ name: "Lydia", age: 21 }`
- D: `Error` และ `{ name: "Lydia", age: 21 }`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:

 `[x, ...y] = [1, 2, 3, 4]`

 With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` และ `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.

 The `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:

```const getUser = user => ({ name: user.name, age: user.age })```

Since no value gets returned in this case, the function returns `undefined`.

</p>
</details>

---

###### 99. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The variable `name` holds the value of a string, which is not a function, thus cannot invoke. 

TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!

SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. 
ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.

</p>
</details>

---

###### 100. ผลลัพธ์ที่ได้คืออะไร?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `"Im'` gets returned.

`""` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.

</p>
</details>

---

###### 101. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.

`(null || false || "")`: all operands are falsy values. This means that the past operand, `""` gets returned. `two` is equal to `""`.

`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.

</p>
</details>

---

###### 102. <a name=20190927></a>ผลลัพธ์ที่ได้คืออะไร?

```javascript
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
```

- A: `I have resolved!`, `second` และ `I have resolved!`, `second`
- B: `second`, `I have resolved!` และ `second`, `I have resolved!`
- C: `I have resolved!`, `second` และ `second`, `I have resolved!`
- D: `second`, `I have resolved!` และ `I have resolved!`, `second`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._

We can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` และ `await`, they work a bit differently. 

In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty. 

With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.

This means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged. 

</p>
</details>

---

###### 103. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[object Object]2`
- D: `"12"`, `Lydia2`, `[object Object]2`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

The `+` operator is not only used for adding numerica lvalues, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string. 

The first one is `1`, which is a numerical value. `1 + 2` returns the number 3.

However, the second one is a string `"Lydia"`. `"Lydia"` is a string and `2` is a number: `2` gets coerced into a string. `"Lydia"` และ `"2"` get concatenated, whic hresults in the string `"Lydia2"`. 

`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.

</p>
</details>

---

###### 104. ผลลัพธ์ที่ได้คืออะไร?

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: C

We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (`<fulfilled>`). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`. 

</p>
</details>

---

###### 105. ผลลัพธ์ที่ได้คืออะไร?

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: B

Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references. 

We set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.

This means that both values have a reference to the same spot in memory, thus they are equal.

The code block in the `else` statement gets run, and `They are the same!` gets logged. 

</p>
</details>

---

###### 106. ผลลัพธ์ที่ได้คืออะไร?

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig["colors"]`). 

With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no proprety called `colorConfig`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object. 

</p>
</details>

---

###### 107. ผลลัพธ์ที่ได้คืออะไร?

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: A

Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true. 

</p>
</details>

---

###### 108. Which of these methods modifies the original array?

```javascript
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice` 
- D: `splice`

<details><summary><b>คำตอบ</b></summary>
<p>

#### คำตอบ: D

With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` และ `'😍'`) and added the ✨ emoji instead. 

`map`, `filter` และ `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.

</p>
</details>
