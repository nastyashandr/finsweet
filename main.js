$(function () {
  $("#rateYo").rateYo({
    rating: 4.5,
    starWidth: "29px",
    spacing: "10px",
    ratedFill: "#ffb648",
    normalFill: "#E5E5E5",
    readOnly: true,
    halfStar: true,
    starSvg: `<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5288 1.56361C12.6658 -0.521209 15.6594 -0.521213 16.7964 1.56361L19.0882 5.766C19.5197 6.55718 20.284 7.11248 21.1698 7.27836L25.8747 8.15942C28.2089 8.59653 29.1339 11.4436 27.5025 13.1692L24.214 16.6475C23.5949 17.3023 23.303 18.2008 23.4189 19.0945L24.0349 23.8414C24.3405 26.1964 21.9186 27.956 19.7733 26.9376L15.4491 24.8849C14.635 24.4985 13.6902 24.4985 12.8761 24.8849L8.55187 26.9376C6.40659 27.956 3.98474 26.1964 4.29031 23.8414L4.90627 19.0945C5.02223 18.2008 4.7303 17.3023 4.11117 16.6475L0.822692 13.1692C-0.808741 11.4436 0.116319 8.59653 2.45046 8.15943L7.15538 7.27836C8.04118 7.11248 8.80548 6.55718 9.23697 5.766L11.5288 1.56361Z" fill="#COLOR#"/>
              </svg>`,
  });

  var mixer = mixitup(".blog__list");

  $(".blog__filter-btn").on("click", function () {
    $(".blog__filter-btn").removeClass("blog__filter-btn--active");
    $(this).addClass("blog__filter-btn--active");
  });

  $(".reviews__slider").slick({
    arrows: false,
    slidesToShow: 2,
    infinity: true,
    dots: true,
    appendDots: $(".reviews__dots"),
    waitForAnimate: false,
  });
  $(".reviews__prev").on("click", function (e) {
    e.preventDefault();
    $(".reviews__slider").slick("slickPrev");
  });
  $(".reviews__next").on("click", function (e) {
    e.preventDefault();
    $(".reviews__slider").slick("slickNext");
  });

  $(".questions__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("questions__acc-link--active")) {
      $(this).removeClass("questions__acc-link--active");
      $(this).children(".questions__acc-text").slideUp();
    } else {
      $(".questions__acc-link").removeClass("questions__acc-link--active");
      $(".questions__acc-text").slideUp();
      $(this).addClass("questions__acc-link--active");
      $(this).children(".questions__acc-text").slideDown();
    }
  });

  $("a[href^='#']").on("click", function (e) {
    // Проверяем, что это не пустая ссылка
    if ($(this).attr("href") !== "#") {
      e.preventDefault();
      var id = $(this).attr("href");

      // Проверяем, существует ли элемент с таким id
      if ($(id).length) {
        var top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 800);
      }
    }
  });

  setInterval(()=>{
    if ($(window).scrollTop() > 0 && $('.header__menu').hasClass('header__menu--open') === false) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  }, 0)

  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".header__menu").toggleClass("header__menu--open");
    $(".overlay").toggleClass("overlay--show");
    $(".burger").toggleClass("active");
  });
});
