const multer = require('multer');
const { HttpException } = require('../errors/httpError');

function optionalFile(fileName) {
  return multer().single(fileName);
}

function requireFile(fileName) {
  return (req, _, next) => {
    if (!req.file || req.file.fieldname !== fileName) {
      next(
        new HttpException(409, `Required file '${fileName}' does not exist`)
      );
    } else {
      next();
    }
  };
}

function requiredFile(fileName) {
  return [multer().single(fileName), requireFile(fileName)];
}

module.exports = {
  optionalFile,
  requiredFile,
};
