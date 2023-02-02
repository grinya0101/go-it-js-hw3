import throttle from 'lodash.throttle'


const formEl = document.querySelector('.feedback-form');
console.log(formEl);
const FEEDBACK_MESSAGE = 'feedback-form-state';

let formData = {};

formEl.addEventListener('input',  throttle(onValueLocalStorage, 1000));
formEl.addEventListener('submit', onFornSubmit);

massageOutput();


function onValueLocalStorage(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_MESSAGE, JSON.stringify(formData));
}

function onFornSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset()
  localStorage.removeItem(FEEDBACK_MESSAGE)
  console.log(formData);
}

function massageOutput() {
  let savedMessage = localStorage.getItem(FEEDBACK_MESSAGE);

  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    formEl.elements[0].value = savedMessage.email;
    formEl.elements[1].value = savedMessage.message;
  }
}








