import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

formEl = document.querySelector('.feedback-form');
emailInput = document.querySelector('input')
messageInput = document.querySelector('textarea')

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(formInput, 1000));

function formInput() {
    const feedbackFormState = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));

};

function onFormSubmit(evt) {
    evt.preventDefault();

      console.log({
    email: emailInput.value,
    message: messageInput.value,
  });
    // const user = localStorage.getItem('feedback-form-state');
    // console.log(user);

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

window.addEventListener('load', () => {
    const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (feedbackFormState) {
      emailInput.value = feedbackFormState.email;
      messageInput.value = feedbackFormState.message;
    } else {
      emailInput.value = '';
      messageInput.value = '';
    }
    return feedbackFormState;
});

