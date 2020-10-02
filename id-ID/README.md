<h1>Pertanyaan JavaScript</h1>

  ---

  <span>Saya post pertanyaan pilihan ganda ke [Instagram](https://www.instagram.com/theavocoder) **stories** saya, yang saya post juga di sini ! update terakhir: <a href=#20191224><b>December 24th</b></a>

  Mulai tingkat dasar ke mahir: tes seberapa paham kamu tentang javascript, segarkan sedikit pengetahuan kamu, atau bersiap-siap untuk coding interview kamu! :muscle: :rocket: Saya update repo ini secara berkala dengan pertanyaan baru. Saya masukkan jawaban dibagian yang **tersembunyi** di bawah pertanyaan, cukup klik pada bagian itu untuk menampilkannya. Pertanyaan ini hanya untuk bersenang-senang, Semoga berhasil :heart:</span>

Jangan sungkan untuk terhubung dengan saya! 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https:/www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="www.lydiahallie.dev">Blog</a>

  </div>

---

<details><summary><b> Lihat 17 Terjemahan yang tersedia 🇪🇸🇮🇹🇩🇪 🇫🇷🇷🇺🇨🇳🇵🇹</b></summary>
<p>

- [English](../en-EN/README.md)
- [العربية](../ar-AR/README_AR.md)
- [اللغة العامية - Egyptian Arabic](../ar-EG/README_ar-EG.md)
- [Bosanski](../bs-BS/README-bs_BS.md)
- [Deutsch](../de-DE/README.md)
- [Español](../es-ES/README-ES.md)
- [Français](../fr-FR/README_fr-FR.md)
- [日本語](../ja-JA/README-ja_JA.md)
- [한국어](../ko-KR/README-ko_KR.md)
- [Português Brasil](../pt-BR/README_pt_BR.md)
- [Русский](../ru-RU/README.md)
- [Українська мова](../ua-UA/README-ua_UA.md)
- [Tiếng Việt](../vi-VI/README-vi.md)
- [中文版本](../zh-CN/README-zh_CN.md)
- [Türkçe](../tr-TR/README-tr_TR.md)
- [ไทย](../th-TH/README-th_TH.md)
- [Indonesia](../id-ID/README.md)

</p>
</details>

---

###### 1. Apa yang akan tampil?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` dan `undefined`
- B: `Lydia` dan `ReferenceError`
- C: `ReferenceError` dan `21`
- D: `undefined` dan `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

Di dalam function, kita buat variabel `name` dan variabel declaration-nya menggunakan `var`. Artinya variable tersebut hoisted (dalam fase pembuatan ini menggunakan memory penyimpanan) dengan isi standar-nya `undefined`, hingga kita benar berada di baris code pembuatan variabel-nya. Kita belum membuat variabel tersebut saat kita memanggil variabel `name`, jadi isi dari varabel tersebut masih `undefined`

Variabel declaration yang menggunakan `let` (dan `const`) juga hoisted, tapi tidak seperti `var`, variabel declaration `let` dan `const` tidak ditentukan isi standar-nya. `let` dan `const` tidak bisa diakses sebelum di tentukan dulu isi-nya. Kejadian ini disebut "temporal dead zone". Saat kita mencoba memanggil variabel yang belum ditentukan isi-nya, Javascript mengeluarkan error `ReferenceError`.
</p>
</details>

---

###### 2. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Karena antrean peristiwa di JavaScript, fungsi callback `setTimeout` disebut _after_ loop telah dijalankan. Karena variabel `i` di loop pertama dideklarasikan menggunakan kata kunci` var`, nilai ini adalah global. Selama perulangan, kita menambah nilai ʻi` sebesar `1` setiap kali, menggunakan operator unary` ++ `. Pada saat fungsi callback `setTimeout` dipanggil,` i` sama dengan `3` di contoh pertama.

Pada perulangan kedua, variabel `i` dideklarasikan menggunakan kata kunci` let`: variabel yang dideklarasikan dengan kata kunci `let` (dan` const`) memiliki cakupan blok (blok adalah apa saja di antara `{}`). Selama setiap iterasi, `i` akan memiliki nilai baru, dan setiap nilai dicakup di dalam loop.
</p>
</details>

---

###### 3. Apa yang akan tampil?

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

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Perhatikan pada nilai 'diameter' adalah fungsi biasa, sedangkan nilai 'perimeter' yaitu fungsi panah.

Dengan fungsi panah, kata kunci 'this' merujuk ke cakupan sekitarnya saat ini, tidak seperti fungsi biasa. Ini berarti bahwa ketika kita memanggil 'perimeter' itu tidak mengacu pada objek bentuk, tetapi pada lingkup sekitarnya.

Tidak ada nilai 'radius' pada objek itu, yang mengembalikan 'tidak ditentukan'.

</p>
</details>

---

###### 4. Apa yang akan tampil?

```javascript
+true;
!'Lydia';
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.

The string `'Lydia'` is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns `false`.

</p>
</details>

---

###### 5. Which one is true?

```javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: `mouse.bird.size` is not valid
- B: `mouse[bird.size]` is not valid
- C: `mouse[bird["size"]]` is not valid
- D: All of them are valid

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.

`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`

However, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property "size" of undefined`.

</p>
</details>

---

###### 6. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

In JavaScript, all objects interact by _reference_ when setting them equal to each other.

First, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

When you change one object, you change all of them.

</p>
</details>

---

###### 7. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

When we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.

However, when we use the `===` operator, both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`

</p>
</details>

---

###### 8. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown.

</p>
</details>

---

###### 9. Apa yang akan tampil?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Ini mencatat objek, karena kita baru saja membuat objek kosong di objek global! Saat kita salah mengetik `greeting` sebagai` greetign`, interpreter JS sebenarnya melihat ini sebagai `global.greetign = {}` (atau `window.greetign = {}` di browser).

Untuk menghindari hal ini, kita bisa menggunakan `" use strict "`. Ini memastikan bahwa Anda telah mendeklarasikan variabel sebelum menetapkannya dengan apa pun.

</p>
</details>

---

###### 10. What happens when we do this?

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```

- A: Nothing, this is totally fine!
- B: `SyntaxError`. You cannot add properties to a function this way.
- C: `"Woof"` gets logged.
- D: `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Ini dimungkinkan dalam JavaScript, karena fungsi adalah objek! (Segala sesuatu selain tipe primitif adalah objek)

Fungsi adalah jenis objek khusus. Kode yang Anda tulis sendiri bukanlah fungsi sebenarnya. Fungsinya adalah objek dengan properti. Properti ini tidak dapat dipanggil.

</p>
</details>

---

###### 11. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

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

###### 12. Apa yang akan tampil?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

For `sarah`, we didn't use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don't add `new` it refers to the **global object**!

We said that `this.firstName` equals `"Sarah"` and `this.lastName` equals `"Smith"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.

</p>
</details>

---

###### 13. What are the three phases of event propagation?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. All object have prototypes.

- A: true
- B: false

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

</p>
</details>

---

###### 15. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.

In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what's happening here is `"1" + "2"` which returns `"12"`.

</p>
</details>

---

###### 16. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

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

###### 17. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

</p>
</details>

---

###### 18. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.

</p>
</details>

---

###### 19. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The rest parameter (`...args`.) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`

</p>
</details>

---

###### 20. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With `"use strict"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn't use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.

</p>
</details>

---

###### 21. What's value of `sum`?

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.

</p>
</details>

---

###### 22. How long is cool_secret accessible?

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: Forever, the data doesn't get lost.
- B: When the user closes the tab.
- C: When the user closes the entire browser, not only the tab.
- D: When the user shuts off their computer.

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

The data stored in `sessionStorage` is removed after closing the _tab_.

If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.

</p>
</details>

---

###### 23. Apa yang akan tampil?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with `let` or `const` since they're block-scoped.

</p>
</details>

---

###### 24. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</p>
</details>

---

###### 25. Apa yang akan tampil?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</p>
</details>

---

###### 26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

- A: true
- B: false
- C: it depends

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The base execution context is the global execution context: it's what's accessible everywhere in your code.

</p>
</details>

---

###### 27. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The `continue` statement skips an iteration if a certain condition returns `true`.

</p>
</details>

---

###### 28. Apa yang akan tampil?

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</p>
</details>

---

###### 29. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["object Object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["object Object"] = 456`.

Then, we log `a[b]`, which is actually `a["object Object"]`. We just set that to `456`, so it returns `456`.

</p>
</details>

---

###### 30. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</p>
</details>

---

###### 34. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol`, and `bigint`. `"function"` is not a type, since functions are objects, it's of type `"object"`.

</p>
</details>

---

###### 35. Which of these values are falsy?

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
- D: All of them are falsy

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Hanya ada enam nilai yang salah:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (string kosong)
- `false`

Konstruktor fungsi, seperti Number baru dan Boolean baru, benar.

</p>
</details>

---

###### 36. Apa yang akan tampil?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. Apa yang akan tampil?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Saat Anda menyetel nilai ke elemen dalam larik yang melebihi panjang larik, JavaScript membuat sesuatu yang disebut "slot kosong". Ini sebenarnya memiliki nilai `tidak terdefinisi`, tetapi Anda akan melihat sesuatu seperti:

`[1, 2, 3, 7 x empty, 11]`

tergantung di mana Anda menjalankannya (berbeda untuk setiap browser, node, dll.)

</p>
</details>

---

###### 38. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.

</p>
</details>

---

###### 40. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. Apa yang akan tampil?

```javascript
!!null;
!!'';
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</p>
</details>

---

###### 42. What does the `setInterval` method return in the browser?

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Itu adalah mengembalikan sebuah id unik. id unik dapat digunakan untuk menghapus interval dengan menggunakan fungsi clearInterval()

</p>
</details>

---

###### 43. What does this return?

```javascript
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Sebuah string adalah iterable. Operator memetakan setiap karakter dari sebuah iterable ke dalam satu elemen.

</p>
</details>

---

###### 44. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.

First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.

Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.

</p>
</details>

---

###### 45. What does this return?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.

</p>
</details>

---

###### 46. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

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

###### 47. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.

</p>
</details>

---

###### 48. Apa yang akan tampil?

```javascript
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.

</p>
</details>

---

###### 49. What's the value of `num`?

```javascript
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.

</p>
</details>

---

###### 50. What's the output`?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.

However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.

</p>
</details>

---

###### 51. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).

The variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.

The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `"Lydia"`

</p>
</details>

---

###### 52. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.

With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.

</p>
</details>

---

###### 54. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

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

###### 55. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.

When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.

</p>
</details>

---

###### 56. Apa yang akan tampil?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

The `Set` object is a collection of _unique_ values: a value can only occur once in a set.

We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.

</p>
</details>

---

###### 58. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.

The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.

</p>
</details>

---

###### 59. Apa yang akan tampil?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

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

###### 60. Apa yang akan tampil?

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.

Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.

</p>
</details>

---

###### 62. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.

If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

</p>
</details>

---

###### 63. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.

`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.

</p>
</details>

---

###### 64. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.

The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.

The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.

The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.

</p>
</details>

---

###### 65. Apa yang akan tampil?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.

In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.

On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.

If you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.

On the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.

</p>
</details>
---

###### 66. With which constructor can we successfully extend the `Dog` class?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.

With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.

The `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.

</p>
</details>

---

###### 67. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.

This is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.

</p>
</details>

---

###### 68. Apa yang akan tampil?

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.

</p>
</details>

---

###### 69. Apa yang akan tampil?

```javascript
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Lydia Hallie"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.

If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.

</p>
</details>

---

###### 70. Apa yang akan tampil?

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: A string containing their code points
- D: Error

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `"🥑"` with the string `"💻"`, resulting in `"🥑💻"`.

</p>
</details>

---

###### 71. How can we log the values that are commented out after the console.log statement?

```javascript
function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.

Every line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_

When we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.

</p>
</details>

---

###### 72. Apa yang akan tampil?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

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

###### 73. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.

If we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:

`data.then(res => console.log(res))`

This would've logged `"I made it!"`

</p>
</details>

---

###### 74. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) and had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.

The `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.

</p>
</details>

---

###### 75. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

When we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.

Since `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.

</p>
</details>

---

###### 76. Apa yang akan tampil?

```javascript
const { name: myName } = { name: 'Lydia' };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.

With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.

Since we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.

</p>
</details>

---

###### 77. Is this a pure function?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

A pure function is a function that _always_ returns the same result, if the same arguments are passed.

The `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.

</p>
</details>

---

###### 78. What is the output?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.

If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.

We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.

The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

</p>
</details>

---

###### 79. What is the output?

```javascript
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Where the keys are the enumerable properties. `0` `1` `2` `3` get logged.

With a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it's currently iterating over, `"☕"` `"💻"` `"🍷"` `"🍫"` get logged.

</p>
</details>

---

###### 80. What is the output?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.

The element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.

</p>
</details>

---

###### 81. What is the output?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.

In ES6, we can overwrite this default `undefined` value with default parameters. For example:

`function sayHi(name = "Lydia") { ... }`

In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`

</p>
</details>

---

###### 82. What is the output?

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

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"🥑"`.

With the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `"😎"`. When logging `this.status`, `"😎"` gets logged.

</p>
</details>

---

###### 83. What is the output?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.

Note that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.

Then, we set `city` equal to the string `"Amsterdam"`. This doesn't change the person object: there is no reference to that object.

When logging the `person` object, the unmodified object gets returned.

</p>
</details>

---

###### 84. What is the output?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Variables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.

</p>
</details>

---

###### 85. What kind of information would get logged?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));
```

- A: The result of the `fetch` method.
- B: The result of the second invocation of the `fetch` method.
- C: The result of the callback in the previous `.then()`.
- D: It would always be undefined.

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.

</p>
</details>

---

###### 86. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.

By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.

`new Boolean(true)` returns an object wrapper, not the boolean value itself.

`name.length` returns the length of the passed argument, not whether it's `true`.

</p>
</details>

---

###### 87. Apa yang akan tampil?

```javascript
console.log('I want pizza'[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case we want to get the element which index is 0, the character `"I'`, which gets logged.

Note that this method is not supported in IE7 and below. In that case, use `.charAt()`

</p>
</details>

---

###### 88. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.

If you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.

</p>
</details>

---

###### 89. Apa yang akan tampil?

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
- D: Global object of `module.js`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a variable called `name` which has the value of the string `"Lydia"`.

The `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.

</p>
</details>

---

###### 90. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```javascript
function Person() {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.

</p>
</details>

---

###### 91. Apa yang akan tampil?

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.

Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.

</p>
</details>

---

###### 92. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.

</p>
</details>

---

###### 93. Apa yang akan tampil?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]`
- C: `["name", "age"]` and `undefined`
- D: `Error`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`

Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.

The first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, and `y` equal to `"Lydia"`, which get logged.
The second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, and `y` equal to `21`, which get logged.

</p>
</details>

---

###### 94. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`

</p>
</details>

---

###### 95. Apa yang akan tampil?

```javascript
function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.

Here, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:

```javascript
return;
a + b;
```

This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!

</p>
</details>

---

###### 96. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.

</p>
</details>

---

###### 97. Apa yang akan tampil?

```javascript
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));
```

- A: `{Symbol('a'): 'b'}` and `["{Symbol('a')"]`
- B: `{}` and `[]`
- C: `{ a: "b" }` and `["a"]`
- D: `{Symbol('a'): 'b'}` and `[]`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).

</p>
</details>

---

###### 98. Apa yang akan tampil?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `undefined`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:

`[x, ...y] = [1, 2, 3, 4]`

With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.

The `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:

