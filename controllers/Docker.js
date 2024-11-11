'use strict';

var utils = require('../utils/writer.js');
var Docker = require('../service/DockerService');

module.exports.dockerContainerGpusInspect = function dockerContainerGpusInspect (req, res, next) {
  var environmentId = req.swagger.params['environmentId'].value;
  var containerId = req.swagger.params['containerId'].value;
  Docker.dockerContainerGpusInspect(environmentId,containerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dockerImagesList = function dockerImagesList (req, res, next) {
  var id = req.swagger.params['id'].value;
  var withUsage = req.swagger.params['withUsage'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Docker.dockerImagesList(id,withUsage,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dockerContainersList = function dockerContainersList (req, res, next) {
  var id = req.swagger.params['id'].value;
  var withUsage = req.swagger.params['withUsage'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }

  Docker.dockerContainersList(id,withUsage,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.dockerVolumesList = function dockerVolumesList (req, res, next) {
  var id = req.swagger.params['id'].value;
  var withUsage = req.swagger.params['withUsage'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }

  Docker.dockerVolumesList(id,withUsage,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
