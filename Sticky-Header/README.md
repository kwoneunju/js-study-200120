# Sticky Header
## Q.
1. 스크롤 시, 특정 위치에서 Header 고정
2. 스크롤 시, 해당 section에 맞는 메뉴 활성화
3. 메뉴 클릭 시, 해당 section으로 스크롤 이동

## A.
### [ 한글 코드 작성 ]
```
scroll:
  if(특정 위치 > scroll 위치) {
    header 고정 O
  } else {
    header 고정 X
  }
  if(각 section의 위치 > scroll 위치) {
    각 section의 인덱스와 동일한 메뉴 활성화 && 다른 메뉴 비활성화
  }

click:
  click한 메뉴 인덱스와 동일한 인덱스를 가진 section으로 스크롤 위치
  click 하지 않은 메뉴 비활성화 && click한 메뉴 활성화
```

### [ 실제 코드 작성 ] [code](https://github.com/kwoneunju/js-study-200120/blob/master/Sticky-Header/stickyHeader.js) / [view](https://kwoneunju.github.io/js-study-200120/Sticky-Header/stickyHeader.html)


<br>
<br>


# NOTE
#### 내장객체
* BOM(Browser Object Model, 브라우저 객체 모델)
* DOM(Document Object Model, 문서 객체 모델)
* Global JavaScript Object(전역 자바스크립트 객체)

<img src="../img/BOM.jpg" style="max-width:100%">

> ##### BOM(Browser Object Model, 브라우저 객체 모델)
  - 최상위 객체는 window
  - 현재 브라우저 창이나 탭을 표현하는 객체
  - 이 객체의 자식 객체들은 브라우저의 다른 기능들을 표현
    - Document: 현재 로드된 웹 페이지
    - History: 브라우저 히스토리에 기록된 웹 페이지들
    - Location: 현재 페이지의 URL
    - Navigator: 브라우저와 관련된 정보
    - Screen: 장치의 디스플레이 정보
  

> ##### DOM(Document Object Model, 문서 객체 모델)
  - 최상위 객체는 document
  - 현재 웹 페이지의 모델 생성 및 전체 페이지를 표현
  - 자식 객체로는 페이지의 다른 요소들을 표현하는 개체들이 사용


> ##### Global JavaScript Object(전역 자바스크립트 객체)
  - 어떤 특정 모델을 표현하지 않음
  - 자바스크립트 언어의 각기 다른 부분을 담당하는 관련 객체들의 집합
  - 전역 객체의 이름은 주로 대문자로 시작
  - 기본적인 데이터 타입 표현
    - String: 문자열
    - Number: 숫자
    - Boolean: 참/거짓
  - 실제 세계의 개념들을 다루기 위한 표현
    - Date: 날짜 표현 및 조작
    - Math: 숫자 값 및 숫자를 이용한 다양한 연산 수행
    - RegEx: 텍스트를 구성하는 문자열 내의 패턴 처리

<br>
* * *

#### load, ready, IIFE(Immediately Invoked Function Expressions), function

> ##### load
  - .load > .on() 메소드로 대체 됨
  - 페이지와 나머지 모든 리소스(image, css, script)가 로드된 이후에 발생
  - 스크립트가 반드시 로드되어야하는 리소스에 의존적일 때 사용
    - ex) 이미지 사이즈를 알아야 하는 경우
  - 모든 브라우저에서 동작
  - 메서드 내에 선언된 변수에 대한 함수 수준의 범위를 제공

```
$(window).on('load', function(){
  console.log('load');
});
```

> ##### ready
  - DOM이 로드되자 마자 실행 (== 리소스가 로딩될때까지 기다리지 않음)
  - 최신 브라우저들에서만 지원 (== 구버전의 브라우저에서는 load 이벤트가 발생할 때까지 기다림)

```
$(document).ready(function(){
    console.log('ready');
});
```

