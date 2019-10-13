<div dir="rtl">

# لیست سوالات (پیشرفته) جاوا اسکریپت

من هر روز سوالات جاوا اسکریپت چندگزینه‌ای را بر روی [اینستاگرام](https://www.instagram.com/theavocoder) خودم و همینطور در اینجا قرار می‌دهم!

از مبتدی تا پیشرفته: تست کنید و ببینید که چقدر خوب جاوا اسکریپت را می‌دانید، کمی دانش خود را بروز کنید یا برای یک مصاحبه‌ی برنامه‌نویسی آماده شوید! :muscle: :rocket: من در همین هفته دوباره این متن را با سوالات جدید بروز رسانی می کنم. بروز رسانی اخیر: <a href=#20190714><b>23 تیر 98</b></a>

پاسخ‌ها در زیر سوالات و به شکل پنهان قرار دارند، با کلیک بر روی کلمه پاسخ می‌توانید آن‌ها را مشاهده نمایید. موفق باشید :heart:

لیست زبان‌های موجود:
* [English](../en-EN/README.md)
* [العربية](../ar-AR/README_AR.md)
* [اللغة العامية - Egyptian Arabic](../ar-EG/README_ar-EG.md)
* [Bosanski](../bs-BS/README-bs_BS.md)  
* [Deutsch](../de-DE/README.md)  
* [Español](../es-ES/README-ES.md)
* [Français](../fr-FR/README_fr-FR.md)
* [日本語](../ja-JA/README-ja_JA.md)  
* [한국어](../ko-KR/README-ko_KR.md) 
* [Português Brasil](../pt-BR/README_pt_BR.md)  
* [Русский](../ru-RU/README.md)
* [Українська мова](../ua-UA/README-ua_UA.md)  
* [Tiếng Việt](../vi-VI/README-vi.md)
* [中文版本](../zh-CN/README-zh_CN.md)
* [Türkçe](../tr-TR/README-tr_TR.md)
* [ไทย](../th-TH/README-th_TH.md)
* [فارسی - Persian](../fa-IR/README-fa_IR.md)


ترجمه شده توسط: [محمد جواد مسعودیان](https://github.com/2012mjm)

</div>

---
<div dir="rtl">

###### 1. خروجی چیست؟
</div>

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

<div dir="rtl">

- الف: `Lydia` و `undefined`
- ب: `Lydia` و `ReferenceError`
- ج: `ReferenceError` و `21`
- د: `undefined` و `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

</p>
</details>

---

###### 2. خروجی چیست؟
</div>

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

<div dir="rtl">

- الف: `0 1 2` و `0 1 2`
- ب: `0 1 2` و `3 3 3`
- ج: `3 3 3` و `0 1 2`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.

In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.

</p>
</details>

---

###### 3. خروجی چیست؟
</div>

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

<div dir="rtl">

- الف: `20` و `62.83185307179586`
- ب: `20` و `NaN`
- ج: `20` و `63`
- د: `NaN` و `63`


<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.

With arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).

There is no value `radius` on that object, which returns `undefined`.

</p>
</details>

---

###### 4. خروجی چیست؟
</div>

```javascript
+true;
!"Lydia";
```

<div dir="rtl">

- الف: `1` و `false`
- ب: `false` و `NaN`
- ج: `false` و `false`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.

The string `'Lydia'` is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns `false`.

</p>
</details>

---

###### 5. کدام یک از گزینه‌ها درست است؟
</div>
</div>

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

<div dir="rtl">

- الف: `mouse.bird.size` valid نیست.
- ب: `mouse[bird.size]` valid نیست.
- ج: `mouse[bird["size"]]` valid نیست.
- د: همه‌ی گزینه ها valid هستند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.

`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`

However, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property "size" of undefined`.

</p>
</details>

---

###### 6. خروجی چیست؟
</div>

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

<div dir="rtl">

- الف: `Hello`
- ب: `Hey!`
- ج: `undefined`
- د: `ReferenceError`
- هـ: `TypeError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

In JavaScript, all objects interact by _reference_ when setting them equal to each other.

First, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

When you change one object, you change all of them.

</p>
</details>

---

###### 7. خروجی چیست؟
</div>

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```


- الف: `true` `false` `true`
- ب: `false` `false` `true`
- ج: `true` `false` `false`
- د: `false` `true` `true`

<div dir="rtl">

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

When we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.

However, when we use the `===` operator, both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`

</p>
</details>

---

###### 8. خروجی چیست؟
</div>

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

<div dir="rtl">

- الف: `orange`
- ب: `purple`
- ج: `green`
- د: `TypeError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown.

</p>
</details>

---

###### 9. خروجی چیست؟
</div>

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

<div dir="rtl">

- الف: `{}`
- ب: `ReferenceError: greetign is not defined`
- ج: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as `global.greetign = {}` (or `window.greetign = {}` in a browser).

In order to avoid this, we can use `"use strict"`. This makes sure that you have declared a variable before setting it equal to anything.

</p>
</details>

---

###### 10. چه اتفاقی رخ می‌دهد وقتی این کار را انجام می‌دهیم؟
</div>

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

<div dir="rtl">

- الف: هیچ اتفاقی، همه چی کاملا درست است!
- ب: `SyntaxError`. You cannot add properties to a function this way.
- ج: `"Woof"` کنسول لاگ میشه.
- د: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

</p>
</details>

---

###### 11. خروجی چیست؟
</div>

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


- الف: `TypeError`
- ب: `SyntaxError`
- ج: `Lydia Hallie`
- د: `undefined` `undefined`

<div dir="rtl">

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

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

###### 12. خروجی چیست؟
</div>

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

- الف: `Person {firstName: "Lydia", lastName: "Hallie"}` و `undefined`
- ب: `Person {firstName: "Lydia", lastName: "Hallie"}` و `Person {firstName: "Sarah", lastName: "Smith"}`
- ج: `Person {firstName: "Lydia", lastName: "Hallie"}` و `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` و `ReferenceError`

<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

For `sarah`, we didn't use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don't add `new` it refers to the **global object**!

We said that `this.firstName` equals `"Sarah"` and `this.lastName` equals `"Smith"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.

</p>
</details>

---

###### 13. سه مرحله event propagation به ترتیب کدام گزینه است؟
</div>

- الف: Target > Capturing > Bubbling
- ب: Bubbling > Target > Capturing
- ج: Target > Bubbling > Capturing
- د: Capturing > Target > Bubbling


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. همه‌ی object ها prototypes دارند؟

- الف: بله
- ب: خیر

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

</p>
</details>

---

###### 15. خروجی چیست؟
</div>

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

<div dir="rtl">

- الف: `NaN`
- ب: `TypeError`
- ج: `"12"`
- د: `3`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.

In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what's happening here is `"1" + "2"` which returns `"12"`.

</p>
</details>

---

###### 16. خروجی چیست؟
</div>


```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```


- الف: A: `1` `1` `2`
- ب: B: `1` `2` `2`
- ج: C: `0` `2` `2`
- د: D: `0` `1` `2`

<div dir="rtl">

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

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

###### 17. خروجی چیست؟
</div>


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

- الف: `"Lydia"` `21` `["", " is ", " years old"]`
- ب: `["", " is ", " years old"]` `"Lydia"` `21`
- ج: `"Lydia"` `["", " is ", " years old"]` `21`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

</p>
</details>

---

###### 18. خروجی چیست؟
</div>


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


- الف: `You are an adult!`
- ب: `You are still an adult.`
- ج: `Hmm.. You don't have an age I guess`

<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.

</p>
</details>

---

###### 19. خروجی چیست؟
</div>


```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

<div dir="rtl">

- الف: `"number"`
- ب: `"array"`
- ج: `"object"`
- د: `"NaN"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

The rest parameter (`...args`.) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`

</p>
</details>

---

###### 20. خروجی چیست؟
</div>


```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

<div dir="rtl">

- الف: `21`
- ب: `undefined`
- ج: `ReferenceError`
- د: `TypeError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

With `"use strict"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn't use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.

</p>
</details>

---

###### 21. مقدار متغییر `sum` چیست؟
</div>

```javascript
const sum = eval("10*10+5");
```

<div dir="rtl">

- الف: `105`
- ب: `"105"`
- ج: `TypeError`
- د: `"5+10*10"`


<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.

</p>
</details>

---

###### 22. cool_secret تا چه زمانی در دسترس است؟
</div>

```javascript
sessionStorage.setItem("cool_secret", 123);
```

<div dir="rtl">

- الف: برای همیشه، داده ها از بین نمی‌روند.
- ب: وقتی که کاربر تب را ببندد
- ج: وقتی کاربر کلا مرورگر را ببندد، نه فقط تب.
- د: وقتی که کاربر کامپیوتر خود را خاموش کند.

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

The data stored in `sessionStorage` is removed after closing the _tab_.

If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.

</p>
</details>

---

###### 23. خروجی چیست؟
</div>


```javascript
var num = 8;
var num = 10;

console.log(num);
```

<div dir="rtl">

- الف: `8`
- ب: `10`
- ج: `SyntaxError`
- د: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with `let` or `const` since they're block-scoped.

</p>
</details>

---

###### 24. خروجی چیست؟
</div>


```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- الف: `false` `true` `false` `true`
- ب: `false` `true` `true` `true`
- ج: `true` `true` `false` `true`
- د: `true` `true` `true` `true`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</p>
</details>

---

###### 25. خروجی چیست؟
</div>


```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

<div dir="rtl">

- الف: `{ a: "one", b: "two" }`
- ب: `{ b: "two", a: "three" }`
- ج: `{ a: "three", b: "two" }`
- د: `SyntaxError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</p>
</details>

---

###### 26. جاوا اسکریپت global execution context برای شما دو چیز تولید میکنه: یکی global object و دیگری کلمه کلیدی "this".

- الف: درسته
- ب: غلط
- ج: بستگی دارد

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

The base execution context is the global execution context: it's what's accessible everywhere in your code.

</p>
</details>

---

###### 27. خروجی چیست؟
</div>


```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- الف: A: `1` `2`
- ب: B: `1` `2` `3`
- ج: C: `1` `2` `4`
- د: D: `1` `3` `4`

<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

The `continue` statement skips an iteration if a certain condition returns `true`.

</p>
</details>

---

###### 28. خروجی چیست؟
</div>


```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- الف: `"Just give Lydia pizza already!"`
- ب: `TypeError: not a function`
- ج: `SyntaxError`
- د: `undefined`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</p>
</details>

---

###### 29. خروجی چیست؟
</div>


```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

<div dir="rtl">

- الف: `123`
- ب: `456`
- ج: `undefined`
- د: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[Object object]"`. So what we are saying here, is that `a["Object object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["Object object"] = 456`.

Then, we log `a[b]`, which is actually `a["Object object"]`. We just set that to `456`, so it returns `456`.

</p>
</details>

---

###### 30. خروجی چیست؟
</div>


```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- الف: `First` `Second` `Third`
- ب: `First` `Third` `Second`
- ج: `Second` `First` `Third`
- د: `Second` `Third` `First`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

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

###### 31. مقدار event.target چه چیزی است وقتی روی دکمه کلیک می‌کنیم؟
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

<div dir="rtl">

- الف: Outer `div`
- ب: Inner `div`
- ج: `button`
- د: یک آرایه از همه‌ی المان‌های تودرتو

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`

</p>
</details>

---

###### 32. وقتی روی تگ پاراگراف کلیک می‌کنیم چه چیزی در خروچی لاگ میشه؟
</div>

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- الف: `p` `div`
- ب: `div` `p`
- ج: `p`
- د: `div`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. خروجی چیست؟
</div>


```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- الف: `undefined is 21` `Lydia is 21`
- ب: `function` `function`
- ج: `Lydia is 21` `Lydia is 21`
- د: `Lydia is 21` `function`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</p>
</details>

---

###### 34. خروجی چیست؟
</div>


```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

<div dir="rtl">

- الف: `"object"`
- ب: `"number"`
- ج: `"function"`
- د: `"undefined"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it's of type `"object"`.
</p>
</details>

---

###### 35. کدام یک از مقدارهای زیر falsy است؟ 
</div>

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```
<div dir="rtl">

- الف: `0`, `''`, `undefined`
- ب: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- ج: `0`, `''`, `new Boolean(false)`, `undefined`
- د: همه falsy هستند.


<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

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

###### 36. خروجی چیست؟
</div>


```javascript
console.log(typeof typeof 1);
```

<div dir="rtl">

- الف: `"number"`
- ب: `"string"`
- ج: `"object"`
- د: `"undefined"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. خروجی چیست؟
</div>


```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- الف: A: `[1, 2, 3, 7 x null, 11]`
- ب: B: `[1, 2, 3, 11]`
- ج: C: `[1, 2, 3, 7 x empty, 11]`
- د: D: `SyntaxError`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)

</p>
</details>

---

###### 38. خروجی چیست؟
</div>


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

- الف: A: `1` `undefined` `2`
- ب: B: `undefined` `undefined` `undefined`
- ج: C: `1` `1` `2`
- د: D: `1` `undefined` `undefined`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.

Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.

Outside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.

</p>
</details>

---

###### 39. همه چیز در جاوا اسکریپت ... یا ... است.
</div>

<div dir="rtl">

- الف: primitive یا object
- ب: function یا object
- ج: سوال انحرافی! فقط objects
- د: number یا object

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.

</p>
</details>

---

###### 40. خروجی چیست؟
</div>


```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- الف: A: `[0, 1, 2, 3, 1, 2]`
- ب: B: `[6, 1, 2]`
- ج: C: `[1, 2, 0, 1, 2, 3]`
- د: D: `[1, 2, 6]`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. خروجی چیست؟
</div>


```javascript
!!null;
!!"";
!!1;
```

- الف: `false` `true` `false`
- ب: `false` `false` `true`
- ج: `false` `true` `true`
- د: `true` `true` `false`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</p>
</details>

---

###### 42. خروجی متد `setInterval` در مرورگر چیست؟
</div>

```javascript
setInterval(() => console.log("Hi"), 1000);
```

<div dir="rtl">

- الف: یک id یکتا
- ب: مقدار مشخصی بر حسب میلی ثانیه
- ج: تابع اجرا شده
- د: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

</p>
</details>

---

###### 43. خروجی چیست؟
</div>

```javascript
[..."Lydia"];
```

- الف: `["L", "y", "d", "i", "a"]`
- ب: `["Lydia"]`
- ج: `[[], "Lydia"]`
- د: `[["L", "y", "d", "i", "a"]]`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

A string is an iterable. The spread operator maps every character of an iterable to one element.

</p>
</details>

---

###### 44. خروجی چیست؟
</div>


```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- الف: A: `[0, 10], [10, 20]`
- ب: D: `20, 20`
- ج: C: `10, 20`
- د: D: `0, 10 and 10, 20`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.

First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.

Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.

</p>
</details>

---

###### 45. خروچی چیست؟
</div>

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

<div dir="rtl">

- الف: `"one"`
- ب: `"two"`
- ج: اول `"two" بعد "one"`
- د: اول `"one" بعد "two"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.

</p>
</details>

---

###### 46. خروجی چیست؟
</div>


```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

<div dir="rtl">

- الف: `null`
- ب: `[null]`
- ج: `[{}]`
- د: `[{ name: "Lydia" }]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

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

###### 47. خروجی چیست؟
</div>


```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```

<div dir="rtl">

- الف: `{ name: "Lydia" }, { age: 21 }`
- ب: `"name", "age"`
- ج: `"Lydia", 21`
- د: `["name", "Lydia"], ["age", 21]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.

</p>
</details>

---

###### 48. خروجی چیست؟
</div>


```javascript
console.log(3 + 4 + "5");
```

<div dir="rtl">

- الف: `"345"`
- ب: `"75"`
- ج: `12`
- د: `"12"`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.

</p>
</details>

---

###### 49. مقدار متغییر `num` چیست؟
</div>

```javascript
const num = parseInt("7*6", 10);
```

<div dir="rtl">

- الف: `42`
- ب: `"42"`
- ج: `7`
- د: `NaN`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.

</p>
</details>

---

###### 50. خروجی چیست؟
</div>


```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- الف: A: `[]`
- ب: B: `[null, null, null]`
- ج: C: `[undefined, undefined, undefined]`
- د: D: `[ 3 x empty ]`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.

However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.

</p>
</details>

---

###### 51. خروجی چیست؟
</div>


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

- الف: `{ name: "Lydia" }, "1997"`
- ب: `{ name: "Sarah" }, "1998"`
- ج: `{ name: "Lydia" }, "1998"`
- د: `{ name: "Sarah" }, "1997"`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).

The variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.

The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `"Lydia"`

</p>
</details>

---

###### 52. خروجی چیست؟
</div>


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

<div dir="rtl">

- الف: `"It worked! Hello world!"`
- ب: `"Oh no an error: undefined`
- ج: `SyntaxError: can only throw Error objects`
- د: `"Oh no an error: Hello world!`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.

With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. خروجی چیست؟
</div>


```javascript
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

<div dir="rtl">

- الف: `"Lamborghini"`
- ب: `"Maserati"`
- ج: `ReferenceError`
- د: `TypeError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.

</p>
</details>

---

###### 54. خروجی چیست؟
</div>


```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- الف: `"undefined", "number"`
- ب: `"number", "number"`
- ج: `"object", "number"`
- د: `"number", "undefined"`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

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

###### 55. خروجی چیست؟
</div>


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

- الف: `"Woof I am Mara"`, `TypeError`
- ب: `"Woof I am Mara"`, `"Woof I am Mara"`
- ج: `"Woof I am Mara"`, `undefined`
- د: `TypeError`, `TypeError`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.

When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.

</p>
</details>

---

###### 56. خروجی چیست؟
</div>


```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

<div dir="rtl">

- الف: `[1, 1, 2, 3, 4]`
- ب: `[1, 2, 3, 4]`
- ج: `{1, 1, 2, 3, 4}`
- د: `{1, 2, 3, 4}`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

The `Set` object is a collection of _unique_ values: a value can only occur once in a set.

We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. خروجی چیست؟
</div>


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

<div dir="rtl">

- الف: `10`
- ب: `11`
- ج: `Error`
- د: `NaN`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.

</p>
</details>

---

###### 58. خروجی چیست؟
</div>


```javascript
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```

<div dir="rtl">

- الف: اولی `false` و بعدی `true`
- ب: `"Lydia"`, `21`
- ج: `true`, `true`
- د: `undefined`, `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.

The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.

</p>
</details>

---

###### 59. خروجی چیست؟
</div>


```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

<div dir="rtl">

- الف: `[[1, 2, 3, 4, 5]]`
- ب: `[1, 2, 3, 4, 5]`
- ج: `1`
- د: `[1]`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

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

###### 60. خروجی چیست؟
</div>


```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- الف: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- ب: `{ admin: true, name: "Lydia", age: 21 }`
- ج: `{ admin: true, user: ["Lydia", 21] }`
- د: `{ admin: true }`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. خروجی چیست؟
</div>


```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- الف: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- ب: `{ name: "Lydia", age: 21 }`, `["name"]`
- ج: `{ name: "Lydia"}`, `["name", "age"]`
- د: `{ name: "Lydia"}`, `["age"]`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.

Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.

</p>
</details>

---

###### 62. خروجی چیست؟
</div>


```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- الف: `"{"level":19, "health":90}"`
- ب: `"{"username": "lydiahallie"}"`
- ج: `"["level", "health"]"`
- د: `"{"username": "lydiahallie", "level":19, "health":90}"`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.

If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

</p>
</details>

---

###### 63. خروجی چیست؟
</div>


```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- الف: A: `10`, `10`
- ب: B: `10`, `11`
- ج: C: `11`, `11`
- د: D: `11`, `12`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.

`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.

</p>
</details>

---

###### 64. خروجی چیست؟
</div>


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

- الف: A: `20`, `40`, `80`, `160`
- ب: B: `20`, `40`, `20`, `40`
- ج: C: `20`, `20`, `20`, `40`
- د: D: `NaN`, `NaN`, `20`, `40`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.

The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.

The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`. 

The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`. 

</p>
</details>

---

###### 65. خروجی چیست؟
</div>


```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- الف: A: `1` `2` and `3` `3` and `6` `4`
- ب: B: `1` `2` and `2` `3` and `3` `4`
- ج: C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- د: D: `1` `2` and `undefined` `3` and `undefined` `4`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value. 

In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.

On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.  

If you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged. 

On the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.
</p>
</details>
  
---

###### 66. کدام constructor را با موفقیت می‌تواینم به کلاس `Dog` مان extend کنیم؟
</div>

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

<div dir="rtl">

- الف: 1
- ب: 2
- ج: 3
- د: 4

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.

With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`. 

The `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly  using constructor 2.
</p>
</details>

---

###### 67. خروجی چیست؟
</div>


```javascript
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

- الف: `running index.js`, `running sum.js`, `3`
- ب: `running sum.js`, `running index.js`, `3`
- ج: `running sum.js`, `3`, `running index.js`
- د: `running index.js`, `undefined`, `running sum.js`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.

This is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console. 

</p>
</details>

---

###### 68. خروجی چیست؟
</div>


```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- الف: `true`, `true`, `false`
- ب: `false`, `true`, `false`
- ج: `true`, `false`, `true`
- د: `true`, `true`, `true`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`. 

</p>
</details>

---

###### 69. خروجی چیست؟
</div>


```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- الف: `"Lydia Hallie"`, `"Lydia Hallie"`
- ب: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- ج: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- د: `"Lydia Hallie"`, `"Lyd"`, 


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Lydia Hallie"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.

If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.

</p>
</details>

---

###### <a name=20190714></a>70. خروجی چیست؟
</div>


```javascript
console.log("🥑" + "💻");
```

<div dir="rtl">

- الف: `"🥑💻"`
- ب: `257548`
- ج: یک رشته شامل code point های خودشان
- د: Error

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `"🥑"` with the string `"💻"`, resulting in `"🥑💻"`.

</p>
</details>

---

###### 71. چگونه می‌توانیم عبارتی که بعد از کنسول لاگ‌ها کامنت گذاری کرده‌ایم را در همان جا و در خروجی نمایش دهیم؟
</div>

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

- الف: `game.next("Yes").value` و `game.next().value`
- ب: `game.next.value("Yes")` و `game.next.value()`
- ج: `game.next().value` و `game.next("Yes").value`
- د: `game.next.value()` و `game.next.value("Yes")`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.

Every line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_

When we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statemnet returns `false`, and `JavaScript loves you back ❤️` gets logged.

</p>
</details>

---

###### 72. خروجی چیست؟
</div>

```javascript
console.log(String.raw`Hello\nworld`);
```

- الف: `Hello world!`
- ب: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- ج: `Hello\nworld`
- د: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

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

###### 73. خروجی چیست؟
</div>

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- الف: `"I made it!"`
- ب: `Promise {<resolved>: "I made it!"}`
- ج: `Promise {<pending>}`
- د: `undefined`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.

If we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:

`data.then(res => console.log(res))`

This would've logged `"I made it!"`

</p>
</details>

---

###### 74. خروجی چیست؟
</div>

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

<div dir="rtl">

- الف: `['apple', 'banana']`
- ب: `2`
- ج: `true`
- د: `undefined`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) and had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.

