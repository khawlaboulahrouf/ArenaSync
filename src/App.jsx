import { useState } from "react";
import { tournamentData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import Header from "./components/Header";

function App(){

  const [searchTerm,setSearchTerm] = useState("");

  const filteredTournaments = tournamentData.filter(t =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(

    <>

      <Header/>

      <div className="p-6">

        <input
          type="text"
          placeholder="Search tournament..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="border p-2 rounded mb-6 w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {filteredTournaments.map((tournament)=>(
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
            />
          ))}

        </div>

      </div>

    </>

  );

}

export default App;