import React from 'react'

const EmptySelectedPlayerCard = () => {
  return (
    <div className='flex  flex-col justify-center items-center pt-10 space-y-3'>
          <h2 className='text-2xl font-bold text-black/70'>No players available</h2>
          <p className='text-lg text-black/40'>Select players from the available players first</p>
    </div>
  )
}

export default EmptySelectedPlayerCard
