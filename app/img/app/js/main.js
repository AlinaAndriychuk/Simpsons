
$(function(){
  gsap.from(".header__logo", {duration: 2, x: 300, opacity: 0, scale: 0.5});
  gsap.from(".header__item", {duration: 2, y: -50, opacity: 0, scale: 0.5});
  gsap.from(".header__title", { duration: 2, ease: "back.out(1.7)", x: -300 });
  gsap.from(".header__text", { duration: 2, ease: "back.out(1.7)", x: 200 });
  gsap.from(".burger-menu", {duration: 2, x: -500, ease: "bounce"});

  let current = true,
    stylesOff = true,
    current1 = true,
    current2 = true,
    current3 = true,
    current4 = true
    current5 = true,
    current6 = true, 
    current7 = true;

    let animatedElements = [".description__content", "#firstWatch .offer__image", "#firstWatch .offer__description", "#secondWatch .offer__image--right","#secondWatch .offer__description--right", "#thirdWatch .offer__image", "#thirdWatch .offer__description", ".feature__image", ".other-offers .offer__image", ".other-offers .offer__description", ".gallery__image", ".questions__block",  ".questions__title", ".questions__text"]

  $(window).scroll(function() {
    if(document.documentElement.clientWidth >= 985) {
      if ($(this).scrollTop() > 300 && $(this).scrollTop() < 900) {
        effectSlideRight(current);
        current = false;
      }else if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1700) {
        effectSlideCatalogue(current1);
        current1 = false;
      }else if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2200) {
        effectSlideCatalogueTwo(current2);
        current2 = false;
      }else if($(this).scrollTop() > 2100 && $(this).scrollTop() < 2750) {
        effectSlideCatalogueThree(current3);
        current3 = false;
      }else if($(this).scrollTop() > 2600 && $(this).scrollTop() < 3150) {
        effectRounds(current4);
        current4 = false;
      }else if($(this).scrollTop() > 3000 && $(this).scrollTop() < 3700) {
        effectSlideToTheLeft(current5);
        current5 = false;
      }else if($(this).scrollTop() > 3900 && $(this).scrollTop() < 4800) {
        effectGallery(current6);
        current6 = false;
      }else if($(this).scrollTop() > 4750) {
        effectText(current7);
        current7 = false;
      }
    } if(document.documentElement.clientWidth < 985 && document.documentElement.clientWidth > 750) {
      if ($(this).scrollTop() > 300 && $(this).scrollTop() < 900) {
        effectSlideRight(current);
        current = false;
      }else if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1700) {
        effectSlideCatalogue(current1);
        current1 = false;
      }else if($(this).scrollTop() > 1900 && $(this).scrollTop() < 2500) {
        effectSlideCatalogueTwo(current2);
        current2 = false;
      }else if($(this).scrollTop() > 2700 && $(this).scrollTop() < 3350) {
        effectSlideCatalogueThree(current3);
        current3 = false;
      }else if($(this).scrollTop() > 3500 && $(this).scrollTop() < 4000) {
        effectRounds(current4);
        current4 = false;
      }else if($(this).scrollTop() > 4000 && $(this).scrollTop() < 4500) {
        effectSlideToTheLeft(current5);
        current5 = false;
      }else if($(this).scrollTop() > 4900 && $(this).scrollTop() < 5550) {
        effectGallery(current6);
        current6 = false;
      }else if($(this).scrollTop() > 5700) {
        effectText(current7);
        current7 = false;
      }
    }if(document.documentElement.clientWidth <= 750 && document.documentElement.clientWidth > 558){
      if ($(this).scrollTop() > 300 && $(this).scrollTop() < 900) {
        effectSlideRight(current);
        current = false;
      }else if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1700) {
        effectSlideCatalogue(current1);
        current1 = false;
      }else if($(this).scrollTop() > 1900 && $(this).scrollTop() < 2500) {
        effectSlideCatalogueTwo(current2);
        current2 = false;
      }else if($(this).scrollTop() > 2700 && $(this).scrollTop() < 3350) {
        effectSlideCatalogueThree(current3);
        current3 = false;
      }else if($(this).scrollTop() > 3500 && $(this).scrollTop() < 4500) {
        effectRounds(current4);
        current4 = false;
      }else if($(this).scrollTop() > 4600 && $(this).scrollTop() < 6700) {
        effectSlideToTheLeft(current5);
        current5 = false;
      }else if($(this).scrollTop() > 7000 && $(this).scrollTop() < 11400) {
        effectGallery(current6);
        current6 = false;
      }else if($(this).scrollTop() > 11600) {
        effectText(current7);
        current7 = false;
      }
    }if(document.documentElement.clientWidth <= 558 && document.documentElement.clientWidth > 440){
      if(!stylesOff) {
        for(let every of animatedElements) {
          $(every).attr("style", "")
        }
      }
      if ($(this).scrollTop() > 300 && $(this).scrollTop() < 900) {
        effectSlideRight(current);
        current = false;
      }else if($(this).scrollTop() > 3500 && $(this).scrollTop() < 4500) {
        effectRounds(current4);
        current4 = false;
      }else if($(this).scrollTop() > 6900 && $(this).scrollTop() < 11400) {
        effectGallery(current6);
        current6 = false;
      }else if($(this).scrollTop() > 11450) {
        effectText(current7);
        current7 = false;
      }
    }if(document.documentElement.clientWidth <= 440){
      if ($(this).scrollTop() > 300 && $(this).scrollTop() < 1300) {
        effectSlideRight(current);
        current = false;
      }else if($(this).scrollTop() > 3500 && $(this).scrollTop() < 4500) {
        effectRounds(current4);
        current4 = false;
      }else if($(this).scrollTop() > 6600 && $(this).scrollTop() < 11400) {
        effectGallery(current6);
        current6 = false;
      }else if($(this).scrollTop() > 8950) {
        effectText(current7);
        current7 = false;
      }
    }
  });

  function effectSlideRight(status){
    if(status){
      gsap.to(".description__content", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: 100 });
    }
  }

  function effectSlideCatalogue(status) {
    if(status){
      gsap.to("#firstWatch .offer__image", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: -250 });
      gsap.to("#firstWatch .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }

  function effectSlideCatalogueTwo(status) {
    if(status){
      gsap.to("#secondWatch .offer__image--right", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: 300 });
      gsap.to("#secondWatch .offer__description--right", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }

  function effectSlideCatalogueThree(status) {
    if(status){
      gsap.to("#thirdWatch .offer__image", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: -250 });
      gsap.to("#thirdWatch .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }

  function effectRounds(status) {
    if(status){
      gsap.to(".feature__image", {duration: 1.3, y: 0, height: 100, opacity: 1, scale: 1});
    }
  }
  
  function effectSlideToTheLeft(status) {
    if(status){
      gsap.to(".other-offers .offer__image", {duration: 2, opacity: 1, scale: 1, x: 300});
      gsap.to(".other-offers .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }
  function effectGallery(status) {
    if(status){
      gsap.to(".gallery__image", {
        rotation: 360, 
        duration: 1,
        scale: 1, 
        ease: "power1.inOut",
        height: "auto",
        stagger: {
          amount: 1.7, 
          grid: "auto",
          from: "left"
        }
      })
    }
  }
 
  function effectText(status) {
    if(status){
      gsap.to(".questions__block", {duration: 2, backgroundColor: "#334264" });
      gsap.to(".questions__title", {duration: 2, opacity: 1});
      gsap.to(".questions__text", { duration: 2, opacity: 1});
    }
  }

  let grad = 180;

  $(".burger-menu").on("click", function(){
    gsap.to(".burger-menu", { rotation: grad});
    if(grad == 180){
      grad = 0;
    } else {
      grad = 180;
    }
    $(".header__menu").slideToggle(500)
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
