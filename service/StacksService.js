'use strict';
const axios = require('axios');

const PORTAINER_URL = process.env.PORTAINER_URL;

/**
 * Associate an orphaned stack to a new environment(endpoint)
 * **Access policy**: administrator
 *
 * id Integer Stack identifier
 * endpointId Integer Environment identifier
 * swarmId Integer Swarm identifier
 * orphanedRunning Boolean Indicates whether the stack is orphaned
 * returns portainer.Stack
 **/
exports.stackAssociate = function(id,endpointId,swarmId,orphanedRunning) {
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
 * Deploy a new stack
 * Deploy a new stack into a Docker environment(endpoint) specified via the environment(endpoint) identifier. **Access policy**: authenticated
 *
 * type Integer Stack deployment type. Possible values: 1 (Swarm stack), 2 (Compose stack) or 3 (Kubernetes stack).
 * method String Stack deployment method. Possible values: file, string, repository or url.
 * endpointId Integer Identifier of the environment(endpoint) that will be used to deploy the stack
 * body Object for body documentation see the relevant /stacks/create/{type}/{method} endpoint
 * returns portainer.Stack
 **/
exports.stackCreate = function(type,method,endpointId,body) {
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
 * Deploy a new compose stack from a file
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * name String Name of the stack
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * env String Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}]. (optional)
 * file File Stack file (optional)
 * returns portainer.Stack
 **/
exports.stackCreateDockerStandaloneFile = function(name,endpointId,env,file) {
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
 * Deploy a new compose stack from repository
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * body Stacks.composeStackFromGitRepositoryPayload stack config
 * returns portainer.Stack
 **/
exports.stackCreateDockerStandaloneRepository = function(endpointId,body) {
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
 * Deploy a new compose stack from a text
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * body Stacks.composeStackFromFileContentPayload stack config
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * returns portainer.Stack
 **/
exports.stackCreateDockerStandaloneString = function(body,endpointId,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.post(`${PORTAINER_URL}/api/stacks/create/standalone/string?endpointId=${endpointId}`,body, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
          "Content-Type": "application/json",
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error creating endpoint stacks', error);
      reject(error.response.data); // Handle and pass on any errors
    }
  });
}


/**
 * Deploy a new swarm stack from a file
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * name String Name of the stack (optional)
 * swarmID String Swarm cluster identifier. (optional)
 * env String Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}]. Optional (optional)
 * file File Stack file (optional)
 * returns portainer.Stack
 **/
