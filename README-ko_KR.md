# (고급) JavaScript 질문 목록

JavaScript 에 관한 객관식 문제를 [Instagram](https://www.instagram.com/theavocoder)에 매일 게시하고 있어요, 물론 여기에도 게시할 거예요!

초급부터 고급까지: JavaScript를 얼마나 잘 알고 있는지 테스트하거나, 지식을 조금 깊게 하거나, 코딩 면접을 준비하세요! :muscle: :rocket: 이 기록을 매주 새로운 질문으로 업데이트해요. 마지막 업데이트: <b>6월 21일</b>

정답은 질문 아래 접힌 부분에 있어요, 그냥 클릭하면 펼칠 수 있어요. 행운을 빌어요 :heart:

- [English](./README.md)
- [中文版本](./README-zh_CN.md)
- [Versión en español](./README-ES.md)
- [日本語](./README-ja_JA.md)
- [Русский](./README_ru-RU.md)
- [Western Balkan](./README-bs_BS.md)
- [Deutsch](./README-de_DE.md)
- [Tiếng Việt](./README-vi.md)
- [Українська мова](./README-ua_UA.md)
- [Português Brasil](./README_pt_BR.md)

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

함수 내에서, 우선 `var`키워드를 사용해 `name`변수를 선언해요. 이것은 변수가 정의되어 있는 행에 실제로 도달할 때까지, 변수는 `undefined`의 기본값으로 호이스팅 되(생성단계에 메모리 공간이 설정됨)는 것을 의미해요. `name` 변수를 출력하려는 줄에서 아직 변수를 정의하고 있지 않기 때문에, `undefined`값을 유지하고 있어요.

`let`키워드(그리고 `const`)를 가지는 변수들은, `var`와는 달리, 호이스팅되지만 <i>초기화</i>되지 않아요. 그것들을 선언(초기화)하는 줄 전에는 접근할 수 없어요. 이것은 "일시적 사각지대"라고 불려요. 선언되기 전에 변수에 접근하려고 하면, JavaScript는 `ReferenceError`를 던져요.

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

JavaScript의 이벤트 큐 때문에, `setTimeout`의 콜백 함수는 루프가 실행된 _후에_ 호출되어요. 첫 번째의 루프 변수 `i`는 `var`키워드를 사용해 선언되어 있으므로, 이 값은 전역 변수가 되어요. 루프 동안, 단항 연산자 `++`를 사용하여, 매번 `i`의 값을 `1`씩 증가했어요. `setTimeout`콜백 함수가 호출되기까지, 첫 번째 예에서 `i`는 `3`과 같아요.

두 번째 루프에서, 변수 `i`는 `let`키워드를 사용해 선언되었어요: `let`(그리고 `const`)키워드로 선언된 변수는 블록 범위예요(블록은 `{ }` 사이의 모든 것). 각각의 반복 동안, `i`는 새로운 값을 가지고, 각각의 값은 루프 안쪽 범위에 있어요.

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

shape.diameter();
shape.perimeter();
```

- A: `20` 그리고 `62.83185307179586`
- B: `20` 그리고 `NaN`
- C: `20` 그리고 `63`
- D: `NaN` 그리고 `63`

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`diameter`의 값은 정규 함수인 반면, `perimeter`의 값은 화살표 함수라는 점을 유의하세요.

화살표 함수에서는, 통상적인 함수와는 달리, `this`키워드는 현재 주위의 범위를 참조해요! 이것은 `perimeter`를 부르면, shape 객체가 아닌, 그 주위의 범위(예를 들면 window)를 참조하는 것을 의미해요.

그 객체에는 `radius`라는 값은 없어, `undefined`를 리턴해요.

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

단항 더하기는 피연산자를 숫자로 변환하려 해요. `true`는 `1`, `false`은 `0`.

문자열 `'Lydia'`는 참 같은 값이에요. 실제로 물어보는 것은, "이 참 같은 값이 거짓 같은 값인가?"에요. 이것은 `false`을 리턴해요.

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

- A: `mouse.bird.size` 은 유효하지 않아요
- B: `mouse[bird.size]` 은 유효하지 않아요
- C: `mouse[bird["size"]]` 은 유효하지 않아요
- D: 이 모든 것들은 유효해요.

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

JavaScript에서, 모든 객체 키는 문자열이에요 (심볼이 아닌 한). 비록 그것을 문자열 _형_ 으로 입력하지 않아도, 항상 내부적으로 문자열로 변환되어요.

JavaScript는 문장을 해석(또는 박스 해제)해요. 대괄호 표기를 사용하면, 첫 번째 왼쪽 대괄호 `[`를 보고 오른쪽 대괄호 `]`를 찾을 때까지 진행해요. 그때, 그 문장을 평가할 거에요.

`mouse[bird.size]`: 먼저 `bird.size`를 평가해요, 이것은 `"small"`이에요. `mouse["small"]` 은 `true`를 리턴해요.

그러나, 닷 표기에서는, 이것은 발생하지 않아요, `mouse`는 `bird`라고 불리는 키를 가지고 있지 않아요 즉, `mouse.bird`는 `undefined`를 의미해요.

또, 닷 표기를 사용해 `size`를 물어봐요. `mouse.bird.size`. `mouse.bird`는 `undefined`로, 실제로는 `undefined.size`를 물어보고 있어요. 이것은 유효하지 않기 때문에, `Cannot read property "size" of undefined`와 비슷한 에러를 던질 거예요.

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

JavaScript에서, 모든 객체는 서로 동일하게 설정하면 _참조_ 에 따라 상호작용 해요.

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

`==`연산자를 사용할 때, 그건 같은 _값_ 을 가지고 있는지 여부만 확인해요. 그것들은 모두`3`의 값을 가지고 있으므로, `true`를 리턴해요.

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
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

객체는 출력돼요, 전역 객체에 빈 객체를 방금 만들었기 때문이에요. `greeting`을 `greettign`으로 잘못 입력했을 경우, JS 인터프리터는 실제로 이것을 `global.greettign = {}` (또는 브라우저의 `window.greetign = {}`) 라고 간주해요.

이것을 피하기 위해서, `"use strict"`를 사용할 수 있어요. 이렇게 하면 변수를 어떤 것과 동일하게 설정하기 전에 변수를 선언했는지 확인할 수 있어요.

</p>
</details>

---

###### 10. 이것을 하면 어떻게 될까요?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: 아무 일도 일어나지 않아요, 이건 완전히 괜찮아요!
- B: `SyntaxError` 이 방법으로 함수에 속성을 추가할 수 없어요.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

JavaScript에서는 가능해요, 함수는 객체이기 때문이에요!
(윈시형 이외는 모두 객체)

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

보통의 객체처럼 생성자에는 속성을 추가할 수 없어요. 한 번에 모든 객체에 기능을 추가하고 싶다면, 프로토타입을 사용해야 해요. 그래서 이 경우에,

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```

`member.getFullName()`은 작동해요. 이것은 왜 유익할까요? 이 메소드를 생성자 자체에 추가했다고 할게요. 아마도 모든 `Person` 인스턴스는 이 메소드를 필요로 하지 않을 수도 있어요. 그 경우 그들은 아직 속성을 갖고, 각각의 인스턴스를 위해 메모리 공간을 소비하기 때문에, 많은 메모리 공간을 낭비해요. 대신에, 프로토타입을 추가하는 것만으로, 메모리의 한 지점을 가지지만, 모든 것들은 그것에 접근 할 수 있어요.

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

`sarah`를 위해, `new`키워드를 사용하지 않았어요. `new`를 사용한 경우, 이것은 우리가 만든 새로운 빈 객체를 참조해요. 그러나, `new`를 추가하지 않으면 **전역변수**를 참조해요!

`this.firstName`에 `"Sarah"`을 대입하고, `this.lastName`에 `"Smith"`을 대입했다고 말했었어요. (그렇지만) 우리는 실제로, `global.firstName = 'Sarah'` 그리고 `global.lastName = 'Smith'`를 정의해요. `sarah` 자체는 `undefined`로 남아있어요.

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

**capturing** 단계 동안에, 이벤트는 조상요소를 거쳐 목표 요소까지 내려가요. 그런 다음 **target** 요소에 도달하고, **bubbling**이 시작돼요.

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

**기본 객체**를 제외한, 모든 객체는 프로토타입을 가져요. 기본 객체는 사용자에 의해 만들어지거나 `new`키워드를 사용하여 만들어져요. 기본 객체는 `.toString`와 같은 몇 개의 메소드와 속성에 접근할 수 있어요. 이것이 내장 JavaScript 메소드를 사용할 수 있는 이유죠! 이러한 모든 메소드는 프로토 타입에서 이용할 수 있어요. JavaScript가 당신의 객체를 직접 찾을 수 없더라도, 당신이 접근할 수 있도록, 프로토타입 체인으로 내려가서 찾을거에요.

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

이건 `0 2 2`을 리턴해요.

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

태그드 템플릿 리터럴을 사용하는 경우, 첫 번재 인수의 값은 항상 문자열 값의 배열이에요. 나머지 인수는 식을 통과한 값을 얻어요.

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

동등성을 테스트할 때, 원시형은 그 _값_ 에 따라 비교되며, 객체는 그들의 _참조_ 에 따라 비교돼요. JavaScript 객체가 메모리 내의 같은 장소를 참조하고 있는지 여부를 확인해요.

비교하고 있는 두개의 객체는 그것이 없어요: 파라미터로 전달된 객체와 동등성을 확인하기 위해 사용한 객체는 메모리 내의 다른 장소를 참조해요.

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

스프레드 연산자 (`...args`.)는 인수를 가진 배열을 리턴해요. 배열은 객체이므로, `typeof args`는 `"object"`를 리턴해요.

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

`"use strict"`을 사용하면, 실수로 전역 변수를 선언하지 않게 할 수 있어요. `age`이라는 변수를 선언한 적이 전혀 없고, `"use strict"`을 사용하고 있으므로, 참조 에러를 던지게 될 거에요. 만약 `"use strict"`을 사용하지 않았다면, 이건 작동할 거에요, `age` 속성이 전역 객체에 추가된 것이기 때문이죠.

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

`eval` 문자열로서 통과된 코드를 평가해요. 이 경우와 같이 만약 그것이 표현식이라면, 표현식을 평가해요. 표현식은 `10 * 10 + 5`이에요. 이것은 숫자 `105`를 리턴해요.

</p>
</details>

---

###### 22. cool_secret에 몇시간 접근이 가능 할까요 ?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: 영원히, 데이터는 사라지지 않아요.
- B: 사용자가 탭을 닫을 때.
- C: 사용자가 탭 뿐만 아니라, 브라우저 전체를 닫을 때.
- D: 사용자가 자신의 컴퓨터를 종료시켰을때.

<details><summary><b>정답</b></summary>
<p>

#### 정답: B

`sessionStorage`에 저장된 데이터는 _탭_ 을 닫은 후에 삭제돼요.

만약 `localStorage`를 사용했다면, 예를 들어 `localStorage.clear()`를 호출하지 않는 한, 데이터는 영원할 거에요.

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

`var`키워드를 사용하면, 같은 이름으로 복수의 변수를 선언할 수 있어요. 변수는 최신의 값을 유지해요.

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

모든 객체 키는(심볼 제외) 문자열로 직접 입력하지 않아도, 내부적으로는 문자열이에요. 이것이 `obj.hasOwnProperty('1')` 또한 true를 리턴하는 이유죠.

set에서는 작동하지 않아요. set에는 `'1'`이 없어요: `set.has('1')`는 `false`를 리턴해요. 그것은 수형인 `1`을 가지고 있어, `set.has(1)`은 `true`를 리턴해요.

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

같은 이름의 키를 두 개 가지고 있다면, 첫 번째 위치에서, 마지막에 지정된 값으로 대체될 거예요.

</p>
</details>

---

###### 26. JavaScript의 global execution context는 두개를 작성해요. : 전역객체와 "this" 키워드에요.

- A: true
- B: false
- C: it depends

<details><summary><b>정답</b></summary>
<p>

#### 정답: A

기본적인 execution context는 전역 실행 문장이에요: 당신의 코드 모든 곳에서 접근할 수 있어요.

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

`continue` 표현식은 특정 조건이 `true`를 리턴하면 반복 처리를 건너뛰어요.

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

`String`은 내장 생성자로 속성을 추가할 수 있어요. 단지 프로토타입이라는 메소드를 추가했어요. 원시형 문자열은 문자열 프로토타입 함수에 의해 생성된 문자열 객체로 자동 변환돼요. 그래서, 모든 문자열(문자열 객체)는 그 메소드에 접근할 수 있어요!

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

객체 키는 자동으로 문자열로 변환돼요. 객체 `a`의 키 값으로 `123`를 세팅하려고 해요.

그러나, 객체를 문자열화 하면 `"[Object object]"`가 돼요. 그래서 여기서 말하고자 하는 건 `a["Object object"] = 123`이라는 거예요. 그 후, 같은 일을 다시 시도해요. `c`는 암묵적으로 문자열화 한 다른 객체에요. 그래서 `a["Object object"] = 456`이 돼요.

그 후, `a[b]`는 출력하면 실제로는 `a["Object object"]`에요. 단지 `456`를 설정했기 때문에, `456`를 리턴해요.

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

WebAPI는 준비가 될 때마다 stack에 항목을 추가할 수 없어요. 대신에, _queue_ 라고 불리는 것에 callback함수를 푸시해요.

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

###### 32. p태그를 클릭하면 로그의 출력은 무엇일까요 ?

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

`p`를 클릭하면, 2개의 로그를 볼 수 있어요: `p` 그리고 `div`. 이벤트의 전파 중에는 3 단계가 있어요: 캡처링, 타겟, 버블링. 기본적으로, 이벤트 핸들러는 버블링 단계에서 시작돼요. (`useCapture`를 `true`로 설정하지 않는 한). 가장 깊게 중첩된 요소로부터 바깥쪽으로 나가요.

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

두 개 모두, `this`키워드를 참조하고자 하는 객체로 보낼 수 있어요. 그러나, `.call`은 _즉시 실행돼요_!

`.bind.`는 함수의 _복사본_ 을 리턴하지만, 바인딩 콘텍스트죠! 이건 즉시 실행되지 않아요.

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

참고: 단 7개의 내장형이 있어요: `null`, `undefined`, `boolean`, `number`, `string`, `object` 그리고 `symbol`. `"function"`은 객체이기 때문에 형이 아니라 `"object"` 형이에요.

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

`new Number` 그리고 `new Boolean`와 같은 생성자 함수는 참 같은 값이에요.

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

`typeof 1` 은 `"number"`을 리턴해요.
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

배열의 길이를 초과한 값을 배열의 요소로 설정하고자 할 때, JavaScript는 "empty slots"이라고 불리는 것을 생성해요. 이것은 실제로 `undefined`의 값을 가지고 있지만, 다음과 같은 것을 보게 될 거에요:

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

`catch` 블록 밖에서, `x`는 여전히 `undefined`이고 `y`는 `2`이에요. `catch` 블록 밖에서 `console.log(x)`를 출력하면, `undefined`을 리턴하고. 그리고 `y`는 `2`를 리턴해요.

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

원시형과 객체를 구별하는 법은 원시형에는 속성이나 메소드가 없어요. 그러나 `'foo'.toUpperCase()`는 `'FOO'`로 평가되어, `TypeError`의 결과가 되지 않아요. 문자열과 같은 원시형이 속성 또는 메소드에 접근하려고 할 때, JavaScript는 래퍼 클래스 중 하나인 `String`을 사용하여 암묵적으로 감싸고, 표현식이 평가된 후 즉시 래퍼를 폐기하기 때문이에요. `null` 그리고 `undefined`를 제외한 모든 원시형은 이러한 행동을 합니다.

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

`[1, 2]`은 초기값이에요. 이것이 최초의 값으로, 제일 처음의 `acc`의 값이에요. 처음 라운드 동안에 `acc`은 `[1,2]`이며, `cur`은 `[0, 1]`이에요. 그것들을 연결하면 결과적으로 `[1, 2, 0, 1]`이 돼요.

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

`null`은 거짓 같은 값이에요. `!null`은 `true`를 리턴해요. `!true`은 `false`를 리턴해요.

`""` 은 거짓 같은 값이에요. `!""`은 `true`를 리턴해요. `!true`은 `false`를 리턴해요.

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
- D: `0, 10 and 10, 20`

<details><summary><b>정답</b></summary>
<p>

#### 정답: C

보통의 함수는 호출 후에 중단할 수 없어요. 하지만, 제너레이터 함수는 중간에 "멈췄다가", 나중에 중단된 부분부터 계속할 수 있어요. 제너레이터 함수는 `yield` 키워드를 만날 때마다, yield 뒤에 지정된 값을 넘겨줘요. 제너레이터 함수에서는 값을 _리턴_ 하지 않고, _넘겨준다_ 는 것을 유의하세요.

우선, 제너레이터 함수에서 `i`를 `10`로 초기화해요. `next()` 메소드를 사용해 제너레이터 함수를 호출해요. 처음에 제너레이터 함수를 호출하면, `i`은 `10`이에요. 첫 번째 `yield` 키워드를 만났어요: 그것은 `i`의 값을 넘겨줘요. 이제 제너레이터는 "멈추고", `10`을 출력해요.

그 후, `next()` 메소드를 사용해 다시 한번 함수를 호출해요. `i`는 여전히 `10`이에요. 이제, 다음 `yield` 키워드를 만나 `i * 2`를 넘겨줘요. `i`는 `10`이므로, `10 * 2`, 즉 `20`을 리턴해요. 결과는 `10, 20`이에요.

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

복수의 프로미스를 `Promise.race` 메소드에 넘겨주면, _최초_ 의 프로미스를 해결/거부 해요. `setTimeout` 메소드에 타이머를 전달해요: 첫번째 프로미스(`firstPromise`)에는 500ms, 두번째 프로미스(`secondPromise`)에는 100ms. 이것은 `'two'`의 값을 가진 `secondPromise`가 최초로 해결한다는 것을 의미해요. 이제 `res`는 `'two'`의 값을 유지하고 출력되요.

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

우선, 변수 `person`의 값을 `name`속성을 가진 객체로 선언해요.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

그 후, `members`라는 변수를 선언해요. 배열의 첫 번째 요소에 `person`변수의 값을 대입해요. 서로를 같게 설정하면 _참조_ 에 의해 상호작용해요. 어떤 변수에서 다른 변수로 참조를 할당하면, 그 참조의 _복사본_ 을 만들어요. (그들은 _같은_ 참조를 가지고 있지 않다는 것을 유의하세요!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

그리고, 변수 `person`를 `null`로 설정해요.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

배열의 첫 번째 요소는 객체에 대한 다른 (복사된) 참조를 가지고 있기 때문에, `person` 변수의 값만 변경하고, 배열의 첫번째 요소는 변경할 수 없어요. `members`의 첫 번째 요소는 여전히 원본 객체에 대한 참조를 유지하고 있어요. `members` 배열을 출력할 때, 첫 번째 요소는 여전히 객체의 값을 유지하고 있어 로그가 출력돼요.

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

`for-in` 루프를 사용하면, 객체 키를 통해서 반복할 수 있는데, 이경우에서는 `name` 그리고 `age`에요. 내부적으로, 객체 키는 문자열이에요 (심볼이 아니라면 말이죠). 모든 루프에서, `item`의 값은 반복되어 있는 현재의 키 값으로 설정해요. 우선, `item`은 `name`가 대입되어, 로그로 출력돼요. 그 후, `item`은 `age`가 대입되어, 로그로 출력돼요.

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

연산자 결합성은 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽으로 컴파일러가 표현식을 평가하는 순서가 되요. 이것은 연산자가 _같은_ 우선순위를 가진 경우에만 해당되요. 연산자의 종류는 한개뿐이에요: `+`. 게다가, 결합성은 왼쪽에서 오른쪽이에요.

처음으로 `3 + 4`가 평가되요. 결과는 숫자 `7`이에요.

`7 + '5'`의 결과는 강제성 때문에 `"75"`가 돼요. JavaScript는 숫자 `7`을 문자열로 변환하고, (자세한 내용은)질문 15를 보세요. `+` 연산자를 사용해서 두 개의 문자열을 연결할 수 있어요. `"7" + "5"`의 결과는 `"75"`이에요.

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

문자열의 첫 번째 숫자만 리턴돼요. _진법_ 에 근거하여 (파싱 하고자 하는 숫자의 기준을 명시하기 위한 두 번째 인수: 기본적인 10진수, 6진수, 8진수, 2진수 등), `parseInt`는 문자열 내의 문자가 타당한지 여부를 확인해요. 진수에 유효한 숫자가 아닌 문자를 만나면, 파싱을 멈추고, 다음 문자를 무시해요.

`*`은 유요한 숫자가 아니에요. `"7"`만 십진수의 `7`으로 파싱 돼요. 이제 `num`은 `7`의 값을 유지해요.

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

배열을 매핑할 때, `num`의 값은 헌재 순환하고 있는 요소예요. 이 경우, 요소는 숫자이기 때문에, if문의 조건 `typeof num === "number"`는 `true`를 리턴해요. map 합수는 새로운 배열을 만들고 함수에서 리턴된 값을 삽입해요.

그러나, 값을 리턴하지 않아요. 함수는 값을 리턴하지 않을 때, `undefined`을 리턴해요. 배열에서의 모든 요소에 대해 블록 함수가 호출되기 때문에, 각 요소에 대해 `undefined`을 리턴해요.

</p>
</details>

---

###### 51. 무엇이 출력 될까요?

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
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

인수들의 값이 객체가 아닌 한 _값_ 에 의해 전달되요. 그 후 _참조_ 에 의해 전달되요. `birthYear`는 객체가 아니라 문자열이기 때문에 값에 의해 전달되요. 값으로 전달하면 값의 _복사본_ 이 만들어 져요(질문 46을 보세요).

변수 `birthYear`는 `"1997"`값에 대한 참조를 가져요. 인수 `year` 또한 `"1997"`에 대한 참조를 가지지만, `birthYear`가 가진 참조값과는 달라요. `year`에 `"1997"`을 대입하여 `year`의 값을 업데이트할 때, `year`의 값만 업데이트해요. `birthYear`는 여전히 `"1997"`이에요.

`person`의 값은 객체예요. 인수 `member`는 _같은_ 객체의 (복사된) 참조값을 가져요. `member`객체의 속성이 갖는 참조를 변경하면, 두 개 모두 같은 객체를 참조 값을 가지고 있기 때문에, `person`의 값 또한 변경돼요. 이제 `person`'의 `name` 속성은 값 `"Lydia"`와 같아요.

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
    console.log("Oh no an error!", e);
  }
}

