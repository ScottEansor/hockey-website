import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

export default function Profile() {
  const [players, setPlayers] = useState(null);
  useEffect(() => {
    let running = true;
    async function fetchPlayers() {
      const response = await fetch("/api/players");
      const data = await response.json();
      if (!running) return;
      setPlayers(data);
    }
    fetchPlayers();
    return () => {
      running = false;
    };
  }, []);

  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4 gap-2">
      <h1 className="text-center p-2">Profile Page</h1>
      <div>
        {players?.map((player) => (
          <PlayerCard key={player._id} player={player} hideParentButton/>
        ))}
      </div>
    </div>
  );
}
