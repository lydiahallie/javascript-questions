# Список (просунутих) питань з JavaScript

Я публікую щодня завдання з JavaScript в моєму [Instagram](https://www.instagram.com/theavocoder), які також додаю тут!

Від базового до просунутого: перевірте, наскільки добре ви знаєте JavaScript, трохи оновлюйте свої знання або підготуйтеся до інтерв'ю! :muscle: :rocket: Щотижня я доповнюю цей репозиторій новими питаннями.

Відповіді знаходяться в згорнутої секції нижче питань. Просто натисни на відповідь, щоб розгорнути. Успіхів! :heart:

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

---

###### 1. Що буде в консолі?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` та `undefined`
- B: `Lydia` та `ReferenceError`
- C: `ReferenceError` та `21`
- D: `undefined` та `ReferenceError`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: D

Усередині функції ми спершу визначаємо змінну `name` за допомогою ключового слова `var`. Це означає, що змінна буде знайдена (область пам'яті під змінну буде виділена під час створення) зі значенням `undefined` за замовчуванням, до тих пір поки виконання коду не дійде до рядка, де визначається змінна. Ми ще не визначили значення `name`, коли намагаємося вивести її в консоль, тому в консолі буде `undefined`.

Змінні, визначені за допомогою `let` (і `const`), також знаходяться, але на відміну від `var`, не <i>створюються</i>. Доступ до них неможливий до тих пір, поки не виконається рядок їх визначення (ініціалізації). Це називається "тимчасова мертва зона". Коли ми намагаємося звернутися до змінних до того моменту як вони визначені, JavaScript видає `ReferenceError`.

</p>
</details>

---

###### 2. Що буде в консолі?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` та `0 1 2`
- B: `0 1 2` та `3 3 3`
- C: `3 3 3` та `0 1 2`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Через черги подій в JavaScript, функція `setTimeout` викликається _після того_ як цикл буде завершено. Так як змінна `i` в першому циклі була визначена за допомогою `var`, вона буде глобальною. У циклі ми кожен раз збільшуємо значення `i` на `1`, використовуючи унарний оператор `++.` До моменту виконання функції `setTimeout` значення `i` дорівнюватиме `3`, як показано в першому прикладі.

У другому циклі змінна `i` визначена за допомогою `let`. Такі змінні (а також `const`) мають блочну область видимості (блок це що завгодно між `{}`). З кожної итерацией `i` матиме нове значення, і кожне значення буде замкнуто в своїй області видимості всередині циклу.

</p>
</details>

---

###### 3. Що буде в консолі?

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

- A: `20` та `62.83185307179586`
- B: `20` та `NaN`
- C: `20` та `63`
- D: `NaN` та `63`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

Зауваж, що `diameter` це звичайна функція, в той час як `perimeter` це функція стрілки.

У стрілочних функцій значення `this` вказує на навколишню область видимості, на відміну від звичайних функцій! Це означає, що при виклику `perimeter` значення `this` у цій функції вказує не на об'єкт `shape`, а на зовнішню область видимості (наприклад, window).

У цього об'єкта немає ключа `radius`, тому повертається `undefined`.

</p>
</details>

---

###### 4. Що буде в консолі?

```javascript
+true;
!"Lydia";
```

- A: `1` та `false`
- B: `false` та `NaN`
- C: `false` та `false`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Унарний плюс призводить операнд до числа. `true` це `1`, а `false` це `0`.

Строка `'Lydia'` це "справжнє" значення. Ми запитуємо "справжнє значення є помилковим"? Відповідь: `false`.

</p>
</details>

---

###### 5. Що з цього не є коректним?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` не є коректно
- B: `mouse[bird.size]` не є коректно
- C: `mouse[bird["size"]]` не є коректно
- D: Все варіант коректні

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

В JavaScript все ключі об'єкта є рядками (крім `Symbol`). І хоча ми не _набираємо_ їх як рядки, вони завжди перетворюються до рядків під капотом.

JavaScript інтерпретує (або розпаковує) оператори. При використанні квадратних дужок JS зауважує `[` і продовжує поки не зустріне `]`. Тільки після цього він вирахує то, що знаходиться всередині дужок.

`mouse[bird.size]`: Спершу визначається `bird.size`, що дорівнює `"small"`. `mouse["small"]` повертає `true`.

Але із записом через точку так не відбувається. У `mouse` немає ключа `bird`. Таким чином, `mouse.bird` дорівнює `undefined`. Потім ми запитуємо ключ `size`, використовуючи точкову нотацію: `mouse.bird.size`. Так як `mouse.bird` це `undefined`, ми запитуємо `undefined.size`. Це не є дійсним, і ми отримуємо помилку типу: `Can not read property "size" of undefined`.

</p>
</details>

---

###### 6. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

В JavaScript всі об'єкти є _посилальними_ типами даних.

Спершу змінна `c` вказує на об'єкт. Потім ми вказуємо змінної `d` посилатися на той самий об'єкт, що і `c`.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Коли ти змінюєш один об'єкт, то змінюються значення всіх посилань, що вказують на цей об'єкт.

</p>
</details>

---

###### 7. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

`new Number()` це вбудований конструктор функції. І хоча він виглядає як число, це не справжнє число: у нього є ряд додаткових фіч і це об'єкт.

Оператор `==` призводить типи даних до якогось одного і перевіряє рівність _значень_. Обидва значення рівні `3`, тому повертається `true`.

При використанні оператора `===` значення і тип повинні бути однаковими. Але в нашому випадку це не так: `new Number()` це не число, це **об'єкт**. Тому обидва повертають `false`.

</p>
</details>

---

###### 8. Яким буде результат?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: D

Функція `colorChange` є статичною. Статичні методи не мають доступу до екземплярів класу. Так як `freddie` це екземпляр, то статичний метод там не доступний. Тому результатом є помилка `TypeError`.

</p>
</details>

---

###### 9. Що буде в консолі?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

В консолі виведеться об'єкт, тому що ми тільки що створили порожній об'єкт в глобальному об'єкті! Коли ми замість `greeting` написали `greetign`, інтерпретатор JS насправді виконав `global.greetign = {}` (або `window.greetign = {}` в браузері).

Потрібно використовувати `"use strict"`, щоб уникнути такої поведінки. Ця запис допоможе бути впевненим в тому, що змінна була визначена перед тим як їй присвоїли значення.

</p>
</details>

---

###### 10. Що станеться?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Нічого, все ок.
- B: `SyntaxError`. Не можна додавати властивості функцій таким способом.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

В JavaScript це можливо, тому що функції це об'єкти! (Все є об'єктами крім примітивів).

Функція - це спеціальний тип об'єкта, який можна викликати. Крім того, функція - це об'єкт з властивостями. Властивість такого об'єкта не можна викликати, так як воно не є функцією.

</p>
</details>

---

###### 11. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Не можна додавати властивості конструктору, як звичайному об'єкту. Якщо потрібно додати фичу всіх об'єктах, то необхідно використовувати прототипи. В даному випадку,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

зробить метод `member.getFullName()` чинним. У чому тут перевага? Припустимо, що ми додали цей метод до конструктора. Можливо, не кожному екземпляру `Person` потрібен цей метод. Це призведе до великих втрат пам'яті, тому що всі екземпляри будуть мати цю властивість. Навпаки, якщо ми додамо цей метод тільки до прототипу, у нас буде тільки одне місце в пам'яті, до якого зможуть звертатися всі екземпляри!

</p>
</details>

---

###### 12. Що буде в консолі?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` та `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` та `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` та `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` та `ReferenceError`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Для `sarah` ми не використали ключове слово `new`. Використання `new` призводить до створення нового об'єкта. Але без `new` він вказує на **глобальний об'єкт**!

Ми вказали, що `this.firstName` дорівнює `"Sarah"` і `this.lastName` дорівнює `"Smith"`. Насправді ми визначили `global.firstName = 'Sarah'` і `global.lastName = 'Smith'`. `sarah` залишилася `undefined`.

</p>
</details>

---

###### 13. Назвіть три фази поширення подій

- A: Мета (Target) > Захоплення (Capturing) > Всплиття (Bubbling)
- B: Всплиття (Bubbling) > Мета (Target) > Захоплення (Capturing)
- C: Мета (Target) > Всплиття (Bubbling) > Захоплення (Capturing)
- D: Захоплення (Capturing) > Мета (Target) > Всплиття (Bubbling)

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: D

Під час фази **захоплення** подія поширюється з елементів батьків до елемента мети. Після досягнення **мети** починається фаза **спливання**.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Все объекты имеют прототипы?

- A: Так
- B: Ні

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

Всі об'єкти мають прототипи, крім **базового об'єкта**. Базовий об'єкт має доступ до деяких методів і властивостей, таких як `.toString`. Саме тому ми можемо використовувати вбудовані методи JavaScript! Всі ці методи доступні в прототипі. Якщо JavaScript не може знайти метод безпосередньо у об'єкту, він продовжує пошук по ланцюжку прототипів поки не знайде.

</p>
</details>

---

###### 15. Результат коду?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

JavaScript це **динамічно тіпізірованна мова**: ми не визначаємо тип змінних. Змінні можуть автоматично бути перетворені з одного типу в інший без нашої участі, що називається _неявним приведенням типів_. **Приведення** це перетворення з одного типу в інший.

У цьому прикладі, JavaScript конвертувати число `1` в рядок, щоб операція усередині функції мала сенс і повернула значення. Під час складання числа (`1`) і рядки (`'2'`) число перетворюється до рядка. Ми можемо конкатеніровать рядки ось так: `"Hello" + "World"`. Таким чином, "`1"` + `"2"` повертає "`12"`.

</p>
</details>

---

###### 16. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

**Постфіксний** унарний оператор `++`:

1. Повертає значення (`0`)
2. Інкрементує значення (тепер число дорівнює `1`)

**Префіксний** унарний оператор `++`:

1. Інкрементує значення (тепер число дорівнює `1`)
2. Повертає значення (`0`)

Результат: `0 2 2`.

</p>
</details>

---

###### 17. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

При використанні тегованих шаблонних литералов першим аргументом завжди буде масив строкових значень. Залишилися аргументами будуть значення переданих виразів!

</p>
</details>

---

###### 18. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

В операціях порівняння примітиви порівнюються за їх _значенням_, а об'єкти по _посиланнях_. JavaScript перевіряє, щоб об'єкти вказували на одну і ту ж область пам'яті.

Порівнянні об'єкти в нашому прикладі не такі: об'єкт, переданий як параметр, вказує на іншу область пам'яті, ніж об'єкти, що використовуються в порівняннях.

Тому `{age: 18} === {age: 18}` і `{age: 18} == {age: 18}` повертають `false`.

</p>
</details>

---

###### 19. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Оператор поширення (`... args`) повертає масив з аргументами. Масив це об'єкт, тому `typeof args` повертає `"object"`.

</p>
</details>

---

###### 20. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Використовуючи `"use strict"`, можна бути впевненим, що ми помилково не оголосимо глобальні змінні. Ми раніше ніде не оголошували змінну `age`, тому з використанням `"use strict"` виникне ReferenceError. Без використання `"use strict"` помилки не виникне, а змінна `age` додасться в глобальний об'єкт.

</p>
</details>

---

###### 21. Чому дорівнюватиме sum?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

`eval` виконує код, переданий у вигляді рядка. Якщо цей вислів (як в даному випадку), то обчислюється вираз. Вираз `10 * 10 + 5` поверне число `105`.

</p>
</details>

---

###### 22. Як довго буде доступний cool_secret?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Завжди, дані не загубляться.
- B: Поки користувач не закриває вкладку.
- C: Поки користувач не закриє браузер, а не тільки вкладку.
- D: Поки користувач не вимикає комп'ютер.

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

Дані, збережені в `sessionStorage` очищаються після закриття _вкладки_.

При використанні `localStorage` дані зберігаються назавжди. Очистити їх можна, наприклад, використовуючи `localStorage.clear()`.

</p>
</details>

---

###### 23. Що буде в консолі?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

За допомогою ключового слова `var`, можна визначати скільки завгодно змінних з одним і тим же ім'ям. Змінна зберігатиме останнім присвоєне значення.

Ви не можете зробити це з `let` або` const`, оскільки вони блочні.

</p>
</details>

---

###### 24. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Всі ключі об'єктів (крім `Symbols`) є рядками, навіть якщо задано не в вигляді рядків. Тому `obj.hasOwnProperty('1')` так само повертає `true`.

Але це не працює для `set`. Значення `"1"` немає в `set`: `set.has ('1')`, тому повертається `false`. Але `set.has(1)` поверне `true`.

</p>
</details>

---

###### 25. Що буде в консолі?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Якщо є два ключі з однаковим ім'ям, то ключ буде перезаписан. Його позиція збережеться, але значенням буде встановлено останнім.

</p>
</details>

---

###### 26. Глобальний контекст виконання створює дві речі: глобальний об'єкт і this

- A: Так
- B: Ні
- C: В залежності від ситуації

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Базовий контекст виконання це глобальний контекст виконання: це те, що є де завгодно в твоєму коді.

</p>
</details>

---

###### 27. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Оператор `continue` пропускає ітерацію, якщо умова повертає `true`.

</p>
</details>

---

###### 28. Яким буде результат?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

`String` це вбудований конструктор, до якого можна додавати властивості. Я додала метод до його прототипу. Рядки-примітиви автоматично конвертуються до рядків-об'єктів. Тому всі рядки (строкові об'єкти) мають доступ до цього методу!

