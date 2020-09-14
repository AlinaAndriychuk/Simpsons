"use strict";

(function(){ 

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
      let el = document.querySelector('#logo');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeInSine","strokeWidth":2.7,"strokeOpacity":1,"strokeColor":"#000000","strokeCap":"round"}); 
      myAnimation.paint(); 
      gsap.to(".logo", {opacity:1, duration:1, delay:4})
    }
  };

 

})();

$(function(){
  let grad = 180;

  $(".header__burger-menu").on("click", function(){
    gsap.to(".header__burger-menu", { rotation: grad});
    if(grad == 180){
      grad = 0;
    } else {
      grad = 180;
    }
    $(".header__menu").toggleClass("open-menu")
  })
  $(".header__link-item").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 70 + "px"
    }, 777);
    e.preventDefault();
    return false;
  });

  
let carousel = document.querySelector(".carousel-field")
let carouselButtons = document.querySelectorAll(".carousel__button-container");
carouselButtons[1].onclick = ahead;

function ahead(){
    let i = 0;
    if(document.documentElement.clientWidth > 983) {
      let timer = setInterval(() =>{
        if(i < 177.1){
            carousel.scrollBy(4, 0)
            i++
        }
        if(i >= 177.1){
            clearInterval(timer)
        }
      }, 5)
    }else if(document.documentElement.clientWidth <= 983 && document.documentElement.clientWidth > 609) {
      let timer = setInterval(() =>{
        if(i < 117.2){
            carousel.scrollBy(4, 0)
            i++
        }
        if(i >= 117.2){
            clearInterval(timer)
        }
      }, 5)
    }else if(document.documentElement.clientWidth <= 609) {
      let timer = setInterval(() =>{
        if(i < 59){
            carousel.scrollBy(4, 0)
            i++
        }
        if(i >= 59){
            clearInterval(timer)
        }
      }, 5)
    }
    
}

carouselButtons[0].onclick = back;

function back(){
    let i = 0;
    if(document.documentElement.clientWidth > 983) {
      let timer = setInterval(() =>{
        if(i < 177.1){
            carousel.scrollBy(-4, 0)
            i++
        }
        if(i >= 177.1){
            clearInterval(timer)
        }
      }, 5)
    }else if(document.documentElement.clientWidth <= 983 && document.documentElement.clientWidth > 620) {
      let timer = setInterval(() =>{
        if(i < 117.2){
            carousel.scrollBy(-4, 0)
            i++
        }
        if(i >= 117.2){
            clearInterval(timer)
        }
      }, 5)
    }else if(document.documentElement.clientWidth <= 626) {
      let timer = setInterval(() =>{
        if(i < 59){
            carousel.scrollBy(-4, 0)
            i++
        }
        if(i >= 59){
            clearInterval(timer)
        }
      }, 5)
    }  
}


let carouselGame = document.querySelector(".game__image-container")
let carouselButtonsGame = document.querySelectorAll(".game__button-container");
carouselButtonsGame[0].onclick = aheadGame;

function aheadGame(){
    let i = 0;
    if(document.documentElement.clientWidth > 983) {
      let timer = setInterval(() =>{
        if(i < 70){
            carouselGame.scrollBy(0, 4)
            i++
        }
        if(i >= 70){
            clearInterval(timer)
        }
      }, 5)
    }
    
}

carouselButtonsGame[1].onclick = backGame;

function backGame(){
    let i = 0;
    if(document.documentElement.clientWidth > 983) {
      let timer = setInterval(() =>{
        if(i < 70){
            carouselGame.scrollBy(0, -4)
            i++
        }
        if(i >= 70){
            clearInterval(timer)
        }
      }, 5)
    }
}

let gameField = document.getElementsByClassName("game__field")[0];
gameField.ondblclick = function (event) {
  let simpson = event.target.closest(".game__image");
  if(!simpson) return;
  
  let personFullName = simpson.getAttribute("src")
  let personName = simpson.getAttribute("alt")
  let regexp = /\d/;

  let imageNumber;
  if(+personFullName.match(regexp) + 1 > 2) {
    imageNumber = 1;
  } else {
    imageNumber = +personFullName.match(regexp) + 1;
  }
  $(simpson).attr("src", "img/" + personName + imageNumber.toString() + ".png")
}


let gameContainer = document.getElementsByClassName("game")[0];
let isDragging = false;

gameContainer.addEventListener('mousedown', function(event) {

  let dragElement = event.target.closest('.game__image');

  if (!dragElement) return;

  event.preventDefault();

  dragElement.ondragstart = function() {
      return false;
  };

  let  shiftX, shiftY;

  startDrag(dragElement, event.clientX, event.clientY);

  function onMouseUp(event) {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function startDrag(element, clientX, clientY) {
    if(isDragging) {
      return;
    }

    isDragging = true;

    gameContainer.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;

    element.style.position = 'fixed';

    moveAt(clientX, clientY);
  };

  function finishDrag() {
    if(!isDragging) {
      return;
    }

    isDragging = false;

    dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
    dragElement.style.position = 'absolute';

    gameContainer.removeEventListener('mousemove', onMouseMove);
    dragElement.removeEventListener('mouseup', onMouseUp);
  }

  function moveAt(clientX, clientY) {
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
      newX = document.documentElement.clientWidth - dragElement.offsetWidth;
    }

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }

});

})
// alert("hello");

// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         handleAPILoaded(this.response)
//     }
// }

// xhttp.open("GET", "https://thesimpsonsquoteapi.glitch.me/quotes?count");
// xhttp.send();

// function handleAPILoaded(code) {
//     $('p')[0].innerHTML = code;
//     $("#character").attr("src", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png")
// }