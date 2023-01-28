$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu,.header__span').toggleClass('active');
    $('.page').toggleClass('lock');
  });
});
