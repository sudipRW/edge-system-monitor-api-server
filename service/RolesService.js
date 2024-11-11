'use strict';


/**
 * List roles
 * List all roles available for use **Access policy**: administrator
 *
 * returns List
 **/
exports.roleList = function() {
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

