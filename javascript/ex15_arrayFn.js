// 고차함수 => 콜백 함수를 사용한다
// 콜백함수는 화살표함수로 많이 쓴다

let array = [3, 5, 8, 6, 7, 11, 15, 14, 23];

// 문제 1 ) 짝수만 출력
// function jjack(n) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
// }
// array.forEach(jjack);
array.forEach(n => {
  if (n % 2 == 0)
    console.log(n)
});

// map() => 데이터를 받아서 새로운 값 가공

let result = array.map(x => x * 10);
console.log(array);
console.log(result);

// filter : 조건식이 true 에만 실행

result = array.filter(val => val % 2 == 0);
console.log(result);

//find
result = array.find(val => val > 10);
console.log(result);

result = array.findIndex(val => val > 10);
console.log(result);

//reduce() =>  줄이다.. : 배열 => 한개의 값 : 총합, 갯수

result = array.reduce((p, n) => {
  console.log(`누적값 ${p} 현재값 ${n}`);
  return p + n;
}, 0)
console.log(result);

// 홀수의 갯수를 리턴
result = array.reduce((cnt, val) => {
  if (val % 2 == 0) return cnt;
  else {
    return cnt += 1;
  }
}, 0)
console.log("홀수의 갯수 = " + result);

