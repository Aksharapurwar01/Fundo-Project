import './forgotemail.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserServices from '../../service/userservice';
import { Snackbar, IconButton } from '@mui/material';

import React, { Component } from 'react'

const obj = new UserServices();

export class forgotemail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",

            emailError: false,

        }
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    isValidated = () => {
        console.log("validation");
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !== '' ? false : true;


        this.setState({
            ...errors
        })
        return isError = errors.emailError || errors.passError
    }

    next = () => {
        var isValid = this.isValidated();
        if (!isValid) {
            console.log("Validation Sucessfull!");

            let forgotObj = {
                "email": this.state.email,
            }
            console.log(forgotObj);
            obj.forgot(forgotObj).then((response) => {
                console.log(response);
                this.setState({ snackbaropen: true, snackbarmsg: "Sent link to email!" });
                // var timer  = setTimeout(function(){
                //     window.location = '/resetpassword'
                // }, 2000);
                // this.props.history.push("/resetpassword");
            }).catch((error) => {
                console.log(error);
                this.setState({ snackbaropen: true, snackbarmsg: "Enter valid email!" })
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

                <div className="forgot-text">Find your email</div>
                <div className="subforgot-text">Enter your phone number or recovery email</div>

                <div className='phonenumber-email'>
                    <TextField fullWidth id="phonenumber-email" name="email" label="Phone number or email" variant="outlined" size='large' error={this.state.emailError}
                        onChange={e => this.change(e)}
                        helperText={this.state.emailError ? "Enter email or phone" : ''} />
                </div>

                <div className="end">
                    <Button variant="contained" onClick={this.next}>Next</Button>
                </div>

            </div>


        )
    }
}

export default forgotemail


