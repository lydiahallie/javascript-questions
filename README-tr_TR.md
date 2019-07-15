# JavaScript Sorular Listesi (İleri Düzey)

[Instagram](https://www.instagram.com/theavocoder) hesabımda, günlük olarak çoktan seçmeli Javascript soruları paylaşıyorum, ayrıca burada da paylaşacağım!

Temelden ileri düzeye: Javascript'i ne kadar iyi bildiğinizi test edin, bilginizi biraz tazeleyin ya da mülakatanıza hazırlanın! :muscle: :rocket: Repoyu haftalık olarak yeni sorularla güncelliyorum. Son güncelleme: Last update: <a href=#20190707><b>7 Temmuz</b></a>

Cevaplar, soruların altında gizlenmiştir. Görmek için sadece tıklayın. İyi şanşlar :heart:

Mevcut dillerin listesi:

* [English](./README.md)
* [العربية](./README_AR.md)
* [اللغة العامية - Egyptian Arabic](./README_ar-EG.md)
* [Bosanski](./README-bs_BS.md)  
* [Deutsch](./README-de_DE.md)  
* [Español](./README-ES.md)
* [日本語](./README-ja_JA.md)  
* [한국어](./README-ko_KR.md) 
* [Português Brasil](./README_pt_BR.md)  
* [Русский](./README_ru-RU.md)  
* [Українська мова](./README-ua_UA.md)  
* [Tiếng Việt](./README-vi.md)
* [中文版本](./README-zh_CN.md)
* [Türkçe](./README-tr_TR.md)

---

###### 1. Çıktısı nedir?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` ve `undefined`
- B: `Lydia` ve `ReferenceError`
- C: `ReferenceError` ve `21`
- D: `undefined` ve `ReferenceError`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

Fonksiyonun içinde, önce `var` anahtar kelimesi ile `name` değişkenini tanımladık. Bu demektir ki, değişken varsayılan değeri olan `undefined` ile "hoisting" (hafızada alan oluşturma aşaması) olur, ta ki gerçekten değişkene değer ataması yaptığımız satıra varana dek. `name` değişkenini loglayama çalıştığımız satırda henüz değişkeni tanımlamadık, bu yüzden hala `undefined` değerini saklıyor.
 
`let` (ve `const`) anahtar kelimelerine sahip değişkenler de "hoisted" olur, ama `var`'ın aksine <i>ilk değer ataması</i> yapılmaz. Değişkenleri tanımladığımız (ilk değer ataması yaptığımız) satırdan önce erişilebilir değillerdir. Bu, "geçici ölü alan / geçici değişmez çıktı alanı", "temporal dead zone", olarak adlandırılır. Değişkenlere, tanımlanmadan önce erişmeye çalıştığımız zaman, Javascript `ReferenceError` hatası fırlatır.
</p>
</details>

---

###### 2. Çıktısı Nedir?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` ve `0 1 2`
- B: `0 1 2` ve `3 3 3`
- C: `3 3 3` ve `0 1 2`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Javascript'deki olay kuyruğundan dolayı, `setTimeout` callback fonksiyonu, döngü uygulandıktan _sonra_ çağrılır. `i` değişkeni, ilk döngü sırasında `var` anahtar kelimesi ile tanımlandığından, bu değişken globaldir. Döngü boyunca, `++` unary operatörünü kullanarak, `i`'nin değerini her seferinde `1` arttırdık. İlk örnekte, `setTimeout` callback fonksiyonu çağrıldığı zaman, `i`'nin değeri `3`'e eşitti.

İkinci döngüde, `i` değişkeni `let` anahtar kelimesi kullanılarak tanımlandı: `let` (ve `const`) ile tanımlanan değişkenler "block-scope"dur (block `{}` arasındaki herhangi bir şeydir). Her bir tekrarda, `i` yeni değere sahip olacak ve her değer döngü içinde "scoped" olacak.
</p>
</details>

---

###### 3. Çıktısı Nedir?

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

- A: `20` ve `62.83185307179586`
- B: `20` ve `NaN`
- C: `20` ve `63`
- D: `NaN` ve `63`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`diameter` sıradan bir fonksiyonken, `perimeter`'in arrow fonksiyon olduğuna dikkat edin.

Arrow fonksiyonlarda, `this` anahtar kelimesi, sıradan fonksiyonların aksine, kendi sardığı mevcut scope'u referans alır. Bu demektir ki, `perimeter`'i çağırdığımız zaman, `shape` objesini değil, kendi sardığı scope'u referans alıyor (örneğin window).

Bu objede, `radius` değeri olmadığından `undefined` döndürüyor. 

</p>
</details>

---

###### 4. Çıktısı Nedir?

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Artı (unary plus), işlemeye çalıştığı değişkeni sayıya çevirmeye çalışır. `true` `1` ve `false` `0` demektir.

`'Lydia'` harf dizisi doğrusal ("truthy") bir değerdir. Aslında sorduğumuz şey, "bu doğrusal değer yanlış-ımsı ("falsy") mı?". Bu da `false` döndürür. 
</p>
</details>

---

###### 5. Hangisi doğru?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` geçerli değildir
- B: `mouse[bird.size]` geçerli değildir
- C: `mouse[bird["size"]]` geçerli değildir
- D: Hepsi geçerlidir

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Javascript'te, tüm nesne keyleri string'dir (Symbol olmadıkları müddetçe). Keyleri, string olarak _yazmadıysak_ bile, arka planda string'e çevrilirler.

Javascript, ifadeleri yorumlar (ya da açar ("unboxes")). Köşeli parentez notasyonu kullandığımız zaman, Javascript ilk `[` görür ve `]` bulana kadar devam eder. Ancak ondan sonra ifadeyi hesaplar.

`mouse[bird.size]`: Önce `bird.size` çalıştırılır, o da `"small"` demektir. `mouse["small"]`, `true` döndürür.

Ancak, nokta notasyonunda bu gerçekleşmez. `mouse`, `bird` diye bir keye sahip değildir ki bu da `mouse.bird`, `undefined` demektir. Sonra, nokta notasyonunu kullanarak `size`'a ulaşmak istiyoruz: `mouse.bird.size`. `mouse.bird`, `undefined` olduğundan, aslında ulaşmaya çalıştığımız `undefined.size`. Bu geçerli değil ve `Cannot read property "size" of undefined`'a benzer bir hata fırlatacaktır.
</p>
</details>

---


###### 6. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Javascript'te tüm nesneler, birbirlerine eşitlendikleri zaman _referansları_ ile etkileşime girerler.

Önce, `c` değişkeni bir nesnenin değerini tutuyor. Sonra, `d`'ye aynı referansı atadık ki bu referans da `c`'nin sahip olduğu nesnedir.
<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Bir nesneyi değiştirdiğiniz zaman, hepsini değiştirirsiniz.

</p>
</details>

---

###### 7. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

`new Number()` yerleşik bir yapıcı fonksiyondur ("function constructor"). Sayı ("number") gibi gözükse de gerçekten bir sayı değil: bir kaç ekstra özelliğe sahip ve o bir nesne.

`==` operatörünü kullandığımız zaman, sadece aynı _değer_'e sahip olup olmadığını kontrol eder. İkisi de `3` değerine sahip, yani `true` döndürür.

Ancak, `===` kullandığımız zaman değer _ve_ tip aynı olmalıdır. Öyle değil: `new Number()`, sayı ("number") değildir, **nesne**dir. İkisi de `false` döndürür.
</p>
</details>

---

###### 8. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

`colorChange` fonksiyonu statiktir. Statik methodlar, sadece oluşturuldukları kurucuda var olmak için tasarlanmıştır ve herhangi bir "children"a aktarılamaz. `freddie`, "child" olduğundan, fonksiyon aktarılmadı ve `freddie` üzerinden erişilebilir değil: `TypeError` hatası fırlatılır.
</p>
</details>

---

###### 9. Çıktısı Nedir?

```javascript
let greeting;
greetign = {}; // Yazım hatası!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Nesneyi loglar çünkü global nesne üzerinde boş bir nesne oluşturduk. `greeting`'i `greetign` olarak yanlış yazdığımız zaman, JS yorumlayıcısı bunu `global.greetign = {}` olarak gördü (ya da tarayıcı içinde `window.greetign = {}`).

Bundan kaçınmak için, `"use strict"` kullanabiliriz. Bu, bir değişkene herhangi bir atama yapmadan önce tanımladığınızdan emin olmanızı sağlar.
</p>
</details>

---

###### 10. Bunu yaptığımız zaman ne gerçekleşir?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Hiç bir şey, tamamen iyi!
- B: `SyntaxError`. Fonksiyonlara bu şekilde özellik atayamazsın.
- C: `"Woof"` şeklinde loglanır.
- D: `ReferenceError`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Javascript'te bu mümkün, çünkü fonksiyonlar nesnedir! (Primitive tiplere nazaran her şey nesnedir)

Fonksiyon özel bir nesne tipidir. Yazdığınız kod asıl fonksiyon değil. Fonksiyon, özelliklere sahip bir nesnedir. Bu özellik çalıştırabilme kapasitesine sahiptir ("invocable").

</p>
</details>

---

###### 11. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Sıradan fonksiyonlarla yaptığınız gibi bir yapıcıya ("constructor") özellik ekleyemezsiniz. Eğer, tek seferde tüm nesnelere özellik eklemek isterseniz, bunun yerine prototype kullanmalısınız. Yani bu durumda,
```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

`member.getFullName()` çalışmış olacak. Bu neden faydalı? Diyelim ki, yapıcının kendisine bu methodu ekledik. Belki de tüm `Person` instance'leri bu methoda ihtiyaç duymuyor. Bu özelliğe sahip olduklarından dolayı, her bir instance hafızadan yer alır, bu da bir sürü hafıza israfı demek. Bunun yerine, eğer sadece prototype'a eklersek, hafızadan sadece bir tek yer alırız ve yine de tüm instanceler bu özelliğe erişebilir!

</p>
</details>

---

###### 12. Çıktısı Nedir?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` ve `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` ve `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` ve `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` ve `ReferenceError`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`sarah` için `new` anahtar kelimesi kullanmadık. `new` kullandığınız zaman, oluşturduğumuz yeni boş nesneyi referans gösterir. Lakin, `new`'i eklemezseniz, **global nesne**'yi referans gösterir!

`this.firstName`, `"Sarah"`'a eşittir ve `this.lastName`, `"Smith"`'e eşittir dedik. Aslında yaptığımız, `global.firstName = 'Sarah'` ve `global.lastName = 'Smith'` diye tanımlamaydı. `sarah`'ın kendisi `undefined` olarak kalır.
</p>
</details>

---

###### 13. Olay silsilesinin (event propagation) üç aşaması nedir?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

**capturing** aşaması süresince, olay ata ("ancestor) elemanlardan hedef elemana doğru gider. Daha sonra **target** elemana ulaşır ve **bubbling** başlar. 

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Bütün nesneler prototiplere sahiptir.

- A: doğru
- B: yanlış

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Bütün nesneler prototiplere ("prototypes") sahiptir, **temel nesne**, **base object**, hariç. Temel nesne, kullanıcı tarafından oluşturulmuş nesnedir, ya da `new` anahtar kelimesi kullanarak oluşturulmuş bir nesnedir. Temel nesne bazı method ve özelliklere erişebilir, `.toString` gibi. Yerleşik gelen Javascript methodlarını kullanabilme sebebi budur! Buna benzer tüm methodlar prototip üzerinden erişebilir. Her ne kadar Javascript, methodu direkt olarak nesneniz üzerinden bulamasa da, prototip zinciri üzerinden aşağıya doğru gider ve orada bulur, böylece sizin için erişebilir yapar.
</p>
</details>

---

###### 15. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Javascript **dinamik tipli dil**dir: değişkenlerin hangi tip olduğunu belirtmeyiz. Değerler otomatik olarak diğer tipi bilmeden dönüştürebilir, bu _implicit type coercion_, _örtük tip dönüşümü_, olarak adlandırılır. **Coercion** bir tipi diğer bir tipe dönüştürmektir.

Bu örnekte, JavaScript sayı olan `1`'i string'e dönüştürüyor, fonksiyonun mantıklı olması ve değer döndürmesi için. Sayısal tip (`1`) ve string tip (`2`)'nin toplanması sırasında, sayıya string olarak muamele edilir. Stringleri `"Hello" + "World"` şeklinde birleştirebiliriz, yani burada olan `"1" + "2"` ki bu da `"12"` döndürür.

</p>
</details>

---

###### 16. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

**son ek**, **postfix**, `++` unary operatörü:


1. Değer döndürür (`0` döndürür)
2. Değeri arttırır (sayı şimdi `1`)

**ön ek**, **prefix**, `++` unary operatörü:

1. Değeri arttırır (sayı şimdi `2`)
2. Değeri döndürür (`2` döndürür)

Burada `0 2 2` döner.

</p>
</details>

---

###### 17. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Eğer "tagged template literals" kullanırsanoz, ilk argumanın değeri her zaman string değerler dizisidir. Geriye kalan argumanlar, ifadeye geçilen değerleri alır.

</p>
</details>

---

###### 18. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Eşitliği test ederken, nesneler _referanslarına_ göre kıyaslanırken primitifler _değerlerine_ göre kıyaslanır. Javascript, nesnelerin referanslarının hafızada aynı konumda olup olmadığını kontrol eder.

Kıyasladığımız iki nesne bu şekilde değilse: parametre olarak geçtiğimiz nesne, hafızada eşitliğini kontrol ettiğimiz nesneden farklı bir konumu referans gösterir.

Bu sebepten, `{ age: 18 } === { age: 18 }` ve `{ age: 18 } == { age: 18 }`, ikisi de `false` döndürür.

</p>
</details>

---

###### 19. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Yayma operatorü, "spread operator", (`...args`) argumanların dahil olduğu bir dizi döndürür. Dizi bir nesnedir, bu yüzden `typeof args` `"object"` döndürür.

</p>
</details>

---

###### 20. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

`"use strict"` ile, yanlışlıkla global değişkenler tanımlamadığınızdan emin olabilirsiniz. `age` değişkenini hiç tanımlamadık ve `"use strict"` kullandığımızdan, referans hatası fırlatacaktır. Eğer `"use strict"` kullanmasaydık, `age` özelliği global nesneye eklenmiş olacağından, çalışmış olacaktı.

</p>
</details>

---

###### 21. `sum`'ın değeri nedir?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`eval`, string olarak geçilen kodu çalıştırır. Eğer bir ifadeyse, bu durumdaki gibi, ifadeyi çalıştırır. İfade `10 * 10 + 5`. Bu `105` sayısını döndürür.

</p>
</details>

---

###### 22. cool_secret ne kadar süre boyunca erişebilinir?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Sonsuza kadar, veri kaybolmaz.
- B: Kullanıcı sekmeyi kapatınca.
- C: Kullanıcı tamamen tarayıcıyı kapattığı zaman, sadece sekmeyi değil.
- D: Kullanıcı bilgisayarını kapattığı zaman.

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`sessionStorage` içinde saklanan veri _sekme_ kapatıldıktan sonra kaldırılır.

Eğer `localStorage` kullandıysanız, veri sonsuza kadar orada olacaktır, örnek olarak `localStorage.clear()` çalıştırılmadığı sürece. 

</p>
</details>

---

###### 23. Çıktısı Nedir?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`var` anahtar kelimesi ile aynı isme sahip birden çok değişken tanımlayabilirsiniz. O halde değişken son değeri tutacak.

Bunu `let` ya da `const` ile yapamazsınız, "block-scoped" olduklarından dolayı.

</p>
</details>

---

###### 24. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Tüm nesne anahtarları (Symbol'ler hariç) arka planda string'dir, kendiniz string olarak yazmasanız bile. Bu sebepten `obj.hasOwnProperty('1')` da `true` döndürür.

Set için bu şekilde çalışmaz. Setimizde `'1'` yok: `set.has('1')` `false` döndürür. Setimiz sayısal tip `1`'e sahip, `set.has(1)` `true` döndürür.

</p>
</details>

---

###### 25. Çıktısı Nedir?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Eğer aynı ada sahip iki tane anahtarınız, "key", varsa, anahtar değiştirilecektir. Hala ilk konumunda olacaktır ama son belirtilen değerle birlikte.

</p>
</details>

---

###### 26. JavaScript global yürütme konteksti, "global execution context", sizin için iki şey oluşturur: global nesne, ve "this" anahtar kelimesi.

- A: doğru
- B: yanlış
- C: değişir

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Temel yürütme konteksti, global yürütme kontekstidir: kodunuzda her yerde erişilebilir olan şeydir.

</p>
</details>

---

###### 27. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Eğer belirli şart `true` döndürürse, `continue` ifadesi yinelemeyi, "iteration", atlar.

</p>
</details>

---

###### 28. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`String`, özellikler de ekleyebileceğimiz tümleşik bir yapıcıdır. Prototipine bir method ekledim sadece. Primitif stringler, string prototip fonksiyonu tarafından üretilen string nesnesine otomatik olarak dönüştürülür. Bu yüzden, tüm stringler (string nesneleri) bu methoda erişebilir!

</p>
</details>

---

###### 29. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Nesne keyleri otomatik olarak stringe dönüştürülür. `a` nesnesine değeri `123` olacak şekilde, bir nesneyi key olarak atamaya çalışıyoruz.

Ancak, bir nesnesi string hale getirince, `"[Object object]"` olur. Dolayısıyla burada söylediğimiz, `a["Object object"] = 123`. Sonra, aynı şeyi tekrar yapmayı deniyoruz. `c`, dolaylı olarak string hale getirdiğimiz başka bir nesne. O halde, `a["Object object"] = 456`.

Sonra, `a[b]`'yi logluyoruz, ki aslında o da `a["Object object"]`. Onu da `456` olarak atamıştık, o yüzden `456` döndürür.

</p>
</details>

---

###### 30. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Bir `setTimeout` fonksiyonumuz var ve ilk onu çalıştırdık. Yine de en son loglandı.

Bunun nedeni tarayıcılarda, "runtime engine"'a sahip olmamamızdan, `WebAPI` denilen bir şeye sahibiz. `WebAPI`, örneğin DOM ile çalışması için bize, `setTimeout` fonksiyonunu verir.

_callback_ WebAPI'a eklendikten sonra, `setTimeout` fonksiyonun kendisi (callback hariç!) hafıza bloğundan atılır, "popped off the stack".

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Şimdi, `foo` çalıştı ve `"First"` loglandı.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` hafıza bloğundan atıldı ve `baz` çalıştı. `"Third"` loglandı.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI, her ne zaman bir şeyler hazırsa hafıza bloğuna öylece ekleyemez. Onun yerine callback fonksiyonunu, _queue_ diye adlandıralan bir şeye ekler.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Burası olay döngüsünün çalışmaya başlayacapı yerdir. **olay döngüsü**, **event loop**, hafıza bloğuna ve iş kuyruğuna, "task queue", bakar. Eğer hafıza bloğu boşsa, kuyruktaki ilk şeyi alır ve hafıza bloğuna ekler.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` çalıştı, `"Second"` loglandı ve hafıza bloğundan atıldı.

</p>
</details>

---

###### 31. Butona tıklandığında, event.target nedir?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Dıştaki `div`
- B: İçteki `div`
- C: `button`
- D: İç içe olan tüm elemanlar listesi.

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Olaya sebep olan en derindeki iç eleman, olayın hedefidir ("event.target"). `event.stopPropagation` kullanarak "bubbling"'i durdurabilirsiniz.

</p>
</details>

---

###### 32. Paragrafa tıkladığınız zaman, çıktı olarak ne loglanır?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Eğer `p`'ye tıklarsak, iki log görürüz: `p` ve `div`. Olay silsilesi, "event propagation", sırasında, 3 aşama vardır: "capturing", "target", ve "bubbling". Varsayılan olarak, olay işleyiciler, "event handlers", "bubbling" aşamasında (`useCapture`'ı `true` olarak ayarlanmadığı müddetçe) çalıştırılır. En derin elemandan dışa doğru gider.

</p>
</details>

---

###### 33. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

İkisinde de, `this` anahtar kelimesinin referans olmasını istediğimiz nesneyi geçebiliriz. Ancak, `.call` _anında çalıştırılır_!

`.bind.` fonksiyonun _kopyasını_ döndürür, ama konteksle bağlı şejilde. Anında çalıştırılmaz.

</p>
</details>

---

###### 34. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`sayHi` fonksiyonu, anında çalıştırılan fonksiyonun, "immediately invoked function (IIFE)", döndürdüğü değeri döndürür. Bu fonksiyon `0` döndürdü, k, tipi `"number"`'dır.

Bilginize; 7 tane tümleşik tip vardır: `null`, `undefined`, `boolean`, `number`, `string`, `object`, ve `symbol`. Fonksiyonlar nesne olduklarından, `"function"` tip değildir. Fonksiyonun tipi `"object"`'dir.

</p>
</details>

---

###### 35. Bu değerlerden hangileri yanlış-ımsıdır (falsy)?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Sadece 6 tane yanlış-ımsı, "falsy", değer vardır:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

Fonksiyon yapıcıları, `new Number` ve `new Boolean` gibi, doğrusaldır.

</p>
</details>

---

###### 36. Çıktısı Nedir?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`typeof 1` `"number"` döndürür.
`typeof "number"` `"string"` döndürür.

</p>
</details>

---

###### 37. Çıktısı Nedir?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Dizi içinde, dizinin uzunluğunu aşan bir elemana değer atadığınızda, JavaScript "boş alanlar, "empty slots", denilen bir şey oluşturur. Bunların değeri aslında `undefined` olsa da şöyle bir şey görürsünüz:

`[1, 2, 3, 7 x empty, 11]`

nerede çalıştırdığınıza bağlı olarak (her tarayıcı, node, vb... için farklıdır.)

</p>
</details>

---

###### 38. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`catch` bloğu `x` argumanını alıyor. Argumanları geçtiğimiz zaman, bu değişken olan `x` ile aynı değildir. Bu `x` değişkeni block-scoped'dur.

Sonra, bu block-scoped değişkeni `1`'e eşit olarak ayarladık ve `y` değişkeninin değerini ayarladık. Block-scoped `x` değişkenini logladık, ki değeri `1`'e eşitti.

`catch` bloğunun dışında, `x` hala `undefined`, ve `y` `2`'dir. `catch` bloğunun dışında, `console.log(x)` çalıştırmak istediğimizde `undefined` döndürür ve `y` `2` döndürür.

</p>
</details>

---

###### 39. JavaScript'teki her şey ya bir...

- A: primitifdir ya da nesnedir
- B: fonksiyondur or nesnedir
- C: tuzak soru! sadece nesnedir
- D: sayıdır (number) ya da nesnedir 

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

JavaScript sadece primitif ve nesne tiplerine sahiptir.

Primitif tipler, `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, ve `symbol`.

Primitif ve nesneyi birbirinden ayıran, primitif tiplerin herhangi bir özelliğie ya da methoda sahip olmamasıdır; ancak, fark edeceğiniz üzere `'foo'.toUpperCase()` `'FOO'` olarak değer döndürür ve `TypeError` ile sonuçlanmaz. Bunun sebebi, string gibi primitif bir tip üzerinde özelliğe ya da methoda erişmeye çalıştığınızda, JavaScript sarıcı sınıflardan, "wrapper classes", birini kullanarak nesneyi dolaylı şekilde sarar, örneğin `String`, ve sonrasında ifade çalıştıktan sonra anında sarıcıyı ayırır. `null` ve `undefined` dışındaki tüm primitifler bu şekilde davranır.

</p>
</details>

---

###### 40. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

`[1, 2]` başlangıç değerimizdir. Başladığımız değer budur ve `acc`'nin en ilk değeridir. İlk tur süresince, `acc` `[1,2]`'dir ve `cur` `[0, 1]`'dir. Onları birleştiririz ve `[1, 2, 0, 1]` olarak sonuçlanır.

Sonra, `acc` `[1, 2, 0, 1]`'dir ve `cur` `[2, 3]`'dür. Onları birleştiririz ve `[1, 2, 0, 1, 2, 3]` elde ederiz.

</p>
</details>

---

###### 41. Çıktısı Nedir?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`null` yanlış-ımsıdır, "falsy". `!null` `true` döndürür. `!true` `false` döndürür.

`""` yanlış-ımsıdır. `!""` `true` döndürür. `!true` `false` döndürür.

`1` doğrusaldır. `!1` `false` döndürür. `!false` `true` döndürür.

</p>
</details>

---

###### 42. `setInterval` methodu tarayıcıda ne döndürür?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: benzersiz bir id
- B: belirtilen milisayine tutarı
- C: gönderilen fonksiyon
- D: `undefined`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Benzersiz bir id döndürür. Bu id, süre aralığını, "interval", `clearInterval()` fonksiyonu ile temizlemek için kullanılabilinir.

</p>
</details>

---

###### 43. Ne döndürür?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

String, yinelenebilirdir, "iterable". Yayma operatörü, yenilenebilirin her bir karakterini bir elemana eşler.

</p>
</details>

---

###### 44. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Sıradan fonksiyonlar yürütmenin başlamasının ardından yarı yolda durdurulamaz. Ancak, bir generator fonksiyon yarı yolda "durdurabilir" ve sonra nerede kaldıysa devam edebilir. Bir generator fonksiyon ne zaman `yield` anahtar kelimesiyle karşılaşsa, yield'de belirtilen değeri verir. Dikkat edin, generator fonksiyon değeri _döndürmez_ (_return_), değeri _verir_ (_yield_). 

Önce, generator fonksiyonu `i`'yi `10`'a eşitleyerek başlatıyoruz. `next()` methodunu kullanarak generator fonksiyonu çalıştırıyoruz. İlk kez generator fonksiyonu çalıştırdığımızda, `i` `10`'a eşit. Fonksiyon ilk `yield` anahtar kelimesi ile karşılaşıyor: `i`'nin değerini veriyor. Generatır şimdi "durdu", ve `10` loglandı.

Sonra, `next()` methodunu kullanarak fonksiyonu tekrar çalıştırıyoruz. Fonksiyon önceki kaldığı yerden çalışmaya devam ediyor, `i` hala `10`'a eşit. Şimdi, fonksiyon sıraki `yield` anahtar kelimesi ile karşılaşıyor, ve `i * 2`'yi veriyor, yani fonksiyon `10 * 2` veriyor, ki o da `20`'dir. `10, 20` şeklinde sonuçlanıyor.

</p>
</details>

---

###### 45. Ne döndürür?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`Promise.race` methoduna birçok promise geçtiğimiz zaman, _ilk_ çözümlenen/reddedilen, "resolves/rejects", promise'i çözümler/reddeder . `setTimeout` methoduna, zamanlayıcı, "timer", geçtik: ilk promise (`firstPromise`) için 500ms, ve ikinci promise (`secondPromise`) için 100ms. Bu demektir ki `secondPromise` `'two'` değeriyle birlikte önce çözümlenir. `res` sakladığı `'two'` değeriyle loglanır.

</p>
</details>

---

###### 46. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

Önce, `person` değişkenini, `name` özelliğine sahip bir nesne değeriyle birlikte tanımlarız.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Sonra, `members` olarak adlandırdığımız değişkeni tanımlarız. Bu dizinin ilk elemanını, `person` değişkeninin değerine eşit olarak ayarlarız. Nesneler, birbirlerine eşitlendiklerinde, _referans_ üzerinden etkileşime girer. Bir referansı, bir değişkenden diğerine atadığınız zaman, o referansın _kopyasını_ oluşturursunuz. (değişkenlerin _aynı_ referansa sahip olmadığına dikkat edin!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Sonra, `person` değişkenini `null`'a eşit olarak ayarlarız.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Sadece `person` değişkeninin değerini değiştiriyoruz, dizideki ilk elemanı değil, ilk eleman nesneyi gösteren farklı (kopyalanmış) bir referansa sahip. `members` içindeki ilk eleman hala orijinal nesneyi gösteren referansını saklıyor. `members` dizisini logladığımız zaman, ilk elemanın hala sakladığı nesnenin değeri loglanır.  

</p>
</details>

---

###### 47. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`for-in` döngüsüyle, nesne keyleri boyunca ileryebiliriz, bu durumda `name` ve `age`. Temelde, nesne keyleri stringdir (eğer Symbol değilse). Her döngüde, `item`'in değerini, döngü sırasındaki geçerli key olarak eşitleriz. Önce, `item` `name`'e eşittir, ve loglanır. Sonra loglanan `item`, `age`'e eşittir.

</p>
</details>

---

###### 48. Çıktısı Nedir?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Operatör birleşme özelliği, "operator associativity, derleyicinin ifadeleri çalıştırdığı sıradır, ya soldan sağa ya da sağdan soladır. Bu sadece, eğer tüm operatörler _aynı_ önceliğe sahipse gerçekleşir. Sadece tek tip operatörümüz var: `+`. Toplama için birleşme özelliği soldan sağadır.

`3 + 4` önce çalıştırılır. `7` sayısı olarak sonuçlanır.

Tip baskısından, "coercion", dolayı `7 + '5'`, `"75"` olarak sonuçlanır. JavaScript `7` sayısını string'e çevirir, 15. soruya bakabilirsiniz. İki string'i `+` operatörünü kullanarak birleştirebiliriz. `"7" + "5"` `"75"` olarak sonuçlanır.

</p>
</details>

---

###### 49. `num` ın değeri nedir?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Sadece string içindeki ilk sayılar döndürülür. _Sayı tabanına_ (hangi tipte sayıya çözümlemek istediğimizi belirtmek için geçilen ikinci argüman: 10'lu, onaltılı, sekizli, ikili tabanda vb...) bağlı olarak, `parseInt` string içindeki hangi karakterlerin geçerli olduğunu kontrol eder. Sayı tabanında, geçerli olmayan bir karaktere denk geldiğinde, çözümleyi durdurur ve sonraki gelen karakterleri görmezden gelir.

`*` geçerli bir sayı değil. `parseInt` sadece `"7"`'yi ondalık sistemde `7`'ye çözümler. `num`, `7` değerini saklıyor artık.

</p>
</details>

---

###### 50. Çıktısı Nedir`?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Dizi üzerinde eşleme yaparken, `num`'ın değeri, o anda döngüye giren elemanın değerine eşittir. Bu durumda, elemanlar sayı, yani `typeof num === "number"` koşul ifadesi `true` durdurur. map fonksiyonu yeni bir dizi oluşturur ve fonksiyondan dönen değerleri yerleştirir. 

Ancak, biz değer döndürmüyoruz. Bir fonksiyondan değer döndürmediğimiz zaman, fonksiyon `undefined` döndürür. Dizideki her eleman için, fonksiyon bloğu çağrılır, yani her bir eleman için `undefined` döndürürüz.

</p>
</details>

---

###### 51. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Argümanlar _değer_ olarak geçilir, değerleri nesne olmadıkları müddetçe, eğer öyleyse _referans_ olarak geçilir. `birthYear` nesne değil string olduğundan değer olarak geçilir. Argümanları değer olarak geçtiğimizde, o değerin bir _kopyası_ oluşturulur (46. soruya göz atın).

`birthYear` değişkeni `"1997"` değeri için referansa sahip. `year` argümanı da ayrıca `"1997"` değeri için referansa sahip, ama `birthYear`'ın sahip olduğu referansın değeri ile aynı değer değil. `year`'ın değerini `"1998"`'e eşit olarak ayarlayıp güncellediğimizde, sadece `year`'ın değerini güncelleriz. `birthYear` hala `"1997"`'e eşittir.

`person`'ın değeri bir nesnedir. `member` argümanı _aynı_ nesne için (kopyalanmış) referansa sahip. `member` nesnesinin özelliğini değiştirdiğimizde, `person`'ın değeri de ayrıca değişmiş olacaktır, ikisi de aynı nesne için referansa sahip olduklarından. `person`'ın `name` özelliği şimdi `"Lydia"` değerine eşittir.

</p>
</details>

---

###### 52. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

`throw` ifadesi ile, özelleştirilmiş hatalar oluşturabiliriz. Bu ifade ile, hatalar fırlatabilirsiniz. Hata durumu, "exception", bir <b>string</b>, <b>sayı</b>, <b>doğru/yanlış</b> ya da <b>nesne</b> olabilir. Bu durumda, bizim hata durumumuz string olan `'Hello world'`.

`catch` ifadesi ile, eğer `try` bloğunda bir hata durumu fırlatılmışsa ne yapacağımızı belirtebiliriz. Bir hata durumu fırlatıldı: `'Hello world'` string'i. `e` artık bu string'e eşit, ki onu logluyoruz. `'Oh an error: Hello world'` olarak sonuç veriyor.

</p>
</details>

---

###### 53. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Bir özellik döndürdüğünüz zaman, özelliğin değeri _döndürülen_ değere eşittir, yapıcı fonksiyon içinde atanmış değere değil. `"Maserati"` string'ini döndürüyoruz, yani `myCar.make` `"Maserati"`'ye eşittir.

</p>
</details>

---

###### 54. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`let x = y = 10;` aslında şunun için kısa yazımdır:

```javascript
y = 10;
let x = y;
```

`y`'yi `10`'a eşit olarak ayarladığımızda, aslında global nesneye `y` özelliğini ekliyoruz (tarayıcıda `window`, Node içinde `global`). Tarayıcıda, `window.y` artık `10`'a eşit.

Sonra, `x` değişkenini `y`'nin değeri ile birlkte tanımlıyoruz ki o da `10`. `let` anahtar kelimesi ile tanımlanan değişkenler _block scope_'dur, onlar sadece tanımlandıkları blok içinde sınırlıdır; bu durumda anında çalıştırılan fonksiyon, "immediately-invoked function (IIFE)", ile sınırlı. `typeof` operatörünü kullandığımız zaman, `x` operandı tanımlı değil: `x`'e tanımlandığı bloğun dışından erişmeye çalışıyoruz. Bu, `x` tanımlanmadı demektir. Bir değer ataması yapılmamış ya da tanımlanmamış değerlerin tipi `"undefined"`'dır. `console.log(typeof x)` `"undefined"` döndürür.

Ancak, `y`'yi `10`'a eşitlerken global değişken `y`'yi oluşturduk. Bu değer kodunuzun herhangi bir yerinden erişilebilinir. `y` tanımlı ve `"number"` tipinde değeri saklıyor. `console.log(typeof y)` `"number"` döndürür.

</p>
</details>

---

###### <a name=20190629></a>55. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`delete` anahtar kelimesini kullanarak özellikleri hem nesnelerden hem de prototip üzerinden silebiliriz. Prototip üzerindeki bir özellik silindiğinde, artık prototip zincirinde kullanıma müsait değildir. Bu durumda, `bark` fonksiyonu, `delete Dog.prototype.bark` ardından, prototip üzerinden kullanılabilir değildir fakat yine de erişmeye çalışıyoruz.

Fonksiyon olmayan bir şeyi çalıştırmayı denediğimiz zaman, `TypeError` fırlatılır. Bu durumda, `pet.bark` `undefined` olduğundan, `TypeError: pet.bark is not a function` fırlatıldı.

</p>
</details>

---

###### 56. Çıktısı Nedir?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

`Set` nesnesi _benzersiz_ değerlerin koleksiyonudur: bir değer, set içinde sadece bir kez bulunabilir.

Yinelenebilir `[1, 1, 2, 3, 4]`'i çift `1` değeriyle birlikte geçtik. Set içinde aynı değere iki kere sahip olamayacağımızdan, bir tanesi kaldırıldı. Sonuç, `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

İçe aktarılan, "imported", modul _salt okur_'dur: içe aktarılan modulü değiştiremezsiniz. Sadece, dışa aktarım yapan modul değerini değiştirebilir.

`myCounter`'ın değerini arttırmaya çalıştığımız zaman, hata fırlatır: `myCounter` salt okurdur ve değiştirilemez.

</p>
</details>

---

###### 58. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`delete` operatörü doğru/yanlış, "boolean", değer döndürür: silme başarılıysa `true`, değilse `false` döndürecektir. Ancak, `var`, `const` ya da `let` anahtar kelimeleri ile tanımlanan değişkenler, `delete` kullanılarak silinemez.

`name` değişkeni `const` anahtar kelimesi ile tanımlandı, yani silinme işlemi başarılı değil: `false` döndü. `age`'i `21`'e eşitlediğimizde, global nesneye `age` diye özellik ekledik aslında. Bu yöntemle, sorunsuz şekilde nesnelerden özellikleri silebilirsiniz, böylelikle `delete age` `true` döndürür.

</p>
</details>

---

###### 59. Çıktısı Nedir?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

Listelerden değerleri ya da nesnelerden özellikleri, yıkım yoluyla, "destructuring", çıkarabiliriz. Örneğin:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

`a`'nın değeri `1` ve `b`'nin değeri `2`'dir. Bu soruda aslında yaptığımız şuydu:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Bu demektir ki, `y`'nin değeri dizideki ilk değere eşit, o da `1` sayısıdır. `y`'yi logladığımız zaman, `1` döndürülür.

</p>
</details>

---

###### 60. Çıktısı Nedir?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Nesneleri `...` yayma operatörü kullanarak birleştirmek, kombine etmek, mümkündür. Bir nesnenin key/değer kopyasını oluşturmanıza olanak sunar, ve key/değerleri diğer nesneye ekler. Bu durumda, `user` nesnesinin kopyasını oluşturuyoruz, ve onları `admin` nesnesine ekliyoruz. `admin` nesnesi şimdi kopyalanan key/değerleri de içeriyor, ki bu da `{ admin: true, name: "Lydia", age: 21 }` olarak sonuç verir.

</p>
</details>

---

###### 61. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`defineProperty` methodu ile, nesnelere yeni özellikler ekleyebiliriz, ya da var olanları değiştirebiliriz. `defineProperty` methodu kullanarak bir nesneye özellik eklediğimiz zaman, varsayılan olarak _sıralanabilir değildir_, "_not enumerable_". `Object.keys` methodu, bir nesneden tüm _sıralanabilir_ özelliklerin adını döndürür, bu durumda sadece `"name"`.

`defineProperty` methodu kullanılarak eklenen özellikler, varsayılan olarak değişmezdir. Bu davranışı `writable`, `configurable` ve `enumerable` kullaranak ezebilirsiniz. Bu yöntemle, `defineProperty` methodu nesnelere eklediğiniz özellikler üzerinde size çok daha fazla kontrol verir.

</p>
</details>

---

###### 62. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`JSON.stringify`'ın ikinci argumanı _değiştiricidir_, _"replacer"_. Değiştirici bir fonksiyon ya da bir dizi olabilir, ve değerlerin hangilerinin ve nasıl string'e dönüşeceğini kontrol etmenize izin verir.

Eğer değiştirici _dizi_ ise, sadece dizi içinde ismi geçem özellikler JSON string'e dahil edilmiş olur. Bu durumda, sadece  `"level"` ve `"health"` isimli özellikler dahil edildi, `"username"` dışarıda bırakıldı. `data`, `"{"level":19, "health":90}"` eşittir.

Eğer değiştirici _fonksiyon_ ise, stringe dönüştürülen her özellik için bu fonksiyon çağrılır. Bu fonksiyondan dönen değer, JSON stringe eklenmiş olacak özelliğin değeri olacaktır. Eğer değer `undefined`'sa, bu özellik JSON stringe dahil edilmez.

</p>
</details>

---

###### 63. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

`++` unary operatörü _önce_ operandın değerini döndürür, _sonra_ operandın değerini arttırır. `increaseNumber` fonksiyonu önce değeri `10` olan `num`'ın değerini döndürdüğünden, `num1`'ın değeri `10`'dur, ve `num`'ın değeri ancak bundan sonra artar.

`increasePassedNumber`'a `num1`'i geçtiğimizden, `num2`'nin değeri `10`'dur. `number` `10`'a eşittir (`num1`'ın değeri. Bir kez daha, `++` operatörü _önce_ operandın değerini döndürür, _sonra_ operandın değerini arttırır. `number`'ın değeri `10`, yani `num2` `10`'a eşittir.)

</p>
</details>

---

###### <a name=20190707></a>64. Çıktısı Nedir?

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number * 2));
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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

