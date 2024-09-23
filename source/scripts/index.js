/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-navigation');

const navToggle = document.querySelector('.main-header__navigation-toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navToggle.classList.contains('main-header__navigation-toggle--close')) {
    navToggle.classList.remove('main-header__navigation-toggle--close');
  } else {
    navToggle.classList.add('main-header__navigation-toggle--close');
  }
  if (navMain.classList.contains('main-navigation--opened')) {
    navMain.classList.remove('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--opened');
  }
});

document.querySelector('.contact-info__map-placeholder').classList.remove('contact-info__map-placeholder--nojs');
document.querySelector('.contact-info__map').classList.remove('contact-info__map--nojs');
document.querySelector('.contact-info__map-pin').classList.remove('contact-info__map-pin--nojs');
document.querySelector('.main-header__navigation-toggle').classList.remove('main-header__navigation-toggle--nojs');
