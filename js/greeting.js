const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const page = document.querySelector('#page');
const big_clock = document.querySelector('#clock');
const greeting = document.querySelector('#greeting');
const logoutButton = document.querySelector('#outBtn');

const HIDDEN_CLASSNAME = 'hidden';
const FADEOUT_CLASSNAME = 'fadeout';
const FADEIN_CLASSNAME = 'fadein';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
    e.preventDefault();
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    localStorage.setItem('darkmode', false);
    loginForm.classList.add(FADEOUT_CLASSNAME);
    big_clock.classList.add(FADEOUT_CLASSNAME);
    setTimeout(() => {
        paintGreetings();
    }, 3000);
}

function paintGreetings() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    big_clock.classList.add(HIDDEN_CLASSNAME);
    page.style.display = '';
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    big_clock.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings();
}

logoutButton.addEventListener('click', () => {
    localStorage.clear();
    loginForm.classList.remove(FADEOUT_CLASSNAME);
    big_clock.classList.remove(FADEOUT_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    big_clock.classList.remove(HIDDEN_CLASSNAME);
    page.style.display = 'none';
    loginForm.addEventListener('submit', onLoginSubmit);
});