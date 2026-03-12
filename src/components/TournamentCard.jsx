//src/components/TournamentsCard


import StatusBadge from "./StatusBadge";

function TournamentCard({ tournament }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
<div className="flex gap-2 items-center ">

      <div className="w-12 h-12 bg-gray-100 rounded-2xl">
        <img className="w-full h-full object-cover" src={tournament.sportimage} alt="" />
      </div>
      <div>

      <h2 className="text-lg font-bold mb-2">
        {tournament.title}
      </h2>
      <StatusBadge status={tournament.status} />
      </div>
</div>



      <p className="text-gray-500 mb-3">{tournament.description}</p>
      <hr className="border-gray-300 mb-2" />

      <div className="flex items-center gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 640"><path fill="black" d="M96 192c0-61.9 50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112S96 253.9 96 192M32 528c0-97.2 78.8-176 176-176s176 78.8 176 176v6c0 23.2-18.8 42-42 42H74c-23.2 0-42-18.8-42-42zm432-400c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96s43-96 96-96m0 240c79.5 0 144 64.5 144 144v22.4c0 23-18.6 41.6-41.6 41.6H421.6c6.6-12.5 10.4-26.8 10.4-42v-6c0-51.5-17.4-98.9-46.5-136.7c22.6-14.7 49.6-23.3 78.5-23.3"/></svg>
        <p>{tournament.participantsCount}</p>
        <div class="flex w-3 h-4 mt-2  justify-center pt-1">
  <div class="bg-black w-1 h-1 rounded-full"></div>
</div>
<p>{tournament.type}</p>

    
      </div>
    <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.014 4.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.121.218l.057.1l.099.023l.238.054c.327.074.653.147.903.246c.276.109.65.32.795.785c.142.455-.037.841-.193 1.09c-.145.23-.365.486-.59.749l-.16.188l-.082.097c.002.036.007.078.012.135l.024.25c.034.351.067.691.055.963c-.012.286-.08.718-.468 1.011c-.4.304-.84.238-1.12.157c-.258-.073-.563-.214-.87-.355l-.222-.103l-.085-.039l-.085.04l-.223.102c-.306.141-.611.282-.869.355c-.28.08-.72.147-1.12-.157c-.387-.293-.456-.725-.468-1.01c-.012-.273.02-.613.055-.965l.024-.25l.013-.134l-.083-.097l-.16-.188c-.225-.263-.445-.52-.59-.75c-.156-.248-.335-.634-.193-1.09c.144-.463.519-.675.795-.784c.25-.099.576-.172.903-.246l.238-.054l.1-.023l.056-.1l.121-.218c.17-.305.335-.602.5-.816M12 6.034q-.086.15-.199.354l-.098.176l-.023.04c-.078.144-.208.382-.425.547c-.221.168-.488.226-.643.26l-.044.009l-.19.043c-.176.04-.319.072-.44.103c.079.097.182.219.316.376l.13.152l.03.034c.108.125.282.325.363.585c.08.256.052.52.035.686l-.005.047l-.02.203a25 25 0 0 0-.042.46c.105-.046.223-.1.364-.165l.179-.082l.04-.02c.144-.067.393-.185.672-.185s.528.118.672.186l.04.019l.179.082q.209.097.364.165a25 25 0 0 0-.042-.46l-.02-.203l-.005-.047c-.017-.167-.045-.43.035-.686c.08-.26.255-.46.363-.585l.03-.034l.13-.152c.134-.157.237-.279.316-.376c-.121-.03-.264-.063-.44-.103l-.19-.043l-.044-.01c-.155-.033-.422-.091-.643-.26c-.217-.164-.347-.402-.425-.545l-.023-.041l-.098-.176q-.112-.204-.199-.354m-1.26 4.478l-.001-.004zm2.52 0l.001-.004z"/><path d="M7.498 1.607A27 27 0 0 1 12 1.25c1.828 0 3.339.161 4.502.357l.135.023c1.01.169 1.85.31 2.506 1.118c.421.519.557 1.08.588 1.705l.492.164c.463.154.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.27v.144c0 .402 0 .757-.03 1.054c-.032.321-.103.634-.28.936c-.179.303-.418.517-.683.701c-.245.17-.555.343-.907.538l-2.64 1.467c-.54 1.061-1.28 2.007-2.3 2.69c-.875.587-1.922.959-3.16 1.065v2.031h1.43a1.75 1.75 0 0 1 1.716 1.407l.219 1.093H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1.885l.219-1.093A1.75 1.75 0 0 1 9.82 18.75h1.43v-2.031c-1.238-.106-2.285-.478-3.16-1.064c-1.019-.684-1.76-1.63-2.3-2.691l-2.64-1.467a11 11 0 0 1-.907-.538a2.2 2.2 0 0 1-.682-.7a2.2 2.2 0 0 1-.281-.937c-.03-.297-.03-.652-.03-1.054v-.145c0-.488 0-.916.04-1.269c.044-.381.14-.75.385-1.088c.244-.339.563-.547.91-.71c.323-.15.729-.285 1.192-.439l.492-.164c.031-.626.167-1.186.588-1.705c.657-.809 1.496-.95 2.507-1.118zM9.415 21.25h5.17l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201zM4.302 6.023l-.014.005c-.51.17-.834.28-1.07.389c-.217.1-.287.171-.326.226s-.084.143-.111.381c-.03.258-.031.6-.031 1.138v.073c0 .445 0 .724.022.938c.02.196.052.275.082.325c.029.05.082.116.244.229c.176.122.42.258.81.475l1.065.592c-.428-1.57-.6-3.25-.67-4.77m14.725 4.77c.428-1.57.6-3.25.671-4.77l.014.005c.51.17.834.28 1.07.389c.217.1.287.171.326.226s.084.143.111.381c.03.258.031.6.031 1.138v.073c0 .445 0 .724-.022.938c-.02.196-.052.275-.082.325c-.029.05-.082.116-.244.229c-.177.122-.42.258-.81.475zM12 2.75c-1.74 0-3.167.153-4.252.336c-1.207.204-1.46.28-1.726.608c-.262.322-.287.628-.234 1.983c.09 2.258.388 4.696 1.31 6.55c.456.914 1.052 1.662 1.828 2.182c.77.517 1.765.841 3.074.841c1.31 0 2.304-.324 3.075-.841c.776-.52 1.371-1.268 1.826-2.183c.923-1.853 1.221-4.29 1.31-6.55c.055-1.354.03-1.66-.232-1.982c-.266-.328-.52-.404-1.727-.608A25.6 25.6 0 0 0 12 2.75"/></g></svg>
        <p>{tournament.format}</p>
    </div>

    <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M21 10.5v-5H3v5zm-18 11h18v-11H3z"/><path stroke="#000" stroke-linecap="square" stroke-width="2" d="M7 18h8m-8-4h4m10-3.5v11H3v-11m18 0H3m18 0v-5H3v5m4-5v-3m10 3v-3"/></g></svg>
        <p>{tournament.date}</p>
    </div>
    <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/><path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z"/></g></svg>
        <p>{tournament.location}</p>
    </div>
    </div>
  );
}

