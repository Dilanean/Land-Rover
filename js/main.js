$(function () {
  $(".car-slider, .slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplaySpeed: 2000,
  });

  $(".form__car-grey,.form__car-red").hide();
  $(".form__radio-style--white ").click(function () {
    $(".form__car-white").show();
    $(".form__car-grey").hide();
    $(".form__car-red").hide();
  });
  $(".form__radio-style--red").click(function () {
    $(".form__car-white").hide();
    $(".form__car-grey").hide();
    $(".form__car-red").show();
  });
  $(".form__radio-style--grey").click(function () {
    $(".form__car-white").hide();
    $(".form__car-grey").show();
    $(".form__car-red").hide();
  });

  $(".menu, .car__column").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
