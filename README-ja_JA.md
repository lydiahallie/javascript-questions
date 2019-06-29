# JavaScript  (高度な) 問題集

私は毎日、JavaScriptに関する選択問題を [Instagram](https://www.instagram.com/theavocoder)に投稿していますが、ここにも投稿します。

初級から上級まで： JavaScriptの知識のテストを行ったり、知識を少し深めたり、コーディング面接の準備をしてください。:muscle: :rocket: 私はこのレポを毎週新しい質問で更新します。

答えは質問の下の折りたたまれたセクションにあります、クリックすればそれを広げられます。幸運を祈ります。:heart:


[中文版本](./README-zh_CN.md)  
[Русский](./README_ru-RU.md)  
[Western Balkan](./README-bs_BS.md)  
[Deutsch](./README-de_DE.md)  
[Tiếng Việt](./README-vi.md)  
[日本語](./README-ja_JA.md)

---

###### 1. 何が出力されるでしょうか？

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` と `undefined`
- B: `Lydia` と `ReferenceError`
- C: `ReferenceError` と `21`
- D: `undefined` と `ReferenceError`

<details><summary><b>答え</b></summary>
<p>

#### 答え: D

関数内で、まず `var`キーワードを使って `name`変数を宣言します。これは、変数が定義されている行に実際に到達するまで、変数がデフォルト値の `undefined`で初期化される（作成時にメモリ空間が設定される）ことを意味します。 

`name`変数をログ出力を実行している行では、まだ変数を定義していませんので、`undefined`の値を保持しています。

`let`キーワード（または`const`）を持つ変数は持ち上げられますが、 `var`とは異なり、初期化されません。それらを宣言（初期化）する行の前にはアクセスできません。これは"temporal dead zone"と呼ばれます。

宣言される前に変数にアクセスしようとすると、JavaScriptは `ReferenceError`を投げます。

</p>
</details>

---

###### 2. 何が出力されるでしょうか？

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` と `0 1 2`
- B: `0 1 2` と `3 3 3`
- C: `3 3 3` と `0 1 2`

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

JavaScriptのイベントキューのため、`setTimeout`コールバック関数はループが実行された後に呼び出されます。最初のループの変数 `i`は`var`キーワードを使って宣言されているので、この値はグローバル変数となります。ループの間、単項演算子 `++`を使用して、毎回 `i`の値を`1`ずつインクリメントしました。 最初の例では `setTimeout`コールバック関数が呼び出されるまでに`i`は`3`となりました。

2番目のループでは、変数 `i`が `let`キーワードを使って宣言されました。 `let`（または`const`）キーワードで宣言された変数はブロックスコープです（ブロックは `{}`の間のものです）。それぞれの繰り返しの間、 `i`は新しい値を持ち、それぞれの値はループの内側にあります。

</p>
</details>

---

###### 3. 何が出力されるでしょうか？

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

- A: `20` と `62.83185307179586`
- B: `20` と `NaN`
- C: `20` と `63`
- D: `NaN` と `63`

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`diameter`の値は正則関数であり、`perimeter`の値はアロー関数です。

アロー関数では、`this`キーワードは通常の関数とは異なり、現在の周囲の範囲を参照します。これは、`perimeter`関数を呼ぶと、shapeオブジェクトではなく、その周囲の範囲（例えば window）を参照することを意味します。

そのオブジェクトには`radius`という値はなく、`undefined`を返します。

</p>
</details>

---

###### 4. 何が出力されるでしょうか？

```javascript
+true;
!"Lydia";
```

- A: `1` と `false`
- B: `false` と `NaN`
- C: `false` と `false`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

単項プラスは、オペランドを数値に変換しようとします。`true`は`1`、`false`は`0`です

文字列「Lydia」は truthy valueです。ここで求めているのは、「このtruthy valueは、falsyなのか」ということです。これは `false`を返します。

</p>
</details>

---

###### 5. 正解はどれでしょう？

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
- D: これらすべて有効です

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

JavaScriptでは、すべてのオブジェクトキーは文字列です（Symbolでない限り）。たとえそれを文字列として入力していなくても、それらは常にフードの下で文字列に変換されます。

JavaScriptは、ステートメントを解釈（または、ボックス解除）します。大括弧表記を使用すると、最初の左大括弧 `[`を見て、右大括弧 `]`が見つかるまで進みます。その時だけ、そのステートメントを評価します。

`mouse [bird.size]`： まず最初に、`bird.size`が評価されます。これは文字列の `"small"`となります。 `mouse["small"]`は、`true`を返します。

しかし、ドット表記では、これは起こりません。 `mouse`は`bird`と呼ばれるキーを持っていません。 つまり`mouse.bird`は`undefined`となります。

また、ドット表記を使って `size`を求めます： `mouse.bird.size`。 mouse.birdは未定義なので、実際にはundefined.sizeを要求しています。これは有効ではないので、`Cannot read property "size" of undefined`ような、エラーをスローします。

</p>
</details>

---

---

###### 6. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

JavaScriptでは、すべてのオブジェクトは互いに等しく設定すると参照によって相互作用します。

まず、変数`c`は、オブジェクトに対する値を保持します。その後、`c`オブジェクトに対して持っている値と同じ参照で`d`に代入します。

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

1つのオブジェクトを変更すると、それらすべてが変更されます。

</p>
</details>

---

###### 7. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

`new Number()`は、組み込み関数のコンストラクタです。数字のように見えますが、実際には数字ではありません。たくさんの追加機能があり、それはオブジェクトとなります。

`==`演算子を使うとき、同じ値を持っているかどうか？ をチェックするだけとなります。それらは両方とも`3`の値を持っているので、それは`true`を返します。

しかし、`===`演算子を使う時は、値と型は同じであるべきです。 そうでないので: `new Number()`は数値ではなく、**オブジェクト**となります。なので、両方ともfalseを返します。

</p>
</details>

---

###### 8. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: D

`colorChange`関数は静的です。静的メソッドは、それらが作成されたコンストラクタ上でのみ動作するように設計されており、どの子達にも受け継がれません。 `freddie`は子となりますので、この関数は受け継がれず、`freddie`インスタンスでは利用できません。

その結果、`TypeError`が投げられます。

</p>
</details>

---

###### 9. 何が出力されるでしょうか？

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

グローバルオブジェクトに、空のオブジェクトを作成したばかりなので、オブジェクトはログ出力されます。`greeting`を`greetign`と誤って入力した場合、JSインタプリタは実際にこれを `global.greetign = {}`（またはブラウザの `window.greetign = {}`）と見なします。

これを避けるために、"use strict"を使用する事ができます。これにより、変数を何かに設定する前に、変数宣言したことを確認できます。

</p>
</details>

---

###### 10. これを行うと、どうなりますか？

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: 何も起こらない、これは全く問題ない！
- B: `SyntaxError`. この方法で関数にプロパティを追加することはできません。
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

関数はオブジェクトとなるので、これはJavaScriptで可能です。（プリミティブ型以外はすべてオブジェクトです。）

関数は特別な種類のオブジェクトです。自分で書いたコードは実際の機能ではありません。関数はプロパティを持つオブジェクトです。よって、このプロパティは呼び出し可能となります。

</p>
</details>

---

###### 11. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

通常のオブジェクトのようにコンストラクタにプロパティを追加することはできません。一度にすべてのオブジェクトに機能を追加したい場合は、代わりにプロトタイプを使用する必要があります。だからこの場合は、

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

で、`member.getFullName()`が、機能するはずです。これはなぜ有益なのでしょうか。例えば、このメソッドをコンストラクタ自体に追加したとします。すべての`Person`インスタンスがこのメソッドを必要としなかったのかもしれません。

その場合、多くのメモリスペースを浪費する事でしょう。なぜならそれらはまだその特性を持ち、それは各インスタンスのためにメモリスペースを消費するからです。

その代わりに、プロトタイプに追加するだけであれば、メモリ内の1箇所に配置するだけで、すべてのユーザーがアクセスできます。

</p>
</details>

---

###### 12. 何が出力されるでしょうか？

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` と `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` と `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` と `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` と `ReferenceError`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

`sarah`では、`new`キーワードを使いませんでした。`new`を使用した場合、作成した新しい空のオブジェクトを参照します。しかし、`new`を追加しなければ、それは**グローバルオブジェクト**を参照することとなります。

`this.firstName`に`"Sarah"`を代入、`this.lastName`に`"Smith"`を代入したつもりでしたが、実際に行った事は、`global.firstName = 'Sarah'` と、`global.lastName = 'Smith'`を定義したのです。

`sarah`自体は` undefined`のままです。

</p>
</details>

---

###### 13. イベント伝播の3つの段階はどれですか？

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>答え</b></summary>
<p>

#### 答え: D

**capture**フェーズの間、イベントは先祖の要素を通過してターゲットの要素になります。それから**target**要素に達した後、**バブリング**が開始されます。

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. すべてのオブジェクトはプロトタイプを持っています。

- A: true
- B: false

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

**基本オブジェクト**を除き、すべてのオブジェクトにプロトタイプがあります。ベースオブジェクトは`.toString`のようないくつかのメソッドとプロパティにアクセスできます。

これが、組み込みのJavaScriptメソッドを使用できる理由です。このような方法はすべてプロトタイプで利用できます。 

JavaScriptはそれをあなたのオブジェクト上で直接見つけることはできませんが、プロトタイプチェーンをたどり、見つけます。

</p>
</details>

---

###### 15. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

JavaScriptは、**動的に型付けされた言語**です。: 特定の変数がどんな型であるかは指定しません。知らないうちに、値が自動的に別の型に変換されることがあります。この事を`implicit type coercion`と呼ばれてます。 **Coercion**は、ある型から別の型に変換しています。

この例では、関数が意味を成して値を返すために、JavaScriptは数字の`1`を文字列に変換します。数値型（`1`）と 文字列型（`'2'`）の追加中は、数字は文字列として扱われます。 

`"Hello"+"World"`のように文字列を連結することができるので、ここで起こっているのは`"1"+"2"`で、これは `"12"`を返します。

</p>
</details>

---

###### 16. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

**接尾辞** 単項演算子 `++`：

1.値を返す（これは`0`を返す）
2.値を増やす（numberは現在`1`です）

**接頭辞** 単項演算子 `++`：

1.値を増やす（数値は2になります）
2.値を返す（これは`2`を返します）

これは`0 2 2`を返します。

</p>
</details>

---

###### 17. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

タグ付きテンプレートリテラルを使用する場合、最初の引数の値は常に文字列値の配列です。残りの引数は渡された式の値を取得します。

</p>
</details>

---

###### 18. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

等価性をテストするとき、プリミティブはそれらの値によって比較され、オブジェクトはそれらの参照によって比較されます。 JavaScriptは、オブジェクトがメモリ内の同じ場所への参照を持っているかどうかを確認します。

比較している2つのオブジェクトにはそれがありません。パラメータとして渡したオブジェクトが、等価性を確認するために使用したオブジェクトとは異なるメモリ内の場所を参照しています。

これが `{ age: 18 } === { age: 18 }`と、`{ age: 18 } == { age: 18 }`の両方が、`false`を返す理由です。

</p>
</details>

---

###### 19. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

スプレッド演算子(`... args`.)は、引数付きの配列を返します。配列はオブジェクトなので、`typeof args`は、`"object"`を返します。

</p>
</details>

---

###### 20. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

`"use strict"`を使うと、誤ってグローバル変数を宣言しないようにすることができます。変数`age`を宣言したことは一度もありませんし、`"use strict"`を使っているので参照エラーになります。 

`"use strict"`を使用しなかった場合は、プロパティ`age`がグローバルオブジェクトに追加されたことになるので、それは機能します。

</p>
</details>

---

###### 21. sumの値は何？

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

`eval`は文字列として渡されたコードを評価します。この場合のように式であれば、その式を評価します。表現は`10 * 10 + 5`です。これは`105`を返します。

</p>
</details>

---

###### 22. cool_secretは、どのくらいの期間アクセス可能ですか？

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: 永遠に、データが失われることはありません。
- B: ユーザーがタブを閉じる時
- C: ユーザーがタブだけでなくブラウザ全体を閉じる時。
- D: ユーザーが自分のコンピュータをシャットダウンした時。

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`sessionStorage`に格納されたデータは、タブを閉じた後に削除されます。

`localStorage`を使用した場合は、`localStorage.clear()`などが呼び出されない限り、データは永久に存在しているでしょう。

</p>
</details>

---

###### 23. 何が出力されるでしょうか？

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`var`キーワードを使うと、同じ名前で複数の変数を宣言できます。変数は最新の値を保持します。

ブロックスコープの`let`や`const`では、できません。

</p>
</details>

---

###### 24. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

すべてのオブジェクトキー（Symbolsを除く）は、文字列として自分で入力しなくても、内部では文字列です。これが、`obj.hasOwnProperty('1')`も​​trueを返す理由です。

setではそうはいきません。上記のsetには`'1'` はありません: `set.has('1')`は、`false`を返します。数値型`1`の`set.has(1)`は、`true`を返します。

</p>
</details>

---

###### 25. 何が出力されるでしょうか？

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

同じ名前のキーが2つある場合、最初の位置にあるキーは置き換えられ、最後に指定された値になります。

</p>
</details>

---

###### 26. JavaScriptのglobal execution contextは、2つを作成します。: それはグローバルオブジェクトと "this"キーワードです。

- A: true
- B: false
- C: 場合によりけり

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

基本的なexecution contextは、グローバルな実行コンテキストです。それはあなたのコードの至る所でアクセス可能なものです。

</p>
</details>

---

###### 27. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

`continue`ステートメントは、ある条件が`true`を返すと、繰り返し処理をスキップします。

</p>
</details>

---

###### 28. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

`String`はプロパティを追加することができる組み込みコンストラクタです。プロトタイプにメソッドを追加しました。

プリミティブ文字列は、文字列プロトタイプ関数によって生成された文字列オブジェクトに自動的に変換されます。

つまり、すべての文字列（文字列オブジェクト）がそのメソッドにアクセスできます。

</p>
</details>

---

###### 29. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

オブジェクトキーは自動的に文字列に変換されます。オブジェクトaのキーとして、値123で設定しようとしています。

しかし、オブジェクトを文字列化すると、それは`"[Object object]"`​​になってしまいます。なので、ここで行っているのは、 `a["Object object"] = 123`です。

その後、同じことをもう一度試みています。`c`は暗黙のうちに文字列化している別のオブジェクトです。そのため、`a["Object object"] = 456`となります。

その後、`a[b]`でログ出力。実際には`a["Object object"]`です。これを `456`に設定しただけなので、`456`を返します。

</p>
</details>

---

###### 30. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`setTimeout`関数があり、それを最初に呼び出したのですが、それは最後にログ出力されました。

これは、ブラウザにはランタイムエンジンがあるだけでなく、`WebAPI`と呼ばれるものもあるからです。`WebAPI`は最初に`setTimeout`関数を与えてくれます。例えばDOMです。

callbackがWebAPIにプッシュされた後、`setTimeout`関数自体（コールバックではありません!）がスタックからポップされます。

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

今、`foo`が呼び出され、`"First"`が、ログ出力されています。

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo`がスタックからポップされ、`baz`が呼び出されます。`"Third"`が、ログ出力されます。

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPIは、準備が整ったときにスタックに、なにかを追加することはできません。代わりに、コールバック関数を`queue`と呼ばれるものにプッシュします。

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

event loopが機能し始めるところです。 **event loop**はスタックとタスクキューを調べます。スタックが空の場合は、キューの最初のものを取り出し、それをスタックにプッシュします。

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar`が呼び出され、`"Second"`がログ出力され、スタックからポップされます。

</p>
</details>

---

###### 31.ボタンをクリックしたときのevent.targetは何ですか？

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: 外側 `div`
- B: 内側 `div`
- C: `button`
- D: ネストしたすべての要素の配列

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

イベントを引き起こした最も深くネストした要素がイベントのターゲットとなります。`event.stopPropagation`でバブリングを止めることができます

</p>
</details>

---


###### 32. p要素をクリックすると、ログ出力はどうなりますか。

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

`p`をクリックすると、`p`と`div`の2つのログが表示されます。イベント伝播中は、キャプチャ、ターゲット、バブリングの3つのフェーズがあります。

デフォルトでは、イベントハンドラはバブリング段階で実行されます（`useCapture`を`true`に設定しない限り）。最も深くネストした要素から外側に向かって進みます。

</p>
</details>

---

###### 33. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: D

両方とも、`this`キーワードが参照したいオブジェクトを渡すことができます。しかし、`.call`もすぐに実行されます。

`.bind.`は関数のコピーを返しますが、コンテキストは束縛されています。すぐには実行されません。

</p>
</details>

---

###### 34. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`sayHi`関数は、即時呼び出し関数式（IIFE）の戻り値を返します。この関数は`0`を返しました。それは`"number"`型です。

参考：7つの組み込み型しかありません： `null`, `undefined`, `boolean`, `number`, `string`, `object`, そして`symbol`。関数はオブジェクトなので、`"function"`型ではなく`"object"`型です。

</p>
</details>

---

###### 35. これらの値のどれがfalsyですか？

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
- D: これらすべてfalsy

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

falsyの値は6つだけです。

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

`new Number`や、`new Boolean`のような関数コンストラクタはtruthyです。

</p>
</details>

---

###### 36. 何が出力されるでしょうか？

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`typeof 1`は、`"number"`を返します。

`typeof "number"`は、`"string"`を返します。

</p>
</details>

---

###### 37. 何が出力されるでしょうか？

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

配列の長さを超える値を配列内の要素に設定すると、JavaScriptでは、"empty slots"と呼ばれるものを作成します。これらは実際には、`undefined`の値を持ちますが、あなたは以下のようなものを見るでしょう

`[1, 2, 3, 7 x empty, 11]`

実行場所によって異なります（browser、nodeなどによって異なります）。

</p>
</details>

---

###### 38. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

`catch`ブロックは引数`x`を受け取ります。これは引数を渡すときの変数と同じ`x`ではありません。この変数`x`はブロックスコープです。

後に、このブロックスコープ変数を`1`に設定し、変数`y`の値を設定します。ここで、ブロックスコープ変数`x`をログ出力します。これは`1`となります。

`catch`ブロック以外では、`x`は未定義、`y`は2です。 `catch`ブロックの外側で`console.log(x)`した場合は、`undefined`を返し、`y`は`2`を返します。

</p>
</details>

---

###### 39. JavaScriptのすべてはどちらかです...

- A: primitive か object
- B: function か object
- C: ひっかけ問題! objectsのみ
- D: number か object

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

JavaScriptにはプリミティブ型とオブジェクトしかありません。

プリミティブ型は、`boolean`, `null`, `undefined`, `bigint`, `number`, `string`, そして`symbol`です。

プリミティブとオブジェクトを区別するのは、プリミティブにはプロパティもメソッドもないということです。

ただし、`'foo'.toUpperCase()`は`'FOO'`と評価され、`TypeError`にはなりません。これは、文字列のようなプリミティブのプロパティやメソッドにアクセスしようとすると、JavaScriptがラッパークラスの1つ、すなわち`String`を使ってオブジェクトを暗黙的にラップし、式が評価された後ラッパーを直ちに破棄するためです。 

`null`と`undefined`を除くすべてのプリミティブはこの振る舞いをします。

</p>
</details>

---

###### 40. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

`[1,2]`は初期値です。これが最初の値で、一番最初の`acc`の値です。最初の周回の間、`acc`は`[1,2]`で、`cur`は`[0,1]`です。それらを連結すると、結果として`[1、2、0、1]`となります。

そして、`[1, 2, 0, 1]`の`acc`と`[2, 3]`の`cur`を連結して`[1, 2, 0, 1, 2, 3]`を得ます

</p>
</details>

---

###### 41. 何が出力されるでしょうか？

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

`null`はfalsyです。`!null`は`true`を返します。`!true`は`false`を返します。

`""`はfalsyです。`!""`は`true`を返します。`!true`は`false`を返します。

`1`はtruthyです。`!1`は`false`を返します。`!false`は`true`を返します。

</p>
</details>

---


###### 42. `setInterval`メソッドはブラウザに何を返しますか？

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: ユニークid
- B: 指定されたミリ秒数
- C: 渡された関数
- D: `undefined`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

一意のIDを返します。このIDは `clearInterval()`関数で、その間隔をクリアするために使うことができます。

</p>
</details>

---

###### 43. これは何を返しますか？

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

文字列はイテラブルです。スプレッド演算子は、イテラブルのすべての文字を1つの要素にマッピングします。

</p>
</details>

###### 44. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

通常の関数は、呼び出し後に途中で停止することはできません。ただし、ジェネレータ関数は途中で"停止"し、後で停止した場所から続行することができます。

ジェネレータ関数が`yield`キーワードを見つけるたびに、その関数はその後に指定された値を返します。その場合のジェネレータ関数は、値を"返す"わけではないことに注意してください。値を生み出しています。

まず、`i`に`10`を指定してジェネレータ関数を初期化します。次に`next()`メソッドを使用してジェネレータ関数を呼び出します。

最初にジェネレータ関数を呼び出すと、`i`は`10`になり、最初の`yield`キーワードに遭遇します。そこから`i`の値が得られます。ジェネレータは"一時停止"され、`10`がログ出力されます。

それから、`next()`メソッドを使って関数を再度呼び出します。依然として`i`は`10`のまま、以前に停止したところから継続し始めます。

それから次の`yield`キーワードに遭遇し、そこから`i * 2`の値が得られます。`i`は`10`のままなので、`10 * 2`、つまり`20`を返します。なので、`10、20`が返る事になります。

</p>
</details>

---

###### 45. これは何を返しますか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

複数のプロミスを`Promise.race`メソッドに渡した時、"resolves/rejects"は、"最初"のプロミスの"resolves/rejects"を行います。

`setTimeout`メソッドには、タイマーを渡します: 最初のプロミスには500ms(`firstPromise`)、2番目のプロミスには100ms(`secondPromise`)。

これは、`secondPromise`が最初に`'two'`の値で解決されることを意味します。`res`は`'two'`の値を保持するようになり、ログ出力されます。

</p>
</details>

---

###### 46. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: D

まず、`name`プロパティを持つオブジェクトの値を使って、変数`person`を宣言します。

<img src="https://i.imgur.com/TML1MbS.png" width="200">

それから、`members`という変数を宣言します。その配列の最初の要素に、変数`person`の値を代入します。オブジェクトは、互いをイコールで設定すると、「参照」によって相互作用します。

ある変数から別の変数への"参照"を代入すると、その参照の"コピー"が作成されます。 (それらは、"同じ参照"を持っていないことに注意してください！)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

そして、変数`person`を`null`に設定します。

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

その要素はオブジェクトへの異なる（コピーされた）参照を持っているので、`person`変数の値を変更するだけで配列の最初の要素は変更されません。 `members`の最初の要素はまだ元のオブジェクトへの参照を保持しています。
 
`members`配列をログ出力したとき、最初の要素はまだオブジェクトの値を保持しているので、それがログ出力されます。

</p>
</details>

---

###### 47. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

この場合、`for-in`ループを使うと、オブジェクトキーである`name`と`age`の繰り返し処理できます。内部的には、オブジェクトキーは文字列です（シンボルではない場合）。

すべてのループで、`item`の値は反復している現在のキーに設定されます。まず、`item`は`name`が代入され、ログに出力されます。その後、`item`は`age`が代入され、ログに出力されます。

</p>
</details>

---

###### 48. 何が出力されるでしょうか？

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

演算子結合性は、コンパイラーが式を評価する順序（左から右または右から左）となります。これは、すべての演算子が同じ優先順位を持つ場合にのみ発生します。演算子の種類は1つだけです: `+`。さらに、結合性は左から右です。

`3 + 4`が最初に評価されます。これは数字の`7`になります。

`7 + '5'`は、強制的に`"75"`になります。 JavaScriptでは、数字の`7`を文字列に変換します。質問15を参照してください。2つの文字列を演算子の`+`を使って連結することができます。よって、`"7" + "5"`は、`"75"`になります。

</p>
</details>

---

###### 49. numの値は何ですか？

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

文字列の最初の数字だけが返されます。"基数"（解析する数値の種類を指定するための2番目の引数: 基数10, 16進数, 8進数, 2進数など）に基づいて、`parseInt`は文字列内の文字が有効かどうかをチェックします。基数の中で有効な数字ではない文字に出会うと、構文解析を停止して次の文字を無視します。

`*`は、有効な数字ではありません。`"7"`を、10進数の`7`に解析するだけです。そのままnumは`7`の値を保持します。

</p>
</details>

---

###### 50. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: C

配列をマッピングするとき、`num`の値に代入されるのは、ループで渡ってくる要素となります。この場合、要素は数値なので、ifステートメント `typeof num === "number"`の条件は`true`を返します。 map関数は新しい配列を作成して関数から返された値を挿入します。

ただし、値は返されません。関数から値を返さないと、関数は`undefined`を返します。配列内のすべての要素に対して関数ブロックが呼び出されるので、各要素に対して`undefined`を返します。

</p>
</details>

---

###### 51. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

値がオブジェクトでない限り、引数は"値"によって渡され、その後、"参照"によって渡されます。 `birthYear`はオブジェクトではなく文字列なので、値で渡されます。引数を値で渡すと、その値の"コピー"が作成されます（質問46を参照）。

変数`birthYear`は、値`"1997"`への参照を持ちます。引数`year`は、値`"1997"`も参照していますが、それは`birthYear`が参照しているのと同じ値ではありません。`year`に`"1998"`を代入することによって`year`の値を更新したとしても、`year`の値を更新するだけです。`birthYear`はまだ`"1997"`となります。

`person`の値はオブジェクトです。引数`member`は"同じ"オブジェクトへの（コピーされた）参照を持ちます。

`member`が参照を持つオブジェクトのプロパティを変更すると、`person`の値も変更されます。これらは両方とも同じオブジェクトへの参照を持つからです。`person`の`name`プロパティは、値の`"Lydia"`となりました。

</p>
</details>

---

###### 52. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: D

`throw`ステートメントを使って、カスタムエラーを作ることができます。このステートメントで、あなたは例外を投げることができます。例外は、<b>string</b>, <b>number</b>, <b>boolean</b>, <b>object</b>のいずれかとなります。上記の場合だと、例外は文字列`'Hello world'`となります。

`catch`ステートメントを使って、`try`ブロックで例外が投げられた場合にどうするかを指定できます。例外がスローされます: 文字列`'Hello world'`は、`e`に代入されます。その結果`'Oh an error: Hello world'`となります。

</p>
</details>

---

###### 53. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: B

プロパティを返すと、そのプロパティの値は、コンストラクタ関数で設定された値ではなく、"戻り値"となります。 `"Maserati"`という文字列を返すので、`myCar.make`は `"Maserati"`となります。

</p>
</details>

---

###### 54. 何が出力されるでしょうか？

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

<details><summary><b>答え</b></summary>
<p>

#### 答え: A

`let x = y = 10;` is actually shorthand for:

```javascript
y = 10;
let x = y;
```

`y`に`10`を代入すると、実際にはグローバルオブジェクトにプロパティ`y`が追加されます（ブラウザでは`window`、nodeでは`global`）。ブラウザでは、`window.y`は`10`となりました。

それから、変数`x`を`10`である値`y`で宣言します。`let`キーワードで宣言された変数は"ブロックスコープ"となり、宣言されたブロック内でのみ定義されます。この場合は即時関数（IIFE）となります。 

`typeof`演算子使用時、オペランド`x`は定義されていません: 宣言されているブロックの外側で`x`にアクセスしようとしています。これは`x`が定義されていないことを意味します。

値が割り当てられていない、または宣言されていない値は`"undefined"`型となります。なので`console.log(typeof x)`は`"undefined"`を返します。

yに関しては、`y`に`10`を代入するときにグローバル変数`y`を作成しました。この値は、コード内のどこからでもアクセスできます。`y`が定義されていて、`"number"`型の値を保持します。よって`console.log(typeof y)`は`"number"`を返します。

</p>
</details>
