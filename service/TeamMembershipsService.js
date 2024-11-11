'use strict';


/**
 * Create a new team membership
 * Create a new team memberships. Access is only available to administrators leaders of the associated team. **Access policy**: administrator
 *
 * body Teammemberships.teamMembershipCreatePayload Team membership details
 * returns portainer.TeamMembership
 **/
exports.teamMembershipCreate = function(body) {
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
 * Remove a team membership
 * Remove a team membership. Access is only available to administrators leaders of the associated team. **Access policy**: administrator
 *
 * id Integer TeamMembership identifier
 * no response value expected for this operation
 **/
exports.teamMembershipDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List team memberships
 * List team memberships. Access is only available to administrators and team leaders. **Access policy**: administrator
 *
 * returns List
 **/
exports.teamMembershipList = function() {
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
 * Update a team membership
 * Update a team membership. Access is only available to administrators or leaders of the associated team. **Access policy**: administrator or leaders of the associated team
 *
 * id Integer Team membership identifier
 * body Teammemberships.teamMembershipUpdatePayload Team membership details
 * returns portainer.TeamMembership
 **/
exports.teamMembershipUpdate = function(id,body) {
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
 * List team memberships
 * List team memberships. Access is only available to administrators and team leaders. **Access policy**: restricted
 *
 * id Integer Team Id
 * returns List
 **/
exports.teamMemberships = function(id) {
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

