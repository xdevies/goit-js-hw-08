const throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const formEmail = refs.form.elements.email;
const formMessage = refs.form.elements.message;

let formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('submit', handleSubmit);
refs.form.addEventListener('input', throttle(handleInput, 500));

const storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
  restoreFormData(storedData);
}

function handleInput(e) {
  const { name, value } = e.target;
  e.target.setAttribute('value', value);
  formData = { ...formData, [name]: value };
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreFormData(storedData) {
  const restoredData = JSON.parse(storedData);
  formEmail.setAttribute('value', restoredData.email);
  formMessage.setAttribute('value', restoredData.message);
  formMessage.textContent = restoredData.message;
  formData = { ...formData, ...restoredData };
}

function handleSubmit(e) {
  e.preventDefault();
  console.dir(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  resetFormData();
}

function resetFormData() {
  formEmail.setAttribute('value', '');
  formMessage.setAttribute('value', '');
  formMessage.textContent = '';
  formData = { email: '', message: '' };
}


