const items = document.querySelector(".catalog-page__items");
const template = document.querySelector(".catalog-template-card").content;
const cards = [
  {
    img: "../images/catalog1.jpg",
    title: "Торба",
    price: 4200,
    order: 1,
    type: 0,
  },
  {
    img: "../images/catalog2.jpg",
    title: "Сумка с бахромой",
    price: 5200,
    order: 2,
    type: 0,
  },
  {
    img: "../images/catalog3.jpg",
    title: "Дорожка на стол",
    price: 2000,
    order: 3,
    type: 1,
  },
  {
    img: "../images/catalog4.jpg",
    title: "Салфетница",
    price: 1500,
    order: 4,
    type: 1,
  },
  {
    img: "../images/catalog5.jpg",
    title: "Сумка Таби",
    price: 3200,
    order: 5,
    type: 0,
  },
  {
    img: "../images/catalog6.jpg",
    title: "Сумка летняя Сансара",
    price: 5500,
    order: 6,
    type: 0,
  },
  {
    img: "../images/catalog7.jpg",
    title: "Сумка с рогаликами",
    price: 4200,
    order: 7,
    type: 0,
  },
  {
    img: "../images/catalog8.jpg",
    title: "Кардхолдер",
    price: 500,
    order: 8,
    type: 1,
  },
  {
    img: "../images/catalog9.jpg",
    title: "Бутылочница из джута",
    price: 1500,
    order: 9,
    type: 1,
  },
  {
    img: "../images/catalog10.jpg",
    title: "Лежанка для питомцев",
    price: 3000,
    order: 10,
    type: 1,
  },
  {
    img: "../images/catalog11.jpg",
    title: "Набор корзин «Свадебные»",
    price: 3000,
    order: 11,
    type: 1,
  },
  {
    img: "../images/catalog12.jpg",
    title: "Корзина «Рыбка»",
    price: 1200,
    order: 12,
    type: 1,
  },
];

const filterPopup = document.querySelector(
  ".catalog-page__filter__search__dropdown__popup"
);
const filterText = document.querySelector(
  ".catalog-page__filter__search__dropdown__text"
);
const popupText = document.querySelectorAll(
  ".catalog-page__filter__search__dropdown__popup__text"
);
const bagsButton = document.querySelectorAll(
  ".catalog-page__filter__items__bags"
);
const decorButton = document.querySelectorAll(
  ".catalog-page__filter__items__decor"
);
const allButton = document.querySelectorAll(
  ".catalog-page__filter__items__all"
);
const mobileFilter = document.querySelector(
  ".catalog-page__filter__mobile__filters"
);
const mobileFilterPopup = document.querySelector(
  ".catalog-page__filter__mobile__popup"
);
const pageSearch = document.querySelector(
  ".catalog-page__filter__search__input"
);
const mobilePageSearch = document.querySelector(
  ".catalog-page__filter__mobile__search"
);
const mobileSearch = document.querySelector(
  ".catalog-page__filter__mobile__filters__search"
);
const mobileSearchWrapper = document.querySelector(
  ".catalog-page__filter__mobile__search__wrapper"
);
const mobileSearchCross = document.querySelector(
  ".catalog-page__filter__mobile__search__img"
);
const filter = [
  {
    function: () => {
      cards.sort((a, b) => {
        return a.price - b.price;
      });
      removeElements();
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      cards.sort((a, b) => {
        return b.price - a.price;
      });
      removeElements();
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      removeElements();
      cards.sort((a, b) => {
        return b.order - a.order;
      });
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      removeElements();
      cards.sort((a, b) => {
        return a.order - b.order;
      });
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      cards.sort((a, b) => {
        return a.price - b.price;
      });
      removeElements();
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      cards.sort((a, b) => {
        return b.price - a.price;
      });
      removeElements();
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      removeElements();
      cards.sort((a, b) => {
        return b.order - a.order;
      });
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
  {
    function: () => {
      removeElements();
      cards.sort((a, b) => {
        return a.order - b.order;
      });
      for (let i = 0; i < cards.length; i++) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      }
    },
  },
];

filter[0].function();

mobileFilter.addEventListener("click", () => {
  mobileFilterPopup.classList.toggle("undisplay");
});

function createElement(template, img, title, price) {
  const element = template.cloneNode(true);
  const heart = element.querySelector(
    ".catalog-page__items__item__wrapper__like"
  );
  if (localStorage.getItem("item") !== null) {
    if (~localStorage.getItem("item").indexOf(title)) {
      heart.classList.toggle("liked");
    }
  }
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
    if (
      heart.classList.contains("liked")
        ? localStorage.setItem("item", localStorage.getItem("item") + title)
        : localStorage.setItem(
            "item",
            localStorage.getItem("item").replace(title, "")
          )
    );
  });
  const basket = element.querySelector(
    ".catalog-page__items__item__wrapper__basket"
  );
  if (localStorage.getItem("basket") !== null) {
    if (~localStorage.getItem("basket").indexOf(title)) {
      basket.classList.toggle("ordered");
    }
  }
  basket.addEventListener("click", () => {
    basket.classList.toggle("ordered");
    if (
      basket.classList.contains("ordered")
        ? localStorage.setItem("basket", localStorage.getItem("basket") + title)
        : localStorage.setItem(
            "basket",
            localStorage.getItem("basket").replace(title, "")
          )
    );
  });
  element.querySelector(".catalog-page__items__item__img").src = img;
  element.querySelector(".catalog-page__items__item__text").textContent = title;
  element.querySelector(
    ".catalog-page__items__item__wrapper__price"
  ).textContent = String(price) + " р";
  return element;
}

