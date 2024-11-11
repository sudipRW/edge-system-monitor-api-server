'use strict';
const fetch = (...args) => import('node-fetch').then(module => module.default(...args));
require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');

const PORTAINER_URL = process.env.PORTAINER_URL;

/**
 * De-association an edge environment(endpoint)
 * De-association an edge environment(endpoint). **Access policy**: administrator
 *
 * id Integer Environment(Endpoint) identifier
 * no response value expected for this operation
 **/
exports.endpointAssociationDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new environment(endpoint)
 * Create a new environment(endpoint) that will be used to manage an environment(endpoint). **Access policy**: administrator
 *
 * name String Name that will be used to identify this environment(endpoint) (example: my-environment)
 * endpointCreationType Integer Environment(Endpoint) type. Value must be one of: 1 (Local Docker environment), 2 (Agent environment), 3 (Azure environment), 4 (Edge agent environment) or 5 (Local Kubernetes Environment)
 * edgeTunnelServerAddress String URL or IP address that will be used to establish a reverse tunnel
 * uRL String URL or IP address of a Docker host (example: docker.mydomain.tld:2375). Defaults to local if not specified (Linux: /var/run/docker.sock, Windows: //./pipe/docker_engine). Cannot be empty if EndpointCreationType is set to 4 (Edge agent environment) (optional)
 * publicURL String URL or IP address where exposed containers will be reachable. Defaults to URL if not specified (example: docker.mydomain.tld:2375) (optional)
 * groupID Integer Environment(Endpoint) group identifier. If not specified will default to 1 (unassigned). (optional)
 * tLS Boolean Require TLS to connect against this environment(endpoint). Must be true if EndpointCreationType is set to 2 (Agent environment) (optional)
 * tLSSkipVerify Boolean Skip server verification when using TLS. Must be true if EndpointCreationType is set to 2 (Agent environment) (optional)
 * tLSSkipClientVerify Boolean Skip client verification when using TLS. Must be true if EndpointCreationType is set to 2 (Agent environment) (optional)
 * tLSCACertFile File TLS CA certificate file (optional)
 * tLSCertFile File TLS client certificate file (optional)
 * tLSKeyFile File TLS client key file (optional)
 * azureApplicationID String Azure application ID. Required if environment(endpoint) type is set to 3 (optional)
 * azureTenantID String Azure tenant ID. Required if environment(endpoint) type is set to 3 (optional)
 * azureAuthenticationKey String Azure authentication key. Required if environment(endpoint) type is set to 3 (optional)
 * tagIds List List of tag identifiers to which this environment(endpoint) is associated (optional)
 * edgeCheckinInterval Integer The check in interval for edge agent (in seconds) (optional)
 * gpus String List of GPUs - json stringified array of {name, value} structs (optional)
 * returns portainer.Endpoint
 **/

exports.endpointCreate = function(
  name,
  endpointCreationType,
  edgeTunnelServerAddress,
  uRL,
  publicURL,
  groupID,
  tLS,
  tLSSkipVerify,
  tLSSkipClientVerify,
  tLSCACertFile,
  tLSCertFile,
  tLSKeyFile,
  azureApplicationID,
  azureTenantID,
  azureAuthenticationKey,
  tagIds,
  edgeCheckinInterval,
  gpus,
  token
) {
  return new Promise(function(resolve, reject) {
    // Validate required fields
    if (!name || !endpointCreationType || !uRL) {
      return reject({
        status: 400,
        message: "Missing required fields: 'name', 'endpointCreationType', or 'MonitoringSystemURL'."
      });
    }
    // Create form-data object
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('EndpointCreationType', endpointCreationType);
    formData.append('URL', uRL);
    formData.append('GroupID', groupID);
    if (Array.isArray(tagIds)) {
      formData.append('TagIds', JSON.stringify(tagIds));
    }

    // Make the POST request to Portainer
    axios.post(`${PORTAINER_URL}/api/endpoints`,formData,{
      headers: {
        Authorization: `Bearer ${token}`,
        ...formData.getHeaders()
      },
    })
    .then(response => {
      resolve({
        status: 201,
        message: "Environment (endpoint) created successfully.",
        data: response.data
      });
    })
    .catch(error => {
      if (error.response) {
        reject({
          status: error.response.status,
          message: error.response.data.message || "Error occurred while creating the endpoint."
        });
      } else if (error.request) {
        reject({
          status: 500,
          message: "No response received from Portainer."
        });
      } else {
        reject({
          status: 500,
          message: error.message || "Unexpected error."
        });
      }
    });
  });
};



/**
 * Create or retrieve the endpoint for an EdgeID
 *
 * returns endpoints.endpointCreateGlobalKeyResponse
 **/
exports.endpointCreateGlobalKey = function() {
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
 * Remove an environment
 * Remove the environment associated to the specified identifier and optionally clean-up associated resources. **Access policy**: Administrator only.
 *
 * id Integer Environment(Endpoint) identifier
 * no response value expected for this operation
 **/
exports.endpointDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove multiple environments
 * Remove multiple environments and optionally clean-up associated resources. **Access policy**: Administrator only.
 *
 * body Endpoints.endpointDeleteBatchPayload List of environments to delete, with optional deleteCluster flag to clean-up assocaited resources (cloud environments only)
 * no response value expected for this operation
 **/

exports.endpointDeleteBatch = function (body, token) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`${PORTAINER_URL}/api/endpoints`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: body, // Pass body data here
      });
      
      // Check if response status indicates partial success (207)
      if (response.status === 207) {
        console.warn("Partial success:", response.data);
      }

      resolve(response.data); // Resolve with response data for both 204 and 207 statuses
    } catch (error) {
      // Enhanced error handling to provide detailed feedback
      if (error.response) {
        console.error("Error deleting environments:", error.response.data);
        reject(error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
        reject(new Error("No response from the server. Please try again later."));
      } else {
        console.error("Request setup error:", error.message);
        reject(new Error("Error in making API request. Please check your configuration."));
      }
    }
  });
};



