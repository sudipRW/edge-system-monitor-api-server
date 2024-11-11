'use strict';

var utils = require('../utils/writer.js');
var EndpointGroups = require('../service/EndpointGroupsService');

module.exports.endpointGroupAddEndpoint = function endpointGroupAddEndpoint (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  EndpointGroups.endpointGroupAddEndpoint(id,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointGroupDelete = function endpointGroupDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  EndpointGroups.endpointGroupDelete(id,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointGroupDeleteEndpoint = function endpointGroupDeleteEndpoint (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  EndpointGroups.endpointGroupDeleteEndpoint(id,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointGroupList = function endpointGroupList (req, res, next) {
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  EndpointGroups.endpointGroupList(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointGroupUpdate = function endpointGroupUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  EndpointGroups.endpointGroupUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpoint_groupsIdGET = function endpoint_groupsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  EndpointGroups.endpoint_groupsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpoint_groupsPOST = function endpoint_groupsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }

  EndpointGroups.endpoint_groupsPOST(body,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