export default TournamentCard;

























// src/components/TournamentCard.js
// import { StatusBadge } from './StatusBadge.jsx';
// import { ParticipantRow } from './ParticipantRow.jsx';

// export function TournamentCard(tournament, isDetailed = false) {
//     const card = document.createElement('div');
//     card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';
//     card.setAttribute('tabindex', '0');
//     card.setAttribute('role', 'article');
//     card.setAttribute('aria-label', `Tournoi: ${tournament.name}`);
    
//     // Image du tournoi
//     const img = document.createElement('img');
//     img.src = tournament.image;
//     img.alt = `Image du tournoi ${tournament.name}`;
//     img.className = 'w-full h-48 object-cover';
    
//     // Contenu de la carte
//     const content = document.createElement('div');
//     content.className = 'p-5';
    
//     // En-tête avec nom et badge
//     const header = document.createElement('div');
//     header.className = 'flex justify-between items-start mb-3';
    
//     const name = document.createElement('h3');
//     name.className = 'text-xl font-bold text-gray-900';
//     name.textContent = tournament.name;
    
//     const badge = StatusBadge(tournament.status);
    
//     header.appendChild(name);
//     header.appendChild(badge);
    
//     // Informations supplémentaires
//     const info = document.createElement('div');
//     info.className = 'text-gray-600 space-y-1 mb-4';
//     info.innerHTML = `
//         <p><i class="fas fa-calendar mr-2"></i>${new Date(tournament.date).toLocaleDateString('fr-FR')}</p>
//         <p><i class="fas fa-map-marker-alt mr-2"></i>${tournament.location}</p>
//         <p><i class="fas fa-tag mr-2"></i>${tournament.sport}</p>
//     `;
    
