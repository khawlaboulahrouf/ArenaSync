export function filterTournaments(tournaments, sport) {
  if(sport === "All") return tournaments;

  return tournaments.filter(t => t.sport === sport);
}
