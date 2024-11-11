'use strict';

var utils = require('../utils/writer.js');
var Kubernetes = require('../service/KubernetesService');

module.exports.createKubernetesIngress = function createKubernetesIngress (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.createKubernetesIngress(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createKubernetesNamespace = function createKubernetesNamespace (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.createKubernetesNamespace(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createKubernetesService = function createKubernetesService (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.createKubernetesService(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteKubernetesIngresses = function deleteKubernetesIngresses (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.deleteKubernetesIngresses(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteKubernetesNamespace = function deleteKubernetesNamespace (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  Kubernetes.deleteKubernetesNamespace(id,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteKubernetesServices = function deleteKubernetesServices (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.deleteKubernetesServices(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesConfig = function getKubernetesConfig (req, res, next) {
  var ids = req.swagger.params['ids'].value;
  var excludeIds = req.swagger.params['excludeIds'].value;
  Kubernetes.getKubernetesConfig(ids,excludeIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesConfigMapsAndSecrets = function getKubernetesConfigMapsAndSecrets (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  Kubernetes.getKubernetesConfigMapsAndSecrets(id,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesIngressControllers = function getKubernetesIngressControllers (req, res, next) {
  var id = req.swagger.params['id'].value;
  var allowedOnly = req.swagger.params['allowedOnly'].value;
  Kubernetes.getKubernetesIngressControllers(id,allowedOnly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesIngressControllersByNamespace = function getKubernetesIngressControllersByNamespace (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  Kubernetes.getKubernetesIngressControllersByNamespace(id,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesIngresses = function getKubernetesIngresses (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.getKubernetesIngresses(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesMetricsForAllNodes = function getKubernetesMetricsForAllNodes (req, res, next) {
  var id = req.swagger.params['id'].value;
  Kubernetes.getKubernetesMetricsForAllNodes(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesMetricsForAllPods = function getKubernetesMetricsForAllPods (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  Kubernetes.getKubernetesMetricsForAllPods(id,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesMetricsForNode = function getKubernetesMetricsForNode (req, res, next) {
  var id = req.swagger.params['id'].value;
  var name = req.swagger.params['name'].value;
  Kubernetes.getKubernetesMetricsForNode(id,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesMetricsForPod = function getKubernetesMetricsForPod (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var name = req.swagger.params['name'].value;
  Kubernetes.getKubernetesMetricsForPod(id,namespace,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesNamespace = function getKubernetesNamespace (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  Kubernetes.getKubernetesNamespace(id,namespace)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesNamespaces = function getKubernetesNamespaces (req, res, next) {
  var id = req.swagger.params['id'].value;
  Kubernetes.getKubernetesNamespaces(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesNodesLimits = function getKubernetesNodesLimits (req, res, next) {
  var id = req.swagger.params['id'].value;
  Kubernetes.getKubernetesNodesLimits(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKubernetesServices = function getKubernetesServices (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var lookupapplications = req.swagger.params['lookupapplications'].value;
  Kubernetes.getKubernetesServices(id,namespace,lookupapplications)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.kubernetesNamespacesToggleSystem = function kubernetesNamespacesToggleSystem (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.kubernetesNamespacesToggleSystem(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateKubernetesIngress = function updateKubernetesIngress (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.updateKubernetesIngress(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateKubernetesIngressControllers = function updateKubernetesIngressControllers (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.updateKubernetesIngressControllers(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateKubernetesIngressControllersByNamespace = function updateKubernetesIngressControllersByNamespace (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.updateKubernetesIngressControllersByNamespace(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateKubernetesNamespace = function updateKubernetesNamespace (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.updateKubernetesNamespace(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateKubernetesService = function updateKubernetesService (req, res, next) {
  var id = req.swagger.params['id'].value;
  var namespace = req.swagger.params['namespace'].value;
  var body = req.swagger.params['body'].value;
  Kubernetes.updateKubernetesService(id,namespace,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
