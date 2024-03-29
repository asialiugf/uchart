/**
 * @license
 * KLineChart v7.5.0
 * Copyright (c) 2019 lihu.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.klinecharts = {}));
}(this, (function (exports) { 'use strict';

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var extension = {
  technicalIndicatorExtensions: {},
  graphicMarkExtensions: {},
  addTechnicalIndicator: function addTechnicalIndicator(technicalIndicators) {
    var _this = this;

    if (technicalIndicators) {
      [].concat(technicalIndicators).forEach(function (technicalIndicator) {
        if (technicalIndicator.name) {
          _this.technicalIndicatorExtensions[technicalIndicator.name] = technicalIndicator;
        }
      });
    }
  },
  addGraphicMark: function addGraphicMark(graphicMarks) {
    var _this2 = this;

    if (graphicMarks) {
      [].concat(graphicMarks).forEach(function (graphicMark) {
        if (graphicMark.name) {
          _this2.graphicMarkExtensions[graphicMark.name] = graphicMark;
        }
      });
    }
  }
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 合并
 * @param target
 * @param source
 */
function merge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return;
  }

  for (var key in source) {
    if (key in target) {
      var targetProp = target[key];
      var sourceProp = source[key];

      if (isObject(sourceProp) && isObject(targetProp) && !isArray(sourceProp) && !isArray(targetProp)) {
        merge(targetProp, sourceProp);
      } else {
        if (isValid(source[key])) {
          target[key] = source[key];
        }
      }
    }
  }
}
/**
 * 克隆
 * @param target
 * @return {{}|*}
 */

function clone(target) {
  if (!isObject(target)) {
    return target;
  }

  var copy;

  if (isArray(target)) {
    copy = [];
  } else {
    copy = {};
  }

  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      var v = target[key];

      if (isObject(v)) {
        copy[key] = clone(v);
      } else {
        copy[key] = v;
      }
    }
  }

  return copy;
}
/**
 * 是否是数组
 * @param value
 * @return {boolean}
 */

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}
/**
 * 是否是方法
 * @param {*} value
 * @return {boolean}
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * 是否是对象
 * @param {*} value
 * @return {boolean}
 */

function isObject(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * 判断是否是数字
 * @param value
 * @returns {boolean}
 */

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
/**
 * 判断是否有效
 * @param value
 * @returns {boolean}
 */

function isValid(value) {
  return value !== null && value !== undefined;
}
/**
 * 判断是否是boolean
 * @param value
 * @returns {boolean}
 */

function isBoolean(value) {
  return typeof value === 'boolean';
}
/**
 * 是否是字符串
 * @param value
 * @return {boolean}
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * 是否是容器元素
 * @param dom
 * @return {boolean}
 */

function isContainerDom(dom) {
  return dom && dom instanceof HTMLElement && dom.appendChild && typeof dom.appendChild === 'function';
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 线的样式
 * @type {{DASH: string, SOLID: string}}
 */
var LineStyle = {
  DASH: 'dash',
  SOLID: 'solid'
};
/**
 * y轴位置
 * @type {{LEFT: string, RIGHT: string}}
 */

var YAxisPosition = {
  LEFT: 'left',
  RIGHT: 'right'
};
/**
 * y轴类型
 * @type {{PERCENTAGE: string, NORMAL: string}}
 */

var YAxisType = {
  NORMAL: 'normal',
  PERCENTAGE: 'percentage',
  LOG: 'log'
};
/**
 * 蜡烛图样式
 * @type {{AREA: string, OHLC: string, CANDLE_STROKE: string, CANDLE_SOLID: string, CANDLE_DOWN_STROKE: string, CANDLE_UP_STROKE: string}}
 */

var CandleType = {
  CANDLE_SOLID: 'candle_solid',
  CANDLE_STROKE: 'candle_stroke',
  CANDLE_UP_STROKE: 'candle_up_stroke',
  CANDLE_DOWN_STROKE: 'candle_down_stroke',
  OHLC: 'ohlc',
  AREA: 'area'
};
/**
 * 说明显示规则
 * @type {{FOLLOW_CROSS: string, NONE: string, ALWAYS: string}}
 */

var TooltipShowRule = {
  ALWAYS: 'always',
  FOLLOW_CROSS: 'follow_cross',
  NONE: 'none'
};
/**
 * 数据提示显示类型
 * @type {{RECT: string, STANDARD: string}}
 */

var TooltipShowType = {
  RECT: 'rect',
  STANDARD: 'standard'
};
/**
 * 注解标识类似
 * @type {{RECT: string, TRIANGLE: string, DIAMOND: string, CUSTOM: string, NONE: string, CIRCLE: string}}
 */

var AnnotationSymbolType = {
  CIRCLE: 'circle',
  RECT: 'rect',
  TRIANGLE: 'triangle',
  DIAMOND: 'diamond',
  CUSTOM: 'custom',
  NONE: 'none'
};
/**
 * 覆盖物位置
 * @type {{TOP: string, BOTTOM: string, POINT: string}}
 */

var OverlayPosition = {
  POINT: 'point',
  TOP: 'top',
  BOTTOM: 'bottom'
};
/**
 * 默认网格配置
 * @type {{horizontal: {size: number, color: string, dashValue: number[], show: boolean, style: string}, show: boolean, vertical: {size: number, color: string, dashValue: number[], show: boolean, style: string}}}
 */

var defaultGrid = {
  show: true,
  horizontal: {
    show: true,
    size: 1,
    color: '#EDEDED',
    style: LineStyle.DASH,
    dashValue: [2, 2]
  },
  vertical: {
    show: true,
    size: 1,
    color: '#EDEDED',
    style: LineStyle.DASH,
    dashValue: [2, 2]
  }
};
/**
 * 默认蜡烛柱图样式配置
 * @type {{area: {fillColor: [{offset: number, color: string}, {offset: number, color: string}], lineColor: string, lineSize: number, value: string}, bar: {noChangeColor: string, upColor: string, downColor: string}, tooltip: {rect: {offsetTop: number, fillColor: string, borderColor: string, paddingBottom: number, borderRadius: number, paddingRight: number, borderSize: number, offsetLeft: number, paddingTop: number, paddingLeft: number, offsetRight: number}, showRule: string, values: null, showType: string, text: {marginRight: number, size: number, color: string, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}, labels: string[]}, type: string, priceMark: {high: {textMargin: number, textSize: number, color: string, textFamily: string, show: boolean, textWeight: string}, last: {noChangeColor: string, upColor: string, line: {dashValue: number[], size: number, show: boolean, style: string}, show: boolean, text: {paddingBottom: number, size: number, color: string, paddingRight: number, show: boolean, weight: string, paddingTop: number, family: string, paddingLeft: number}, downColor: string}, low: {textMargin: number, textSize: number, color: string, textFamily: string, show: boolean, textWeight: string}, show: boolean}}}
 */

var defaultCandle = {
  margin: {
    top: 0.2,
    bottom: 0.1
  },
  type: CandleType.CANDLE_SOLID,
  bar: {
    /**
     * 上涨颜色
     */
    upColor: '#26A69A',

    /**
     * 下跌颜色
     */
    downColor: '#EF5350',

    /**
     * 无变化时颜色
     */
    noChangeColor: '#999999'
  },
  area: {
    lineSize: 2,
    lineColor: '#2196F3',
    value: 'close',
    fillColor: [{
      offset: 0,
      color: 'rgba(33, 150, 243, 0.01)'
    }, {
      offset: 1,
      color: 'rgba(33, 150, 243, 0.2)'
    }]
  },
  priceMark: {
    show: true,
    high: {
      show: true,
      color: '#76808F',
      textMargin: 5,
      textSize: 10,
      textFamily: 'Helvetica Neue',
      textWeight: 'normal'
    },
    low: {
      show: true,
      color: '#76808F',
      textMargin: 5,
      textSize: 10,
      textFamily: 'Helvetica Neue',
      textWeight: 'normal'
    },
    last: {
      show: true,
      upColor: '#26A69A',
      downColor: '#EF5350',
      noChangeColor: '#888888',
      line: {
        show: true,
        style: LineStyle.DASH,
        dashValue: [4, 4],
        size: 1
      },
      text: {
        show: true,
        size: 12,
        paddingLeft: 2,
        paddingTop: 2,
        paddingRight: 2,
        paddingBottom: 2,
        color: '#FFFFFF',
        family: 'Helvetica Neue',
        weight: 'normal',
        borderRadius: 2
      }
    }
  },
  tooltip: {
    showRule: TooltipShowRule.ALWAYS,
    showType: TooltipShowType.STANDARD,
    labels: ['时间: ', '开: ', '收: ', '高: ', '低: ', '成交量: '],
    values: null,
    defaultValue: 'n/a',
    rect: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 6,
      offsetLeft: 8,
      offsetTop: 8,
      offsetRight: 8,
      borderRadius: 4,
      borderSize: 1,
      borderColor: '#F2F3F5',
      fillColor: '#FEFEFE'
    },
    text: {
      size: 12,
      family: 'Helvetica Neue',
      weight: 'normal',
      color: '#76808F',
      marginLeft: 8,
      marginTop: 6,
      marginRight: 8,
      marginBottom: 0
    }
  }
};
/**
 * 默认的技术指标样式配置
 * @type {{bar: {noChangeColor: string, upColor: string, downColor: string}, line: {size: number, colors: [string, string, string, string, string]}, tooltip: {showParams: boolean, showName: boolean, showRule: string, text: {marginRight: number, size: number, color: string, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}}, circle: {noChangeColor: string, upColor: string, downColor: string}, lastValueMark: {show: boolean, text: {paddingBottom: number, color: string, size: number, paddingRight: number, show: boolean, weight: string, paddingTop: number, family: string, paddingLeft: number}}}}
 */

var defaultTechnicalIndicator = {
  margin: {
    top: 0.2,
    bottom: 0.1
  },
  bar: {
    upColor: 'rgba(38, 166, 154, .65)',
    downColor: 'rgba(239, 83, 80, .65)',
    noChangeColor: '#888888'
  },
  line: {
    size: 1,
    colors: ['#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4']
  },
  circle: {
    upColor: 'rgba(38, 166, 154, .65)',
    downColor: 'rgba(239, 83, 80, .65)',
    noChangeColor: '#888888'
  },
  lastValueMark: {
    show: false,
    text: {
      show: false,
      color: '#FFFFFF',
      size: 12,
      family: 'Helvetica Neue',
      weight: 'normal',
      paddingLeft: 3,
      paddingTop: 2,
      paddingRight: 3,
      paddingBottom: 2,
      borderRadius: 2
    }
  },
  tooltip: {
    showRule: TooltipShowRule.ALWAYS,
    showType: TooltipShowType.STANDARD,
    showName: true,
    showParams: true,
    defaultValue: 'n/a',
    text: {
      size: 12,
      family: 'Helvetica Neue',
      weight: 'normal',
      color: '#76808F',
      marginTop: 6,
      marginRight: 8,
      marginBottom: 0,
      marginLeft: 8
    }
  }
};
/**
 * 默认x轴配置
 * @type {{axisLine: {color: string, size: number, show: boolean}, show: boolean, tickText: {paddingBottom: number, color: string, size: number, show: boolean, weight: string, paddingTop: number, family: string}, height: null, tickLine: {size: number, color: string, show: boolean, length: number}}}
 */

var defaultXAxis = {
  /**
   * 是否显示整个轴
   */
  show: true,

  /**
   * 高度
   */
  height: null,

  /**
   * 轴线配置
   */
  axisLine: {
    show: true,
    color: '#DDDDDD',
    size: 1
  },

  /**
   * tick文字
   */
  tickText: {
    show: true,
    color: '#76808F',
    size: 12,
    family: 'Helvetica Neue',
    weight: 'normal',
    paddingTop: 3,
    paddingBottom: 6
  },
  // tick线
  tickLine: {
    show: true,
    size: 1,
    length: 3,
    color: '#DDDDDD'
  }
};
/**
 * 默认y轴配置
 * @type {{axisLine: {color: string, size: number, show: boolean}, show: boolean, width: null, position: string, tickText: {color: string, size: number, paddingRight: number, show: boolean, weight: string, family: string, paddingLeft: number}, type: string, inside: boolean, tickLine: {size: number, color: string, show: boolean, length: number}}}
 */

var defaultYAxis = {
  /**
   * 是否显示整个轴
   */
  show: true,

  /**
   * 宽度
   */
  width: null,

  /**
   * y轴类型
   */
  type: YAxisType.NORMAL,

  /**
   * 轴位置
   */
  position: YAxisPosition.RIGHT,

  /**
   * 轴是否在内部
   */
  inside: false,

  /**
   * 轴线配置
   */
  axisLine: {
    show: true,
    color: '#DDDDDD',
    size: 1
  },

  /**
   * tick文字
   */
  tickText: {
    show: true,
    color: '#76808F',
    size: 12,
    family: 'Helvetica Neue',
    weight: 'normal',
    paddingLeft: 3,
    paddingRight: 6
  },
  // tick线
  tickLine: {
    show: true,
    size: 1,
    length: 3,
    color: '#DDDDDD'
  }
};
var defaultCrosshair = {
  show: true,
  horizontal: {
    show: true,
    line: {
      show: true,
      style: LineStyle.DASH,
      dashValue: [4, 2],
      size: 1,
      color: '#76808F'
    },
    text: {
      show: true,
      color: '#FFFFFF',
      size: 12,
      family: 'Helvetica Neue',
      weight: 'normal',
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2,
      paddingBottom: 2,
      borderSize: 1,
      borderColor: '#686D76',
      borderRadius: 2,
      backgroundColor: '#686D76'
    }
  },
  vertical: {
    show: true,
    line: {
      show: true,
      style: LineStyle.DASH,
      dashValue: [4, 2],
      size: 1,
      color: '#76808F'
    },
    text: {
      show: true,
      color: '#FFFFFF',
      size: 12,
      family: 'Helvetica Neue',
      weight: 'normal',
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2,
      paddingBottom: 2,
      borderSize: 1,
      borderRadius: 2,
      borderColor: '#686D76',
      backgroundColor: '#686D76'
    }
  }
};
/**
 * 默认图形标记配置
 * @type {{arc: {fill: {color: string}, stroke: {size: number, color: string}}, polygon: {fill: {color: string}, stroke: {size: number, color: string}}, line: {color: string, size: number}, text: {marginRight: number, color: string, size: number, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}, point: {backgroundColor: string, borderColor: string, activeBorderSize: number, activeRadius: number, activeBorderColor: string, activeBackgroundColor: string, borderSize: number, radius: number}}}
 */

var defaultGraphicMark = {
  point: {
    backgroundColor: '#2196F3',
    borderColor: 'rgba(33, 150, 243, 0.35)',
    borderSize: 1,
    radius: 5,
    activeBackgroundColor: '#2196F3',
    activeBorderColor: 'rgba(33, 150, 243, 0.35)',
    activeBorderSize: 3,
    activeRadius: 5
  },
  line: {
    color: '#2196F3',
    size: 1,
    dashValue: [2, 2]
  },
  polygon: {
    stroke: {
      size: 1,
      color: '#2196F3'
    },
    fill: {
      color: 'rgba(33, 150, 243, 0.1)'
    }
  },
  arc: {
    stroke: {
      size: 1,
      color: '#2196F3'
    },
    fill: {
      color: 'rgba(33, 150, 243, 0.1)'
    }
  },
  text: {
    color: '#2196F3',
    size: 12,
    family: 'Helvetica Neue',
    weight: 'normal',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 6
  }
};
/**
 * 默认注解信息配置
 * @type {{}}
 */

var defaultAnnotation = {
  symbol: {
    type: AnnotationSymbolType.DIAMOND,
    position: OverlayPosition.TOP,
    size: 8,
    color: '#2196F3',
    activeSize: 10,
    activeColor: '#FF9600',
    offset: [0, 20]
  }
};
var defaultTag = {
  position: OverlayPosition.POINT,
  offset: 0,
  line: {
    show: true,
    style: LineStyle.DASH,
    dashValue: [4, 2],
    size: 1,
    color: '#2196F3'
  },
  text: {
    color: '#FFFFFF',
    backgroundColor: '#2196F3',
    size: 12,
    family: 'Helvetica Neue',
    weight: 'normal',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 2
  },
  mark: {
    color: '#FFFFFF',
    backgroundColor: '#2196F3',
    size: 12,
    family: 'Helvetica Neue',
    weight: 'normal',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 2
  }
};
/**
 * 图表之间默认分割配置
 * @type {{size: number, color: string}}
 */

var defaultSeparator = {
  size: 1,
  color: '#DDDDDD',
  fill: true,
  activeBackgroundColor: 'rgba(33, 150, 243, 0.08)'
};
var defaultStyleOptions = {
  grid: defaultGrid,
  candle: defaultCandle,
  technicalIndicator: defaultTechnicalIndicator,
  xAxis: defaultXAxis,
  yAxis: defaultYAxis,
  separator: defaultSeparator,
  crosshair: defaultCrosshair,
  graphicMark: defaultGraphicMark,
  annotation: defaultAnnotation,
  tag: defaultTag
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 格式化值
 * @param data
 * @param key
 * @param defaultValue
 * @returns {string|*}
 */

function formatValue(data, key) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '--';

  if (isObject(data)) {
    var value = data[key];

    if (isValid(value)) {
      return value;
    }
  }

  return defaultValue;
}
/**
 * 格式化时间
 * @param dateTimeFormat
 * @param timestamp
 * @param format
 * @returns {string}
 */

function formatDate(dateTimeFormat, timestamp) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'MM-DD hh:mm';

  if (isNumber(timestamp)) {
    var dateTimeString = dateTimeFormat.format(new Date(timestamp));
    var dateTimeStringArray = dateTimeString.split(', ');
    var dateStringArray = dateTimeStringArray[0].split('/');
    var date = {
      YYYY: dateStringArray[2],
      MM: dateStringArray[0],
      DD: dateStringArray[1],
      'hh:mm': dateTimeStringArray[1].match(/^[\d]{2}/)[0] === '24' ? dateTimeStringArray[1].replace(/^[\d]{2}/, '00') : dateTimeStringArray[1]
    };
    return format.replace(/YYYY|MM|DD|(hh:mm)/g, function (key) {
      return date[key];
    });
  }

  return '--';
}
/**
 * 格式化精度
 */

function formatPrecision(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var v = +value;

  if ((v || v === 0) && isNumber(v)) {
    return v.toFixed(precision);
  }

  return "".concat(v);
}
/**
 * 格式化大数据
 * @param value
 */

