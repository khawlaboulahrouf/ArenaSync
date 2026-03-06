import { StatusBadge } from "./StatusBadge.jsx";

export function ParticipantRow(participant) {

  return `
  
  <div class="d-flex align-items-center gap-3 mb-2">
  
    <img 
      src="${participant.avatar}" 
      width="40" 
      height="40"
      class="rounded-circle"
    >

    <div class="d-flex align-items-center gap-2">
      <span>${participant.name}</span>
      ${StatusBadge(participant.status)}
    </div>

  </div>

  `;
}