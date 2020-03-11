# Popis (naprednih) JavaScript pitanja
=======================================

Svakodnevno postavljam JavaScript pitanja s višestrukim izborom na moj
[Instagram](https://www.instagram.com/theavocoder), koja  također objavljujem
ovdje!

Od osnovnog do naprednog: testirajte koliko dobro znate JavaScript, osvježite svoj
znanje malo, ili pripremiti za svoj intervju! :muscle: :rocket:
Ovaj tjedni repo ažuriram s novim pitanjima.

Odgovori su jednostavno dijelovima ispod pitanja
kliknite na njih da biste ih proširili. Sretno :heart:

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

* * * * *

###### 1. Što je izlaz?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: "Lydia" i "undefined"
- B: "Lydia" i "ReferenceError"
- C: "ReferenceError" i "21"
- D: `undefined` i` ReferenceError`

<details><summary><b>Odgovor</b></summary>
<p>

#### Odgovor: D

Unutar funkcije, najprije deklarišemo varijablu `name` s` var`
ključne riječi. To znači da se varijabla podiže (memorijski prostor je postavljen
tijekom faze izrade) sa zadanom vrijednošću `undefined`,
dok zapravo ne dođemo do linije gdje definiramo varijablu. Mi
još nismo definirali varijablu na liniji gdje pokušavamo prijaviti
varijabla `name`, tako da još uvijek sadrži vrijednost` undefined`.

Varijable s ključnom riječi `let` (i` const`) su podignute, ali za razliku od njih
`var`, ne bivaju <i> inicijalizirane </i>. Nisu dostupni prije
linije na kojo ih proglašavamo (inicijaliziramo). To se naziva "temporal dead zone".
Kada pokušamo pristupiti varijablama prije nego što budu deklarirane,
JavaScript iz bacuje `ReferenceError`.

</p>
</details>

* * * * *

###### 2. Što je izlaz?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` i` 0 1 2`
- B: "0 1 2" i "3 3 3"
- C: "3 3 3" i "0 1 2"

<details><summary><b> Odgovor</b></summary>
<p>

#### Odgovor: C

Zbog reda događaja u JavaScriptu, povratni poziv `setTimeout`
function se zove * nakon što je izvršena petlja. Od
varijabla `i` u prvoj petlji je deklarirana pomoću ključne riječi` var`,
ta je vrijednost bila globalna. Tijekom petlje povećavamo vrijednost `i`
svaki put '1', koristeći unarni operator `++`. Do vremena
Pozvana je function povratnog poziva `setTimeout`,` i` je bila jednaka `3` u
u prvom primjeru.

U drugoj petlji, varijabla `i` je deklarirana pomoću` let`
ključna riječ: varijable deklarirane s ključnom riječi `let` (i` const`) su
block-scoped (blok je sve između `{}`). Tijekom svake iteracije,
`i` će imati novu vrijednost, a svaka vrijednost će biti obuhvaćena unutar petlje.

</p>
</details>

* * * * *

###### 3. Što je izlaz?

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

- A: "20" i "62.83185307179586"
- B: "20" i "NaN"
- C: "20" i "63"
- D: "NaN" i "63"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Imajte na umu da je vrijednost "promjera" uobičajena function, dok je vrijednost promjera
vrijednost "perimetra" je function strelice.

Sa functionma strelica, ključna riječ "this" odnosi se na njegovo trenutno
okolno područje, za razliku od uobičajenih function! To znači kada
nazovemo 'perimetar', ne odnosi se na objekt oblika, već na njegov
okruženje (primjerice, prozor).

Na tom objektu nema vrijednosti `radius` koja vraća` undefined`.

</p>
</details>

* * * * *

###### 4. Što je izlaz?

```javascript
+true;
!"Lydia";
```

- A: "1" i "false"
- B: "false" i "NaN"
- C: "false" i "false"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Unary plus pokušava pretvoriti operand u broj. "true" je "1",
i "false" je "0".

Niz '' Lydia '' je istinita vrijednost. Ono što zapravo tražimo jest
"je li ta istinita vrijednost lažna?". Ovo vraća "false".

</p>
</details>

* * * * *

###### 5. Koja je istina?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size 'nije valjan
- B: `mouse [bird.size]` nije važeća
- C: `miš [bird [" veličina "]]` nije važeća
- D: Svi su valjani

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

U JavaScriptu su svi key-evi objekta stringovi (osim ako to nije simbol). Čak
iako ih možda ne * upisujemo kao * nizove, oni se uvijek pretvaraju
u String ispod "haube".

JavaScript tumači (ili odlaže) izjave. Kada koristimo zagradu
notacija, on vidi prvu otvarnu zagradu ```i nastavlja dalje do nje
pronalazi završnu zagradu `]`. Tek tada će procijeniti
izjava.

`mouse [bird.size]`: Prvo procjenjuje `bird.size`, što je` `small``.
`mouse [" small "]` vraća "true"

Međutim, s točkastom notacijom, to se ne događa. `miša 'nema a
key naziva se 'bird', što znači da je `mouse.bird`` undefined`. Zatim,
tražimo "veličinu" koristeći točkovni zapis: `mouse.bird.size '. Od
`mouse.bird` je` undefined`, zapravo pitamo `undefined.size`.
To nije valjano, a bit će u pitanju pogreška slična onoj
`Cannot read property "size" of undefined`.

</p>
</details>

* * * * *


###### 6. Što je izlaz?

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: "Zdravo"
- B: 'Hej'
- C: `undefined`
- D: "ReferenceError"
- E: `TypeError`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

U JavaScriptu, svi objekti međusobno djeluju * referencom * kada ih postavljaju
jednaki.

Prvo, varijabla `c` sadrži vrijednost objekta. Kasnije dodijelimo `d`
s istom referencom koju `c 'ima na objekt.

