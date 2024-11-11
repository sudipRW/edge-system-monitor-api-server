'use strict';


/**
 * Retrieve system info
 * **Access policy**: authenticated
 *
 * returns system.systemInfoResponse
 **/
exports.systemInfo = function() {
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
 * Retrieve the count of nodes
 * **Access policy**: authenticated
 *
 * returns system.nodesCountResponse
 **/
exports.systemNodesCount = function() {
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
 * Check Portainer status
 * Retrieve Portainer status **Access policy**: public
 *
 * returns system.status
 **/
exports.systemStatus = function() {
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
 * Upgrade Portainer to BE
 * Upgrade Portainer to BE **Access policy**: administrator
 *
 * returns system.status
 **/
exports.systemUpgrade = function() {
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
 * Check for portainer updates
 * Check if portainer has an update available **Access policy**: authenticated
 *
 * returns system.versionResponse
 **/
exports.systemVersion = function() {
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

