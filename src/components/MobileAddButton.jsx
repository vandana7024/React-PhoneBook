import React from "react";
import { useNavigate } from "react-router-dom";
import add from "../assets/add.png";

function MobileAddButton() {
  const navigate = useNavigate();
  return (
    <div className="">
      <span
        className="absolute bottom-10 right-5 z-10 bg-white rounded-full shadow-lg p-4 "
        onClick={() => navigate("/add")}
      >
        <img src={add} alt="" />
      </span>
    </div>
  );
}

export default MobileAddButton;