</p>
</details>

---

###### 29. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

Ключі об'єкта автоматично конвертуються в рядки. Ми збираємося додати об'єкт в якості ключа до об'єкта `a` зі значенням `123`.

Проте, коли ми наводимо об'єкт до рядка, він стає `"[object Object]"`. Таким чином, ми говоримо, що `a["object Object"] = 123`. Потім ми робимо те ж саме. `c` це інший об'єкт, який ми неявно наводимо до рядка. Тому `a["object Object"] = 456`.

Потім, коли ми виводимо `a[b]`, ми маємо на увазі `a["object Object"]`. Ми тільки що встановили туди значення `456`, тому в результаті отримуємо `456`.

</p>
</details>

---

###### 30. Яким буде результат?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

Ми викликаємо функцію `setTimeout` першої. Тим не менш, вона виводиться в консоль останньої

Це відбувається через те, що в браузерах у нас є не тільки рантайм движок, але і `WebAPI`. `WebAPI` надає нам функцію `setTimeout` і багато інших можливостей. Наприклад, DOM.

Після того як _коллбек_ відправлений в `WebAPI`, функція `setTimeout` (але не коллбек!) виймається з стека.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Тепер викликається `foo`, і `"First"` виводиться в консоль.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` дістається з стека, і викликається `baz`. `"Third"` виводиться в консоль.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

`WebAPI` не може додавати вміст в стек коли захоче. Замість цього він відправляє коллбек-функцію в так звану _чергу_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Тут на сцену виходить цикл подій (event loop). **Event loop** перевіряє стек і черга завдань. Якщо стек порожній, то він бере перший елемент з черги і відправляє його в стек.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

Викликається `bar`, в консоль виводиться `"Second"` і ця функція дістається з стека.

</p>
</details>

---

###### 31. Що буде в `event.target` після кліка на кнопку?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Зовнішній `div`
- B: Внутрішній `div`
- C: `button`
- D: Масив з усіма вкладеними елементами

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Метою події є **найглибший** вкладений елемент. Зупинити поширення подій можна за допомогою `event.stopPropagation`

</p>
</details>

---

###### 32. Що буде в консолі після кліка по параграфу?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Після кліка по `p` буде виведено `p` та `div`. У циклі життя події є три фази: **захоплення**, **мета** і **спливання**. За замовчуванням обробники подій виконуються на фазі спливання (якщо не встановлено параметр `useCapture` в `true`). Спливання йде з найглибшого елемента вгору.

</p>
</details>

---

###### 33. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: D

В обох випадках ми передаємо об'єкт, на який буде вказувати `this`. Але `.call` виконується _відразу ж_!

`.bind` повертає _копію_ функції, але з прив'язаним контекстом. Вона не виконується негайно.

</p>
</details>

---

###### 34. Яким буде результат?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

Функція `sayHi` повертає значення, що повертається з _негайно викликаного функціонального вираза_ (IIFE). Результатом є `0` типу `"number"`.

Для інформації: в JS 7 вбудованих типів: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol`, та `bigint`. `"Function"` не є окремим типом, тому що функції є об'єктами типу `"object"`.

