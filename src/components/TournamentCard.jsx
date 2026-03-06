import { StatusBadge } from "./StatusBadge.jsx";
export function TournamentCard(tournament){
    return`
    <div class = "col-md mb-4">
     <div class="card shadow-sm h-100">

      <div class="card-body">

        <h5 class="card-title">${tournament.title}</h5>

        <p class="text-muted">${tournament.sport}</p>

        <p>${tournament.date}</p>

        <p>${tournament.location}</p>

        ${StatusBadge(tournament.status)}

      </div>

    </div>

  </div>
    `;
}