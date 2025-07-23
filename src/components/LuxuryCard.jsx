import React from 'react'

const LuxuryCard = ({ imgName, sarlovha}) => {
  return (
    <div class="col-lg-3 mt-5">
          <div class="hh text-center mx-auto text-center">
            <img
              class="img-fluid align-items-center mt-2"
              src={imgName}
              alt=""
            />
            <h5 class="mt-2">{sarlovha}</h5>
          </div>
        </div>
  )
}

export default LuxuryCard
