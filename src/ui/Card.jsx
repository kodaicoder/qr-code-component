import React from "react";

export const Card = (props) => {
  return (
    <div className="w-[22rem] h-full  flex-col rounded-xl bg-white">
      {props.children}
    </div>
  );
};
