"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _calcHnLn = _interopRequireDefault(require("../calcHnLn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * KDJ
 *
 * 当日K值=2/3×前一日K值+1/3×当日RSV
 * 当日D值=2/3×前一日D值+1/3×当日K值
 * 若无前一日K 值与D值，则可分别用50来代替。
 * J值=3*当日K值-2*当日D值
 */
var _default = {
  name: 'KDJ',
  calcParams: [9, 3, 3],
  plots: [{
    key: 'k',
    title: 'K: ',
    type: 'line'
  }, {
    key: 'd',
    title: 'D: ',
    type: 'line'
  }, {
    key: 'j',
    title: 'J: ',
    type: 'line'
  }],
  calcTechnicalIndicator: function calcTechnicalIndicator(dataList, calcParams) {
    var result = [];
    dataList.forEach(function (kLineData, i) {
      var kdj = {};
      var close = kLineData.close;

      if (i >= calcParams[0] - 1) {
        var lhn = (0, _calcHnLn.default)(dataList.slice(i - (calcParams[0] - 1), i + 1));
        var ln = lhn.ln;
        var hn = lhn.hn;
        var hnSubLn = hn - ln;
        var rsv = (close - ln) / (hnSubLn === 0 ? 1 : hnSubLn) * 100;
        kdj.k = ((calcParams[1] - 1) * (result[i - 1].k || 50) + rsv) / calcParams[1];
        kdj.d = ((calcParams[2] - 1) * (result[i - 1].d || 50) + kdj.k) / calcParams[2];
        kdj.j = 3.0 * kdj.k - 2.0 * kdj.d;
      }

      result.push(kdj);
    });
    return result;
  }
};
exports.default = _default;