`const getUser = user => ({ name: user.name, age: user.age })`

Since no value gets returned in this case, the function returns `undefined`.

</p>
</details>

---

###### 99. Apa yang akan tampil?

```javascript
const name = 'Lydia';

console.log(name());
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The variable `name` holds the value of a string, which is not a function, thus cannot invoke.

TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!

SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`.
ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.

</p>
</details>

---

###### 100. What's the value of output?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `"Im'` gets returned.

`""` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.

</p>
</details>

---

###### 101. What's the value of output?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.

`(null || false || "")`: all operands are falsy values. This means that the past operand, `""` gets returned. `two` is equal to `""`.

`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.

</p>
</details>

---

###### 102. What's the value of output?

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

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._

We can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently.

In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.

With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved befoer moving to the next line.

This means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.

</p>
</details>

---

###### 103. What's the value of output?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.

The first one is `1`, which is a numerical value. `1 + 2` returns the number 3.

However, the second one is a string `"Lydia"`. `"Lydia"` is a string and `2` is a number: `2` gets coerced into a string. `"Lydia"` and `"2"` get concatenated, which results in the string `"Lydia2"`.

`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.

</p>
</details>

---

###### 104. What's its value?

```javascript
Promise.resolve(5);
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (`<fulfilled>`). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.

</p>
</details>

---

###### 105. What's its value?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.

We set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.

This means that both values have a reference to the same spot in memory, thus they are equal.

The code block in the `else` statement gets run, and `They are the same!` gets logged.

</p>
</details>

---

###### 106. What's its value?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig["colors"]`).

