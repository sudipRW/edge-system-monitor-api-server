'use strict';

var utils = require('../utils/writer.js');
var TeamMemberships = require('../service/TeamMembershipsService');

module.exports.teamMembershipCreate = function teamMembershipCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  TeamMemberships.teamMembershipCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamMembershipDelete = function teamMembershipDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  TeamMemberships.teamMembershipDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamMembershipList = function teamMembershipList (req, res, next) {
  TeamMemberships.teamMembershipList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamMembershipUpdate = function teamMembershipUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  TeamMemberships.teamMembershipUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamMemberships = function teamMemberships (req, res, next) {
  var id = req.swagger.params['id'].value;
  TeamMemberships.teamMemberships(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
