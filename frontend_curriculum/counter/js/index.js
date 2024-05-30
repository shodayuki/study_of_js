$(() => {
  var count = 0;
  $('#plusBtn').on('click', () => {
    count = count + 1;
    display();
  });

  $('#minusBtn').on('click', () => {
    count = count - 1;
    display();
  });

  $('#resetBtn').on('click', () => {
    count = 0;
    display();
  })

  function display() {
    $('#display').text(count);
  }
});