export interface VKUITouchEvent extends MouseEvent, TouchEvent {
}
/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param e Браузерное событие
 * @returns Координата взаимодействия по оси абсцисс
 */
declare const coordX: (e: VKUITouchEvent) => number;
/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param e Браузерное событие
 * @returns Координата взаимодействия по оси ординат
 */
declare const coordY: (e: VKUITouchEvent) => number;
declare const touchEnabled: boolean;
/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */
declare function getSupportedEvents(): Array<string>;
/**
 * Рассчитывает "сопротивление" для iOS тач-событий
 */
declare function rubber(offset: number, dimension: number, resistanceRate: number, isAndroid: boolean): number;
export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
