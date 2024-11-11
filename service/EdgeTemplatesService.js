'use strict';


/**
 * Fetches the list of Edge Templates
 * **Access policy**: administrator
 *
 * returns List
 **/
exports.edgeTemplateList = function() {
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

