let matJutPop = document.getElementById("material__jute__popup");
let matRafPop = document.getElementById("material__rafia__popup");
let matJutText = document.getElementById("material__jute__popup-text");
let matRafText = document.getElementById("rafia");
let matJutLink = document.getElementById("material__jute__link");
let matRafLink = document.getElementById("material__rafia__link");
let matJutImg = document.getElementById("matJutImg");
let matRafImg = document.getElementById("matRafImg");

function makeItPopUp(link, img, pop) {
  link.addEventListener("click", () => {
    img.classList.toggle("display");
    pop.classList.toggle("undisplay");
  });
}

makeItPopUp(matJutLink, matJutImg, matJutPop);

makeItPopUp(matRafLink, matRafImg, matRafPop);
