
import './forgotemail.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


import React, { Component } from 'react'

export class forgotemail extends Component {
    render() {
        return (
            
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

                    <div className="forgot-text">Find your email</div>
                    <div className="subforgot-text">Enter your phone number or recovery email</div>

                    <div className='phonenumber-email'>
                        <TextField fullWidth id="phonenumber-email" label="Phone number or email" variant="outlined" size='large' />
                    </div>

                    <div className="end">
                        <Button variant="contained">Next</Button>
                    </div>

                </div>

            
        )
    }
}

export default forgotemail