ES6'da, parametrelere varsayılan değer atayabiliriz. Eğer fonksiyona değer geçilmezse ya da parametrenin değeri `undefined` ise, parametrenin değeri varsayılan değer olacaktır. Bu örnekte, `value` nesnesinin özelliklerini yeni nesneye yaydık, böylece `x` varsayılan değer olarak `{ number: 10}`'a sahip.

Varsayılan argüman _çağrı sırasında_, "_call time_", çalıştırılır. Fonksiyonu her çağırdığımızda, _yeni_ bir nesne oluşturulur. `multiply` fonksiyonunu ilk iki seferde değer geçmeden çağırdık: `x` varsayılan değeri olan `{ number: 10 }`'a sahip. Sonra, bu sayının çarpılmış değerini logluyoruz, o da `20`.

Üçüncü kez, `multiply`'ı çağırdığımız zaman, argüman geçiyoruz: `value` isimli nesne. `*=` operatörü aslında `x.number = x.number * 2` için kısa yazımdır: `x.number`'ın değerini değiştiriyoruz ve çarpılmış değer olan `20`'yi logluyoruz.

Dördüncü kez, `value` nesnesini tekrar geçiyoruz. `x.number` önceden `20`'ye değiştirilmişti, yani `x.number *= 2` `40` loglar.

