"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistance = getDistance;
exports.getTriangleSquare = getTriangleSquare;
exports.getRotatePoint = getRotatePoint;
exports.getLinearSlopeIntercept = getLinearSlopeIntercept;
exports.getLinearYFromPoints = getLinearYFromPoints;
exports.getLinearYFromSlopeIntercept = getLinearYFromSlopeIntercept;
exports.checkPointOnStraightLine = checkPointOnStraightLine;
exports.checkPointOnRayLine = checkPointOnRayLine;
exports.checkPointOnSegment = checkPointOnSegment;
exports.checkPointInCircle = checkPointInCircle;
exports.checkPointOnCircle = checkPointOnCircle;
exports.checkPointOnArc = checkPointOnArc;
exports.checkPointInTriangle = checkPointInTriangle;
exports.checkPointInDiamond = checkPointInDiamond;
exports.checkPointInRect = checkPointInRect;
exports.getRayLine = getRayLine;
exports.getParallelLines = getParallelLines;
exports.DEVIATION = void 0;

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
 * 获取两点之间的距离
 * @param point1
 * @param point2
 * @return {number}
 */

exports.DEVIATION = DEVIATION;

function getDistance(point1, point2) {
  var xDif = point1.x - point2.x;
  var yDif = point1.y - point2.y;
  return Math.sqrt(xDif * xDif + yDif * yDif);
}
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
 * 获取一点绕另一点旋转一定角度后新的点坐标
 * @param point 旋转点
 * @param targetPoint 参照点
 * @param angle 角度
 * @return {{x: *, y: *}}
 */


function getRotatePoint(point, targetPoint, angle) {
  var x = (point.x - targetPoint.x) * Math.cos(angle) - (point.y - targetPoint.y) * Math.sin(angle) + targetPoint.x;
  var y = (point.x - targetPoint.x) * Math.sin(angle) + (point.y - targetPoint.y) * Math.cos(angle) + targetPoint.y;
  return {
    x: x,
    y: y
  };
}
/**
 * 获取一次函数斜率和截距，即 y = kx + b 中的k值和b值
 * @param point1
 * @param point2
 */


function getLinearSlopeIntercept(point1, point2) {
  var difX = point1.x - point2.x;

  if (difX !== 0) {
    var k = (point1.y - point2.y) / difX;
    var b = point1.y - k * point1.x;
    return {
      k: k,
      b: b
    };
  }
}
/**
 * 获取点在两点决定的一次函数上的y值
 * @param point1
 * @param point2
 * @param targetPoint
 */


function getLinearYFromPoints(point1, point2, targetPoint) {
  var kb = getLinearSlopeIntercept(point1, point2);
  return getLinearYFromSlopeIntercept(kb, targetPoint);
}
/**
 * 获取点在斜率和截距确定的线上的y值
 * @param kb
 * @param targetPoint
 */


function getLinearYFromSlopeIntercept(kb, targetPoint) {
  if (kb) {
    return targetPoint.x * kb.k + kb.b;
  }

  return targetPoint.y;
}
/**
 * 点是否在线上
 * @param point1
 * @param point2
 * @param targetPoint
 */


function checkPointOnStraightLine(point1, point2, targetPoint) {
  if (!targetPoint || !point1 || !point2) {
    return false;
  }

  if (point1.x === point2.x) {
    return Math.abs(targetPoint.x - point1.x) < DEVIATION;
  }

  var kb = getLinearSlopeIntercept(point1, point2);
  var y = getLinearYFromSlopeIntercept(kb, targetPoint);
  var yDif = Math.abs(y - targetPoint.y);
  return yDif * yDif / (kb.k * kb.k + 1) < DEVIATION * DEVIATION;
}
/**
 * 点是否在线段上
 * @param point1
 * @param point2
 * @param targetPoint
 * @returns {boolean}
 */


function checkPointOnRayLine(point1, point2, targetPoint) {
  if (checkPointOnStraightLine(point1, point2, targetPoint)) {
    if (point1.x === point2.x) {
      if (point1.y < point2.y) {
        return point1.y - targetPoint.y < DEVIATION;
      } else {
        return targetPoint.y - point1.y < DEVIATION;
      }
    }

    if (point1.x < point2.x) {
      return point1.x - targetPoint.x < DEVIATION;
    } else {
      return targetPoint.x - point1.x < DEVIATION;
    }
  }

  return false;
}
/**
 * 判断点是否在线段上面
 * @param point1
 * @param point2
 * @param targetPoint
 */


