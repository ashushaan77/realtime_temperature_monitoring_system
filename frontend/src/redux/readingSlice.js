import { createSlice } from "@reduxjs/toolkit";

const readingSlice = createSlice({
  name: "reading",
  initialState: {
    currentReading: {},
    recentReadings: [],
    connectionStatus: "Disconnected",
  },

  reducers: {
    setReading: (state, action) => {
      state.currentReading = action.payload;
      const updated_list = [action.payload, ...state.recentReadings].slice(
        0,
        5
      );

      state.recentReadings = updated_list;
    },
    setUpdateProcessedReading: (state, action) => {
      const index = state.recentReadings.findIndex(
        (reading) => reading.id === action.payload.id
      );

      console.log("payload: ", JSON.stringify(action.payload.id));

      state.currentReading.status =
        state.currentReading.id == action.payload.id
          ? action.payload.status
          : null;
      state.currentReading.processedAt =
        state.currentReading.id == action.payload.id
          ? action.payload.processedAt
          : null;

          console.log("Index: ", index);
          console.log("currentReading: ", JSON.stringify(state.currentReading));


      if (index !== -1) {
        state.recentReadings[index].status = action.payload.status;
        state.recentReadings[index].processedAt = action.payload.processedAt;
      }
    },
    setConnectionStatus: (state, action) => {
      state.connectionStatus = action.payload;
    },
  },
});

export const { setReading, setUpdateProcessedReading, setConnectionStatus } =
  readingSlice.actions;

export default readingSlice.reducer;
