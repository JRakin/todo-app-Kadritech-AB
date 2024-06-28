import React from "react";
import Columns from "./Columns";
import useAppContext from "../context/AppContext";

const Board = () => {
  const { status } = useAppContext();
  return (
    <div className="flex flex-wrap space-x-6 space-y-5 md:space-y-0 w-full justify-center">
      {status.map((item) => (
        <Columns status={item} key={item.key}/>
      ))}
    </div>
  );
};

export default Board;
