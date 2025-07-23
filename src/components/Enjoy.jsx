import React from "react";
import EnjoyCard from "./EnjoyCard";

const Enjoy = () => {
  return (
    <div class="enjoy">
      <div class="container">
        <div class="d-flex justify-content-center mt-5">
          <h2 class="fw-bold">Enjoy our membership</h2>
        </div>
        <div class="row mt-5">
         <EnjoyCard sarlovha="Popular" text="$250/month"/>
         <EnjoyCard sarlovha="Business" text="$480/month"/>
         <EnjoyCard sarlovha="Elite" text="$680/month"/>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
