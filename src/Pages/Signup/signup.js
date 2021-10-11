import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import { height } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function signup() {
    return (
        <div class="div1">
            <div class = "fundologoo">
                    <h2>
                    <span class="blue">F</span>
                    <span class="red">u</span>
                    <span class="yellow">n</span>
                    <span class="blue">d</span>
                    <span class="green">o</span>
                    <span class="red">o</span>
                
                    </h2>
              
           </div>
            <p id="p1">Sign in</p>
            <p id="p2">Use your Google Account</p>
            <div class = "User-Name">

            <TextField id="user" label="Username" variant="outlined" size='large' sx={{ width: '53ch' }} />
            <a id="a1" href="#">Forgot email?</a>

           
            </div>

            <div class='credentials'>
                <TextField id="password" label="Password" variant="outlined" size='large' sx={{ mr: 2, width: '25ch' }} />
                
            </div>    

            <div>
            <p class="p3">Not your computer? Use a Private Window to sign in.</p>
            </div>
            <Stack spacing={30} direction="row" sx={{ ml: 3, mb:5, mt:5 }} >
                <p class = "p7">Create Account</p>
                <Button variant="contained"  sx={{ height:'5ch' }} >Next</Button>
            </Stack>
           
            
    </div>
     
    )
}

export default signup
