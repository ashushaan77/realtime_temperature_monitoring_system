const mongoose = require("mongoose");
const Reading = require("../models/Reading");
const { processReadingService } = require("./process_reading");

const socketService = (io) => {
  setInterval(async () => {
    const temperature = Math.floor(Math.random() * 16) + 15;

    const rowReading = new Reading({
      id: new mongoose.Types.ObjectId(),
      temperature: temperature,
      timestamp: Date.now(),
    });

    // Save the raw reading to the database

    await rowReading.save();

    // Emit the raw reading to the client
    io.emit("temperature_reading", rowReading);

    // Process the reading
    const processData = await processReadingService(rowReading);

    if (processData && processData.success) {
      const processedReading = processData.reading;

      // Emit the processed reading to the client
      io.emit("processed_reading", {
        id: rowReading.id,
        temperature: rowReading.temperature,
        timestamp: Date.parse(rowReading.timestamp),
        status: processedReading.status,
        processedAt: processedReading.processedAt,
      });
    } else {
      console.log(processData.error);
    }
  }, 2000);
};

module.exports = socketService;
