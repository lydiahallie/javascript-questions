# Liste de questions JavaScript (Avancée)

Je poste quotidiennement des questions à choix multiple sur mon [Instagram](https://www.instagram.com/theavocoder), que je posterai aussi ici !

Des basiques au avancée : testez votre compréhension de JavaScript, rafraîchissez vos connaissances, ou préparez-vous pour un entretien technique ! :muscle: :rocket: Je mets à jour ce dépôt chaque semaine avec des nouvelles questions. Dernière mise à jour : <a href=#20190629><b>29 juin</b></a>

Les réponses se trouvent dans les sections repliées en dessous des questions, cliquez simplement dessus pour les faire apparaître. Bonne chance :heart:

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

Les variables avec le mot clé `let` (et `const`) sont "levées" _(hoisted)_, mais contrairement à `var`, elle n'est pas <i>initialisée</i>. Elles ne sont pas accessible avant la ligne qui les déclare (initialise). C'est appelé la "zone morte temporaire". Lorsque nous essayons d'accéder aux variables avant leur déclaration, JavaScript renvoie une `ReferenceError`.

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

À cause du système de queue dans JavaScript, la fonction de rappel _(callback)_ du `setTimeout` est appelée _après_ que la boucle soit exécutée. Comme la variable `i` dans la première boucle est déclarée avec le mot-clé `var`, c'est une variable globale. Pendant la boucle, nous incrémentons la valeur de `i` de `1` à chaque fois, en utilisant l'opérateur arithmétique `++`. Lorsque la fonction de rappel _(callback)_ du `setTimeout` est invoquée, `i` est égal à `3` dans le premier exemple.

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

Notez que la valeur de `diameter` est une fonction régulière, alors que celle de `perimeter` est une fonction fléchée.

Avec les fonctions fléchée, le mot clé `this` réfère à son périmètre actuel, contrairement aux fonctions régulières ! Cela signifie que lorsque nous appelons `perimeter`, elle ne réfère pas à l'objet `shape`, mais à son périmètre actuel (`window` par exemple).

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

La chaine de caractère `'Lydia'` est une valeur considérée comme vraie _(truthy)_. Ce que nous sommes actuellement en train de demander, c'est "est-ce que cette valeur considérée comme vraie est fausse ?". Ce qui retournera `false`.

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

En JavaScript, toutes les clés d'objet sont des chaines de caractères (sauf si c'est un Symbol). Bien que nous ne puissions pas les _typer_ comme des chaines de caractères, elles sont converties en chaines de caractères sous le capot.

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

En JavaScript, tous les objets interagissent par _référence_ lorsqu'on les définit égaux les uns aux autres.

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

`new Number()` est une fonction globale. Bien qu'il ressemble à un nombre, ce n'en est pas vraiment un : il a une poignée de fonctionnalités supplémentaire et est un objet.

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

###### 10. Que se passe-t-il lorsque nous faisons ça ?

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

Vous ne pouvez pas ajouter de propriétés à un constructeur comme pour des objets normaux. Si vous voulez ajouter une fonctionnalité pour tous les objets en une fois, vous devez utiliser le prototype. Donc dans ce cas,

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

###### 14. Tous les objets ont des prototypes.

- A: vrai
- B: faux

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: B

Tous les objets ont des prototypes, excepté pour les **objets standards**. Les objets standards ont accès à certaines méthodes et propriétés, comme `.toString`. C'est pour cette raison que vous pouvez utiliser les méthodes natives de JavaScript ! Toutes ces méthodes sont disponibles dans le prototype. Bien que JavaScript ne trouve pas la fonction dans l'objet, il parcourt le prototype et la méthode afin de la rendre accessible.

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

Si vous utilisez les littéraux de gabarits, la valeur du premier argument sera toujours un tableau de valeurs des chaines de caractère. Le reste des arguments seront les valeurs des expressions utilisées !

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

Lorsque l'on teste une égalité, les primitifs sont comparés par leur valeur, alors que les objets sont comparés par leur _référence_. JavaScript vérifie si les objets ont une référence à la même zone de la mémoire.=

Les 2 objets que nous comparons n'ont pas ça : l'objet passé en paramètre fait référence à une zone mémoire différente que l'objet que nous utilisons pour faire la comparaison.

C'est pourquoi les 2 conditions `{ age: 18 } === { age: 18 }` et `{ age: 18 } == { age: 18 }` retournent `false`.

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

