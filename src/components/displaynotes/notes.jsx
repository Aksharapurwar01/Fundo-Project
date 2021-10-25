import React, { useEffect } from "react";
import "./notes.css"
import UserServices from "../../service/userservice";
import Notes from "../Show Notes/ShowNotes";



const DisplayNotes = (props) => {
   
    const notesList = props.notesarr.map((index) => <Notes index={index} displayNote = {props.displayNote} handleClose = {props.handleClose} />);
  
    return <div className="displayNotes_main">{notesList}</div>;
};

export default DisplayNotes