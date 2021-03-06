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
 * mtm
 * 公式 MTM（N日）=C－CN
 */
var _default = {
  name: 'MTM',
  calcParams: [12, 6],
  plots: [{
    key: 'mtm',
    title: 'MTM: ',
    type: 'line'
  }, {
    key: 'maMtm',
    title: 'MAMTM: ',
    type: 'line'
  }],
  calcTechnicalIndicator: function calcTechnicalIndicator(dataList, calcParams) {
    var mtmSum = 0;
    var result = [];
    dataList.forEach(function (kLineData, i) {
      var mtm = {};

      if (i >= calcParams[0]) {
        var close = kLineData.close;
        var agoClose = dataList[i - calcParams[0]].close;
        mtm.mtm = close - agoClose;
        mtmSum += mtm.mtm;

        if (i >= calcParams[0] + calcParams[1] - 1) {
          mtm.maMtm = mtmSum / calcParams[1];
          mtmSum -= result[i - (calcParams[1] - 1)].mtm;
        }
      }

      result.push(mtm);
    });
    return result;
  }
};
exports.default = _default;