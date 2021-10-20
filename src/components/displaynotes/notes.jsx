import React, { useEffect } from "react";
import "./notes.css"
import UserServices from "../../service/userservice";
import Notes from "../Show Notes/ShowNotes";

const obj = new UserServices();

const DisplayNotes = () => {
    const [notesArray, setArray] = React.useState([]);

    useEffect(() => {
      obj.getAllNotes()
        .then((response) => {
          setArray(response.data.data.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
    });
  
    
  
    const notesList = notesArray.map((index) => <Notes index={index} />);
  
    return <div className="displayNotes_main">{notesList}</div>;
};

export default DisplayNotes