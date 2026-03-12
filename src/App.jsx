import { tournamentData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import Header from "./components/Header";

function App(){

  return(
    <>
        

    <Header/>

    <div className="p-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {tournamentData.map((tournament, index) => (
          <TournamentCard
          key={index}
          tournament={tournament}
          />
        ))}

      </div>

    </div>








    </>


  );

}
export default App