<img src = "https://i.imgur.com/ko5k0fs.png" width = "200">

Kada promijenite jedan objekt, mijenjate ih sve.

</p>
</details>

* * * * *

###### 7. Što je izlaz?

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: `true`` false` `true`
- B: `false`` false` `true`
- C: `true`` false` `false`
- D: `false`` true` `true`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

`new Number ()` je ugrađeni konstruktor function. Iako izgleda
kao broj, to zapravo nije broj: ima gomilu ekstra dodataka
pa je zbog toga objekt.

Kada koristimo `==` operatora, on samo provjerava ima li isti
*vrijednost*. Obje imaju vrijednost `3`, pa se vraća 'true'.

Međutim, kada koristimo `===` operator, obje vrijednosti * i * trebaju biti
isto. To nije: `new Number ()` nije broj, to je ** objekt **.
Oba vraćaju "false"

</p>
</details>

* * * * *

###### 8. Što je izlaz?

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

- A: 'narančasta'
- B: "ljubičasta"
- C: "zelena"
- D: `TypeError`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: D

function `colorChange` je statična. Namijenjene su statičkim metodama
žive samo na konstruktoru u kojem su stvoreni i ne mogu biti proslijeđeni 
bilo kojem childu. Budući da je `freddie` child, function je
nije proslijeđena, i nije dostupan na `freddie` instanci: a
Izbačen je `TypeError`.

</p>
</details>

* * * * *

###### 9. Što je izlaz?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);

```

- A: `{}`
- B: `ReferenceError: greetign nije definiran '
- C: `undefined`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Zapisuje objekt, jer smo upravo stvorili prazan objekt na
globalni objekt! Kada smo pogrešno ukucali `pozdrav` kao` greeting`, JS
interpreter je zapravo to vidio kao `global.greeting = {}` (ili
`window.greeting = {}` u pregledniku).

Kako bismo to izbjegli, možemo koristiti `` use strict ''. To osigurava to
da ste deklarirali varijablu prije nego je postavite na bilo što.

</p>
</details>

* * * * *

###### 10. Što se događa kada to učinimo?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Ništa, ovo je u redu!
- B: `SyntaxError`. Na ovaj način ne možete dodavati svojstva funkciji.
- C: `undefined`
- D: "ReferenceError"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

