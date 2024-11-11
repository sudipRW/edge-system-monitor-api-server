'use strict';


/**
 * Check Portainer status
 * Deprecated: use the `/system/status` endpoint instead. Retrieve Portainer status **Access policy**: public
 *
 * returns system.status
 **/
exports.statusInspect = function() {
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
 * Deprecated: use the `/system/nodes` endpoint instead. **Access policy**: authenticated
 *
 * returns system.nodesCountResponse
 **/
exports.statusNodesCount = function() {
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
 * Deprecated: use the `/system/version` endpoint instead. Check if portainer has an update available **Access policy**: authenticated
 *
 * returns system.versionResponse
 **/
exports.version = function() {
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

