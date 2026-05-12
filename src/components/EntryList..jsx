import EntryCard from "./EntryCard";

export default function EntryList({ savedEntries }) {

  return (
    <div className="bg-amber-100 h-screen">
    <div className="flex flex-wrap gap-5 p-4 justify-center bg-amber-100">
      {savedEntries.map((e) => {
        return (
          <EntryCard key= {e.date} e={e} />
        );
      })}
    </div>
    </div>
  );
}
