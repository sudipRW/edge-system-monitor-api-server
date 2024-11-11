'use strict';

var utils = require('../utils/writer.js');
var Gitops = require('../service/GitopsService');

module.exports.gitOperationRepoFilePreview = function gitOperationRepoFilePreview (req, res, next) {
  var body = req.swagger.params['body'].value;
  Gitops.gitOperationRepoFilePreview(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
