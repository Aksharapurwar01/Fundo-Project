import React from "react";

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Akshara"


        }
    }

    render() {
        return(
            <div>Hello I am {this.state.name}</div>
        )
    }
}

export default Header;