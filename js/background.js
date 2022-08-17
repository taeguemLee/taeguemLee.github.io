function setColor() {
    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    const color1 = `rgba(${num1}, ${num2}, ${num3}, 0.7)`;
    const color2 = `rgba(${num2}, ${num3}, ${num1}, 0.7)`;
    const color3 = `rgba(${num3}, ${num1}, ${num2}, 0.7)`;
    const color4 = `rgba(${num1}, ${num3}, ${num2}, 0.7)`;
    const body = document.querySelector('body');
    body.style.background = `linear-gradient(45deg, ${color1} 0%, ${color2} 33%, ${color3} 66%, ${color4} 100%)`;
}

setColor();

const colorBtn = document.querySelector('#colorBtn');
colorBtn.addEventListener('click', setColor);