With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no proprety called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.

</p>
</details>

---

###### 107. What's its value?

```javascript
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.

</p>
</details>

---

###### 108. Which of these methods modifies the original array?

```javascript
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.

`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.

</p>
</details>

---

###### <a name=20191009></a>109. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types act by reference

In JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)

Then, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. What does this method do?

```javascript
JSON.parse();
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

With the `JSON.parse()` method, we can parse JSON string to a JavaScript value.

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

###### 111. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

If we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.

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

###### 112. Apa yang akan tampil?

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

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).

In `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

In `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.

```javascript
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</p>
</details>

---

###### 113. Apa yang akan tampil?

```javascript
console.log(`${(x => x)('I love')} to program`);
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.

</p>
</details>

---

###### 114. What will happen?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- A: The `setInterval` callback won't be invoked
- B: The `setInterval` callback gets invoked once
- C: The `setInterval` callback will still be called every second
- D: We never invoked `config.alert()`, config is `null`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since it's not garbage collected, the `setInterval` callback function will still get invoked every 1000ms (1s).

</p>
</details>

---

###### 115. Which method(s) will return the value `'Hello world!'`?

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
- C: 2 and 3
- D: All of them

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.

1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.
3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.

</p>
</details>

---

###### 116. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.

First, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: "Lydia", age: 22 }`.

Then, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: "Lydia", age: 22 }`.

