/**
 * Является ли переданное значение числовым
 */
export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
//# sourceMappingURL=utils.js.map