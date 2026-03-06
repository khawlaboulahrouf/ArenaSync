export function StatusBadge(status) {

  let colorClass = "";

  if (status === "On Going") {
    colorClass = "bg-success";
  } 
  else if (status === "Upcoming") {
    colorClass = "bg-primary";
  } 
  else if (status === "Pending") {
    colorClass = "bg-warning";
  }

  return `
    <span class="badge ${colorClass} p-2 rounded-pill">
      ${status}
    </span>
  `;
}