</p>
</details>

---

###### 117. Which of the following options will return `6`?

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.

</p>
</details>

---

###### 118. Apa yang akan tampil?

```javascript
let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.

</p>
</details>

---

###### 119. Apa yang akan tampil?

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
- B: `Mara` `undefined` `Lydia Hallie` `undefined`
- C: `Mara` `null` `Lydia Hallie` `null`
- D: `null` `ReferenceError` `null` `ReferenceError`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.

`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.
`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.
`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.
`member.getLastName?.()`: `member` is not defined: `member.getLastName()` is nullish. The expression returns `undefined`.

</p>
</details>

---

###### 120. Apa yang akan tampil?

```javascript
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

We passed the condition `groceries.indexOf("banana")` to the if-statement. `groceries.indexOf("banana")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don't have to buy bananas!` gets logged.

</p>
</details>

---

###### 121. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.

</p>
</details>

---

###### 122. Apa yang akan tampil?

```javascript
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

`typeof name` returns `"string"`. The string `"string"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === "object"` and `false === "string"` both return`false`.

(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)

</p>
</details>

---

###### 123. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.

</p>
</details>

---

###### 124. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promsie, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.

</p>
</details>

---

###### 125. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.

</p>
</details>

---

###### 126. Apa yang akan tampil?

```javascript
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat({
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  }).format(speed)

  const formattedAmount = new Intl.NumberFormat({
    'en-US',
    { style: 'currency', currency: 'USD' }
  }).format(amount)

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))
```

- A: The driver drove 130 and has to pay 300
- B: The driver drove 130 mph and has to pay \$300.00
- C: The driver drove undefined and has to pay undefined
- D: The driver drove 130.00 and has to pay 300.00

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currentcy` in `USD` results in `$300.00`.

