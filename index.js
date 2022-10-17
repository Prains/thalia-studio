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
let headTextCat = document.querySelector('.header__text__catalog');
let headCatPop = document.querySelector('.catalog__popup')

function makeItPopUp(link, img, pop) {
  link.addEventListener("click", () => {
    img.classList.toggle("display");
    pop.classList.toggle("undisplay");
  });
}

function overlayPopup(link, overlay) {
  link.addEventListener("click", () => {
    overlay.classList.toggle("flex");
  });
}

overlayPopup(headTextCat, headCatPop);

overlayPopup(careJuteLink, overlay);

overlayPopup(overlayLink, overlay);

overlayPopup(careRafiaLink, overlay);

makeItPopUp(matJutLink, matJutImg, matJutPop);

makeItPopUp(matRafLink, matRafImg, matRafPop);
