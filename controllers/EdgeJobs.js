'use strict';

var utils = require('../utils/writer.js');
var EdgeJobs = require('../service/EdgeJobsService');

module.exports.edgeJobCreate = function edgeJobCreate (req, res, next) {
  var method = req.swagger.params['method'].value;
  var body = req.swagger.params['body'].value;
  EdgeJobs.edgeJobCreate(method,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobCreateFile = function edgeJobCreateFile (req, res, next) {
  var file = req.swagger.params['file'].value;
  var name = req.swagger.params['Name'].value;
  var cronExpression = req.swagger.params['CronExpression'].value;
  var edgeGroups = req.swagger.params['EdgeGroups'].value;
  var endpoints = req.swagger.params['Endpoints'].value;
  var recurring = req.swagger.params['Recurring'].value;
  EdgeJobs.edgeJobCreateFile(file,name,cronExpression,edgeGroups,endpoints,recurring)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobCreateString = function edgeJobCreateString (req, res, next) {
  var body = req.swagger.params['body'].value;
  EdgeJobs.edgeJobCreateString(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobDelete = function edgeJobDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeJobs.edgeJobDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobFile = function edgeJobFile (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeJobs.edgeJobFile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobInspect = function edgeJobInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeJobs.edgeJobInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobList = function edgeJobList (req, res, next) {
  EdgeJobs.edgeJobList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobTaskLogsInspect = function edgeJobTaskLogsInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  var taskID = req.swagger.params['taskID'].value;
  EdgeJobs.edgeJobTaskLogsInspect(id,taskID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobTasksClear = function edgeJobTasksClear (req, res, next) {
  var id = req.swagger.params['id'].value;
  var taskID = req.swagger.params['taskID'].value;
  EdgeJobs.edgeJobTasksClear(id,taskID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobTasksCollect = function edgeJobTasksCollect (req, res, next) {
  var id = req.swagger.params['id'].value;
  var taskID = req.swagger.params['taskID'].value;
  EdgeJobs.edgeJobTasksCollect(id,taskID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobTasksList = function edgeJobTasksList (req, res, next) {
  var id = req.swagger.params['id'].value;
  EdgeJobs.edgeJobTasksList(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edgeJobUpdate = function edgeJobUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  EdgeJobs.edgeJobUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