</p>
</details>

---

###### 127. Apa yang akan tampil?

```javascript
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value "💀" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the "💀" to it. When logging `spookyItems`, `["👻", "🎃", "🕸", "💀"]` gets logged.

</p>
</details>

---

###### 128. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.

With the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.

</p>
</details>

---

###### 129. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

Variables declared with the `const` keyword are not referencable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.

</p>
</details>

---

###### 130. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

In the `try` block, we're logging the awaited value of the `myPromise` variable: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.

</p>
</details>

---

###### 131. Apa yang akan tampil?

```javascript
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### <a name=20191224></a>132. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

Then, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.

We invoke the `counterTwo.increment()`, which sets the `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. Apa yang akan tampil?

```javascript
const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res));
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

First, we invoke `funcOne`. On the first line of `funcOne`, we call the `myPromise` promise, which is an _asynchronous_ operation. While the engine is busy completing the promise, it keeps on running the function `funcOne`. The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop here.)

Both the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line!` gets logged first, since this is not an asynchonous operation. This is the last line of `funcOne`, the promise resolved, and `Promise!` gets logged. However, since we're invoking `funcTwo()`, the call stack isn't empty, and the callback of the `setTimeout` function cannot get added to the callstack yet.

In `funcTwo` we're, first _awaiting_ the myPromise promise. With the `await` keyword, we pause the execution of the function until the promise has resolved (or rejected). Then, we log the awaited value of `res` (since the promise itself returns a promise). This logs `Promise!`.

The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API.

We get to the last line of `funcTwo`, which logs `Last line!` to the console. Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log("Timeout!")` from `funcOne`, and `() => console.log("Timeout!")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout!`, and gets popped off the stack. Then, the second callback logs `Timeout!`, and gets popped off the stack. This logs `Last line! Promise! Promise! Last line! Timeout! Timeout!`

