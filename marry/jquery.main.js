$(window).on("load", function () {
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;

  function slideShow() {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    console.log(slideIndex);
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 3000);
  }
  slideShow();
});
