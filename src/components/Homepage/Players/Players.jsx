import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, coin, setCoin }) => {
  const playersData = use(playersPromise);
  // console.log(coin, setCoin);

  const [state, setState] = useState("available")
  // console.log(state, "selectedType") ;

  const [selectedPlayers, setSelectedPlayers] = useState([])
  


  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        {state === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            {" "}
            Selected Players ({selectedPlayers.length}/{playersData.length})
          </h2>
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
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {state === "available" ? (
        <AvailablePlayers
          coin={coin}
          setCoin={setCoin}
          playersData={playersData}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
