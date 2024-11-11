'use strict';

var utils = require('../utils/writer.js');
var Ldap = require('../service/LdapService');

module.exports.lDAPCheck = function lDAPCheck (req, res, next) {
  var body = req.swagger.params['body'].value;
  Ldap.lDAPCheck(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
