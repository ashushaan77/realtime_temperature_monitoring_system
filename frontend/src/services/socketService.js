import io from "socket.io-client";
import {
  setConnectionStatus,
  setReading,
  setUpdateProcessedReading,
} from "../redux/readingSlice";

const socketService = (dispatch) => {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => dispatch(setConnectionStatus("Connected")));
  socket.on("disconnect", () => dispatch(setConnectionStatus("Disconnected")));

  socket.on("temperature_reading", (reading) => {
    console.log("temperature_reading", reading);
    dispatch(setReading(reading));
  });

  socket.on("processed_reading", (reading) => {
     console.log("processed_reading", JSON.stringify(reading));
    dispatch(setUpdateProcessedReading(reading));
  });
};

export default socketService;
