import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import UserServices from '../../service/userservice';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './account.css';
import logotwo from './account (1).svg';
import React, { Component } from 'react'
import { Snackbar, IconButton } from '@mui/material';

const obj = new UserServices();

export class Account extends Component {

    constructor(props) {
        super(props)  //props is used to take values as dynamic
    
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
            snackbaropen: false, 
            snackbarmsg: ""
             
        };
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

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
            let signupObj = {
                "firstName": this.state.fName,
                "lastName": this.state.lName, 
                "email": this.state.email,
                "password": this.state.password,
                "confirmpassword": this.state.confirmPassword,
                "service": "advance"
            }
            console.log(signupObj);
            obj.signup(signupObj).then((response)=>{
                console.log(response);
                this.setState({snackbaropen:true, snackbarmsg: "Signup Successfull!"});
                var timer  = setTimeout(function(){
                    window.location = '/'
                }, 1000);
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Signup Failed, Enter valid data"});
            })
        } else {
            this.setState({snackbaropen:true, snackbarmsg: "Please enter data!"})   

            
        }
        
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
            <Snackbar
            anchorOrigin= {{vertical:'bottom', horizontal:'right'}}
            open = {this.state.snackbaropen}
            autoHideDuration = {5000}
            onClose = {this.snackbarClose}

            message = {<span id= "message_id">{this.state.snackbarmsg}</span>}
            action ={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                X
            </IconButton>
            ]}
            />
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


