const healthCheckController = (req, res) => {
  
  res.json({
    status: "ok",
    timestamp: Date.now(),
  });
};

module.exports = healthCheckController;
