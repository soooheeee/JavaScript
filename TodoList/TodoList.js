const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
    1. 삭제 버튼을 추가
    2. 저장 되게끔
    3. 삭제 버튼 -> 저장된 데이터 업데이트
*/

/*
    새로고침하면 아이템을 기억하지 못하고 초기화면으로 돌아감
    1. 로컬 스토리지 (*)
    2. 세션 스토리지
*/

let todos = []; // 전체 아이템을 저장할 배열

const save = () => {
    // localStorage에서는 객체를 객체로 인식해 object로만 보인다.
    // 따라서 JSON.stringify를 사용해 text로 추출할 수 있게 만든다.
    localStorage.setItem('todos',JSON.stringify(todos)) // todos라는 키 값을 가진 것을 todos에 넣는다.
}


const delItem=(event)=>{
    // console.log('삭제!!!');
    // console.log(event.target);
    // console.log(event.target.parentElement);
    const target = event.target.parentElement;

    todos=todos.filter((todo)=> todo.id !== parseInt(target.id));
    save();
    // console.log(target.id)
    target.remove();
};

const addItem= (todo) => {
    if (todo.text !== '') {
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText = todo.text;
        button.innerText = '삭제';
        button.addEventListener('click',delItem)

        li.appendChild(span); // 삭제 버튼와 분리되게 함으로써 영향을 받지 않는다.
        li.appendChild(button);
        // li.innerText  = text;
        ul.appendChild(li);
        li.id = todo.id;
        // input.value= ' ';
        // console.log(todos)
    }
}

const handler = (event) => {
    event.preventDefault();

    const todo = {
        id:Date.now(),
        text:input.value,
    }

    todos.push(todo);
    addItem(todo);
    save();
    input.value='';
}

const init = () => {
    const userTodos =JSON.parse(localStorage.getItem('todos'));
    // console.log(userTodos);
    userTodos.forEach((todo) => {
        addItem(todo);
    });
    todos=userTodos;
}

init();
form.addEventListener('submit',handler);

// localStorage.setItem('hello','world');
// const myData = localStorage.getItem('hello');
// console.log(myData);


// form.addEventListener('submit',(event) => {
//     event.preventDefault();
//     // // console.log(input.value);
//     // const li = document.createElement('li');
//     // li.innerText = input.value;
//     // ul.appendChild(li);

//     // input.value=' ';


// })
