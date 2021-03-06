"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
 * MA 移动平均
 */
var _default = {
  name: 'MA',
  series: 'price',
  calcParams: [5, 10, 30, 60],
  precision: 2,
  shouldCheckParamCount: false,
  shouldOhlc: true,
  plots: [{
    key: 'ma5',
    title: 'MA5: ',
    type: 'line'
  }, {
    key: 'ma10',
    title: 'MA10: ',
    type: 'line'
  }, {
    key: 'ma30',
    title: 'MA30: ',
    type: 'line'
  }, {
    key: 'ma60',
    title: 'MA60: ',
    type: 'line'
  }],
  regeneratePlots: function regeneratePlots(params) {
    return params.map(function (p) {
      return {
        key: "ma".concat(p),
        title: "MA".concat(p, ": "),
        type: 'line'
      };
    });
  },
  calcTechnicalIndicator: function calcTechnicalIndicator(dataList, calcParams, plots) {
    var closeSums = [];
    return dataList.map(function (kLineData, i) {
      var ma = {};
      var close = kLineData.close;
      calcParams.forEach(function (param, j) {
        closeSums[j] = (closeSums[j] || 0) + close;

        if (i >= param - 1) {
          ma[plots[j].key] = closeSums[j] / param;
          closeSums[j] -= dataList[i - (param - 1)].close;
        }
      });
      return ma;
    });
  }
};
exports.default = _default;