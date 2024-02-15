// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

const servicesSliders = document.querySelectorAll('.services-images')
servicesSliders.forEach(sliderEl => {
  const swiper = new Swiper(sliderEl, {
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 22,
    pagination: {
      el: sliderEl.querySelector('.swiper-pagination')
    },
    navigation: {
      prevEl: sliderEl.closest('.services__images').querySelector('.swiper-button--prev'),
      nextEl: sliderEl.closest('.services__images').querySelector('.swiper-button--next'),
    }
  });
})

const clientsSliderEl = document.querySelector('.clients-slider')

const clientsSlider = new Swiper(clientsSliderEl, {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: clientsSliderEl.closest('.clients__list').querySelector('.swiper-pagination')
  },
  navigation: {
    prevEl: clientsSliderEl.closest('.clients__list').querySelector('.clients-slider__btn-prev'),
    nextEl: clientsSliderEl.closest('.clients__list').querySelector('.clients-slider__btn-next'),
  }
});



const teamSliderEl = document.querySelector('.team-slider')

const teamSlider = new Swiper(teamSliderEl, {
  slidesPerView: 1.275,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: teamSliderEl.closest('.team__list').querySelector('.swiper-pagination')
  },
  navigation: {
    prevEl: teamSliderEl.closest('.team__list').querySelector('.team-slider__btn-prev'),
    nextEl: teamSliderEl.closest('.team__list').querySelector('.team-slider__btn-next'),
  }
});

const reviewsSliderEl = document.querySelector('.reviews-slider')

const reviewsSlider = new Swiper(reviewsSliderEl, {
  slidesPerView: 2.75,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: reviewsSliderEl.closest('.reviews__list').querySelector('.swiper-pagination')
  },
  navigation: {
    prevEl: reviewsSliderEl.closest('.reviews__list').querySelector('.reviews-slider__btn-prev'),
    nextEl: reviewsSliderEl.closest('.reviews__list').querySelector('.reviews-slider__btn-next'),
  }
});

const moviesSliderEl = document.querySelector('.movies-slider')

const moviesSlider = new Swiper(moviesSliderEl, {
  slidesPerView: 1.33,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: moviesSliderEl.closest('.movies__list').querySelector('.swiper-pagination')
  },
  navigation: {
    prevEl: moviesSliderEl.closest('.movies__list').querySelector('.movies-slider__btn-prev'),
    nextEl: moviesSliderEl.closest('.movies__list').querySelector('.movies-slider__btn-next'),
  }
});




const lastPostsEl = document.querySelector('.last-posts-slider')

const lastPostsSlider = new Swiper(lastPostsEl, {
  slidesPerView: 3.65,
  spaceBetween: 20,
  grid: {
    fill: 'column',
    rows: 2,
  },
  pagination: {
    el: lastPostsEl.closest('.last-posts__list').querySelector('.swiper-pagination')
  },
  navigation: {
    prevEl: lastPostsEl.closest('.last-posts__list').querySelector('.last-posts-slider__btn-prev'),
    nextEl: lastPostsEl.closest('.last-posts__list').querySelector('.last-posts-slider__btn-next'),
  }
});


const youtubeSliderEl = document.querySelector('.youtube-slider')

const youtubeSlider = new Swiper(youtubeSliderEl, {
  slidesPerView: 2.75,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: youtubeSliderEl.closest('.youtube__list').querySelector('.swiper-pagination')
  },
  navigation: {
    prevEl: youtubeSliderEl.closest('.youtube__list').querySelector('.youtube-slider__btn-prev'),
    nextEl: youtubeSliderEl.closest('.youtube__list').querySelector('.youtube-slider__btn-next'),
  }
});

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
