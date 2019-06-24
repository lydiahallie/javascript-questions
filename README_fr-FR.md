# Liste de questions JavaScript (Avancée)

Je poste quotidiennement des questions à choix multiple sur mon [Instagram](https://www.instagram.com/theavocoder), que je posterai aussi ici !

Des basiques au avancée: testez vos connaissances en JavaScript, rafraichissez vos connaissances, ou préparez vous pour un entretien de code ! :muscle: :rocket: Je mets à jour ce dépôt chaque semaine avec des nouvelles questions.

Les réponses se trouvent dans les sections fermées en dessous des questions, cliquez simplement dessus pour les faire apparaitre. Bonne chance :heart:

[English](./README.md)
[中文版本](./README-zh_CN.md)
[Русский](./README_ru-RU.md)
[Western Balkan](./README-bs.md)

---

###### 1. Quelle est la sortie ?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` et `undefined`
- B: `Lydia` et `ReferenceError`
- C: `ReferenceError` et `21`
- D: `undefined` et `ReferenceError`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: D

Dans la fonction, nous déclarons en premier la variable `name` grâce au mot clé `var`. Cela signifie que la variable est "levée" _(hoisted)_ (l'espace mémoire est définie à la phase de création) avec pour valeur par défaut `undefined`, jusqu'à ce que le script atteigne la ligne de définition de la variable. Nous n'avons pas encore défini la variable lorsque nous essayons d'afficher la variable `name`, donc elle a toujours la valeur `undefined`.

Les variables avec le mot clé `let` (et `const`) sont "levées" _(hoisted)_, mais contrairement à `var`, elle n'est pas <i>initialisée</i>. Elles ne sont pas accessible avant la ligne qui les declare (initialise). C'est appelé la "zone morte temporaire". Lorsque nous essayons d'accéder aux variables avant leur déclaration, JavaScript renvoit une `ReferenceError`.

</p>
</details>

---

###### 2. Quelle est la sortie ?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` et `0 1 2`
- B: `0 1 2` et `3 3 3`
- C: `3 3 3` et `0 1 2`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

À cause du système de queue dans JavaScript, la fonction de rappel _(callback)_ du `setTimeout` est appellée _après_ que la boucle soit exécutée. Comme la variable `i` dans la première boucle est déclarée avec le mot clé `var`, c'est une variable global. Pendant la boucle, nous incrémentons la valeur de `i` par `1` à chaque fois, en utilisant l'opérateur arithmétique `++`. Lorsque la fonction de rappel _(callback)_ du `setTimeout` est invoquée, `i` est égal à `3` dans le premier exemple.

Dans la seconde boucle, la variable `i` est déclarée avec le mot clé `let` : les variables déclarées avec `let` (et `const`) ont une portée de bloc (tout ce qui est entre `{ }` est considéré comme un bloc). Pendant chaque itération, `i` aura une nouvelle valeur, et chaque valeur sera définie dans la boucle.

</p>
</details>

---

###### 3. Quelle est la sortie ?

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

- A: `20` et `62.83185307179586`
- B: `20` et `NaN`
- C: `20` et `63`
- D: `NaN` et `63`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

Notez que le valeur de `diameter` est une fonction régulière, alors que `perimeter` est une fonction fléchée.

Avec les fonctions fléchée, le mot clé `this` réfère à son périmètre actuel, contrairement au fonctions régulières ! Cela signifie que lorsque nous appelons `perimeter`, elle ne réfère pas à l'objet shape, mais à son périmètre actuel (`window` par exemple).

Il n'y a pas de valeur `radius` dans cet objet, on retournera `undefined`.

</p>
</details>

---

###### 4. Quelle est la sortie ?

```javascript
+true;
!"Lydia";
```

- A: `1` et `false`
- B: `false` et `NaN`
- C: `false` et `false`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

L'opérateur arithmétique `+` essait de convertir un opérande en une valeur numérique. `true` devient `1`, et `false` devient `0`.

La chaine de caractère `'Lydia'` est une value considérée comme vraie _(truthy)_. Ce que nous sommes actuellement entrain de demander, c'est "est-ce que cette valeur vraie est fausse ?". Ce qui retournera `false`.

</p>
</details>

---

###### 5. Laquelle est vraie ?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` n'est pas valide
- B: `mouse[bird.size]` n'est pas valide
- C: `mouse[bird["size"]]` n'est pas valide
- D: Toutes sont valides

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

En JavaScript, toutes les clé d'objet sont des chaines de caractères (sauf si c'est un Symbol). Bien que nous ne puission pas les _typer_ comme des chaines de caractères, elles sont converties en chaines de caractères sous le capot.

JavaScript interprète (ou décompresse) les instructions. Lorsque nous utilisons la notation pas crochet, il voit le premier crochet `[` et continue jusqu'à ce qu'il trouve le crochet fermant `]`. Seulement après, il évalue l'instruction.

`mouse[bird.size]` : Premièrement, il évalue `bird.size`, qui est `"small"`. `mouse["small"]` retourne `true`.

Cependant, avec la notation par points, cela n'arrive pas. `mouse` n'a pas de clé appelée `bird`, ce qui signifie que `mouse.bird` est `undefined`. Puis, on demande `size` en utilisant la notation par point : `mouse.bird.size`. Comme `mouse.bird` est `undefined`, on demande `undefined.size`. Cela n'est pas valide, et nous aurons une erreur similaire à `Impossible de lire la propriété "size" de undefined`.

</p>
</details>

---

---

###### 6. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

En JavaScript, tous les object intéragisent par _référence_ en plaçant égaux les uns aux autres.

Premièrement, la variable `c` contaient une valeur d'objet. Plus tard, nous assignons `d` avec la même réference que `c` à l'objet.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Quand on modifie un objet, on les modifie donc tous.

</p>
</details>

---

###### 7. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

`new Number()` est une fonction globale. Bien qu'il ressemble à un nombre, ce n'en est pas vraiment un : il a une poignée de fonctionnalités supplémentaire and est un objet.

Quand nous utilisons l'opérateur `==`, il vérifie seulement qu'il s'agisse de la même _valeur_. Les deux ont pour valeur `3`, donc il retourne `true`.

Cependant, quand on utilise l'opérateur `===`, les 2 valeurs _et_ type doivent être les même. `new Number()` n'est pas un nombre, c'est un **objet**, il retourne `false`.

</p>
</details>

---

###### 8. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: D

La fonction `colorChange` est statique. Les méthodes statiques sont désignée pour vivre seulement dans le constructeur qui les a créer et ne peuvent pas être transférer aux enfants. Comme `freddie` est un enfant, la fonction n'est pas transférée et non disponible dans l'instance de `freddie` : une erreur `TypeError` est renvoyée.

</p>
</details>

---

###### 9. Quelle est la sortie ?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

Il affiche l'objet, car on a juste créé un objet vide dnas l'objet global ! Quand on écrit mal `greeting` en `greetign`, JaveScript l'interprète comme il le voit `global.greetign = {}` (ou `window.greetign = {}` dans le navigateur).

Pour éviter cela, on peut utiliser `"use strict"`. Cela nous assure de devoir déclarer la variable avant de lui assigné une valeur.

</p>
</details>

---

###### 10. Que ce passe-t-il lorsque nous faisons ça ?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Rien, c'est tout à fait bon !
- B: `SyntaxError`. Vous ne pouvez pas ajouter de propriétés à une fonction de cette façon.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

C'est possible en JavaScript, car les fonctions sont des objets ! (Tout ce qui n'est pas de type primitif est un objet)

