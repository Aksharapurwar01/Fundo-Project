import React from 'react'

function example2() {

    const[msg, buttonn] = React.useState('')  //buttonn is used for changing the state, msg : state the
    
    const pop = ()=>{
        buttonn("hello");
    }

    

    

    return (
        <div>
            <Button onclick = {pop()}></Button>
        </div>
    )
}

export default example2
