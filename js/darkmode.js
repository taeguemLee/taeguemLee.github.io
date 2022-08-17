function setDarkMode() {
    const darkMode = document.querySelectorAll('.darkMode');
    const wrap = document.querySelector('#wrap');
    const _body = document.querySelector('body');
    const inputs = document.querySelectorAll('input');
    const isDarkMode = localStorage.getItem('darkmode');
    if (isDarkMode === 'true') {
        darkMode.forEach((element) => {
            element.style.background = `rgba(255, 255, 255, 0.3)`;
            element.style.boxshadow = `7px 25px 45px rgb(255 255 255 / 10%)`;
            element.style.border = `1px solid rgba(255, 255, 255, 0.8);`;
        });
        wrap.style.background = `rgba(255, 255, 255, 0.3)`;
        _body.style.color = 'white';
        inputs.forEach((input) => {
            input.style.color = 'white';
        });
        localStorage.setItem('darkmode', false);
    } else {
        darkMode.forEach((element) => {
            element.style.background = `rgba(0, 0, 0, 0.3)`;
            element.style.boxshadow = `7px 25px 45px rgb(0 0 0 / 10%)`;
            element.style.border = `1px solid rgba(0, 0, 0, 0.8);`;
        });
        wrap.style.background = `rgba(0, 0, 0, 0.3)`;
        _body.style.color = 'black';
        inputs.forEach((input) => {
            input.style.color = 'black';
        });
        localStorage.setItem('darkmode', true);
    }
}

const darkModeBtn = document.querySelector('#darkMode');
darkModeBtn.addEventListener('click', setDarkMode);