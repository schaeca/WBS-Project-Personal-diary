import { useState, useEffect } from "react";
import AddEntryModal from "./AddEntryModal";

export default function Header() {
  const [savedEntries, setSavedEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedEntries")) || [];
    setSavedEntries(stored);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-amber-300">
        <p>Welcome to your personal diary</p>
        <div>
          <button
            className="btn"
            onClick={() => document.getElementById("newEntry").showModal()}
          >
            Add Entry
          </button>
          <dialog id="newEntry" className="modal">
            <div className="modal-box">
              <AddEntryModal
                savedEntries={savedEntries}
                setSavedEntries={setSavedEntries}
              />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}
