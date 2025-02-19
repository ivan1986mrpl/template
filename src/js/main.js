// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

// import { BaseHelpers } from './helpers/base-helpers';
import { BaseHelpers } from './helpers/base-helpers';

BaseHelpers.checkWebpSupport();

//BaseHelpers.calcScrollbarWidth();

//BaseHelpers.addTouchClass();

//BaseHelpers.addLoadedClass();

//BaseHelpers.headerFixed();

import { _slideUp, _slideDown, _slideToggle } from './modules/slideUp';
import { bodyLock, bodyLockStatus, bodyUnlock, lockPadding, body } from './helpers/function';
import { initCountdown } from './modules/timer-countdown';
import { addDate } from './modules/addDate';
import { toTop } from './modules/toTop';
import { tabs } from './modules/tabs';
import { headerFon } from './modules/header-fon';
import { menuBurger } from './modules/menu-burger';
import { pageNavigation } from './modules/page-navigation';
import { spollers } from './modules/spollers';
import { popup } from './modules/popup';

// для каждого нового вызова передавать класс таймера, конечную дату в формате '29 Jun 2025 17:28' и сообщение об окончании таймера 'The timer is over'
// Передача конечной даты
// initCountdown('.countdown', '27 Jun 2025 12:30', 'The timer is over');
// Передача количества секунд (сутки = 86400с) (1 час = 3600секунд)
// initCountdown('.countdown', 86440, 'The timer is over'); // Таймер на 1 день (86400 секунд)

// addDate();

// toTop();

// tabs();

// headerFon();

// menuBurger();

// pageNavigation();

// spollers();

 popup();
