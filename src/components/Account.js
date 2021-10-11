import React from "react";
import logo from "./assests/logoo.png";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



function Account() {
    return (
    <div class = "Main">
            <img src = {logo} className = "fundologo"></img>
          
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
                <Button variant="contained"  sx={{ height:'5ch' }}>Next</Button>
            </Stack>
            
        </div>
    )
}

export default Account
