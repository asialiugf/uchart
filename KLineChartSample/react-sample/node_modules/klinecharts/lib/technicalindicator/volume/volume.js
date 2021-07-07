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
var _default = {
  name: 'VOL',
  series: 'volume',
  calcParams: [5, 10, 20],
  shouldCheckParamCount: false,
  shouldFormatBigNumber: true,
  precision: 0,
  baseValue: 0,
  minValue: 0,
  plots: [{
    key: 'ma5',
    title: 'MA5: ',
    type: 'line'
  }, {
    key: 'ma10',
    title: 'MA10: ',
    type: 'line'
  }, {
    key: 'ma20',
    title: 'MA20: ',
    type: 'line'
  }, {
    key: 'volume',
    title: 'VOLUME: ',
    type: 'bar',
    color: function color(data, options) {
      var kLineData = data.currentData.kLineData || {};

      if (kLineData.close > kLineData.open) {
        return options.bar.upColor;
      } else if (kLineData.close < kLineData.open) {
        return options.bar.downColor;
      }

      return options.bar.noChangeColor;
    }
  }],
  regeneratePlots: function regeneratePlots(params) {
    var plots = params.map(function (p) {
      return {
        key: "ma".concat(p),
        title: "MA".concat(p, ": "),
        type: 'line'
      };
    });
    plots.push({
      key: 'volume',
      title: 'VOLUME: ',
      type: 'bar',
      color: function color(data, options) {
        var kLineData = data.currentData.kLineData || {};

        if (kLineData.close > kLineData.open) {
          return options.bar.upColor;
        } else if (kLineData.close < kLineData.open) {
          return options.bar.downColor;
        }

        return options.bar.noChangeColor;
      }
    });
    return plots;
  },
  calcTechnicalIndicator: function calcTechnicalIndicator(dataList, calcParams, plots) {
    var volSums = [];
    return dataList.map(function (kLineData, i) {
      var volume = kLineData.volume || 0;
      var vol = {
        volume: volume
      };
      calcParams.forEach(function (param, j) {
        volSums[j] = (volSums[j] || 0) + volume;

        if (i >= param - 1) {
          vol[plots[j].key] = volSums[j] / param;
          volSums[j] -= dataList[i - (param - 1)].volume;
        }
      });
      return vol;
    });
  }
};
exports.default = _default;