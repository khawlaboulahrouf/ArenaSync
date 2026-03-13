import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ParticipantRow from "./ParticipantRow";
import RegistrationForm from "./RegistrationForm";

function TournamentCard({ tournament }) {

  const [activeTab,setActiveTab] = useState("info");



  //

  const [participants,setParticipants] = useState(tournament.participants);

  const [isRegistered,setIsRegistered] = useState(false);

  const maxSlots = 32;
  const availableSlots = maxSlots - participants.length;

  const handleAddParticipant = (participant)=>{

    setParticipants([...participants,participant]);
    setIsRegistered(true);

  };

  const handleRegister = () => {

    setIsRegistered(!isRegistered);

  };

  return (

    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">

      {/* HEADER */}

      <div className="flex gap-3 items-center">

        <img
          src={tournament.sportimage}
          alt={tournament.title}
          className="w-12 h-12 rounded-xl"
        />

        <div>

          <h2 className="font-bold">{tournament.title}</h2>

          <StatusBadge status={tournament.status} />

        </div>

      </div>

      {/* REGISTER BUTTON */}

      <button
        onClick={handleRegister}
        className={`mt-3 px-4 py-2 rounded text-white
        ${isRegistered ? "bg-red-500":"bg-blue-600"}`}
      >

        {isRegistered ? "Se désinscrire":"S'inscrire"}

      </button>

      {/* TABS */}

      <div className="flex gap-4 mt-4 border-b pb-2">

        <button
          onClick={()=>setActiveTab("info")}
          className={activeTab==="info"?"font-bold text-blue-600":""}
        >
          Info
        </button>

        <button
          onClick={()=>setActiveTab("participants")}
          className={activeTab==="participants"?"font-bold text-blue-600":""}
        >
          Participants
        </button>

      </div>

      {/* INFO TAB */}

      {activeTab==="info" && (

        <div className="text-sm mt-3 text-gray-600">

          <p>{tournament.description}</p>

          <p className="mt-2">📅 {tournament.date}</p>

          <p>📍 {tournament.location}</p>

          <p>🏆 {tournament.format}</p>

          <p>Places restantes : {availableSlots}</p>

        </div>

      )}

      {/* PARTICIPANTS TAB */}

      {activeTab==="participants" && (

        <div className="mt-3">

          {participants.map((participant)=>(

            <ParticipantRow
              key={participant.id}
              participant={participant}
            />

          ))}

          {availableSlots === 0 ? (

            <p className="text-red-600 mt-3 font-bold">
              Tournoi Complet
            </p>

          ) : (

            <RegistrationForm
              onAddParticipant={handleAddParticipant}
            />

          )}

        </div>

      )}

    </div>

  );

}

export default TournamentCard;