/**
 * fetch docker pull limits
 * get docker pull limits for a docker hub registry in the environment **Access policy**:
 *
 * id Integer endpoint ID
 * registryId Integer registry ID
 * returns endpoints.dockerhubStatusResponse
 **/
exports.endpointDockerhubStatus = function(id,registryId) {
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
 * Get environment(endpoint) status
 * environment(endpoint) for edge agent to check status of environment(endpoint) **Access policy**: restricted only to Edge environments(endpoints)
 *
 * id Integer Environment(Endpoint) identifier
 * returns endpointedge.endpointEdgeStatusInspectResponse
 **/
exports.endpointEdgeStatusInspect = function(id) {
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
 * force update a docker service
 * force update a docker service **Access policy**: authenticated
 *
 * id Integer endpoint identifier
 * body Endpoints.forceUpdateServicePayload details
 * returns swarm.ServiceUpdateResponse
 **/
exports.endpointForceUpdateService = function(id,body) {
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
 * Inspect an environment(endpoint)
 * Retrieve details about an environment(endpoint). **Access policy**: restricted
 *
 * id Integer Environment(Endpoint) identifier
 * returns portainer.Endpoint
 **/
exports.endpointInspect = function(id,token) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${PORTAINER_URL}/api/endpoints/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error fetching endpoint details:', error);
      reject(error); // Handle and pass on any errors
    }
  });
};

/**
 * List environments(endpoints)
 * List all environments(endpoints) based on the current user authorizations.
 * Will return all environments(endpoints) if using an administrator or team leader account
 * otherwise it will only return authorized environments(endpoints). **Access policy**: restricted
 *
 * start Integer Start searching from (optional)
 * limit Integer Limit results to this value (optional)
 * order Integer Order sorted results by desc/asc (optional)
 * search String Search query (optional)
 * groupIds List List environments(endpoints) of these groups (optional)
 * status List List environments(endpoints) by this status (optional)
 * types List List environments(endpoints) of this type (optional)
 * tagIds List search environments(endpoints) with these tags (optional)
 * tagsPartialMatch Boolean If true, will return environment(endpoint) which has one of tagIds,
 *                          if false (or missing) will return only environments(endpoints) that has all the tags (optional)
 * endpointIds List will return only these environments(endpoints) (optional)
 * provisioned Boolean If true, will return environment(endpoint) that were provisioned (optional)
 * agentVersions List will return only environments with one of these agent versions (optional)
 * edgeAsync Boolean if exists true show only edge async agents, false show only standard edge agents.
 *                      if missing, will show both types (relevant only for edge agents) (optional)
 * edgeDeviceUntrusted Boolean if true, show only untrusted edge agents, if false show only trusted edge agents
 *                       (relevant only for edge agents) (optional)
 * edgeCheckInPassedSeconds BigDecimal if bigger then zero, show only edge agents that checked-in
 *                            in the last provided seconds (relevant only for edge agents) (optional)
 * excludeSnapshots Boolean if true, the snapshot data won't be retrieved (optional)
 * name String will return only environments(endpoints) with this name (optional)
 * edgeStackStatus String only applied when edgeStackId exists. Filter the returned environments based on their deployment status in the stack (not the environment status!) (optional)
 * returns List
 **/
