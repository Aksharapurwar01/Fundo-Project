import React, { Component } from 'react';
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import UserServices from '../../service/userservice';
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ColorPalette from './ColorPalette';

const obj = new UserServices();


const colors = [{
    code: '#FFFFFF',
}, {
    code: '#f28b82',
}, {
    code: '#fbbc04',
}, {
    code: '#fff475',
}, {
    code: '#ccff90',
}, {
    code: '#a7ffeb',
}, {
    code: '#cbf0f8',
}, {
    code: '#aecbfa',
}, {
    code: '#d7aefb',
}, {
    code: '#fdcfe8',
}, {
    code: '#e6c9a8',
}, {
    code: '#e8eaed',
}]
const ColorPalette = (props) => {                             //function
    const [anchorEl, setAnchorEl] = React.useState(null);     //


    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);  //
    };

    const open = Boolean(anchorEl); //

};

    

export class Icon extends Component {

    colordemo = (val) => {
        return (
            <div className="color">
                <div className="palette_main"
                    style={{
                        backgroundColor: val.code,  //color code
                        color: val.code,

                    }}
                    onClick={() => {
                        props.putColor(val);
                        handleClick()
                    }}
                >
                </div>
            </div>)
    }


    onSetColor = (color) => {
        if (this.props.colorval === "update") {
            let Data = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(Data).then((response) => {
                console.log(response);
                window.location.reload();
                this.props.displayNotes();
            }).catch(error => {
                console.log(error);
            });
        } else {
            this.props.getcolor(color.code);
        }
    }


    render() {
        return (
            <>
                <AddAlertOutlinedIcon
                    style={{ fontSize: "large" }}
                ></AddAlertOutlinedIcon>
                <PersonAddOutlinedIcon
                    style={{ fontSize: "large" }}
                ></PersonAddOutlinedIcon>
                <ColorLensOutlinedIcon onClick={handleClick} />
                <Popper open={open} anchorEl={anchorEl} placement={'top-start'} transition>
                    <div className="poppor">{colors.map(colordemo)}</div>
                </Popper>
                <ImageOutlinedIcon
                    style={{ fontSize: "large" }}
                ></ImageOutlinedIcon>
                <ArchiveOutlinedIcon
                    style={{ fontSize: "large" }}
                ></ArchiveOutlinedIcon>
                <MoreVertOutlinedIcon
                    style={{ fontSize: "large" }}
                ></MoreVertOutlinedIcon>

            </>
        )
    }
}

export default Icon
