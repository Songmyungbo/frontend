let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1,
  eat: function () {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// 1. 동물의 kind 가 개 인것을 찾아라

result = pets.filter(x => x.kind == '개');
console.log(result);

// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라
let array = pets.filter(x => x.kind != '고양이');
console.log(array);

// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나눠기
let avgAge = pets.reduce((cnt, val) => {
  return cnt + val.age;
}, 0)
console.log(avgAge / pets.length);

// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 

result = [...pets].sort((a, b) => a.age > b.age ? -1 : 1);
console.log(result);

// some, every

// some => 무조건 하나라도 그 값이 존재하면 즉시 종료 true
// some => 무조건 리턴이 true이면 반복문 중단

// 개가 있으면 true
let cnt = 0;
// 매번 요소마다 함수를 호출하기 때문에 반복문 중간에 멈출 수 없다 : 무조건 첨 - 배열요소 끝까지 간다다
res = pets.some(obj => {
  cnt++;
  if (obj.kind == '개') return true;
})
console.log(res);
console.log(cnt);

console.log("-----every-----");
// every => 무조건 리턴이 false 이면 반복문 중단단
cnt = 0;
res = pets.every(obj => {
  cnt++;
  return obj.kind == '개';
})
console.log(res);
console.log(cnt);

console.log("-----forEach-----");

cnt = 0;

pets.forEach(obj => {
  cnt += 1;
  if (obj.kind == '개') return true;
})

console.log(cnt);
