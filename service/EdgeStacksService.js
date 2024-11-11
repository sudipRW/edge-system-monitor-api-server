'use strict';


/**
 * Create an EdgeStack
 * **Access policy**: administrator
 *
 * method String Creation Method
 * body Object for body documentation see the relevant /edge_stacks/create/{method} endpoint
 * returns portainer.EdgeStack
 **/
exports.edgeStackCreate = function(method,body) {
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
 * Create an EdgeStack from file
 * **Access policy**: administrator
 *
 * name String Name of the stack
 * file File Content of the Stack file
 * edgeGroups String JSON stringified array of Edge Groups ids
 * deploymentType Integer deploy type 0 - 'compose', 1 - 'kubernetes', 2 - 'nomad'
 * registries String JSON stringified array of Registry ids to use for this stack (optional)
 * useManifestNamespaces Boolean Uses the manifest's namespaces instead of the default one, relevant only for kube environments (optional)
 * prePullImage Boolean Pre Pull image (optional)
 * retryDeploy Boolean Retry deploy (optional)
 * dryrun String if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object (optional)
 * returns portainer.EdgeStack
 **/
exports.edgeStackCreateFile = function(name,file,edgeGroups,deploymentType,registries,useManifestNamespaces,prePullImage,retryDeploy,dryrun) {
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
 * Create an EdgeStack from a git repository
 * **Access policy**: administrator
 *
 * body Edgestacks.edgeStackFromGitRepositoryPayload stack config
 * dryrun String if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object (optional)
 * returns portainer.EdgeStack
 **/
exports.edgeStackCreateRepository = function(body,dryrun) {
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
 * Create an EdgeStack from a text
 * **Access policy**: administrator
 *
 * body Edgestacks.edgeStackFromStringPayload stack config
 * dryrun String if true, will not create an edge stack, but just will check the settings and return a non-persisted edge stack object (optional)
 * returns portainer.EdgeStack
 **/
exports.edgeStackCreateString = function(body,dryrun) {
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
 * Delete an EdgeStack
 * **Access policy**: administrator
 *
 * id Integer EdgeStack Id
 * no response value expected for this operation
 **/
exports.edgeStackDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetches the stack file for an EdgeStack
 * **Access policy**: administrator
 *
 * id Integer EdgeStack Id
 * returns edgestacks.stackFileResponse
 **/
exports.edgeStackFile = function(id) {
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
 * Inspect an EdgeStack
 * **Access policy**: administrator
 *
 * id Integer EdgeStack Id
 * returns portainer.EdgeStack
 **/
exports.edgeStackInspect = function(id) {
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
 * Fetches the list of EdgeStacks
 * **Access policy**: administrator
 *
 * returns List
 **/
exports.edgeStackList = function() {
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
 * Delete an EdgeStack status
 * Authorized only if the request is done by an Edge Environment(Endpoint)
 *
 * id Integer EdgeStack Id
 * environmentId Integer Environment identifier
 * returns portainer.EdgeStack
 **/
exports.edgeStackStatusDelete = function(id,environmentId) {
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
 * Update an EdgeStack status
 * Authorized only if the request is done by an Edge Environment(Endpoint)
 *
 * id Integer EdgeStack Id
 * body Edgestacks.updateStatusPayload EdgeStack status payload
 * returns portainer.EdgeStack
 **/
exports.edgeStackStatusUpdate = function(id,body) {
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
 * Update an EdgeStack
 * **Access policy**: administrator
 *
 * id Integer EdgeStack Id
 * body Edgestacks.updateEdgeStackPayload EdgeStack data
 * returns portainer.EdgeStack
 **/
exports.edgeStackUpdate = function(id,body) {
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

