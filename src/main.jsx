import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);






























// src/main.js
// import { tournamentDB } from './data/tournamentDB.js';
// import { TournamentCard } from './components/TournamentCard.jsx';
// import { filterTournaments } from './services/DataFilter.js';


// // État global
// let currentFilter = 'All';
// let selectedTournamentId = null;

// // Loader
// const loader = document.createElement("div");
// loader.textContent = "Loading tournaments...";
// loader.className = "text-center text-gray-500 py-10";

// // Fonction pour obtenir les sports uniques
// function getUniqueSports() {
//     const sports = ['All', ...new Set(tournamentDB.map(t => t.sport))];
//     return sports;
// }

// // Fonction de rendu des filtres
// function renderFilters() {
//     const filtersContainer = document.createElement('div');
//     filtersContainer.className = 'mb-8';
    
//     const title = document.createElement('h2');
//     title.className = 'text-lg font-semibold text-gray-700 mb-3';
//     title.textContent = 'Filtrer par sport:';
    
//     const buttonsContainer = document.createElement('div');
//     buttonsContainer.className = 'flex flex-wrap gap-2';
    
//     const sports = getUniqueSports();
    
//     sports.forEach(sport => {
//         const button = document.createElement('button');
//         button.className = `px-4 py-2 rounded-full font-medium transition-colors ${
//             currentFilter === sport 
//                 ? 'bg-blue-600 text-white' 
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//         }`;
//         button.textContent = sport;
//         button.setAttribute('aria-pressed', currentFilter === sport);
        
//         button.addEventListener('click', () => {
//             currentFilter = sport;
//             renderApp();
//         });
        
//         buttonsContainer.appendChild(button);
//     });
    
//     filtersContainer.appendChild(title);
//     filtersContainer.appendChild(buttonsContainer);
    
//     return filtersContainer;
// }

// // Fonction de rendu des tournois
// function renderTournaments() {
//     const tournamentsGrid = document.createElement('div');
//     tournamentsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    
//     // Affichage du loader
//     tournamentsGrid.appendChild(loader);

//     // Filtrage des tournois
//     const filteredTournaments = filterTournaments(tournamentDB, currentFilter);
    
//     // Nettoyage loader
//     tournamentsGrid.innerHTML = '';

//     // Message si aucun tournoi
//     if (filteredTournaments.length === 0) {
//         const message = document.createElement('div');
//         message.className = 'col-span-full text-center py-12';
//         message.innerHTML = `
//             <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
//             <p class="text-xl text-gray-500">Aucun tournoi trouvé pour ce sport</p>
//         `;
//         tournamentsGrid.appendChild(message);
//         return tournamentsGrid;
//     }
    
//     // Rendu des cartes
//     filteredTournaments.forEach(tournament => {
//         const isDetailed = selectedTournamentId === tournament.id;
//         const card = TournamentCard(tournament, isDetailed);

//         // Lazy load pour images
//         const img = card.querySelector('img');
//         if(img) img.loading = "lazy";

//         tournamentsGrid.appendChild(card);
        
//         // Ajout de l'événement pour la vue détaillée
//         if (!isDetailed) {
//             card.addEventListener('click', () => {
//                 selectedTournamentId = selectedTournamentId === tournament.id ? null : tournament.id;
//                 renderApp();
//             });
//             card.classList.add('cursor-pointer');
//         }
//     });
    
//     return tournamentsGrid;
// }

// // Fonction principale de rendu
// function renderApp() {
//     const app = document.getElementById('app');
//     app.innerHTML = '';
    
//     // Titre principal
//     const header = document.createElement('div');
//     header.className = 'text-center mb-8';
//     header.innerHTML = `
//         <h1 class="text-4xl font-bold text-gray-900 mb-2">ArenaSync</h1>
//         <p class="text-lg text-gray-600">Gestion de tournois et matchs</p>
//     `;
    
//     // Ajout des composants
//     app.appendChild(header);
//     app.appendChild(renderFilters());
//     app.appendChild(renderTournaments());
// }

// // Initialisation
// renderApp();

// // Debug
// console.log('Données des tournois:', tournamentDB);