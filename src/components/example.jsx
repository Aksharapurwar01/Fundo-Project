import React, { Component } from 'react'
import Button from '@mui/material/Button';

export class example extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg : ''
        }
    }

    buttonn = () =>{
        this.setState({
            msg:'helllo'
        })
    }
    

    render() {
        return (
            <div>
                <Button onclick  ={this.buttonn}></Button>

                
            </div>
        )
    }
}

export default example