function checkPointOnSegment(point1, point2, targetPoint) {
  if (checkPointOnStraightLine(point1, point2, targetPoint)) {
    if (point1.x === point2.x) {
      return Math.abs(point1.y - targetPoint.y) + Math.abs(point2.y - targetPoint.y) - Math.abs(point1.y - point2.y) < DEVIATION * 2;
    }

    return Math.abs(point1.x - targetPoint.x) + Math.abs(point2.x - targetPoint.x) - Math.abs(point1.x - point2.x) < DEVIATION * 2;
  }

  return false;
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
 * 点是否在圆上
 * @param circleCenterPoint
 * @param radius
 * @param targetPoint
 * @return {boolean}
 */


function checkPointOnCircle(circleCenterPoint, radius, targetPoint) {
  if (!targetPoint) {
    return false;
  }

  return Math.abs(getDistance(targetPoint, circleCenterPoint) - radius) < DEVIATION;
}
/**
 * 检查点是否在圆弧上
 * @param circleCenterPoint
 * @param radius
 * @param startAngle
 * @param endAngle
 * @param targetPoint
 * @return {boolean}
 */


function checkPointOnArc(circleCenterPoint, radius, startAngle, endAngle, targetPoint) {
  if (checkPointOnCircle(circleCenterPoint, radius, targetPoint)) {
    var startPointX = radius * Math.cos(startAngle) + circleCenterPoint.x;
    var startPointY = radius * Math.sin(startAngle) + circleCenterPoint.y;
    var endPointX = radius * Math.cos(endAngle) + circleCenterPoint.x;
    var endPointY = radius * Math.sin(endAngle) + circleCenterPoint.y;
    return targetPoint.x <= Math.max(startPointX, endPointX) + DEVIATION && targetPoint.x >= Math.min(startPointX, endPointX) - DEVIATION && targetPoint.y <= Math.max(startPointY, endPointY) + DEVIATION && targetPoint.y >= Math.min(startPointY, endPointY) - DEVIATION;
  }
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
 * 根据两点获取一条射线
 * @param point1
 * @param point2
 * @param xyMax
 * @return {(*|{x: *, y: *})[]|*[]}
 */


function getRayLine(point1, point2, xyMax) {
  if (point1 && point2) {
    var point;

    if (point1.x === point2.x && point1.y !== point2.y) {
      if (point1.y < point2.y) {
        point = {
          x: point1.x,
          y: xyMax.y
        };
      } else {
        point = {
          x: point1.x,
          y: 0
        };
      }
    } else if (point1.x > point2.x) {
      point = {
        x: 0,
        y: getLinearYFromPoints(point1, point2, {
          x: 0,
          y: point1.y
        })
      };
    } else {
      point = {
        x: xyMax.x,
        y: getLinearYFromPoints(point1, point2, {
          x: xyMax.x,
          y: point1.y
        })
      };
    }

    return [point1, point];
  }

  return [];
}
/**
 * 获取平行线
 * @param points
 * @param xyMax
 * @param extendParallelLineCount
 * @returns {Array}
 */


function getParallelLines(points, xyMax) {
  var extendParallelLineCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var lines = [];

  if (points.length > 1) {
    if (points[0].x === points[1].x) {
      var startY = 0;
      var endY = xyMax.y;
      lines.push([{
        x: points[0].x,
        y: startY
      }, {
        x: points[0].x,
        y: endY
      }]);

      if (points.length > 2) {
        lines.push([{
          x: points[2].x,
          y: startY
        }, {
          x: points[2].x,
          y: endY
        }]);
        var distance = points[0].x - points[2].x;

        for (var i = 0; i < extendParallelLineCount; i++) {
          var d = distance * (i + 1);
          lines.push([{
            x: points[0].x + d,
            y: startY
          }, {
            x: points[0].x + d,
            y: endY
          }]);
        }
      }
    } else {
      var startX = 0;
      var endX = xyMax.x;
      var kb = getLinearSlopeIntercept(points[0], points[1]);
      var k = kb.k;
      var b = kb.b;
      lines.push([{
        x: startX,
        y: startX * k + b
      }, {
        x: endX,
        y: endX * k + b
      }]);

      if (points.length > 2) {
        var b1 = points[2].y - k * points[2].x;
        lines.push([{
          x: startX,
          y: startX * k + b1
        }, {
          x: endX,
          y: endX * k + b1
        }]);

        var _distance = b - b1;

        for (var _i = 0; _i < extendParallelLineCount; _i++) {
          var b2 = b + _distance * (_i + 1);
          lines.push([{
            x: startX,
            y: startX * k + b2
          }, {
            x: endX,
            y: endX * k + b2
          }]);
        }
      }
    }
  }

  return lines;
}