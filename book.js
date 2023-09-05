'use strict';

let openButton = document.querySelector('.button-white');
let show = document.querySelector('.book-container');
let overLay = document.querySelector('.overlay');
let close = document.querySelector('.close-book');
let reveal = document.querySelector('.reveal');

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

reveal.addEventListener('click', function (e) {
    e.preventDefault(); 
    open()

   
});


window.addEventListener("scroll", function (e) {
    const nav = document.querySelector(".navigation");
    nav.classList.toggle('show', window.scrollY > 0)
   
})

