'use strict';


/**
 * Creates an archive with a system data snapshot that could be used to restore the system.
 * Creates an archive with a system data snapshot that could be used to restore the system. **Access policy**: admin
 *
 * body Backup.backupPayload An object contains the password to encrypt the backup with (optional)
 * no response value expected for this operation
 **/
exports.backup = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Triggers a system restore using provided backup file
 * Triggers a system restore using provided backup file **Access policy**: public
 *
 * restorePayload Backup.restorePayload Restore request payload
 * no response value expected for this operation
 **/
exports.restore = function(restorePayload) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

