// src/components/TournamentCard.js
import { StatusBadge } from './StatusBadge.jsx';
import { ParticipantRow } from './ParticipantRow.jsx';

export function TournamentCard(tournament, isDetailed = false) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Tournoi: ${tournament.name}`);
    
    // Image du tournoi
    const img = document.createElement('img');
    img.src = tournament.image;
    img.alt = `Image du tournoi ${tournament.name}`;
    img.className = 'w-full h-48 object-cover';
    
    // Contenu de la carte
    const content = document.createElement('div');
    content.className = 'p-5';
    
    // En-tête avec nom et badge
    const header = document.createElement('div');
    header.className = 'flex justify-between items-start mb-3';
    
    const name = document.createElement('h3');
    name.className = 'text-xl font-bold text-gray-900';
    name.textContent = tournament.name;
    
    const badge = StatusBadge(tournament.status);
    
    header.appendChild(name);
    header.appendChild(badge);
    
    // Informations supplémentaires
    const info = document.createElement('div');
    info.className = 'text-gray-600 space-y-1 mb-4';
    info.innerHTML = `
        <p><i class="fas fa-calendar mr-2"></i>${new Date(tournament.date).toLocaleDateString('fr-FR')}</p>
        <p><i class="fas fa-map-marker-alt mr-2"></i>${tournament.location}</p>
        <p><i class="fas fa-tag mr-2"></i>${tournament.sport}</p>
    `;
    
    content.appendChild(header);
    content.appendChild(info);
    
    // Vue détaillée avec onglets
    if (isDetailed) {
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'mt-4';
        
        // Barre d'onglets
        const tabs = document.createElement('div');
        tabs.className = 'flex border-b border-gray-200 mb-4';
        
        const infoTab = document.createElement('button');
        infoTab.className = 'px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600';
        infoTab.textContent = 'Info';
        
        const participantsTab = document.createElement('button');
        participantsTab.className = 'px-4 py-2 font-medium text-gray-500 hover:text-gray-700';
        participantsTab.textContent = 'Participants';
        
        tabs.appendChild(infoTab);
        tabs.appendChild(participantsTab);
        
        // Zone de contenu des onglets
        const tabContent = document.createElement('div');
        tabContent.className = 'min-h-[200px]';
        
        // Fonction pour afficher le contenu de l'onglet Info
        const showInfo = () => {
            infoTab.className = 'px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600';
            participantsTab.className = 'px-4 py-2 font-medium text-gray-500 hover:text-gray-700';
            
            tabContent.innerHTML = `
                <div class="space-y-2">
                    <p><strong>Sport:</strong> ${tournament.sport}</p>
                    <p><strong>Date:</strong> ${new Date(tournament.date).toLocaleDateString('fr-FR')}</p>
                    <p><strong>Lieu:</strong> ${tournament.location}</p>
                    <p><strong>Participants:</strong> ${tournament.participants.length}</p>
                </div>
            `;
        };
        
        // Fonction pour afficher le contenu de l'onglet Participants
        const showParticipants = () => {
            infoTab.className = 'px-4 py-2 font-medium text-gray-500 hover:text-gray-700';
            participantsTab.className = 'px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600';
            
            tabContent.innerHTML = '';
            tournament.participants.forEach(participant => {
                tabContent.appendChild(ParticipantRow(participant));
            });
        };
        
        // Écouteurs d'événements
        infoTab.addEventListener('click', showInfo);
        participantsTab.addEventListener('click', showParticipants);
        
        // Afficher l'onglet Info par défaut
        setTimeout(showInfo, 0);
        
        tabsContainer.appendChild(tabs);
        tabsContainer.appendChild(tabContent);
        content.appendChild(tabsContainer);
    } else {
        // Version simplifiée pour la grille
        const participantsPreview = document.createElement('div');
        participantsPreview.className = 'mt-3 pt-3 border-t border-gray-100';
        participantsPreview.innerHTML = `<p class="text-sm text-gray-500"><i class="fas fa-users mr-2"></i>${tournament.participants.length} participants</p>`;
        content.appendChild(participantsPreview);
    }
    
    card.appendChild(img);
    card.appendChild(content);
    
    return card;
}