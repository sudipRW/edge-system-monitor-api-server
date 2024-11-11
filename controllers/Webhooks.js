'use strict';

var utils = require('../utils/writer.js');
var Webhooks = require('../service/WebhooksService');

module.exports.webhooksGET = function webhooksGET (req, res, next) {
  var filters = req.swagger.params['filters'].value;
  Webhooks.webhooksGET(filters)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksIdDELETE = function webhooksIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Webhooks.webhooksIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksIdPOST = function webhooksIdPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  Webhooks.webhooksIdPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksIdPUT = function webhooksIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Webhooks.webhooksIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksPOST = function webhooksPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Webhooks.webhooksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
