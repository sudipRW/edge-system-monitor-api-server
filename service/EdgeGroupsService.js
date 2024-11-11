'use strict';


/**
 * Create an EdgeGroup
 * **Access policy**: administrator
 *
 * body Edgegroups.edgeGroupCreatePayload EdgeGroup data
 * returns portainer.EdgeGroup
 **/
exports.edgeGroupCreate = function(body) {
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
 * Deletes an EdgeGroup
 * **Access policy**: administrator
 *
 * id Integer EdgeGroup Id
 * no response value expected for this operation
 **/
exports.edgeGroupDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Inspects an EdgeGroup
 * **Access policy**: administrator
 *
 * id Integer EdgeGroup Id
 * returns portainer.EdgeGroup
 **/
exports.edgeGroupInspect = function(id) {
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
 * list EdgeGroups
 * **Access policy**: administrator
 *
 * returns List
 **/
exports.edgeGroupList = function() {
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
 * Updates an EdgeGroup
 * **Access policy**: administrator
 *
 * id Integer EdgeGroup Id
 * body Edgegroups.edgeGroupUpdatePayload EdgeGroup data
 * returns portainer.EdgeGroup
 **/
exports.egeGroupUpdate = function(id,body) {
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

