'use strict';


/**
 * Create a custom template
 * Create a custom template. **Access policy**: authenticated
 *
 * method String method for creating template
 * body Object for body documentation see the relevant /custom_templates/{method} endpoint
 * returns portainer.CustomTemplate
 **/
exports.customTemplateCreate = function(method,body) {
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
 * Create a custom template
 * Create a custom template. **Access policy**: authenticated
 *
 * title String Title of the template
 * description String Description of the template
 * note String A note that will be displayed in the UI. Supports HTML content
 * platform Integer Platform associated to the template (1 - 'linux', 2 - 'windows')
 * type Integer Type of created stack (1 - swarm, 2 - compose, 3 - kubernetes)
 * file File File
 * logo String URL of the template's logo (optional)
 * variables String A json array of variables definitions (optional)
 * returns portainer.CustomTemplate
 **/
exports.customTemplateCreateFile = function(title,description,note,platform,type,file,logo,variables) {
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
 * Create a custom template
 * Create a custom template. **Access policy**: authenticated
 *
 * body Customtemplates.customTemplateFromGitRepositoryPayload Required when using method=repository
 * returns portainer.CustomTemplate
 **/
exports.customTemplateCreateRepository = function(body) {
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
 * Create a custom template
 * Create a custom template. **Access policy**: authenticated
 *
 * body Customtemplates.customTemplateFromFileContentPayload body
 * returns portainer.CustomTemplate
 **/
exports.customTemplateCreateString = function(body) {
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
 * Remove a template
 * Remove a template. **Access policy**: authenticated
 *
 * id Integer Template identifier
 * no response value expected for this operation
 **/
exports.customTemplateDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Template stack file content.
 * Retrieve the content of the Stack file for the specified custom template **Access policy**: authenticated
 *
 * id Integer Template identifier
 * returns customtemplates.fileResponse
 **/
exports.customTemplateFile = function(id) {
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
 * Fetch the latest config file content based on custom template's git repository configuration
 * Retrieve details about a template created from git repository method. **Access policy**: authenticated
 *
 * id Integer Template identifier
 * returns customtemplates.fileResponse
 **/
exports.customTemplateGitFetch = function(id) {
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
 * Inspect a custom template
 * Retrieve details about a template. **Access policy**: authenticated
 *
 * id Integer Template identifier
 * returns portainer.CustomTemplate
 **/
exports.customTemplateInspect = function(id) {
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
 * List available custom templates
 * List available custom templates. **Access policy**: authenticated
 *
 * type List Template types
 * edge Boolean Filter by edge templates (optional)
 * returns List
 **/
exports.customTemplateList = function(type,edge) {
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
 * Update a template
 * Update a template. **Access policy**: authenticated
 *
 * id Integer Template identifier
 * body Customtemplates.customTemplateUpdatePayload Template details
 * returns portainer.CustomTemplate
 **/
exports.customTemplateUpdate = function(id,body) {
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

