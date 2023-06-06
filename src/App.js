import React, { useEffect, useState } from "react";

import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/SideBar/Sidebar";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const tempNotes =
    {
      id: new Date().getTime() + Math.random,
      title: "",
      text: "",
      time: Date.now(),
      color,
    };
    
    setNotes([tempNotes, ...notes]);
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
    setNotes([]);
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
