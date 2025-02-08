const Reading = require("../models/Reading");
const axios = require("axios");

exports.processReadingService = async (rowReading) => {
  if (
    rowReading === undefined ||
    rowReading.id === undefined ||
    rowReading.temperature === undefined ||
    rowReading.timestamp === undefined
  ) {
    return {
      success: false,
      error: "Bad request",
    };
  } else {
    let processedReading = {};
    try {
      //Send the reading to the n8n webhook to process the reading

      const webhook_payload = await axios.post(
        "http://localhost:5678/webhook/readings/process",
        rowReading,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (webhook_payload.status === 200) {
        processedReading = webhook_payload.data;
      } else {
        //Process internally if the webhook fails

        processedReading = {
          id: rowReading.id,
          status: rowReading.temperature > 25 ? "HIGH" : "NORMAL",
          processedAt: Date.now(),
        };
      }

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
      //Process internally if the webhook is not available

      if (
        e.code == "ECONNREFUSED" ||
        e.code == "ENOTFOUND" ||
        e.code == "ECONNRESET"
      ) {
        const processedReading = {
          id: rowReading.id,
          status: rowReading.temperature > 25 ? "HIGH" : "NORMAL",
          processedAt: Date.now(),
        };

        await Reading.updateOne(
          { id: processedReading.id },
          processedReading
        ).lean();

        return {
          success: true,
          reading: processedReading,
        };
      } else {
        return {
          success: false,
          reading: rowReading,
          error: e.code,
        };
      }
    }
  }
};
