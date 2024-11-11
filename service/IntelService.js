'use strict';


/**
 * creates a new FDO Profile
 * creates a new FDO Profile **Access policy**: administrator
 *
 * no response value expected for this operation
 **/
exports.createProfile = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * deletes a FDO Profile
 * deletes a FDO Profile **Access policy**: administrator
 *
 * id Integer FDO Profile identifier
 * no response value expected for this operation
 **/
exports.deleteProfile = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Execute out of band action on an AMT managed device
 * Execute out of band action on an AMT managed device **Access policy**: administrator
 *
 * id Integer Environment identifier
 * deviceId Integer Device identifier
 * body Openamt.deviceActionPayload Device Action
 * no response value expected for this operation
 **/
exports.deviceAction = function(id,deviceId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Enable features on an AMT managed device
 * Enable features on an AMT managed device **Access policy**: administrator
 *
 * id Integer Environment identifier
 * deviceId Integer Device identifier
 * body Openamt.deviceFeaturesPayload Device Features
 * no response value expected for this operation
 **/
exports.deviceFeatures = function(id,deviceId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * duplicated an existing FDO Profile
 * duplicated an existing FDO Profile **Access policy**: administrator
 *
 * id Integer FDO Profile identifier
 * no response value expected for this operation
 **/
exports.duplicate = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Enable Portainer's FDO capabilities
 * Enable Portainer's FDO capabilities **Access policy**: administrator
 *
 * body Fdo.fdoConfigurePayload FDO Settings
 * no response value expected for this operation
 **/
exports.fdoConfigure = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * configures an FDO device
 * configures an FDO device **Access policy**: administrator
 *
 * guid Integer Guid
 * body Fdo.deviceConfigurePayload Device Configuration
 * no response value expected for this operation
 **/
exports.fdoConfigureDevice = function(guid,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all known FDO vouchers
 * List all known FDO vouchers **Access policy**: administrator
 *
 * no response value expected for this operation
 **/
exports.fdoListAll = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieves a given FDO profile information and content
 * retrieves a given FDO profile information and content **Access policy**: administrator
 *
 * id Integer FDO Profile identifier
 * no response value expected for this operation
 **/
exports.fdoProfileInspect = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieves all FDO profiles
 * retrieves all FDO profiles **Access policy**: administrator
 *
 * no response value expected for this operation
 **/
exports.fdoProfileList = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * register an FDO device
 * register an FDO device **Access policy**: administrator
 *
 * no response value expected for this operation
 **/
exports.fdoRegisterDevice = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Activate OpenAMT device and associate to agent endpoint
 * Activate OpenAMT device and associate to agent endpoint **Access policy**: administrator
 *
 * id Integer Environment identifier
 * no response value expected for this operation
 **/
exports.openAMTActivate = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Enable Portainer's OpenAMT capabilities
 * Enable Portainer's OpenAMT capabilities **Access policy**: administrator
 *
 * body Openamt.openAMTConfigurePayload OpenAMT Settings
 * no response value expected for this operation
 **/
exports.openAMTConfigure = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch OpenAMT managed devices information for endpoint
 * Fetch OpenAMT managed devices information for endpoint **Access policy**: administrator
 *
 * id Integer Environment(Endpoint) identifier
 * no response value expected for this operation
 **/
exports.openAMTDevices = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Request OpenAMT info from a node
 * Request OpenAMT info from a node **Access policy**: administrator
 *
 * id Integer Environment identifier
 * no response value expected for this operation
 **/
exports.openAMTHostInfo = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * updates an existing FDO Profile
 * updates an existing FDO Profile **Access policy**: administrator
 *
 * id Integer FDO Profile identifier
 * no response value expected for this operation
 **/
exports.updateProfile = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

