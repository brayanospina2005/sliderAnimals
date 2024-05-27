//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 12000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)

}window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    setTimeout(function() {
        loader.style.opacity = "0";
        setTimeout(function() {
            loader.style.display = "none";
        }, 300);
    }, 1500);
});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

let mouseX = 0, mouseY = 0, posX = 0, posY = 0, delay = 0.05;

function animate() {
    posX += (mouseX - posX) * delay;
    posY += (mouseY - posY) * delay;
    
    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';

    requestAnimationFrame(animate);
}

document.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

animate();

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        cursor.classList.add("highlight");
    });

    button.addEventListener("mouseleave", function() {
        cursor.classList.remove("highlight");
    });
});

const menuButton = document.getElementById("menu-button");
const menuContainer = document.getElementById("menu-container");

menuButton.addEventListener("click", function() {
    menuContainer.classList.toggle("open");
    if (menuContainer.classList.contains("open")) {
        menuButton.className = "bx bx-x";
    } else {
        menuButton.className = "bx bx-menu";
    }
});