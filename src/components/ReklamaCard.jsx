import React from "react";

export default function ReklamaCard({ imgName, sarlavha, text }) {
  return (
    <div class="gg mx-auto text-center mt-5">
      <img class="mt-5" src={imgName} alt="" />
      <h4>{sarlavha}</h4>
      <p>{text}</p>
    </div>
  );
}
