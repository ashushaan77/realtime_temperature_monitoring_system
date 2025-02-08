import PropTypes from "prop-types";

export default function ReadingCard(props) {
  const { reading } = props;
  const timeSinceLastUpdate =
    (Date.now() - (reading.processedAt || reading.timestamp)) / 1000;

   // console.log(reading);

  return (
    <div className="p-3 bg-gray-50 rounded">
      <div className="flex flex-row items-center justify-between">
        <div className="py-2 text-left">
          <div className="text-gray-800 text-md font-semibold">
            {reading.temperature}
            {"\u00b0"}C
          </div>
          <div className="text-center text-gray-400 text-sm font-normal">
            {timeSinceLastUpdate > 1
              ? Math.ceil(timeSinceLastUpdate) + " seconds ago"
              : "1 second ago"}
          </div>
        </div>
        <div
          className={`text-center text-xs font-normal px-3 py-2 rounded-full ${
            reading.status === "NORMAL"
              ? "bg-green-100 text-green-900"
              : reading.status === "HIGH"
              ? "bg-yellow-100 text-red-900"
              : ""
          }`}
        >
          <p>{reading.status}</p>
        </div>
      </div>
    </div>
  );
}

ReadingCard.propTypes = {
  reading: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    status: PropTypes.string,
    processedAt: PropTypes.number,
  }).isRequired,
};
