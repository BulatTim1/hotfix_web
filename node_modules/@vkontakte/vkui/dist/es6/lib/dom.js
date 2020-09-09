export var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
export var canUseEventListeners = canUseDOM && !!window.addEventListener;
//# sourceMappingURL=dom.js.map