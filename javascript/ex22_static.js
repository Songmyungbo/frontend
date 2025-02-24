class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id; //  자바로 치면 멤버 변수
    this.name = name;
    // this.count += 1; 객체 생성 후에 객체 주소로 접근 => static 변수는 이렇게 접근 불가능
    Student.count += 1;
  }
  printInfo = () => { // 자바로 치면 메서드 
    console.log(`id : ${this.id} \t name : ${this.name}`);
  }

  getTotalStudent = () => {
    console.log(`총 학생은 ${Student.count}명입니다`);
  }
}
const stu1 = new Student("111111", 'park');
const stu2 = new Student("222222", 'kim');
const stu3 = new Student("333333", 'lee');


const stuList = [stu1, stu2, stu3];

stuList.forEach(stu => stu.printInfo());

stu1.getTotalStudent();

console.log(stu1.id);
