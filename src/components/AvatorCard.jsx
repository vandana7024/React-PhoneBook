import React from "react";
import Avatar from "react-avatar";

function AvatorCard(props) {
  return (
    <div className="m-0 p-0  flex justify-start items-start px-24 ">
      <Avatar name={props.name} size={200} round="200px" />
    </div>
  );
}

export default AvatorCard;
