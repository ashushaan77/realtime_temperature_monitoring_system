import { useSelector } from "react-redux";
import ReadingCard from "./ReadingCard";

function RecentReadingsList() {
  const { recentReadings } = useSelector((state) => state.readings);

  return (
    <div className="w-full bg-white shadow-md rounded-md mt-5">
      <div className="px-4 py-3 border-b border-gray-200">
        <p className="font-semibold text-lg">Recent Readings</p>
      </div>
      <div className="p-4 py-3 flex flex-col gap-3">
        {recentReadings.map((reading) => (
          <ReadingCard key={reading.id} reading={reading} />
        ))}
      </div>
    </div>
  );
}

export default RecentReadingsList;
