// свайпер фото и врачей
var centerSwiper = new Swiper('#swiper', {
  slidesPerView: '2',
  spaceBetween: 25,
  touchRatio: 1,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    756: {
      slidesPerView: '4',
      spaceBetween: 30,
    }
  }
});

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
