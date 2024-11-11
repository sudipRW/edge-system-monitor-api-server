'use strict';

var utils = require('../utils/writer.js');
var Settings = require('../service/SettingsService');

module.exports.settingsInspect = function settingsInspect (req, res, next) {
  Settings.settingsInspect()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.settingsPublic = function settingsPublic (req, res, next) {
  Settings.settingsPublic()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.settingsUpdate = function settingsUpdate (req, res, next) {
  var body = req.swagger.params['body'].value;
  Settings.settingsUpdate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
