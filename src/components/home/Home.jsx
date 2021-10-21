import React, { Component } from 'react';
import CreateNote from '../createnote/createnote';
import Notes from '../displaynotes/notes';
import UserServices from '../../service/userservice';

const obj = new UserServices();

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notesarr: []
        }
    }

    displayNote = () => {
        obj.getAllNotes()
            .then((response) => {
                // this.setState({
                //     notesarr: response.data.data.data
                // })

                var newarr = []
                response.data.data.data.filter((index) => {
                   
                   if(index.isArchived != true && index.isDeleted != true) {
                       newarr.push(index)
                   }

                })
                this.setState({
                    notesarr : newarr
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.displayNote();
    }

    render() {
        console.log(this.state.notesarr);
        return (
            <div>
                <CreateNote displayNote={this.displayNote} />
                <Notes notesarr = {this.state.notesarr} displayNote={this.displayNote} />

            </div>
        )
    }
}

export default Home