To je moguće u JavaScriptu, jer su funkcije objekti!
(Sve osim primitivnih tipova su objekti)

function je posebna vrsta objekta. Kod koji sami napišete
nije stvarna function. function je objekt sa svojstvima.
Ova nekretnina je nepovratna.

</p>
</details>

* * * * *

###### 11. Kakav je rezultat?

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
- C: "Lydia Hallie"
- D: `undefined`` undefined`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Ne možete dodati svojstva konstruktoru kao što možete s uobičajenim
objekti. Ako želite dodati značajku svim objektima odjednom, imate
umjesto toga koristiti prototip. Dakle, u ovom slučaju,

```{.js}
Person.prototype.getFullName = function () {
  return `$ {this.ime} $ {this.prezime}`;
};
```

bi učinio `member.getFullName ()`. Zašto je to korisno? Reći će mo
da smo tu metodu dodali samom konstruktoru. Možda ne svaki
Primjer "Person" trebao je ovu metodu. To bi trošilo puno memorije
scopa (prostora), jer bi oni još uvijek imali tu svojinu, koja uzima memoriju
scopa za svaku instancu. Umjesto toga, ako ga samo dodamo prototipu, mi
će mo je imati na jednom mjestu u memoriji, ali svi imaju pristup!

</p>
</details>

* * * * *

###### 12. Što je izlaz?

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

- A: `Person {ime:" Lydia ", prezime:" Hallie "} i` undefined`
- B: `Person {ime:" Lydia ", prezime:" Hallie "} i
    `Person {ime:" Sarah ", prezime:" Smith "}`
- C: `Person {ime:" Lydia ", prezime:" Hallie "}` i `{}`
- D: `Person {ime:" Lydia ", prezime:" Hallie "} i
    `ReferenceError`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Za `sarah` nismo koristili ključnu riječ` new`. Kada koristite "new", to
odnosi se na new prazni objekt koji stvaramo. Međutim, ako ne dodate
`new` se odnosi na ** globalni objekt **!

Rekli smo da je "this.ime" jednako "Sarah" i `this.prezime`
jednak je "Smithu". Ono što smo zapravo učinili jest definiranje
`global.ime = 'Sarah'` i` global.prezime =' Smith'`. `sarah`
sam je ostavljen 'undefined'.

</p>
</details>

* * * * *

###### 13. Koje su tri faze propagiranja događaja?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling


<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: D

Tijekom ** capturing ** događaj prolazi kroz pretka
elemente do ciljnog elementa. Zatim doseže ** target **
i ** bubbling **.

<img src = "https://i.imgur.com/N18oRgd.png" width = "200">

</p>
</details>

* * * * *

###### 14. Svi objekti imaju prototipove.

-   Istinito
- B: lažno

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Svi objekti imaju prototipove, osim ** osnovnog objekta **. Uporište
objekt ima pristup nekim metodama i svojstvima, kao što je `.toString`.
To je razlog zašto možete koristiti ugrađene JavaScript metode! Sve od
takve su metode dostupne na prototipu. Iako JavaScript ne može
pronaći ga izravno na vašem objektu, ide niz lanac prototipa i
nalazi ga tamo, što ga čini dostupnim.

</p>
</details>

* * * * *

###### 15. Što je izlaz?

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: "NaN"
- B: `TypeError`
- C: "12"
- D: `3`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

JavaScript je ** dinamički upisani jezik **: ne navodimo što
vrste su određene varijable. Vrijednosti se mogu automatski pretvoriti u
drugi tip bez vašeg znanja, koji se zove * implicitni tip
prisila *. ** Prisila ** pretvara iz jednog tipa u drugi.

U ovom primjeru JavaScript pretvara broj `1` u niz, u
kako bi function imala smisla i vratila vrijednost. Tijekom
dodavanje numeričkog tipa (`1`) i tipa niza (` '2'`), broja
se tretira kao niz. Možemo slično spojiti
"" Zdravo "+" Svijet "`, tako da se ovdje događa ``````````````````
vraća `" 12 "`.

</p>
</details>

