/**
 * @type {string} pageNum ← 表示させるページ
 * @type {string} prevWord ← 表示させるワード
 * @type {string} list ← 表示させる書籍情報
 * @type {string} contentsList ← listで追加する書籍情報
 * @type {string} searchWord ← 検索するワード
 **/

$(function () {
  let pageNum = 0;
  let prevWord = '';

  let zeroMessage = function () {
    $('.lists').after('<div class="comment"></div>');
    $comment = $('.comment');
    $comment.html('<p class="message">検索結果が0件でした。<br>キーワードを変えて検索してください。</p>');
  };

  let failMessage = function() {
    $('.lists').after('<div class="datacomment"></div>');
    $datacomment = $('.datacomment');
    $datacomment.html('<p class="failmessage">データ通信できませんでした。<br>接続を確認してください。</p>');
  };

  let success = function(data) {
    if (data.count > 0) {
      $.each(data.Items, function (i, item) {
        let list = '';
        list += '<li class="lists__item">' +
                  '<div class="lists__item__inner">' +
                    '<a href="' + item.Item.itemUrl + ' "class="lists__item__link" target="_blank">' +
                      '<img src="' + item.Item.largeImageUrl + ' "class="lists__item__img" alt="' + item.Item.title + '">' +
                      '<p class="lists__item__detail">作品名: ' + item.Item.title + '</p>' +
                      '<p class="lists__item__detail">作者: ' + item.Item.author + '</p>' +
                      '<p class="lists__item__detail">出版社: ' + item.Item.publisherName + '</p>' +
                    '</a>' +
                  '</div>' +
                '</li>';
        let contentsList = $('.lists').append(list);
        if (pageNum > 1) {
          $('.lists').prepend(contentsList);
        }
      });
    } else if (data.count === 0) {
      zeroMessage();
    }
  };

  // ボタンクリックの内容
  let search__btn = function () {
    pageNum = pageNum + 1;
    let searchWord = $('#js-search-word').val();
    if (prevWord !== searchWord) {
      pageNum = 1;
      $('ul').empty();
      prevWord = searchWord;
    }
    console.log(searchWord);
    $.ajax({
      url: 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20130522',
      type: 'GET',
      datatype: 'json',
      data: {
        applicationId: '1013041242368735405',
        booksGenreId: '001',
        size: '0',
        hits: '20',
        page: pageNum,
        keyword: searchWord,
      }
    })
      .done(function(data) {
        success(data);
      }).fail(function(){
        failMessage();
      })
  };

  $('.search__btn').on('click', function () {
    search__btn();
  });
});