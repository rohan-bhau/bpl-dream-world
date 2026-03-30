import { Trash2 } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";
import EmptySelectedPlayerCard from "../../ui/EmptySelectedPlayerCard";

const SelectedPlayersCard = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleClickedPlayerDelete = (player) => {
    console.log(player);

    const filterSelectedPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    console.log(filterSelectedPlayers);

    setSelectedPlayers(filterSelectedPlayers);
    setCoin(coin + player.price);
    toast.error(`${player.playerName} has been deleted`);
  };

  return (
    <div>
      {selectedPlayers.length === 0? <EmptySelectedPlayerCard></EmptySelectedPlayerCard>:selectedPlayers.map((player, idx) => {
        return (
          <div
            key={idx}
            className="flex justify-between items-center border-black/10 shadow-xl  p-6 rounded-xl  space-y-7"
          >
            <div className="flex gap-6 items-center">
              <img
                className="w-[80px] w-[90px] object-cover rounded-2xl"
                src={player.image}
                alt={player.playerName}
              />
              <div>
                <h3 className="text-xl font-bold">{player.playerName}</h3>
                <p className="text-lg text-black/70">{player.playerType}</p>
              </div>
            </div>
            <button
              onClick={() => handleClickedPlayerDelete(player)}
              className="cursor-pointer"
            >
              <Trash2 className="text-[#F14749]" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayersCard;
