
# Lista de preguntas (avanzadas) de JavaScript 

 Publico diariamente preguntas de opción múltiple en JavaScript en mi [Instagram](https://www.instagram.com/theavocoder), ¡que también publicaré aquí! 
 
 Desde lo básico a lo avanzado: comprueba si realmente conoces _Javascript_, actualiza tus conocimientos o simplemente prepárate para tu próxima entrevista 💪 🚀 Actualizaré este repo semanalmente con nuevas preguntas.
 
 Las respuestas se encuentran en las secciones contraídas debajo de las preguntas, simplemente haz clic en ellas para expandirlas. Buena suerte ❤️

¿Quieres recibir un email cada vez que agregue más preguntas? <br />
<a target="_blank" href="https://www.theavocoder.com/subscribe"><b>✨✉Suscríbete a las actualizaciones por email✉✨</b></a>


Lista de lenguajes disponibles:
- [🇸🇦 العربية](../ar-AR/README_AR.md)
- [🇪🇬 اللغة العامية](../ar-EG/README_ar-EG.md)
- [🇧🇦 Bosanski](../bs-BS/README-bs_BS.md)
- [🇩🇪 Deutsch](../de-DE/README.md)
- [🇬🇧 English](../README.md)
- [🇫🇷 Français](../fr-FR/README_fr-FR.md)
- [🇮🇩 Indonesia](../id-ID/README.md)
- [🇮🇹 Italiano](../it-IT/README.md)
- [🇯🇵 日本語](../ja-JA/README-ja_JA.md)
- [🇰🇷 한국어](../ko-KR/README-ko_KR.md)
- [🇳🇱 Nederlands](../nl-NL/README.md)
- [🇵🇱 Polski](../pl-PL/README.md)
- [🇧🇷 Português Brasil](../pt-BR/README_pt_BR.md)
- [🇷o Română](../ro-RO/README.ro.md)
- [🇷🇺 Русский](../ru-RU/README.md)
- [🇽🇰 Shqip](../sq-KS/README_sq_KS.md)
- [🇹🇭 ไทย](../th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)


---

###### 1. ¿Qué devuelve la siguiente función?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` y `undefined`
- B: `Lydia` y `ReferenceError`
- C: `ReferenceError` y `21`
- D: `undefined` y `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

Dentro de la función, primero declaramos la variable `name` con la palabra reservada ` var`. Esto significa que la variable se _eleva_ (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino [hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)) con el valor predeterminado de `indefinido`, hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable `name`, por lo que aún mantiene el valor de` undefined`.

Las variables con la palabra clave `let` (y` const`) se _elevan_, pero a diferencia de `var`, no se inicializa <i> </i>. No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la ["zona muerta temporal"](https://wesbos.com/temporal-dead-zone/). Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un `ReferenceError`
</p>
</details>

---

###### 2. ¿Qué devuelve la siguiente función?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` y `0 1 2`
- B: `0 1 2` y `3 3 3`
- C: `3 3 3` y `0 1 2`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Debido a la cola de eventos en JavaScript, la función `setTimeout` se llama una vez el ciclo se ha ejecutado. Dado que la variable `i` en el primer bucle se declaró utilizando la palabra reservada ` var`, este valor es global. Durante el bucle, incrementamos el valor de `i` en` 1` cada vez, utilizando el operador unario `++`. Cuando se invocó la función `setTimeout`,` i` era igual a `3` en el primer ejemplo.

En el segundo bucle, la variable `i` se declaró utilizando la palabra reservada` let`: las variables declaradas con la palabra reservada `let` (y` const`) tienen un ámbito de bloque (un bloque es lo que se encuentra entre `{}`). Durante cada iteración, `i` tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.

</p>
</details>

---

###### 3. ¿Qué devuelve la siguiente función?

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

- A: `20` y `62.83185307179586`
- B: `20` y `NaN`
- C: `20` y `63`
- D: `NaN` y `63`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Hay que tener en cuenta aqui que el valor de `diámetro` es una función regular o _normal_, mientras que el valor de `perímetro` es una función de flecha.

Con las funciones de flecha, la palabra clave `this` se refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro", no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).

No hay valor `radius` en ese objeto, que devuelve` undefined`.

</p>
</details>

---

###### 4. ¿Qué devuelve la siguiente función?

```javascript
+true;
!"Lydia";
```

- A: `1` y `false`
- B: `false` y `NaN`
- C: `false` y `false`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

En el primera caso se intenta convertir un operando en un número. `true` es` 1`, y `false` es` 0`.

En el segundo caso la cadena `'Lydia'` es un valor verdadero. Lo que realmente estamos preguntando es "¿es este verdadero valor falso?". Esto devuelve `false`.

</p>
</details>

---

###### 5. ¿Cuál NO es válida?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size`
- B: `mouse[bird.size]`
- C: `mouse[bird["size"]]`
- D: Todas son correctas

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

En JavaScript, todas las _keys_ son cadenas (a menos que sea un símbolo). A pesar de que no podríamos escribirlos como cadenas, siempre funcionan como cadenas de manera interna.

JavaScript interpreta declaraciones. Cuando usamos la notación de corchetes, ve el corchete de apertura `[` y continúa hasta que encuentra el corchete de cierre `]`. Solo de esta manera se evaluará la afirmación.

`mouse [bird.size]`: Primero evalúa `bird.size`, que es` "small" `. `mouse ["small"]` devuelve `true`

Sin embargo, con la notación de puntos, esto no sucede. `mouse` no tiene una clave llamada` bird`, lo que significa que `mouse.bird` es` undefined`. Luego, pedimos el `tamaño` usando la notación de puntos:` mouse.bird.size`. Como `mouse.bird` es` undefined`, en realidad estamos preguntando `undefined.size`. Esto no es válido y generará un error similar `al Cannot read property "size" of undefined`

</p>
</details>

---

###### 6. ¿Qué devuelve la siguiente función?

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

En JavaScript, TODOS los objetos interactúan por referencia, de modo que cuando se establecen iguales o pasan a una función, todos apuntan a la misma ubicación. De esta manera cuando cambia un objeto, los cambia a todos.

Primero, la variable `c` tiene un valor para un objeto. Más tarde, asignamos `d` con la misma referencia que` c` tiene al objeto.

<img src = "https://i.imgur.com/ko5k0fs.png" width = "200">

Cuando cambias un objeto, cambias todos ellos.

</p>
</details>

---

###### 7. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

`new Number ()` es un constructor de funciones incorporado. Aunque parece un número, no es realmente un número: tiene muchas características adicionales y es un objeto.

Cuando usamos el operador `==`, solo verifica si tiene el mismo _valor_. Ambos tienen el valor de `3`, por lo que devuelve` true`.

Sin embargo, cuando usamos el operador `===`, tanto el **valor** como el **tipo** deben ser iguales. Entonces: `new Number ()` no es un número, es un **objeto**. Ambos devuelven "false".

</p>
</details>

---

###### 8. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

La función `colorChange` es estática. Los métodos estáticos están diseñados para _vivir_ solo en el constructor en el que se crean y no se pueden transmitir a ningún elemento secundario. Como `freddie` es un niño, la función no se transmite y no está disponible en la instancia de `freddie`: por lo tanto se lanza un `TypeError`.

</p>
</details>

---

###### 9. ¿Qué devuelve la siguiente función?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global. Cuando escribimos erróneamente `greeting` como `greetign`, el intérprete de JS ve esto como `global.greetign = {}` (o `window.greetign = {}` en un navegador).

Para evitar esto, podemos usar el ["uso estricto"](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto). Esto asegura que se haya declarado una variable antes de establecerla igual a cualquier cosa.

</p>
</details>

---

###### 10. ¿Qué ocurre cuando hacemos esto?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: No pasa nada, es totalmente correcto.
- B: `SyntaxError`. No es posible agregar propiedades a una función de esta manera.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Esto es perfectamente posible en JavaScript, porque las funciones son objetos (Recuerda: **todo** aparte de los tipos primitivos son objetos en JS)

Una función es un tipo especial de objeto. El código que escribes tú mismo no es la función real. La función es un objeto con propiedades. Esta propiedad es invocable.

</p>
</details>

---

###### 11. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

En JS no se pueden añadir propiedades a un constructor como se puede hacer con los objetos. Si se desea añadir una característica a todos los objetos a la vez, se debe utilizar [prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) en su lugar. Así que en este caso,

```js
Person.prototype.getFullName = function () {)
  return `${this.firstName} ${this.lastName}`;
}
```

habría hecho que `member.getFullName()` funcionara. ¿Por qué es bueno? Imaginemos que añadimos este método al constructor. Quizás no todas las "personas" necesitaban este método. Esto desperdiciaría mucho espacio de memoria, ya que todavía tendrían esa propiedad, que ocupa espacio de memoria para cada caso. En cambio, si sólo lo añadimos al prototipo, sólo lo tenemos en un lugar en la memoria, ¡pero todos ellos tienen acceso a él!

</p>
</details>

---

###### 12. ¿Qué devuelve la siguiente función?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Para `sarah`, no usamos la palabra reservada `new`. Cuando se usa `new`, se refiere al nuevo objeto vacío que creamos. Sin embargo, si no se agrega `new', se refiere al **objeto global**!

En el ejemplo `this.firstName` equivale a `"Sarah"` y `this.lastName` equivale a `"Smith"`. Lo que realmente hicimos fue definir `global.firstName = `Sarah'` y `global.lastName = `Smith'`. La misma `sarah` se deja `indefinida`.

</p>
</details>

---

###### 13. ¿Cuáles son las tres fases de la propagación de eventos?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

Durante la fase de **Capturing**, el evento pasa a través de los elementos ancestrales hasta el elemento objetivo. A continuación, alcanza el elemento **Target** y comienza el **bubbling**. Más información [aquí](https://www.sitepoint.com/event-bubbling-javascript/).

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. All object have prototypes.

- A: true
- B: false

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Todos los objetos tienen prototipos, excepto el **objeto base** (Más info [aquí](https://stackoverflow.com/questions/56659303/what-is-base-object-in-javascript)). El componente tiene acceso a algunos métodos y propiedades, como `.toString`. Esta es la razón principal por la que se puede utilizar los métodos JavaScript incorporados. Todos estos métodos están disponibles en el prototipo. Aunque JavaScript no puede encontrar de manera directa en su objeto, baja por la cadena de prototipos y lo encuentra allí, lo que lo hace accesible para poder usarse posteriormente.

</p>
</details>

---

###### 15. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

JavaScript es un **lenguaje dinámicamente tipado** o de tipado débil, esto significa que no es necesario declarar el tipo de variable antes de usarla pues será determinado automáticamente cuando el programa comience a ser procesado. Los valores se pueden convertir automáticamente en otro tipo sin que se sepa, esto se llama denomina _implicit type coercion_ (Más info [aquí](https://medium.com/@ManuCastrillonM/entendiendo-la-coerci%C3%B3n-en-javascript-bc202d22d23f)). **La coerción es la conversión de un tipo a otro.**

En este ejemplo, JavaScript convierte el número `1` en una cadena, para que la función tenga sentido y devuelva un valor. Durante la suma de un tipo numérico (`1`) y un tipo de cadena (`'2'`), el número se trata como una cadena. Podemos concatenar cadenas como `"Hello" + "World"``, así que lo que está pasando aquí es `"1" + "2"` que devuelve `"12"`

</p>
</details>

---

###### 16. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

El operador **postfix** unario `++`:

1. Devuelve el valor (esto devuelve `0`)
2. Incrementa el valor (el número es ahora `1`)

El operador unario **prefix** `++`:

1. Incrementa el valor (el número es ahora `2`)
2. Devuelve el valor (esto devuelve `2`)

Por lo tanto, devuelve `0 2 2 2`.

</p>
</details>

---

###### 17. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B


_Tagged templates_ es un caso de uso de [template literals](https://codeburst.io/javascript-template-literals-tag-functions-for-beginners-758a041160e1). Una _plantilla etiquetada_ es una llamada de función que utiliza una plantilla literal de la que obtener sus argumentos. Si se usan literales de plantillas etiquetadas, el valor del primer argumento es siempre una matriz de los valores de las cadenas. El resto de los argumentos obtienen los valores de las expresiones pasadas.
</p>
</details>

---

###### 18. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Al probar la igualdad, las primitivas se comparan por su _valor_, mientras que los objetos se comparan por su _referencia_. JavaScript comprueba si los objetos tienen una referencia a la misma ubicación en la memoria.

Los dos objetos que estamos comparando no tienen eso: el objeto que pasamos como parámetro se refiere a una ubicación diferente en la memoria que el objeto que usamos para comprobar la igualdad.

Esta es la razón por la que ambos `{ edad: 18 } === { edad: 18 }` y `{ edad: 18 }} == { edad: 18 }` devuelven `false`

</p>
</details>

---

###### 19. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

El operador spread (`...args`.) devuelve un array con argumentos. Una matriz es un objeto, así que `typeof args` devuelve `"object"`

</p>
</details>

---

###### 20. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Con `"use strict"`, es posible asegurarse de que no se declara accidentalmente variables globales. Nunca declaramos la variable `age`, y como usamos `"use strict"`, nos dará un error de referencia. Si no hubiéramos usado `"use strict"`, habría funcionado, ya que la propiedad `age` se habría añadido al objeto global.

</p>
</details>

---

###### 21. ¿Cuál es el valor de `sum`?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

`eval` evalúa los códigos que se pasan como una cadena. Si es una expresión, como en este caso, evalúa la expresión. La expresión es `10 * 10 + 5`. Esto devuelve el número `105`.

</p>
</details>

---

###### 22. ¿Cuánto tiempo es accesible cool_secret?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Para siempre, los datos no se pierden.
- B: Cuando el usuario cierra la pestaña.
- C: Cuando el usuario cierra todo el navegador, no sólo la pestaña.
- D: Cuando el usuario apaga su ordenador.

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Los datos almacenados en `sessionStorage` se eliminan después de cerrar la pestaña.

Si se usó `localStorage`, los datos habrían estado allí siempre, a menos que por ejemplo `localStorage.clear()` sea invocado.

</p>
</details>

---

###### 23. ¿Qué devuelve la siguiente función?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Con la palabra reservada `var`, se pueden declarar múltiples variables con el mismo nombre. La variable tendrá entonces el último valor.

No es posible hacer esto con `let` o `const` ya que tienen un alcance de bloque.

</p>
</details>

---

###### 24. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Todas las claves de un objeto (excepto los símbolos) actúan como cadenas, incluso si no son escritas como una cadena. Es por eso que `obj.hasOwnProperty('1')` también devuelve verdadero.

No funciona así para un conjunto. No hay un "1" en nuestro set: `set.has('1')` devuelve `falso`. Tiene el tipo numérico `1`, `set.has(1)` devuelve `true`.


</p>
</details>

---

###### 25. ¿Qué devuelve la siguiente función?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Si tiene dos claves con el mismo nombre, la clave será reemplazada. Seguirá estando en su primera posición, pero con el último valor especificado

</p>
</details>

---

###### 26. El contexto de ejecución de JS crea dos cosas: el objecto global y la palabra reservada "this".

- A: true
- B: false
- C: it depends

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

El contexto de ejecución base es el contexto de ejecución global: es accesible en todo el código.

</p>
</details>

---

###### 27. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C
La sentencia `continue` omite una iteración si una cierta condición, en este caso `(i === 3)`,  devuelve `true`.

</p>
</details>

---

###### 28. ¿Qué devuelve la siguiente función?

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza())
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

`String` es un constructor incorporado, al que podemos añadir propiedades. En este caso concreto, añadimos un método a su prototipo. Las cadenas primitivas se convierten automáticamente en un objeto de cadena, generado por la función de prototipo de cadena. Por lo tanto, todas las cadenas (objetos de cadena) tienen acceso a ese método.

</p>
</details>

---

###### 29. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Las claves se convierten automáticamente en strings. Estamos tratando en este pregunta de establecer un objeto como clave para el objeto `a`, con el valor de `123`.

Sin embargo, cuando se _stringfy_ (compleja traducción) un objeto, se convierte en `"[object Object]"`. Así que lo que estamos diciendo aquí, es que `a["object Object"] = 123`. Entonces, podemos intentar hacer lo mismo de nuevo. `c` es otro objeto que estamos implícitamente encadenando. Entonces, `a["object Object"] = 456`.

Para finalizar, registramos `a[b]`, que en realidad es `a["Object"]`. Acabamos de ponerlo en `456`, así que devuelve `456`.

</p>
</details>

---

###### 30. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Tenemos una función `setTimeout` y la invocamos primero. Sin embargo, fue el último en ser registrado.

Esto se debe a que en los navegadores, no sólo tenemos el motor de tiempo de ejecución, también tenemos algo llamado `WebAPI`. El `WebAPI` nos da la función `setTimeout` para empezar, y por ejemplo el DOM.

Después de que la _callback_ es empujada a la WebAPI, la función `setTimeout` en sí misma (¡pero no la callback!) es removida de la pila.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Ahora, `foo` es invocado, y ``"First"`` está siendo registrado.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`Foo` se quita de la pila, y `Baz` es invocado. `Third` se registra.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

La WebAPI no puede simplemente añadir cosas a la pila cuando está lista. En su lugar, empuja la función de devolución de llamada a algo llamado la _queue_ (cola en español).

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Aquí es donde un bucle de eventos comienza a funcionar. Un **lazo de evento** mira la pila y la cola de tareas. Si la pila está vacía, toma lo primero que encuentra en la cola y la empuja sobre la pila.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

Se invoca el `bar`, se registra el `"Second"` y se quita de la pila.

</p>
</details>

---

###### 31. ¿Cuál es la referencia al objeto que lanza el evento cuando se hace click en el botón?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

El elemento anidado más profundo que causa el evento es el destino de ese evento.

</p>
</details>

---

###### 32. Al hacer click en el párrafo, ¿qué se muestra por pantalla?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Si hacemos clic en `p`, vemos dos _outputs_: `p` y `div`. Durante la propagación del evento, hay 3 [fases](https://www.sitepoint.com/event-bubbling-javascript/): _capturing_, _target_ y _bubbling_. De forma predeterminada, los controladores de eventos se ejecutan en la fase uno (a menos que se establezca `useCapture` en `true`). Va desde el elemento anidado más profundo hacia el exterior.

</p>
</details>

---

###### 33. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

En ambos  podemos pasar el objeto al que queremos que se refiera la palabra reservada `this`. Sin embargo, la diferencia es que `.call` es *ejecutado inmediatamente*!

`.bind` devuelve una copia de la función, pero con un contexto enlazado. Es decir, no se ejecuta de inmediato.

</p>
</details>

---

###### 34. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

La función `sayHi` devuelve el valor devuelto de la función invocada inmediatamente ([IIFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)). Esta función devuelve `0`, que es el tipo `"number"`.

En JS solo hay 7 tipos incorporados (En inglés se llaman _built-in types_, y pueden identificarse con el operador `typeof`. Más información [aquí](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch01.html)): `null`,` undefined`, `boolean`,` number`, `string`,` object`, `symbol` y `bigint`. `"function"` no es un tipo, ya que las funciones son objetos, es de tipo `"object"`.

</p>
</details>

---

###### 35. ¿Cuáles de estos valores son falsos?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Solo hay seis valores falsos:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (cadena vacía)
- `false`


Los constructores de funciones, como `new Number` y `new Boolean` son correctos.

</p>
</details>

---

###### 36. ¿Qué devuelve la siguiente función?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

`typeof 1` devuelve `"number" `.
`typeof "number"` devuelve `"string"`

</p>
</details>

---

###### 37. ¿Qué devuelve la siguiente función?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Cuando se establece un valor en un elemento de una matriz que excede la longitud de la matriz, JS crea algo llamado "ranuras vacías". Estos realmente tienen el valor de `undefined`, pero se podrá ver algo como:

`[1, 2, 3, 7 x empty, 11]`

dependiendo de dónde lo ejecute (es diferente para cada navegador, nodo, etc.)

</p>
</details>

---

###### 38. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

El bloque `catch` recibe el argumento` x`. Este no es el mismo `x` que la variable cuando pasamos los argumentos. Esta variable `x` tiene un ámbito de bloque.

Más adelante, establecemos esta variable de ámbito de bloque igual a `1`, y establecemos el valor de la variable `y`. Ahora, registramos la variable de ámbito de bloque `x`, que es igual a `1`.

Fuera del bloque `catch`,` x` sigue siendo `undefined`, e `y` es `2`. Cuando queremos `console.log (x)` fuera del bloque `catch`, devuelve `undefined`, y `y` devuelve` 2`.

</p>
</details>

---

###### 39. Todo en Javascript es o bien un(a)..

- A: tipo primitivo o un objeto
- B: función u objeto
- C: ¡pregunta trampa! solo objetos
- D: número u objeto

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

JavaScript solo tiene tipos y objetos primitivos.

Los tipos primitivos son `boolean`, `null`, `undefined`, `bigint`, `number`, `string` y `symbol`.

Lo que diferencia a un tipo primitivo de un objeto es que los primeros no tienen propiedades o métodos; sin embargo, se puede ver que `'foo'.toUpperCase ()` se evalúa como `'FOO'` y no da como resultado un `TypeError`. Esto se debe a que cuando se intenta acceder a una propiedad o método en un tipo primitivo, como una cadena, JavaScript envolverá implícitamente el objeto utilizando una de las clases de envoltura, por ejemplo `string`, y luego descartará la envoltura inmediatamente después de evaluar la expresión. Todas los tipos primitivos excepto `null` y `undefined` poseen este comportamiento.

</p>
</details>

---

###### 40. ¿Qué devuelve la siguiente función?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

`[1, 2]` es nuestro valor inicial. Este es el valor con el que empezamos y el valor del primer `acc`. Durante la primera ronda, `acc` es` [1,2] `, y `cur` es `[0, 1]`. Los concatenamos, lo que resulta en `[1, 2, 0, 1]`.

Entonces, `[1, 2, 0, 1]` es `acc` y` [2, 3]` es `cur`. Los concatenamos, y obtenemos `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. ¿Qué devuelve la siguiente función?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

`null` es falso. `! null` devuelve `true`. `! true` devuelve `false`.

`" "` es falso. `!" "` devuelve `true`. `! true` devuelve `false`.

'1' es verdadero. `! 1` devuelve `false`. `! false` devuelve `true`.

</p>
</details>

---

###### 42. ¿Qué devuelveel método `setInterval`?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: una id único
- B: la cantidad de milisegundos especificada
- C: la función pasada
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Devuelve una identificación única, un id único. Este id se puede usar para borrar ese intervalo con la función `clearInterval ()`.

</p>
</details>

---

###### 43. ¿Qué devuelve la siguiente función?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Una cadena es un iterable. El [operador de propagación](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator) asigna todos los caracteres de un iterable a un elemento.

</p>
</details>

---

###### 44. ¿Cuál es el resultado?

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
- D: `0, 10 y 10, 20`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Las funciones regulares no pueden pararse a mitad de ejecución después de invocarse. Sin embargo, una función generadora sí puede ser parada, y más adelante continuar desde donde fue detenida. Cada vez que una función generadora encuentra un `yield`, la función cede el valor especificado después de él. Observa que la función generadora en este caso no _devuelve_ el valor, _cede_ el valor.

Primero, iniciamos la función generadora con `i` igual a `10`. Invocamos la función generadora usando el método `next()`. La primera vez que invocamos la función generadora, `i` es igual a `10`. Encuentra el primer `yield`: cede el valor de `i`. El generador está ahora "pausado", y `10` es mostrado por consola.

Después, invocamos la función otra vez con el método `next()`. Continúa donde fue detenida previamente, todavía con `i` igual a `10`. Ahora, encuentra el siguiente `yield`, y cede `i * 2`. `i` es igual a `10`, así que devuelve `10 * 2`, que es `20`. Esto da como resultado `10, 20`.

</p>
</details>

---

###### 45. ¿Qué devuelve esto?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Cuando pasamos múltiples promesas al método `Promise.race`, resuelve/rechaza la _primera_ promesa que sea resuelta/rechazada. Para el método `setTimeout`, pasamos un cronómetro: 500ms para la primera promesa (`firstPromise`), y 100ms para la segunda promesa (`secondPromise`). Esto significa que `secondPromise` se resuelve primero con el valor de `'two'`. `res` ahora guarda el valor `'two'`, el cual se muestra por consola.

</p>
</details>

---

###### 46. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

Primero, declaramos la variable `person` con el valor de un objeto que tiene una propiedad `name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Después, declaramos una variable llamada `members`. Asignamos el primer elemento de ese array igual al valor de la variable `person`. Un objeto interactúa por _referencia_ cuando es asignado igual a otro objeto. Cuando asignas una referencia de una variable a otra, haces una _copia_ de esa referencia. (¡observa que no tienen la _misma_ referencia!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Después, asignamos que la variable `person` es igual a `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Solo estamos modificando el valor de la variable `person`, y no el primer elemento del array, ya que este elemento tiene una referencia diferente (copiada) al objeto. El primer elemento en `members` todavía mantiene su referencia hacia el objeto original. Cuando mostramos por consola el array `members`, el primer elemento todavía mantiene el valor del objeto, el cual se muestra por consola.

</p>
</details>

---

###### 47. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Con un bucle `for-in`, podemos iterar sobre claves de objetos, en este caso `name` y `age`. Internamente, las claves de objetos son strings (si no son Symbol). En cada bucle, asignamos `item` igual a la clave actual que se está iterando. Primero, `item` es igual a `name`, y se muestra por consola. Después, `item` es igual a `age`, que se muestra por consola.

</p>
</details>

---

###### 48. ¿Cuál es el resultado?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

La asociatividad de operadores es el orden en el que el compilador evalúa las expresiones, ya sea de izquierda a derecha o de derecha a izquierda. Esto solo pasa si todos los operadores tienen la _misma_ precedencia. Solo tenemos un tipo de operador: `+`. Para la suma, la asociatividad es de izquierda a derecha.

`3 + 4` se evalúa primero. Esto da como resultado el número `7`.

`7 + '5'` da `"75"` por la coerción. JavaScript convierte el número `7` a string, mira la pregunta 15. Podemos concatenar dos strings usando el operador `+`. `7 + '5'` da como resultado `"75"`.

</p>
</details>

---

###### 49. ¿Cuál es el valor de `num`?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Solo el primer número en el string es devuelto. Según en la _base_ seleccionada (el segundo argumento para especificar a qué tipo de número queremos transformarlo: base 10, hexadecimal, octal, binario, etc.), el `parseInt` comprueba si los caracteres del string son válidos. Una vez encuentra un caracter que no es un número válido en la base seleccionada, deja de recorrer el string e ignora los siguientes caracteres.

`*` no es un número válido. Solo convierte `"7"` al decimal `7`. `num` tiene el valor `7`.

</p>
</details>

---

###### 50. ¿Cuál es el resultado?

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 huecos vacíos ]`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Cuando se mapea sobre un array, el valor de `num` es igual al elemento que se está iterando. En este caso, los elementos son números, por lo que la condición del if `typeof num === "number"` devuelve `true`. La función de mapeo crea un nuevo array e inserta los valores devueltos por la función.

Sin embargo, no devolvemos un valor. Cuando no devolvemos un valor desde la función, la función devuelve `undefined`. Para cada elemento en el array, la función de bloque es llamada, así que por cada elemento devolvemos `undefined`.

</p>
</details>

---

###### 51. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Los argumentos son pasados por _valor_, a no ser que su valor sea un objeto, en cuyo caso con pasados por _referencia_. `birthYear` es pasado por valor, ya que es un string, no un objeto. Cuando pasamos argumentos por valor, una _copia_ de ese valor es creada (ver pregunta 46).

La variable `birthYear` tiene una referencia al valor `"1997"`. El argumento `year` también tiene una referencia al valor `"1997"`, pero no es el mismo valor al que `birthYear` referencia. Cuando actualizamos el valor de `year` igualándolo a `"1998"`, solo estamos actualizando el valor de `year`. `birthYear` todavía es igual a `"1997"`.

El valor de `person` es un objeto. El argumento `member` tiene una referencia (copiada) al _mismo_ objeto. Cuando modificamos la propiedad a la que el objeto `member` referencia, el valor de `person` también será modificado, ya que ambos tienen una referencia al mismo objeto. La propiedad `name` de `person` es ahora igual al valor `"Lydia"`.

</p>
</details>

---

###### 52. ¿Cuál es el resultado?

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
- B: `"Oh no an error! undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error! Hello world!`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

Con la sentencia `throw`, podemos crear errores personalizados. Con esta sentencia, puedes lanzar excepciones. Una excepción puede ser un <b>string</b>, un <b>número</b>, un <b>boolean</b> o un <b>objeto</b>. En este caso, nuestra excepción es el string `'Hello world'`.

Con la sentencia `catch`, podemos especificar qué queremos hacer si una excepción es lanzada en el bloque `try`. Se lanza una excepción: el string `'Hello world'`. `e` es ahora igual a ese string, el cual se muestra por consola. Esto da como resultado `'Oh an error: Hello world'`.

</p>
</details>

---

###### 53. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Cuando devuelves una propiedad, el valor de la propiedad es igual al valor _retornado_, no el valor indicado en el constructor de la función. Devolvemos el string `"Maserati"`, por lo que `myCar.make` es igual a `"Maserati"`.

</p>
</details>

---

###### 54. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

`let x = y = 10;` es en realidad una forma más corta de escribir:

```javascript
y = 10;
let x = y;
```

Cuando asignamos `y` igual a `10`, en realidad añadimos una propiedad `y` al objeto global (`window` en navegador, `global` en Node). En un navegador, `window.y` es ahora igual a `10`.

Después, declaramos una variable `x` con el valor de `y`, el cual es `10`. Las variables declaradas con `let` tienen _alcance de bloque_, solo son definidas dentro del bloque en el que son declaradas; las expresiones de función ejecutadas inmediatamente (IIFE por sus siglas en inglés) en este caso. Cuando usamos el operador `typeof`, el operando `x` no está definido: estamos intentando acceder a `x` fuera del bloque en el que es declarado. Esto significa que `x` no está definido. Los valores a los que no se les ha asignado un valor o que no han sido declarados son de tipo `"undefined"`. `console.log(typeof x)` devuelve `"undefined"`.

Sin embargo, hemos creado una variable global `y` cuando la hemos igualado a `10`. Este valor es accesible desde cualquier parte en nuestro código. `y` es definida, y tiene un valor de tipo `"number"`. `console.log(typeof y)` devuelve `"number"`.

</p>
</details>

---

###### 55. ¿Cuál es el resultado?

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
- B: `"Woof I am Mara"`, `"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Podemos borrar propiedades de objetos usando `delete`, también en el prototipo (prototype). Borrando una propiedad en el prototipo, hace que no vuelva a estar disponible en la cadena de prototipo. En este caso, la función `bark` deja de estar disponible en el prototipo después de `delete Dog.prototype.bark`, pero aún intentamos acceder a ella.

Cuando intentamos invocar algo que no es una función, un `TypeError` es lanzado. En este caso `TypeError: pet.bark is not a function`, ya que `pet.bark` es `undefined`.

</p>
</details>

---

###### 56. ¿Cuál es el resultado?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

El objeto `Set` es una colección de valores _únicos_: un valor solo puede aparecer una vez en un set.

Pasamos el iterable `[1, 1, 2, 3, 4]` con el valor `1` duplicado. Como no podemos tener dos valores iguales en el set, uno de ellos es eliminado. Esto da como resultado `{1, 2, 3, 4}`.

</p>
</details>

---

###### 57. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Un módulo importado es de _solo lectura_: no puedes modificar el módulo importado. Solo el módulo que los exporta puede cambiar su valor.

Cuando intentamos incrementar el valor de `myCounter`, lanza un error: `myCounter` es de solo lectura y no puede ser modificado.

</p>
</details>

---

###### 58. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

El operador `delete` devuelve un valor booleano: `true` en una eliminación exitosa, sino devolverá `false`. Sin embargo, las variables declaradas con `var`, `const` o `let` no pueden ser borradas usando el operador `delete`.

La variable `name` se declara con `const`, por lo que su eliminación no es exitosa: se devuelve `false`. Cuando asignamos `age` igual a `21`, en realidad hemos añadido una propiedad llamada `age` al objeto global. Puedes borrar exitosamente propiedades de objetos de esta forma, también del objeto global, así que `delete age` devuelve `true`.

</p>
</details>

---

###### 59. ¿Cuál es el resultado?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Podemos desempaquetar valores de arrays o propiedades de objetos con desestructuración. Por ejemplo:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

El valor de `a` es ahora `1`, y el valor de `b` es ahora `2`. Lo que realmente se hizo en la pregunta es:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

Esto significa que el valor de `y` es igual al primer valor del array, el cual es el número `1`. Cuando mostramos por consola `y`, `1` es devuelto.

</p>
</details>

---

###### 60. ¿Cuál es el resultado?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Se pueden combinar objetos usando el operador de propagación `...`. Te permite crear copias de los pares clave/valor de un objeto, y añadirlos a otro objeto. En este caso, creamos copias del objeto `user`, y las añadimos al objeto `admin`. El objeto `admin` ahora contiene los pares clave/valor copiados, lo cual da como resultado `{ admin: true, name: "Lydia", age: 21 }`.

</p>
</details>

---

###### 61. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Con el método `defineProperty`, podemos añadir nuevas propiedades a un objeto, o modificar las existentes. Cuando añadimos una propiedad a un objeto usando el método `defineProperty`, es por defecto _no enumerable_. El método `Object.keys` devuelve todos los nombres de propiedades _enumerables_ de un objeto, en este caso solo `"name"`.

Las propiedades añadidas usando el método `defineProperty` son inmutables por defecto. Puedes sobrescribir este comportamiento usando las propiedades `writable`, `configurable` y `enumerable`. De esta forma, el método `defineProperty` te da mucho más control sobre las propiedades que estás añadiendo a un objeto.

</p>
</details>

---

###### 62. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

El segundo argumento de `JSON.stringify` es el _replacer_ (reemplazador). El reemplazador puede ser una función o un array, y te permite controlar qué y cómo deberían convertirse los valores a string.

Si el reemplazador es un _array_, solo los nombres de las propiedades incluidos en el array serán agregados al string JSON. En este caso, solo las propiedades con nombres `"level"` y `"health"` son incluidas, `"username"` es excluido. `data` es ahora igual a `"{"level":19, "health":90}"`.

Si el reemplazador es una _función_, esta función es llamada en cada propiedad en el objeto que estás convirtiendo a string. El valor retornado por esta función será el valor de la propiedad cuando es añadida al string JSON. Si el valor es `undefined`, esta propiedad es excluida del string JSON.

</p>
</details>

---

###### 63. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

El operador unario `++` _devuelve primero_ el valor del operando, _y después incrementa_ el valor del operando. El valor de `num1` es `10`, ya que la función `increaseNumber` primero devuelve el valor de `num`, que es `10`, y solo incrementa el valor de `num` después.

`num2` es `10`, ya que pasamos `num1` a `increasePassedNumber`. `number` es igual a `10` (el valor de `num1`. Una vez más, el operador unario `++` _primero devuelve_ el valor del operando, _y después incrementa_ el valor del operando. El valor de `number` es `10`, así que `num2` es igual a `10`.

</p>
</details>

---

###### 64. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

En ES6, podemos inicializar parámetros con un valor por defecto. El valor del parámetro será el valor por defecto si no se pasa otro valor a la función, o si el valor del parámetro es `"undefined"`. En este caso, propagamos las propiedades del objeto `value` en un nuevo objeto, por lo que `x` tiene el valor por defecto de `{ number: 10 }`.

¡El argumento por defecto es evaluado _cuando es llamado_! Cada vez que llamamos a la función, un _nuevo_ objeto es creado. Invocamos la función `multiply` las dos primeras veces sin pasar un valor: `x` tiene el valor por defecto de `{ number: 10 }`. Después mostramos por consola el valor multiplicado de ese número, que es `20`.

La tercera vez que invocamos `multiply`, pasamos un argumento: el objeto llamado `value`. El operador `*=` es en realidad una forma corta de escribir `x.number = x.number * 2`: modificamos el valor de `x.number` y mostramos por consola el valor multiplicado de `20`.

La cuarta vez, pasamos el objeto `value` otra vez. `x.number` fue previamente modificado a `20`, por lo que `x.number *= 2` devuelve `40`.

</p>
</details>

---

###### 65. ¿Cuál es el resultado?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` y `3` `3` y `6` `4`
- B: `1` `2` y `2` `3` y `3` `4`
- C: `1` `undefined` y `2` `undefined` y `3` `undefined` y `4` `undefined`
- D: `1` `2` y `undefined` `3` y `undefined` `4`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

El primer argumento que el método `reduce` recibe es el _acumulador_, `x` en este caso. El segundo argumento es el _valor actual_, `y`. Con el método `reduce`, podemos ejecutar una función de callback en cada elemento en el array, lo cual puede resultar en un único valor al final.

En este ejemplo, no estamos devolviendo ningún valor, simplemente estamos mostrando por consola los valores del acumulador y del valor actual.

El valor del acumulador es igual al valor previamente devuelto por la función de callback. Si no pasas el argumento opcional `initialValue` al método `reduce`, el acumulador es igual al primer elemento de la primera llamada.

En la primera llamada, el acumulador (`x`) es `1`, y el valor actual (`y`) es `2`. No devolvemos desde la función de callback, mostramos por consola el acumulador y el valor actual: se muestra `1` y `2`.

Si no devuelves un valor de una función, se devuelve `undefined`. En la siguiente llamada, el acumulador es `undefined`, y el valor actual es `3`. Se muestra por consola `undefined` y `3`.  

En la cuarta llamada, otra vez no devolvemos desde la función de callback. El acumulador es una vez más `undefined`, y el valor actual es `4`. Se muestra por consola `undefined` y `4`.

</p>
</details>
  
---

###### 66. ¿Con qué constructor podemos extender correctamente la clase `Dog`?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

En una clase derivada, no puedes acceder a `this` antes de llamar a `super`. Si intentas hacerlo, se lanzará un `ReferenceError`: 1 y 4 lanzarían este error.

Con `super`, llamamos al constructor del padre con unos argumentos. El constructor del padre recibe el argumento `name`, por lo que necesitamos pasar `name` a `super`.

La clase `Labrador` recibe dos argumentos, `name` porque extiende de `Dog`, y `size` como una propiedad adicional en la clase `Labrador`. Ambos necesitan ser pasados al constructor de `Labrador`, lo cual se realiza correctamente usando el constructor 2.

</p>
</details>

---

###### 67. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Con `import`, todos los módulos importados son _pre-convertidos_. Esto significa que los módulos importados son ejecutados _primero_, y el código en el fichero que importa el módulo se ejecuta _después_.

¡Esto es una diferencia existente entre `require()` en CommonJS e `import`! Con `require()`, puedes cargar dependencias bajo demanda mientras el código está siendo ejecutado. Si hubiéramos usado `require` en lugar de `import`, se habría mostrado por consola `running index.js`, `running sum.js`, `3`. 

</p>
</details>

---

###### 68. ¿Cuál es el resultado?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Cada Symbol es completamente único. El propósito del argumento pasado a Symbol es para darle una descripción. El valor de Symbol no depende del argumento pasado. Como se comprueba igualdad, estamos creando dos Symbol completamente nuevos: el primer `Symbol('foo')`, y el segundo `Symbol('foo')`. Estos dos valores son únicos y no iguales, `Symbol('foo') === Symbol('foo')` devuelve `false`.

</p>
</details>

---

###### 69. ¿Cuál es el resultado?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13 espacios en blanco]Lydia Hallie"`, `"[2 espacios en blanco]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1 espacio en blanco]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`, 

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Con el método `padStart`, podemos añadir relleno al principio de un string. El valor pasado a este método es la longitud _total_ del string incluyendo el relleno. El string `"Lydia Hallie"` tiene una longitud de `12`. `name.padStart(13)` inserta 1 espacio al principio del string, porque 12 + 1 es 13.

Si el argumento pasado al método `padStart` es más pequeño que la longitud del string, no se añade relleno.

</p>
</details>

---

###### 70. ¿Cuál es el resultado?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: Un string con una secuencia de puntos de código
- D: Error

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Con el operador `+` puedes concatenar strings. En este caso, estamos concatenando el string `"🥑"` con el string `"💻"`, lo que da como resultado `"🥑💻"`.

</p>
</details>

---

###### 71. ¿Cómo puedes mostrar por consola los valores comentados junto a las sentencias console.log?

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

- A: `game.next("Yes").value` y `game.next().value`
- B: `game.next.value("Yes")` y `game.next.value()`
- C: `game.next().value` y `game.next("Yes").value`
- D: `game.next.value()` y `game.next.value("Yes")`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Una función generadora "pausa" su ejecución cuando ve un `yield`. Primero, tenemos que dejar a la función ceder el string "Do you love JavaScript?", lo cual se puede hacer llamando a `game.next().value`.

Todas las líneas son ejecutadas, hasta que encuentra el primer `yield`. Hay un `yield` en la primera línea dentro de la función: ¡la ejecución se para en el primer yield! _¡Esto significa que la variable `answer` todavía no está definida!_

Cuando llamamos a `game.next("Yes").value`, el `yield` anterior se reemplaza con el valor de los parámetros pasados en la función `next()`, `"Yes"` en este caso. El valor de la variable `answer` es ahora igual a `"Yes"`. La condición del if devuelve `false`, y `JavaScript loves you back ❤️` se muestra por consola.

</p>
</details>

---

###### 72. ¿Cuál es el resultado?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

`String.raw` devuelve un string donde las secuencias de escape (`\n`, `\v`, `\t` etc.) son ignoradas. Las contrabarras pueden ser un problema ya que puedes acabar con algo como:

`` const path = `C:\Documents\Projects\table.html` ``

Que resultaría en:

`"C:DocumentsProjects able.html"`

Con `String.raw`, simplemente ignoraría las secuencias de escape e imprimiría:

`C:\Documents\Projects\table.html`

En este caso, el string es `Hello\nworld`, que es lo que se muestra por consola.

</p>
</details>

---

###### 73. ¿Cuál es el resultado?

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Una función asíncrona siempre devuelve una promesa. El `await` todavía tiene que esperar a que la promesa se resuelva: cuando llamamos a `getData()` para asignarle que es igual a `data`, se devuelve una promesa pendiente.

Si quisiéramos tener acceso al valor resuelto `"I made it"`, tendríamos que haber usado el método `.then()` en `data`:

`data.then(res => console.log(res))`

Esto habría mostrado por consola `"I made it!"`

</p>
</details>

---

###### 74. ¿Cuál es el resultado?

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

¡El método `.push()` devuelve la _longitud_ del nuevo array! Al principio, el array contenía un elemento (el string `"banana"`) y tenía una longitud de `1`. Después de añadir el string `"apple"` al array, el array contiene dos elementos, y tiene una longitud de `2`. Esto es lo que devuelve la función `addToList`.

El método `push` modifica el array original. Si quisieras devolver el _array_ de la función en lugar de la _longitud del array_ deberías haber devuelto `list` después de introducir `item` en él.

</p>
</details>

---

###### 75. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

`Object.freeze` congela e imposibilita la adición, eliminación o modificación de las propiedades de un objeto (a no ser que el valor de la propiedad sea otro objeto).

Cuando creamos la variable `shape` y la igualamos al objeto congelado `box`, `shape` también referencia al objeto congelado. Puedes comprobar si un objeto está congelado usando `Object.isFrozen`. En este caso, `Object.isFrozen(shape)` devuelve `true`, ya que la variable `shape` tiene una referencia a un objeto congelado.

Como `shape` está congelado, y como el valor de `x` no es un objeto, no podemos modificar la propiedad `x`. `x` es todavía igual a `10`, y `{ x: 10, y: 20 }` se muestra por consola.

</p>
</details>

---

###### 76. ¿Cuál es el resultado?

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

Cuando desempaquetamos la propiedad `name` del objeto de la parte derecha, asignamos su valor `"Lydia"` a una variable con el nombre `myName`.

Con `{ name: myName }`, le decimos a JavaScript que queremos crear una nueva variable llamada `myName` con el valor de la propiedad `name` de la parte derecha.

Como intentamos mostrar por consola `name`, una variable que no está definida, se lanza un `ReferenceError`.

</p>
</details>

---

###### 77. ¿Esta es una función pura?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Sí
- B: No

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Una función pura es una función que _siempre_ devuelve el mismo resultado, si se le pasan los mismos argumentos.

La función `sum` siempre devuelve el mismo resultado. Si pasamos `1` y `2`, _siempre_ devuelve `3` sin efectos secundarios. Si pasamos `5` y `10`, _siempre_ devuelve `15`, etcétera. Esta es la definición de una función pura.

</p>
</details>

---

###### 78. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

La función `add` es una función _memoizada_. Con la memoización, podemos guardar en caché los resultados de una función para acelerar su ejecución. En este caso, creamos el objeto `cache` que guarda los valores previamente retornados.

Si llamamos a la función `addFunction` otra vez con el mismo argumento, primero comprueba si ya tiene ese valor en su caché. Si es el caso, se devuelve el valor de la caché. Si no está en la caché, calculará el valor y lo almacenará justo después.

Llamamos a la función `addFunction` tres veces con el mismo valor: en la primera invocación, el valor de la función cuando `num` es igual a `10` no está en caché todavía. La condición del if `num in cache` devuelve `false`, y se ejecuta el bloque `else`: `Calculated! 20` se muestra por consola, y el valor del resultado se añade al objeto `cache`. `cache` ahora contiene `{ 10: 20 }`.

La segunda vez, el objeto `cache` contiene el valor que se devuelve para `10`. La condición del if `num in cache` devuelve `true`, y se muestra por consola `'From cache! 20'`.

La tercera vez, pasamos `5 * 2` a la función, que se evalúa como `10`. El objeto `cache` contiene el valor que se devuelve para `10`. La condición del if `num in cache` devuelve `true`, y se muestra por consola `'From cache! 20'`.

</p>
</details>

---

###### 79. ¿Cuál es el resultado?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` y `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` y `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` y `0` `1` `2` `3`
- D:  `0` `1` `2` `3` y `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Con el bucle _for-in_, podemos iterar sobre propiedades **enumerables**. En un array, las propiedades enumerables son las "claves" de los elementos del array, las cuales son sus índices. Puedes ver el array como:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Donde las claves son las propiedades enumerables. `0` `1` `2` `3` se muestran por consola.

Con un bucle _for-of_, podemos iterar sobre **iterables**. Un array es un iterable. Cuando iteramos sobre un array, la variable "item" es igual al elemento sobre el que se está iterando en ese momento, `"☕"` ` "💻"` `"🍷"` `"🍫"` se muestra por consola.

</p>
</details>

---

###### 80. ¿Cuál es el resultado?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Los elementos de un array pueden contener cualquier valor. Números, strings,objetos, otros arrays, null, valores booleanos, undefined, y otras expresiones como fechas, funciones o cálculos.

El elemento será igual al valor retornado. `1 + 2` devuelve `3`, `1 * 2` devuelve `2`, y `1 / 2` devuelve `0.5`.

</p>
</details>

---

###### 81. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Por defecto, los argumentos tienen el valor `undefined`, a no ser que un valor haya sido pasado a la función. En este caso, no pasamos ningún valor para el argumento `name`. `name` es igual a `undefined`, que es mostrado por consola.

En ES6, podemos sobrescribir este valor `undefined` por defecto con parámetros por defecto. Por ejemplo:

`function sayHi(name = "Lydia") { ... }`

En ese caso, si no pasáramos un valor o si pasáramos `undefined`, `name` siempre sería igual al string `Lydia`.

</p>
</details>

---

###### 82. ¿Cuál es el resultado?

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

- A: `"🥑"` y `"😍"`
- B: `"🥑"` y `"😎"`
- C: `"😍"` y `"😎"`
- D: `"😎"` y `"😎"`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

El valor de `this` depende de dónde lo uses. En un método, como el método `getStatus`, `this` referencia al _objeto al que el método pertenece_. El método pertenece al objeto `data`, por lo que `this` referencia al objeto `data`. Cuando mostramos por consola `this.status`, la propiedad `status` en el objeto `data` es mostrada por consola, la cual es `"🥑"`.

Con el método `call`, podemos cambiar el objeto al cual `this` referencia. En **funciones**, el `this` referencia al _objeto al que la función pertenece_, por lo que dentro de la función `setTimeout`, el `this` referencia al _objeto global_. En el objeto global, hay una variable llamada _status_ con el valor `"😎"`. Cuando se muestra `this.status` por consola, `"😎"` aparece por pantalla.

</p>
</details>

---

###### 83. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Asignamos a la variable `city` el valor de la propiedad `city` del objeto `person`. No existe ninguna propiedad en este objeto llamada `city`, por lo que la variable `city` tiene el valor `undefined`.

¡Observa que _no_ estamos referenciando al objeto `person` en sí mismo! Solo asignamos a la variable `city` el valor actual de la propiedad `city` del objeto `person`.

Después, asignamos a la variable `city` el string `"Amsterdam"`. Esto no cambia el objeto `person`: no hay ninguna referencia a ese objeto.

Cuando se muestra por consola el objeto `person`, se devuelve el objeto sin modificar.

</p>
</details>

---

###### 84. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Las variables con `const` y `let` tienen _alcance de bloque_. Un bloque es cualquier cosa entre llaves (`{ }`). En este caso, las llaves del if/else. No puedes referenciar a una variable fuera del bloque en el que es declarada, se lanza un `ReferenceError`.

</p>
</details>

---

###### 85. ¿Qué tipo de información se mostrará por consola?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: El resultado del método `fetch`.
- B: El resultado de la segunda invocación del método `fetch`.
- C: El resultado de callback en el `.then()` anterior.
- D: Sería siempre `undefined`. 

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

El valor de `res` en el segundo `.then` es igual al valor retornado por el `.then` anterior. Puedes seguir encadenando `.then` como este, pasando el valor al siguiente manejador.

</p>
</details>

---

###### 86. ¿Qué opción es una forma de igualar `hasName` a `true`, teniendo en cuenta que no se puede pasar `true` como argumento?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Con `!!name`, determinamos si el valor de `name` es convertible a verdadero o convertible a falso. Si `name` es convertible a verdadero, `!name` devuelve `false`. `!false` (el cual es prácticamente lo mismo que `!!name`) devuelve `true`.

Asignándole a `hasName` el valor de `name`, asignas a `hasName` cualquier valor que se haya pasado a la función `getName`, no el valor booleano `true`.

`new Boolean(true)` devuelve un envoltorio (wrapper), no el valor booleano en sí.

`name.length` devuelve la longitud del argumento pasado, no si es `true`.

</p>
</details>

---

###### 87. ¿Cuál es el resultado?

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Para obtener un caracter en un índice específico en un string, puedes usar corchetes. El primer caracter en el string tiene índice 0, y así sucesivamente. En este caso queremos obtener el elemento cuyo índice es 0, el caracter `"I"`, el cual se muestra por consola.

Observa que este método no está soportado en IE7 y versiones anteriores. En ese caso, usamos `.charAt()`.

</p>
</details>

---

###### 88. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: B

Puedes asignar un valor por defecto para un parámetro que sea igual a otro parámetro de la función, siempre y cuando haya sido definido _antes_ del parámetro por defecto. Pasamos el valor `10` a la función `sum`. Si la función `sum` solamente recibe 1 argumento, significa que el valor para `num2` no ha sido pasado, y el valor de `num1` es igual al valor `10` que hemos pasado en este caso. El valor por defecto de `num2` es el valor de `num1`, el cual es `10`. `num1 + num2` devuelve `20`.

Si estuvieras intentando asignar un valor por defecto a un parámetro igual a otro parámetro que es definido _después_ (a la derecha), el valor del parámetro no habría sido inicializado todavía, lo cual lanzaría un error.

</p>
</details>

---

###### 89. ¿Cuál es el resultado?

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
- D: Objeto global de `module.js`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

Con la sintaxis `import * as name`, importamos _todas las exportaciones_ del fichero `module.js` al fichero `index.js` creando un nuevo objeto llamado `data`. En el fichero `module.js` hay dos exportaciones: la exportación por defecto y una exportación con nombre. La exportación por defecto es una función que devuelve el string `"Hello World"`, y la exportación con nombre es una variable llamada `name` que tiene el valor del string `"Lydia"`.

El objeto `data` tiene una propiedad `default` para la exportación por defecto, el resto de propiedades tienen los nombres de las exportaciones con nombre y sus respectivos valores.

</p>
</details>

---

###### 90. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: C

Las clases son azúcar sintáctico para los constructores de funciones. El equivalente a la clase `Person` como constructor de función sería:

```javascript
function Person() {
  this.name = name
}
```

Llamar a un constructor de funciones con `new` crea una instancia de `Person`, `typeof` devuelve `"object"` con una instancia. `typeof member` devuelve `"object"`. 

</p>
</details>

---

###### 91. ¿Cuál es el resultado?

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

El método `.push` devuelve la _nueva longitud_ del array, ¡no el array en sí mismo! Asignando `newList` igual a `[1, 2, 3].push(4)`, estamos asignando `newList` igual a la nueva longitud del array: `4`.

Después, intentamos usar el método `.push` en `newList`. Como `newList` es el valor numérico `4`, no podemos usar el método `.push`: se lanza un `TypeError`.

</p>
</details>

---

###### 92. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

Las funciones regulares, como la función `giveLydiaPizza`, tienen la propiedad `prototype`, la cual es un objeto (objeto de prototipo) con una propiedad `constructor`. Sin embargo las funciones flecha, como la función `giveLydiaChocolate`, no tienen esta propiedad `prototype`. Se devuelve `undefined` cuando se intenta acceder a la propiedad `prototype` usando `giveLydiaChocolate.prototype`.

</p>
</details>

---

###### 93. ¿Cuál es el resultado?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` y `age` `21`
- B: `["name", "Lydia"]` y `["age", 21]` 
- C: `["name", "age"]` y `undefined`
- D: `Error`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

`Object.entries(person)` devuelve un array de arrays anidados, conteniendo claves y objetos:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]` 

Usando el bucle `for-of`, podemos iterar sobre cada elemento en el array, los subarrays en este caso. Podemos desestructurar los subarrays instantáneamente en el bucle for-of, usando `const [x, y]`. `x` es igual al primer elemento del subarray, `y` es igual al segundo elemento en el subarray.

El primer subarray es `[ "name", "Lydia" ]`, con `x` igual a `"name"` e `y` igual a `"Lydia"`, lo cual es mostrado por consola.

El segundo subarray es `[ "age", 21 ]`, con `x` igual a `"age"` e `y` igual a `21`, lo cual es mostrado por consola.

</p>
</details>

---

###### 94. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: D

`...args` es un parámetro rest. El valor del parámetro rest es un array que contiene el resto de argumentos, ¡**y solo puede ser el último parámetro**! En este ejemplo, el parámetro rest es el segundo parámetro. Esto no es correcto y lanzará un error de sintaxis.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

El ejemplo de arriba sí que funciona. Devuelve el array `[ 'banana', 'apple', 'orange', 'pear' ]`
</p>
</details>

---

###### 95. ¿Cuál es el resultado?

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

- A: `a is bigger`, `6` y `b is bigger`, `3`
- B: `a is bigger`, `undefined` y `b is bigger`, `undefined`
- C: `undefined` y `undefined`
- D: `SyntaxError`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: B

En JavaScript, no _tenemos_ que escribir el punto y coma (`;`) de forma explicita, sin embargo el motor de JavaScript todavía las añade al final de cada sentencia. Esto se denomina **Insercción automática de punto y coma**. Una sentencia puede ser, por ejemplo, variables, o palabras clave como `throw`, `return`, `break`, etc. 

Aqui, escribimos una sentencia `return`, y otra sentencia de valor `a + b` en una _nueva línea_. Sin embargo, como es una línea nueva, el motor no sabe que en realidad es el valor que queríamos devolver. En cambio, añadió automáticamente un punto y coma después de `return`. Puedes ver esto como:

```javascript
  return;
  a + b
```

Esto significa que nunca se alcanza `a + b`, ya que una función deja de ejecutarse después de la palabra clave` return`. Si no se devuelve ningún valor, como aquí, la función devuelve `undefined`. ¡Ten en cuenta que no hay inserción automática después de las sentencias `if/else`!

</p>
</details>

---

###### 96. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: B

Podemos establecer clases iguales a otros constructures de clases/funciones. En este caso, establecemos `Person` igual a `AnotherPerson`. El nombre en este constructor es `Sarah`, por lo que la propiedad nombre en la nueva instancia de `Person` de `member` es `"Sarah"`.

</p>
</details>

---

###### 97. ¿Cuál es el resultado?

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` y `["{Symbol('a')"]`
- B: `{}` y `[]`
- C: `{ a: "b" }` y `["a"]`
- D: `{Symbol('a'): 'b'}` y `[]`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: D

Un símbolo no es _enumerable_. El método Object.keys devuelve todas las propiedades _enumerables_ de un objeto. El símbolo no será visible, y un array vacío será devuelto. Cuando se imprime el objeto completo, se mostrarán todas las propiedades, incluidas las no-enumerables.

Esta es una de las muchas cualidades de un símbolo: además de representar un valor completamente único (que evita la colisión accidental de nombres en los objetos, por ejemplo, cuando se utilizan 2 bibliotecas que desean agregar propiedades al mismo objeto), también puedes "ocultar" propiedades en los objetos de esta manera (aunque no del todo. Todavía puedes acceder a los símbolos utilizando el método `Object.getOwnPropertySymbols()`).

</p>
</details>

---

###### 98. ¿Cuál es el resultado?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` y `undefined`
- B: `[1, [2, 3, 4]]` y `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` y `{ name: "Lydia", age: 21 }`
- D: `Error` y `{ name: "Lydia", age: 21 }`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: A

La función `getList` recibe un array argumento. Entre los paréntesis de la función `getList`, desestructuramos este array de inmediato. Podrías ver esto como:

 `[x, ...y] = [1, 2, 3, 4]`

Con el parámetro rest `...y`, ponemos todos los argumentos "restantes" en un array. Los argumentos restantes son `2`, `3` and `4` en este caso. El valor de `y` es un array, conteniendo todos los parámetros restantes. El valor de `x` es igual a `1` en este caso, por la tanto cuando registramos `[x, y]`, se imprime `[1, [2, 3, 4]]`.

 La función `getUser` recibe un objeto. Con las funciones flecha, no _tenemos_ que escribir llaves cuando simplemente devolvemos un valor. Sin embargo, si quieres devolver un _objeto_ desde una función llave, tienes que escribir el objeto entre paréntesis, ¡de otra manera no se devuelve ningún valor! La siguiente función habría devuelto un objeto:

```const getUser = user => ({ name: user.name, age: user.age })```

Como no se devuelve ningún valor en este caso, la función devuelve `undefined`.

</p>
</details>

---

###### 99. ¿Cuál es el resultado?

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

La variable `name` contiene el valor de una cadena, que no es una función, por lo tanto no puede invocar. 

Se genera una excepción de tipo TypeError cuando un valor no es del tipo esperado. JavaScript esperaba que `name` fuera una función ya que estamos intentando invocarla. Era una cadena sin embargo, por lo tanto se lanza una excepción del tipo TypeError: name is not a function!

Se lanzan errores del tipo SyntaxError cuando has escrito algo que no es válido JavaScript, pro ejemplo cuando has escrito `return` como `retrun`. 
Se lanzan errores del tipo ReferenceError cuando JavaScript no puede encontrar una referencia a un valor al que estás intentando acceder.

</p>
</details>

---

###### 100. ¿Cuál es el valor de la salida?

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: B

`[]` es un valor verdadero (se convierte a un valor verdadero en un contexto booleano). Con el operador `&&`, se devolverá el valor de la derecha si el valor de la izquierda es un valor verdadero. En este caso, el valor de la izquierda `[]` es un valor verdadero, por lo tanto se devuelve `"Im'`.

`""` es un valor falso (se convierte a un valor falso en un contexto booleano). Si el valor de la izquierda es falso, no se devuelve nada. `n't` no se devuelve.

</p>
</details>

---

###### 101. ¿Cuál es el valor de la salida?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

Con el operador `||`, podemos devolver el primer operando verdadero. Si todos los valores son falsos, se devuelve el último operando.

`(false || {} || null)`: el objecto vacío `{}` es un valor verdadero. Este es el primero (y único) valor verdadero, que se devuelve. `one` es igual a `{}`.

`(null || false || "")`: todos los operandos son valores falsos. Esto significa que el último operando, `""` es devuelto. `two` es igual a `""`.

`([] || 0 || "")`: el array vacío `[]` es un valor verdadero. Este es el primer valor verdadero, que se devuelve. `three` es igual a `[]`.

</p>
</details>

---

###### 102. ¿Cuál es el valor de la salida?

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

- A: `I have resolved!`, `second` y `I have resolved!`, `second`
- B: `second`, `I have resolved!` y `second`, `I have resolved!`
- C: `I have resolved!`, `second` y `second`, `I have resolved!`
- D: `second`, `I have resolved!` y `I have resolved!`, `second`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: D

Con una promesa, básicamente decimos _Quiero ejecutar esta función, pero la dejaré a un lado por ahora mientras se está ejecutando, ya que esto puede llevar un tiempo. Solo cuando se resuelve (o se rechaza) un cierto valor, y cuando la pila de llamadas está vacía, quiero usar este valor._

Podemos obtener este valor con las palabras clave `.then` y `await` en una función `async`. Aunque podemos obtener el valor de una promesa tanto con `.then` como con` wait ', funcionan de manera un poco diferente. 

En la función `firstFunction`, dejamos (de algún modo) a un lado la función myPromise mientras se estaba ejecutando, y seguimos ejecutando el otro código, que es `console.log('second')` en este caso. Luego, la función se resolvió con la cadena `I have resolved`, que luego se imprimió una vez que pila de llamadas quedó vacía. 

Con la palabra clave await en `secondFunction`, literalmente hacemos una pausa en la ejecución de una función asíncrona hasta que el valor se haya resuelto antes de pasar a la siguiente línea de código.

Esto significa que se esperó a que `myPromise` resolviera con el valor `I have resolved`, y solo una vez que eso sucedió, pasamos a la siguiente línea: `second` que se imprime. 

</p>
</details>

---

###### 103. ¿Cuál es el valor de la salida?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

El operador `+` no solo se usa para sumar valores numéricos, sino que también podemos usarlo para concatenar cadenas. Cada vez que el motor de JavaScript ve que uno o más valores no son un número, coerce el número en una cadena. 

El primero es `1`, que es un valor numérico. `1 + 2` devuelve el número 3.

Sin embargo, el segundo es la cadena `"Lydia"`. `"Lydia"` es una cadena y `2` es un número: `2` coerce a una cadena. `"Lydia"` y `"2"` son concatenados, cuyo resultado es la cadena `"Lydia2"`. 

`{ name: "Lydia" }` es un objeto. Ni un número ni un objeto son una cadena, así que se convierten a cadena ambos. Cada vez que convertimos un objeto estandar, se convierte en `"[Object object]"`. `"[Object object]"` concatenado con `"2"` resulta en `"[Object object]2"`.

</p>
</details>

---

###### 104. ¿Cuál es el valor?

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

Podemos pasar cualquier tipo de valor que queramos a `Promise.resolve`, ya sea una promesa o no promesa. El método en sí mismo devuelve una promesa con el valor resuelto (`<fulfilled>`). Si pasas una función estandar, será una promesa resuelta con un valor normal. Si pasas una promesa, será una promesa resuelta con el valor resuelto de esa promesa pasada.

En este caso, acabamos de pasar el valor numérico `5`. Devuelve una promesa resuelta con el valor `5`. 

</p>
</details>

---

###### 105. ¿Cuál es el valor?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: B

Los objetos se pasan por referencia. Cuando verificamos la igualdad estricta de los objetos (`===`), estamos comparando sus referencias. 

Establecemos el valor por defecto para `person2` igual al objeto `person`, y pasamos el objeto `person` como el valor de `person1`.

Esto significa que ambos valores tienen una referencia al mismo punto en la memoria, por lo tanto, son iguales.

El bloque de código en la instrucción `else` se ejecuta, y se imprime `They are the same!`. 

</p>
</details>

---

###### 106. ¿Cuál es el valor?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: D

En JavaScript, tenemos dos formas de acceder a las propiedades de un objeto: notación por corchetes o notación por punto. En este ejemplo, usamos la notación por punto (`colorConfig.colors`) en lugar de la notación por corchetes (`colorConfig["colors"]`). 

Con la notación por punto, JavaScript intenta encontrar la propiedad en el objeto con ese nombre exacto. En este ejemplo, JavaScript intenta encontrar una propiedad llamada `colors` en el objeto `colorConfig`. No hay propiedad llamada `colors`, por lo que devuelve `undefined`. Luego, intentamos acceder al valor del primer elemento usando `[1]`. No podemos hacer esto en un valor que sea `undefined`, por lo que lanza una expeción `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interpreta (o descompone) las sentencias. Cuando usamos la notación por corchetes, ve el primer corchete de apertura `[` y continúa hasta que encuentra el corchete de cierre `]`. Solo entonces, evaluará la declaración. Si hubiéramos utilizado `colorConfig[colors[1]]`, habría devuelto el valor de la propiedad `red` del objeto `colorConfig`. 

</p>
</details>

---

###### 107. ¿Cuál es el valor?

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: A

Bajo el capó, los emojis son caracteres unicode. Los valores unicode para el emoji del corazón son `"U+2764 U+FE0F"`. Estos son siempre los mismos para los mismos emojis, por lo que estamos comparando dos cadenas iguales entre sí, lo que devuelve verdadero. 

</p>
</details>

---

###### 108. ¿Cuál de estos métodos modifica el array original?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: D

Con el método `splice`, modificamos el array original eliminando, reemplazando o agregando elementos. En este caso, eliminamos 2 elementos desde el índice 1 (eliminamos `'🥑'` y `'😍'`) y agregamos el emoji ✨ en su lugar. 

`map`, `filter` y `slice` devuelven un nuevo array, `find` devuelve un elemento, y `reduce` devuelve un valor reducido.

</p>
</details>

---

###### <a name=20191009></a>109. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: A

Establecemos el valor de la propiedad `favoriteFood` en el objeto` info` igual a la cadena con el emoji de la pizza, `'🍕'`. Una cadena es un tipo de dato primitivo. En JavaScript, los tipos de datos primitivos actúan por referencia 

En JavaScript, los tipos de datos primitivos (todo aquello que no es un objeto) interactúan por _valor_. En este caso, establecemos el valor de la propiedad `favoriteFood` en el objeto` info` igual al valor del primer elemento en el array `food`, la cadena del emoji de la pizza en este caso (`'🍕'`). Una cadena es un tipo de datos primitivo e interactúa por valor (consulte mi [artículo](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) si estás interesado en aprender más)

Luego, cambiamos el valor de la propiedad `favoriteFood` en el objeto` info`. El array `food` no cambia, ya que el valor de `favoriteFood` era simplemente una _copia_ del valor del primer elemento del array, y no tiene una referencia al mismo punto en la memoria que el elemento en `food[0]`. Cuando imprimimos food, éste sigue siendo el array original, `['🍕', '🍫', '🥑', '🍔']`.

</p>
</details>

---

###### 110. ¿Qué hace este método?

```javascript
JSON.parse()
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

<details><summary><b>Solución</b></summary>
<p>

#### Answer: A

Con el método `JSON.parse()`, podemos convertir la cadena de texto en formato JSON a un valor en JavaScript. 

```javascript
// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. ¿Cuál es el resultado? 

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: D

Cada función tiene su propio _contexto de ejecución_ (o _ámbito_). La función `getName` primero mira dentro de su propio contexto (ámbito) para ver si contiene la variable `name` a la que estamos intentando acceder. En este caso, la función `getName` contiene su propia variable `name`: declaramos la variable `name` con la palabra clave` let`, y con el valor de `'Sarah'`. 

Las variables con la palabra clave `let` (y `const`) se mueven al comienzo (hoisting), pero a diferencia de `var`, no se <i>inicializan</i>. No son accesibles antes de la línea en la que las declaramos (inicializamos). Esto se llama la "zona muerta temporal". Cuando intentamos acceder a las variables antes de que se declaren, JavaScript genera una excepción del tipo `ReferenceError`. 

Si no hubiéramos declarado la variable `name` dentro de la función `getName`, el motor de JavaScript habría mirado hacia abajo _ámbito encadenado_. El alcance externo tiene una variable llamada `name` con el valor de `Lydia`. En ese caso, habría imprimido `Lydia`. 

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

###### 112. ¿Cuál es el resultado?

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

- A: `a` y `a`
- B: `a` y `undefined`
- C: `['a', 'b', 'c']` y `a`
- D: `a` y `['a', 'b', 'c']`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

Con la palabra clave `yield`, cedemos valores en una función generadora. Con la palabra clave `yield*`, podemos obtener valores de otra función generadora u objeto iterable (por ejemplo, un array).

En la función `generatorOne`, cedemos todo el array `['a', 'b', 'c']` usando la palabra clave `yield`. El valor de la propiedad `value` en el objeto devuelto por el método `next` en `one` (`one.next().value`) es igual a todo el array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

En la función `generatorTwo`, usamos la palabra clave `yield*`. Esto significa que el primer valor cedido de `two` es igual al primer valor cedido en el iterador. El iterador es el array `['a', 'b', 'c']`. El primer valor producido es `a`, por lo que la primera vez que llamamos a `two.next().value`, se devuelve `a`. 

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

###### 113. ¿Cuál es el resultado?

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: A

Las expresiones dentro de las plantillas de cadena de texto se evalúan primero. Esto significa que la cadena contendrá el valor devuelto de la expresión, la función invocada inmediatamente `(x => x)('I love')` en este caso. Pasamos el valor `'I love'` como argumento para la función de flecha `x => x`. `x` es igual a `'I love'`, que se devuelve tal cual. Esto da como resultado `I love to program`. 

</p>
</details>

---

###### 114. ¿Qué ocurrirá?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: The `setInterval` callback won't be invoked
- B: The `setInterval` callback gets invoked once
- C: The `setInterval` callback will still be called every second
- D: We never invoked `config.alert()`, config is `null`

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

Normalmente, cuando establecemos objetos iguales a `null`, esos objetos se recogen por el _recolector de basura_ ya que ya no hay ninguna referencia a ese objeto. Sin embargo, dado que la función de devolución de llamada dentro de `setInterval` es una función flecha (por lo tanto vinculada al objeto` config`), la función de devolución de llamada todavía tiene una referencia al objeto `config`. Mientras haya una referencia, el objeto no será recolectado. Como no es recolectado, la función de devolución de llamada `setInterval` aún se invocará cada 1000ms (1s).

</p>
</details>

---

###### 115. ¿Qué método(s) devolverá el valor `'Hello world!'`?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: B

Al agregar un par clave/valor utilizando el método `set`, la clave será el valor del primer argumento pasado a la función `set`, y el valor será el segundo argumento pasado a la función `set`. La clave es la _función_ `() => 'greeting'` en este caso, y el valor `'Hello world'`. `myMap` ahora es `{ () => 'greeting' => 'Hello world!' }`. 

1 es incorrecto, ya que la clave no es `'greeting'` sino `() => 'greeting'`.
3 es incorrecto, ya que estamos creando una nueva función pasándola como parámetro al método `get`. El objeto interactúa por _referencia_. Las funciones son objetos, por eso dos funciones nunca son estrictamente iguales, aunque sean idénticas: tienen una referencia a un punto diferente en la memoria. 

</p>
</details>

---

###### 116. ¿Cuál es el resultado?

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

<details><summary><b>Solución</b></summary>
<p>

#### Answer: C

Tanto las funciones `changeAge` como `changeAgeAndName` tienen un parámetro por defecto, a saber, un objeto _nuevo_ creado `{ ...person }`. Este objeto tiene copias de todos los pares clave/valor en el objeto `person`. 

Primero, invocamos la función `changeAge` y le pasamos el objeto `person` como argumento. Esta función aumenta el valor de la propiedad `age` en 1. `person` ahora es `{name: "Lydia", age: 22}`.

Luego, invocamos la función `changeAgeAndName`, sin embargo, no pasamos un parámetro. En cambio, el valor de `x` es igual a un _nuevo_ objeto: `{ ...person }`. Dado que es un objeto nuevo, no afecta los valores de las propiedades en el objeto `person`. `person` sigue siendo igual a `{ name: "Lydia",age: 22 }`.

</p>
</details>
