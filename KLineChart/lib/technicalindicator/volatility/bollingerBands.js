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
 * 计算布林指标中的标准差
 * @param dataList
 * @param ma
 * @return {number}
 */
function getBollMd(dataList, ma) {
  var dataSize = dataList.length;
  var sum = 0;
  dataList.forEach(function (data) {
    var closeMa = data.close - ma;
    sum += closeMa * closeMa;
  });
  var b = sum > 0;
  sum = Math.abs(sum);
  var md = Math.sqrt(sum / dataSize);
  return b ? md : -1 * md;
}
/**
 * BOLL
 */


var _default = {
  name: 'BOLL',
  series: 'price',
  calcParams: [20, 2],
  calcParamsAllowDecimal: {
    1: true
  },
  precision: 2,
  shouldOhlc: true,
  plots: [{
    key: 'up',
    title: 'UP: ',
    type: 'line'
  }, {
    key: 'mid',
    title: 'MID: ',
    type: 'line'
  }, {
    key: 'dn',
    title: 'DN: ',
    type: 'line'
  }],
  calcTechnicalIndicator: function calcTechnicalIndicator(dataList, calcParams) {
    var p = calcParams[0] - 1;
    var closeSum = 0;
    return dataList.map(function (kLineData, i) {
      var close = kLineData.close;
      var boll = {};
      closeSum += close;

      if (i >= p) {
        boll.mid = closeSum / calcParams[0];
        var md = getBollMd(dataList.slice(i - p, i + 1), boll.mid);
        boll.up = boll.mid + calcParams[1] * md;
        boll.dn = boll.mid - calcParams[1] * md;
        closeSum -= dataList[i - p].close;
      }

      return boll;
    });
  }
};
exports.default = _default;