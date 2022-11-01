$(document).ready(() => {
  let cardTitle = $(".novelties__content__text-wrapper__title");
  let cardImg = $('.novelties__image');
  let cardDesc = $('.novelties__content__text-wrapper__text');

  for (let i = 0; i < cards.length; i++) {
    if (window.location.href.indexOf(cards[i].code) != -1) {
        $(cardTitle).text(cards[i].title);
        $(cardImg).attr('src', cards[i].img);
        $(cardDesc).text(cards[i].desc);
      }
  }
});
