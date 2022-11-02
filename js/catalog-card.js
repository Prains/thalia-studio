$(document).ready(() => {
  let cardTitle = $(".novelties__content__text-wrapper__title");
  let cardImg = $(".novelties__image");
  let cardDesc = $(".novelties__content__text-wrapper__text");
  let galImg = $(".novelties__cards");
  let cardLink = $('.card-link');
  for (let i = 0; i < galImg.length; i++) {
    $(galImg).hide();
  }

  for (let i = 0; i < cards.length; i++) {
    if (window.location.href.indexOf(cards[i].code) != -1) {
      $(cardTitle).text(cards[i].title);
      $(cardImg).attr("src", cards[i].img);
      $(cardDesc).text(cards[i].desc);
      for (let v = 0; v < cards[i].imges.length; v++) {
        $(cardLink).attr('data-src', $(galImg[0]).attr("src"));
        $(galImg[v]).attr("src", cards[i].imges[v]).show();
      }
    }
  }
  for (let i = 0; i < galImg.length; i++) {
    $(galImg[i]).click(() => {
      $(".novelties__cards").removeClass("selected-card");
      $(galImg[i]).addClass("selected-card");
      $(cardImg).fadeOut(400, () => {
        $(cardLink).attr('data-src', $(galImg[i]).attr("src"));
        $(cardImg).attr("src", $(galImg[i]).attr("src")).fadeIn();
      });
    });
  }
});
