'use strict';


/**
 * Inspect an EdgeJob Log
 * **Access policy**: public
 *
 * id Integer environment(endpoint) Id
 * jobID Integer Job Id
 * no response value expected for this operation
 **/
exports.endpointsIdEdgeJobsJobIDLogsPOST = function(id,jobID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Inspect an Edge Stack for an Environment(Endpoint)
 * **Access policy**: public
 *
 * id Integer environment(endpoint) Id
 * stackId Integer EdgeStack Id
 * returns edge.StackPayload
 **/
exports.endpointsIdEdgeStacksStackIdGET = function(id,stackId) {
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

