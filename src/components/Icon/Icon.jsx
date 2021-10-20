import React, { Component } from 'react';
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import UserServices from '../../service/userservice';
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ColorPalette from './ColorPalette';

const obj = new UserServices();


export class Icon extends Component {

    onSetColor = (color) => {
        if (this.props.colorval === "update") {
            let Data = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(Data).then((response) => {
                console.log(response);
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


                <ColorPalette
                    putColor={(Data) => {
                        this.onSetColor(Data);
                    }} />

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
