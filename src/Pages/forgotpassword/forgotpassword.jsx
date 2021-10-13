
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import React, { Component } from 'react'

export class forgotpassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
            password: "",
           
            passError: false,
        }
    }

    isValidated = () => {
        console.log("validation");
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !== '' ? false : true;
        errors.passError = this.state.password !== '' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.emailError || errors.passError
    }

    next = () => {
        var isValid = this.isValidated();
        if (!isValid) {
            console.log("Validation Sucessfull!");
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
                        <TextField fullWidth id="phonenumber-email" name="password" label="Password" variant="outlined" size='large' error={this.state.passError}
                            onChange={e => this.change(e)}
                            helperText={this.state.passError ? "Enter a password" : ''} />
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
