'use strict';

var utils = require('../utils/writer.js');
var CustomTemplates = require('../service/CustomTemplatesService');

module.exports.customTemplateCreate = function customTemplateCreate (req, res, next) {
  var method = req.swagger.params['method'].value;
  var body = req.swagger.params['body'].value;
  CustomTemplates.customTemplateCreate(method,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateCreateFile = function customTemplateCreateFile (req, res, next) {
  var title = req.swagger.params['Title'].value;
  var description = req.swagger.params['Description'].value;
  var note = req.swagger.params['Note'].value;
  var platform = req.swagger.params['Platform'].value;
  var type = req.swagger.params['Type'].value;
  var file = req.swagger.params['File'].value;
  var logo = req.swagger.params['Logo'].value;
  var variables = req.swagger.params['Variables'].value;
  CustomTemplates.customTemplateCreateFile(title,description,note,platform,type,file,logo,variables)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateCreateRepository = function customTemplateCreateRepository (req, res, next) {
  var body = req.swagger.params['body'].value;
  CustomTemplates.customTemplateCreateRepository(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateCreateString = function customTemplateCreateString (req, res, next) {
  var body = req.swagger.params['body'].value;
  CustomTemplates.customTemplateCreateString(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateDelete = function customTemplateDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  CustomTemplates.customTemplateDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateFile = function customTemplateFile (req, res, next) {
  var id = req.swagger.params['id'].value;
  CustomTemplates.customTemplateFile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateGitFetch = function customTemplateGitFetch (req, res, next) {
  var id = req.swagger.params['id'].value;
  CustomTemplates.customTemplateGitFetch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateInspect = function customTemplateInspect (req, res, next) {
  var id = req.swagger.params['id'].value;
  CustomTemplates.customTemplateInspect(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateList = function customTemplateList (req, res, next) {
  var type = req.swagger.params['type'].value;
  var edge = req.swagger.params['edge'].value;
  CustomTemplates.customTemplateList(type,edge)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customTemplateUpdate = function customTemplateUpdate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  CustomTemplates.customTemplateUpdate(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