* * * * *

###### 16. Što je izlaz?

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1`` 1` `2`
- B: `1`` 2` `2`
- C: `0`` 2` `2`
- D: `0`` 1` `2`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

** postfix ** unarni operator `++`:

1. Vraća vrijednost (ovo vraća `0`)
2. Povećava vrijednost (broj je sada `1`)

** prefiks ** unary operator `++`:

1. Povećava vrijednost (broj je sada `2`)
2. Vraća vrijednost (ovo vraća `2`)

Ovo vraća `0 2 2`.

</p>
</details>

* * * * *

###### 17. Što je izlaz?

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

- A: `` Lydia` ``````````````````````````````````````
- B: ```````````````````````````````````````````````````````````````````````````
- C: `` Lydia` ``````````````````````````````````````````````````````````

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Ako koristite literale s oznakom predložaka, vrijednost prvog argumenta je
uvijek niz vrijednosti vrijednosti niza. Preostali argumenti dobivaju
vrijednosti prošlih izraza!

</p>
</details>

* * * * *

###### 18. Što je izlaz?

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

- A: "Vi ste odrasla osoba!"
- B: "Vi ste još uvijek odrasla osoba."
- C: 'Hmm .. Nemam godina za koju pretpostavljam'

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Prilikom ispitivanja jednakosti, primitivi se uspoređuju prema njihovoj * vrijednosti *, dok
objekti se uspoređuju prema njihovoj * referenci *. JavaScript provjerava ako
objekti imaju referencu na isto mjesto u memoriji.

Dva predmeta koje uspoređujemo nemaju: objekt mi
proslijeđeno kao parametar odnosi se na drugo mjesto u memoriji od
objekt koji smo koristili kako bismo provjerili jednakost.

Zato i `{age: 18} === {age: 18}` i
`{age: 18} == {age: 18}` return `false '.

</p>
</details>

* * * * *

###### 19. Što je izlaz?

```javascript

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: `" broj "
- B: `` niz ''
- C: `` objekt ''
- D: "NaN"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Operator spread (`... args`.) Vraća niz s argumentima.
array je objekt, pa `typeof args` vraća` `objekt '`

</p>
</details>

* * * * *

###### 20. Što je izlaz?

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
- C: "ReferenceError"
- D: `TypeError`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Sa `` use strict '', možete se uvjeriti da nije slučajno
deklarisana globalna varijabla. Nikada nismo objavili varijablu "age" i
budući da koristimo `` use strict '', ona će načiniti referentnu pogrešku. Ako mi
nije koristio "" strict ", to bi išlo od vlasništva
`age` bi se dodao u globalni objekt.

</p>
</details>

* * * * *

###### 21. Što je vrijednost `suma '?

```javascript
const sum = eval("10*10+5");
```

- A: "105"
- B: `" 105 "`
- C: `TypeError`
- D: `" 10 * 10 + 5 "`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

`eval` procjenjuje kodove koji su prošli kao niz. Ako je to izraz,
kao u ovom slučaju, on ocjenjuje izraz. Izraz je
`10 * 10 + 5`. Ovo vraća broj "105".

</p>
</details>

* * * * *

###### 22. Koliko dugo je cool \ _secret dostupan?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

O: Podaci se zauvijek ne gube.
- B: Kada korisnik zatvori karticu.
- C: Kada korisnik zatvori cijeli preglednik, ne samo karticu.
- D: Kada korisnik isključi svoje računalo.

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Podaci spremljeni u `sessionStorage` se uklanjaju nakon zatvaranja * tab *.

Ako ste koristili `localStorage`, podaci bi bili tamo zauvijek, osim ako
na primjer, `localStorage.clear ()` je pozvan.

</p>
</details>

* * * * *

###### 23. Što je izlaz?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: "10"
- C: `SyntaxError`
- D: "ReferenceError"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Pomoću ključne riječi `var` možete deklarirati više varijabli s istom
Ime. Varijabla će tada sadržavati zadnju vrijednost.

To ne možete učiniti s `let` ili` const` jer su blokirani.

