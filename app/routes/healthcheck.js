'use strict';

exports.index = function (req, res) {
  return res.status(200).json({ service: 'OK', dependencies: 'N/A' });
};
