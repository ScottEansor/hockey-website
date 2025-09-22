import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

//each player has a button that shows there parents and all there info in a modal
// in the manage players component the admin can assign a player to a group or groups
//in the manage Users component the admin can edit the info for the user
export default function ManagePlayers() {
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
      <h1 className="text-center p-2">Manage Players</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {players?.map((player) => (
          <PlayerCard key={player._id} player={player} />
        ))}
      </div>
    </div>
  );
}
