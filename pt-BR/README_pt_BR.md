# Lista de questões (avançadas) sobre JavaScript

Posto questões de múltipla escolha sobre JavaScript no meu [Instagram](https://www.instagram.com/theavocoder), as quais também posto aqui!

Do básico ao avançado: Teste quão bem você conhece o JavaScript, refresque um pouco do seu conhecimento, ou se prepare para uma entrevista! :muscle: :rocket: Eu atualizo esse repositório semanalmente com novas questões.

As respostas estão em seções recolhidas abaixo das questões, basta clicar nelas para expandir. Boa sorte :heart:

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
###### *Nota do tradutor: <i>truthy</i> é um termo único ao JavaScript que denota valores que podem ser convertidos em um booleano `True`. Sua contraparte é <i>falsy</i>, que são valores que podem ser convertidos em um booleano `false`. Para fins de consistência, mantenho os termos originais. 

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

###### 6. Qual é a saída?

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

Contudo, quando usamos o operador `===`, ambos valor <i>e</i> tipo tem de ser o mesmo. E não são: `new Number()` não é um número, é um **objeto**. Ambos retornam `false`.

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

faria `member.getFullName()` funcionar. Por quê isso é beneficial? Digamos que tivéssemos esse método no próprio construtor. Talvez nem toda instância de `Person` precisasse desse método. Isso gastaria muita memória, uma vez que cada instância teria esse propriedade e teria seu espaço alocado. Ao invés disso, se adicionarmos somente ao protótipo, alocamos somente um único espaço na memória, e todas instâncias de `Person` ainda tem acesso ao método.

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
 ##### *Nota do tradutor: _bubbling_ descreve uma forma específica de propagação de eventos. Em tradução livre é "borbulhar", que indica como os eventos "sobem" a cadeia onde estão aninhados, mas prefiro por manter o original, visto que é o nome dessa forma de propagação.

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

###### 15. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

JavaScript é uma **linguagem dinamicamente tipada**: Não especificamos quais tipos nossas variáveis são. Valores pode ser automaticamente convertidos em outro tipo sem você saber, o que é chamado de <i>coerção implicita de tipo</i>. **Coerção** é converter de um tipo em outro.

Nesse exemplo, JavaScript converte o número `1` em uma string, para que a função faça sentido e retorne um valor. Durante a adição de um tipo numérico (`1`) e uma string (`'2'`), o número é tratado como uma string. Podemos concatenar strings como `"Hello" + "World"`, então o que está acontecendo aqui é `"1" + "2"` que retorna `"12"`.

</p>
</details>

---

###### 16. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

O operador unário no **sufixo**  `++`:

1. Retorna o valor (retorna o valor `0`)
2. Incrementa o valor (numero agora é `1`)

O operador unário **prefixo** `++`:

1. Incrementa o valor (numero agora é `2`)
2. Retorna o valor (Retorna o valor `2`)

Isso retorna `0 2 2`.

</p>
</details>

---

###### 17. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Se usamos template literals marcadas, ou tagged template literals, o valor do primeiro argumento é sempre um array com a string, separada pelos tagged template liberals. Os argumentos restantes recebem os valores das expressões passadas!

</p>
</details>

---

###### 18. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

Quando testamos igualdade, primitivos são comparados por seus _valores_, enquanto objetos são comparados por suas  _referências_. O JavaScript confere se os objetos tem a referência para o mesmo local na memória.

Os dois objetos que estamos comparando não são assim: O objeto que passamos como parâmetro faz referência a uma posição na memória diferente daquela que o objeto que usamos para conferir a igualdade.

É por isso que ambos `{ age: 18 } === { age: 18 }` E `{ age: 18 } == { age: 18 }` retornam `false`.

</p>
</details>

---

###### 19. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

O operador _spread_ (`...args`.) retorna um array com os argumentos. Um array é um objeto, então `typeof args` retorna `"object"`

</p>
</details>

---

###### 20. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

Com `"use strict"`, você pode ter certeza que não declarou variáveis globais. Nunca declaramos a variável `age`, e já que usamos `"use strict"`, ira gerar um erro de referência. Se não tivéssemos usado `"use strict"`, teria funcionado, uma vez que a propriedade `age` teria sido adicionada ao objeto global.

</p>
</details>

---

###### 21. Qual o valor de `sum`?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

`eval` executa o código mesmo se passado como string. Se é uma expressão, como nesse caso, ele cálcula a expressão. A expressão é `10 * 10 + 5`. Isso retorna o número `105`.

</p>
</details>

---

###### 22. Por quanto tempo cool_secret é acessível?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Sempre, o dado não é perdido.
- B: Quando o usuário fechar a guia.
- C: Quando o usuário fechar o navegador inteiro.
- D: Quando o usuário desligar o computador.

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Dados guardados em `sessionStorage` são removidos depois de fechar a _guia_.

Se usássemos `localStorage`, o dado seria guardado para sempre, exceto se `localStorage.clear()` fosse chamado.

</p>
</details>

---

###### 23. Qual é a saída?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Coma a palavra-chave `var`, você pode declarar várias variáveis com o mesmo nome. A variável vai guardar o último valor.

Você não pode fazer isso com `let` ou `const` uma vez que eles conferem o bloco de escopo em que estão inseridos.

</p>
</details>

---

###### 24. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

Todas as chaves de objetos (exceto símbolos) são strings debaixo do capô, mesmo que você não digite como uma string. É por isso que `obj.hasOwnProperty('1')` também retorna `true`.

Não funciona assim para `Set`. Não tem um `'1'` no nosso set: `set.has('1')` retorna `false`. Temos o tipo número `1`, então `set.has(1)` retorna `true`.

</p>
</details>

---

###### 25. Qual é a saída?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

Se temos duas chaves com o mesmo nome, a última irá substituir a primeira. Ainda vai estar na primeira posição, mas com o último valor específicado.

</p>
</details>

---

###### 26. O contexto global de execução do JavaScrit cria duas coisas para você: O objeto global, e a palavra-chave `this`.

- A: Verdadeiro
- B: Falso 
- C: Depende

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

O contexto base de execução é o contexto global: É aquilo que está acessível em qualquer lugar do código.

</p>
</details>

---

###### 27. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

A palavra-chave `continue` pula uma iteração se a condição retorna `true`.

</p>
</details>

---

###### 28. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

`String` é um construtor embutido, no qual podemos adicionar propriedades. Nesse caso adicionamos um método ao seu protótipo. Tipos primitivos `string` são automaticamente convertidos em um objeto string, gerado pelo construtor `String`. Assim, todas as strings (que são objetos string) tem acesso ao método.

</p>
</details>

---

###### 29. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Chaves de objeto são automaticamente convertidas em strings. Estamos tentando usar um objeto como chave do objeto `a`, com o valor de `123`.

Contudo, quando transformamos um objeto em string, ele vira um `"[object Object]"`. Então, o que estamos afirmando é `a["object Object"] = 123`. Após, tentamos a mesma coisa. `c` é outro objeto que (implicitamente) convertemos para string. Então, temos `a["object Object"] = 456`.

Então, fazemos o log de `a[b]`, o que na verdade é `a["object Object"]`. Acabmos de definir esse valor, como `456`, e é isso que ele retorna.

</p>
</details>

---

###### 30. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

Temos a função `setTimeout` e a invocamos por primeiro. Ainda assim, apareceu no log por último.

Isso acontece pois nos navegadores, não temos apenas o nosso mecanismo de execução (runtime engine), temos também algo chamado `WebAPI`. A `WebAPI` nos da coisas como a `setTimeout` e o DOM.

Depois que a função de retorno (callback) é enviada para a `WebAPI`, a função `setTimeout` (mas não seu retorno ou callback) são enviadas para fora do stack.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Agora, `foo` é chamada, e `"First"` é adicionado ao log.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` é evniada para fora do stack, e `baz` é chamada. `"Third"` é adicionado ao log.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

A `WebAPI` não pode simplesmente adicionar coisas ao stack sempre que ficam prontas. Ao invés, disso, todo retorno que fica pronto é enviado para algo chamado _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

É aqui que um laço de evento começa a ocorrer. Um **laço de evento** confere o stack e o _queue_. Se o stack está livre, pega a primeira coisa que estiver na queue e coloca no stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` é chamada, `"Second"` é adicionado ao log, e é enviado para fora do stack.

</p>
</details>

---

###### 31. qual é o event.target quando clicamos no botão?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: A `div` mais externa
- B: A `div` mais interna
- C: `button`
- D: Um array dos elementos aninhandos.

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

O elemento mais interno no aninhamento que causou o evento é o alvo do evento. Você pode parar o _bubbling_ com `event.stopPropagation`. 

</p>
</details>

---

###### 32. Quando você clica no parágrafo, O que é adicionado ao log?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Se clicarmos em `p`, veremos dois itens adicionaos ao log: `p` e `div`. Durante a propagação de eventos, existem 3 fases: capturar, adquirir o _target_, e o bubbling. Por padrão, manipuladores de eventos são executados junto a fase de bubbling (a não ser que você marque `useCapture` como `true`). Percorre do elemento aninhando mais interno, propagando para fora.

</p>
</details>

---

###### 33. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: D

Com ambos, podemos passar o objeto que queremos que o `this` faça referência. Contudo, `.call` é _executado imediatamente_!

`.bind.` retorna uma _cópia_ da função, mas com seu contexto vinculado à cópia. E não é executado imediatamente.

</p>
</details>

---

###### 34. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

A função `sayHi` retorna o valor retornado pela arrow function pois ela é uma IIFE (Immediately Invoked Function Expression ou Expressão de Função Invocada Imediatamente). Essa IIFE retornou `0`, que é do tipo `"number"`.

Para saber mais: Só existem 7 tipos já definidos: `null`, `undefined`, `boolean`, `number`, `string`, `object`, e `symbol`. `"function"` não é um tipo, uma vez que  funções são objetos, elas são do tipo `"object"`.

</p>
</details>

---

###### 35. Qual desses tem valor falsy?

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
- D: Todos são falsy

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Existem somente seis valores falsy:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (string vazia)
- `false`

Funções construtoras, como `new Number` e `new Boolean` são truthy.

</p>
</details>

---

###### 36. Qual é a sáida?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

`typeof 1` retorna `"number"`.
`typeof "number"` retorna `"string"`

</p>
</details>

---

###### 37. Qual é a saída?

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

###### 38. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

O bloco do `catch` recebe o argumento `x`. Esse não é o mesmo `x` da variável de quando estamos passando os argumentos. A variável `x` é de escopo do seu bloco.

Depois, definimos essa variável, dentro do seu bloco, para valor `1`, e definimos o valor de `y`, que pertence a um bloco maior. Agora, nos adicionamos ao log o valor de `x`, que dentro desse bloco tem valor `1`.

Fora do bloco do `catch`. `x` ainda é `undefined`, e `y` ainda é `2`. Quando tentamos usar `console.log(x)` fora do bloco do `catch`, isso retorna `undefined`, e `y` retorna `2`.

</p>
</details>

---

###### 39. Tudo em JavaScript ou é um...

- A: primitivo ou um objeto
- B: função ou um object
- C: Pegadinha! Somente objetos
- D: número ou um objeto

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

JavaScript tem somente tipos primitivos e objetos.

Tipos primitivos são `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, e `symbol`.

O que diferencia um primitivo de um objeto é que primitivos não métodos ou propriedades. Contudo, se você está atento vai lembrar que `'foo'.toUpperCase()` retorna `'FOO'` e não resulta em um `TypeError`. Isso acontece pois quando você tenta acessar uma propriedade ou método em um primitivo como, por exemplo, uma string, JavaScript vai transformar esse primitivo em objeto usando um _wrapper_, nesse caso o `String`, e discarta o wrapper imediatamente após executar o método ou propriedade. Todos os primitivos, com exceção de `null` e `undefined` exibem esse comportamento.

</p>
</details>

---

###### 40. Qual é a saída?

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

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: C

`[1, 2]` é nosso valor inicial. É o valor que começamos, e portanto o valor do primeiro `acc`. Durante a primeira iteração, `acc` é `[1,2]`, e `cur` é `[0, 1]`. Nós concatemos ambos, o que resulta em `[1, 2, 0, 1]`.

Então, `[1, 2, 0, 1]` é `acc` e `[2, 3]` é o `cur`. Concatenamos novamente, e chegamos em `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

---

###### 41. Qual é a saída?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: B

`null` é falsy. `!null` retorna `true`. `!true` retorna `false`.

`""` é falsy. `!""` retorna `true`. `!true` retorna `false`.

`1` é truthy. `!1` retorna `false`. `!false` retorna `true`.

</p>
</details>

---

###### 42. O que o método `setInterval` retorna no navegador?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: um id único
- B: a quantidade de  millisegundos especificada
- C: a função passada
- D: `undefined`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Retorna um id único. Esse id pode ser usado para limpar o intervalo com a função `clearInterval()`.

</p>
</details>

---

###### 43. Qual é o retorno?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Resposta</b></summary>
<p>

#### Resposta: A

Strings são iteráveis. O operador do spread `...` mapeia todo caractére de um iterável para um elemento.

</p>
</details>
