const netflixButton = document.querySelector('#netflix-button');
const timer = document.querySelector('.timer');

netflixButton.addEventListener('click', changeBackground);

function changeBackground() {
    document.body.style.backgroundColor = 'black';
}

timer.addEventListener('animationend', () => {
    changeBackground();
});

document.addEventListener('mousemove', () => {
    netflixButton.classList.remove('timer');
});
