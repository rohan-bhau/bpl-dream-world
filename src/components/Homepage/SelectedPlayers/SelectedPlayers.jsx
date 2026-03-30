import React from 'react'
import SelectedPlayersCard from './SelectedPlayersCard'

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    
    
  return (
    <div>
              <SelectedPlayersCard
                
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
                coin={coin}
                setCoin={setCoin}
              ></SelectedPlayersCard>
    </div>
  )
}

export default SelectedPlayers
