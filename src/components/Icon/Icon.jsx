import React, { Component } from 'react';
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import UserServices from '../../service/userservice';
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ColorPalette from './ColorPalette';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Person from './collaborator';


const obj = new UserServices();


export class Icon extends Component {

    constructor(props) {
        super(props)

        this.state = {
            anchorE1: null,
            openStatus: false,
        }
    }

    //Menu

    onSetMenu = (event) => {
        this.setState({

            anchorE1: event.currentTarget

        })
    }

    handleClose = () => {
        this.setState({
            anchorE1: null,
        })
    }

    dialogopen = () => {
        this.setState({
            openStatus: true
        });
    }


    //color
    onSetColor = (color) => {
        if (this.props.colorval === "update") {
            let Data = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(Data).then((response) => {
                console.log(response);

                this.props.displayNote(); //display notes page funtion
            }).catch(error => {
                console.log(error);
            });
        } else {
            this.props.getcolor(color.code);
        }
    }

    //archive
    onArchive = () => {
        let archive = {
            noteIdList: [this.props.val.id],
            isArchived: true,
        };

        obj.archiveNotes(archive).then((response) => {
            console.log(response);
            this.props.displayNote();  //home displaynote ,notes arr
            this.props.handleClose();
        }).catch(error => {
            console.log(error);
        })
        console.log(archive);
    }

    // archive complete

    //delete
    onDelete = () => {
        let deleteNote = {
            noteIdList: [this.props.val.id],
            isDeleted: true,
        };

        obj.deleteNotes(deleteNote).then((response) => {
            console.log(response);
            console.log("display notes in bottom is deleted");
            this.props.displayNote();
            this.props.handleClose();
        }).catch(error => {
            console.log(error);
        })
        console.log(deleteNote);
    }


    onSetStatus = (val) => {
        this.setState({
            openStatus: val
        });
    }


    render() {
        return (
            <>
                <AddAlertOutlinedIcon
                    style={{ fontSize: "large" }}
                ></AddAlertOutlinedIcon>

                <Person getCloseStatus={(Data) => {
                    this.onSetStatus(Data);
                }} 
                getNotes={this.props.getNotes} />

                <ColorPalette
                    putColor={(Data) => {
                        this.onSetColor(Data);
                    }} />

                <ImageOutlinedIcon
                    style={{ fontSize: "large" }}
                ></ImageOutlinedIcon>
                <ArchiveOutlinedIcon
                    style={{ fontSize: "large" }}
                    onClick={() => {
                        if (this.props.colorval === "update") {
                            console.log("hello small form");
                            this.onArchive()
                        }
                        else {
                            console.log("hello2 bigger form");
                            this.props.archiveCreate()
                        }
                    }}

                ></ArchiveOutlinedIcon>
                <MoreVertOutlinedIcon
                    style={{ fontSize: "large" }} onClick={this.onSetMenu}
                ></MoreVertOutlinedIcon>
                <Menu
                    id="basic-menu"
                    anchorEl={this.state.anchorE1}
                    open={Boolean(this.state.anchorE1)}
                    onClose={this.handleClose}
                    style={{ fontSize: "small" }}

                >
                    <MenuItem onClick={() => {
                        if (this.props.colorval === "update") {
                            console.log("delet");
                            this.onDelete()
                            this.handleClose()
                        }
                        else {
                            this.props.deleteCreate()
                        }
                    }
                    }>Delete Note</MenuItem>
                    <MenuItem >Add Label</MenuItem>
                    <MenuItem >Add Drawing</MenuItem>
                    <MenuItem >Make a Copy</MenuItem>
                    <MenuItem >Show Checkboxes</MenuItem>
                    <MenuItem >Copy to Google docs</MenuItem>
                </Menu>

            </>
        )
    }
}

export default Icon
