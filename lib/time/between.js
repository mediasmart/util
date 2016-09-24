'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (start, finish) {
  var context = arguments.length <= 2 || arguments[2] === undefined ? 'days' : arguments[2];
  var ceil = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

  start = (0, _moment2.default)(start);
  finish = (0, _moment2.default)(finish);

  if (ceil) {
    start = start.startOf(context);
    finish = finish.endOf(context);
  }

  return finish.diff(start, context, ceil);
};