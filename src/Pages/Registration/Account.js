import React from "react";
import logo from './logoo.png';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './account.css';
import logotwo from './account (1).svg';
import signup from '../Signup/signup';



function Account() {
    return (
    <div class = "Main">
        <div class = "left">
            
        <div className = "fundologo">
        <h1>
        <span class="blue">F</span>
        <span class="red">u</span>
        <span class="yellow">n</span>
        <span class="blue">d</span>
        <span class="green">o</span>
        <span class="red">o</span>
      
        </h1>
              
        </div>
          
            <div class="heading">Create Your Fundoo Account</div>
            <div class="subhead">Continue to fundoo</div>
            <div class='name'>
                <TextField id="firstname" label="First name" variant="outlined" size='small' sx={{ mr: 2, width: '25ch' }} />
                <TextField id="lastname" label="Last name" variant="outlined" size='small'/>
            </div>
            <div class = "User-Name">
            <TextField id="user" label="Username" variant="outlined" size='small' sx={{ width: '50ch' }} />
            <div class='username-text'>You can use letters, numbers and periods</div>

            </div>
            <div class='credentials'>
                <TextField id="password" label="Password" variant="outlined" size='small' sx={{ mr: 2, width: '25ch' }} />
                <TextField id="confirm" label="Confirm" variant="outlined" size='small' />
           
            <div class='username-text'>
                Use 8 or more characters with a mix of letters, numbers and symbols
            </div>
            </div>
            <div class = 'checkbox'>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
            </FormGroup>
            </div>

            <Stack spacing={35} direction="row" sx={{ ml: 5, mb:5 }} >
                <p>Sign in instead</p>
                <Button variant="contained"  sx={{ height:'5ch' }} >Next</Button>
            </Stack>
        </div>
            <div class ="right">
            <img src = {logotwo} className = "logotwo"></img>

            </div>
            
    </div>
    )
}

export default Account
