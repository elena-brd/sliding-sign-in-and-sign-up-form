const signInBtn = document.getElementById('sign-in');
const signUpBtn = document.getElementById('sign-up');
const container = document.getElementById('container');

signUpBtn.addEventListener('click', () => container.classList.add('panel-active'));
signInBtn.addEventListener('click', () => container.classList.remove('panel-active'));