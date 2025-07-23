import React from 'react'
import LuxuryCard from './LuxuryCard'

const Luxury = () => {
  return (
    <div class="luxury">
    <div class="container">
      <div class="d-flex justify-content-center mt-5">
        <h2 class="fw-bold">Luxury Charters</h2>
      </div>
      <div class="row mt-5 align-items-center d-flex justify-content-center">
         <LuxuryCard imgName="./img/samalyot1.png" sarlovha="Piaggio P.180 Avanti" />
         <LuxuryCard imgName="./img/samalyot2.png" sarlovha="Pilatus PC-12"/>
         <LuxuryCard imgName="./img/samalyot3.png" sarlovha="piper pa27 aztec"/>
         <LuxuryCard imgName="./img/samalyot4.png" sarlovha="Beech BE100 King Air"/>
      </div>
    </div>
  </div>
  )
}

export default Luxury
