[Date: 20.01.22]

# NOTE

1. 시작 전, 짚어보기
2. Function

<br>

***

<br>

?? 함수만 할것인가? 객체도 같이 할것인가?
?? 즉시 실행함수를 하려면 객체와 함수 중 어떤 것을 더 먼저 알아야 할까?
?? 객체는 무엇일까??
?? 함수는 무엇일까?
?? 함수 리터럴과 함수 표현법의 차이는 무엇?
?? 함수에서의 this는 왜 window인 것인가,
== 전역변수에 선언한 변수를 함수안에서 다시 선언하여 값을 저장하게 되면 그 변수는 전역에 선언한 변수에 값이 저장이 된다. 즉 덮어씌우기가 되는데, 함수에서는 객체이고, scope가 적용이 되어 this를 사용
?? 호이스팅은 무엇인가?
?? 클로져는 또 무엇??
?? 함수에서의 범위는 어디까지??
?? 표현법을 사용해서 즉시 실행함수를 쓴다면? 뭐가 좋을까? 예시?

?? 배열을 슥 한번 간단하게 할것인가...?
<br>

## 0. 시작 전, 짚어보기
### Sticky Header 기능 구현 시, 메뉴 클릭했을 때 깜빡거리던 이유?
1. 클릭 시, 클릭 동작과 스크롤이 움직이는 동작, 총 2개의 이베트가 발생.
2. 원인: 클릭 이벤트와 스크롤 이벤트에서 작성한 코드가 각각 실행 (== 두번 기능이 동작)
3. 해결: 이벤트 실행 시 전파를 막아주는 속성을 사용하여 전파를 막아주거나 조건을 걸어 참일 경우에만 실행이 되도록 수정
4. 코드 실행순서
    1_클릭 > 2_클릭 이벤트 발생 > 3_클릭함수 내 코드 실행 > 4_스크롤 발생 > 5_스크롤 함수 내 코드 실행 (여기에 setTimeout이 필요)

<br>

## 1. Function
### 함수란?
### 스코프
### 호이스팅
### 클로저
### 함수 리터럴 / 함수 표현식의 차이

<br>

***

<br>

## 이렇게 바꿔서 작성, 앞으로 작성할 때도 이렇게.
```
var sample = function() {
    var imSample = "I'm Sample.";

    function sampleFunc() {
        console.log("I'm Sample Function");
    }
};
```

<br>

***

<br>

## [참고하면 좋은 자료]
* [함수 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98)
* [스코프](https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84scope) / [스코프2](https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98%EC%99%80-%EC%8A%A4%EC%BD%94%ED%94%84%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84)
* [호이스팅](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)
* [클로저](https://hyunseob.github.io/2016/08/30/javascript-closure/)
* [함수선언문과 함수표현식](https://gmlwjd9405.github.io/2019/04/20/function-declaration-vs-function-expression.html)

