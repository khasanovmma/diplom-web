setTimeout(() => {
    let option = document.querySelector('option')
    option.innerHTML = 'Tilni o\'zgartirish'

}, 350);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'uz' }, 'google_translate_element');
}


function animate(obj, initVal, lastVal, duration) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('value1');
let text2 = document.getElementById('value2');
let text3 = document.getElementById('value3');


const load = () => {
    animate(text1, 0, 564, 5000);
    animate(text2, 0, 10153, 5000);
    animate(text3, 100, 10717, 5000);
}



// nav link
const links = document.querySelectorAll('.nav__link');
const pages = document.querySelectorAll('.page');
// nav
const navControl = document.querySelectorAll('.nav__btn, .nav__close'),
    navToggle = document.querySelectorAll('.nav__btn, .nav__list');

navControl.forEach(btn => btn.addEventListener('click', () => {
    navToggle.forEach(el => el.classList.toggle('open'))
}))

// slider

const $slider = document.querySelector('.slider');
const $sliderBtn = document.querySelectorAll('[data-target]');
const $sliderItem = document.querySelectorAll('.slider__item');
let activeSlide = 0
$sliderItem.forEach((item, i) => {
    if (item.classList.contains('active')) {
        activeSlide = i
    }
})
$sliderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        sliderMove(e.target.getAttribute('id'))
    })
})

function sliderMove(direction) {
    if (direction === 'next') {
        if (activeSlide < $sliderItem.length - 1) {
            activeSlide++
        } else {
            activeSlide = 0
        }
    } else {
        if (activeSlide > 0) {
            activeSlide--
        } else {
            activeSlide = $sliderItem.length - 1
        }
    }
    $sliderItem.forEach(item => {
        item.classList.remove('active')
    })
    $sliderItem[activeSlide].classList.add('active')
}
let interval = setInterval(() => sliderMove('next'), 3000)

// slider

const $mainSlider = document.querySelector('.main-slider');
const $mainSliderBtn = document.querySelectorAll('[data-target]');
const $mainSliderItem = document.querySelectorAll('.main-slider__item');
let activeSlid = 0
$mainSliderItem.forEach((item, i) => {
    if (item.classList.contains('active')) {
        activeSlid = i
    }
})
$mainSliderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        sliderChange(e.target.getAttribute('id'))
    })
})

function sliderChange(direction) {
    if (direction === 'next') {
        if (activeSlid < $mainSliderItem.length - 1) {
            activeSlid++
        } else {
            activeSlid = 0
        }
    } else {
        if (activeSlid > 0) {
            activeSlid--
        } else {
            activeSlid = $mainSliderItem.length - 1
        }
    }
    $mainSliderItem.forEach(item => {
        item.classList.remove('active')
    })
    $mainSliderItem[activeSlid].classList.add('active')
}
let mainInterval = setInterval(() => sliderChange('next'), 3000)
