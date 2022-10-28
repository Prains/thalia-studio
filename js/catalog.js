const items = document.querySelector(".catalog-page__items");
const template = document.querySelector(".catalog-template-card").content;
const cards = [
  {
    img: "../images/catalog1.jpg",
    title: "Торба",
    price: "4200 р",
  },
  {
    img: "../images/catalog2.jpg",
    title: "Сумка с бахромой",
    price: "5200 р",
  },
  {
    img: "../images/catalog3.jpg",
    title: "Дорожка на стол",
    price: "2000 р",
  },
  {
    img: "../images/catalog4.jpg",
    title: "Салфетница",
    price: "1.500 р",
  },
  {
    img: "../images/catalog5.jpg",
    title: "Сумка Таби",
    price: "3200 р",
  },
  {
    img: "../images/catalog6.jpg",
    title: "Сумка летняя Сансара",
    price: "5500 р",
  },
  {
    img: "../images/catalog7.jpg",
    title: "Сумка с рогаликами",
    price: "4.200 р",
  },
  {
    img: "../images/catalog8.jpg",
    title: "Кардхолдер",
    price: "от 500 р",
  },
  {
    img: "../images/catalog9.jpg",
    title: "Бутылочница из джута",
    price: "1500 р",
  },
  {
    img: "../images/catalog10.jpg",
    title: "Лежанка для питомцев",
    price: "От 3.000 р",
  },
  {
    img: "../images/catalog11.jpg",
    title: "Набор корзин «Свадебные»",
    price: "От 3.000 р",
  },
  {
    img: "../images/catalog12.jpg",
    title: "Корзина «Рыбка»",
    price: "1200 р",
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