Une fonction est un type special d'objet. Le code que vous écrivez vous-même n'est pas la fonction. La fonction est un objet avec des propriétées. Cette propriétée est invocable.

</p>
</details>

---

###### 11. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

Vous ne pouvez pas ajouter de propriétés à un constructeur comme pour des objets normaux. Si vous voulez ajouter une fonctionnalité pour tout les objets en une fois, vous devez utiliser le prototype. Donc dans ce cas,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

rendra fonctionnel `member.getFullName`. Pourquoi est-ce benifique ? Disons que nous ajoutons cette méthode au constructeur directement. Peut-être que toutes les instances de `Person` n'ont pas besoin de cette méthode. Cela fera perdre de l'espace mémoire, car elles auront tous cette propriété, ce qui prendra de l'espace mémoire pour chaque instance. Alors que, si nous ajoutons la méthode au prototype uniquement, nous n'utilisons qu'un seul slot mémoire, et ils y auront tous accès !

</p>
</details>

---

###### 12. Quelle est la sortie ?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` et `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` et `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` et `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` et `ReferenceError`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

Pour `sarah`, nous n'avons pas utilisé le mot clé `new`. Quand nous utilisons `new`, il fait référence à un nouvel objet vide que nous créons. Cependant so nous n'ajoutons pas `new` il réfère à **l'objet global** !

