setTimeout(() => {
    let option = document.querySelector("option");
    option.innerHTML = "Tilni o'zgartirish";
}, 1500);

let link = document.querySelectorAll(".pagination__a");

let newsBox = document.querySelector(".news__box");

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", (e) => {
        e.preventDefault();
        newsBox.remove();
        get = e.target.getAttribute("href");
        fetch(`${location.href}${get}`)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                let div = document.querySelector(".news .container .title");
                let parsedResponse = new window.DOMParser().parseFromString(
                    data,
                    "text/html"
                );
                setTimeout(() => {
                    let newsBox = document.querySelectorAll(".news__box");
                    newsBox[1].remove();
                }, 100);
                let newBox = parsedResponse.querySelector(".news__box");
                div.after(newBox);
            });
    });
}
let nav = document.querySelector(".nav");
let navLink = document.querySelectorAll(".nav__link");
let navItems = document.querySelectorAll(".nav__items");
window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;
    console.log(window.scrollY);
    if (window.innerWidth > 768) {
        document.querySelectorAll(".sections-body").forEach((el, i) => {
            if (
                el.offsetTop - document.querySelector(".nav").clientHeight <=
                scrollDistance
            ) {
                document.querySelectorAll(".nav a").forEach((el) => {
                    if (el.classList.contains("active")) {
                        el.classList.remove("active");
                    }
                });

                document
                    .querySelectorAll(".nav li")
                    [i].querySelector("a")
                    .classList.add("active");
            }
        });
    }
    if (window.scrollY > 400) {
        nav.style = `background-color: var(--blue);
                     transition: .5s;`;
        for (let i = 0; i< navItems.length; i++) {
            navItems[i].style = "background-color: var(--blue)";
            navLink[i].style = "color: #fff";
        }

    } else {
        nav.style = `background-color: none;
                     transition: .5s;`
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style = "background-color: #fff";
            navLink[i].style = "color: var(--black)";
        }

    }
});

let modal = document.querySelector(".modal");
let html = document.querySelector("html");
let modalTitle = document.querySelector(".modal-block__title");
let modalContent = document.querySelector(".modal-block__text");
let newsTitle = document.querySelectorAll(".news-block__title");
let newsContent = document.querySelectorAll(".news-block__text");
let overflow = document.querySelectorAll('.modal-block__text')
let btn = document.querySelectorAll("#myBtn");
let span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        console.log(modalTitle.innerHTML);
        modal.style.display = "block";
        html.style.overflow = "hidden";
        overflow[i].style = `max-height: max-content;`
        modalTitle.innerHTML = newsTitle[i].innerHTML;
        modalContent.innerHTML = newsContent[i].innerHTML;
    });
}

span.onclick = function () {
    modal.style.display = "none";
    html.style.overflow = "auto";
    for (let i = 0; i < btn.length; i++) {
    overflow[i].style = `max-height: 15px;`
    }
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        html.style.overflow = "auto";
        for (let i = 0; i < btn.length; i++) {
        overflow[i].style = `max-height: 15px;`
        }
    }
};
let modalContact = document.querySelector(".modal-contact");
let contactBtn = document.querySelector("#contactBtn");
let contactSpan = document.getElementsByClassName("close")[1];
console.log(contactBtn);
contactBtn.addEventListener("click", () => {
    console.log("clicked");
    modalContact.style.display = "block";
    html.style.overflow = "hidden";
    setTimeout(() => {
        document.querySelectorAll(".contact__input")[0].value = "";
        document.querySelectorAll(".contact__input")[1].value = "";
        document.querySelector(".contact__textarea").value = "";
    }, 100);
});

contactSpan.onclick = function () {
    modalContact.style.display = "none";
    html.style.overflow = "auto";
};

window.onclick = function (event) {
    if (event.target == modalContact) {
        modalContact.style.display = "none";
        html.style.overflow = "auto";
    }
};

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: "uz" },
        "google_translate_element"
    );
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
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

let text1 = document.getElementById("value1");
let text2 = document.getElementById("value2");
let text3 = document.getElementById("value3");

const load = () => {
    animate(text1, 0, 564, 5000);
    animate(text2, 0, 10153, 5000);
    animate(text3, 100, 10717, 5000);
};

// nav link
const links = document.querySelectorAll(".nav__link");
const pages = document.querySelectorAll(".page");
// nav
const navControl = document.querySelectorAll(".nav__btn, .nav__close"),
    navToggle = document.querySelectorAll(".nav__btn, .nav__list");

navControl.forEach((btn) =>
    btn.addEventListener("click", () => {
        navToggle.forEach((el) => el.classList.toggle("open"));
    })
);

// slider

const $slider = document.querySelector(".slider");
const $sliderBtn = document.querySelectorAll("[data-target]");
const $sliderItem = document.querySelectorAll(".slider__item");
let activeSlide = 0;
$sliderItem.forEach((item, i) => {
    if (item.classList.contains("active")) {
        activeSlide = i;
    }
});
$sliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sliderMove(e.target.getAttribute("id"));
    });
});

function sliderMove(direction) {
    if (direction === "next") {
        if (activeSlide < $sliderItem.length - 1) {
            activeSlide++;
        } else {
            activeSlide = 0;
        }
    } else {
        if (activeSlide > 0) {
            activeSlide--;
        } else {
            activeSlide = $sliderItem.length - 1;
        }
    }
    $sliderItem.forEach((item) => {
        item.classList.remove("active");
    });
    $sliderItem[activeSlide].classList.add("active");
}
let interval = setInterval(() => sliderMove("next"), 3000);

// slider

const $mainSlider = document.querySelector(".main-slider");
const $mainSliderBtn = document.querySelectorAll("[data-target]");
const $mainSliderItem = document.querySelectorAll(".main-slider__item");
let activeSlid = 0;
$mainSliderItem.forEach((item, i) => {
    if (item.classList.contains("active")) {
        activeSlid = i;
    }
});
$mainSliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sliderChange(e.target.getAttribute("id"));
    });
});

function sliderChange(direction) {
    if (direction === "next") {
        if (activeSlid < $mainSliderItem.length - 1) {
            activeSlid++;
        } else {
            activeSlid = 0;
        }
    } else {
        if (activeSlid > 0) {
            activeSlid--;
        } else {
            activeSlid = $mainSliderItem.length - 1;
        }
    }
    $mainSliderItem.forEach((item) => {
        item.classList.remove("active");
    });
    $mainSliderItem[activeSlid].classList.add("active");
}
let mainInterval = setInterval(() => sliderChange("next"), 3000);
