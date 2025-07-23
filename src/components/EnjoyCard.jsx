import React from 'react'

const EnjoyCard = ({sarlovha, text}) => {
  return (
    <div class="col-lg-4 mt-5">
            <div class="vv p-4 mx-auto">
              <h4 class="mt-5 fw-bold sr">{sarlovha}</h4>
              <h4 class="mt-5 sf">What You’ll Get</h4>
              <div class="d-flex align-items-center gap-3">
                <img src="./img/image copy 14.png" alt="" />
                <p class="mt-3">One-time initiation fee $0</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src="./img/image copy 14.png" alt="" />
                <p class="mt-3">Deposit $50k</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src="./img/image copy 14.png" alt="" />
                <p class="mt-3">Pricing / rates Dynamic</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src="./img/image copy 14.png" alt="" />
                <p class="mt-3">Priority fleet access Yes</p>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src="./img/image copy 14.png" alt="" />
                <p class="mt-3">Guaranteed fleet access No</p>
              </div>
              <h4 class="ee">
                <span class="s1 fw-bold">{text}</span>/month
              </h4>
              <button class="er mt-4">Choose</button>
            </div>
          </div>
  )
}

export default EnjoyCard