Nous disons que `this.firstName` est égal à `"Sarah"` et que `this.lastName` est égal à `Smith`. Ce que nous faisons c'est définir `global.firstName = 'Sarah'` et `global.lastName = 'Smith'`. La variable `sarah` elle-même reste à `undefined`.

</p>
</details>

---

###### 13. Quelle sont les trois phases de propagation des événements ?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: D

Durant la phase de **capture** _(capturing)_, l'événement passe par les événements parent jusqu'à l'élément ciblé. Il attient ensuite l'élément **ciblé** _(target)_, et commence à **bouillonner** _(bubbling)_.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. Tous les objects ont des prototypes.

- A: vrai
- B: faux

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

Tous les objets ont des prototypes, excepté pour les **objets standards**. Les objets standards ont accès à certaines méthodes et propriétés, comme `.toString`. C'est pour cette raison que vous pouvez utiliser les méthodes natives de JavaScript ! Toutes ces méthodes sont disponibles dans le prototype. Bien que JavaScript ne trouve pas la fonction dans l'objet, il parcours le prototype et la méthode afin de la rendre accessible.

</p>
</details>

---

###### 15. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

JavaScript est un **langage à types dynamiques** : nous n'avons pas besoin de spécifier le types des variables. Les valeurs peuvent être automatiquement convertir vers les autres types sans que vous le sachiez, c'est ce que l'on appelle _la conversion de types implicites_ _(implicit type coercion)_.

Dans cette exemple, JavaScript convertit le nombre `1` en un chaine de caractère, afin que la fonction est du sens et puisse renvoyer un valeur. Durant l'addition d'un type numérique (`1`) et d'un type chaine de caractère (`'2'`), le nombre est traité comme une chaine de caractère. Nous pouvons concaténer les chaines de caractères comme `"Hello" + "World"`, c'est donc ce qui arrive ici avec `"1" + "2"` qui retourne `"12"`.

</p>
</details>

---

###### 16. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

L'opérateur arithmétique **postfix** `++` :

1. Retourne la valeur (ici il retourne `0`)
2. Incrémente la valeur (le nombre est maintenant égal à `1`)

L'opérateur arithmétique **préfix** `++` :

1. Incrémente la valeur (le nombre est maintenant égal à `2`)
2. Retourne la valeur (ici il retourne `2`)

Cela retourne donc `0 2 2`.

</p>
</details>

---

###### 17. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

Si vous utilisez les template de chaine de caractère, la valeur du premier argument sera toujours un tableau de valeurs des chaines de caractère. Le reste des arguments seront les valeurs des expressions utilisées !

</p>
</details>

---

###### 18. Quelle est la sortie ?

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("Vous êtes un adulte !");
  } else if (data == { age: 18 }) {
    console.log("Vous êtes toujours un adulte.");
  } else {
    console.log(`Hmm.. Vous n'avez pas l'âge, je suppose.`);
  }
}

