'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date, outputFormat) {
  var inputFormat = arguments.length <= 2 || arguments[2] === undefined ? 'YYYY-MM-DD' : arguments[2];

  (0, _moment2.default)(date, inputFormat).format(outputFormat);
};