import AddEntryModal from "./AddEntryModal";

export default function Header({savedEntries, setSavedEntries}) {
  

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-amber-300">
        <p>Welcome to your personal diary</p>
        <div>
          <button
            className="btn btn-warning bg-amber-400 hover:bg-amber-100 hover:border-amber-400"
            onClick={() => document.getElementById("newEntry").showModal()}
          >
            Add Entry
          </button>
          <dialog id="newEntry" className="modal">
            <div className="modal-box bg-amber-100">
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
