# (고급) JavaScript 질문 목록

저는 매일 [Instagram] (https://www.instagram.com/theavocoder)에 여러 개의 객관식 JavaScript 질문을 게시하며 이곳에 또한 게시하겠습니다!

기본에서부터 고급까지: JavaScript를 얼마나 잘 알고 있는지, 기존의 지식을 재확인하거나 코딩 인터뷰를 준비 할 수 있는지 테스트하십시오. :muscle: :rocket: 매주 새로운 질문으로 이 저장소를 업데이트 합니다. 마지막 업데이트: <b>6월 21일</b>

정답은 질문 아래에 있는 정답 버튼을 간단히 클릭하여 확인할 수 있습니다. 행운을 빕니다 :heart:

---

###### 1. 결과는 무엇입니까?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` 와 `undefined`
- B: `Lydia` 와 `ReferenceError`
- C: `ReferenceError` 와 `21`
- D: `undefined` 와 `ReferenceError`

<details><summary><b>정답</b></summary>
<p>

#### 정답: D

이 함수 내에서 우리는 먼저 `name` 변수를 `var` 키워드로 선언합니다. 이것은 변수가 정의 된 행에 실제로 도달 할 때까지 변수가 기본 설정 값인 `undefined` 로 게양(메모리 공간이 생성 단계에서 설정 됨)된다는 것을 의미합니다. `name` 변수를 로깅하려고 시도한 행에 변수를 아직 정의하지 않았으므로 `undefined` 값을 유지합니다.

`let` 키워드 (및 `const`)를 가진 변수는 게양되지만 `var` 와는 달리 <i>초기화되지 않기 때문에</i> 우리가 선언 (초기화)하기 전에는 액세스 할 수 없습니다. 이것을 "일시적 데드 존" 이라고 부릅니다. 변수가 선언되기 전에 변수에 액세스하려고하면 JavaScript가 'ReferenceError'를 발생시킵니다.

</p>
</details>