require("dotenv").config();
const { processReadingService } = require("../src/services/process_reading");

test("Processing logic", async () => {
  const reading = {
    id: "60f7e9b3d6f9b5d1e8e7a1f9",
    temperature: 25,
    timestamp: "2021-07-21T12:00:00Z",
  };

  const processedReading = await processReadingService(reading);
  expect(processedReading.success).toBe(true);
  expect(processedReading.reading.id).toBe(reading.id);
  expect(processedReading.reading.status).toBe("NORMAL");
  expect(processedReading.reading.processedAt).toBeDefined();
});
