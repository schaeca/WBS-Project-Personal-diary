import {Route, Routes} from "react-router"
import Header from "./components/Header";
import { useState } from "react";
import { useEffect } from "react";
import EntryList from "./components/EntryList.";

const App = () => {

  const [savedEntries, setSavedEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedEntries")) || [];
    setSavedEntries(stored);    
  }, []);

  return (
    <div>
      <Header savedEntries={savedEntries} setSavedEntries={setSavedEntries}/>
      <EntryList savedEntries={savedEntries} setSavedEntries={setSavedEntries}/>
    </div>
  );
};

export default App;
