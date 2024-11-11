'use strict';


/**
 * Inspect the current user user
 * Retrieve details about the current  user. User passwords are filtered out, and should never be accessible. **Access policy**: authenticated
 *
 * returns portainer.User
 **/
exports.currentUserInspect = function() {
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
 * Check administrator account existence
 * Check if an administrator account exists in the database. **Access policy**: public
 *
 * no response value expected for this operation
 **/
exports.userAdminCheck = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Initialize administrator account
 * Initialize the 'admin' user account. **Access policy**: public
 *
 * body Users.adminInitPayload User details
 * returns portainer.User
 **/
exports.userAdminInit = function(body) {
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
 * Create a new user
 * Create a new Portainer user. Only administrators can create users. **Access policy**: restricted
 *
 * body Users.userCreatePayload User details
 * returns portainer.User
 **/
exports.userCreate = function(body) {
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
 * Remove a user
 * Remove a user. **Access policy**: administrator
 *
 * id Integer User identifier
 * no response value expected for this operation
 **/
exports.userDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Generate an API key for a user
 * Generates an API key for a user. Only the calling user can generate a token for themselves. Password is required only for internal authentication. **Access policy**: restricted
 *
 * id Integer User identifier
 * body Users.userAccessTokenCreatePayload details
 * returns users.accessTokenResponse
 **/
exports.userGenerateAPIKey = function(id,body) {
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
 * Get all API keys for a user
 * Gets all API keys for a user. Only the calling user or admin can retrieve api-keys. **Access policy**: authenticated
 *
 * id Integer User identifier
 * returns List
 **/
exports.userGetAPIKeys = function(id) {
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
 * Inspect a user
 * Retrieve details about a user. User passwords are filtered out, and should never be accessible. **Access policy**: authenticated
 *
 * id Integer User identifier
 * returns portainer.User
 **/
exports.userInspect = function(id) {
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
 * List users
 * List Portainer users. Non-administrator users will only be able to list other non-administrator user accounts. User passwords are filtered out, and should never be accessible. **Access policy**: restricted
 *
 * environmentId Integer Identifier of the environment(endpoint) that will be used to filter the authorized users (optional)
 * returns List
 **/
exports.userList = function(environmentId) {
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
 * Inspect a user memberships
 * Inspect a user memberships. **Access policy**: restricted
 *
 * id Integer User identifier
 * returns portainer.TeamMembership
 **/
exports.userMembershipsInspect = function(id) {
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
 * Remove an api-key associated to a user
 * Remove an api-key associated to a user.. Only the calling user or admin can remove api-key. **Access policy**: authenticated
 *
 * id Integer User identifier
 * keyID Integer Api Key identifier
 * no response value expected for this operation
 **/
exports.userRemoveAPIKey = function(id,keyID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a user
 * Update user details. A regular user account can only update his details. A regular user account cannot change their username or role. **Access policy**: authenticated
 *
 * id Integer User identifier
 * body Users.userUpdatePayload User details
 * returns portainer.User
 **/
exports.userUpdate = function(id,body) {
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
 * Update password for a user
 * Update password for the specified user. **Access policy**: authenticated
 *
 * id Integer identifier
 * body Users.userUpdatePasswordPayload details
 * no response value expected for this operation
 **/
exports.userUpdatePassword = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

