const body = document.querySelector('body');
const header = document.querySelector('header');
const width = document.body.clientWidth;
const height = document.body.clientHeigh;
const anchors = document.querySelectorAll('a[href*="#"]'); // якоря
const overlay = document.querySelector('.overlay');

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

// вкладка "подробнее" у списка
let moreBtnArr = document.querySelectorAll('.list__more-info');
for (let moreBtn of moreBtnArr) {
  let currentMoreBlock = moreBtn.closest('.list__more-wrap').querySelector('.list__more-block');
  let currentModalClose = currentMoreBlock.querySelector('.list__more-close');
  let mainMoreBlock = body.querySelector('.list__main-wrap');

  // если элемент в фокусе с клавиатуры - показать вкладку
  if (width > 756) {
    moreBtn.onfocus = () => {
      currentMoreBlock.classList.add('focus');
      mainMoreBlock.classList.add('tab');
    };

    moreBtn.onblur = () => {
      currentMoreBlock.classList.remove('focus');
      mainMoreBlock.classList.remove('tab');
    };
  }

  // отдельное модальное окно
  if (width <= 756) {
    moreBtn.addEventListener('click', function(evt) {

      // let currentMoreBlock = moreBtn.nextElementSibling;
      // let currentMoreBlock = moreBtn.closest('.list__more-wrap').querySelector('.list__more-block');
      // let currentModalClose = currentMoreBlock.querySelector('.list__more-close');

      openModal(currentMoreBlock);

      currentModalClose.onclick = function() {
        closeModal(currentMoreBlock);
      };

      // шаблон
      // let infoContainer = body.querySelector('.list-more__mobile-container');
      // let infoTemplate = body.querySelector('#list-more-block').content;
      // let infoTemplateBlock = infoTemplate.querySelector('.list__more-block');

      // // получаем текст из выбранного элемента
      // let infoTitleValue = currentMoreBlock.querySelector('.list__more-title').textContent;
      // let infoTextValue = currentMoreBlock.querySelector('.list__more-text').textContent;

      // // записываем полученные данные в шаблон
      // let infoTemplateTitle = infoTemplateBlock.querySelector('.list__more-title');
      // let infoTemplateText = infoTemplateBlock.querySelector('.list__more-text');
      // infoTemplateTitle.textContent = infoTitleValue;
      // infoTemplateText.textContent = infoTextValue;

      // // клонируем и добавляем шаблон
      // let info = infoTemplateBlock.cloneNode(true);
      // infoContainer.appendChild(info);

      // infoTemplateTitle.textContent = '';
      // infoTemplateText.textContent = '';

      // // оперделяем ключевые элементы в новом модальном окне
      // let modalMoreBlock = infoContainer.querySelector('.list__more-block');
      // let currentModalClose = infoContainer.querySelector('.list__more-close');

      // openModal(modalMoreBlock);
      // currentModalClose.onclick = function() {
      //   closeModal(modalMoreBlock);
      // };
    })
  }
}

function openModal(element) {
  element.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('noscroll');
}

function closeModal(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('noscroll');
  }
}
