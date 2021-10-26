import React from 'react';
import './Signout.css';
import pic from "./dp.jpg"
import UserServices from '../../service/userservice';
import Popper from '@material-ui/core/Popper';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';



const obj = new UserServices();

export default function UserSignout() {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const signOut = () => {
        localStorage.clear();
        obj.signOut().then((response) => {
            console.log(response);
            history.push("/");
        }).catch(error => {
            console.log(error);
        });
        history.push("/");
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            {/* <Avatar alt=""
                src={pic}
                type="button" onClick={handleClick} /> */}
            <Popper id={id} open={open} anchorEl={anchorEl} placement={'bottom'}>
                <Box sx={{ border: 1, p: 5, bgcolor: 'background.paper', borderColor: '#cdcbcd' }}>
                    <div className="profile">
                        <div className="profile_content">
                            <img className="profile_pic" src={pic} alt="" />
                        </div>
                        <div className="profile_content">{localStorage.getItem('email')}</div>
                         {/* <Button variant="text" size ="small" onClick ={signOut}>Sign Out</Button>  */}
                          
                        


                    </div>
                </Box>
            </Popper>
        </div>
    );
}