</p>
</details>

* * * * *

###### 24. Što je izlaz?

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- A: `false`` true` `false`` true`
- B: `false`` true` `true`` true`
- C: `true`` true` `false`` true`
- D: `true`` true` `true`` true`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Sve tipke objekta (osim simbola) su žice ispod haube, čak i ako
ne upisujete sami kao niz znakova. To je razlog zašto
`obj.hasOwnProperty ('1')` također vraća true.

To ne radi tako za skup. U našem setu ne postoji "1":
`set.has ('1')` vraća `false`. Ima numerički tip "1",
`set.has (1)` vraća `true`.

</p>
</details>

* * * * *

###### 25. Što je izlaz?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{a:" jedan ", b:" dva "}`
- B: `{b:" dva ", a:" tri "}`
- C: `{a:" tri ", b:" dva "}`
- D: `SyntaxError`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Ako imate dva ključa s istim imenom, ključ će biti zamijenjen. To
i dalje će biti na prvom mjestu, ali s posljednjom navedenom vrijednošću.

</p>
</details>

* * * * *

###### 26. Globalni kontekst izvođenja JavaScripta za vas stvara dvije stvari: globalni objekt i "ovu" ključnu riječ.

-   Istina
- B: lažno
- C: to ovisi

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Kontekst izvršenja baze je kontekst globalnog izvršavanja: to je ono što je
dostupno svugdje u vašem kodu.

</p>
</details>

* * * * *

###### 27. Što je izlaz?

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

```

- A: `1`` 2`
- B: `1`` 2` `3`
- C: `1`` 2` `4`
- D: `1`` 3` `4`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Izjava `continue` preskače iteraciju ako je određeno stanje
vraća "true".

</p>
</details>

* * * * *

###### 28. Što je izlaz?

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- A: `` Već daj Lizijinu pizzu! ``
- B: `TypeError: nije function`
- C: `SyntaxError`
- D: `undefined`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

`String 'je ugrađeni konstruktor, kojem možemo dodati svojstva. ja
samo je dodao metodu u svoj prototip. Primitivni nizovi su
automatski se pretvara u string objekt, generiran stringom
prototipna function. Dakle, svi nizovi (objekti stringova) imaju pristup tome
način!

</p>
</details>

* * * * *

###### 29. Što je izlaz?

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: '123'
- B: "456"
- C: `undefined`
- D: "ReferenceError"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Tipke objekta automatski se pretvaraju u nizove. Pokušavamo
postavite objekt kao ključ za objekt "a", s vrijednošću "123".

Međutim, kada stringificiramo objekt, on postaje `` [Objekt objekt] '`. Tako
ono što ovdje govorimo je da je `a [" Objekt objekt "] = 123`. Onda, mi
može ponovno pokušati učiniti isto. "c" je još jedan objekt koji jesmo
implicitno ograničavaju. Dakle, `a [" Objekt objekt "] = 456`.

Zatim zapisujemo `a [b]`, što je zapravo `a [" Objekt objekt "]`. Upravo smo postavili
da na `456`, tako da se vraća` 456`.

</p>
</details>

* * * * *

###### 30. Što je izlaz?

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- A: `Prvi`` Drugi` `Treći`
- B: `Prvi`` Treći` `Drugi`
- C: `Drugi`` Prvi` `Treći`
- D: `Drugi`` Treći` `Prvi`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

Imamo funkciju "setTimeout" i prvo je pozvali. Ipak, bio je prijavljen
posljednji.

To je zato što u preglednicima nemamo samo runtime engine, mi
također imaju nešto što se zove "WebAPI". "WebAPI" nam daje
`setTimeout` function za početak, i na primjer DOM.

Nakon što je * callback * preusmjeren na WebAPI, function `setTimeout`
sam (ali ne i povratni poziv!) iskače iz stog.

<img src = "https://i.imgur.com/X5wsHOg.png" width = "200">

Sada se `foo` poziva i` `Prvo`` se bilježi.

<img src = "https://i.imgur.com/Pvc0dGq.png" width = "200">

