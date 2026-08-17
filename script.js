/* =========================================
   SM OPTIC - COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   REAL-TIME INDIA DATE & TIME
   Timezone: Asia/Kolkata (IST)
========================================= */

function updateDateTime() {

    const dateElement = document.getElementById("dateTime");

    if (!dateElement) return;

    const now = new Date();

    const dateOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    const timeOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    const date = now.toLocaleDateString(
        "en-IN",
        dateOptions
    );

    const time = now.toLocaleTimeString(
        "en-IN",
        timeOptions
    );

    dateElement.textContent =
        `${date} | ${time} IST`;
}


/* Start immediately */
updateDateTime();


/* Update every 1 second */
setInterval(
    updateDateTime,
    1000
);



/* =========================================
   FOOTER YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("open");

        }
    );

}



/* =========================================
   HERO SLIDER
========================================= */

let currentSlide = 0;

const heroSlides =
    document.querySelectorAll(
        ".hero-slide"
    );

const heroDots =
    document.querySelectorAll(
        ".slider-dots .dot"
    );


function showSlide(index) {

    if (!heroSlides.length) return;


    heroSlides.forEach(
        function(slide) {

            slide.classList.remove("active");

        }
    );


    heroDots.forEach(
        function(dot) {

            dot.classList.remove("active");

        }
    );


    currentSlide = index;


    if (heroSlides[currentSlide]) {

        heroSlides[currentSlide]
            .classList.add("active");

    }


    if (heroDots[currentSlide]) {

        heroDots[currentSlide]
            .classList.add("active");

    }

}



/* Automatic hero slideshow */

if (heroSlides.length > 0) {

    setInterval(
        function() {

            currentSlide++;

            if (
                currentSlide >=
                heroSlides.length
            ) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        },
        5000
    );

}



/* =========================================
   ABOUT PAGE SLIDER
========================================= */

let aboutSlideIndex = 0;

const aboutSlides =
    document.querySelectorAll(
        ".about-slide"
    );

const aboutDots =
    document.querySelectorAll(
        ".about-dot"
    );


function showAboutSlide(index) {

    if (!aboutSlides.length) return;


    aboutSlides.forEach(
        function(slide) {

            slide.classList.remove("active");

        }
    );


    aboutDots.forEach(
        function(dot) {

            dot.classList.remove("active");

        }
    );


    aboutSlideIndex = index;


    if (aboutSlides[aboutSlideIndex]) {

        aboutSlides[aboutSlideIndex]
            .classList.add("active");

    }


    if (aboutDots[aboutSlideIndex]) {

        aboutDots[aboutSlideIndex]
            .classList.add("active");

    }

}



/* Automatic About slideshow */

if (aboutSlides.length > 0) {

    setInterval(
        function() {

            aboutSlideIndex++;

            if (
                aboutSlideIndex >=
                aboutSlides.length
            ) {

                aboutSlideIndex = 0;

            }

            showAboutSlide(
                aboutSlideIndex
            );

        },
        4500
    );

}



/* =========================================
   PRODUCT IMAGE GALLERY
========================================= */

function changeImage(
    imageId,
    imageSource
) {

    const image =
        document.getElementById(imageId);


    if (image) {

        image.src = imageSource;

    }

}



/* =========================================
   OPEN SELECTED PRODUCT
========================================= */

function openSelectedProduct() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const product =
        params.get("product");


    if (!product) return;


    const section =
        document.getElementById(product);


    if (section) {

        setTimeout(
            function() {

                section.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            },
            300
        );

    }

}


if (
    window.location.pathname
        .includes("products.html")
) {

    openSelectedProduct();

}



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Thank you! Your enquiry has been received."
            );


            contactForm.reset();

        }
    );

}



/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-inner a"
    );


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                if (navbar) {

                    navbar.classList.remove(
                        "open"
                    );

                }

            }
        );

    }
);