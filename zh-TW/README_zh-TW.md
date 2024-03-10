<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png"> 
  <h1>JavaScript 進階題目列表</h1>
---

<span>我會在我的 [Instagram](https://www.instagram.com/theavocoder) 上發布關於 JavaScript 的複選題，同時也會更新到這個 Repo 當中。更新日期： <a href=#20200612><b>2020 年 06 月 12 日</b></a>

從基礎到進階程度，測試你有多了解 JavaScript，不僅更新你的知識，更能幫助你的 coding 面試！
:muscle: :rocket: 我每週都會在這個 Repo 中更新新的題目。

答案在題目下方的摺疊區塊，點擊即可展開答案。祝你好運 :heart:</span>

歡迎和我聯繫！😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https:/www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="www.lydiahallie.dev">Blog</a>

  </div>

---

歡迎在項目中使用它們 😃 我 _真的_ 很感激這個 repo 的參考，我創造了問題和解釋（是的，我很傷心 lol），社區幫助我如此之多地維護和改進它！我很喜歡這個 repo。 💪🏼 謝謝你，祝你玩得開心！

---

###### 1. 將會輸出什麽內容？

```javascript
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}

sayHi()
```

- A: `Lydia` 和 `undefined`
- B: `Lydia` 和 `ReferenceError`
- C: `ReferenceError` 和 `21`
- D: `undefined` 和 `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

在函式內部，我們首先透過 `var` 關鍵字宣告了 `name` 變數。這表示變數被提升了（記憶體位置在建立時期就被設置好了），直到程式執行到定義變數的那行之前，預設值都是 `undefined`。因為當我們印出 `name` 變數時，還沒有執行到定義變數的那一行程式碼，因此變數的值保持為 `undefined`。

透過 `let` 和 `const` 關鍵字宣告的變數也會提升，但是和 `var` 不同，它們不會被<i>初始化</i>，在我們初始化之前是不能訪問它們的，這個行為被稱之為暫時性死區。當我們嘗試在初始化之前訪問它們時，JavaScript 將會抛出一個 `ReferenceError` 錯誤。

</p>
</details>

---

###### 2. 將會輸出什麽內容？

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}
```

- A: `0 1 2` 和 `0 1 2`
- B: `0 1 2` 和 `3 3 3`
- C: `3 3 3` 和 `0 1 2`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

由於 JavaScript 的事件佇列（Event Queue），`setTimeout` 的 `callback` 會在*遍歷結束後*才執行。因為在第一個迴圈中，遍歷 `i` 是透過 `var` 關鍵字宣告的，`var` 屬於 Function scope（需要用 `function() {}` 才能將值鎖在作用域裡面）
，所以 `for` 迴圈會造成變數外流，變成全域變數。在遍歷過程中，我們透過一元運算子 `++` 來遞增 `i` 的值。當 `setTimeout` 的 `callback` 執行的時候，`i` 的值等於 3。

在第二個迴圈中，遍歷 `i` 是透過 `let` 關鍵字宣告的：透過 `let` 和 `const` 關鍵字的變數擁有塊級作用域（指的是任何在 `{}` 中的内容）。在每次的遍歷過程中，`i` 都有一個新值，每次遍歷時 `i` 值的作用域都在迴圈内。

</p>
</details>

---

###### 3. 將會輸出什麽內容？

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>答案</b></summary>
<p>

#### 答案 B

注意 `diameter` 的值是一個一般的函式，但是 `perimeter` 的值是一個箭頭函式。

對於箭頭函式，`this` 關鍵字指向的是它當前周圍作用域，這個行為和一般函式不同。這表示當我們呼叫 `perimeter` 時，`this` 不是指向 `shape` 物件，而是它的周圍作用域（在範例中是 `window`）。

在 `window` 中沒有 `radius` 這個屬性，因此回傳 `undefined`。

</p>
</details>

---

###### 4. 將會輸出什麽內容？

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

一元運算子加號 `+`，嘗試將 boolean 布林值型別轉為 number 數字型別。`true` 轉為 number 數字型別的話為 `1`，`false` 爲 `0`。

字串型別 `'Lydia'` 是一個真值，我們實際上問的題目是：「這個真值的相反會是什麼？」，真值的相反，將得到 `false`。

</p>

</details>

---

###### 5. 哪一個是正確的描述？

```javascript
const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}
```

- A: `mouse.bird.size`是無效的
- B: `mouse[bird.size]`是無效的
- C: `mouse[bird["size"]]`是無效的
- D: 以上三個選項都是有效的

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

在 JavaScript 中，所有物件的 keys 都是字串型別（除非是 Symbol 物件）。儘管我們或許不會定義它們為字串，但它們在底層總會被轉換爲字串。

當我們使用中括號時（[]），JavaScript 會解譯語句。它首先看到中括號的第一個開始處 `[` 並繼續往下直到找到結束的中括號 `]`。只有這樣，它才能計算語句的值。

`mouse[bird.size]`：首先計算 `bird.size`，這會得到 `small`。`mouse["small"]` 得到 `true`。

使用點的語法的時候，上面這一切都不會發生。`mouse` 沒有 `bird` 這個 key，這就表示 `mouse.bird` 是 `undefined`。然後當我們使用點語法 `mouse.bird.size` 時，因為 `mouse.bird` 是 `undefined`，這也就變成了我們實際的語句是 `undefined.size`，而此行為是無效的，並會抛出一個錯誤 `Cannot read property "size" of undefined`。

</p>
</details>

---


###### 6. 將會輸出什麽內容？

```javascript
let c = { greeting: 'Hey!' }
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting)
```

- A: `Hello`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

在 JavaScript 中，當設定兩個物件彼此相等時，它們會經由*引用（reference）*進行互動。

首先，變數 `c` 的值是一個物件。接下来，我們將 `d` 分配了一個和 `c` 物件相同的引用。

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

因此當我們改變其中一個物件時，其實是改變了所有的物件的同一個引用的內容。

</p>
</details>

---

###### 7. 將會輸出什麽內容？

```javascript
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)
console.log(a === b)
console.log(b === c)
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`new Number()` 是一個内建的函式建構子。它雖然看起來像是個 number，但它實際上並非真正的 number：它有一堆額外的功能，而且它是一個物件。

當我們使用 `==` 運算子的時候，它只會檢查兩者是否擁有有相同的*值*。因為它們的值都是 `3`，因此回傳 `true`。

然後，當我們使用 `===` 運算子時，兩者的值以及*型別*都必須是相同的。`new Number()` 是一個物件型別而不是 number（一般型別），因此回傳 `false`。

</p>
</details>

---

###### 8. 將會輸出什麽內容？

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`colorChange` 是一個靜態方法。靜態方法被設計爲只能被創造它們的建構子使用（也就是 `Chameleon` 中的 `constructor`），並且不能傳遞給實例。因為 `freddie` 是一個實例，而靜態方法不能被實例使用，因此會抛出 `TypeError` 錯誤。

</p>
</details>

---

###### 9. 將會輸出什麽內容？

```javascript
let greeting
greetign = {} // 手殘打錯變數名稱！
console.log(greetign)
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

程式碼印出了一個物件，這是因為我們在全域物件上建立了一個空物件！當我們將 `greeting` 寫錯成 `greetign` 時，JS 解譯器實際上將它視爲 `global.greetign = {}`（或者在瀏覽器中視為 `window.greetign = {}`）。

為了避免這個狀況，我們可以使用 `"use strict"`，來確保當你宣告變數時，必須賦值。

</p>
</details>

---

###### 10. 當我們這麼做時，會發生什麼事？

```javascript
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'
```

- A: 正常運作！
- B: `SyntaxError`. 你不能透過這種方式在函式中新增屬性。
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

這在 JavaScript 中是可以的，因爲函式是物件！（除了基本型別之外其他都是物件）

函式是一個特殊的物件，函式是一個擁有屬性的物件，屬性也可被使用、呼叫的。

</p>
</details>

---

###### 11. 將會輸出什麽內容？

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

你可以為一般物件新增屬性，但建構函式（constructor）無法透過上面的方式來新增屬性。若你想一次性在所有實例上都新增某個屬性，要使用原型的方式。因此本例中，使用以下的方式：

```js
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
```

這樣一來，`member.getFullName()` 就能有效。這樣做有什麼好處？假設我們真的能如題將這個方法新增到建構函式本身，並不是每個 `Person` 實例都需要這個方法，但每個實例卻仍然擁有該属性，代表著這將佔據每個實例的記憶體，造成大量的記憶體空間因此浪費掉了。相反，如果我們只將它新增在原型中，那麼它只存在記憶體中的一個位置，而所有實例都可以使用它！

</p>
</details>

---

###### 12. 將會輸出什麽內容？

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

對 `sarah` 而言，我們沒有使用 `new` 關鍵字。當使用 `new` 時，`this` 引用我們建立的空物件。沒有使用 `new` 的時候，`this` 引用的是**全域物件**（global object）。

我們會說 `this.firstName` 等於 `"Sarah"`，而 `this.lastName` 等於 `"Smith"`。實際上我們做的是，定義了 `global.firstName = 'Sarah'` 和 `global.lastName = 'Smith'`。而 `sarah` 本身是 `undefined`，因為 `Person` 這個函式本身並沒有回傳值。

</p>
</details>

---

###### 13. 事件傳播的三個階段分別是？

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

先捕獲，再冒泡！在**捕獲**（capturing）階段中，事件從祖先元素向下傳播到目標元素。當事件到達**目標**（target）元素後，**冒泡**（bubbling）才開始。

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. 所有物件都有原型。

- A: true
- B: false

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

除了**基本物件**（base object，使用 `new` 關鍵字建立的物件）以外，所有物件都有原型。基本物件可以使用一些方法和属性，比如 `.toString`，這就是為什麼你可以使用內建的 JavaScript 方法！所有這類在原型上的方法都是可被使用的。雖然 JavaScript 不能直接在物件上找到這些方法，但 JavaScript 會沿著原型鍊找到它們，以便使用。

</p>
</details>

---

###### 15. 將會輸出什麽內容？

```javascript
function sum(a, b) {
  return a + b
}

sum(1, '2')
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

JavaScript 是一個**動態型別語言**：我們不指定變數的型別。值可以在你不知道的情况下自動轉換成另一種型別，稱為**隱含式轉型**（implicit type coercion）。**Coercion** 是指將一種型別轉換成另一種型別。

在此範例中，JavaScript 將數字型別 `1` 轉換為字串型別，以便函式能回傳一個有意義的值。數字型別（`1`）和字串型別（`'2'`）相加的時候，該數字會被視為字串。我們也能連接不同的字串，比如 `"Hello" + "World"`，而此例是 `"1" + "2"`，它將回傳 `"12"`。

</p>
</details>

###### 16. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

一元運算子 `++` 加在變數後方：

1. 回傳值 (這個值是 `0`)
2. 新增值 (變數 `number` 的值現在是 `1`)

一元運算子 `++` 加在變數前方：

1. 新增值 (變數 `number` 的值現在是 `2`)
2. 回傳值 (這個值是 `2`)

因此答案是 `0 2 2`.

</p>
</details>

---

###### 17. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

若你使用標籤樣板字面值（Tagged template literals），第一個參數的值永遠會是一個裝載字串的陣列，函式中的剩下的參數會取得表達式中傳進的變數（`person`、`age`）的值（`'Lydia'`、`21`）！

</p>
</details>

---

###### 18. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

驗證相等，一般型別只比較「值」，物件型別則是比較他們的「參考」。JavaScript 會確認不同物件的參考是否指向同一個記憶體位置。

題目中，我們比較的兩個物件擁有不同的記憶體位置：一個物件是作為參數傳遞的物件，它的記憶體位置與另一個拿來判斷是否相等的物件並不相同。

這就是 `{ age: 18 } === { age: 18 }` 與 `{ age: 18 } == { age: 18 }` 會回傳 `false` 的原因。

</p>
</details>

---

###### 19. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

其餘參數（`...args`）會蒐集傳進來剩下來未使用的參數，成為一個「陣列」。陣列的型別是「物件」，所以透過 `typeof args` 將會回傳該值的型別，將是 `"object"`。

</p>
</details>

---

###### 20. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`"use strict"` 可以避免妳意外地宣告全區域變數。使用 `"use strict"` 時，我們若沒有宣告 `age` 這個變數，就直接賦值的話，會拋出 `ReferenceError`，若沒有使用 `"use strict"`，屬性 `age` 就會新增到全域物件上（瀏覽器上的全域物件是 `window`）。

</p>
</details>

---

###### 21. `sum` 的值會是？

```javascript
const sum = eval('10*10+5');
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`eval` 會去執行傳進去的「字串」。如果該字串是一個表達式，如題目中的程式碼，那麼 `eval` 會自動執行該表達式 `10 * 10 + 5`，所以答案會是 `105`。

</p>
</details>

---

###### 22. cool_secret 這個資料儲存在瀏覽器，存活時間有多久？

```javascript
sessionStorage.setItem('cool_secret', 123);
```

- A: 永遠都可以，資料不會不見。
- B: 使用者關閉頁籤後，資料才會失效。
- C: 使用者要關閉一整個瀏覽器，資料才會失效，單純關閉資料不會造成資料消失。
- D: 使用者關閉電腦後。

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

儲存在 `sessionStorage` 的資料會在使用者「關閉頁籤」後消失。

若是使用 `localStorage` 來儲存資料的話，資料則會永遠存在瀏覽器端，直到觸發了 `localStorage.clear()` 才可以清除資料。

</p>
</details>

---

###### 23. 將會輸出什麽內容？

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

使用 `var` 關鍵字重複宣告的變數，該值會以最新賦予的值作為它的「值」。這件事情在 `let` or `const` 不會發生，因為這兩個關鍵字所宣告的變數作用域是塊級作用域（block-scoped）。

</p>
</details>

---

###### 24. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

除了 `Symbol` 以外的物件的 `key` 在底層都是字串類別，即使你建立該物件屬性時，並不是以字串來建立的，所以 `obj.hasOwnProperty('1')` 會回傳 `true`。不過 `set` 不是這樣的規則，在題目中的 `set` 並沒有字串 `'1'` 這個屬性名稱，所以 `set.has('1')` 會回傳 `false`，不過是有數字類別 `1` 的屬性值，`set.has(1)` 將會回傳 `true`。

</p>
</details>

---

###### 25. 將會輸出什麽內容？

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

若物件中的屬性有重複名稱者，第一個屬性會保持它的位置，但值會被最後一個重複屬性名稱的值給取代。

</p>
</details>

---

###### 26. JavaScript 在全域執行環境為你做了兩件事：全域物件和 this 關鍵字。

- A: true
- B: false
- C: it depends

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

基本执行上下文是全局执行上下文：它是代码中随处可访问的内容。
基底的執行環境是全域的：代表它在程式碼中，可被隨處使用。

</p>
</details>

---

###### 27. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

當 `if` 條件成立時會回傳 `true`，執行 `continue` 語句，代表忽略本次迭代（`console.log(i)`）。

</p>
</details>

---

###### 28. 將會輸出什麽內容？

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza())
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`String` 是內建的建構函式，我們可以向它新增属性。我只是在它的原型中加上一個方法。基本型別字串被自動轉換成字串物件，由字串原型函式生成。因此，所有 string（string 物件）都可以使用 `giveLydiaPizza` 方法！

