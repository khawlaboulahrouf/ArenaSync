import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ParticipantRow from "./ParticipantRow";

function TournamentCard({ tournament }) {

  const [activeTab, setActiveTab] = useState("info");

  return (

    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">

      <div className="flex gap-3 items-center">

        <img
          src={tournament.sportimage}
          alt={tournament.title}
          className="w-12 h-12 rounded-xl object-cover"
        />

        <div>

          <h2 className="font-bold text-lg">
            {tournament.title}
          </h2>

          <StatusBadge status={tournament.status} />

        </div>

      </div>

      {/* Tabs */}

      <div className="flex gap-4 mt-4 border-b pb-2">

        <button
          onClick={() => setActiveTab("info")}
          className={activeTab === "info" ? "font-bold text-blue-600" : ""}
        >
          Info
        </button>

        <button
          onClick={() => setActiveTab("participants")}
          className={activeTab === "participants" ? "font-bold text-blue-600" : ""}
        >
          Participants
        </button>

      </div>

      {/* INFO TAB */}

      {activeTab === "info" && (

        <div className="mt-3 text-gray-600 text-sm">

          <p>{tournament.description}</p>

          <p className="mt-2">
            👥 {tournament.participantsCount}
          </p>

          <p>
            🏆 {tournament.format}
          </p>

          <p>
            📅 {tournament.date}
          </p>

          <p>
            📍 {tournament.location}
          </p>

        </div>

      )}

      {/* PARTICIPANTS TAB */}

      {activeTab === "participants" && (

        <div className="mt-3">

          {tournament.participants.length === 0 ? (

            <p className="text-gray-500">
              Aucun participant
            </p>

          ) : (

            tournament.participants.map((participant) => (

              <ParticipantRow
                key={participant.id}
                participant={participant}
              />

            ))

          )}

        </div>

      )}

    </div>

  );

}

export default TournamentCard;