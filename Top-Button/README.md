# 객체
* 중괄호를 이용하여 정의

* 속성(property): 객체 내에서의 변수 > 객제에 대한 정보 제공
  * 문자열. 숫자, 불리언, 배열 or 다른 객체 가능
* 메서드(method): 객체 내에서의 함수 > 객체와 관련된 작업을 표현하기 위해 사용
  * 무조건 함수

* 속성과 메서드 모두 이름과 값을 가지며 이름을 key라고 부른다.
* 객체는 동일한 이름의 키를 중복해서 가질 수 없다. > 키를 통해 그에 해당하는 값에 접근하기 때문
* 각 속성과 메서드는 쉼표(,)로 구분

  ```
  var hotel = {
      /* 속성 */
      name: 'QQ',
      rooms: 30,
      booked: 20,

      /* 메서드 */
      checkAvailability: function() {
          return this.rooms - this.booled;
      }
  }
  ```

* 마침표 표기법을 이용하여 객체의 속성, 메서드에 접근 가능

  ```
  /* 마침표 표기법 */
  var hotelName = hotel.name,
      roomsFree = hotel.checkAvailability();
  ```

* 대괄호를 이용해도 속성에 접근 가능
 
  ```
  /* 대괄호 문법 */
  var hotelName2 = hotel['name'];
  ```

* 객체이름.속성 / 객체이름.메서드
* 생성자 문법 사용한 객체 생성

  ```
  var hotel = new Object();   // 축양형 > var hotel = {};

  hotel.name = 'QQ';
  hotel.rooms = 30;
  hotel.checkAvailability = fucntion () {
      return this.rooms = this.booked;
  }
  ```

* 객체 생성자 표기법을 이용한 객체 생성

  ```
  function Hotel(name, rooms, booked) {
      this.name = name;
      this.rooms = rooms;
      this. booked = booked;
      this.checkAvailability = function() {
          return this.rooms = this.booked;
      }
  }
  // 축약형 > 
  var hotel = {
      name: 'K',
      rooms: 30,
      booked: 20,
      checkAvailability: function() {
          return this.rooms = this.booed;
      }
  }

  var kHotel = new Hotel('K', 30, 20);
  ```
