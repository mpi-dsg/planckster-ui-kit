"use client";
import React, { useState } from "react";

export interface RcModalProps {
  isOpen: boolean;
  closeModal: () => void;
  addResearchContext: (title: string, description: string) => void;
}

const Rcmodal: React.FC<RcModalProps> = ({
  isOpen,
  closeModal,
  addResearchContext,
}) => {
  const [title, setTitle] = useState(""); // State for research context title
  const [description, setDescription] = useState(""); // State for research context description

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addResearchContext(title, description); // Call addResearchContext with title and description
    setTitle(""); // Reset title
    setDescription(""); // Reset description
    closeModal(); // Close modal
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-800 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Create New Research Context
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  rows={4}
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add new research context
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Rcmodal;
