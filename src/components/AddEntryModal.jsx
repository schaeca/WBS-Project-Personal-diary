import { useEffect } from "react";
import { useState } from "react";
import { useActionState } from "react";

const submitAction = async (prevState, formData) => {
  const title = formData.get("title");
  const date = formData.get("date");
  const image = formData.get("image");
  const content = formData.get("content");
  console.log("Submitted", { title, date, image, content });
  alert("Entry was saved");
  return { error: null, success: true };
};

const initialState = {
    title: "",
    date: "",
    image: "",
    content: "",}

export default function AddEntryModal() {
  const [state, formAction, isPending] = useActionState(submitAction, {});
  
  const [formData, setFormData] = useState(initialState);
  const {title, date, image, content} = formData
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (state.success) {
      setFormData(initialState);
    }
  }, [state]);


  const handleReset = () => {
    setFormData(initialState)
  }

  return (
    <div>
      <h2 className="font-bold text-lg">New Diary Entry</h2>
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
            />
            {state.error?.name && (<p className="text-sm text-red-600 mt-1">{state.error?.name}</p>)}
        </fieldset>
        <fieldset>
          <label className="fieldset-legend">Date</label>
          <input type="date" name="date" value={date} onChange={handleChange} className="input"/>
          {state.error?.name && (<p className="text-sm text-red-600 mt-1">{state.error?.name}</p>)}
          <label className="fieldset-legend">Image URL</label>
          <input name="image" value={image} onChange={handleChange} className="input" placeholder="Put in a valid image url"/>
          {state.error?.name && (<p className="text-sm text-red-600 mt-1">{state.error?.name}</p>)}
          <label className="fieldset-legend">Content</label>
          <textarea name="content" value={content} onChange={handleChange} className="input h-24" placeholder="What do you want to tell me today?" rows={4}/>
          {state.error?.name && (<p className="text-sm text-red-600 mt-1">{state.error?.name}</p>)}
          <br/> <br/>
          <button type="submit" disabled={isPending} className={`btn ${isPending ? "text-gray-400 cursor-not-allowed":""}`}>{isPending? "Saving...":"Save entry"}</button>
          <button className="btn" onClick={handleReset}>Reset</button>

        </fieldset>
      </form>
    </div>
  );
}
