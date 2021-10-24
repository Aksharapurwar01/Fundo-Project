import React, { Component } from 'react'
import DisplayNotes from '../../components/displaynotes/notes'
import UserServices from '../../service/userservice'
import Dashboard from '../Dashboard/Dashboard'
import DashboardArchive from '../Dashboard/Dashboard-archive'

const obj = new UserServices();

export class Trash extends Component {
    constructor(props) {
        super(props)

        this.state = {
             notesarr: []
        }
    }

    trashNote = () => {
        console.log("trash");
        obj.getTrashNotes()
        .then((response) => {
            var newarr=[]
            response.data.data.data.filter((index) => {
                if(index.isArchived !=true && index.isDeleted === true) {
                    newarr.push(index)
                }
            })
            this.setState({
                notesarr: newarr
            })
        })
        .catch((error) => {
          console.log(error);
        });
    }
    componentDidMount() {
        this.trashNote();
    }

    render() {
        console.log(this.state.notesarr);
        return (
            <div>
             
                <DisplayNotes notesarr = {this.state.notesarr} displayNote={this.trashNote}/>
                <DashboardArchive />
            </div>
        )
    }
}

export default Trash