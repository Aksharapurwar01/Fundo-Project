import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpanded, setExpanded] = React.useState(false);
    const [note, setNote] = React.useState({ title: "", content: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function addNote(event) {
        props.onAdd(note);
        setNote({ title: "", content: "" });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={addNote}>
                        
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>

    </div >
  );
}

export default CreateArea;