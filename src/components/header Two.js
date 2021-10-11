import React from "react";

function HeaderTwo (props){

    const[name, setName] = React.useState("komalll")
     
    return (
        <div>I am {name} {props.size}</div>
    )
}

export default HeaderTwo;