sayHi();
```

- A: `"It worked! Hello world!"`
- B: `"Oh no an error! undefined"`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error! Hello world!"`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

`throw`문을 사용해, 커스텀 에러를 만들 수 있어요. 이 표현식을 사용해, 예외를 던질 수 있어요. 예외는 <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>이 될 수 있어요. 이 경우, 예외는 `'Hello world'` 문자열이에요.

`catch` 문을 사용해, `try` 블록에서 예외가 던져졌을 경우에 어떻게 할지 명시할 수 있어요. 예외가 던져졌어요: 문자열 `'Hello world'`. `e`는 이제 문자열이고, 그것을 출력해요. 결과는 `'Oh an error: Hello world'`이에요.

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

속성을 리턴할 때, 속성 값은 생성자에 설정한 값이 아닌, _리턴된_ 값과 같아요. `"Maserati"` 문자열을 리턴하기 때문에, `myCar.make`는 `"Maserati"`에요.

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

그 후, 변수 `x`를 `10`인 `y`를 값으로 선언해요. `let`키워드로 선언된 변수는 _블록 스코프_ 로, 선언된 블록 내에서만 정의돼요: 이경우 즉시 호출 함수예요(IIFE). `typeof`연산자를 사용할 때, 피연산자 `x`는 정의되지 않았어요: 선언된 블록 밖에서 접근하려 했어요. 이것은 `x`가 선언되지 않음을 의미해요. 값을 할당하거나 선언하지 않은 변수는 `"undefined"` 형이에요. `console.log(typeof x)`는 `"undefined"`를 리턴해요.

그러나, `y`를 `10`으로 설정할 때 전역 변수 `y`를 만들었어요. 이 값은 코드 내 어디에서나 접근할 수 있어요. `y`는 정의되었고, `"number"`형의 값을 유지해요. `console.log(typeof y)`는 `"number"`을 리턴해요.

</p>
</details>
