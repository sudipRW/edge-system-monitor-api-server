'use strict';


/**
 * Attach a websocket
 * If the nodeName query parameter is present, the request will be proxied to the underlying agent environment(endpoint). If the nodeName query parameter is not specified, the request will be upgraded to the websocket protocol and an AttachStart operation HTTP request will be created and hijacked. **Access policy**: authenticated
 *
 * endpointId Integer environment(endpoint) ID of the environment(endpoint) where the resource is located
 * token String JWT token used for authentication against this environment(endpoint)
 * nodeName String node name (optional)
 * no response value expected for this operation
 **/
exports.websocketAttachGET = function(endpointId,token,nodeName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Execute a websocket
 * If the nodeName query parameter is present, the request will be proxied to the underlying agent environment(endpoint). If the nodeName query parameter is not specified, the request will be upgraded to the websocket protocol and an ExecStart operation HTTP request will be created and hijacked.
 *
 * endpointId Integer environment(endpoint) ID of the environment(endpoint) where the resource is located
 * token String JWT token used for authentication against this environment(endpoint)
 * nodeName String node name (optional)
 * no response value expected for this operation
 **/
exports.websocketExecGET = function(endpointId,token,nodeName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Execute a websocket on kubectl shell pod
 * The request will be upgraded to the websocket protocol. The request will proxy input from the client to the pod via long-lived websocket connection. **Access policy**: authenticated
 *
 * endpointId Integer environment(endpoint) ID of the environment(endpoint) where the resource is located
 * token String JWT token used for authentication against this environment(endpoint)
 * no response value expected for this operation
 **/
exports.websocketKubernetes_shellGET = function(endpointId,token) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Execute a websocket on pod
 * The request will be upgraded to the websocket protocol. **Access policy**: authenticated
 *
 * endpointId Integer environment(endpoint) ID of the environment(endpoint) where the resource is located
 * namespace String namespace where the container is located
 * podName String name of the pod containing the container
 * containerName String name of the container
 * command String command to execute in the container
 * token String JWT token used for authentication against this environment(endpoint)
 * no response value expected for this operation
 **/
exports.websocketPodGET = function(endpointId,namespace,podName,containerName,command,token) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