`foo` je iskačen iz stog, i` baz` se poziva. "Treći" dobiva
prijavljeni.

<img src = "https://i.imgur.com/WhA2bCP.png" width = "200">

WebAPI ne može jednostavno dodati stvari u stog kad god je spreman.
Umjesto toga, on povlači funkciju povratnog poziva u nešto što se zove
*red*.

<img src = "https://i.imgur.com/NSnDZmU.png" width = "200">

Ovo je mjesto gdje petlja događaja počinje raditi. ** ** krug događaja ** gleda
red i red za zadatke. Ako je stog prazan, uzima prvi
stvar u redu i gura je u stog.

<img src = "https://i.imgur.com/uyiScAI.png" width = "200">

`bar` se priziva,` `Second`` se bilježi, i on se pojavio
stog.

</p>
</details>

* * * * *

###### 31. Što je event.target kada kliknete na gumb?

```{.html}

<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>

```

- A: Vanjski 'div'
- B: Unutarnji 'div'
- C: `gumb '
- D: Niz svih ugniježđenih elemenata.

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Najdublji ugniježđeni element koji je uzrokovao događaj je cilj
događaj. Možete zaustaviti mjehuriće 'event.stopPropagation'

</p>
</details>

* * * * *

###### 32. Kada kliknete na paragraf, što je zapisani izlaz?

```{.html}
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- A: `p`` div`
- B: `div`` p`
- C: p
- D: "div"

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Ako kliknemo `p`, vidimo dva zapisa:` p` i `div`. Tijekom događaja
razmnožavanje, postoje 3 faze: hvatanje, ciljanje i mjehuriće. Po
zadani, rukovatelji događaja izvršavaju se u fazi mjehurića (osim ako vi
postavite `useCapture` na` true`). Ide od najdubljih ugniježđenih elemenata
van.

</p>
</details>

* * * * *

###### 33. Što je izlaz?

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: `undefined is 21`` Lydia je 21`
- B: function funkcije
- C: `Lydia je 21`` Lydia je 21`
- D: `Lydia je 21`` function`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: D

S oba, možemo proslijediti objekt kojem želimo ključnu riječ "this"
odnosi se na. Međutim, `.call` se također * izvršava odmah *!

`.bind.` vraća * copy * funkcije, ali s vezanim kontekstom! To
se ne izvršava odmah.

</p>
</details>

* * * * *

###### 34. Što je izlaz?

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: `" objekt "`
- B: `" broj "
- C: function ""
- D: `" undefined "`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

function `sayHi` vraća vraćenu vrijednost odmah
pozvana function (IIFE). Ova function vratila je `0`, što je tip
` "Broj"`.

FYI: postoji samo 7 ugrađenih tipova: `null`,` undefined`, `boolean`,
"broj", "niz", "objekt" i "simbol". `` function '' nije tip,
budući da su funkcije objekti, to je tipa `` objekta '`.

</p>
</details>

* * * * *

###### 35. Koja od ovih vrijednosti su neistinite?

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

- A: `0`,` ```,` undefined`
- B: `0`,` new Number (0) `,` '' `,` new Boolean (false) `,` undefined '
- C: `0`,` '' `,` new Boolean (false) `,` undefined`
- D: Svi su oni lažni

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Postoji samo šest krivotvorenih vrijednosti:

- `undefined`
- "null"
- "NaN"
- `0`
- `''` (prazan niz)
- "false"

Konstruktori function, kao što su 'new Number' i 'new Boolean' su istiniti.

</p>
</details>

* * * * *

###### 36. Što je izlaz?

```javascript
console.log(typeof typeof 1);

```

- A: `" broj "
- B: niz ""
- C: `` objekt ''
- D: `" undefined "`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

`typeof 1` vraća` `broj ''. `typeof" number "` return `` string "`

</p>
</details>

* * * * *

###### 37. Što je izlaz?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x prazno, 11]`
- D: `SyntaxError`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

Kada postavite vrijednost na element u nizu koji premašuje duljinu
iz niza, JavaScript stvara nešto što se naziva "prazni utori". To
zapravo imaju vrijednost `undefined`, ali vidjet ćete nešto poput:

`[1, 2, 3, 7 x prazno, 11]`

ovisno o tome gdje ga pokrećete (razlikuje se za svaki preglednik, čvor,
itd)

</p>
</details>

* * * * *

###### 38. Što je izlaz?

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

- A: `1`` undefined `` 2`
- B: `undefined`` undefined` `undefined`
- C: `1`` 1` `2`
- D: `1`` undefined` `undefined`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Blok `catch` prima argument` x`. To nije isti `x` kao
varijablu kada proslijedimo argumente. Ova varijabla `x` je blokirana.

Kasnije smo postavili ovu varijablu bloka koja je jednaka `1` i postavili vrijednost
varijable `y '. Sada, zapisujemo blok-scoped varijablu `x`, koja je
jednako "1".

Izvan 'catch' bloka, `x 'je i dalje` undefined`, a `y` je` 2`.
Kada želimo `console.log (x)` izvan `catch` bloka, to
vraća `undefined` i` y` vraća `2`.

</p>
</details>

* * * * *

###### 39. Sve u JavaScriptu je ili ...

- A: primitivni ili objektni
- B: function ili objekt
- C: trik pitanje! samo objekti
- D: broj ili objekt

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

JavaScript ima samo primitivne tipove i objekte.

Primitivni tipovi su "boolean", "null", "undefined", "bigint", "number",
'string' i 'simbol'.

Ono što razlikuje primitiv od objekta je to što primitivci to ne čine
imaju bilo kakva svojstva ili metode; međutim, to ćete primijetiti
`'foo'.toUpperCase ()` vrednuje za' 'FOO'` i ne rezultira a
`TypeError`. To je zato što kada pokušate pristupiti svojstvu ili metodi
na primitivnom poput stringa, JavaScript će implicitet omotati objekt
koristeći jednu od klasa omotača, tj. `String ', a zatim odmah
odbacite omotač nakon što se izraz procijeni. Svi primitivci
osim "null" i "undefined" pokazuju ovo ponašanje.

</p>
</details>

* * * * *

###### 40. Što je izlaz?

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
- C: "[1, 2, 0, 1, 2, 3]"
- D: `[1, 2, 6]`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: C

"[1, 2]" je naša početna vrijednost. To je vrijednost s kojom počinjemo i
vrijednost prvog `acc`. Tijekom prvog kruga, "acc" je "[1,2]",
i `cur` je` [0, 1] `. Spojimo ih, što rezultira
`[1, 2, 0, 1]`.

Tada je `[1, 2, 0, 1]` `acc` i` [2, 3] `````. Ulančavamo se
i dobiti `[1, 2, 0, 1, 2, 3]`

</p>
</details>

* * * * *

###### 41. Što je izlaz?

```javascript
!!null;
!!"";
!!1;
```

- A: `false`` true` `false`
- B: `false`` false` `true`
- C: `false`` true` `true`
- D: `true`` true` `false`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: B

`null` je lažan. `! null` vraća 'true'. `! true 'vraća" false ".

```` je neistinit. `!" `` vraća `true '. `! true 'vraća" false ".

"1" je istina. `! 1` vraća 'false'. `! false 'vraća' true '.

</p>
</details>

* * * * *

###### 42. Što se vraća metoda `setInterval`?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: jedinstveni ID
- B: određena količina milisekundi
- C: prošla function
- D: `undefined`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Vraća jedinstveni ID. Taj se ID može koristiti za brisanje tog intervala
`clearInterval ()` function.

</p>
</details>

* * * * *

###### 43. Što se to vraća?

```javascript
[..."Lydia"];
```

- A: `[" L "," y "," d "," i "," a "]`
- B: `[" Lydia "]`
- C: `[[]," Lydia "]`
- D: `[[" L "," y "," d "," i "," a "]]`

<details> <summary> <b> Odgovor </b> </summary>
</p>

#### Odgovor: A

Niz je iterabilan. Operator širenja mapira svaki znak
iterabilan na jedan element.

</p>
</details>