</p>
</details>

---

###### 29. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

物件的 key 自動轉為字串型別。我們正嘗試將物件 `b` 的 key 設為物件 `a` 的 key，其值爲 `123`。

然而，當物件「字串化」，它會變成 `"[object Object]"`。所以這裡的意思是，`a["[object Object]"] = 123`。然後，我們又再做了一次一樣的事情，`c` 也是隱式的物件字串化，所以，`a["[object Object]"] = 456`。

最後，我們輸出 `a[b]`，也就是 `a["[object Object]"]`。之前剛賦值爲 `456`，將回傳 `456`。

</p>
</details>

---

###### 30. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

我們有一個 `setTimeout` 函式，首先呼叫它。然而，它的執行順序是最後執行的。

因為在瀏覽器中，我們除了有執行引擎，還有一個 `WebAPI`。`WebAPI` 提供了 `setTimeout` 函式，也包含其他的，例如 DOM。

在『callback』推送到 `WebAPI` 後，`setTimeout` 函式本身（不是回呼函式）將從堆疊（`stack`）中彈出。

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

現在，`foo` 被呼叫，印出 `"First"`。

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` 從堆疊中彈出，`baz` 被呼叫，印出 `"Third"`。

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI 不能隨時向堆疊内新增内容。相反，它會將回呼函式彈到名爲『`queue`』的地方。

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

這就是事件迴圈（`Event Loop`）的流程，了解**事件迴圈**堆疊與任務佇列的運作模式。如果堆疊是空的，它接受任務佇列上的第一个元素，推入堆疊中。

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` 被呼叫，印出 `"Second"`，然後它被彈出堆疊。

</p>
</details>

---

###### 31. 點擊按鈕時，event.target 指的是哪個元件？

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: 第一層的 `div`
- B: 第二層的 `div`
- C: `button` 本身
- D: 一個包含此巢狀元件的陣列。

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

產生事件 (event) 的元件即為此事件的 target，您可以透過 `event.stopPropagation` 來停止事件的冒泡 (bubbling)

</p>
</details>

---

###### 32. 點擊標籤 p(paragraph) 時，將會輸出什麼內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

輸出內容是 `p` 及 `div`。在事件傳播 (event propagation) 期間，分為三個階段：捕獲 (capturing)，目標 (target) 和冒泡 (bubbling)。
預設情況下，事件處理 (event handlers) 在冒泡階段執行（除非您將 useCapture 設置為 true)。它從巢狀元素的最深層向外層。

</p>
</details>

---

###### 33. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

通過 `.call` 及 `.bind`，我們可以將想要 `this` 關鍵字引用的物件傳遞給它。
然而，`.call` 會 _立即執行_! `.bind.` 則是會回傳一份函式 (function) 的 _複製_ 且不會立即執行。

</p>
</details>

---

###### 34. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`sayHi` 函數會回傳立即執行函式表示式 (IIFE）的回傳值。該函數回傳類型為 `"number"` 的 `0`。
FYI: JS 只有 7 種原生類型 (type) : `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol`, 和 `bigint`. `"function"` 不是一種類型而是物件。

</p>
</details>

---

###### 35. 下列項目哪些是 falsy？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

只有八個值是 falsy

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (空字串)
- `0`
- `-0`
- `0n` (BigInt(0))

函式建構式 (Function constructors) 如 `new Number` 和 `new Boolean` 都為 truthy。

</p>
</details>

---

###### 36. 將會輸出什麽內容？

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`typeof 1` 回傳 `"number"`
`typeof "number"` 回傳 `"string"`

</p>
</details>

---

###### 37. 將會輸出什麽內容？

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

當您設置的元素其位置大過陣列長度時，JavaScript 會建立一個叫做 "empty slots" 的物件，它們的值實際上為 `undefined`。

但您會看到類似的輸出內容 : `[1, 2, 3, 7 x empty, 11]`。實際執行環境會使其輸出內容略微不同 (瀏覽器，node... 等)

</p>
</details>

---


###### 38. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

程式中的 `catch` 區塊捕獲了一個例外情況且賦殖予 argument `x`。這個 `x` 是在區塊內產生的，其有效範圍只在區塊內 (block-scoped)，它跟 `console.log` 中所傳入的 `x` 並不是同一個。

接著我們將此區塊變數 `x` 設置為等於 `1`，並設置變數 `y` 的值，現在我們 console.log 區塊變數 `x`，無意外地它輸出 `1`。

而在 `catch` 區塊之外的 `x` 仍然是 `undefined` 且 `y` 是 `2`。因此當我們想在 `catch` 區塊之外使用 `console.log（x)` 時，它回傳 `undefined`，而 `y` 回傳 `2`。

</p>
</details>

---

###### 39. 關於 JavaScript 的敘述何者正確？

- A: JavaScript 的世界中不是 primitive 就是 object
- B: JavaScript 的世界中不是 function 就是 object
- C: JavaScript 的世界中只有 object
- D: JavaScript 的世界中不是 number 就是 object

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

JavaScript 只有 primitive types 和 objects.

而 Primitive types 包含 `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, 和 `symbol`.

Primitive 不同於 object 的是它沒有任何的屬性 (properties) 和方法 (methods); 沒有方法的情況下為何 `'foo'.toUpperCase()` (string) 是輸出 `'FOO'` 而不是 `TypeError` ?
這是因為當您嘗試訪問 primitive types (例如字串) 的屬性或方法時，JavaScript 會使用其中一個 wrapper classes 包裝該 primitive type。

例如使用了 `String` 包裝 primitive type `string`，接著在 expression 被 evaluates 後拋棄該包裝。所有 primitives 除了 `null` 和 `undefined` 外都是遵循此行為。

</p>
</details>

---

###### 40. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`[1, 2]` 為初始值，同時也是第一個 `acc`。在第一輪中，`acc` 是 `[1,2]` 且 `cur` 是 `[0, 1]`，兩陣列連接後的結果是 `[1, 2, 0, 1]`。

接著 `[1, 2, 0, 1]` 是 `acc` 且 `[2, 3]` 是 `cur`，兩陣列連接後的結果是 `[1, 2, 0, 1, 2, 3]`。

</p>
</details>

---

###### 41. 將會輸出什麽內容？

```javascript
!!null;
!!'';
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`null` 是 falsy. `!null` 回傳 `true`. `!true` 回傳 `false`.

`""` 是 falsy. `!""` 回傳 `true`. `!true` 回傳 `false`.

`1` 是 truthy. `!1` 回傳 `false`. `!false` 回傳 `true`.

</p>
</details>

---

###### 42. 在瀏覽器中 `setInterval` 方法會回傳什麼？

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: 一個唯一的 id
- B: 指定的毫秒數
- C: 被傳遞的函式
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

會回傳一個唯一的 id，並可用於 `clearInterval()` 以清除該 interval。

</p>
</details>

---

###### 43. 將會回傳何種結果？

