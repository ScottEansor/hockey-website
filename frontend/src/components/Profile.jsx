import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import Modal from "./Modal"
import PlayerRegistration from "./PlayerRegistration";

export default function Profile() {
  const [players, setPlayers] = useState(null);
  const [showCreatePlayerModal, setShowCreatePlayerModal] = useState(false)

  const fetchPlayersFromApi = async ()=>{
    const response = await fetch("/api/players");
      const data = await response.json();
      return data
  }
  useEffect(() => {
    let running = true;
    async function fetchPlayers() {
      const data = await fetchPlayersFromApi()
      if (!running) return;
      setPlayers(data);
    }
    fetchPlayers();
    return () => {
      running = false;
    };
  }, []);

  const createPlayer = async (player)=>{
     await fetch("/api/players", {
      method: 'POST',
      body: JSON.stringify(player),
      headers: {
        "Content-Type":"application/json"
      }
    })
    setShowCreatePlayerModal(false)
    const data = await fetchPlayersFromApi()
      setPlayers(data);
  }
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4 gap-2">
      <h1 className="text-center">Profile Page</h1>
      <button className="btn btn-primary btn-lg" onClick={() => setShowCreatePlayerModal(true)}>Add Player</button>
      <Modal open={showCreatePlayerModal} onClose={()=>setShowCreatePlayerModal(false)} header={<h5>Add A New Player </h5>}>
      <PlayerRegistration onSubmit={createPlayer}/>
      </Modal>
      
        {players?.map((player) => (
          <PlayerCard key={player._id} player={player} hideParentButton/>
        ))}

    </div>
  );
}
