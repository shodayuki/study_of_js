$(function () {
  $(".nav").find("li").on('click', function () {
    let $contents = $(".contents");
    let $contentsList = $contents.find("li");
    let $box = $(this).index();

    $contentsList.addClass("is-hidden").eq($box).removeClass("is-hidden");
  });
});