```javascript
[...'Lydia'];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

字串 (string) 類別是可以被迭代的 (iterable)，展開運算子 (spread operator) 將可迭代的字元 (character) 映射 (map) 置一個元素 (element) 上。

</p>
</details>

---

###### 44. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

一般函式不能在被呼叫後中途停止。但是，generator 可以在中途 "停止" 且之後可以從停止的位置繼續執行。
每當一個 generator 函式遇到一個 `yield` 關鍵字時，該函式就會產生其後指定的值。請注意，在這種情況下，generator 函式不是 _return_ 值，而是 _yields_ 值。

首先，我們使用等於 "10" 的 "i" 初始化 generator 函式。我們使用 "next（)" 方法呼叫 generator 函式。第一次呼叫 generator 函式時， "i" 等於 "10"。
它遇到第一個 `yield` 關鍵字：它產生 `i` 的值。現在，generator 已 "暫停"，並且記錄了 "10"。

然後，我們使用 `next（）` 方法再次呼叫該函式。它將從先前停止的地方繼續，仍然是 "i" 等於 "10"。現在，它遇到下一個 `yield` 關鍵字，並產生 `i * 2`。 
"i" 等於 "10"，因此回傳 "10 * 2"，即 "20"。故結果為 10、20。

</p>
</details>

---

###### 45. 將會回傳何種結果？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

當我們向 Promise.race 方法傳遞多個 promise 時，它將 resolves / rejects _最先的_ promise。
在 setTimeout 方法中，我們傳遞了一個計時器：第一個 promise（firstPromise）為 500 毫秒，第二個 promise（secondPromise）為 100 毫秒。這意味著 "secondPromise" 將先用 "two" 的值進行 resolves。現在，`res` 擁有 'two' 的值且該值被 console.log。

</p>
</details>

---

###### 46. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

首先，我們宣告一個物件變數 `person` 包含 `name` 屬性以及值 `Lydia`。

<img src="https://i.imgur.com/TML1MbS.png" width="200">

接著我們宣告另一個陣列變數 `members`。我們將該陣列的第一個元素設置等於 `person` 變數的值。
當我們將它們設置為相等時，物件透過 _reference_ 互相關聯。當我們將一個物件變數的 reference 賦值給另一個變數時，實際上我們是 _複製_ 該 reference (它們沒有 _相同_ 的 reference !)  

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

接著我們將變數 `person` 賦予 `null`。

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

我們僅修改變數 `person` 的值，並無修改陣列中的第一個元素。
基於該元素有份不同的 reference (一份複製的)，故 `members` 陣列中第一位元素仍保有對物件的指向，於是當我們 console.log `members` 陣列時，輸出內容為物件。

</p>
</details>

---

###### 47. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

通過 `for-in` 循環，我們可以遍歷物件的鍵，在這個題目中的鍵是 `name` 和 `age`。在內部，物件鍵是字串 (strings)（如果它們不是 Symbol）。
在每次循環中，我們將 `item` 的值設置為等於其迭代的當前鍵。第一輪循環中，`item` 等於 `name`，並輸出內容。接著，`item` 等於 `age`，並輸出內容。

</p>
</details>

---

###### 48. 將會輸出什麽內容？

```javascript
console.log(3 + 4 + '5');
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

運算子關聯性是編譯器計算表達式的順序，從左到右或從右到左。僅適用於所有運算子具有 _相同_ 優先級時，才會發生這種情況。
在這裡我們只有一種類型的運算子：+。而其關聯性是從左到右。

首先計算 `3 + 4`。結果為數字 7。

由於強制 (coercion) ，`7 +'5'` 會導致結果為 `75`。JavaScript 將數字 `7` 轉換型態成字串，請參閱問題 15。我們可以使用 `+` 運算子將兩個字串連接起來。`7` + `5` 產生 `75`。

</p>
</details>

---

###### 49. `num` 的值會是什麼？

