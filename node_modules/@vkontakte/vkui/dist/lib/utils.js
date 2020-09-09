"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;

/**
 * Является ли переданное значение числовым
 */
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
//# sourceMappingURL=utils.js.map