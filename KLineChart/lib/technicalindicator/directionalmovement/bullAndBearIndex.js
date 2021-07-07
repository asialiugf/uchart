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
 * 多空指标
 * 公式: BBI = (MA(CLOSE, M) + MA(CLOSE, N) + MA(CLOSE, O) + MA(CLOSE, P)) / 4
 *
 */
var _default = {
  name: 'BBI',
  series: 'price',
  precision: 2,
  calcParams: [3, 6, 12, 24],
  shouldCheckParamCount: true,
  shouldOhlc: true,
  plots: [{
    key: 'bbi',
    title: 'BBI: ',
    type: 'line'
  }],
  calcTechnicalIndicator: function calcTechnicalIndicator(kLineDataList, calcParams) {
    var maxParam = Math.max.apply(null, calcParams);
    var closeSums = [];
    var mas = [];
    return kLineDataList.map(function (kLineData, i) {
      var bbi = {};
      var close = kLineData.close;
      calcParams.forEach(function (param, index) {
        closeSums[index] = (closeSums[index] || 0) + close;

        if (i >= param - 1) {
          mas[index] = closeSums[index] / param;
          closeSums[index] -= kLineDataList[i - (param - 1)].close;
        }
      });

      if (i >= maxParam - 1) {
        var maSum = 0;
        mas.forEach(function (ma) {
          maSum += ma;
        });
        bbi.bbi = maSum / 4;
      }

      return bbi;
    });
  }
};
exports.default = _default;