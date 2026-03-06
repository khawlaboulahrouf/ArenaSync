import { StatusBadge } from "./StatusBadge.jsx";

export function ParticipantRow(participant){
  const row = document.createElement("div");
  row.className = "participant-row d-flex align-items-center gap-2 mb-2";

  row.innerHTML = `
    <img src="${participant.avatar}" />
    <span>${participant.name}</span>
    ${StatusBadge(participant.status)}
  `;

  return row;
}