</p>
</details>

---

###### 35. Які з цих значень є "помилковими"?

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
- D: Всі значення.

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Є тільки шість "помилкових" значень:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (порожній рядок)
- `false`

Конструктори функцій, такі як new `Number` та `new Boolean` є "істинними".

</p>
</details>

---

###### 36. Що буде в консолі?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

`typeof 1` повертає `"number"`.
`typeof "number"` повертає `"string"`

</p>
</details>

---

###### 37. Що буде в консолі?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

Коли в масив додається значення, яке виходить за межі довжини масиву, JavaScript створює так звані "порожні клітинки". Насправді вони мають значення `undefined`, але в консолі виводяться так:

`[1, 2, 3, 7 x empty, 11]`

в залежності від місця використання (може відрізнятися для браузерів, Node, і т.д.).

</p>
</details>

---

###### 38. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Блок `catch` отримує аргумент `x`. Це не той же `x`, який визначено в якості змінної перед рядком `try`.

Потім ми присвоюємо цього аргументу значення `1` та встановлюємо значення для змінної `y`. Потім виводимо в консоль значення аргументу `x`, що дорівнює `1`.

За межами блоку `catch` змінна `x` все ще `undefined`, а `y` дорівнює `2`. Коли ми викликаємо` console.log(x)` за межами блоку `catch`, цей виклик повертає `undefined`, а `y` повертає `2`.

