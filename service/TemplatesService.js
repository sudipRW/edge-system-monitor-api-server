'use strict';


/**
 * Get a template's file
 * Get a template's file **Access policy**: authenticated
 *
 * id Integer Template identifier
 * returns templates.fileResponse
 **/
exports.templateFile = function(id) {
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
 * Get a template's file
 * Get a template's file **Access policy**: authenticated
 *
 * body Templates.filePayload File details
 * returns templates.fileResponse
 **/
exports.templateFileOld = function(body) {
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
 * List available templates
 * List available templates. **Access policy**: authenticated
 *
 * returns templates.listResponse
 **/
exports.templateList = function() {
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