</p>
</details>

---

###### 134. How can we invoke `sum` in `index.js` from `sum.js?`

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
- D: Default aren't imported with `*`, only named exports

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:

```javascript
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
console.log(info);
```

The following would get logged:

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

For the `sum` example, it means that the imported value `sum` looks like this:

```javascript
{ default: function sum(x) { return x + x } }
```

We can invoke this function, by calling `sum.default`

</p>
</details>

---

###### 135. Apa yang akan tampil?

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
- D: Nothing gets logged

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In tis case, we pass the `handler` object which contained to properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.

The first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.

First, we added a new property `name` to the proxy object (`person.name = "Lydia"`). `set` gets invoked, and logs `"Added a new property!"`.

Then, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.

</p>
</details>

---

###### 136. Which of the following will modify the `person` object?

```javascript
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

With `Object.seal` we can prevent new properies from being _added_, or existing properties to be _removed_.

However, you can still modify the value of existing properties.

</p>
</details>

---

###### 137. Which of the following will modify the `person` object?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.

However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.

</p>
</details>

---

###### 138. Which of the following will modify the `person` object?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.

However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.

</p>
</details>

---

###### 139. Apa yang akan tampil?

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` and `3` `6`
- B: `2` `NaN` and `3` `NaN`
- C: `2` `Error` and `3` `6`
- D: `2` `4` and `3` `Error`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.

Then, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.

</p>
</details>

---

###### 140. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!

</p>
</details>

---

###### 141. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.

If we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.

</p>
</details>

---

###### 142. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.

First, we invoke the `addHobby` function, and pass `"running"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `y`, `"running"` gets added to this empty array.

Then, we invoke the `addHobby` function, and pass `"dancing"` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.

Last, we invoke the `addHobby` function, and pass `"bdaking"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.

After pushing `dancing` and `baking`, the value of `person.hobbies` is `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 143. Apa yang akan tampil?

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
- D: Nothing, we didn't call any method

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Kita membuat variabel `pet` yang merupakan turunan dari class `Flamingo`. Saat kita membuat turunan, `constructor` pada `Flamingo` dipanggil. Pertama, `"I'm pink. 🌸"` ditampilkan, setelah itu kita memanggil `super()`. `super()` memanggil konstruktor class induk, `Bird`. Constructor pada `Bird` dipanggil, dan menampilkan `"I'm a bird. 🦢"`.

</p>
</details>

---

###### 144. Manakah dari pilihan di bawah ini yang salah?

```javascript
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 dan 2
- C: 3 dan 4
- D: 3

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: D

Deklarasi `const` pada dasarnya berarti tidak dapat _mengubah_ nilai dari variable tersebut, karena bersifat _read-only (tidak dapat diubah)_. Bagaimanapun, nilainya tidak mutlak. Seperti array pada variable `emojis` dimana nilainya bisa diubah, contohnya untuk menambah nilai array baru, menghilangkan, atau mengubah properti `length` dari array menjadi 0.

</p>
</details>

---

