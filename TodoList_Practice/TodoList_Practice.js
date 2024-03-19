const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');


let todos = [];

const save = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
}

const addItem = (todo) => {
    if (todo.text !== '') {
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        button.innerText = '삭제';
        li.innerText = todo.text;
        button.addEventListener('click',delItem);


        ul.appendChild(li);
        li.appendChild(button);
        li.appendChild(span);
        // console.log(li.id);
        // console.log(todo.id);
        li.id = todo.id;
        input.value = '';
    }
}

const delItem = (event) => {

    console.log(event.target.parentElement);
    
    const target= event.target.parentElement;
    console.log(target.id);
    todos =todos.filter((todo)=> todo.id !== JSON.parse(target.id))
    save();
    target.remove();
}

const handler = (event) => {
    event.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value,
    }
    todos.push(todo)
    addItem(todo);
    save();
    input.value= '';
}
const init=()=> {
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    if (userTodos) {
        userTodos.forEach((todo) => {
            addItem(todo);
            
        });
    }
    // todos = userTodos;
    console.log(userTodos);
}
init();
form.addEventListener('submit',handler);

