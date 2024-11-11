'use strict';
const axios = require('axios');
const PORTAINER_URL = process.env.PORTAINER_URL;

/**
 * Fetch container gpus data
 * **Access policy**:
 *
 * environmentId Integer Environment identifier
 * containerId Integer Container identifier
 * returns containers.containerGpusResponse
 **/
exports.dockerContainerGpusInspect = function(environmentId,containerId) {
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
 * Fetch images
 * **Access policy**:
 *
 * environmentId Integer Environment identifier
 * withUsage Boolean Include image usage information (optional)
 * returns List
 **/
exports.dockerImagesList = function(id,withUsage,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.get(
        `${PORTAINER_URL}/api/endpoints/${id}/docker/images/json?all=true`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(response.data);
    } catch (error) {
      console.error("Error fetching Docker containers:", error.message);
      reject(error.response.data);
    }
  });
}

exports.dockerContainersList = function(id,withUsage,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.get(
        `${PORTAINER_URL}/api/endpoints/${id}/docker/containers/json?all=true`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(response.data);
    } catch (error) {
      console.error("Error fetching Docker containers:", error.message);
      reject(error.response.data);
    }
  });
  
};
exports.dockerVolumesList = function(id,withUsage,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.get(
        `${PORTAINER_URL}/api/endpoints/${id}/docker/volumes`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(response.data);
    } catch (error) {
      console.error("Error fetching Docker volumes:", error.message);
      reject(error.response.data);
    }
  });
  
};

