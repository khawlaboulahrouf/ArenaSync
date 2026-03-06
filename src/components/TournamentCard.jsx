export function TournamentCard(tournament) {
  const card = document.createElement("div");
  card.className = "col-md-4";

  card.innerHTML = `
    <div class="card p-3 mb-3">
      <h5>${tournament.name}</h5>
      ${StatusBadge(tournament.status)}
      <div class="tabs">
        <button class="tab-btn active" data-tab="info">Info</button>
        <button class="tab-btn" data-tab="participants">Participants</button>
      </div>
      <div class="tab-content">
        <p>${tournament.description}</p>
      </div>
    </div>
  `;

  // Tab logic (Info / Participants)
  const buttons = card.querySelectorAll(".tab-btn");
  const content = card.querySelector(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tab = btn.dataset.tab;
      if(tab === "info"){
        content.innerHTML = `<p>${tournament.description}</p>`;
      }
      if(tab === "participants"){
        content.innerHTML = "";
        tournament.participants.forEach(p => {
          content.appendChild(ParticipantRow(p));
        });
      }
    });
  });

  return card;
}