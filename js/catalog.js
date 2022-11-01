$(document).ready(() => {
  const items = document.querySelector(".catalog-page__items");
  const template = document.querySelector(".catalog-template-card").content;
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
              cards[i].price,
              cards[i].code
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
  function createElement(template, img, title, price, code) {
    const element = template.cloneNode(true);
    const heart = element.querySelector(
      ".catalog-page__items__item__wrapper__like"
    );
    const elementImg = element.querySelector(".catalog-page__items__item__img");
    $(elementImg).click(() => {
      $(location).attr("href", "/pages/catalog-card.html" + "#" + code);
    });
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
    elementImg.src = img;
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
