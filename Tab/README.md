# TAB

> ## 시작 전, 짚어보기
### Sticky Header 기능 구현 시, 메뉴 클릭했을 때 깜빡거리던 이유?
1. 클릭 시, 클릭 동작과 스크롤이 움직이는 동작, 총 2개의 이베트가 발생.
2. 원인: 클릭 이벤트와 스크롤 이벤트에서 작성한 코드가 각각 실행 (== 두번 기능이 동작)
3. 해결: 이벤트 실행 시 전파를 막아주는 속성을 사용하여 전파를 막아주거나 조건을 걸어 참일 경우에만 실행이 되도록 수정
4. 코드 실행순서
    1_클릭 > 2_클릭 이벤트 발생 > 3_클릭함수 내 코드 실행 > 4_스크롤 발생 > 5_스크롤 함수 내 코드 실행 (여기에 setTimeout이 필요)

<br>

* * *
<br>

## Q.
1. 동일 Page에 tab이 1개 이상 (구조1: tab 버튼과 tab content가 형제로 있지 않은 구조)
2. 동일 Page에 tab이 1개 이상 (구조2: tab 버튼과 tab content가 형제로 있는 구조)
3. 동일 Page에 tab이 2개 이상 (구조1)

## A.
### [ 한글 코드 작성 ]
```
click:
  click한 tab 버튼 활성화 & 그 외 tab 버튼 비활성화
  click한 tab의 content 활성화 & 그 외 tab content 비활성화
```

### [ 실제 코드 작성 ] [code](https://github.com/kwoneunju/js-study-200120/blob/master/Tab/tab_200608.js) / [view](https://kwoneunju.github.io/js-study-200120/Tab/tab.html)


<br>
<br>


# NOTE
#### 함수 (Function)
* 함수 선언문 (Function Statements)
* 함수 표현식 (Function Expressions)

> ##### 함수 선언문
  - 함수 선언문 = 함수 리터럴
  - 함수 이름 명시 필수
  - 함수 이름으로 호출
```
// 함수 호출
todayIs();

// 함수 선언
function todayIs() {
  console.log('today is very hot.');
}
```


> ##### 함수 표현식
  - 값을 반환하는 식 or 코드
  - 변수에 할당하는 방법
  - 변수명 != 함수명
    - 함수는 익명 함수이며, 함수 변수명으로 호출 가능
```
var sayHello = function() {
  console.log('Hello?');
}
```

##### 참고 사이트
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98)

<br>
* * *

#### 스코프(scope)
  - 변수가 영향을 미치는 범위 or 변수의 유효 범위
```
var a = 1;
function scope1() {
  a = 10;
  console.log(a); // 10
}
scope1();
console.log(a); // 10


var b = 1;         // 전역변수 b
function scope2() {
  var b = 10;      // scope2 함수 내에서만 유효한 변수 b
  console.log(b);  // 10
}
scope2();
console.log(b);  // 1
```

> 블록 스코프 & 함수 스코프
  - 블록 스코프: 중괄호({})로 감싸진 범위
    * if, for, function의 블록 {}
    * let, const 변수는 블록 스코프내에서 유효
  - 함수 스코프: function의 블록 범위를 갖는 스코프
    * var 변수는 함수 스코프 내에서 유효
```
// 블록 스코프
if(true) {
  var var1 = 'block';
  let var2 = 'block2';
  const var3 = 'block3';
  console.log('var1: ' + var1 + ', var2: ' + var2 + ', var3: ' + var3);
}
for(var i = 0; i < 2; i++) {
  var var1 = 'block';
  let var2 = 'block2';
  const var3 = 'block3';
  console.log('var1: ' + var1 + ', var2: ' + var2 + ', var3: ' + var3);
}

// 블록 스코프 & 함수 스코프
function func() {
  var var1 = 'block';
  let var2 = 'block2';
  const var3 = 'block3';
  console.log('var1: ' + var1 + ', var2: ' + var2 + ', var3: ' + var3);
}
```

##### 참고 사이트
* [스코프](https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84scope)
* [스코프2](https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98%EC%99%80-%EC%8A%A4%EC%BD%94%ED%94%84%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84)
