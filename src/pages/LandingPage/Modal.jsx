import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

Modal.setAppElement("#root");

export const ExploreModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Explore More Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "400px", 
          height: "150px",
          padding: "15px",
          backgroundColor: "#1A362B",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
          border: "1px solid #e5e5e5",
        },
      }}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-white hover:text-[#FCE600] transition duration-200"
        >
          <FaTimes size={18} />
        </button>
      </div>
      <div className="text-center text-white">
        <p className="text-lg font-semibold mb-2">Blog Post Coming Soon</p>
        <p className="text-sm ">
          We’re still documenting our blog post journey, please check back
          later.
        </p>
      </div>
    </Modal>
  );
};


export const FooterModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Explore More Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "250px",
          height: "100px",
          padding: "15px",
          backgroundColor: "#1A362B",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e5e5",
        },
      }}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-white hover:text-[#FCE600] transition duration-200"
        >
          <FaTimes size={18} />
        </button>
      </div>
      <p className="text-center text-white">coming soon...</p>
    </Modal>
  );
};
