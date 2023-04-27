/**
 * Swiper 8.4.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 12, 2022
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper2 = factory());
})(this, (function () { 'use strict';

    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */

    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend$1(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(key => {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }

    const ssrDocument = {
      body: {},

      addEventListener() {},

      removeEventListener() {},

      activeElement: {
        blur() {},

        nodeName: ''
      },

      querySelector() {
        return null;
      },

      querySelectorAll() {
        return [];
      },

      getElementById() {
        return null;
      },

      createEvent() {
        return {
          initEvent() {}

        };
      },

      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},

          setAttribute() {},

          getElementsByTagName() {
            return [];
          }

        };
      },

      createElementNS() {
        return {};
      },

      importNode() {
        return null;
      },

      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };

    function getDocument() {
      const doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }

    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState() {},

        pushState() {},

        go() {},

        back() {}

      },
      CustomEvent: function CustomEvent() {
        return this;
      },

      addEventListener() {},

      removeEventListener() {},

      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          }

        };
      },

      Image() {},

      Date() {},

      screen: {},

      setTimeout() {},

      clearTimeout() {},

      matchMedia() {
        return {};
      },

      requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }

        return setTimeout(callback, 0);
      },

      cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }

        clearTimeout(id);
      }

    };

    function getWindow() {
      const win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }

    /**
     * Dom7 4.0.4
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2022, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: January 11, 2022
     */
    /* eslint-disable no-proto */

    function makeReactive(obj) {
      const proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get() {
          return proto;
        },

        set(value) {
          proto.__proto__ = value;
        }

      });
    }

    class Dom7 extends Array {
      constructor(items) {
        if (typeof items === 'number') {
          super(items);
        } else {
          super(...(items || []));
          makeReactive(this);
        }
      }

    }

    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }

      const res = [];
      arr.forEach(el => {
        if (Array.isArray(el)) {
          res.push(...arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }

    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
      const uniqueArray = [];

      for (let i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }


    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }

      const a = [];
      const res = context.querySelectorAll(selector);

      for (let i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }

      return a;
    }

    function $(selector, context) {
      const window = getWindow();
      const document = getDocument();
      let arr = [];

      if (!context && selector instanceof Dom7) {
        return selector;
      }

      if (!selector) {
        return new Dom7(arr);
      }

      if (typeof selector === 'string') {
        const html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          const tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;

          for (let i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);

      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }

      return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype; // eslint-disable-next-line

    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.add(...classNames);
      });
      return this;
    }

    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.remove(...classNames);
      });
      return this;
    }

    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        classNames.forEach(className => {
          el.classList.toggle(className);
        });
      });
    }

    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      return arrayFilter(this, el => {
        return classNames.filter(className => el.classList.contains(className)).length > 0;
      }).length > 0;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (let i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (const attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    }

    function removeAttr(attr) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function transform(transform) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }

      return this;
    }

    function transition$1(duration) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
      }

      return this;
    }

    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          const parents = $(target).parents(); // eslint-disable-line

          for (let k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      const events = eventType.split(' ');
      let j;

      for (let i = 0; i < this.length; i += 1) {
        const el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
              listener,
              proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      const events = eventType.split(' ');

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          let handlers;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function trigger() {
      const window = getWindow();

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      const events = args[0].split(' ');
      const eventData = args[1];

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];

          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }

      return this;
    }

    function transitionEnd$1(callback) {
      const dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }

      if (callback) {
        dom.on('transitionend', fireCallBack);
      }

      return this;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        const window = getWindow();
        const document = getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function styles() {
      const window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      const window = getWindow();
      let i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (const prop in props) {
              this[i].style[prop] = props[prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    }

    function each(callback) {
      if (!callback) return this;
      this.forEach((el, index) => {
        callback.apply(el, [el, index]);
      });
      return this;
    }

    function filter(callback) {
      const result = arrayFilter(this, callback);
      return $(result);
    }

    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    }

    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      const window = getWindow();
      const document = getDocument();
      const el = this[0];
      let compareWith;
      let i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      if (selector === document) {
        return el === document;
      }

      if (selector === window) {
        return el === window;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function index() {
      let child = this[0];
      let i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    }

    function eq(index) {
      if (typeof index === 'undefined') return this;
      const length = this.length;

      if (index > length - 1) {
        return $([]);
      }

      if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }

      return $([this[index]]);
    }

    function append() {
      let newChild;
      const document = getDocument();

      for (let k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (let i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (let j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function prepend(newChild) {
      const document = getDocument();
      let i;
      let j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }

          return $([]);
        }

        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function nextAll(selector) {
      const nextEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.nextElementSibling) {
        const next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);

        el = next;
      }

      return $(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        const el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }

          return $([]);
        }

        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function prevAll(selector) {
      const prevEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.previousElementSibling) {
        const prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);

        el = prev;
      }

      return $(prevEls);
    }

    function parent(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(parents);
    }

    function parents(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode; // eslint-disable-line

        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) parents.push(parent);
          } else {
            parents.push(parent);
          }

          parent = parent.parentNode;
        }
      }

      return $(parents);
    }

    function closest(selector) {
      let closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return $([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      const foundElements = [];

      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector);

        for (let j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return $(foundElements);
    }

    function children(selector) {
      const children = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children;

        for (let j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return $(children);
    }

    function remove() {
      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    const Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition: transition$1,
      on,
      off,
      trigger,
      transitionEnd: transitionEnd$1,
      outerWidth,
      outerHeight,
      styles,
      offset,
      css,
      each,
      html,
      text,
      is,
      index,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove
    };
    Object.keys(Methods).forEach(methodName => {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });

    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(key => {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }

    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return setTimeout(callback, delay);
    }

    function now() {
      return Date.now();
    }

    function getComputedStyle$1(el) {
      const window = getWindow();
      let style;

      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }

      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }

      if (!style) {
        style = el.style;
      }

      return style;
    }

    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }

      const window = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }

      return curTransform || 0;
    }

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }

      return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
      const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      const noExtend = ['__proto__', 'constructor', 'prototype'];

      for (let i = 1; i < arguments.length; i += 1) {
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};

                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }

    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }

    function animateCSSModeScroll(_ref) {
      let {
        swiper2,
        targetPosition,
        side
      } = _ref;
      const window = getWindow();
      const startPosition = -swiper2.translate;
      let startTime = null;
      let time;
      const duration = swiper2.params.speed;
      swiper2.wrapperEl.style.scrollSnapType = 'none';
      window.cancelAnimationFrame(swiper2.cssModeFrameID);
      const dir = targetPosition > startPosition ? 'next' : 'prev';

      const isOutOfBound = (current, target) => {
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
      };

      const animate = () => {
        time = new Date().getTime();

        if (startTime === null) {
          startTime = time;
        }

        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }

        swiper2.wrapperEl.scrollTo({
          [side]: currentPosition
        });

        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper2.wrapperEl.style.overflow = 'hidden';
          swiper2.wrapperEl.style.scrollSnapType = '';
          setTimeout(() => {
            swiper2.wrapperEl.style.overflow = '';
            swiper2.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window.cancelAnimationFrame(swiper2.cssModeFrameID);
          return;
        }

        swiper2.cssModeFrameID = window.requestAnimationFrame(animate);
      };

      animate();
    }

    let support;

    function calcSupport() {
      const window = getWindow();
      const document = getDocument();
      return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
          let supportsPassive = false;

          try {
            const opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get() {
                supportsPassive = true;
              }

            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }

    function getSupport() {
      if (!support) {
        support = calcSupport();
      }

      return support;
    }

    let deviceCached;

    function calcDevice(_temp) {
      let {
        userAgent
      } = _temp === void 0 ? {} : _temp;
      const support = getSupport();
      const window = getWindow();
      const platform = window.navigator.platform;
      const ua = userAgent || window.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === 'Win32';
      let macos = platform === 'MacIntel'; // iPadOs 13 fix

      const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

      if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android


      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object


      return device;
    }

    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }

      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }

      return deviceCached;
    }

    let browser;

    function calcBrowser() {
      const window = getWindow();

      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }

    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }

      return browser;
    }

    function Resize(_ref) {
      let {
        swiper2,
        on,
        emit
      } = _ref;
      const window = getWindow();
      let observer = null;
      let animationFrame = null;

      const resizeHandler = () => {
        if (!swiper2 || swiper2.destroyed || !swiper2.initialized) return;
        emit('beforeResize');
        emit('resize');
      };

      const createObserver = () => {
        if (!swiper2 || swiper2.destroyed || !swiper2.initialized) return;
        observer = new ResizeObserver(entries => {
          animationFrame = window.requestAnimationFrame(() => {
            const {
              width,
              height
            } = swiper2;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(_ref2 => {
              let {
                contentBoxSize,
                contentRect,
                target
              } = _ref2;
              if (target && target !== swiper2.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              resizeHandler();
            }
          });
        });
        observer.observe(swiper2.el);
      };

      const removeObserver = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }

        if (observer && observer.unobserve && swiper2.el) {
          observer.unobserve(swiper2.el);
          observer = null;
        }
      };

      const orientationChangeHandler = () => {
        if (!swiper2 || swiper2.destroyed || !swiper2.initialized) return;
        emit('orientationchange');
      };

      on('init', () => {
        if (swiper2.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
          createObserver();
          return;
        }

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
      });
      on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
      });
    }

    function Observer(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      const observers = [];
      const window = getWindow();

      const attach = function (target, options) {
        if (options === void 0) {
          options = {};
        }

        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc(mutations => {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            emit('observerUpdate', mutations[0]);
            return;
          }

          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0]);
          };

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
      };

      const init = () => {
        if (!swiper2.params.observer) return;

        if (swiper2.params.observeParents) {
          const containerParents = swiper2.$el.parents();

          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        } // Observe container


        attach(swiper2.$el[0], {
          childList: swiper2.params.observeSlideChildren
        }); // Observe wrapper

        attach(swiper2.$wrapperEl[0], {
          attributes: false
        });
      };

      const destroy = () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };

      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on('init', init);
      on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(event => {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },

      once(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;

        function onceHandler() {
          self.off(events, onceHandler);

          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          handler.apply(self, args);
        }

        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },

      onAny(handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';

        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }

        return self;
      },

      offAny(handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);

        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }

        return self;
      },

      off(events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(event => {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler, index) => {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },

      emit() {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }

        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(event => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(eventHandler => {
              eventHandler.apply(context, [event, ...data]);
            });
          }

          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(eventHandler => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }

    };

    function updateSize() {
      const swiper2 = this;
      let width;
      let height;
      const $el = swiper2.$el;

      if (typeof swiper2.params.width !== 'undefined' && swiper2.params.width !== null) {
        width = swiper2.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper2.params.height !== 'undefined' && swiper2.params.height !== null) {
        height = swiper2.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper2.isHorizontal() || height === 0 && swiper2.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      Object.assign(swiper2, {
        width,
        height,
        size: swiper2.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      const swiper2 = this;

      function getDirectionLabel(property) {
        if (swiper2.isHorizontal()) {
          return property;
        } // prettier-ignore


        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }

      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }

      const params = swiper2.params;
      const {
        $wrapperEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL
      } = swiper2;
      const isVirtual = swiper2.virtual && params.virtual.enabled;
      const previousSlidesLength = isVirtual ? swiper2.virtual.slides.length : swiper2.slides.length;
      const slides = $wrapperEl.children(`.${swiper2.params.slideClass}`);
      const slidesLength = isVirtual ? swiper2.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [];
      const slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper2);
      }

      let offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper2);
      }

      const previousSnapGridLength = swiper2.snapGrid.length;
      const previousSlidesGridLength = swiper2.slidesGrid.length;
      let spaceBetween = params.spaceBetween;
      let slidePosition = -offsetBefore;
      let prevSlideSize = 0;
      let index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper2.virtualSize = -spaceBetween; // reset margins

      if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
      }); // reset cssMode offsets

      if (params.centeredSlides && params.cssMode) {
        setCSSProperty(swiper2.wrapperEl, '--swiper-centered-offset-before', '');
        setCSSProperty(swiper2.wrapperEl, '--swiper-centered-offset-after', '');
      }

      const gridEnabled = params.grid && params.grid.rows > 1 && swiper2.grid;

      if (gridEnabled) {
        swiper2.grid.initSlides(slidesLength);
      } // Calc slides


      let slideSize;
      const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
      }).length > 0;

      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        const slide = slides.eq(i);

        if (gridEnabled) {
          swiper2.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        }

        if (slide.css('display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          if (shouldResetSlideSize) {
            slides[i].style[getDirectionLabel('width')] = ``;
          }

          const slideStyles = getComputedStyle(slide[0]);
          const currentTransform = slide[0].style.transform;
          const currentWebKitTransform = slide[0].style.webkitTransform;

          if (currentTransform) {
            slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper2.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            const width = getDirectionPropertyValue(slideStyles, 'width');
            const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            const boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              const {
                clientWidth,
                offsetWidth
              } = slide[0];
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }

          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);

          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper2.params.slidesPerGroupSkip, index)) % swiper2.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper2.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper2.virtualSize = Math.max(swiper2.virtualSize, swiperSize) + offsetAfter;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: `${swiper2.virtualSize + params.spaceBetween}px`
        });
      }

      if (params.setWrapperSize) {
        $wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper2.virtualSize + params.spaceBetween}px`
        });
      }

      if (gridEnabled) {
        swiper2.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        const newSlidesGrid = [];

        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

          if (snapGrid[i] <= swiper2.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper2.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper2.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) snapGrid = [0];

      if (params.spaceBetween !== 0) {
        const key = swiper2.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex) => {
          if (!params.cssMode) return true;

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        }).css({
          [key]: `${spaceBetween}px`
        });
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(snap => {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;

        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Object.assign(swiper2, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
      });

      if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(swiper2.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        setCSSProperty(swiper2.wrapperEl, '--swiper-centered-offset-after', `${swiper2.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper2.snapGrid[0];
        const addToSlidesGrid = -swiper2.slidesGrid[0];
        swiper2.snapGrid = swiper2.snapGrid.map(v => v + addToSnapGrid);
        swiper2.slidesGrid = swiper2.slidesGrid.map(v => v + addToSlidesGrid);
      }

      if (slidesLength !== previousSlidesLength) {
        swiper2.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper2.params.watchOverflow) swiper2.checkOverflow();
        swiper2.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper2.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress) {
        swiper2.updateSlidesOffset();
      }

      if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper2.$el.hasClass(backFaceHiddenClass);

        if (slidesLength <= params.maxBackfaceHiddenSlides) {
          if (!hasClassBackfaceClassAdded) swiper2.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) {
          swiper2.$el.removeClass(backFaceHiddenClass);
        }
      }
    }

    function updateAutoHeight(speed) {
      const swiper2 = this;
      const activeSlides = [];
      const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
      let newHeight = 0;
      let i;

      if (typeof speed === 'number') {
        swiper2.setTransition(speed);
      } else if (speed === true) {
        swiper2.setTransition(swiper2.params.speed);
      }

      const getSlideByIndex = index => {
        if (isVirtual) {
          return swiper2.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
        }

        return swiper2.slides.eq(index)[0];
      }; // Find slides currently in view


      if (swiper2.params.slidesPerView !== 'auto' && swiper2.params.slidesPerView > 1) {
        if (swiper2.params.centeredSlides) {
          (swiper2.visibleSlides || $([])).each(slide => {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper2.params.slidesPerView); i += 1) {
            const index = swiper2.activeIndex + i;
            if (index > swiper2.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper2.activeIndex));
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight || newHeight === 0) swiper2.$wrapperEl.css('height', `${newHeight}px`);
    }

    function updateSlidesOffset() {
      const swiper2 = this;
      const slides = swiper2.slides;

      for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper2.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }

      const swiper2 = this;
      const params = swiper2.params;
      const {
        slides,
        rtlTranslate: rtl,
        snapGrid
      } = swiper2;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper2.updateSlidesOffset();
      let offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides

      slides.removeClass(params.slideVisibleClass);
      swiper2.visibleSlidesIndexes = [];
      swiper2.visibleSlides = [];

      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;

        if (params.cssMode && params.centeredSlides) {
          slideOffset -= slides[0].swiperSlideOffset;
        }

        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper2.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper2.size - 1 || slideAfter > 1 && slideAfter <= swiper2.size || slideBefore <= 0 && slideAfter >= swiper2.size;

        if (isVisible) {
          swiper2.visibleSlides.push(slide);
          swiper2.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }

        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
      }

      swiper2.visibleSlides = $(swiper2.visibleSlides);
    }

    function updateProgress(translate) {
      const swiper2 = this;

      if (typeof translate === 'undefined') {
        const multiplier = swiper2.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper2 && swiper2.translate && swiper2.translate * multiplier || 0;
      }

      const params = swiper2.params;
      const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
      let {
        progress,
        isBeginning,
        isEnd
      } = swiper2;
      const wasBeginning = isBeginning;
      const wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper2.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      Object.assign(swiper2, {
        progress,
        isBeginning,
        isEnd
      });
      if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper2.updateSlidesProgress(translate);

      if (isBeginning && !wasBeginning) {
        swiper2.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper2.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper2.emit('fromEdge');
      }

      swiper2.emit('progress', progress);
    }

    function updateSlidesClasses() {
      const swiper2 = this;
      const {
        slides,
        params,
        $wrapperEl,
        activeIndex,
        realIndex
      } = swiper2;
      const isVirtual = swiper2.virtual && params.virtual.enabled;
      slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
      let activeSlide;

      if (isVirtual) {
        activeSlide = swiper2.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        }
      }

      swiper2.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
      const swiper2 = this;
      const translate = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
      const {
        slidesGrid,
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex
      } = swiper2;
      let activeIndex = newActiveIndex;
      let snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper2.snapIndex = snapIndex;
          swiper2.emit('snapIndexChange');
        }

        return;
      } // Get real index


      const realIndex = parseInt(swiper2.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Object.assign(swiper2, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
      });
      swiper2.emit('activeIndexChange');
      swiper2.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper2.emit('realIndexChange');
      }

      if (swiper2.initialized || swiper2.params.runCallbacksOnInit) {
        swiper2.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      const swiper2 = this;
      const params = swiper2.params;
      const slide = $(e).closest(`.${params.slideClass}`)[0];
      let slideFound = false;
      let slideIndex;

      if (slide) {
        for (let i = 0; i < swiper2.slides.length; i += 1) {
          if (swiper2.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }

      if (slide && slideFound) {
        swiper2.clickedSlide = slide;

        if (swiper2.virtual && swiper2.params.virtual.enabled) {
          swiper2.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper2.clickedIndex = slideIndex;
        }
      } else {
        swiper2.clickedSlide = undefined;
        swiper2.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper2.clickedIndex !== undefined && swiper2.clickedIndex !== swiper2.activeIndex) {
        swiper2.slideToClickedSlide();
      }
    }

    var update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };

    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }

      const swiper2 = this;
      const {
        params,
        rtlTranslate: rtl,
        translate,
        $wrapperEl
      } = swiper2;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      let currentTranslate = getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      const swiper2 = this;
      const {
        rtlTranslate: rtl,
        params,
        $wrapperEl,
        wrapperEl,
        progress
      } = swiper2;
      let x = 0;
      let y = 0;
      const z = 0;

      if (swiper2.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper2.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper2.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
      }

      swiper2.previousTranslate = swiper2.translate;
      swiper2.translate = swiper2.isHorizontal() ? x : y; // Check if we need to update progress

      let newProgress;
      const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper2.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper2.updateProgress(translate);
      }

      swiper2.emit('setTranslate', swiper2.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (translateBounds === void 0) {
        translateBounds = true;
      }

      const swiper2 = this;
      const {
        params,
        wrapperEl
      } = swiper2;

      if (swiper2.animating && params.preventInteractionOnTransition) {
        return false;
      }

      const minTranslate = swiper2.minTranslate();
      const maxTranslate = swiper2.maxTranslate();
      let newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

      swiper2.updateProgress(newTranslate);

      if (params.cssMode) {
        const isH = swiper2.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          if (!swiper2.support.smoothScroll) {
            animateCSSModeScroll({
              swiper2,
              targetPosition: -newTranslate,
              side: isH ? 'left' : 'top'
            });
            return true;
          }

          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth'
          });
        }

        return true;
      }

      if (speed === 0) {
        swiper2.setTransition(0);
        swiper2.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper2.emit('beforeTransitionStart', speed, internal);
          swiper2.emit('transitionEnd');
        }
      } else {
        swiper2.setTransition(speed);
        swiper2.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper2.emit('beforeTransitionStart', speed, internal);
          swiper2.emit('transitionStart');
        }

        if (!swiper2.animating) {
          swiper2.animating = true;

          if (!swiper2.onTranslateToWrapperTransitionEnd) {
            swiper2.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper2 || swiper2.destroyed) return;
              if (e.target !== this) return;
              swiper2.$wrapperEl[0].removeEventListener('transitionend', swiper2.onTranslateToWrapperTransitionEnd);
              swiper2.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper2.onTranslateToWrapperTransitionEnd);
              swiper2.onTranslateToWrapperTransitionEnd = null;
              delete swiper2.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper2.emit('transitionEnd');
              }
            };
          }

          swiper2.$wrapperEl[0].addEventListener('transitionend', swiper2.onTranslateToWrapperTransitionEnd);
          swiper2.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper2.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };

    function setTransition(duration, byController) {
      const swiper2 = this;

      if (!swiper2.params.cssMode) {
        swiper2.$wrapperEl.transition(duration);
      }

      swiper2.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
      let {
        swiper2,
        runCallbacks,
        direction,
        step
      } = _ref;
      const {
        activeIndex,
        previousIndex
      } = swiper2;
      let dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper2.emit(`transition${step}`);

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper2.emit(`slideResetTransition${step}`);
          return;
        }

        swiper2.emit(`slideChangeTransition${step}`);

        if (dir === 'next') {
          swiper2.emit(`slideNextTransition${step}`);
        } else {
          swiper2.emit(`slidePrevTransition${step}`);
        }
      }
    }

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper2 = this;
      const {
        params
      } = swiper2;
      if (params.cssMode) return;

      if (params.autoHeight) {
        swiper2.updateAutoHeight();
      }

      transitionEmit({
        swiper2,
        runCallbacks,
        direction,
        step: 'Start'
      });
    }

    function transitionEnd(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper2 = this;
      const {
        params
      } = swiper2;
      swiper2.animating = false;
      if (params.cssMode) return;
      swiper2.setTransition(0);
      transitionEmit({
        swiper2,
        runCallbacks,
        direction,
        step: 'End'
      });
    }

    var transition = {
      setTransition,
      transitionStart,
      transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        const indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        const isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      const swiper2 = this;
      let slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled
      } = swiper2;

      if (swiper2.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }

      const skip = Math.min(swiper2.params.slidesPerGroupSkip, slideIndex);
      let snapIndex = skip + Math.floor((slideIndex - skip) / swiper2.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
      const translate = -snapGrid[snapIndex]; // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(translate * 100);
          const normalizedGrid = Math.floor(slidesGrid[i] * 100);
          const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGrid) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper2.initialized && slideIndex !== activeIndex) {
        if (!swiper2.allowSlideNext && translate < swiper2.translate && translate < swiper2.minTranslate()) {
          return false;
        }

        if (!swiper2.allowSlidePrev && translate > swiper2.translate && translate > swiper2.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }

      if (slideIndex !== (previousIndex || 0) && runCallbacks) {
        swiper2.emit('beforeSlideChangeStart');
      } // Update progress


      swiper2.updateProgress(translate);
      let direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

      if (rtl && -translate === swiper2.translate || !rtl && translate === swiper2.translate) {
        swiper2.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper2.updateAutoHeight();
        }

        swiper2.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper2.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper2.transitionStart(runCallbacks, direction);
          swiper2.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        const isH = swiper2.isHorizontal();
        const t = rtl ? translate : -translate;

        if (speed === 0) {
          const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;

          if (isVirtual) {
            swiper2.wrapperEl.style.scrollSnapType = 'none';
            swiper2._immediateVirtual = true;
          }

          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

          if (isVirtual) {
            requestAnimationFrame(() => {
              swiper2.wrapperEl.style.scrollSnapType = '';
              swiper2._swiperImmediateVirtual = false;
            });
          }
        } else {
          if (!swiper2.support.smoothScroll) {
            animateCSSModeScroll({
              swiper2,
              targetPosition: t,
              side: isH ? 'left' : 'top'
            });
            return true;
          }

          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth'
          });
        }

        return true;
      }

      swiper2.setTransition(speed);
      swiper2.setTranslate(translate);
      swiper2.updateActiveIndex(slideIndex);
      swiper2.updateSlidesClasses();
      swiper2.emit('beforeTransitionStart', speed, internal);
      swiper2.transitionStart(runCallbacks, direction);

      if (speed === 0) {
        swiper2.transitionEnd(runCallbacks, direction);
      } else if (!swiper2.animating) {
        swiper2.animating = true;

        if (!swiper2.onSlideToWrapperTransitionEnd) {
          swiper2.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper2 || swiper2.destroyed) return;
            if (e.target !== this) return;
            swiper2.$wrapperEl[0].removeEventListener('transitionend', swiper2.onSlideToWrapperTransitionEnd);
            swiper2.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper2.onSlideToWrapperTransitionEnd);
            swiper2.onSlideToWrapperTransitionEnd = null;
            delete swiper2.onSlideToWrapperTransitionEnd;
            swiper2.transitionEnd(runCallbacks, direction);
          };
        }

        swiper2.$wrapperEl[0].addEventListener('transitionend', swiper2.onSlideToWrapperTransitionEnd);
        swiper2.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper2.onSlideToWrapperTransitionEnd);
      }

      return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        const indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        const isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      const swiper2 = this;
      let newIndex = index;

      if (swiper2.params.loop) {
        newIndex += swiper2.loopedSlides;
      }

      return swiper2.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper2 = this;
      const {
        animating,
        enabled,
        params
      } = swiper2;
      if (!enabled) return swiper2;
      let perGroup = params.slidesPerGroup;

      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper2.slidesPerViewDynamic('current', true), 1);
      }

      const increment = swiper2.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper2.loopFix(); // eslint-disable-next-line

        swiper2._clientLeft = swiper2.$wrapperEl[0].clientLeft;
      }

      if (params.rewind && swiper2.isEnd) {
        return swiper2.slideTo(0, speed, runCallbacks, internal);
      }

      return swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper2 = this;
      const {
        params,
        animating,
        snapGrid,
        slidesGrid,
        rtlTranslate,
        enabled
      } = swiper2;
      if (!enabled) return swiper2;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper2.loopFix(); // eslint-disable-next-line

        swiper2._clientLeft = swiper2.$wrapperEl[0].clientLeft;
      }

      const translate = rtlTranslate ? swiper2.translate : -swiper2.translate;

      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }

      const normalizedTranslate = normalize(translate);
      const normalizedSnapGrid = snapGrid.map(val => normalize(val));
      let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) {
            // prevSnap = snap;
            prevSnapIndex = snapIndex;
          }
        });

        if (typeof prevSnapIndex !== 'undefined') {
          prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
      }

      let prevIndex = 0;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper2.activeIndex - 1;

        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
          prevIndex = prevIndex - swiper2.slidesPerViewDynamic('previous', true) + 1;
          prevIndex = Math.max(prevIndex, 0);
        }
      }

      if (params.rewind && swiper2.isBeginning) {
        const lastIndex = swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
        return swiper2.slideTo(lastIndex, speed, runCallbacks, internal);
      }

      return swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper2 = this;
      return swiper2.slideTo(swiper2.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (threshold === void 0) {
        threshold = 0.5;
      }

      const swiper2 = this;
      let index = swiper2.activeIndex;
      const skip = Math.min(swiper2.params.slidesPerGroupSkip, index);
      const snapIndex = skip + Math.floor((index - skip) / swiper2.params.slidesPerGroup);
      const translate = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;

      if (translate >= swiper2.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper2.snapGrid[snapIndex];
        const nextSnap = swiper2.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper2.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper2.snapGrid[snapIndex - 1];
        const currentSnap = swiper2.snapGrid[snapIndex];

        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
          index -= swiper2.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper2.slidesGrid.length - 1);
      return swiper2.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      const swiper2 = this;
      const {
        params,
        $wrapperEl
      } = swiper2;
      const slidesPerView = params.slidesPerView === 'auto' ? swiper2.slidesPerViewDynamic() : params.slidesPerView;
      let slideToIndex = swiper2.clickedIndex;
      let realIndex;

      if (params.loop) {
        if (swiper2.animating) return;
        realIndex = parseInt($(swiper2.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper2.loopedSlides - slidesPerView / 2 || slideToIndex > swiper2.slides.length - swiper2.loopedSlides + slidesPerView / 2) {
            swiper2.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            nextTick(() => {
              swiper2.slideTo(slideToIndex);
            });
          } else {
            swiper2.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper2.slides.length - slidesPerView) {
          swiper2.loopFix();
          slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
          nextTick(() => {
            swiper2.slideTo(slideToIndex);
          });
        } else {
          swiper2.slideTo(slideToIndex);
        }
      } else {
        swiper2.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };

    function loopCreate() {
      const swiper2 = this;
      const document = getDocument();
      const {
        params,
        $wrapperEl
      } = swiper2; // Remove duplicated slides

      const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
      $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
      let slides = $selector.children(`.${params.slideClass}`);

      if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (let i = 0; i < blankSlidesNum; i += 1) {
            const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
            $selector.append(blankNode);
          }

          slides = $selector.children(`.${params.slideClass}`);
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper2.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper2.loopedSlides += params.loopAdditionalSlides;

      if (swiper2.loopedSlides > slides.length && swiper2.params.loopedSlidesLimit) {
        swiper2.loopedSlides = slides.length;
      }

      const prependSlides = [];
      const appendSlides = [];
      slides.each((el, index) => {
        const slide = $(el);
        slide.attr('data-swiper-slide-index', index);
      });

      for (let i = 0; i < swiper2.loopedSlides; i += 1) {
        const index = i - Math.floor(i / slides.length) * slides.length;
        appendSlides.push(slides.eq(index)[0]);
        prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
      }

      for (let i = 0; i < appendSlides.length; i += 1) {
        $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
        $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix() {
      const swiper2 = this;
      swiper2.emit('beforeLoopFix');
      const {
        activeIndex,
        slides,
        loopedSlides,
        allowSlidePrev,
        allowSlideNext,
        snapGrid,
        rtlTranslate: rtl
      } = swiper2;
      let newIndex;
      swiper2.allowSlidePrev = true;
      swiper2.allowSlideNext = true;
      const snapTranslate = -snapGrid[activeIndex];
      const diff = snapTranslate - swiper2.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper2.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper2.setTranslate((rtl ? -swiper2.translate : swiper2.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper2.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper2.setTranslate((rtl ? -swiper2.translate : swiper2.translate) - diff);
        }
      }

      swiper2.allowSlidePrev = allowSlidePrev;
      swiper2.allowSlideNext = allowSlideNext;
      swiper2.emit('loopFix');
    }

    function loopDestroy() {
      const swiper2 = this;
      const {
        $wrapperEl,
        params,
        slides
      } = swiper2;
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };

    function setGrabCursor(moving) {
      const swiper2 = this;
      if (swiper2.support.touch || !swiper2.params.simulateTouch || swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) return;
      const el = swiper2.params.touchEventsTarget === 'container' ? swiper2.el : swiper2.wrapperEl;
      el.style.cursor = 'move';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
      const swiper2 = this;

      if (swiper2.support.touch || swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) {
        return;
      }

      swiper2[swiper2.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };

    function closestElement(selector, base) {
      if (base === void 0) {
        base = this;
      }

      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);

        if (!found && !el.getRootNode) {
          return null;
        }

        return found || __closestFrom(el.getRootNode().host);
      }

      return __closestFrom(base);
    }

    function onTouchStart(event) {
      const swiper2 = this;
      const document = getDocument();
      const window = getWindow();
      const data = swiper2.touchEventsData;
      const {
        params,
        touches,
        enabled
      } = swiper2;
      if (!enabled) return;

      if (swiper2.animating && params.preventInteractionOnTransition) {
        return;
      }

      if (!swiper2.animating && params.cssMode && params.loop) {
        swiper2.loopFix();
      }

      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      let $targetEl = $(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper2.wrapperEl).length) return;
      }

      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root component

      const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line

      const eventPath = event.composedPath ? event.composedPath() : event.path;

      if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
        $targetEl = $(eventPath[0]);
      }

      const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
      const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper2.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      const startX = touches.currentX;
      const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }

      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper2.allowClick = true;
      swiper2.updateSize();
      swiper2.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        let preventDefault = true;

        if ($targetEl.is(data.focusableElements)) {
          preventDefault = false;

          if ($targetEl[0].nodeName === 'SELECT') {
            data.isTouched = false;
          }
        }

        if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }

        const shouldPreventDefault = preventDefault && swiper2.allowTouchMove && params.touchStartPreventDefault;

        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
          e.preventDefault();
        }
      }

      if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && swiper2.freeMode && swiper2.animating && !params.cssMode) {
        swiper2.freeMode.onTouchStart();
      }

      swiper2.emit('touchStart', e);
    }

    function onTouchMove(event) {
      const document = getDocument();
      const swiper2 = this;
      const data = swiper2.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        enabled
      } = swiper2;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper2.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type !== 'touchmove') return;
      const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper2.allowTouchMove) {
        if (!$(e.target).is(data.focusableElements)) {
          swiper2.allowClick = false;
        }

        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper2.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper2.translate <= swiper2.maxTranslate() || pageY > touches.startY && swiper2.translate >= swiper2.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper2.translate <= swiper2.maxTranslate() || pageX > touches.startX && swiper2.translate >= swiper2.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
          data.isMoved = true;
          swiper2.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper2.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      const diffX = touches.currentX - touches.startX;
      const diffY = touches.currentY - touches.startY;
      if (swiper2.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper2.params.threshold) return;

      if (typeof data.isScrolling === 'undefined') {
        let touchAngle;

        if (swiper2.isHorizontal() && touches.currentY === touches.startY || swiper2.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper2.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper2.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper2.allowClick = false;

      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop && !params.cssMode) {
          swiper2.loopFix();
        }

        data.startTranslate = swiper2.getTranslate();
        swiper2.setTransition(0);

        if (swiper2.animating) {
          swiper2.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
          swiper2.setGrabCursor(true);
        }

        swiper2.emit('sliderFirstMove', e);
      }

      swiper2.emit('sliderMove', e);
      data.isMoved = true;
      let diff = swiper2.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper2.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      let disableParentSwiper = true;
      let resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper2.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper2.minTranslate() - 1 + (-swiper2.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      } else if (diff < 0 && data.currentTranslate < swiper2.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper2.maxTranslate() + 1 - (swiper2.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper2.allowSlideNext && swiper2.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper2.allowSlidePrev && swiper2.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper2.allowSlidePrev && !swiper2.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper2.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) return; // Update active index in free mode

      if (params.freeMode && params.freeMode.enabled && swiper2.freeMode || params.watchSlidesProgress) {
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }

      if (swiper2.params.freeMode && params.freeMode.enabled && swiper2.freeMode) {
        swiper2.freeMode.onTouchMove();
      } // Update progress


      swiper2.updateProgress(data.currentTranslate); // Update translate

      swiper2.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      const swiper2 = this;
      const data = swiper2.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        slidesGrid,
        enabled
      } = swiper2;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (data.allowTouchCallbacks) {
        swiper2.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper2.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
        swiper2.setGrabCursor(false);
      } // Time diff


      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper2.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper2.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper2.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper2.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = now();
      nextTick(() => {
        if (!swiper2.destroyed) swiper2.allowClick = true;
      });

      if (!data.isTouched || !data.isMoved || !swiper2.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      let currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper2.translate : -swiper2.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (swiper2.params.freeMode && params.freeMode.enabled) {
        swiper2.freeMode.onTouchEnd({
          currentPos
        });
        return;
      } // Find current slide


      let stopIndex = 0;
      let groupSize = swiper2.slidesSizesGrid[0];

      for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      }

      let rewindFirstIndex = null;
      let rewindLastIndex = null;

      if (params.rewind) {
        if (swiper2.isBeginning) {
          rewindLastIndex = swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
        } else if (swiper2.isEnd) {
          rewindFirstIndex = 0;
        }
      } // Find current slide size


      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper2.slideTo(swiper2.activeIndex);
          return;
        }

        if (swiper2.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper2.slideTo(params.rewind && swiper2.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper2.slideTo(stopIndex);
        }

        if (swiper2.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) {
            swiper2.slideTo(stopIndex + increment);
          } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
            swiper2.slideTo(rewindLastIndex);
          } else {
            swiper2.slideTo(stopIndex);
          }
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper2.slideTo(swiper2.activeIndex);
          return;
        }

        const isNavButtonTarget = swiper2.navigation && (e.target === swiper2.navigation.nextEl || e.target === swiper2.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper2.swipeDirection === 'next') {
            swiper2.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
          }

          if (swiper2.swipeDirection === 'prev') {
            swiper2.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
          }
        } else if (e.target === swiper2.navigation.nextEl) {
          swiper2.slideTo(stopIndex + increment);
        } else {
          swiper2.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      const swiper2 = this;
      const {
        params,
        el
      } = swiper2;
      if (el && el.offsetWidth === 0) return; // Breakpoints

      if (params.breakpoints) {
        swiper2.setBreakpoint();
      } // Save locks


      const {
        allowSlideNext,
        allowSlidePrev,
        snapGrid
      } = swiper2; // Disable locks on resize

      swiper2.allowSlideNext = true;
      swiper2.allowSlidePrev = true;
      swiper2.updateSize();
      swiper2.updateSlides();
      swiper2.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper2.isEnd && !swiper2.isBeginning && !swiper2.params.centeredSlides) {
        swiper2.slideTo(swiper2.slides.length - 1, 0, false, true);
      } else {
        swiper2.slideTo(swiper2.activeIndex, 0, false, true);
      }

      if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
        swiper2.autoplay.run();
      } // Return locks after resize


      swiper2.allowSlidePrev = allowSlidePrev;
      swiper2.allowSlideNext = allowSlideNext;

      if (swiper2.params.watchOverflow && snapGrid !== swiper2.snapGrid) {
        swiper2.checkOverflow();
      }
    }

    function onClick(e) {
      const swiper2 = this;
      if (!swiper2.enabled) return;

      if (!swiper2.allowClick) {
        if (swiper2.params.preventClicks) e.preventDefault();

        if (swiper2.params.preventClicksPropagation && swiper2.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      const swiper2 = this;
      const {
        wrapperEl,
        rtlTranslate,
        enabled
      } = swiper2;
      if (!enabled) return;
      swiper2.previousTranslate = swiper2.translate;

      if (swiper2.isHorizontal()) {
        swiper2.translate = -wrapperEl.scrollLeft;
      } else {
        swiper2.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line


      if (swiper2.translate === 0) swiper2.translate = 0;
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
      let newProgress;
      const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper2.translate - swiper2.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper2.progress) {
        swiper2.updateProgress(rtlTranslate ? -swiper2.translate : swiper2.translate);
      }

      swiper2.emit('setTranslate', swiper2.translate, false);
    }

    let dummyEventAttached = false;

    function dummyEventListener() {}

    const events = (swiper2, method) => {
      const document = getDocument();
      const {
        params,
        touchEvents,
        el,
        wrapperEl,
        device,
        support
      } = swiper2;
      const capture = !!params.nested;
      const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      const swiperMethod = method; // Touch Events

      if (!support.touch) {
        el[domMethod](touchEvents.start, swiper2.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper2.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper2.onTouchEnd, false);
      } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper2.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper2.onTouchMove, support.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el[domMethod](touchEvents.end, swiper2.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el[domMethod](touchEvents.cancel, swiper2.onTouchEnd, passiveListener);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper2.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper2.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper2[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper2[swiperMethod]('observerUpdate', onResize, true);
      }
    };

    function attachEvents() {
      const swiper2 = this;
      const document = getDocument();
      const {
        params,
        support
      } = swiper2;
      swiper2.onTouchStart = onTouchStart.bind(swiper2);
      swiper2.onTouchMove = onTouchMove.bind(swiper2);
      swiper2.onTouchEnd = onTouchEnd.bind(swiper2);

      if (params.cssMode) {
        swiper2.onScroll = onScroll.bind(swiper2);
      }

      swiper2.onClick = onClick.bind(swiper2);

      if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }

      events(swiper2, 'on');
    }

    function detachEvents() {
      const swiper2 = this;
      events(swiper2, 'off');
    }

    var events$1 = {
      attachEvents,
      detachEvents
    };

    const isGridEnabled = (swiper2, params) => {
      return swiper2.grid && params.grid && params.grid.rows > 1;
    };

    function setBreakpoint() {
      const swiper2 = this;
      const {
        activeIndex,
        initialized,
        loopedSlides = 0,
        params,
        $el
      } = swiper2;
      const breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

      const breakpoint = swiper2.getBreakpoint(breakpoints, swiper2.params.breakpointsBase, swiper2.el);
      if (!breakpoint || swiper2.currentBreakpoint === breakpoint) return;
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      const breakpointParams = breakpointOnlyParams || swiper2.originalParams;
      const wasMultiRow = isGridEnabled(swiper2, params);
      const isMultiRow = isGridEnabled(swiper2, breakpointParams);
      const wasEnabled = params.enabled;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper2.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);

        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
          $el.addClass(`${params.containerModifierClass}grid-column`);
        }

        swiper2.emitContainerClasses();
      } // Toggle navigation, pagination, scrollbar


      ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

        if (wasModuleEnabled && !isModuleEnabled) {
          swiper2[prop].disable();
        }

        if (!wasModuleEnabled && isModuleEnabled) {
          swiper2[prop].enable();
        }
      });
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper2.changeDirection();
      }

      extend(swiper2.params, breakpointParams);
      const isEnabled = swiper2.params.enabled;
      Object.assign(swiper2, {
        allowTouchMove: swiper2.params.allowTouchMove,
        allowSlideNext: swiper2.params.allowSlideNext,
        allowSlidePrev: swiper2.params.allowSlidePrev
      });

      if (wasEnabled && !isEnabled) {
        swiper2.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper2.enable();
      }

      swiper2.currentBreakpoint = breakpoint;
      swiper2.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        swiper2.loopDestroy();
        swiper2.loopCreate();
        swiper2.updateSlides();
        swiper2.slideTo(activeIndex - loopedSlides + swiper2.loopedSlides, 0, false);
      }

      swiper2.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
      if (base === void 0) {
        base = 'window';
      }

      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      let breakpoint = false;
      const window = getWindow();
      const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      const points = Object.keys(breakpoints).map(point => {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          const minRatio = parseFloat(point.substr(1));
          const value = currentHeight * minRatio;
          return {
            value,
            point
          };
        }

        return {
          value: point,
          point
        };
      });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

      for (let i = 0; i < points.length; i += 1) {
        const {
          point,
          value
        } = points[i];

        if (base === 'window') {
          if (window.matchMedia(`(min-width: ${value}px)`).matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint,
      getBreakpoint
    };

    function prepareClasses(entries, prefix) {
      const resultClasses = [];
      entries.forEach(item => {
        if (typeof item === 'object') {
          Object.keys(item).forEach(classNames => {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }

    function addClasses() {
      const swiper2 = this;
      const {
        classNames,
        params,
        rtl,
        $el,
        device,
        support
      } = swiper2; // prettier-ignore

      const suffixes = prepareClasses(['initialized', params.direction, {
        'pointer-events': !support.touch
      }, {
        'free-mode': swiper2.params.freeMode && params.freeMode.enabled
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'grid': params.grid && params.grid.rows > 1
      }, {
        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }, {
        'centered': params.cssMode && params.centeredSlides
      }, {
        'watch-progress': params.watchSlidesProgress
      }], params.containerModifierClass);
      classNames.push(...suffixes);
      $el.addClass([...classNames].join(' '));
      swiper2.emitContainerClasses();
    }

    function removeClasses() {
      const swiper2 = this;
      const {
        $el,
        classNames
      } = swiper2;
      $el.removeClass(classNames.join(' '));
      swiper2.emitContainerClasses();
    }

    var classes = {
      addClasses,
      removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      const window = getWindow();
      let image;

      function onReady() {
        if (callback) callback();
      }

      const isPicture = $(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages() {
      const swiper2 = this;
      swiper2.imagesToLoad = swiper2.$el.find('img');

      function onReady() {
        if (typeof swiper2 === 'undefined' || swiper2 === null || !swiper2 || swiper2.destroyed) return;
        if (swiper2.imagesLoaded !== undefined) swiper2.imagesLoaded += 1;

        if (swiper2.imagesLoaded === swiper2.imagesToLoad.length) {
          if (swiper2.params.updateOnImagesReady) swiper2.update();
          swiper2.emit('imagesReady');
        }
      }

      for (let i = 0; i < swiper2.imagesToLoad.length; i += 1) {
        const imageEl = swiper2.imagesToLoad[i];
        swiper2.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }

    var images = {
      loadImage,
      preloadImages
    };

    function checkOverflow() {
      const swiper2 = this;
      const {
        isLocked: wasLocked,
        params
      } = swiper2;
      const {
        slidesOffsetBefore
      } = params;

      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper2.slides.length - 1;
        const lastSlideRightEdge = swiper2.slidesGrid[lastSlideIndex] + swiper2.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper2.isLocked = swiper2.size > lastSlideRightEdge;
      } else {
        swiper2.isLocked = swiper2.snapGrid.length === 1;
      }

      if (params.allowSlideNext === true) {
        swiper2.allowSlideNext = !swiper2.isLocked;
      }

      if (params.allowSlidePrev === true) {
        swiper2.allowSlidePrev = !swiper2.isLocked;
      }

      if (wasLocked && wasLocked !== swiper2.isLocked) {
        swiper2.isEnd = false;
      }

      if (wasLocked !== swiper2.isLocked) {
        swiper2.emit(swiper2.isLocked ? 'lock' : 'unlock');
      }
    }

    var checkOverflow$1 = {
      checkOverflow
    };

    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: true,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: true,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // rewind
      rewind: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      // NS
      containerModifierClass: 'swiper-',
      // NEW
      slideClass: 'swiper-slide2',
      slideBlankClass: 'swiper-slide-invisible-blank1',
      slideActiveClass: 'swiper-slide-active1',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active1',
      slideVisibleClass: 'swiper-slide-visible1',
      slideDuplicateClass: 'swiper-slide-duplicate1',
      slideNextClass: 'swiper-slide-next1',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next1',
      slidePrevClass: 'swiper-slide-prev1',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev1',
      wrapperClass: 'swiper-wrapper2',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj) {
        if (obj === void 0) {
          obj = {};
        }

        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];

        if (typeof moduleParams !== 'object' || moduleParams === null) {
          extend(allModulesParams, obj);
          return;
        }

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
          extend(allModulesParams, obj);
          return;
        }

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
        extend(allModulesParams, obj);
      };
    }

    /* eslint no-param-reassign: "off" */
    const prototypes = {
      eventsEmitter,
      update,
      translate,
      transition,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes,
      images
    };
    const extendedDefaults = {};

    class Swiper2 {
      constructor() {
        let el;
        let params;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          [el, params] = args;
        }

        if (!params) params = {};
        params = extend({}, params);
        if (el && !params.el) params.el = el;

        if (params.el && $(params.el).length > 1) {
          const swipers = [];
          $(params.el).each(containerEl => {
            const newParams = extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          }); // eslint-disable-next-line no-constructor-return

          return swipers;
        } // Swiper Instance


        const swiper2 = this;
        swiper2.__swiper__ = true;
        swiper2.support = getSupport();
        swiper2.device = getDevice({
          userAgent: params.userAgent
        });
        swiper2.browser = getBrowser();
        swiper2.eventsListeners = {};
        swiper2.eventsAnyListeners = [];
        swiper2.modules = [...swiper2.__modules__];

        if (params.modules && Array.isArray(params.modules)) {
          swiper2.modules.push(...params.modules);
        }

        const allModulesParams = {};
        swiper2.modules.forEach(mod => {
          mod({
            swiper2,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper2.on.bind(swiper2),
            once: swiper2.once.bind(swiper2),
            off: swiper2.off.bind(swiper2),
            emit: swiper2.emit.bind(swiper2)
          });
        }); // Extend defaults with modules params

        const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

        swiper2.params = extend({}, swiperParams, extendedDefaults, params);
        swiper2.originalParams = extend({}, swiper2.params);
        swiper2.passedParams = extend({}, params); // add event listeners

        if (swiper2.params && swiper2.params.on) {
          Object.keys(swiper2.params.on).forEach(eventName => {
            swiper2.on(eventName, swiper2.params.on[eventName]);
          });
        }

        if (swiper2.params && swiper2.params.onAny) {
          swiper2.onAny(swiper2.params.onAny);
        } // Save Dom lib


        swiper2.$ = $; // Extend Swiper2

        Object.assign(swiper2, {
          enabled: swiper2.params.enabled,
          el,
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],

          // isDirection
          isHorizontal() {
            return swiper2.params.direction === 'horizontal';
          },

          isVertical() {
            return swiper2.params.direction === 'vertical';
          },

          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper2.params.allowSlideNext,
          allowSlidePrev: swiper2.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            const desktop = ['pointerdown', 'pointermove', 'pointerup'];
            swiper2.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper2.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper2.support.touch || !swiper2.params.simulateTouch ? swiper2.touchEventsTouch : swiper2.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper2.params.focusableElements,
            // Last click time
            lastClickTime: now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper2.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper2.emit('_swiper2'); // Init

        if (swiper2.params.init) {
          swiper2.init();
        } // Return app instance
        // eslint-disable-next-line no-constructor-return


        return swiper2;
      }

      enable() {
        const swiper2 = this;
        if (swiper2.enabled) return;
        swiper2.enabled = true;

        if (swiper2.params.grabCursor) {
          swiper2.setGrabCursor();
        }

        swiper2.emit('enable');
      }

      disable() {
        const swiper2 = this;
        if (!swiper2.enabled) return;
        swiper2.enabled = false;

        if (swiper2.params.grabCursor) {
          swiper2.unsetGrabCursor();
        }

        swiper2.emit('disable');
      }

      setProgress(progress, speed) {
        const swiper2 = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper2.minTranslate();
        const max = swiper2.maxTranslate();
        const current = (max - min) * progress + min;
        swiper2.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }

      emitContainerClasses() {
        const swiper2 = this;
        if (!swiper2.params._emitClasses || !swiper2.el) return;
        const cls = swiper2.el.className.split(' ').filter(className => {
          return className.indexOf('swiper2') === 0 || className.indexOf(swiper2.params.containerModifierClass) === 0;
        });
        swiper2.emit('_containerClasses', cls.join(' '));
      }

      getSlideClasses(slideEl) {
        const swiper2 = this;
        if (swiper2.destroyed) return '';
        return slideEl.className.split(' ').filter(className => {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper2.params.slideClass) === 0;
        }).join(' ');
      }

      emitSlidesClasses() {
        const swiper2 = this;
        if (!swiper2.params._emitClasses || !swiper2.el) return;
        const updates = [];
        swiper2.slides.each(slideEl => {
          const classNames = swiper2.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper2.emit('_slideClass', slideEl, classNames);
        });
        swiper2.emit('_slideClasses', updates);
      }

      slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }

        if (exact === void 0) {
          exact = false;
        }

        const swiper2 = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper2;
        let spv = 1;

        if (params.centeredSlides) {
          let slideSize = slides[activeIndex].swiperSlideSize;
          let breakLoop;

          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }

          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          }
        }

        return spv;
      }

      update() {
        const swiper2 = this;
        if (!swiper2 || swiper2.destroyed) return;
        const {
          snapGrid,
          params
        } = swiper2; // Breakpoints

        if (params.breakpoints) {
          swiper2.setBreakpoint();
        }

        swiper2.updateSize();
        swiper2.updateSlides();
        swiper2.updateProgress();
        swiper2.updateSlidesClasses();

        function setTranslate() {
          const translateValue = swiper2.rtlTranslate ? swiper2.translate * -1 : swiper2.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper2.maxTranslate()), swiper2.minTranslate());
          swiper2.setTranslate(newTranslate);
          swiper2.updateActiveIndex();
          swiper2.updateSlidesClasses();
        }

        let translated;

        if (swiper2.params.freeMode && swiper2.params.freeMode.enabled) {
          setTranslate();

          if (swiper2.params.autoHeight) {
            swiper2.updateAutoHeight();
          }
        } else {
          if ((swiper2.params.slidesPerView === 'auto' || swiper2.params.slidesPerView > 1) && swiper2.isEnd && !swiper2.params.centeredSlides) {
            translated = swiper2.slideTo(swiper2.slides.length - 1, 0, false, true);
          } else {
            translated = swiper2.slideTo(swiper2.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper2.snapGrid) {
          swiper2.checkOverflow();
        }

        swiper2.emit('update');
      }

      changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }

        const swiper2 = this;
        const currentDirection = swiper2.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper2;
        }

        swiper2.$el.removeClass(`${swiper2.params.containerModifierClass}${currentDirection}`).addClass(`${swiper2.params.containerModifierClass}${newDirection}`);
        swiper2.emitContainerClasses();
        swiper2.params.direction = newDirection;
        swiper2.slides.each(slideEl => {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper2.emit('changeDirection');
        if (needUpdate) swiper2.update();
        return swiper2;
      }

      changeLanguageDirection(direction) {
        const swiper2 = this;
        if (swiper2.rtl && direction === 'rtl' || !swiper2.rtl && direction === 'ltr') return;
        swiper2.rtl = direction === 'rtl';
        swiper2.rtlTranslate = swiper2.params.direction === 'horizontal' && swiper2.rtl;

        if (swiper2.rtl) {
          swiper2.$el.addClass(`${swiper2.params.containerModifierClass}rtl`);
          swiper2.el.dir = 'rtl';
        } else {
          swiper2.$el.removeClass(`${swiper2.params.containerModifierClass}rtl`);
          swiper2.el.dir = 'ltr';
        }

        swiper2.update();
      }

      mount(el) {
        const swiper2 = this;
        if (swiper2.mounted) return true; // Find el

        const $el = $(el || swiper2.params.el);
        el = $el[0];

        if (!el) {
          return false;
        }

        el.swiper2 = swiper2;

        const getWrapperSelector = () => {
          return `.${(swiper2.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };

        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

            res.children = options => $el.children(options);

            return res;
          }

          if (!$el.children) {
            return $($el).children(getWrapperSelector());
          }

          return $el.children(getWrapperSelector());
        }; // Find Wrapper


        let $wrapperEl = getWrapper();

        if ($wrapperEl.length === 0 && swiper2.params.createElements) {
          const document = getDocument();
          const wrapper = document.createElement('div');
          $wrapperEl = $(wrapper);
          wrapper.className = swiper2.params.wrapperClass;
          $el.append(wrapper);
          $el.children(`.${swiper2.params.slideClass}`).each(slideEl => {
            $wrapperEl.append(slideEl);
          });
        }

        Object.assign(swiper2, {
          $el,
          el,
          $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper2.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      }

      init(el) {
        const swiper2 = this;
        if (swiper2.initialized) return swiper2;
        const mounted = swiper2.mount(el);
        if (mounted === false) return swiper2;
        swiper2.emit('beforeInit'); // Set breakpoint

        if (swiper2.params.breakpoints) {
          swiper2.setBreakpoint();
        } // Add Classes


        swiper2.addClasses(); // Create loop

        if (swiper2.params.loop) {
          swiper2.loopCreate();
        } // Update size


        swiper2.updateSize(); // Update slides

        swiper2.updateSlides();

        if (swiper2.params.watchOverflow) {
          swiper2.checkOverflow();
        } // Set Grab Cursor


        if (swiper2.params.grabCursor && swiper2.enabled) {
          swiper2.setGrabCursor();
        }

        if (swiper2.params.preloadImages) {
          swiper2.preloadImages();
        } // Slide To Initial Slide


        if (swiper2.params.loop) {
          swiper2.slideTo(swiper2.params.initialSlide + swiper2.loopedSlides, 0, swiper2.params.runCallbacksOnInit, false, true);
        } else {
          swiper2.slideTo(swiper2.params.initialSlide, 0, swiper2.params.runCallbacksOnInit, false, true);
        } // Attach events


        swiper2.attachEvents(); // Init Flag

        swiper2.initialized = true; // Emit

        swiper2.emit('init');
        swiper2.emit('afterInit');
        return swiper2;
      }

      destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }

        if (cleanStyles === void 0) {
          cleanStyles = true;
        }

        const swiper2 = this;
        const {
          params,
          $el,
          $wrapperEl,
          slides
        } = swiper2;

        if (typeof swiper2.params === 'undefined' || swiper2.destroyed) {
          return null;
        }

        swiper2.emit('beforeDestroy'); // Init Flag

        swiper2.initialized = false; // Detach events

        swiper2.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper2.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper2.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper2.emit('destroy'); // Detach emitter events

        Object.keys(swiper2.eventsListeners).forEach(eventName => {
          swiper2.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper2.$el[0].swiper2 = null;
          deleteProps(swiper2);
        }

        swiper2.destroyed = true;
        return null;
      }

      static extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }

      static get extendedDefaults() {
        return extendedDefaults;
      }

      static get defaults() {
        return defaults;
      }

      static installModule(mod) {
        if (!Swiper2.prototype.__modules__) Swiper2.prototype.__modules__ = [];
        const modules = Swiper2.prototype.__modules__;

        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }

      static use(module) {
        if (Array.isArray(module)) {
          module.forEach(m => Swiper2.installModule(m));
          return Swiper2;
        }

        Swiper2.installModule(module);
        return Swiper2;
      }

    }

    Object.keys(prototypes).forEach(prototypeGroup => {
      Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        Swiper2.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper2.use([Resize, Observer]);

    function Virtual(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      });
      let cssModeTimeout;
      swiper2.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
      };

      function renderSlide(slide, index) {
        const params = swiper2.params.virtual;

        if (params.cache && swiper2.virtual.cache[index]) {
          return swiper2.virtual.cache[index];
        }

        const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper2, slide, index)) : $(`<div class="${swiper2.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper2.virtual.cache[index] = $slideEl;
        return $slideEl;
      }

      function update(force) {
        const {
          slidesPerView,
          slidesPerGroup,
          centeredSlides
        } = swiper2.params;
        const {
          addSlidesBefore,
          addSlidesAfter
        } = swiper2.params.virtual;
        const {
          from: previousFrom,
          to: previousTo,
          slides,
          slidesGrid: previousSlidesGrid,
          offset: previousOffset
        } = swiper2.virtual;

        if (!swiper2.params.cssMode) {
          swiper2.updateActiveIndex();
        }

        const activeIndex = swiper2.activeIndex || 0;
        let offsetProp;
        if (swiper2.rtlTranslate) offsetProp = 'right';else offsetProp = swiper2.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;

        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = slidesPerGroup + addSlidesBefore;
        }

        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper2.slidesGrid[from] || 0) - (swiper2.slidesGrid[0] || 0);
        Object.assign(swiper2.virtual, {
          from,
          to,
          offset,
          slidesGrid: swiper2.slidesGrid
        });

        function onRendered() {
          swiper2.updateSlides();
          swiper2.updateProgress();
          swiper2.updateSlidesClasses();

          if (swiper2.lazy && swiper2.params.lazy.enabled) {
            swiper2.lazy.load();
          }

          emit('virtualUpdate');
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper2.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper2.slides.css(offsetProp, `${offset}px`);
          }

          swiper2.updateProgress();
          emit('virtualUpdate');
          return;
        }

        if (swiper2.params.virtual.renderExternal) {
          swiper2.params.virtual.renderExternal.call(swiper2, {
            offset,
            from,
            to,
            slides: function getSlides() {
              const slidesToRender = [];

              for (let i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }

              return slidesToRender;
            }()
          });

          if (swiper2.params.virtual.renderExternalUpdate) {
            onRendered();
          } else {
            emit('virtualUpdate');
          }

          return;
        }

        const prependIndexes = [];
        const appendIndexes = [];

        if (force) {
          swiper2.$wrapperEl.find(`.${swiper2.params.slideClass}`).remove();
        } else {
          for (let i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper2.$wrapperEl.find(`.${swiper2.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          if (i >= from && i <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(i);
            } else {
              if (i > previousTo) appendIndexes.push(i);
              if (i < previousFrom) prependIndexes.push(i);
            }
          }
        }

        appendIndexes.forEach(index => {
          swiper2.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b) => b - a).forEach(index => {
          swiper2.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper2.$wrapperEl.children('.swiper-slide2').css(offsetProp, `${offset}px`);
        onRendered();
      }

      function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper2.virtual.slides.push(slides[i]);
          }
        } else {
          swiper2.virtual.slides.push(slides);
        }

        update(true);
      }

      function prependSlide(slides) {
        const activeIndex = swiper2.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper2.virtual.slides.unshift(slides[i]);
          }

          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper2.virtual.slides.unshift(slides);
        }

        if (swiper2.params.virtual.cache) {
          const cache = swiper2.virtual.cache;
          const newCache = {};
          Object.keys(cache).forEach(cachedIndex => {
            const $cachedEl = cache[cachedIndex];
            const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
            }

            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper2.virtual.cache = newCache;
        }

        update(true);
        swiper2.slideTo(newActiveIndex, 0);
      }

      function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper2.activeIndex;

        if (Array.isArray(slidesIndexes)) {
          for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper2.virtual.slides.splice(slidesIndexes[i], 1);

            if (swiper2.params.virtual.cache) {
              delete swiper2.virtual.cache[slidesIndexes[i]];
            }

            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper2.virtual.slides.splice(slidesIndexes, 1);

          if (swiper2.params.virtual.cache) {
            delete swiper2.virtual.cache[slidesIndexes];
          }

          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }

        update(true);
        swiper2.slideTo(activeIndex, 0);
      }

      function removeAllSlides() {
        swiper2.virtual.slides = [];

        if (swiper2.params.virtual.cache) {
          swiper2.virtual.cache = {};
        }

        update(true);
        swiper2.slideTo(0, 0);
      }

      on('beforeInit', () => {
        if (!swiper2.params.virtual.enabled) return;
        swiper2.virtual.slides = swiper2.params.virtual.slides;
        swiper2.classNames.push(`${swiper2.params.containerModifierClass}virtual`);
        swiper2.params.watchSlidesProgress = true;
        swiper2.originalParams.watchSlidesProgress = true;

        if (!swiper2.params.initialSlide) {
          update();
        }
      });
      on('setTranslate', () => {
        if (!swiper2.params.virtual.enabled) return;

        if (swiper2.params.cssMode && !swiper2._immediateVirtual) {
          clearTimeout(cssModeTimeout);
          cssModeTimeout = setTimeout(() => {
            update();
          }, 100);
        } else {
          update();
        }
      });
      on('init update resize', () => {
        if (!swiper2.params.virtual.enabled) return;

        if (swiper2.params.cssMode) {
          setCSSProperty(swiper2.wrapperEl, '--swiper-virtual-size', `${swiper2.virtualSize}px`);
        }
      });
      Object.assign(swiper2.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
      });
    }

    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      const window = getWindow();
      swiper2.keyboard = {
        enabled: false
      };
      extendParams({
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      });

      function handle(event) {
        if (!swiper2.enabled) return;
        const {
          rtlTranslate: rtl
        } = swiper2;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper2.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks

        if (!swiper2.allowSlideNext && (swiper2.isHorizontal() && isArrowRight || swiper2.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }

        if (!swiper2.allowSlidePrev && (swiper2.isHorizontal() && isArrowLeft || swiper2.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }

        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }

        if (swiper2.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          let inView = false; // Check that swiper should be inside of visible area of window

          if (swiper2.$el.parents(`.${swiper2.params.slideClass}`).length > 0 && swiper2.$el.parents(`.${swiper2.params.slideActiveClass}`).length === 0) {
            return undefined;
          }

          const $el = swiper2.$el;
          const swiperWidth = $el[0].clientWidth;
          const swiperHeight = $el[0].clientHeight;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const swiperOffset = swiper2.$el.offset();
          if (rtl) swiperOffset.left -= swiper2.$el[0].scrollLeft;
          const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

          for (let i = 0; i < swiperCoord.length; i += 1) {
            const point = swiperCoord[i];

            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

              inView = true;
            }
          }

          if (!inView) return undefined;
        }

        if (swiper2.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper2.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper2.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (isPageDown || isArrowDown) swiper2.slideNext();
          if (isPageUp || isArrowUp) swiper2.slidePrev();
        }

        emit('keyPress', kc);
        return undefined;
      }

      function enable() {
        if (swiper2.keyboard.enabled) return;
        $(document).on('keydown', handle);
        swiper2.keyboard.enabled = true;
      }

      function disable() {
        if (!swiper2.keyboard.enabled) return;
        $(document).off('keydown', handle);
        swiper2.keyboard.enabled = false;
      }

      on('init', () => {
        if (swiper2.params.keyboard.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        if (swiper2.keyboard.enabled) {
          disable();
        }
      });
      Object.assign(swiper2.keyboard, {
        enable,
        disable
      });
    }

    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null
        }
      });
      swiper2.mousewheel = {
        enabled: false
      };
      let timeout;
      let lastScrollTime = now();
      let lastEventBeforeSnap;
      const recentWheelEvents = [];

      function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY

        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy

        if ('detail' in e) {
          sY = e.detail;
        }

        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }

        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }

        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll


        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }

        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined


        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }

        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      }

      function handleMouseEnter() {
        if (!swiper2.enabled) return;
        swiper2.mouseEntered = true;
      }

      function handleMouseLeave() {
        if (!swiper2.enabled) return;
        swiper2.mouseEntered = false;
      }

      function animateSlider(newEvent) {
        if (swiper2.params.mousewheel.thresholdDelta && newEvent.delta < swiper2.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }

        if (swiper2.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper2.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        } // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).


        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.


        if (newEvent.direction < 0) {
          if ((!swiper2.isEnd || swiper2.params.loop) && !swiper2.animating) {
            swiper2.slideNext();
            emit('scroll', newEvent.raw);
          }
        } else if ((!swiper2.isBeginning || swiper2.params.loop) && !swiper2.animating) {
          swiper2.slidePrev();
          emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time


        lastScrollTime = new window.Date().getTime(); // Return false as a default

        return false;
      }

      function releaseScroll(newEvent) {
        const params = swiper2.params.mousewheel;

        if (newEvent.direction < 0) {
          if (swiper2.isEnd && !swiper2.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper2.isBeginning && !swiper2.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }

        return false;
      }

      function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper2.enabled) return;
        const params = swiper2.params.mousewheel;

        if (swiper2.params.cssMode) {
          e.preventDefault();
        }

        let target = swiper2.$el;

        if (swiper2.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper2.params.mousewheel.eventsTarget);
        }

        if (!swiper2.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        let delta = 0;
        const rtlFactor = swiper2.rtlTranslate ? -1 : 1;
        const data = normalize(e);

        if (params.forceToAxis) {
          if (swiper2.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions

        let positions = swiper2.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper2.minTranslate()) positions = swiper2.minTranslate();
        if (positions <= swiper2.maxTranslate()) positions = swiper2.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.

        disableParentSwiper = swiper2.params.loop ? true : !(positions === swiper2.minTranslate() || positions === swiper2.maxTranslate());
        if (disableParentSwiper && swiper2.params.nested) e.stopPropagation();

        if (!swiper2.params.freeMode || !swiper2.params.freeMode.enabled) {
          // Register the new event in a variable which stores the relevant data
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events

          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.

          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              animateSlider(newEvent);
            }
          } else {
            animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.


          if (releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = undefined;

            if (swiper2.params.loop) {
              swiper2.loopFix();
            }

            let position = swiper2.getTranslate() + delta * params.sensitivity;
            const wasBeginning = swiper2.isBeginning;
            const wasEnd = swiper2.isEnd;
            if (position >= swiper2.minTranslate()) position = swiper2.minTranslate();
            if (position <= swiper2.maxTranslate()) position = swiper2.maxTranslate();
            swiper2.setTransition(0);
            swiper2.setTranslate(position);
            swiper2.updateProgress();
            swiper2.updateActiveIndex();
            swiper2.updateSlidesClasses();

            if (!wasBeginning && swiper2.isBeginning || !wasEnd && swiper2.isEnd) {
              swiper2.updateSlidesClasses();
            }

            if (swiper2.params.freeMode.sticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(timeout);
              timeout = undefined;

              if (recentWheelEvents.length >= 15) {
                recentWheelEvents.shift(); // only store the last N events
              }

              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
              const firstEvent = recentWheelEvents[0];
              recentWheelEvents.push(newEvent);

              if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents.splice(0);
              } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                timeout = nextTick(() => {
                  swiper2.slideToClosest(swiper2.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                timeout = nextTick(() => {
                  const snapToThreshold = 0.5;
                  lastEventBeforeSnap = newEvent;
                  recentWheelEvents.splice(0);
                  swiper2.slideToClosest(swiper2.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event


            if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

            if (swiper2.params.autoplay && swiper2.params.autoplayDisableOnInteraction) swiper2.autoplay.stop(); // Return page scroll on edge positions

            if (position === swiper2.minTranslate() || position === swiper2.maxTranslate()) return true;
          }
        }

        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      }

      function events(method) {
        let target = swiper2.$el;

        if (swiper2.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper2.params.mousewheel.eventsTarget);
        }

        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
      }

      function enable() {
        if (swiper2.params.cssMode) {
          swiper2.wrapperEl.removeEventListener('wheel', handle);
          return true;
        }

        if (swiper2.mousewheel.enabled) return false;
        events('on');
        swiper2.mousewheel.enabled = true;
        return true;
      }

      function disable() {
        if (swiper2.params.cssMode) {
          swiper2.wrapperEl.addEventListener(event, handle);
          return true;
        }

        if (!swiper2.mousewheel.enabled) return false;
        events('off');
        swiper2.mousewheel.enabled = false;
        return true;
      }

      on('init', () => {
        if (!swiper2.params.mousewheel.enabled && swiper2.params.cssMode) {
          disable();
        }

        if (swiper2.params.mousewheel.enabled) enable();
      });
      on('destroy', () => {
        if (swiper2.params.cssMode) {
          enable();
        }

        if (swiper2.mousewheel.enabled) disable();
      });
      Object.assign(swiper2.mousewheel, {
        enable,
        disable
      });
    }

    function createElementIfNotDefined(swiper2, originalParams, params, checkProps) {
      const document = getDocument();

      if (swiper2.params.createElements) {
        Object.keys(checkProps).forEach(key => {
          if (!params[key] && params.auto === true) {
            let element = swiper2.$el.children(`.${checkProps[key]}`)[0];

            if (!element) {
              element = document.createElement('div');
              element.className = checkProps[key];
              swiper2.$el.append(element);
            }

            params[key] = element;
            originalParams[key] = element;
          }
        });
      }

      return params;
    }

    function Navigation(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
          navigationDisabledClass: 'swiper-navigation-disabled'
        }
      });
      swiper2.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      };

      function getEl(el) {
        let $el;

        if (el) {
          $el = $(el);

          if (swiper2.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper2.$el.find(el).length === 1) {
            $el = swiper2.$el.find(el);
          }
        }

        return $el;
      }

      function toggleEl($el, disabled) {
        const params = swiper2.params.navigation;

        if ($el && $el.length > 0) {
          $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
          if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

          if (swiper2.params.watchOverflow && swiper2.enabled) {
            $el[swiper2.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }
      }

      function update() {
        // Update Navigation Buttons
        if (swiper2.params.loop) return;
        const {
          $nextEl,
          $prevEl
        } = swiper2.navigation;
        toggleEl($prevEl, swiper2.isBeginning && !swiper2.params.rewind);
        toggleEl($nextEl, swiper2.isEnd && !swiper2.params.rewind);
      }

      function onPrevClick(e) {
        e.preventDefault();
        if (swiper2.isBeginning && !swiper2.params.loop && !swiper2.params.rewind) return;
        swiper2.slidePrev();
        emit('navigationPrev');
      }

      function onNextClick(e) {
        e.preventDefault();
        if (swiper2.isEnd && !swiper2.params.loop && !swiper2.params.rewind) return;
        swiper2.slideNext();
        emit('navigationNext');
      }

      function init() {
        const params = swiper2.params.navigation;
        swiper2.params.navigation = createElementIfNotDefined(swiper2, swiper2.originalParams.navigation, swiper2.params.navigation, {
          nextEl: 'swiper-button-next2',
          prevEl: 'swiper-button-prev2'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', onPrevClick);
        }

        Object.assign(swiper2.navigation, {
          $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });

        if (!swiper2.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass);
          if ($prevEl) $prevEl.addClass(params.lockClass);
        }
      }

      function destroy() {
        const {
          $nextEl,
          $prevEl
        } = swiper2.navigation;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', onNextClick);
          $nextEl.removeClass(swiper2.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', onPrevClick);
          $prevEl.removeClass(swiper2.params.navigation.disabledClass);
        }
      }

      on('init', () => {
        if (swiper2.params.navigation.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          update();
        }
      });
      on('toEdge fromEdge lock unlock', () => {
        update();
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $nextEl,
          $prevEl
        } = swiper2.navigation;

        if ($nextEl) {
          $nextEl[swiper2.enabled ? 'removeClass' : 'addClass'](swiper2.params.navigation.lockClass);
        }

        if ($prevEl) {
          $prevEl[swiper2.enabled ? 'removeClass' : 'addClass'](swiper2.params.navigation.lockClass);
        }
      });
      on('click', (_s, e) => {
        const {
          $nextEl,
          $prevEl
        } = swiper2.navigation;
        const targetEl = e.target;

        if (swiper2.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
          if (swiper2.pagination && swiper2.params.pagination && swiper2.params.pagination.clickable && (swiper2.pagination.el === targetEl || swiper2.pagination.el.contains(targetEl))) return;
          let isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper2.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper2.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            emit('navigationShow');
          } else {
            emit('navigationHide');
          }

          if ($nextEl) {
            $nextEl.toggleClass(swiper2.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(swiper2.params.navigation.hiddenClass);
          }
        }
      });

      const enable = () => {
        swiper2.$el.removeClass(swiper2.params.navigation.navigationDisabledClass);
        init();
        update();
      };

      const disable = () => {
        swiper2.$el.addClass(swiper2.params.navigation.navigationDisabledClass);
        destroy();
      };

      Object.assign(swiper2.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
      });
    }

    function classesToSelector(classes) {
      if (classes === void 0) {
        classes = '';
      }

      return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      const pfx = 'swiper-pagination';
      extendParams({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: number => number,
          formatFractionTotal: number => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`,
          paginationDisabledClass: `${pfx}-disabled`
        }
      });
      swiper2.pagination = {
        el: null,
        $el: null,
        bullets: []
      };
      let bulletSize;
      let dynamicBulletIndex = 0;

      function isPaginationDisabled() {
        return !swiper2.params.pagination.el || !swiper2.pagination.el || !swiper2.pagination.$el || swiper2.pagination.$el.length === 0;
      }

      function setSideBullets($bulletEl, position) {
        const {
          bulletActiveClass
        } = swiper2.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
      }

      function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper2.rtl;
        const params = swiper2.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
        const $el = swiper2.pagination.$el; // Current/Total

        let current;
        const total = swiper2.params.loop ? Math.ceil((slidesLength - swiper2.loopedSlides * 2) / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;

        if (swiper2.params.loop) {
          current = Math.ceil((swiper2.activeIndex - swiper2.loopedSlides) / swiper2.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper2.loopedSlides * 2) {
            current -= slidesLength - swiper2.loopedSlides * 2;
          }

          if (current > total - 1) current -= total;
          if (current < 0 && swiper2.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper2.snapIndex !== 'undefined') {
          current = swiper2.snapIndex;
        } else {
          current = swiper2.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper2.pagination.bullets && swiper2.pagination.bullets.length > 0) {
          const bullets = swiper2.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;

          if (params.dynamicBullets) {
            bulletSize = bullets.eq(0)[swiper2.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper2.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

            if (params.dynamicMainBullets > 1 && swiper2.previousIndex !== undefined) {
              dynamicBulletIndex += current - (swiper2.previousIndex - swiper2.loopedSlides || 0);

              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }

            firstIndex = Math.max(current - dynamicBulletIndex, 0);
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

          if ($el.length > 1) {
            bullets.each(bullet => {
              const $bullet = $(bullet);
              const bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(`${params.bulletActiveClass}-main`);
                }

                if (bulletIndex === firstIndex) {
                  setSideBullets($bullet, 'prev');
                }

                if (bulletIndex === lastIndex) {
                  setSideBullets($bullet, 'next');
                }
              }
            });
          } else {
            const $bullet = bullets.eq(current);
            const bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              const $firstDisplayedBullet = bullets.eq(firstIndex);
              const $lastDisplayedBullet = bullets.eq(lastIndex);

              for (let i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
              }

              if (swiper2.params.loop) {
                if (bulletIndex >= bullets.length) {
                  for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                    bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                } else {
                  setSideBullets($firstDisplayedBullet, 'prev');
                  setSideBullets($lastDisplayedBullet, 'next');
                }
              } else {
                setSideBullets($firstDisplayedBullet, 'prev');
                setSideBullets($lastDisplayedBullet, 'next');
              }
            }
          }

          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
            const offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper2.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
          }
        }

        if (params.type === 'fraction') {
          $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          let progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper2.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper2.isHorizontal() ? 'horizontal' : 'vertical';
          }

          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper2.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper2, current + 1, total));
          emit('paginationRender', $el[0]);
        } else {
          emit('paginationUpdate', $el[0]);
        }

        if (swiper2.params.watchOverflow && swiper2.enabled) {
          $el[swiper2.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      }

      function render() {
        // Render Container
        const params = swiper2.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
        const $el = swiper2.pagination.$el;
        let paginationHTML = '';

        if (params.type === 'bullets') {
          let numberOfBullets = swiper2.params.loop ? Math.ceil((slidesLength - swiper2.loopedSlides * 2) / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;

          if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && !swiper2.params.loop && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }

          for (let i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper2, i, params.bulletClass);
            } else {
              paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }

          $el.html(paginationHTML);
          swiper2.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper2, params.currentClass, params.totalClass);
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper2, params.progressbarFillClass);
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          emit('paginationRender', swiper2.pagination.$el[0]);
        }
      }

      function init() {
        swiper2.params.pagination = createElementIfNotDefined(swiper2, swiper2.originalParams.pagination, swiper2.params.pagination, {
          el: 'swiper-pagination'
        });
        const params = swiper2.params.pagination;
        if (!params.el) return;
        let $el = $(params.el);
        if ($el.length === 0) return;

        if (swiper2.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper2.$el.find(params.el); // check if it belongs to another nested Swiper2

          if ($el.length > 1) {
            $el = $el.filter(el => {
              if ($(el).parents('.swiper2')[0] !== swiper2.el) return false;
              return true;
            });
          }
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);
        $el.addClass(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = $(this).index() * swiper2.params.slidesPerGroup;
            if (swiper2.params.loop) index += swiper2.loopedSlides;
            swiper2.slideTo(index);
          });
        }

        Object.assign(swiper2.pagination, {
          $el,
          el: $el[0]
        });

        if (!swiper2.enabled) {
          $el.addClass(params.lockClass);
        }
      }

      function destroy() {
        const params = swiper2.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper2.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (swiper2.pagination.bullets && swiper2.pagination.bullets.removeClass) swiper2.pagination.bullets.removeClass(params.bulletActiveClass);

        if (params.clickable) {
          $el.off('click', classesToSelector(params.bulletClass));
        }
      }

      on('init', () => {
        if (swiper2.params.pagination.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          render();
          update();
        }
      });
      on('activeIndexChange', () => {
        if (swiper2.params.loop) {
          update();
        } else if (typeof swiper2.snapIndex === 'undefined') {
          update();
        }
      });
      on('snapIndexChange', () => {
        if (!swiper2.params.loop) {
          update();
        }
      });
      on('slidesLengthChange', () => {
        if (swiper2.params.loop) {
          render();
          update();
        }
      });
      on('snapGridLengthChange', () => {
        if (!swiper2.params.loop) {
          render();
          update();
        }
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper2.pagination;

        if ($el) {
          $el[swiper2.enabled ? 'removeClass' : 'addClass'](swiper2.params.pagination.lockClass);
        }
      });
      on('lock unlock', () => {
        update();
      });
      on('click', (_s, e) => {
        const targetEl = e.target;
        const {
          $el
        } = swiper2.pagination;

        if (swiper2.params.pagination.el && swiper2.params.pagination.hideOnClick && $el && $el.length > 0 && !$(targetEl).hasClass(swiper2.params.pagination.bulletClass)) {
          if (swiper2.navigation && (swiper2.navigation.nextEl && targetEl === swiper2.navigation.nextEl || swiper2.navigation.prevEl && targetEl === swiper2.navigation.prevEl)) return;
          const isHidden = $el.hasClass(swiper2.params.pagination.hiddenClass);

          if (isHidden === true) {
            emit('paginationShow');
          } else {
            emit('paginationHide');
          }

          $el.toggleClass(swiper2.params.pagination.hiddenClass);
        }
      });

      const enable = () => {
        swiper2.$el.removeClass(swiper2.params.pagination.paginationDisabledClass);

        if (swiper2.pagination.$el) {
          swiper2.pagination.$el.removeClass(swiper2.params.pagination.paginationDisabledClass);
        }

        init();
        render();
        update();
      };

      const disable = () => {
        swiper2.$el.addClass(swiper2.params.pagination.paginationDisabledClass);

        if (swiper2.pagination.$el) {
          swiper2.pagination.$el.addClass(swiper2.params.pagination.paginationDisabledClass);
        }

        destroy();
      };

      Object.assign(swiper2.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
      });
    }

    function Scrollbar(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      let isTouched = false;
      let timeout = null;
      let dragTimeout = null;
      let dragStartPos;
      let dragSize;
      let trackSize;
      let divider;
      extendParams({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
          scrollbarDisabledClass: 'swiper-scrollbar-disabled',
          horizontalClass: `swiper-scrollbar-horizontal`,
          verticalClass: `swiper-scrollbar-vertical`
        }
      });
      swiper2.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
      };

      function setTranslate() {
        if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
        const {
          scrollbar,
          rtlTranslate: rtl,
          progress
        } = swiper2;
        const {
          $dragEl,
          $el
        } = scrollbar;
        const params = swiper2.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;

        if (rtl) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }

        if (swiper2.isHorizontal()) {
          $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
          $dragEl[0].style.width = `${newSize}px`;
        } else {
          $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
          $dragEl[0].style.height = `${newSize}px`;
        }

        if (params.hide) {
          clearTimeout(timeout);
          $el[0].style.opacity = 1;
          timeout = setTimeout(() => {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      }

      function setTransition(duration) {
        if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
        swiper2.scrollbar.$dragEl.transition(duration);
      }

      function updateSize() {
        if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
        const {
          scrollbar
        } = swiper2;
        const {
          $dragEl,
          $el
        } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper2.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper2.size / (swiper2.virtualSize + swiper2.params.slidesOffsetBefore - (swiper2.params.centeredSlides ? swiper2.snapGrid[0] : 0));

        if (swiper2.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper2.params.scrollbar.dragSize, 10);
        }

        if (swiper2.isHorizontal()) {
          $dragEl[0].style.width = `${dragSize}px`;
        } else {
          $dragEl[0].style.height = `${dragSize}px`;
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }

        if (swiper2.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }

        if (swiper2.params.watchOverflow && swiper2.enabled) {
          scrollbar.$el[swiper2.isLocked ? 'addClass' : 'removeClass'](swiper2.params.scrollbar.lockClass);
        }
      }

      function getPointerPosition(e) {
        if (swiper2.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }

        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      }

      function setDragPosition(e) {
        const {
          scrollbar,
          rtlTranslate: rtl
        } = swiper2;
        const {
          $el
        } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper2.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);

        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        const position = swiper2.minTranslate() + (swiper2.maxTranslate() - swiper2.minTranslate()) * positionRatio;
        swiper2.updateProgress(position);
        swiper2.setTranslate(position);
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }

      function onDragStart(e) {
        const params = swiper2.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper2;
        const {
          $el,
          $dragEl
        } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper2.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);

        if (params.hide) {
          $el.css('opacity', 1);
        }

        if (swiper2.params.cssMode) {
          swiper2.$wrapperEl.css('scroll-snap-type', 'none');
        }

        emit('scrollbarDragStart', e);
      }

      function onDragMove(e) {
        const {
          scrollbar,
          $wrapperEl
        } = swiper2;
        const {
          $el,
          $dragEl
        } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
      }

      function onDragEnd(e) {
        const params = swiper2.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper2;
        const {
          $el
        } = scrollbar;
        if (!isTouched) return;
        isTouched = false;

        if (swiper2.params.cssMode) {
          swiper2.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }

        if (params.hide) {
          clearTimeout(dragTimeout);
          dragTimeout = nextTick(() => {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }

        emit('scrollbarDragEnd', e);

        if (params.snapOnRelease) {
          swiper2.slideToClosest();
        }
      }

      function events(method) {
        const {
          scrollbar,
          touchEventsTouch,
          touchEventsDesktop,
          params,
          support
        } = swiper2;
        const $el = scrollbar.$el;
        if (!$el) return;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

        if (!support.touch) {
          target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
          document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
          document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
          target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
          target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
          target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
      }

      function enableDraggable() {
        if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
        events('on');
      }

      function disableDraggable() {
        if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
        events('off');
      }

      function init() {
        const {
          scrollbar,
          $el: $swiperEl
        } = swiper2;
        swiper2.params.scrollbar = createElementIfNotDefined(swiper2, swiper2.originalParams.scrollbar, swiper2.params.scrollbar, {
          el: 'swiper-scrollbar'
        });
        const params = swiper2.params.scrollbar;
        if (!params.el) return;
        let $el = $(params.el);

        if (swiper2.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        $el.addClass(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let $dragEl = $el.find(`.${swiper2.params.scrollbar.dragClass}`);

        if ($dragEl.length === 0) {
          $dragEl = $(`<div class="${swiper2.params.scrollbar.dragClass}"></div>`);
          $el.append($dragEl);
        }

        Object.assign(scrollbar, {
          $el,
          el: $el[0],
          $dragEl,
          dragEl: $dragEl[0]
        });

        if (params.draggable) {
          enableDraggable();
        }

        if ($el) {
          $el[swiper2.enabled ? 'removeClass' : 'addClass'](swiper2.params.scrollbar.lockClass);
        }
      }

      function destroy() {
        const params = swiper2.params.scrollbar;
        const $el = swiper2.scrollbar.$el;

        if ($el) {
          $el.removeClass(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
        }

        disableDraggable();
      }

      on('init', () => {
        if (swiper2.params.scrollbar.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          updateSize();
          setTranslate();
        }
      });
      on('update resize observerUpdate lock unlock', () => {
        updateSize();
      });
      on('setTranslate', () => {
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        setTransition(duration);
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper2.scrollbar;

        if ($el) {
          $el[swiper2.enabled ? 'removeClass' : 'addClass'](swiper2.params.scrollbar.lockClass);
        }
      });
      on('destroy', () => {
        destroy();
      });

      const enable = () => {
        swiper2.$el.removeClass(swiper2.params.scrollbar.scrollbarDisabledClass);

        if (swiper2.scrollbar.$el) {
          swiper2.scrollbar.$el.removeClass(swiper2.params.scrollbar.scrollbarDisabledClass);
        }

        init();
        updateSize();
        setTranslate();
      };

      const disable = () => {
        swiper2.$el.addClass(swiper2.params.scrollbar.scrollbarDisabledClass);

        if (swiper2.scrollbar.$el) {
          swiper2.scrollbar.$el.addClass(swiper2.params.scrollbar.scrollbarDisabledClass);
        }

        destroy();
      };

      Object.assign(swiper2.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
      });
    }

    function Parallax(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        parallax: {
          enabled: false
        }
      });

      const setTransform = (el, progress) => {
        const {
          rtl
        } = swiper2;
        const $el = $(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper2.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if (x.indexOf('%') >= 0) {
          x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        } else {
          x = `${x * progress * rtlFactor}px`;
        }

        if (y.indexOf('%') >= 0) {
          y = `${parseInt(y, 10) * progress}%`;
        } else {
          y = `${y * progress}px`;
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }

        if (typeof scale === 'undefined' || scale === null) {
          $el.transform(`translate3d(${x}, ${y}, 0px)`);
        } else {
          const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
      };

      const setTranslate = () => {
        const {
          $el,
          slides,
          progress,
          snapGrid
        } = swiper2;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
          setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex) => {
          let slideProgress = slideEl.progress;

          if (swiper2.params.slidesPerGroup > 1 && swiper2.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }

          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
            setTransform(el, slideProgress);
          });
        });
      };

      const setTransition = function (duration) {
        if (duration === void 0) {
          duration = swiper2.params.speed;
        }

        const {
          $el
        } = swiper2;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
          const $parallaxEl = $(parallaxEl);
          let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      };

      on('beforeInit', () => {
        if (!swiper2.params.parallax.enabled) return;
        swiper2.params.watchSlidesProgress = true;
        swiper2.originalParams.watchSlidesProgress = true;
      });
      on('init', () => {
        if (!swiper2.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTranslate', () => {
        if (!swiper2.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTransition', (_swiper2, duration) => {
        if (!swiper2.params.parallax.enabled) return;
        setTransition(duration);
      });
    }

    function Zoom(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      });
      swiper2.zoom = {
        enabled: false
      };
      let currentScale = 1;
      let isScaling = false;
      let gesturesEnabled;
      let fakeGestureTouched;
      let fakeGestureMoved;
      const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      };
      const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      };
      const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      };
      let scale = 1;
      Object.defineProperty(swiper2.zoom, 'scale', {
        get() {
          return scale;
        },

        set(value) {
          if (scale !== value) {
            const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
            const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
            emit('zoomChange', value, imageEl, slideEl);
          }

          scale = value;
        }

      });

      function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
      } // Events


      function onGestureStart(e) {
        const support = swiper2.support;
        const params = swiper2.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;

        if (!support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }

          fakeGestureTouched = true;
          gesture.scaleStart = getDistanceBetweenTouches(e);
        }

        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest(`.${swiper2.params.slideClass}`);
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper2.slides.eq(swiper2.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }

        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }

        isScaling = true;
      }

      function onGestureChange(e) {
        const support = swiper2.support;
        const params = swiper2.params.zoom;
        const zoom = swiper2.zoom;

        if (!support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }

          fakeGestureMoved = true;
          gesture.scaleMove = getDistanceBetweenTouches(e);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          if (e.type === 'gesturechange') onGestureStart(e);
          return;
        }

        if (support.gestures) {
          zoom.scale = e.scale * currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        }

        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }

        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }

        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }

      function onGestureEnd(e) {
        const device = swiper2.device;
        const support = swiper2.support;
        const params = swiper2.params.zoom;
        const zoom = swiper2.zoom;

        if (!support.gestures) {
          if (!fakeGestureTouched || !fakeGestureMoved) {
            return;
          }

          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
            return;
          }

          fakeGestureTouched = false;
          fakeGestureMoved = false;
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper2.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      }

      function onTouchStart(e) {
        const device = swiper2.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      }

      function onTouchMove(e) {
        const zoom = swiper2.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper2.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag


        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !isScaling) {
          if (swiper2.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }

          if (!swiper2.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }

        if (e.cancelable) {
          e.preventDefault();
        }

        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }

        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }

        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }

        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        } // Velocity


        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }

      function onTouchEnd() {
        const zoom = swiper2.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }

        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration

        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag

        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }

      function onTransitionEnd() {
        const zoom = swiper2.zoom;

        if (gesture.$slideEl && swiper2.previousIndex !== swiper2.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }

          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }

          zoom.scale = 1;
          currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      }

      function zoomIn(e) {
        const zoom = swiper2.zoom;
        const params = swiper2.params.zoom;

        if (!gesture.$slideEl) {
          if (e && e.target) {
            gesture.$slideEl = $(e.target).closest(`.${swiper2.params.slideClass}`);
          }

          if (!gesture.$slideEl) {
            if (swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual) {
              gesture.$slideEl = swiper2.$wrapperEl.children(`.${swiper2.params.slideActiveClass}`);
            } else {
              gesture.$slideEl = swiper2.slides.eq(swiper2.activeIndex);
            }
          }

          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

        if (swiper2.params.cssMode) {
          swiper2.wrapperEl.style.overflow = 'hidden';
          swiper2.wrapperEl.style.touchAction = 'none';
        }

        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left + window.scrollX;
          offsetY = gesture.$slideEl.offset().top + window.scrollY;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }

          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }

          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }

        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }

      function zoomOut() {
        const zoom = swiper2.zoom;
        const params = swiper2.params.zoom;

        if (!gesture.$slideEl) {
          if (swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual) {
            gesture.$slideEl = swiper2.$wrapperEl.children(`.${swiper2.params.slideActiveClass}`);
          } else {
            gesture.$slideEl = swiper2.slides.eq(swiper2.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

        if (swiper2.params.cssMode) {
          swiper2.wrapperEl.style.overflow = '';
          swiper2.wrapperEl.style.touchAction = '';
        }

        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
      } // Toggle Zoom


      function zoomToggle(e) {
        const zoom = swiper2.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoomOut();
        } else {
          // Zoom In
          zoomIn(e);
        }
      }

      function getListeners() {
        const support = swiper2.support;
        const passiveListener = swiper2.touchEvents.start === 'touchstart' && support.passiveListener && swiper2.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        return {
          passiveListener,
          activeListenerWithCapture
        };
      }

      function getSlideSelector() {
        return `.${swiper2.params.slideClass}`;
      }

      function toggleGestures(method) {
        const {
          passiveListener
        } = getListeners();
        const slideSelector = getSlideSelector();
        swiper2.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper2.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper2.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
      }

      function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
      }

      function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
      } // Attach/Detach Events


      function enable() {
        const zoom = swiper2.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper2.support;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image

        if (support.gestures) {
          swiper2.$wrapperEl.on(swiper2.touchEvents.start, enableGestures, passiveListener);
          swiper2.$wrapperEl.on(swiper2.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper2.touchEvents.start === 'touchstart') {
          swiper2.$wrapperEl.on(swiper2.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper2.$wrapperEl.on(swiper2.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper2.$wrapperEl.on(swiper2.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

          if (swiper2.touchEvents.cancel) {
            swiper2.$wrapperEl.on(swiper2.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image


        swiper2.$wrapperEl.on(swiper2.touchEvents.move, `.${swiper2.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }

      function disable() {
        const zoom = swiper2.zoom;
        if (!zoom.enabled) return;
        const support = swiper2.support;
        zoom.enabled = false;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image

        if (support.gestures) {
          swiper2.$wrapperEl.off(swiper2.touchEvents.start, enableGestures, passiveListener);
          swiper2.$wrapperEl.off(swiper2.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper2.touchEvents.start === 'touchstart') {
          swiper2.$wrapperEl.off(swiper2.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper2.$wrapperEl.off(swiper2.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper2.$wrapperEl.off(swiper2.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

          if (swiper2.touchEvents.cancel) {
            swiper2.$wrapperEl.off(swiper2.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image


        swiper2.$wrapperEl.off(swiper2.touchEvents.move, `.${swiper2.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }

      on('init', () => {
        if (swiper2.params.zoom.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        disable();
      });
      on('touchStart', (_s, e) => {
        if (!swiper2.zoom.enabled) return;
        onTouchStart(e);
      });
      on('touchEnd', (_s, e) => {
        if (!swiper2.zoom.enabled) return;
        onTouchEnd();
      });
      on('doubleTap', (_s, e) => {
        if (!swiper2.animating && swiper2.params.zoom.enabled && swiper2.zoom.enabled && swiper2.params.zoom.toggle) {
          zoomToggle(e);
        }
      });
      on('transitionEnd', () => {
        if (swiper2.zoom.enabled && swiper2.params.zoom.enabled) {
          onTransitionEnd();
        }
      });
      on('slideChange', () => {
        if (swiper2.zoom.enabled && swiper2.params.zoom.enabled && swiper2.params.cssMode) {
          onTransitionEnd();
        }
      });
      Object.assign(swiper2.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
      });
    }

    function Lazy(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        lazy: {
          checkInView: false,
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      });
      swiper2.lazy = {};
      let scrollHandlerAttached = false;
      let initialImageLoaded = false;

      function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) {
          loadInDuplicate = true;
        }

        const params = swiper2.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper2.slides.length === 0) return;
        const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper2.$wrapperEl.children(`.${swiper2.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper2.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images.push($slideEl[0]);
        }

        if ($images.length === 0) return;
        $images.each(imageEl => {
          const $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);
          const background = $imageEl.attr('data-background');
          const src = $imageEl.attr('data-src');
          const srcset = $imageEl.attr('data-srcset');
          const sizes = $imageEl.attr('data-sizes');
          const $pictureEl = $imageEl.parent('picture');
          swiper2.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
            if (typeof swiper2 === 'undefined' || swiper2 === null || !swiper2 || swiper2 && !swiper2.params || swiper2.destroyed) return;

            if (background) {
              $imageEl.css('background-image', `url("${background}")`);
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }

              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }

              if ($pictureEl.length) {
                $pictureEl.children('source').each(sourceEl => {
                  const $source = $(sourceEl);

                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }

              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find(`.${params.preloaderClass}`).remove();

            if (swiper2.params.loop && loadInDuplicate) {
              const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

              if ($slideEl.hasClass(swiper2.params.slideDuplicateClass)) {
                const originalSlide = swiper2.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper2.params.slideDuplicateClass})`);
                loadInSlide(originalSlide.index(), false);
              } else {
                const duplicatedSlide = swiper2.$wrapperEl.children(`.${swiper2.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                loadInSlide(duplicatedSlide.index(), false);
              }
            }

            emit('lazyImageReady', $slideEl[0], $imageEl[0]);

            if (swiper2.params.autoHeight) {
              swiper2.updateAutoHeight();
            }
          });
          emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      }

      function load() {
        const {
          $wrapperEl,
          params: swiperParams,
          slides,
          activeIndex
        } = swiper2;
        const isVirtual = swiper2.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;

        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
              return true;
            }
          } else if (slides[index]) return true;

          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }

          return $(slideEl).index();
        }

        if (!initialImageLoaded) initialImageLoaded = true;

        if (swiper2.params.watchSlidesProgress) {
          $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
            const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
        } else {
          loadInSlide(activeIndex);
        }

        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            const amount = params.loadPrevNextAmount;
            const spv = Math.ceil(slidesPerView);
            const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (let i = activeIndex + spv; i < maxIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            } // Prev Slides


            for (let i = minIndex; i < activeIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            }
          } else {
            const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
            if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
            const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
            if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
          }
        }
      }

      function checkInViewOnLoad() {
        const window = getWindow();
        if (!swiper2 || swiper2.destroyed) return;
        const $scrollElement = swiper2.params.lazy.scrollingElement ? $(swiper2.params.lazy.scrollingElement) : $(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper2.$el.offset();
        const {
          rtlTranslate: rtl
        } = swiper2;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper2.$el[0].scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper2.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper2.height], [swiperOffset.left + swiper2.width, swiperOffset.top + swiper2.height]];

        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }

        const passiveListener = swiper2.touchEvents.start === 'touchstart' && swiper2.support.passiveListener && swiper2.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (inView) {
          load();
          $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
          scrollHandlerAttached = true;
          $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
      }

      on('beforeInit', () => {
        if (swiper2.params.lazy.enabled && swiper2.params.preloadImages) {
          swiper2.params.preloadImages = false;
        }
      });
      on('init', () => {
        if (swiper2.params.lazy.enabled) {
          if (swiper2.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('scroll', () => {
        if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && !swiper2.params.freeMode.sticky) {
          load();
        }
      });
      on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
        if (swiper2.params.lazy.enabled) {
          if (swiper2.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('transitionStart', () => {
        if (swiper2.params.lazy.enabled) {
          if (swiper2.params.lazy.loadOnTransitionStart || !swiper2.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
            if (swiper2.params.lazy.checkInView) {
              checkInViewOnLoad();
            } else {
              load();
            }
          }
        }
      });
      on('transitionEnd', () => {
        if (swiper2.params.lazy.enabled && !swiper2.params.lazy.loadOnTransitionStart) {
          if (swiper2.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('slideChange', () => {
        const {
          lazy,
          cssMode,
          watchSlidesProgress,
          touchReleaseOnEdges,
          resistanceRatio
        } = swiper2.params;

        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
          load();
        }
      });
      on('destroy', () => {
        if (!swiper2.$el) return;
        swiper2.$el.find(`.${swiper2.params.lazy.loadingClass}`).removeClass(swiper2.params.lazy.loadingClass);
      });
      Object.assign(swiper2.lazy, {
        load,
        loadInSlide
      });
    }

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'

        }
      });
      swiper2.controller = {
        control: undefined
      };

      function LinearSpline(x, y) {
        const binarySearch = function search() {
          let maxIndex;
          let minIndex;
          let guess;
          return (array, val) => {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;

              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();

        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        let i1;
        let i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        return this;
      } // xxx: for now i will just save one spline function to to


      function getInterpolateFunction(c) {
        if (!swiper2.controller.spline) {
          swiper2.controller.spline = swiper2.params.loop ? new LinearSpline(swiper2.slidesGrid, c.slidesGrid) : new LinearSpline(swiper2.snapGrid, c.snapGrid);
        }
      }

      function setTranslate(_t, byController) {
        const controlled = swiper2.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper2 = swiper2.constructor;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          const translate = swiper2.rtlTranslate ? -swiper2.translate : swiper2.translate;

          if (swiper2.params.controller.by === 'slide') {
            getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -swiper2.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper2.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper2.maxTranslate() - swiper2.minTranslate());
            controlledTranslate = (translate - swiper2.minTranslate()) * multiplier + c.minTranslate();
          }

          if (swiper2.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper2);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }

        if (Array.isArray(controlled)) {
          for (let i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper2 && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      }

      function setTransition(duration, byController) {
        const Swiper2 = swiper2.constructor;
        const controlled = swiper2.controller.control;
        let i;

        function setControlledTransition(c) {
          c.setTransition(duration, swiper2);

          if (duration !== 0) {
            c.transitionStart();

            if (c.params.autoHeight) {
              nextTick(() => {
                c.updateAutoHeight();
              });
            }

            c.$wrapperEl.transitionEnd(() => {
              if (!controlled) return;

              if (c.params.loop && swiper2.params.controller.by === 'slide') {
                c.loopFix();
              }

              c.transitionEnd();
            });
          }
        }

        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper2 && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }

      function removeSpline() {
        if (!swiper2.controller.control) return;

        if (swiper2.controller.spline) {
          swiper2.controller.spline = undefined;
          delete swiper2.controller.spline;
        }
      }

      on('beforeInit', () => {
        swiper2.controller.control = swiper2.params.controller.control;
      });
      on('update', () => {
        removeSpline();
      });
      on('resize', () => {
        removeSpline();
      });
      on('observerUpdate', () => {
        removeSpline();
      });
      on('setTranslate', (_s, translate, byController) => {
        if (!swiper2.controller.control) return;
        swiper2.controller.setTranslate(translate, byController);
      });
      on('setTransition', (_s, duration, byController) => {
        if (!swiper2.controller.control) return;
        swiper2.controller.setTransition(duration, byController);
      });
      Object.assign(swiper2.controller, {
        setTranslate,
        setTransition
      });
    }

    function A11y(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
          id: null
        }
      });
      swiper2.a11y = {
        clicked: false
      };
      let liveRegion = null;

      function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      }

      function getRandomNumber(size) {
        if (size === void 0) {
          size = 16;
        }

        const randomChar = () => Math.round(16 * Math.random()).toString(16);

        return 'x'.repeat(size).replace(/x/g, randomChar);
      }

      function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
      }

      function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
      }

      function addElRole($el, role) {
        $el.attr('role', role);
      }

      function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
      }

      function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
      }

      function addElLabel($el, label) {
        $el.attr('aria-label', label);
      }

      function addElId($el, id) {
        $el.attr('id', id);
      }

      function addElLive($el, live) {
        $el.attr('aria-live', live);
      }

      function disableEl($el) {
        $el.attr('aria-disabled', true);
      }

      function enableEl($el) {
        $el.attr('aria-disabled', false);
      }

      function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper2.params.a11y;
        const $targetEl = $(e.target);

        if (swiper2.navigation && swiper2.navigation.$nextEl && $targetEl.is(swiper2.navigation.$nextEl)) {
          if (!(swiper2.isEnd && !swiper2.params.loop)) {
            swiper2.slideNext();
          }

          if (swiper2.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }

        if (swiper2.navigation && swiper2.navigation.$prevEl && $targetEl.is(swiper2.navigation.$prevEl)) {
          if (!(swiper2.isBeginning && !swiper2.params.loop)) {
            swiper2.slidePrev();
          }

          if (swiper2.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }

        if (swiper2.pagination && $targetEl.is(classesToSelector(swiper2.params.pagination.bulletClass))) {
          $targetEl[0].click();
        }
      }

      function updateNavigation() {
        if (swiper2.params.loop || swiper2.params.rewind || !swiper2.navigation) return;
        const {
          $nextEl,
          $prevEl
        } = swiper2.navigation;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper2.isBeginning) {
            disableEl($prevEl);
            makeElNotFocusable($prevEl);
          } else {
            enableEl($prevEl);
            makeElFocusable($prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper2.isEnd) {
            disableEl($nextEl);
            makeElNotFocusable($nextEl);
          } else {
            enableEl($nextEl);
            makeElFocusable($nextEl);
          }
        }
      }

      function hasPagination() {
        return swiper2.pagination && swiper2.pagination.bullets && swiper2.pagination.bullets.length;
      }

      function hasClickablePagination() {
        return hasPagination() && swiper2.params.pagination.clickable;
      }

      function updatePagination() {
        const params = swiper2.params.a11y;
        if (!hasPagination()) return;
        swiper2.pagination.bullets.each(bulletEl => {
          const $bulletEl = $(bulletEl);

          if (swiper2.params.pagination.clickable) {
            makeElFocusable($bulletEl);

            if (!swiper2.params.pagination.renderBullet) {
              addElRole($bulletEl, 'button');
              addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
          }

          if ($bulletEl.is(`.${swiper2.params.pagination.bulletActiveClass}`)) {
            $bulletEl.attr('aria-current', 'true');
          } else {
            $bulletEl.removeAttr('aria-current');
          }
        });
      }

      const initNavEl = ($el, wrapperId, message) => {
        makeElFocusable($el);

        if ($el[0].tagName !== 'BUTTON') {
          addElRole($el, 'button');
          $el.on('keydown', onEnterOrSpaceKey);
        }

        addElLabel($el, message);
        addElControls($el, wrapperId);
      };

      const handlePointerDown = () => {
        swiper2.a11y.clicked = true;
      };

      const handlePointerUp = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            swiper2.a11y.clicked = false;
          });
        });
      };

      const handleFocus = e => {
        if (swiper2.a11y.clicked) return;
        const slideEl = e.target.closest(`.${swiper2.params.slideClass}`);
        if (!slideEl || !swiper2.slides.includes(slideEl)) return;
        const isActive = swiper2.slides.indexOf(slideEl) === swiper2.activeIndex;
        const isVisible = swiper2.params.watchSlidesProgress && swiper2.visibleSlides && swiper2.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;

        if (swiper2.isHorizontal()) {
          swiper2.el.scrollLeft = 0;
        } else {
          swiper2.el.scrollTop = 0;
        }

        swiper2.slideTo(swiper2.slides.indexOf(slideEl), 0);
      };

      const initSlides = () => {
        const params = swiper2.params.a11y;

        if (params.itemRoleDescriptionMessage) {
          addElRoleDescription($(swiper2.slides), params.itemRoleDescriptionMessage);
        }

        if (params.slideRole) {
          addElRole($(swiper2.slides), params.slideRole);
        }

        const slidesLength = swiper2.params.loop ? swiper2.slides.filter(el => !el.classList.contains(swiper2.params.slideDuplicateClass)).length : swiper2.slides.length;

        if (params.slideLabelMessage) {
          swiper2.slides.each((slideEl, index) => {
            const $slideEl = $(slideEl);
            const slideIndex = swiper2.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
          });
        }
      };

      const init = () => {
        const params = swiper2.params.a11y;
        swiper2.$el.append(liveRegion); // Container

        const $containerEl = swiper2.$el;

        if (params.containerRoleDescriptionMessage) {
          addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        }

        if (params.containerMessage) {
          addElLabel($containerEl, params.containerMessage);
        } // Wrapper


        const $wrapperEl = swiper2.$wrapperEl;
        const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper2-${getRandomNumber(16)}`;
        const live = swiper2.params.autoplay && swiper2.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide

        initSlides(); // Navigation

        let $nextEl;
        let $prevEl;

        if (swiper2.navigation && swiper2.navigation.$nextEl) {
          $nextEl = swiper2.navigation.$nextEl;
        }

        if (swiper2.navigation && swiper2.navigation.$prevEl) {
          $prevEl = swiper2.navigation.$prevEl;
        }

        if ($nextEl && $nextEl.length) {
          initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        }

        if ($prevEl && $prevEl.length) {
          initNavEl($prevEl, wrapperId, params.prevSlideMessage);
        } // Pagination


        if (hasClickablePagination()) {
          swiper2.pagination.$el.on('keydown', classesToSelector(swiper2.params.pagination.bulletClass), onEnterOrSpaceKey);
        } // Tab focus


        swiper2.$el.on('focus', handleFocus, true);
        swiper2.$el.on('pointerdown', handlePointerDown, true);
        swiper2.$el.on('pointerup', handlePointerUp, true);
      };

      function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;

        if (swiper2.navigation && swiper2.navigation.$nextEl) {
          $nextEl = swiper2.navigation.$nextEl;
        }

        if (swiper2.navigation && swiper2.navigation.$prevEl) {
          $prevEl = swiper2.navigation.$prevEl;
        }

        if ($nextEl) {
          $nextEl.off('keydown', onEnterOrSpaceKey);
        }

        if ($prevEl) {
          $prevEl.off('keydown', onEnterOrSpaceKey);
        } // Pagination


        if (hasClickablePagination()) {
          swiper2.pagination.$el.off('keydown', classesToSelector(swiper2.params.pagination.bulletClass), onEnterOrSpaceKey);
        } // Tab focus


        swiper2.$el.off('focus', handleFocus, true);
        swiper2.$el.off('pointerdown', handlePointerDown, true);
        swiper2.$el.off('pointerup', handlePointerUp, true);
      }

      on('beforeInit', () => {
        liveRegion = $(`<span class="${swiper2.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
      });
      on('afterInit', () => {
        if (!swiper2.params.a11y.enabled) return;
        init();
      });
      on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
        if (!swiper2.params.a11y.enabled) return;
        initSlides();
      });
      on('fromEdge toEdge afterInit lock unlock', () => {
        if (!swiper2.params.a11y.enabled) return;
        updateNavigation();
      });
      on('paginationUpdate', () => {
        if (!swiper2.params.a11y.enabled) return;
        updatePagination();
      });
      on('destroy', () => {
        if (!swiper2.params.a11y.enabled) return;
        destroy();
      });
    }

    function History(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        history: {
          enabled: false,
          root: '',
          replaceState: false,
          key: 'slides',
          keepQuery: false
        }
      });
      let initialized = false;
      let paths = {};

      const slugify = text => {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      };

      const getPathValues = urlOverride => {
        const window = getWindow();
        let location;

        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }

        const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
          key,
          value
        };
      };

      const setHistory = (key, index) => {
        const window = getWindow();
        if (!initialized || !swiper2.params.history.enabled) return;
        let location;

        if (swiper2.params.url) {
          location = new URL(swiper2.params.url);
        } else {
          location = window.location;
        }

        const slide = swiper2.slides.eq(index);
        let value = slugify(slide.attr('data-history'));

        if (swiper2.params.history.root.length > 0) {
          let root = swiper2.params.history.root;
          if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
          value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) {
          value = `${key}/${value}`;
        }

        if (swiper2.params.history.keepQuery) {
          value += location.search;
        }

        const currentState = window.history.state;

        if (currentState && currentState.value === value) {
          return;
        }

        if (swiper2.params.history.replaceState) {
          window.history.replaceState({
            value
          }, null, value);
        } else {
          window.history.pushState({
            value
          }, null, value);
        }
      };

      const scrollToSlide = (speed, value, runCallbacks) => {
        if (value) {
          for (let i = 0, length = swiper2.slides.length; i < length; i += 1) {
            const slide = swiper2.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));

            if (slideHistory === value && !slide.hasClass(swiper2.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper2.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper2.slideTo(0, speed, runCallbacks);
        }
      };

      const setHistoryPopState = () => {
        paths = getPathValues(swiper2.params.url);
        scrollToSlide(swiper2.params.speed, paths.value, false);
      };

      const init = () => {
        const window = getWindow();
        if (!swiper2.params.history) return;

        if (!window.history || !window.history.pushState) {
          swiper2.params.history.enabled = false;
          swiper2.params.hashNavigation.enabled = true;
          return;
        }

        initialized = true;
        paths = getPathValues(swiper2.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper2.params.runCallbacksOnInit);

        if (!swiper2.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
      };

      const destroy = () => {
        const window = getWindow();

        if (!swiper2.params.history.replaceState) {
          window.removeEventListener('popstate', setHistoryPopState);
        }
      };

      on('init', () => {
        if (swiper2.params.history.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper2.params.history.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHistory(swiper2.params.history.key, swiper2.activeIndex);
        }
      });
      on('slideChange', () => {
        if (initialized && swiper2.params.cssMode) {
          setHistory(swiper2.params.history.key, swiper2.activeIndex);
        }
      });
    }

    function HashNavigation(_ref) {
      let {
        swiper2,
        extendParams,
        emit,
        on
      } = _ref;
      let initialized = false;
      const document = getDocument();
      const window = getWindow();
      extendParams({
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      });

      const onHashChange = () => {
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper2.slides.eq(swiper2.activeIndex).attr('data-hash');

        if (newHash !== activeSlideHash) {
          const newIndex = swiper2.$wrapperEl.children(`.${swiper2.params.slideClass}[data-hash="${newHash}"]`).index();
          if (typeof newIndex === 'undefined') return;
          swiper2.slideTo(newIndex);
        }
      };

      const setHash = () => {
        if (!initialized || !swiper2.params.hashNavigation.enabled) return;

        if (swiper2.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, `#${swiper2.slides.eq(swiper2.activeIndex).attr('data-hash')}` || '');
          emit('hashSet');
        } else {
          const slide = swiper2.slides.eq(swiper2.activeIndex);
          const hash = slide.attr('data-hash') || slide.attr('data-history');
          document.location.hash = hash || '';
          emit('hashSet');
        }
      };

      const init = () => {
        if (!swiper2.params.hashNavigation.enabled || swiper2.params.history && swiper2.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');

        if (hash) {
          const speed = 0;

          for (let i = 0, length = swiper2.slides.length; i < length; i += 1) {
            const slide = swiper2.slides.eq(i);
            const slideHash = slide.attr('data-hash') || slide.attr('data-history');

            if (slideHash === hash && !slide.hasClass(swiper2.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper2.slideTo(index, speed, swiper2.params.runCallbacksOnInit, true);
            }
          }
        }

        if (swiper2.params.hashNavigation.watchState) {
          $(window).on('hashchange', onHashChange);
        }
      };

      const destroy = () => {
        if (swiper2.params.hashNavigation.watchState) {
          $(window).off('hashchange', onHashChange);
        }
      };

      on('init', () => {
        if (swiper2.params.hashNavigation.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper2.params.hashNavigation.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHash();
        }
      });
      on('slideChange', () => {
        if (initialized && swiper2.params.cssMode) {
          setHash();
        }
      });
    }

    /* eslint no-underscore-dangle: "off" */
    function Autoplay(_ref) {
      let {
        swiper2,
        extendParams,
        on,
        emit
      } = _ref;
      let timeout;
      swiper2.autoplay = {
        running: false,
        paused: false
      };
      extendParams({
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }
      });

      function run() {
        if (!swiper2.size) {
          swiper2.autoplay.running = false;
          swiper2.autoplay.paused = false;
          return;
        }

        const $activeSlideEl = swiper2.slides.eq(swiper2.activeIndex);
        let delay = swiper2.params.autoplay.delay;

        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper2.params.autoplay.delay;
        }

        clearTimeout(timeout);
        timeout = nextTick(() => {
          let autoplayResult;

          if (swiper2.params.autoplay.reverseDirection) {
            if (swiper2.params.loop) {
              swiper2.loopFix();
              autoplayResult = swiper2.slidePrev(swiper2.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper2.isBeginning) {
              autoplayResult = swiper2.slidePrev(swiper2.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper2.params.autoplay.stopOnLastSlide) {
              autoplayResult = swiper2.slideTo(swiper2.slides.length - 1, swiper2.params.speed, true, true);
              emit('autoplay');
            } else {
              stop();
            }
          } else if (swiper2.params.loop) {
            swiper2.loopFix();
            autoplayResult = swiper2.slideNext(swiper2.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper2.isEnd) {
            autoplayResult = swiper2.slideNext(swiper2.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper2.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper2.slideTo(0, swiper2.params.speed, true, true);
            emit('autoplay');
          } else {
            stop();
          }

          if (swiper2.params.cssMode && swiper2.autoplay.running) run();else if (autoplayResult === false) {
            run();
          }
        }, delay);
      }

      function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper2.autoplay.running) return false;
        swiper2.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
      }

      function stop() {
        if (!swiper2.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;

        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }

        swiper2.autoplay.running = false;
        emit('autoplayStop');
        return true;
      }

      function pause(speed) {
        if (!swiper2.autoplay.running) return;
        if (swiper2.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper2.autoplay.paused = true;

        if (speed === 0 || !swiper2.params.autoplay.waitForTransition) {
          swiper2.autoplay.paused = false;
          run();
        } else {
          ['transitionend', 'webkitTransitionEnd'].forEach(event => {
            swiper2.$wrapperEl[0].addEventListener(event, onTransitionEnd);
          });
        }
      }

      function onVisibilityChange() {
        const document = getDocument();

        if (document.visibilityState === 'hidden' && swiper2.autoplay.running) {
          pause();
        }

        if (document.visibilityState === 'visible' && swiper2.autoplay.paused) {
          run();
          swiper2.autoplay.paused = false;
        }
      }

      function onTransitionEnd(e) {
        if (!swiper2 || swiper2.destroyed || !swiper2.$wrapperEl) return;
        if (e.target !== swiper2.$wrapperEl[0]) return;
        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper2.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper2.autoplay.paused = false;

        if (!swiper2.autoplay.running) {
          stop();
        } else {
          run();
        }
      }

      function onMouseEnter() {
        if (swiper2.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          emit('autoplayPause');
          pause();
        }

        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper2.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
      }

      function onMouseLeave() {
        if (swiper2.params.autoplay.disableOnInteraction) {
          return;
        }

        swiper2.autoplay.paused = false;
        emit('autoplayResume');
        run();
      }

      function attachMouseEvents() {
        if (swiper2.params.autoplay.pauseOnMouseEnter) {
          swiper2.$el.on('mouseenter', onMouseEnter);
          swiper2.$el.on('mouseleave', onMouseLeave);
        }
      }

      function detachMouseEvents() {
        swiper2.$el.off('mouseenter', onMouseEnter);
        swiper2.$el.off('mouseleave', onMouseLeave);
      }

      on('init', () => {
        if (swiper2.params.autoplay.enabled) {
          start();
          const document = getDocument();
          document.addEventListener('visibilitychange', onVisibilityChange);
          attachMouseEvents();
        }
      });
      on('beforeTransitionStart', (_s, speed, internal) => {
        if (swiper2.autoplay.running) {
          if (internal || !swiper2.params.autoplay.disableOnInteraction) {
            swiper2.autoplay.pause(speed);
          } else {
            stop();
          }
        }
      });
      on('sliderFirstMove', () => {
        if (swiper2.autoplay.running) {
          if (swiper2.params.autoplay.disableOnInteraction) {
            stop();
          } else {
            pause();
          }
        }
      });
      on('touchEnd', () => {
        if (swiper2.params.cssMode && swiper2.autoplay.paused && !swiper2.params.autoplay.disableOnInteraction) {
          run();
        }
      });
      on('destroy', () => {
        detachMouseEvents();

        if (swiper2.autoplay.running) {
          stop();
        }

        const document = getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
      });
      Object.assign(swiper2.autoplay, {
        pause,
        run,
        start,
        stop
      });
    }

    function Thumb(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        thumbs: {
          swiper2: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs'
        }
      });
      let initialized = false;
      let swiperCreated = false;
      swiper2.thumbs = {
        swiper2: null
      };

      function onThumbClick() {
        const thumbsSwiper = swiper2.thumbs.swiper2;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper2.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;

        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }

        if (swiper2.params.loop) {
          let currentIndex = swiper2.activeIndex;

          if (swiper2.slides.eq(currentIndex).hasClass(swiper2.params.slideDuplicateClass)) {
            swiper2.loopFix(); // eslint-disable-next-line

            swiper2._clientLeft = swiper2.$wrapperEl[0].clientLeft;
            currentIndex = swiper2.activeIndex;
          }

          const prevIndex = swiper2.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          const nextIndex = swiper2.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }

        swiper2.slideTo(slideToIndex);
      }

      function init() {
        const {
          thumbs: thumbsParams
        } = swiper2.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper2.constructor;

        if (thumbsParams.swiper2 instanceof SwiperClass) {
          swiper2.thumbs.swiper2 = thumbsParams.swiper2;
          Object.assign(swiper2.thumbs.swiper2.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Object.assign(swiper2.thumbs.swiper2.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (isObject(thumbsParams.swiper2)) {
          const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper2);
          Object.assign(thumbsSwiperParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          swiper2.thumbs.swiper2 = new SwiperClass(thumbsSwiperParams);
          swiperCreated = true;
        }

        swiper2.thumbs.swiper2.$el.addClass(swiper2.params.thumbs.thumbsContainerClass);
        swiper2.thumbs.swiper2.on('tap', onThumbClick);
        return true;
      }

      function update(initial) {
        const thumbsSwiper = swiper2.thumbs.swiper2;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

        let thumbsToActivate = 1;
        const thumbActiveClass = swiper2.params.thumbs.slideThumbActiveClass;

        if (swiper2.params.slidesPerView > 1 && !swiper2.params.centeredSlides) {
          thumbsToActivate = swiper2.params.slidesPerView;
        }

        if (!swiper2.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);

        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper2.realIndex + i}"]`).addClass(thumbActiveClass);
          }
        } else {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.slides.eq(swiper2.realIndex + i).addClass(thumbActiveClass);
          }
        }

        const autoScrollOffset = swiper2.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

        if (swiper2.realIndex !== thumbsSwiper.realIndex || useOffset) {
          let currentThumbsIndex = thumbsSwiper.activeIndex;
          let newThumbsIndex;
          let direction;

          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line

              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to


            const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper2.realIndex}"]`).eq(0).index();
            const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper2.realIndex}"]`).eq(0).index();

            if (typeof prevThumbsIndex === 'undefined') {
              newThumbsIndex = nextThumbsIndex;
            } else if (typeof nextThumbsIndex === 'undefined') {
              newThumbsIndex = prevThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = nextThumbsIndex;
            } else {
              newThumbsIndex = prevThumbsIndex;
            }

            direction = swiper2.activeIndex > swiper2.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper2.realIndex;
            direction = newThumbsIndex > swiper2.previousIndex ? 'next' : 'prev';
          }

          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;

            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        }
      }

      on('beforeInit', () => {
        const {
          thumbs
        } = swiper2.params;
        if (!thumbs || !thumbs.swiper2) return;
        init();
        update(true);
      });
      on('slideChange update resize observerUpdate', () => {
        update();
      });
      on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper2.thumbs.swiper2;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
      });
      on('beforeDestroy', () => {
        const thumbsSwiper = swiper2.thumbs.swiper2;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;

        if (swiperCreated) {
          thumbsSwiper.destroy();
        }
      });
      Object.assign(swiper2.thumbs, {
        init,
        update
      });
    }

    function freeMode(_ref) {
      let {
        swiper2,
        extendParams,
        emit,
        once
      } = _ref;
      extendParams({
        freeMode: {
          enabled: false,
          momentum: true,
          momentumRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: false,
          minimumVelocity: 0.02
        }
      });

      function onTouchStart() {
        const translate = swiper2.getTranslate();
        swiper2.setTranslate(translate);
        swiper2.setTransition(0);
        swiper2.touchEventsData.velocities.length = 0;
        swiper2.freeMode.onTouchEnd({
          currentPos: swiper2.rtl ? swiper2.translate : -swiper2.translate
        });
      }

      function onTouchMove() {
        const {
          touchEventsData: data,
          touches
        } = swiper2; // Velocity

        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper2.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper2.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      }

      function onTouchEnd(_ref2) {
        let {
          currentPos
        } = _ref2;
        const {
          params,
          $wrapperEl,
          rtlTranslate: rtl,
          snapGrid,
          touchEventsData: data
        } = swiper2; // Time diff

        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;

        if (currentPos < -swiper2.minTranslate()) {
          swiper2.slideTo(swiper2.activeIndex);
          return;
        }

        if (currentPos > -swiper2.maxTranslate()) {
          if (swiper2.slides.length < snapGrid.length) {
            swiper2.slideTo(snapGrid.length - 1);
          } else {
            swiper2.slideTo(swiper2.slides.length - 1);
          }

          return;
        }

        if (params.freeMode.momentum) {
          if (data.velocities.length > 1) {
            const lastMoveEvent = data.velocities.pop();
            const velocityEvent = data.velocities.pop();
            const distance = lastMoveEvent.position - velocityEvent.position;
            const time = lastMoveEvent.time - velocityEvent.time;
            swiper2.velocity = distance / time;
            swiper2.velocity /= 2;

            if (Math.abs(swiper2.velocity) < params.freeMode.minimumVelocity) {
              swiper2.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper2.velocity = 0;
            }
          } else {
            swiper2.velocity = 0;
          }

          swiper2.velocity *= params.freeMode.momentumVelocityRatio;
          data.velocities.length = 0;
          let momentumDuration = 1000 * params.freeMode.momentumRatio;
          const momentumDistance = swiper2.velocity * momentumDuration;
          let newPosition = swiper2.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          let doBounce = false;
          let afterBouncePosition;
          const bounceAmount = Math.abs(swiper2.velocity) * 20 * params.freeMode.momentumBounceRatio;
          let needsLoopFix;

          if (newPosition < swiper2.maxTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition + swiper2.maxTranslate() < -bounceAmount) {
                newPosition = swiper2.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper2.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper2.maxTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper2.minTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition - swiper2.minTranslate() > bounceAmount) {
                newPosition = swiper2.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper2.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper2.minTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeMode.sticky) {
            let nextSlide;

            for (let j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper2.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            once('transitionEnd', () => {
              swiper2.loopFix();
            });
          } // Fix duration


          if (swiper2.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper2.translate) / swiper2.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper2.translate) / swiper2.velocity);
            }

            if (params.freeMode.sticky) {
              // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper2.translate);
              const currentSlideSize = swiper2.slidesSizesGrid[swiper2.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeMode.sticky) {
            swiper2.slideToClosest();
            return;
          }

          if (params.freeMode.momentumBounce && doBounce) {
            swiper2.updateProgress(afterBouncePosition);
            swiper2.setTransition(momentumDuration);
            swiper2.setTranslate(newPosition);
            swiper2.transitionStart(true, swiper2.swipeDirection);
            swiper2.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper2 || swiper2.destroyed || !data.allowMomentumBounce) return;
              emit('momentumBounce');
              swiper2.setTransition(params.speed);
              setTimeout(() => {
                swiper2.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(() => {
                  if (!swiper2 || swiper2.destroyed) return;
                  swiper2.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper2.velocity) {
            emit('_freeModeNoMomentumRelease');
            swiper2.updateProgress(newPosition);
            swiper2.setTransition(momentumDuration);
            swiper2.setTranslate(newPosition);
            swiper2.transitionStart(true, swiper2.swipeDirection);

            if (!swiper2.animating) {
              swiper2.animating = true;
              $wrapperEl.transitionEnd(() => {
                if (!swiper2 || swiper2.destroyed) return;
                swiper2.transitionEnd();
              });
            }
          } else {
            swiper2.updateProgress(newPosition);
          }

          swiper2.updateActiveIndex();
          swiper2.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
          swiper2.slideToClosest();
          return;
        } else if (params.freeMode) {
          emit('_freeModeNoMomentumRelease');
        }

        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
          swiper2.updateProgress();
          swiper2.updateActiveIndex();
          swiper2.updateSlidesClasses();
        }
      }

      Object.assign(swiper2, {
        freeMode: {
          onTouchStart,
          onTouchMove,
          onTouchEnd
        }
      });
    }

    function Grid(_ref) {
      let {
        swiper2,
        extendParams
      } = _ref;
      extendParams({
        grid: {
          rows: 1,
          fill: 'column'
        }
      });
      let slidesNumberEvenToRows;
      let slidesPerRow;
      let numFullColumns;

      const initSlides = slidesLength => {
        const {
          slidesPerView
        } = swiper2.params;
        const {
          rows,
          fill
        } = swiper2.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);

        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }

        if (slidesPerView !== 'auto' && fill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        }
      };

      const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
        const {
          slidesPerGroup,
          spaceBetween
        } = swiper2.params;
        const {
          rows,
          fill
        } = swiper2.params.grid; // Set slides order

        let newSlideOrderIndex;
        let column;
        let row;

        if (fill === 'row' && slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (slidesPerGroup * rows));
          const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
          const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
          slide.css({
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (fill === 'column') {
          column = Math.floor(i / rows);
          row = i - column * rows;

          if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
            row += 1;

            if (row >= rows) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
      };

      const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
        const {
          spaceBetween,
          centeredSlides,
          roundLengths
        } = swiper2.params;
        const {
          rows
        } = swiper2.params.grid;
        swiper2.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper2.virtualSize = Math.ceil(swiper2.virtualSize / rows) - spaceBetween;
        swiper2.$wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper2.virtualSize + spaceBetween}px`
        });

        if (centeredSlides) {
          snapGrid.splice(0, snapGrid.length);
          const newSlidesGrid = [];

          for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] < swiper2.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }

          snapGrid.push(...newSlidesGrid);
        }
      };

      swiper2.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
      };
    }

    function appendSlide(slides) {
      const swiper2 = this;
      const {
        $wrapperEl,
        params
      } = swiper2;

      if (params.loop) {
        swiper2.loopDestroy();
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper2.loopCreate();
      }

      if (!params.observer) {
        swiper2.update();
      }
    }

    function prependSlide(slides) {
      const swiper2 = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper2;

      if (params.loop) {
        swiper2.loopDestroy();
      }

      let newActiveIndex = activeIndex + 1;

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper2.loopCreate();
      }

      if (!params.observer) {
        swiper2.update();
      }

      swiper2.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      const swiper2 = this;
      const {
        $wrapperEl,
        params,
        activeIndex
      } = swiper2;
      let activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper2.loopedSlides;
        swiper2.loopDestroy();
        swiper2.slides = $wrapperEl.children(`.${params.slideClass}`);
      }

      const baseLength = swiper2.slides.length;

      if (index <= 0) {
        swiper2.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper2.appendSlide(slides);
        return;
      }

      let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      const slidesBuffer = [];

      for (let i = baseLength - 1; i >= index; i -= 1) {
        const currentSlide = swiper2.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (let i = 0; i < slidesBuffer.length; i += 1) {
        $wrapperEl.append(slidesBuffer[i]);
      }

      if (params.loop) {
        swiper2.loopCreate();
      }

      if (!params.observer) {
        swiper2.update();
      }

      if (params.loop) {
        swiper2.slideTo(newActiveIndex + swiper2.loopedSlides, 0, false);
      } else {
        swiper2.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      const swiper2 = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper2;
      let activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper2.loopedSlides;
        swiper2.loopDestroy();
        swiper2.slides = $wrapperEl.children(`.${params.slideClass}`);
      }

      let newActiveIndex = activeIndexBuffer;
      let indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (let i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper2.slides[indexToRemove]) swiper2.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper2.slides[indexToRemove]) swiper2.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper2.loopCreate();
      }

      if (!params.observer) {
        swiper2.update();
      }

      if (params.loop) {
        swiper2.slideTo(newActiveIndex + swiper2.loopedSlides, 0, false);
      } else {
        swiper2.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      const swiper2 = this;
      const slidesIndexes = [];

      for (let i = 0; i < swiper2.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper2.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
      let {
        swiper2
      } = _ref;
      Object.assign(swiper2, {
        appendSlide: appendSlide.bind(swiper2),
        prependSlide: prependSlide.bind(swiper2),
        addSlide: addSlide.bind(swiper2),
        removeSlide: removeSlide.bind(swiper2),
        removeAllSlides: removeAllSlides.bind(swiper2)
      });
    }

    function effectInit(params) {
      const {
        effect,
        swiper2,
        on,
        setTranslate,
        setTransition,
        overwriteParams,
        perspective,
        recreateShadows,
        getEffectParams
      } = params;
      on('beforeInit', () => {
        if (swiper2.params.effect !== effect) return;
        swiper2.classNames.push(`${swiper2.params.containerModifierClass}${effect}`);

        if (perspective && perspective()) {
          swiper2.classNames.push(`${swiper2.params.containerModifierClass}3d`);
        }

        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper2.params, overwriteParamsResult);
        Object.assign(swiper2.originalParams, overwriteParamsResult);
      });
      on('setTranslate', () => {
        if (swiper2.params.effect !== effect) return;
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        if (swiper2.params.effect !== effect) return;
        setTransition(duration);
      });
      on('transitionEnd', () => {
        if (swiper2.params.effect !== effect) return;

        if (recreateShadows) {
          if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

          swiper2.slides.each(slideEl => {
            const $slideEl = swiper2.$(slideEl);
            $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
          }); // create new one

          recreateShadows();
        }
      });
      let requireUpdateOnVirtual;
      on('virtualUpdate', () => {
        if (swiper2.params.effect !== effect) return;

        if (!swiper2.slides.length) {
          requireUpdateOnVirtual = true;
        }

        requestAnimationFrame(() => {
          if (requireUpdateOnVirtual && swiper2.slides && swiper2.slides.length) {
            setTranslate();
            requireUpdateOnVirtual = false;
          }
        });
      });
    }

    function effectTarget(effectParams, $slideEl) {
      if (effectParams.transformEl) {
        return $slideEl.find(effectParams.transformEl).css({
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden'
        });
      }

      return $slideEl;
    }

    function effectVirtualTransitionEnd(_ref) {
      let {
        swiper2,
        duration,
        transformEl,
        allSlides
      } = _ref;
      const {
        slides,
        activeIndex,
        $wrapperEl
      } = swiper2;

      if (swiper2.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;

        if (allSlides) {
          $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        } else {
          $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        }

        $transitionEndTarget.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper2 || swiper2.destroyed) return;
          eventTriggered = true;
          swiper2.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }

    function EffectFade(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        fadeEffect: {
          crossFade: false,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          slides
        } = swiper2;
        const params = swiper2.params.fadeEffect;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper2.slides.eq(i);
          const offset = $slideEl[0].swiperSlideOffset;
          let tx = -offset;
          if (!swiper2.params.virtualTranslate) tx -= swiper2.translate;
          let ty = 0;

          if (!swiper2.isHorizontal()) {
            ty = tx;
            tx = 0;
          }

          const slideOpacity = swiper2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.css({
            opacity: slideOpacity
          }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper2.params.fadeEffect;
        const $transitionElements = transformEl ? swiper2.slides.find(transformEl) : swiper2.slides;
        $transitionElements.transition(duration);
        effectVirtualTransitionEnd({
          swiper2,
          duration,
          transformEl,
          allSlides: true
        });
      };

      effectInit({
        effect: 'fade',
        swiper2,
        on,
        setTranslate,
        setTransition,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper2.params.cssMode
        })
      });
    }

    function EffectCube(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      });

      const createSlideShadows = ($slideEl, progress, isHorizontal) => {
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      };

      const recreateShadows = () => {
        // create new ones
        const isHorizontal = swiper2.isHorizontal();
        swiper2.slides.each(slideEl => {
          const progress = Math.max(Math.min(slideEl.progress, 1), -1);
          createSlideShadows($(slideEl), progress, isHorizontal);
        });
      };

      const setTranslate = () => {
        const {
          $el,
          $wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
          browser
        } = swiper2;
        const params = swiper2.params.cubeEffect;
        const isHorizontal = swiper2.isHorizontal();
        const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }

            $cubeShadowEl.css({
              height: `${swiperWidth}px`
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;

          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }

          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);

          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }

          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;

          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }

          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }

          $slideEl.transform(transform);

          if (params.slideShadows) {
            createSlideShadows($slideEl, progress, isHorizontal);
          }
        }

        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset = params.shadowOffset;
            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
          }
        }

        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
        $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
      };

      const setTransition = duration => {
        const {
          $el,
          slides
        } = swiper2;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper2.params.cubeEffect.shadow && !swiper2.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      };

      effectInit({
        effect: 'cube',
        swiper2,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper2.params.cubeEffect,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        })
      });
    }

    function createShadow(params, $slideEl, side) {
      const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
      const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
      let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

      if (!$shadowEl.length) {
        $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
      }

      return $shadowEl;
    }

    function EffectFlip(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
          transformEl: null
        }
      });

      const createSlideShadows = ($slideEl, progress, params) => {
        let shadowBefore = swiper2.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper2.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = createShadow(params, $slideEl, swiper2.isHorizontal() ? 'left' : 'top');
        }

        if (shadowAfter.length === 0) {
          shadowAfter = createShadow(params, $slideEl, swiper2.isHorizontal() ? 'right' : 'bottom');
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      };

      const recreateShadows = () => {
        // Set shadows
        const params = swiper2.params.flipEffect;
        swiper2.slides.each(slideEl => {
          const $slideEl = $(slideEl);
          let progress = $slideEl[0].progress;

          if (swiper2.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min(slideEl.progress, 1), -1);
          }

          createSlideShadows($slideEl, progress, params);
        });
      };

      const setTranslate = () => {
        const {
          slides,
          rtlTranslate: rtl
        } = swiper2;
        const params = swiper2.params.flipEffect;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;

          if (swiper2.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }

          const offset = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = swiper2.params.cssMode ? -offset - swiper2.translate : -offset;
          let ty = 0;

          if (!swiper2.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (params.slideShadows) {
            createSlideShadows($slideEl, progress, params);
          }

          const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper2.params.flipEffect;
        const $transitionElements = transformEl ? swiper2.slides.find(transformEl) : swiper2.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        effectVirtualTransitionEnd({
          swiper2,
          duration,
          transformEl
        });
      };

      effectInit({
        effect: 'flip',
        swiper2,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper2.params.flipEffect,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper2.params.cssMode
        })
      });
    }

    function EffectCoverflow(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          slidesSizesGrid
        } = swiper2;
        const params = swiper2.params.coverflowEffect;
        const isHorizontal = swiper2.isHorizontal();
        const transform = swiper2.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center

        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
          const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

          let translateZ = -translate * Math.abs(offsetMultiplier);
          let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }

          let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
            }

            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
            }

            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper2.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper2.slides.find(transformEl) : swiper2.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      };

      effectInit({
        effect: 'coverflow',
        swiper2,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true
        })
      });
    }

    function EffectCreative(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: false,
          progressMultiplier: 1,
          perspective: true,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      });

      const getTranslateValue = value => {
        if (typeof value === 'string') return value;
        return `${value}px`;
      };

      const setTranslate = () => {
        const {
          slides,
          $wrapperEl,
          slidesSizesGrid
        } = swiper2;
        const params = swiper2.params.creativeEffect;
        const {
          progressMultiplier: multiplier
        } = params;
        const isCenteredSlides = swiper2.params.centeredSlides;

        if (isCenteredSlides) {
          const margin = slidesSizesGrid[0] / 2 - swiper2.params.slidesOffsetBefore || 0;
          $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
          let originalProgress = progress;

          if (!isCenteredSlides) {
            originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
          }

          const offset = $slideEl[0].swiperSlideOffset;
          const t = [swiper2.params.cssMode ? -offset - swiper2.translate : -offset, 0, 0];
          const r = [0, 0, 0];
          let custom = false;

          if (!swiper2.isHorizontal()) {
            t[1] = t[0];
            t[0] = 0;
          }

          let data = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };

          if (progress < 0) {
            data = params.next;
            custom = true;
          } else if (progress > 0) {
            data = params.prev;
            custom = true;
          } // set translate


          t.forEach((value, index) => {
            t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
          }); // set rotates

          r.forEach((value, index) => {
            r[index] = data.rotate[index] * Math.abs(progress * multiplier);
          });
          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const translateString = t.join(', ');
          const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
          const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
          const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
          const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

          if (custom && data.shadow || !custom) {
            let $shadowEl = $slideEl.children('.swiper-slide-shadow');

            if ($shadowEl.length === 0 && data.shadow) {
              $shadowEl = createShadow(params, $slideEl);
            }

            if ($shadowEl.length) {
              const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
              $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
            }
          }

          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform).css({
            opacity: opacityString
          });

          if (data.origin) {
            $targetEl.css('transform-origin', data.origin);
          }
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper2.params.creativeEffect;
        const $transitionElements = transformEl ? swiper2.slides.find(transformEl) : swiper2.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper2,
          duration,
          transformEl,
          allSlides: true
        });
      };

      effectInit({
        effect: 'creative',
        swiper2,
        on,
        setTranslate,
        setTransition,
        perspective: () => swiper2.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper2.params.cssMode
        })
      });
    }

    function EffectCards(_ref) {
      let {
        swiper2,
        extendParams,
        on
      } = _ref;
      extendParams({
        cardsEffect: {
          slideShadows: true,
          transformEl: null,
          rotate: true,
          perSlideRotate: 2,
          perSlideOffset: 8
        }
      });

      const setTranslate = () => {
        const {
          slides,
          activeIndex
        } = swiper2;
        const params = swiper2.params.cardsEffect;
        const {
          startTranslate,
          isTouched
        } = swiper2.touchEventsData;
        const currentTranslate = swiper2.translate;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max(slideProgress, -4), 4);
          let offset = $slideEl[0].swiperSlideOffset;

          if (swiper2.params.centeredSlides && !swiper2.params.cssMode) {
            swiper2.$wrapperEl.transform(`translateX(${swiper2.minTranslate()}px)`);
          }

          if (swiper2.params.centeredSlides && swiper2.params.cssMode) {
            offset -= slides[0].swiperSlideOffset;
          }

          let tX = swiper2.params.cssMode ? -offset - swiper2.translate : -offset;
          let tY = 0;
          const tZ = -100 * Math.abs(progress);
          let scale = 1;
          let rotate = -params.perSlideRotate * progress;
          let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
          const slideIndex = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.from + i : i;
          const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper2.params.cssMode) && currentTranslate < startTranslate;
          const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper2.params.cssMode) && currentTranslate > startTranslate;

          if (isSwipeToNext || isSwipeToPrev) {
            const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
            rotate += -28 * progress * subProgress;
            scale += -0.5 * subProgress;
            tXAdd += 96 * subProgress;
            tY = `${-25 * subProgress * Math.abs(progress)}%`;
          }

          if (progress < 0) {
            // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
          } else if (progress > 0) {
            // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
          } else {
            tX = `${tX}px`;
          }

          if (!swiper2.isHorizontal()) {
            const prevY = tY;
            tY = tX;
            tX = prevY;
          }

          const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
          const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;

          if (params.slideShadows) {
            // Set shadows
            let $shadowEl = $slideEl.find('.swiper-slide-shadow');

            if ($shadowEl.length === 0) {
              $shadowEl = createShadow(params, $slideEl);
            }

            if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper2.params.cardsEffect;
        const $transitionElements = transformEl ? swiper2.slides.find(transformEl) : swiper2.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper2,
          duration,
          transformEl
        });
      };

      effectInit({
        effect: 'cards',
        swiper2,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper2.params.cssMode
        })
      });
    }

    // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper2.use(modules);

    return Swiper2;

}));
//# sourceMappingURL=swiper-bundle.js.map