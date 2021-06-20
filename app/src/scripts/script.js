function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'uz'}, 'google_translate_element');
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
