setTimeout(() => {
    let option = document.querySelector('option')
    option.innerHTML = 'Tilni o\'zgartirish'


}, 1500);

let link = document.querySelectorAll('.pagination__a')

	let newsBox = document.querySelector('.news__box')

   for (let i=0; i<link.length; i++) {
   link[i].addEventListener('click', (e)=> {
	    e.preventDefault()
	    newsBox.remove()
	    get = e.target.getAttribute("href")
	    fetch(`http://127.0.0.1:8000/${get}`)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
           let div = document.querySelector('.news .container .title')
           let parsedResponse = (new window.DOMParser()).parseFromString(data, "text/html");
        setTimeout(() => {
        let newsBox = document.querySelectorAll('.news__box')
        newsBox[1].remove()
        }, 100);
           let newBox = parsedResponse.querySelector('.news__box')
           div.after(newBox)
        });
	    })

}
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {
        document.querySelectorAll('.sections-body').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.nav a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
            }
        });
    }
});
// Get the modal
var modal = document.querySelector('.modal');
var bd = document.querySelector('body');
var modalTitle = document.querySelector('.modal-block__title');
var modalContent = document.querySelector('.modal-block__text');
var newsTitle = document.querySelectorAll('.news-block__title');
var newsContent = document.querySelectorAll('.news-block__text');

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        console.log(modalTitle.innerHTML);
        modal.style.display = "block";
        bd.style.overflow = 'hidden';
        modalTitle.innerHTML = newsTitle[i].innerHTML
        modalContent.innerHTML = newsContent[i].innerHTML
    })
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    bd.style.overflow = 'auto';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
