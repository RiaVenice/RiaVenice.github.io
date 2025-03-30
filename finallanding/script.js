//scroller for the item boxes
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })


    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


//navbar
window.addEventListener("scroll", function () {
    const options = document.querySelector(".options");
    const homepage = document.querySelector(".homepage");


    if (window.scrollY >= homepage.offsetHeight) {
        options.classList.add("sticky");
    } else {
        options.classList.remove("sticky");
    }
});


function addToCart() {
    document.getElementById("custom-confirm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

document.getElementById("confirm-yes").onclick = function () {
    window.location.href = "cart.html"; // Redirects to cart page
};

document.getElementById("confirm-no").onclick = function () {
    document.getElementById("custom-confirm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
};


//homepage slideshow
document.addEventListener('DOMContentLoaded', function() {

    if (document.querySelector('.hero-carousel')) initCarousel();

});

function initCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    let slideInterval = setInterval(nextSlide, 10000);
    
    carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 8000);
    });
    
    
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 8000);
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 8000);
    });
    
    showSlide(currentSlide);
}