> ##### IIFE(Immediately Invoked Function Expressions)
  - 즉시 실행 함수
  - ready 대신 주로 사용
  - 사용 이유: 전역 스코프를 오염시키지 않기 위함
  - 아래의 2가지 방법이 널리 사용되어지며, 사용목적에 따라 선호하는 것으로 사용

```
// 방법 1
(function($){
  ...
}(jQuery));


// 방법 2
(function($){
  ...
})(jQuery);
```

> ##### function
  - 함수 선언문: 기본적인 함수 정의
  - 함수 표현식: 함수 선언문과 동일하나 함수명 생략 가능(== 익명함수)
  - 함수 표현식 조건
    - 함수를 할당 받을 변수 지정
    ```
    var funcTest = function(a) {return a;};
    funcTest(3);  // 3
    ```
    - 함수 즉시 호출
    ```
    var (function(a){return a;})(3);  // 3
    ```

#### 참고 사이트
* [웹 브라우저의 HTML문서 렌더링 과정 1](https://hahahoho5915.tistory.com/28)
* [웹 브라우저의 HTML문서 렌더링 과정 2](https://nesoy.github.io/articles/2017-05/Jquery-onready)
* [ready, load, IIFE](http://tcpschool.com/jquery/jq_basic_syntax)
* [IIFE](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-8-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%84%EC%88%98%EC%9A%94%EC%86%8C-IIFE-%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EA%B8%B0)
* [IIFE2](https://velog.io/@doondoony/javascript-iife)

<br>
* * *

#### 기본 문법
* 조건문
* 반복문
* 배열
* 객체

> ##### 조건문
  - 조건이 참일 경우 {} 안에 내용 실행
  - if / if...else / if...else if...else
    - **if**
    
    ```
    var a = true;

    if(a) {
      console.log('true');
    }
    ```
    
    - **if...else**
    
    ```
    var today = 'sunday';

    if(today == 'sunday' || today == 'saturday') {
      console.log('빈둥~ 빈둥~');
    } else {
      console.log('열일! 열일!');
    }
    ```
    
    - **if...else if...else**
    
    ```
    var today = 'friday';

    if(today == 'sunday' || today == 'saturday') {
      console.log('빈둥~ 빈둥 ~_~');
    } else if(today == 'friday') {
      console.log('불금 +ㅁ+!!!!!');
    } else {
      console.log('열일! 열일 `-`!');
    }
    ```
  
  - **삼항 연산자**
    - 표현식을 이용하여 if...else 문을 간략하게 표현하는 방법
    - 조건문 ? 참일 경우 리턴 값 : 거짓일 경우 리턴 값
    
    ```
    var condition = $(window).scrollTop() == 0,
        result;

    result = !condition ? header.addClass('scroll') : header.removeClass('scroll');
    ```

> ##### 반복문
  - for
    - for(초기값;조건식;증감식) { 반복 실행 코드 }
  
  ```
  for(var i = 0; i < 5; i++) {
    console.log(i); // 0 ~ 4까지 출력
  }
  ```
  
  - each
    - jQuery 메소드
    - 객체 집합에서 각 요소의 값을 가져오고자 할 때 or 각 요소에 연속된 동작을 수행하고자 할 때 사용
  
  ```
  /* 일반 메소드
    - index: index
    - item: selector
  */
  $('.content').each(function(index, item) {
    console.log('index: ', index, ', item: ', item);
  });


  /* 유틸리티 메소드 */
  var arr = [
      {title: 'daum', url: 'http://daum.net'},
      {title: 'google', url: 'http://google.com'}
    ],
    obj = {
      daum: 'http://daum.net',
      google: 'http://google.com'
    };
  
  /* 유틸리티 메소드(배열)
    - index: 배열의 index or 객체의 키
    - item: index or 키가 가진 값
  */
  $.each(arr, function(index, item){
    console.log(index + ' : ' + item.title + ', ', + item.url);
  });

  /* 유틸리티 메소드(객체)
    - index: 객체의 키
    - item: 키의 값
  */
  $.each(obj, function(index, item){
    console.log(index + ' : ' + item);
  });
  ```
  
  - 이 외 다른 반복문도 존재

> ##### 배열
  - 다수의 데이터를 저장하고 처리하는 경우에 사용
  - 선언 방법 3가지
  
  ```
  // 방법 1
  var arr = new Array();

  // 방법 2
  var arr2 = new Array('0', '1', '2');

  // 방법 3
  var arr3 = [];
  ```

> ##### 객체
  - 관련된 데이터와 함수의 집합
  - 선언 방법
  
  ```
  // 방법 1
  var order = new Object();
  order.food1 = 'chicken';
  order.food2 = 'bossam';

  // 방법 2
  var cart = {
    mask: 100,
    handwash: 2
  };
  ```

<br>
* * *

#### 자주 사용하는 메소드
  * width / height
  * offset() / position()
  * eq()
  * Event (scroll, click)

> ##### width / height
  - width(): 영역의 너비 리턴(바깥 여백, 테두리, 안쪽 여백 미포함)
    - innerWidth(): 안쪽 여백을 포함한 너비 리턴(바깥 여백, 테두리 미포함)
    - outerWidth(): 안쪽 여백, 테두리를 포함한 너비 리턴(바깥 여백 미포함)
    - outerWidth(true): 안쪽 여백, 테두리, 바깥 여백을 포함한 너비 리턴
  - height(): 형역의 높이 리턴(바깥 여백, 테두리, 안쪽 여백 미포함)
    - innerHeight(): 안쪽 여백을 포함한 높이 리턴(바깥 여백, 테두리 미포함)
    - outerHeight(): 안쪽 여백, 테두리를 포함한 높이 리턴(바깥 여백 미포함)
    - outerHeight(true): 안쪽 여백, 테두리, 바깥 여백을 포함한 높이 리턴

<img src="../img/dimension.jpg" alt="" style="max-width:100%;text-align:center;" />

> ##### offset / position
  - jquery 메소드
  - offset()
    - document 객체의 좌측 상단 모서리에서부터 요소까지의 좌표
  - position()
    - 상위 요소 중 기본 흐름 값을 가진 요소로부터 해당 요소까지의 좌표
    - 기본 흐름 값을 가진 상위 요소가 존재하지 않으면 offset() 메서드와 동일한 값 리턴
  - top / left
    - top: 문서나 상위 요소의 상단으로부터의 위치
    - left: 문서나 상위 요소의 좌측으로부터의 위치

> ##### eq
  - jquery 메소드
  - 필터링 메소드 중 하나
  - 인덱스 번호에 따라 해당하는 요소를 리턴
  - 첫번째 요소의 인덱스는 0
  - 인덱스 값이 음수이면 선택한 요소 집합의 맨 마지막 부터 반대로 검색

> ##### Event (scroll, click)
  - scroll
    - 스크롤시 발생하는 이벤트
    
    ```
    $(window).on('scroll', function() {
      console.log('scroll');
    });
    ```

  - click
    - 클릭시 발생하는 이벤트
    
    ```
    $('button').on('click', function() {
      console.log('click');
    });
    ```


##### 참고 사이트
* [요소의 크기](http://tcpschool.com/jquery/jq_elementDimension_size)
* [요소의 위치](http://tcpschool.com/jquery/jq_elementDimension_position)
* [요소의 크기&위치](https://webclub.tistory.com/107)
* [이벤트](http://tcpschool.com/jquery/jq_event_handling)
* [이벤트2](https://d2.naver.com/helloworld/1855209)
* [이벤트 핸들러](https://api.jquery.com/on/)
* [메소드 정리](https://turfrain.tistory.com/entry/1-jQuery-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%A0%95%EB%A6%AC)
