const { processReadingService } = require("../services/process_reading");

const processReadingController = async (req, res, next) => {
  try {
    const reading = req.body;

    const processedReading = await processReadingService(reading);

    res.status(200).json(processedReading);
  } catch (e) {
    next(e);
  }
};

module.exports = processReadingController;
