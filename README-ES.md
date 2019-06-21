
# Lista de preguntas (avanzadas) de JavaScript 

 Publico diariamente preguntas de opción múltiple en JavaScript en mi [Instagram](https://www.instagram.com/theavocoder), que también publicaré aquí! 
 
 Desde lo básico a lo avanzado: comprueba si realmente conoces _Javascript_, actualiza tus conocimientos o simplemente prepárate para tu próxima entrevista 💪 
 
 Actualizaré este repo semanalmente con nuevas preguntas. Las respuestas se encuentran en las secciones contraídas debajo de las preguntas, simplemente haz clic en ellas para expandirlas. Buena suerte ❤️

---
Lista de lenguajes disponibles:
* 🇬🇧[English version](./README.md) 
* 🇨🇳[中文版本](./README-zh_CN.md)


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

`mouse [bird.size]`: Primero evalúa `bird.size`, que es` "small" `. `mouse [" small "]` devuelve `true`

Sin embargo, con la notación de puntos, esto no sucede. `mouse` no tiene una clave llamada` bird`, lo que significa que `mouse.bird` es` undefined`. Luego, pedimos el `tamaño` usando la notación de puntos:` mouse.bird.size`. Como `mouse.bird` es` undefined`, en realidad estamos preguntando `undefined.size`. Esto no es válido y generará un error similar al `No se puede leer la propiedad" tamaño "de undefined`

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

En JavaScript, TODOS los objetos interactúan por referencia, de modo que cuando se establecen iguales o pasan a una función, todos apuntan a la misma ubicación, de modo que cuando cambia un objeto, los cambia a todos.

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

Sin embargo, cuando usamos el operador `===`, tanto el valor _ como el tipo deben ser iguales. No es: `new Number ()` no es un número, es un ** objeto **. Ambos devuelven "falso".

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

La función `colorChange` es estática. Los métodos estáticos están diseñados para _vivir_ solo en el constructor en el que se crean y no se pueden transmitir a ningún elemento secundario. Como `freddie` es un niño, la función no se transmite y no está disponible en la instancia de` freddie`: por lo tanto se lanza un `TypeError`.

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

Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global. Cuando escribimos erróneamente `greeting` como` greetign`, el intérprete de JS ve esto como `global.greetign = {}` (o `window.greetign = {}` en un navegador).

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

Esto es perfectamente posible en JavaScript, porque las funciones son objetos (Recuerda: Todo aparte de los tipos primitivos son objetos en JS)

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

En JS no se pueden añadir propiedades a un constructor como se puede hacer con los objetos. Si se desea añadir una característica a todos los objetos a la vez, se debe utilizar el [prototipo](https://www.w3schools.com/js/js_object_prototypes.asp) en su lugar. Así que en este caso,

```js
Persona.prototipo.getFullName = función () {)
  devuelve `${este.nombre} ${este.apellido}`;
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

name.giveLydiaPizza();
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

Sin embargo, cuando se _stringfy_ (compleja traducción) un objeto, se convierte en `"[Object object]"`. Así que lo que estamos diciendo aquí, es que `a["Object object"] = 123`. Entonces, podemos intentar hacer lo mismo de nuevo. `c` es otro objeto que estamos implícitamente encadenando. Entonces, `a["Object object"] = 456`.

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

En JS solo hay 7 tipos incorporados (En inglés se llaman _built-in types_, y pueden identificarse con el operador `typeof`. Más información [aquí](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch01.html)): `null`,` undefined`, `boolean`,` number`, `string`,` object` y `symbol`. `"function"` no es un tipo, ya que las funciones son objetos, es de tipo `"object"`.

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

Lo que diferencia a una tipo primitivo de un objeto es que los primeros no tienen propiedades o métodos; sin embargo, se puede ver que `'foo'.toUpperCase ()` se evalúa como `' FOO'` y no da como resultado un` TypeError`. Esto se debe a que cuando se intenta acceder a una propiedad o método en un tipo primitivo, como una cadena, JavaScript envolverá implícitamente el objeto utilizando una de las clases de envoltura, por ejemplo `string`, y luego descartará la envoltura inmediatamente después de evaluar la expresión. Todas los tipos primitivos excepto `null` y `undefined` poseen este comportamiento.

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
