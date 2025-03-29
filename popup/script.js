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

//popup

function openPopup(id) {
    let popup = new bootstrap.Modal(document.getElementById(id));
    popup.show();
   
}


function closeAllModals() {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        let modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    });
}

//modal design

/*function loadBootstrapCSS() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    link.id = "bootstrap-css";
    document.head.appendChild(link);
}

function removeBootstrapCSS() {
    let link = document.getElementById("bootstrap-css");
    if (link) {
        link.remove();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("popupFeatured");

    modal.addEventListener("show.bs.modal", function () {
        loadBootstrapCSS();
    });

    modal.addEventListener("hidden.bs.modal", function () {
        removeBootstrapCSS();
    });
});*/

function openPopup(id) {
    let popup = new bootstrap.Modal(document.getElementById(id));
    popup.show();
   
}

function closeAllModals() {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        let modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    });
}





