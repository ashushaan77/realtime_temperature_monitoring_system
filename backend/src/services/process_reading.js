const Reading = require("../models/Reading");

exports.processReadingService = async (reading) => {
  if (
    reading === undefined ||
    reading.id === undefined ||
    reading.temperature === undefined ||
    reading.timestamp === undefined
  ) {
    return {
      success: false,
      error: "Bad request",
    };
  } else {
    try {
      const processedReading = {
        id: reading.id,
        status: reading.temperature > 25 ? "HIGH" : "NORMAL",
        processedAt: Date.now(),
      };

      //Update the reading with the processed data
      await Reading.updateOne(
        { id: processedReading.id },
        processedReading
      ).lean();

      return {
        success: true,
        reading: processedReading,
      };
    } catch (e) {
      console.log(e);

      throw new Error(e);
    }
  }
};
