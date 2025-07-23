import React from "react";
import ReklamaCard from "./ReklamaCard";

const Reklama = () => {
  return (
    <div class="reklama">
      <div class="container">
        <div class="d-flex justify-content-center mt-5">
          <h2>Private Jet for Business & Leisure Purposes</h2>
        </div>
        <div class="row mt-5 align-items-center d-flex justify-content-center">
          <div class="col-xl-4 col-lg-12">
            <ReklamaCard
              imgName="./img/kursi.png"
              sarlavha="Luxury And Comfort"
              text="It is a long established fact that a reader will be distracted by the readable"
            />
            <ReklamaCard
              imgName="./img/kalendar.png"
              sarlavha="Personal schedule & booking"
              text="It is a long established fact that a reader will be distracted by the readable"
            />
          </div>
          <div class="col-xl-4 col-lg-12">
            <div class="ff d-flex justify-content-center mt-5">
              <img class="img-fluid" src="./img/image copy 7.png" alt="" />
            </div>
          </div>
          <div class="col-xl-4 col-lg-12">
            <ReklamaCard
              imgName="./img/spichka.png"
              sarlavha="SAFETY AND SECURITY"
              text="It is a long established fact that a reader will be distracted by the readable"
            />
            <ReklamaCard
              imgName="./img/odam.png"
              sarlavha="EXPERIENCED CREW"
              text="It is a long established fact that a reader will be distracted by the readable"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reklama;