</p>
</details>

---

###### 65. Çıktısı Nedir?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: D

`reduce` methodunun aldığı ilk argüman _biriktiricidir_, "_accumulator_", bu örnekte `x`. İkinci argüman _o anki değerdir_, `y`. reduce methodu ile, dizideki her eleman üzerinde callback fonksiyonunu çalıştırırız, bu da en sonunda tek bir değer sonuçlanabilir.

Bu örnekte, geriye bir değer döndürmüyoruz, sadece biriktiricinin değerini ve o anki değeri logluyoruz.

Biriktiricinin değeri, bir önceki callback fonksiyonunun dönen değerine eşittir. Eğer, opsiyonel olan `initialValue` agümanını `reduce` methoduna geçmezseniz, biriktiricinin değeri, ilk çağrılışta gelen elemana eşit olur.

İlk çağrılışta, biriktirici (`x`) `1`'dir, ve `y`'nin o anki değeri `2`'dir. callback fonksiyonundan bir şey döndürmüyoruz, biriktiriciyi ve o anki değeri logluyoruz: `1`  ve `2` loglanır.

Eğer bir fonksiyondan değer döndürmezseniz, fonksiyon `undefined` döndürür. Sonraki çağrılışta, biriktirici `undefined`, ve o anki geçerli değer `3`'tür. `undefined` ve `3` loglanır.

