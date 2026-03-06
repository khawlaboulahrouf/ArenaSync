import { tournaments } from "./data/tournamentDB.js";
import { TournamentCard } from "./components/TournamentCard.jsx";
import { filterTournaments } from "./services/DataFilter.js";

const app = document.getElementById("app");

// Création des boutons de filtres dynamiques
const sports = ["All", ...new Set(tournaments.map(t => t.sport))];

const filterBar = document.createElement("div");
filterBar.className = "d-flex gap-2 mb-3";

sports.forEach(sport => {
  const btn = document.createElement("button");
  btn.className = "btn btn-outline-primary";
  btn.textContent = sport;

  btn.addEventListener("click", () => {
    renderTournaments(filterTournaments(tournaments, sport));
  });

  filterBar.appendChild(btn);
});

app.appendChild(filterBar);

//  Fonction de rendu
function renderTournaments(tournois){
  // vider les anciennes cards
  let container = document.getElementById("tournaments-container");
  if(!container){
    container = document.createElement("div");
    container.id = "tournaments-container";
    container.className = "row";
    app.appendChild(container);
  }
  container.innerHTML = "";

  if(tournois.length === 0){
    container.innerHTML = `<p>Aucun tournoi trouvé pour ce sport</p>`;
    return;
  }

  tournois.forEach(t => {
    const card = TournamentCard(t);
    container.appendChild(card);
  });
}

// render initial
renderTournaments(tournaments);