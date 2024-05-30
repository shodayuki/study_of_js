/**
  * （説明）
  * @type {array} cardNum ← カードの配列
  * @type {string} totalCard ← カードの枚数
  * @param {object} $card ← カードの引数
  * @type {string} $firstCard ← 比較するカード1枚目
  * @type {string} $secondCard ← 比較するカード2枚目
  * @type {firstNum} $firstNum ← カードに書かれている数字
  * @type {secondNum} $secondNum ← カードに書かれてる数字
  * @type {string} $openedCard ← めくられたカード
  *
  *
**/

$(function(){
  let cardNum = [];
  let totalCard = 16;
  let f = false;

  function open($card) {
    $card
      .css("pointer-events", "none")
      .text($card.data("num"))
      .addClass("fliped");
    if ($(".fliped").length === 2){
      compare();
    }else{
      f = false
    }
  }

  function close($card) {
    $(".fliped")
      .css("pointer-events", "")
      .text("?")
      .removeClass("fliped");
  }

  function compare() {
    let $firstCard = $(".fliped").eq(0);
    let $secondCard = $(".fliped").eq(1);

    let firstNum = $firstCard.data("num");
    let secondNum = $secondCard.data("num");

    if (firstNum === secondNum) {
      $firstCard.add($secondCard).removeClass("unopened");
      $(".fliped").removeClass("fliped");
      f = false;

      if ($(".unopened").length === 0) {
        alert("Game Clear!!");
      }
    } else {
      setTimeout(function() {
        close();
        f = false;
      }, 1000);
    }
  }

  (() => {
    for (var i = 1; i <= totalCard / 2; i++) cardNum.push(i, i);
    cardNum
      .sort(() => {
        return Math.random() - Math.random();
      })
      .map(num => {
        return "<li class='unopened' data-num='" + num + "'>?</li>";
      })
      .forEach(element => {
        $(".lists").append(element);
      });
  })();

  $(".lists li").on("click", function() {
    if (f) return;
    f = true;
    open($(this));
  });
});