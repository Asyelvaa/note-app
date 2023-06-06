import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import "./Note.css";


function Note(props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const formatDate = (value) => {
    if (!value) return "";
  
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    let hrs = date.getHours();
    let min = date.getMinutes();
    let day = date.getDate();
    const month = monthNames[date.getMonth()];
  
    hrs = hrs.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    day = day.toString().padStart(2, "0");
  
    return `${hrs}:${min} ${day} ${month}`;
  };
  

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateText = (event) => {
    setText(event.target.value);
  };

  const deleteNote = () => {
    props.deleteNote(props.note.id);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <input
        type="text"
        className="note_title"
        value={title}
        placeholder="Enter title"
        onChange={updateTitle}
      />
      <textarea
        className="note_text"
        value={text}
        placeholder="Enter text"
        onChange={updateText}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <RiCloseCircleLine
          alt="DELETE"
          className="note_delete"
          onClick={deleteNote}
        />
      </div>
    </div>
  );
}

export default Note;