function removeElements() {
  const element = items.querySelectorAll(".catalog-page__items__item");
  for (let i = 0; i < element.length; i++) {
    element[i].remove();
  }
}

filterText.addEventListener("click", () => {
  filterPopup.classList.toggle("flex");
});

for (let i = 0; i < popupText.length; i++) {
  popupText[i].addEventListener("click", () => {
    filterText.innerHTML = popupText[i].innerHTML;
    filter[i].function();
  });
}

for (let i = 0; i < bagsButton.length; i++) {
  bagsButton[i].addEventListener("click", () => {
    removeElements();
    bagsButton[i].classList.add("selected");
    decorButton[i].classList.remove("selected");
    allButton[i].classList.remove("selected");
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].type == 0)
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
    }
  });
}

for (let i = 0; i < decorButton.length; i++) {
  decorButton[i].addEventListener("click", () => {
    removeElements();
    bagsButton[i].classList.remove("selected");
    decorButton[i].classList.add("selected");
    allButton[i].classList.remove("selected");
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].type == 1)
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
    }
  });
}

for (let i = 0; i < allButton.length; i++) {
  allButton[i].addEventListener("click", () => {
    removeElements();
    bagsButton[i].classList.remove("selected");
    decorButton[i].classList.remove("selected");
    allButton[i].classList.add("selected");
    for (let i = 0; i < cards.length; i++) {
      items.prepend(
        createElement(template, cards[i].img, cards[i].title, cards[i].price)
      );
    }
  });
}

pageSearch.addEventListener("change", () => {
  removeElements();
  for (let i = 0; i < cards.length; i++) {
    if (~cards[i].title.toLowerCase().indexOf(pageSearch.value))
      items.prepend(
        createElement(template, cards[i].img, cards[i].title, cards[i].price)
      );
  }
});

mobilePageSearch.addEventListener("change", () => {
  removeElements();
  for (let i = 0; i < cards.length; i++) {
    if (~cards[i].title.toLowerCase().indexOf(mobilePageSearch.value))
      items.prepend(
        createElement(template, cards[i].img, cards[i].title, cards[i].price)
      );
  }
});

mobileSearch.addEventListener("click", () => {
  mobileSearchWrapper.classList.toggle("flex");
});

mobileSearchCross.addEventListener("click", () => {
  mobileSearchWrapper.classList.toggle("flex");
});
