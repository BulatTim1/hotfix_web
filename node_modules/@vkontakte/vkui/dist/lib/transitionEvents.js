"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var supported, prefix;

if (typeof document !== 'undefined' && document.createElement) {
  var d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;

    if (m && m[1]) {
      // согласно спецификации, префиксы к событиям должны быть в нижнем регистре
      // https://www.w3schools.com/jsref/event_transitionend.asp
      prefix = m[1].toLowerCase();
    }
  }
}

var transitionEndEventName = prefix ? prefix + 'TransitionEnd' : 'transitionend';
var animationEndEventName = prefix ? prefix + 'AnimationEnd' : 'animationend';
var _default = {
  supported: supported,
  prefix: prefix,
  transitionEndEventName: transitionEndEventName,
  animationEndEventName: animationEndEventName
};
exports.default = _default;
//# sourceMappingURL=transitionEvents.js.map