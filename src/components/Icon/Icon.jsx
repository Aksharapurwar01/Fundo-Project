import React, { Component } from 'react';
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ColorPalette from './ColorPalette';

const colors=[{
    code: '#FFFFFF',
},{
    code: '#f28b82',
},{
    code: '#fbbc04',
},{
    code: '#fff475',
},{
    code: '#ccff90',
},{
    code: '#a7ffeb',
},{
    code: '#cbf0f8',
},{
    code: '#aecbfa',
},{
    code: '#d7aefb',
},{
    code: '#fdcfe8',
},{
    code: '#e6c9a8',
},{
    code: '#e8eaed',
}]




export class Icon extends Component {
    render() {
        return (
            <>
                <AddAlertOutlinedIcon
                    style={{ fontSize: "large" }}
                ></AddAlertOutlinedIcon>
                <PersonAddOutlinedIcon
                    style={{ fontSize: "large" }}
                ></PersonAddOutlinedIcon>


                <ColorPalette />

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
