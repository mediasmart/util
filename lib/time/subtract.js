'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date, value) {
  var context = arguments.length <= 2 || arguments[2] === undefined ? 'days' : arguments[2];
  return (0, _moment2.default)(date).subtract(value, context);
};