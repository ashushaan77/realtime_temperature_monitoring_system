import { useSelector } from "react-redux";

export default function MonitorDisplay() {
  const { currentReading } = useSelector((state) => state.readings);

  // Calculate the time since the last update
  const timeSinceLastUpdate =
    (Date.now() - (currentReading.processedAt || currentReading.timestamp)) /
    1000;

  return (
    <div className="w-full bg-white shadow-md rounded-md">
      <div className="p-5">
        <div className="text-center text-md text-gray-400 font-normal">
          Current Temperature
        </div>
        <div className="py-2 text-center text-4xl font-bold">
          {currentReading.temperature || 0}
          {"\u00b0"}C
        </div>
        <div
          className="flex flex-row items-center justify-center"
          style={{ height: "30px" }}
        >
          <div
            className={`text-center text-md font-semibold ${
              currentReading.status === "NORMAL"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {currentReading.status}
          </div>
          <div
            className="bg-gray-700 rounded-full mx-1"
            style={{ width: "4px", height: "4px" }}
          ></div>
          <div className={`text-sm text-gray-700 font-normal text-center`}>
            Last Updated:{" "}
            {timeSinceLastUpdate > 1
              ? Math.ceil(timeSinceLastUpdate) + " seconds ago"
              : "1 second ago"}
          </div>
        </div>
      </div>
    </div>
  );
}
