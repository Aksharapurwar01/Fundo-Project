import React, { Component } from 'react'
import './signup.css';
import TextField from '@mui/material/TextField';
import UserServices from '../../service/userservice';
import Button from '@mui/material/Button';
import { Snackbar, IconButton } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  const obj = new UserServices();



export class signup extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passError: false,
            snackbaropen: false, 
            snackbarmsg: ""
        }
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };
    
    
    isValidated = () => {
        console.log("validation");
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !=='' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.emailError || errors.passError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
            let signinObj = {
                "email": this.state.email,
                "password": this.state.password,
            }
            console.log(signinObj);
            obj.signin(signinObj).then((response)=>{
                console.log(response);
                localStorage.setItem("token", response.data.id);
                localStorage.setItem("firstName", response.data.firstName);
                localStorage.setItem("email", response.data.email);
                console.log(response.data.id);
              
                this.setState({snackbaropen:true, snackbarmsg: "Signin Successful!"})
                var timer  = setTimeout(function(){
                     window.location = '/Dashboard'
                }, 1000);
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Signin Failed, Enter valid data"})
            })
        }  else {
            this.setState({snackbaropen:true, snackbarmsg: "Please enter valid data!"})

        }

    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    render() {
        console.log(this.state);
        return (
           
        <div class = "sign-main">
            <Snackbar
            anchorOrigin= {{vertical:'bottom', horizontal:'right'}}
            open = {this.state.snackbaropen}
            autoHideDuration = {6000}
            onClose = {this.snackbarClose}

            message = {<span id= "message_id">{this.state.snackbarmsg}</span>}
            action ={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                X
            </IconButton>
            ]}
            />
    
        <div className = "fundologoo">
           <h2>
        <span class="blue">F</span>
        <span class="red">u</span>
        <span class="yellow">n</span>
        <span class="blue">d</span>
        <span class="green">o</span>
        <span class="red">o</span>
    
          </h2>
            
        </div>

        <div class="sign-text">Sign in</div>
        <div class="subsign-text">Use your Google Account</div>

        
        <div class='email-phone'>
            <TextField fullWidth  id="email-phone" name="email" label="Email or phone" variant="outlined" size='large' error={this.state.emailError}
                    onChange={e => this.change(e)}
                    helperText={this.state.emailError ? "Enter email or phone" : ''}/>
        </div>

        <div class='forgot-email'>
        <Link   underline="none" to ="/forgotemail">Forgot email?</Link>
        </div>

        <div class = "password">
        <TextField fullWidth  id="password" label="Password" name="password" variant="outlined" size='large' margin="dense"   error={this.state.passError}
                    onChange={e => this.change(e)}
                    helperText={this.state.passError ? "Enter a password" : ''} />
        </div>

        <div class='forgot-password'>
        <Link   underline="none" to ="/forgotpassword">Forgot password?</Link>
        </div>

        <div class="mid-text">Not your computer? Use Guest mode to sign in privately.</div>
        <div class="learn">Learn more</div>

        <div class="last-section">
        <Link  class="create-account" to= "/account" >Create account </Link>
           <Button variant="contained"  sx={{ height:'5ch' , width:'8ch' }} onClick={this.next} >Next</Button>
        </div>

    </div>
        )
    }
}

export default signup


