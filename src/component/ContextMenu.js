// RightClickMenu.jsx
import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import useAppContext from "../context/AppContext";
import ContextMenuItem from "./ContextMenuItem";

const ContextMenu = ({ item }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const { status, toggleStatus } = useAppContext();

  const handleContextMenu = (event) => {
    event.preventDefault();
    setIsMenuVisible(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMenuClick = (action) => {
    setIsMenuVisible(false);
    toggleStatus(item?.id, action)
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuVisible) {
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuVisible]);

  return (
    <div>
      <TodoCard item={item} handleContextMenu={handleContextMenu} />
      {isMenuVisible && (
        <div
          className="fixed z-50 bg-white shadow-lg border border-gray-200 transition-opacity duration-200 ease-in-out min-w-40"
          style={{ top: menuPosition.y, left: menuPosition.x }}
          onClick={() => setIsMenuVisible(false)}
        >
          {status?.map((stat) => {
            if (stat.key !== item.key) {
              return (
                <ContextMenuItem status={stat} handleMenuCLick={handleMenuClick}/>
              );
            }
            return ''
          })}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
