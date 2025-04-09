// authmiddleware.js
module.exports = (req, res, next) => {
  next();  // Allow the request to pass through without authentication
};