//     content.appendChild(header);
//     content.appendChild(info);
    
//     // Vue détaillée avec onglets
//     if (isDetailed) {
//         const tabsContainer = document.createElement('div');
//         tabsContainer.className = 'mt-4';
        
//         // Barre d'onglets
//         const tabs = document.createElement('div');
//         tabs.className = 'flex border-b border-gray-200 mb-4';
        
//         const infoTab = document.createElement('button');
//         infoTab.className = 'px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600';
//         infoTab.textContent = 'Info';
        
//         const participantsTab = document.createElement('button');
//         participantsTab.className = 'px-4 py-2 font-medium text-gray-500 hover:text-gray-700';
//         participantsTab.textContent = 'Participants';
        
//         tabs.appendChild(infoTab);
//         tabs.appendChild(participantsTab);
        
//         // Zone de contenu des onglets
//         const tabContent = document.createElement('div');
//         tabContent.className = 'min-h-[200px]';
        
//         // Fonction pour afficher le contenu de l'onglet Info
//         const showInfo = () => {
//             infoTab.className = 'px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600';
//             participantsTab.className = 'px-4 py-2 font-medium text-gray-500 hover:text-gray-700';
            
//             tabContent.innerHTML = `
//                 <div class="space-y-2">
//                     <p><strong>Sport:</strong> ${tournament.sport}</p>
//                     <p><strong>Date:</strong> ${new Date(tournament.date).toLocaleDateString('fr-FR')}</p>
//                     <p><strong>Lieu:</strong> ${tournament.location}</p>
//                     <p><strong>Participants:</strong> ${tournament.participants.length}</p>
//                 </div>
//             `;
//         };
        
//         // Fonction pour afficher le contenu de l'onglet Participants
//         const showParticipants = () => {
//             infoTab.className = 'px-4 py-2 font-medium text-gray-500 hover:text-gray-700';
//             participantsTab.className = 'px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600';
            
//             tabContent.innerHTML = '';
//             tournament.participants.forEach(participant => {
//                 tabContent.appendChild(ParticipantRow(participant));
//             });
//         };
        
//         // Écouteurs d'événements
//         infoTab.addEventListener('click', showInfo);
//         participantsTab.addEventListener('click', showParticipants);
        
//         // Afficher l'onglet Info par défaut
//         setTimeout(showInfo, 0);
        
//         tabsContainer.appendChild(tabs);
//         tabsContainer.appendChild(tabContent);
//         content.appendChild(tabsContainer);
//     } else {
//         // Version simplifiée pour la grille
//         const participantsPreview = document.createElement('div');
//         participantsPreview.className = 'mt-3 pt-3 border-t border-gray-100';
//         participantsPreview.innerHTML = `<p class="text-sm text-gray-500"><i class="fas fa-users mr-2"></i>${tournament.participants.length} participants</p>`;
//         content.appendChild(participantsPreview);
//     }
    
//     card.appendChild(img);
//     card.appendChild(content);
    
//     return card;
// }