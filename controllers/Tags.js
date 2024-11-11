'use strict';

var utils = require('../utils/writer.js');
var Tags = require('../service/TagsService');

module.exports.tagCreate = function tagCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Tags.tagCreate(body,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tagDelete = function tagDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Tags.tagDelete(id,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tagList = function tagList (req, res, next) {
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Tags.tagList(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
