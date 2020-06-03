$(() => {
  $('#pageTop').hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 1000){
      $('#pageTop').fadeIn();
    } else {
      $('#pageTop').fadeOut();
    }
  });

  $('#pageTop').on('click', function(){
    $('body,html').animate({
      scrollTop:0
    }, 500);
    return false;
  });
});