$(document).ready(() => {
  const items = document.querySelector(".catalog-page__items");
  const template = document.querySelector(".catalog-template-card").content;
  const cards = [
    {
      img: "../images/catalog1.jpg",
      title: "Сумка-Торба",
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
  const filterPopup = $(".catalog-page__filter__search__dropdown__popup")[0];
  const filterText = $(".catalog-page__filter__search__dropdown__text")[0];
  const popupText = $(".catalog-page__filter__search__dropdown__popup__text");
  const bagsButton = $(".catalog-page__filter__items__bags");
  const decorButton = $(".catalog-page__filter__items__decor");
  const allButton = $(".catalog-page__filter__items__all");
  const mobileFilter = $(".catalog-page__filter__mobile__filters")[0];
  const mobileFilterPopup = $(".catalog-page__filter__mobile__popup")[0];
  const pageSearch = $(".catalog-page__filter__search__input")[0];
  const mobilePageSearch = $(".catalog-page__filter__mobile__search")[0];
  const mobileSearch = $(".catalog-page__filter__mobile__filters__search")[0];
  const mobileSearchWrapper = $(
    ".catalog-page__filter__mobile__search__wrapper"
  )[0];
  const mobileSearchCross = $(".catalog-page__filter__mobile__search__img")[0];
  const filter = [
    {
      function: () => {
        cards.sort((a, b) => {
          return a.price - b.price;
        });
        removeElements();
        for (let i = 0; i < cards.length; i++) {
          items.prepend(
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
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
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
          );
        }
      },
    },
  ];
  function buttonClasses(add) {
    $(".catalog-page__filter__items__bags").removeClass("selected");
    $(".catalog-page__filter__items__decor").removeClass("selected");
    $(".catalog-page__filter__items__all").removeClass("selected");
    $(add).addClass("selected");
  }
  function renderTypes(type) {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].type == type) {
        items.prepend(
          createElement(template, cards[i].img, cards[i].title, cards[i].price)
        );
      } else if (type == "default") {
        filter[0].function();
      }
    }
  }
  function makeSearch(listener) {
    $(listener).change(() => {
      removeElements();
      for (let i = 0; i < cards.length; i++) {
        if (~cards[i].title.toLowerCase().indexOf(listener.value.toLowerCase()))
          items.prepend(
            createElement(
              template,
              cards[i].img,
              cards[i].title,
              cards[i].price
            )
          );
      }
    });
  }
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
    $(heart).click(() => {
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
    $(basket).click(() => {
      basket.classList.toggle("ordered");
      if (
        basket.classList.contains("ordered")
          ? localStorage.setItem(
              "basket",
              localStorage.getItem("basket") + title
            )
          : localStorage.setItem(
              "basket",
              localStorage.getItem("basket").replace(title, "")
            )
      );
    });
    element.querySelector(".catalog-page__items__item__img").src = img;
    element.querySelector(".catalog-page__items__item__text").textContent =
      title;
    element.querySelector(
      ".catalog-page__items__item__wrapper__price"
    ).textContent = String(price) + " р";
    return element;
  }
  function removeElements() {
    $(".catalog-page__items__item").remove();
  }
  function resetMobile(listener) {
    $(listener).click(() => {
      mobileSearchWrapper.classList.toggle("flex");
      mobilePageSearch.value = "";
      filter[0].function();
    });
  }
  function buttonRender(button, types) {
    $(button).click(() => {
      removeElements();
      buttonClasses(button);
      renderTypes(types);
    });
  }
  filter[0].function();
  makeSearch(pageSearch);
  makeSearch(mobilePageSearch);
  resetMobile(mobileSearch);
  resetMobile(mobileSearchCross);
  for (let i = 0; i < 2; i++) {
    buttonRender(bagsButton[i], 0);
    buttonRender(decorButton[i], 1);
    buttonRender(allButton[i], "default");
  }
  $(mobileFilter).click(() => {
    mobileFilterPopup.classList.toggle("undisplay");
  });
  $(filterText).click(() => {
    filterPopup.classList.toggle("flex");
  });
  for (let i = 0; i < popupText.length; i++) {
    $(popupText[i]).click(() => {
      $(filterText).text($(popupText[i]).text());
      filter[i].function();
    });
  }
});