```javascript
const num = parseInt('7*6', 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

僅會回傳字串中的第一個數字。基於 _radix_ (第二個參數，用於指定我們要將其解析為哪種類型的數字：以 10 為基數，十六進制，八進制，二進制等），`parseInt` 檢查字串中的字元是否有效。
一旦遇到基數中無效數字的字元，它將停止解析並忽略以下字元。

`*` 不是合法的 `number`，所以程式僅將字串形態的 `"7"` 轉換至 decimal 形態的 `7`，故 `num` 現在的值為 `7`。

</p>
</details>

---

###### 50. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

當對陣列做映射 (map) 時，`num` 的值等同於它當前正在循環的元素。在這種情況中元素均為 numbers，所以條件式 `typeof num === "number"` 會回傳 `true` 的值。
map 函式會建立一個新陣列，並插入該函式回傳的值。

但是我們不回傳任何值。當我們不從函式回傳值時，函式將回傳 `undefined`。由於陣列中的每個元素都會呼叫該函式，因此對於每個元素，我們都回傳 `undefined`。

</p>
</details>

---

###### 51. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

參數是透過 _value_ 傳遞，除非它們是一個物件 (object)，物件則由透過 _reference_ 傳遞。`birthYear` 是透過值傳遞的，因為它是字串不是物件。當我們按值傳遞參數時，將建立該值的 _copy_ (請參閱問題 46）。

變數 `birthYear` 具有對值 `1997` 的 reference。參數 `year` 也有對值 `1997` 的 reference，但與變數 `birthYear` 所 reference 的不同。
因此當我們通過將 `year` 設置為等於 `1998` 來更新 `year` 的值時，我們僅更新了 `year` 的值。`birthYear` 仍然等於 `"1997"`。

`person` 的值是一個物件。參數 `member` 具有（複製的）reference 指向 _相同_ 物件。
因此當我們修改物件 `member` 的屬性時，`person` 的值也會被修改，因為它們都 reference 了相同的物件。`person` 的 `name` 屬性現在等於值 `"Lydia"`。

</p>
</details>

---

###### 52. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

使用 `throw` 語句，我們可以建立自定義的錯誤。使用此語句，您可以觸發例外 (exception)。例外可以是 `<b>string</ b>`，`<b>number</ b>`，`<b>boolean</ b>` 或 `<b>object</ b>`。 
在這種情況下，我們的例外是字串 `Hello world`。

通過 `catch` 語句，我們可以指定如果在 `try` 的程式區塊中拋出例外時該怎麼辦。例如拋出例外：字串 `'Hello world'`。 
現在，`e` 等於我們記錄的字串。因此輸出結果將會是 `'Oh an error: Hello world'`。

</p>
</details>

---

###### 53. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

當您回傳屬性 (property) 時，該屬性的值等於 _returned_ 的值，而不是在函式建構式 (constructor function) 中設置的值。我們回傳字串 `Maserati`，因此 `myCar.make` 等於 `Maserati`。

</p>
</details>

---

###### 54. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`let x = y = 10;` 實際上是 shorthand for:

```javascript
y = 10;
let x = y;
```

當我們將 `y `設置為等於 `10` 時，我們實際上將屬性 `y` 加入到 global object 中（瀏覽器中的 `window`，Node 中的 `global`）。現在，瀏覽器中 `window.y` 現在等於 `10`。

接著我們宣告一個變數 `x`，並將其值賦予為 `y`，即 `10`。用` let` 關鍵字宣告的變數是 _block scoped_，它們僅在宣告它們的區塊中定義；另外此案例的函示是，立即函示表達式（IIFE）。
當我們使用 `typeof` 運算子時，`x` 並未被定義：我們試圖在宣告它的區塊外訪問 `x`。這將獲得 `x` 並未被定義的結果。未分配值或未宣告的值的類型為 `"undefined"`。`console.log(typeof x)` 回傳 `"undefined"`。

但是，當將 `y` 設置為 `10` 時，我們建立了 global variable `y`。在我們程式中的任何位置均可訪問此值。
`y` 被定義，並且為類型 `number` 的值。因此 `console.log（typeof y` 回傳 `"number"`。

</p>
</details>

---

###### 55. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

透過 `delete` 關鍵字，我們可以從物件中刪除它的屬性。同樣適用在原型 (prototype)。通過刪除原型上的屬性，該屬性在原型鏈中將不可再被使用。
在這個案例中，`bark` 函式在 `delete Dog.prototype.bark` 之後的原型上不再可用，但是我們仍然嘗試訪問它。

因此當我們嘗試呼叫不是函式的東西時，程式將拋出 `TypeError`。在這個案例中，將為 `TypeError: pet.bark is not a function`，因為 `pet.bark` 是 `undefined`。

</p>
</details>

---

###### 56. 將會輸出什麽內容？

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`Set` 物件是 _唯一_ 值的集合：任何存在於 `Set` 的值均為唯一的，不會存在相同的值 (重複的值將會由後出現的覆蓋已出現的)。

陣列 `[1, 1, 2, 3, 4]` 中有重複的值 `1`，因此結果會是 `{1, 2, 3, 4}`。

</p>
</details>

---

###### 57. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

被引用 (imported) 的模組 (module) 是 _唯讀_ 的：您無法修改被引用模組中項目，只有輸出 (export) 該項目的模組可以更改它的值。

因此當我們嘗試增加 `myCounter` 的值時，他將拋出錯誤：`myCounter` is read-only and cannot be modified。

</p>
</details>

---

###### 58. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`delete` 運算子會回傳一個布林值：成功刪除物件的情況下會回傳 `true`，反之則為 `false`。但是經由 `var`，`const` 或是 `let` 關鍵字所宣告的變數是無法使用 `delete` 運算子刪除的。

此處，`name` 無法成功刪除且會回傳 `false`，因為它是經由 `const` 所宣告。當我們宣告 `age` 的值為 `21` 時，實際上我們做的是將一個名為 `age` 的屬性為添加到了全球物件中，您可以透過 `delete` 來刪除物件中的屬性，因此您也能刪除全球物件中的屬性，故將回傳 `true`。

</p>
</details>

---

###### 59. 將會輸出什麽內容？

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

我們可以通過解構 (destructuring) 從陣列或物件的屬性中獲得值。例如：

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

a 的值現在為 `1` 且 b 的值現在為`2`。我們針對此問題所做的動作為：

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

這代表著 `y` 的值等同於陣列中第一個元素的值，即為 `1`。因此我們執行 `console.log(y)` 時， `1` 將被輸出。

</p>
</details>

---

###### 60. 將會輸出什麽內容？

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

使用 spread 運算子可以合併物件 (`...`)。它使您可以建立一個物件的鍵/值的複製，並將其添加到另一物件中。
在這裡我們建立了 `user` 物件的複製並將其添加至 `admin` 物件。因此將輸出 `{ admin: true, name: "Lydia", age: 21 }`。

</p>
</details>

---

###### 61. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

透過 `defineProperty`，我們可以對物件增加新的屬性或是修改已經存在的屬性。當我們使用 `defineProperty` 增加物件的屬性時，它們被預設為 _不可 enumerable_。
 `Object.keys` 方法僅回傳物件中所有 _可 enumerable_ 的屬性名稱，這個案例中只有 `"name"`。

預設下，使用 `defineProperty `方法增加的屬性是不可變的。但您可以覆蓋這個行為透過 `writable`，`configurable` 及 `enumerable` 屬性。
於是，`defineProperty` 方法可以使您對要增加到物件的屬性進行更多的控制。

</p>
</details>

---

###### 62. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`JSON.stringify` 的第二個參數是 _替換者 (replacer)_，替換者可以是函式，也可以是陣列，並允許您控制值要如何獲怎麼串化 (stringified)。

如果替換者是 _陣列_，僅將陣列中包含的屬性名稱加到 JSON 字串中。
此案例中，僅有 `"level"` and `"health"` 被包含，`"username"` 沒有被包含在內，因此 `data` 的值將為 `"{"level":19, "health":90}"`。

如果替換者是 _函式_，在要字串化的每個物件屬性上將會呼叫此函式。從此函式回傳的值將是加到 JSON 字串中的屬性的值。如果值為 `undefined`，則此屬性從 JSON 字串中排除。

</p>
</details>

---

###### 63. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

單元運算子 `++` 首先 _回傳_ 操作數的值，然後 _遞增_ 操作數的值。`num1` 的值是 `10`，因為 `increaseNumber`  函式首先回傳 `num` 的值，即 `10`，之後才遞增 `num` 的值。

`num2` 是 `10`，因為我們將 `num1` 傳遞給了 `increasePassedNumber`。`number` 等於 `10`（`num1` 的值。同樣，單元運算子 `++` 首先 _回傳_ 操作數的值，然後 _遞增_ 操作數的值。
`number` 的值是 `10`，因此 `num2` 等於 `10`。

</p>
</details>

---

###### 64. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

在 ES6 中，我們可以使用預設值初始化參數。如果沒有其他值傳遞給該函式或是傳入的參數是 `undefined`，則該參數的值為預設值。此案例中，我們將 `value` 物件的屬性擴展到一個新物件中，因此 `x` 具有預設值 `{number：10}`。

預設值是在 _呼叫_ 時被 evaluated。每次呼叫該函式時，都會建立一個 _新_ 物件。我們在沒有傳遞值的情況下呼叫了 `multiply` 函式兩次：`x` 的預設值是 `{{number：10}`。因此，我們輸出該數字的相乘值，即 `20`。

第三次呼叫時，我們確實傳遞了一個參數：名為 `value` 的物件。`*=` 運算子實際上是 `x.number = x.number * 2` 的簡寫：因此我們修改了 `x.number` 的值，並記錄相乘後的值 `20`。

第四次，我們再次傳遞名為 `value` 的物件。`x.number` 先前已修改為 `20`，因此 `x.number * = 2` 為 `40`。

</p>
</details>

---

###### 65. 將會輸出什麽內容？

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`reduce` 方法接收的第一個參數是 _累加器 (accumulator)_，在這種情況下是 `x`。第二個參數是 _current value_ `y`。使用 `reduce` 方法，我們對陣列中的每個元素執行一個 callback 函式，並在最終回一個值。

在此示例中，我們不回傳任何值，僅記錄了累加器的值和當前值。

累加器的值等於 callback 函式先前回傳的值。如果沒有 `initialValue` 參數傳遞給 `reduce` 方法，則累加器的初始值將會等於第一個元素。

在第一個呼叫中，累加器（`x`）為`1`，當前值（`y`）為`2`。我們不從 callback 函式回傳，而是輸出累加器和當前值：`1` 和 `2`。

如果您不從 callback 函式回傳值，則它將回傳 `undefined`。在下一次呼叫時，累加器為 `undefined`，當前值為 `3`。於是 `undefined` 和 `3` 被輸出。

在第四次呼叫中，我們再次不從 callback 函式回傳。累加器再次為 `undefined`，當前值為 `4`。於是 `undefined` 和 `4` 被輸出。

</p>
</details>
  
---

###### 66. 使用哪個建構式可以成功繼承 Dog 類別？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

在子類別中，在呼叫 `super` 前不能存取 `this` 關鍵字，如果你這麼做，它將拋出一個 `ReferenceError`，建構式 1 與 4 會引發這個錯誤。

使用 `super` 關鍵字時，我們要提供參數給父類別呼叫其建構式。父類別需要接受一個 `name` 參數，所以我們需要把 `name` 傳給 `super`。

`Labrador` 類別接收兩個參數，`name` 參數是由於它繼承了 `Dog`，`size` 作為`Labrador` 類的額外屬性，它們都需要傳遞給 `Labrador` 的建構式，因此使用建構式 2 是正確答案。

</p>
</details>

---

###### 67. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`import` 命令是 _編譯階段_ 執行的。這代表被引入的模組會優先執行，而引入模組的檔案會 _之後執行_。

這是 `CommonJS` 中 `require()` 和 `import` 之間的區別！使用 `require()`，您可以在執行程式時根據需要戴入依賴的項目。如果我們使用 `require` 而不是 `import` 來執行此題，結果將會依 `running index.js`，`running sum.js`，`3` 的順序輸出。

</p>
</details>

---
###### 68. 將會輸出什麽內容？

```javascript
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

每個 Symbol 都是完全唯一的。傳遞給 Symbol 的參數只是給 Symbol 的一個描述。Symbol 的值不依賴於傳遞的參數。當我們建立兩個全新的 Symbol 去比較時：第一個`Symbol('foo')`，第二個`Symbol('foo')`, 因這兩個值是唯一的，彼此不相等，因此 `Symbol('foo') === Symbol('foo')` 會得到 `false`。

</p>
</details>

---

###### 69. 將會輸出什麽內容？

```javascript
const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`,

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

使用 `padStart` 函數，我們可以在字串的前面加上填充字串。傳遞給此函數的參數是字串的總長度（包含填充字串）。字串 Lydia Hallie 的長度為 `12` , 因此 `name.padStart(13)` 在字串的開頭只會插入 1 個空格，因為 12 + 1 等於 13。

如果傳給 `padStart` 函數的參數小於字串的長度，則不會加上填充字串。

</p>
</details>

---

###### 70. 將會輸出什麽內容？

```javascript
console.log('🥑' + '💻');
```

- A: `"🥑💻"`
- B: `257548`
- C: 一個包含碼位 (code point) 的字串
- D: 錯誤

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

使用 `+` 運算元，你可以連接字串。在此例，我們將字串“🥑”與字串”💻“連接起來，產生”🥑💻“。

</p>
</details>

---

###### 71. /* 1 */ 與 /* 2 */ 該填入什麼才能輸出 console.log 之後的值？

```javascript
function* startGame() {
  const answer = yield '你喜歡 JavaScript 嗎？';
  if (answer !== 'Yes') {
    return "哦，我想我們該走了";
  }
  return 'JavaScript 也愛你 ❤️';
}

const game = startGame();
console.log(/* 1 */); // 你喜歡 JavaScript 嗎？
console.log(/* 2 */); // JavaScript 也愛你 ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`generator` 函數在遇到 yield 關鍵字時會“暫停”執行。首先，我們需要讓函數產生字串 "你喜歡 JavaScript 嗎？"，這可以透過呼叫 `game.next().value` 來完成。

`startGame()` 函數會一行一行執行直到遇到 `yield` 關鍵字，在函數裡第一個就有一個 `yield` 關鍵字：所以執行到第一行就停止了！_此時 answer 變數還尚未定義_

當我們呼叫 `game.next("Yes").value`，前一個 `yield` 被傳遞給 `next()` 的參數值所取代。此例我們使用 `Yes`。變數 `answer` 的值現在等於 `Yes`。if 語句的條件回傳 `false`，並且會回傳 `JavaScript 也愛你 ❤️`。

</p>
</details>

---

###### 72. 將會輸出什麽內容？

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`String.raw`會回傳一個字串，其中轉義符 (`/n`, `/v`, `/t`等) 被忽略！反斜線可能是一個問題，因為你可能會有這樣的結果。

`const path = "C:\Documents\Projects\table.html"`。

將會得到：

`C:DocumentsProjects able.html`

如果使用`String.raw`，它將直接忽略轉譯並輸出。

`C:\Documents\Projects\table.html`。

在這種情況下，字串會以 "Hello\nworld"，被記錄下來。

</p>
</details>

---

###### 73. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

一個異步函數總是回傳一個 promise。 `await` 仍然要等待 promise 的 resolve：當我們呼叫 `getData()` 等於 `data` 時，會得到一個等待的 promise。

如果我們想獲取 resolve 後的值`"I made it"`，我們可以在`data`上使用`.then()`函數：

`data.then(res => console.log(res))`。

這樣就會出現 `"I made it!"` 的記錄。

</p>
</details>

---

###### 74. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`.push()`函數回傳的是陣列的長度！原本陣列包含一個元素（字串`"香蕉"`），長度為`1`。後來將字串 `"apple"` 加到陣列中後，陣列包含兩個元素。所以會從`addToList`函數中得到，長度為 `"2"`。

`push`函數修改了原來的陣列。如果你想從函數中回傳 _陣列_ 而不是 _陳列的長度_，你應該在加完`item`到陣列後，回傳`list`。

</p>
</details>

---

###### 75. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`Object.freeze` 使我們無法增加、刪除或修改 Object 的屬性（除非該屬性的值是另一個 Object）。

當我們建立變數`shape`並等同被凍結的 Object`box`時，`shape`也是指一個被凍結的 Object。你可以透過使用`Object.isFrozen`檢查一個 Object 是否被凍結。在這種情況下，`Object.isFrozen(shape)`回傳 true，因為變數`shape`也指向一個凍結 Object。

由於`shape`是被凍結的，而且`x`的值不是一個 Object，所以我們不能修改`x`的屬性。`x`仍然等於`10`，於是`{ x: 10, y: 20 }`被記錄下來。

</p>
</details>

---

###### 76. 將會輸出什麽內容？

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

當我們從右側的物件解構屬性`name`時，我們將其值`Lydia`分配給名為`myName`的變數。

使用`{name：myName}`，我們是在告訴 JavaScript 我們要建立一個名為`myName`的新變數，並且其值是右側物件的`name`屬性的值。

當我們嘗試輸出`name`，一個未定義的變數時，就會引發`ReferenceError`。

</p>
</details>

---

###### 77. 以下是純函數嗎？

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

純函數一種若輸入參數相同，則永遠會得到相同輸出的函數。

在特定情況下，即使輸入相同參數，也不能得到相同的回傳值：

<pre>
var a = b = {}
a[Symbol.toPrimitive] = b[Symbol.toPrimitive] = () => Math.random()
sum(a, b) // Uncertain
</pre>

所以它不是純函數。

</p>
</details>

---

###### 78. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`add`函數是一個記憶函數。通過記憶化，我們可以暫存函數的結果，以加快其執行速度。上述情況，我們建立一個`cache`物件，用於存儲先前存過的值。

如果我們使用相同的參數多次呼叫`addFunction`函數，它首先檢查暫存中是否已有該值，如果有，則回傳暫存值，節省執行時間。如果沒有，那麼它將計算該值，並存儲在暫存中。

我們用相同的值三次呼叫了`addFunction`函數：

在第一次呼叫，`num`等於`10`時函數的值尚未暫存，if 語句`num in cache`回傳`false`，else 塊的代碼被執行：`Calculated! 20`，並且其結果被添加到暫存物件，`cache`現在看起來像`{10:20}`。

第二次，`cache`物件包含`10`的回傳值。if 語句 `num in cache` 回傳`true`，印出`From cache! 20`。

第三次，我們將`5 * 2`(值為 10) 傳遞給函數。`cache`物件包含`10`的回傳值。if 語句 `num in cache` 回傳`true`，印出`From cache! 20`。

</p>
</details>

---
###### 79. 將會輸出什麽內容？

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` and `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` and `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D:  `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

透過`for-in`迴圈，我們可以遍歷一個物件**自有的**、**繼承的**、**可列舉的**、**非 Symbol 的**屬性。在陣列中，可列舉屬性是陣列元素的“鍵”，即它們的索引。類似於下面這個物件：

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

其中鍵則是可列舉屬性，因此 `0`，`1`，`2`，`3`被記錄。

透過`for-of`迴圈，我們可以迭代**可迭代物件**（包括 `Array`，`Map`，`Set`，`String`，`arguments`等）。當我們迭代陣列時，在每次迭代中，不同屬性的值將被分配給變數`item`, 因此輸出`“☕”`，`“💻”`，`“🍷”`，`“🍫”`。

</p>
</details>

---

###### 80. 將會輸出什麽內容？

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

陣列元素可以包含任何值。數字，字符，布林，物件，陣列，`null`，`undefined`, 以及其他表達式，如日期，函數和計算式。

元素將等於回傳的值。`1 + 2`回傳`3`，`1 * 2`回傳'2`，'1 / 2`回傳`0.5`。

</p>
</details>

---
###### 81. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

預設情況下，如果不傳參數給函數，函數內參數的值將為`undefined`。上述情況，我們沒有給參數`name`傳值。`name`等於`undefined`，並被印出。

在 ES6 中，我們可以使用預設參數覆蓋此預設的`undefined`值。例如：

`function sayHi (name =“Lydia”){...}`

在這種情況下，如果我們沒有傳遞值或者如果我們傳遞`undefined`，`name`總是等於字符`Lydia`

</p>
</details>

---
###### 82. 將會輸出什麽內容？

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

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

`this`關鍵字的指向取決於使用它的位置。在**函數**中，比如`getStatus`，`this`指向的是呼叫它的物件，上述例子中`data`物件呼叫了`getStatus`，因此`this`指向的就是`data`物件。當我們輸出`this.status`時，`data`物件的`status`屬性被輸出，即`"🥑"`。

使用`call`方法，可以更改`this`指向的物件。`data.getStatus.call(this)`是將`this`的指向由`data`物件更改為全局物件。在全局物件上，有一個名為`status`的變數，其值為`”😎“`。因此輸出`this.status`時，會輸出`“😎”`。
</p>
</details>

---
###### 83. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

我們將變數`city`設置為等於`person`物件上名為`city`的屬性的值。這個物件上沒有名為`city`的屬性，因此變數`city`的值為`undefined`。

請注意，我們沒有引用`person`物件本身，只是將變數`city`設置為等於`person`物件上`city`屬性的當前值。

然後，我們將`city`設置為等於字串`“Amsterdam”`。這不會更改 person 物件：沒有對該物件的引用。

因此輸出`person`物件時，會回傳未修改的物件。

</p>
</details>

---
###### 84. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`const`和`let`定義的變數是具有**區塊作用域**的，區塊是大括號（`{}`）之間的任何東西，即上述情況`if / else`語句的大括號。由於區塊作用域，我們無法在定義的塊之外引用變數，因此拋出`ReferenceError`。

</p>
</details>

---
###### 85. 將會輸出什麽內容？

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: `fetch`函數的結果
- B: 第二次呼叫`fetch`函數的結果
- C: 前一個`.then()`中回傳函數回傳的結果
- D: 總是`undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

第二個`.then`中`res`的值等於前一個`.then`中函數回傳的值。你可以像這樣繼續連接`.then`，將值傳遞給下一個處理程序。

</p>
</details>

---
###### 86. 哪個選項是將`hasName`設為`true`的方法，前提是不能將`true`作為參數傳遞？

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

使用邏輯非運算子`!`，將回傳一個布林值，使用`!! name`，我們可以確定`name`的值是`true`還是`false`。如果`name`是`true`，那麼`!name`回傳`false`。`!false`回傳`true`。

通過將`hasName`設置為`name`，可以將`hasName`設置為等於傳遞給`getName`函數的值，而不是布林值`true`。

`new Boolean（true）`回傳一個物件包裝器，而不是布林值本身。

`name.length`回傳傳遞的參數的長度，而不是布林值`true`。

</p>
</details>
---

###### 87. 將會輸出什麽內容？

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

可以使用雙括號表示法獲取字串中特定索引的字串，字串中的第一個字串具有索引 0，依此類推。在這種情況下，我們想要得到索引為 0 的元素，字串`'I'`被記錄。

請注意，IE7 及更低版本不支援此方法。應該使用`.charAt（）`

</p>
</details>

---
###### 88. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

您可以將預設參數的值設置為函數的另一個參數，只要另一個參數定義在其之前即可。我們將值`10`傳遞給`sum`函數。如果`sum`函數只接收 1 個參數，則意味著沒有傳遞`num2`的值，這種情況下，`num1`的值等於傳遞的值`10`。`num2`的預設值是`num1`的值，即`10`。```num1 + num2```回傳`20`。

如果您嘗試將預設參數的值設置為後面定義的參數，則可能導致參數的值尚未初始化，從而引發錯誤。比如：
```js
function test(m = n, n = 2) {
	console.log(m, n)
}
test() // Uncaught ReferenceError: Cannot access 'n' before initialization
test(3) // 3 2
test(3, 4) // 3 4
```

</p>
</details>

---
###### 89. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

使用`import * as name`語法，我們將`module.js`文件中所有`export`匯入到`index.js`文件中，並且建立了一個名為`data`的新物件。在`module.js`文件中，有兩個匯出：預設匯出和命名匯出。預設匯出是一個回傳字串“Hello World”的函數，命名匯出是一個名為`name`的變數，其值為字串`“Lydia”`。

`data`物件具有預設匯出的`default`屬性，其他屬性具有指定 exports 的名稱及其對應的值。

</p>
</details>

---
###### 90. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

class 是建構函數的語法糖，如果用建構函數的方式來重寫`Person`class 則會是：

```javascript
function Person() {
  this.name = name
}
```

透過`new`來呼叫建構函數，將會產生建構函數`Person`的實例，對實例執行`typeof`關鍵字將回傳`"object"`，上述情況輸出`"object"`。

</p>
</details>

---
###### 91. 將會輸出什麽內容？

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`.push`函數回傳陣列的長度，而不是陣列本身！通過將`newList`設置為`[1,2,3].push(4)`，實際上`newList`等於陣列的新長度：`4`。

然後，嘗試在`newList`上使用`.push`函數。由於`newList`是數值`4`，拋出 TypeError。

</p>
</details>

---
###### 92. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

正規式函數，例如`giveLydiaPizza`函數，有一個`prototype`屬性，它是一個帶有`constructor`屬性的物件（原型物件）。然而，箭頭函數，例如`giveLydiaChocolate`函數，沒有這個`prototype`屬性。嘗試使用`giveLydiaChocolate.prototype`存取`prototype`屬性時會得到`undefined`。

</p>
</details>

---
###### 93. 將會輸出什麽內容？

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]` 
- C: `["name", "age"]` and `undefined`
- D: `Error`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A
`Object.entries()`函數回傳一個給定物件本身可枚舉屬性的鍵值對陣列，上述情況回傳一個二維陣列，陣列每個元素是一個包含鍵和值的陣列：

`[['name','Lydia'],['age', 21]]`

使用`for-of`循環，我們可以迭代陣列中的每個元素，上述情況是子陣列。我們可以使用`const [x，y]`在`for-of`循環中解構子陣列。`x`等於子陣列中的第一個元素，`y`等於子陣列中的第二個元素。

第一個子陣列是`[“name”，“Lydia”]`，其中`x`等於`name`，而`y`等於`Lydia`。
第二個子陣列是`[“age”，21]`，其中`x`等於`age`，而`y`等於`21`。

</p>
</details>

---
###### 94. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`... args`是剩餘參數，剩餘參數的值是一個包含所有剩餘參數的陣列，**並且只能作為最後一個參數**。上面示範中，剩餘參數是第二個參數，這是不可能的，並會拋出語法錯誤。

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

上面示範中是有效的，將會回傳陣列：`[ 'banana', 'apple', 'orange', 'pear' ]`
</p>
</details>

---
###### 95. 將會輸出什麽內容？

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

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B


在 JavaScript 中，我們不必硬性寫分號 (`;`)，但是 JavaScript 引擎仍然在語法之後自動補上分號。這稱為**自動分號插入**。例如，一個語法可以是變數，或者像`throw`、`return`、`break`這樣的關鍵字。

在這裡，我們在新的一行上寫了一個`return`語法和另一個值`a + b `。然而，由於它是一個新的一行，引擎並不知道它實際上是我們想要回傳的值。相反，它會在`return`後面自動補上分號。你可以這樣看：

```javascript
  return;
  a + b
