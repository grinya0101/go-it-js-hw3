const formEl = document.querySelector('.feedback-form');
console.log(formEl);
const emailInputEl = feedbackFormEl.querySelector('[name="email"]');
console.log(emailInputEl);
const messageInputEl = feedbackFormEl.querySelector('[name="message"]');
console.log(emailInputEl);
const FEEDBACK_MESSAGE = 'feedback-form-state';


let formData = {};



formEl.addEventListener('input', onValueLocalStorage);
formEl.addEventListener('submit', onFornSubmit)
massageOutput()

function onValueLocalStorage(e) {
  
  formData[e.target.name] = e.target.value;
  

  localStorage.setItem(FEEDBACK_MESSAGE, JSON.stringify(formData));
}


function onFornSubmit(e) {
    e.preventDefault();
    // e.currentTarget.reset()
}

function massageOutput() {
    const savedMessage = localStorage.getItem(FEEDBACK_MESSAGE)

    if (savedMessage) {
      
        savedMessage = JSON.parse(savedMessage)
        emailInputEl.value = savedMessage.email;
        messageInputEl.value = savedMessage.message;
        
    }

    
}

