'use strict';

var utils = require('../utils/writer.js');
var Upload = require('../service/UploadService');

module.exports.uploadTLS = function uploadTLS (req, res, next) {
  var certificate = req.swagger.params['certificate'].value;
  var folder = req.swagger.params['folder'].value;
  var file = req.swagger.params['file'].value;
  Upload.uploadTLS(certificate,folder,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
