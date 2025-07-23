import React from "react";

export default function PrivateCard({ imgName, sarlavha, nom }) {
  return (
    <div class={`row justify-content-between align-items-center mt-5 ${nom}`}>
      <div class="col-lg-6">
        <img class="img-fluid" src={imgName} alt="" />
      </div>
      <div class="col-lg-5 align-items-center">
        <h3 class="sd">{sarlavha}</h3>
        <p class="ds">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors
        </p>
      </div>
    </div>
  );
}
