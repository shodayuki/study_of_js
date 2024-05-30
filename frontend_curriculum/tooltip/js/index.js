$(function () {
  let description = $("<div class='tooltip' style='display: none;'>description</div>");
  $(".tooltip-body").append(description);

  $(".tooltip-body").hover(function () {
    description.stop(true, false);
    description.fadeIn();
  }, function() {
    description.stop(true, false);
    description.fadeOut();
  });

  $(".tooltip-body").on("mousemove", function(e){
    let x = e.pageX,
        y = e.pageY;

    description.css({
      left: x,
      top: y
    });
  });
});