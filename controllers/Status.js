'use strict';

var utils = require('../utils/writer.js');
var Status = require('../service/StatusService');

module.exports.statusInspect = function statusInspect (req, res, next) {
  Status.statusInspect()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.statusNodesCount = function statusNodesCount (req, res, next) {
  Status.statusNodesCount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.version = function version (req, res, next) {
  Status.version()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
