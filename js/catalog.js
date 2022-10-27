const items = document.querySelector(".catalog-page__items");
const template = document.querySelector(".catalog-template-card").content;
const cards = [
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
  {
    img: "../images/juta.png",
    title: "Сумочка из джута",
    price: "8900 р",
  },
];

function createElement(template, img, title, price) {
  const element = template.cloneNode(true);
  element.querySelector(".catalog-page__items__item__img").src = img;
  element.querySelector(".catalog-page__items__item__text").textContent = title;
  element.querySelector(
    ".catalog-page__items__item__wrapper__price"
  ).textContent = price;
  return element;
}

for (let i = 0; i < cards.length; i++) {
  items.prepend(
    createElement(template, cards[i].img, cards[i].title, cards[i].price)
  );
}
