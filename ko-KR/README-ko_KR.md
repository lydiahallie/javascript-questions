# (고급) JavaScript 질문 목록

JavaScript 에 관한 객관식 문제를 [Instagram](https://www.instagram.com/theavocoder)에 매일 게시하고 있어요, 물론 여기에도 게시할 거예요!

초급부터 고급까지: JavaScript를 얼마나 잘 알고 있는지 테스트하거나, 지식을 조금 더 새롭게 하거나, 코딩 면접을 준비하세요! :muscle: :rocket: 이 기록을 매주 새로운 질문으로 업데이트해요. 마지막 업데이트: <a href=#20191009><b>10월 09일</b></a>

정답은 질문 아래 접힌 부분에 있고, 간단히 클릭하면 펼칠 수 있어요. 행운을 빌어요 :heart:

질문이 더 추가될 때마다 이메일을 받고 싶나요? <br />
<a target="_blank" href="https://www.theavocoder.com/subscribe"><b>✨✉이메일 업데이트 구독 ✉✨</b></a>

사용 가능한 언어 목록:
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

###### 1. 무엇이 출력 될까요?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` 그리고 `undefined`
- B: `Lydia` 그리고 `ReferenceError`
- C: `ReferenceError` 그리고 `21`
- D: `undefined` 그리고 `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

함수 내에서, 우선 `var` 키워드를 사용해 `name` 변수를 선언해요. 이것은 변수가 정의된 행에 실제로 도달할 때까지, `undefined`의 기본값으로 호이스팅 되(생성단계에 메모리 공간이 설정)는 것을 의미해요. `name` 변수를 출력하려는 줄에서 아직 변수를 정의하고 있지 않기 때문에, `undefined` 값을 유지하고 있어요.

`let` 키워드(그리고 `const`)를 가지는 변수들은, `var`와는 달리, 호이스팅 되지만 <i>초기화</i> 되지 않아요. 그것들을 선언(초기화)하는 줄 전에는 접근할 수 없어요. 이것은 "일시적 사각지대"라고 불려요. 선언되기 전 변수에 접근하려고 하면, JavaScript는 `ReferenceError`를 던져요.

</p>
</details>

---

###### 2. 무엇이 출력 될까요?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` 그리고 `0 1 2`
- B: `0 1 2` 그리고 `3 3 3`
- C: `3 3 3` 그리고 `0 1 2`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

JavaScript의 이벤트 큐 때문에, `setTimeout`의 콜백 함수는 루프가 실행된 _후에_ 호출돼요. 첫 번째의 루프 변수 `i`는 `var` 키워드를 사용해 선언되어 있기 때문에, 이 값은 전역 변수가 돼요. 루프 동안, 단항 연산자 `++`를 사용하여, 매번 `i`의 값을 `1`씩 증가했어요. `setTimeout`콜백 함수가 호출되기까지, 첫 번째 예에서 `i`는 `3`이에요.

두 번째 루프에서, 변수 `i`는 `let` 키워드를 사용해 선언되었어요: `let`(그리고 `const`) 키워드로 선언된 변수는 블록 범위예요(블록은 `{ }` 사이의 모든 것). 각각의 반복 동안, `i`는 새로운 값을 가지고, 각각의 값은 루프 안쪽 범위에 있어요.

</p>
</details>

---

###### 3. 무엇이 출력 될까요?

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

- A: `20` 그리고 `62.83185307179586`
- B: `20` 그리고 `NaN`
- C: `20` 그리고 `63`
- D: `NaN` 그리고 `63`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`diameter`의 값은 정규 함수지만, `perimeter`의 값은 화살표 함수라는 점을 유의하세요.

화살표 함수에서, `this` 키워드는 통상적인 함수와는 다르게 현재 주위의 범위를 참조해요! 이것은 `perimeter`를 부르면, shape 객체가 아닌 그 주위의 범위(예를 들면 window)를 참조하는 것을 의미해요.

그 객체에는 `radius`라는 값은 없기 때문에 `undefined`를 리턴해요.

</p>
</details>

---

###### 4. 무엇이 출력 될까요?

```javascript
+true;
!"Lydia";
```

- A: `1` 그리고 `false`
- B: `false` 그리고 `NaN`
- C: `false` 그리고 `false`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

단항 더하기는 피연산자를 숫자로 변환하려 시도해요. `true`는 `1`이고, `false`는 `0`이에요.

문자열 `'Lydia'`는 참 같은 값이에요. 실제로는, "이 참 같은 값이 거짓 같은 값인가?"를 물어보고 있어요. 이것은 `false`를 리턴해요.

</p>
</details>

---

###### 5. 정답은 어느 것일까요?

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size` 는 유효하지 않아요
- B: `mouse[bird.size]` 는 유효하지 않아요
- C: `mouse[bird["size"]]` 는 유효하지 않아요
- D: 이 모든 것들은 유효해요.

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

JavaScript에서, 모든 객체 키는 문자열이에요 (심볼이 아닌 한). 비록 그것을 문자열 _형_ 으로 입력하지 않아도, 항상 내부적으로 문자열로 변환돼요.

JavaScript는 문장을 해석(또는 박스 해제)해요. 대괄호 표기를 사용하면, 첫 번째 열린 대괄호 `[`를 보고 닫힌 대괄호 `]`를 찾을 때까지 진행해요. 그때에만, 그 문장을 평가할 거예요.

`mouse[bird.size]`: 먼저 `"small"`인 `bird.size`를 평가해요. `mouse["small"]` 은 `true`를 리턴해요.

그러나, 닷 표기법에서, 이것은 발생하지 않아요, `mouse`는 `bird`라고 불리는 키를 가지고 있지 않아요. 즉, `mouse.bird`는 `undefined`를 의미해요. 그 후, 닷 표기법을 사용해 `size`를 물어봐요. `mouse.bird.size`. `mouse.bird`는 `undefined`로, 실제로는 `undefined.size`를 물어보고 있어요. 이것은 유효하지 않기 때문에, `Cannot read property "size" of undefined`와 비슷한 에러를 던질 거예요.

</p>
</details>

---

###### 6. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

JavaScript에서, 모든 객체는 서로 동일하게 설정하면 _참조_ 에 따라 상호작용해요.

우선 변수 `c`는 객체에 대한 값을 유지해요. 그 후, `c`와 동일한 객체 참조를 `d`에 할당해요.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

한 개의 객체를 변경하면, 그것들 모두 변경해요.

</p>
</details>

---

###### 7. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`new Number()`는, 내장 함수 생성자예요. 숫자처럼 보이지만, 실제로는 숫자가 아니에요: 많은 추가 특성이 있고 그것은 객체예요.

`==`연산자를 사용할 때, 그건 같은 _값_ 을 가졌는지 여부만 확인해요. 그것들은 모두`3`의 값을 가지고 있으므로, `true`를 리턴해요.

그러나, `===`연산자를 사용할 때, 값 _과_ 형 둘 다 같아야 해요. 이건 아니에요: `new Number()`는 숫자가 아니에요. **객체**에요. 그래서 둘 다 `false`를 리턴해요.

</p>
</details>

---

###### 8. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`colorChange`함수는 정적이에요. 정적 메소드는 그것들이 만들어지는 생성자 상에서만 살아있도록 설계되어 있어, 어떤 자식들도 상속받을 수 없어요. `freddie`는 자식이기 때문에, 이 함수는 상속되지 않고, `freddie`인스턴스에서는 이용할 수 없어요: `TypeError`가 던져져요.

</p>
</details>

---

###### 9. 무엇이 출력 될까요?

```javascript
let greeting; // Typo!
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

역 객체에 빈 객체를 방금 만들었기 때문에, 객체는 출력돼요. `greeting`을 `greettign`으로 잘못 입력했을 경우, JS 인터프리터는 실제로 이것을 `global.greettign = {}` (또는 브라우저의 `window.greetign = {}`) 라고 간주해요.

이것을 피하기 위해서, `"use strict"`를 사용할 수 있어요. 이렇게 하면 변수를 어떤 것과 동일하게 설정하기 전에 변수를 선언했는지 확인할 수 있어요.

</p>
</details>

---

###### 10. 이렇게 하면 무슨 일이 생길까요?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: 별일 없어요, 이건 완전히 괜찮아요!
- B: `SyntaxError` 이 방법으로 함수에 속성을 추가할 수 없어요.
- C: `"Woof"`이 출력돼요.
- D: `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

함수는 객체이기 때문에, 이건 JavaScript에서는 가능해요! (윈시형 이외는 모두 객체)

함수는 특별한 종류의 객체예요. 당신이 쓴 코드는 실제 함수가 아니에요. 함수는 속성을 가진 객체예요. 이 속성은 호출이 가능해요.

</p>
</details>

---

###### 11. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

생성자에는 보통의 객체처럼 속성을 추가할 수 없어요. 한 번에 모든 객체에 기능을 추가하고 싶다면, 프로토타입을 사용해야 해요. 그래서 이 경우에,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

`member.getFullName()`은 작동해요. 이것은 왜 유익할까요? 이 메소드를 생성자 자체에 추가했다고 할게요. 아마도 모든 `Person` 인스턴스는 이 메소드가 필요하지 않을 수도 있어요. 그 경우 그들은 계속해서 속성을 갖고 있기 때문에, 각각의 인스턴스를 위한 메모리 공간을 소비하게 되어, 많은 메모리 공간을 낭비하게 될 거예요. 대신에, 프로토타입을 추가하는 것만으로, 메모리의 한 지점을 가지지만, 모든 것들은 그것에 접근할 수 있어요.

</p>
</details>

---

###### 12. 무엇이 출력 될까요?

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

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` 그리고 `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`sarah`에게 `new` 키워드를 사용하지 않았어요. `new`를 사용한 경우, 이것은 우리가 만든 새로운 빈 객체를 참조해요. 그러나, `new`를 추가하지 않으면 **전역변수**를 참조해요!

`this.firstName`은 `"Sarah"`이고, `this.lastName`은 `"Smith"`이리고 말했었어요. (그렇지만) 우리는 실제로 한 일은 `global.firstName = 'Sarah'` 그리고 `global.lastName = 'Smith'`를 정의하는 것이에요. `sarah` 자체는 `undefined`로 남아있어요. 따라서 `Person`함수의 값을 리턴하지 않아요.

</p>
</details>

---

###### 13. 이벤트 전달의 3단계는 무엇일까요?

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

**capturing** 단계 동안에, 이벤트는 조상 요소를 거쳐 목표 요소까지 내려가요. 그런 다음 **target** 요소에 도달하고, **bubbling**이 시작돼요.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</p>
</details>

---

###### 14. 모든 객체는 프로토 타입을 가져요.

- A: true
- B: false

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

**기본 객체**를 제외한, 모든 객체는 프로토타입을 가져요. 기본 객체는 사용자에 의해 만들어지거나 `new` 키워드를 사용하여 만들어져요. 기본 객체는 `.toString`과 같은 몇 개의 메소드와 속성에 접근할 수 있어요. 이것이 내장 JavaScript 메소드를 사용할 수 있는 이유죠! 이러한 모든 메소드는 프로토타입에서 이용할 수 있어요. JavaScript가 당신의 객체를 직접 찾을 수 없더라도, 당신이 접근할 수 있도록 프로토타입 체인으로 내려가서 찾을 거에요.

</p>
</details>

---

###### 15. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

JavaScript는 **동적으로 만들어진 언어**에요: 특정 변수가 어떤 형인지 지정하지 않아요. 변수는 당신이 모르는 사이에 자동으로 다른 형으로 변환될 수 있는데, 이걸 _암묵적 형 변환_ 이라고 불러요. **Coercion**은 하나의 형을 다른 형으로 변환해요.

이 예제에서, 함수가 이해하고 값을 리턴하도록, JavaScript는 숫자 `1`을 문자열로 변환해요. 수형 (`1`)와 문자열형 (`'2'`)의 추가 중에는, 숫자는 문자열로 취급해요. `"Hello" + "World"`처럼 문자열을 연결할 수 있어요, 따라서 여기 `"1" + "2"`는 `"12"`을 리턴하는 일이 발생해요.

</p>
</details>

---

###### 16. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

**접미사** 단항 연산자 `++`:

1. 값 리턴 (이것은 `0`을 리턴해요)
2. 값 증가 (number는 지금 `1`이에요)

**접두사** 단항 연산자 `++`:

1. 값 증가 (number는 지금 `2`이에요)
2. 값 리턴 (이것은 `2`을 리턴해요)

이건 `0 2 2`를 리턴해요.

</p>
</details>

---

###### 17. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

태그드 템플릿 리터럴을 사용하는 경우, 첫 번째 인수의 값은 항상 문자열 값의 배열이에요. 나머지 인수는 식을 통과한 값을 얻어요.

</p>
</details>

---

###### 18. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

동등성을 테스트할 때, 원시형은 그 _값_ 에 따라 비교되며, 객체는 그들의 _참조_ 에 따라 비교돼요. JavaScript 객체가 메모리 내의 같은 장소를 참조하고 있는지를 확인해요.

비교하고 있는 두 개의 객체는 그것이 없어요: 파라미터로 전달된 객체와 동등성을 확인하기 위해 사용한 객체는 메모리 내의 다른 장소를 참조해요.

이것이 `{ age: 18 } === { age: 18 }` 그리고 `{ age: 18 } == { age: 18 }` 두 개 다 `false`를 리턴하는 이유죠.

</p>
</details>

---

###### 19. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

rest 파라미터 (`...args`.)는 모든 남아있는 인수들을 하나의 배열로 "집합" 해요. 배열은 객체이므로, `typeof args`는 `"object"`를 리턴해요.

</p>
</details>

---

###### 20. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`"use strict"`을 사용하면, 실수로 전역 변수를 선언하지 않게 할 수 있어요. `age`라는 변수를 선언한 적이 전혀 없고, `"use strict"`을 사용하고 있으므로, 참조 에러를 던지게 될 거예요. 만약 `"use strict"`을 사용하지 않았다면, 이건 작동할 거예요, `age` 속성이 전역 객체에 추가된 것이기 때문이죠.

</p>
</details>

---

###### 21. `sum`의 값은 무엇일까요?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`eval` 문자열로서 통과된 코드를 평가해요. 이 경우와 같이 만약 그것이 표현식이라면, 표현 식을 평가해요. 표현 식은 `10 * 10 + 5`이에요. 이것은 숫자 `105`를 리턴해요.

</p>
</details>

---

###### 22. cool_secret에 몇 시간이나 접근이 가능할까요?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: 영원히, 데이터는 사라지지 않아요.
- B: 사용자가 탭을 닫을 때.
- C: 사용자가 탭뿐만 아니라, 브라우저 전체를 닫을 때.
- D: 사용자가 자신의 컴퓨터를 종료시켰을 때.

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`sessionStorage`에 저장된 데이터는 _탭_ 을 닫은 후에 삭제돼요.

만약 `localStorage`를 사용했다면, 예를 들어 `localStorage.clear()`를 호출하지 않는 한, 데이터는 영원할 거예요.

</p>
</details>

---

###### 23. 무엇이 출력 될까요?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`var` 키워드를 사용하면, 같은 이름으로 복수의 변수를 선언할 수 있어요. 변수는 최신의 값을 유지해요.

블록 스코프의 `let` 또는 `const`에서는 할 수 없어요.

</p>
</details>

---

###### 24. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

모든 객체 키는(심볼 제외) 문자열로 직접 입력하지 않아도, 내부적으로는 문자열이에요. 이것이 `obj.hasOwnProperty('1')`도 true를 리턴하는 이유죠.

set에서는 작동하지 않아요. set에는 `'1'`이 없어요: `set.has('1')`는 `false`를 리턴해요. 그것은 수형인 `1`을 가지고 있어, `set.has(1)`는 `true`를 리턴해요.

</p>
</details>

---

###### 25. 무엇이 출력 될까요?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

같은 이름의 키를 두 개 가지고 있다면, 여전히 첫 번째 위치에 있지만, 마지막에 지정된 값으로 대체될 거예요.

</p>
</details>

---

###### 26. JavaScript의 global execution context는 두개를 작성해요. : 전역객체와 "this" 키워드에요.

- A: true
- B: false
- C: 경우에 따라 달라요

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

기본적인 실행 콘텍스트는 전역 실행 문장이에요: 당신의 코드 모든 곳에서 접근할 수 있어요.

</p>
</details>

---

###### 27. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`continue` 표현 식은 특정 조건이 `true`를 리턴하면 반복 처리를 건너뛰어요.

</p>
</details>

---

###### 28. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`String`은 내장 생성자로 속성을 추가할 수 있어요. 단지 프로토타입이라는 메소드를 추가했어요. 원시형 문자열은 문자열 프로토타입 함수에 의해 생성된 문자열 객체로 자동 변환돼요. 그래서, 모든 문자열(문자열 객체)은 그 메소드에 접근할 수 있어요!

</p>
</details>

---

###### 29. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

객체 키는 자동으로 문자열로 변환돼요. 객체 `a`의 키 값으로 `123`을 세팅하려고 해요.

그러나, 객체를 문자열화 하면 `"[object Object]"`가 돼요. 그래서 여기서 말하고자 하는 건 `a["object Object"] = 123`이라는 거예요. 그 후, 같은 일을 다시 시도해요. `c`는 암묵적으로 문자열화 한 다른 객체에요. 그래서 `a["object Object"] = 456`이 돼요.

그 후, `a[b]`는 출력하면 실제로는 `a["object Object"]`에요. 단지 `456`을 설정했기 때문에, `456`을 리턴해요.

</p>
</details>

---

###### 30. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

처음에 `setTimeout`함수를 호출했어요. 그러나 그것은 마지막에 출력돼요.

브라우저에는 런타임 엔진뿐만 아니라 `WebAPI`라고 불리는 것도 있기 때문이에요. `WebAPI`는 `setTimeout`함수를 최초에 부여하는데, DOM을 예로 들 수 있어요.

_callback_ 이 WebAPI에 푸시된 후, `setTimeout`함수 자체(callback이 아니에요!)는 stack에 사라졌어요.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

지금, `foo` 는 호출되었고, `"First"`는 출력되었어요.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo`는 stack에 사라지고, `baz`가 호출되었어요. `"Third"`가 출력되었어요.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI는 준비가 될 때마다 stack에 항목을 추가할 수 없어요. 대신에, _queue_ 라고 불리는 것에 callback 함수를 푸시해요.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

여기서 event loop가 작동하기 시작해요. **event loop**는 stack과 task queue를 봐요. stack이 비어있다면, queue에 첫 번째의 것을 가져다가 stack 위로 푸시해요.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar`가 호출되었고, `"Second"`가 출력되었으며, stack에서 사라졌어요.

</p>
</details>

---

###### 31. 버튼을 클릭했을때 event.target은 무엇일까요?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: 외부의 `div`
- B: 내부의 `div`
- C: `button`
- D: 중첩된 모든 요소의 배열

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

가장 깊이 중첩된 요소가 이벤트를 발생시킬 이벤트 대상이에요. `event.stopPropagation`을 통해서 버블링을 중단할 수 있어요.

</p>
</details>

---

###### 32. p태그를 클릭하면 로그의 출력은 무엇일까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`p`를 클릭하면, 2개의 로그를 볼 수 있어요: `p` 그리고 `div`. 이벤트의 전파 중에는 3단계가 있어요: 캡처링, 타겟, 버블링. 기본적으로, 이벤트 핸들러는 버블링 단계에서 시작돼요. (`useCapture`를 `true`로 설정하지 않는 한). 가장 깊게 중첩된 요소로부터 바깥쪽으로 나가요.

</p>
</details>

---

###### 33. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

두 개 모두, `this` 키워드를 참조하고자 하는 객체로 보낼 수 있어요. 그러나, `.call`은 _즉시 실행돼요_!

`.bind.`는 함수의 _복사본_ 을 리턴하지만, 바인딩 콘텍스트죠! 이건 즉시 실행되지 않아요.

</p>
</details>

---

###### 34. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`sayHi`함수는 즉시 호출 함수(IIFE)로서 리턴된 값을 리턴해요. 이 함수는 `0`을 리턴하고, 형은 `"number"`이에요.

참고: 단 7개의 내장형이 있어요: `null`, `undefined`, `boolean`, `number`, `string`, `object` 그리고 `symbol`. `"function"`은 객체이기 때문에 형이 아니라 `"object"`형이에요.

</p>
</details>

---

###### 35. 이 값들 중 어느 것이 거짓 같은 값 일까요?

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
- D: 모든 값은 거짓

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

단 6개의 거짓 같은 값이 있어요:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (빈 문자열)
- `false`

`new Number` 그리고 `new Boolean`과 같은 생성자 함수는 참 같은 값이에요.

</p>
</details>

---

###### 36. 무엇이 출력 될까요?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`typeof 1` 은 `"number"`를 리턴해요.
`typeof "number"`은 `"string"`을 리턴해요.

</p>
</details>

---

###### 37. 무엇이 출력 될까요?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

배열의 길이를 초과한 값을 배열의 요소로 설정하고자 할 때, JavaScript는 "empty slots"라고 불리는 것을 생성해요. 이것은 실제로 `undefined`의 값을 가지고 있지만, 다음과 같은 것을 보게 될 거예요:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)
실행 위치에 따라 달라요 (브라우저, node 등마다 달라요.)

</p>
</details>

---

###### 38. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`catch`블록은 `x`의 인수를 받아요. 이것은 인수를 전달할 때 변수로서의 `x`와는 달라요. 이 `x` 변수는 블록-스코프예요.

후에, 블록-스코프 변수는 `1`로 설정하고, 변수 `y`의 값을 설정해요. 여기서, 블록-스코프의 변수 `x`를 출력하는데, 이것은 `1`이에요.

`catch` 블록 밖에서, `x`는 여전히 `undefined`이고 `y`는 `2`이에요. `catch` 블록 밖에서 `console.log(x)`를 출력하면, `undefined`를 리턴하고. 그리고 `y`는 `2`를 리턴해요.

</p>
</details>

---

###### 39. JavaScript의 모든 것은...

- A: primitive 또는 object
- B: function 또는 object
- C: 함정 문제! objects만
- D: number 또는 object

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

JavaScript는 원시형과 객체만 가지고 있어요.

원시형은 `boolean`, `null`, `undefined`, `bigint`, `number`, `string` 그리고 `symbol`이 있어요.

원시형과 객체를 구별하는 법은 원시형에는 속성이나 메소드가 없어요. 그러나 `'foo'.toUpperCase()`는 `'FOO'`로 평가되어, `TypeError`의 결과가 되지 않아요. 문자열과 같은 원시형이 속성 또는 메소드에 접근하려고 할 때, JavaScript는 래퍼 클래스 중 하나인 `String`을 사용하여 암묵적으로 감싸고, 표현 식이 평가된 후 즉시 래퍼를 폐기하기 때문이에요. `null` 그리고 `undefined`를 제외한 모든 원시형은 이러한 행동을 합니다.

</p>
</details>

---

###### 40. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`[1, 2]`은 초깃값이에요. 이것이 최초의 값으로, 제일 처음의 `acc`의 값이에요. 처음 라운드 동안에 `acc`는 `[1,2]`이며, `cur`은 `[0, 1]`이에요. 그것들을 연결하면 결과적으로 `[1, 2, 0, 1]`이 돼요.

그 후, `[1, 2, 0, 1]`은 `acc`이고, `[2, 3]`은 `cur`이 에요. 그것들을 연결하면 `[1, 2, 0, 1, 2, 3]`을 얻게 돼요.

</p>
</details>

---

###### 41. 무엇이 출력 될까요?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`null`은 거짓 같은 값이에요. `!null`은 `true`를 리턴해요. `!true`는 `false`를 리턴해요.

`""` 은 거짓 같은 값이에요. `!""`은 `true`를 리턴해요. `!true`는 `false`를 리턴해요.

`1`은 참 같은 값이에요. `!1`은 `false`를 리턴해요. `!false`는`true`를 리턴해요.

</p>
</details>

---

###### 42. `setInterval` 메소드는 브라우저에게 무엇을 리턴 할까요?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: 유니크한 id
- B: 지정된 밀리초
- C: 통과된 함수
- D: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

이것은 유니크한 id를 리턴해요. 이 id는 `clearInterval()` 함수로 간격을 없애기 위해 사용될 수 있어요.

</p>
</details>

---

###### 43. 이것은 무엇을 리턴할까요?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

문자열은 반복 가능한 객체예요. 스프레드 연산자는 반복 가능한 객체의 모든 문자를 1개의 요소로 매핑해요.

</p>
</details>

---

###### 44. 무엇이 출력 될까요?

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
- D: `0, 10` 그리고 `10, 20`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

보통의 함수는 호출 후에 중단할 수 없어요. 하지만, 제너레이터 함수는 중간에 "멈췄다가", 나중에 중단된 부분부터 계속할 수 있어요. 제너레이터 함수는 `yield` 키워드를 만날 때마다, yield 뒤에 지정된 값을 넘겨줘요. 제너레이터 함수에서는 값을 _리턴_ 하지 않고, _넘겨준다_ 는 것을 유의하세요.

우선, 제너레이터 함수에서 `i`를 `10`으로 초기화해요. `next()` 메소드를 사용해 제너레이터 함수를 호출해요. 처음에 제너레이터 함수를 호출하면, `i`은 `10`이에요. 첫 번째 `yield` 키워드를 만났어요: 그것은 `i`의 값을 넘겨줘요. 이제 제너레이터는 "멈추고", `10`을 출력해요.

그 후, `next()` 메소드를 사용해 다시 한번 함수를 호출해요. `i`는 여전히 `10`이에요. 이제, 다음 `yield` 키워드를 만나 `i * 2`를 넘겨줘요. `i`는 `10`이므로, `10 * 2`, 즉 `20`을 리턴해요. 결과는 `10, 20`이에요.

</p>
</details>

---

###### 45. 이것은 무엇을 리턴할까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

복수의 프로미스를 `Promise.race` 메소드에 넘겨주면, _최초_ 의 프로미스를 해결/거부해요. `setTimeout` 메소드에 타이머를 전달해요: 첫 번째 프로미스(`firstPromise`)에는 500ms, 두 번째 프로미스(`secondPromise`)에는 100ms. 이것은 `'two'`의 값을 가진 `secondPromise`가 최초로 해결한다는 것을 의미해요. 이제 `res`는 `'two'`의 값을 유지하고 출력돼요.

</p>
</details>

---

###### 46. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

우선, 변수 `person`의 값을 `name` 속성을 가진 객체로 선언해요.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

그 후, `members`라는 변수를 선언해요. 배열의 첫 번째 요소에 `person` 변수의 값을 대입해요. 서로를 같게 설정하면 _참조_ 에 의해 상호작용해요. 어떤 변수에서 다른 변수로 참조를 할당하면, 그 참조의 _복사본_ 을 만들어요. (그들은 _같은_ 참조를 가지고 있지 않다는 것을 유의하세요!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

그리고, 변수 `person`을 `null`로 설정해요.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

배열의 첫 번째 요소는 객체에 대한 다른 (복사된) 참조를 가지고 있기 때문에, `person` 변수의 값만 변경하고, 배열의 첫 번째 요소는 변경할 수 없어요. `members`의 첫 번째 요소는 여전히 원본 객체에 대한 참조를 유지하고 있어요. `members` 배열을 출력할 때, 첫 번째 요소는 여전히 객체의 값을 유지하고 있어 로그가 출력돼요.

</p>
</details>

---

###### 47. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`for-in` 루프를 사용하면, 객체 키를 통해서 반복할 수 있는데, 이 경우에서는 `name` 그리고 `age`에요. 내부적으로, 객체 키는 문자열이에요 (심볼이 아니라면 말이죠). 모든 루프에서, `item`의 값은 반복된 현재의 키 값으로 설정해요. 우선, `item`은 `name`으로 출력돼요. 그 후, `item`은 `age`로 출력돼요.

</p>
</details>

---

###### 48. 무엇이 출력 될까요?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

연산자 결합성은 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽으로 컴파일러가 표현 식을 평가하는 순서가 돼요. 이것은 연산자가 _같은_ 우선순위를 가진 경우에만 해당돼요. 연산자의 종류는 한 개뿐이에요: `+`. 게다가, 결합성은 왼쪽에서 오른쪽이에요.

처음으로 `3 + 4`가 평가돼요. 결과는 숫자 `7`이에요.

`7 + '5'`의 결과는 강제성 때문에 `"75"`가 돼요. JavaScript는 숫자 `7`을 문자열로 변환하고, (자세한 내용은) 질문 15를 보세요. `+` 연산자를 사용해서 두 개의 문자열을 연결할 수 있어요. `"7" + "5"`의 결과는 `"75"`이에요.

</p>
</details>

---

###### 49. `num`의 값은 무엇일까요?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

문자열의 첫 번째 숫자만 리턴돼요. _진법_ 에 근거하여 (파싱하고자 하는 숫자의 기준을 명시하기 위한 두 번째 인수: 기본적인 10진수, 6진수, 8진수, 2진수 등), `parseInt`는 문자열 내의 문자가 타당한지 여부를 확인해요. 진수에 유효한 숫자가 아닌 문자를 만나면, 파싱을 멈추고, 다음 문자를 무시해요.

`*`은 유효한 숫자가 아니에요. `"7"`만 십진수의 `7`로 파싱 돼요. 이제 `num`은 `7`의 값을 유지해요.

</p>
</details>

---

###### 50. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

배열을 매핑할 때, `num`의 값은 헌재 순환하고 있는 요소예요. 이 경우, 요소는 숫자이기 때문에, if 문의 조건 `typeof num === "number"`는 `true`를 리턴해요. map 합수는 새로운 배열을 만들고 함수에서 리턴된 값을 삽입해요.

그러나, 값을 리턴하지 않아요. 함수는 값을 리턴하지 않을 때, `undefined`를 리턴해요. 배열에서의 모든 요소에 대해 블록 함수가 호출되기 때문에, 각 요소에 대해 `undefined`를 리턴해요.

</p>
</details>

---

###### 51. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

인수들의 값이 객체가 아닌 한 _값_ 에 의해 전달돼요. 그 후 _참조_ 에 의해 전달돼요. `birthYear`는 객체가 아니라 문자열이기 때문에 값에 의해 전달돼요. 값으로 전달하면 값의 _복사본_ 이 만들어져요(질문 46을 보세요).

변수 `birthYear`는 `"1997"`값에 대한 참조를 가져요. 인수 `year` 또한 `"1997"`에 대한 참조를 가지지만, `birthYear`가 가진 참조 값과는 달라요. `year`에 `"1998"`을 대입하여 `year`의 값을 업데이트할 때, `year`의 값만 업데이트해요. `birthYear`는 여전히 `"1997"`이에요.

`person`의 값은 객체예요. 인수 `member`는 _같은_ 객체의 (복사된) 참조 값을 가져요. `member`객체의 속성이 갖는 참조를 변경하면, 두 개 모두 같은 객체를 참조 값을 가지고 있기 때문에, `person`의 값 또한 변경돼요. 이제 `person`'의 `name` 속성은값 `"Lydia"`에요.

</p>
</details>

---

###### 52. 무엇이 출력 될까요?

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `"It worked! Hello world!"`
- B: `"Oh no an error: undefined"`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error: Hello world!"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`throw`문을 사용해, 커스텀 에러를 만들 수 있어요. 이 표현 식을 사용해, 예외를 던질 수 있어요. 예외는 <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>이 될 수 있어요. 이 경우, 예외는 `'Hello world'` 문자열이에요.

`catch` 문을 사용해, `try` 블록에서 예외가 던져졌을 경우에 무엇을 할지 명시할 수 있어요. 예외가 던져졌어요: 문자열 `'Hello world'`. `e`는 이제 문자열이고, 그것을 출력해요. 결과는 `'Oh an error: Hello world'`예요.

</p>
</details>

---

###### 53. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

속성을 리턴할 때, 속성값은 생성자에 설정한 값이 아닌, _리턴된_ 값과 같아요. `"Maserati"` 문자열을 리턴하기 때문에, `myCar.make`는 `"Maserati"`에요.

</p>
</details>

---

###### 54. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`let x = y = 10;`은 다음의 단축형이에요:

```javascript
y = 10;
let x = y;
```

`y`에 `10`을 대입하면, 실제로는 전역 객체에 속성 `y`를 추가해요(브라우저에서는 `window`, Node에서는 `global`). 브라우저에서, `window.y`는 이제 `10`이에요.

그 후, 변수 `x`를 `10`인 `y`를 값으로 선언해요. `let`키워드로 선언된 변수는 _블록 스코프_ 로, 선언된 블록 내에서만 정의돼요: 이 경우 즉시 호출 함수예요(IIFE). `typeof`연산자를 사용할 때, 피연산자 `x`는 정의되지 않았어요: 선언된 블록 밖에서 접근하려 했어요. 이것은 `x`가 선언되지 않음을 의미해요. 값을 할당하거나 선언하지 않은 변수는 `"undefined"` 형이에요. `console.log(typeof x)`는 `"undefined"`를 리턴해요.

그러나, `y`를 `10`으로 설정할 때 전역 변수 `y`를 만들었어요. 이 값은 코드 내 어디에서나 접근할 수 있어요. `y`는 정의되었고, `"number"`형의 값을 유지해요. `console.log(typeof y)`는 `"number"`을 리턴해요.

</p>
</details>

---

###### 55. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

프로토타입에서도 `delete`키워드를 사용해, 객체로부터 속성을 삭제할 수 있어요. 프로토타입에서 속성을 삭제하면, 프로토타입 체인에서 더는 사용할 수 없게 돼요. 이 경우, `bark` 함수는 `delete Dog.prototype.bark` 후에 프로토타입에서 더는 사용할 수 없게 되지만, 그래도 여전히 그것에 접근하려고 해요.

함수가 아닌 것을 호출하려고 할 때, `TypeError`가 던져져요. 이 경우 `pet.bark`는 `undefined`이기 때문에, `TypeError: pet.bark is not a function`예요.

</p>
</details>

---

###### 56. 무엇이 출력 될까요?

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`Set`은 _unique_ 값의 집합 객체예요: 값은 set 내에서 단 한 번만 발생해요.

중복 값 `1`을 가진 반복 가능한 `[1, 1, 2, 3, 4]`을 전달하기 때문에, 그들 중 하나는 삭제돼요. 이것은 결과적으로 `{1, 2, 3, 4}`돼요.

</p>
</details>

---

###### 57. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

import 된 모듈은 _read-only_ 예요 : import 된 모듈은 수정할 수 없어요. export 한 모듈만 값을 변경할 수 있어요.

`myCounter`의 값을 증가시키려고 할 때, 에러를 던져요: `myCounter`는 read-only이고 수정할 수 없어요.

</p>
</details>

---

###### 58. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`delete`연산자는 불린 값을 리턴해요: 성공적으로 삭제를 한 경우 `true`를, 그렇지 않다면 `false`를 리턴해요. 그러나, `var`, `const` 또는 `let` 키워드로 선언된 변수들은 `delete`연산자를 사용해서 삭제될 수 없어요.

`name` 변수는 `const`키워드로 선언되었기 때문에, 삭제에 실패해요. `age`를 `21`로 설정할 때, 실제로는 `age`라는 속성을 전역 객체에 추가한 거죠. 이 방법으로 객체, 전역 객체의 속성들을 성공적으로 삭제할 수 있어요. `delete age`는 `true`를 리턴해요.

</p>
</details>

---

###### 59. 무엇이 출력 될까요?

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

구조 분해 할당을 통해 객체의 배열 또는 속성들로부터 변수를 해체할 수 있어요. 예를 들어:

```javascript
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

`a`는 이제 `1`이고, `b`는 이제 `2`예요. 질문에서 실제로 한 건 다음과 같아요:

```javascript
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

이것은 `y`의 값은 숫자 `1`인 배열의 첫 번째 값과 같다는 것을 의미하죠. `y`를 출력하면 `1`이 리턴돼요.

</p>
</details>

---

###### 60. 무엇이 출력 될까요?

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

스프레드 연산자 `...` 를 사용해 객체를 결합할 수 있어요. 이것은 하나의 객체의 키/값의 쌍들을 복사본들로 만들어, 다른 객체에 추가해요. 이 경우, `user` 객체의 복사본들을 만들어, `admin` 객체에 추가해요. `admin` 객체는 이제 복사된 키/값의 쌍들이 들어있고, 결과는 `{ admin: true, name: "Lydia", age: 21 }` 예요.

</p>
</details>

---

###### 61. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`defineProperty`메소드로, 객체에 새로운 속성들을 추가하거나, 기존 것을 수정할 수 있어요. `defineProperty` 메소드를 사용해 객체의 속성을 추가할 때, 기본적으로 객체의 속성들은 _비 열거자_ 예요. `Object.keys`메소드는 모든 _열거자_ 객체의 속성 이름들을 리턴하는데, 이 경우는 `"name"` 뿐이에요.

`defineProperty`를 사용해 추가된 속성들은 기본적으로 변경할 수 없어요. `writable`, `configurable` 그리고 `enumerable` 속성들을 사용해 덮어쓰기 할 수 있어요. `defineProperty`메소드의 방법은 객체에 추가할 속성들을 훨씬 더 정교하게 제어하도록 해줘요.

</p>
</details>

---

###### 62. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`JSON.stringify` 두 번째 인수는 _replacer_ 예요. replacer는 함수 또는 배열 둘 중 하나가 될 수 있고, stringify 할 대상과 방법을 제어할 수 있게 해줘요.

replacer가 _배열_ 이라면, 배열에 이름이 포함된 속성만 JSON 문자열에 추가될 거에요. 이 경우, 이름을 가진 `"level"` 그리고 `"health"`속성들만 포함되고, `"username"`은 제외 돼요. `data` 은 이제 `"{"level":19, "health":90}"`에요.

replacer가 _함수_ 라면, stringifying 할 객체의 모든 속성에 호출돼요. 이 함수로부터 리턴된 값은 JSON 문자열에 추가될 때 속성의 값이 될 거예요. 만약 값이 `undefined`라면, 이 속성은 JSON 문자열로부터 제외돼요.

</p>
</details>

---

###### 63. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

단항 연산자 `++`는 _우선_ 피연산자의 값을 _리턴하고_, _그 후_ 피연산자의 값을 _증가해요_. `increaseNumber` 함수가 처음으로 리턴 한 `num`의 값은 `10` 이기 때문에, `num1`의 값은 `10`이고, 그 후엔 `num`의 값만 증가해요.

`num1`을 `increasePassedNumber`로 전달했기 때문에, `num2`는 `10`이에요. `number`는 `10`이에요(`num1`의 값은, 다시 한번, 단항 연산자가 `++`는 _우선_ 피연산자의 값을 _리턴하고_, _그 후_ 피연산자의 값을 _증가해요_. `number`의 값은 `10`이에요 즉, `num2`는 `10`이죠.

</p>
</details>

---

###### 64. 무엇이 출력 될까요?

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

ES6에서는, 기본값으로 파라미터를 초기화할 수 있어요. 함수에 값이 없이 전달되거나, 파라미터의 값이 `"undefined"`라면, 파라미터의 값은 기본값이 될 거예요. 이 경우, `value` 객체의 속성들을 새로운 객체 안으로 전개해요. 따라서 `x`는 `{ number: 10 }`을 기본값으로 가져요.

기본 인수는 _호출 시점_ 에 평가돼요! 함수를 부를 때마다, _새로운_ 객체를 만들어요. 처음에 두 번은 값 전달 없이 `multiply` 함수를 호출해요: `x`는 `{ number: 10 }`의 기본값을 가져요. 그다음 그 숫자를 곱셈한 값인 `20`을 출력해요.

세 번째로 곱셈을 호출할 때, 인수를 전달해요: 그 객체는 `value`를 불러요. `*=` 연산자는 실제로는 `x.number = x.number * 2`의 줄임말이에요: `x.number`의 값을 변경하고, 곱셈한 값 `20`을 출력해요

네 번째에는, `value` 객체를 다시 한번 전달해요. `x.number`는 이전에 `20`으로 바뀌었기 때문에, `x.number *= 2`는 `40`을 출력해요.

</p>
</details>

---

###### 65. 무엇이 출력 될까요?

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` 그리고 `3` `3` 그리고 `6` `4`
- B: `1` `2` 그리고 `2` `3` 그리고 `3` `4`
- C: `1` `undefined` 그리고 `2` `undefined` 그리고 `3` `undefined` 그리고 `4` `undefined`
- D: `1` `2` 그리고 `undefined` `3` 그리고 `undefined` `4`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`reduce` 메소드가 받은 첫 번째 인수는 _누산기_ 예요, 이 경우엔 `x`죠. 두 번째 인수 `y`는 _현재 값_ 예요. reduce 메소드에서, 배열에 있는 모든 요소에 콜백 함수를 실행하므로 궁극적으로는 하나의 값을 얻을 수 있어요.

이 예제에서는, 값을 리턴하지 않고, 단지 누적된 값과 현재 값을 출력해요.

누산기의 값은 콜백 함수가 이전에 리턴한 값이에요. 만약 추가적인 `초기값` 인수를 `reduce` 메소드에 전달하지 않았다면, 누산기는 첫번째 부른 첫 번째 요소와 동일해요.

첫 번째 부를 땐, 누산기 (`x`)는 `1` 이에요, 그리고 현재 값인 (`y`)는 `2`예요. 콜백 함수로부터 리턴되지 않았어요, 누산기와 현재 값을 출력해요: `1` 그리고 `2`가 출력돼요.

함수에서 값을 리턴하지 않았다면, `undefined`를 리턴해요. 다음번에 부를 때, 누산기는 `undefined`고, 그리고 현재 값은 `3`이에요. `undefined` 그리고 `3`이 출력돼요.

네 번째 부를 땐, 또 콜백 함수에서 리턴받지 않았어요. 누산기는 다시 `undefined`고, 현재 값은 `4`예요. `undefined` 그리고 `4`가 출력돼요.

</p>
</details>
  
---

###### 66. `Dog` 클래스를 성공적으로 확장할 수 있는 생성자는 어느 것일까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

이 파생 클래스에서, `super`를 부르기 전에는 `this` 키워드에 접근할 수 없어요. 그렇게 하려고 한다면, 참조에러를 던질 거에요: 1과 4는 참조 에러를 던져요

`super` 키워드를 가지고, 부모 클래스 생성자에 주어진 인수들을 부를 수 있어요. 부모 생성자는 `name` 인수를 받아요, 그래서 `name`을 `super`로 전달해야 해요. 

`Labrador` 클래스는 인수를 2개 받는데, `Dog`로 부터 확장된 `name`과 `Labrador` 클래스의 추가 속성인 `size`예요. 그 두 개는 `Labrador` 생성자 함수에 전달되어야 하는데, 올바르게 사용된 건 2번째 생성자예요.

</p>
</details>

---

###### 67. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`import` 키워드를 사용하면, 모든 import된 modules은 _우선-파싱_ 되어요. import된 모듈은 _처음에_ 실행되는 것을 의미하고, import한 파일 안에 있는 코드는 _나중에_ 실행돼요.

이것은 CommonJSd의 `require()`와 `import`의 차이예요! `require()`을 사용하면, 런타임 중 코드에서 필요한 시점에 의존성 모듈을 로드 할 수 있어요. 만약 `import` 대신에 `require`을 사용하면, `running index.js`, `running sum.js`, `3`으로 콘솔에 출력될 거에요.

</p>
</details>

---

###### 68. 무엇이 출력 될까요?

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

모든 심볼은 완전히 유니크해요. 심볼에 전달된 인수의 목적은, 심볼에 설명을 제공하는 거에요. 심볼의 값은 전달된 인수에 따라 달라지지 않아요. 동등성을 테스트할 때, 새로운 심볼 객체를 만들어요: 첫번째 `Symbol('foo')`와 두번째 `Symbol('foo')`. 이 두개의 값들은 유니크하며, 서로 같지 않아요, `Symbol('foo') === Symbol('foo')`는 `false`를 리턴해요.

</p>
</details>

---

###### 69. 무엇이 출력 될까요?

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`, 

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`padStart` 메소드를 사용하면, 문자열의 시작 부분에 패딩을 추가해 줄 수 있어요. 이 메소드에 전달된 값은 패딩을 포함한 문자열의 _전체_ 길이예요. 문자열 `"Lydia Hallie"`의 길이는 `12`예요. `name.padStart(13)`은 문자열의 시작점에 1 스페이스를 삽입해요, 따라서 12 + 1 은 13이죠.

`padStart` 메소드에 전달된 인수가 배열의 길이보다 작다면, 패딩은 추가되지 않을 거예요.

</p>
</details>

---

###### 70. 무엇이 출력 될까요?

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: 해당 코드 주소를 포함하는 문자열
- D: 에러

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`+` 연산자를 가지고, 문자열을 연결 시킬 수 있어요. 이 경우에는, 문자열 `"🥑"`과 문자열 `"💻"`을 연결해, 결과 `"🥑💻"`를 얻었어요.

</p>
</details>

---

###### 71. console.log 표현식 뒤에 언급된 값을 어떻게 출력할 수 있을까요?

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

- A: `game.next("Yes").value` 그리고 `game.next().value`
- B: `game.next.value("Yes")` 그리고 `game.next.value()`
- C: `game.next().value` 그리고 `game.next("Yes").value`
- D: `game.next.value()` 그리고 `game.next.value("Yes")`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

제너레이터 함수는 `yield` 키워드를 보면 실행을 "멈춰"요. 첫 번째로, `game.next().value`를 불러, 함수가 "Do you love JavaScript?" 문자열을 넘겨주도록 할 수 있어요.

`yield` 키워드를 처음으로 찾기 전까지, 모든 줄이 실행되요. 첫 번째 줄에 있는 함수는 `yield` 키워드를 가지고 있어요: 첫 번째 yield으로 실행을 멈춰요! _이것은 `answer` 변수가 아직 정의되지 않았는 뜻이에요_

`game.next("Yes").value`을 부를때, `"Yes"`의 경우에서 이전 `yield`는 `next()` 함수가 전달한 파라미터의 값으로 대체돼요. `answer` 변수의 값은 이제 `"Yes"`에요. if문의 조건은 `false`를 리턴해, `JavaScript loves you back ❤️`를 출력돼요

</p>
</details>

---

###### 72. 무엇이 출력 될까요?

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello` <br />&nbsp; &nbsp; &nbsp;`world`
- C: `Hello\nworld`
- D: `Hello\n` <br /> &nbsp; &nbsp; &nbsp;`world`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`String.raw`는 escapes (`\n`, `\v`, `\t` 등.)에서의 문자열을 무시해요! 백슬래시는 다음과 같이 끝나면 문제가 될 수 있어요

``console.log(`C:\Documents\Projects\table.html`)``

이렇게 될 거예요:

`C:DocumentsProjects able.html`

`String.raw`을 사용하면, 간단하게 escape를 무시하고 출력해요:

`C:\Documents\Projects\table.html`

이 경우, 문자열은 `Hello\nworld`이 출력되요.

</p>
</details>

---

###### 73. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

async 함수는 항상 promise를 리턴해요. `await`는 promise가 resolve 할 때까지 기다려야 해요: pending promise는 `data`를 설정하기 위해 부른 `getData()`가 리턴한 것을 가져요.

resolve된 값 `"I made it"`에 접근하고 싶다면, `data`에 `.then()` 메소드를 사용해야해요.

`data.then(res => console.log(res))`

이건 `"I made it!"`을 출력할 거예요.

</p>
</details>

---

###### 74. 무엇이 출력 될까요?

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['banana', 'apple']`
- B: `2`
- C: `true`
- D: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`.push()`메소드는 새로운 배열의 _길이_ 를 리턴해요! 이전에, 배열은 한 개의 요소(문자열 `"banana"`)를 포함되어있고 길이는 `1`예요. 배열에 문자열 `"apple"`을 추가한 후, 배열은 두 개 요소를 포함하고, 그리고 길이 `2`를 가져요. `addToList` 함수로부터 리턴돼요.

`push` 메소드는 원본 배열을 수정해요. 만약 함수로부터 _배열의 길이_ 대신에 _배열_ 을 리턴하고 싶다면, `item`을 푸시한 후 `list`를 리턴해야해요.

</p>
</details>

---

###### 75. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`Object.freeze`는 객체의 속성들을 추가, 삭제 혹은 수정하는 걸 불가능하게 만들어요(다른 객체로서의 속성들의 값이 아닌 한).

변수 `shape`을 생성할 때, 동결 객체 `box`와 동일하게 설정했고, `shape` 역시 동결 객체를 참조해요. `Object.isFrozen`을 사용해 객체의 동결 여부를 확인할 수 있어요. 이 경우, `Object.isFrozen(shape)`은 참을 리턴하고, 따라서 변수 `shape`는 동결 객체 참조를 가져요.

`shape`가 동결 상태이므로, `x`의 값은 객체가 아니며, `x`의 속성을 수정할 수 없어요. `x`는 여전히 `10`이고, `{ x: 10, y: 20 }`가 출력돼요.

</p>
</details>

---

###### 76. 무엇이 출력 될까요?

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

오른쪽에 있는 객체로부터 속성 `name`을 unpack할 때, `myName`라는 이름을 가진 변수에 값 `"Lydia"`을 할당해요.

`{ name: myName }`은, JavaScript에게 오른쪽에 있는 `name`속성 값을 가진 `myName`이라고 불리는 새로운 변수를 만든다고 말하는 거예요.

`name`을 출력하려고 하면, 변수는 정의되지 않아, ReferenceError를 던질거예요.

</p>
</details>

---

###### 77. 이것은 pure 함수 일까요?

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

pure 함수는 _항상_ 같은 결과를 리턴하는 함수예요, 만약 같은 인수가 전달 된다면 말이죠.

`sum` 함수는 항상 같은 결과를 리턴해요. 만약 `1`과 `2`를 전달하면, _항상_ 부작용 없이 `3`을 리턴할 거예요. `5`와 `10`을 전달하면, _항상_ `15`를 리턴할 거예요. 이게 pure 함수의 정의예요.

</p>
</details>

---

###### 78. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`add`함수는 _memoization_ 함수예요. memoization으로, 함수 실행 속도를 높이기 위해 함수의 결과를 캐시에 저장할 수 있어요. 이 경우, 이전에 리턴된 값을 저장한 `cache` 객체를 만들어요.

같은 인수로 `addFunction` 함수를 다시 부르면, 우선 cache 안에 값을 갖고 있는지 확인해요. 만약 그렇다면, 캐시에 저장된 값이 리턴되어, 실행시간이 절약돼요. 캐시에 저장되지 않았다면, 값을 계산하고 나중에 저장해요.

같은 값으로 `addFunction`함수를 세 번 불러요: 첫 번째 호출 때에는, `num`가 `10`일 때 함수의 값은 아직 저장되지 않았어요. if문의 조건 `num in cache` 은 `false`을 리턴하고, else 블록이 실행돼요: `Calculated! 20`을 출력하고, 결과 값은 cache 객체에 추가돼요. `cache` 이제 `{ 10: 20 }`와 같아요.

두 번째엔, `cache`객체는 `10`을 위해 리턴될 값을 포함하고 있어요. if문의 조건 `num in cache`은 `true`를 리턴하고, `'From cache! 20'`이 출력돼요.

세 번째에는, `5 * 2`을 `10`으로 평가하여 함수에 전달해요. `cache` 객체는 `10`을 위해 리턴될 값을 포함하고 있어요. if문의 조건 `num in cache`은 `true`를 리턴하고, `'From cache! 20'`이 출력돼요.

</p>
</details>

---

###### 79. 무엇이 출력 될까요?

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}
```

- A: `0` `1` `2` `3` 그리고 `"☕"` ` "💻"` `"🍷"` `"🍫"`
- B: `"☕"` ` "💻"` `"🍷"` `"🍫"` 그리고 `"☕"` ` "💻"` `"🍷"` `"🍫"`
- C: `"☕"` ` "💻"` `"🍷"` `"🍫"` 그리고 `0` `1` `2` `3`
- D:  `0` `1` `2` `3` 그리고 `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

_for-in_ 루프에서는, **열거 가능한** 속성들에 대해 반복 할 수 있어요. 배열에서, 열거 가능한 속성들은 배열 요소들의 "키"이고, 실제로는 그들의 인덱스죠. 배열을 다음과 같이 볼 수 있어요:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

여기서 키는 열거 가능한 속성이에요. `0` `1` `2` `3`이 출력되죠.

_for-of_ 루프에서는, **반복 가능한** 속성을 가진 요소에 대해 반복 할 수 있어요. 배열은 반복 가능해요. 배열을 반복할 때, "item" 변수는 현재 반복중인 요소로, `"☕"` ` "💻"` `"🍷"` `"🍫"`이 출력돼요.

</p>
</details>

---

###### 80. 무엇이 출력 될까요?

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list);
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D:  `[1, 1, 1]`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

배열 요소들은 모든 값을 포함 할 수 있어요. Numbers, strings, objects, 다른 arrays, null, boolean 값, undefined, 그리고 자료형, 함수, 연산자와 같은 표현식들

요소는 리턴된 값과 같아질 거예요. `1 + 2`는 `3`을 리턴하고, `1 * 2`는 `2`를 리턴하고, `1 / 2` 는 `0.5`을 리턴해요.

</p>
</details>

---

###### 81. 무엇이 출력 될까요?

```javascript
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi());
```

- A: `Hi there, `
- B: `Hi there, undefined`
- C: `Hi there, null`
- D:  `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