exports.stackCreateDockerSwarmFile = function(endpointId,name,swarmID,env,file) {
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
 * Deploy a new swarm stack from a git repository
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * body Stacks.swarmStackFromGitRepositoryPayload stack config
 * returns portainer.Stack
 **/
exports.stackCreateDockerSwarmRepository = function(endpointId,body) {
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
 * Deploy a new swarm stack from a text
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * body Stacks.swarmStackFromFileContentPayload stack config
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * returns portainer.Stack
 **/
exports.stackCreateDockerSwarmString = function(body,endpointId) {
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
 * Deploy a new kubernetes stack from a file
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * body Stacks.kubernetesStringDeploymentPayload stack config
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * returns portainer.Stack
 **/
exports.stackCreateKubernetesFile = function(body,endpointId) {
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
 * Deploy a new kubernetes stack from a git repository
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * body Stacks.kubernetesGitDeploymentPayload stack config
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * returns portainer.Stack
 **/
exports.stackCreateKubernetesGit = function(body,endpointId) {
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
 * Deploy a new kubernetes stack from a url
 * Deploy a new stack into a Docker environment specified via the environment identifier. **Access policy**: authenticated
 *
 * body Stacks.kubernetesManifestURLDeploymentPayload stack config
 * endpointId Integer Identifier of the environment that will be used to deploy the stack
 * returns portainer.Stack
 **/
exports.stackCreateKubernetesUrl = function(body,endpointId) {
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
 * Remove a stack
 * Remove a stack. **Access policy**: restricted
 *
 * id Integer Stack identifier
 * endpointId Integer Environment identifier
 * external Boolean Set to true to delete an external stack. Only external Swarm stacks are supported (optional)
 * no response value expected for this operation
 **/
exports.stackDelete = function(id,endpointId,external) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove Kubernetes stacks by name
 * Remove a stack. **Access policy**: restricted
 *
 * name String Stack name
 * endpointId Integer Environment identifier
 * external Boolean Set to true to delete an external stack. Only external Swarm stacks are supported (optional)
 * no response value expected for this operation
 **/
exports.stackDeleteKubernetesByName = function(name,endpointId,external) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve the content of the Stack file for the specified stack
 * Get Stack file content. **Access policy**: restricted
 *
 * id Integer Stack identifier
 * returns stacks.stackFileResponse
 **/
exports.stackFileInspect = function(id) {
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
 * Redeploy a stack
 * Pull and redeploy a stack via Git **Access policy**: authenticated
 *
 * id Integer Stack identifier
 * body Stacks.stackGitRedployPayload Git configs for pull and redeploy of a stack. **StackName** may only be populated for Kuberenetes stacks, and if specified with a blank string, it will be set to blank
 * endpointId Integer Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack. (optional)
 * returns portainer.Stack
 **/
exports.stackGitRedeploy = function(id,body,endpointId) {
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
 * Inspect a stack
 * Retrieve details about a stack. **Access policy**: restricted
 *
 * id Integer Stack identifier
 * returns portainer.Stack
 **/
exports.stackInspect = function(id) {
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
 * List stacks
 * List all stacks based on the current user authorizations. Will return all stacks if using an administrator account otherwise it will only return the list of stacks the user have access to. Limited stacks will not be returned by this endpoint. **Access policy**: authenticated
 *
 * filters String Filters to process on the stack list. Encoded as JSON (a map[string]string). For example, {'SwarmID': 'jpofkc0i9uo9wtx1zesuk649w'} will only return stacks that are part of the specified Swarm cluster. Available filters: EndpointID, SwarmID. (optional)
 * returns List
 **/
exports.stackList = function(filters,token) {
  return new Promise(async function(resolve, reject) {
    try {
      const response = await axios.get(`${PORTAINER_URL}/api/stacks?filters=${filters}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authenticate with the API
        },
      });
      resolve(response.data); // Return the data received from Portainer
    } catch (error) {
      console.error('Error fetching endpoint stacks', error);
      reject(error); // Handle and pass on any errors
    }
  });
}


/**
 * Migrate a stack to another environment(endpoint)
 * Migrate a stack from an environment(endpoint) to another environment(endpoint). It will re-create the stack inside the target environment(endpoint) before removing the original stack. **Access policy**: authenticated
 *
 * id Integer Stack identifier
 * body Stacks.stackMigratePayload Stack migration details
 * endpointId Integer Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack. (optional)
 * returns portainer.Stack
 **/
exports.stackMigrate = function(id,body,endpointId) {
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
 * Starts a stopped Stack
 * Starts a stopped Stack. **Access policy**: authenticated
 *
 * id Integer Stack identifier
 * endpointId Integer Environment identifier
 * returns portainer.Stack
 **/
exports.stackStart = function(id,endpointId) {
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
 * Stops a stopped Stack
 * Stops a stopped Stack. **Access policy**: authenticated
 *
 * id Integer Stack identifier
 * endpointId Integer Environment identifier
 * returns portainer.Stack
 **/
exports.stackStop = function(id,endpointId) {
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
 * Update a stack
 * Update a stack, only for file based stacks. **Access policy**: authenticated
 *
 * id Integer Stack identifier
 * endpointId Integer Environment identifier
 * body Stacks.updateSwarmStackPayload Stack details
 * returns portainer.Stack
 **/
exports.stackUpdate = function(id,endpointId,body) {
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
 * Update a stack's Git configs
 * Update the Git settings in a stack, e.g., RepositoryReferenceName and AutoUpdate **Access policy**: authenticated
 *
 * id Integer Stack identifier
 * body Stacks.stackGitUpdatePayload Git configs for pull and redeploy a stack
 * endpointId Integer Stacks created before version 1.18.0 might not have an associated environment(endpoint) identifier. Use this optional parameter to set the environment(endpoint) identifier used by the stack. (optional)
 * returns portainer.Stack
 **/
exports.stackUpdateGit = function(id,body,endpointId) {
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
 * Webhook for triggering stack updates from git
 * **Access policy**: public
 *
 * webhookID String Stack identifier
 * no response value expected for this operation
 **/
exports.webhookInvoke = function(webhookID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

