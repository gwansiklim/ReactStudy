// js에서의 class
class Cat {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

let cat = new Cat("gwan"); //new는 새로운 Cat을 만들 것이어서 new라는 키워드를 넣었다.

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


// Array함수의 map - 요소에 맞는 똑같은 갯수의 배열을 가져온다. 즉, 변수에 선언된 배열을 그대로 가져온다.
const array_num = [0, 1, 2, 3, 4, 5]; //변수 선언

const array_number = array_num.map((array_item) => { //array_num이라는 변수에 map을 씌운다. (map은 변수에 선언된 배열들을 전부 불러오는 것)
    console.log(array_item); // array_item의 배열들이 잘 들어오는지 확인
    return array_item + 1;
})
console.log(array_number);


// Array함수의 fillter- 어떤 조건을 만족하는 항목들만 골라서 새로운 배열을 만들어준다. (조건에 맞는 요소들만 가져온다.)
const new_array = [0, 1, 2, 3, 4, 5]; //변수 선언

const new_array_number = new_array.filter((array_item) => {
    return array_item > 3;
})
console.log(new_array_number);

// Array함수의 concat - 서로 다른 배열을 합쳐준다. 대신 중복제거는 하지 않는다.
const merge = array_num.concat(new_array_number);
console.log(merge);

