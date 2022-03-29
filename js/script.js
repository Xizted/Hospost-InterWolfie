const btnShow = document.querySelector('#btn-show');
const btnImg = document.querySelector('#btn-show img');
const inputPassword = document.querySelector('#input-password');

const showPassword = () => {
  if (inputPassword.type === 'password') {
    inputPassword.setAttribute('type', 'text');
    btnImg.setAttribute('src', './img/view.png');
  } else {
    inputPassword.setAttribute('type', 'password');
    btnImg.setAttribute('src', './img/hide.png');
  }
};
const events = () => {
  btnShow.addEventListener('click', showPassword);
};

(() => {
  events();
})();
