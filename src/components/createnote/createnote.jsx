import React, { Component } from 'react';
import "./createnote.css";


import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Snackbar } from '@mui/material';
import UserServices from '../../service/userservice';
import 'material-design-inspired-color-picker';
import Icon from '../Icon/Icon';






const obj = new UserServices();

export class createnote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            hide: true,
            title: "",
            description: "",
            snackbaropen: false,
            snackbarmsg: "",
            color: "",
            isArchived: false,
            isDeleted : false  //set delete value false initial



        }
    }


    snackbarClose = () => {
        this.setState({ snackbaropen: false });
    };


    expandIt = () => {
        this.setState({
            show: true,
            hide: false,


        })
    }

    change = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }

    //color

    handleColor = (data) => {
        this.setState({
            color: data
        });

    }

    //archive
    handleClose = () => {
        this.setState({
            isArchived: true
        })
    }




    normal = () => {
        this.setState({
            show: false,
            hide: true,


        })


        let addnotesObj = {
            "title": this.state.title,
            "description": this.state.description,
            "color": this.state.color,
            "isArchived" : this.state.isArchived,
            "isDeleted" : this.state.isDeleted,

        }
        console.log(addnotesObj);
        obj.addNotes(addnotesObj).then((response) => {
            console.log(response);
            this.setState({ snackbaropen: true, snackbarmsg: "Added Notes Sucessfully" });
            this.props.displayNote();
        }).catch((error) => {
            console.log(error);
            this.setState({ snackbaropen: true, snackbarmsg: "Adding Notes Failed!" });
        })

        obj.getAllNotes().then((response) => {
            console.log(response);
            this.setState({
                notes: response.data
            });
        }).catch((error) => {
            console.log(error);
        })





    };

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />

                <div className="note-title">
                    {this.state.hide && (
                        <form id="note-title-form1">

                            <input className="form-input-2" aria-label="empty textarea" placeholder="Take a Note..." onDoubleClick={this.expandIt} />
                            <div className="Notesicon">
                                <IconButton size="large" >
                                    <CheckBoxOutlinedIcon />
                                </IconButton>
                                <IconButton size="large" >
                                    <BrushOutlinedIcon className="paint" />
                                </IconButton>
                                <IconButton size="large" >
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </div>

                        </form>
                    )}

                    {this.state.show && (
                        <form id="note-title-form2" style ={{
                            backgroundColor : this.state.color
                        }}>
                            <p>
                                <input
                                    className="form-input-1"
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    onChange={e => this.change(e)}
                                    style={{
                                        backgroundColor: this.state.color
                                    }
                                    }

                                />
                                <input name="description" className="form-input-2" aria-label="empty textarea" placeholder="Take a Note..."
                                    onChange={e => this.change(e)}
                                    style={{
                                        backgroundColor: this.state.color
                                    }
                                    }

                                />

                            </p>
                            <div id="icons">
                                <Icon colorval="create"
                                    val={this.state}
                                    getcolor={this.handleColor}
                                    archiveCreate = {this.handleClose}
                                    deleteCreate = {this.handleClose}
                                    displayNote = {this.props.displayNote} />

                                {/* <UndoOutlinedIcon style={{ fontSize: "large" }}></UndoOutlinedIcon>
                                <RedoOutlinedIcon style={{ fontSize: "large" }}></RedoOutlinedIcon> */}
                                <Button className="button" style={{ fontSize: "small" }} onClick={this.normal}>Close</Button>
                            </div>


                        </form>
                    )}



                </div>

            </div>
        )
    }
}

export default createnote



