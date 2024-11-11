'use strict';


/**
 * Inspect the ssl settings
 * Retrieve the ssl settings. **Access policy**: administrator
 *
 * returns portainer.SSLSettings
 **/
exports.sSLInspect = function() {
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
 * Update the ssl settings
 * Update the ssl settings. **Access policy**: administrator
 *
 * body Ssl.sslUpdatePayload SSL Settings
 * no response value expected for this operation
 **/
exports.sSLUpdate = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

