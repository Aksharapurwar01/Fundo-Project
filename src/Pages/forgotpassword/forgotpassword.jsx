import UserServices from '../../service/userservice';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Snackbar, IconButton } from '@mui/material';

import React, { Component } from 'react'

const obj = new UserServices();

export class forgotpassword extends Component {

    constructor(props) {
        super(props)

        this.state = {

            password: "",
            passError: false,
            password: "",
            confirmPassword: "",
            passError: false,
            confirmPassError: false,
            snackbaropen: false,
            snackbarmsg: ""
        }
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    isValidated = () => {
        console.log("validation");
        let isError = false;
        const errors = this.state;
        errors.passError = this.state.password !== '' ? false : true;
        errors.confirmPassError = this.state.confirmPassword !== '' ? false : true;
        this.setState({
            ...errors
        })
        return isError = errors.passError || errors.confirmPassError
    }

    next = () => {
        var isValid = this.isValidated();
        if (!isValid) {
            console.log("Validation Sucessfull!");
            let resetObj = {
                "newPassword": this.state.password,
                "confirmPassword": this.state.confirmPassword
            }
            console.log(resetObj);
            obj.reset(resetObj).then((response) => {
                console.log(response);
                this.setState({ snackbaropen: true, snackbarmsg: "Password is reset!" })
                var timer = setTimeout(function () {
                     window.location = '/'
                }, 2000);
            }).catch((error) => {
                console.log(error);
                this.setState({ snackbaropen: true, snackbarmsg: "Enter valid password!" })
            })
        } else {
            this.setState({ snackbaropen: true, snackbarmsg: "Please enter data!" })



        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {

        return (
            <div>

                <div className="forgot-main">
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

                    <div className="fundologoo">
                        <h2>
                            <span class="blue">F</span>
                            <span class="red">u</span>
                            <span class="yellow">n</span>
                            <span class="blue">d</span>
                            <span class="green">o</span>
                            <span class="red">o</span>

                        </h2>

                    </div>

                    <div className="forgot-text">Find your password</div>
                    <div className="subforgot-text">Enter your phone number or recovery email</div>

                    <div className='phonenumber-email'>
                        <TextField fullWidth id="password" name="password" label="password" variant="outlined" size='large' error={this.state.passError}
                        onChange={e => this.change(e)}
                        helperText={this.state.passError ? "Enter new password" : ''}/>
                    </div>
                    <div className='phonenumber-email'>
                        <TextField fullWidth id="confirmpassword" name="confirmPassword" margin="dense" label="confirm password" variant="outlined" size='large' error={this.state.confirmPassError}
                        onChange={e => this.change(e)}
                        helperText={this.state.confirmPassError ? "Enter a confirm password" : ''} />
                    </div>

                    <div className="end">
                        <Button variant="contained" onClick={this.next}>Next</Button>
                    </div>

                </div>

            </div>
        )
    }
}

export default forgotpassword
