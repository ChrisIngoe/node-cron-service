'use strict';

exports.index = function (req, res) {
  return res.status(404).send(`URL Not Found: ${req.url}`);
};
