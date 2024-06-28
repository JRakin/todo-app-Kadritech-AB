import classNames from "classnames";
import React from "react";

const ContextMenuItem = ({ handleMenuCLick, status }) => {
  const itemClasses = classNames(
    "menu-item p-2 hover:text-white text-sm cursor-pointer transition-colors duration-200 ease-in-out border-b border-gray-300",
    {
      "hover:bg-orange-400": status.key === "new",
      "hover:bg-blue-500": status.key === "ongoing",
      "hover:bg-green-700": status.key === "done",
    }
  );
  return (
    <div className={itemClasses} onClick={() => handleMenuCLick(status.key)}>
      {status.name}
    </div>
  );
};

export default ContextMenuItem;