checkAge({ age: 18 });
```

- A: `Vous êtes un adulte !`
- B: `Vous êtes toujours un adulte.`
- C: `Hmm.. Vous n'avez pas l'âge, je suppose.`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

Lorsque l'on teste une égalité, les primitifs sont comparés par leur valeur, alors que les objet sont comparés par leur _référence_. JavaScript vérifie si les objets ont une référence à la même zone de la mémoire.=

Les 2 objets que nous comparons n'ont pas ça : l'objet passé en paramètre fait référence à une zone mémoire différente que l'objet que nous utilisons pour faire la comparaison.

C'est pourquoi l;es 2 conditions `{ ag: 18 } === { age: 18 }` et `{ age: 18 } == { age: 18 }` retournent `false`.

</p>
</details>

---

###### 19. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

L'opérateur de destructuration _(spread operator)_ (`...args`) retourne un tableau avec les arguments. Un tableau est un objet, donc `typeof args` retournera `"object"`.

</p>
</details>

---

###### 20. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

Avec `"use strict"`, vous pouvez êtes sûr de ne pas déclarer accidentellement des variables gloables. Nous ne déclarerons jamais la variable `age`, et temps que nous utiliserons `"use strict"`, cela créera une erreur de référence. Si nous n'utilisons pas `"use strict"`, cela fonctionnera et la variable `age` sont attribué à l'objet global.

</p>
</details>

---

###### 21. Quelle est la valeur de `sum` ?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

`eval` évalue les codes que nous passons en paramétre de type chaine de caractères. Si c'est une expression, comme dans notre cas, il évaluera l'expression. L'expression est `10 * 10 + 5`, ce qui retourne le nombre `105`.

</p>
</details>

---

###### 22. Pendant combien de temps `cool_secret` sera-t'il accessible ?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Pour toujours, les données ne seront pas perdues.
- B: Jusqu'à ce que l'utilisateur ferme l'onglet.
- C: Jusqu'à ce que l'utilisateur ferme son navigateur en entier, pas seulement son onglet.
- D: Jusqu'à ce que l'utilisateur éteindra son ordinateur.

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

La donnée stocké dans le `sessionStorage` est supprimée après la fermeture de l'onglet.

Si vous utilisez le `localStorage`, la donnée sera là pour toujours, jusqu'à ce que, par exemple, `localStorage.clear()` soit invoquée.

</p>
</details>

---

###### 23. Quelle est la sortie ?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

Avec le mot clé `var`, vous pouvez déclarer plusieurs variables avec le même nom. La variable aura pour valeur la dernière assignée.

Vous ne pouvez par faire cela avec `let` ou `const` puisqu'ils ont une portée de bloc.

</p>
</details>

---

###### 24. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</p>
</details>

---

###### 25. Quelle est la sortie ?

```javascript
const obj = { a: "un", b: "deux", a: "trois" };
console.log(obj);
```

- A: `{ a: "un", b: "deux" }`
- B: `{ b: "deux", a: "trois" }`
- C: `{ a: "trois", b: "deux" }`
- D: `SyntaxError`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</p>
</details>

---

###### 26. Le contexte global d'exécution de JavaScript créait 2 choses pour vous : l'objet global and le mot clé `this`.

- A: Vrai
- B: Faux
- C: Ça dépends

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

The base execution context is the global execution context: it's what's accessible everywhere in your code.

</p>
</details>

---

###### 27. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

The `continue` statement skips an iteration if a certain condition returns `true`.

</p>
</details>

---

###### 28. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</p>
</details>

---

###### 29. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[Object object]"`. So what we are saying here, is that `a["Object object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["Object object"] = 456`.

Then, we log `a[b]`, which is actually `a["Object object"]`. We just set that to `456`, so it returns `456`.

</p>
</details>

---

###### 30. Quelle est la sortie ?

```javascript
const foo = () => console.log("Premier");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Troisième");

bar();
foo();
baz();
```

- A: `Premier` `Second` `Troisième`
- B: `Premier` `Troisième` `Second`
- C: `Second` `Premier` `Troisième`
- D: `Second` `Troisième` `Premier`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

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

###### 31. Quel est l'élément ciblé _(event.target)_ au click sur le bouton _(button)_ ?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: La `div` extérieure
- B: La `div` intérieure
- C: `button`
- D: Un tableau de tous les éléments imbriqués.

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`

</p>
</details>

---

###### 32. Quand vous cliquez sur le paragraphe, quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</p>
</details>

---

###### 33. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: D

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</p>
</details>

---

###### 34. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it's of type `"object"`.

</p>
</details>

---

###### 35. Lesquelles de ces valeurs sont fausses ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

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

###### 36. Quelle est la sortie ?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`

</p>
</details>

---

###### 37. Quelle est la sortie ?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)

</p>
</details>

---

###### 38. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.

Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.

Outside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.

</p>
</details>

---

###### 39. Tout en JavaScript est...

- A: primitif ou objet
- B: fonction ou objet
- C: question délicate ! Seulement des objets
- D: nombre ou objet

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicity wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.

</p>
</details>

---

###### 40. Quelle est la sortie ?

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

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: C

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

###### 41. Quelle est la sortie ?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</p>
</details>

---

###### 42. Que retourne la méthode `setInterval` ?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: un identifiant unique
- B: le temps de millisecondes spécifié
- C: la fonction passée en paramètre
- D: `undefined`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

</p>
</details>

---

###### 43. Que retourne ceci ?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

A string is an iterable. The spread operator maps every character of an iterable to one element.

</p>
</details>
