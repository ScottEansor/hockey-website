import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const [players, setPlayers]= useState(null)
  useEffect(()=>{
    let running = true
    async function fetchPlayers(){
      const response = await fetch("/api/players")
      const data = await response.json()
      if(!running) return
      setPlayers(data)
    }
    fetchPlayers()
    return ()=>{
      running = false
    }
  },[])

  return <div>
    
  </div>;
}
