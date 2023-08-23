const body = document.querySelector('.page__body');
const burger = document.querySelector('.burger');
const burgerOveraly = document.querySelector('.burger__overlay');
const burgerOpenButton = document.querySelector('.burger__open');
const burgerCloseButton = document.querySelector('.burger__close');
const burgerLinks = document.querySelectorAll('.burger__link'); 

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

const video = document.querySelector('.video__display');
const videoPlay = document.querySelector('.video__play');

videoPlay.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  videoPlay.hidden = true;
});
