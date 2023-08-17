$(document).ready(function () {
  $(".menu").on("click", function () {
    $(".menu-mobile").show();
  });

  $(".menu-close").click(function () {
    $(".menu-mobile").hide();
  });
});
