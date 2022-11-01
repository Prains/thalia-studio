let pageContent = [
  (page = document.querySelector(".page")),
  (footer = document.querySelector(".footer")),
  (header = document.querySelector(".header")),
];
for (let i = 0; i < pageContent.length; i++) {
  pageContent[i].classList.toggle("display");
}
$(window).on("load", () => {
  $(".preloader-3").hide();
  for (let i = 0; i < pageContent.length; i++) {
    pageContent[i].classList.toggle("display");
  }
});
