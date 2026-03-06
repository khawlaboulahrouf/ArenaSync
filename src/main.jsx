import { tournaments } from "./data/tournamentDB.js";
import { StatusBadge } from "./components/StatusBadge.jsx";

console.log(tournaments);

console.log(StatusBadge("On Going"));
console.log(StatusBadge("Upcoming"));
console.log(StatusBadge("Pending"));