'use strict';


/**
 * Create a new team
 * Create a new team. **Access policy**: administrator
 *
 * body Teams.teamCreatePayload details
 * returns portainer.Team
 **/
exports.teamCreate = function(body) {
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
 * Remove a team
 * Remove a team. **Access policy**: administrator
 *
 * id Integer Team Id
 * no response value expected for this operation
 **/
exports.teamDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Inspect a team
 * Retrieve details about a team. Access is only available for administrator and leaders of that team. **Access policy**: administrator
 *
 * id Integer Team identifier
 * returns portainer.Team
 **/
exports.teamInspect = function(id) {
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
 * List teams
 * List teams. For non-administrator users, will only list the teams they are member of. **Access policy**: restricted
 *
 * onlyLedTeams Boolean Only list teams that the user is leader of (optional)
 * environmentId Integer Identifier of the environment(endpoint) that will be used to filter the authorized teams (optional)
 * returns List
 **/
exports.teamList = function(onlyLedTeams,environmentId) {
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
 * Update a team
 * Update a team. **Access policy**: administrator
 *
 * id Integer Team identifier
 * body Teams.teamUpdatePayload Team details
 * returns portainer.Team
 **/
exports.teamUpdate = function(id,body) {
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