function formatBigNumber(value) {
  if (isNumber(+value)) {
    if (value > 1000000000) {
      return "".concat(+(value / 1000000000).toFixed(3), "B");
    }

    if (value > 1000000) {
      return "".concat(+(value / 1000000).toFixed(3), "M");
    }

    if (value > 1000) {
      return "".concat(+(value / 1000).toFixed(3), "K");
    }

    return value;
  }

  return '--';
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 二分查找最接近的数
 * @param dataList
 * @param valueKey
 * @param targetNumber
 * @return {number}
 */
function binarySearchNearest(dataList, valueKey, targetNumber) {
  var left = 0;
  var right = 0;

  for (right = dataList.length - 1; left !== right;) {
    var midIndex = Math.floor((right + left) / 2);
    var mid = right - left;
    var midValue = dataList[midIndex][valueKey];

    if (targetNumber === dataList[left][valueKey]) {
      return left;
    }

    if (targetNumber === dataList[right][valueKey]) {
      return right;
    }

    if (targetNumber === midValue) {
      return midIndex;
    }

    if (targetNumber > midValue) {
      left = midIndex;
    } else {
      right = midIndex;
    }

    if (mid <= 2) {
      break;
    }
  }

  return left;
}
/**
 * 优化数字
 * @param value
 * @return {number|number}
 */

function nice(value) {
  var exponent = Math.floor(log10(value));
  var exp10 = index10(exponent);
  var f = value / exp10; // 1 <= f < 10

  var nf = 0;

  if (f < 1.5) {
    nf = 1;
  } else if (f < 2.5) {
    nf = 2;
  } else if (f < 3.5) {
    nf = 3;
  } else if (f < 4.5) {
    nf = 4;
  } else if (f < 5.5) {
    nf = 5;
  } else if (f < 6.5) {
    nf = 6;
  } else {
    nf = 8;
  }

  value = nf * exp10;
  return exponent >= -20 ? +value.toFixed(exponent < 0 ? -exponent : 0) : value;
}
/**
 * 四和五入
 * @param value
 * @param precision
 * @return {number}
 */

function round(value, precision) {
  if (precision == null) {
    precision = 10;
  }

  precision = Math.min(Math.max(0, precision), 20);
  value = (+value).toFixed(precision);
  return +value;
}
/**
 * 获取小数位数
 * @param value
 * @return {number|number}
 */

function getPrecision(value) {
  var str = value.toString();
  var eIndex = str.indexOf('e');

  if (eIndex > 0) {
    var precision = +str.slice(eIndex + 1);
    return precision < 0 ? -precision : 0;
  } else {
    var dotIndex = str.indexOf('.');
    return dotIndex < 0 ? 0 : str.length - 1 - dotIndex;
  }
}
/**
 * 10为低的对数函数
 * @param value
 * @return {number}
 */

function log10(value) {
  return Math.log(value) / Math.log(10);
}
/**
 * 10的指数函数
 * @param value
 * @return {number}
 */

function index10(value) {
  return Math.pow(10, value);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 打印警告日志
 * @param api
 * @param invalidParam
 * @param append
 */

function logWarn(api, invalidParam) {
  var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  {
    console.log('%c😑 klinecharts warning: \n%s%s%s', 'color:#fcaf17;font-weight:bold', api ? "Call api ".concat(api).concat(invalidParam || append ? ', ' : '.') : '', invalidParam ? "invalid parameter ".concat(invalidParam).concat(append ? ', ' : '.') : '', append ? "".concat(append) : '');
  }
}
/**
 * 打印错误日志
 * @param api
 * @param invalidParam
 * @param append
 */

function logError(api, invalidParam) {
  var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  {
    console.log('%c😟 klinecharts error: \n%s%s%s', 'color:#ed1941;font-weight:bold', api ? "Call api ".concat(api).concat(invalidParam || append ? ', ' : '.', ",") : '', invalidParam ? "invalid parameter ".concat(invalidParam).concat(append ? ', ' : '.') : '', append ? "".concat(append) : '');
  }
}
/**
 * 打印标识
 */

function logTag() {
  {
    console.log('%c❤️ Welcome to klinecharts. Version is 7.5.0', 'border-radius:2px;border:dashed 1px #2196F3;padding:26px 20px;font-size:14px;color:#2196F3');
  }
}

/**
 * 技术指标系列
 * @type {{PRICE: string, VOLUME: string, NORMAL: string}}
 */

var TechnicalIndicatorSeries = {
  PRICE: 'price',
  VOLUME: 'volume',
  NORMAL: 'normal'
};
/**
 * 绘制类型
 * @type {{BAR: string, LINE: string, CIRCLE: string}}
 */

var TechnicalIndicatorPlotType = {
  LINE: 'line',
  BAR: 'bar',
  CIRCLE: 'circle'
};

var TechnicalIndicator = /*#__PURE__*/function () {
  function TechnicalIndicator(_ref) {
    var name = _ref.name,
        series = _ref.series,
        calcParams = _ref.calcParams,
        plots = _ref.plots,
        precision = _ref.precision,
        calcParamsAllowDecimal = _ref.calcParamsAllowDecimal,
        shouldCheckParamCount = _ref.shouldCheckParamCount,
        shouldOhlc = _ref.shouldOhlc,
        shouldFormatBigNumber = _ref.shouldFormatBigNumber,
        baseValue = _ref.baseValue,
        minValue = _ref.minValue,
        maxValue = _ref.maxValue,
        styles = _ref.styles;

    _classCallCheck(this, TechnicalIndicator);

    // 指标名
    this.name = name || ''; // 指标系列，值有 'price', 'volume', 'normal

    this.series = series || 'normal'; // 精度

    this.precision = isNumber(precision) && precision >= 0 ? precision : 4; // 计算参数

    this.calcParams = isArray(calcParams) ? calcParams : []; // 数据信息

    this.plots = isArray(plots) ? plots : []; // 计算参数是否允许小数

    this.calcParamsAllowDecimal = isObject(calcParamsAllowDecimal) ? calcParamsAllowDecimal : {}; // 是否需要检查参数

    this.shouldCheckParamCount = isBoolean(shouldCheckParamCount) ? shouldCheckParamCount : true; // 是否需要ohlc

    this.shouldOhlc = shouldOhlc; // 是否需要格式化大数据值，从1000开始格式化，比如100000是否需要格式化100K

    this.shouldFormatBigNumber = shouldFormatBigNumber; // 基础比对数据

    this.baseValue = isNumber(baseValue) ? baseValue : null; // 指定的最小值

    this.minValue = minValue; // 指定的最大值

    this.maxValue = maxValue; // 样式

    this.styles = styles;
  }

  _createClass(TechnicalIndicator, [{
    key: "setPrecision",
    value: function setPrecision(precision) {
      if (isNumber(precision) && precision >= 0) {
        this.precision = parseInt(precision, 10);
        return true;
      }

      return false;
    }
    /**
     * 设置计算参数是否允许小数
     * @param calcParamsAllowDecimal
     */

  }, {
    key: "setCalcParamsAllowDecimal",
    value: function setCalcParamsAllowDecimal(calcParamsAllowDecimal) {
      if (isObject(calcParamsAllowDecimal)) {
        this.calcParamsAllowDecimal = calcParamsAllowDecimal;
      }
    }
  }, {
    key: "setCalcParams",
    value: function setCalcParams(params) {
      if (!isArray(params)) {
        return false;
      }

      if (this.shouldCheckParamCount && params.length !== this.calcParams.length) {
        return false;
      }

      for (var i = 0; i < params.length; i++) {
        var v = params[i];

        if (!isNumber(v) || v <= 0 || !this.calcParamsAllowDecimal[i] && parseInt(v, 10) !== v) {
          return false;
        }
      }

      this.calcParams = clone(params);
      var plots = this.regeneratePlots(params);

      if (plots && isArray(plots)) {
        this.plots = plots;
      }

      return true;
    }
  }, {
    key: "setStyles",
    value: function setStyles(styles, defaultStyles) {
      if (!isObject(styles)) {
        return false;
      }

      if (!this.styles) {
        this.styles = {
          bar: clone(defaultStyles.bar),
          line: clone(defaultStyles.line),
          circle: clone(defaultStyles.circle)
        };
      }

      merge(this.styles, styles);
      return true;
    }
    /**
     * 计算技术指标
     */

  }, {
    key: "calcTechnicalIndicator",
    value: function calcTechnicalIndicator(dataList, calcParams) {}
    /**
     * 重新生成各项数据
     * @private
     */

  }, {
    key: "regeneratePlots",
    value: function regeneratePlots(params) {}
  }]);

  return TechnicalIndicator;
}();

/**
 * 创建技术指标映射
 * @return {{}}
 */

function createTechnicalIndicatorMapping() {
  var mapping = {};
  var technicalIndicatorExtensions = extension.technicalIndicatorExtensions;

  for (var name in technicalIndicatorExtensions) {
    var technicalIndicatorInstance = createTechnicalIndicatorInstance(technicalIndicatorExtensions[name]);

    if (technicalIndicatorInstance) {
      mapping[name] = technicalIndicatorInstance;
    }
  }

  return mapping;
}
/**
 * 创建一个新的技术指标
 * @param name
 * @param series
 * @param calcParams
 * @param plots
 * @param precision
 * @param calcParamsAllowDecimal
 * @param shouldCheckParamCount
 * @param shouldOhlc
 * @param shouldFormatBigNumber
 * @param baseValue
 * @param minValue
 * @param maxValue
 * @param styles
 * @param calcTechnicalIndicator
 * @param regeneratePlots
 * @param render
 * @returns {TechnicalIndicatorClass|null}
 */

function createTechnicalIndicatorInstance(_ref) {
  var name = _ref.name,
      series = _ref.series,
      calcParams = _ref.calcParams,
      plots = _ref.plots,
      precision = _ref.precision,
      calcParamsAllowDecimal = _ref.calcParamsAllowDecimal,
      shouldCheckParamCount = _ref.shouldCheckParamCount,
      shouldOhlc = _ref.shouldOhlc,
      shouldFormatBigNumber = _ref.shouldFormatBigNumber,
      baseValue = _ref.baseValue,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue,
      styles = _ref.styles,
      calcTechnicalIndicator = _ref.calcTechnicalIndicator,
      regeneratePlots = _ref.regeneratePlots,
      render = _ref.render;

  if (!name || !isFunction(calcTechnicalIndicator)) {
    logWarn('', '', 'The required attribute "name" and method "calcTechnicalIndicator" are missing, and new technical indicator cannot be generated!!!');
    return null;
  }

  var TechnicalIndicatorClass = /*#__PURE__*/function (_TechnicalIndicator) {
    _inherits(TechnicalIndicatorClass, _TechnicalIndicator);

    var _super = _createSuper(TechnicalIndicatorClass);

    function TechnicalIndicatorClass() {
      _classCallCheck(this, TechnicalIndicatorClass);

      return _super.call(this, {
        name: name,
        series: series,
        calcParams: calcParams,
        plots: plots,
        precision: precision,
        calcParamsAllowDecimal: calcParamsAllowDecimal,
        shouldCheckParamCount: shouldCheckParamCount,
        shouldOhlc: shouldOhlc,
        shouldFormatBigNumber: shouldFormatBigNumber,
        baseValue: baseValue,
        minValue: minValue,
        maxValue: maxValue,
        styles: styles
      });
    }

    return TechnicalIndicatorClass;
  }(TechnicalIndicator);

  TechnicalIndicatorClass.prototype.calcTechnicalIndicator = calcTechnicalIndicator;

  if (regeneratePlots && isFunction(regeneratePlots)) {
    TechnicalIndicatorClass.prototype.regeneratePlots = regeneratePlots;
  }

  if (render && isFunction(render)) {
    TechnicalIndicatorClass.prototype.render = render;
  }

  return new TechnicalIndicatorClass();
}
/**
 * 获取技术指标信息
 * @param technicalIndicator
 * @return {{series, calcParams, precision, name, styles}}
 */

function createTechnicalIndicatorInfo(technicalIndicator) {
  return {
    name: technicalIndicator.name,
    series: technicalIndicator.series,
    calcParams: technicalIndicator.calcParams,
    calcParamsAllowDecimal: technicalIndicator.calcParamsAllowDecimal,
    shouldCheckParamCount: technicalIndicator.shouldCheckParamCount,
    shouldOhlc: technicalIndicator.shouldOhlc,
    shouldFormatBigNumber: technicalIndicator.shouldFormatBigNumber,
    precision: technicalIndicator.precision,
    styles: technicalIndicator.styles,
    result: technicalIndicator.result || []
  };
}
/**
 * 获取技术指标提示数据
 * @param technicalIndicatorData
 * @param technicalIndicator
 * @return {{calcParamText: string, values: [], name: string}}
 */

function getTechnicalIndicatorTooltipData() {
  var technicalIndicatorData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var technicalIndicator = arguments.length > 1 ? arguments[1] : undefined;
  var calcParams = technicalIndicator.calcParams;
  var plots = technicalIndicator.plots;
  var precision = technicalIndicator.precision;
  var shouldFormatBigNumber = technicalIndicator.shouldFormatBigNumber;
  var values = [];
  var name = '';
  var calcParamText = '';

  if (plots.length > 0) {
    name = technicalIndicator.name;
  }

  if (calcParams.length > 0) {
    calcParamText = "(".concat(calcParams.join(','), ")");
  }

  plots.forEach(function (plot) {
    var data = {};

    if (isValid(plot.title)) {
      var value = technicalIndicatorData[plot.key];

      if (isValid(value)) {
        value = formatPrecision(value, precision);

        if (shouldFormatBigNumber) {
          value = formatBigNumber(value);
        }
      }

      data.title = plot.title;
      data.value = value;
    }

    values.push(data);
  });
  return {
    values: values,
    name: name,
    calcParamText: calcParamText
  };
}

/**
 * 覆盖物
 */

var Overlay = /*#__PURE__*/function () {
  function Overlay(_ref) {
    var id = _ref.id,
        chartData = _ref.chartData,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis;

    _classCallCheck(this, Overlay);

    this._id = id;
    this._chartData = chartData;
    this._xAxis = xAxis;
    this._yAxis = yAxis;
    this._styles = null;
  }
  /**
   * 绘制
   * @param ctx
   */


  _createClass(Overlay, [{
    key: "draw",
    value: function draw(ctx) {}
    /**
     * 设置样式
     * @param styles
     * @param defaultStyles
     */

  }, {
    key: "setStyles",
    value: function setStyles(styles, defaultStyles) {
      if (!isObject(styles)) {
        return false;
      }

      if (!this._styles) {
        this._styles = clone(defaultStyles);
      }

      merge(this._styles, styles);
      return true;
    }
    /**
     * 获取id
     * @return {*}
     */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /**
     * 获取样式
     * @return {null}
     */

  }, {
    key: "styles",
    value: function styles() {
      return this._styles;
    }
    /**
     * 检查鼠标点是否在图形上
     * @param point
     */

  }, {
    key: "checkMousePointOnGraphic",
    value: function checkMousePointOnGraphic(point) {} // -------------------- 事件开始 -------------------

    /**
     * 点击事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onClick",
    value: function onClick(_ref2) {
      _ref2.id;
          _ref2.points;
          _ref2.event;
    }
    /**
     * 右击事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onRightClick",
    value: function onRightClick(_ref3) {
      _ref3.id;
          _ref3.points;
          _ref3.event;
    }
    /**
     * 鼠标进入事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(_ref4) {
      _ref4.id;
          _ref4.points;
          _ref4.event;
    }
    /**
     * 鼠标离开事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(_ref5) {
      _ref5.id;
          _ref5.points;
          _ref5.event;
    } // -------------------- 事件结束 -------------------

  }]);

  return Overlay;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 绘制实心圆
 * @param ctx
 * @param fillColor
 * @param circlePoint
 * @param radius
 */

function renderFillCircle(ctx, fillColor, circlePoint, radius) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(circlePoint.x, circlePoint.y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEVIATION = 2;
/**
 * 根据三角形三个点获取三角形面积
 * @param point1
 * @param point2
 * @param point3
 * @return {number}
 */

function getTriangleSquare(point1, point2, point3) {
  var x1 = Math.abs(point2.x - point1.x);
  var y1 = Math.abs(point2.y - point1.y);
  var x2 = Math.abs(point3.x - point1.x);
  var y2 = Math.abs(point3.y - point1.y);
  return Math.abs(x1 * y2 - x2 * y1) / 2;
}
/**
 * 点是否在圆内
 * @param circleCenterPoint
 * @param radius
 * @param targetPoint
 * @returns {boolean}
 */

function checkPointInCircle(circleCenterPoint, radius, targetPoint) {
  if (!targetPoint) {
    return false;
  }

  var difX = targetPoint.x - circleCenterPoint.x;
  var difY = targetPoint.y - circleCenterPoint.y;
  return !(difX * difX + difY * difY > radius * radius);
}
/**
 * 检查点是否在三角形内部
 * @param trianglePoints
 * @param targetPoint
 * @return {boolean}
 */

function checkPointInTriangle(trianglePoints, targetPoint) {
  var square = getTriangleSquare(trianglePoints[0], trianglePoints[1], trianglePoints[2]);
  var compareSquare = getTriangleSquare(trianglePoints[0], trianglePoints[1], targetPoint) + getTriangleSquare(trianglePoints[0], trianglePoints[2], targetPoint) + getTriangleSquare(trianglePoints[1], trianglePoints[2], targetPoint);
  return Math.abs(square - compareSquare) < DEVIATION;
}
/**
 * 检查点是否在三角形菱形内部
 * @param centerPoint
 * @param width
 * @param height
 * @param targetPoint
 * @return {boolean}
 */

function checkPointInDiamond(centerPoint, width, height, targetPoint) {
  var xDis = Math.abs(centerPoint.x - targetPoint.x);
  var yDis = Math.abs(centerPoint.y - targetPoint.y);
  return xDis * height + yDis * width < width * height / 2 + DEVIATION;
}
/**
 * 检查点是否在矩形内部
 * @param point1
 * @param point2
 * @param targetPoint
 * @return {boolean}
 */

function checkPointInRect(point1, point2, targetPoint) {
  return targetPoint.x >= point1.x && targetPoint.x <= point2.x && targetPoint.y >= point1.y && targetPoint.y <= point2.y;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 绘制水平直线
 * @param ctx
 * @param y
 * @param left
 * @param right
 */
function renderHorizontalLine(ctx, y, left, right) {
  ctx.beginPath();
  var correction = ctx.lineWidth % 2 ? 0.5 : 0;
  ctx.moveTo(left, y + correction);
  ctx.lineTo(right, y + correction);
  ctx.stroke();
  ctx.closePath();
}
/**
 * 绘制垂直直线
 * @param ctx
 * @param x
 * @param top
 * @param bottom
 */

function renderVerticalLine(ctx, x, top, bottom) {
  ctx.beginPath();
  var correction = ctx.lineWidth % 2 ? 0.5 : 0;
  ctx.moveTo(x + correction, top);
  ctx.lineTo(x + correction, bottom);
  ctx.stroke();
  ctx.closePath();
}
/**
 * 绘制线
 * @param ctx
 * @param renderFuc
 */

function renderLine(ctx, renderFuc) {
  ctx.save();

  if (ctx.lineWidth % 2) {
    ctx.translate(0.5, 0.5);
  }

  renderFuc();
  ctx.restore();
}

var GRAPHIC_MARK_DRAW_STEP_START = 1; // 标记图形绘制步骤结束

var GRAPHIC_MARK_DRAW_STEP_FINISHED = -1;
/**
 * 图形标记鼠标操作元素类型
 * @type {{OTHER: string, POINT: string, NONE: string}}
 */

var GraphicMarkMouseOperateElement = {
  OTHER: 'other',
  POINT: 'point',
  NONE: 'none'
};
/**
 * 绘制类型
 * @type {{ARC: string, POLYGON: string, LINE: string, CONTINUOUS_LINE: string, TEXT: string}}
 */

var GraphicMarkDrawType = {
  LINE: 'line',
  TEXT: 'text',
  CONTINUOUS_LINE: 'continuous_line',
  POLYGON: 'polygon',
  ARC: 'arc'
};
/**
 * 绘制风格
 * @type {{STROKE: string, FILL: string, SOLID: string, DASH: string}}
 */

var GraphicMarkDrawStyle = {
  STROKE: 'stroke',
  FILL: 'fill',
  SOLID: 'solid',
  DASH: 'dash'
};
/**
 * 线类型
 * @type {{VERTICAL: number, COMMON: number, HORIZONTAL: number}}
 */

var LineType = {
  COMMON: 0,
  HORIZONTAL: 1,
  VERTICAL: 2
};
/**
 * 获取绘制线类型
 * @param point1
 * @param point2
 * @private
 */

function getLineType(point1, point2) {
  if (point1.x === point2.x) {
    return LineType.VERTICAL;
  }

  if (point1.y === point2.y) {
    return LineType.HORIZONTAL;
  }

  return LineType.COMMON;
}
/**
 * 标记图形
 */


var GraphicMark = /*#__PURE__*/function (_Overlay) {
  _inherits(GraphicMark, _Overlay);

  var _super = _createSuper(GraphicMark);

  function GraphicMark(_ref) {
    var _this;

    var id = _ref.id,
        name = _ref.name,
        totalStep = _ref.totalStep,
        chartData = _ref.chartData,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis,
        points = _ref.points,
        styles = _ref.styles,
        lock = _ref.lock;

    _classCallCheck(this, GraphicMark);

    _this = _super.call(this, {
      id: id,
      chartData: chartData,
      xAxis: xAxis,
      yAxis: yAxis
    });
    _this._name = name;
    _this._totalStep = totalStep;
    _this._lock = lock;
    _this._drawStep = GRAPHIC_MARK_DRAW_STEP_START;
    _this._points = [];

    _this.setPoints(points);

    _this.setStyles(styles, chartData.styleOptions().graphicMark);

    return _this;
  }
  /**
   * 加载点
   * @param points
   */


  _createClass(GraphicMark, [{
    key: "setPoints",
    value: function setPoints(points) {
      if (isArray(points) && points.length > 0) {
        var repeatTotalStep;

        if (points.length >= this._totalStep - 1) {
          this._drawStep = GRAPHIC_MARK_DRAW_STEP_FINISHED;
          this._points = points.slice(0, this._totalStep - 1);
          repeatTotalStep = this._totalStep - 1;
        } else {
          this._drawStep = points.length + 1;
          this._points = clone(points);
          repeatTotalStep = points.length;
        } // 重新演练绘制一遍，防止因为点不对而绘制出错误的图形


        for (var i = 0; i < repeatTotalStep; i++) {
          this.performMouseMoveForDrawing(i + 2, this.points, this._points[i], this._xAxis, this._yAxis);
        }

        if (this._drawStep === GRAPHIC_MARK_DRAW_STEP_FINISHED) {
          this.performMousePressedMove(this._points, this._points.length - 1, this._points[this._points.length - 1], this._xAxis, this._yAxis);
        }
      }
    }
    /**
     * 时间戳转换成x轴上点的位置
     * @param point
     * @return {*|number}
     * @private
     */

  }, {
    key: "_timestampOrDataIndexToPointX",
    value: function _timestampOrDataIndexToPointX(_ref2) {
      var timestamp = _ref2.timestamp,
          dataIndex = _ref2.dataIndex;
      return timestamp ? this._xAxis.convertToPixel(this._chartData.timestampToDataIndex(timestamp)) : this._xAxis.convertToPixel(dataIndex);
    }
    /**
     * 绘制线
     * @param ctx
     * @param lines
     * @param style
     * @param markOptions
     * @private
     */

  }, {
    key: "_drawLines",
    value: function _drawLines(ctx, lines, style, markOptions) {
      ctx.save();
      ctx.strokeStyle = markOptions.line.color;
      ctx.lineWidth = markOptions.line.size;

      if (style === GraphicMarkDrawStyle.DASH) {
        ctx.setLineDash(markOptions.line.dashValue);
      }

      lines.forEach(function (points) {
        if (points.length > 1) {
          var lineType = getLineType(points[0], points[1]);

          switch (lineType) {
            case LineType.COMMON:
              {
                renderLine(ctx, function () {
                  ctx.beginPath();
                  ctx.moveTo(points[0].x, points[0].y);
                  ctx.lineTo(points[1].x, points[1].y);
                  ctx.stroke();
                  ctx.closePath();
                });
                break;
              }

            case LineType.HORIZONTAL:
              {
                renderHorizontalLine(ctx, points[0].y, points[0].x, points[1].x);
                break;
              }

            case LineType.VERTICAL:
              {
                renderVerticalLine(ctx, points[0].x, points[0].y, points[1].y);
                break;
              }
          }
        }
      });
      ctx.restore();
    }
    /**
     * 绘制连续线
     * @param ctx
     * @param continuousLines
     * @param style
     * @param markOptions
     * @private
     */

  }, {
    key: "_drawContinuousLines",
    value: function _drawContinuousLines(ctx, continuousLines, style, markOptions) {
      ctx.save();
      ctx.strokeStyle = markOptions.line.color;
      ctx.lineWidth = markOptions.line.size;

      if (style === GraphicMarkDrawStyle.DASH) {
        ctx.setLineDash(markOptions.line.dashValue);
      }

      continuousLines.forEach(function (points) {
        if (points.length > 0) {
          renderLine(ctx, function () {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (var i = 1; i < points.length; i++) {
              ctx.lineTo(points[i].x, points[i].y);
            }

            ctx.stroke();
            ctx.closePath();
          });
        }
      });
      ctx.restore();
    }
    /**
     * 绘制多边形
     * @param ctx
     * @param polygons
     * @param style
     * @param markOptions
     * @private
     */

  }, {
    key: "_drawPolygons",
    value: function _drawPolygons(ctx, polygons, style, markOptions) {
      ctx.save();
      var fillStroke;

      if (style === GraphicMarkDrawStyle.FILL) {
        ctx.fillStyle = markOptions.polygon.fill.color;
        fillStroke = ctx.fill;
      } else {
        ctx.lineWidth = markOptions.polygon.stroke.size;
        ctx.strokeStyle = markOptions.polygon.stroke.color;
        fillStroke = ctx.stroke;
      }

      polygons.forEach(function (points) {
        if (points.length > 0) {
          renderLine(ctx, function () {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (var i = 1; i < points.length; i++) {
              ctx.lineTo(points[i].x, points[i].y);
            }

            ctx.closePath();
            fillStroke.call(ctx);
          });
        }
      });
      ctx.restore();
    }
    /**
     * 画圆弧
     * @param ctx
     * @param arcs
     * @param style
     * @param markOptions
     * @private
     */

  }, {
    key: "_drawArcs",
    value: function _drawArcs(ctx, arcs, style, markOptions) {
      ctx.save();

      if (style === GraphicMarkDrawStyle.FILL) {
        ctx.fillStyle = markOptions.arc.fill.color;
      } else {
        ctx.lineWidth = markOptions.arc.stroke.size;
        ctx.strokeStyle = markOptions.arc.stroke.color;
      }

      arcs.forEach(function (_ref3) {
        var x = _ref3.x,
            y = _ref3.y,
            radius = _ref3.radius,
            startAngle = _ref3.startAngle,
            endAngle = _ref3.endAngle;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);

        if (style === GraphicMarkDrawStyle.FILL) {
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.stroke();
          ctx.closePath();
        }
      });
      ctx.restore();
    }
    /**
     * 绘制文字
     * @param ctx
     * @param texts
     * @param style
     * @param markOptions
     * @private
     */

  }, {
    key: "_drawText",
    value: function _drawText(ctx, texts, style, markOptions) {
      ctx.save();
      var fillStroke;

      if (style === GraphicMarkDrawStyle.STROKE) {
        ctx.strokeStyle = markOptions.text.color;
        fillStroke = ctx.strokeText;
      } else {
        ctx.fillStyle = markOptions.text.color;
        fillStroke = ctx.fillText;
      }

      ctx.font = "".concat(markOptions.text.weight, " ").concat(markOptions.text.size, "px ").concat(markOptions.text.family);
      texts.forEach(function (_ref4) {
        var x = _ref4.x,
            y = _ref4.y,
            text = _ref4.text;
        fillStroke.call(ctx, text, x + markOptions.text.marginLeft, y - markOptions.text.marginBottom);
      });
      ctx.restore();
    }
    /**
     * 绘制
     * @param ctx
     */

  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      var coordinates = this._points.map(function (_ref5) {
        var timestamp = _ref5.timestamp,
            price = _ref5.price,
            dataIndex = _ref5.dataIndex;
        return {
          x: _this2._timestampOrDataIndexToPointX({
            timestamp: timestamp,
            dataIndex: dataIndex
          }),
          y: _this2._yAxis.convertToPixel(price)
        };
      });

      var markOptions = this._styles || this._chartData.styleOptions().graphicMark;

      if (this._drawStep !== GRAPHIC_MARK_DRAW_STEP_START && coordinates.length > 0) {
        var viewport = {
          width: this._xAxis.width(),
          height: this._yAxis.height()
        };
        var precision = {
          price: this._chartData.pricePrecision(),
          volume: this._chartData.volumePrecision()
        };
        var graphicDataSources = this.createGraphicDataSource(this._drawStep, this._points, coordinates, viewport, precision, this._xAxis, this._yAxis) || [];
        graphicDataSources.forEach(function (_ref6) {
          var type = _ref6.type,
              isDraw = _ref6.isDraw,
              style = _ref6.style,
              _ref6$dataSource = _ref6.dataSource,
              dataSource = _ref6$dataSource === void 0 ? [] : _ref6$dataSource;

          if (!isValid(isDraw) || isDraw) {
            switch (type) {
              case GraphicMarkDrawType.LINE:
                {
                  _this2._drawLines(ctx, dataSource, style, markOptions);

                  break;
                }

              case GraphicMarkDrawType.CONTINUOUS_LINE:
                {
                  _this2._drawContinuousLines(ctx, dataSource, style, markOptions);

                  break;
                }

              case GraphicMarkDrawType.POLYGON:
                {
                  _this2._drawPolygons(ctx, dataSource, style, markOptions);

                  break;
                }

              case GraphicMarkDrawType.ARC:
                {
                  _this2._drawArcs(ctx, dataSource, style, markOptions);

                  break;
                }

              case GraphicMarkDrawType.TEXT:
                {
                  _this2._drawText(ctx, dataSource, style, markOptions);

                  break;
                }
            }
          }
        });

        if (this.drawExtend) {
          ctx.save();
          this.drawExtend(ctx, graphicDataSources, markOptions, viewport, precision, this._xAxis, this._yAxis);
          ctx.restore();
        }
      }

      var graphicMarkMouseOperate = this._chartData.graphicMarkMouseOperate();

      if (graphicMarkMouseOperate.hover.id === this._id && graphicMarkMouseOperate.hover.element !== GraphicMarkMouseOperateElement.NONE || graphicMarkMouseOperate.click.id === this._id && graphicMarkMouseOperate.click.element !== GraphicMarkMouseOperateElement.NONE) {
        coordinates.forEach(function (_ref7, index) {
          var x = _ref7.x,
              y = _ref7.y;
          var radius = markOptions.point.radius;
          var color = markOptions.point.backgroundColor;
          var borderColor = markOptions.point.borderColor;
          var borderSize = markOptions.point.borderSize;

          if (graphicMarkMouseOperate.hover.id === _this2._id && graphicMarkMouseOperate.hover.element === GraphicMarkMouseOperateElement.POINT && index === graphicMarkMouseOperate.hover.elementIndex) {
            radius = markOptions.point.activeRadius;
            color = markOptions.point.activeBackgroundColor;
            borderColor = markOptions.point.activeBorderColor;
            borderSize = markOptions.point.activeBorderSize;
          }

          renderFillCircle(ctx, borderColor, {
            x: x,
            y: y
          }, radius + borderSize);
          renderFillCircle(ctx, color, {
            x: x,
            y: y
          }, radius);
        });
      }
    }
    /**
     * 设置是否锁定
     * @param lock
     */

  }, {
    key: "setLock",
    value: function setLock(lock) {
      this._lock = lock;
    }
    /**
     * 获取名字
     * @return {*}
     */

  }, {
    key: "name",
    value: function name() {
      return this._name;
    }
    /**
     * 是否锁定
     * @return {*}
     */

  }, {
    key: "lock",
    value: function lock() {
      return this._lock;
    }
    /**
     * 总步骤数
     * @return {*}
     */

  }, {
    key: "totalStep",
    value: function totalStep() {
      return this._totalStep;
    }
    /**
     * 获取点
     * @return {[]}
     */

  }, {
    key: "points",
    value: function points() {
      return this._points;
    }
    /**
     * 是否在绘制中
     * @return {boolean}
     */

  }, {
    key: "isDrawing",
    value: function isDrawing() {
      return this._drawStep !== GRAPHIC_MARK_DRAW_STEP_FINISHED;
    }
    /**
     * 检查鼠标点是否在图形上
     * @param mouseCoordinate
     * @return {{id: *, elementIndex: number, element: string}}
     */

  }, {
    key: "checkMousePointOnGraphic",
    value: function checkMousePointOnGraphic(mouseCoordinate) {
      var markOptions = this._styles || this._chartData.styleOptions().graphicMark;

      var coordinates = []; // 检查鼠标点是否在图形的点上

      for (var i = 0; i < this._points.length; i++) {
        var _this$_points$i = this._points[i],
            timestamp = _this$_points$i.timestamp,
            price = _this$_points$i.price,
            dataIndex = _this$_points$i.dataIndex;
        var coordinate = {
          x: this._timestampOrDataIndexToPointX({
            timestamp: timestamp,
            dataIndex: dataIndex
          }),
          y: this._yAxis.convertToPixel(price)
        };
        coordinates.push(coordinate);

        if (checkPointInCircle(coordinate, markOptions.point.radius, mouseCoordinate)) {
          return {
            id: this._id,
            element: GraphicMarkMouseOperateElement.POINT,
            elementIndex: i,
            instance: this
          };
        }
      } // 检查鼠标点是否在点构成的其它图形上


      var graphicDataSources = this.createGraphicDataSource(this._drawStep, this._points, coordinates, {
        width: this._xAxis.width(),
        height: this._yAxis.height()
      }, {
        price: this._chartData.pricePrecision(),
        volume: this._chartData.volumePrecision()
      }, this._xAxis, this._yAxis) || [];

      var _iterator = _createForOfIteratorHelper(graphicDataSources),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              key = _step$value.key,
              type = _step$value.type,
              isCheck = _step$value.isCheck,
              _step$value$dataSourc = _step$value.dataSource,
              dataSource = _step$value$dataSourc === void 0 ? [] : _step$value$dataSourc;

          if (isCheck) {
            for (var _i = 0; _i < dataSource.length; _i++) {
              var sources = dataSource[_i];

              if (this.checkMousePointOn(key, type, sources, mouseCoordinate)) {
                return {
                  id: this._id,
                  element: GraphicMarkMouseOperateElement.OTHER,
                  elementIndex: _i,
                  instance: this
                };
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * 绘制过程中鼠标移动事件
     * @param point
     */

  }, {
    key: "mouseMoveForDrawing",
    value: function mouseMoveForDrawing(point) {
      var dataIndex = this._xAxis.convertFromPixel(point.x);

      var timestamp = this._chartData.dataIndexToTimestamp(dataIndex);

      var price = this._yAxis.convertFromPixel(point.y);

      this._points[this._drawStep - 1] = {
        timestamp: timestamp,
        price: price,
        dataIndex: dataIndex
      };
      this.performMouseMoveForDrawing(this._drawStep, this._points, {
        timestamp: timestamp,
        price: price,
        dataIndex: dataIndex
      }, this._xAxis, this._yAxis);
      this.onDrawing({
        id: this._id,
        step: this._drawStep,
        points: this._points
      });
    }
    /**
     * 鼠标左边按钮点击事件
     */

  }, {
    key: "mouseLeftButtonDownForDrawing",
    value: function mouseLeftButtonDownForDrawing() {
      if (this._drawStep === this._totalStep - 1) {
        this._drawStep = GRAPHIC_MARK_DRAW_STEP_FINISHED;
        this.onDrawEnd({
          id: this._id,
          points: this._points
        });
      } else {
        this._drawStep++;
      }
    }
    /**
     * 鼠标按住移动方法
     * @param point
     * @param event
     */

  }, {
    key: "mousePressedMove",
    value: function mousePressedMove(point, event) {
      var graphicMarkMouseOperate = this._chartData.graphicMarkMouseOperate();

      var elementIndex = graphicMarkMouseOperate.click.elementIndex;

      if (!this._lock && graphicMarkMouseOperate.click.id === this._id && graphicMarkMouseOperate.click.element === GraphicMarkMouseOperateElement.POINT && elementIndex !== -1) {
        var dataIndex = this._xAxis.convertFromPixel(point.x);

        var timestamp = this._chartData.dataIndexToTimestamp(dataIndex);

        var price = this._yAxis.convertFromPixel(point.y);

        this._points[elementIndex].timestamp = timestamp;
        this._points[elementIndex].dataIndex = dataIndex;
        this._points[elementIndex].price = price;
        this.performMousePressedMove(this._points, elementIndex, {
          dataIndex: dataIndex,
          timestamp: timestamp,
          price: price
        }, this._xAxis, this._yAxis);
        this.onPressedMove({
          id: graphicMarkMouseOperate.click.id,
          points: this._points,
          event: event
        });
      }
    } // -------------------- 事件开始 -------------------

    /**
     * 开始绘制事件回调
     * @param id
     */

  }, {
    key: "onDrawStart",
    value: function onDrawStart(_ref8) {
      _ref8.id;
    }
    /**
     * 绘制过程中事件回调
     * @param id
     * @param step
     * @param points
     */

  }, {
    key: "onDrawing",
    value: function onDrawing(_ref9) {
      _ref9.id;
          _ref9.step;
          _ref9.points;
    }
    /**
     * 绘制结束事件回调
     * @param id
     * @param points
     */

  }, {
    key: "onDrawEnd",
    value: function onDrawEnd(_ref10) {
      _ref10.id;
          _ref10.points;
    }
    /**
     * 按住移动事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onPressedMove",
    value: function onPressedMove(_ref11) {
      _ref11.id;
          _ref11.points;
          _ref11.event;
    }
    /**
     * 移除事件回调
     * @param id
     */

  }, {
    key: "onRemove",
    value: function onRemove(_ref12) {
      _ref12.id;
    } // -------------------- 事件结束 -------------------
    // --------------------- 自定义时需要实现的一些方法开始 ----------------------

    /**
     * 检查鼠标点在其它图形上
     * @param key
     * @param type
     * @param points
     * @param mousePoint
     */

  }, {
    key: "checkMousePointOn",
    value: function checkMousePointOn(key, type, points, mousePoint) {}
    /**
     * 创建图形配置
     * @param step
     * @param points
     * @param coordinates
     * @param viewport
     * @param precision
     * @param xAxis
     * @param yAxis
     */

  }, {
    key: "createGraphicDataSource",
    value: function createGraphicDataSource(step, points, coordinates, viewport, precision, xAxis, yAxis) {}
    /**
     * 处理绘制过程中鼠标移动
     * @param step
     * @param points
     * @param point
     * @param xAxis
     * @param yAxis
     */

  }, {
    key: "performMouseMoveForDrawing",
    value: function performMouseMoveForDrawing(step, points, point, xAxis, yAxis) {}
    /**
     * 处理鼠标按住移动
     * @param points
     * @param pressedPointIndex
     * @param point
     * @param xAxis
     * @param yAxis
     */

  }, {
    key: "performMousePressedMove",
    value: function performMousePressedMove(points, pressedPointIndex, point, xAxis, yAxis) {} // --------------------- 自定义时需要实现的一些方法结束 ----------------------

  }]);

  return GraphicMark;
}(Overlay);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Delegate = /*#__PURE__*/function () {
  function Delegate() {
    _classCallCheck(this, Delegate);

    this._observers = [];
  }

  _createClass(Delegate, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (this._observers.indexOf(observer) < 0) {
        this._observers.push(observer);
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      var index = this._observers.indexOf(observer);

      if (index > -1) {
        this._observers.splice(index, 1);
      } else {
        this._observers = [];
      }
    }
  }, {
    key: "execute",
    value: function execute(data) {
      this._observers.forEach(function (observer) {
        observer(data);
      });
    }
  }, {
    key: "hasObservers",
    value: function hasObservers() {
      return this._observers.length > 0;
    }
  }]);

  return Delegate;
}();

/**
 * 创建图形标记映射
 * @return {{}}
 */

function createGraphicMarkMapping() {
  var mapping = {};
  var graphicMarkExtensions = extension.graphicMarkExtensions;

  for (var name in graphicMarkExtensions) {
    var graphicMarkClass = createGraphicMarkClass(graphicMarkExtensions[name]);

    if (graphicMarkClass) {
      mapping[name] = graphicMarkClass;
    }
  }

  return mapping;
}
/**
 * 创建图形标记类
 * @param name
 * @param series
 * @param checkMousePointOn
 * @param createGraphicDataSource
 * @param performMousePressedMove
 * @param performMouseMoveForDrawing
 * @param drawExtend
 * @return {Mark|null}
 */

function createGraphicMarkClass(_ref) {
  var name = _ref.name,
      totalStep = _ref.totalStep,
      checkMousePointOn = _ref.checkMousePointOn,
      createGraphicDataSource = _ref.createGraphicDataSource,
      performMousePressedMove = _ref.performMousePressedMove,
      performMouseMoveForDrawing = _ref.performMouseMoveForDrawing,
      drawExtend = _ref.drawExtend;

  if (!name || !isNumber(totalStep) || !isFunction(checkMousePointOn) || !isFunction(createGraphicDataSource)) {
    logWarn('', '', 'Required attribute "name" and "totalStep", method "checkMousePointOn" and "createGraphicDataSource", new graphic mark cannot be generated!!!');
    return null;
  }

  var Mark = /*#__PURE__*/function (_GraphicMark) {
    _inherits(Mark, _GraphicMark);

    var _super = _createSuper(Mark);

    function Mark(_ref2) {
      var id = _ref2.id,
          chartData = _ref2.chartData,
          xAxis = _ref2.xAxis,
          yAxis = _ref2.yAxis,
          points = _ref2.points,
          styles = _ref2.styles,
          lock = _ref2.lock;

      _classCallCheck(this, Mark);

      return _super.call(this, {
        id: id,
        name: name,
        totalStep: totalStep,
        chartData: chartData,
        xAxis: xAxis,
        yAxis: yAxis,
        points: points,
        styles: styles,
        lock: lock
      });
    }

    return Mark;
  }(GraphicMark);

  Mark.prototype.checkMousePointOn = checkMousePointOn;
  Mark.prototype.createGraphicDataSource = createGraphicDataSource;

  if (isFunction(performMousePressedMove)) {
    Mark.prototype.performMousePressedMove = performMousePressedMove;
  }

  if (isFunction(performMouseMoveForDrawing)) {
    Mark.prototype.performMouseMoveForDrawing = performMouseMoveForDrawing;
  }

  if (isFunction(drawExtend)) {
    Mark.prototype.drawExtend = drawExtend;
  }

  return Mark;
}
/**
 * 获取图形标记信息
 * @param graphicMark
 * @return {{name, lock: *, styles, id, points: (*|*[])}}
 */

function getGraphicMarkInfo(graphicMark) {
  return {
    name: graphicMark.name(),
    id: graphicMark.id(),
    totalStep: graphicMark.totalStep(),
    lock: graphicMark.lock(),
    points: graphicMark.tpPoints(),
    styles: graphicMark.styles()
  };
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// 默认技术指标窗口高度
var DEFAULT_TECHNICAL_INDICATOR_PANE_HEIGHT = 100; // 技术指标窗口id前缀

var TECHNICAL_INDICATOR_PANE_ID_PREFIX = 'technical_indicator_pane_'; // 图形标记id前缀

var GRAPHIC_MARK_ID_PREFIX = 'graphic_mark_'; // 蜡烛图窗口id

var CANDLE_PANE_ID = 'candle_pane'; // 最小单条数据宽度

var MIN_DATA_SPACE = 1; // 最大单条数据宽度

var MAX_DATA_SPACE = 50;
/**
 * 刷新层级
 * @type {{OVERLAY: number, MAIN: number, NONE: number, FULL: number}}
 */

var InvalidateLevel = {
  NONE: 0,
  OVERLAY: 1,
  MAIN: 2,
  FULL: 3
};
/**
 * 图表动作
 * @type {{DRAW_CANDLE: string, SCROLL: string, PANE_DRAG: string, ZOOM: string, CROSSHAIR: string, DRAW_TECHNICAL_INDICATOR: string}}
 */

var ActionType = {
  DRAW_CANDLE: 'drawCandle',
  DRAW_TECHNICAL_INDICATOR: 'drawTechnicalIndicator',
  ZOOM: 'zoom',
  SCROLL: 'scroll',
  CROSSHAIR: 'crosshair',
  PANE_DRAG: 'pane_drag'
};

var ChartData = /*#__PURE__*/function () {
  function ChartData(styleOptions, handler) {
    _classCallCheck(this, ChartData);

    // 持有者
    this._handler = handler; // 样式配置

    this._styleOptions = clone(defaultStyleOptions);
    merge(this._styleOptions, styleOptions); // 所有技术指标映射

    this._technicalIndicatorMapping = createTechnicalIndicatorMapping(); // 是否可以缩放

    this._zoomEnabled = true; // 是否可以拖拽滑动

    this._scrollEnabled = true; // 价格精度

    this._pricePrecision = 2; // 数量精度

    this._volumePrecision = 0;
    this._dateTimeFormat = new Intl.DateTimeFormat('en', {
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }); // 数据源

    this._dataList = []; // 可见的数据(需要绘制的数据)

    this._visibleDataList = []; // 是否在加载中

    this._loading = true; // 加载更多回调

    this._loadMoreCallback = null; // 还有更多

    this._more = true; // 可见区域数据占用的空间

    this._totalDataSpace = 0; // 每一条数据的空间

    this._dataSpace = 6; // bar的空间

    this._barSpace = this._calcBarSpace(); // 向右偏移的空间

    this._offsetRightSpace = 50; // 向右偏移的数量

    this._offsetRightBarCount = this._offsetRightSpace / this._dataSpace; // 左边最小可见bar的个数

    this._leftMinVisibleBarCount = 2; // 右边最小可见bar的个数

    this._rightMinVisibleBarCount = 2; // 开始绘制的索引

    this._from = 0; // 结束的索引

    this._to = 0; // 十字光标信息

    this._crosshair = {}; // 用来记录开始拖拽时向右偏移的数量

    this._preOffsetRightBarCount = 0; // 拖拽标记图形标记

    this._dragGraphicMarkFlag = false; // 图形标记映射

    this._graphicMarkMapping = createGraphicMarkMapping(); // 图形标记鼠标操作信息

    this._graphicMarkMouseOperate = {
      click: {
        id: '',
        element: GraphicMarkMouseOperateElement.NONE,
        elementIndex: -1
      },
      hover: {
        id: '',
        element: GraphicMarkMouseOperateElement.NONE,
        elementIndex: -1
      }
    }; // 绘图标记数据

    this._graphicMarks = []; // 注解标记

    this._annotations = new Map(); // 可见的注解标记

    this._visibleAnnotations = []; // 注解鼠标操作信息

    this._annotationMouseOperate = {
      id: ''
    }; // 标签

    this._tags = new Map(); // 调整pane标记

    this._dragPaneFlag = false; // 事件代理

    this._actionDelegate = new Map();
  }
  /**
   * 计算一条柱子的空间
   * @returns {number}
   * @private
   */


  _createClass(ChartData, [{
    key: "_calcBarSpace",
    value: function _calcBarSpace() {
      var rateBarSpace = Math.floor(this._dataSpace * 0.82);
      var floorBarSpace = Math.floor(this._dataSpace);
      var optimalBarSpace = Math.min(rateBarSpace, floorBarSpace - 1);
      return Math.max(1, optimalBarSpace);
    }
    /**
     * 调整可见数据
     * @private
     */

  }, {
    key: "_adjustVisibleDataList",
    value: function _adjustVisibleDataList() {
      // 处理需要绘制的数据
      var dataSize = this._dataList.length;
      this._visibleDataList = [];
      this._visibleAnnotations = [];

      for (var i = this._from; i < this._to; i++) {
        var kLineData = this._dataList[i];
        var deltaFromRight = dataSize + this._offsetRightBarCount - i;
        var x = this._totalDataSpace - (deltaFromRight - 0.5) * this._dataSpace;

        this._visibleDataList.push({
          index: i,
          x: x,
          data: kLineData
        });

        var annotation = this._annotations.get(kLineData.timestamp) || [];

        if (annotation.length > 0) {
          var _iterator = _createForOfIteratorHelper(annotation),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var an = _step.value;
              an.createSymbolCoordinate(x);

              this._visibleAnnotations.push(an);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }
    /**
     * 调整绘制起点终点位置
     * @private
     */

  }, {
    key: "_adjustFromTo",
    value: function _adjustFromTo() {
      var dataSize = this._dataList.length;
      var barLength = this._totalDataSpace / this._dataSpace;
      var maxRightOffsetBarCount = barLength - Math.min(this._leftMinVisibleBarCount, dataSize);

      if (this._offsetRightBarCount > maxRightOffsetBarCount) {
        this._offsetRightBarCount = maxRightOffsetBarCount;
      }

      var minRightOffsetBarCount = -dataSize + Math.min(this._rightMinVisibleBarCount, dataSize);

      if (this._offsetRightBarCount < minRightOffsetBarCount) {
        this._offsetRightBarCount = minRightOffsetBarCount;
      }

      this._to = Math.round(this._offsetRightBarCount + dataSize + 0.5);
      this._from = Math.round(this._to - barLength) - 1;

      if (this._to > dataSize) {
        this._to = dataSize;
      }

      if (this._from < 0) {
        this._from = 0;
      }

      this._adjustVisibleDataList(); // 处理加载更多，有更多并且没有在加载则去加载更多


      if (this._from === 0 && this._more && !this._loading && this._loadMoreCallback && isFunction(this._loadMoreCallback)) {
        this._loading = true;

        this._loadMoreCallback(formatValue(this._dataList[0], 'timestamp'));
      }
    }
    /**
     * 获取样式配置
     * @return {{}}
     */

  }, {
    key: "styleOptions",
    value: function styleOptions() {
      return this._styleOptions;
    }
    /**
     * 设置样式配置
     * @param options
     */

  }, {
    key: "applyStyleOptions",
    value: function applyStyleOptions(options) {
      merge(this._styleOptions, options);
    }
    /**
     * 获取技术指标信息
     * @param name
     * @return {{}|{series: *, calcParams: *, precision: *, name: *}}
     */

  }, {
    key: "getTechnicalIndicatorInfo",
    value: function getTechnicalIndicatorInfo(name) {
      if (isValid(name)) {
        var tech = this.getTechnicalIndicatorInstance(name);

        if (tech) {
          return createTechnicalIndicatorInfo(tech);
        }
      } else {
        var techs = {};

        for (var _name in this._technicalIndicatorMapping) {
          var instance = this._technicalIndicatorMapping[_name];
          techs[_name] = createTechnicalIndicatorInfo(instance);
        }

        return techs;
      }

      return {};
    }
    /**
     * 根据指标类型获取指标类
     * @param name
     * @return {*}
     */

  }, {
    key: "getTechnicalIndicatorInstance",
    value: function getTechnicalIndicatorInstance(name) {
      return this._technicalIndicatorMapping[name];
    }
    /**
     * 价格精度
     * @returns {number}
     */

  }, {
    key: "pricePrecision",
    value: function pricePrecision() {
      return this._pricePrecision;
    }
    /**
     * 数量精度
     * @returns {number}
     */

  }, {
    key: "volumePrecision",
    value: function volumePrecision() {
      return this._volumePrecision;
    }
    /**
     * 获取时间格式化
     * @returns {Intl.DateTimeFormat | Intl.DateTimeFormat}
     */

  }, {
    key: "dateTimeFormat",
    value: function dateTimeFormat() {
      return this._dateTimeFormat;
    }
    /**
     * 设置时区
     * @param timezone
     */

  }, {
    key: "setTimezone",
    value: function setTimezone(timezone) {
      var dateTimeFormat;

      try {
        dateTimeFormat = new Intl.DateTimeFormat('en', {
          hour12: false,
          timeZone: timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (e) {
        logWarn('', '', 'Timezone is error!!!');
      }

      if (dateTimeFormat) {
        this._dateTimeFormat = dateTimeFormat;
      }
    }
    /**
     * 获取时区
     * @returns {null}
     */

  }, {
    key: "timezone",
    value: function timezone() {
      return this._dateTimeFormat.resolvedOptions().timeZone;
    }
    /**
     * 设置价格和数量精度
     * @param pricePrecision
     * @param volumePrecision
     */

  }, {
    key: "setPriceVolumePrecision",
    value: function setPriceVolumePrecision(pricePrecision, volumePrecision) {
      this._pricePrecision = pricePrecision;
      this._volumePrecision = volumePrecision;

      for (var name in this._technicalIndicatorMapping) {
        var series = this._technicalIndicatorMapping[name].series;

        switch (series) {
          case TechnicalIndicatorSeries.PRICE:
            {
              this._technicalIndicatorMapping[name].setPrecision(pricePrecision);

              break;
            }

          case TechnicalIndicatorSeries.VOLUME:
            {
              this._technicalIndicatorMapping[name].setPrecision(volumePrecision);

              break;
            }
        }
      }
    }
    /**
     * 获取数据源
     * @returns {[]|*[]}
     */

  }, {
    key: "dataList",
    value: function dataList() {
      return this._dataList;
    }
    /**
     * 获取可见数据源
     * @returns {[]|*[]}
     */

  }, {
    key: "visibleDataList",
    value: function visibleDataList() {
      return this._visibleDataList;
    }
    /**
     * 清空数据源
     */

  }, {
    key: "clearDataList",
    value: function clearDataList() {
      this._more = true;
      this._loading = true;
      this._dataList = [];
      this._visibleDataList = [];
      this._from = 0;
      this._to = 0;
    }
    /**
     * 添加数据
     * @param data
     * @param pos
     * @param more
     */

  }, {
    key: "addData",
    value: function addData(data, pos, more) {
      if (isObject(data)) {
        if (isArray(data)) {
          this._loading = false;
          this._more = isBoolean(more) ? more : true;
          var isFirstAdd = this._dataList.length === 0;
          this._dataList = data.concat(this._dataList);

          if (isFirstAdd) {
            this.setOffsetRightSpace(this._offsetRightSpace);
          }

          this._adjustFromTo();
        } else {
          var dataSize = this._dataList.length;

          if (pos >= dataSize) {
            this._dataList.push(data);

            if (this._offsetRightBarCount < 0) {
              this._offsetRightBarCount -= 1;
            }

            this._adjustFromTo();
          } else {
            this._dataList[pos] = data;

            this._adjustVisibleDataList();
          }
        }

        this.setCrosshair(this._crosshair, true);
      }
    }
    /**
     * 获取一条数据的空间
     * @returns {number}
     */

  }, {
    key: "dataSpace",
    value: function dataSpace() {
      return this._dataSpace;
    }
    /**
     * 获取绘制一条数据的空间（不包括bar之间的间隙）
     * @returns {*}
     */

  }, {
    key: "barSpace",
    value: function barSpace() {
      return this._barSpace;
    }
    /**
     * 设置一条数据的空间
     * @param dataSpace
     * @param adjustBeforeFuc
     */

  }, {
    key: "setDataSpace",
    value: function setDataSpace(dataSpace, adjustBeforeFuc) {
      if (dataSpace < MIN_DATA_SPACE || dataSpace > MAX_DATA_SPACE || this._dataSpace === dataSpace) {
        return;
      }

      this._dataSpace = dataSpace;
      this._barSpace = this._calcBarSpace();
      adjustBeforeFuc && adjustBeforeFuc();

      this._adjustFromTo();

      this.setCrosshair(this._crosshair, true);
      this.invalidate();
    }
    /**
     * 设置可见区域数据占用的总空间
     * @param totalSpace
     */

  }, {
    key: "setTotalDataSpace",
    value: function setTotalDataSpace(totalSpace) {
      if (this._totalDataSpace === totalSpace) {
        return;
      }

      this._totalDataSpace = totalSpace;

      this._adjustFromTo();

      this.setCrosshair(this._crosshair, true);
    }
    /**
     * 设置右边可以偏移的空间
     * @param space
     * @param invalidate
     */

  }, {
    key: "setOffsetRightSpace",
    value: function setOffsetRightSpace(space, invalidate) {
      this._offsetRightSpace = space;
      this._offsetRightBarCount = space / this._dataSpace;

      if (invalidate) {
        this._adjustFromTo();

        this.setCrosshair(this._crosshair, true);
        this.invalidate();
      }
    }
    /**
     * 右偏移距离
     * @return {number}
     */

  }, {
    key: "offsetRightSpace",
    value: function offsetRightSpace() {
      return this._offsetRightSpace;
    }
    /**
     * 右偏移bar数量
     * @return {*|number}
     */

  }, {
    key: "offsetRightBarCount",
    value: function offsetRightBarCount() {
      return this._offsetRightBarCount;
    }
    /**
     * 设置左边可见的最小bar数量
     * @param barCount
     */

  }, {
    key: "setLeftMinVisibleBarCount",
    value: function setLeftMinVisibleBarCount(barCount) {
      this._leftMinVisibleBarCount = barCount;
    }
    /**
     * 设置右边可见的最小bar数量
     * @param barCount
     */

  }, {
    key: "setRightMinVisibleBarCount",
    value: function setRightMinVisibleBarCount(barCount) {
      this._rightMinVisibleBarCount = barCount;
    }
    /**
     * 获取数据绘制起点
     * @returns {number}
     */

  }, {
    key: "from",
    value: function from() {
      return this._from;
    }
    /**
     * 获取数据绘制终点
     * @returns {number}
     */

  }, {
    key: "to",
    value: function to() {
      return this._to;
    }
    /**
     * 获取十字光标信息
     * @returns {{}}
     */

  }, {
    key: "crosshair",
    value: function crosshair() {
      return this._crosshair;
    }
    /**
     * 设置十字光标点信息
     * @param crosshair
     * @param notInvalidate
     */

  }, {
    key: "setCrosshair",
    value: function setCrosshair(crosshair, notInvalidate) {
      var cr = crosshair || {};
      var realDataIndex;
      var dataIndex;

      if (isValid(cr.x)) {
        realDataIndex = this.coordinateToDataIndex(cr.x);

        if (realDataIndex < 0) {
          dataIndex = 0;
        } else if (realDataIndex > this._dataList.length - 1) {
          dataIndex = this._dataList.length - 1;
        } else {
          dataIndex = realDataIndex;
        }
      } else {
        realDataIndex = this._dataList.length - 1;
        dataIndex = realDataIndex;
      }

      var kLineData = this._dataList[dataIndex];
      var realX = this.dataIndexToCoordinate(realDataIndex);
      var prevCrosshair = {
        x: this._crosshair.x,
        y: this._crosshair.y,
        paneId: this._crosshair.paneId
      };
      this._crosshair = _objectSpread2(_objectSpread2({}, cr), {}, {
        realX: realX,
        kLineData: kLineData,
        realDataIndex: realDataIndex,
        dataIndex: dataIndex
      });

      if (cr.paneId && kLineData) {
        this._handler.crosshair({
          realDataIndex: realDataIndex,
          dataIndex: dataIndex,
          kLineData: kLineData,
          x: cr.x,
          y: cr.y
        });
      }

      if ((prevCrosshair.x !== cr.x || prevCrosshair.y !== cr.y || prevCrosshair.paneId !== cr.paneId) && !notInvalidate) {
        this.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 开始滚动
     */

  }, {
    key: "startScroll",
    value: function startScroll() {
      this._preOffsetRightBarCount = this._offsetRightBarCount;
    }
    /**
     * 滚动
     * @param distance
     * @param crosshair
     */

  }, {
    key: "scroll",
    value: function scroll(distance, crosshair) {
      if (!this._scrollEnabled) {
        return;
      }

      var distanceBarCount = distance / this._dataSpace;
      this.actionExecute(ActionType.SCROLL, {
        barCount: distanceBarCount,
        distance: distance
      });
      this._offsetRightBarCount = this._preOffsetRightBarCount - distanceBarCount;

      this._adjustFromTo();

      var cross = crosshair || this._crosshair;
      this.setCrosshair(cross, true);
      this.invalidate();
    }
    /**
     * x转换成浮点数的位置
     * @param x
     * @returns {number}
     */

  }, {
    key: "coordinateToFloatIndex",
    value: function coordinateToFloatIndex(x) {
      var dataSize = this._dataList.length;
      var deltaFromRight = (this._totalDataSpace - x) / this._dataSpace;
      var index = dataSize + this._offsetRightBarCount - deltaFromRight;
      return Math.round(index * 1000000) / 1000000;
    }
    /**
     * 数据索引转换成时间戳
     * @param dataIndex
     * @return {*}
     */

  }, {
    key: "dataIndexToTimestamp",
    value: function dataIndexToTimestamp(dataIndex) {
      var data = this._dataList[dataIndex];

      if (data) {
        return data.timestamp;
      }
    }
    /**
     * 将时间戳转换成数据索引位置
     * @param timestamp
     * @return {number}
     */

  }, {
    key: "timestampToDataIndex",
    value: function timestampToDataIndex(timestamp) {
      if (this._dataList.length === 0) {
        return 0;
      }

      return binarySearchNearest(this._dataList, 'timestamp', timestamp);
    }
    /**
     * 数据索引转换成坐标
     * @param dataIndex
     */

  }, {
    key: "dataIndexToCoordinate",
    value: function dataIndexToCoordinate(dataIndex) {
      var dataSize = this._dataList.length;
      var deltaFromRight = dataSize + this._offsetRightBarCount - dataIndex; // return this._totalDataSpace - (deltaFromRight - 0.5) * this._dataSpace + this._barSpace / 2

      return this._totalDataSpace - (deltaFromRight - 0.5) * this._dataSpace;
    }
    /**
     * 坐标换成数据索引转
     * @param pixel
     */

  }, {
    key: "coordinateToDataIndex",
    value: function coordinateToDataIndex(pixel) {
      return Math.ceil(this.coordinateToFloatIndex(pixel)) - 1;
    }
    /**
     * 缩放
     * @param scale
     * @param point
     */

  }, {
    key: "zoom",
    value: function zoom(scale, point) {
      var _this = this;

      if (!this._zoomEnabled) {
        return;
      }

      if (!point || !isValid(point.x)) {
        point = {
          x: isValid(this._crosshair.x) ? this._crosshair.x : this._totalDataSpace / 2
        };
      }

      this.actionExecute(ActionType.ZOOM, {
        point: point,
        scale: scale
      });
      var floatIndex = this.coordinateToFloatIndex(point.x);
      var dataSpace = this._dataSpace + scale * (this._dataSpace / 10);
      this.setDataSpace(dataSpace, function () {
        _this._offsetRightBarCount += floatIndex - _this.coordinateToFloatIndex(point.x);
      });
    }
    /**
     * 刷新
     * @param invalidateLevel
     */

  }, {
    key: "invalidate",
    value: function invalidate(invalidateLevel) {
      this._handler.invalidate(invalidateLevel);
    }
    /**
     * 设置是否可以缩放
     * @param enabled
     */

  }, {
    key: "setZoomEnabled",
    value: function setZoomEnabled(enabled) {
      this._zoomEnabled = enabled;
    }
    /**
     * 获取是否可以缩放
     * @return {boolean}
     */

  }, {
    key: "zoomEnabled",
    value: function zoomEnabled() {
      return this._zoomEnabled;
    }
    /**
     * 设置是否可以拖拽滚动
     * @param enabled
     */

  }, {
    key: "setScrollEnabled",
    value: function setScrollEnabled(enabled) {
      this._scrollEnabled = enabled;
    }
    /**
     * 获取是否可以拖拽滚动
     * @return {boolean}
     */

  }, {
    key: "scrollEnabled",
    value: function scrollEnabled() {
      return this._scrollEnabled;
    }
    /**
     * 设置加载更多
     * @param callback
     */

  }, {
    key: "setLoadMoreCallback",
    value: function setLoadMoreCallback(callback) {
      this._loadMoreCallback = callback;
    }
    /**
     * 添加标记实例
     * @param graphicMark
     */

  }, {
    key: "addGraphicMarkInstance",
    value: function addGraphicMarkInstance(graphicMark) {
      if (this._graphicMarks.find(function (gm) {
        return gm.id() === graphicMark.id();
      })) {
        return false;
      }

      var lastGraphicMark = this._graphicMarks[this._graphicMarks.length - 1];

      if (lastGraphicMark && lastGraphicMark.isDrawing()) {
        this._graphicMarks[this._graphicMarks.length - 1] = graphicMark;
      } else {
        this._graphicMarks.push(graphicMark);
      }

      this.invalidate(InvalidateLevel.OVERLAY);
      return true;
    }
    /**
     * 添加自定义标记图形
     * @param graphicMarks
     */

  }, {
    key: "addCustomGraphicMark",
    value: function addCustomGraphicMark(graphicMarks) {
      var _this2 = this;

      graphicMarks.forEach(function (mark) {
        var GraphicMarkClass = createGraphicMarkClass(mark);

        if (GraphicMarkClass) {
          _this2._graphicMarkMapping[mark.name] = GraphicMarkClass;
        }
      });
    }
    /**
     * 设置图形标记配置
     * @param id
     * @param options
     */

  }, {
    key: "setGraphicMarkOptions",
    value: function setGraphicMarkOptions(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var styles = options.styles,
          lock = options.lock;

      var graphicMark = this._graphicMarks.find(function (gm) {
        return gm.id() === id;
      });

      if (graphicMark) {
        graphicMark.setLock(lock);

        if (graphicMark.setStyles(styles, this._styleOptions.graphicMark)) {
          this.invalidate(InvalidateLevel.OVERLAY);
        }
      }
    }
    /**
     * 获取图形标记信息
     * @param id
     * @return {{name, lock: *, styles, id, points: (*|*[])}[]|{name, lock: *, styles, id, points: (*|*[])}}
     */

  }, {
    key: "getGraphicMark",
    value: function getGraphicMark(id) {
      if (id) {
        var graphicMark = this._graphicMarks.find(function (gm) {
          return gm.id() === id;
        });

        if (graphicMark) {
          return getGraphicMarkInfo(graphicMark);
        }
      } else {
        return this._graphicMarks.map(function (graphicMark) {
          return getGraphicMarkInfo(graphicMark);
        });
      }

      return null;
    }
    /**
     * 移除图形实例
     * @param id 参数
     */

  }, {
    key: "removeGraphicMarkInstance",
    value: function removeGraphicMarkInstance(id) {
      var graphicMarks = this._graphicMarks;

      if (isValid(id)) {
        var removeIndex = graphicMarks.findIndex(function (gm) {
          return gm.id() === id;
        });

        if (removeIndex > -1) {
          graphicMarks[removeIndex].onRemove({
            id: graphicMarks[removeIndex].id()
          });
          graphicMarks.splice(removeIndex, 1);
          this.invalidate(InvalidateLevel.OVERLAY);
        }
      } else {
        if (graphicMarks.length > 0) {
          graphicMarks.forEach(function (gm) {
            gm.onRemove({
              id: gm.id()
            });
          });
          this._graphicMarks = [];
          this.invalidate(InvalidateLevel.OVERLAY);
        }
      }
    }
    /**
     * 获取图形标记拖拽标记
     * @returns {boolean}
     */

  }, {
    key: "dragGraphicMarkFlag",
    value: function dragGraphicMarkFlag() {
      return this._dragGraphicMarkFlag;
    }
    /**
     * 设置图形标记拖拽标记
     * @param flag
     */

  }, {
    key: "setDragGraphicMarkFlag",
    value: function setDragGraphicMarkFlag(flag) {
      this._dragGraphicMarkFlag = flag;
    }
    /**
     * 获取图形标记鼠标操作信息
     * @return {{hover: {id: string, elementIndex: number, element: string}, click: {id: string, elementIndex: number, element: string}}}
     */

  }, {
    key: "graphicMarkMouseOperate",
    value: function graphicMarkMouseOperate() {
      return this._graphicMarkMouseOperate;
    }
    /**
     * 获取拖拽Pane标记
     * @return {boolean}
     */

  }, {
    key: "dragPaneFlag",
    value: function dragPaneFlag() {
      return this._dragPaneFlag;
    }
    /**
     * 设置拖拽Pane标记
     * @param flag
     */

  }, {
    key: "setDragPaneFlag",
    value: function setDragPaneFlag(flag) {
      this._dragPaneFlag = flag;
    }
    /**
     * 获取图形标记映射
     * @returns {{}}
     */

  }, {
    key: "graphicMarkMapping",
    value: function graphicMarkMapping() {
      return this._graphicMarkMapping;
    }
    /**
     * 获取图形标记的数据
     * @returns {{}}
     */

  }, {
    key: "graphicMarks",
    value: function graphicMarks() {
      return this._graphicMarks;
    }
    /**
     * 获取可见的注解
     * @return {[]}
     */

  }, {
    key: "visibleAnnotations",
    value: function visibleAnnotations() {
      return this._visibleAnnotations;
    }
    /**
     * 获取注解鼠标操作信息
     * @return {null}
     */

  }, {
    key: "annotationMouseOperate",
    value: function annotationMouseOperate() {
      return this._annotationMouseOperate;
    }
    /**
     * 创建注解
     * @param annotations
     */

  }, {
    key: "addAnnotations",
    value: function addAnnotations(annotations) {
      var _this3 = this;

      annotations.forEach(function (annotation) {
        if (_this3._annotations.has(annotation.id())) {
          _this3._annotations.get(annotation.id()).push(annotation);
        } else {
          _this3._annotations.set(annotation.id(), [annotation]);
        }
      });

      this._adjustVisibleDataList();

      this.invalidate(InvalidateLevel.OVERLAY);
    }
    /**
     * 移除注解
     * @param points
     */

  }, {
    key: "removeAnnotation",
    value: function removeAnnotation(points) {
      var _this4 = this;

      var shouldAdjust = false;

      if (isValid(points)) {
        [].concat(points).forEach(function (_ref) {
          var timestamp = _ref.timestamp;

          if (_this4._annotations.has(timestamp)) {
            shouldAdjust = true;

            _this4._annotations.delete(timestamp);
          }
        });

        if (shouldAdjust) {
          this._adjustVisibleDataList();
        }
      } else {
        shouldAdjust = true;

        this._annotations.clear();

        this._visibleAnnotations = [];
      }

      if (shouldAdjust) {
        this.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 获取标签
     * @return {Map<any, any>}
     */

  }, {
    key: "tags",
    value: function tags() {
      return this._tags;
    }
    /**
     * 根据id获取标签实例
     * @param id
     * @return
     */

  }, {
    key: "getTag",
    value: function getTag(id) {
      return this._tags.get(id);
    }
    /**
     * 添加标签
     * @param tags
     */

  }, {
    key: "addTags",
    value: function addTags(tags) {
      var _this5 = this;

      tags.forEach(function (tag) {
        _this5._tags.set(tag.id(), tag);
      });
      this.invalidate(InvalidateLevel.OVERLAY);
    }
    /**
     * 移除标签
     * @param id
     */

  }, {
    key: "removeTag",
    value: function removeTag(id) {
      var _this6 = this;

      var shouldInvalidate = false;

      if (isValid(id)) {
        var ids = [].concat(id);
        ids.forEach(function (id) {
          if (_this6._tags.has(id)) {
            shouldInvalidate = true;

            _this6._tags.delete(id);
          }
        });
      } else {
        shouldInvalidate = true;

        this._tags.clear();
      }

      if (shouldInvalidate) {
        this.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 设置覆盖物鼠标操作信息
     * @param graphicMarkOperate
     * @param annotationOperate
     */

  }, {
    key: "setOverlayMouseOperate",
    value: function setOverlayMouseOperate(graphicMarkOperate, annotationOperate) {
      var _this$_graphicMarkMou = this._graphicMarkMouseOperate,
          hover = _this$_graphicMarkMou.hover,
          click = _this$_graphicMarkMou.click;
      var id = this._annotationMouseOperate.id;
      var lastGraphicMark = this._graphicMarks[this._graphicMarks.length - 1];
      var shouldInvalidate = false;

      if (graphicMarkOperate.hover && (hover.id !== graphicMarkOperate.hover.id || hover.element !== graphicMarkOperate.hover.element || hover.elementIndex !== graphicMarkOperate.hover.elementIndex)) {
        this._graphicMarkMouseOperate.hover = _objectSpread2({}, graphicMarkOperate.hover);
        shouldInvalidate = true;
      }

      if (graphicMarkOperate.click && (click.id !== graphicMarkOperate.click.id || click.element !== graphicMarkOperate.click.element || click.elementIndex !== graphicMarkOperate.click.elementIndex)) {
        this._graphicMarkMouseOperate.click = _objectSpread2({}, graphicMarkOperate.click);
        shouldInvalidate = true;
      }

      if (annotationOperate && id !== annotationOperate.id) {
        this._annotationMouseOperate = _objectSpread2({}, annotationOperate);
        shouldInvalidate = true;
      }

      if (shouldInvalidate || lastGraphicMark && lastGraphicMark.isDrawing()) {
        this.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 添加一个自定义指标
     * @param techs
     */

  }, {
    key: "addCustomTechnicalIndicator",
    value: function addCustomTechnicalIndicator(techs) {
      var _this7 = this;

      techs.forEach(function (tech) {
        var instance = createTechnicalIndicatorInstance(tech || {});

        if (instance) {
          // 将生成的新的指标类放入集合
          _this7._technicalIndicatorMapping[instance.name] = instance;
        }
      });
    }
    /**
     * 事件执行
     * @param type
     * @param data
     * @param executeBeforeFun
     * @param executeAfterFun
     */

  }, {
    key: "actionExecute",
    value: function actionExecute(type, data, executeBeforeFun, executeAfterFun) {
      if (this.hasAction(type)) {
        executeBeforeFun && executeBeforeFun();

        this._actionDelegate.get(type).execute(data);

        executeAfterFun && executeAfterFun();
      }
    }
    /**
     * 是否有事件监听
     * @param type
     * @return {boolean}
     */

  }, {
    key: "hasAction",
    value: function hasAction(type) {
      return this._actionDelegate.has(type) && this._actionDelegate.get(type).hasObservers();
    }
    /**
     * 订阅事件
     * @param type
     * @param callback
     * @return {boolean}
     */

  }, {
    key: "subscribeAction",
    value: function subscribeAction(type, callback) {
      if (Object.values(ActionType).indexOf(type) < 0) {
        return false;
      }

      if (!this._actionDelegate.has(type)) {
        this._actionDelegate.set(type, new Delegate());
      }

      this._actionDelegate.get(type).subscribe(callback);

      return true;
    }
    /**
     * 取消事件订阅
     * @param type
     * @param callback
     * @return {boolean}
     */

  }, {
    key: "unsubscribeAction",
    value: function unsubscribeAction(type, callback) {
      if (Object.values(ActionType).indexOf(type) < 0) {
        return false;
      }

      if (this._actionDelegate.has(type)) {
        var delegate = this._actionDelegate.get(type);

        delegate.unsubscribe(callback);

        if (!delegate.hasObservers()) {
          this._actionDelegate.delete(type);
        }

        return true;
      }

      return false;
    }
  }]);

  return ChartData;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 获取屏幕比
 * @param canvas
 * @returns {number}
 */
function getPixelRatio(canvas) {
  return canvas.ownerDocument && canvas.ownerDocument.defaultView && canvas.ownerDocument.defaultView.devicePixelRatio || 2;
}
/**
 * 测量文字的宽度
 * @param ctx
 * @param text
 * @returns {number}
 */

function calcTextWidth(ctx, text) {
  return Math.round(ctx.measureText(text).width);
}
/**
 * 创建字体
 * @param fontSize
 * @param fontFamily
 * @param fontWeight
 * @returns {string}
 */

function createFont() {
  var fontSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var fontWeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';
  var fontFamily = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Helvetica Neue';
  return "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
}

var Pane = /*#__PURE__*/function () {
  function Pane(props) {
    _classCallCheck(this, Pane);

    this._height = -1;
    this._container = props.container;
    this._chartData = props.chartData;

    this._initBefore(props);

    this._initElement();

    this._mainWidget = this._createMainWidget(this._element, props);
    this._yAxisWidget = this._createYAxisWidget(this._element, props);
  }

  _createClass(Pane, [{
    key: "_initBefore",
    value: function _initBefore(props) {}
  }, {
    key: "_initElement",
    value: function _initElement() {
      this._element = document.createElement('div');
      this._element.style.margin = '0';
      this._element.style.padding = '0';
      this._element.style.position = 'relative';
      this._element.style.overflow = 'hidden';
      this._element.style.width = '100%';
      var lastElement = this._container.lastChild;

      if (lastElement) {
        this._container.insertBefore(this._element, lastElement);
      } else {
        this._container.appendChild(this._element);
      }
    }
    /**
     * 创建主组件
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {}
    /**
     * 创建y轴组件
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createYAxisWidget",
    value: function _createYAxisWidget(container, props) {}
    /**
     * 获取宽度
     * @returns {number}
     */

  }, {
    key: "width",
    value: function width() {
      return this._element.offsetWidth;
    }
  }, {
    key: "setWidth",
    value: function setWidth(mainWidgetWidth, yAxisWidgetWidth) {
      this._mainWidget.setWidth(mainWidgetWidth);

      this._yAxisWidget && this._yAxisWidget.setWidth(yAxisWidgetWidth);
    }
    /**
     * 获取高度
     */

  }, {
    key: "height",
    value: function height() {
      return this._height;
    }
    /**
     * 设置临时高度
     * @param height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;

      this._mainWidget.setHeight(height);

      this._yAxisWidget && this._yAxisWidget.setHeight(height);
    }
  }, {
    key: "setOffsetLeft",
    value: function setOffsetLeft(mainWidgetOffsetLeft, yAxisWidgetOffsetLeft) {
      this._mainWidget.setOffsetLeft(mainWidgetOffsetLeft);

      this._yAxisWidget && this._yAxisWidget.setOffsetLeft(yAxisWidgetOffsetLeft);
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this._element.offsetHeight !== this._height) {
        this._element.style.height = "".concat(this._height, "px");
      }

      this._mainWidget.layout();

      this._yAxisWidget && this._yAxisWidget.layout();
    }
    /**
     * 刷新
     * @param level
     */

  }, {
    key: "invalidate",
    value: function invalidate(level) {
      this._yAxisWidget && this._yAxisWidget.invalidate(level);

      this._mainWidget.invalidate(level);
    }
    /**
     * 将canvas转换成图片
     * @param includeOverlay
     * @return {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage(includeOverlay) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      var width = this._element.offsetWidth;
      var height = this._element.offsetHeight;
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px");
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);

      var mainWidgetElement = this._mainWidget.getElement();

      var mainWidgetWidth = mainWidgetElement.offsetWidth;
      var mainWidgetHeight = mainWidgetElement.offsetHeight;
      var mainWidgetOffsetLeft = parseInt(mainWidgetElement.style.left, 10);
      ctx.drawImage(this._mainWidget.getImage(includeOverlay), mainWidgetOffsetLeft, 0, mainWidgetWidth, mainWidgetHeight);

      if (this._yAxisWidget) {
        var yAxisWidgetElement = this._yAxisWidget.getElement();

        var yAxisWidgetWidth = yAxisWidgetElement.offsetWidth;
        var yAxisWidgetHeight = yAxisWidgetElement.offsetHeight;
        var yAxisWidgetOffsetLeft = parseInt(yAxisWidgetElement.style.left, 10);
        ctx.drawImage(this._yAxisWidget.getImage(includeOverlay), yAxisWidgetOffsetLeft, 0, yAxisWidgetWidth, yAxisWidgetHeight);
      }

      return canvas;
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._container.removeChild(this._element);
    }
  }]);

  return Pane;
}();

var Widget = /*#__PURE__*/function () {
  function Widget(props) {
    _classCallCheck(this, Widget);

    this._width = 0;
    this._height = 0;

    this._initElement(props.container);

    this._mainView = this._createMainView(this._element, props);
    this._overlayView = this._createOverlayView(this._element, props);
  }
  /**
   * 初始化element
   * @param container
   * @private
   */


  _createClass(Widget, [{
    key: "_initElement",
    value: function _initElement(container) {
      this._element = document.createElement('div');
      this._element.style.top = '0';
      this._element.style.margin = '0';
      this._element.style.padding = '0';
      this._element.style.position = 'absolute';
      this._element.style.overflow = 'hidden';
      container.appendChild(this._element);
    }
    /**
     * 创建主view
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createMainView",
    value: function _createMainView(container, props) {}
    /**
     * 创建浮层view
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {}
  }, {
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._width = width;

      this._mainView.setWidth(width);

      this._overlayView.setWidth(width);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;

      this._mainView.setHeight(height);

      this._overlayView.setHeight(height);
    }
  }, {
    key: "setOffsetLeft",
    value: function setOffsetLeft(offsetLeft) {
      this._element.style.left = "".concat(offsetLeft, "px");
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this._element.offsetWidth !== this._width) {
        this._element.style.width = "".concat(this._width, "px");
      }

      if (this._element.offsetHeight !== this._height) {
        this._element.style.height = "".concat(this._height, "px");
      }

      this._mainView.layout();

      this._overlayView.layout();
    }
    /**
     * 更新
     * @param level
     */

  }, {
    key: "invalidate",
    value: function invalidate(level) {
      switch (level) {
        case InvalidateLevel.OVERLAY:
          {
            this._overlayView.flush();

            break;
          }

        case InvalidateLevel.MAIN:
        case InvalidateLevel.FULL:
          {
            this._mainView.flush();

            this._overlayView.flush();

            break;
          }
      }
    }
    /**
     * 将widget转换成图片
     * @param includeOverlay
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage(includeOverlay) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      canvas.style.width = "".concat(this._width, "px");
      canvas.style.height = "".concat(this._height, "px");
      canvas.width = this._width * pixelRatio;
      canvas.height = this._height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.drawImage(this._mainView.getImage(), 0, 0, this._width, this._height);

      if (includeOverlay && this._overlayView) {
        ctx.drawImage(this._overlayView.getImage(), 0, 0, this._width, this._height);
      }

      return canvas;
    }
  }]);

  return Widget;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * requestAnimationFrame兼容
 * @param fn
 */
function requestAnimationFrame(fn) {
  if (!window.requestAnimationFrame) {
    return window.setTimeout(fn, 20);
  }

  return window.requestAnimationFrame(fn);
}
/**
 * cancelAnimationFrame兼容
 * @param id
 */

function cancelAnimationFrame(id) {
  if (!window.cancelAnimationFrame) {
    clearTimeout(id);
  }

  window.cancelAnimationFrame(id);
}

var View = /*#__PURE__*/function () {
  function View(container, chartData) {
    _classCallCheck(this, View);

    this._chartData = chartData;

    this._initCanvas(container);
  }
  /**
   * 初始化画布
   * @param container
   * @private
   */


  _createClass(View, [{
    key: "_initCanvas",
    value: function _initCanvas(container) {
      this._canvas = document.createElement('canvas');
      this._canvas.style.position = 'absolute';
      this._canvas.style.top = '0';
      this._canvas.style.left = '0';
      this._canvas.style.zIndex = '2';
      this._ctx = this._canvas.getContext('2d');
      container.appendChild(this._canvas);
    }
    /**
     * 重新绘制
     * @param extendFun
     * @private
     */

  }, {
    key: "_redraw",
    value: function _redraw(extendFun) {
      this._ctx.clearRect(0, 0, this._canvas.offsetWidth, this._canvas.offsetHeight);

      extendFun && extendFun();

      this._draw();
    }
    /**
     * 绘制
     */

  }, {
    key: "_draw",
    value: function _draw() {}
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._width = width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this = this;

      if (this._height !== this._canvas.offsetHeight || this._width !== this._canvas.offsetWidth) {
        this._redraw(function () {
          var pixelRatio = getPixelRatio(_this._canvas);
          _this._canvas.style.width = "".concat(_this._width, "px");
          _this._canvas.style.height = "".concat(_this._height, "px");
          _this._canvas.width = Math.floor(_this._width * pixelRatio);
          _this._canvas.height = Math.floor(_this._height * pixelRatio);

          _this._ctx.scale(pixelRatio, pixelRatio);
        });
      } else {
        this.flush();
      }
    }
    /**
     * 刷新
     */

  }, {
    key: "flush",
    value: function flush() {
      var _this2 = this;

      if (this.requestAnimationId) {
        cancelAnimationFrame(this.requestAnimationId);
        this.requestAnimationId = null;
      }

      this.requestAnimationId = requestAnimationFrame(function () {
        _this2._redraw();
      });
    }
    /**
     * 获取图片
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage() {
      return this._canvas;
    }
  }]);

  return View;
}();

var TechnicalIndicatorView = /*#__PURE__*/function (_View) {
  _inherits(TechnicalIndicatorView, _View);

  var _super = _createSuper(TechnicalIndicatorView);

  function TechnicalIndicatorView(container, chartData, xAxis, yAxis, additionalDataProvider) {
    var _this;

    _classCallCheck(this, TechnicalIndicatorView);

    _this = _super.call(this, container, chartData);
    _this._xAxis = xAxis;
    _this._yAxis = yAxis;
    _this._additionalDataProvider = additionalDataProvider;
    return _this;
  }

  _createClass(TechnicalIndicatorView, [{
    key: "_draw",
    value: function _draw() {
      this._drawGrid();

      this._drawTechnicalIndicators();
    }
    /**
     * 绘制网格
     * @private
     */

  }, {
    key: "_drawGrid",
    value: function _drawGrid() {
      var _this2 = this;

      var gridOptions = this._chartData.styleOptions().grid;

      if (!gridOptions.show) {
        return;
      }

      var gridHorizontalOptions = gridOptions.horizontal;

      this._ctx.save();

      if (gridHorizontalOptions.show) {
        this._ctx.strokeStyle = gridHorizontalOptions.color;
        this._ctx.lineWidth = gridHorizontalOptions.size;

        if (gridHorizontalOptions.style === LineStyle.DASH) {
          this._ctx.setLineDash(gridHorizontalOptions.dashValue);
        } else {
          this._ctx.setLineDash([]);
        }

        this._yAxis.ticks().forEach(function (tick) {
          renderHorizontalLine(_this2._ctx, tick.y, 0, _this2._width);
        });
      }

      var gridVerticalOptions = gridOptions.vertical;

      if (gridVerticalOptions.show) {
        this._ctx.strokeStyle = gridVerticalOptions.color;
        this._ctx.lineWidth = gridVerticalOptions.size;

        if (gridVerticalOptions.style === LineStyle.DASH) {
          this._ctx.setLineDash(gridVerticalOptions.dashValue);
        } else {
          this._ctx.setLineDash([]);
        }

        this._xAxis.ticks().forEach(function (tick) {
          renderVerticalLine(_this2._ctx, tick.x, 0, _this2._height);
        });
      }

      this._ctx.restore();
    }
    /**
     * 绘制指标
     * @private
     */

  }, {
    key: "_drawTechnicalIndicators",
    value: function _drawTechnicalIndicators() {
      var _this3 = this;

      var technicalIndicatorOptions = this._chartData.styleOptions().technicalIndicator;

      var technicalIndicators = this._additionalDataProvider.technicalIndicators();

      technicalIndicators.forEach(function (technicalIndicator) {
        var plots = technicalIndicator.plots;
        var lines = [];

        var dataList = _this3._chartData.dataList();

        var technicalIndicatorResult = technicalIndicator.result;
        var styles = technicalIndicator.styles || technicalIndicatorOptions; // 技术指标自定义绘制

        if (technicalIndicator.render) {
          _this3._ctx.save();

          technicalIndicator.render(_this3._ctx, {
            from: _this3._chartData.from(),
            to: _this3._chartData.to(),
            kLineDataList: _this3._chartData.dataList(),
            technicalIndicatorDataList: technicalIndicatorResult
          }, {
            width: _this3._width,
            height: _this3._height,
            dataSpace: _this3._chartData.dataSpace(),
            barSpace: _this3._chartData.barSpace()
          }, styles, {
            convertFromPixel: _this3._xAxis.convertFromPixel.bind(_this3._xAxis),
            convertToPixel: _this3._xAxis.convertToPixel.bind(_this3._xAxis)
          }, {
            convertFromPixel: _this3._yAxis.convertFromPixel.bind(_this3._yAxis),
            convertToPixel: _this3._yAxis.convertToPixel.bind(_this3._yAxis)
          }, _this3._yAxis.isCandleYAxis());

          _this3._ctx.restore();
        }

        var baseValue = technicalIndicator.baseValue;

        if (!isValid(baseValue)) {
          baseValue = _this3._yAxis.min();
        }

        var baseValueY = _this3._yAxis.convertToPixel(baseValue);

        var isCandleYAxis = _this3._yAxis.isCandleYAxis();

        _this3._ctx.lineWidth = 1;

        _this3._drawGraphics(function (x, i, kLineData, halfBarSpace, barSpace) {
          var technicalIndicatorData = technicalIndicatorResult[i] || {};
          var lineValueIndex = 0;

          if (technicalIndicator.shouldOhlc && !isCandleYAxis) {
            _this3._drawCandleBar(x, halfBarSpace, barSpace, i, kLineData, styles.bar, CandleType.OHLC);
          }

          var coordinateY = {};
          plots.forEach(function (plot) {
            var value = technicalIndicatorData[plot.key];

            var valueY = _this3._yAxis.convertToPixel(value);

            coordinateY[plot.key] = valueY;

            switch (plot.type) {
              case TechnicalIndicatorPlotType.CIRCLE:
                {
                  if (isValid(value)) {
                    var cbData = {
                      preData: {
                        kLineData: dataList[i - 1],
                        technicalIndicatorData: technicalIndicatorResult[i - 1]
                      },
                      currentData: {
                        kLineData: kLineData,
                        technicalIndicatorData: technicalIndicatorData
                      },
                      nextData: {
                        kLineData: dataList[i + 1],
                        technicalIndicatorData: technicalIndicatorResult[i + 1]
                      }
                    };
                    var circle = {
                      x: x,
                      y: valueY,
                      radius: halfBarSpace,
                      color: plot.color && plot.color(cbData, styles) || styles.circle.noChangeColor,
                      isStroke: plot.isStroke ? plot.isStroke(cbData) : true
                    };

                    _this3._drawCircle(circle);
                  }

                  break;
                }

              case TechnicalIndicatorPlotType.BAR:
                {
                  if (isValid(value)) {
                    var _cbData = {
                      preData: {
                        kLineData: dataList[i - 1],
                        technicalIndicatorData: technicalIndicatorResult[i - 1]
                      },
                      currentData: {
                        kLineData: kLineData,
                        technicalIndicatorData: technicalIndicatorData
                      },
                      nextData: {
                        kLineData: dataList[i + 1],
                        technicalIndicatorData: technicalIndicatorResult[i + 1]
                      }
                    };
                    var height = Math.abs(baseValueY - valueY);
                    var bar = {
                      x: x - halfBarSpace,
                      width: halfBarSpace * 2,
                      height: Math.max(1, height)
                    };

                    if (valueY > baseValueY) {
                      bar.y = baseValueY;
                    } else {
                      bar.y = height < 1 ? baseValueY - 1 : valueY;
                    }

                    bar.color = plot.color && plot.color(_cbData, styles) || styles.bar.noChangeColor;
                    bar.isStroke = plot.isStroke ? plot.isStroke(_cbData) : false;

                    _this3._drawBar(bar);
                  }

                  break;
                }

              case TechnicalIndicatorPlotType.LINE:
                {
                  var line = null;

                  if (isValid(value)) {
                    line = {
                      x: x,
                      y: valueY
                    };
                  }

                  if (lines[lineValueIndex]) {
                    lines[lineValueIndex].push(line);
                  } else {
                    lines[lineValueIndex] = [line];
                  }

                  lineValueIndex++;
                  break;
                }
            }

            _this3._drawActionExecute(ActionType.DRAW_TECHNICAL_INDICATOR, {
              ctx: _this3._ctx,
              kLineData: kLineData,
              dataIndex: i,
              technicalIndicatorData: technicalIndicatorData,
              technicalIndicatorName: technicalIndicator.name,
              coordinate: _objectSpread2({
                x: x
              }, coordinateY),
              viewport: {
                width: _this3._width,
                height: _this3._height
              },
              barSpace: barSpace,
              halfBarSpace: halfBarSpace,
              isCandle: isCandleYAxis
            });
          });
        }, function () {
          _this3._drawLines(lines, styles);
        });
      });
    }
    /**
     * 绘制图形
     * @param onDrawing
     * @param onDrawEnd
     * @private
     */

  }, {
    key: "_drawGraphics",
    value: function _drawGraphics(onDrawing, onDrawEnd) {
      var visibleDataList = this._chartData.visibleDataList();

      var barSpace = this._chartData.barSpace();

      var halfBarSpace = barSpace / 2;
      visibleDataList.forEach(function (_ref, n) {
        var x = _ref.x,
            index = _ref.index,
            data = _ref.data;
        onDrawing(x, index, data, halfBarSpace, barSpace, n);
      });
      onDrawEnd && onDrawEnd();
    }
    /**
     * 绘制线
     * @param lines
     * @param technicalIndicatorOptions
     */

  }, {
    key: "_drawLines",
    value: function _drawLines(lines, technicalIndicatorOptions) {
      var _this4 = this;

      var colors = technicalIndicatorOptions.line.colors || [];
      var colorSize = colors.length;
      this._ctx.lineWidth = technicalIndicatorOptions.line.size;
      renderLine(this._ctx, function () {
        lines.forEach(function (lineItem, i) {
          _this4._ctx.strokeStyle = colors[i % colorSize];

          _this4._ctx.beginPath();

          var isStart = true;
          lineItem.forEach(function (line) {
            if (isValid(line)) {
              if (isStart) {
                _this4._ctx.moveTo(line.x, line.y);

                isStart = false;
              } else {
                _this4._ctx.lineTo(line.x, line.y);
              }
            }
          });

          _this4._ctx.stroke();

          _this4._ctx.closePath();
        });
      });
    }
    /**
     * 绘制柱
     */

  }, {
    key: "_drawBar",
    value: function _drawBar(bar) {
      if (bar.isStroke) {
        this._ctx.strokeStyle = bar.color;

        this._ctx.strokeRect(bar.x + 0.5, bar.y, bar.width - 1, bar.height);
      } else {
        this._ctx.fillStyle = bar.color;

        this._ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
      }
    }
    /**
     * 绘制圆点
     * @param circle
     * @private
     */

  }, {
    key: "_drawCircle",
    value: function _drawCircle(circle) {
      this._ctx.strokeStyle = circle.color;
      this._ctx.fillStyle = circle.color;

      this._ctx.beginPath();

      this._ctx.arc(circle.x, circle.y, circle.radius, Math.PI * 2, 0, true);

      if (circle.isStroke) {
        this._ctx.stroke();
      } else {
        this._ctx.fill();
      }

      this._ctx.closePath();
    }
    /**
     * 绘制蜡烛柱
     * @param x
     * @param halfBarSpace
     * @param barSpace
     * @param dataIndex
     * @param kLineData
     * @param barOptions
     * @param barStyle
     * @private
     */

  }, {
    key: "_drawCandleBar",
    value: function _drawCandleBar(x, halfBarSpace, barSpace, dataIndex, kLineData, barOptions, barStyle) {
      var open = kLineData.open,
          close = kLineData.close,
          high = kLineData.high,
          low = kLineData.low;

      if (close > open) {
        this._ctx.strokeStyle = barOptions.upColor;
        this._ctx.fillStyle = barOptions.upColor;
      } else if (close < open) {
        this._ctx.strokeStyle = barOptions.downColor;
        this._ctx.fillStyle = barOptions.downColor;
      } else {
        this._ctx.strokeStyle = barOptions.noChangeColor;
        this._ctx.fillStyle = barOptions.noChangeColor;
      }

      var openY = this._yAxis.convertToPixel(open);

      var closeY = this._yAxis.convertToPixel(close);

      var highY = this._yAxis.convertToPixel(high);

      var lowY = this._yAxis.convertToPixel(low);

      var highEndY = Math.min(openY, closeY);
      var lowStartY = Math.max(openY, closeY);

      this._ctx.fillRect(x - 0.5, highY, 1, highEndY - highY);

      this._ctx.fillRect(x - 0.5, lowStartY, 1, lowY - lowStartY);

      var barHeight = Math.max(1, lowStartY - highEndY);

      switch (barStyle) {
        case CandleType.CANDLE_SOLID:
          {
            this._ctx.fillRect(x - halfBarSpace, highEndY, barSpace, barHeight);

            break;
          }

        case CandleType.CANDLE_STROKE:
          {
            this._ctx.strokeRect(x - halfBarSpace + 0.5, highEndY, barSpace - 1, barHeight);

            break;
          }

        case CandleType.CANDLE_UP_STROKE:
          {
            if (close > open) {
              this._ctx.strokeRect(x - halfBarSpace + 0.5, highEndY, barSpace - 1, barHeight);
            } else {
              this._ctx.fillRect(x - halfBarSpace, highEndY, barSpace, barHeight);
            }

            break;
          }

        case CandleType.CANDLE_DOWN_STROKE:
          {
            if (close > open) {
              this._ctx.fillRect(x - halfBarSpace, highEndY, barSpace, barHeight);
            } else {
              this._ctx.strokeRect(x - halfBarSpace + 0.5, highEndY, barSpace - 1, barHeight);
            }

            break;
          }

        default:
          {
            this._ctx.fillRect(x - 0.5, highY, 1, lowY - highY);

            this._ctx.fillRect(x - halfBarSpace, openY - 0.5, halfBarSpace, 1);

            this._ctx.fillRect(x, closeY - 0.5, halfBarSpace, 1);

            break;
          }
      }

      this._drawActionExecute(ActionType.DRAW_CANDLE, {
        ctx: this._ctx,
        dataIndex: dataIndex,
        kLineData: kLineData,
        coordinate: {
          x: x,
          open: openY,
          close: closeY,
          high: highY,
          low: lowY
        },
        viewport: {
          width: this._width,
          height: this._height
        },
        barSpace: barSpace,
        halfBarSpace: halfBarSpace,
        isCandle: this._yAxis.isCandleYAxis()
      });
    }
    /**
     * 执行绘制事件监听
     * @param type
     * @param data
     * @private
     */

  }, {
    key: "_drawActionExecute",
    value: function _drawActionExecute(type, data) {
      var _this5 = this;

      this._chartData.actionExecute(type, data, function () {
        _this5._ctx.save();
      }, function () {
        _this5._ctx.restore();
      });
    }
  }]);

  return TechnicalIndicatorView;
}(View);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 绘制文字
 * @param ctx
 * @param color
 * @param x
 * @param y
 * @param text
 */
function renderText(ctx, color, x, y, text) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

var TechnicalIndicatorOverlayView = /*#__PURE__*/function (_View) {
  _inherits(TechnicalIndicatorOverlayView, _View);

  var _super = _createSuper(TechnicalIndicatorOverlayView);

  function TechnicalIndicatorOverlayView(container, chartData, xAxis, yAxis, additionalDataProvider) {
    var _this;

    _classCallCheck(this, TechnicalIndicatorOverlayView);

    _this = _super.call(this, container, chartData);
    _this._xAxis = xAxis;
    _this._yAxis = yAxis;
    _this._additionalDataProvider = additionalDataProvider;
    return _this;
  }

  _createClass(TechnicalIndicatorOverlayView, [{
    key: "_draw",
    value: function _draw() {
      this._drawCover();

      var crosshair = this._chartData.crosshair();

      if (crosshair.kLineData) {
        var technicalIndicators = this._additionalDataProvider.technicalIndicators();

        var styleOptions = this._chartData.styleOptions();

        var crosshairOptions = styleOptions.crosshair;

        if (crosshair.paneId === this._additionalDataProvider.id()) {
          // 绘制十字光标水平线
          this._drawCrosshairLine(crosshairOptions, 'horizontal', crosshair.y, 0, this._width, renderHorizontalLine);
        }

        if (crosshair.paneId) {
          // 绘制十字光标垂直线
          this._drawCrosshairLine(crosshairOptions, 'vertical', crosshair.realX, 0, this._height, renderVerticalLine);
        }

        this._drawTooltip(crosshair, technicalIndicators);
      }
    }
    /**
     * 绘制覆盖物
     * @private
     */

  }, {
    key: "_drawCover",
    value: function _drawCover() {}
    /**
     * 绘制图例
     * @param crosshair
     * @param technicalIndicators
     * @private
     */

  }, {
    key: "_drawTooltip",
    value: function _drawTooltip(crosshair, technicalIndicators) {
      var technicalIndicatorOptions = this._chartData.styleOptions().technicalIndicator;

      this._drawBatchTechnicalIndicatorToolTip(crosshair, technicalIndicators, technicalIndicatorOptions, 0, this._shouldDrawTooltip(crosshair, technicalIndicatorOptions.tooltip));
    }
    /**
     * 绘制十字光标线
     * @param crosshairOptions
     * @param optionsKey
     * @param fixedCoordinate
     * @param startCoordinate
     * @param endCoordinate
     * @param drawLine
     * @private
     */

  }, {
    key: "_drawCrosshairLine",
    value: function _drawCrosshairLine(crosshairOptions, optionsKey, fixedCoordinate, startCoordinate, endCoordinate, drawLine) {
      var crosshairDirectionOptions = crosshairOptions[optionsKey];
      var crosshairLineOptions = crosshairDirectionOptions.line;

      if (!crosshairOptions.show || !crosshairDirectionOptions.show || !crosshairLineOptions.show) {
        return;
      }

      this._ctx.save();

      this._ctx.lineWidth = crosshairLineOptions.size;
      this._ctx.strokeStyle = crosshairLineOptions.color;

      if (crosshairLineOptions.style === LineStyle.DASH) {
        this._ctx.setLineDash(crosshairLineOptions.dashValue);
      }

      drawLine(this._ctx, fixedCoordinate, startCoordinate, endCoordinate);

      this._ctx.restore();
    }
    /**
     * 批量绘制技术指标提示
     * @param crosshair
     * @param technicalIndicators
     * @param technicalIndicatorOptions
     * @param offsetTop
     * @param isDrawTechnicalIndicatorTooltip
     * @private
     */

  }, {
    key: "_drawBatchTechnicalIndicatorToolTip",
    value: function _drawBatchTechnicalIndicatorToolTip(crosshair, technicalIndicators, technicalIndicatorOptions) {
      var _this2 = this;

      var offsetTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var isDrawTechnicalIndicatorTooltip = arguments.length > 4 ? arguments[4] : undefined;

      if (!isDrawTechnicalIndicatorTooltip) {
        return;
      }

      var technicalIndicatorTooltipOptions = technicalIndicatorOptions.tooltip;
      var top = offsetTop;
      technicalIndicators.forEach(function (technicalIndicator) {
        _this2._drawTechnicalIndicatorTooltip(crosshair, technicalIndicator, technicalIndicatorOptions, top);

        top += technicalIndicatorTooltipOptions.text.marginTop + technicalIndicatorTooltipOptions.text.size + technicalIndicatorTooltipOptions.text.marginBottom;
      });
    }
    /**
     * 绘制指标图例
     * @param crosshair
     * @param technicalIndicator
     * @param technicalIndicatorOptions
     * @param offsetTop
     * @private
     */

  }, {
    key: "_drawTechnicalIndicatorTooltip",
    value: function _drawTechnicalIndicatorTooltip(crosshair, technicalIndicator, technicalIndicatorOptions) {
      var _this3 = this;

      var offsetTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var technicalIndicatorTooltipOptions = technicalIndicatorOptions.tooltip;
      var styles = technicalIndicator.styles || technicalIndicatorOptions;
      var technicalIndicatorResult = technicalIndicator.result;
      var technicalIndicatorData = technicalIndicatorResult[crosshair.dataIndex];
      var tooltipData = getTechnicalIndicatorTooltipData(technicalIndicatorData, technicalIndicator);
      var colors = styles.line.colors;

      var dataList = this._chartData.dataList();

      var cbData = {
        preData: {
          kLineData: dataList[crosshair.dataIndex - 1],
          technicalIndicatorData: technicalIndicatorResult[crosshair.dataIndex - 1]
        },
        currentData: {
          kLineData: dataList[crosshair.dataIndex],
          technicalIndicatorData: technicalIndicatorData
        },
        nextData: {
          kLineData: dataList[crosshair.dataIndex + 1],
          technicalIndicatorData: technicalIndicatorResult[crosshair.dataIndex + 1]
        }
      };
      var plots = technicalIndicator.plots;
      var technicalIndicatorTooltipTextOptions = technicalIndicatorTooltipOptions.text;
      var values = tooltipData.values;
      var textMarginLeft = technicalIndicatorTooltipTextOptions.marginLeft;
      var textMarginRight = technicalIndicatorTooltipTextOptions.marginRight;
      var labelX = 0;
      var labelY = technicalIndicatorTooltipTextOptions.marginTop + offsetTop;
      var textSize = technicalIndicatorTooltipTextOptions.size;
      var textColor = technicalIndicatorTooltipTextOptions.color;
      var colorSize = colors.length;
      this._ctx.textBaseline = 'top';
      this._ctx.font = createFont(textSize, technicalIndicatorTooltipTextOptions.weight, technicalIndicatorTooltipTextOptions.family);

      if (technicalIndicatorTooltipOptions.showName) {
        var nameText = tooltipData.name;
        var nameTextWidth = calcTextWidth(this._ctx, nameText);
        labelX += textMarginLeft;
        renderText(this._ctx, textColor, labelX, labelY, nameText);
        labelX += nameTextWidth;

        if (!technicalIndicatorTooltipOptions.showParams) {
          labelX += textMarginRight;
        }
      }

      if (technicalIndicatorTooltipOptions.showParams) {
        var calcParamText = tooltipData.calcParamText;
        var calcParamTextWidth = calcTextWidth(this._ctx, calcParamText);

        if (!technicalIndicatorTooltipOptions.showName) {
          labelX += textMarginLeft;
        }

        renderText(this._ctx, textColor, labelX, labelY, calcParamText);
        labelX += calcParamTextWidth + textMarginRight;
      }

      var lineCount = 0;
      var valueColor;
      plots.forEach(function (plot, i) {
        switch (plot.type) {
          case TechnicalIndicatorPlotType.CIRCLE:
            {
              valueColor = plot.color && plot.color(cbData, styles) || styles.circle.noChangeColor;
              break;
            }

          case TechnicalIndicatorPlotType.BAR:
            {
              valueColor = plot.color && plot.color(cbData, styles) || styles.bar.noChangeColor;
              break;
            }

          case TechnicalIndicatorPlotType.LINE:
            {
              valueColor = colors[lineCount % colorSize] || textColor;
              lineCount++;
              break;
            }
        }

        var title = values[i].title;

        if (isValid(title)) {
          labelX += textMarginLeft;
          var text = "".concat(title).concat(values[i].value || technicalIndicatorTooltipOptions.defaultValue);
          var textWidth = calcTextWidth(_this3._ctx, text);
          renderText(_this3._ctx, valueColor, labelX, labelY, text);
          labelX += textWidth + textMarginRight;
        }
      });
    }
    /**
     * 是否需要绘制图例
     * @param crosshair
     * @param tooltipOptions
     * @return {boolean|boolean|*}
     * @private
     */

  }, {
    key: "_shouldDrawTooltip",
    value: function _shouldDrawTooltip(crosshair, tooltipOptions) {
      var showRule = tooltipOptions.showRule;
      return showRule === TooltipShowRule.ALWAYS || showRule === TooltipShowRule.FOLLOW_CROSS && !!crosshair.paneId;
    }
  }]);

  return TechnicalIndicatorOverlayView;
}(View);

var TechnicalIndicatorWidget = /*#__PURE__*/function (_Widget) {
  _inherits(TechnicalIndicatorWidget, _Widget);

  var _super = _createSuper(TechnicalIndicatorWidget);

  function TechnicalIndicatorWidget() {
    _classCallCheck(this, TechnicalIndicatorWidget);

    return _super.apply(this, arguments);
  }

  _createClass(TechnicalIndicatorWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new TechnicalIndicatorView(container, props.chartData, props.xAxis, props.yAxis, props.additionalDataProvider);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new TechnicalIndicatorOverlayView(container, props.chartData, props.xAxis, props.yAxis, props.additionalDataProvider);
    }
  }]);

  return TechnicalIndicatorWidget;
}(Widget);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 绘制带边框的圆角填充矩形
 * @param ctx
 * @param fillColor
 * @param borderColor
 * @param borderSize
 * @param x
 * @param y
 * @param width
 * @param height
 * @param borderRadius
 */
function renderStrokeFillRoundRect(ctx, fillColor, borderColor, borderSize, x, y, width, height, borderRadius) {
  renderFillRoundRect(ctx, fillColor, x, y, width, height, borderRadius);
  renderStrokeRoundRect(ctx, borderColor, borderSize, x, y, width, height, borderRadius);
}
/**
 * 绘制填充的矩形
 * @param ctx
 * @param color
 * @param x
 * @param y
 * @param width
 * @param height
 */

function renderFillRect(ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}
/**
 * 绘制圆角空心矩形
 * @param ctx
 * @param borderColor
 * @param borderSize
 * @param x
 * @param y
 * @param w
 * @param h
 * @param r
 */

function renderStrokeRoundRect(ctx, borderColor, borderSize, x, y, w, h, r) {
  ctx.lineWidth = borderSize;
  ctx.strokeStyle = borderColor;
  renderRoundRect(ctx, x, y, w, h, r);
  ctx.stroke();
}
/**
 * 绘制填充圆角矩形
 * @param ctx
 * @param color
 * @param x
 * @param y
 * @param w
 * @param h
 * @param r
 */

function renderFillRoundRect(ctx, color, x, y, w, h, r) {
  ctx.fillStyle = color;
  renderRoundRect(ctx, x, y, w, h, r);
  ctx.fill();
}
/**
 * 绘制圆角矩形
 * @param ctx
 * @param x
 * @param y
 * @param w
 * @param h
 * @param r
 */

function renderRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

var YAxisView = /*#__PURE__*/function (_View) {
  _inherits(YAxisView, _View);

  var _super = _createSuper(YAxisView);

  function YAxisView(container, chartData, yAxis, additionalDataProvider) {
    var _this;

    _classCallCheck(this, YAxisView);

    _this = _super.call(this, container, chartData);
    _this._yAxis = yAxis;
    _this._additionalDataProvider = additionalDataProvider;
    return _this;
  }

  _createClass(YAxisView, [{
    key: "_draw",
    value: function _draw() {
      var yAxisOptions = this._chartData.styleOptions().yAxis;

      if (yAxisOptions.show) {
        this._drawAxisLine(yAxisOptions);

        this._drawTickLines(yAxisOptions);

        this._drawTickLabels(yAxisOptions);

        this._drawTechnicalIndicatorLastValue(yAxisOptions);

        this._drawLastPriceLabel(yAxisOptions);
      }
    }
  }, {
    key: "_drawAxisLine",
    value: function _drawAxisLine(yAxisOptions) {
      var axisLine = yAxisOptions.axisLine;

      if (!axisLine.show) {
        return;
      }

      this._ctx.strokeStyle = axisLine.color;
      this._ctx.lineWidth = axisLine.size;
      var x;

      if (this._yAxis.isFromYAxisZero()) {
        x = 0;
      } else {
        x = this._width - 1;
      }

      renderVerticalLine(this._ctx, x, 0, this._height);
    }
  }, {
    key: "_drawTickLines",
    value: function _drawTickLines(yAxisOptions) {
      var _this2 = this;

      var tickLine = yAxisOptions.tickLine;

      if (!tickLine.show) {
        return;
      }

      this._ctx.lineWidth = tickLine.size;
      this._ctx.strokeStyle = tickLine.color;
      var tickLineLength = tickLine.length;
      var startX;
      var endX;

      if (this._yAxis.isFromYAxisZero()) {
        startX = 0;

        if (yAxisOptions.axisLine.show) {
          startX += yAxisOptions.axisLine.size;
        }

        endX = startX + tickLineLength;
      } else {
        startX = this._width;

        if (yAxisOptions.axisLine.show) {
          startX -= yAxisOptions.axisLine.size;
        }

        endX = startX - tickLineLength;
      }

      this._yAxis.ticks().forEach(function (tick) {
        renderHorizontalLine(_this2._ctx, tick.y, startX, endX);
      });
    }
  }, {
    key: "_drawTickLabels",
    value: function _drawTickLabels(yAxisOptions) {
      var _this3 = this;

      var tickText = yAxisOptions.tickText;

      if (!tickText.show) {
        return;
      }

      var tickLine = yAxisOptions.tickLine;
      var tickLineShow = tickLine.show;
      var tickLineLength = tickLine.length;
      var labelX;

      if (this._yAxis.isFromYAxisZero()) {
        labelX = tickText.paddingLeft;

        if (yAxisOptions.axisLine.show) {
          labelX += yAxisOptions.axisLine.size;
        }

        if (tickLineShow) {
          labelX += tickLineLength;
        }

        this._ctx.textAlign = 'left';
      } else {
        labelX = this._width - tickText.paddingRight;

        if (yAxisOptions.axisLine.show) {
          labelX -= yAxisOptions.axisLine.size;
        }

        if (tickLineShow) {
          labelX -= tickLineLength;
        }

        this._ctx.textAlign = 'right';
      }

      this._ctx.textBaseline = 'middle';
      this._ctx.font = createFont(tickText.size, tickText.weight, tickText.family);
      this._ctx.fillStyle = tickText.color;

      this._yAxis.ticks().forEach(function (tick) {
        _this3._ctx.fillText(tick.v, labelX, tick.y);
      });

      this._ctx.textAlign = 'left';
    }
    /**
     * 绘制技术指标最后值
     * @param yAxisOptions
     * @private
     */

  }, {
    key: "_drawTechnicalIndicatorLastValue",
    value: function _drawTechnicalIndicatorLastValue(yAxisOptions) {
      var _this4 = this;

      var technicalIndicatorOptions = this._chartData.styleOptions().technicalIndicator;

      var lastValueMarkOptions = technicalIndicatorOptions.lastValueMark;

      var technicalIndicators = this._additionalDataProvider.technicalIndicators();

      if (!lastValueMarkOptions.show || !lastValueMarkOptions.text.show) {
        return;
      }

      var dataList = this._chartData.dataList();

      technicalIndicators.forEach(function (technicalIndicator) {
        var technicalIndicatorResult = technicalIndicator.result || [];
        var dataSize = technicalIndicatorResult.length;
        var technicalIndicatorData = technicalIndicatorResult[dataSize - 1] || {};
        var plots = technicalIndicator.plots;
        var cbData = {
          preData: {
            kLineData: dataList[dataSize - 2],
            technicalIndicatorData: technicalIndicatorResult[dataSize - 2]
          },
          currentData: {
            kLineData: dataList[dataSize - 1],
            technicalIndicatorData: technicalIndicatorData
          },
          nextData: {
            kLineData: null,
            technicalIndicatorData: null
          }
        };
        var precision = technicalIndicator.precision;
        var styles = technicalIndicator.styles || technicalIndicatorOptions;
        var colors = styles.line.colors || [];
        var colorSize = colors.length;
        var lineCount = 0;
        plots.forEach(function (plot) {
          var value = technicalIndicatorData[plot.key];
          var backgroundColor;

          switch (plot.type) {
            case TechnicalIndicatorPlotType.CIRCLE:
              {
                backgroundColor = plot.color && plot.color(cbData, styles) || styles.circle.noChangeColor;
                break;
              }

            case TechnicalIndicatorPlotType.BAR:
              {
                backgroundColor = plot.color && plot.color(cbData, styles) || styles.bar.noChangeColor;
                break;
              }

            case TechnicalIndicatorPlotType.LINE:
              {
                backgroundColor = colors[lineCount % colorSize];
                lineCount++;
                break;
              }
          }

          if (isValid(value)) {
            _this4._drawMarkLabel(yAxisOptions, value, precision, technicalIndicator.shouldFormatBigNumber, _objectSpread2(_objectSpread2({}, lastValueMarkOptions.text), {}, {
              backgroundColor: backgroundColor
            }));
          }
        });
      });
    }
    /**
     * 绘制最新价文字
     * @private
     */

  }, {
    key: "_drawLastPriceLabel",
    value: function _drawLastPriceLabel(yAxisOptions) {
      if (!this._yAxis.isCandleYAxis()) {
        return;
      }

      var priceMarkOptions = this._chartData.styleOptions().candle.priceMark;

      var lastPriceMarkOptions = priceMarkOptions.last;

      if (!priceMarkOptions.show || !lastPriceMarkOptions.show || !lastPriceMarkOptions.text.show) {
        return;
      }

      var dataList = this._chartData.dataList();

      var kLineData = dataList[dataList.length - 1];

      if (!kLineData) {
        return;
      }

      var close = kLineData.close;
      var open = kLineData.open;
      var backgroundColor;

      if (close > open) {
        backgroundColor = lastPriceMarkOptions.upColor;
      } else if (close < open) {
        backgroundColor = lastPriceMarkOptions.downColor;
      } else {
        backgroundColor = lastPriceMarkOptions.noChangeColor;
      }

      this._drawMarkLabel(yAxisOptions, close, this._chartData.pricePrecision(), false, _objectSpread2(_objectSpread2({}, lastPriceMarkOptions.text), {}, {
        backgroundColor: backgroundColor
      }));
    }
    /**
     * 绘制标记label
     * @param yAxisOptions
     * @param value
     * @param precision
     * @param shouldFormatBigNumber
     * @param size
     * @param weight
     * @param family
     * @param color
     * @param backgroundColor
     * @param borderRadius
     * @param paddingLeft
     * @param paddingTop
     * @param paddingRight
     * @param paddingBottom
     * @private
     */

  }, {
    key: "_drawMarkLabel",
    value: function _drawMarkLabel(yAxisOptions, value, precision, shouldFormatBigNumber, _ref) {
      var size = _ref.size,
          weight = _ref.weight,
          family = _ref.family,
          color = _ref.color,
          backgroundColor = _ref.backgroundColor,
          borderRadius = _ref.borderRadius,
          paddingLeft = _ref.paddingLeft,
          paddingTop = _ref.paddingTop,
          paddingRight = _ref.paddingRight,
          paddingBottom = _ref.paddingBottom;

      var valueY = this._yAxis.convertToNicePixel(value);

      var text;

      if (this._yAxis.yAxisType() === YAxisType.PERCENTAGE) {
        var fromData = (this._chartData.visibleDataList()[0] || {}).data || {};
        var fromClose = fromData.close;
        text = "".concat(((value - fromClose) / fromClose * 100).toFixed(2), "%");
      } else {
        text = formatPrecision(value, precision);

        if (shouldFormatBigNumber) {
          text = formatBigNumber(text);
        }
      }

      this._ctx.font = createFont(size, weight, family);
      var rectWidth = calcTextWidth(this._ctx, text) + paddingLeft + paddingRight;
      var rectHeight = paddingTop + size + paddingBottom;
      var rectStartX;

      if (this._yAxis.isFromYAxisZero()) {
        rectStartX = 0;
      } else {
        rectStartX = this._width - rectWidth;
      }

      renderFillRoundRect(this._ctx, backgroundColor, rectStartX, valueY - paddingTop - size / 2, rectWidth, rectHeight, borderRadius);
      this._ctx.textBaseline = 'middle';
      renderText(this._ctx, color, rectStartX + paddingLeft, valueY, text);
    }
  }]);

  return YAxisView;
}(View);

var YAxisOverlayView = /*#__PURE__*/function (_View) {
  _inherits(YAxisOverlayView, _View);

  var _super = _createSuper(YAxisOverlayView);

  function YAxisOverlayView(container, chartData, yAxis, additionalDataProvider) {
    var _this;

    _classCallCheck(this, YAxisOverlayView);

    _this = _super.call(this, container, chartData);
    _this._yAxis = yAxis;
    _this._additionalDataProvider = additionalDataProvider;
    return _this;
  }

  _createClass(YAxisOverlayView, [{
    key: "_draw",
    value: function _draw() {
      var _this2 = this;

      this._ctx.textBaseline = 'middle';

      if (this._yAxis.isCandleYAxis()) {
        // 绘制标签
        var tags = this._chartData.tags();

        tags.forEach(function (tag) {
          tag.drawText(_this2._ctx);
        });
      }

      this._drawCrossHairLabel();
    }
  }, {
    key: "_drawCrossHairLabel",
    value: function _drawCrossHairLabel() {
      var crosshair = this._chartData.crosshair();

      if (crosshair.paneId !== this._additionalDataProvider.id() || this._chartData.dataList().length === 0) {
        return;
      }

      var styleOptions = this._chartData.styleOptions();

      var crosshairOptions = styleOptions.crosshair;
      var crosshairHorizontalOptions = crosshairOptions.horizontal;
      var crosshairHorizontalTextOptions = crosshairHorizontalOptions.text;

      if (!crosshairOptions.show || !crosshairHorizontalOptions.show || !crosshairHorizontalTextOptions.show) {
        return;
      }

      var value = this._yAxis.convertFromPixel(crosshair.y);

      var text;

      if (this._yAxis.yAxisType() === YAxisType.PERCENTAGE) {
        var fromData = (this._chartData.visibleDataList()[0] || {}).data || {};
        text = "".concat(((value - fromData.close) / fromData.close * 100).toFixed(2), "%");
      } else {
        var technicalIndicators = this._additionalDataProvider.technicalIndicators();

        var precision = 0;
        var shouldFormatBigNumber = false;

        if (this._yAxis.isCandleYAxis()) {
          precision = this._chartData.pricePrecision();
        } else {
          technicalIndicators.forEach(function (technicalIndicator) {
            precision = Math.max(technicalIndicator.precision, precision);

            if (!shouldFormatBigNumber) {
              shouldFormatBigNumber = technicalIndicator.shouldFormatBigNumber;
            }
          });
        }

        text = formatPrecision(value, precision);

        if (shouldFormatBigNumber) {
          text = formatBigNumber(text);
        }
      }

      var textSize = crosshairHorizontalTextOptions.size;
      this._ctx.font = createFont(textSize, crosshairHorizontalTextOptions.weight, crosshairHorizontalTextOptions.family);
      var yAxisDataLabelWidth = calcTextWidth(this._ctx, text);
      var rectStartX;
      var paddingLeft = crosshairHorizontalTextOptions.paddingLeft;
      var paddingRight = crosshairHorizontalTextOptions.paddingRight;
      var paddingTop = crosshairHorizontalTextOptions.paddingTop;
      var paddingBottom = crosshairHorizontalTextOptions.paddingBottom;
      var borderSize = crosshairHorizontalTextOptions.borderSize;
      var rectWidth = yAxisDataLabelWidth + borderSize * 2 + paddingLeft + paddingRight;
      var rectHeight = textSize + borderSize * 2 + paddingTop + paddingBottom;

      if (this._yAxis.isFromYAxisZero()) {
        rectStartX = 0;
      } else {
        rectStartX = this._width - rectWidth;
      }

      var rectY = crosshair.y - borderSize - paddingTop - textSize / 2; // 绘制y轴文字外的边框

      renderStrokeFillRoundRect(this._ctx, crosshairHorizontalTextOptions.backgroundColor, crosshairHorizontalTextOptions.borderColor, borderSize, rectStartX, rectY, rectWidth, rectHeight, crosshairHorizontalTextOptions.borderRadius);
      renderText(this._ctx, crosshairHorizontalTextOptions.color, rectStartX + borderSize + paddingLeft, crosshair.y, text);
    }
  }]);

  return YAxisOverlayView;
}(View);

var YAxisWidget = /*#__PURE__*/function (_Widget) {
  _inherits(YAxisWidget, _Widget);

  var _super = _createSuper(YAxisWidget);

  function YAxisWidget() {
    _classCallCheck(this, YAxisWidget);

    return _super.apply(this, arguments);
  }

  _createClass(YAxisWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new YAxisView(container, props.chartData, props.yAxis, props.additionalDataProvider);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new YAxisOverlayView(container, props.chartData, props.yAxis, props.additionalDataProvider);
    }
  }]);

  return YAxisWidget;
}(Widget);

var Axis = /*#__PURE__*/function () {
  function Axis(chartData) {
    _classCallCheck(this, Axis);

    this._chartData = chartData;
    this._width = 0;
    this._height = 0;
    this._cacheMinValue = 0;
    this._cacheMaxValue = 0;
    this._minValue = 0;
    this._maxValue = 0;
    this._range = 0;
    this._ticks = [];

    this._initMeasureCanvas();
  }

  _createClass(Axis, [{
    key: "_initMeasureCanvas",
    value: function _initMeasureCanvas() {
      var measureCanvas = document.createElement('canvas');
      var pixelRatio = getPixelRatio(measureCanvas);
      this._measureCtx = measureCanvas.getContext('2d');

      this._measureCtx.scale(pixelRatio, pixelRatio);
    }
  }, {
    key: "min",
    value: function min() {
      return this._minValue;
    }
  }, {
    key: "max",
    value: function max() {
      return this._maxValue;
    }
  }, {
    key: "width",
    value: function width() {
      return this._width;
    }
  }, {
    key: "height",
    value: function height() {
      return this._height;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._width = width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;
    }
    /**
     * 获取ticks
     * @returns {[]|*[]}
     */

  }, {
    key: "ticks",
    value: function ticks() {
      return this._ticks;
    }
    /**
     * 计算轴
     * @param forceCompute
     */

  }, {
    key: "computeAxis",
    value: function computeAxis(forceCompute) {
      var minMax = this._optimalMinMax(this._computeMinMax());

      this._minValue = minMax.min;
      this._maxValue = minMax.max;
      this._range = minMax.range;

      if (this._cacheMinValue !== minMax.min || this._cacheMaxValue !== minMax.max || forceCompute) {
        this._cacheMinValue = minMax.min;
        this._cacheMaxValue = minMax.max;
        this._ticks = this._optimalTicks(this._computeTicks());
        return true;
      }

      return false;
    }
    /**
     * 计算最大最小值
     * @private
     */

  }, {
    key: "_computeMinMax",
    value: function _computeMinMax() {}
    /**
     * 优化最大最小值
     * @param min
     * @param max
     * @param precision
     * @private
     */

  }, {
    key: "_optimalMinMax",
    value: function _optimalMinMax(_ref) {
      _ref.min;
          _ref.max;
          _ref.precision;
    }
    /**
     * 计算轴上的tick值
     */

  }, {
    key: "_computeTicks",
    value: function _computeTicks() {
      var ticks = [];

      if (this._range >= 0) {
        var intervalPrecision = this._computeInterval(this._range);

        var interval = intervalPrecision.interval;
        var precision = intervalPrecision.precision;
        var first = round(Math.ceil(this._minValue / interval) * interval, precision);
        var last = round(Math.floor(this._maxValue / interval) * interval, precision);
        var n = 0;
        var f = first;

        if (interval !== 0) {
          while (f <= last) {
            ticks[n] = {
              v: f.toFixed(precision)
            };
            ++n;
            f += interval;
          }
        }
      }

      return ticks;
    }
    /**
     * 计算最佳的tick
     * @param ticks
     */

  }, {
    key: "_optimalTicks",
    value: function _optimalTicks(ticks) {}
    /**
     * 计算间隔
     * @private
     */

  }, {
    key: "_computeInterval",
    value: function _computeInterval(range) {
      var interval = nice(range / 8.0);
      var precision = getPrecision(interval);
      return {
        interval: interval,
        precision: precision
      };
    }
  }]);

  return Axis;
}();

var YAxis = /*#__PURE__*/function (_Axis) {
  _inherits(YAxis, _Axis);

  var _super = _createSuper(YAxis);

  function YAxis(chartData, isCandleYAxis, additionalDataProvider) {
    var _this;

    _classCallCheck(this, YAxis);

    _this = _super.call(this, chartData);
    _this._realRange = 0;
    _this._isCandleYAxis = isCandleYAxis;
    _this._additionalDataProvider = additionalDataProvider;
    return _this;
  }

  _createClass(YAxis, [{
    key: "_computeMinMax",
    value: function _computeMinMax() {
      var _this2 = this;

      var minMaxArray = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      var plotsResult = [];
      var shouldOhlc = false;
      var minValue = Number.MAX_SAFE_INTEGER;
      var maxValue = Number.MIN_SAFE_INTEGER;
      var technicalIndicatorPrecision = Number.MAX_SAFE_INTEGER;

      var technicalIndicators = this._additionalDataProvider.technicalIndicators();

      technicalIndicators.forEach(function (tech) {
        if (!shouldOhlc) {
          shouldOhlc = tech.shouldOhlc;
        }

        technicalIndicatorPrecision = Math.min(technicalIndicatorPrecision, tech.precision);

        if (isNumber(tech.minValue)) {
          minValue = Math.min(minValue, tech.minValue);
        }

        if (isNumber(tech.maxValue)) {
          maxValue = Math.max(maxValue, tech.maxValue);
        }

        plotsResult.push({
          plots: tech.plots,
          result: tech.result
        });
      });
      var precision = 4;

      if (this._isCandleYAxis) {
        var pricePrecision = this._chartData.pricePrecision();

        if (technicalIndicatorPrecision !== Number.MAX_SAFE_INTEGER) {
          precision = Math.min(technicalIndicatorPrecision, pricePrecision);
        } else {
          precision = pricePrecision;
        }
      } else {
        if (technicalIndicatorPrecision !== Number.MAX_SAFE_INTEGER) {
          precision = technicalIndicatorPrecision;
        }
      }

      var visibleDataList = this._chartData.visibleDataList();

      var candleOptions = this._chartData.styleOptions().candle;

      var isArea = candleOptions.type === CandleType.AREA;
      var areaValueKey = candleOptions.area.value;
      var shouldCompareHighLow = this._isCandleYAxis && !isArea || !this._isCandleYAxis && shouldOhlc;
      visibleDataList.forEach(function (_ref) {
        var index = _ref.index,
            data = _ref.data;

        if (shouldCompareHighLow) {
          minMaxArray[0] = Math.min(minMaxArray[0], data.low);
          minMaxArray[1] = Math.max(minMaxArray[1], data.high);
        }

        if (_this2._isCandleYAxis && isArea) {
          minMaxArray[0] = Math.min(minMaxArray[0], data[areaValueKey]);
          minMaxArray[1] = Math.max(minMaxArray[1], data[areaValueKey]);
        }

        plotsResult.forEach(function (_ref2) {
          var plots = _ref2.plots,
              result = _ref2.result;
          var technicalIndicatorData = result[index] || {};
          plots.forEach(function (plot) {
            var value = technicalIndicatorData[plot.key];

            if (isValid(value)) {
              minMaxArray[0] = Math.min(minMaxArray[0], value);
              minMaxArray[1] = Math.max(minMaxArray[1], value);
            }
          });
        });
      });

      if (minMaxArray[0] !== Number.MAX_SAFE_INTEGER && minMaxArray[1] !== Number.MIN_SAFE_INTEGER) {
        minMaxArray[0] = Math.min(minValue, minMaxArray[0]);
        minMaxArray[1] = Math.max(maxValue, minMaxArray[1]);
      } else {
        minMaxArray[0] = 0;
        minMaxArray[1] = 10;
      }

      return {
        min: minMaxArray[0],
        max: minMaxArray[1],
        precision: precision,
        specifyMin: minValue,
        specifyMax: maxValue
      };
    }
  }, {
    key: "_optimalMinMax",
    value: function _optimalMinMax(_ref3) {
      var min = _ref3.min,
          max = _ref3.max,
          precision = _ref3.precision,
          specifyMin = _ref3.specifyMin,
          specifyMax = _ref3.specifyMax;
      var minValue = min;
      var maxValue = max;
      var yAxisType = this.yAxisType();
      var dif;

      switch (yAxisType) {
        case YAxisType.PERCENTAGE:
          {
            var fromData = (this._chartData.visibleDataList()[0] || {}).data || {};

            if (isNumber(fromData.close)) {
              minValue = (minValue - fromData.close) / fromData.close * 100;
              maxValue = (maxValue - fromData.close) / fromData.close * 100;
            }

            dif = Math.pow(10, -2);
            break;
          }

        case YAxisType.LOG:
          {
            minValue = log10(minValue);
            maxValue = log10(maxValue);
            dif = 0.05 * index10(-precision);
            break;
          }

        default:
          {
            dif = index10(-precision);
          }
      }

      if (minValue === maxValue || Math.abs(minValue - maxValue) < dif) {
        var minCheck = specifyMin === minValue;
        var maxCheck = specifyMax === maxValue;
        minValue = minCheck ? minValue : maxCheck ? minValue - 8 * dif : minValue - 4 * dif;
        maxValue = maxCheck ? maxValue : minCheck ? maxValue + 8 * dif : maxValue + 4 * dif;
      }

      var marginOptions;

      if (this._isCandleYAxis) {
        marginOptions = this._chartData.styleOptions().candle.margin;
      } else {
        marginOptions = this._chartData.styleOptions().technicalIndicator.margin;
      }

      var topRate;
      var bottomRate;

      if (marginOptions.top > 1) {
        topRate = marginOptions.top / this._height;
      } else {
        topRate = isNumber(marginOptions.top) ? marginOptions.top : 0.2;
      }

      if (marginOptions.bottom > 1) {
        bottomRate = marginOptions.bottom / this._height;
      } else {
        bottomRate = isNumber(marginOptions.bottom) ? marginOptions.bottom : 0.1;
      }

      var range = Math.abs(maxValue - minValue); // 保证每次图形绘制上下都留间隙

      minValue = minValue - range * bottomRate;
      maxValue = maxValue + range * topRate;
      range = Math.abs(maxValue - minValue);

      if (yAxisType === YAxisType.LOG) {
        this._realRange = Math.abs(index10(maxValue) - index10(minValue));
      } else {
        this._realRange = range;
      }

      return {
        min: minValue,
        max: maxValue,
        range: range
      };
    }
  }, {
    key: "_optimalTicks",
    value: function _optimalTicks(ticks) {
      var _this3 = this;

      var optimalTicks = [];
      var yAxisType = this.yAxisType();

      var technicalIndicators = this._additionalDataProvider.technicalIndicators();

      var precision = 0;
      var shouldFormatBigNumber = false;

      if (this._isCandleYAxis) {
        precision = this._chartData.pricePrecision();
      } else {
        technicalIndicators.forEach(function (technicalIndicator) {
          precision = Math.max(precision, technicalIndicator.precision);

          if (!shouldFormatBigNumber) {
            shouldFormatBigNumber = technicalIndicator.shouldFormatBigNumber;
          }
        });
      }

      var textHeight = this._chartData.styleOptions().xAxis.tickText.size;

      var intervalPrecision;

      if (yAxisType === YAxisType.LOG) {
        intervalPrecision = this._computeInterval(this._realRange);
      }

      var validY;
      ticks.forEach(function (_ref4) {
        var v = _ref4.v;
        var value;

        var y = _this3._innerConvertToPixel(+v);

        switch (yAxisType) {
          case YAxisType.PERCENTAGE:
            {
              value = "".concat(formatPrecision(v, 2), "%");
              break;
            }

          case YAxisType.LOG:
            {
              value = round(index10(v), intervalPrecision.precision);
              y = _this3._innerConvertToPixel(log10(value));
              value = formatPrecision(value, precision);
              break;
            }

          default:
            {
              value = formatPrecision(v, precision);

              if (shouldFormatBigNumber) {
                value = formatBigNumber(value);
              }

              break;
            }
        }

        if (y > textHeight && y < _this3._height - textHeight && (validY && validY - y > textHeight * 2 || !validY)) {
          optimalTicks.push({
            v: value,
            y: y
          });
          validY = y;
        }
      });
      return optimalTicks;
    }
    /**
     * 内部值转换成坐标
     * @param value
     * @return {number}
     * @private
     */

  }, {
    key: "_innerConvertToPixel",
    value: function _innerConvertToPixel(value) {
      return Math.round((1.0 - (value - this._minValue) / this._range) * this._height);
    }
    /**
     * 是否是蜡烛图轴
     * @return {*}
     */

  }, {
    key: "isCandleYAxis",
    value: function isCandleYAxis() {
      return this._isCandleYAxis;
    }
    /**
     * y轴类型
     * @return {string|*}
     */

  }, {
    key: "yAxisType",
    value: function yAxisType() {
      if (this._isCandleYAxis) {
        return this._chartData.styleOptions().yAxis.type;
      }

      return YAxisType.NORMAL;
    }
    /**
     * 是否从y轴0开始
     * @return {boolean|*|boolean}
     */

  }, {
    key: "isFromYAxisZero",
    value: function isFromYAxisZero() {
      var yAxisOptions = this._chartData.styleOptions().yAxis;

      return yAxisOptions.position === YAxisPosition.LEFT && yAxisOptions.inside || yAxisOptions.position === YAxisPosition.RIGHT && !yAxisOptions.inside;
    }
    /**
     * 获取自身宽度
     * @return {number}
     */

  }, {
    key: "getSelfWidth",
    value: function getSelfWidth() {
      var _this4 = this;

      var styleOptions = this._chartData.styleOptions();

      var yAxisOptions = styleOptions.yAxis;
      var width = yAxisOptions.width;

      if (isNumber(width)) {
        return width;
      }

      var yAxisWidth = 0;

      if (yAxisOptions.show) {
        if (yAxisOptions.axisLine.show) {
          yAxisWidth += yAxisOptions.axisLine.size;
        }

        if (yAxisOptions.tickLine.show) {
          yAxisWidth += yAxisOptions.tickLine.length;
        }

        if (yAxisOptions.tickText.show) {
          var textWidth = 0;
          this._measureCtx.font = createFont(yAxisOptions.tickText.size, yAxisOptions.tickText.weight, yAxisOptions.tickText.family);

          this._ticks.forEach(function (tick) {
            textWidth = Math.max(textWidth, calcTextWidth(_this4._measureCtx, tick.v));
          });

          yAxisWidth += yAxisOptions.tickText.paddingLeft + yAxisOptions.tickText.paddingRight + textWidth;
        }
      }

      var crosshairOptions = styleOptions.crosshair;
      var crosshairVerticalTextWidth = 0;

      if (crosshairOptions.show && crosshairOptions.horizontal.show && crosshairOptions.horizontal.text.show) {
        var technicalIndicators = this._additionalDataProvider.technicalIndicators();

        var technicalIndicatorPrecision = 0;
        var shouldFormatBigNumber = false;
        technicalIndicators.forEach(function (technicalIndicator) {
          technicalIndicatorPrecision = Math.max(technicalIndicator.precision, technicalIndicatorPrecision);

          if (!shouldFormatBigNumber) {
            shouldFormatBigNumber = technicalIndicator.shouldFormatBigNumber;
          }
        });
        this._measureCtx.font = createFont(crosshairOptions.horizontal.text.size, crosshairOptions.horizontal.text.weight, crosshairOptions.horizontal.text.family);
        var precision = 2;

        if (this.yAxisType() !== YAxisType.PERCENTAGE) {
          if (this._isCandleYAxis) {
            var pricePrecision = this._chartData.pricePrecision();

            var lastValueMarkOptions = styleOptions.technicalIndicator.lastValueMark;

            if (lastValueMarkOptions.show && lastValueMarkOptions.text.show) {
              precision = Math.max(technicalIndicatorPrecision, pricePrecision);
            } else {
              precision = pricePrecision;
            }
          } else {
            precision = technicalIndicatorPrecision;
          }
        }

        var valueText = formatPrecision(this._maxValue, precision);

        if (shouldFormatBigNumber) {
          valueText = formatBigNumber(valueText);
        }

        crosshairVerticalTextWidth += crosshairOptions.horizontal.text.paddingLeft + crosshairOptions.horizontal.text.paddingRight + crosshairOptions.horizontal.text.borderSize * 2 + calcTextWidth(this._measureCtx, valueText);
      }

      return Math.max(yAxisWidth, crosshairVerticalTextWidth);
    }
  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(pixel) {
      var value = (1.0 - pixel / this._height) * this._range + this._minValue;

      switch (this.yAxisType()) {
        case YAxisType.PERCENTAGE:
          {
            var fromData = (this._chartData.visibleDataList()[0] || {}).data || {};

            if (isNumber(fromData.close)) {
              return fromData.close * value / 100 + fromData.close;
            }

            break;
          }

        case YAxisType.LOG:
          {
            return index10(value);
          }

        default:
          {
            return value;
          }
      }
    }
  }, {
    key: "convertToPixel",
    value: function convertToPixel(value) {
      var v;

      switch (this.yAxisType()) {
        case YAxisType.PERCENTAGE:
          {
            var fromData = (this._chartData.visibleDataList()[0] || {}).data || {};

            if (isNumber(fromData.close)) {
              v = (value - fromData.close) / fromData.close * 100;
            }

            break;
          }

        case YAxisType.LOG:
          {
            v = log10(value);
            break;
          }

        default:
          {
            v = value;
          }
      }

      return this._innerConvertToPixel(v);
    }
    /**
     * 将值转换成坐标，即使坐标不在范围内，也会显示在顶部或者底部
     * @param value
     * @return {number}
     */

  }, {
    key: "convertToNicePixel",
    value: function convertToNicePixel(value) {
      var y = this.convertToPixel(value);
      return Math.round(Math.max(this._height * 0.05, Math.min(y, this._height * 0.98)));
    }
  }]);

  return YAxis;
}(Axis);

var TechnicalIndicatorPane = /*#__PURE__*/function (_Pane) {
  _inherits(TechnicalIndicatorPane, _Pane);

  var _super = _createSuper(TechnicalIndicatorPane);

  function TechnicalIndicatorPane(props) {
    var _this;

    _classCallCheck(this, TechnicalIndicatorPane);

    _this = _super.call(this, props);
    _this._techs = new Map();

    if ('height' in props) {
      _this.setHeight(props.height);
    }

    _this.setTechnicalIndicator(_this._chartData.getTechnicalIndicatorInstance(props.name));

    return _this;
  }

  _createClass(TechnicalIndicatorPane, [{
    key: "_initBefore",
    value: function _initBefore(props) {
      this._id = props.id;
      this._yAxis = this._createYAxis(props);
    }
  }, {
    key: "_createYAxis",
    value: function _createYAxis(props) {
      return new YAxis(props.chartData, false, {
        technicalIndicators: this.technicalIndicators.bind(this)
      });
    }
  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {
      return new TechnicalIndicatorWidget({
        container: container,
        chartData: props.chartData,
        xAxis: props.xAxis,
        yAxis: this._yAxis,
        additionalDataProvider: {
          technicalIndicators: this.technicalIndicators.bind(this),
          id: this.id.bind(this)
        }
      });
    }
  }, {
    key: "_createYAxisWidget",
    value: function _createYAxisWidget(container, props) {
      return new YAxisWidget({
        container: container,
        chartData: props.chartData,
        yAxis: this._yAxis,
        additionalDataProvider: {
          technicalIndicators: this.technicalIndicators.bind(this),
          id: this.id.bind(this)
        }
      });
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      _get(_getPrototypeOf(TechnicalIndicatorPane.prototype), "setHeight", this).call(this, height);

      this._yAxis.setHeight(height);
    }
  }, {
    key: "setWidth",
    value: function setWidth(mainWidgetWidth, yAxisWidgetWidth) {
      _get(_getPrototypeOf(TechnicalIndicatorPane.prototype), "setWidth", this).call(this, mainWidgetWidth, yAxisWidgetWidth);

      this._yAxis.setWidth(yAxisWidgetWidth);
    }
    /**
     * 获取id
     * @returns {string}
     */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "yAxis",
    value: function yAxis() {
      return this._yAxis;
    }
    /**
     * 获取技术指标
     * @return {Map<any, any>}
     */

  }, {
    key: "technicalIndicators",
    value: function technicalIndicators() {
      return this._techs;
    }
    /**
     * 是否无指标
     * @return {boolean}
     */

  }, {
    key: "isEmptyTechnicalIndicator",
    value: function isEmptyTechnicalIndicator() {
      return this._techs.size === 0;
    }
    /**
     * 移除技术指标
     * @param name
     * @return {boolean}
     */

  }, {
    key: "removeTechnicalIndicator",
    value: function removeTechnicalIndicator(name) {
      if (name) {
        if (this._techs.has(name)) {
          this._techs.delete(name);

          return true;
        }
      } else {
        this._techs.clear();

        return true;
      }

      return false;
    }
    /**
     * 设置技术指标类型
     * @param technicalIndicator
     * @param isStack
     */

  }, {
    key: "setTechnicalIndicator",
    value: function setTechnicalIndicator(technicalIndicator, isStack) {
      if (technicalIndicator) {
        if (this._techs.has(technicalIndicator.name)) {
          return false;
        }

        var cloneInstance = Object.create(technicalIndicator);

        if (isStack) {
          this._techs.set(cloneInstance.name, cloneInstance);
        } else {
          this._techs = new Map([[cloneInstance.name, cloneInstance]]);
        }

        this.calcTechnicalIndicator(cloneInstance);
        return true;
      }

      return false;
    }
    /**
     * 计算单个技术指标
     * @param technicalIndicator
     */

  }, {
    key: "calcTechnicalIndicator",
    value: function calcTechnicalIndicator(technicalIndicator) {
      technicalIndicator.result = technicalIndicator.calcTechnicalIndicator(this._chartData.dataList(), technicalIndicator.calcParams, technicalIndicator.plots) || [];
    }
    /**
     * 计算所有技术指标
     */

  }, {
    key: "calcAllTechnicalIndicator",
    value: function calcAllTechnicalIndicator() {
      var _this2 = this;

      this._techs.forEach(function (technicalIndicator) {
        _this2.calcTechnicalIndicator(technicalIndicator);
      });

      return this._yAxis.computeAxis();
    }
  }]);

  return TechnicalIndicatorPane;
}(Pane);

var CandleView = /*#__PURE__*/function (_TechnicalIndicatorVi) {
  _inherits(CandleView, _TechnicalIndicatorVi);

  var _super = _createSuper(CandleView);

  function CandleView() {
    _classCallCheck(this, CandleView);

    return _super.apply(this, arguments);
  }

  _createClass(CandleView, [{
    key: "_draw",
    value: function _draw() {
      this._drawGrid();

      var candleOptions = this._chartData.styleOptions().candle;

      if (candleOptions.type === CandleType.AREA) {
        this._drawArea(candleOptions);
      } else {
        this._drawCandle(candleOptions);

        this._drawLowHighPrice(candleOptions.priceMark, 'high', 'high', Number.MIN_SAFE_INTEGER, [-2, -5], function (price, comparePrice) {
          if (price > comparePrice) {
            return price;
          }
        });

        this._drawLowHighPrice(candleOptions.priceMark, 'low', 'low', Number.MAX_SAFE_INTEGER, [2, 5], function (price, comparePrice) {
          if (price < comparePrice) {
            return price;
          }
        });
      }

      this._drawTechnicalIndicators();

      this._drawLastPriceLine(candleOptions.priceMark);
    }
    /**
     * 绘制面积图
     * @param candleOptions
     * @private
     */

  }, {
    key: "_drawArea",
    value: function _drawArea(candleOptions) {
      var _this = this;

      var linePoints = [];
      var areaPoints = [];
      var minY = Number.MAX_SAFE_INTEGER;
      var areaOptions = candleOptions.area;

      var onDrawing = function onDrawing(x, i, kLineData, halfBarSpace, barSpace, n) {
        var value = kLineData[areaOptions.value];

        if (isNumber(value)) {
          var y = _this._yAxis.convertToPixel(value);

          if (n === 0) {
            var startX = x - halfBarSpace;
            areaPoints.push({
              x: startX,
              y: _this._height
            });
            areaPoints.push({
              x: startX,
              y: y
            });
            linePoints.push({
              x: startX,
              y: y
            });
          }

          linePoints.push({
            x: x,
            y: y
          });
          areaPoints.push({
            x: x,
            y: y
          });
          minY = Math.min(minY, y);
        }
      };

      var onDrawEnd = function onDrawEnd() {
        var areaPointLength = areaPoints.length;

        if (areaPointLength > 0) {
          var lastPoint = areaPoints[areaPointLength - 1];
          var halfBarSpace = _this._chartData.barSpace() / 2;
          var endX = lastPoint.x + halfBarSpace;
          linePoints.push({
            x: endX,
            y: lastPoint.y
          });
          areaPoints.push({
            x: endX,
            y: lastPoint.y
          });
          areaPoints.push({
            x: endX,
            y: _this._height
          });
        }

        if (linePoints.length > 0) {
          // 绘制分时线
          _this._ctx.lineWidth = areaOptions.lineSize;
          _this._ctx.strokeStyle = areaOptions.lineColor;
          renderLine(_this._ctx, function () {
            _this._ctx.beginPath();

            _this._ctx.moveTo(linePoints[0].x, linePoints[0].y);

            for (var i = 1; i < linePoints.length; i++) {
              _this._ctx.lineTo(linePoints[i].x, linePoints[i].y);
            }

            _this._ctx.stroke();

            _this._ctx.closePath();
          });
        }

        if (areaPoints.length > 0) {
          // 绘制分时线填充区域
          var fillColor = areaOptions.fillColor;

          if (isArray(fillColor)) {
            var gradient = _this._ctx.createLinearGradient(0, _this._height, 0, minY);

            try {
              fillColor.forEach(function (_ref) {
                var offset = _ref.offset,
                    color = _ref.color;
                gradient.addColorStop(offset, color);
              });
            } catch (e) {}

            _this._ctx.fillStyle = gradient;
          } else {
            _this._ctx.fillStyle = fillColor;
          }

          _this._ctx.beginPath();

          _this._ctx.moveTo(areaPoints[0].x, areaPoints[0].y);

          for (var i = 1; i < areaPoints.length; i++) {
            _this._ctx.lineTo(areaPoints[i].x, areaPoints[i].y);
          }

          _this._ctx.closePath();

          _this._ctx.fill();
        }
      };

      this._drawGraphics(onDrawing, onDrawEnd);
    }
    /**
     * 绘制蜡烛
     * @param candleOptions
     * @private
     */

  }, {
    key: "_drawCandle",
    value: function _drawCandle(candleOptions) {
      var _this2 = this;

      this._drawGraphics(function (x, i, kLineData, halfBarSpace, barSpace) {
        _this2._drawCandleBar(x, halfBarSpace, barSpace, i, kLineData, candleOptions.bar, candleOptions.type);
      });
    }
    /**
     * 渲染最高最低价格
     * @param priceMarkOptions
     * @param optionKey
     * @param priceKey
     * @param initPriceValue
     * @param offsets
     * @param compare
     * @private
     */

  }, {
    key: "_drawLowHighPrice",
    value: function _drawLowHighPrice(priceMarkOptions, optionKey, priceKey, initPriceValue, offsets, compare) {
      var _this3 = this;

      var lowHighPriceMarkOptions = priceMarkOptions[optionKey];

      if (!priceMarkOptions.show || !lowHighPriceMarkOptions.show) {
        return;
      }

      var visibleDataList = this._chartData.visibleDataList();

      var price = initPriceValue;
      var pos = -1;
      visibleDataList.forEach(function (_ref2) {
        var index = _ref2.index,
            data = _ref2.data;
        var comparePrice = compare(formatValue(data, priceKey, initPriceValue), price);

        if (comparePrice) {
          price = comparePrice;
          pos = index;
        }
      });

      var pricePrecision = this._chartData.pricePrecision();

      var priceY = this._yAxis.convertToPixel(price);

      var startX = this._xAxis.convertToPixel(pos);

      var startY = priceY + offsets[0];
      this._ctx.textAlign = 'left';
      this._ctx.lineWidth = 1;
      this._ctx.strokeStyle = lowHighPriceMarkOptions.color;
      this._ctx.fillStyle = lowHighPriceMarkOptions.color;
      renderLine(this._ctx, function () {
        _this3._ctx.beginPath();

        _this3._ctx.moveTo(startX - 2, startY + offsets[0]);

        _this3._ctx.lineTo(startX, startY);

        _this3._ctx.lineTo(startX + 2, startY + offsets[0]);

        _this3._ctx.stroke();

        _this3._ctx.closePath();
      }); // 绘制竖线

      var y = startY + offsets[1];
      renderLine(this._ctx, function () {
        _this3._ctx.beginPath();

        _this3._ctx.moveTo(startX, startY);

        _this3._ctx.lineTo(startX, y);

        _this3._ctx.lineTo(startX + 5, y);

        _this3._ctx.stroke();

        _this3._ctx.closePath();
      });
      this._ctx.font = createFont(lowHighPriceMarkOptions.textSize, lowHighPriceMarkOptions.textWeight, lowHighPriceMarkOptions.textFamily);
      var text = formatPrecision(price, pricePrecision);
      this._ctx.textBaseline = 'middle';

      this._ctx.fillText(text, startX + 5 + lowHighPriceMarkOptions.textMargin, y);
    }
    /**
     * 绘制最新价线
     * @param priceMarkOptions
     * @private
     */

  }, {
    key: "_drawLastPriceLine",
    value: function _drawLastPriceLine(priceMarkOptions) {
      var lastPriceMarkOptions = priceMarkOptions.last;

      if (!priceMarkOptions.show || !lastPriceMarkOptions.show || !lastPriceMarkOptions.line.show) {
        return;
      }

      var dataList = this._chartData.dataList();

      var kLineData = dataList[dataList.length - 1];

      if (!kLineData) {
        return;
      }

      var close = kLineData.close;
      var open = kLineData.open;

      var priceY = this._yAxis.convertToNicePixel(close);

      var color;

      if (close > open) {
        color = lastPriceMarkOptions.upColor;
      } else if (close < open) {
        color = lastPriceMarkOptions.downColor;
      } else {
        color = lastPriceMarkOptions.noChangeColor;
      }

      this._ctx.save();

      this._ctx.strokeStyle = color;
      this._ctx.lineWidth = lastPriceMarkOptions.line.size;

      if (lastPriceMarkOptions.line.style === LineStyle.DASH) {
        this._ctx.setLineDash(lastPriceMarkOptions.line.dashValue);
      }

      renderHorizontalLine(this._ctx, priceY, 0, this._width);

      this._ctx.restore();
    }
  }]);

  return CandleView;
}(TechnicalIndicatorView);

var CandleOverlayView = /*#__PURE__*/function (_TechnicalIndicatorOv) {
  _inherits(CandleOverlayView, _TechnicalIndicatorOv);

  var _super = _createSuper(CandleOverlayView);

  function CandleOverlayView() {
    _classCallCheck(this, CandleOverlayView);

    return _super.apply(this, arguments);
  }

  _createClass(CandleOverlayView, [{
    key: "_drawCover",
    value: function _drawCover() {
      var _this = this;

      this._ctx.textBaseline = 'alphabetic'; // 绘制标签

      var tags = this._chartData.tags();

      tags.forEach(function (tag) {
        tag.drawMarkLine(_this._ctx);
      }); // 绘制图形标记

      var graphicMarks = this._chartData.graphicMarks();

      graphicMarks.forEach(function (graphicMark) {
        graphicMark.draw(_this._ctx);
      }); // 绘制注解

      var annotations = this._chartData.visibleAnnotations();

      annotations.forEach(function (annotation) {
        annotation.draw(_this._ctx);
      });
    }
  }, {
    key: "_drawTooltip",
    value: function _drawTooltip(crosshair, technicalIndicators) {
      var styleOptions = this._chartData.styleOptions();

      var candleOptions = styleOptions.candle;
      var candleTooltipOptions = candleOptions.tooltip;
      var technicalIndicatorOptions = styleOptions.technicalIndicator;
      var technicalIndicatorTooltipOptions = technicalIndicatorOptions.tooltip;

      var isDrawCandleTooltip = this._shouldDrawTooltip(crosshair, candleTooltipOptions);

      var isDrawTechnicalIndicatorTooltip = this._shouldDrawTooltip(crosshair, technicalIndicatorTooltipOptions);

      if (candleTooltipOptions.showType === TooltipShowType.RECT && technicalIndicatorTooltipOptions.showType === TooltipShowType.RECT) {
        this._drawCandleTooltipWithRect(crosshair, technicalIndicators, candleOptions, isDrawCandleTooltip, technicalIndicatorOptions, isDrawTechnicalIndicatorTooltip);
      } else {
        if (candleTooltipOptions.showType === TooltipShowType.STANDARD) {
          this._drawCandleTooltipWithStandard(crosshair.kLineData, candleOptions, isDrawCandleTooltip);

          if (technicalIndicatorTooltipOptions.showType === TooltipShowType.STANDARD) {
            var offsetTop = isDrawCandleTooltip ? candleTooltipOptions.text.size + candleTooltipOptions.text.marginTop : 0;

            this._drawBatchTechnicalIndicatorToolTip(crosshair, technicalIndicators, technicalIndicatorOptions, offsetTop, isDrawTechnicalIndicatorTooltip);
          } else {
            this._drawCandleTooltipWithRect(crosshair, technicalIndicators, candleOptions, false, technicalIndicatorOptions, isDrawTechnicalIndicatorTooltip);
          }
        } else {
          this._drawCandleTooltipWithRect(crosshair, technicalIndicators, candleOptions, isDrawCandleTooltip, technicalIndicatorOptions, false);

          this._drawBatchTechnicalIndicatorToolTip(crosshair, technicalIndicators, technicalIndicatorOptions, 0, isDrawTechnicalIndicatorTooltip);
        }
      }
    }
    /**
     * 绘制蜡烛默认的图例
     * @param kLineData
     * @param candleOptions
     * @param isDrawCandleTooltip
     * @private
     */

  }, {
    key: "_drawCandleTooltipWithStandard",
    value: function _drawCandleTooltipWithStandard(kLineData, candleOptions, isDrawCandleTooltip) {
      var _this2 = this;

      if (!isDrawCandleTooltip) {
        return;
      }

      var values = this._getCandleTooltipData(kLineData, candleOptions);

      var candleTooltipOptions = candleOptions.tooltip;
      var textMarginLeft = candleTooltipOptions.text.marginLeft;
      var textMarginRight = candleTooltipOptions.text.marginRight;
      var textSize = candleTooltipOptions.text.size;
      var textColor = candleTooltipOptions.text.color;
      var labels = candleTooltipOptions.labels;
      this._ctx.textBaseline = 'top';
      this._ctx.font = createFont(textSize, candleTooltipOptions.text.weight, candleTooltipOptions.text.family);
      var labelX = textMarginLeft;
      var labelY = candleTooltipOptions.text.marginTop;
      labels.forEach(function (label, i) {
        var labelWidth = calcTextWidth(_this2._ctx, label);
        renderText(_this2._ctx, textColor, labelX, labelY, label);
        labelX += labelWidth;
        var value = values[i] || candleTooltipOptions.defaultValue;
        var valueText;
        var valueColor;

        if (isObject(value)) {
          valueText = value.value || candleTooltipOptions.defaultValue;
          valueColor = value.color || textColor;
        } else {
          valueColor = textColor;
          valueText = value;
        }

        var textWidth = calcTextWidth(_this2._ctx, valueText);
        renderText(_this2._ctx, valueColor, labelX, labelY, valueText);
        labelX += textWidth + textMarginLeft + textMarginRight;
      });
    }
    /**
     * 绘制蜡烛图矩形类型图例
     * @param crosshair
     * @param technicalIndicators
     * @param candleOptions
     * @param isDrawCandleTooltip
     * @param technicalIndicatorOptions
     * @param isDrawTechnicalIndicatorTooltip
     * @private
     */

  }, {
    key: "_drawCandleTooltipWithRect",
    value: function _drawCandleTooltipWithRect(crosshair, technicalIndicators, candleOptions, isDrawCandleTooltip, technicalIndicatorOptions, isDrawTechnicalIndicatorTooltip) {
      var _this3 = this;

      if (!isDrawCandleTooltip && !isDrawTechnicalIndicatorTooltip) {
        return;
      }

      var candleTooltipOptions = candleOptions.tooltip;
      var baseLabels = candleTooltipOptions.labels;

      var baseValues = this._getCandleTooltipData(crosshair.kLineData, candleOptions);

      var baseTextMarginLeft = candleTooltipOptions.text.marginLeft;
      var baseTextMarginRight = candleTooltipOptions.text.marginRight;
      var baseTextMarginTop = candleTooltipOptions.text.marginTop;
      var baseTextMarginBottom = candleTooltipOptions.text.marginBottom;
      var baseTextSize = candleTooltipOptions.text.size;
      var baseTextColor = candleTooltipOptions.text.color;
      var rectOptions = candleTooltipOptions.rect;
      var rectBorderSize = rectOptions.borderSize;
      var rectPaddingLeft = rectOptions.paddingLeft;
      var rectPaddingRight = rectOptions.paddingRight;
      var rectPaddingTop = rectOptions.paddingTop;
      var rectPaddingBottom = rectOptions.paddingBottom;
      var rectLeft = rectOptions.offsetLeft;
      var rectRight = rectOptions.offsetRight;
      var maxLabelWidth = 0;
      var rectWidth = 0;
      var rectHeight = 0;

      this._ctx.save();

      this._ctx.textBaseline = 'top';

      if (isDrawCandleTooltip) {
        this._ctx.font = createFont(baseTextSize, candleTooltipOptions.text.weight, candleTooltipOptions.text.family);
        baseLabels.forEach(function (label, i) {
          var value = baseValues[i];
          var v;

          if (isObject(value)) {
            v = value.value || candleTooltipOptions.defaultValue;
          } else {
            v = value;
          }

          var text = "".concat(label).concat(v);
          var labelWidth = calcTextWidth(_this3._ctx, text) + baseTextMarginLeft + baseTextMarginRight;
          maxLabelWidth = Math.max(maxLabelWidth, labelWidth);
        });
        rectHeight += (baseTextMarginBottom + baseTextMarginTop + baseTextSize) * baseLabels.length;
      }

      var technicalIndicatorTooltipOptions = technicalIndicatorOptions.tooltip;
      var indicatorTextMarginLeft = technicalIndicatorTooltipOptions.text.marginLeft;
      var indicatorTextMarginRight = technicalIndicatorTooltipOptions.text.marginRight;
      var indicatorTextMarginTop = technicalIndicatorTooltipOptions.text.marginTop;
      var indicatorTextMarginBottom = technicalIndicatorTooltipOptions.text.marginBottom;
      var indicatorTextSize = technicalIndicatorTooltipOptions.text.size;
      var indicatorTooltipDataList = [];

      var dataList = this._chartData.dataList();

      technicalIndicators.forEach(function (tech) {
        var result = tech.result;
        indicatorTooltipDataList.push({
          name: tech.name,
          tooltipData: getTechnicalIndicatorTooltipData(result[crosshair.dataIndex], tech),
          cbData: {
            preData: {
              kLineData: dataList[crosshair.dataIndex - 1],
              technicalIndicatorData: result[crosshair.dataIndex - 1]
            },
            currentData: {
              kLineData: dataList[crosshair.dataIndex],
              technicalIndicatorData: result[crosshair.dataIndex]
            },
            nextData: {
              kLineData: dataList[crosshair.dataIndex + 1],
              technicalIndicatorData: result[crosshair.dataIndex + 1]
            }
          }
        });
      });

      if (isDrawTechnicalIndicatorTooltip) {
        this._ctx.font = createFont(indicatorTextSize, technicalIndicatorTooltipOptions.text.weight, technicalIndicatorTooltipOptions.text.family);
        indicatorTooltipDataList.forEach(function (_ref) {
          var tooltipData = _ref.tooltipData;
          tooltipData.values.forEach(function (_ref2) {
            var title = _ref2.title,
                value = _ref2.value;

            if (isValid(title)) {
              var v = value || technicalIndicatorTooltipOptions.defaultValue;
              var text = "".concat(title).concat(v);
              var labelWidth = calcTextWidth(_this3._ctx, text) + indicatorTextMarginLeft + indicatorTextMarginRight;
              maxLabelWidth = Math.max(maxLabelWidth, labelWidth);
              rectHeight += indicatorTextMarginTop + indicatorTextMarginBottom + indicatorTextSize;
            }
          });
        });
      }

      rectWidth += maxLabelWidth;

      if (rectWidth === 0 || rectHeight === 0) {
        return;
      }

      rectWidth += rectBorderSize * 2 + rectPaddingLeft + rectPaddingRight;
      rectHeight += rectBorderSize * 2 + rectPaddingTop + rectPaddingBottom;
      var centerX = this._width / 2;
      var rectX;

      if (crosshair.realX < centerX) {
        rectX = this._width - rectRight - rectWidth;
      } else {
        rectX = rectLeft;
      }

      var rectY = rectOptions.offsetTop;
      var radius = rectOptions.borderRadius;
      renderFillRoundRect(this._ctx, rectOptions.fillColor, rectX, rectY, rectWidth, rectHeight, radius);
      renderStrokeRoundRect(this._ctx, rectOptions.borderColor, rectBorderSize, rectX, rectY, rectWidth, rectHeight, radius);
      var baseLabelX = rectX + rectBorderSize + rectPaddingLeft + baseTextMarginLeft;
      var labelY = rectY + rectBorderSize + rectPaddingTop;

      if (isDrawCandleTooltip) {
        // 开始渲染基础数据文字
        this._ctx.font = createFont(baseTextSize, candleTooltipOptions.text.weight, candleTooltipOptions.text.family);
        baseLabels.forEach(function (label, i) {
          labelY += baseTextMarginTop;
          _this3._ctx.textAlign = 'left';
          renderText(_this3._ctx, baseTextColor, baseLabelX, labelY, label);
          var value = baseValues[i];
          var text;
          var color;

          if (isObject(value)) {
            color = value.color || baseTextColor;
            text = value.value || candleTooltipOptions.defaultValue;
          } else {
            color = baseTextColor;
            text = value || candleTooltipOptions.defaultValue;
          }

          _this3._ctx.textAlign = 'right';
          renderText(_this3._ctx, color, rectX + rectWidth - rectBorderSize - baseTextMarginRight - rectPaddingRight, labelY, text);
          labelY += baseTextSize + baseTextMarginBottom;
        });
      }

      if (isDrawTechnicalIndicatorTooltip) {
        // 开始渲染指标数据文字
        var _technicalIndicatorOptions = this._chartData.styleOptions().technicalIndicator;

        var indicatorLabelX = rectX + rectBorderSize + rectPaddingLeft + indicatorTextMarginLeft;
        this._ctx.font = createFont(indicatorTextSize, technicalIndicatorTooltipOptions.text.weight, technicalIndicatorTooltipOptions.text.family);
        indicatorTooltipDataList.forEach(function (_ref3) {
          var name = _ref3.name,
              tooltipData = _ref3.tooltipData,
              cbData = _ref3.cbData;
          var tech = technicalIndicators.get(name);
          var styles = tech.styles || _technicalIndicatorOptions;
          var colors = styles.line.colors;
          var colorSize = colors.length;
          var plots = tech.plots;
          var lineCount = 0;
          var valueColor;
          plots.forEach(function (plot, i) {
            switch (plot.type) {
              case TechnicalIndicatorPlotType.CIRCLE:
                {
                  valueColor = plot.color && plot.color(cbData, styles) || styles.circle.noChangeColor;
                  break;
                }

              case TechnicalIndicatorPlotType.BAR:
                {
                  valueColor = plot.color && plot.color(cbData, styles) || styles.bar.noChangeColor;
                  break;
                }

              case TechnicalIndicatorPlotType.LINE:
                {
                  valueColor = colors[lineCount % colorSize] || styles.text.color;
                  lineCount++;
                  break;
                }
            }

            var value = tooltipData.values[i];

            if (isValid(value.title)) {
              labelY += indicatorTextMarginTop;
              _this3._ctx.textAlign = 'left';
              _this3._ctx.fillStyle = valueColor;

              _this3._ctx.fillText("".concat(value.title), indicatorLabelX, labelY);

              _this3._ctx.textAlign = 'right';

              _this3._ctx.fillText(value.value || technicalIndicatorTooltipOptions.defaultValue, rectX + rectWidth - rectBorderSize - indicatorTextMarginRight - rectPaddingRight, labelY);

              labelY += indicatorTextSize + indicatorTextMarginBottom;
            }
          });
        });
      }

      this._ctx.restore();
    }
    /**
     * 获取蜡烛提示数据
     * @param kLineData
     * @param candleOptions
     * @returns {*}
     * @private
     */

  }, {
    key: "_getCandleTooltipData",
    value: function _getCandleTooltipData(kLineData, candleOptions) {
      var _this4 = this;

      var baseValues = candleOptions.tooltip.values;
      var values = [];

      if (baseValues) {
        if (isFunction(baseValues)) {
          values = baseValues(kLineData, candleOptions) || [];
        } else if (isArray(baseValues)) {
          values = baseValues;
        }
      } else {
        var pricePrecision = this._chartData.pricePrecision();

        var volumePrecision = this._chartData.volumePrecision();

        values = [formatValue(kLineData, 'timestamp'), formatValue(kLineData, 'open'), formatValue(kLineData, 'close'), formatValue(kLineData, 'high'), formatValue(kLineData, 'low'), formatValue(kLineData, 'volume')];
        values.forEach(function (value, index) {
          switch (index) {
            case 0:
              {
                values[index] = formatDate(_this4._chartData.dateTimeFormat(), value, 'YYYY-MM-DD hh:mm');
                break;
              }

            case values.length - 1:
              {
                values[index] = formatBigNumber(formatPrecision(value, volumePrecision));
                break;
              }

            default:
              {
                values[index] = formatPrecision(value, pricePrecision);
                break;
              }
          }
        });
      }

      return values;
    }
  }]);

  return CandleOverlayView;
}(TechnicalIndicatorOverlayView);

var CandleWidget = /*#__PURE__*/function (_TechnicalIndicatorWi) {
  _inherits(CandleWidget, _TechnicalIndicatorWi);

  var _super = _createSuper(CandleWidget);

  function CandleWidget() {
    _classCallCheck(this, CandleWidget);

    return _super.apply(this, arguments);
  }

  _createClass(CandleWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new CandleView(container, props.chartData, props.xAxis, props.yAxis, props.additionalDataProvider);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new CandleOverlayView(container, props.chartData, props.xAxis, props.yAxis, props.additionalDataProvider);
    }
  }]);

  return CandleWidget;
}(TechnicalIndicatorWidget);

var CandlePane = /*#__PURE__*/function (_TechnicalIndicatorPa) {
  _inherits(CandlePane, _TechnicalIndicatorPa);

  var _super = _createSuper(CandlePane);

  function CandlePane() {
    _classCallCheck(this, CandlePane);

    return _super.apply(this, arguments);
  }

  _createClass(CandlePane, [{
    key: "_createYAxis",
    value: function _createYAxis(props) {
      return new YAxis(props.chartData, true, {
        technicalIndicators: this.technicalIndicators.bind(this)
      });
    }
  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {
      return new CandleWidget({
        container: container,
        chartData: props.chartData,
        xAxis: props.xAxis,
        yAxis: this._yAxis,
        additionalDataProvider: {
          technicalIndicators: this.technicalIndicators.bind(this),
          id: this.id.bind(this)
        }
      });
    }
  }]);

  return CandlePane;
}(TechnicalIndicatorPane);

var XAxisView = /*#__PURE__*/function (_View) {
  _inherits(XAxisView, _View);

  var _super = _createSuper(XAxisView);

  function XAxisView(container, chartData, xAxis) {
    var _this;

    _classCallCheck(this, XAxisView);

    _this = _super.call(this, container, chartData);
    _this._xAxis = xAxis;
    return _this;
  }

  _createClass(XAxisView, [{
    key: "_draw",
    value: function _draw() {
      var xAxisOptions = this._chartData.styleOptions().xAxis;

      if (xAxisOptions.show) {
        this._drawAxisLine(xAxisOptions);

        this._drawTickLines(xAxisOptions);

        this._drawTickLabels(xAxisOptions);
      }
    }
  }, {
    key: "_drawAxisLine",
    value: function _drawAxisLine(xAxisOptions) {
      var xAxisLine = xAxisOptions.axisLine;

      if (!xAxisLine.show) {
        return;
      }

      this._ctx.strokeStyle = xAxisLine.color;
      this._ctx.lineWidth = xAxisLine.size;
      renderHorizontalLine(this._ctx, 0, 0, this._width);
    }
  }, {
    key: "_drawTickLines",
    value: function _drawTickLines(xAxisOptions) {
      var _this2 = this;

      var tickLine = xAxisOptions.tickLine;

      if (!tickLine.show) {
        return;
      }

      this._ctx.lineWidth = tickLine.size;
      this._ctx.strokeStyle = tickLine.color;
      var startY = xAxisOptions.axisLine.show ? xAxisOptions.axisLine.size : 0;
      var endY = startY + tickLine.length;

      this._xAxis.ticks().forEach(function (tick) {
        renderVerticalLine(_this2._ctx, tick.x, startY, endY);
      });
    }
  }, {
    key: "_drawTickLabels",
    value: function _drawTickLabels(xAxisOptions) {
      var tickText = xAxisOptions.tickText;

      if (!tickText.show) {
        return;
      }

      var tickLine = xAxisOptions.tickLine;
      this._ctx.textBaseline = 'top';
      this._ctx.font = createFont(tickText.size, tickText.weight, tickText.family);
      this._ctx.textAlign = 'center';
      this._ctx.fillStyle = tickText.color;
      var labelY = tickText.paddingTop;

      if (xAxisOptions.axisLine.show) {
        labelY += xAxisOptions.axisLine.size;
      }

      if (tickLine.show) {
        labelY += tickLine.length;
      }

      var ticks = this._xAxis.ticks();

      var tickLength = ticks.length;

      for (var i = 0; i < tickLength; i++) {
        this._ctx.fillText(ticks[i].v, ticks[i].x, labelY);
      }
    }
  }]);

  return XAxisView;
}(View);

var XAxisOverlayView = /*#__PURE__*/function (_View) {
  _inherits(XAxisOverlayView, _View);

  var _super = _createSuper(XAxisOverlayView);

  function XAxisOverlayView(container, chartData, xAxis) {
    var _this;

    _classCallCheck(this, XAxisOverlayView);

    _this = _super.call(this, container, chartData);
    _this._xAxis = xAxis;
    return _this;
  }

  _createClass(XAxisOverlayView, [{
    key: "_draw",
    value: function _draw() {
      this._drawCrosshairLabel();
    }
  }, {
    key: "_drawCrosshairLabel",
    value: function _drawCrosshairLabel() {
      var crosshair = this._chartData.crosshair();

      if (!crosshair.paneId) {
        return;
      }

      var crosshairOptions = this._chartData.styleOptions().crosshair;

      var crosshairVerticalOptions = crosshairOptions.vertical;
      var crosshairVerticalTextOptions = crosshairVerticalOptions.text;

      if (!crosshairOptions.show || !crosshairVerticalOptions.show || !crosshairVerticalTextOptions.show || crosshair.dataIndex !== crosshair.realDataIndex) {
        return;
      }

      var x = crosshair.realX;
      var timestamp = crosshair.kLineData.timestamp;
      var text = formatDate(this._chartData.dateTimeFormat(), timestamp, 'YYYY-MM-DD hh:mm');
      var textSize = crosshairVerticalTextOptions.size;
      this._ctx.font = createFont(textSize, crosshairVerticalTextOptions.weight, crosshairVerticalTextOptions.family);
      var labelWidth = calcTextWidth(this._ctx, text);
      var labelX = x - labelWidth / 2;
      var paddingLeft = crosshairVerticalTextOptions.paddingLeft;
      var paddingRight = crosshairVerticalTextOptions.paddingRight;
      var paddingTop = crosshairVerticalTextOptions.paddingTop;
      var paddingBottom = crosshairVerticalTextOptions.paddingBottom;
      var borderSize = crosshairVerticalTextOptions.borderSize; // 保证整个x轴上的提示文字总是完全显示

      if (labelX < paddingLeft + borderSize) {
        labelX = paddingLeft + borderSize;
      } else if (labelX > this._width - labelWidth - borderSize - paddingRight) {
        labelX = this._width - labelWidth - borderSize - paddingRight;
      }

      var rectX = labelX - borderSize - paddingLeft;
      var rectWidth = labelWidth + borderSize * 2 + paddingRight + paddingLeft;
      var rectHeight = textSize + borderSize * 2 + paddingTop + paddingBottom;
      renderStrokeFillRoundRect(this._ctx, crosshairVerticalTextOptions.backgroundColor, crosshairVerticalTextOptions.borderColor, borderSize, rectX, 0, rectWidth, rectHeight, crosshairVerticalTextOptions.borderRadius); // 绘制轴上的提示文字

      this._ctx.textBaseline = 'top';
      renderText(this._ctx, crosshairVerticalTextOptions.color, labelX, borderSize + paddingTop, text);
    }
  }]);

  return XAxisOverlayView;
}(View);

var XAxisWidget = /*#__PURE__*/function (_Widget) {
  _inherits(XAxisWidget, _Widget);

  var _super = _createSuper(XAxisWidget);

  function XAxisWidget() {
    _classCallCheck(this, XAxisWidget);

    return _super.apply(this, arguments);
  }

  _createClass(XAxisWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new XAxisView(container, props.chartData, props.xAxis);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new XAxisOverlayView(container, props.chartData, props.xAxis);
    }
  }]);

  return XAxisWidget;
}(Widget);

var XAxis = /*#__PURE__*/function (_Axis) {
  _inherits(XAxis, _Axis);

  var _super = _createSuper(XAxis);

  function XAxis() {
    _classCallCheck(this, XAxis);

    return _super.apply(this, arguments);
  }

  _createClass(XAxis, [{
    key: "_computeMinMax",
    value: function _computeMinMax() {
      return {
        min: this._chartData.from(),
        max: this._chartData.to() - 1
      };
    }
  }, {
    key: "_optimalMinMax",
    value: function _optimalMinMax(_ref) {
      var min = _ref.min,
          max = _ref.max;
      return {
        min: min,
        max: max,
        range: max - min + 1
      };
    }
  }, {
    key: "_optimalTicks",
    value: function _optimalTicks(ticks) {
      var optimalTicks = [];
      var tickLength = ticks.length;

      var dataList = this._chartData.dataList();

      if (tickLength > 0) {
        var dateTimeFormat = this._chartData.dateTimeFormat();

        var tickText = this._chartData.styleOptions().xAxis.tickText;

        this._measureCtx.font = createFont(tickText.size, tickText.weight, tickText.family);
        var defaultLabelWidth = calcTextWidth(this._measureCtx, '00-00 00:00');
        var pos = parseInt(ticks[0].v, 10);
        var x = this.convertToPixel(pos);
        var tickCountDif = 1;

        if (tickLength > 1) {
          var nextPos = parseInt(ticks[1].v, 10);
          var nextX = this.convertToPixel(nextPos);
          var xDif = Math.abs(nextX - x);

          if (xDif < defaultLabelWidth) {
            tickCountDif = Math.ceil(defaultLabelWidth / xDif);
          }
        }

        for (var i = 0; i < tickLength; i += tickCountDif) {
          var _pos = parseInt(ticks[i].v, 10);

          var kLineData = dataList[_pos];
          var timestamp = kLineData.timestamp;
          var label = formatDate(dateTimeFormat, timestamp, 'hh:mm');

          if (i !== 0) {
            var prePos = parseInt(ticks[i - tickCountDif].v, 10);
            var preKLineData = dataList[prePos];
            var preTimestamp = preKLineData.timestamp;
            label = this._optimalTickLabel(dateTimeFormat, timestamp, preTimestamp) || label;
          }

          var _x = this.convertToPixel(_pos);

          optimalTicks.push({
            v: label,
            x: _x,
            oV: timestamp
          });
        }

        var optimalTickLength = optimalTicks.length;

        if (optimalTickLength === 1) {
          optimalTicks[0].v = formatDate(dateTimeFormat, optimalTicks[0].oV, 'YYYY-MM-DD hh:mm');
        } else {
          var firstTimestamp = optimalTicks[0].oV;
          var secondTimestamp = optimalTicks[1].oV;

          if (optimalTicks[2]) {
            var thirdV = optimalTicks[2].v;

            if (/^[0-9]{2}-[0-9]{2}$/.test(thirdV)) {
              optimalTicks[0].v = formatDate(dateTimeFormat, firstTimestamp, 'MM-DD');
            } else if (/^[0-9]{4}-[0-9]{2}$/.test(thirdV)) {
              optimalTicks[0].v = formatDate(dateTimeFormat, firstTimestamp, 'YYYY-MM');
            } else if (/^[0-9]{4}$/.test(thirdV)) {
              optimalTicks[0].v = formatDate(dateTimeFormat, firstTimestamp, 'YYYY');
            }
          } else {
            optimalTicks[0].v = this._optimalTickLabel(dateTimeFormat, firstTimestamp, secondTimestamp) || optimalTicks[0].v;
          }
        }
      }

      return optimalTicks;
    }
  }, {
    key: "_optimalTickLabel",
    value: function _optimalTickLabel(dateTimeFormat, timestamp, comparedTimestamp) {
      var year = formatDate(dateTimeFormat, timestamp, 'YYYY');
      var month = formatDate(dateTimeFormat, timestamp, 'YYYY-MM');
      var day = formatDate(dateTimeFormat, timestamp, 'MM-DD');

      if (year !== formatDate(dateTimeFormat, comparedTimestamp, 'YYYY')) {
        return year;
      } else if (month !== formatDate(dateTimeFormat, comparedTimestamp, 'YYYY-MM')) {
        return month;
      } else if (day !== formatDate(dateTimeFormat, comparedTimestamp, 'MM-DD')) {
        return day;
      }

      return null;
    }
    /**
     * 获取自身高度
     */

  }, {
    key: "getSelfHeight",
    value: function getSelfHeight() {
      var stylOptions = this._chartData.styleOptions();

      var xAxisOptions = stylOptions.xAxis;
      var height = xAxisOptions.height;

      if (isNumber(height)) {
        return height;
      }

      var crosshairOptions = stylOptions.crosshair;
      var xAxisHeight = 0;

      if (xAxisOptions.show) {
        if (xAxisOptions.axisLine.show) {
          xAxisHeight += xAxisOptions.axisLine.size;
        }

        if (xAxisOptions.tickLine.show) {
          xAxisHeight += xAxisOptions.tickLine.length;
        }

        if (xAxisOptions.tickText.show) {
          xAxisHeight += xAxisOptions.tickText.paddingTop + xAxisOptions.tickText.paddingBottom + xAxisOptions.tickText.size;
        }
      }

      var crosshairVerticalTextHeight = 0;

      if (crosshairOptions.show && crosshairOptions.vertical.show && crosshairOptions.vertical.text.show) {
        crosshairVerticalTextHeight += crosshairOptions.vertical.text.paddingTop + crosshairOptions.vertical.text.paddingBottom + crosshairOptions.vertical.text.borderSize * 2 + crosshairOptions.vertical.text.size;
      }

      return Math.max(xAxisHeight, crosshairVerticalTextHeight);
    }
  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(pixel) {
      return this._chartData.coordinateToDataIndex(pixel);
    }
  }, {
    key: "convertToPixel",
    value: function convertToPixel(value) {
      return this._chartData.dataIndexToCoordinate(value);
    }
  }]);

  return XAxis;
}(Axis);

var XAxisPane = /*#__PURE__*/function (_Pane) {
  _inherits(XAxisPane, _Pane);

  var _super = _createSuper(XAxisPane);

  function XAxisPane() {
    _classCallCheck(this, XAxisPane);

    return _super.apply(this, arguments);
  }

  _createClass(XAxisPane, [{
    key: "_initBefore",
    value: function _initBefore() {
      this._xAxis = new XAxis(this._chartData);
    }
  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {
      return new XAxisWidget({
        container: container,
        chartData: props.chartData,
        xAxis: this._xAxis
      });
    }
  }, {
    key: "xAxis",
    value: function xAxis() {
      return this._xAxis;
    }
  }, {
    key: "setWidth",
    value: function setWidth(mainWidgetWidth, yAxisWidgetWidth) {
      _get(_getPrototypeOf(XAxisPane.prototype), "setWidth", this).call(this, mainWidgetWidth, yAxisWidgetWidth);

      this._xAxis.setWidth(mainWidgetWidth);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      _get(_getPrototypeOf(XAxisPane.prototype), "setHeight", this).call(this, height);

      this._xAxis.setHeight(height);
    }
  }]);

  return XAxisPane;
}(Pane);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The file comes from tradingview/lightweight-charts
 * https://www.tradingview.com/
 * Convert files from typescript to javascript.
 * Modified the class name.
 * The use of the source code of this file is also subject to the terms
 * and consitions of the license of "lightweight-charts" (Apache License V2, see
 * </licenses/LICENSE-lightweight-charts>).
 */
var MouseEventButton = {
  LEFT: 0,
  RIGHT: 2
};
var DELAY_RESET_CLICK = 500;
var DELAY_LONG_TAG = 600;

function getBoundingClientRect(element) {
  return element.getBoundingClientRect() || {
    left: 0,
    top: 0
  };
}

function isTouchEvent(event) {
  return Boolean(event.touches);
}

function preventDefault(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
}

function checkTouchEvents() {
  if ('ontouchstart' in window) {
    return true;
  }

  return Boolean(window.DocumentTouch && document instanceof window.DocumentTouch);
}

var touch = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || checkTouchEvents();
var mobileTouch = 'onorientationchange' in window && touch;

function getDistance(p1, p2) {
  var xDiff = p1.clientX - p2.clientX;
  var yDiff = p1.clientY - p2.clientY;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

var EventType = {
  MOUSE: 'mouse',
  TOUCH: 'touch'
};

var EventBase = /*#__PURE__*/function () {
  function EventBase(target, eventHandler, options) {
    _classCallCheck(this, EventBase);

    this._target = target;
    this._handler = eventHandler;
    this._options = options;
    this._clickCount = 0;
    this._clickTimeoutId = null;
    this._longTapTimeoutId = null;
    this._longTapActive = false;
    this._mouseMoveStartPosition = null;
    this._moveExceededManhattanDistance = false;
    this._cancelClick = false;
    this._unsubscribeOutsideEvents = null;
    this._unsubscribeMousemove = null;
    this._unsubscribeRoot = null;
    this._startPinchMiddlePoint = null;
    this._startPinchDistance = 0;
    this._pinchPrevented = false;
    this._preventDragProcess = false;
    this._mousePressed = false;

    this._init();
  }

  _createClass(EventBase, [{
    key: "destroy",
    value: function destroy() {
      if (this._unsubscribeOutsideEvents !== null) {
        this._unsubscribeOutsideEvents();

        this._unsubscribeOutsideEvents = null;
      }

      if (this._unsubscribeMousemove !== null) {
        this._unsubscribeMousemove();

        this._unsubscribeMousemove = null;
      }

      if (this._unsubscribeRoot !== null) {
        this._unsubscribeRoot();

        this._unsubscribeRoot = null;
      }

      this._clearLongTapTimeout();

      this._resetClickTimeout();
    }
  }, {
    key: "_mouseEnterHandler",
    value: function _mouseEnterHandler(enterEvent) {
      var _this = this;

      if (this._unsubscribeMousemove) {
        this._unsubscribeMousemove();
      }

      {
        var boundMouseMoveHandler = this._mouseMoveHandler.bind(this);

        var boundMouseWheelHandler = this._mouseWheelHandler.bind(this);

        this._unsubscribeMousemove = function () {
          _this._target.removeEventListener('mousemove', boundMouseMoveHandler);

          _this._target.removeEventListener('wheel', boundMouseWheelHandler);
        };

        this._target.addEventListener('mousemove', boundMouseMoveHandler);

        this._target.addEventListener('wheel', boundMouseWheelHandler, {
          passive: false
        });
      }

      if (isTouchEvent(enterEvent)) {
        this._mouseMoveHandler(enterEvent);
      }

      var compatEvent = this._makeCompatEvent(enterEvent);

      this._processEvent(compatEvent, this._handler.mouseEnterEvent);
    }
  }, {
    key: "_resetClickTimeout",
    value: function _resetClickTimeout() {
      if (this._clickTimeoutId !== null) {
        clearTimeout(this._clickTimeoutId);
      }

      this._clickCount = 0;
      this._clickTimeoutId = null;
    }
  }, {
    key: "_mouseMoveHandler",
    value: function _mouseMoveHandler(moveEvent) {
      if (this._mousePressed && !isTouchEvent(moveEvent)) {
        return;
      }

      var compatEvent = this._makeCompatEvent(moveEvent);

      this._processEvent(compatEvent, this._handler.mouseMoveEvent);
    }
  }, {
    key: "_mouseWheelHandler",
    value: function _mouseWheelHandler(wheelEvent) {
      var compatEvent = this._makeCompatEvent(wheelEvent);

      wheelEvent.localX = compatEvent.localX;
      wheelEvent.localY = compatEvent.localY;

      this._processEvent(wheelEvent, this._handler.mouseWheelEvent);
    }
  }, {
    key: "_mouseMoveWithDownHandler",
    value: function _mouseMoveWithDownHandler(moveEvent) {
      if ('button' in moveEvent && moveEvent.button !== MouseEventButton.LEFT) {
        return;
      }

      if (this._startPinchMiddlePoint !== null) {
        return;
      }

      var isTouch = isTouchEvent(moveEvent);

      if (this._preventDragProcess && isTouch) {
        return;
      }

      this._pinchPrevented = true;

      var compatEvent = this._makeCompatEvent(moveEvent);

      var startMouseMovePos = this._mouseMoveStartPosition;
      var xOffset = Math.abs(startMouseMovePos.x - compatEvent.pageX);
      var yOffset = Math.abs(startMouseMovePos.y - compatEvent.pageY);
      var moveExceededManhattanDistance = xOffset + yOffset > 5;

      if (!moveExceededManhattanDistance && isTouch) {
        return;
      }

      if (moveExceededManhattanDistance && !this._moveExceededManhattanDistance && isTouch) {
        // vertical drag is more important than horizontal drag
        // because we scroll the page vertically often than horizontally
        var correctedXOffset = xOffset * 0.5; // a drag can be only if touch page scroll isn't allowed

        var isVertDrag = yOffset >= correctedXOffset && !this._options.treatVertTouchDragAsPageScroll;
        var isHorzDrag = correctedXOffset > yOffset && !this._options.treatHorzTouchDragAsPageScroll; // if drag event happened then we should revert preventDefault state to original one
        // and try to process the drag event
        // else we shouldn't prevent default of the event and ignore processing the drag event

        if (!isVertDrag && !isHorzDrag) {
          this._preventDragProcess = true;
        }
      }

      if (moveExceededManhattanDistance) {
        this._moveExceededManhattanDistance = true; // if manhattan distance is more that 5 - we should cancel click event

        this._cancelClick = true;

        if (isTouch) {
          this._clearLongTapTimeout();
        }
      }

      if (!this._preventDragProcess) {
        this._processEvent(compatEvent, this._handler.pressedMouseMoveEvent); // we should prevent default in case of touch only
        // to prevent scroll of the page


        if (isTouch) {
          preventDefault(moveEvent);
        }
      }
    }
  }, {
    key: "_mouseUpHandler",
    value: function _mouseUpHandler(mouseUpEvent) {
      if ('button' in mouseUpEvent && mouseUpEvent.button !== MouseEventButton.LEFT) {
        return;
      }

      var compatEvent = this._makeCompatEvent(mouseUpEvent);

      this._clearLongTapTimeout();

      this._mouseMoveStartPosition = null;
      this._mousePressed = false;

      if (this._unsubscribeRoot) {
        this._unsubscribeRoot();

        this._unsubscribeRoot = null;
      }

      if (isTouchEvent(mouseUpEvent)) {
        this._mouseLeaveHandler(mouseUpEvent);
      }

      this._processEvent(compatEvent, this._handler.mouseUpEvent);

      ++this._clickCount;

      if (this._clickTimeoutId && this._clickCount > 1) {
        this._processEvent(compatEvent, this._handler.mouseDoubleClickEvent);

        this._resetClickTimeout();
      } else {
        if (!this._cancelClick) {
          this._processEvent(compatEvent, this._handler.mouseClickEvent);
        }
      } // prevent safari's dblclick-to-zoom
      // we handle mouseDoubleClickEvent here ourself


      if (isTouchEvent(mouseUpEvent)) {
        preventDefault(mouseUpEvent);

        this._mouseLeaveHandler(mouseUpEvent);

        if (mouseUpEvent.touches.length === 0) {
          this._longTapActive = false;
        }
      }
    }
  }, {
    key: "_clearLongTapTimeout",
    value: function _clearLongTapTimeout() {
      if (this._longTapTimeoutId === null) {
        return;
      }

      clearTimeout(this._longTapTimeoutId);
      this._longTapTimeoutId = null;
    }
  }, {
    key: "_mouseDownHandler",
    value: function _mouseDownHandler(downEvent) {
      if ('button' in downEvent && downEvent.button !== MouseEventButton.LEFT && downEvent.button !== MouseEventButton.RIGHT) {
        return;
      }

      var compatEvent = this._makeCompatEvent(downEvent);

      if ('button' in downEvent && downEvent.button === MouseEventButton.RIGHT) {
        this._processEvent(compatEvent, this._handler.mouseRightDownEvent);

        return;
      }

      this._cancelClick = false;
      this._moveExceededManhattanDistance = false;
      this._preventDragProcess = false;

      if (isTouchEvent(downEvent)) {
        this._mouseEnterHandler(downEvent);
      }

      this._mouseMoveStartPosition = {
        x: compatEvent.pageX,
        y: compatEvent.pageY
      };

      if (this._unsubscribeRoot) {
        this._unsubscribeRoot();

        this._unsubscribeRoot = null;
      }

      {
        var boundMouseMoveWithDownHandler = this._mouseMoveWithDownHandler.bind(this);

        var boundMouseUpHandler = this._mouseUpHandler.bind(this);

        var rootElement = this._target.ownerDocument.documentElement;

        this._unsubscribeRoot = function () {
          rootElement.removeEventListener('touchmove', boundMouseMoveWithDownHandler);
          rootElement.removeEventListener('touchend', boundMouseUpHandler);
          rootElement.removeEventListener('mousemove', boundMouseMoveWithDownHandler);
          rootElement.removeEventListener('mouseup', boundMouseUpHandler);
        };

        rootElement.addEventListener('touchmove', boundMouseMoveWithDownHandler, {
          passive: false
        });
        rootElement.addEventListener('touchend', boundMouseUpHandler, {
          passive: false
        });

        this._clearLongTapTimeout();

        if (isTouchEvent(downEvent) && downEvent.touches.length === 1) {
          this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, downEvent), DELAY_LONG_TAG);
        } else {
          rootElement.addEventListener('mousemove', boundMouseMoveWithDownHandler);
          rootElement.addEventListener('mouseup', boundMouseUpHandler);
        }
      }
      this._mousePressed = true;

      this._processEvent(compatEvent, this._handler.mouseDownEvent);

      if (!this._clickTimeoutId) {
        this._clickCount = 0;
        this._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), DELAY_RESET_CLICK);
      }
    }
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._target.addEventListener('mouseenter', this._mouseEnterHandler.bind(this));

      this._target.addEventListener('touchcancel', this._clearLongTapTimeout.bind(this));

      {
        var doc = this._target.ownerDocument;

        var outsideHandler = function outsideHandler(event) {
          if (!_this2._handler.mouseDownOutsideEvent) {
            return;
          }

          if (event.target && _this2._target.contains(event.target)) {
            return;
          }

          _this2._handler.mouseDownOutsideEvent();
        };

        this._unsubscribeOutsideEvents = function () {
          doc.removeEventListener('mousedown', outsideHandler);
          doc.removeEventListener('touchstart', outsideHandler);
        };

        doc.addEventListener('mousedown', outsideHandler);
        doc.addEventListener('touchstart', outsideHandler, {
          passive: true
        });
      }

      this._target.addEventListener('mouseleave', this._mouseLeaveHandler.bind(this));

      this._target.addEventListener('touchstart', this._mouseDownHandler.bind(this), {
        passive: true
      });

      if (!mobileTouch) {
        this._target.addEventListener('mousedown', this._mouseDownHandler.bind(this));
      }

      this._initPinch(); // Hey mobile Safari, what's up?
      // If mobile Safari doesn't have any touchmove handler with passive=false
      // it treats a touchstart and the following touchmove events as cancelable=false,
      // so we can't prevent them (as soon we subscribe on touchmove inside handler of touchstart).
      // And we'll get scroll of the page along with chart's one instead of only chart's scroll.


      this._target.addEventListener('touchmove', function () {}, {
        passive: false
      });
    }
  }, {
    key: "_initPinch",
    value: function _initPinch() {
      var _this3 = this;

      if (this._handler.pinchStartEvent === undefined && this._handler.pinchEvent === undefined && this._handler.pinchEndEvent === undefined) {
        return;
      }

      this._target.addEventListener('touchstart', function (event) {
        return _this3._checkPinchState(event.touches);
      }, {
        passive: true
      });

      this._target.addEventListener('touchmove', function (event) {
        if (event.touches.length !== 2 || _this3._startPinchMiddlePoint === null) {
          return;
        }

        if (_this3._handler.pinchEvent !== undefined) {
          var currentDistance = getDistance(event.touches[0], event.touches[1]);
          var scale = currentDistance / _this3._startPinchDistance;

          _this3._handler.pinchEvent(_this3._startPinchMiddlePoint, scale);

          preventDefault(event);
        }
      }, {
        passive: false
      });

      this._target.addEventListener('touchend', function (event) {
        _this3._checkPinchState(event.touches);
      });
    }
  }, {
    key: "_checkPinchState",
    value: function _checkPinchState(touches) {
      if (touches.length === 1) {
        this._pinchPrevented = false;
      }

      if (touches.length !== 2 || this._pinchPrevented || this._longTapActive) {
        this._stopPinch();
      } else {
        this._startPinch(touches);
      }
    }
  }, {
    key: "_startPinch",
    value: function _startPinch(touches) {
      var box = getBoundingClientRect(this._target);
      this._startPinchMiddlePoint = {
        x: (touches[0].clientX - box.left + (touches[1].clientX - box.left)) / 2,
        y: (touches[0].clientY - box.top + (touches[1].clientY - box.top)) / 2
      };
      this._startPinchDistance = getDistance(touches[0], touches[1]);

      if (this._handler.pinchStartEvent !== undefined) {
        this._handler.pinchStartEvent();
      }

      this._clearLongTapTimeout();
    }
  }, {
    key: "_stopPinch",
    value: function _stopPinch() {
      if (this._startPinchMiddlePoint === null) {
        return;
      }

      this._startPinchMiddlePoint = null;

      if (this._handler.pinchEndEvent !== undefined) {
        this._handler.pinchEndEvent();
      }
    }
  }, {
    key: "_mouseLeaveHandler",
    value: function _mouseLeaveHandler(event) {
      if (this._unsubscribeMousemove) {
        this._unsubscribeMousemove();
      }

      var compatEvent = this._makeCompatEvent(event);

      this._processEvent(compatEvent, this._handler.mouseLeaveEvent);
    }
  }, {
    key: "_longTapHandler",
    value: function _longTapHandler(event) {
      var compatEvent = this._makeCompatEvent(event);

      this._processEvent(compatEvent, this._handler.longTapEvent);

      this._cancelClick = true; // long tap is active untill touchend event with 0 touches occured

      this._longTapActive = true;
    }
  }, {
    key: "_processEvent",
    value: function _processEvent(event, callback) {
      if (!callback) {
        return;
      }

      callback.call(this._handler, event);
    }
  }, {
    key: "_makeCompatEvent",
    value: function _makeCompatEvent(event) {
      // TouchEvent has no clientX/Y coordinates:
      // We have to use the last Touch instead
      var eventLike;

      if ('touches' in event && event.touches.length) {
        eventLike = event.touches[0];
      } else if ('changedTouches' in event && event.changedTouches.length) {
        eventLike = event.changedTouches[0];
      } else {
        eventLike = event;
      }

      var box = getBoundingClientRect(this._target);
      return {
        clientX: eventLike.clientX,
        clientY: eventLike.clientY,
        pageX: eventLike.pageX,
        pageY: eventLike.pageY,
        screenX: eventLike.screenX,
        screenY: eventLike.screenY,
        localX: eventLike.clientX - box.left,
        localY: eventLike.clientY - box.top,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        type: event.type.startsWith('mouse') ? EventType.MOUSE : EventType.TOUCH,
        target: eventLike.target,
        view: event.view
      };
    }
  }]);

  return EventBase;
}();

var SeparatorPane = /*#__PURE__*/function () {
  function SeparatorPane(container, chartData, topPaneId, bottomPaneId, dragEnabled, dragEventHandler) {
    _classCallCheck(this, SeparatorPane);

    this._chartData = chartData;
    this._topPaneId = topPaneId;
    this._bottomPaneId = bottomPaneId;
    this._dragEnabled = dragEnabled;
    this._width = 0;
    this._offsetLeft = 0;
    this._dragEventHandler = dragEventHandler;
    this._dragFlag = false;

    this._initElement(container);

    this._initEvent(dragEnabled);
  }
  /**
   * 初始化dom元素
   * @param container
   * @private
   */


  _createClass(SeparatorPane, [{
    key: "_initElement",
    value: function _initElement(container) {
      this._container = container;
      this._wrapper = this._createElement();
      this._wrapper.style.position = 'relative';
      this._element = this._createElement();
      this._element.style.width = '100%';
      this._element.style.position = 'absolute';
      this._element.style.zIndex = '20';
      this._element.style.top = '-3px';
      this._element.style.height = '7px';

      this._wrapper.appendChild(this._element);

      var lastElement = container.lastChild;

      if (lastElement) {
        container.insertBefore(this._wrapper, lastElement);
      } else {
        container.appendChild(this._wrapper);
      }
    }
    /**
     * 初始化事件
     * @param dragEnabled
     * @private
     */

  }, {
    key: "_initEvent",
    value: function _initEvent(dragEnabled) {
      if (dragEnabled) {
        this._element.style.cursor = 'ns-resize';
        this._dragEvent = new EventBase(this._element, {
          mouseDownEvent: this._mouseDownEvent.bind(this),
          mouseUpEvent: this._mouseUpEvent.bind(this),
          pressedMouseMoveEvent: this._pressedMouseMoveEvent.bind(this),
          mouseEnterEvent: this._mouseEnterEvent.bind(this),
          mouseLeaveEvent: this._mouseLeaveEvent.bind(this)
        }, {
          treatVertTouchDragAsPageScroll: false,
          treatHorzTouchDragAsPageScroll: true
        });
      }
    }
    /**
     * 创建div节点
     * @return {HTMLDivElement}
     * @private
     */

  }, {
    key: "_createElement",
    value: function _createElement() {
      var element = document.createElement('div');
      element.style.margin = '0';
      element.style.padding = '0';
      return element;
    }
  }, {
    key: "_mouseDownEvent",
    value: function _mouseDownEvent(event) {
      this._dragFlag = true;
      this._startY = event.pageY;

      this._dragEventHandler.startDrag(this._topPaneId, this._bottomPaneId);
    }
  }, {
    key: "_mouseUpEvent",
    value: function _mouseUpEvent() {
      this._dragFlag = false;

      this._chartData.setDragPaneFlag(false);
    }
  }, {
    key: "_pressedMouseMoveEvent",
    value: function _pressedMouseMoveEvent(event) {
      var dragDistance = event.pageY - this._startY;

      this._dragEventHandler.drag(dragDistance, this._topPaneId, this._bottomPaneId);

      this._chartData.setDragPaneFlag(true);

      this._chartData.setCrosshair();
    }
  }, {
    key: "_mouseEnterEvent",
    value: function _mouseEnterEvent() {
      var separatorOptions = this._chartData.styleOptions().separator;

      this._element.style.background = separatorOptions.activeBackgroundColor;

      this._chartData.setDragPaneFlag(true);

      this._chartData.setCrosshair();
    }
  }, {
    key: "_mouseLeaveEvent",
    value: function _mouseLeaveEvent() {
      if (!this._dragFlag) {
        this._element.style.background = null;

        this._chartData.setDragPaneFlag(false);
      }
    }
    /**
     * 获取高度
     * @returns {number}
     */

  }, {
    key: "height",
    value: function height() {
      return this._wrapper.offsetHeight;
    }
    /**
     * 设置尺寸
     * 用于fill属性
     * @param offsetLeft
     * @param width
     */

  }, {
    key: "setSize",
    value: function setSize(offsetLeft, width) {
      this._offsetLeft = offsetLeft;
      this._width = width;
      this.invalidate();
    }
    /**
     * 设置是否可以拖拽
     * @param dragEnabled
     */

  }, {
    key: "setDragEnabled",
    value: function setDragEnabled(dragEnabled) {
      if (dragEnabled !== this._dragEnabled) {
        this._dragEnabled = dragEnabled;

        if (dragEnabled) {
          !this._dragEvent && this._initEvent(dragEnabled);
        } else {
          this._element.style.cursor = 'default';
          this._dragEvent && this._dragEvent.destroy();
          this._dragEvent = null;
        }
      }
    }
    /**
     * 顶部paneId
     * @return {*}
     */

  }, {
    key: "topPaneId",
    value: function topPaneId() {
      return this._topPaneId;
    }
    /**
     * 底部paneId
     * @return {*}
     */

  }, {
    key: "bottomPaneId",
    value: function bottomPaneId() {
      return this._bottomPaneId;
    }
    /**
     * 更新上下两个图表的索引
     * @param topPaneId
     * @param bottomPaneId
     */

  }, {
    key: "updatePaneId",
    value: function updatePaneId(topPaneId, bottomPaneId) {
      if (isValid(topPaneId)) {
        this._topPaneId = topPaneId;
      }

      if (isValid(bottomPaneId)) {
        this._bottomPaneId = bottomPaneId;
      }
    }
    /**
     * 刷新
     */

  }, {
    key: "invalidate",
    value: function invalidate() {
      var separatorOptions = this._chartData.styleOptions().separator;

      this._element.style.top = "".concat(-Math.floor((7 - separatorOptions.size) / 2), "px");
      this._wrapper.style.backgroundColor = separatorOptions.color;
      this._wrapper.style.height = "".concat(separatorOptions.size, "px");
      this._wrapper.style.marginLeft = "".concat(separatorOptions.fill ? 0 : this._offsetLeft, "px");
      this._wrapper.style.width = separatorOptions.fill ? '100%' : "".concat(this._width, "px");
    }
    /**
     * 将图形转换成图片
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage() {
      var separatorOptions = this._chartData.styleOptions().separator;

      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      var width = this._wrapper.offsetWidth;
      var height = separatorOptions.size;
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px");
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = separatorOptions.color;
      ctx.fillRect(this._offsetLeft, 0, width, height);
      return canvas;
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this._dragEvent) {
        this._dragEvent.destroy();
      }

      this._container.removeChild(this._wrapper);
    }
  }]);

  return SeparatorPane;
}();

function isTouch(event) {
  return event.type === EventType.TOUCH;
}
function isMouse(event) {
  return event.type === EventType.MOUSE;
}

var EventHandler = /*#__PURE__*/function () {
  function EventHandler(chartData) {
    _classCallCheck(this, EventHandler);

    this._chartData = chartData;
    this._chartContentSize = {};
    this._paneContentSize = {};
  }

  _createClass(EventHandler, [{
    key: "_checkEventPointX",
    value: function _checkEventPointX(x) {
      return x > 0 && x < this._chartContentSize.contentRight - this._chartContentSize.contentLeft;
    }
  }, {
    key: "setChartContentSize",
    value: function setChartContentSize(chartContentSize) {
      this._chartContentSize = chartContentSize;
    }
  }, {
    key: "setPaneContentSize",
    value: function setPaneContentSize(paneContentSize) {
      this._paneContentSize = paneContentSize;
    }
  }]);

  return EventHandler;
}();

var TOUCH_MIN_RADIUS = 10;

var ZoomScrollEventHandler = /*#__PURE__*/function (_EventHandler) {
  _inherits(ZoomScrollEventHandler, _EventHandler);

  var _super = _createSuper(ZoomScrollEventHandler);

  function ZoomScrollEventHandler(chartData) {
    var _this;

    _classCallCheck(this, ZoomScrollEventHandler);

    _this = _super.call(this, chartData); // 开始滚动时坐标点

    _this._startScrollPoint = {}; // 开始触摸时坐标

    _this._touchPoint = null; // 是否是取消了十字光标

    _this._touchCancelCrossHair = false; // 是否缩放过

    _this._touchZoomed = false; // 用来记录捏合缩放的尺寸

    _this._pinchScale = 1;
    return _this;
  }

  _createClass(ZoomScrollEventHandler, [{
    key: "pinchStartEvent",
    value: function pinchStartEvent() {
      this._pinchScale = 1;
      this._touchZoomed = true;
    }
  }, {
    key: "pinchEvent",
    value: function pinchEvent(middlePoint, scale) {
      var zoomScale = (scale - this._pinchScale) * 5;
      this._pinchScale = scale;

      this._chartData.zoom(zoomScale, middlePoint);
    }
  }, {
    key: "mouseLeaveEvent",
    value: function mouseLeaveEvent(event) {
      if (isMouse(event)) {
        this._chartData.setCrosshair();
      }
    }
  }, {
    key: "mouseMoveEvent",
    value: function mouseMoveEvent(event) {
      var _this2 = this;

      if (!isMouse(event)) {
        return;
      }

      this._performCross(event, false, function (cross) {
        _this2._chartData.setCrosshair({
          x: event.localX,
          y: cross.y,
          paneId: cross.paneId
        });
      }, function () {
        _this2._chartData.setCrosshair();
      });
    }
  }, {
    key: "mouseWheelEvent",
    value: function mouseWheelEvent(event) {
      if (!this._checkEventPointX(event.localX)) {
        return;
      }

      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        if (event.cancelable) {
          event.preventDefault();
        }

        if (Math.abs(event.deltaX) === 0) {
          return;
        }

        this._chartData.startScroll();

        this._chartData.scroll(-event.deltaX);
      } else {
        var deltaY = -(event.deltaY / 100);

        if (deltaY === 0) {
          return;
        }

        if (event.cancelable) {
          event.preventDefault();
        }

        switch (event.deltaMode) {
          case event.DOM_DELTA_PAGE:
            deltaY *= 120;
            break;

          case event.DOM_DELTA_LINE:
            deltaY *= 32;
            break;
        }

        if (deltaY !== 0) {
          var scale = Math.sign(deltaY) * Math.min(1, Math.abs(deltaY));

          this._chartData.zoom(scale, {
            x: event.localX,
            y: event.localY
          });
        }
      }
    }
  }, {
    key: "mouseClickEvent",
    value: function mouseClickEvent(event) {
      var _this3 = this;

      this._performCross(event, true, function (cross) {
        if (!_this3._touchPoint && !_this3._touchCancelCrossHair && !_this3._touchZoomed) {
          _this3._touchPoint = {
            x: event.localX,
            y: event.localY
          };

          _this3._chartData.setCrosshair({
            x: event.localX,
            y: cross.y,
            paneId: cross.paneId
          });
        }
      });
    }
  }, {
    key: "mouseDownEvent",
    value: function mouseDownEvent(event) {
      var _this4 = this;

      this._startScrollPoint = {
        x: event.localX,
        y: event.localY
      };

      this._chartData.startScroll();

      this._performCross(event, true, function (cross) {
        _this4._touchZoomed = false;

        if (_this4._touchPoint) {
          var xDif = event.localX - _this4._touchPoint.x;
          var yDif = event.localY - _this4._touchPoint.y;
          var radius = Math.sqrt(xDif * xDif + yDif * yDif);

          if (radius < TOUCH_MIN_RADIUS) {
            _this4._touchPoint = {
              x: event.localX,
              y: event.localY
            };

            _this4._chartData.setCrosshair({
              x: event.localX,
              y: cross.y,
              paneId: cross.paneId
            });
          } else {
            _this4._touchCancelCrossHair = true;
            _this4._touchPoint = null;

            _this4._chartData.setCrosshair();
          }
        } else {
          _this4._touchCancelCrossHair = false;
        }
      });
    }
  }, {
    key: "pressedMouseMoveEvent",
    value: function pressedMouseMoveEvent(event) {
      var _this5 = this;

      this._performCross(event, false, function (cross) {
        var crosshair = {
          x: event.localX,
          y: cross.y,
          paneId: cross.paneId
        };

        if (isTouch(event)) {
          if (_this5._touchPoint) {
            _this5._touchPoint = {
              x: event.localX,
              y: event.localY
            };

            _this5._chartData.setCrosshair(crosshair);

            return;
          } else {
            crosshair = null;
          }
        }

        var distance = event.localX - _this5._startScrollPoint.x;

        _this5._chartData.scroll(distance, crosshair);
      });
    }
  }, {
    key: "longTapEvent",
    value: function longTapEvent(event) {
      var _this6 = this;

      this._performCross(event, true, function (cross) {
        _this6._touchPoint = {
          x: event.localX,
          y: event.localY
        };

        _this6._chartData.setCrosshair({
          x: event.localX,
          y: cross.y,
          paneId: cross.paneId
        });
      });
    }
    /**
     * 处理十字光标
     * @param event
     * @param checkTouchEvent
     * @param performFuc
     * @param extendFun
     * @private
     */

  }, {
    key: "_performCross",
    value: function _performCross(event, checkTouchEvent, performFuc, extendFun) {
      if (checkTouchEvent && !isTouch(event)) {
        return;
      }

      if (!this._checkEventPointX(event.localX)) {
        if (extendFun) {
          extendFun();
        }

        return;
      }

      var isPerform = false;

      for (var paneId in this._paneContentSize) {
        var size = this._paneContentSize[paneId];

        if (event.localY > size.contentTop && event.localY < size.contentBottom) {
          isPerform = true;

          if (performFuc) {
            performFuc({
              paneId: paneId,
              y: event.localY - size.contentTop
            });
          }

          break;
        }
      }

      if (!isPerform && extendFun) {
        extendFun();
      }
    }
  }]);

  return ZoomScrollEventHandler;
}(EventHandler);

var OverlayEventHandler = /*#__PURE__*/function (_EventHandler) {
  _inherits(OverlayEventHandler, _EventHandler);

  var _super = _createSuper(OverlayEventHandler);

  function OverlayEventHandler(chartData) {
    var _this;

    _classCallCheck(this, OverlayEventHandler);

    _this = _super.call(this, chartData);
    _this._pressedGraphicMark = null;
    return _this;
  }
  /**
   * 处理覆盖物鼠标hover事件
   * @param overlays
   * @param preHoverOperate
   * @param coordinate
   * @param event
   * @return {*}
   * @private
   */


  _createClass(OverlayEventHandler, [{
    key: "_performOverlayMouseHover",
    value: function _performOverlayMouseHover(overlays, preHoverOperate, coordinate, event) {
      var hoverOperate;

      var _iterator = _createForOfIteratorHelper(overlays),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var overlay = _step.value;
          hoverOperate = overlay.checkMousePointOnGraphic(coordinate);

          if (hoverOperate) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!hoverOperate || preHoverOperate.id !== hoverOperate.id) {
        if (preHoverOperate.id && preHoverOperate.instance && isMouse(event)) {
          preHoverOperate.instance.onMouseLeave({
            id: preHoverOperate.id,
            points: preHoverOperate.instance.points(),
            event: event
          });
        }

        if (hoverOperate && hoverOperate.id !== preHoverOperate.id && hoverOperate.instance && isMouse(event)) {
          hoverOperate.instance.onMouseEnter({
            id: hoverOperate.id,
            points: hoverOperate.instance.points(),
            event: event
          });
        }
      }

      return hoverOperate;
    }
    /**
     * 鼠标抬起事件
     * @param event
     */

  }, {
    key: "mouseUpEvent",
    value: function mouseUpEvent(event) {
      if (this._pressedGraphicMark) {
        this._pressedGraphicMark = null;

        this._chartData.setDragGraphicMarkFlag(false);
      }
    }
  }, {
    key: "mouseMoveEvent",
    value: function mouseMoveEvent(event) {
      if (!this._checkEventPointX(event.localX) || !this._checkEventPointY(event.localY) || this._waitingForMouseMoveAnimationFrame) {
        return;
      }

      this._waitingForMouseMoveAnimationFrame = true;
      var coordinate = {
        x: event.localX,
        y: event.localY
      };

      var graphicMarks = this._chartData.graphicMarks();

      var visibleAnnotations = this._chartData.visibleAnnotations();

      var lastGraphicMark = graphicMarks[graphicMarks.length - 1];

      var preGraphicMarkHoverOperate = this._chartData.graphicMarkMouseOperate().hover;

      var preAnnotationHoverOperate = this._chartData.annotationMouseOperate();

      var graphicMarkHoverOperate;
      var graphicMarkClickOperate;
      var annotationHoverOperate;

      if (lastGraphicMark && lastGraphicMark.isDrawing()) {
        lastGraphicMark.mouseMoveForDrawing(coordinate);
        graphicMarkHoverOperate = lastGraphicMark.checkMousePointOnGraphic(coordinate);
        graphicMarkClickOperate = {
          id: '',
          element: GraphicMarkMouseOperateElement.NONE,
          elementIndex: -1
        };
      } else {
        graphicMarkHoverOperate = this._performOverlayMouseHover(graphicMarks, preGraphicMarkHoverOperate, coordinate, event);
        annotationHoverOperate = this._performOverlayMouseHover(visibleAnnotations, preAnnotationHoverOperate, coordinate, event);
      }

      this._chartData.setOverlayMouseOperate({
        hover: graphicMarkHoverOperate || {
          id: '',
          element: GraphicMarkMouseOperateElement.NONE,
          elementIndex: -1
        },
        click: graphicMarkClickOperate
      }, annotationHoverOperate || {
        id: ''
      });

      this._waitingForMouseMoveAnimationFrame = false;
    }
    /**
     * 鼠标按下事件
     * @param event
     */

  }, {
    key: "mouseDownEvent",
    value: function mouseDownEvent(event) {
      if (!this._checkEventPointX(event.localX) || !this._checkEventPointY(event.localY)) {
        return;
      }

      var coordinate = {
        x: event.localX,
        y: event.localY
      };

      var graphicMarks = this._chartData.graphicMarks();

      var lastGraphicMark = graphicMarks[graphicMarks.length - 1];
      var graphicMarkHoverOperate = {
        id: '',
        element: GraphicMarkMouseOperateElement.NONE,
        elementIndex: -1
      };
      var graphicMarkClickOperate;

      if (lastGraphicMark && lastGraphicMark.isDrawing()) {
        lastGraphicMark.mouseLeftButtonDownForDrawing(coordinate);
        graphicMarkClickOperate = lastGraphicMark.checkMousePointOnGraphic(coordinate);
      } else {
        var _iterator2 = _createForOfIteratorHelper(graphicMarks),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var graphicMark = _step2.value;
            graphicMarkClickOperate = graphicMark.checkMousePointOnGraphic(coordinate);

            if (graphicMarkClickOperate) {
              if (graphicMarkClickOperate.element === GraphicMarkMouseOperateElement.POINT) {
                this._pressedGraphicMark = graphicMark;

                this._chartData.setDragGraphicMarkFlag(true);

                graphicMarkHoverOperate = _objectSpread2({}, graphicMarkClickOperate);
              }

              graphicMark.onClick({
                id: graphicMarkClickOperate.id,
                points: graphicMark.points(),
                event: event
              });
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var visibleAnnotations = this._chartData.visibleAnnotations();

        var _iterator3 = _createForOfIteratorHelper(visibleAnnotations),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var annotation = _step3.value;
            var annotationOperate = annotation.checkMousePointOnGraphic(coordinate);

            if (annotationOperate) {
              annotation.onClick({
                id: annotationOperate.id,
                points: annotation.points(),
                event: event
              });
              break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      this._chartData.setOverlayMouseOperate({
        hover: graphicMarkHoverOperate,
        click: graphicMarkClickOperate || {
          id: '',
          element: GraphicMarkMouseOperateElement.NONE,
          elementIndex: -1
        }
      });
    }
  }, {
    key: "mouseRightDownEvent",
    value: function mouseRightDownEvent(event) {
      var graphicMark = this._chartData.graphicMarks().find(function (gm) {
        return gm.checkMousePointOnGraphic({
          x: event.localX,
          y: event.localY
        });
      });

      if (graphicMark && !graphicMark.onRightClick({
        id: graphicMark.id(),
        points: graphicMark.points(),
        event: event
      })) {
        this._chartData.removeGraphicMarkInstance(graphicMark.id());
      }

      var annotation = this._chartData.visibleAnnotations().find(function (an) {
        return an.checkMousePointOnGraphic({
          x: event.localX,
          y: event.localY
        });
      });

      if (annotation) {
        annotation.onRightClick({
          id: annotation.id(),
          points: annotation.points(),
          event: event
        });
      }
    }
  }, {
    key: "pressedMouseMoveEvent",
    value: function pressedMouseMoveEvent(event) {
      var graphicMarks = this._chartData.graphicMarks();

      var lastGraphicMark = graphicMarks[graphicMarks.length - 1];

      if ((!lastGraphicMark || !lastGraphicMark.isDrawing()) && this._pressedGraphicMark) {
        this._pressedGraphicMark.mousePressedMove({
          x: event.localX,
          y: event.localY
        }, event);

        this._chartData.invalidate(InvalidateLevel.OVERLAY);
      }
    }
  }, {
    key: "_checkEventPointY",
    value: function _checkEventPointY(y) {
      var size = this._paneContentSize[CANDLE_PANE_ID];
      return y > size.contentTop && y < size.contentBottom;
    }
  }]);

  return OverlayEventHandler;
}(EventHandler);

var KeyBoardCode = {
  EQUAL: 'Equal',
  MINUS: 'Minus',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight'
};

var KeyBoardEventHandler = /*#__PURE__*/function (_EventHandler) {
  _inherits(KeyBoardEventHandler, _EventHandler);

  var _super = _createSuper(KeyBoardEventHandler);

  function KeyBoardEventHandler() {
    _classCallCheck(this, KeyBoardEventHandler);

    return _super.apply(this, arguments);
  }

  _createClass(KeyBoardEventHandler, [{
    key: "keyBoardDownEvent",
    value:
    /**
     * 键盘事件
     * @param event
     */
    function keyBoardDownEvent(event) {
      if (event.shiftKey) {
        switch (event.code) {
          case KeyBoardCode.EQUAL:
            {
              this._chartData.zoom(0.5);

              break;
            }

          case KeyBoardCode.MINUS:
            {
              this._chartData.zoom(-0.5);

              break;
            }

          case KeyBoardCode.ARROW_LEFT:
            {
              this._chartData.startScroll();

              this._chartData.scroll(-3 * this._chartData.dataSpace());

              break;
            }

          case KeyBoardCode.ARROW_RIGHT:
            {
              this._chartData.startScroll();

              this._chartData.scroll(3 * this._chartData.dataSpace());

              break;
            }
        }
      }
    }
  }]);

  return KeyBoardEventHandler;
}(EventHandler);

var ChartEvent = /*#__PURE__*/function () {
  function ChartEvent(target, chartData) {
    _classCallCheck(this, ChartEvent);

    this._target = target;
    this._chartData = chartData;
    this._chartContentSize = {};
    this._event = new EventBase(this._target, {
      pinchStartEvent: this._pinchStartEvent.bind(this),
      pinchEvent: this._pinchEvent.bind(this),
      mouseUpEvent: this._mouseUpEvent.bind(this),
      mouseClickEvent: this._mouseClickEvent.bind(this),
      mouseDownEvent: this._mouseDownEvent.bind(this),
      mouseRightDownEvent: this._mouseRightDownEvent.bind(this),
      mouseLeaveEvent: this._mouseLeaveEvent.bind(this),
      mouseMoveEvent: this._mouseMoveEvent.bind(this),
      mouseWheelEvent: this._mouseWheelEvent.bind(this),
      pressedMouseMoveEvent: this._pressedMouseMoveEvent.bind(this),
      longTapEvent: this._longTapEvent.bind(this)
    }, {
      treatVertTouchDragAsPageScroll: false,
      treatHorzTouchDragAsPageScroll: false
    });
    this._boundKeyBoardDownEvent = this._keyBoardDownEvent.bind(this);

    this._target.addEventListener('keydown', this._boundKeyBoardDownEvent);

    this._boundContextMenuEvent = function (e) {
      e.preventDefault();
    };

    this._target.addEventListener('contextmenu', this._boundContextMenuEvent, false);

    this._zoomScrollEventHandler = new ZoomScrollEventHandler(chartData);
    this._overlayEventHandler = new OverlayEventHandler(chartData);
    this._keyBoardEventHandler = new KeyBoardEventHandler(chartData);
  }

  _createClass(ChartEvent, [{
    key: "_keyBoardDownEvent",
    value: function _keyBoardDownEvent(event) {
      this._keyBoardEventHandler.keyBoardDownEvent(event);
    }
  }, {
    key: "_pinchStartEvent",
    value: function _pinchStartEvent() {
      this._zoomScrollEventHandler.pinchStartEvent();
    }
  }, {
    key: "_pinchEvent",
    value: function _pinchEvent(middlePoint, scale) {
      this._zoomScrollEventHandler.pinchEvent(middlePoint, scale);
    }
  }, {
    key: "_mouseUpEvent",
    value: function _mouseUpEvent(event) {
      this._target.style.cursor = 'crosshair';

      if (this._shouldPerformOverlayEvent()) {
        event.localX -= this._chartContentSize.contentLeft;

        this._overlayEventHandler.mouseUpEvent(event);
      }
    }
  }, {
    key: "_mouseLeaveEvent",
    value: function _mouseLeaveEvent(event) {
      if (this._checkZoomScroll()) {
        event.localX -= this._chartContentSize.contentLeft;

        this._zoomScrollEventHandler.mouseLeaveEvent(event);
      }
    }
  }, {
    key: "_mouseMoveEvent",
    value: function _mouseMoveEvent(event) {
      event.localX -= this._chartContentSize.contentLeft;

      if (this._shouldPerformOverlayEvent()) {
        this._overlayEventHandler.mouseMoveEvent(event);
      }

      if (this._checkZoomScroll()) {
        this._zoomScrollEventHandler.mouseMoveEvent(event);
      }
    }
  }, {
    key: "_mouseWheelEvent",
    value: function _mouseWheelEvent(event) {
      if (this._checkZoomScroll()) {
        this._zoomScrollEventHandler.mouseWheelEvent(event);
      }
    }
  }, {
    key: "_mouseClickEvent",
    value: function _mouseClickEvent(event) {
      if (this._checkZoomScroll()) {
        event.localX -= this._chartContentSize.contentLeft;

        this._zoomScrollEventHandler.mouseClickEvent(event);
      }
    }
  }, {
    key: "_mouseDownEvent",
    value: function _mouseDownEvent(event) {
      this._target.style.cursor = 'pointer';
      event.localX -= this._chartContentSize.contentLeft;

      if (this._shouldPerformOverlayEvent()) {
        this._overlayEventHandler.mouseDownEvent(event);
      }

      if (this._checkZoomScroll()) {
        this._zoomScrollEventHandler.mouseDownEvent(event);
      }
    }
  }, {
    key: "_mouseRightDownEvent",
    value: function _mouseRightDownEvent(event) {
      if (this._shouldPerformOverlayEvent()) {
        event.localX -= this._chartContentSize.contentLeft;

        this._overlayEventHandler.mouseRightDownEvent(event);
      }
    }
  }, {
    key: "_pressedMouseMoveEvent",
    value: function _pressedMouseMoveEvent(event) {
      event.localX -= this._chartContentSize.contentLeft;

      if (this._chartData.dragGraphicMarkFlag()) {
        this._overlayEventHandler.pressedMouseMoveEvent(event); // 这里判断一下，如果是在拖拽图形标记，让十字光标不显示


        if (this._chartData.crosshair().paneId) {
          this._chartData.setCrosshair();
        }
      }

      if (this._checkZoomScroll()) {
        this._zoomScrollEventHandler.pressedMouseMoveEvent(event);
      }
    }
  }, {
    key: "_longTapEvent",
    value: function _longTapEvent(event) {
      if (this._checkZoomScroll()) {
        event.localX -= this._chartContentSize.contentLeft;

        this._zoomScrollEventHandler.longTapEvent(event);
      }
    }
  }, {
    key: "_checkZoomScroll",
    value: function _checkZoomScroll() {
      var graphicMarks = this._chartData.graphicMarks();

      var graphicMarkCount = graphicMarks.length;
      return !this._chartData.dragPaneFlag() && !this._chartData.dragGraphicMarkFlag() && (graphicMarkCount === 0 || !graphicMarks[graphicMarkCount - 1].isDrawing());
    }
    /**
     * 是否需要处理图形标记事件
     * @return {boolean}
     * @private
     */

  }, {
    key: "_shouldPerformOverlayEvent",
    value: function _shouldPerformOverlayEvent() {
      return this._chartData.graphicMarks().length > 0 || this._chartData.visibleAnnotations().length > 0;
    }
  }, {
    key: "setChartContentSize",
    value: function setChartContentSize(chartContentSize) {
      this._chartContentSize = chartContentSize;

      this._zoomScrollEventHandler.setChartContentSize(chartContentSize);

      this._overlayEventHandler.setChartContentSize(chartContentSize);
    }
  }, {
    key: "setPaneContentSize",
    value: function setPaneContentSize(paneContentSize) {
      this._zoomScrollEventHandler.setPaneContentSize(paneContentSize);

      this._overlayEventHandler.setPaneContentSize(paneContentSize);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._event.destroy();

      this._target.removeEventListener('keydown', this._boundKeyBoardDownEvent);

      this._target.removeEventListener('contextmenu', this._boundContextMenuEvent);
    }
  }]);

  return ChartEvent;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var previous = 0;
  return function () {
    var now = Date.now();
    var context = this;
    var args = arguments;

    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 渲染填充菱形
 * @param ctx
 * @param color
 * @param centerPoint
 * @param width
 * @param height
 */
function renderFillDiamond(ctx, color, centerPoint, width, height) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerPoint.x - width / 2, centerPoint.y);
  ctx.lineTo(centerPoint.x, centerPoint.y - height / 2);
  ctx.lineTo(centerPoint.x + width / 2, centerPoint.y);
  ctx.lineTo(centerPoint.x, centerPoint.y + height / 2);
  ctx.closePath();
  ctx.fill();
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 渲染填充菱形
 * @param ctx
 * @param color
 * @param centerPoint
 * @param width
 * @param height
 */
function renderFillTriangle(ctx, color, centerPoint, width, height) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerPoint.x - width / 2, centerPoint.y + height / 2);
  ctx.lineTo(centerPoint.x, centerPoint.y - height / 2);
  ctx.lineTo(centerPoint.x + width / 2, centerPoint.y + height / 2);
  ctx.closePath();
  ctx.fill();
}

/**
 * 注解
 */

var Annotation = /*#__PURE__*/function (_Overlay) {
  _inherits(Annotation, _Overlay);

  var _super = _createSuper(Annotation);

  function Annotation(_ref) {
    var _this;

    var id = _ref.id,
        point = _ref.point,
        chartData = _ref.chartData,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis,
        styles = _ref.styles;

    _classCallCheck(this, Annotation);

    _this = _super.call(this, {
      id: id,
      chartData: chartData,
      xAxis: xAxis,
      yAxis: yAxis
    });
    _this._point = point;
    _this._symbolCoordinate = {};

    _this.setStyles(styles, chartData.styleOptions().annotation);

    return _this;
  }
  /**
   * 绘制标识
   * @param ctx
   * @param isActive
   * @param styles
   * @private
   */


  _createClass(Annotation, [{
    key: "_drawSymbol",
    value: function _drawSymbol(ctx, isActive, styles) {
      var barSpace = this._chartData.barSpace();

      var symbolOptions = styles.symbol;
      var styleSize = symbolOptions.size;
      var styleActiveSize = symbolOptions.activeSize;
      var size = isActive ? isNumber(styleActiveSize) ? styleActiveSize : barSpace : isNumber(styleSize) ? styleSize : barSpace;
      var color = isActive ? symbolOptions.activeColor : symbolOptions.color;

      switch (symbolOptions.type) {
        case AnnotationSymbolType.CIRCLE:
          {
            renderFillCircle(ctx, color, this._symbolCoordinate, size / 2);
            break;
          }

        case AnnotationSymbolType.RECT:
          {
            renderFillRect(ctx, color, this._symbolCoordinate.x - size / 2, this._symbolCoordinate.y - size / 2, size, size);
            break;
          }

        case AnnotationSymbolType.DIAMOND:
          {
            renderFillDiamond(ctx, color, this._symbolCoordinate, size, size);
            break;
          }

        case AnnotationSymbolType.TRIANGLE:
          {
            renderFillTriangle(ctx, color, this._symbolCoordinate, size, size);
            break;
          }

        case AnnotationSymbolType.CUSTOM:
          {
            ctx.save();
            this.drawCustomSymbol({
              ctx: ctx,
              point: this._point,
              coordinate: this._symbolCoordinate,
              viewport: {
                width: this._xAxis.width(),
                height: this._yAxis.height(),
                barSpace: barSpace
              },
              styles: symbolOptions,
              isActive: isActive
            });
            ctx.restore();
            break;
          }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var styles = this._styles || this._chartData.styleOptions().annotation;

      var symbolOptions = styles.symbol;
      var offset = symbolOptions.offset || [];
      var y = 0;

      switch (symbolOptions.position) {
        case OverlayPosition.POINT:
          {
            y = this._yAxis.convertToPixel(this._point.price);
            break;
          }

        case OverlayPosition.TOP:
          {
            y = 0;
            break;
          }

        case OverlayPosition.BOTTOM:
          {
            y = this._yAxis.height();
            break;
          }
      }

      this._symbolCoordinate.y = y + (offset[1] || 0);

      var isActive = this._id === this._chartData.annotationMouseOperate().id;

      this._drawSymbol(ctx, isActive, styles);

      if (this.drawExtend) {
        ctx.save();
        this.drawExtend({
          ctx: ctx,
          point: this._point,
          coordinate: this._symbolCoordinate,
          viewport: {
            width: this._xAxis.width(),
            height: this._yAxis.height()
          },
          styles: styles,
          isActive: isActive
        });
        ctx.restore();
      }
    }
  }, {
    key: "checkMousePointOnGraphic",
    value: function checkMousePointOnGraphic(mouseCoordinate) {
      var barSpace = this._chartData.barSpace();

      var styles = this._styles || this._chartData.styleOptions().annotation;

      var symbolOptions = styles.symbol;
      var size = isNumber(symbolOptions.size) ? symbolOptions.size : barSpace;
      var isOn;

      switch (symbolOptions.type) {
        case AnnotationSymbolType.CIRCLE:
          {
            isOn = checkPointInCircle(this._symbolCoordinate, size / 2, mouseCoordinate);
            break;
          }

        case AnnotationSymbolType.RECT:
          {
            var coordinate1 = {
              x: this._symbolCoordinate.x - size / 2,
              y: this._symbolCoordinate.y - size / 2
            };
            var coordinate2 = {
              x: this._symbolCoordinate.x + size / 2,
              y: this._symbolCoordinate.y + size / 2
            };
            isOn = checkPointInRect(coordinate1, coordinate2, mouseCoordinate);
            break;
          }

        case AnnotationSymbolType.DIAMOND:
          {
            isOn = checkPointInDiamond(this._symbolCoordinate, size, size, mouseCoordinate);
            break;
          }

        case AnnotationSymbolType.TRIANGLE:
          {
            isOn = checkPointInTriangle([{
              x: this._symbolCoordinate.x - size / 2,
              y: this._symbolCoordinate.y + size / 2
            }, {
              x: this._symbolCoordinate.x,
              y: this._symbolCoordinate.y - size / 2
            }, {
              x: this._symbolCoordinate.x + size / 2,
              y: this._symbolCoordinate.y + size / 2
            }], mouseCoordinate);
            break;
          }

        case AnnotationSymbolType.CUSTOM:
          {
            isOn = this.checkPointInCustomSymbol({
              mouseCoordinate: mouseCoordinate,
              coordinate: this._symbolCoordinate,
              size: size
            });
            break;
          }
      }

      if (isOn) {
        return {
          id: this._id,
          instance: this
        };
      }
    }
    /**
     * 生成标识坐标
     * @param x
     */

  }, {
    key: "createSymbolCoordinate",
    value: function createSymbolCoordinate(x) {
      var styles = this._styles || this._chartData.styleOptions().annotation;

      var symbolOptions = styles.symbol;
      var offset = symbolOptions.offset || [];
      this._symbolCoordinate = {
        x: x + (offset[0] || 0)
      };
    }
    /**
     * 获取点
     * @return {*}
     */

  }, {
    key: "points",
    value: function points() {
      return this._point;
    }
    /**
     * 检查鼠标点是否在自定义标识内
     * @param mouseCoordinate
     * @param coordinate
     * @param size
     */

  }, {
    key: "checkPointInCustomSymbol",
    value: function checkPointInCustomSymbol(_ref2) {
      _ref2.mouseCoordinate;
          _ref2.coordinate;
          _ref2.size;
    }
    /**
     * 绘制自定义标识
     * @param ctx
     * @param point
     * @param coordinate
     * @param viewport
     * @param styles
     * @param isActive
     */

  }, {
    key: "drawCustomSymbol",
    value: function drawCustomSymbol(_ref3) {
      _ref3.ctx;
          _ref3.point;
          _ref3.coordinate;
          _ref3.viewport;
          _ref3.styles;
          _ref3.isActive;
    }
  }]);

  return Annotation;
}(Overlay);

var Tag = /*#__PURE__*/function (_Overlay) {
  _inherits(Tag, _Overlay);

  var _super = _createSuper(Tag);

  function Tag(_ref) {
    var _this;

    var id = _ref.id,
        point = _ref.point,
        text = _ref.text,
        mark = _ref.mark,
        chartData = _ref.chartData,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis,
        styles = _ref.styles;

    _classCallCheck(this, Tag);

    _this = _super.call(this, {
      id: id,
      chartData: chartData,
      xAxis: xAxis,
      yAxis: yAxis
    });
    _this._point = point || {};
    _this._text = text;
    _this._mark = mark;

    _this.setStyles(styles, chartData.styleOptions().tag);

    return _this;
  }
  /**
   * 更新
   * @param point
   * @param text
   * @param mark
   * @param styles
   * @return {boolean}
   */


  _createClass(Tag, [{
    key: "update",
    value: function update(_ref2) {
      var point = _ref2.point,
          text = _ref2.text,
          mark = _ref2.mark,
          styles = _ref2.styles;
      var success = false;

      if (isObject(point)) {
        this._point = point;
        success = true;
      }

      if (isValid(text)) {
        this._text = text;
        success = true;
      }

      if (isValid(mark)) {
        this._mark = mark;
        success = true;
      }

      if (this.setStyles(styles, this._chartData.styleOptions().tag)) {
        success = true;
      }

      return success;
    }
    /**
     * 绘制标记和线
     * @param ctx
     */

  }, {
    key: "drawMarkLine",
    value: function drawMarkLine(ctx) {
      var options = this._chartData.styleOptions();

      var yAxisOptions = options.yAxis;
      var tagOptions = this._styles || options.tag;

      var y = this._getY(tagOptions);

      ctx.save();

      this._drawLine(ctx, y, tagOptions.line);

      this._drawMark(ctx, y, tagOptions, yAxisOptions);

      ctx.restore();
    }
    /**
     * 绘制值
     */

  }, {
    key: "drawText",
    value: function drawText(ctx) {
      if (!isValid(this._text)) {
        return;
      }

      var options = this._chartData.styleOptions();

      var tagOptions = this._styles || options.tag;
      var tagTextOptions = tagOptions.text;
      ctx.save();
      ctx.font = createFont(tagTextOptions.size, tagTextOptions.weight, tagTextOptions.family);

      var rectWidth = this._getTextRectWidth(ctx, tagTextOptions);

      var rectHeight = tagTextOptions.paddingTop + tagTextOptions.paddingBottom + tagTextOptions.size;
      var x;

      if (this._yAxis.isFromYAxisZero()) {
        x = 0;
      } else {
        x = this._yAxis.width() - rectWidth;
      }

      var y = this._getY(tagOptions);

      renderFillRoundRect(ctx, tagTextOptions.backgroundColor, x, y - rectHeight / 2, rectWidth, rectHeight, tagTextOptions.borderRadius);
      renderText(ctx, tagTextOptions.color, x + tagTextOptions.paddingLeft, y, this._text);
      ctx.restore();
    }
    /**
     * 绘制线
     * @param ctx
     * @param y
     * @param tagLineOptions
     * @private
     */

  }, {
    key: "_drawLine",
    value: function _drawLine(ctx, y, tagLineOptions) {
      if (!tagLineOptions.show) {
        return;
      }

      ctx.strokeStyle = tagLineOptions.color;
      ctx.lineWidth = tagLineOptions.size;

      if (tagLineOptions.style === LineStyle.DASH) {
        ctx.setLineDash(tagLineOptions.dashValue);
      }

      renderHorizontalLine(ctx, y, 0, this._xAxis.width());
    }
    /**
     * 绘制标记
     * @param ctx
     * @param y
     * @param tagOptions
     * @param yAxisOptions
     * @private
     */

  }, {
    key: "_drawMark",
    value: function _drawMark(ctx, y, tagOptions, yAxisOptions) {
      if (!isValid(this._mark)) {
        return;
      }

      var tagMarkOptions = tagOptions.mark;
      ctx.font = createFont(tagMarkOptions.size, tagMarkOptions.weight, tagMarkOptions.family);
      var rectWidth = tagMarkOptions.paddingLeft + tagMarkOptions.paddingRight + calcTextWidth(ctx, this._mark);
      var rectHeight = tagMarkOptions.paddingTop + tagMarkOptions.paddingBottom + tagMarkOptions.size;
      var x;

      if (yAxisOptions.inside) {
        var valueRectWidth = 0;

        if (isValid(this._text)) {
          valueRectWidth = this._getTextRectWidth(ctx, tagOptions.text);
        }

        if (yAxisOptions.position === YAxisPosition.LEFT) {
          x = valueRectWidth;
        } else {
          x = this._xAxis.width() - valueRectWidth - rectWidth;
        }
      } else {
        if (yAxisOptions.position === YAxisPosition.LEFT) {
          x = 0;
        } else {
          x = this._xAxis.width() - rectWidth;
        }
      }

      renderFillRoundRect(ctx, tagMarkOptions.backgroundColor, x, y - rectHeight / 2, rectWidth, rectHeight, tagMarkOptions.borderRadius);
      ctx.textBaseline = 'middle';
      ctx.font = createFont(tagMarkOptions.size, tagMarkOptions.weight, tagMarkOptions.family);
      renderText(ctx, tagMarkOptions.color, x + tagMarkOptions.paddingLeft, y, this._mark);
    }
    /**
     * 获取坐标y值
     * @param tagOptions
     * @return {*}
     * @private
     */

  }, {
    key: "_getY",
    value: function _getY(tagOptions) {
      var offset = tagOptions.offset;

      switch (tagOptions.position) {
        case OverlayPosition.TOP:
          {
            return offset;
          }

        case OverlayPosition.BOTTOM:
          {
            return this._yAxis.height() + offset;
          }

        default:
          {
            return this._yAxis.convertToNicePixel(this._point.price) + offset;
          }
      }
    }
    /**
     * 获取值的矩形宽度
     * @param ctx
     * @param textOptions
     * @return {*}
     * @private
     */

  }, {
    key: "_getTextRectWidth",
    value: function _getTextRectWidth(ctx, textOptions) {
      ctx.font = createFont(textOptions.size, textOptions.weight, textOptions.family);
      return textOptions.paddingLeft + textOptions.paddingRight + calcTextWidth(ctx, this._text);
    }
  }]);

  return Tag;
}(Overlay);

var ChartPane = /*#__PURE__*/function () {
  function ChartPane(container, styleOptions) {
    _classCallCheck(this, ChartPane);

    this._initChartContainer(container);

    this._graphicMarkBaseId = 0;
    this._paneBaseId = 0;
    this._separatorDragStartTopPaneHeight = 0;
    this._separatorDragStartBottomPaneHeight = 0;
    this._chartData = new ChartData(styleOptions, {
      invalidate: this._invalidatePane.bind(this),
      crosshair: this._crosshairObserver.bind(this)
    });
    this._xAxisPane = new XAxisPane({
      container: this._chartContainer,
      chartData: this._chartData
    });
    this._panes = new Map([[CANDLE_PANE_ID, new CandlePane({
      container: this._chartContainer,
      chartData: this._chartData,
      xAxis: this._xAxisPane.xAxis(),
      id: CANDLE_PANE_ID
    })]]);
    this._separators = new Map();
    this._chartWidth = {};
    this._chartHeight = {};
    this._chartEvent = new ChartEvent(this._chartContainer, this._chartData);
    this.adjustPaneViewport(true, true, true);
  }
  /**
   * 初始化图表容器
   * @param container
   * @private
   */


  _createClass(ChartPane, [{
    key: "_initChartContainer",
    value: function _initChartContainer(container) {
      this._container = container;
      this._chartContainer = document.createElement('div');
      this._chartContainer.style.userSelect = 'none';
      this._chartContainer.style.webkitUserSelect = 'none';
      this._chartContainer.style.msUserSelect = 'none';
      this._chartContainer.style.MozUserSelect = 'none';
      this._chartContainer.style.webkitTapHighlightColor = 'transparent';
      this._chartContainer.style.position = 'relative';
      this._chartContainer.style.outline = 'none';
      this._chartContainer.style.borderStyle = 'none';
      this._chartContainer.style.width = '100%';
      this._chartContainer.style.cursor = 'crosshair';
      this._chartContainer.tabIndex = 1;
      container.appendChild(this._chartContainer);
    }
    /**
     * 十字光标观察者
     * @private
     */

  }, {
    key: "_crosshairObserver",
    value: function _crosshairObserver(_ref) {
      var dataIndex = _ref.dataIndex,
          kLineData = _ref.kLineData,
          x = _ref.x,
          y = _ref.y;

      if (this.chartData().hasAction(ActionType.CROSSHAIR)) {
        var technicalIndicatorData = {};

        this._panes.forEach(function (pane, id) {
          var data = {};
          pane.technicalIndicators().forEach(function (tech) {
            var result = tech.result;
            data[tech.name] = result[dataIndex];
          });
          technicalIndicatorData[id] = data;
        });

        this._chartData.actionExecute(ActionType.CROSSHAIR, {
          coordinate: {
            x: x,
            y: y
          },
          dataIndex: dataIndex,
          kLineData: kLineData,
          technicalIndicatorData: technicalIndicatorData
        });
      }
    }
    /**
     * 分割线拖拽开始
     * @param topPaneId
     * @param bottomPaneId
     * @private
     */

  }, {
    key: "_separatorStartDrag",
    value: function _separatorStartDrag(topPaneId, bottomPaneId) {
      this._separatorDragStartTopPaneHeight = this._panes.get(topPaneId).height();
      this._separatorDragStartBottomPaneHeight = this._panes.get(bottomPaneId).height();
    }
    /**
     * 分割线拖拽
     * @param dragDistance
     * @param topPaneId
     * @param bottomPaneId
     * @private
     */

  }, {
    key: "_separatorDrag",
    value: function _separatorDrag(dragDistance, topPaneId, bottomPaneId) {
      var topPaneHeight = this._separatorDragStartTopPaneHeight + dragDistance;
      var bottomPaneHeight = this._separatorDragStartBottomPaneHeight - dragDistance;

      if (topPaneHeight > this._separatorDragStartTopPaneHeight + this._separatorDragStartBottomPaneHeight) {
        topPaneHeight = this._separatorDragStartTopPaneHeight + this._separatorDragStartBottomPaneHeight;
        bottomPaneHeight = 0;
      }

      if (topPaneHeight < 0) {
        topPaneHeight = 0;
        bottomPaneHeight = this._separatorDragStartTopPaneHeight + this._separatorDragStartBottomPaneHeight;
      }

      this._panes.get(topPaneId).setHeight(topPaneHeight);

      this._panes.get(bottomPaneId).setHeight(bottomPaneHeight);

      this._chartData.actionExecute(ActionType.PANE_DRAG, {
        topPaneId: topPaneId,
        bottomPaneId: bottomPaneId,
        topPaneHeight: topPaneHeight,
        bottomPaneHeight: bottomPaneHeight
      });

      this.adjustPaneViewport(true, true, true, true, true);
    }
    /**
     * 更新所有pane
     * @private
     */

  }, {
    key: "_invalidatePane",
    value: function _invalidatePane() {
      var invalidateLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InvalidateLevel.FULL;

      if (invalidateLevel === InvalidateLevel.OVERLAY) {
        this._xAxisPane.invalidate(invalidateLevel);

        this._panes.forEach(function (pane) {
          pane.invalidate(invalidateLevel);
        });
      } else {
        var shouldMeasureWidth = false;

        this._panes.forEach(function (pane) {
          var should = pane.yAxis().computeAxis();

          if (should) {
            shouldMeasureWidth = should;
          }
        });

        this.adjustPaneViewport(false, shouldMeasureWidth, true);
      }
    }
    /**
     * 计算所有pane的指标
     * @private
     */

  }, {
    key: "_calcAllPaneTechnicalIndicator",
    value: function _calcAllPaneTechnicalIndicator() {
      var _this = this;

      var tasks = [];

      this._panes.forEach(function (pane) {
        tasks.push(Promise.resolve(pane.calcAllTechnicalIndicator()));
      });

      Promise.all(tasks).then(function (result) {
        var shouldMeasureWidth = result.indexOf(true) > -1;

        _this.adjustPaneViewport(false, shouldMeasureWidth, true);
      });
    }
    /**
     * 测量pane高度
     * @private
     */

  }, {
    key: "_measurePaneHeight",
    value: function _measurePaneHeight() {
      var _this2 = this;

      var styleOptions = this._chartData.styleOptions();

      var paneHeight = this._container.offsetHeight;
      var separatorSize = styleOptions.separator.size;
      var separatorTotalHeight = separatorSize * this._separators.size;

      var xAxisHeight = this._xAxisPane.xAxis().getSelfHeight();

      var paneExcludeXAxisSeparatorHeight = paneHeight - xAxisHeight - separatorTotalHeight;
      var techPaneTotalHeight = 0;

      this._panes.forEach(function (pane) {
        if (pane.id() !== CANDLE_PANE_ID) {
          var _paneHeight = pane.height();

          if (techPaneTotalHeight + _paneHeight > paneExcludeXAxisSeparatorHeight) {
            pane.setHeight(paneExcludeXAxisSeparatorHeight - techPaneTotalHeight);
            techPaneTotalHeight = paneExcludeXAxisSeparatorHeight;
          } else {
            techPaneTotalHeight += _paneHeight;
          }
        }
      });

      var candlePaneHeight = paneExcludeXAxisSeparatorHeight - techPaneTotalHeight;
      var paneContentSize = {};
      paneContentSize[CANDLE_PANE_ID] = {
        contentTop: 0,
        contentBottom: candlePaneHeight
      };
      var contentTop = candlePaneHeight;
      var contentBottom = candlePaneHeight;

      this._panes.get(CANDLE_PANE_ID).setHeight(candlePaneHeight);

      this._chartHeight[CANDLE_PANE_ID] = candlePaneHeight;

      this._panes.forEach(function (pane) {
        if (pane.id() !== CANDLE_PANE_ID) {
          var _paneHeight2 = pane.height();

          contentBottom += _paneHeight2 + separatorSize;
          paneContentSize[pane.id()] = {
            contentTop: contentTop,
            contentBottom: contentBottom
          };
          _this2._chartHeight[pane.id()] = _paneHeight2;
          contentTop = contentBottom;
        }
      });

      this._xAxisPane.setHeight(xAxisHeight);

      this._chartHeight.xAxis = xAxisHeight;
      this._chartHeight.total = paneHeight;

      this._chartEvent.setPaneContentSize(paneContentSize);
    }
    /**
     * 测量pan宽度
     * @private
     */

  }, {
    key: "_measurePaneWidth",
    value: function _measurePaneWidth() {
      var _this3 = this;

      var styleOptions = this._chartData.styleOptions();

      var yAxisOptions = styleOptions.yAxis;
      var isYAxisLeft = yAxisOptions.position === YAxisPosition.LEFT;
      var isOutside = !yAxisOptions.inside;
      var paneWidth = this._container.offsetWidth;
      var mainWidth;
      var yAxisWidth = Number.MIN_SAFE_INTEGER;
      var yAxisOffsetLeft;
      var mainOffsetLeft;

      if (isOutside) {
        this._panes.forEach(function (pane) {
          yAxisWidth = Math.max(yAxisWidth, pane.yAxis().getSelfWidth());
        });

        mainWidth = paneWidth - yAxisWidth;

        if (isYAxisLeft) {
          yAxisOffsetLeft = 0;
          mainOffsetLeft = yAxisWidth;
        } else {
          mainOffsetLeft = 0;
          yAxisOffsetLeft = paneWidth - yAxisWidth;
        }
      } else {
        mainWidth = paneWidth;
        yAxisWidth = paneWidth;
        yAxisOffsetLeft = 0;
        mainOffsetLeft = 0;
      }

      this._chartData.setTotalDataSpace(mainWidth);

      this._panes.forEach(function (pane, paneId) {
        pane.setWidth(mainWidth, yAxisWidth);
        pane.setOffsetLeft(mainOffsetLeft, yAxisOffsetLeft);

        var separator = _this3._separators.get(paneId);

        separator && separator.setSize(mainOffsetLeft, mainWidth);
      });

      this._chartWidth = {
        content: mainWidth,
        yAxis: yAxisWidth,
        total: paneWidth
      };

      this._xAxisPane.setWidth(mainWidth, yAxisWidth);

      this._xAxisPane.setOffsetLeft(mainOffsetLeft, yAxisOffsetLeft);

      this._chartEvent.setChartContentSize({
        contentLeft: mainOffsetLeft,
        contentRight: mainOffsetLeft + mainWidth
      });
    }
    /**
     * 调整窗口尺寸
     * @param shouldMeasureHeight
     * @param shouldMeasureWidth
     * @param shouldLayout
     * @param shouldComputeAxis
     * @param shouldForceComputeAxis
     */

  }, {
    key: "adjustPaneViewport",
    value: function adjustPaneViewport(shouldMeasureHeight, shouldMeasureWidth, shouldLayout, shouldComputeAxis, shouldForceComputeAxis) {
      if (shouldMeasureHeight) {
        this._measurePaneHeight();
      }

      var isAdjust = false;

      if (shouldComputeAxis) {
        this._panes.forEach(function (pane) {
          var adjust = pane.yAxis().computeAxis(shouldForceComputeAxis);

          if (!isAdjust) {
            isAdjust = adjust;
          }
        });
      }

      if (!shouldComputeAxis && shouldMeasureWidth || shouldComputeAxis && isAdjust) {
        this._measurePaneWidth();
      }

      if (shouldLayout) {
        this._xAxisPane.xAxis().computeAxis(true);

        this._xAxisPane.layout();

        this._panes.forEach(function (pane) {
          pane.layout();
        });
      }
    }
    /**
     * 获取图表上的数据
     * @returns {ChartData}
     */

  }, {
    key: "chartData",
    value: function chartData() {
      return this._chartData;
    }
    /**
     * 覆盖技术指标
     * @param techInstance
     * @param name
     * @param calcParams
     * @param calcParamsAllowDecimal
     * @param precision
     * @param styles
     */

  }, {
    key: "overrideTechnicalIndicator",
    value: function overrideTechnicalIndicator(techInstance, _ref2) {
      var _this4 = this;

      var name = _ref2.name,
          calcParams = _ref2.calcParams,
          calcParamsAllowDecimal = _ref2.calcParamsAllowDecimal,
          precision = _ref2.precision,
          styles = _ref2.styles;
      techInstance.setCalcParamsAllowDecimal(calcParamsAllowDecimal);
      var calcParamsSuccess = techInstance.setCalcParams(calcParams);
      var precisionSuccess = techInstance.setPrecision(precision);

      var defaultTechnicalStyleOptions = this._chartData.styleOptions().technicalIndicator;

      var styleSuccess = techInstance.setStyles(styles, defaultTechnicalStyleOptions);

      if (calcParamsSuccess || precisionSuccess || styleSuccess) {
        var shouldAdjust = false;
        var tasks = [];

        this._panes.forEach(function (pane) {
          var techs = pane.technicalIndicators();

          if (techs.has(name)) {
            shouldAdjust = true;
            var tech = techs.get(name);

            if (calcParamsSuccess) {
              tasks.push(Promise.resolve(pane.calcTechnicalIndicator(tech)));
            }
          }
        });

        if (shouldAdjust) {
          Promise.all(tasks).then(function (_) {
            _this4.adjustPaneViewport(false, true, true, true);
          });
        }
      }
    }
    /**
     * 处理数组数据
     * @param dataList
     * @param more
     * @param extendFun
     * @private
     */

  }, {
    key: "_applyDataList",
    value: function _applyDataList(dataList, more, extendFun) {
      if (isArray(dataList)) {
        if (isFunction(extendFun)) {
          extendFun();
        }

        this._chartData.addData(dataList, 0, more);

        this._calcAllPaneTechnicalIndicator();
      }
    }
    /**
     * 添加新数据
     * @param dataList
     * @param more
     */

  }, {
    key: "applyNewData",
    value: function applyNewData(dataList, more) {
      var _this5 = this;

      this._applyDataList(dataList, more, function () {
        _this5._chartData.clearDataList();
      });
    }
    /**
     * 添加更多数据
     * @param dataList
     * @param more
     */

  }, {
    key: "applyMoreData",
    value: function applyMoreData(dataList, more) {
      this._applyDataList(dataList, more);
    }
    /**
     * 更新数据
     * @param data
     */

  }, {
    key: "updateData",
    value: function updateData(data) {
      var dataList = this._chartData.dataList();

      var dataSize = dataList.length; // 这里判断单个数据应该添加到哪个位置

      var timestamp = formatValue(data, 'timestamp', 0);
      var lastDataTimestamp = formatValue(dataList[dataSize - 1], 'timestamp', 0);

      if (timestamp >= lastDataTimestamp) {
        var pos = dataSize;

        if (timestamp === lastDataTimestamp) {
          pos = dataSize - 1;
        }

        this._chartData.addData(data, pos);

        this._calcAllPaneTechnicalIndicator();
      }
    }
    /**
     * 移除指标
     * @param paneId
     * @param name
     */

  }, {
    key: "removeTechnicalIndicator",
    value: function removeTechnicalIndicator(paneId, name) {
      var _this6 = this;

      if (this._panes.has(paneId)) {
        if (paneId === CANDLE_PANE_ID) {
          if (this._panes.get(CANDLE_PANE_ID).removeTechnicalIndicator(name)) {
            this.adjustPaneViewport(false, true, true, true);
          }
        } else {
          var pane = this._panes.get(paneId);

          var removed = pane.removeTechnicalIndicator(name);

          if (pane.isEmptyTechnicalIndicator()) {
            pane.destroy();

            var deleteSeparatorTopPaneId = this._separators.get(paneId).topPaneId();

            this._separators.get(paneId).destroy();

            this._panes.delete(paneId);

            this._separators.delete(paneId);

            this._separators.forEach(function (separator) {
              var topPaneId = separator.topPaneId();

              if (!_this6._separators.has(topPaneId)) {
                separator.updatePaneId(deleteSeparatorTopPaneId);
              }
            });

            this.adjustPaneViewport(true, true, true, true, true);
          } else {
            if (removed) {
              this.adjustPaneViewport(false, true, true, true);
            }
          }
        }
      }
    }
    /**
     * 设置指标类型
     * @param tech 技术指标实例
     * @param isStack 是否覆盖
     * @param options 配置
     */

  }, {
    key: "createTechnicalIndicator",
    value: function createTechnicalIndicator(tech, isStack) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this._panes.has(options.id)) {
        this.setPaneOptions(options, this._panes.get(options.id).setTechnicalIndicator(tech, isStack));
        return options.id;
      }

      var id = options.id || "".concat(TECHNICAL_INDICATOR_PANE_ID_PREFIX).concat(++this._paneBaseId);
      var dragEnabled = isBoolean(options.dragEnabled) ? options.dragEnabled : true;

      this._separators.set(id, new SeparatorPane(this._chartContainer, this._chartData, Array.from(this._panes.keys()).pop(), id, dragEnabled, {
        startDrag: this._separatorStartDrag.bind(this),
        drag: throttle(this._separatorDrag.bind(this), 50)
      }));

      this._panes.set(id, new TechnicalIndicatorPane({
        container: this._chartContainer,
        chartData: this._chartData,
        xAxis: this._xAxisPane.xAxis(),
        name: tech.name,
        id: id,
        height: options.height || DEFAULT_TECHNICAL_INDICATOR_PANE_HEIGHT
      }));

      this.adjustPaneViewport(true, true, true, true, true);
      return id;
    }
    /**
     * 获取窗口技术指标
     * @param paneId
     * @return {{}}
     */

  }, {
    key: "getPaneTechnicalIndicator",
    value: function getPaneTechnicalIndicator(paneId) {
      var technicalIndicatorInfo = function technicalIndicatorInfo(pane) {
        var paneTechs = {};
        pane.technicalIndicators().forEach(function (tech) {
          paneTechs[tech.name] = createTechnicalIndicatorInfo(tech);
        });
        return paneTechs;
      };

      if (isValid(paneId)) {
        if (this._panes.has(paneId)) {
          return technicalIndicatorInfo(this._panes.get(paneId));
        }
      } else {
        var techs = {};

        this._panes.forEach(function (pane) {
          techs[pane.id()] = technicalIndicatorInfo(pane);
        });

        return techs;
      }

      return {};
    }
    /**
     * 创建图形标记
     * @param GraphicMark
     * @param options
     */

  }, {
    key: "createGraphicMark",
    value: function createGraphicMark(GraphicMark) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var id = options.id,
          points = options.points,
          styles = options.styles,
          lock = options.lock,
          onDrawStart = options.onDrawStart,
          onDrawing = options.onDrawing,
          onDrawEnd = options.onDrawEnd,
          onClick = options.onClick,
          onRightClick = options.onRightClick,
          onPressedMove = options.onPressedMove,
          onMouseEnter = options.onMouseEnter,
          onMouseLeave = options.onMouseLeave,
          onRemove = options.onRemove;
      var graphicMarkId = id || "".concat(GRAPHIC_MARK_ID_PREFIX).concat(++this._graphicMarkBaseId);
      var graphicMarkInstance = new GraphicMark({
        id: graphicMarkId,
        chartData: this._chartData,
        xAxis: this._xAxisPane.xAxis(),
        yAxis: this._panes.get(CANDLE_PANE_ID).yAxis(),
        points: points,
        styles: styles,
        lock: lock
      });

      if (isFunction(onDrawStart)) {
        graphicMarkInstance.onDrawStart = onDrawStart;
        graphicMarkInstance.onDrawStart({
          id: graphicMarkId
        });
      }

      if (isFunction(onDrawing)) {
        graphicMarkInstance.onDrawing = onDrawing;
      }

      if (isFunction(onDrawEnd)) {
        graphicMarkInstance.onDrawEnd = onDrawEnd;
      }

      if (isFunction(onClick)) {
        graphicMarkInstance.onClick = onClick;
      }

      if (isFunction(onRightClick)) {
        graphicMarkInstance.onRightClick = onRightClick;
      }

      if (isFunction(onPressedMove)) {
        graphicMarkInstance.onPressedMove = onPressedMove;
      }

      if (isFunction(onMouseEnter)) {
        graphicMarkInstance.onMouseEnter = onMouseEnter;
      }

      if (isFunction(onMouseLeave)) {
        graphicMarkInstance.onMouseLeave = onMouseLeave;
      }

      if (isFunction(onRemove)) {
        graphicMarkInstance.onRemove = onRemove;
      }

      if (this._chartData.addGraphicMarkInstance(graphicMarkInstance)) {
        return graphicMarkId;
      }
    }
    /**
     * 创建注解
     * @param annotations
     */

  }, {
    key: "createAnnotation",
    value: function createAnnotation(annotations) {
      var _this7 = this;

      var instances = [];
      annotations.forEach(function (_ref3) {
        var point = _ref3.point,
            styles = _ref3.styles,
            checkPointInCustomSymbol = _ref3.checkPointInCustomSymbol,
            drawCustomSymbol = _ref3.drawCustomSymbol,
            drawExtend = _ref3.drawExtend,
            onClick = _ref3.onClick,
            onRightClick = _ref3.onRightClick,
            onMouseEnter = _ref3.onMouseEnter,
            onMouseLeave = _ref3.onMouseLeave;

        if (point && point.timestamp) {
          var annotationInstance = new Annotation({
            id: point.timestamp,
            chartData: _this7._chartData,
            point: point,
            xAxis: _this7._xAxisPane.xAxis(),
            yAxis: _this7._panes.get(CANDLE_PANE_ID).yAxis(),
            styles: styles
          });

          if (isFunction(drawExtend)) {
            annotationInstance.drawExtend = drawExtend;
          }

          if (isFunction(checkPointInCustomSymbol)) {
            annotationInstance.checkPointInCustomSymbol = checkPointInCustomSymbol;
          }

          if (isFunction(drawCustomSymbol)) {
            annotationInstance.drawCustomSymbol = drawCustomSymbol;
          }

          if (isFunction(onClick)) {
            annotationInstance.onClick = onClick;
          }

          if (isFunction(onRightClick)) {
            annotationInstance.onRightClick = onRightClick;
          }

          if (isFunction(onMouseEnter)) {
            annotationInstance.onMouseEnter = onMouseEnter;
          }

          if (isFunction(onMouseLeave)) {
            annotationInstance.onMouseLeave = onMouseLeave;
          }

          instances.push(annotationInstance);
        }
      });

      if (instances.length > 0) {
        this._chartData.addAnnotations(instances);
      }
    }
    /**
     * 创建标签
     * @param tags
     */

  }, {
    key: "createTag",
    value: function createTag(tags) {
      var _this8 = this;

      var instances = [];
      var shouldUpdate = false;
      var shouldAdd = false;
      tags.forEach(function (_ref4) {
        var id = _ref4.id,
            point = _ref4.point,
            text = _ref4.text,
            mark = _ref4.mark,
            styles = _ref4.styles;

        if (isValid(id)) {
          var tag = _this8._chartData.getTag(id);

          if (tag) {
            var updateSuccess = tag.update({
              point: point,
              text: text,
              mark: mark,
              styles: styles
            });

            if (!shouldUpdate) {
              shouldUpdate = updateSuccess;
            }
          } else {
            shouldAdd = true;
            instances.push(new Tag({
              id: id,
              point: point,
              text: text,
              mark: mark,
              styles: styles,
              chartData: _this8._chartData,
              xAxis: _this8._xAxisPane.xAxis(),
              yAxis: _this8._panes.get(CANDLE_PANE_ID).yAxis()
            }));
          }
        }
      });

      if (shouldAdd) {
        this._chartData.addTags(instances);
      } else {
        if (shouldUpdate) {
          this._invalidatePane(InvalidateLevel.OVERLAY);
        }
      }
    }
    /**
     * 设置窗体参数
     * @param options
     * @param forceShouldAdjust
     */

  }, {
    key: "setPaneOptions",
    value: function setPaneOptions(options, forceShouldAdjust) {
      var shouldAdjust = forceShouldAdjust;
      var shouldMeasureHeight = false;

      if (options.id !== CANDLE_PANE_ID) {
        var pane = this._panes.get(options.id);

        if (pane) {
          if (isNumber(options.height) && options.height > 0 && pane.height() !== options.height) {
            shouldAdjust = true;
            pane.setHeight(options.height);
            shouldMeasureHeight = true;
          }

          if (isBoolean(options.dragEnabled)) {
            this._separators.get(options.id).setDragEnabled(options.dragEnabled);
          }
        }
      }

      if (shouldAdjust) {
        this.adjustPaneViewport(shouldMeasureHeight, true, true, true);
      }
    }
    /**
     * 设置时区
     * @param timezone
     */

  }, {
    key: "setTimezone",
    value: function setTimezone(timezone) {
      this._chartData.setTimezone(timezone);

      this._xAxisPane.xAxis().computeAxis(true);

      this._xAxisPane.invalidate(InvalidateLevel.FULL);
    }
    /**
     * 将值装换成像素
     * @param timestamp
     * @param value
     * @param paneId
     * @param dataIndexXAxis
     * @param absoluteYAxis
     */

  }, {
    key: "convertToPixel",
    value: function convertToPixel(value, _ref5) {
      var _this9 = this;

      var _ref5$paneId = _ref5.paneId,
          paneId = _ref5$paneId === void 0 ? CANDLE_PANE_ID : _ref5$paneId,
          dataIndexXAxis = _ref5.dataIndexXAxis,
          absoluteYAxis = _ref5.absoluteYAxis;
      var values = [].concat(value);
      var coordinates = [];

      var separatorSize = this._chartData.styleOptions().separator.size;

      var absoluteTop = 0;

      var panes = this._panes.values();

      var _iterator = _createForOfIteratorHelper(panes),
          _step;

      try {
        var _loop = function _loop() {
          var pane = _step.value;

          if (pane.id() === paneId) {
            coordinates = values.map(function (_ref6) {
              var xAxisValue = _ref6.xAxisValue,
                  yAxisValue = _ref6.yAxisValue;
              var coordinate = {};

              if (isValid(xAxisValue)) {
                var dataIndex = dataIndexXAxis ? xAxisValue : _this9._chartData.timestampToDataIndex(xAxisValue);
                coordinate.x = _this9._xAxisPane.xAxis().convertToPixel(dataIndex);
              }

              if (isValid(yAxisValue)) {
                var y = pane.yAxis().convertToPixel(yAxisValue);
                coordinate.y = absoluteYAxis ? absoluteTop + y : y;
              }

              return coordinate;
            });
            return "break";
          }

          absoluteTop += pane.height() + separatorSize;
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return isArray(value) ? coordinates : coordinates[0] || {};
    }
    /**
     * 将像素转换成值
     * @param coordinate
     * @param paneId
     * @param dataIndexXAxis
     * @param absoluteYAxis
     * @return {{}[]|*[]}
     */

  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(coordinate, _ref7) {
      var _this10 = this;

      var _ref7$paneId = _ref7.paneId,
          paneId = _ref7$paneId === void 0 ? CANDLE_PANE_ID : _ref7$paneId,
          dataIndexXAxis = _ref7.dataIndexXAxis,
          absoluteYAxis = _ref7.absoluteYAxis;
      var coordinates = [].concat(coordinate);
      var values = [];

      var separatorSize = this._chartData.styleOptions().separator.size;

      var absoluteTop = 0;

      var panes = this._panes.values();

      var _iterator2 = _createForOfIteratorHelper(panes),
          _step2;

      try {
        var _loop2 = function _loop2() {
          var pane = _step2.value;

          if (pane.id() === paneId) {
            values = coordinates.map(function (_ref8) {
              var x = _ref8.x,
                  y = _ref8.y;
              var value = {};

              if (isValid(x)) {
                var v = _this10._xAxisPane.xAxis().convertFromPixel(x);

                value.xAxisValue = dataIndexXAxis ? v : _this10._chartData.dataIndexToTimestamp(v);
              }

              if (isValid(y)) {
                var ry = absoluteYAxis ? y - absoluteTop : y;
                value.yAxisValue = pane.yAxis().convertFromPixel(ry);
              }

              return value;
            });
            return "break";
          }

          absoluteTop += pane.height() + separatorSize;
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ret2 = _loop2();

          if (_ret2 === "break") break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return isArray(coordinate) ? values : values[0] || {};
    }
    /**
     * 图表宽度
     * @return {*|{}}
     */

  }, {
    key: "chartWidth",
    value: function chartWidth() {
      return this._chartWidth;
    }
    /**
     * 图表高度
     * @return {*|{}}
     */

  }, {
    key: "chartHeight",
    value: function chartHeight() {
      return this._chartHeight;
    }
    /**
     * 获取图表转换为图片后url
     * @param includeOverlay,
     * @param type
     * @param backgroundColor
     */

  }, {
    key: "getConvertPictureUrl",
    value: function getConvertPictureUrl(includeOverlay, type, backgroundColor) {
      var _this11 = this;

      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      var width = this._chartContainer.offsetWidth;
      var height = this._chartContainer.offsetHeight;
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px");
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      var offsetTop = 0;

      this._panes.forEach(function (pane, paneId) {
        if (paneId !== CANDLE_PANE_ID) {
          var separator = _this11._separators.get(paneId);

          ctx.drawImage(separator.getImage(), 0, offsetTop, width, separator.height());
          offsetTop += separator.height();
        }

        ctx.drawImage(pane.getImage(includeOverlay), 0, offsetTop, width, pane.height());
        offsetTop += pane.height();
      });

      ctx.drawImage(this._xAxisPane.getImage(includeOverlay), 0, offsetTop, width, this._xAxisPane.height());
      return canvas.toDataURL("image/".concat(type));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._panes.forEach(function (pane) {
        pane.destroy();
      });

      this._separators.forEach(function (pane) {
        pane.destroy();
      });

      this._panes.clear();

      this._separators.clear();

      this._xAxisPane.destroy();

      this._container.removeChild(this._chartContainer);

      this._chartEvent.destroy();
    }
  }]);

  return ChartPane;
}();

var Chart = /*#__PURE__*/function () {
  function Chart(container, styleOptions) {
    _classCallCheck(this, Chart);

    this._chartPane = new ChartPane(container, styleOptions);
  }
  /**
   * 获取宽尺寸
   * @return {*|{}}
   */


  _createClass(Chart, [{
    key: "getWidth",
    value: function getWidth() {
      return this._chartPane.chartWidth();
    }
    /**
     * 获取高度尺寸
     * @return {*|{}}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this._chartPane.chartHeight();
    }
    /**
     * 设置样式配置
     * @param options
     */

  }, {
    key: "setStyleOptions",
    value: function setStyleOptions(options) {
      if (!isObject(options)) {
        logWarn('setStyleOptions', 'options');
        return;
      }

      this._chartPane.chartData().applyStyleOptions(options);

      this._chartPane.adjustPaneViewport(true, true, true, true, true);
    }
    /**
     * 获取样式配置
     * @returns {[]|*[]}
     */

  }, {
    key: "getStyleOptions",
    value: function getStyleOptions() {
      return clone(this._chartPane.chartData().styleOptions());
    }
    /**
     * 覆盖技术指标
     * @param override
     */

  }, {
    key: "overrideTechnicalIndicator",
    value: function overrideTechnicalIndicator(override) {
      if (!isObject(override)) {
        logWarn('overrideTechnicalIndicator', 'override', 'override must be an object!!!');
        return;
      }

      var tech = this._chartPane.chartData().getTechnicalIndicatorInstance(override.name);

      if (!tech) {
        logWarn('overrideTechnicalIndicator', 'override.name', 'can not find the corresponding technical indicator!!!');
        return;
      }

      this._chartPane.overrideTechnicalIndicator(tech, override);
    }
    /**
     * 获取技术指标名字获取技术指标
     * @param name
     * @return {{}|{series: *, calcParams: *, precision: *, name: *}}
     */

  }, {
    key: "getTechnicalIndicatorByName",
    value: function getTechnicalIndicatorByName(name) {
      return this._chartPane.chartData().getTechnicalIndicatorInfo(name);
    }
    /**
     * 获取窗口上的技术指标
     * @param paneId
     * @return {{}}
     */

  }, {
    key: "getTechnicalIndicatorByPaneId",
    value: function getTechnicalIndicatorByPaneId(paneId) {
      return this._chartPane.getPaneTechnicalIndicator(paneId);
    }
    /**
     * 设置价格数量精度
     * @param pricePrecision
     * @param volumePrecision
     */

  }, {
    key: "setPriceVolumePrecision",
    value: function setPriceVolumePrecision(pricePrecision, volumePrecision) {
      if (!isNumber(pricePrecision) || pricePrecision < 0) {
        logWarn('setPriceVolumePrecision', 'pricePrecision', 'pricePrecision must be a number and greater than zero!!!');
        return;
      }

      if (!isNumber(volumePrecision) || volumePrecision < 0) {
        logWarn('setPriceVolumePrecision', 'volumePrecision', 'volumePrecision must be a number and greater than zero!!!');
        return;
      }

      this._chartPane.chartData().setPriceVolumePrecision(pricePrecision, volumePrecision);
    }
    /**
     * 设置时区
     * @param timezone
     */

  }, {
    key: "setTimezone",
    value: function setTimezone(timezone) {
      this._chartPane.setTimezone(timezone);
    }
    /**
     * 获取当前时区
     */

  }, {
    key: "getTimezone",
    value: function getTimezone() {
      return this._chartPane.chartData().timezone();
    }
    /**
     * 重置尺寸，总是会填充父容器
     */

  }, {
    key: "resize",
    value: function resize() {
      this._chartPane.adjustPaneViewport(true, true, true, true, true);
    }
    /**
     * 设置右边间距
     * @param space
     */

  }, {
    key: "setOffsetRightSpace",
    value: function setOffsetRightSpace(space) {
      if (!isNumber(space)) {
        logWarn('setOffsetRightSpace', 'space', 'space must be a number!!!');
        return;
      }

      this._chartPane.chartData().setOffsetRightSpace(space, true);
    }
    /**
     * 设置左边可见的最小bar数量
     * @param barCount
     */

  }, {
    key: "setLeftMinVisibleBarCount",
    value: function setLeftMinVisibleBarCount(barCount) {
      if (!isNumber(barCount) || barCount <= 0) {
        logWarn('setLeftMinVisibleBarCount', 'barCount', 'barCount must be a number and greater than zero!!!');
        return;
      }

      this._chartPane.chartData().setLeftMinVisibleBarCount(Math.ceil(barCount));
    }
    /**
     * 设置右边可见的最小bar数量
     * @param barCount
     */

  }, {
    key: "setRightMinVisibleBarCount",
    value: function setRightMinVisibleBarCount(barCount) {
      if (!isNumber(barCount) || barCount <= 0) {
        logWarn('setRightMinVisibleBarCount', 'barCount', 'barCount must be a number and greater than zero!!!');
        return;
      }

      this._chartPane.chartData().setRightMinVisibleBarCount(Math.ceil(barCount));
    }
    /**
     * 设置一条数据的空间
     * @param space
     */

  }, {
    key: "setDataSpace",
    value: function setDataSpace(space) {
      if (!isNumber(space)) {
        logWarn('setDataSpace', 'space', 'space must be a number!!!');
        return;
      }

      this._chartPane.chartData().setDataSpace(space);
    }
    /**
     * 清空数据
     */

  }, {
    key: "clearData",
    value: function clearData() {
      this._chartPane.chartData().clearDataList();
    }
    /**
     * 获取数据源
     */

  }, {
    key: "getDataList",
    value: function getDataList() {
      return this._chartPane.chartData().dataList();
    }
    /**
     * 添加新数据
     * @param dataList
     * @param more
     */

  }, {
    key: "applyNewData",
    value: function applyNewData(dataList, more) {
      if (!isArray(dataList)) {
        logWarn('applyNewData', 'dataList', 'dataList must be an array!!!');
        return;
      }

      this._chartPane.applyNewData(dataList, more);
    }
    /**
     * 添加历史更多数据
     * @param dataList
     * @param more
     */

  }, {
    key: "applyMoreData",
    value: function applyMoreData(dataList, more) {
      if (!isArray(dataList)) {
        logWarn('applyMoreData', 'dataList', 'dataList must be an array!!!');
        return;
      }

      this._chartPane.applyMoreData(dataList, more);
    }
    /**
     * 更新数据
     * @param data
     */

  }, {
    key: "updateData",
    value: function updateData(data) {
      if (!isObject(data) || isArray(data)) {
        logWarn('updateData', 'data');
        return;
      }

      this._chartPane.updateData(data);
    }
    /**
     * 设置加载更多回调
     * @param cb
     */

  }, {
    key: "loadMore",
    value: function loadMore(cb) {
      if (!isFunction(cb)) {
        logWarn('loadMore', 'cb', 'cb must be a method!!!');
        return;
      }

      this._chartPane.chartData().setLoadMoreCallback(cb);
    }
    /**
     * 创建一个技术指标
     * @param name 指标名
     * @param isStack 是否覆盖
     * @param paneOptions
     * @returns {string|null}
     */

  }, {
    key: "createTechnicalIndicator",
    value: function createTechnicalIndicator(name, isStack, paneOptions) {
      var tech = this._chartPane.chartData().getTechnicalIndicatorInstance(name);

      if (!tech) {
        logWarn('createTechnicalIndicator', 'name', 'can not find the corresponding technical indicator!!!');
        return null;
      }

      return this._chartPane.createTechnicalIndicator(tech, isStack, paneOptions);
    }
    /**
     * 添加自定义技术指标
     * @param tech
     */

  }, {
    key: "addCustomTechnicalIndicator",
    value: function addCustomTechnicalIndicator(tech) {
      if (!isObject(tech)) {
        logWarn('addCustomTechnicalIndicator', 'technicalIndicator', 'technicalIndicator must be an object or array!!!');
        return;
      }

      var techs = [].concat(tech);

      this._chartPane.chartData().addCustomTechnicalIndicator(techs);
    }
    /**
     * 移除一个技术指标
     * @param paneId
     * @param name
     */

  }, {
    key: "removeTechnicalIndicator",
    value: function removeTechnicalIndicator(paneId, name) {
      this._chartPane.removeTechnicalIndicator(paneId, name);
    }
    /**
     * 创建图形标记
     * @param name
     * @param options
     */

  }, {
    key: "createGraphicMark",
    value: function createGraphicMark(name, options) {
      var graphicMarkMapping = this._chartPane.chartData().graphicMarkMapping();

      var GraphicMark = graphicMarkMapping[name];

      if (!GraphicMark) {
        logWarn('createGraphicMark', 'name', 'can not find the corresponding graphic mark!!!');
        return null;
      }

      var id = this._chartPane.createGraphicMark(GraphicMark, options);

      if (!id) {
        logWarn('createGraphicMark', 'options.id', 'duplicate id!!!');
      }

      return id;
    }
    /**
     * 获取图形标记
     * @param id
     * @return {{name, lock: *, styles, id, points: (*|*[])}[]|{name, lock: *, styles, id, points: (*|*[])}}
     */

  }, {
    key: "getGraphicMark",
    value: function getGraphicMark(id) {
      return this._chartPane.chartData().getGraphicMark(id);
    }
    /**
     * 设置图形标记配置
     * @param id
     * @param options
     */

  }, {
    key: "setGraphicMarkOptions",
    value: function setGraphicMarkOptions(id, options) {
      this._chartPane.chartData().setGraphicMarkOptions(id, options);
    }
    /**
     * 添加自定义图形标记
     * @param graphicMark
     */

  }, {
    key: "addCustomGraphicMark",
    value: function addCustomGraphicMark(graphicMark) {
      if (!isObject(graphicMark)) {
        logWarn('addCustomGraphicMark', 'graphicMark', 'graphicMark must be an object or array!!!');
        return;
      }

      var graphicMarks = [].concat(graphicMark);

      this._chartPane.chartData().addCustomGraphicMark(graphicMarks);
    }
    /**
     * 移除图形标记
     * @param graphicMarkId
     */

  }, {
    key: "removeGraphicMark",
    value: function removeGraphicMark(graphicMarkId) {
      this._chartPane.chartData().removeGraphicMarkInstance(graphicMarkId);
    }
    /**
     * 创建注解
     * @param annotation
     */

  }, {
    key: "createAnnotation",
    value: function createAnnotation(annotation) {
      if (!isObject(annotation)) {
        logWarn('createAnnotation', 'annotation', 'annotation must be an object or array!!!');
        return;
      }

      var annotations = [].concat(annotation);

      this._chartPane.createAnnotation(annotations);
    }
    /**
     * 移除注解
     */

  }, {
    key: "removeAnnotation",
    value: function removeAnnotation(points) {
      this._chartPane.chartData().removeAnnotation(points);
    }
    /**
     * 创建标签
     * @param tag
     */

  }, {
    key: "createTag",
    value: function createTag(tag) {
      if (!isObject(tag)) {
        logWarn('createTag', 'tag', 'tag must be an object or array!!!');
        return;
      }

      var tags = [].concat(tag);

      this._chartPane.createTag(tags);
    }
    /**
     * 移除标签
     * @param id
     */

  }, {
    key: "removeTag",
    value: function removeTag(id) {
      this._chartPane.chartData().removeTag(id);
    }
    /**
     * 设置窗口属性
     * @param options
     */

  }, {
    key: "setPaneOptions",
    value: function setPaneOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._chartPane.setPaneOptions(options, false);
    }
    /**
     * 设置是否可以缩放
     * @param enabled
     */

  }, {
    key: "setZoomEnabled",
    value: function setZoomEnabled(enabled) {
      this._chartPane.chartData().setZoomEnabled(enabled);
    }
    /**
     * 是否可以缩放
     * @return {boolean}
     */

  }, {
    key: "isZoomEnabled",
    value: function isZoomEnabled() {
      return this._chartPane.chartData().zoomEnabled();
    }
    /**
     * 设置是否可以拖拽滚动
     * @param enabled
     */

  }, {
    key: "setScrollEnabled",
    value: function setScrollEnabled(enabled) {
      this._chartPane.chartData().setScrollEnabled(enabled);
    }
    /**
     * 是否可以拖拽滚动
     * @return {boolean}
     */

  }, {
    key: "isScrollEnabled",
    value: function isScrollEnabled() {
      return this._chartPane.chartData().scrollEnabled();
    }
    /**
     * 按距离滚动
     * @param distance
     * @param animationDuration
     */

  }, {
    key: "scrollByDistance",
    value: function scrollByDistance(distance, animationDuration) {
      var _this = this;

      if (!isNumber(distance)) {
        logWarn('scrollByDistance', 'distance', 'distance must be a number!!!');
        return;
      }

      if (isNumber(animationDuration) && animationDuration > 0) {
        this._chartPane.chartData().startScroll();

        var startTime = new Date().getTime();

        var animation = function animation() {
          var progress = (new Date().getTime() - startTime) / animationDuration;
          var finished = progress >= 1;
          var dis = finished ? distance : distance * progress;

          _this._chartPane.chartData().scroll(dis);

          if (!finished) {
            requestAnimationFrame(animation);
          }
        };

        animation();
      } else {
        this._chartPane.chartData().startScroll();

        this._chartPane.chartData().scroll(distance);
      }
    }
    /**
     * 滚动到实时位置
     * @param animationDuration
     */

  }, {
    key: "scrollToRealTime",
    value: function scrollToRealTime(animationDuration) {
      var difBarCount = this._chartPane.chartData().offsetRightBarCount() - this._chartPane.chartData().offsetRightSpace() / this._chartPane.chartData().dataSpace();

      var distance = difBarCount * this._chartPane.chartData().dataSpace();

      this.scrollByDistance(distance, animationDuration);
    }
    /**
     * 滚动到指定位置
     * @param position
     * @param animationDuration
     */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(position, animationDuration) {
      if (!isNumber(position)) {
        logWarn('scrollToPosition', 'position', 'position must be a number!!!');
        return;
      }

      var distance = (this._chartPane.chartData().dataList().length - 1 - position) * this._chartPane.chartData().dataSpace();

      this.scrollByDistance(distance, animationDuration);
    }
    /**
     * 在某个坐标点缩放
     * @param scale
     * @param coordinate
     * @param animationDuration
     */

  }, {
    key: "zoomAtCoordinate",
    value: function zoomAtCoordinate(scale, coordinate, animationDuration) {
      var _this2 = this;

      if (!isNumber(scale)) {
        logWarn('zoomAtCoordinate', 'scale', 'scale must be a number!!!');
        return;
      }

      if (isNumber(animationDuration) && animationDuration > 0) {
        var dataSpace = this._chartPane.chartData().dataSpace();

        var scaleDataSpace = dataSpace * scale;
        var difSpace = scaleDataSpace - dataSpace;
        var startTime = new Date().getTime();

        var animation = function animation() {
          var progress = (new Date().getTime() - startTime) / animationDuration;
          var finished = progress >= 1;
          var progressDataSpace = finished ? difSpace : difSpace * progress;

          _this2._chartPane.chartData().zoom(progressDataSpace / dataSpace, coordinate);

          if (!finished) {
            requestAnimationFrame(animation);
          }
        };

        animation();
      } else {
        this._chartPane.chartData().zoom(scale, coordinate);
      }
    }
    /**
     * 在某个位置缩放
     * @param scale
     * @param position
     * @param animationDuration
     */

  }, {
    key: "zoomAtPosition",
    value: function zoomAtPosition(scale, position, animationDuration) {
      if (!isNumber(scale)) {
        logWarn('zoomAtPosition', 'scale', 'scale must be a number!!!');
        return;
      }

      if (!isNumber(position)) {
        logWarn('zoomAtPosition', 'position', 'position must be a number!!!');
        return;
      }

      var x = this._chartPane.chartData().dataIndexToCoordinate(position);

      this.zoomAtCoordinate(scale, {
        x: x
      }, animationDuration);
    }
    /**
     * 将值装换成像素
     * @param value
     * @param finder
     */

  }, {
    key: "convertToPixel",
    value: function convertToPixel(value, finder) {
      return this._chartPane.convertToPixel(value, finder);
    }
    /**
     * 将像素转换成值
     * @param coordinate
     * @param finder
     */

  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(coordinate, finder) {
      return this._chartPane.convertFromPixel(coordinate, finder);
    }
    /**
     * 订阅图表动作
     * @param type
     * @param callback
     */

  }, {
    key: "subscribeAction",
    value: function subscribeAction(type, callback) {
      if (type === 'drawCandle' || type === 'drawTechnicalIndicator') {
        logWarn('subscribeAction', '', 'the types drawCandle and drawTechnicalIndicator have been deprecated, please use createAnnotation instead!!!');
      }

      if (!this._chartPane.chartData().subscribeAction(type, callback)) {
        logWarn('subscribeAction', 'type', 'type does not exist!!!');
      }
    }
    /**
     * 取消订阅图表动作
     * @param type
     * @param callback
     */

  }, {
    key: "unsubscribeAction",
    value: function unsubscribeAction(type, callback) {
      if (!this._chartPane.chartData().unsubscribeAction(type, callback)) {
        logWarn('unsubscribeAction', 'type', 'type does not exist!!!');
      }
    }
    /**
     * 获取将图表装换成图片后的url
     * @param includeTooltip
     * @param includeGraphicMark
     * @param type
     * @param backgroundColor
     */

  }, {
    key: "getConvertPictureUrl",
    value: function getConvertPictureUrl(includeTooltip, includeGraphicMark) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'jpeg';
      var backgroundColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#FFFFFF';

      if (type !== 'png' && type !== 'jpeg' && type !== 'bmp') {
        logWarn('getConvertPictureUrl', 'type', 'type only supports jpeg, png and bmp!!!');
        return;
      }

      return this._chartPane.getConvertPictureUrl(includeTooltip, type, backgroundColor);
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._chartPane.destroy();
    }
  }]);

  return Chart;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var instances = {};
var chartBaseId = 1;
var CHART_NAME_PREFIX = 'k_line_chart_';
/**
 * 获取版本号
 * @returns {string}
 */

function version() {
  return '7.5.0';
}
/**
 * 初始化
 * @param ds
 * @param style
 * @returns {Chart}
 */


function init(ds) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logTag();
  var errorMessage = 'The chart cannot be initialized correctly. Please check the parameters. The chart container cannot be null and child elements need to be added!!!';
  var dom;

  if (!ds) {
    logError('', '', errorMessage);
    return null;
  }

  if (isString(ds)) {
    dom = document.getElementById(ds);
  } else {
    dom = ds;
  }

  if (!isContainerDom(dom)) {
    logError('', '', errorMessage);
    return null;
  }

  var chart = instances[dom.chartId || ''];

  if (chart) {
    logWarn('', '', 'The chart has been initialized on the dom！！！');
    return chart;
  }

  var id = "".concat(CHART_NAME_PREFIX).concat(chartBaseId++);
  chart = new Chart(dom, style);
  chart.id = id;
  dom.chartId = id;
  instances[id] = chart;
  return chart;
}
/**
 * 销毁
 * @param dcs
 */


function dispose(dcs) {
  if (dcs) {
    var id;

    if (isString(dcs)) {
      var dom = document.getElementById(dcs);
      id = dom && dom.chartId;
    } else if (isContainerDom(dcs)) {
      id = dcs.chartId;
    } else if (dcs instanceof Chart) {
      id = dcs.id;
    }

    if (id) {
      instances[id].destroy();
      delete instances[id];
    }
  }
}

exports.dispose = dispose;
exports.extension = extension;
exports.init = init;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=klinecharts.simple.js.map
