import React, { useEffect, useState } from "react";

import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/SideBar/Sidebar";
import DataNotes from "./components/utils/DataNotes";

import "./App.css";

function App() {
  const [notes, setNotes] = useState();

  const addNote = (color) => {
    const tempNotes =
    {
      id: new Date(),
      title: "",
      text: "",
      time: Date.now(),
      color,
    };
    
    setNotes([ ...notes, tempNotes]);
  };

  const deleteNote = (id) => {
    const removeNote =[...notes].filter((note) => note.id !== id);
    setNotes(removeNote);
  };

  const updateTitle = (title, id) => {
    const updatedNotes = [...notes].map((note) => {
      if (note.id === id) {
        return { ...note, title };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const updateText = (text, id) => {
    const updatedNotes =  [...notes].map((note) => {
      if (note.id === id) {
        return { ...note, text };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  useEffect(() => {
    setNotes([...DataNotes]);
  }, []);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateTitle={updateTitle}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