```

這意味著永遠不會到達`a + b`，因為函數在`return`關鍵字之後停止執行。如果沒有回傳值，就像這裡，函數回傳`undefined`。注意，在`if/else`語法之後沒有自動插入！

</p>
</details>

---
###### 96. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B


我們可以將class設置為等於其他class/函數建構函數。在這種情況下，我們將`Person`設置為`AnotherPerson`。這個建構函數的名字是`Sarah`，所以新的`Person`實例`member`上的name屬性是`Sarah`。


</p>
</details>

---
###### 97. 將會輸出什麽內容？

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` and `["{Symbol('a')"]`
- B: `{}` and `[]`
- C: `{ a: "b" }` and `["a"]`
- D: `{Symbol('a'): 'b'}` and `[]`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D


`Symbol`類型是不可枚舉的。`Object.keys`函數回傳物件上的所有可枚舉的鍵屬性。`Symbol`類型是不可見的，並回傳一個空陣列。記錄整個物件時，所有屬性都是可見的，甚至是不可枚舉的屬性。

這是`Symbol`的眾多特性之一：除了表示完全唯一的值（防止物件意外名稱衝突，例如當使用 2 個想要向同一物件添加屬性的庫時），您還可以`隱藏`這種方式物件的屬性（儘管不完全。你仍然可以使用`Object.getOwnPropertySymbols()`函數存取`Symbol`。

</p>
</details>

---
###### 98. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`getList`函數接收一個陣列作為其參數。在`getList`函數的括號之間，我們立即解構這個陣列。您可以這樣表達：

 `[x, ...y] = [1, 2, 3, 4]`


使用剩餘的參數`... y`，我們將所有剩餘參數放在一個陣列中。在這種情況下，其餘的參數是`2`，`3`和`4`。 `y`的值是一個陣列，包含所有其餘參數。在這種情況下，`x`的值等於`1`，所以當我們輸出`[x，y]`時，會輸出`[1，[2,3,4]]`。

 `getUser`函數接收一個物件。對於箭頭函數，如果只回傳一個值，我們不必編寫大括號。但是，如果您想從一個箭頭函數回傳一個物件，您必須在小括號之間編寫它，否則不會回傳任何值！下面的函數將回傳一個物件：

```const getUser = user => ({ name: user.name, age: user.age })```

由於在這種情況下不回傳任何值，因此該函數回傳`undefined`。

</p>
</details>

---
###### 99. 將會輸出什麽內容？

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

變數`name`保存字串的值，該字串不是函數，因此無法呼叫。

當值不是預期類型時，會拋出`TypeErrors`。JavaScript 期望`name`是一個函數，因為我們試圖呼叫它。但它是一個字串，因此拋出`TypeError`：`name is not a function`

當你編寫了一些非有效的 JavaScript 時，會拋出語法錯誤，例如當你把`return`這個詞寫成`retrun`時。
當 JavaScript 無法找到您嘗試存取的值的引用時，拋出`ReferenceErrors`。

</p>
</details>

---
###### 100. 將會輸出什麽內容？

```javascript
// 🎉✨ 耶！我終於翻到 100 題了！噢耶！✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B


`[]`是一個真值。使用`&&`運算子，如果左側值是真值，則回傳右側值。在這種情況下，左側值`[]`是一個真值，所以回傳`Im`。

`""`是一個假值。如果左側值是假的，則不回傳任何內容。`n't`不會被退回。

</p>
</details>

---
###### 101.將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

使用`||`運算子，我們可以得到第一個真值。如果所有值都是假值，則得到最後一個值。

`（false || {} || null）`：空物件`{}`是一個真值。這是第一個（也是唯一的）真值，它將被得到。`one`等於`{}`。

`（null || false ||“”）`：所有值都是假值。這意味著得到傳遞的值`""`。`two`等於`""`。

`（[] || 0 ||“”）`：空陣列`[]`是一個真值。這是第一個得到的真值。`three`等於`[]`。

</p>
</details>

---
###### 102. 依序輸出什麼內容？

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

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D


有了 promise，我們通常會說：當我想要呼叫某個函數，但是由於它可能需要一段時間，因此暫時將它放在一邊。只有當某個值被 resolved/rejected，並且執行序為空時才使用這個值。

我們可以在`async`函數中通過`.then`和`await`關鍵字獲得該值。儘管我們可以通過`.then`和`await`獲得 promise 的值，但是它們的運作方式不同。

在`firstFunction`中，當執行到`myPromise`函數時我們將其放在一邊，即 promise 進入微任務佇列，其他後面的程式（`console.log('second')`）照常執行，因此`second `被輸出，`firstFunction`函數到此執行完畢，執行序中任務佇列被清空，此時開始執行微任務佇列中的任務，`I have resolved`被輸出。

在`secondFunction`函數中，我們通過`await`關鍵字，暫停了後面程式的執行，直到異步函數的值被解析才開始後面程式的執行。這意味著，它會等著直到 `myPromise` 以值`I have resolved`被`resolve`之後，下一行`second`才開始執行。


</p>
</details>

---
###### 103. 將會輸出什麽內容？

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
- C: `3`, `Lydia2`, `[Object object]2`
- D: `"12"`, `Lydia2`, `[Object object]2`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

“+”運算子不僅用於相加數字，還可以使用它來連接字串。每當 JavaScript 引擎發現一個或多個值不是數字時，就會將數字強制為字串。

第一個是數字 1。1 + 2 得到數字 3。

但是，第二個是字串“Lydia”。 “Lydia”是一個字串，2 是一個數字：2 被強制轉換為字串。 “Lydia”和“2”被連接起來，產生字串“Lydia2”。

