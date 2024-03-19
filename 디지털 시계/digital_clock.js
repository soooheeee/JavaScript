const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

// const now = new Date(); // new Date() js에서 현재 날짜와 시간을 나타내는 Date 객체를 생성하는 방법 중 하나
// console.log(Date());
// console.log(now);

// hour.innerText = now.getHours();
// min.innerText = now.getMinutes();
// sec.innerText = now.getSeconds();

function clock() {
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();

    console.log(now);
}


setInterval(clock,1000); // 1초 단위로 반복