exports.endpointList = function(
  start, 
  limit, 
  order, 
  search, 
  groupIds, 
  status, 
  types, 
  tagIds, 
  tagsPartialMatch, 
  endpointIds, 
  provisioned, 
  agentVersions, 
  edgeAsync, 
  edgeDeviceUntrusted, 
  edgeCheckInPassedSeconds, 
  excludeSnapshots, 
  name, 
  edgeStackStatus,
  token // Ensure token is passed as an argument
) {
  return new Promise((resolve, reject) => {
    // Construct query parameters
    const queryParams = new URLSearchParams({
      start: start !== undefined ? start : 1, // Default start if undefined
      limit: limit !== undefined ? limit : 10, // Default limit if undefined
      order: order || 'asc', // Default order
      search,
      groupIds: groupIds?.length ? groupIds.join(',') : undefined, // Convert arrays to comma-separated strings if they exist
      status: status?.length ? status.join(',') : undefined,
      types: types?.length ? types.join(',') : undefined,
      tagIds: tagIds?.length ? tagIds.join(',') : undefined,
      tagsPartialMatch: tagsPartialMatch !== undefined ? tagsPartialMatch : true, // Default to true
      endpointIds: endpointIds?.length ? endpointIds.join(',') : undefined,
      provisioned: provisioned !== undefined ? provisioned : true, // Default to true
      agentVersions: agentVersions?.length ? agentVersions.join(',') : undefined,
      edgeAsync: edgeAsync !== undefined ? edgeAsync : false, // Default to false
      edgeDeviceUntrusted: edgeDeviceUntrusted !== undefined ? edgeDeviceUntrusted : false, // Default to false
      edgeCheckInPassedSeconds: edgeCheckInPassedSeconds || 0, // Default to 0
      excludeSnapshots: excludeSnapshots !== undefined ? excludeSnapshots : false, // Default to false
      name,
      edgeStackStatus
    });

    // Remove any undefined or empty parameters from the query string
    for (const [key, value] of queryParams.entries()) {
      if (value === undefined || value === null || value === '') {
        queryParams.delete(key);
      }
    }

    // Make the fetch call to the Portainer API
    fetch(`${PORTAINER_URL}/api/endpoints?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Include the token in the headers
      }
    })
      .then(response => {
        if (!response.ok) {
          return reject({ message: `Error fetching endpoints: ${response.statusText}`, statusCode: response.status });
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => {
        console.error('Error fetching endpoints:', error);
        reject({ message: 'Error fetching endpoints', error });
      });
  });
};



/**
 * List Registries on environment
 * List all registries based on the current user authorizations in current environment. **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * namespace String required if kubernetes environment, will show registries by namespace (optional)
 * returns List
 **/
exports.endpointRegistriesList = function(id,namespace) {
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
 * update registry access for environment
 * **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * registryId Integer Registry identifier
 * body Endpoints.registryAccessPayload details
 * no response value expected for this operation
 **/
exports.endpointRegistryAccess = function(id,registryId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update settings for an environment(endpoint)
 * Update settings for an environment(endpoint). **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * body Endpoints.endpointSettingsUpdatePayload Environment(Endpoint) details
 * returns portainer.Endpoint
 **/
exports.endpointSettingsUpdate = function(id,body) {
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
 * Snapshots an environment(endpoint)
 * Snapshots an environment(endpoint) **Access policy**: administrator
 *
 * id Integer Environment(Endpoint) identifier
 * no response value expected for this operation
 **/
exports.endpointSnapshot = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Snapshot all environments(endpoints)
 * Snapshot all environments(endpoints) **Access policy**: administrator
 *
 * no response value expected for this operation
 **/
exports.endpointSnapshots = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an environment(endpoint)
 * Update an environment(endpoint). **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * body Endpoints.endpointUpdatePayload Environment(Endpoint) details
 * returns portainer.Endpoint
 **/
exports.endpointUpdate = function(id,body,token) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.put(`${PORTAINER_URL}/api/endpoints/${id}`,body, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error updating endpoint details:', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}


/**
 * Update relations for a list of environments
 * Update relations for a list of environments Edge groups, tags and environment group can be updated.  **Access policy**: administrator
 *
 * body Endpoints.endpointUpdateRelationsPayload Environment relations data
 * no response value expected for this operation
 **/
exports.endpointUpdateRelations = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Upload a file under a specific path on the file system of an environment (endpoint)
 * Use this environment(endpoint) to upload TLS files. **Access policy**: administrator
 *
 * id Integer Environment(Endpoint) identifier
 * path String The destination path to upload the file to
 * file File The file to upload
 * volumeID String Optional volume identifier to upload the file (optional)
 * no response value expected for this operation
 **/
exports.endpointsIdDockerV2BrowsePutPOST = function(id,path,file,volumeID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Inspect an EdgeJob Log
 * **Access policy**: public
 *
 * id Integer environment(endpoint) Id
 * jobID Integer Job Id
 * no response value expected for this operation
 **/
exports.endpointsIdEdgeJobsJobIDLogsPOST = function(id,jobID) {
  return new Promise(function(resolve, reject) {
    resolve();
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


exports._pingEndpoint = function(id,token) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${PORTAINER_URL}/api/endpoints/${id}/docker/_ping`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error fetching endpoint status:', error.response);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}

