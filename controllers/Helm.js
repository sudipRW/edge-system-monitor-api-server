'use strict';

var utils = require('../utils/writer.js');
var Helm = require('../service/HelmService');

module.exports.helmDelete = function helmDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  var release = req.swagger.params['release'].value;
  var namespace = req.swagger.params['namespace'].value;
  Helm.helmDelete(id,release,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmInstall = function helmInstall (req, res, next) {
  var id = req.swagger.params['id'].value;
  var payload = req.swagger.params['payload'].value;
  Helm.helmInstall(id,payload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmList = function helmList (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var filter = req.swagger.params['filter'].value;
  var selector = req.swagger.params['selector'].value;
  Helm.helmList(id,namespace,filter,selector)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmRepoSearch = function helmRepoSearch (req, res, next) {
  var repo = req.swagger.params['repo'].value;
  Helm.helmRepoSearch(repo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmShow = function helmShow (req, res, next) {
  var repo = req.swagger.params['repo'].value;
  var chart = req.swagger.params['chart'].value;
  var command = req.swagger.params['command'].value;
  Helm.helmShow(repo,chart,command)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmUserRepositoriesList = function helmUserRepositoriesList (req, res, next) {
  var id = req.swagger.params['id'].value;
  Helm.helmUserRepositoriesList(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmUserRepositoriesListDeprecated = function helmUserRepositoriesListDeprecated (req, res, next) {
  var id = req.swagger.params['id'].value;
  Helm.helmUserRepositoriesListDeprecated(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmUserRepositoryCreate = function helmUserRepositoryCreate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var payload = req.swagger.params['payload'].value;
  Helm.helmUserRepositoryCreate(id,payload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmUserRepositoryCreateDeprecated = function helmUserRepositoryCreateDeprecated (req, res, next) {
  var id = req.swagger.params['id'].value;
  var payload = req.swagger.params['payload'].value;
  Helm.helmUserRepositoryCreateDeprecated(id,payload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helmUserRepositoryDelete = function helmUserRepositoryDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  var repositoryID = req.swagger.params['repositoryID'].value;
  Helm.helmUserRepositoryDelete(id,repositoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
