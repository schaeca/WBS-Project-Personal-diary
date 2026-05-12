import { useEffect, useState, useActionState } from "react";

const submitAction = async () => {
  return { error: null, success: true };
};

const initialState = {
  title: "",
  date: "",
  image: "",
  content: "",
};

export default function AddEntryModal({ savedEntries, setSavedEntries }) {
  const [state, formAction, isPending] = useActionState(submitAction, {});
  const [formData, setFormData] = useState(initialState);
  const { title, date, image, content } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function closeModal() {
    document.getElementById("newEntry").close();
  }

  useEffect(() => {
    if (state.success) {
      if (savedEntries.some((e) => e.date === date)) {
        alert(
          "You already saved an entry for that date, choose another date or come back tomorrow.",
        );
        return;
      } else {
        setSavedEntries((prev) => {
          let updated = [...prev, formData];
          localStorage.setItem("savedEntries", JSON.stringify(updated));
          return updated;
        });
      }
      setFormData(initialState);
      alert("Entry was saved");
      closeModal();
    }
  }, [state]);

  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <div className="bg-amber-100">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">New Diary Entry</h2>
        {/* <button className="btn btn-ghost btn-sm bg-amber-100">X</button> */}
        <button type="button" className="btn btn-sm btn-ghost hover:bg-amber-400" onClick={closeModal}>X</button>

      </div>
      <form id="myform" action={formAction}>
        <fieldset>
          <label className="fieldset-legend">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="input"
            placeholder="Type here"
            required
          />
          {state.error?.name && (
            <p className="text-sm text-red-600 mt-1">{state.error?.name}</p>
          )}
        </fieldset>
        <fieldset>
          <label className="fieldset-legend">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            className="input"
            required
          />
          {state.error?.name && (
            <p className="text-sm text-red-600 mt-1">{state.error?.name}</p>
          )}
          <label className="fieldset-legend">Image URL</label>
          <input
            name="image"
            value={image}
            onChange={handleChange}
            className="input"
            placeholder="Put in a valid image url"
            required
          />
          {state.error?.name && (
            <p className="text-sm text-red-600 mt-1">{state.error?.name}</p>
          )}
          <label className="fieldset-legend">Content</label>
          <textarea
            name="content"
            value={content}
            onChange={handleChange}
            className="input h-24"
            placeholder="What do you want to tell me today?"
            rows={4}
            required
          />
          {state.error?.name && (
            <p className="text-sm text-red-600 mt-1">{state.error?.name}</p>
          )}
          <br /> <br />
          <div className="flex gap-2 items-start">
              <button
                type="submit"
                disabled={isPending}
                className={`btn btn-warning btn-wide ${isPending ? "text-gray-400 cursor-not-allowed" : ""}`}
                >
                {isPending ? "Saving..." : "Save entry"}
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleReset}
              >
                Reset
              </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
