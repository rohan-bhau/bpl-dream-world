import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  // console.log(playersData);

  const [state, setState] = useState("available")
  // console.log(state, "selectedType") ;
  


  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        {state === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl"> Selected Players</h2>
        )}
        <div className="flex">
          <button
            onClick={() => setState("available")}
            className={`btn ${state === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setState("selected")}
            className={`btn ${state === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected
          </button>
        </div>
      </div>
      
        {state === "available" ? <AvailablePlayers playersData={playersData}></AvailablePlayers>:<SelectedPlayers></SelectedPlayers>}
    </div>
  );
};

export default Players;
