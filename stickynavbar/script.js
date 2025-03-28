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



