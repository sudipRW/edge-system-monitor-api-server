'use strict';


/**
 * preview the content of target file in the git repository
 * Retrieve the compose file content based on git repository configuration **Access policy**: authenticated
 *
 * body Gitops.repositoryFilePreviewPayload Template details
 * returns gitops.fileResponse
 **/
exports.gitOperationRepoFilePreview = function(body) {
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

