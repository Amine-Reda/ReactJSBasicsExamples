import React from "react";

function MemoComponent({ name }) {
  console.log("***************memoComponent");
  return <div>{name}</div>;
}

export default MemoComponent;
