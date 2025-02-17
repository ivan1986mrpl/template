// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

// import { BaseHelpers } from './helpers/base-helpers';

/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */

import { initCountdown } from './modules/timer-countdown';

 initCountdown('.countdown', 86440, 'The timer is over');
