const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');
// const history = document.querySelector('.total_result');
const ul = document.querySelector('ul');
const total_button = document.querySelector('.total-delete');


const total_result = [];

const result = ['가위','바위','보'];

const history = () => {
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.innerText = total_result[total_result.length-1];
    button.innerText = '삭제';
    button.addEventListener('click',delItem)
    
    ul.appendChild(li);
    li.appendChild(button);
}
const delItem = (event) => {
    const target = event.target.parentElement;
    console.log(total_result)
    target.remove(alert('기록을 삭제하였습니다.'));

}

const show = (user,computer,result) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
}




// buttons.forEach((button)=> {
//     button.addEventListener('click',(e)=> {
//         console.log(e.target.innerText);
            // console.log(event)
//     })
// })
const game = (user,computer) => {

    let message;

    // console.log(user,computer)
    if(user ===  computer) {
        message = '무승부'
        console.log('무승부')
        total_result.push(message)
    } 
    
    else if (user !== computer && user !== '전체 삭제'){
        // eslint-disable-next-line default-case
        switch (user+ computer) {
            case '가위보':
            case '바위가위':
            case '보바위':
                message = '사용자 승리';
                total_result.push(message)
                // console.log('사용자 승리!');
                break;
            case '가위바위':
            case '바위보':
            case '보가위':
                message = '컴퓨터 승리!'
                total_result.push(message)
                // console.log('컴퓨터 승리!');
                break;
        }
    }
    else {
        message = '기록없음';
    }

    show(user,computer,message);
}

const total = () => {
    total_result.length = 0; // 배열 비우기
    ul.innerHTML = ''; // ul 태그 내의 모든 항목을 삭제하여 화면에서 기록을 지움
    alert('전체 기록이 삭제되었습니다.');
 }
const play = (event) => {

    const user = event.target.innerText;
    const randomIndex = Math.floor(Math.random()*3); // 0~2까지의 난수 생성
    const computer = result[randomIndex]; // 컴퓨터가 내는 값 = 생성한 난수
    total_button.addEventListener('click', total);
    game(user,computer)
    history() 

    // console.log(event.target.innerText);
}

buttons.forEach((button) => { 
    button.addEventListener('click',play);
}) 

// Math.random() // 난수 생성하기 