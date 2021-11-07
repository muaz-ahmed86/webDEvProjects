let manuBar = document.querySelector('.manu-bar');
let manu = document.querySelector('.manu');

manuBar.onclick = () => {
    manuBar.classList.toggle('active')
    manu.classList.toggle('active')
}

let firstClick = document.querySelector('.firstClick');
let secondClick = document.querySelector('.secondClick');
let clickOne = document.querySelector('.click-one')
let clickTwo = document.querySelector('.click-two')

firstClick.onclick = () => {
    clickOne.classList.toggle('active');
    firstClick.classList.toggle('active');
    secondClick.classList.remove('active');
    clickTwo.classList.remove('active');
}

secondClick.onclick = () => {
    clickTwo.classList.toggle('active');
    secondClick.classList.toggle('active');
    firstClick.classList.remove('active');
    clickOne.classList.remove('active');
}
