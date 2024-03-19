// // const title_1=document.getElementById('title')
// const title = document.getElementByClassName('title_class');
// // console.log(title_1);
// console.log(title);
const title_2 = document.getElementById('title');
console.log(title_2)

const title = document.getElementsByClassName('title_class');
console.log(title)

const title_3 = document.getElementsByTagName('h2');
console.log(title_3);

const title_4 = document.querySelector('h2');
console.log(title_4)

const title_5 = document.querySelector('#title');
console.log(title_5)

const title_6 = document.querySelectorAll('.title_class');
console.log(title_6);

title.innerText = '안녕하세요!'
