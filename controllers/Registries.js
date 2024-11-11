'use strict';

var utils = require('../utils/writer.js');
var Registries = require('../service/RegistriesService');

module.exports.registryConfigure = function registryConfigure (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Registries.registryConfigure(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registryCreate = function registryCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  Registries.registryCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registryDelete = function registryDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  Registries.registryDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registryInspect = function registryInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Registries.registryInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registryList = function registryList (req, res, next) {
  Registries.registryList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registryUpdate = function registryUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Registries.registryUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
