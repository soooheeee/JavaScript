const rock = document.querySelector('.blue');
const scissors = document.querySelector('.pink');
const paper = document.querySelector('.green');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');
const totalDeleteButton = document.querySelector('.totalDelete');
const ul = document.querySelector('ul');

const total_result = [];
const result = ['가위','바위','보'];

console.log(rock)
console.log(scissors)
console.log(paper)
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

    let total_results = {
        id: Date.now(),
        text : message
    }

    // console.log(user,computer)
    if(user ===  computer) {
        console.log('무승부')
        message = '무승부!';
        total_results.text = message;
        total_result.push(total_results);

    } else {
        // eslint-disable-next-line default-case
        switch (user+ computer) {
            case '가위보':
            case '바위가위':
            case '보바위':
                message = '사용자 승리!';
               total_results.text = message;
                total_result.push(total_results);
                // console.log('사용자 승리!');
                break;
            case '가위바위':
            case '바위보':
            case '보가위':
                message = '컴퓨터 승리!'
                total_results.text = message;
                total_result.push(total_results);
                // console.log('컴퓨터 승리!');
                break; 
        }
    }

    show(user,computer,message);
    // console.log(`기록:`,total_result);
}

const play = (event) => {

    const user = event.target.innerText;
    const randomIndex = Math.floor(Math.random()*3); // 0~2까지의 난수 생성
    const computer = result[randomIndex]; // 컴퓨터가 내는 값 = 생성한 난수
    
    console.log('나');
    game(user,computer)
    // console.log(event.target.innerText);
    history();
}

// buttons.forEach((button) => { 
//     button.addEventListener('click',play);

// }) 
// console.log(buttons)

// Math.random() // 난수 생성하기 

const history = () => {
    const li = document.createElement('li');
    const span =document.createElement('span');
    const deleteButton = document.createElement('button');
    
    const lastHistory = total_result[total_result.length-1]
    const message = lastHistory.text;

    span.innerText =  message;
    deleteButton.innerText = '삭제';

    console.log(li)

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click',deleteItem);

    console.log(total_result.id)
    console.log(total_result)
}

const deleteItem = (event) => {
    // console.log('안녕');
    // console.log(event.target.appendChild)
    const target = event.target.parentElement;
    target.remove();
    total_result.pop();
    console.log(`배열 요소:`,total_result)
    // li.remove.appendChild()

}

totalDeleteButton.addEventListener('click', () => {
    ul.innerHTML = ''; // Clear the list in the UI
    total_result.length = 0; // Clear the total_result array
    console.log('전체 기록 삭제됨');
});

scissors.addEventListener('click',play);
rock.addEventListener('click',play);
paper.addEventListener('click',play);