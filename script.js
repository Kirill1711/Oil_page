let slide = document.querySelector('.slider_line');

let i = 0;
let id = setInterval(function() {
    i++;

    if(i == 3) {
        slide.style.marginLeft = '-1006px';
    }
    if(i == 6) {
        slide.style.marginLeft = '-2012px';
    }
    if(i == 9) {
        slide.style.marginLeft = '0px';
        i = 0;
    }

},1000);

