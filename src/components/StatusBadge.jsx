function StatusBadge({ status }) {

  let color = "";

  if (status === "On Going") color = "bg-green-500";
  else if (status === "Upcoming") color = "bg-blue-500";
  else if (status === "Pending") color = "bg-orange-500";
  else if (status === "Confirmed") color = "bg-green-600";

  return (
    <span className={`text-white px-3 py-1 rounded-lg text-sm ${color}`}>
      {status}
    </span>
  );
}
export default StatusBadge;