기본값으로, 함수에 값이 전달되지 않으면, 인수는 `undefined` 값을 가져요. 이 경우, `name` 인수를 위한 값을 전달하지 않았어요. `name`은 `undefined`로 출력돼요.

ES6에서, 기본값 `undefined` 값을 기본값 파라미터로 덮어쓸 수 있어요. 예를 들면:

`function sayHi(name = "Lydia") { ... }`

이 경우, 값을 전달하지 않거나 `undefined`를 전달하면, `name`은 항상 문자열 `Lydia`가 될 거예요.

</p>
</details>

---

###### 82. 무엇이 출력 될까요?

```javascript
var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    }
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
```

- A: `"🥑"` 그리고 `"😍"`
- B: `"🥑"` 그리고 `"😎"`
- C: `"😍"` 그리고 `"😎"`
- D: `"😎"` 그리고 `"😎"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`this`키워드의 값은 사용하는 곳에 따라 달라요. **메소드**에서 `getStatus`메소드 처럼, `this`키워드는 _메소드가 속한 객체_ 를 참조해요. 이 메소드는 `data` 객체에 속해 있어, `this`는 `data`객체를 참조해요. `this.status`를 출력할 때, `data`객체의 `status` 속성 `"🥑"`이 출력돼요.

`call` 메소드에서는, `this` 키워드가 참조하는 객체를 바꿀 수 있어요. **함수**에서, `this` 키워드는 _함수가 속한 객체_ 를 참조해요. `setTimeout` 함수를 _전역 객체_ 에 선언했고, `setTimeout` 함수 안에서, `this`키워드는 _전역 객체_ 를 참조해요. 전역 객체에서, 변수는 `"😎"`값을 가진 _status_ 를 부르죠. `this.status`를 출력하면, `"😎"`이 출력돼요.

</p>
</details>

---

###### 83. 무엇이 출력 될까요?

```javascript
const person = {
  name: "Lydia",
  age: 21
};

