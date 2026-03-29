import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  // console.log(playersData);

  return (
    <div>
      Players: {playersData.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5">
        {playersData.map((playerData, idx) => (
          <AvailablePlayers
            key={idx}
            playerData={playerData}
          ></AvailablePlayers>
        ))}
      </div>
    </div>
  );
};

export default Players;
