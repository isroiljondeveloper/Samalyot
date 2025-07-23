import React from "react";
import PrivateCard from "./PrivateCard";

function Private() {
  return (
    <div class="private">
      <div class="container">
        <div class="d-flex justify-content-center mt-5">
          <h2>Private Jet for Business & Leisure Purposes</h2>
        </div>
        <PrivateCard
          sarlavha="Private Jet Charter"
          imgName="./img/sam.png"
          nom="flex-row"
        />
        <PrivateCard
          sarlavha="Business Jet Charter"
          imgName="./img/kurss.png"
          nom="flex-row-reverse"
        />
      </div>
    </div>
  );
}

export default Private;
