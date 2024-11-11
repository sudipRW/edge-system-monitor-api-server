'use strict';

var utils = require('../utils/writer.js');
var Roles = require('../service/RolesService');

module.exports.roleList = function roleList (req, res, next) {
  Roles.roleList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
