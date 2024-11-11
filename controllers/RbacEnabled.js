'use strict';

var utils = require('../utils/writer.js');
var RbacEnabled = require('../service/RbacEnabledService');

module.exports.isRBACEnabled = function isRBACEnabled (req, res, next) {
  var id = req.swagger.params['id'].value;
  RbacEnabled.isRBACEnabled(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
