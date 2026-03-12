import { useState } from "react";
import { tournamentData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import Header from "./components/Header";

function App() {

  const [sportFilter, setSportFilter] = useState("All");

  const sports = ["All", ...new Set(tournamentData.map(t => t.sport))];

  const filteredTournaments =
    sportFilter === "All"
      ? tournamentData
      : tournamentData.filter(t => t.sport === sportFilter);

  return (

    <>

      <Header />

      <div className="p-6">

        {/* FILTERS */}

        <div className="flex gap-3 mb-6 flex-wrap">

          {sports.map((sport) => (

            <button
              key={sport}
              onClick={() => setSportFilter(sport)}
              className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              {sport}
            </button>

          ))}

        </div>

        {/* GRID */}

        {filteredTournaments.length === 0 ? (

          <p>Aucun tournoi trouvé pour ce sport</p>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {filteredTournaments.map((tournament) => (

              <TournamentCard
                key={tournament.id}
                tournament={tournament}
              />

            ))}

          </div>

        )}

      </div>

    </>

  );

}

export default App;