</p>
</details>

---

###### 39. Все в JavaScript це...

- A: примітив або об'єкт
- B: функція або об'єкт
- C: питання з підступом! тільки об'єкти
- D: число або об'єкт

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

В JavaScript є тільки примітиви і об'єкти.

Типи примітивів: `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, та `symbol`.

Відмінністю примітиву від об'єкта є те, що примітиви не мають властивостей або методів. Проте, `'foo'.toUpperCase()` перетворюється в `'FOO'` та не викликає `TypeError`. Це відбувається тому, що при спробі отримання властивості або методу у примітиву (наприклад, рядки), JavaScript неявно оберне примітив об'єктом, використовуючи один з класів-обгорток (наприклад, `String`), а потім відразу ж знищить обгортку після обчислення виразу. Всі примітиви крім `null` та `undefined` поводяться таким чином.

</p>
</details>

---

###### 40. Що буде в консолі?

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

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: C

`[1, 2]` - початкове значення, з яким инициализируется змінна `acc`. Після першого проходу `acc` дорівнюватиме `[1,2]`, а `cur` буде `[0,1]`. Після конкатенації результат буде `[1, 2, 0, 1]`.

Потім `acc` дорівнює `[1, 2, 0, 1]`, а cur `[2, 3]`. Після злиття отримаємо `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

---

###### 41. Що буде в консолі?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: B

`null` "НЕправдивий". `!null` повертає `true`. `!true` повертає `false`.

`""` "НЕправдивий". `!""` повертає `true`. `!true` повертає `false`.

`1` "правдивий". `!1` повертає `false`. `!false` повертає `true`.

</p>
</details>

---

###### 42. Що повертає метод `setInterval`?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: унікальний id
- B: вказану кількість мілісекунд
- C: передану функцію
- D: `undefined`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Це метод повертає унікальний id. Цей id може бути використаний для очищення інтервалу за допомогою функції `clearInterval()`.

</p>
</details>

---

###### 43. What does this return?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Відповідь</b></summary>
<p>

#### Відповідь: A

Рядок є ітеріруемой сутністю. Оператор поширення перетворює кожен символ в окремий елемент.

</p>
</details>
