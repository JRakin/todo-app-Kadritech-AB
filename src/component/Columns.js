import React, { useEffect, useState } from "react";
import classNames from "classnames";
import FormDialog from "./Form/FormDialog";
import ContextMenu from "./ContextMenu";
import useAppContext from "../context/AppContext";

const Columns = ({ status }) => {
  const headerClasses = classNames(
    "py-2 px-3 rounded-tr-md rounded-tl-md shadow-sm",
    {
      "bg-orange-400": status.key === "new",
      "bg-blue-500": status.key === "ongoing",
      "bg-green-700": status.key === "done",
    }
  );

  const [items, setItems] = useState([]);
  const { getTodosByKey } = useAppContext();

  useEffect(() => {
    const todosItems = getTodosByKey(status.key);
    setItems(todosItems)
  }, [status, getTodosByKey]);

  return (
    <div className="bg-gray-300 rounded-md min-h-56 min-w-[32%]">
      <div className={headerClasses}>
        <h3 className="text-brown-50 text-xl font-semibold">{status?.name}</h3>
      </div>
      {items?.map((item) => (
        <ContextMenu item={item} key={item?.id} />
      ))}
      <div>{status.key === "new" ? <FormDialog /> : ""}</div>
    </div>
  );
};

export default Columns;
