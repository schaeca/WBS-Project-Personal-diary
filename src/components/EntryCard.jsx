import ViewEntryModal from "./ViewEntryModal";

function handleDelete(){
    console.log("Entry should be deleted")
    
    // const date = 
    // setSavedEntries((prev) => {
    //     let updated = prev.filter(prev.date ===);
    //     localStorage.setItem("savedEntries", JSON.stringify(updated));
    //     return updated;})
}

export default function EntryCard({e, onOpen}) {
  return (
    <div className="card card-sm bg-amber-200 max-w-fit p-2 shadow-sm items-center">
      <figure>
        <img className="object-cover min-h-30 max-h-30 rounded-md" src={e.image} alt={e.title} />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{e.date}</h2>
        <p>{e.title}</p>
        <div className="card-actions justify-end items-center">
          {/* <ViewEntryModal date={e.date} title={e.title} content={e.content} img={e.image}/> */}
          <button onClick={onOpen} id={e.date} className="btn btn-sm btn-warning">View Details</button>
          <button onClick={handleDelete} className="btn btn-sm btn-soft btn-warning bg-amber-100 border-amber-400">Delete entry</button>
        </div>
      </div>
    </div>
  );
}