let city = person.city;
city = "Amsterdam";

console.log(person);
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`city` 변수를 `person` rorcpdml `city`라고 불리는 속성 값으로 설정 했어요. 이 객체에서는 `city`라고 불리는 속성이 없기 때문에, `city`는 `undefined`의 값을 가져요. 

`person`객체 자체를 참조 _하지않는_ 다는 걸 참고해요! 변수 `city`는 `person` 객체의 `city` 현재 속성 값으로 설정 했을 뿐이죠.

그러므로, 우리는 `city`를 문자열 `"Amsterdam"`로 설정 했어요. 이건 person 객체를 바꾸지 않아요: 여기서 객체를 참조하는 건 없어요.

`person`객체를 출력할 때, 수정되지 않은 객체가 리턴 받아요.

</p>
</details>

---

###### 84. 무엇이 출력 될까요?

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`const`와 `let` 키워드를 사용한 변수는 _블록-스코프_ 예요. 블록은 중괄호 (`{ }`) 사이에 있는 것이죠. 이 경우, if/else 표현식의 중괄호를 의미해요. 블록 안에 선언된 건 블록 밖의 변수들을 참조하지 못해, ReferenceError를 던져요.

</p>
</details>

---

###### 85. 어떤 종류의 정보가 출력될까요?

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));
```

- A: `fetch` 메소드의 결과
- B: `fetch` 메소드의 두번째 호출 결과
- C: 이전 `.then()`에서 callback된 결과
- D: 항상 undefined

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

두번째 `.then`에서의 `res`의 값은 이전`.then`에서 리턴된 값이에요. 이것 처럼 `.then`을 계속해서 연결할 수 있고, 값은 계속해서 다음 핸들러로 전달 돼요.

</p>
</details>

---

###### 86. `true`를 인수로 전달 할 수 없도록 주어졌을 때, `hasName`을 `true`로 설정할 수 있는 방법은 어느 것 일까요?

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`!!name`에서, 우리는 `name`의 값이 참 같은지 거짓 같은지 결정해요. 만약 테스트 하려는 name이 참 같다면, `!name`은 `false`를 리턴해요. `!false` (실제로는 `!!name`)는 `true`를 리턴해요.

`hasName`을 `name`으로 설정하면, `hasName`은 불린 값 `true`가 아니라, `getName` 함수에 전달된 값으로 설정해요.

`new Boolean(true)`은 불린 값 자체가 아닌, 감싼 객체를 리턴해요.

`name.length`은 그것의 `true`의 여부가 아닌, 전달된 인수의 길이를 리턴해요.

</p>
</details>

---

###### 87. 무엇이 출력 될까요?

```javascript
console.log("I want pizza"[0]);
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

