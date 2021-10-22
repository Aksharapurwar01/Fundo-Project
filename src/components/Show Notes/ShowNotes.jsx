import Icon from '../Icon/Icon';
import UserServices from '../../service/userservice';
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@mui/material/Button';
import './ShowNotes.css';


const obj = new UserServices();

export class Notes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newNote: false,
            open: false,
            title : '',
            description: ''
        }
    }

    newNotes1 = () => {
        this.setState({ newNote: true });
    };

    handleClickOpen = () => {
        console.log("hello dialog box");
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log("bye bye dialog box");
        this.setState({ open: false });

    }
    //changing the value
    
    //update function
    onUpdate = () => {
        let updateData = {
            noteId: this.props.index.id,
            title: this.state.title,
            description: this.state.description,
        };
        obj.updateNotes(updateData).then((response) => {
            console.log(response);
            console.log("update");
            this.setState({ open: false });
            this.props.displayNote();
        }).catch(error => {
            console.log(error);
            this.setState({ open: false });
        })
    }

    handleInput = (e) => {
        console.log("values changed");
        this.setState({
            [e.target.name]: e.target.value
        });
        
        console.log(e.target.value);
    }
        

    render() {
        const { classes } = this.props;
        return (


            <div className="notes" onMouseEnter={this.newNotes1}>
                {/* adding dialog box */}
                <div>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <div style={{
                            backgroundColor: this.props.index.color,
                        }}
                            className="popup"
                        >
                            <p>
                                <input
                                    className="input1"
                                    name="title"
                                    defaultValue={this.props.index.title}
                                    multiline
                                    onChange={this.handleInput}
                                    style={{
                                        backgroundColor: this.props.index.color
                                    }}
                                />
                                <input
                                    className="input2"
                                    name="description"
                                    defaultValue={this.props.index.description}
                                    multiline
                                    onChange={this.handleInput}
                                    style={{
                                        backgroundColor: this.props.index.color
                                    }}
                                />
                            </p>
                            <div className="dialog_icon">
                                <Icon
                                    archive={() => {
                                        this.props.onArchive();
                                        this.setState({ open: false });
                                    }}
                                    delete={() => {
                                        this.props.onDelete();
                                        this.setState({ open: false });
                                    }}
                                    colorval="update"
                                    val={this.props.index}
                                    id={this.props.index.id}
                                    getColor={this.handleColor}
                                    displayNote={this.props.displayNote}
                                    archiveNotes="archiveUpdate"
                                />
                                <Button className="button" onClick={this.onUpdate}>Close</Button>
                            </div>

                        </div>
                    </Dialog>
                </div>


                {/* adding dialog box */}

                <div className="note1_content" style={{
                    backgroundColor: this.props.index.color,
                }}  >
                    <h4>{this.props.index.title}</h4>
                    <div className="content1" onClick={this.handleClickOpen}>{this.props.index.description}</div>
                    <div id="icons">
                        <Icon colorval="update"
                            val={this.props.index}
                            id={this.props.index.id}
                            displayNote={this.props.displayNote}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;