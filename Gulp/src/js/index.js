$(function () {
  let runScroll = function () {
    $('a[href^="#"]').on('click', function () {
      let speed = 400;
      let href = $(this).attr("href");
      let $target = $(href == "#" || href == "" ? 'html' : href);
      let position = $target.offset().top - 100;
      $('body, html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  };

  let unlockCheckBox = function () {
    let $trigger = $('.header__navi a');
    let $target = $('input[type = "checkbox"]');
    $trigger.on('click', function () {
      $target.prop('checked', false);
    });
  }

  runScroll();
  unlockCheckBox();
});