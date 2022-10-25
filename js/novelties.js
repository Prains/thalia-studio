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
  (novBaseD = {
    img: "./images/novelties__card.svg",
    title: "Сумочка из джута",
    text: "Сумка из джута в бежевых и зеленых оттенках с кожанными ремешками.Подходит к любым повседневным образам элегантно дополняя их.Вмещает в себя как небольшие необходимые вещи, так и объемные предметы, например, ноутбук.",
    price: "8500 р",
  }),
  (novBaseF = {
    img: "./images/juta.png",
    title: "123",
    text: "1234",
    price: "12345",
  }),
  (novBaseS = {
    img: "./images/juta.png",
    title: "123",
    text: "1234",
    price: "123456",
  }),
];

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
