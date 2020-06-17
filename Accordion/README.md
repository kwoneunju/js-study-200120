# Accordion
## Q.
1. 선택된 accordion 활성/비활성화
2. 선택된 accordion 하나만 활성화

## A.
### [ 한글 코드 작성 ]
```
click:
  // 여러개 활성화 가능
  if(click한 accordion 활성화) {
    click한 accordion 비활성화
  } else {
    click한 accordion 활성화
  }

  // 하나만 활성화 가능
  if(click한 accordion 활성화) {
    click한 accordion 비활성화
  } else {
    click한 accordion 활성화
    그 외 accordion 비활성화
  }
```

### [ 실제 코드 작성 ] [code](https://github.com/kwoneunju/js-study-200120/blob/master/Accordion/accordion_200615.js) / [view](https://kwoneunju.github.io/js-study-200120/Accordion/accordion.html)


<br>
<br>


# NOTE
#### 호이스팅(hoisting)
  - 함수 안에 있는 선언들을 모두 끌어올려 해당 함수 유효 범위의 최상단에 선언
    * 자바스크립트 엔진이 js 파일을 읽으면서 선언된 변수와 함수를 메모리에 저장 (기억)
    * 위에서 아래로 차례대로 실행
  - 호이스팅 대상: var 변수 선언, 함수 선언문
    - 변수에 할당된 값이나 함수 표현식은 끌어 올려지지 않기 때문에 이 때는 변수의 스코프 규칙을 그대로 따름<br>
  
   ```
   // 함수 호출
   todayIs();    // today is happy!
   tomorrowIs(); // Uncaught ReferenceError: tomorrowIs is not defined

   // 함수 선언(함수 선언문)
   function todayIs() {
     console.log('today is happy!');
   }

   // 함수 선언(함수 표현식)
   var tommorowIs = function() {
     console.log('tomorrow will be happy');
   };

   console.log(happy); // undefined
   console.log(sad);   // Uncaught ReferenceError: Cannot access 'sad' before initialization
   console.log(soso);  // Uncaught ReferenceError: Cannot access 'soso' before initialization

   var happy = 'happy';
   let sad = 'sad';
   const soso = 'soso';
   ```

##### 참고 사이트
* [MDN](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
* [호이스팅(Hoisting)](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)

<br>
* * *

#### 클로저
- 함수 안에서 선언된 내부함수<br>

  ```
  function outer() {
    var color = 'yellow';
    function inner() {
      console.log(color);
    }
    return inner;
  }

  var innerFunc = outer();
  innerFunc();
  ```

##### 참고 사이트
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
* [클로저](https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%81%B4%EB%A1%9C%EC%A0%80Closure)
