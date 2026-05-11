
function handleClick(){
    console.log("Modal should open");
    
}

function handleDelete(e){
    console.log("Entry should be deleted")
    console.log(e.target);
    
    // const date = 
    // setSavedEntries((prev) => {
    //     let updated = prev.filter(prev.date ===);
    //     localStorage.setItem("savedEntries", JSON.stringify(updated));
    //     return updated;})
}

export default function EntryCard({e}) {
  return (
    <div className="card card-sm bg-amber-200 max-w-fit p-2 shadow-sm">
      <figure>
        <img className="object-cover max-h-50" src={e.image} alt={e.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{e.date}</h2>
        <p>{e.title}</p>
        <div className="card-actions justify-end flex-col items-center">
          <button onClick={handleClick} className="btn btn-warning">View Details</button>
          <button onClick={handleDelete} className="btn btn-xs bg-amber-100 btn-warning">Delete entry</button>
        </div>
      </div>
    </div>
  );
}