문자열의 특정 인덱스의 문자를 얻으려면, 대괄호 표기법을 사용하면 돼요. 문자열의 첫 번째 문자는 인덱스 0과 기타등등을 가지고 있어요. 이 경우 문자 `"I'`인 인덱스 0이 출력되는 요소를 갖길 원해요.

이 방법은 IE7 이하에서는 지원되지 않는다는 것을 유의하세요. 이 경우, `.charAt()`를 사용하세요.

</p>
</details>

---

###### 88. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

기본 파라미터의 값은 기본 파라미터를 정의하기 _전_ 이라면, 함수의 다른 파라미터와 같게 설정 할 수 있어요. 우리는 `sum` 함수에 값 `10`을 전달 했어요. 만약 `sum` 함수에 인수의 값을 하나만 받았다면, `num2`를 위한 값은 전달되지 않고, `num1`은 전달된 값과 같다는 의미에요. `num1`의 기본값은 `num1`의 값인 `10`과 같아요. `num1 + num2`는 `20`을 리턴해요.

만약 기본 파리미터가 정의된 _후_ (오른쪽에) 기본 파라미터의 값을 설정하려고 시도한다면, 파라미터의 값은 아직 초기화되지 않아, 오류를 던질 거에요.

</p>
</details>

---

###### 89. 무엇이 출력 될까요?

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
- D: Global object of `module.js`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`import * as name` 신택스를 사용해서, `module.js` 파일에 있는 _모든 exports_ 를 `index.js` 파일 안에 `data`라고 불리는 새로운 객체를 생성해요. `module.js` 파일에는, 2개의 export가 있어요: default export 와 named export. default export는 문자열 `"Hello World"`을 리턴하는 함수고, named export는 문자열 `"Lydia"`의 값을 가진 `name`이라고 불리는 변수예요.

