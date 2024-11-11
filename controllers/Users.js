'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.currentUserInspect = function currentUserInspect (req, res, next) {
  Users.currentUserInspect()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userAdminCheck = function userAdminCheck (req, res, next) {
  Users.userAdminCheck()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userAdminInit = function userAdminInit (req, res, next) {
  var body = req.swagger.params['body'].value;
  Users.userAdminInit(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userCreate = function userCreate (req, res, next) {
  var body = req.swagger.params['body'].value;
  Users.userCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userDelete = function userDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.userDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGenerateAPIKey = function userGenerateAPIKey (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Users.userGenerateAPIKey(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGetAPIKeys = function userGetAPIKeys (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.userGetAPIKeys(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userInspect = function userInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.userInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userList = function userList (req, res, next) {
  var environmentId = req.swagger.params['environmentId'].value;
  Users.userList(environmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userMembershipsInspect = function userMembershipsInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.userMembershipsInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRemoveAPIKey = function userRemoveAPIKey (req, res, next) {
  var id = req.swagger.params['id'].value;
  var keyID = req.swagger.params['keyID'].value;
  Users.userRemoveAPIKey(id,keyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUpdate = function userUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Users.userUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUpdatePassword = function userUpdatePassword (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Users.userUpdatePassword(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
