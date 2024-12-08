
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <section className="fixed top-0 right-0 flex flex-col justify-center items-center z-50 w-[100vw] h-[100vh] bg-[#00000099]">
      <div className="w-[80%] h-[90%] overflow-y-auto ">
        <button
          onClick={onClose}
          className="bg-red-400 w-10 h-10 rounded ml-auto  text-xl text-center flex items-center justify-center text-white"
        >
          <CloseIcon />
        </button>
        <div className="p-10 bg-white rounded shadow-xl">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Modal;