`data` 객체는 default export를 위한 `default` 속성을 가지고, 다른 속성들은 named exports의 이름들과 그에 해당하는 값들을 가져요.

</p>
</details>

---

###### 90. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

Class는 함수 생성자를 위한 문법적 설탕이에요. 함수 생성자로서 `Person` 클래스와 동등한 것은 다음과 같아요:

```javascript
function Person() {
  this.name = name;
}
```

`new`와 함께 불려진 함수 생성자는 `Person`의 인스턴스를 생성하고, `typeof` 키워드는 인스턴스의 `"object"`를 리턴해요. `typeof member`는 `"object"`을 리턴해요.

</p>
</details>

---

###### 91. 무엇이 출력 될까요?

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`.push` 메소드는 배열 자체가 아니라, 배열의 _새로운 길이_ 를 리턴해요! `newList`를 `[1, 2, 3].push(4)`과 동일하게 설정함으로써, `newList`를 배열의 새로운 길이와 동일하게 설정했어요: `4`.

그리고나서, `.push` 메소드를 `newList`에 사용하려고 했어요. `newList`는 숫자 값 `4` 이기 때문에, `.push` 메소드를 사용할 수 없어요: TypeError가 던져져요.

</p>
</details>

---

###### 92. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`giveLydiaPizza`와 같은 정규 함수는, `생성자` 속성을 가진 `프로토타입` 객체(프로토타입 객체)를 속성으로 가져요. 그러나 `giveLydiaChocolate` 함수와 같은 화살표 함수에서는, `prototype` 속성을 가지고 있지 않아요. `giveLydiaChocolate.prototype`을 사용해 `prototype` 속성에 접근하려고 할때, `undefined`이 리턴될 거에요.

