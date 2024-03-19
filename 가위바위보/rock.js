const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');


const result = ['가위','바위','보'];

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
        console.log('무승부')
    } else {
        // eslint-disable-next-line default-case
        switch (user+ computer) {
            case '가위보':
            case '바위가위':
            case '보바위':
                message = '사용자 승리';
                // console.log('사용자 승리!');
                break;
            case '가위바위':
            case '바위보':
            case '보가위':
                message = '컴퓨터 승리!'
                // console.log('컴퓨터 승리!');
                break;
        }
    }

    show(user,computer,message);
}

const play = (event) => {

    const user = event.target.innerText;
    const randomIndex = Math.floor(Math.random()*3); // 0~2까지의 난수 생성
    const computer = result[randomIndex]; // 컴퓨터가 내는 값 = 생성한 난수
    game(user,computer)
    // console.log(event.target.innerText);
}

buttons.forEach((button) => { 
    button.addEventListener('click',play);
}) 

// Math.random() // 난수 생성하기 