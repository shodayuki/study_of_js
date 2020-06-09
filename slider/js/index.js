/**
  * （説明）
  * @type {number} current ←クリックしたときの初期値
  * @type {number} num ←要素の幅を取得した後に幅の数値を入れる変数
  * @type {string} numLength ←画像の位置情報を取得するための要素の個数
  * @type {number} numWidth ←要素の幅
  *
  *
**/

$(function(){
  var slideNext, slidePrev;

  $('.next').on('click', function(){
    slideNext();
  });

  $('.prev').on('click', function(){
    slidePrev();
  });

  (function(){
    var current=0;
    var num=0;

    slideNext = function slideNext(){
      var numWidth=$('.slider-list img').eq(current).width();
      var numLength=$('.slider-list img').length;
      current++;
      if(current<numLength){
        num-=numWidth;
      }else{
        num=0;
        current=0;
      }
      $('.slider-list').animate({left:num});
    }

    slidePrev = function slidePrev(){
      var numWidth=$('.slider-list img').eq(current).width();
      var numLength=$('.slider-list img').length;
      current--;
      if(current>=0){
        num+=numWidth;
      }else{
        num=-$('.slider-list img:not(:last)').map(function(){
          return $(this).width();
        }).get().reduce((x,y)=>x+y);
        current=numLength-1;
      }
      $('.slider-list').animate({left:num});
    }
  })();
});