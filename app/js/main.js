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