</p>
</details>

---

###### 93. 무엇이 출력 될까요?

```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` 그리고 `age` `21`
- B: `["name", "Lydia"]` 그리고 `["age", 21]` 
- C: `["name", "age"]` 그리고 `undefined`
- D: `Error`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`Object.entries(person)`은 키와 값을 세트로 가진 배열의 배열을 리턴해요:

`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]` 

`for-of` 루프를 사용해서, 배열 안에 각 요소를 계속해서 반복할 수 있는데, 이 경우엔 하위 배열이에요. 하위 배열을 `const [x, y]`을 사용해, for-of 루프에서 즉시 분해할 수 있어요. `x`는 하위 배열의 첫 번째 요소와 같고, `y`는 하위 배열의 두 번째 요소와 같아요.

첫번째 하위요소는 `[ "name", "Lydia" ]`로, `x`는 `"name"`, `y`는 `"Lydia"`을 출력해요.
두번째 하위요소는 `[ "age", 21 ]`로, `x`는 `"age"`, `y`는 `21`을 출력해요.

</p>
</details>

---

###### 94. 무엇이 출력 될까요?

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

console.log(getItems(["banana", "apple"], "pear", "orange"))
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]` 
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`...args`은 나머지 파라미터예요. 나머지 파라미터의 값은 모든 나머지 인수들을 포함한 배열이며, **마지막 파라미터만 될 수 있어요**! 지금 예시에서는, 나머지 파라미터는 두번째 파라미터예요. 이것은 불가능하고, 신택스 에러를 던지게 될거에요.

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`
</p>
</details>

