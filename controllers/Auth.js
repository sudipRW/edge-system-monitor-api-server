'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authenticateUser = function authenticateUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.authenticateUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logout = function logout (req, res, next) {
  Auth.logout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.validateOAuth = function validateOAuth (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.validateOAuth(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
