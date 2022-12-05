import React from "react";
import "./Toast.css";

function Toast({ title, image }) {
  return (
    <div class="container">
      <img src={image} alt="" />
      <div class="text-block">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Toast;
