import { useState } from "react";
import EntryCard from "./EntryCard";
import ViewEntryModal from "./ViewEntryModal";

export default function EntryList({ savedEntries }) {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="bg-amber-100 h-screen">
      <div className="flex flex-wrap gap-5 p-4 justify-center bg-amber-100">
        {savedEntries.map((e) => {
          return (
            <EntryCard key={e.date} e={e} onOpen={() => setSelectedEntry(e)} />
          );
        })}
      </div>
      {selectedEntry && (<ViewEntryModal entry={selectedEntry} onClose={()=>setSelectedEntry(null)}/>)}
    </div>
  );
}
