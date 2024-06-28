import React from "react";
import AddTodoForm from "./AddTodoForm";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

function FormDialog() {
  const [open, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center mt-2">
      <button
        onClick={openModal}
        className="px-4 py-1 font-semibold text-gray-800 text-lg border border-gray-500"
      >
        <FontAwesomeIcon icon={faPlus} /> Add Task
      </button>
      <Modal isOpen={open} onClose={closeModal}>
        <AddTodoForm />
      </Modal>
    </div>
  );
}

export default FormDialog;
