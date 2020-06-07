$(function(){
  $(".input").on("keyup",　function(){
    let count = 30 - $(this).val().replace(/\s+/g, '').length;

    $(".input").text(count);

    if (count < 0) {
      $(".lest-count").addClass('red');
    } else {
      $(".lest-count").removeClass('red');
    }
    
    $(".lest-count").text(count);
  });
});