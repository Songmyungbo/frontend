// 비교연산자
// == != > < >= <=

let num = 10;
// console.log(num == 10);
// console.log(num != 10);
// console.log(num >= 10);
// console.log(num <= 10);
// console.log(num > 10);
// console.log(num < 10);

console.log('10' == 10); // 값만 비교를 한다
console.log('10' === 10); // 값 + 타입을 비교한다
console.log(true == 'true'); // boolean은 자동 형변환 하지 않아서 값 비교 안 함

let number = num += 10;
console.log(num);

let result = 1;
console.log(result);
result = number++;
console.log(`result = ${result} , number = ${number}`);
result = number--;
console.log(`result = ${result} , number = ${number}`);
result = ++number;
console.log(`result = ${result} , number = ${number}`);
result = --number;
console.log(`result = ${result} , number = ${number}`);

result = result %= 2;
console.log(result);
console.log("============================")
number = '10';
console.log(number + 10); // 1010

// 자동형변환
// + => 1) 덧셈 연산자 2) 연결 연산자 3) + 부호

// 부호 + 문자열 ==> 자동 숫자 변환
console.log(+number + 10); // 20

console.log(number * 1 + 10);

console.log(10 + '' + 10);

console.log(typeof 10);
console.log(typeof (10 + ''));
let num1 = 10;
console.log(num1.toString()) // 명시적 형변환

let num2 = 10 + ''; // 묵시적 형변환

let str1 = '10';
let num3 = str1 * 1; // 묵시적 형변환
let num4 = +str1; // 묵시적 형변환
let num5 = parseInt(str1); // 명시적 형변환

const day = 3;
let strDay = '';

switch (day) {
  case 0: strDay = "일요일"; break;
  case 1: strDay = "월요일"; break;
  case 2: strDay = "화요일"; break;
  case 3: strDay = "수요일"; break;
  case 4: strDay = "목요일"; break;
  case 5: strDay = "금요일"; break;
  default: strDay = "토요일";
}
console.log(day);
console.log(strDay);

// 단축평가 : || => 하나라도 참이면 참 => 한개가 참이면 나머지 비교 x 건너뛴다다
//         : && => 하나라도 거짓이면 거짓 => 한개가 거짓이면 나머지 비교 x 건너뛴다

// 멈춘 시점에 있는 값만 출력하낟
console.log(true || '송명보');
console.log(false || '송명보');

console.log(true && '송명보');
console.log(false && '송명보');

console.log(true && false && '박연미');
console.log(true || false || '박연미');

console.log("==============")
console.log("" && "cat");
console.log("==============")
console.log("" || "cat");
console.log("cat" && 0);
console.log("cat" || {});