const mongoose = require("mongoose");

async function connect_db() {
  const uri = process.env.MONGO_URI;
  await mongoose.connect(uri);

  mongoose.connection.on("connection", (stream) => {
    console.log("Successfully connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("error: " + err);
  });

  return mongoose;
}

connect_db();

module.exports = { mongoose };
