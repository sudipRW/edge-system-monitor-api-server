'use strict';

var utils = require('../utils/writer.js');
var Templates = require('../service/TemplatesService');

module.exports.templateFile = function templateFile (req, res, next) {
  var id = req.swagger.params['id'].value;
  Templates.templateFile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.templateFileOld = function templateFileOld (req, res, next) {
  var body = req.swagger.params['body'].value;
  Templates.templateFileOld(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.templateList = function templateList (req, res, next) {
  Templates.templateList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
