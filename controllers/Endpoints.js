'use strict';

var utils = require('../utils/writer.js');
var Endpoints = require('../service/EndpointsService');

module.exports.endpointAssociationDelete = function endpointAssociationDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  Endpoints.endpointAssociationDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointCreate = function endpointCreate (req, res, next) {
  var name = req.swagger.params['Name'].value;
  var endpointCreationType = req.swagger.params['EndpointCreationType'].value;
  var edgeTunnelServerAddress = req.swagger.params['EdgeTunnelServerAddress'].value;
  var uRL = req.swagger.params['URL'].value;
  var publicURL = req.swagger.params['PublicURL'].value;
  var groupID = req.swagger.params['GroupID'].value;
  var tLS = req.swagger.params['TLS'].value;
  var tLSSkipVerify = req.swagger.params['TLSSkipVerify'].value;
  var tLSSkipClientVerify = req.swagger.params['TLSSkipClientVerify'].value;
  var tLSCACertFile = req.swagger.params['TLSCACertFile'].value;
  var tLSCertFile = req.swagger.params['TLSCertFile'].value;
  var tLSKeyFile = req.swagger.params['TLSKeyFile'].value;
  var azureApplicationID = req.swagger.params['AzureApplicationID'].value;
  var azureTenantID = req.swagger.params['AzureTenantID'].value;
  var azureAuthenticationKey = req.swagger.params['AzureAuthenticationKey'].value;
  var tagIds = req.swagger.params['TagIds'].value;
  var edgeCheckinInterval = req.swagger.params['EdgeCheckinInterval'].value;
  var gpus = req.swagger.params['Gpus'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
 
  // Validate required parameters
  if (!name || !endpointCreationType || !uRL) {
    return utils.writeJson(res, {
      status: 400,
      message: "Missing required fields: 'Name', 'EndpointCreationType', or 'MonitoringSystemURL'."
    });
  }

  Endpoints.endpointCreate(name,endpointCreationType,edgeTunnelServerAddress,uRL,publicURL,groupID,tLS,tLSSkipVerify,tLSSkipClientVerify,tLSCACertFile,tLSCertFile,tLSKeyFile,azureApplicationID,azureTenantID,azureAuthenticationKey,tagIds,edgeCheckinInterval,gpus,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      // Error handling
      if (error.status === 400) {
        return utils.writeJson(res, {
          status: 400,
          message: error.message || "Invalid request."
        });
      }
      if (error.status === 409) {
        return utils.writeJson(res, {
          status: 409,
          message: "Name is not unique."
        });
      }
      // Handle server errors
      return utils.writeJson(res, {
        status: 500,
        message: "Server error."
      });
    });
};


module.exports.endpointCreateGlobalKey = function endpointCreateGlobalKey (req, res, next) {
  Endpoints.endpointCreateGlobalKey()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointDelete = function endpointDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  Endpoints.endpointDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointDeleteBatch = function endpointDeleteBatch (req, res, next) {
  var body = req.swagger.params['body'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }

  Endpoints.endpointDeleteBatch(body,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointDockerhubStatus = function endpointDockerhubStatus (req, res, next) {
  var id = req.swagger.params['id'].value;
  var registryId = req.swagger.params['registryId'].value;
  Endpoints.endpointDockerhubStatus(id,registryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointEdgeStatusInspect = function endpointEdgeStatusInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  Endpoints.endpointEdgeStatusInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointForceUpdateService = function endpointForceUpdateService (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Endpoints.endpointForceUpdateService(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointInspect = function endpointInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }

  Endpoints.endpointInspect(id,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointList = function endpointList (req, res, next) {
  const start = req.query.start !== undefined ? Number(req.query.start) : 1;
  const limit = req.query.limit !== undefined ? Number(req.query.limit) : 10;
  const order = req.query.order || 'asc'; // Default to ascending
  const search = req.query.search || '';
  const groupIds = Array.isArray(req.query.groupIds) ? req.query.groupIds : []; // Ensure it's an array
  const status = Array.isArray(req.query.status) ? req.query.status : []; // Ensure it's an array
  const types = Array.isArray(req.query.types) ? req.query.types : []; // Ensure it's an array
  const tagIds = Array.isArray(req.query.tagIds) ? req.query.tagIds : []; // Ensure it's an array
  const tagsPartialMatch = req.query.tagsPartialMatch === 'true'; // Default to true
  const endpointIds = Array.isArray(req.query.endpointIds) ? req.query.endpointIds : []; // Ensure it's an array
  const provisioned = req.query.provisioned === 'true'; // Default to true
  const agentVersions = Array.isArray(req.query.agentVersions) ? req.query.agentVersions : []; // Ensure it's an array
  const edgeAsync = req.query.edgeAsync === 'true'; // Default to false
  const edgeDeviceUntrusted = req.query.edgeDeviceUntrusted === 'true'; // Default to false
  const edgeCheckInPassedSeconds = Number(req.query.edgeCheckInPassedSeconds) || 0; // Default to 0
  const excludeSnapshots = req.query.excludeSnapshots === 'true'; // Default to false
  const name = req.query.name || '';
  const edgeStackStatus = req.query.edgeStackStatus || '';

  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }

  Endpoints.endpointList(start,limit,order,search,groupIds,status,types,tagIds,tagsPartialMatch,endpointIds,provisioned,agentVersions,edgeAsync,edgeDeviceUntrusted,edgeCheckInPassedSeconds,excludeSnapshots,name,edgeStackStatus,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointRegistriesList = function endpointRegistriesList (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  Endpoints.endpointRegistriesList(id,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointRegistryAccess = function endpointRegistryAccess (req, res, next) {
  var id = req.swagger.params['id'].value;
  var registryId = req.swagger.params['registryId'].value;
  var body = req.swagger.params['body'].value;
  Endpoints.endpointRegistryAccess(id,registryId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointSettingsUpdate = function endpointSettingsUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Endpoints.endpointSettingsUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointSnapshot = function endpointSnapshot (req, res, next) {
  var id = req.swagger.params['id'].value;
  Endpoints.endpointSnapshot(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointSnapshots = function endpointSnapshots (req, res, next) {
  Endpoints.endpointSnapshots()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointUpdate = function endpointUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  const authHeader = req.headers['authorization'];
  let token;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
 
  Endpoints.endpointUpdate(id,body,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointUpdateRelations = function endpointUpdateRelations (req, res, next) {
  var body = req.swagger.params['body'].value;
  Endpoints.endpointUpdateRelations(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointsIdDockerV2BrowsePutPOST = function endpointsIdDockerV2BrowsePutPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var path = req.swagger.params['Path'].value;
  var file = req.swagger.params['file'].value;
  var volumeID = req.swagger.params['volumeID'].value;
  Endpoints.endpointsIdDockerV2BrowsePutPOST(id,path,file,volumeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointsIdEdgeJobsJobIDLogsPOST = function endpointsIdEdgeJobsJobIDLogsPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var jobID = req.swagger.params['jobID'].value;
  Endpoints.endpointsIdEdgeJobsJobIDLogsPOST(id,jobID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.endpointsIdEdgeStacksStackIdGET = function endpointsIdEdgeStacksStackIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var stackId = req.swagger.params['stackId'].value;
  Endpoints.endpointsIdEdgeStacksStackIdGET(id,stackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports._pingEndpoint = function _pingEndpoint (req, res, next) {
  var id = req.swagger.params['id'].value;
  const authHeader = req.headers['authorization'];
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]; // Get the token part
  }
  Endpoints._pingEndpoint(id,token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
