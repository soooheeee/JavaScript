const button = document.querySelector('#add-button');
const ul = document.querySelector('ul');
const input = document.querySelector('input');


button.addEventListener("click",(event)=> {
    event.preventDefault();

    addItem(input.value)
    console.log(`input:`, input);
    console.log(`input.value:`, input.value);

    input.value = '';
})

const addItem = (text) => {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button')

    li.innerText =text;
    deleteButton.innerText = '삭제'

    ul.appendChild(li);
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click',deleteItem) // 삭제 버튼에 이벤트 리스너 추가
}

const deleteItem = (event) => {
    const target = event.target.parentElement; // 삭제 버튼의 부모 요소 li 선택
    target.remove(); // li dyth tkrwp
    console.log(event.target);
}

