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

  $('.search__btn').on('click', function () {
    search__btn();
  });

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
      .done(function (data) {
        success(data);
      }).fail(function () {
        failMessage();
      })
  };

  let failMessage = function() {
    $('.lists').after('<div class="datacomment"></div>');
    $datacomment = $('.datacomment');
    $datacomment.html('<p class="failmessage">データ通信できませんでした。<br>接続を確認してください。</p>');
  };
});