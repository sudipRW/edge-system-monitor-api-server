'use strict';

var utils = require('../utils/writer.js');
var Stacks = require('../service/StacksService');

module.exports.stackAssociate = function stackAssociate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  var swarmId = req.swagger.params['swarmId'].value;
  var orphanedRunning = req.swagger.params['orphanedRunning'].value;
  Stacks.stackAssociate(id,endpointId,swarmId,orphanedRunning)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreate = function stackCreate (req, res, next) {
  var type = req.swagger.params['type'].value;
  var method = req.swagger.params['method'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  var body = req.swagger.params['body'].value;
  Stacks.stackCreate(type,method,endpointId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateDockerStandaloneFile = function stackCreateDockerStandaloneFile (req, res, next) {
  var name = req.swagger.params['Name'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  var env = req.swagger.params['Env'].value;
  var file = req.swagger.params['file'].value;
  Stacks.stackCreateDockerStandaloneFile(name,endpointId,env,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateDockerStandaloneRepository = function stackCreateDockerStandaloneRepository (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var body = req.swagger.params['body'].value;
  Stacks.stackCreateDockerStandaloneRepository(endpointId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateDockerStandaloneString = function stackCreateDockerStandaloneString (req, res, next) {
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Stacks.stackCreateDockerStandaloneString(body,endpointId,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateDockerSwarmFile = function stackCreateDockerSwarmFile (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var name = req.swagger.params['Name'].value;
  var swarmID = req.swagger.params['SwarmID'].value;
  var env = req.swagger.params['Env'].value;
  var file = req.swagger.params['file'].value;
  Stacks.stackCreateDockerSwarmFile(endpointId,name,swarmID,env,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateDockerSwarmRepository = function stackCreateDockerSwarmRepository (req, res, next) {
  var endpointId = req.swagger.params['endpointId'].value;
  var body = req.swagger.params['body'].value;
  Stacks.stackCreateDockerSwarmRepository(endpointId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateDockerSwarmString = function stackCreateDockerSwarmString (req, res, next) {
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackCreateDockerSwarmString(body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateKubernetesFile = function stackCreateKubernetesFile (req, res, next) {
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackCreateKubernetesFile(body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateKubernetesGit = function stackCreateKubernetesGit (req, res, next) {
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackCreateKubernetesGit(body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackCreateKubernetesUrl = function stackCreateKubernetesUrl (req, res, next) {
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackCreateKubernetesUrl(body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackDelete = function stackDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  var external = req.swagger.params['external'].value;
  Stacks.stackDelete(id,endpointId,external)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackDeleteKubernetesByName = function stackDeleteKubernetesByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  var external = req.swagger.params['external'].value;
  Stacks.stackDeleteKubernetesByName(name,endpointId,external)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackFileInspect = function stackFileInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Stacks.stackFileInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackGitRedeploy = function stackGitRedeploy (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackGitRedeploy(id,body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackInspect = function stackInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Stacks.stackInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackList = function stackList (req, res, next) {
  var filters = req.swagger.params['filters'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Stacks.stackList(filters,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackMigrate = function stackMigrate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackMigrate(id,body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackStart = function stackStart (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackStart(id,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackStop = function stackStop (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackStop(id,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackUpdate = function stackUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  var body = req.swagger.params['body'].value;
  Stacks.stackUpdate(id,endpointId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stackUpdateGit = function stackUpdateGit (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  var endpointId = req.swagger.params['endpointId'].value;
  Stacks.stackUpdateGit(id,body,endpointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhookInvoke = function webhookInvoke (req, res, next) {
  var webhookID = req.swagger.params['webhookID'].value;
  Stacks.webhookInvoke(webhookID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
