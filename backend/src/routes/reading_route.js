const express = require("express");
const healthCheckController = require("../controller/health_check_controller");
const processReadingController = require("../controller/process_reading_controller");

const router = express.Router();

router.get("/health", healthCheckController);

router.post("/readings/process", processReadingController);

module.exports = router;
