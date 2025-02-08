const error_handler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};

module.exports = error_handler;