---

###### 95. 무엇이 출력 될까요?

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

- A: `a is bigger`, `6` 그리고 `b is bigger`, `3`
- B: `a is bigger`, `undefined` 그리고 `b is bigger`, `undefined`
- C: `undefined` 그리고 `undefined`
- D: `SyntaxError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

JavaScript에서, 세미콜론을 (`;`)을 명시적으로 포함하여 쓰지 _않_ 더라도, JavaScript 엔진은 여전히 문 뒤에 그들을 추가해줘요. 이것은 **자동 세미콜론 삽입**이라고 불려요. 예를 들어 문은 변수, 또는 `throw`, `return`, `break` 등과 같은 키워드가 될 수도 있어요.

여기, `return`문을 썼고, 다른 값 `a + b`은 _새로운 줄_ 에 쓰였어요. 그러나, 새로운 줄이기 때문에, 엔진은 실제로 그 값이 리턴되길 바라는지 알 수 없어요. 대신에, 자동적으로 `return` 뒤에 세미콜론을 더해줘요. 이것을 볼 수 있을거에요:

```javascript
  return;
  a + b
```

`return` 키워드 뒤에 함수가 실행되는 것이 중단되기 때문에, `a + b`의 의미는 도달되지 않아요. 여기서 처럼, 만약 아무 값도 리턴되지 않는다면, 함수는 `undefined`를 리턴할 거예요. `if/else`문 뒤에는 자동으로 삽입되는 게 없다는 걸 유의해요!

</p>
</details>

---

###### 96. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

다른 클래스/함수 생성자로 클래스를 설정할 수 있어요. 이 경우, `Person`을 `AnotherPerson`로 설정했어요. 이 생성자의 name은 `Sarah`예요, 따라서 새로운 `Person`의 인스턴스 `member`의 name 속성은 `"Sarah"`예요.

</p>
</details>

---

###### 97. 무엇이 출력 될까요?

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` 그리고 `["{Symbol('a')"]`
- B: `{}` 그리고 `[]`
- C: `{ a: "b" }` 그리고 `["a"]`
- D: `{Symbol('a'): 'b'}` 그리고 `[]`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

심볼은 _열거 불가능_ 해요. Object.keys 메소드는 객체의 모든 _열거 가능_ 한 키 속성들을 리턴해요. 심볼은 보이지 않고, 빈 객체가 리턴돼요. 객체 전체를 출력할때, 모든 속성들은 보여요, 심지어 열거 불가능한 것이라해도.

이것은 심볼의 많은 특성 중 하나에요: 완전히 고유한 값(예를들어 2개의 라이브러리를 같은 객체의 속성으로 추가하고 싶을때, 객체의 우연한 이름 충돌을 방지해요)을 나타내는 것 외에, 이 방법으로 객체의 속성을 "숨길" 수 있어요(비록 완전히는 아닐지라도. 여전히 `Object.getOwnPropertySymbols()` 메소드를 사용해 심볼에 접근 할 수 있어요).

</p>
</details>

---

###### 98. 무엇이 출력 될까요?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` 그리고 `undefined`
- B: `[1, [2, 3, 4]]` 그리고 `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` 그리고 `{ name: "Lydia", age: 21 }`
- D: `Error` 그리고 `{ name: "Lydia", age: 21 }`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`getList`함수는 배열을 인수로 받았어요. `getList` 함수의 괄호 사이에 있는 배열을 즉시 분해 했어요:

 `[x, ...y] = [1, 2, 3, 4]`

나머지 파라미터를 사용해 `...y`에 모든 "남은" 인수들을 배열에 넣었어요. 이 경우에서 남아있는 인수는 `2`, `3` 그리고 `4`예요. `y`의 값은 배열이고, 모든 나머지 파라미터를 포함하고 있어요. 이 경우 `x`의 값은 `1`이기 때문에, `[x, y]`는 `[1, [2, 3, 4]]`로 출력돼요.

`getUser` 함수는 배열을 받았어요. 화살표 함수에서, 우리가 한개의 값을 리턴한다면 중괄호를 사용할 _필요_ 가 없어요. 그러나, 만약 화살표 함수에서 _객체_ 를 리턴하고 싶다면, 괄호 사이에 리턴할 값을 써야해요, 그렇지 않다면 아무 값도 리턴받을 수 없어요! 다음 함수에서는 객체가 리턴 될 거에요:

```const getUser = user => ({ name: user.name, age: user.age })```

이 경우 값이 리턴되는 값이 없으므로, 함수는 `undefined`을 리턴할거에요.

</p>
</details>

---

###### 99. 무엇이 출력 될까요?

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

변수 `name`은 문자열을 값으로 가지고 있고, 함수가 아니죠, 따라서 호출할 수 없어요.

TypeErrors는 값이 예상된 유형이 아닐 경우 던져져요. JavaScript는 `name`을 호출하려고 했기 때문에 함수일거라 예상했어요. 그러나 문자열이였기 때문에, TypeError가 던져져요: name은 함수가 아니죠!

SyntaxErrors는 어떤 것을 썼을때 JavaScript에서 유효하지 않을 때 던져져요, 예를들어 `return`을 `retrun`로 썼을때 말이죠.

ReferenceErrors는 JavaScript가 접근하려고 하는 값의 참조를 찾을 수 없을 때 던져져요.

</p>
</details>

---

###### 100. output의 값은 무엇일까요?

```javascript
// 🎉✨ 이번이 내 100번째 질문이에요! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`[]`은 참 같은 값이에요. `&&` 연산자를 사용할 때, 만약 왼쪽에 있는 값이 참 같은 값이라면 오른쪽 값은 리턴될 거에요. 이 경우, 왼쪽의 값 `[]`은 참 같은 값이에요, 따라서 `'Im'`은 리턴될 거예요.

`""`은 거짓 같은 값이에요. 만약 왼쪽 값이 거짓 같은 값이라면, 리턴되는 것은 없어요. `n't`은 리턴되지 않아요.

</p>
</details>

---

###### 101. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`||` 연산자를 사용하면, 최초의 참 같은 피연산자를 리턴해요. 만약 모든 값이 거짓 같다면, 마지막 피연산자를 리턴해요.

`(false || {} || null)`: 빈 객체 `{}`는 진짜 같은 값이에요. 이것은 최초로(그리고 유일하게) 진짜 같은 값이라 리턴돼요. `one`은 `{}`이에요.

`(null || false || "")`: 모든 피연산자는 가짜 같은 값이에요. 이것은 마지막 피연산자 `""`가 리턴된다는 것을 의미해요. `two`는 `""`이에요.

`([] || 0 || "")`: 빈 배열 `[]`은 진짜 같은 값이에요. 이것은 최초의 진짜 같은 값이라 리턴돼요. `three`은 `[]`이에요.

</p>
</details>

---

###### 102. 무엇이 출력 될까요?

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

- A: `I have resolved!`, `second` 그리고 `I have resolved!`, `second`
- B: `second`, `I have resolved!` 그리고 `second`, `I have resolved!`
- C: `I have resolved!`, `second` 그리고 `second`, `I have resolved!`
- D: `second`, `I have resolved!` 그리고 `I have resolved!`, `second`

<details><summary>정답</summary>
<p>

#### 정답: D

promise를 사용하면, 기본적으로 _이 함수를 실행하고 싶지만, 시간이 좀 걸릴 수 있으니 실행중에 잠시 미뤄둘거에요. 확실한 값이 resoloved(혹은 rejected)로 전달되었을 때와 콜 스택이 비었을 때 이 값을 사용하고 싶어요_ 라고 말해요.

`async` 함수 안에서 `.then`과 `await` 두개의 키워드에서 값을 얻을 수 있어요. 비록  `.then`과 `await`에서 프라미스의 값을 얻을 수 있지만, 그들은 약간 다르게 작동해요.

첫번째 `firstFunction`에서, (뭐랄까) myPromise 함수가 실행되는 것을 미뤘지만, 다른 코드를 계속해서 실행하는데, 이 경우 `console.log('second')`에요. 그리고나서, 함수는 콜스택이 비워져 있는 걸 본 다음 출력된 문자열 `I have resolved`를 resolved로 전달해요.

`secondFunction`에서의 await 키워드를 사용하면, 말 그대로 다음 라인으로 옮기기 전 값이 resoloved함수로 전달될 때 까지 async 함수의 실행을 중단해요.

이것은 `myPromise`이 값 `I have resolved`을 얻을 때 까지 기다린다는 의미이며, 단 한 번 발생하면, 다음라인으로 이동해요: `second`이 출력되죠.

</p>
</details>

---

###### 103. 무엇이 출력 될까요?

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
- C: `3`, `Lydia2`, `[object Object]2`
- D: `"12"`, `Lydia2`, `[object Object]2`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`+` 연산자는 숫자로 나타난 값을 더하는데 사용될 뿐만 아니라, 문자열을 연결해주는데 사용 할 수 있어요. JavaScript 엔진은 하나 이상의 값들이 숫자가 아닌 것을 발견 했을 때, 숫자를 문자열로 강제로 변환해요.

첫번째 `1`은, 숫자로된 값이에요. `1 + 2`는 숫자 3을 리턴해요.

그러나, 두번째는 문자열 `"Lydia"`이에요. `"Lydia"`은 문자열이고, `2`는 숫자에요: `2`는 문자열로 강제 변환되어요. `"Lydia"`그리고 `"2"`이 연결되어, 문자열 `"Lydia2"`이 리턴되요.

`{ name: "Lydia" }`은 객체에요. 객체가 아닌 숫자나 객체는 문자열이 아니므로, 둘다 문자화되어요. 정규 객체를 문자화 할때, `"[object Object]"`가 돼요. `"[object Object]"`는 `"2"`와 연결되어 `"[object Object]2"`가 돼요.

</p>
</details>

---

