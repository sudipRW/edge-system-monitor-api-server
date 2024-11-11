'use strict';

var utils = require('../utils/writer.js');
var System = require('../service/SystemService');

module.exports.systemInfo = function systemInfo (req, res, next) {
  System.systemInfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.systemNodesCount = function systemNodesCount (req, res, next) {
  System.systemNodesCount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.systemStatus = function systemStatus (req, res, next) {
  System.systemStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.systemUpgrade = function systemUpgrade (req, res, next) {
  System.systemUpgrade()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.systemVersion = function systemVersion (req, res, next) {
  System.systemVersion()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
