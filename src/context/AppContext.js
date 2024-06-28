import React, { useState } from "react";

const status = [
  { name: "New", key: "new" },
  { name: "Ongoing", key: "ongoing" },
  { name: "Done", key: "done" },
];

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState(1);

  const getTodosByKey = (status) => {
    return todos
      .filter((item) => item.key === status)
      .sort((a, b) => a.moveOrder - b.moveOrder);
  };

  const toggleStatus = (itemId, status) => {
    const tobeStatus =
      status === "new" ? "New" : status === "ongoing" ? "Ongoing" : "Done";
    const updatedTodos = todos.map((todoItem) =>
      todoItem.id === itemId
        ? { ...todoItem, status: tobeStatus, key: status, moveOrder: order }
        : todoItem
    );
    setTodos(updatedTodos);
    setOrder((prevOrder) => prevOrder + 1);
  };

  const handleSubmit = (values) => {
    const params = {
      ...values,
      id: new Date().valueOf(),
      status: "New",
      key: "new",
      moveOrder: 0,
    };
    setTodos([...todos, params]);
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        status,
        handleSubmit,
        getTodosByKey,
        toggleStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export default useAppContext;
