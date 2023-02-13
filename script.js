const btn = document.querySelector('.btn');
const circle = document.querySelector('.circle');



const animation = e => {
    const top = e.clientY;
    const left = e.clientX;
    //pozycja w którą klikamy

    const btnTopPosition = e.target.offsetTop;
    const btnLeftPosition = e.target.offsetLeft;
    //pozycja przycisku na stronie

    const insideBtnTop = top - btnTopPosition;
    const insideBtnLeft = left - btnLeftPosition;

    const circle = document.createElement('span');
    circle.classList.add('circle');

    circle.style.top = insideBtnTop + 'px';
    circle.style.left = insideBtnLeft + 'px';

    e.target.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 300)
}



btn.addEventListener('click', animation)
