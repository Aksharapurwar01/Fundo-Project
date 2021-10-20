import React from "react";
import { useState } from "react";
import Icon from '../Icon/Icon';

const Notes = (props) => {

  const [newNote, setNewNote] = useState(false);

  const newNotes1 = () => {
    setNewNote(!newNote);
  };

 

  return (
    <div className="notes" onMouseEnter={newNotes1}>
      <div className="note1_content" style={{
        backgroundColor: props.index.color,
      }}>
        <h4>{props.index.title}</h4>
        <div className="content1">{props.index.description}</div>
        <div id = "icons">
          <Icon colorval = "update"
        />
        </div>
      </div>
    </div>

  );
};

export default Notes;