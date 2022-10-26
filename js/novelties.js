const novTitle = document.querySelector(
  ".novelties__content__text-wrapper__title"
);
const novText = document.querySelector(
  ".novelties__content__text-wrapper__text"
);
const novPrice = document.querySelector(
  ".novelties__content__text-wrapper__bottom__text"
);
const novLink = document.querySelector(
  ".novelties__content__text-wrapper__bottom__link"
);
const novImg = document.querySelector(".novelties__image");
let count = 0;
const novArray = [
  {
    img: "./images/novelties__card1.jpg",
    title: "Кошелёк",
    text: "Кошелёк из натуральной кожи с ручной обвязкой. Ремешок можно использовать как брелок для ключей",
    price: "2000 р",
  },
  {
    img: "./images/novelties__card2.jpg",
    title: "Торба",
    text: "Торба из полиэфирного шнура с кожаными элементами. Клапан с магнитной кнопкой, кожаное дно, наружный карман. Подкладка по желанию",
    price: "4200 р",
  },
];

novTitle.textContent = novArray[0].title;
novText.textContent = novArray[0].text;
novImg.src = novArray[0].img;
novPrice.textContent = novArray[0].price;

novLink.addEventListener("click", () => {
  count++;
  smoothly(novTitle, "textContent", novArray[count].title);
  smoothly(novText, "textContent", novArray[count].text);
  smoothly(novImg, "src", novArray[count].img);
  smoothly(novPrice, "textContent", novArray[count].price);
  if (count == novArray.length - 1) {
    count = -1;
  }
});
