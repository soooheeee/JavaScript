
// 1) 2021년 현재 YYYY년에 태어난 사람의 나이는 age세 입니다.
// var currentYear = 2021;
// var birthYear;
// var age;

// birthYear = prompt("태어난 연도를 입력하세요.");
// age = currentYear - birthYear +1;
// document.write(currentYear+"년 현재<br>");
// document.write(birthYear+"년에 태어난 사람의 나이는" + age+"세입니다.")

// console.log(new Date());

// 2) 3의 배수 확인하기1
// var userNumber = prompt("숫자를 입력하세요.");

// if (userNumber !== ''){
//     // if (userNumber % 3 === 0)
//     //     alert("3의 배수입니다.");
//     // else
//     //     alert("3의 배수가 아닙니다.");
//     (userNumber % 3 ===0) ? alert('3의 배수입니다.') : alert('3의 배수가 아닙니다.');
// }
// else
//     alert('입력이 취소됐습니다.');

// 3) switch 문으로 조건 체크하기

// var number = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

// switch(session) {
//     case 
// }

// 4) while 문으로 팩토리얼 만들기

// var n =prompt("숫자를 입력하세요.");
// var msg = "";

// if (n != null ){
//     var nFact = 1;
//     var i =1;
//     while(i<=n) {
//         nFact *=i;
//         i++;
//     }
//     msg = n+"!="+nFact;
// }
// else 
//     msg = "값을 입력하지 않았습니다.";
// document.write(msg);

// 5) 짝수끼리 더하기

// var sum=0;
// var i;

// for (i = 0; i <= 10; i++){
//     if ( i % 2 === 0 ){
//         sum+=i;
//         document.write(i,'------',sum,"</br>")
//     }
// }

// 6) 자리 배치도

// var n;

// n = prompt('입장객은 몇 명인가요?');

// for ( var i = 0; i < n; i++){
//     if (i % 5 === 0 ){
//         document.write("</br>")
//     }
//     document.write("좌석 ",i+1," ")
// }
// console.log(n);

// var cnt=1

// function add(){
//     let cnt_2 =1
//     console.log(cnt_2)
//     console.log(cnt)
// }

// add()
// // console.log(cnt_2)

// let obj = {
//     name:'홍길동',
//     age:21
// };
// console.log(obj)
// console.log(obj.name);
// console.log(obj['name'])

// let object;
// let a =new object();
// console.log(object)

// const arr = [1,2,3,4]

// arr.push(6);
// arr.push(7,8);
// arr.pop();

// console.log(arr);

// function print(number,index) {
//     console.log
// }

// let array = ['Apple', 'Banana', 'Cherry'];
// array.forEach(element => {
//   console.log(element);
// });\
// let obj = { a: 1, b: 2, c: 3 };

// Object.keys(obj).forEach(key => {
//   console.log(`키: ${key}, 값: ${obj[key]}`);
// });

var now = new Date("2020-10-15");
var firstDay = new Date("2020-10-01");

console.log(now)

var toNow = now.getTime();
console.log(toNow)
// var toFirst = first