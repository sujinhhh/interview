//  배열에만 쓸수있는 api
// forEach, reverse

// 배열 일때 안에꺼 뽑아내려면 map, forEach, 요런거 써야함
// filter : array로 리턴함

// 오브젝트  배열을 string으로 => 일단 map 으로 돌려서 원하는 것을 빼고, join 아님 ...

let names = ["h", "j", "5", "4"];

// 배열에서 한개씩 빼내기

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// name.forEach((a) => console.log(a));

// for of  *************

// const print = document.querySelector(".h1");
// let a = "";

// for (let i of names) {
//   a += i;
// }
// print.innerHTML += `<h1>${a} ''</h1>`;

// forEach  *************

// names.forEach((item) => {
//   print.innerHTML += `<h1>${item} </h1>`;
// });

// 비슷한 애들 모음

// = 반복된 애들 빼고 새로운 오브젝트 반환
// const iterable = new Set([1, 1, 2, 2, 3, 3]);
// console.log(iterable);

// Eg) 새로운 배열만들기
const arr = [3, 2, 2, 6, 6, 7, 8, 0];
console.log([...new Set(arr)]);

// for 를 이용해서 함 만들어 보았음
// let result = []
// for(let i = 0; i<arr.length; i++) {
//   if(arr[i] !== arr[i-1] ){
//     result.push(arr[i])
//   }
// }
// console.log(result)

// = 두개를 묶어서 새로운 오브젝트 만들어줌 / 둘다 같은 결과

// const a =  Object.assign(item,detail)
// 혹은
// const b = {...item, ...detail}

// 뒤에 또 추가할 수있음
//  const b = {...item, ...detail, job:'programmer'}

// = 두개를 묶어서 새로운 배열 만들어줌 / 둘다 같은 결과
// const a =  fruit.concat(item)
// 혹은
// const b = […item, …fruit]

// = 삼항연산

// Const nullish = A ?? B
// // 변수 값이 있을때 A 출력, undefine 이나 null 일때 B출력

// const literal= A || B
// // 값이 falsey (null, undefine, 0, -0, ‘ ‘,  NaN ) B 출력

// Function  default( parmeter = A  ) {
// Parameter 값이 undefine 일때만 A 출력
// }

// = 앞에 추가

// fruit.unshift(‘a’)

// Fruit = [ ‘a’, …fruit ]

// = 앞에 삭제  ,, shift, unshift 느림

names.shift();

// = 뒤에 추가

names.push("a");
names = [...names, "sujin"];

console.log(names);

//  = 뒤에 삭제
names.pop();
console.log(names);

// splice( ,)
// 삭제, 대체, 몇개까지 삭제 하고 싶은지

// const b = names.splice(1, 2, "😤", "😱");
// console.log(b);

// console.log(names);

// // = 글자를 하나하나 떼어줌

// const a = "foo";

// // console.log(Array.from(a));

// console.log(a.split(""));

// Array from 은 따로 떼네서 먼가 할수 있음 (string으로 바꾸어야 나옴)

// console.log(Array.from(a,(aPlusSomthing) => aPlusSomthing + "love"));

// new String(변수이름) = 오브젝트 만들어줌
// let makeObject = new String(name)

// = 정수만들기

console.log(parseInt(9.4));

console.log(Math.trunc(1.724));
// -> 소수점 빼기

// True , false 확인
// const highscores = students.some((student) => student.score > 90);
// const scores = students.every((student) => student.score > 20);

// // Array => string 만들기
const bd = toString(0);
console.log(typeof bd);
// map().join()  'or' toString()

// // string 으로 배열만들기

// 'string'.split('')

// //  배열만들기

// function multiply(){
//   console.log([...arguments]);

//   }
//   multiply(2,4,5,6,6)

//   // ***  화살함수는 argments 안되서 파라미터에 넣어 주어야 함
const multiply2 = (...args) => {
  console.log(args);
};
multiply2(2, 4, 5, 6, 6);

// // length, push : 더해서 길이가 나옴

const a = [1, 2];
const b = [1, 1, 0, 0, 4, 0, 5, 6, 7, 0, 9];
// console.log(a.push(...b));

// //  returns simple yes or no

// some()
// every()
console.log(a.includes(1));

// // false : 0, '', undefined, null, -1
// // 있으면 인덱스 값 출력, 없으면 -1,

console.log(a.indexOf(1));

// // string으로 반환
// const multiply2 = (num) => {
//   return [...(num + "")];
// };
// console.log(multiply2(26));

// // string 만들기 2
console.log();
a.join();

// // string 만들기 3
// String(num)

// //  Array 를 자름

// let grades = [7,1,5,3,6,4]

// grades.length = 3

// grades.splice(0,1)
