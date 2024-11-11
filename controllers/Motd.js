'use strict';

var utils = require('../utils/writer.js');
var Motd = require('../service/MotdService');

module.exports.mOTD = function mOTD (req, res, next) {
  Motd.mOTD()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
