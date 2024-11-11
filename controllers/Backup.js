'use strict';

var utils = require('../utils/writer.js');
var Backup = require('../service/BackupService');

module.exports.backup = function backup (req, res, next) {
  var body = req.swagger.params['body'].value;
  Backup.backup(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restore = function restore (req, res, next) {
  var restorePayload = req.swagger.params['restorePayload'].value;
  Backup.restore(restorePayload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
