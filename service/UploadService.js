'use strict';


/**
 * Upload TLS files
 * Use this environment(endpoint) to upload TLS files. **Access policy**: administrator
 *
 * certificate String TLS file type. Valid values are 'ca', 'cert' or 'key'.
 * folder String Folder where the TLS file will be stored. Will be created if not existing
 * file File The file to upload
 * no response value expected for this operation
 **/
exports.uploadTLS = function(certificate,folder,file) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

