'use strict';


/**
 * Create an EdgeJob
 * **Access policy**: administrator
 *
 * method String Creation Method
 * body Object for body documentation see the relevant /edge_jobs/create/{method} endpoint
 * returns portainer.EdgeGroup
 **/
exports.edgeJobCreate = function(method,body) {
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
 * Create an EdgeJob from a file
 * **Access policy**: administrator
 *
 * file File Content of the Stack file
 * name String Name of the stack
 * cronExpression String A cron expression to schedule this job
 * edgeGroups String JSON stringified array of Edge Groups ids
 * endpoints String JSON stringified array of Environment ids
 * recurring Boolean If recurring (optional)
 * returns portainer.EdgeGroup
 **/
exports.edgeJobCreateFile = function(file,name,cronExpression,edgeGroups,endpoints,recurring) {
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
 * Create an EdgeJob from a text
 * **Access policy**: administrator
 *
 * body Edgejobs.edgeJobCreateFromFileContentPayload EdgeGroup data when method is string
 * returns portainer.EdgeGroup
 **/
exports.edgeJobCreateString = function(body) {
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
 * Delete an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * no response value expected for this operation
 **/
exports.edgeJobDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch a file of an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * returns edgejobs.edgeJobFileResponse
 **/
exports.edgeJobFile = function(id) {
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
 * Inspect an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * returns portainer.EdgeJob
 **/
exports.edgeJobInspect = function(id) {
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
 * Fetch EdgeJobs list
 * **Access policy**: administrator
 *
 * returns List
 **/
exports.edgeJobList = function() {
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
 * Fetch the log for a specifc task on an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * taskID Integer Task Id
 * returns edgejobs.fileResponse
 **/
exports.edgeJobTaskLogsInspect = function(id,taskID) {
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
 * Clear the log for a specifc task on an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * taskID Integer Task Id
 * no response value expected for this operation
 **/
exports.edgeJobTasksClear = function(id,taskID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Collect the log for a specifc task on an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * taskID Integer Task Id
 * no response value expected for this operation
 **/
exports.edgeJobTasksCollect = function(id,taskID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch the list of tasks on an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * returns List
 **/
exports.edgeJobTasksList = function(id) {
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
 * Update an EdgeJob
 * **Access policy**: administrator
 *
 * id Integer EdgeJob Id
 * body Edgejobs.edgeJobUpdatePayload EdgeGroup data
 * returns portainer.EdgeJob
 **/
exports.edgeJobUpdate = function(id,body) {
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

