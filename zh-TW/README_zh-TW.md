<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png"> 
  <h1>JavaScript 進階題目列表</h1>

  ---

  <span>我會在我的 [Instagram](https://www.instagram.com/theavocoder) 上發布關於 JavaScript 的複選題，同時也會更新到這個 Repo 當中。更新日期： <a href=#20191224><b>2019 年 12 月 24 日</b></a>

  從基礎到進階程度，測試你有多了解 JavaScript，不僅更新你的知識，更能幫助你的 coding 面試！
:muscle: :rocket: 我每週都會在這個 Repo 中更新新的題目。

答案在題目下方的摺疊區塊，點擊即可展開答案。祝你好運 :heart:</span>

  歡迎和我聯繫！😊 <br />
  <a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https:/www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="www.lydiahallie.dev">Blog</a>
  </div>


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

#### 答案: D

在函式內部，我們首先透過 `var` 關鍵字宣告了 `name` 變數。這表示變數被提升了（記憶體位置在創建時期就被設置好了），直到程式執行到定義變數的那行之前，預設值都是 `undefined`。因為當我們印出 `name` 變數時，還沒有執行到定義變數的那一行程式碼，因此變數的值保持為 `undefined`。

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

#### 答案: C

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

#### 答案: B

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

#### 答案: A

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

#### 答案: A

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

#### 答案: A

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

#### 答案: C

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

#### 答案: D

`colorChange` 是一個靜態方法。靜態方法被設計爲只能被創造它們的建構子使用（也就是 `Chameleon` 中的 `constructor` ），並且不能傳遞給實例。因為 `freddie` 是一個實例，而靜態方法不能被實例使用，因此會抛出 `TypeError` 錯誤。

</p>
</details>

---

###### 9. 將會輸出什麽內容？

```javascript
let greeting
greetign = {} // 手殘打錯變數名稱!
console.log(greetign)
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

程式碼印出了一個物件，這是因為我們在全域物件上創建了一個空物件！當我們將 `greeting` 寫錯成 `greetign` 時，JS 解譯器實際上將它視爲 `global.greetign = {}` （或者在瀏覽器中視為 `window.greetign = {}`）。

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

#### 答案: A

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

#### 答案: A

你可以為一般物件新增屬性，但建構函式（constructor）無法透過上面的方式來新增屬性。若你想一次性在所有實例上都新增某個屬性，要使用原型的方式。因此本例中，使用以下的方式：

```js
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
```

這樣一來， `member.getFullName()` 就能有效。這樣做有什麼好處？假設我們真的能如題將這個方法新增到建構函式本身，並不是每個 `Person` 實例都需要這個方法，但每個實例卻仍然擁有該属性，代表著這將佔據每個實例的記憶體，造成大量的記憶體空間因此浪費掉了。相反，如果我們只將它新增在原型中，那麼它只存在記憶體中的一個位置，而所有實例都可以使用它！

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

#### 答案: A

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

#### 答案: D

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

#### 答案: B

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

#### 答案: C

JavaScript 是一個**動態型別語言**：我們不指定變數的型別。值可以在你不知道的情况下自動轉換成另一種型別，稱為**隱含式轉型**（implicit type coercion）。**Coercion** 是指將一種型別轉換成另一種型別。

在此範例中，JavaScript 將數字型別 `1` 轉換為字串型別，以便函式能回傳一個有意義的值。數字型別（`1`）和字串型別（`'2'`）相加的時候，該數字會被視為字串。我們也能連接不同的字串，比如 `"Hello" + "World"`，而此例是 `"1" + "2"`，它將回傳 `"12"`。

</p>
</details>