'use strict';


/**
 * Create a new resource control
 * Create a new resource control to restrict access to a Docker resource. **Access policy**: administrator
 *
 * body Resourcecontrols.resourceControlCreatePayload Resource control details
 * returns portainer.ResourceControl
 **/
exports.resourceControlCreate = function(body) {
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
 * Remove a resource control
 * Remove a resource control. **Access policy**: administrator
 *
 * id Integer Resource control identifier
 * no response value expected for this operation
 **/
exports.resourceControlDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a resource control
 * Update a resource control **Access policy**: authenticated
 *
 * id Integer Resource control identifier
 * body Resourcecontrols.resourceControlUpdatePayload Resource control details
 * returns portainer.ResourceControl
 **/
exports.resourceControlUpdate = function(id,body) {
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

