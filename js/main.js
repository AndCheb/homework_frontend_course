import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const body = document.querySelector('.page__body');
const burger = document.querySelector('.burger');
const burgerOveraly = document.querySelector('.burger__overlay');
const burgerOpenButton = document.querySelector('.burger__open');
const burgerCloseButton = document.querySelector('.burger__close');
const burgerLinks = document.querySelectorAll('.burger__link'); 

const video = document.querySelector('.video__display');
const videoPlay = document.querySelector('.video__play');

const slider = document.querySelector('.works__info');
const sliderList = document.querySelector('.works__list');
const sliderItems = document.querySelectorAll('.works__item');
const dots = document.querySelector('.dots');

let sliderActive = false;

let windowWidth = window.matchMedia("(max-width: 1000px)");

const addSwiperClasses = value => {
  if (value) {
    slider.classList.add('swiper');
    sliderList.classList.add('swiper-wrapper');
    sliderItems.forEach(item => {
      item.classList.add('swiper-slide');
    });
    dots.classList.add('swiper-pagination');
  } else {
    slider.classList.remove('swiper');
    sliderList.classList.remove('swiper-wrapper');
    sliderItems.forEach(item => {
      item.classList.remove('swiper-slide');
    });
  }
}

const createSwiper = suitableWidth => {
  addSwiperClasses(true);

  let swiper = new Swiper('.swiper', {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      }
    },
  });

  if (!suitableWidth) {
    swiper.destroy();
    addSwiperClasses(false);
    sliderActive = false;
  }
}

if (windowWidth.matches && !sliderActive) {
  createSwiper(true);
} 

windowWidth.addEventListener('change', () => {
  if (windowWidth.matches && !sliderActive) {
    createSwiper(true);
  } else {
    createSwiper(false); 
  }
});

const burgerOpen = () => {
  body.classList.add('scroll-none');
  burger.classList.add('burger--visible');
  burgerCloseButton.classList.add('burger__close--visible');
  burgerOveraly.classList.add('burger__overlay--active');
  burgerLinks.forEach(item => {
    item.addEventListener('click', () => {
      burgerClose();
    });
  });
}

const burgerClose = () => {
  body.classList.remove('scroll-none');
  burger.classList.remove('burger--visible');
  burgerOveraly.classList.remove('burger__overlay--active');
}

burgerOpenButton.addEventListener('click', () => {
  burgerOpen();
});

burgerCloseButton.addEventListener('click', () => {
  burgerClose();
});

burgerOveraly.addEventListener('click', () => {
  burgerClose();
});

videoPlay.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  videoPlay.hidden = true;
});