L'opérateur de déstructuration _(spread operator)_ (`...args`) retourne un tableau avec les arguments. Un tableau est un objet, donc `typeof args` retournera `"object"`.

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

Avec `"use strict"`, vous pouvez êtes sûr de ne pas déclarer accidentellement des variables gloables. Nous ne déclarerons jamais la variable `age`, et temps que nous utiliserons `"use strict"`, cela créera une erreur de référence. Si nous n'utilisons pas `"use strict"`, cela fonctionnera et la variable `age` sera attribué à l'objet global.

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

`eval` évalue les codes que nous passons en paramètre de type chaîne de caractères. Si c'est une expression, comme dans notre cas, il évaluera l'expression. L'expression est `10 * 10 + 5`, ce qui retourne le nombre `105`.

</p>
</details>

---

###### 22. Pendant combien de temps `cool_secret` sera-t-il accessible ?

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

Vous ne pouvez pas faire cela avec `let` ou `const` puisqu'ils ont une portée de bloc.

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

Toutes les clés d'objet (à l'exception des symboles) sont des chaînes de caractères sous le capot, même si vous ne les tapez pas vous-même en tant que chaîne. C'est pourquoi `obj.hasOwnProperty("1")` renvoie également la valeur `true`.

Ça ne marche pas comme ça pour un set. Il n'y a pas de `'1'` dans notre ensemble : `set.has('1')` renvoie `false`. Il a le type numérique `1`, `set.has(1)` renvoie `true`.

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

Si vous avez deux clés portant le même nom, la clé sera remplacée. Elle sera toujours dans sa première position, mais avec la dernière valeur spécifiée.

</p>
</details>

---

###### 26. Le contexte global d'exécution de JavaScript crée 2 choses pour vous : l'objet global and le mot-clé `this`.

- A: Vrai
- B: Faux
- C: Ça dépends

<details><summary><b>Réponse</b></summary>
<p>

#### Réponse: A

Le contexte d'exécution de base est le contexte d'exécution global : c'est ce qui est accessible partout dans votre code.

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

L'instruction `continue` ignore une itération si une condition donnée renvoie `true`.

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

`String` est un constructeur intégré, auquel nous pouvons ajouter des propriétés. Je viens d'ajouter une méthode à son prototype. Les chaînes de caractère primitives sont automatiquement converties en un objet chaîne, généré par la fonction prototype de chaîne. Ainsi, toutes les chaînes (objets de chaîne) ont accès à cette méthode !

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

Les clés d'objet sont automatiquement converties en chaînes de caractères. Nous essayons de définir un objet en tant que clé de l'objet `a`, avec la valeur `123`.

Cependant, lorsque nous transformons un objet en chaine de caractère, il devient `"[Objet objet]"`. Donc, ce que nous disons ici, c'est que un `a["Objet objet"] = 123`. Ensuite, nous pouvons essayer de refaire la même chose. `c` est un autre objet que nous sommes implicitement en train de transformer en chaine de carctère. Donc, `a["Objet objet"] = 456`.

Ensuite, nous affichons `a[b]`, qui est en fait `a["Objet objet"]`. Que nous venons de définir à `456`, nous renvoyons donc `456`.

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

Nous avons une fonction `setTimeout` et nous l'avons d'abord appelée. Pourtant, il a été affiché en dernier.

En effet, dans les navigateurs, nous n’avons pas seulement le moteur d’exécution, nous avons aussi quelque chose appelé `WebAPI`. `WebAPI` nous donne la fonction` setTimeout` pour commencer, et par exemple le DOM.

Une fois que la fonction de rappel _(callback)_ est poussée via la WebAPI, la fonction `setTimeout` elle-même (mais pas la fonction de rappel !) est extraite de la pile.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Maintenant, `foo` est invoqué et `"Premier"` est affiché.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` est extrait de la pile et `baz` est invoqué. `"Troisième"` est affiché.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI ne peut simplement pas ajouter des éléments à la pile dès qu’elle est prête. Au lieu de cela, elle pousse la fonction de rappel vers quelque chose appelé la _file d'attente_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

C'est ici qu'une boucle d'événement commence à fonctionner. La **boucle d'événement** examine la pile et la file d'attente des tâches. Si la pile est vide, il prend la première chose dans la file d'attente et la pousse sur la pile.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` est invoqué, `"Second"` est affiché et il est sorti de la pile.

</p>
</details>

---

###### 31. Quel est l'élément ciblé _(event.target)_ au clic sur le bouton _(button)_ ?

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

