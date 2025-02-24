let num;
console.log(num);
console.log(typeof num);
num = 10;
console.log(typeof num);
num = "test"
console.log(typeof num);
num = [];
console.log(typeof num);
num = { name: "test" };
console.log(typeof num);
num = 10.123;
console.log(typeof num);

// let 키워드 생략해도 오류 안뜸
age = 100;
console.log(age);
// constant => 상수 : 변하지 않는 수
const myName = "송명보";          // final String myName = "송명보";
console.log(myName);
myName = "호날두";
console.log(myName);


// 코드 러너 실행 ctrl + alt + n