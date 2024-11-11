'use strict';


/**
 * fetches the message of the day
 * **Access policy**: restricted
 *
 * returns motd.motdResponse
 **/
exports.mOTD = function() {
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

