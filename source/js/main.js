const body = document.querySelector('body');
const header = document.querySelector('header');
const width = document.body.clientWidth;
const height = document.body.clientHeigh;
const anchors = document.querySelectorAll('a[href*="#"]'); // якоря

// мобильное меню
let menuToggle = header.querySelector(".menu-toggle");
menuToggle.addEventListener('click', function(evt) {
  body.classList.toggle('noscroll');
  this.classList.toggle('active');
  header.classList.toggle('active');
});

// навигационное подменю на мобильном
if (width <= 756) {
  let navSubListLinks = header.querySelectorAll('.main-nav-sub');     // ссылки со списками
  let navSubListAll = header.querySelectorAll('.main-nav__sublist');  // списки

  for (let navSubListLink of navSubListLinks) {
    navSubListLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      let currentSubList = navSubListLink.nextElementSibling;

      this.classList.toggle('active');
      currentSubList.classList.toggle('active');

    });
  }


  // $('.main-nav-sub').click(function(evt) {
  //   evt.preventDefault();
  //   var currentSublist = $(this).closest('.main-nav__item').find('.main-nav__sub-list');
  //   $('.main-nav__sub-list').not(currentSublist).slideUp();
  //   currentSublist.slideToggle();
  // });
}
