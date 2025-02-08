const { mongoose } = require("../mongodb/db");

const ReadingSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  temperature: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: String,
  processedAt: Date,
});

const Reading = mongoose.model("Reading", ReadingSchema);

module.exports = Reading;