Dördündü çağrıda, tekrar callback fonksiyonundan değer döndürmüyoruz. Biriktirici tekrar `undefined`, ve o anki geçerli değer `4`. `undefined` ve `4` loglanır.

</p>
</details>
  
---

###### 66. Hangi yapıcı method (constructor) ile `Dog` sınıfından başarılı şekilde kalıtım yapabiliriz?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

Türetilmiş bir sınıfta, `super`'i çağırmadan önce `this` anahtar kelimesine erişemezsiniz. Eğer erişmeyi denerseniz, ReferenceError fırlatır: 1 ve 4 referans hatası fırlatır.

`super` anahtar kelimesiyle, parent sınıfın yapıcı methodunu verilen argümanlarla beraber çağırırız. Parent sınıfın yapıcısı `name` argümanını alıyor, bu yüzden `super`'e `name`'i vermemiz gerek.

`Dog` sınıfı iki argüman alıyor, `name` `Animal` sınıfından türediğinden, ve `size` `Dog` sınıfı üzerinde ekstra özellik olarak. İkisinin de `Dog` yapıcı methoduna  geçilmesi gerek, bu da 2. yapıcı methodda doğru şekilde kullanılarak yapılmıştır.

</p>
</details>

---

###### 67. Çıktısı Nedir?

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

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: B

