'use strict';

var utils = require('../utils/writer.js');
var EdgeGroups = require('../service/EdgeGroupsService');

module.exports.edgeGroupCreate = function edgeGroupCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  EdgeGroups.edgeGroupCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeGroupDelete = function edgeGroupDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeGroups.edgeGroupDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeGroupInspect = function edgeGroupInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeGroups.edgeGroupInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeGroupList = function edgeGroupList (req, res, next) {
  EdgeGroups.edgeGroupList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.egeGroupUpdate = function egeGroupUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  EdgeGroups.egeGroupUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
