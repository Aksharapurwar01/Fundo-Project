import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import UserServices from '../../service/userservice';
import MenuItem from '@material-ui/core/MenuItem';
import "./Collaborator.scss"
import DialogActions from '@mui/material/DialogActions';
import { MenuList } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import pic from "../../components/Signout/dp.jpg"
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import Stack from '@mui/material/Stack';



const obj = new UserServices();

const styles = {
    underline: {
        marginLeft: '20px',
        marginTop: '10px',
        width: '400px',
        height: '500px',
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};

class Collaborator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            collabData: [],
            collabarr: [
                {
                    firstName: localStorage.getItem('firstName'),
                    lastName: localStorage.getItem('lastName'),
                    email: localStorage.getItem('email'),
                    userId: localStorage.getItem('token')
                }
            ],

        }

    }


    handleClickOpen = () => {
        console.log("hello dialog box");
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log("bye bye dialog box");
        this.setState({ open: false });

    }


    handleInput = (e) => {
        console.log(e.target.value);
        console.log("handle input");
        if (e.target.value != "") {
            let Data = {
                searchWord: e.target.value
            }
            obj.searchCollaborator(Data).then((response) => {
                this.setState({
                    collabData: response.data.data.details
                });
            }).catch(error => {
                console.log(error);
            });
        }
        else if (e.target.value === "") {
            this.empty()
        }

    }

    empty = () => {
        this.setState({
            collabData: [],

        })
    }

    getUser = (e) => {
        console.log("getuser");
        let newArr = this.state.collabarr.slice();
        newArr.push(e);
        this.setState({ some: 'val', collabarr: newArr });
        console.log(this.state.collabarr);
    }
    
    saveCollab = () => {
        console.log("hello save");
        let get = this.state.collabarr.slice(1)
        this.props.getNotes(get)
        this.setState({
            collabData: []
        });
        this.props.getCloseStatus(false);
    }








    render() {
        const { classes } = this.props;
        const userList = this.state.collabData.map((values, index) => {
            return (
                <MenuItem key={index} onClick={(e) => this.getUser(values)}>
                    {values.email}
                </MenuItem>
            );
        });

        const userData = this.state.collabarr.map((values, index) => {
            return (

                <div class="main-collb">
                    <div className="intro">
                        <Avatar
                            type="button" style={{backgroundColor:"blueviolet"}} >{values.firstName.charAt(0)}</Avatar>
                        <div className="name-txt">{values.firstName} {values.lastName}</div></div>
                    <div className="email-txt">{values.email}</div>

                </div>



            )
        })
        return (
            <div>
                <PersonAddOutlinedIcon style={{ fontSize: "large" }} onClick={this.handleClickOpen} />


                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Collaborators</DialogTitle>

                    <DialogContent dividers>
                        <Stack spacing={2} direction="column" sx={{ ml: 5,}} >
                            {userData}
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ ml: 5, mt:2 }} >
                            <Avatar>
                                <PersonAddRoundedIcon />
                            </Avatar>

                            <TextField

                                name="collaborators"
                                multiline
                                InputProps={{ disableUnderline: true }}
                                placeholder="Person or email to share with "
                                onChange={this.handleInput}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Paper>

                                <MenuList

                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    className="menulist"

                                >
                                    {userList}
                                </MenuList>

                            </Paper>
                        </Stack>

                    </DialogContent>



                    <DialogActions style ={{backgroundColor : "#ededed"}}>
                        {/* <Button class = "collbbtn" onClick={this.handleClose}>Cancel</Button>
                        <Button class = "collbbtn"  onClick={this.handleClose}>Save</Button> */}
                        <Typography variant="button" display="block" gutterBottom onClick={this.saveCollab}>
                            Save
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom onClick={this.handleClose}>
                            Cancle
                        </Typography>
                    </DialogActions>


                </Dialog>

            </div >

        );
    }
}

export default withStyles(styles)(Collaborator);