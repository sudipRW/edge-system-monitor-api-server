'use strict';

var utils = require('../utils/writer.js');
var ResourceControls = require('../service/ResourceControlsService');

module.exports.resourceControlCreate = function resourceControlCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  ResourceControls.resourceControlCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resourceControlDelete = function resourceControlDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  ResourceControls.resourceControlDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resourceControlUpdate = function resourceControlUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  ResourceControls.resourceControlUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
