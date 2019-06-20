# Lista de questões (avançadas) sobre JavaScript

Posto questões de múltipla escolha sobre JavaScript no meu [Instagram](https://www.instagram.com/theavocoder), as quais também posto aqui!

Do básico ao avançado: Teste quão bem você conhece o JavaScript, refresce um pouco do seu conhecimento, ou se prepare para uma entrevista! :muscle: :rocket: Eu atualizo esse repositório semanalmente com novas questões.

As respostas estão em seções recolhidas abaixo das questões, basta clicar nelas para expandir. Boa sorte :heart:

[English](./README.md)  
[中文版本](./README-zh_CN.md)  
[Русский](./README_ru-RU.md)  
[Western Balkan](./README-bs.md)  
[Deutsch](./README-de_DE.md)  
[Tiếng Việt](./README-vi.md)  


---

###### 1. Qual é a saída?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` e `undefined`
- B: `Lydia` e `ReferenceError`
- C: `ReferenceError` e `21`
- D: `undefined` e `ReferenceError`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: D

Dentro da função, nós primeiro declaramos a variável `name` usando a palavra-chave `var`. Isso significa que a variavel é elevada(hoisted) (O espaço na memória é separado durante a fase de criação) com o valor padrão `undefined`, até que chegue na linha onde definimos a variável. Ainda não definimos a variável na linha onde tentamos usar colocar no log o valor da variável `name`, portanto ela ainda tem o valor `undefined`.

Variáveis com a palavra-chave `let` (e `const`) são elevadas, mas diferente de `var`, não são <i>inicializadas</i>. Elas não acessíveis antes da linha em que as declaramos (ou inicializamos). Esse é um conceito chamado de "temporal dead zone". Quando tentamos acessar essas variáveis antes de serem declaradas, o JavaScript lança um `ReferenceError`

</p>
</details>

---

###### 2. Qual é a saída?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` e `0 1 2`
- B: `0 1 2` e `3 3 3`
- C: `3 3 3` e `0 1 2`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

Por causa da fila de eventos em JavaScript, a callback de `setTimeout` é chamada <i>depois</i> do laço ter sido executado. Já que a variável `i` no primeiro laço foi declarada usando a palavra-chave `var`, seu valor era global. Durante o laço, incrementamos o valor de `i` por `1` em cada repetição, usando o operador unário `++`. Quando a callback de `setTimeout` foi chamada, `i` valia `3`.

No segundo laço, a variável `i` foi declarada usando a palavra-chave `let`: Variáveis declaradas com `let` (e `const`) só são acessíveis nos escopos de seus blocos (um bloco é qualquer código entre `{ }`). Durante cada repetição do laço, `i` vai ter um novo valor, e cada valor tem seu escopo dentro do laço.

</p>
</details>

---

###### 3. Qual é a saída?

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

- A: `20` e `62.83185307179586`
- B: `20` e `NaN`
- C: `20` e `63`
- D: `NaN` e `63`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Perceba que o valor de `diameter` é uma função normal, enquanto que o valor de `perimeter` é uma arrow function.

Com arrow functions, a palavra-chave `this` faz referência ao escopo atual em que está inserida, diferente de funções normais! Isso significa que quando nós chamamos `perimeter`, ela não faz referência ao objeto <i>shape</i>, mas ao seu escopo atual (por exemplo, <i>window</i>).

Não há `radius` fora de <i>shape</i>, então retorna `undefined`.

</p>
</details>

---

###### 4. Qual é a saída?

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

O operador unário `+` tenta converter um operando para um número. `true` é `1`, e `false` é `0`.

A string `'Lydia'` tem valor truthy*. O que estamos realmente perguntando é "Esse valor truthy é falsy?". Isso retorna `false`.  
###### *Nota do tradutor: <i>truthy</i> é um termo único ao JavaScript que denota valores que podem ser convertidos em um booleano `True`. Sua contraparte é <i>falsey</i>, que são valores que podem ser convertidos em um booleano `false`. Para fins de consistência, mantenho os termos originais. 

</p>
</details>

---

###### 5. Qual é a alternativa correta?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` não é válido
- B: `mouse[bird.size]` não é válido
- C: `mouse[bird["size"]]` não é válido
- D: Todos são válidos

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

No JavaScript, todas chaves dos objetos são strings (a não ser que sejam um símbolo). Ainda que não possamos <i>digitá-las</i> como strings, elas são sempre convertidas para string sob o capô.

JavaScript interpreta afirmações. Quando usamos a notação de colchetes, ele vê o colchete de abertura `[` e continua lendo até encontrar o colchete que o fecha `]`. Só então vai avaliar e rodar as afirmações.

`mouse[bird.size]`: Primeiro avalia `bird.size`, que é `"small"`. `mouse["small"]` retorna `true`

Por outro lado, com a notação de ponto `.`, isso não acontece. `mouse` não tem uma chave chamada `bird`, o que significa que `mouse.bird` é `undefined`. Então, pedimos pelo `size` usando a notação de ponto: `mouse.bird.size`. Uma vez que `mouse.bird` é `undefined`, estamos realmente pedindo `undefined.size`. Isso não é válido, e irá gerar um erro similar a `Cannot read property "size" of undefined`.

</p>
</details>

---

---

###### 6. Quais são as saídas?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Em JavaScript, todos objetos interagem por <i>referência</i> quando os colocamos um igual ao outro.

Primeiro, a variável `c` guarda o valor de um objeto. Depois, declaramos `d` com a mesma referencia que `c` tem para o objeto.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Quando você muda um objeto, você muda todos eles.

</p>
</details>

---

###### 7. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

`new Number()` é uma funcção construtura padrão do JavaScript. Ainda que parece com um número, não é realmente um número: Tem um monte de funções extras e é um objeto.

Quando usamos o operador `==`, só conferimos se ambas tem o mesmo <i>valor</i>. Ambas tem o valor de `3`, então retorna `true`. 

Contudo, quando usamos o operador `===`, ambos valor <i>e</i> tipo tem de ser o mesmo. E não é: `new Number()` não é um número, é um **objeto**. Ambos retornam `false`.

</p>
</details>

---

###### 8. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: D

A função `colorChange` é estática. Métodos estáticos são designados para viver somente nos construtores em que são criados, e filhos não herdam esses métodos.
Já que `freddie` é filho de `Chameleon`, a função não é herdada, e não está disponível para `freddie`: Um erro `TypeError` é gerado.

</p>
</details>

---

###### 9. Qual é a saída?

```javascript
let greeting;
greetign = {}; // Erro de digitação!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Cria o log do objeto, pois criamos um objeto vazio no objeto global! Quando erramos a digitação de `greeting` como `greetign`, o interpretador do JavaScript viu isso como `global.greetign = {}` (ou `window.greetign = {}` em um navegador).

Para evitar esse comportamento, podemos usar `"use strict"`. Isso garante que você  tenha declarado uma variável antes de poder inicializá-la com algum valor.

</p>
</details>

---

###### 10. O que acontece quando fazemos isso?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nada, isso é ok!
- B: `SyntaxError`. Não se pode adicionar propriedades em uma função dessa maneira.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Isso é possível em JavaScript, pois funções são objetos! (Tudo menos tipos primitivos são objetos)

Uma função é um tipo especial de objeto. O código que você escreve não é a verdadeira função. A função é um objeto com propriedades. E essa propriedade é invocável.

</p>
</details>

---

###### 11. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Você não pode adicionar propriedades para um construtor igual aos objetos normais. Se você quer adicionar uma funcionalidade para todos objetos ao mesmo tempo, você deve usar o prototype.

Então nesse caso

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

faria `member.getFullName()` funcionar. Por quê isso é beneficial? Digamos que tivéssemos esse método ao próprio construtor. Talvez nem toda instância de `Person` precisasse desse método. Isso gastaria muita memória, uma vez que cada instância teria esse propriedade e teria seu espaço alocado. Ao invés disso, se adicionarmos somente ao protótipo, alocamos somente um único espaço na memória, e todas instâncias de `Person`ainda tem acesso ao método.

</p>
</details>

---

###### 12. Qual é a saída?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` e `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` e `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` e `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` e `ReferenceError`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Na `sarah`, não usamos a palavra-chave `new`. Quando usamos `new`, se refere ao novo objeto vazio que criamos. Contudo, se não usarmos `new`, nos referimos ao **objeto global**!

Afirmamos que `this.firstName` vale `"Sarah"` e `this.lastName` vale `"Smith"`. O que realmente fizemos foi definir `global.firstName = 'Sarah'` e `global.lastName = 'Smith'`. A `sarah` ainda é `undefined`.

</p>
</details>

---

###### 13. Quais são as três fases na propagação de eventos?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: D

Durate a fase do **capturing**, o evento percorre os elementos pais até chegar no elemento algo. Isso alcança o elemento **target**, e o **bubbling** começa.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Todos objetos tem protótipos.

- A: Verdadeiro
- B: Falso

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Todos objetos tem protótipos, exceto pelo **base object**. O base object tem acesso à alguns métodos e propriedades, como `.toString`. É o motivo de podermos usar métodos já embutidos no JavaScript! Todos métodos desse tipo já estão embutidos no protótipo. Apesar do JavaScript não encontrar algum método diretamente no seu objeto, ele percorre a cadeia de protótipos até encontrar no base, o que torna acessível para todo objeto. 

</p>
</details>

---

###### 15. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.

In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what's happening here is `"1" + "2"` which returns `"12"`.

</p>
</details>

---

###### 16. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

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

###### 17. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

</p>
</details>

---

###### 18. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.

</p>
</details>

---

###### 19. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The spread operator (`...args`.) returns an array with arguments. An array is an object, so `typeof args` returns `"object"`

</p>
</details>

---

###### 20. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

With `"use strict"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn't use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.

</p>
</details>

---

###### 21. What's value of `sum`?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.

</p>
</details>

---

###### 22. How long is cool_secret accessible?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Forever, the data doesn't get lost.
- B: When the user closes the tab.
- C: When the user closes the entire browser, not only the tab.
- D: When the user shuts off their computer.

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The data stored in `sessionStorage` is removed after closing the _tab_.

If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.

</p>
</details>

---

###### 23. What's the output?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with `let` or `const` since they're block-scoped.

</p>
</details>

---

###### 24. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</p>
</details>

---

###### 25. What's the output?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</p>
</details>

---

###### 26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

- A: true
- B: false
- C: it depends

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The base execution context is the global execution context: it's what's accessible everywhere in your code.

</p>
</details>

---

###### 27. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The `continue` statement skips an iteration if a certain condition returns `true`.

</p>
</details>

---

###### 28. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</p>
</details>

---

###### 29. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[Object object]"`. So what we are saying here, is that `a["Object object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["Object object"] = 456`.

Then, we log `a[b]`, which is actually `a["Object object"]`. We just set that to `456`, so it returns `456`.

</p>
</details>

---

###### 30. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</p>
</details>

---

###### 34. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it's of type `"object"`.

</p>
</details>

---

###### 35. Which of these values are falsy?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

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

###### 36. What's the output?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. What's the output?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)

</p>
</details>

---

###### 38. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicity wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.

</p>
</details>

---

###### 40. What's the output?

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. What's the output?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</p>
</details>

---

###### 42. What does the `setInterval` method return in the browser?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

A string is an iterable. The spread operator maps every character of an iterable to one element.

</p>
</details>
