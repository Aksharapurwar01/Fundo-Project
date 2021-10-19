import React, { Component } from 'react';
import CreateNote from '../createnote/createnote';
import Notes from '../displaynotes/notes';

export class Home extends Component {
    render() {
        return (
            <div>
                <CreateNote/>
                <Notes/>
                
            </div>
        )
    }
}

export default Home
