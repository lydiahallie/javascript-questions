# Những câu hỏi JavaScript trình độ Advanced

Hàng ngày tôi sẽ đăng các câu hỏi multichoice lên [Instagram](https://www.instagram.com/theavocoder) của tôi và tại đây nữa!

Các câu hỏi sẽ từ cơ bản đến nâng cao: kiểm tra trình độ JavaScript của bạn, làm mới một chút về kiến thức, hay chuẩn bị cho cuộc phỏng vấn lập trình! :muscle: :rocket: Tôi sẽ cập nhật các câu hỏi mới hàng tuần.

Các đáp án được đặt dưới mỗi câu hỏi, hãy click để tham khảo chúng. Chúc may mắn :heart:

Danh sách các ngôn ngữ khác:
* [English](./README.md)
* [中文版本](./README-zh_CN.md)
* [Versión en español](./README-ES.md)
* [日本語](./README-ja_JA.md)  
* [한국어](./README-ko_KR.md) 
* [Русский](./README_ru-RU.md)  
* [Western Balkan](./README-bs_BS.md)  
* [Deutsch](./README-de_DE.md)  
* [Tiếng Việt](./README-vi.md)
* [Українська мова](./README-ua_UA.md)  
* [Português Brasil](./README_pt_BR.md)  
* [العربية](./README_AR.md)
* [اللغة العامية - Egyptian Arabic](./README_ar-EG.md)

---

###### 1. Ouput là gì?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` và `undefined`
- B: `Lydia` và `ReferenceError`
- C: `ReferenceError` và `21`
- D: `undefined` và `ReferenceError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

Trong hàm chúng ta đã khai báo biến `name` với `var`. Điều đó có nghĩa là biến này sẽ được hoisted (một vùng nhớ sẽ được set up khi biến được khởi tạo) với giá trị mặc định là `undefined`, cho tới khi chúng ta thực sự định nghĩa biến đó. Trong hàm này, chúng ta chưa hề định nghĩa biến `name` tại dòng mà ta log ra, vậy nên giá trị mặc định của nó vẫn là `undefined`.

Các biến được khai báo với keyword `let` (và `const`) cũng được hoisted nhưng không giống như `var`, chúng không được <i>khởi tạo</i>. Chúng ta sẽ không thể truy cập chúng cho tới khi chúng ta khai báo (khởi tạo) chúng. Người ta gọi đó là "temporal dead zone". Khi ta truy cập đến một giá trị trước khi chúng được khai báo, JavaScript sẽ throws một `ReferenceError`.

</p>
</details>

---

###### 2. Output sẽ là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Bởi vì event queue trong JavaScript, hàm `setTimeout` callback sẽ được gọi _sau khi_ vòng lặp được thực hiện. Bời vì biến `i` trong vòng lặp đầu tiên được khai báo với từ khóa `var`, nên nó sẽ là một biến global. Trong suốt vòng lặp, mỗi lần chúng ta tăng giá trị của `i` lên `1`, sử dụng phép toán `++`. Cho tới khi callback `setTimeout` được gọi, giá trị của `i` đã trở thành `3` rồi.

Trong vòng lặp thứ 2, biến `i` được khai báo với từ khóa `let`, có nghĩa nó là một biến block-scoped (block là những gì được viết bên trong cặp ngoặc `{ }`). Tại mỗi vòng lặp, `i` sẽ là một biến mới có một giá trị mới, và giá trị đó có scope là bên trong vòng lặp mà thôi.

</p>
</details>

---

###### 3. Output sẽ là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Chú ý rằng giá trị `diameter` là một hàm thông thường, còn `perimeter` là một _arrow function_.

Không giống như hàm thông thường, với _arrow function_, biến`this` sẽ trỏ tới surrounding scope! Có nghĩa là khi chúng ta gọi `perimeter`, nó sẽ không được gọi bởi shape object, mà nó được gọi bởi object nào đó tại surrounding scope (ví dụ `window` chẳng hạn).

Khi không có giá trị `radius` tại object đó, nó sẽ trả về `undefined`.

</p>
</details>

---

###### 4. Ouput là gì?

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Phép toán cộng `+` sẽ convert một toán hạng sang dạng number. `true` là `1`, và `false` is `0`.

Chuỗi `'Lydia'` là một _truthy value_. Điều chúng ta thật sự đang hỏi chính là  "có phải một giá trị truthy là falsy?". Rõ ràng câu trả lời là `false` rồi.

</p>
</details>

---

###### 5. Cái nào đúng?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` không hợp lệ
- B: `mouse[bird.size]` không hợp lệ
- C: `mouse[bird["size"]]` không hợp lệ
- D: Tất cả đều hợp lệ

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Trong JavaScript thì tất cả keys của các object đều là string (ngoại trừ khi nó là một Symbol). Dù chúng ta không viết chúng như một string, về cơ bản chúng sẽ luôn được chuyển sang dạng string.

JavaScript thông dịch (hay unboxes) từng câu lệnh. Khi chúng ta sử dụng cặp dấu ngoặc `[]`, nó sẽ tìm kiếm dấu mở ngoặc đầu tiên `[`, và sẽ tiếp tục tìm kiếm cho tới khi gặp dấu đóng ngoặc `]`. Chỉ khi đó thì câu lệnh mới được thực thi.

`mouse[bird.size]`: Giá trị đầu tiên `bird.size` là `"small"`. `mouse["small"]` sẽ trả về `true`

Tuy nhiên, khi chúng ta sử dụng dấu chấm `.`, điều trên không còn đúng nữa. `mouse` không hề có key nào tên là `bird`, có nghĩa `mouse.bird` sẽ là `undefined`. Sau đó chúng ta gọi `size` sử dụng chấm `.`: `mouse.bird.size`. Vì  `mouse.bird` là `undefined`, lời gọi sẽ trở thành `undefined.size`. Đây là một lời gọi không hợp lệ, nó sẽ throw ra một lỗi kiểu như `Cannot read property "size" of undefined`.

</p>
</details>

---


###### 6. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Trong JavaScript, tất cả các object sẽ được _tham chiếu_ khi chúng được gán _bằng_wwwww  một giá trị khác.

Đầu tiên, giá trị `c` có giá trị là một object. Sau đó, chúng ta gán `d` tham chiếu tới object mà `c` trỏ tới.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Khi ta thay đổi giá trị của object, tất cả các biến tham chiếu cũng đều thay đổi giá trị theo.

</p>
</details>

---

###### 7. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

`new Number()` là một hàm built-in constructor. Mặc dù nó trông có vẻ giống như là một số, nhưng không phải: nó thực sự là một object với hàng tá những thông số khác nữa.

Khi ta sử dụng phép so sánh `==`, nó đơn thuần chỉ kiểm tra xem 2 biến có _giá trị_ giống nhau. Chúng đều có giá trị là `3`, vậy nên phép toán đầu trả về `true`.

Tuy nhiên khi sử dụng phép so sánh `===`, cả _giá trị_ và _kiểu_ đều phải giống nhau. Rõ ràng: `new Number()` không phải là một số, nó là một **object**. Cả 2 phép toán sau đều trả về `false.`

</p>
</details>

---

###### 8. Ouput là gì?

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

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

Hàm `colorChange` là một hàm static (hàm tĩnh). Hàm static được thiết kế để chỉ để tồn tại ở mức class, và không thể truyền cho bất cứ instance con nào. Vì `freddie` là một instance con, hàm static này sẽ không được truyền xuống, và do đó không thể gọi được tại `freddie` instance: nó sẽ throw ra một `TypeError`.

</p>
</details>

---

###### 9. Ouput là gì?

```javascript
let greeting;
greetign = {}; // Lỗi đánh máy!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Nó sẽ log ra object `greetign`, bởi vì chúng ta vừa khởi tạo một global object! Khi chúng ta đánh máy nhầm `greeting` thành `greetign`, trình thông dịch của JS sẽ coi nó như là `global.greetign = {}` (hay `window.greetign = {}` nếu chạy trên browser).

Để tránh điều này chúng ta có thể sử dụng `"use strict"`. Nó sẽ đảm bảo rẳng các biến đều phải được khai báo trước khi sử dụng.

</p>
</details>

---

###### 10. Điều gì sẽ xảy ra khi chúng ta làm thế này?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Hoàn toàn không có vấn đề gì!
- B: `SyntaxError`. Bạn không thể thêm thuộc tính theo cách này.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Điều này là có thể với Javascript, bởi vì `function` cũng chỉ là `object` mà thôi! (Mọi primitive types đều là object)

Function là một object đặc biệt. Phần code mà bạn viết không phải là function thực tế đâu. Function ở đây chính là một object với các thuộc tính. Và các thuộc tính này có thể gọi được.

</p>
</details>

---

###### 11. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Chúng ta không thể add thêm một thuộc tính cho một constructor giống như một object thông thường. Nếu bạn muốn add thêm thuộc tính nào đó cho tất cả các object một lần, bạn phải dùng `prototype`. Trong trường hợp này cũng vậy.

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

khi này `member.getFullName()` sẽ hoạt động. Tại sao nên làm vậy? Hãy thử thêm chúng trực tiếp vào constructor xem sao. Không phải mọi instance `Person` đều cần phương thức này. Nó sẽ dẫn tới việc lãng phí rất nhiều bộ nhớ, khi chúng đều phải lưu trữ thuộc tính này cho mỗi instance. Thay vì thế, nếu ta chỉ thêm chúng vào `prototype`, ta sẽ chỉ tốn bộ nhớ _một lần_ mà thôi, và mọi object khác đều có thể truy cập đến nó!

</p>
</details>

---

###### 12. Ouput là gì?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` và `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` và `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` và `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` và `ReferenceError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Với `sarah`, chúng ta khai báo mà không có từ khóa `new`. Khi sử dụng `new`, nó sẽ trỏ đến một object mới mà ta vừa tạo ra. Tuy nhiên nếu ta không dùng `new` thì nó sẽ trỏ tới **global object**!

Chúng ta cho rằng `this.firstName` là `"Sarah"` và `this.lastName` là `"Smith"`. Tuy nhiên sự thực là chúng ta đã định nghĩa `global.firstName = 'Sarah'` và `global.lastName = 'Smith'`. Bản thân biến `sarah` vẫn là `undefined`.

</p>
</details>

---

###### 13. 3 giai đoạn của event propagation là gì?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

Trong **capturing** phase, event được truyền từ các phần tử cha cho tới phần tử target. Sau khi tới được phần tử **target** thì **bubbling** sẽ bắt đầu.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Tất cả các object đều có prototypes.

- A: đúng
- B: sai

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Tất cả các object đều có prototypes, ngoại trừ **base object**. Object base có thể truy cập đến vài methods và properties, ví dụ như `.toString`. Đó là lý do tại sao chúng ta có thể sử dụng được các built-in methods trong JavaScript! Tất cả các phương thức đó đều có trong prototype. Mặc dù JavaScript không thể tìm thấy chúng trong object một cách trực tiếp, nó sẽ được truyền xuống thông qua prototype chain và xuống tới object, tại đây chúng ta có thể truy cập được nó.

</p>

</details>

---

###### 15. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

JavaScript là một ngôn ngữ **dynamically typed**: chúng ta không khai báo kiểu dữ liệu khi khai báo biến. Giá trị có thể bị tự động convert sang một kiểu dữ liệu khác mà ta không hề hay biết, điều này được gọi là _implicit type coercion_. **Coercion** có nghĩa là convert từ kiểu này sang kiểu khác.

Trong ví dụ này, JavaScript sẽ convert số `1` sang dạng string. Mỗi khi ta cộng một số (`1`) với một string (`'2'`), số sẽ luôn được xem như là một string. Kết quả sẽ là một phép nối chuỗi giống như `"Hello" + "World"`, vậy nên `"1" + "2"` sẽ trả về là `"12"`.

</p>
</details>

---

###### 16. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Khi phép toán `++` nằm ở **đằng sau** (**postfix**):

1. Trả về giá trị (trả về `0`)
2. Tăng giá trị lên (number giờ là `1`)

Khi phép toán `++` nằm ở **đằng trước** (**prefix**):

1. Tăng giá trị lên (number giờ là `2`)
2. Trả về giá trị (trả về `2`)

Vậy kết quả là `0 2 2`.

</p>
</details>

---

###### 17. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Nếu bạn dùng _tagged template literals_, giá trị của đối số đầu tiên luôn luôn là một mảng các string. Những đối số còn lại sẽ lấy giá trị từ biểu thức đưa vào!

</p>
</details>

---

###### 18. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Khi test sự bằng nhau, các kiểu dữ liệu cơ bản sẽ so sánh _giá trị_ của chúng, còn object thì so sánh _tham chiếu_. JavaScript sẽ kiểm tra xem các object đó có trỏ đến những vùng nhớ giống nhau hay không.

Hai object chúng ta đang so sánh không có được điều đó: object đối số tham chiếu đến một vùng nhớ khác với object chúng ta dùng để kiểm tra sự bằng nhau.

Đó là lý do tại sao cả `{ age: 18 } === { age: 18 }` và `{ age: 18 } == { age: 18 }` đều trả về `false`.

</p>
</details>

---

###### 19. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

_Spread operator_ (`...args`.) sẽ trả về một mảng các đối số. Mảng thực chất là một object, vậy nên `typeof args` sẽ trả về `"object"`.

</p>
</details>

---

###### 20. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Với `"use strict"`, chúng ta sẽ đảm bảo được rằng ta sẽ không bao giờ khai báo biến global một cách vô ý. Tại đây chúng ta chưa khai báo biến `age`, và khi dùng `"use strict"`, nó sẽ throw ra một _reference error_. Nếu như không dùng `"use strict"`, nó sẽ vẫn hoạt động, vì thuộc tính `age` sẽ được thêm vào global object.

</p>
</details>

---

###### 21. Giá trị của `sum` là gì?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

`eval` sẽ đánh giá đoạn code bên trong string. Nếu nó là một biểu thức, giống như trong trường hợp này, nó sẽ tính toán giá trị đó. Biểu thức là `10 * 10 + 5`, kết quả sẽ là `105`.

</p>
</details>

---

###### 22. Biến cool_secret sẽ truy cập được trong bao lâu?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Mãi mãi, dữ liệu sẽ không bao giờ mất.
- B: Khi user đóng tab lại.
- C: Khi user không chỉ là đóng tab, mà đóng browser lại.
- D: Khi user tắt máy tính đi.

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Dữ liệu được lưu trữ trong `sessionStorage` sẽ được xóa khi đóng _tab_.

Nếu chúng ta dùng `localStorage`, data sẽ được lưu trữ mãi mãi, trừ phi hàm `localStorage.clear()` được gọi.

</p>
</details>

---

###### 23. Ouput là gì?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Với từ khóa `var` bạn có thể khai báo bao nhiêu biến trùng tên tùy thích. Biến đó sẽ có giá trị là lần cuối khai báo.

Bạn không thể làm điều tương tự với `let` hay `const` vì chúng là _block-scoped_.

</p>
</details>

---

###### 24. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Tất cả các keys của object (ngoại trừ Symbols) về bản chất đều là string, dù chúng ta có viết chúng ra dạng string hay không. Nó là lý do tại sao `obj.hasOwnProperty('1')` cũng trả về `true`.

Tuy nhiên điều đó không đúng với `set`. Không hề có `'1'` trong set của chúng ta: `set.has('1')` trả về `false`. Có số `1` trong set, nên `set.has(1)` trả về `true`.

</p>
</details>

---

###### 25. Ouput là gì?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Nếu chúng ta có 2 keys giống nhau, thì chúng sẽ bị replace. Nó sẽ vẫn nằm ở vị trí đầu tiên chúng được khai báo, nhưng giá trị thì sẽ là giá trị lần cuối.

</p>
</details>

---

###### 26. Ngữ cảnh thực thi global của JavaScript tạo ra 2 thứ cho chúng ta: global object, và từ khóa "this".

- A: đúng
- B: sai
- C: còn tùy

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Ngữ cảnh thực thi cơ bản chính là ngữ cảnh global: nó là thứ mà chúng ta có thể truy cập được ở bất cứ đâu trong code.

</p>
</details>

---

###### 27. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Lệnh `continue` sẽ bỏ qua một vòng lặp nếu điều kiện của nó là `true`.

</p>
</details>

---

###### 28. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

`String` là một built-in constructor, có nghĩa là chúng ta có thể thêm các thuộc tính vào đó. Ta vừa thêm vào đó một thuộc tính. Kiểu String cơ bản sẽ được convert sang dạng object bởi hàm string prototype. Vì thế nên tất cả các string object đều có thể truy cập đến hàm `giveLydiaPizza` này!

</p>
</details>

---

###### 29. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Object keys sẽ tự động được convert sang dạng string. Chúng ta đang set một object như là một key cho object `a`, với giá trị là `123`.

Tuy nhiên khi ta string hóa một object, nó sẽ trở thành `"[Object object]"`. Nên tại đây phép gán này thực chất chính là `a["Object object"] = 123`. Phép gán tiếp theo cũng giống hệt vậy. `c` là một object khác mà chúng ta đang string hóa nó. Theo đó, `a["Object object"] = 456`.

Cuối cùng khi gọi `a[b]`, thực chất chính là gọi `a["Object object"]`. Giá trị của nó là `456`, nên trả về là `456`.

</p>
</details>

---

###### 30. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Chúng ta có một hàm `setTimeout` được gọi đầu tiên. Nên, nó sẽ được log ra cuối cùng.

Điều đó bởi vì trên browser, chúng ta không hề có runtime engine, đơn thuần chỉ có `WebAPI`. `WebAPI` cho chúng ta một hàm `setTimeout`, ta hãy ví dụ nó trên DOM.

Sau khi _callback_ được gửi tới WebAPI, bản thân hàm `setTimeout` (nhưng không phải callback nhé!) sẽ được đưa ra khỏi stack.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Giờ đây, `foo` được gọi, và `"First"` được log ra.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` được đưa ra khỏi stack, và `baz` được gọi. `"Third"` được log ra.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI không thể thêm thứ gì đó vào stack cho tới khi nó được sẵn sàng. Thay vào đó, nó đẩy callback function đến một nơi gọi là _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Đó chính là nơi mà **event loop** làm việc. Một **event loop** sẽ quan sát stack và task queue. Nếu stack trở nên rỗng, nó sẽ lấy giá trị đầu tiên trong queue để đưa tiếp vào stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` được gọi, `"Second"` được log ra, và nó được đưa ra khỏi stack.

</p>
</details>

---

###### 31. Giá trị của event.target là gì khi click button?

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
- D: Một mảng với toàn bộ các phần tử lồng nhau.

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Phần tử sâu nhất trong các phần tử lồng nhau sẽ là target của event. Bạn có thể ngăn việc đó lại bằng cách sử dụng `event.stopPropagation`

</p>
</details>

---

###### 32. Khi bạn click vào đoạn văn, giá trị của output sẽ là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Nếu ta click vào `p`, ta sẽ thấy hai log: `p` và `div`. Trong chuỗi event sẽ có 3 phases: capturing, target, và bubbling. Mặc định thì event handlers sẽ được thực hiện tại bubbling phase (trừ phi chúng ta khai báo `useCapture` là `true`). Chúng sẽ đi từ phần tử sâu nhất ra đến bên ngoài.

</p>
</details>

---

###### 33. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

Với cả hai, chúng ta có thể đưa vào object để sử dụng từ khóa `this`. Tuy nhiên, `.call` có nghĩa là _thực hiện ngay lập tức_!

`.bind.` trả về một bản _copy_ của function, với context kèm theo! Nó sẽ không thực hiện ngay lập tức.

</p>
</details>

---

###### 34. Ouput là gì?

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

`sayHi` function trả về giá trị của một _hàm gọi ngay lập tức_ (immediately invoked function - IIFE). Function này trả về `0`, kiểu dữ liệu `"number"`.

FYI: chỉ có 7 kiểu dữ liệu built-in: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` không phải là một kiểu, mà là objects, kiểu dữ liệu là `"object"`.

</p>
</details>

---

###### 35. Giá trị nào trong các giá trị dưới đây là falsy?

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
- D: Tất cả đều là falsy

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Chỉ có 6 giá trị _falsy_:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (chuỗi rỗng)
- `false`

Function constructors như `new Number` và `new Boolean` đều là _truthy_.

</p>
</details>

---

###### 36. Ouput là gì?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

`typeof 1` trả về `"number"`.
`typeof "number"` trả về `"string"`

</p>
</details>

---

###### 37. Ouput là gì?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Mỗi khi chúng ta set một giá trị cho một phần tử trong mảng mà vượt quá độ dài của mảng, JavaScript sẽ tạo ra những "empty slots". Chúng sẽ có giá trị là `undefined`, nhưng khi ghi ra thì chúng ta sẽ thấy dạng:

`[1, 2, 3, 7 x empty, 11]`

phụ thuộc vào nơi mà chúng ta chạy chúng (có thể khác nhau tùy môi trường browser, node, etc.)

</p>
</details>

---

###### 38. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

`catch` block nhận về giá trị `x`. Đây không phải là giá trị `x` mà ta khai báo với từ khóa `let` ở bên trên. Đây là biến `x` trong _block-scoped_.

Tiếp đó, chúng ta set giá trị của biến block-scoped này là `1`, và đồng thời cũng set giá trị cho biến `y`. Giờ đây chúng ta log ra giá trị của biến block-scoped variable `x`, bằng `1`.

Bên ngoài `catch` block, `x` vẫn là `undefined`, và `y` là `2`. Khi gọi `console.log(x)` bên ngoài `catch` block, nó sẽ trả về `undefined`, và `y` trả về `2`.

</p>
</details>

---

###### 39. Mọi thứ trong JavaScript đều là...

- A: primitives hoặc object
- B: function hoặc object
- C: hỏi mẹo khó đấy! chỉ _object_ thôi
- D: number hoặc object

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

JavaScript chỉ có primitive types và objects.

Primitive types là `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

Điểm khác nhau giữa primitive và object chính là primitives không có thuộc tính hay phương thức; tuy nhiên, chúng ta để ý rằng là `'foo'.toUpperCase()` sẽ trả về `'FOO'` mà không phải là một `TypeError`. Đó là bởi vì khi chúng ta truy cập các thuộc tính hay phương thức của một primitive như là string, JavaScript sẽ ngầm bao nó bởi một `wrapper class`, ví dụ `String`, và sau đó sẽ hủy việc bao đó ngay sau khi thực hiện xong. Mọi primitives ngoại trừ `null` và `undefine` đều hoạt động giống như vậy.

</p>
</details>

---

###### 40. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

`[1, 2]` là giá trị khởi tạo. Đây là giá trị chúng ta bắt đầu, và cũng là giá trị đầu tiên của `acc`. Tại vòng đầu tiên, `acc` là `[1,2]`, và `cur` là `[0, 1]`. Ta nối chúng lại tạo ra `[1, 2, 0, 1]`.

Tiếp tục, `[1, 2, 0, 1]` là `acc` và `[2, 3]` là `cur`. Ta nối chúng lại tạo ra `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

---

###### 41. Ouput là gì?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

`null` là falsy. `!null` trả về `true`. `!true` trả về `false`.

`""` là falsy. `!""` trả về `true`. `!true` trả về `false`.

`1` là truthy. `!1` trả về `fase`. `!false` trả về `true`.

</p>
</details>

---

###### 42. Hàm `setInterval` trả về cái gì?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: một id duy nhất
- B: số lượng milliseconds
- C: function truyền vào
- D: `undefined`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Nó trả về một id duy nhất. Id này dùng để clear interval sau này với hàm `clearInterval()`.

</p>
</details>

---

###### 43. Giá trị trả về là gì?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

String là một _iterable_. Thế nên _spread operator_ sẽ map toàn bộ các ký tự trong chuỗi lại thành một mảng.

</p>
</details>

---

###### 44. Ouput là gì?

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
- D: `0, 10 và 10, 20`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.

First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.

Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.

</p>
</details>

---

###### 45. Giá trị trả về là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.

</p>
</details>

---

###### 46. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

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

###### 47. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item`equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.

</p>
</details>

---

###### 48. Ouput là gì?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.

</p>
</details>

---

###### 49. What's the value of `num`?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.

</p>
</details>

---

###### 50. What's the output`?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.

However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.

</p>
</details>

---

###### 51. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).

The variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.

The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `"Lydia"`

</p>
</details>

---

###### 52. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.

With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.

</p>
</details>

---

###### 54. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

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

###### <a name=20190629></a>55. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.

When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.

</p>
</details>

---

###### 56. Ouput là gì?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

The `Set` object is a collection of _unique_ values: a value can only occur once in a set.

We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.

</p>
</details>

---

###### 58. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.

The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.

</p>
</details>

---

###### 59. Ouput là gì?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

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

###### 60. Ouput là gì?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.

Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.

</p>
</details>

---

###### 62. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an _array_, only the properties which names are included in the array will be added to the JSON string. In this case, only the properies with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.

If the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

</p>
</details>

---

###### 63. Ouput là gì?

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

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.

`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.

</p>
</details>