/**
  * （説明）
  * @type {number} slideWidth ← サムネイル画像の横幅
  * @type {string} slideNum ← サムネイル画像の数
  * @type {array} array ← サムネイル画像の配列
  * @type {string} point ← 座標
  *
**/

$(function(){
  var flickStart, flickMove, flickEnd;

	$(".swipe-photo-item").on({touchstart:function(event){
      flickStart(event);
	  },

	  touchmove:function(event){
	    flickMove(event);
	  },

	  touchend:function(event){
	    flickEnd(event);
	  }
  });

  (function(){
    var slideWidth=$(".swipe-photo-thumbnail").width(),
	  slideNum=$(".swipe-photo-item").length,
	  array=[],
	  point={
      x:undefined,
      thisX:undefined,
      startX:undefined,
      moveX:undefined
    };


    for(var i=0; i<=slideNum; i++){
      array[i] = -i*slideWidth
    }

    $(".swipe-photo-container").width(slideWidth*slideNum);

    flickStart = function flickStart(event){
      point.thisX = parseInt($(".swipe-photo-container").css("left"));
	    point.startX = event.originalEvent.changedTouches[0].pageX-point.thisX
    }

    flickMove = function flickMove(event){
      event.preventDefault();
	    point.x=event.originalEvent.changedTouches[0].pageX;

	    if(point.x - point.startX >= 0){
	      point.moveX=0
	    }else{
	      if(point.x-point.startX <= array[slideNum-1]){
	        point.moveX = array[slideNum-1]
	      }else{
	        point.moveX = point.x-point.startX
	      }
	    }
	    $(".swipe-photo-container").css({left:point.moveX});
    }

    flickEnd = function flickEnd(event){
      var num = "";

	    for(var k=0; k<slideNum; k++){
	      if(array[k]+(slideWidth/2) > point.moveX && point.moveX >= array[k+1]+(slideWidth/2)){
			    num=k
		    }
		  }
	    $(".swipe-photo-container").animate({left:array[num]},400);
    }
  })();
});