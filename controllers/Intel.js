'use strict';

var utils = require('../utils/writer.js');
var Intel = require('../service/IntelService');

module.exports.createProfile = function createProfile (req, res, next) {
  Intel.createProfile()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProfile = function deleteProfile (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.deleteProfile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deviceAction = function deviceAction (req, res, next) {
  var id = req.swagger.params['id'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var body = req.swagger.params['body'].value;
  Intel.deviceAction(id,deviceId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deviceFeatures = function deviceFeatures (req, res, next) {
  var id = req.swagger.params['id'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var body = req.swagger.params['body'].value;
  Intel.deviceFeatures(id,deviceId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.duplicate = function duplicate (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.duplicate(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fdoConfigure = function fdoConfigure (req, res, next) {
  var body = req.swagger.params['body'].value;
  Intel.fdoConfigure(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fdoConfigureDevice = function fdoConfigureDevice (req, res, next) {
  var guid = req.swagger.params['guid'].value;
  var body = req.swagger.params['body'].value;
  Intel.fdoConfigureDevice(guid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fdoListAll = function fdoListAll (req, res, next) {
  Intel.fdoListAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fdoProfileInspect = function fdoProfileInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.fdoProfileInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fdoProfileList = function fdoProfileList (req, res, next) {
  Intel.fdoProfileList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fdoRegisterDevice = function fdoRegisterDevice (req, res, next) {
  Intel.fdoRegisterDevice()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.openAMTActivate = function openAMTActivate (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.openAMTActivate(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.openAMTConfigure = function openAMTConfigure (req, res, next) {
  var body = req.swagger.params['body'].value;
  Intel.openAMTConfigure(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.openAMTDevices = function openAMTDevices (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.openAMTDevices(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.openAMTHostInfo = function openAMTHostInfo (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.openAMTHostInfo(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProfile = function updateProfile (req, res, next) {
  var id = req.swagger.params['id'].value;
  Intel.updateProfile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
