'use strict';

var utils = require('../utils/writer.js');
var EdgeTemplates = require('../service/EdgeTemplatesService');

module.exports.edgeTemplateList = function edgeTemplateList (req, res, next) {
  EdgeTemplates.edgeTemplateList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
