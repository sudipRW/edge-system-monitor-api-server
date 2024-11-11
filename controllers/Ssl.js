'use strict';

var utils = require('../utils/writer.js');
var Ssl = require('../service/SslService');

module.exports.sSLInspect = function sSLInspect (req, res, next) {
  Ssl.sSLInspect()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sSLUpdate = function sSLUpdate (req, res, next) {
  var body = req.swagger.params['body'].value;
  Ssl.sSLUpdate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