###### 104. 값은 무엇일까요?

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<resolved>: 5}`
- D: `Error`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

promise이나 non-promise이 아니더라도 값의 모든 타입은 `Promise.resolve`으로 전달 할 수 있어요. 메소드 그 자체는 resolved 값을 가진 promise를 리턴해요. 정규 함수를 전달한다면, 정규 값을 가진 resolved promise를 얻게 될거에요. 만약 promise를 전달한다면, 전달된 promise의 resolved 값과 resolved promise를 얻게 될거에요.

이 경우, 숫자 값 `5`를 전달했어요. 이것은 값 `5`를 가진 resolved promise를 리턴해요.

</p>
</details>

---

###### 105. 값은 무엇일까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

객체는 참조에 의해 전달되었어요. 엄격한 같은 비교 (`===`)로 객체를 검사한다면, 그들의 참조를 비교할거에요.

`person2`의 기본 값을 `person` 객체와 동일하게 설정 하고, `person` 객체를  `person1`의 값으로 전달 했어요.

이것은 두개의 값은 메모리의 같은 장소의 참조를 가지고 있다는 걸 의미해요, 그렇기 때문에 그들은 같아요.

`else`구문 안에 코드블럭이 실행되면, `They are the same!`을 출력해요.

</p>
</details>

---

###### 106. 값은 무엇일까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

JavaScript에서, 객체의 속성에 접근하는 2가지 방법을 가지고 있어요: 괄호 표기법, 또는 점 표기법. 이 예제에서는, 괄호표기법 (`colorConfig["colors"]`) 대신 점 표기법 (`colorConfig.colors`)을 사용 했어요.

점 표기법에서, JavaScript는 정확한 이름을 가진 객체의 속성을 찾으려 해요. 이 예제에서 JavaScript는 `colorConfig` 객체의 `colors`라고 불리는 속성을 찾으려고 했어요. 그곳에는 `colors`라고 불리는 속성이 없어요, 그래서 `undefined`을 리턴해요. 그리고 나서, `[1]`을 사용해서 첫번째 요소의 값에 접근하려고 했어요. `undefined`의 값에는 이것을 할 수 없어요, 그래서 `TypeError`를 던져요: `Cannot read property '1' of undefined`.

JavaScript 문장을 해석(또는 참조형 변수를 원시 데이터 타입으로 만들어 주도록) 해요. 괄호 표기법을 사용할때, 첫번째로 열린 괄호 `[`을 보고 닫힌 괄호 `]`를 찾을 때 까지 계속 진행되는 것으로 보여요. 그러고 나서야, 문장을 평가할거에요. 만약 `colorConfig[colors[1]]`을 사용했다면, `colorConfig` 객체의 속성 `red` 의 값이 리턴될 거에요.

</p>
</details>

---

###### 107. 값은 무엇일까요?

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

엔진에서, 이모티콘은 유니코드에요. 하트 이모티콘의 유니코드는 `"U+2764 U+FE0F"`에요. 같은 이모티콘의 유니코드는 항상 같아요, 따라서 각각 다른 두개의 같은 문자열을 비교하는 것이므로 true를 리턴해요.

</p>
</details>

---

###### 108. 다음 중 원본 배열을 수정하는 method는 무엇일까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`splice` method를 사용하면, 요소를 삭제, 대체하거나 추가함으로써 원본 배열을 수정해요. 이 경우에서, 인덱스 1에서 부터 2개의 아이템을 제거했어요. (`'🥑'` 와 `'😍'`를 삭제했어요) 그리고 ✨ 이모티콘을 대신 추가했죠.

`map`, `filter` 그리고 `slice` 는 새로운 배열을 리턴해하고, `find` 요소를 리턴하며,  `reduce` 감소된 값을 리턴해요.

</p>
</details>

---

###### <a name=20191009></a>109. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`info` 객체의 `favoriteFood` 속성 값을 피자 이모티콘 `'🍕'`와 같게 설정했어요. 문자는 원시 데이터 형이에요. JavaScript에서, 원시 데이터 형은 (객체가 아닌 모든 것) _값_ 에 의해 상호 작용해요. 이 경우, `info` 객체의 `favoriteFood` 속성 값을 `food` 배열 안의 첫 번째 요소와 같게 설정했어요. 문자열은 원시 데이터 형이므로 값에의해 상호 작용해요. (좀 더 알고싶다면 내 [블로그 포스트](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference)를 참고하세요.)

그리고나서, `info` 객체의 `favoriteFood` 속성 값을 바꿨어요. `favoriteFood`의 값은 단지 배열의 첫 번째 요소의 값을 _복사_ 했기 때문에 `food` 배열은 바뀌지 않고, `food[0]` 요소의 메모리 공간과 같은 참조를 갖지 않아요. food를 출력할 때, 여전히 원본 배열 ['🍕', '🍫', '🥑', '🍔']` 이에요.

</p>
</details>

---

###### 110. 이 메소드는 무엇을 할까요?

```javascript
JSON.parse()
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

`JSON.parse()`메소드를 사용하면, JSON 문자열의 구문을 분석하여 JavaScript 값으로 생성해요.
With the `JSON.parse()` method, we can parse JSON string to a JavaScript value. 

```javascript
// 숫자를 유효한 JSON 문자열로 변환해요, 그리고 나서 JSON 문자열의 구문을 분석해 JavaScript 값으로 생성해요.
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// 배열 값을 유효한 JSON 문자열로 변환해요, 그리고 나서 JSON 문자열의 구문을 분석해 JavaScript 값으로 생성해요.
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// 객체를 유효한 JSON 문자열로 변환해요, 그리고 나서 JSON 문자열의 구문을 분석해 JavaScript 값으로 생성해요.
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
```

</p>
</details>

---

###### 111. 무엇이 출력 될까요? 

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

각 기능에는 자체 _실행 컨텍스트_ (또는 _범위_)가 있어요. `getName` 함수는 먼저 자체 컨텍스트(범위) 내에서 접근하려고 하는 변수 `name`이 포함되어 있는지 살펴봐요: `let` 키워드와 함께 선언 했기 때문에 `'Sarah'`의 값을 가져요.

`let` 키워드 (그리고 `const`)를 사용한 변수는 끌어올려지지만, `var`와 다르게 <i>초기화</i> 되지는 않아요. 그들을 선언 (초기화) 하는 줄 전에 접근 할 수 없어요. "일시적 사각지대"라고 불려요. 그들을 선언하기 전에 접근하려고 한다면, JavaScript는 `ReferenceError`를 던져요.

`getName` 함수 안에 `name` 변수를 선언하지 않았다면, javaScript 엔진은 _스코프 체인_ 을 내려다 보지 않았을 거예요.  외부 범위에 `Lydia`의 값을 가진 `name` 변수가 있어요. 이 경우엔 `Lydia`를 출력할거예요.

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

###### 112. 무엇이 출력 될까요?

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

- A: `a` 그리고 `a`
- B: `a` 그리고 `undefined`
- C: `['a', 'b', 'c']` 그리고 `a`
- D: `a` 그리고 `['a', 'b', 'c']`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`yield` 키워드를 사용하면, 제너레이터 함수 안의 값을 `중단` 했어요. `yield`키워드를 사용하면, 다른 제너레이터 함수 또는 반복 가능한 객체(예를들면 배열)의 값을 중단 시킬 수 있어요.

`generatorOne`에서, 전체 배열 `['a', 'b', 'c']`을 `yield` 키워드를 사용해서 중단 했어요. `one` (`one.next().value`)의 `next` 메소드가 리턴 한 객체의 `value`속성 값은 전체 배열 `['a', 'b', 'c']`과 같아요.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

`generatorTwo`에서, `yield*` 키워드를 사용했어요. `two`의 첫번째 값이 중단 되었다는 의미이고, 반복자의 첫번째로 중단된 값과 같아요.반복자는 배열 `['a', 'b', 'c']` 이에요.
처음으로 중단된 값은 `a`이고, 따라서 첫번째 순서에서 `two.next().value`를 부르면 `a`를 리턴해요.

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

###### 113. 무엇이 출력 될까요?

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

템플릿 리터러를 사용한 표현식은 첫번째로 평가돼요. 문자열은 표현식의 리턴된 값을 포함하게 된다는 것을 의미하고, 이 경우 함수 `(x => x)('I love')`는 즉시 호출 돼요. 화살표 함수 `x => x`의 인수 값으로 `I love`를 전달 했어요. `x`는 `'I love'`이고 리턴 될 거에요. 이 결과는 `I love to program` 이에요.

</p>
</details>

---

###### 114. 무슨일이 발생할까요?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: `setInterval` 콜백은 호출되지 않을거에요
- B: `setInterval` 콜백은 한 번만 호출돼요
- C: `setInterval` 콜백은 여전히 매 초마다 호출돼요
- D: 결코 `config.alert()`를 호출 하지 않고, config 는 `null`이에요

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

일반적으로 객체를 `null`로 설정했을때, 객체는 더 이상의 객체 참조가 없어 _쓰레기 수집_ 되어요. 그러나, `setInterval`을 가진 콜백 함수는 화살표 함수 (`config` 객체로 감싸진) 이기 때문에, 콜백 함수는 여전히 `config` 객체의 참조를 갖고 있고, 객체는 쓰레기 수집 되지 않아요. 쓰레기 수집 되지 않았기 때문에, `setInterval` 콜백 함수는 여전히 매 1000ms (1s) 마다 호출 돼요,

</p>
</details>

---

###### 115. 어느 method가 값 `'Hello world!'`를 리턴 할까요?

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
- C: 2 그리고 3
- D: 모두

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`set` 메소드를 사용해서 키/값을 쌍으로 추가할 때, 키는 `set`함수로 전달 된 첫 번째 인수의 값이 되고, 값은 `set`함수로 전달된 두 번째 인수의 값이 될거에요. 이 경우에선 키는 _함수_ `() => 'greeting'`이고, 값은 `'Hello world'` 에요. `myMap`은 이제 `{ () => 'greeting' => 'Hello world!' }` 예요.

1은 틀렸어요, 키는 `'greeting'`가 아니라 `() => 'greeting'`이기 때문이에요.
3은 틀렸어요, `get`메소드에 새로 생성한 함수를 전달 했기 때문이에요. 객체는 _참조_에 의해 상호작용해요. 함수는 객체이고, 그들이 같다고 하더라도 두 함수가 절대로 같지 않은 이유예요: 메모리 안 다른 장소의 참조를 가지고 있어요.

</p>
</details>

---

###### 116. 무엇이 출력 될까요?

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

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

`changeAge`와 `changeAgeAndName`함수 둘다 기본 파라미터를 가지고 있는데 즉, _새롭게_ 만들어진 객체 `{ ...person }`를 가지고 있어요. 이 객체는 `person` 객체의 모든 키/값의 복사본을 가지고 있어요.

첫번째로, `changeAge`함수를 호출 했고, 그것의 인수로 `person` 객체를 전달 했어요. 이 함수는 `age`속성의 값을 1 증가 시켜요. `person`은 이제 `{ name: "Lydia", age: 22 }`이에요.

그리고나서, `changeAgeAndName` 함수를 호출 했지만, 파라미터를 전달하지 않았어요. 대신에, `x`의 값은 _새로운_ 객체와 같아요: `{ ...person }`. 새로운 객체이기 때문에, `person`객체의 속성들의 값에 영향을 주지 않아요. `person`은 여전히 `{ name: "Lydia", age: 22 }`와 같아요.

</p>
</details>