The `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.

</p>
</details>

---

###### 75. خروجی چیست؟
</div>

```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;
```

<div dir="rtl">

- الف: `{ x: 100, y: 20 }`
- ب: `{ x: 10, y: 20 }`
- ج: `{ x: 100 }`
- د: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ب

`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value os another object).

When we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.

Since `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.

</p>
</details>

---

###### 76. خروجی چیست؟
</div>

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

<div dir="rtl">

- الف: `"Lydia"`
- ب: `"myName"`
- ج: `undefined`
- د: `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه د

When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.

With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.

Since we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.

</p>
</details>

---

###### 77. آیا این یک pure function است؟
</div>

```javascript
function sum(a, b) {
  return a + b;
}
```

<div dir="rtl">

- الف: بله
- ب: خیر

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه الف

A pure function is a function that _always_ returns the same result, if the same arguments are passed.

The `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.

</p>
</details>

---

###### 78. خروجی چیست؟
</div>

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

- الف: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- ب: `Calculated! 20` `From cache! 20` `Calculated! 20`
- ج: `Calculated! 20` `From cache! 20` `From cache! 20`
- د: `Calculated! 20` `From cache! 20` `Error`


<div dir="rtl">
<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: گزینه ج

The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.

If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.

We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.

The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

</p>
</details>
