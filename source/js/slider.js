// свайпер фото и врачей
// var centerSwiper = new Swiper('#swiper', {
//   slidesPerView: '2',
//   spaceBetween: 25,
//   touchRatio: 1,
//   navigation: {
//     nextEl: '.swiper__button-next',
//     prevEl: '.swiper__button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
//   breakpoints: {
//     756: {
//       slidesPerView: '4',
//       spaceBetween: 30,
//     }
//   }
// });

function renderSwiper () {

  // параметры свайпера, не включая элементы навигации и скроллбар
  var swiperParam = {
    slidesPerView: '2',
    spaceBetween: 25,
    touchRatio: 1,
    navigation: {},
    scrollbar: {
      draggable: true,
    },
    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 30,
      }
    }
  }

  for (var i = 0; i < swiperArr.length; i++) {

    var width = document.body.clientWidth;
    var currentSlidesLength = swiperArr[i].querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

    var limitForOverflow;
    if (width > 750) {
      limitForOverflow = 4;
    } else if (width <= 750) {
      limitForOverflow = 2;
    }

    // скрыть элементы навигации, если слайдов меньше 4 (десктоп) или 2 (телефон)
    if (currentSlidesLength <= limitForOverflow) {
      swiperArr[i].parentNode.classList.add('nav-hide');
    }

    // элементы навигации
    var swiperCurrent = swiperArr[i];
    var swiperCurrentID = swiperArr[i].id;

    swiperParam.navigation.nextEl = '#'+swiperCurrentID+'~.swiper__button-next';
    swiperParam.navigation.prevEl = '#'+swiperCurrentID+'~.swiper__button-prev';
    swiperParam.scrollbar.el = '#'+swiperCurrentID+' .swiper__scrollbar';

    var newSwiper = new Swiper (swiperCurrent, swiperParam);
  }
}

// массив со всеми свайперами на странице
var swiperArr = document.querySelectorAll('.swiper-container');

renderSwiper();
