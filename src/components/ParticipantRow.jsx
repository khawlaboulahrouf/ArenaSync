// // src/components/ParticipantRow.js
// import { StatusBadge } from './StatusBadge.jsx';

// export function ParticipantRow(participant) {
//     const row = document.createElement('div');
//     row.className = 'flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow';
    
//     // Avatar rond
//     const avatar = document.createElement('img');
//     avatar.src = participant.avatar;
//     avatar.alt = `Photo de ${participant.name}`;
//     avatar.className = 'w-12 h-12 rounded-full object-cover border-2 border-gray-200';
    
//     // Conteneur pour le nom et le badge
//     const infoContainer = document.createElement('div');
//     infoContainer.className = 'flex-1 flex items-center justify-between';
    
//     const name = document.createElement('span');
//     name.className = 'font-medium text-gray-800';
//     name.textContent = participant.name;
    
//     // Ajout du badge
//     const badge = StatusBadge(participant.status);
    
//     infoContainer.appendChild(name);
//     infoContainer.appendChild(badge);
    
//     row.appendChild(avatar);
//     row.appendChild(infoContainer);
    
//     return row;
// }