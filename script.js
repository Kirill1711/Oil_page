let slide = document.querySelector('.slide');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let tree = document.querySelector('.tree');

let i = 0;
let id = setInterval(function() {
    i++;

    if(i == 10) {
        slide.classList.remove('one');
        slide.classList.add('two');
        slide.innerHTML = '<p>Рекламный текст 2. Рекламный текст 2.Рекламный текст 2. Рекламный текст 2.Рекламный текст 2. Рекламный текст 2.Рекламный текст 2. Рекламный текст 2.Рекламный текст 2. Рекламный текст 2.Рекламный текст 2. Рекламный текст 2.</p>'
    }
    if(i == 20) {
        slide.classList.remove('two');
        slide.classList.add('tree');
        slide.innerHTML = '<p>Рекламный текст 3. Рекламный текст 3.Рекламный текст 3. Рекламный текст 3.Рекламный текст 3. Рекламный текст 3.Рекламный текст 3. Рекламный текст 3.Рекламный текст 3. Рекламный текст 3.Рекламный текст 3. Рекламный текст 3.</p>'
    }
    if(i == 30) {
        slide.classList.remove('tree');
        slide.classList.add('one');
        slide.innerHTML = '<p>Рекламный текст 1. Рекламный текст 1.Рекламный текст 1. Рекламный текст 1.Рекламный текст 1. Рекламный текст 1.Рекламный текст 1. Рекламный текст 1.Рекламный текст 1. Рекламный текст 1.Рекламный текст 1. Рекламный текст 1.</p>'
 
        i = 0;
    }
},1000);