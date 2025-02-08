import { useSelector } from "react-redux";

export default function StatusBar() {
  const { connectionStatus } = useSelector((state) => state.readings);

  return (
    <div className="w-full flex flex-row justify-between items-center p-2">
      <div className="text-xl font-bold">Temperature Monitor</div>
      <div className="flex flex-row items-center">
        <div
          className={`block mx-2 rounded-full ${
            connectionStatus === "Connected" ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: "10px", height: "10px" }}
        ></div>
        <p className="text-md">{connectionStatus}</p>
      </div>
    </div>
  );
}