`{name：“Lydia”}`是一個物件。數字和物件都不是字串，因此將二者都字串化。每當我們對正規式物件進行字串化時，它就會變成`[Object object]`。與“2”串聯的“ [Object object]”成為“[Object object]2”。

</p>
</details>

---
###### 104. 將得到什麼

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

我們可以將我們想要的任何類型的值傳遞`Promise.resolve`，無論是否`promise`。該函數本身回傳帶有已解析值的`Promise` (`<fulfilled>`)。如果您傳遞正規式函數，它將是具有正規式值的已解決`promise`。如果你通過了 promise，它將是一個已經 resolved 的且帶有傳的值的 promise。

上述情況，我們傳了數字 5，因此回傳一個 resolved 狀態的 promise，resolve 值為`5`

</p>
</details>
---

###### 105. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

物件通過參考位址傳遞。當我們檢查物件的嚴格相等性（===）時，我們正在比較它們的參考位址。

我們將“person2”的預設值設置為“person”物件，並將“person”物件作為“person1”的值傳遞。

這意味著兩個值都引用緩存中的同一位置，因此它們是相等的。

執行“else”語句中的代碼塊，並記錄`They are the same!`。

</p>
</details>

---
###### 106. 將會輸出什麽內容？


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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

在 JavaScript 中，我們有兩種存取物件屬性的方法：括號表示法或點表示法。在此範例中，我們使用點表示法（`colorConfig.colors`）代替括號表示法（`colorConfig [“colors”]`）。

使用點表示法，JavaScript 會嘗試使用該確切名稱在物件上查找屬性。在此範例中，JavaScript 嘗試在 colorConfig 物件上找到名為 colors 的屬性。沒有名為“colors”的屬性，因此得到“undefined”。
然後，我們嘗試使用`[1]`存取第一個元素的值。我們無法對未定義的值執行此操作，因此會拋出`Cannot read property '1' of undefined`。

JavaScript 解釋（或取消裝箱）語句。當我們使用中括號表示法時，它會看到第一個左方括號`[`並一直進行下去，直到找到右方括號`]`。只有這樣，它才會評估該語句。如果我們使用了 colorConfig [colors [1]]，它將得到 colorConfig 物件上 red 屬性的值。


</p>
</details>

---
###### 107. 將會輸出什麽內容？

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

在內部，表情符號是 unicode。heat 表情符號的 unicode 是`“U + 2764 U + FE0F”`。對於相同的表情符號，它們總是相同的，因此我們將兩個相等的字串相互比較，這將回傳 true。

</p>
</details>

---
###### 108. 哪些函數修改了原本的陣列？


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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

使用`splice`方法，我們透過刪除，取代或增加元素來修改原始陣列。在這種情況下，我們從索引 1 中刪除了 2 個元素（我們刪除了`'🥑'`和`'😍'`），同時增加了✨emoji 表情。

`map`，`filter`和`slice`回傳一個新陣列，`find`回傳一個元素，而`reduce`回傳一個計算過的值。

</p>
</details>

---
###### 109. 將會輸出什麽內容？

```javascript
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']` 
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

我們將`info`物件上的`favoriteFood`屬性的值設置為披薩表情符號“🍕”的字串。字串是原始內容類型。在 JavaScript 中，原始內容類型通過值起作用

在這種情況下，我們將`info`物件上的`favoriteFood`屬性的值設置為等於`food`陣列中的第一個元素的值，字串為披薩表情符號（`'🍕'`）。字串是原始內容類型，並且通過值進行交換，我們更改`info`物件上`favoriteFood`屬性的值。food 陣列沒有改變，因為 favoriteFood 的值只是該陣列中第一個元素的值的複製，並且與該元素上的元素沒有相同的緩存引用食物`[0]`。當我們記錄食物時，它仍然是原始陣列`['🍕'，'🍫'，'🥑'，'🍔']`。

</p>
</details>

---
###### 110. 這函數做了什麼

```javascript
JSON.parse()
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

使用`JSON.parse()`函數，我們可以將 JSON 字串解析為 JavaScript 值。

```javascript
// 將數字字串化為有效的 JSON，然後將 JSON 字串解析為 JavaScript 值：
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// 將陣列值字串化為有效的 JSON，然後將 JSON 字串解析為 JavaScript 值：
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// 將物件字串化為有效的 JSON，然後將 JSON 字串解析為 JavaScript 值：
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
```
</p>
</details>

---
###### 111. 將會輸出什麽內容？

```javascript
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D 

每個函數都有其自己的執行上下文。`getName`函數首先在其自身的上下文（範圍）內查找，以查看其是否包含我們嘗試存取的變數`name`。上述情況，`getName`函數包含其自己的`name`變數：我們用`let`關鍵字和`Sarah`的值定義變數`name`。

帶有`let`關鍵字（和`const`）的變數被提升，但是與`var`不同，它不會被***初始化***。在我們定義（初始化）它們之前，無法存取它們。這稱為“暫時性死區”。當我們嘗試在定義變數之前存取變數時，JavaScript 會拋出`ReferenceError: Cannot access 'name' before initialization`。

如果我們不在`getName`函數中定義`name`變數，則 javascript 引擎會查看原型鏈。會找到其外部作用域有一個名為`name`的變數，其值為`Lydia`。在這種情況下，它將輸出`Lydia`：

```javascript
let name = 'Lydia'

function getName() {
  console.log(name)
}

getName() // Lydia
```

</p>
</details>

---
###### 112. 將會輸出什麽內容？

```javascript
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
```

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

透過`yield` 關鍵字，我們在`Generator` 函數裡執行`yield`語法。透過`yield*` 關鍵字，我們可以在一個`Generator` 函數裡面執行（`yield`語法）另一個`Generator ` 函數，或可遍歷的物件 (如陣列).

在函數 `generatorOne` 中，我們透過 `yield` 關鍵字 yield 了一個完整的陣列 `['a', 'b', 'c']`。函數`one`透過`next`方法回傳的物件的`value` 屬性的值 (`one.next().value`) 等價於陣列 `['a', 'b', 'c']`.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

在函數 `generatorTwo` 中，我們使用 `yield*` 關鍵字。就相當於函數`two`第一個`yield`的值，等價於在迭代器中第一個 `yield` 的值。陣列`['a', 'b', 'c']`就是這個迭代器。第一個`yield` 的值就是`a`, 所以我們第一次呼叫`two.next().value`時，就回傳`a`。

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

###### 113. 將會輸出什麽內容？

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

帶有模板字面量的表達式優先被執行。相當於字串會包含表達式，這個立即執行函數`(x => x)('I love')` 回傳的值。我們向箭頭函數`x => x` 傳遞`'I love'` 作為參數。 `x` 等價於回傳的 `'I love'`。這就是結果 `I love to program`。

</p>
</details>

---
###### 114. 這會發生什麼？

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: `setInterval` 裡的函數不會被呼叫
- B: `setInterval` 裡的函數被呼叫一次
- C: `setInterval` 裡的函數仍然會被每秒鐘呼叫
- D: 我們從沒呼叫過 `config.alert()`, config 為 `null`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

一般情況下當我們將物件賦值為 `null`, 那些物件會被進行 _垃圾回收（garbage collected）_ 因為已經沒有對這些物件的引用了。然而，`setInterval`的參數是一個箭頭函數（所以上下文綁定到物件 `config` 了），函數仍然保留著對 `config`的引用。只要存在引用，物件就不會被垃圾回收。因為沒有被垃圾回收，`setInterval` 的每 1000ms (1s) 會被呼叫一次。

</p>
</details>

---
###### 115. 哪一个函數會回傳 `'Hello world!'` ？

```javascript
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
```

- A: 1
- B: 2
- C: 2 and 3
- D: All of them

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

當透過 `set` 函數增加一個鍵值對，一個傳遞給 `set`函數的參數將會是鍵名，第二個參數將會是值。在這個 case 裡，鍵名為 _函數_ `() => 'greeting'`，值為`'Hello world'`。 `myMap` 現在就是 `{ () => 'greeting' => 'Hello world!' }`。

1 是錯的，因為鍵名不是 `'greeting'` 而是 `() => 'greeting'`。
3 是錯的，因為我們給`get` 函數傳遞了一個新的函數。物件受 _引用_ 影響。函數也是物件，因此兩個函數嚴格上並不等價，儘管他們相同：他們有兩個不同的緩存引用地址。

</p>
</details>

---
###### 116. 將會輸出什麽內容？

```javascript
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

函數 `changeAge` 和函數 `changeAgeAndName` 有著不同的參數，定義一個 _新_ 生成的物件 `{ ...person }`。這個物件有著所有 `person` 物件 中 k/v 值的副本。

首項，我們呼叫 `changeAge` 函數並傳遞 `person` 物件作為它的參數。這個函數對 `age` 屬性進行加一操作。`person` 現在是 `{ name: "Lydia", age: 22 }`。

然後，我們呼叫函數 `changeAgeAndName`，然而我們沒有傳遞參數。取而代之，`x` 的值等價 _new_ 生成的物件：`{ ...person }`。因為它是一個新生成的物件，它並不會對物件 `person` 造成任何副作用。`person` 仍然等價於 `{ name: "Lydia", age: 22 }`。

</p>
</details>

---
###### 117. 下面哪個選項會回傳 `6`?

```javascript
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

通過展開語法 `...`，我們可以 _展開_ 單個可迭代的元素。函數 `sumValues` function 接收三個參數：`x`, `y` 和 `z`。`...[1, 2, 3]` 的執行結果為 `1, 2, 3`，將會傳遞給函數 `sumValues`。

</p>
</details>

---
###### 118. 將會輸出什麽內容？

```javascript
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

透過 `+=` 運算子，我們對變數 `num` 進行加 `1` 操作。`num` 有初始值 `1`，因此 `1 + 1` 的執行結果為 `2`。陣列 `list` 的第二項為 🥰，`console.log(list[2])` 輸出 🥰.

</p>
</details>

---
###### 119. 將會輸出什麽內容？

```javascript
const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

通過 ES10 或 TS3.7+[可選鏈運算子`?.`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF% E9%80%89%E9%93%BE)，我們不再需要顯式檢測更深層的嵌套值是否有效。如果我們嘗試存取 `undefined` 或 `null` 的值 (_nullish_)，表達將會短路並回傳 `undefined`.

`person.pet?.name`：`person` 有一個名為 `pet` 的屬性：`person.pet` 不是 nullish。它有個名為 `name` 的屬性，並回傳字串 `Mara`。
`person.pet?.family?.name`：`person` 有一個名為`pet` 的屬性：`person.pet` 不是 nullish. `pet` _並沒有_ 一個名為`family` 的屬性，` person.pet.family` 是 nullish。表達式回傳 `undefined`。
`person.getFullName?.()`：`person` 有一個名為 `getFullName` 的屬性：`person.getFullName()` 不是 nullish 並可以被呼叫，回傳字串 `Lydia Hallie`。
`member.getLastName?.()`: `member` is not defined: `member.getLastName()` is nullish. The expression returns `undefined`.

</p>
</details>

---
###### 120. 將會輸出什麽內容？

```javascript
const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
	console.log("We have to buy bananas!");
} else {
	console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

我們傳遞了一個狀態 `groceries.indexOf("banana")` 給 if 語法。`groceries.indexOf("banana")` 回傳 `0`，一個 falsy 的值。因為 if 語法的狀態為 falsy，`else` 塊區內的代碼執行，並且 `We don't have to buy bananas!` 被輸出。

</p>
</details>

---
###### 121. 將會輸出什麽內容？

```javascript
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
```

- A: `function language(lang) { this.languages.push(lang }`
- B: `0`
- C: `[]`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

函數 `language` 是一個 `setter`。Setters 並不保存一個實際值，它們的使命在於 _修改_ 屬性。當呼叫函數 `setter`，回傳 `undefined`。

</p>
</details>

---

