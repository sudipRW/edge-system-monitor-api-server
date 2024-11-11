'use strict';

var utils = require('../utils/writer.js');
var Websocket = require('../service/WebsocketService');

module.exports.websocketAttachGET = function websocketAttachGET (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var token = req.swagger.params['token'].value;
  var nodeName = req.swagger.params['nodeName'].value;
  Websocket.websocketAttachGET(endpointId,token,nodeName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.websocketExecGET = function websocketExecGET (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var token = req.swagger.params['token'].value;
  var nodeName = req.swagger.params['nodeName'].value;
  Websocket.websocketExecGET(endpointId,token,nodeName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.websocketKubernetes_shellGET = function websocketKubernetes_shellGET (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var token = req.swagger.params['token'].value;
  Websocket.websocketKubernetes_shellGET(endpointId,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.websocketPodGET = function websocketPodGET (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var namespace = req.swagger.params['namespace'].value;
  var podName = req.swagger.params['podName'].value;
  var containerName = req.swagger.params['containerName'].value;
  var command = req.swagger.params['command'].value;
  var token = req.swagger.params['token'].value;
  Websocket.websocketPodGET(endpointId,namespace,podName,containerName,command,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
