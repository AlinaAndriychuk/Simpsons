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

  gsap.from(".header__item", {duration: 2, x: -500, opacity: 0, scale: 0.5});
  gsap.from(".header__title", { duration: 2, ease: "back.out(1.7)", y: -300 });
  gsap.from(".header__link", { duration: 2, opacity: 0 });
  gsap.from(".header__burger-menu", {duration: 2, y: 500});

  let current1 = true,
      current2 = true;

  $(window).scroll(function() {
    if(document.documentElement.clientWidth >= 985) {
      if ($(this).scrollTop() > 900 && $(this).scrollTop() < 1700) {
        effectVideoAppear(current1);
        current1 = false;
      }
    } 
  })

  function effectVideoAppear(switcher) {
    if(switcher) {
      gsap.to(".image-container", { duration: 2, x: 1000, opacity: 1});
    }
  }

  let grad = 180;

  $(".header__burger-menu").on("click", function(){
    gsap.to(".header__burger-menu", { rotation: grad});
    if(grad == 180){
      grad = 0;
    } else {
      grad = 180;
    }
    $(".header__menu").toggleClass("open-menu");
    $(".header__title").toggleClass("hide-title");
    $(".header__link").toggleClass("hide-title")

  })
  $(".header__link-item").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 30 + "px"
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


let carouselGame = document.querySelector(".game__image-container");
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

let gameField = document.getElementsByClassName("game")[0];
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
// let currentDefault = true;
// let buttonDefault = document.getElementsByClassName("game__button-default")[0];
// buttonDefault.onclick = function(event) {
//   let allPersonages = gameContainer.getElementsByClassName("game__image");
  
//   let randomNumbers = [ 4, 3.6, 10, 18, 18, 7, 16.5, 13, 16, 2.7, 12, 7, 4, 9, 3];
//   let randomNumbersTop = [3, 6.5, 3, 6, 2, 3, 2.5, 4, 6.2, 4, 3.5, 7, 6, 7, 5]
//   let i = 0;

//   if(currentDefault) {
//     for( let every of allPersonages) {

//       every.style.position = "absolute"
//       every.style.marginLeft = randomNumbers[i] * 10 + "vh";
//       every.style.marginTop = randomNumbersTop[i] * 10 + "vh";
//       i++
//     }
//     currentDefault = false;
//   } else {
//     for( let every of allPersonages) {

//       every.style.position = "relative"
//       every.style.marginLeft = 0 + "px";
//       every.style.marginTop = 0 + "px";
//     }
//     currentDefault = true;
//   }
  
// }

let gameHalfField = document.getElementsByClassName("game__field")[0];
let buttonImage = document.getElementsByClassName("game__button-bgimage")[0];
let numberOfBackground = 0;
let urlOfBackground = ["url(../app/img/back1.jpg)", "url(../app/img/back2.jpg)", "url(../app/img/back3.jpg)", "url(../app/img/back4.jpg)", "url(../app/img/school.jpg)"];
let colorOfCarousel = ["#ffffff", "#fde101", "#bdecec", "#8d6099" , "#f1c3b3"];
let colorOfButtons = ["#92d4f7", "#f185b6", "#dfb9a3", "#631e5d", "#a777c1"]
buttonImage.onclick = function(event) {
  if(numberOfBackground > 4) numberOfBackground = 0;

  gameHalfField.style.backgroundImage = urlOfBackground[numberOfBackground];
  buttonDefault.style.backgroundColor = colorOfButtons[numberOfBackground];
  buttonImage.style.backgroundColor = colorOfButtons[numberOfBackground];
  carouselButtonsGame[0].style.backgroundColor = colorOfButtons[numberOfBackground];
  carouselButtonsGame[1].style.backgroundColor = colorOfButtons[numberOfBackground];
  carouselGame.style.backgroundColor = colorOfCarousel[numberOfBackground];
  numberOfBackground++;
} 



  let xhttp = new XMLHttpRequest();
  let guoteButton = document.getElementsByClassName("quotes__button")[0];
  xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
          handleAPILoaded(this.response)
      }
  }

  guoteButton.onclick = function(){
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
          handleAPILoaded(this.response)
      }
    }

    xhttp.open("GET", "https://thesimpsonsquoteapi.glitch.me/quotes?count");
    xhttp.send();
  }

  let quoteText = document.getElementsByClassName("quotes__quote")[0];
  let quoteImage = document.getElementsByClassName("quotes__image")[0];
  let quoteName = document.getElementsByClassName("quotes__character")[0];

  function handleAPILoaded(code) {
    let arrayOfCode = code.split("\"")
    quoteText.innerText = arrayOfCode[3];
    quoteName.innerText = arrayOfCode[7];
    quoteImage.style.backgroundImage = "url("+ arrayOfCode[11]  + ")";

  }


})
// 