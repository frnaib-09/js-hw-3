let images = document.querySelectorAll('.gallery img');
let popup = document.querySelector('.popup');
let popupImage = document.querySelector('.popup .photo img');
let closeBtn = document.querySelector('.popup .cancel');
let rightArrow = document.querySelector('.popup .arrowRight');
let leftArrow = document.querySelector('.popup .arrowLeft');
let zoomIn = document.querySelector('.popup .zoomIn');
let zoomOut = document.querySelector('.popup .zoomOut');
let selected = 0
let scale = 1;


function openPopup(event, index) {
    popupImage.src = event.target.src;
    popup.classList.add('show');
    selected = index;
}

function closePopup(event){
    if (event.target.classList.contains('popup') || event.target.classList.contains('closeBtn')){
    popup.classList.remove('show');
}}

closeBtn.addEventListener('click', closePopup);
popup.addEventListener('click', closePopup);


images.forEach((images,index) => {
    images.addEventListener('click', (event) => openPopup(event,index));
    })
function nextimg(){
    selected++;
    if (selected >= images.length){
        selected = 0;
    }
    popupImage.src = images[selected].src;
    }



rightArrow.addEventListener('click', nextimg)

function previmg(){
    selected--;
    if (selected < 0){
        selected = images.length - 1;
    }
    popupImage.src = images[selected].src;
    }

leftArrow.addEventListener('click', previmg)

function kbrdnav(event){
    if (event.key == 'ArrowRight'){
        nextimg();
    }
    if (event.key == 'ArrowLeft'){
        previmg();
    }
    if (event.key == 'Escape'){
        popup.classList.remove('show');
    }
}

window.addEventListener('keyup', kbrdnav)

function zoomInImg(){
    scale += 0.1;
    popupImage.style.transform = `scale(${scale})`;
}

zoomIn.addEventListener('click', zoomInImg)

function zoomOutImg(){
    scale -= 0.1;
    popupImage.style.transform = `scale(${scale})`;
}

zoomOut.addEventListener('click', zoomOutImg)

function kbrdzoom(event){
    if (event.key == 'ArrowUp'){
        zoomInImg();
    }
    if (event.key == 'ArrowDown'){
        zoomOutImg();
    }
}

window.addEventListener('keyup', kbrdzoom)

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: $('.left'),
    nextArrow: $('.right'),
    centerMode: true,
    centerPadding: '0',
    dots: true,
    dotsClass: 'dots'
  });
});
