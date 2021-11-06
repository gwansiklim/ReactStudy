// js에서의 class
class Cat {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

let cat = new Cat("gwan");

cat.showName();

// Cat class를 자식 상속 하는 방법

class My_Cat extends Cat {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    showName() {
        console.log(this.name + "입니다.")
    }
    showAge() {
        console.log(this.age);
    }
}

let mycat = new My_Cat("gwansik", 30);

mycat.showAge();
mycat.showName();