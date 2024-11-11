'use strict';


/**
 * List webhooks
 * **Access policy**: authenticated
 *
 * filters String Filters (json-string) (optional)
 * returns List
 **/
exports.webhooksGET = function(filters) {
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
 * Delete a webhook
 * **Access policy**: authenticated
 *
 * id Integer Webhook id
 * no response value expected for this operation
 **/
exports.webhooksIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Execute a webhook
 * Acts on a passed in token UUID to restart the docker service **Access policy**: public
 *
 * id String Webhook token
 * no response value expected for this operation
 **/
exports.webhooksIdPOST = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a webhook
 * **Access policy**: authenticated
 *
 * id Integer Webhook id
 * body Webhooks.webhookUpdatePayload Webhook data
 * returns portainer.Webhook
 **/
exports.webhooksIdPUT = function(id,body) {
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
 * Create a webhook
 * **Access policy**: authenticated
 *
 * body Webhooks.webhookCreatePayload Webhook data
 * returns portainer.Webhook
 **/
exports.webhooksPOST = function(body) {
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

