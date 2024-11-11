'use strict';


/**
 * Delete Helm Release
 * **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * release String The name of the release/application to uninstall
 * namespace String An optional namespace (optional)
 * no response value expected for this operation
 **/
exports.helmDelete = function(id,release,namespace) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Install Helm Chart
 * **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * payload Helm.installChartPayload Chart details
 * returns release.Release
 **/
exports.helmInstall = function(id,payload) {
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
 * List Helm Releases
 * **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * namespace String specify an optional namespace (optional)
 * filter String specify an optional filter (optional)
 * selector String specify an optional selector (optional)
 * returns List
 **/
exports.helmList = function(id,namespace,filter,selector) {
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
 * Search Helm Charts
 * **Access policy**: authenticated
 *
 * repo String Helm repository URL
 * returns String
 **/
exports.helmRepoSearch = function(repo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Show Helm Chart Information
 * **Access policy**: authenticated
 *
 * repo String Helm repository URL
 * chart String Chart name
 * command String chart/values/readme
 * returns String
 **/
exports.helmShow = function(repo,chart,command) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List a users helm repositories
 * Inspect a user helm repositories. **Access policy**: authenticated
 *
 * id Integer User identifier
 * returns users.helmUserRepositoryResponse
 **/
exports.helmUserRepositoriesList = function(id) {
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
 * List a users helm repositories
 * Inspect a user helm repositories. **Access policy**: authenticated
 *
 * id Integer User identifier
 * returns helm.helmUserRepositoryResponse
 **/
exports.helmUserRepositoriesListDeprecated = function(id) {
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
 * Create a user helm repository
 * Create a user helm repository. **Access policy**: authenticated
 *
 * id Integer User identifier
 * payload Users.addHelmRepoUrlPayload Helm Repository
 * returns portainer.HelmUserRepository
 **/
exports.helmUserRepositoryCreate = function(id,payload) {
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
 * Create a user helm repository
 * Create a user helm repository. **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * payload Helm.addHelmRepoUrlPayload Helm Repository
 * returns portainer.HelmUserRepository
 **/
exports.helmUserRepositoryCreateDeprecated = function(id,payload) {
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
 * Delete a users helm repositoryies
 * **Access policy**: authenticated
 *
 * id Integer User identifier
 * repositoryID Integer Repository identifier
 * no response value expected for this operation
 **/
exports.helmUserRepositoryDelete = function(id,repositoryID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

