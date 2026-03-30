import React from "react";

import Card from "../../ui/Card";

const AvailablePlayers = ({ playersData, coin, setCoin }) => {
    // console.log(playerData);

  // console.log(PlayerName)
  
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
      {playersData.map((playerData, idx) => (
        <Card
          key={idx}
          playerData={playerData}
          coin={coin}
          setCoin={setCoin}
        ></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;
