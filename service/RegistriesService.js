'use strict';


/**
 * Configures a registry
 * Configures a registry. **Access policy**: restricted
 *
 * id Integer Registry identifier
 * body Registries.registryConfigurePayload Registry configuration
 * no response value expected for this operation
 **/
exports.registryConfigure = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new registry
 * Create a new registry. **Access policy**: restricted
 *
 * body Registries.registryCreatePayload Registry details
 * returns portainer.Registry
 **/
exports.registryCreate = function(body) {
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
 * Remove a registry
 * Remove a registry **Access policy**: restricted
 *
 * id Integer Registry identifier
 * no response value expected for this operation
 **/
exports.registryDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Inspect a registry
 * Retrieve details about a registry. **Access policy**: restricted
 *
 * id Integer Registry identifier
 * returns portainer.Registry
 **/
exports.registryInspect = function(id) {
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
 * List Registries
 * List all registries based on the current user authorizations. Will return all registries if using an administrator account otherwise it will only return authorized registries. **Access policy**: restricted
 *
 * returns List
 **/
exports.registryList = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a registry
 * Update a registry **Access policy**: restricted
 *
 * id Integer Registry identifier
 * body Registries.registryUpdatePayload Registry details
 * returns portainer.Registry
 **/
exports.registryUpdate = function(id,body) {
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

