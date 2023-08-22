'use strict';


let openButton = document.querySelector('.button-white')
let show = document.querySelector('.book-container');
let overLay = document.querySelector('.overlay')
let close = document.querySelector('.close-book')

const open = function () {
    show.classList.remove('hidden')
    overLay.classList.remove('hidden')  
};

const unOpen = function () {
    show.classList.add('hidden')
    overLay.classList.add('hidden')  
}


openButton.addEventListener('click', open);
close.addEventListener('click', unOpen)
overLay.addEventListener('click', unOpen)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !show.classList.contains('hidden')) {
        unOpen();
    }
    
})