$(document).ready(() => {
  let matJutPop = document.getElementById("material__jute__popup");
  let matRafPop = document.getElementById("material__rafia__popup");
  let matJutText = document.getElementById("material__jute__popup-text");
  let matRafText = document.getElementById("rafia");
  let matJutLink = document.getElementById("material__jute__link");
  let matRafLink = document.getElementById("material__rafia__link");
  let matJutImg = document.getElementById("matJutImg");
  let matRafImg = document.getElementById("matRafImg");
  let flag = "flex";
  let overlay = document.querySelector(".overlay");
  let careJuteLink = document.querySelector(".care__jute__link");
  let careRafiaLink = document.querySelector(".care__rafia__link");
  let overlayLink = document.querySelector(".overlay__block__link");
  let headTextCat = document.querySelector(".header__text__catalog");
  let headCatPop = document.querySelector(".catalog__popup");
  let headBurgLink = document.querySelector(".header__burger");
  let burgCatTitle = document.querySelector(".burger__catalog__title");
  let burg = document.querySelector(".burger");
  let burgcls = document.querySelector(".burger__vector");
  let burgCatPopup = document.querySelector(".burger__content__catalog-popup");
  headBurgLink.addEventListener("click", () => {
    for (let i = 0; i < pageContent.length; i++) {
      pageContent[i].classList.toggle("display");
    }
    $(".burger__content").hide();
    $(".burger__footer").hide();
    $(burg).slideToggle(400, () => {
      burg.classList.toggle("flex");
      $(".burger__content").fadeIn();
      $(".burger__footer").fadeIn();
    });
  });

  burgCatTitle.addEventListener("click", () => {
    $(burgCatPopup).slideToggle(400, () => {
      burgCatPopup.classList.toggle("undisplay");
    });
  });

  burgcls.addEventListener("click", () => {
    $(burg).slideToggle(400, () => {
      burg.classList.toggle("flex");
      for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].classList.toggle("display");
      }
    });
  });

  function makeItPopUp(link, img, pop) {
    link.addEventListener("click", () => {
      $(img).fadeOut(500, () => {
        img.classList.toggle("display");
        $(pop).fadeIn(500);
      });
      if (img.classList.contains("display")) {
        $(pop).fadeOut(500, () => {
          img.classList.toggle("display");
          $(img).fadeIn(500);
        });
      }
    });
  }

  function overlayPopup(link, overlay) {
    link.addEventListener("click", () => {
      $(overlay).toggle(400, () => {
        overlay.classList.toggle("flex");
      });
    });
  }

  overlayPopup(headTextCat, headCatPop);

  overlayPopup(careJuteLink, overlay);

  overlayPopup(overlayLink, overlay);

  overlayPopup(careRafiaLink, overlay);

  makeItPopUp(matJutLink, matJutImg, matJutPop);

  makeItPopUp(matRafLink, matRafImg, matRafPop);
});
