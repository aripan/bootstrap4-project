// ? jQuery code to activate tooltip on our page
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });

  // ? To add both play and pause buttons
  // $("#carousel-pause").click(function () {
  //   $("#mycarousel").carousel("pause");
  // });
  // $("#carousel-play").click(function () {
  //   $("#mycarousel").carousel("cycle");
  // });

  // ? To mak eonly one button, that works for both purpose
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
});

// ! Need to convert JQuery to JS later on.
