$(function () {
    $('#change-color').on('click', function () {
        // ボタンを押すと、文字色が変わる
        $('#target').css('color', '#0078ba');
      });
      $('#change-text').on('click', function () {
        // ボタンを押すと文字内容が変わる
        $('#target').text('Hello!');
      });
      $('#fade-out').on('click', function() {
        // ボタンを押すと、フェードアウトで文字が消える
        $('#target').fadeOut();
      });
      $('#fade-in').on('click', function() {
        // ボタンを押すと、フェードインで文字が現れる
      $('#target').fadeIn();
});
});