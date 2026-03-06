import { tournaments } from "./data/tournamentDB.js";
import { StatusBadge } from "./components/StatusBadge.jsx";
import { TournamentCard } from "./components/TournamentCard.jsx";
import { ParticipantRow } from "./components/ParticipantRow.jsx";

const app = document.getElementById("app");
const cards = tournaments.map(tournament => 
  TournamentCard(tournament)
).join("");

app.innerHTML = `

<div class="container mt-4">

  <div class="row">

    ${cards}

  </div>

</div>

`;

// const participant = {
//     name : "Ethan Miller",
//     status : "Pending",
//     avatar : "https://i.pravatar.cc/40?img=1"
// };
// app.innerHTML = ParticipantRow(participant);









console.log(tournaments);

console.log(StatusBadge("On Going"));
console.log(StatusBadge("Upcoming"));
console.log(StatusBadge("Pending"));