import classNames from "classnames";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsProgress,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const TodoCard = ({ item, handleContextMenu }) => {
  const cardClasses = classNames(
    "bg-blue-gray-50 rounded-tr-md rounded-br-md shadow my-4 mx-2 p-2",
    {
      "border-l-4 border-orange-400": item.key === "new",
      "border-l-4 border-blue-500": item.key === "ongoing",
      "border-l-4 border-green-700": item.key === "done",
    }
  );

  const calculateDueDate = () => {
    let difference = item?.dueDate?.getTime() - new Date().getTime();

    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);
    const seconds = Math.floor(difference / 1000);

    return { hours, minutes, seconds };
  };

  return (
    <div>
      <div className={cardClasses} onContextMenu={(e) => handleContextMenu(e)}>
        <div className="flex justify-between">
          <h4 className="text-md first-line:text-gray-700 font-semibold">
            {item?.title}
          </h4>
          {calculateDueDate().hours &&
          (item?.key === "new" || item?.key === "ongoing") ? (
            <span className="text-xs">
              {calculateDueDate().hours} Hours {calculateDueDate().minutes}{" "}
              minutes due
              <span className="ml-2 text-red-600">
                <FontAwesomeIcon icon={faHourglass} />
              </span>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between">
          <p className="text-sm">{item?.description}</p>
          {item?.key === "new" ? (
            <div className="tex-2xl text-orange-500">
              <FontAwesomeIcon icon={faSquarePlus} />
            </div>
          ) : item?.key === "ongoing" ? (
            <div className="tex-2xl text-blue-500">
              <FontAwesomeIcon icon={faBarsProgress} />
            </div>
          ) : (
            <div className="tex-2xl text-green-500">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
