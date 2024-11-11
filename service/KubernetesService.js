'use strict';


/**
 * Create a kubernetes ingress by namespace
 * Create a kubernetes ingress by namespace for the provided environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * body Kubernetes.K8sIngressInfo Ingress details
 * returns String
 **/
exports.createKubernetesIngress = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a kubernetes namespace
 * Create a kubernetes namespace within the given environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * body Kubernetes.K8sNamespaceDetails Namespace configuration details
 * returns String
 **/
exports.createKubernetesNamespace = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a kubernetes service
 * Create a kubernetes service within a given namespace **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * body Kubernetes.K8sServiceInfo Service definition
 * no response value expected for this operation
 **/
exports.createKubernetesService = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete kubernetes ingresses
 * Delete kubernetes ingresses for the provided environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * body Kubernetes.K8sIngressDeleteRequests Ingress details
 * returns String
 **/
exports.deleteKubernetesIngresses = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete kubernetes namespace
 * Delete a kubernetes namespace within the given environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace
 * returns String
 **/
exports.deleteKubernetesNamespace = function(id,namespace) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete kubernetes services
 * Delete the provided list of kubernetes services **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * body Kubernetes.K8sServiceDeleteRequests A map where the key is the namespace and the value is an array of services to delete
 * no response value expected for this operation
 **/
exports.deleteKubernetesServices = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Generate a kubeconfig file enabling client communication with k8s api server
 * Generate a kubeconfig file enabling client communication with k8s api server **Access policy**: authenticated
 *
 * ids List will include only these environments(endpoints) (optional)
 * excludeIds List will exclude these environments(endpoints) (optional)
 * no response value expected for this operation
 **/
exports.getKubernetesConfig = function(ids,excludeIds) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get ConfigMaps and Secrets
 * Get all ConfigMaps and Secrets for a given namespace **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * returns List
 **/
exports.getKubernetesConfigMapsAndSecrets = function(id,namespace) {
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
 * Get a list of ingress controllers
 * Get a list of ingress controllers for the given environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * allowedOnly Boolean Only return allowed ingress controllers (optional)
 * returns List
 **/
exports.getKubernetesIngressControllers = function(id,allowedOnly) {
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
 * Get a list ingress controllers by namespace
 * Get a list of ingress controllers for the given environment in the provided namespace **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace
 * returns List
 **/
exports.getKubernetesIngressControllersByNamespace = function(id,namespace) {
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
 * Get kubernetes ingresses by namespace
 * Get kubernetes ingresses by namespace for the provided environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * body List Ingress details
 * returns String
 **/
exports.getKubernetesIngresses = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of nodes with their live metrics
 * Get a list of nodes with their live metrics **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * returns v1beta1.NodeMetricsList
 **/
exports.getKubernetesMetricsForAllNodes = function(id) {
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
 * Get a list of pods with their live metrics
 * Get a list of pods with their live metrics **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace
 * returns v1beta1.PodMetricsList
 **/
exports.getKubernetesMetricsForAllPods = function(id,namespace) {
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
 * Get live metrics for a node
 * Get live metrics for a node **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * name String Node identifier
 * returns v1beta1.NodeMetrics
 **/
exports.getKubernetesMetricsForNode = function(id,name) {
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
 * Get live metrics for a pod
 * Get live metrics for a pod **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace
 * name String Pod identifier
 * returns v1beta1.PodMetrics
 **/
exports.getKubernetesMetricsForPod = function(id,namespace,name) {
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
 * Get kubernetes namespace details
 * Get kubernetes namespace details for the provided namespace within the given environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace
 * returns portainer.K8sNamespaceInfo
 **/
exports.getKubernetesNamespace = function(id,namespace) {
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
 * Get a list of kubernetes namespaces
 * Get a list of all kubernetes namespaces in the cluster **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * returns Map
 **/
exports.getKubernetesNamespaces = function(id) {
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
 * Get CPU and memory limits of all nodes within k8s cluster
 * Get CPU and memory limits of all nodes within k8s cluster **Access policy**: authenticated
 *
 * id Integer Environment(Endpoint) identifier
 * returns portainer.K8sNodesLimits
 **/
exports.getKubernetesNodesLimits = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": true};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of kubernetes services for a given namespace
 * Get a list of kubernetes services for a given namespace **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * lookupapplications Boolean Lookup applications associated with each service (optional)
 * returns List
 **/
exports.getKubernetesServices = function(id,namespace,lookupapplications) {
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
 * Toggle the system state for a namespace
 * Toggle the system state for a namespace **Access policy**: administrator or environment(endpoint) admin
 *
 * id Integer Environment(Endpoint) identifier
 * namespace String Namespace name
 * body Kubernetes.namespacesToggleSystemPayload Update details
 * no response value expected for this operation
 **/
exports.kubernetesNamespacesToggleSystem = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update kubernetes ingress rule
 * Update kubernetes ingress rule for the provided environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * body Kubernetes.K8sIngressInfo Ingress details
 * returns String
 **/
exports.updateKubernetesIngress = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update (block/unblock) ingress controllers
 * Update (block/unblock) ingress controllers **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * body List Ingress controllers
 * returns String
 **/
exports.updateKubernetesIngressControllers = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update (block/unblock) ingress controllers by namespace
 * Update (block/unblock) ingress controllers by namespace for the provided environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * body List Ingress controllers
 * returns String
 **/
exports.updateKubernetesIngressControllersByNamespace = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a kubernetes namespace
 * Update a kubernetes namespace within the given environment **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace
 * body Kubernetes.K8sNamespaceDetails Namespace details
 * returns String
 **/
exports.updateKubernetesNamespace = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": true,
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a kubernetes service
 * Update a kubernetes service within a given namespace **Access policy**: authenticated
 *
 * id Integer Environment (Endpoint) identifier
 * namespace String Namespace name
 * body Kubernetes.K8sServiceInfo Service definition
 * no response value expected for this operation
 **/
exports.updateKubernetesService = function(id,namespace,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

