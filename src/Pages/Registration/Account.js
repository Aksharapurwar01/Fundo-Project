import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './account.css';
import logotwo from './account (1).svg';
import React, { Component } from 'react'

import {
    signup 
} from '../../service/axioxsservice';


export class Account extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            fName: "",
            lName: "",
            email: "",
            password: "",
            confirmPassword: "",
            fNameError: false,
            lNameError: false,
            emailError: false,
            passError: false,
            confirmPasswordError: false,
             
        };
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.fNameError = this.state.fName !=='' ? false : true;
        errors.lNameError = this.state.lName !=='' ? false : true;
        errors.emailError = this.state.email !== ''? false : true;
        errors.passError = this.state.password !== '' ? false : true;
        errors.confirmPasswordError = this.state.confirmPassword !== '' ? false : true;


        this.setState({
            ...errors
        })

        return isError = errors.fNameError || errors.lNameError || errors.emailError || errors.passError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }
        let signupObj = {
            "firstName": this.state.fName, 
            "lastName": this.state.lName, 
           
            "email":this.state.email,
            "password" : this.state.password,
            "service" : "advance"
            
        }
        console.log(signupObj);
        signup(signupObj).then(function(response){
            console.log(response);
            
        }).catch(function(error){
            console.log(error);
        })
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        return (
            <div class = "Main">
            <div class = "left">
                
            <div className = "fundologo">
            <h2>
            <span class="blue">F</span>
            <span class="red">u</span>
            <span class="yellow">n</span>
            <span class="blue">d</span>
            <span class="green">o</span>
            <span class="red">o</span>
          
            </h2>
                  
            </div>
              
                <div class="heading">Create Your Fundoo Account</div>
                <div class="subhead">Continue to fundoo</div>
                <div class='name'>
                    <TextField id="firstname" name = "fName" label="First name" variant="outlined" size='small' sx={{ mr: 2, width: '25ch' }}error = {this.state.fNameError}
                      onChange = {e => this.change(e)}
                      helperText = {this.state.fNameError ? "Enter first name" : ''} />
                    <TextField id="lastname" name="lName" label="Last name" variant="outlined" size='small'
                    error = {this.state.lNameError}
                    onChange = {e => this.change(e)}
                    helperText = {this.state.fNameError ? "Enter last name" : ''} />
                </div>
                <div class = "User-Name">
                <TextField id="user" label="Username" name="email" variant="outlined" size='small' sx={{ width: '45ch' }} 
                error = {this.state.emailError}
                onChange = { e => this.change(e)}
                helperText = {
                    this.state.emailError ? "Enter Your Username" : ''}/>
                <div class='username-text'>You can use letters, numbers and periods</div>
    
                </div>
                <div class='credentials'>
                    <TextField id="password" name="password" label="Password" variant="outlined" size='small' sx={{ mr: 2, width: '25ch' }}
                     error = {this.state.passError}
                     onChange = { e=> this.change(e)}
                     helperText={this.state.passError ?"Enter a password" : ''} />
                    <TextField id="confirm" name="confirmPassword" label="Confirm" variant="outlined" size='small' 
                     error = {this.state.confirmPasswordError}
                     onChange = { e=> this.change(e)}
                     helperText={this.state.confirmPasswordError ? "Confirm your Password" : ''}/>
               
                <div class='username-text'>
                    Use 8 or more characters with a mix of letters, numbers and symbols
                </div>
                </div>
                <div class = 'checkbox'>
                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
                </FormGroup>
                </div>
    
                <Stack spacing={33} direction="row" sx={{ ml: 5, mb:5 }} >
                    <p>Sign in instead</p>
                    <Button variant="contained"  sx={{ height:'5ch' }} onClick={this.next} >Next</Button>
                </Stack>
            </div>
                <div class ="right">
                <img src = {logotwo} className = "logotwo"></img>
                <div className = "logotwo-text">  One account. All of Fundoo working for you.</div> 
    
                </div>
                
        </div> 
        )
    }
}

export default Account