###### 122. 將會輸出什麽內容？

```javascript
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`typeof name` 回傳 `"string"`。字串 `"string"` 是一個 truthy 的值，因此 `!typeof name` 回傳一個布林值 `false`。`false === "object"` 和 `false === "string"` 都回傳 `false`。

（如果我們想檢測一個值的類型，我們應該用 `!==` 而不是 `!typeof`）

</p>
</details>

---
###### 123. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

函數 `add` 是一個回傳 回傳箭頭函數的箭頭函數 的箭頭函數（still with me?）。第一個函數接收一個值為 `4` 的參數 `x`。我們呼叫第二個函數，它接收一個值為 `5` 的參數 `y`。然後我們呼叫第三個函數，它接收一個值為 `6` 的參數 `z`。當我們嘗試在最後一個箭頭函數中獲取 `x`, `y` 和 `z` 的值，JS 引擎根據作用域鏈去找 `x` 和 `y` 的值。得到 `4` `5` `6`.

</p>
</details>

---
###### 124. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

我們給 函數 range 傳遞：`Promise{1}`, `Promise{2}`, `Promise{3}`，Generator 函數 `range` 回傳一個全是 async object promise 陣列。我們將 async object 賦值給變數 `gen`，之後我們使用`for await ... of` 進行循環遍歷。我們將回傳的 Promise 實例賦值給 `item`：第一個回傳 `Promise{1}`，第二個回傳 `Promise{2}`，之後是 `Promise{3}`。因為我們正 _awaiting_ `item` 的值，resolved 狀態的 promise，promise 陣列的 resolved _值_ 以此為：`1`，`2`，`3`.

</p>
</details>

---
###### 125. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`myFunc` 預期接收一個包含 `x`, `y` 和 `z` 屬性的物件作為它的參數。因為我們僅僅傳遞三個單獨的數字值 (1, 2, 3) 而不是一個含有`x`, `y` 和`z` 屬性的物件 ({x: 1, y: 2, z: 3}) ，`x`, `y` 和`z` 有著各自的預設值`undefined`.

</p>
</details>

---
###### 126. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

通過函數 `Intl.NumberFormat`，我們可以格式化任意區域的數字值。我們對數字值 `130` 進行 `mile-per-hour` 作為 `unit` 的 `en-US` 區域 格式化，結果為 `130 mph`。對數字值 `300` 進行 `USD` 作為 `currency` 的 `en-US` 區域格式化，結果為 `$300.00`.

</p>
</details>

---

###### 127. 將會輸出什麽內容？

```javascript
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

通過解構物件們，我們可以從右手邊的物件中拆出值，並且將拆出的值分配給左手邊物件同名的屬性。在這種情況下，我們將值 "💀" 分配給 `spookyItems[3]`。相當於我們正在篡改陣列 `spookyItems`，我們給它添加了值 "💀"。當輸出 `spookyItems` 時，結果為 `["👻", "🎃", "🕸", "💀"]`。

</p>
</details>

---

###### 128. 將會輸出什麽內容？

```javascript
const name = "Lydia Hallie";
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

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

通過函數 `Number.isNaN`，你可以檢測你傳遞的值是否為 _數字值_ 並且是否等於 `NaN`。`name` 不是一個數字值，因此 `Number.isNaN(name)` 回傳 `false`。`age` 是一個數字值，但它不等於 `NaN`，因此 `Number.isNaN(age)` 回傳 `false`.

通過函數 `isNaN`，你可以檢測你傳遞的值是否一個 number。`name` 不是一個 `number`，因此 `isNaN(name)` 回傳 `true`. `age` 是一個 `number` 因此 `isNaN(age)` 回傳 `false`.

</p>
</details>

---

###### 129. 將會輸出什麽內容？

```javascript
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

通過 `const` 關鍵字定義的變數在被初始化之前不可被引用：這被稱之為 _暫時性死區_。在函數 `getInfo` 中，變數 `randomValue` 定義在`getInfo` 的作用域的此法環境中。在想要對`typeof randomValue` 進行 log 之前，變數`randomValue` 仍未被初始化：錯誤`ReferenceError` 被拋出！JS 引擎並不會根據作用域鍊網上尋找該變數，因為我們已經在`getInfo`函數中定義了`randomValue` 變數。

</p>
</details>

---

###### 130. 將會輸出什麽內容？

```javascript
const myPromise = Promise.resolve("Woah some cool data");

(async () => {
	try {
		console.log(await myPromise);
	} catch {
		throw new Error(`Oops didn't work`);
	} finally {
		console.log("Oh finally!");
	}
})();
```

- A: `Woah some cool data`
- B: `Oh finally!`
- C: `Woah some cool data` `Oh finally!`
- D: `Oops didn't work` `Oh finally!`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

在 `try` 塊區，我們輸出 `myPromise` 變數的 awaited 值：`"Woah some cool data"`。因為`try` 塊區沒有錯誤拋出，`catch` 塊區的代碼並不執行。`finally` 塊區的代碼 _總是_ 執行，`"Oh finally!"` 被輸出。

</p>
</details>

---

###### 131. 將會輸出什麽內容？

```javascript
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

通過函數 `flat`，我們可以建立一個新的，已被扁平化的陣列。被扁平化的深度取決於我們傳遞的值。在這個 case 裡，我們傳遞了值 `1` (並不必要，這是預設值)，相當於只有第一層的陣列才會被連接。即這個 case 裡的 `['🥑']` and `['✨', '✨', ['🍕', '🍕']]`。連接這兩個陣列得到結果 `['🥑', '✨', '✨', ['🍕', '🍕']]`.

</p>
</details>

---

###### 132. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`counterOne` 是類 `Counter` 的一個實例。類 Counter 包含一個`count` 屬性在它的建構函數里，和一個 `increment` 函數。首先，我們通過 `counterOne.increment()` 呼叫函數 `increment` 兩次。現在，`counterOne.count` 為 `2`.

<img src="https://i.imgur.com/KxLlTm9.png" width="400">

然後，我們建立一個新的變數 `counterTwo` 並將 `counterOne` 的引用地址賦值給它。因為物件受引用地址的影響，我們剛剛建立了一個新的物件，其引用地址和 `counterOne` 的等價。因此它們指向同一塊緩存地址，任何對其的副作用都會影響 `counterTwo`。現在 `counterTwo.count` 為 `2`。

我們呼叫 `counterTwo.increment()` 將 `count` 的值設為 `3`。然後，我們輸出 `counterOne` 裡的 count，結果為 `3`。

<img src="https://i.imgur.com/BNBHXmc.png" width="400">

</p>
</details>

---

###### 133. 將會輸出什麽內容？

```javascript
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!", 0));
	console.log("Last line!");
}

async function funcTwo() {
	const res = await myPromise;
	console.log(await res);
	setTimeout(() => console.log("Timeout!", 0));
	console.log("Last line!");
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

首先，我們呼叫 `funcOne`。在函數 `funcOne` 的第一行，我們呼叫`myPromise` promise _異步操作_。當 JS 引擎在忙於執行 promise，它繼續執行函數 `funcOne`。下一行 _異步操作_ `setTimeout`，其回呼函數被 Web API 呼叫。 (詳情請參考我關於 event loop 的文章.)

promise 和 timeout 都是異步操作，函數繼續執行當 JS 引擎忙於執行 promise 和 處理 `setTimeout` 的呼叫。相當於 `Last line!` 首先被輸出，因為它不是異步操作。執行完 `funcOne` 的最後一行，promise 狀態轉變為 resolved，`Promise!` 被輸出。然而，因為我們呼叫了 `funcTwo()`, 呼叫堆疊不為空，`setTimeout` 的回呼仍不能入堆疊。

我們現在處於 `funcTwo`，先 _awaiting_ myPromise。通過 `await` 關鍵字，我們暫停了函數的執行直到 promise 狀態變為 resolved (或 rejected)。然後，我們輸出 `res` 的 awaited 值（因為 promise 本身回傳一個 promise）。接著輸出 `Promise!`。

下一行就是 _異步操作_ `setTimeout`，其回呼函數被 Web API 呼叫。

我們執行到函數 `funcTwo` 的最後一行，輸出 `Last line!`。現在，因為 `funcTwo` 出堆疊，呼叫堆疊為空。在事件佇列中等待的回呼函數（`() => console.log("Timeout!")` from `funcOne`, and `() => console.log("Timeout!")` from `funcTwo`）以此入堆疊。第一個回呼輸出 `Timeout!`，並出堆疊。然後，第二個回呼輸出 `Timeout!`，並出堆疊。得到結果 `Last line! Promise! Promise! Last line! Timeout! Timeout!`

</p>
</details>

---

###### 134. 我们怎样才能在 `index.js` 中调用 `sum.js?` 中的 `sum`？

```javascript
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
```

- A: `sum(4)`
- B: `sum.sum(4)`
- C: `sum.default(4)`
- D: 預設導出不用 `*` 來導入，只能具名導出

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

使用符號 `*`，我們引入文件中的所有值，包括預設和具名。如果我們有以下文件：

```javascript
// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";

// index.js
import * as info from "./info";
console.log(info);
```

將會輸出以下內容：

```javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
```

以 `sum` 為例，相當於以下形式引入值 `sum`：

```javascript
{ default: function sum(x) { return x + x } }
```

我們可以通過呼叫 `sum.default` 來呼叫該函數

</p>
</details>

---

###### 135. 將會輸出什麽內容？

```javascript
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```

- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: 沒有任何輸出

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

使用 Proxy 物件，我們可以給一個物件添加自定義行為。在這個 case，我們傳遞一個包含以下屬性的物件 `handler` : `set` and `get`。每當我門 _設置_ 屬性值時 `set` 被呼叫，每當我們 _獲取_ 時 `get` 被呼叫。

第一個參數是一個空物件 `{}`，作為 `person` 的值。對於這個物件，自定義行為被定義在物件 `handler`。如果我們向物件 `person` 添加屬性，`set` 將被呼叫。如果我們獲取 `person` 的屬性，`get` 將被呼叫。

首先，我們向 proxy 物件 (`person.name = "Lydia"`) 添加一個屬性 `name`。`set` 被呼叫並輸出 `"Added a new property!"`。

然後，我們獲取 proxy 物件的一個屬性，物件 handler 的屬性 `get` 被呼叫。輸出 `"Accessed a property!"`。

</p>
</details>

---

###### 136. 以下哪一項會對物件 `person` 有副作用？

```javascript
const person = { name: "Lydia Hallie" };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

使用 `Object.seal` 我們可以防止新屬性 _被添加_，或者存在屬性 _被移除_.

然而，你仍然可以對存在屬性進行更改。

</p>
</details>

---

###### 137. 以下哪一項會對物件 `person` 有副作用？

```javascript
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

使用函數 `Object.freeze` 對一個物件進行 _凍結_。不能對屬性進行添加，修改，刪除。

然而，它僅 對物件進行 _淺_ 凍結，意味著只有 物件中的 _直接_ 屬性被凍結。如果屬性是另一個 object，像案例中的 `address`，`address` 中的屬性沒有被凍結，仍然可以被修改。

</p>
</details>

---

###### 138. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

首先我們不傳遞任何參數呼叫 `myFunc()`。因為我們沒有傳遞參數，`num` 和 `value` 獲取它們各自的預設值：num 為 `2`, 而 `value` 為函數 `add` 的回傳值。對於函數 `add`，我們傳遞值為 2 的 `num` 作為參數。函數 `add` 回傳 `4` 作為 `value` 的值。

然後，我們呼叫 `myFunc(3)` 並傳遞值 `3` 參數 `num` 的值。我們沒有給 `value` 傳遞值。因為我們沒有給參數 `value` 傳遞值，它獲取預設值：函數 `add` 的回傳值。對於函數 `add`，我們傳遞值為 3 的 `num`給它。函數 `add` 回傳 `6` 作為 `value` 的值。

</p>
</details>

---

###### 139. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

在 ES2020 中，通過 `#` 我們可以給 class 添加私有變數。在 class 的外部我們無法存取該值。當我們嘗試輸出 `counter.#number`，語法錯誤被拋出：我們無法在 class `Counter` 外部存取它！

</p>
</details>

---

###### 140. 选择哪一个？

```javascript
const teams = [
	{ name: "Team 1", members: ["Paul", "Lisa"] },
	{ name: "Team 2", members: ["Laura", "Tim"] }
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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

為了遍歷 `teams` 陣列中物件的屬性 `members` 中的每一項，我們需要將 `teams[i].members` 傳遞給 Generator 函數 `getMembers`。Generator 函數回傳一個 generator 物件。為了遍歷這個 generator 物件中的每一項，我們需要使用 `yield*`.

如果我們沒有寫 `yield`，`return yield` 或者 `return`，整個 Generator 函數不會第一時間 return 當我們呼叫 `next` 函數。

</p>
</details>

---

###### 141. 將會輸出什麽內容？

```javascript
const person = {
	name: "Lydia Hallie",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby);
	return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);
