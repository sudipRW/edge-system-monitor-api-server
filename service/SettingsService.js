'use strict';


/**
 * Retrieve Portainer settings
 * Retrieve Portainer settings. **Access policy**: administrator
 *
 * returns portainer.Settings
 **/
exports.settingsInspect = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Portainer public settings
 * Retrieve public settings. Returns a small set of settings that are not reserved to administrators only. **Access policy**: public
 *
 * returns settings.publicSettingsResponse
 **/
exports.settingsPublic = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Portainer settings
 * Update Portainer settings. **Access policy**: administrator
 *
 * body Settings.settingsUpdatePayload New settings
 * returns portainer.Settings
 **/
exports.settingsUpdate = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

