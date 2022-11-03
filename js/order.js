$(document).ready(() => {
  const contentItems = $(".favourite__items");
  const template = document.querySelector(".catalog-template-card").content;

  function createElement(img, title, price, code) {
    let element = template.cloneNode(true);
    const heart = element.querySelector(
      ".catalog-page__items__item__wrapper__like"
    );
    const elementImg = element.querySelector(".catalog-page__items__item__img");
    element.querySelector(".catalog-page__items__item__text").textContent =
      title;
    element.querySelector(
      ".catalog-page__items__item__wrapper__price"
    ).textContent = String(price) + " р";
    elementImg.src = img;

    $(elementImg).click(() => {
      $(location).attr("href", "/pages/catalog-card.html" + "#" + code);
    });

    $(heart).click(() => {
      localStorage.setItem(
        "item",
        localStorage.getItem("item").replace(title, "")
      );
      localStorage.setItem(
        "basket",
        localStorage.getItem("basket").replace(title, "")
      );
      location.reload();
    });

    return element;
  }

  for (let i = 0; i < cards.length; i++) {
    if (~localStorage.getItem("basket").indexOf(cards[i].title)) {
      contentItems.prepend(
        createElement(
          cards[i].img,
          cards[i].title,
          cards[i].price,
          cards[i].code
        )
      );
    }
  }
});