`import` anahtar kelimesiyle, tüm içe aktarılan modüller _ilk çözümlenir_, "_pre-parsed_". Bu şu demektir, içe aktarılan modüller _önce_ çalışır, içe aktarım yapan dosyadaki kodlar _sonra_ çalıştırılır.

CommonJS'deki `require()` ve `import` arasındaki fark budur! `require()` ile, bağımlılıkları kod çalışmaya başladığında yükleyebilirsiniz. `import` yerine `require` kullanmış olsaydık, `running index.js`, `running sum.js`, `3` konsolda loglanmış olacaktı.

</p>
</details>

---

###### 68. Çıktısı Nedir?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: A

Her Symbol tamamen benzersizdir. Symbol'e geçilen argümanın amacı, Symbol'e bir açıklama vermektir. Symbol'ün değeri geçilen argümana bağlı değildir. Eşitliği test ederken, tamamen yeni iki symbol oluşturuyoruz: ilki `Symbol('foo')` ve ikincisi `Symbol('foo')`. Bu iki değer benzersiz ve birbirlerine eşit değil, `Symbol('foo') === Symbol('foo')` `false` döndürür.

</p>
</details>

---

###### 69. Çıktısı Nedir?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`, 

<details><summary><b>Cevap</b></summary>
<p>

#### Cevap: C

`padStart` methoduyla, bir string'in başlangıcına dolgu yapabiliriz. Bu methoda geçilen değer, dolguyla beraber string'in _toplam_ uzunluğudur. `"Lydia Hallie"`'in uzunluğu `12`, `name.padStart(13)` string'in başlangıcına 1 boşluk eker, çünkü 12 + 1 = 13.

Eğer `padStart` methoduna geçilen argüman, string'in uzunluğundan daha azsa, dolgu yapılmaz.

</p>
</details>
