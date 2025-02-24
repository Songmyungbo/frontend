// let cat = {
//   kind: '고양이',
//   name: '나비',
//   age: 2,
//   printInfo: function () {
//     let str = ` kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`;
//     console.log(str);
//   }
// }
// let dog = {
//   kind: '개',
//   name: '아루',
//   age: 5,
//   printInfo: function () {
//     let str = ` kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`;
//     console.log(str);
//   }
// }
// let hamster = {
//   kind: '햄스터',
//   name: '모찌',
//   age: 2,
//   printInfo: function () {
//     let str = ` kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`;
//     console.log(str);
//   }
// }
// function printAllPets(){
//   let pets = [cat, dog, hamster];
//   pets.forEach(pet => console.log(pet));
// }
// 생성자 함수로 쓸거야
// 자바 => 모든것들이 클래스
// 자바스크립트 => 모든 것들이 함수
function Pet(kind, name, age) {
  this.kind = kind;
  this.name = name;
  this.age = age;
  this.printInfo = () => {
    let str = ` kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`;
    console.log(str);
  }

  // return this;

}

let cat = new Pet('고양이', '나비', 2);
let dog = new Pet('강아지', '아루', 5);
let hamster = new Pet('햄스터', '모찌', 0.2);

function printAllPets() {
  this.name = '익명';
  this.printTest = () => { console.log("test") };
  let pets = [cat, dog, hamster];
  pets.forEach(pet => console.log(pet));
  // this.printTest();
}

printAllPets();
// let print = new printAllPets;
// print.printTest();

