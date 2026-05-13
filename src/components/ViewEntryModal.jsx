export default function ViewEntryModal({ entry, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-amber-200 min-w-lg p-4 rounded-md">
        <div className="flex gap-4 justify-between mb-2">
          <div>
            <p className="text-sm italic">{entry.date}</p>
            <h3 className="font-bold text-lg">{entry.title}</h3>
            <p>{entry.content}</p>
          </div>

          <img
            src={entry.image}
            className="object-cover min-h-30 max-w-40 rounded-md"
          />
        </div>
        <div className="flex min-w-lg justify-center">
          <button onClick={onClose} className="btn btn-warning">
            Close
          </button>
        </div>
      </div>
    </div>
    // <div>
    //   {/* Open the modal using document.getElementById('ID').showModal() method */}
    //   <dialog id={date} className="modal">
    //     <div className="modal-box bg-amber-300 flex justify-between">
    //         <div>
    //       <p className="text-[0.75rem] italic font-bold">{entry.date}</p>
    //       <h3 className="font-bold text-lg">{entry.title} </h3>
    //       <p className="py-4">{entry.content}</p>
    //         </div>
    //         <img src={entry.img} className="object-cover min-h-30 max-w-40 rounded-md"/>
    //     </div>
    //     <form method="dialog" className="modal-backdrop">
    //       <button onClick={onClose}>close</button>
    //     </form>
    //   </dialog>
    // </div>
  );
}