L'élément imbriqué le plus profond qui a provoqué l'événement est la cible de l'événement. Vous pouvez arrêter le bouillonnement _(bubbling)_ en utilisant `event.stopPropagation`.

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

Si nous cliquons sur `p`, nous verrons deux lignes : `p` et `div`. Lors de la propagation d'un événement, il y a 3 phases: capture, cible et bouillonnement _(bubbling)_. Par défaut, les gestionnaires d'événements sont exécutés dans la phase de bouillonnement (sauf si vous définissez `useCapture` sur` true`). Il va de l'élément imbriqué le plus profond vers l'extérieur.

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

Avec les deux, nous pouvons transmettre l'objet auquel nous voulons que le mot clé `this` fasse référence. Cependant, `.call` est aussi _exécuté immédiatement_ !

`.bind.` renvoie une copie de la fonction, mais avec un contexte lié ! Elle n'est pas exécutée immédiatement.

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

La fonction `sayHi` renvoie la valeur renvoyée par la fonction immédiatement appelée (IIFE). Cette fonction a renvoyé `0`, qui est du type `"nombre"`.

Pour info : il n'y a que 7 types natifs : `null`, `undefined`, `boolean`, `number`, `string`, `object` et `symbol`. `"function"` n'est pas un type, puisque les fonctions sont des objets, il est de type `"object"`.

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

Il n'y a que six valeurs de fausses :

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (chaine de caractère vide)
- `false`

Les constructeurs de fonctions, comme `new Number` et `new Boolean` sont la vraies.

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

`typeof 1` retourne `"number"`.
`typeof "number"` retourne `"string"`

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

Lorsque vous définissez une valeur sur un élément d'un tableau qui dépasse la longueur du tableau, JavaScript crée un quelque chose appelé "emplacements vides". Ceux-ci ont en fait la valeur `undefined`, mais vous verrez quelque chose comme :

`[1, 2, 3, 7 x empty, 11]`

en fonction de l'endroit où vous l'exécutez (différent pour chaque navigateur, nœud, etc.).

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

Le bloc `catch` reçoit l'argument `x`. Ce n'est pas le même `x` que la variable que nous passons en arguments. Cette variable `x` a une portée de bloc.

Plus tard, nous définissons cette variable de bloc égale à `1` et définissons la valeur de la variable `y`. Maintenant, nous affichons la variable `x` de portée de bloc, dont la valeur est égale à `1`.

En dehors du bloc `catch`, `x` est toujours `undefined` et `y` est égal à `2`. Lorsque nous voulons `console.log(x)` en dehors du bloc `catch`, il renvoie `undefined`, et `y` renvoie `2`.

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

JavaScript n'a que des types et des objets primitifs.

Les types primitifs sont `boolean`, `null`, `undefined`, `bigint`, `number`, `string` et `symbol`.

Ce qui différencie une primitive d'un objet, c'est que les primitives n'ont aucune propriété ou méthode. Cependant, vous remarquerez que  `'foo'.toUpperCase()` est évalué à `'FOO'` et n'entraîne pas de `TypeError`. En effet, lorsque vous essayez d'accéder à une propriété ou à une méthode sur une primitive telle qu'une chaîne, JavaScript encapsule implicitement l'objet à l'aide de l'une des classes d'encapsulation, à savoir `String`, puis supprime immédiatement l'encapsulation après l'évaluation de l'expression. Toutes les primitives à l'exception de `null` et` undefined` présentent ce comportement.

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

`[1, 2]` est notre valeur initiale. C'est la valeur avec laquelle nous commençons et la valeur du tout premier `acc`. Au premier tour, `acc` est `[1,2]` et `cur` est `[0, 1]`. Nous les concaténons, ce qui donne `[1, 2, 0, 1]`.

Ensuite, `acc` est `[1, 2, 0, 1]` et `cur` est `[2, 3]`. Nous les concaténons et obtenons `[1, 2, 0, 1, 2, 3]`

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

`null` est faux. `!null` retourne `true`. `!true` retourne `false`.

`""` est faux. `!""` retourne `true`. `!true` retourne `false`.

`1` est vrai. `!1` retourne `false`. `!false` retourne `true`.

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

Il retourne un identifiant unique. Cet identifiant peut être utilisé pour effacer cet interval avec la fonction `clearInterval()`.

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

Une chaîne de caractère est itérable. L'opérateur de déconstruction transforme chaque caractère d'un itérable en un élément.

</p>
</details>
