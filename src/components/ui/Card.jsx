import React, { useState } from "react";
import userPng from "../../assets/user.png";
import flagImg from "../../assets/flag.png";
import { toast } from "react-toastify";
const Card = ({ playerData, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
  // console.log(coin);

    const [isSelected, setIsSelected] = useState(false);
    
    
  const {
    playerName,
    playerCountry,
    playerType,
    image,
    battingStyle,
    bowlingStyle,
    price,
    rating,
    } = playerData;
    
    const handleClicked = () => {
        const newCoin = coin - price
        if (newCoin >0) {
            setCoin(newCoin)
        } else {
            toast.warn(`You don't have enough coin to purchase this player`);
            return
        }
        setIsSelected(true)
        toast.success(`${playerName} is selected`);

   
        setSelectedPlayers([...selectedPlayers, playerData])
    }

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="m-4 rounded-xl">
        <img
          className="h-50 w-80 object-cover rounded-xl"
          src={image}
          alt={`Image of {playerName}`}
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-4 items-center">
          <div className="w-\[25px\] h-\[25px\]">
            <img src={userPng} alt="" />
          </div>
          <h2 className="text-xl font-bold">{playerName}</h2>
        </div>
        <div className="flex justify-between items-center pb-4 border-b-1 border-black/10">
          <div className="flex gap-2 items-center">
            <img className="border-none outline-none" src={flagImg} alt="" />
            <p className="text-lg text-black/60">{playerCountry}</p>
          </div>
          <button className="btn btn-ghost font-semibold text-black/60">
            {playerType}
          </button>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4">Ratings: {rating}</h2>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">{battingStyle}</h3>
            <h3 className="font-semibold text-lg text-black/60">
              {bowlingStyle}
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg ">{price}</h3>
            <button
              className="btn"
              onClick={handleClicked}
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
