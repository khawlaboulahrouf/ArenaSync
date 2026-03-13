import { useState } from "react";

function RegistrationForm({ onAddParticipant }) {

  const [name,setName] = useState("");
  const [team,setTeam] = useState("");
  const [level,setLevel] = useState("");

  const [errors,setErrors] = useState({});

  const nameRegex = /^[A-Za-z ]{3,}$/;

  const validate = () => {

    let newErrors = {};

    if(!nameRegex.test(name)){
      newErrors.name = "Le nom doit contenir au moins 3 lettres";
    }

    if(team.length < 2){
      newErrors.team = "Equipe invalide";
    }

    if(level.length < 1){
      newErrors.level = "Niveau requis";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };
  ///

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!validate()) return;

    const newParticipant = {
      id: Date.now(),
      name,
      team,
      level,
      status:"Pending",
      avatar:`https://i.pravatar.cc/150?u=${name}`
    };

    onAddParticipant(newParticipant);

    setName("");
    setTeam("");
    setLevel("");
    setErrors({});

  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">

      {/* NAME */}

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="border p-2 rounded"
      />

      {errors.name && (
        <p className="text-red-500 text-sm">
          {errors.name}
        </p>
      )}

      {/* TEAM */}

      <input
        type="text"
        placeholder="Equipe"
        value={team}
        onChange={(e)=>setTeam(e.target.value)}
        className="border p-2 rounded"
      />

      {errors.team && (
        <p className="text-red-500 text-sm">
          {errors.team}
        </p>
      )}

      {/* LEVEL */}

      <input
        type="text"
        placeholder="Niveau"
        value={level}
        onChange={(e)=>setLevel(e.target.value)}
        className="border p-2 rounded"
      />

      {errors.level && (
        <p className="text-red-500 text-sm">
          {errors.level}
        </p>
      )}

      <button
        disabled={!nameRegex.test(name)}
        className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
      >
        Valider
      </button>

    </form>

  );

}

export default RegistrationForm;