'use strict';
require('dotenv').config();
const axios = require('axios');

const PORTAINER_URL = process.env.PORTAINER_URL;

/**
 * Add an environment(endpoint) to an environment(endpoint) group
 * Add an environment(endpoint) to an environment(endpoint) group **Access policy**: administrator
 *
 * id Integer EndpointGroup identifier
 * endpointId Integer Environment(Endpoint) identifier
 * no response value expected for this operation
 **/
exports.endpointGroupAddEndpoint = function(id,endpointId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove an environment(endpoint) group
 * Remove an environment(endpoint) group. **Access policy**: administrator
 *
 * id Integer EndpointGroup identifier
 * no response value expected for this operation
 **/
exports.endpointGroupDelete = function(id,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.delete(`${PORTAINER_URL}/api/endpoint_groups/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error deleting endpoint groups', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}


/**
 * Removes environment(endpoint) from an environment(endpoint) group
 * **Access policy**: administrator
 *
 * id Integer EndpointGroup identifier
 * endpointId Integer Environment(Endpoint) identifier
 * no response value expected for this operation
 **/
exports.endpointGroupDeleteEndpoint = function(id,endpointId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Environment(Endpoint) groups
 * List all environment(endpoint) groups based on the current user authorizations. Will return all environment(endpoint) groups if using an administrator account otherwise it will only return authorized environment(endpoint) groups. **Access policy**: restricted
 *
 * returns List
 **/
exports.endpointGroupList = function(token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.get(`${PORTAINER_URL}/api/endpoint_groups`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error fetching endpoint group details:', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}


/**
 * Update an environment(endpoint) group
 * Update an environment(endpoint) group. **Access policy**: administrator
 *
 * id Integer EndpointGroup identifier
 * body Endpointgroups.endpointGroupUpdatePayload EndpointGroup details
 * returns portainer.EndpointGroup
 **/
exports.endpointGroupUpdate = function(id,body) {
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
 * Inspect an Environment(Endpoint) group
 * Retrieve details abont an environment(endpoint) group. **Access policy**: administrator
 *
 * id Integer Environment(Endpoint) group identifier
 * returns portainer.EndpointGroup
 **/
exports.endpoint_groupsIdGET = function(id) {
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
 * Create an Environment(Endpoint) Group
 * Create a new environment(endpoint) group. **Access policy**: administrator
 *
 * body Endpointgroups.endpointGroupCreatePayload Environment(Endpoint) Group details
 * returns portainer.EndpointGroup
 **/
exports.endpoint_groupsPOST = function(body,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.post(`${PORTAINER_URL}/api/endpoint_groups`,body,{
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error creating endpoint group', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}

