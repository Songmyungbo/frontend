// 산술연산자
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);      // 자바 정수 / 정수 => 정수 : 자바스크립트 전부 number type( double ) 3.33335 
console.log(10 % 3);

console.log(10 ** 3);     // 거듭제곱 10*10*10
console.log(Math.pow(10, 3));

console.log(2 - "test"); // NaN => not a number
console.log(10 / 0); // Infinity


// 자바스크립트는 "", '' 둘다 겸용으로 사용 가능하다다
let intro = '송명보 \n 입니다';
console.log(intro);
intro = "'송명보' 입니다";
console.log(intro);
intro = '"송명보" 입니다';
console.log(intro);

// `` => 스트링 템플렛 (백틱 : 숫자 1옆에 있는 특수문자) => 외부값을 ${변수이름} 으로 넣어줄 수 있다
const myName = "송명보";
const job = "학생";
intro = `저는 ${myName} 입니다 \n 직업은 ${job}입니다`;

let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);
console.log(!!!isDead);

//truesy valse

//falesy valse
// 숫자 0 , false, 빈문자열, null, undefined

console.log(!!'0');
console.log(!!true);
console.log(!!'test');
console.log(!![]);    // new Array()
console.log(!!{});    // new Object() 
console.log(!!10.123);

let cat = null;   // 비어있다는 표시 null 표시하기!! => 비어있는 주소값 나 나중에 쓸거야.

// symbol : 유일무이한 값
const num1 = '1';
const num2 = '1';
console.log(num1 == num2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2);

// 리터럴 객체 => 오브젝트 타입
// 키 : value
let dog = {
  "name": "바둑이",
  age: 3,
  ownerName: "키티"
};
const hamster = {
  name: "푸딩",
  age: 0.3
};

// 객체 안에 속성 값 추가하기

console.log(dog);
console.log(hamster);
dog.like = ["개껌", "뼈다귀"];
hamster["like"] = ["개껌", "뼈다귀"];
console.log(dog);
console.log(hamster);

// 객체안에 속성 값 삭제하기

dog.ower = "제임스";
console.log(dog);

delete dog.ower;
delete dog['age'];
console.log(dog);

// 객체타입 ['속성이름'] 값 접근하는 이유

function getKeyValue1(obj, key) {
  return obj.key;   // 순수하게 obj 값에 "key" 라는 속성값을 찾는것 : 동적으로 값을 못 바꿈
}
function getKeyValue2(obj, key) {
  return obj[key];  // key 라고하는 변수에 값으로 접근한다
}

console.log(getKeyValue1(dog, "name"));
console.log(getKeyValue2(dog, "name"));