###### 145. Apa yang harus kita tambahkan ke objek `person` untuk mendapatkan `["Lydia Hallie", 21]` sebagai output dari `[...person]`?

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: Tidak ada, objek adalah iterable secara default
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { for (let x in this) yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Objek tidak dapat diulang secara default. Sebuah iterable adalah sebuah iterable jika protokol iterator ada. Kita dapat menambahkan ini secara manual dengan menambahkan simbol iterator
 `[Symbol.iterator]`, dimana harus mengembalikan objek generator, sebagai contoh dengan membuat fungsi generator `*[Symbol.iterator]() {}`. Fungsi generator ini harus menghasilkan `Object.values` dari objek `person` jika kita mau mengembalikan array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.

</p>
</details>

---

###### 146. Apa yang akan tampil?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Pernyataan `if` didalam perulangan `forEach` akan mengecek apakah nilai dari `num` benar atau salah. Sejak nilai pertama dari array `nums` adalah `0`, yang merupakan nilai salah, pernyataan `if` tidak akan dieksekusi. maka `count` yang mendapat increment hanya untuk 3 nomor yang lain di array `nums`, `1`, `2` dan `3`. sejak `count` mendapat increment `1` 3 kali, maka nilai dari `count` adalah `3`.

</p>
</details>

---

###### 147. Apa hasilnya?

```javascript
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Kami mengatur variabel `calc` sama dengan instance baru dari class `Calc`. Kemudian, kami membuat instance baru dari `Calc`, dan memanggil metode `increase` pada contoh ini. Karena properti count berada dalam konstruktor dari class `Calc`, properti count tidak dibagikan pada prototipe `Calc`. Ini berarti bahwa nilai hitungan belum diperbarui untuk contoh yang ditunjukkan kalk, hitung masih `0`.

</p>
</details>

---

###### 148. Apa hasilnya?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Fungsi `updateUser` memperbarui nilai properti `email` dan `password` pada pengguna, jika nilainya diteruskan ke fungsi, setelah itu fungsi mengembalikan objek `user`. Nilai yang dikembalikan dari fungsi `updateUser` adalah objek `user`, yang berarti bahwa nilai updatedUser adalah referensi ke objek `user` yang sama dengan yang ditunjuk oleh `user`. `updatedUser === user` sama dengan `true`.

</p>
</details>

---

###### 149. Apa hasilnya?
```javascript
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: C

Pertama, kita memanggil metode `slice` pada array fruit. Metode slice tidak mengubah array asli, tetapi mengembalikan nilai yang dipotongnya dari array: banana emoji.
Kemudian, kita memanggil metode `splice` pada array fruit. Metode splice memang mengubah array asli, yang berarti array fruit sekarang terdiri dari `['🍊', '🍎']`.
Akhirnya, kita memanggil metode `unshift` pada array `fruit`, yang memodifikasi array asli dengan menambahkan nilai yang diberikan, ‘🍇’ dalam hal ini, sebagai elemen pertama dalam array. Susunan fruit sekarang terdiri dari `['🍇', '🍊', '🍎']`.

</p>
</details>

---

###### 150. Apa hasilnya?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: B

Kunci objek diubah menjadi string.

Karena nilai `dog` adalah sebuah objek,  `animals[dog]`sebenarnya berarti kita membuat properti baru bernama `"object Object"`yang sama dengan objek baru. `animals["object Object"]` sekarang sama dengan `{ emoji: "🐶", name: "Mara"}`.

`cat` juga merupakan objek, yang berarti bahwa `animals[cat]` sebenarnya berarti bahwa kami menimpa nilai `animals[``"``object Object``"``]` dengan properti cat yang baru.

Mencatat `animals[dog]`, atau sebenarnya `animals["object Object"]` karena mengonversi objek `dog` menjadi string menghasilkan `"object Object"`, mengembalikan `{emoji: "🐈", nama: "Sara"}`.

</p>
</details>

---

###### 151. Apa hasilnya?

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

<details><summary><b>Jawaban</b></summary>
<p>

#### Jawaban: A

Fungsi `updateEmail` adalah fungsi panah, dan tidak terikat ke objek `user`. Artinya, kata kunci `this` tidak merujuk ke objek `user`, tetapi merujuk pada cakupan global dalam kasus ini. Nilai `email` dalam objek `user` tidak diperbarui. Saat memasukkan nilai `user.email`, nilai asli `my@email.com` akan dikembalikan.
</p>
</details>

---

