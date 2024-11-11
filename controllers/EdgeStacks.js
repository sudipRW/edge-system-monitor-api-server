'use strict';

var utils = require('../utils/writer.js');
var EdgeStacks = require('../service/EdgeStacksService');

module.exports.edgeStackCreate = function edgeStackCreate (req, res, next) {
  var method = req.swagger.params['method'].value;
  var body = req.swagger.params['body'].value;
  EdgeStacks.edgeStackCreate(method,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackCreateFile = function edgeStackCreateFile (req, res, next) {
  var name = req.swagger.params['Name'].value;
  var file = req.swagger.params['file'].value;
  var edgeGroups = req.swagger.params['EdgeGroups'].value;
  var deploymentType = req.swagger.params['DeploymentType'].value;
  var registries = req.swagger.params['Registries'].value;
  var useManifestNamespaces = req.swagger.params['UseManifestNamespaces'].value;
  var prePullImage = req.swagger.params['PrePullImage'].value;
  var retryDeploy = req.swagger.params['RetryDeploy'].value;
  var dryrun = req.swagger.params['dryrun'].value;
  EdgeStacks.edgeStackCreateFile(name,file,edgeGroups,deploymentType,registries,useManifestNamespaces,prePullImage,retryDeploy,dryrun)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackCreateRepository = function edgeStackCreateRepository (req, res, next) {
  var body = req.swagger.params['body'].value;
  var dryrun = req.swagger.params['dryrun'].value;
  EdgeStacks.edgeStackCreateRepository(body,dryrun)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackCreateString = function edgeStackCreateString (req, res, next) {
  var body = req.swagger.params['body'].value;
  var dryrun = req.swagger.params['dryrun'].value;
  EdgeStacks.edgeStackCreateString(body,dryrun)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackDelete = function edgeStackDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeStacks.edgeStackDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackFile = function edgeStackFile (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeStacks.edgeStackFile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackInspect = function edgeStackInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeStacks.edgeStackInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackList = function edgeStackList (req, res, next) {
  EdgeStacks.edgeStackList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackStatusDelete = function edgeStackStatusDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  var environmentId = req.swagger.params['environmentId'].value;
  EdgeStacks.edgeStackStatusDelete(id,environmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackStatusUpdate = function edgeStackStatusUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  EdgeStacks.edgeStackStatusUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeStackUpdate = function edgeStackUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  EdgeStacks.edgeStackUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointsIdEdgeStacksStackIdGET = function endpointsIdEdgeStacksStackIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var stackId = req.swagger.params['stackId'].value;
  EdgeStacks.endpointsIdEdgeStacksStackIdGET(id,stackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
