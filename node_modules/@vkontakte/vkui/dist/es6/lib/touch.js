/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param e Браузерное событие
 * @returns Координата взаимодействия по оси абсцисс
 */
var coordX = function coordX(e) {
  return e.clientX || e.touches && e.touches[0].clientX;
};
/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param e Браузерное событие
 * @returns Координата взаимодействия по оси ординат
 */


var coordY = function coordY(e) {
  return e.clientY || e.touches && e.touches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}
/**
 * Рассчитывает "сопротивление" для iOS тач-событий
 */


function rubber(offset, dimension, resistanceRate, isAndroid) {
  if (isAndroid || offset < 0) return offset;
  var result = resistanceRate * Math.abs(offset) * dimension / (dimension + resistanceRate * Math.abs(offset));
  return offset < 0 ? -result : result;
}

export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
//# sourceMappingURL=touch.js.map