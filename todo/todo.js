const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit',(event)=> {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
})