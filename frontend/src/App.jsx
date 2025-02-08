import { useEffect } from "react";
import MonitorDisplay from "./components/MonitorDisplay";
import RecentReadingsList from "./components/RecentReadingsList";
import { useDispatch } from "react-redux";
import socketService from "./services/socketService";
import StatusBar from "./components/StatusBar";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socketService(dispatch);
  }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="px-4 py-2 w-full">
        <StatusBar />
        <MonitorDisplay />
        <RecentReadingsList />
      </div>
    </div>
  );
}
