const elements = document.querySelectorAll('.slide-show-element');
const slideShowLen = elements.length;

let count = 1;
setInterval(() => {
    count++;
    let currentEle = document.querySelector('.show');
    currentEle.classList.remove('show');

    if(count > slideShowLen){
        elements[0].classList.add('show');
        count = 1;
    }else{
        currentEle.nextElementSibling.classList.add('show');
    }
}, 3000)