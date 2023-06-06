import React from "react";
import noDataIllustration from "../../assets/noData.jpg";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h1>Notes</h1>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div className="no-data">
            <img src={noDataIllustration} alt="no data" />
            <h3>g ad ap ap</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;