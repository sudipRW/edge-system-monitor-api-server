'use strict';

var utils = require('../utils/writer.js');
var Edge = require('../service/EdgeService');

module.exports.endpointsIdEdgeJobsJobIDLogsPOST = function endpointsIdEdgeJobsJobIDLogsPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var jobID = req.swagger.params['jobID'].value;
  Edge.endpointsIdEdgeJobsJobIDLogsPOST(id,jobID)
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
  Edge.endpointsIdEdgeStacksStackIdGET(id,stackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
