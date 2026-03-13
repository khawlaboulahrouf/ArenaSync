import StatusBadge from "./StatusBadge";

function ParticipantRow({ participant }) {

  return (

    <div className="flex items-center gap-3 border-b py-2">

      <img
        src={participant.avatar}
        alt={`Photo de ${participant.name}`}
        className="w-10 h-10 rounded-full"
      />

      <p className="flex-1">{participant.name}</p>

      <StatusBadge status={participant.status} />

    </div>

  );
}

export default ParticipantRow;