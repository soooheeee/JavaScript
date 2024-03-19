const click = document.querySelector('.js-click');
const form = document.querySelector('.js-form');
const input = document.querySelector('input');

function printText(event) {
    event.preventDefault();
    console.log('event!');

    // console.log(form)
    // console.log(event.target)
    if (event.target === form) {
        input.value = '';
    }

}

function init() {
    click.addEventListener('click',printText,false);
    form.addEventListener('submit',printText,false)
}

init();