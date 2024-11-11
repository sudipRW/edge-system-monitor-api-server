'use strict';

var utils = require('../utils/writer.js');
var Teams = require('../service/TeamsService');

module.exports.teamCreate = function teamCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  Teams.teamCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamDelete = function teamDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  Teams.teamDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamInspect = function teamInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Teams.teamInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamList = function teamList (req, res, next) {
  var onlyLedTeams = req.swagger.params['onlyLedTeams'].value;
  var environmentId = req.swagger.params['environmentId'].value;
  Teams.teamList(onlyLedTeams,environmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamUpdate = function teamUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Teams.teamUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