```

- A: `["coding"]`
- B: `["coding", "dancing"]`
- C: `["coding", "dancing", "baking"]`
- D: `["coding", "running", "dancing", "baking"]`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

函數 `addHobby` 接受兩個參數，`hobby` 和有著物件 `person` 中陣列 `hobbies` 預設值的 `hobbies`。

首相，我們呼叫函數 `addHobby`，並給 `hobby` 傳遞 `"running"` 以及給 `hobbies` 傳遞一個空陣列。因為我們給 `hobbies` 傳遞了空陣列，`"running"` 被添加到這個空陣列。

然後，我們呼叫函數 `addHobby`，並給 `hobby` 傳遞 `"dancing"`。我們不向 `hobbies` 傳遞值，因此它獲取其預設值 —— 物件 `person` 的 屬性 `hobbies`。我們向陣列 `person.hobbies` push `dancing`。

最後，我們呼叫函數 `addHobby`，並向 `hobby` 傳遞 值 `"baking"`，並且向 `hobbies` 傳遞 `person.hobbies`。我們向陣列 `person.hobbies` push `dancing`。

pushing `dancing` 和 `baking` 之後，`person.hobbies` 的值為 `["coding", "dancing", "baking"]`

</p>
</details>

---

###### 142. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

我們建立了 class `Flamingo` 的實例 `pet`。當我們實例化這個實例，`Flamingo` 中的 `constructor` 被呼叫。首相，輸出 `"I'm pink. 🌸"`, 之後我們呼叫`super()`。`super()` 呼叫父 class 的建構函數，`Bird`。`Bird` 的建構函數被呼叫，並輸出 `"I'm a bird. 🦢"`。

</p>
</details>

---

###### 143. 哪一個選項會導致報錯？

```javascript
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`const` 關鍵字意味著我們不能 _重定義_ 變數中的值，它 _僅可讀_。然而，值本身不可修改。陣列 `emojis` 中的值可被修改，如 push 新的值，拼接，又或者將陣列的長度設置為 0。

</p>
</details>

---

###### 144. 我們需要向對象 `person` 添加什麼，以致執行 `[...person]` 時獲得形如 `["Lydia Hallie", 21]` 的輸出？

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: 不需要，物件預設就是可迭代的
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { for (let x in this) yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

物件預設並不是可迭代的。如果迭代規則被定義，則一個物件是可迭代的（An iterable is an iterable if the iterator protocol is present）。我們可以通過添加迭代器 symbol `[Symbol.iterator]` 來定義迭代規則，其回傳一個 generator 物件，比如說構建一個 generator 函數 `*[Symbol.iterator]() {}`。如果我們想要回傳陣列 `["Lydia Hallie", 21]`: `yield* Object.values(this)`，這個 generator 函數一定要 yield 物件 `person` 的`Object.values`。

</p>
</details>

---

###### 145. 將會輸出什麽內容？
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
<details><summary><b>答案</b></summary>
<p>

#### 答案：C

在 `forEach` 循環內部的 `if` 會判斷 `num` 的值是 truthy 或者是 falsy。因為 `nums` 陣列的第一個數字是 `0`，一個 falsy 值，`if` 語句代碼塊不會被執行。`count` 僅僅在 `nums` 陣列的其他 3 個數字 `1`，`2`，`3` 時加 1。因為 `count` 執行了 3 次加 `1` 運算，所以 `count` 的值為 `3`。

</p>
</details>

---

###### 146. 將會輸出什麽內容？

```javascript
function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])
```

- A: `null`, `undefined`, 🍌
- B: `[]`, `null`, 🍌
- C: `[]`, `[]`, 🍌
- D: `undefined`, `undefined`, 🍌

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

`?` 允許我們去選擇性地訪問物件內部更深層的嵌套屬性。我們嘗試輸出 `fruits` 陣列索引值為 `1` 的子陣列內部的索引值為 `1` 的元素。如果在 `fruits` 陣列索引值 為 `1` 的位置不存在元素，會直接回傳 `undefined`。如果 `fruits` 陣列在索引值為 `1` 的位置存在元素，但是子陣列在索引值為 `1` 的位置不存在元素，也會回傳 `undefined`。

首先，我們嘗試輸出 `[['🍊', '🍌'], ['🍍']]` 的子陣列 `['🍍']` 的第 2 個元素。這個子陣列只包含一個元素，也就意味著在索引值為 `1` 的位置不存在元素，所以回傳的是 `undefined`。

其次，我們在沒有傳入任何參數呼叫了 `getFruits` 函數，也就意味著形參 `fruits` 的預設值為`undefined`。因為我們選擇性地鏈接了 `fruits` 在索引值為 `1` 的元素，因為在索引值為 `1` 的位置不存在元素，因此回傳的是 `undefined`。

最後，我們嘗試輸出 `['🍍'], ['🍊', '🍌']` 的子陣列 `['🍊', '🍌']` 的第 2 個元素。子陣列索引值為 `1`的位置為 `🍌`，因此它被輸出出了。

</p>
</details>

---

###### 147. 將會輸出什麽內容？

```javascript
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count++
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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

我們設置 `calc` 變數為 `Calc` 類的一個新實例。然後，我們初始化一個 `Calc` 的新實例，而且呼叫了這個實例的 `increase` 函數。因為 count 屬性是在 `Calc` class 的 constructor 內部的，所以 count 屬性不會在 `Calc` 的原型鏈上共享出去。這就意味著 calc 實例的 count 值不會被更新，count 仍然是 `0`。

</p>
</details>

---

###### 148. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

 `updateUser` 函數更新 user 的 `email` 和 `password` 屬性的值，如果它們的值傳入函數，函數回傳的就是 `user` 物件。`updateUser` 函數的回傳值是 `user` 物件，意味著 updatedUser 的值與 `user` 指向的是同一個 `user` 物件。`updatedUser === user` 為 `true`.

</p>
</details>

---

###### 149. 將會輸出什麽內容？

```javascript
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

首先，我們在 fruit 陣列上呼叫 `slice` 函數。slice 函數不會修改原始陣列，但是會回傳從陣列切片下來的值：香蕉 emoji。
其次，我們在 fruit 陣列上呼叫 `splice` 函數。splice 函數會修改原始陣列，也就意味著 fruit 陣列此時為 `['🍊', '🍎']`。
最後，我們在 fruit 陣列上呼叫 `unshift` 函數，通過添加一個值的方式改變了原始陣列，添加的是'🍇'，它成為了陣列的第一個元素。現在 fruit 陣列的組成為 `['🍇', '🍊', '🍎']`。

</p>
</details>

---

###### 150. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

物件的鍵會被轉換為字符串。

因為 `dog` 的值是一個物件，`animals[dog]` 實際上意味著我們建立了一個叫做 `"object Object"` 的屬性來代表新的物件。`animals["object Object"]` 現在等於 `{ emoji: "🐶", name: "Mara"}`。

`cat` 也是一個物件，`animals[cat]` 實際上意味著我們在用新的 cat 的屬性覆蓋 `animals[``"``object Object``"``]` 的值。

輸出`animals[dog]`，實際上是`animals["object Object"]`，這是因為轉化`dog`物件為一個字符串結果`"object Object"`，所以回傳`{ emoji: "🐈" , name: "Sara" }`。

</p>
</details>

---

###### 151. 將會輸出什麽內容？

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

<details><summary><b>答案</b></summary>
<p>

#### 答案：A

`updateEmail` 函數是一個箭頭函數，它沒有和 `user` 物件綁定。這就意味著 `this` 關鍵字不會引用到 `user` 物件，但是會引用到全局物件。`user` 物件內部的 `email` 的值不會更新。當輸出​​ `user.email` 的時候，原始值 `my@email.com` 被回傳。

</p>
</details>

---

###### 152. 將會輸出什麽內容？

```javascript
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
```

- A: `[['First', 'Second'], ['Fourth']]`
- B: `[['First', 'Second'], ['Third', 'Fourth']]`
- C: `[['First', 'Second']]`
- D: `'Third'`

<details><summary><b>答案</b></summary>
<p>

#### 答案：D

 `Promise.all` 函數可以並行式執行 promise。如果其中一個 promise 失敗了，`Promise.all` 函數會帶上被 reject 的 promise 的值_rejects_。在這個例子中，`promise3` 帶著 `"Third"` 值 reject。我們在呼叫 `runPromises` 時在 `runPromises` 函數內部的 `catch` 函數去捕獲任意 error 從而捕獲到被 reject 的值。因為 `promise3` 帶著 `"Third"` 被 reject，所以只有 `"Third"` 輸出。

</p>
</details>

---

###### 153. 哪個作為`method`的值可以輸出`{ name: "Lydia", age: 22 }`?

```javascript
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
```

- A: `entries`
- B: `values`
- C: `fromEntries`
- D: `forEach`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

`fromEntries` 函數可以將二維陣列轉換為物件。在每個子陣列的第一個元素是 key，在每個子陣列的第二個元素是 value。在這個例子中，我們映射了 `keys` 陣列，它回傳了一個陣列，陣列的第一個元素為 keys 陣列當前索引的值，第二個元素為 values 陣列當前索引的值。

這樣就建立了一個包含正確 keys 和 values 的子陣列的陣列，因此結果為`{ name: "Lydia", age: 22 }`。

</p>
</details>

---

###### 154. 將會輸出什麽內容？

```javascript
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
```

- A: `{ email: "my@email.com", address: null }`
- B: `{ email: "my@email.com" }`
- C: `{ email: "my@email.com", address: {} }`
- D: `{ email: "my@email.com", address: undefined }`

<details><summary><b>答案</b></summary>
<p>

#### 答案：C

 `address` 的預設值是一個空物件 `{}`。當我們設置 `member` 變數為 `createMember` 函數回傳的物件，我們沒有為 address 參數傳值，意味著 address 的值為預設的空物件 `{}`。一個空物件是一個 truthy 值，意味著 `address ? address : null` 條件會回傳 `true`。address 的值為空物件 `{}`。

</p>
</details>

---

###### 155. 將會輸出什麽內容？

```javascript
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案：B

 `if` 語句的條件判斷 `!typeof randomValue` 的值是否等於 `"string"`。`!` 操作符將這個值轉化為一個布林值。如果值是 truthy 的話，回傳值會是 `false`，如果值是 falsy，回傳值會是 `true`。在這裡，`typeof randomValue` 的回傳值是一個 truthy 值 `"number"`，意味著 `!typeof randomValue` 的值是一個布林值 `false`。

 `!typeof randomValue === "string"` 總是回傳 false，因為我們實際上是在執行 `false === "string"`。因為條件回傳的是 `false`，所以 `else` 語句中的代碼塊會被執行，因此輸出 `Yay it's a string!`。

</p>
</details>
