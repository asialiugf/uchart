"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphicHelper = require("./graphicHelper");

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
  name: 'verticalRayLine',
  totalStep: 3,
  checkMousePointOn: function checkMousePointOn(key, type, coordinates, mouseCoordinate) {
    return (0, _graphicHelper.checkPointOnRayLine)(coordinates[0], coordinates[1], mouseCoordinate);
  },
  createGraphicDataSource: function createGraphicDataSource(step, points, coordinates, viewport) {
    var point = {
      x: coordinates[0].x,
      y: 0
    };

    if (coordinates[1] && coordinates[0].y < coordinates[1].y) {
      point.y = viewport.height;
    }

    return [{
      type: 'line',
      isDraw: true,
      isCheck: true,
      dataSource: [[coordinates[0], point]]
    }];
  },
  performMousePressedMove: function performMousePressedMove(points, pressedPointIndex, _ref) {
    var dataIndex = _ref.dataIndex,
        timestamp = _ref.timestamp;
    points[0].timestamp = timestamp;
    points[0].dataIndex = dataIndex;
    points[1].timestamp = timestamp;
    points[1].dataIndex = dataIndex;
  },
  performMouseMoveForDrawing: function performMouseMoveForDrawing(step, points, _ref2) {
    var timestamp = _ref2.timestamp,
        dataIndex = _ref2.dataIndex;

    if (step === 2) {
      points[0].timestamp = timestamp;
      points[0].dataIndex = dataIndex;
    }
  }
};
exports.default = _default;