import * as React from 'react';
import { useState } from "react";
import './Dashboard.css'
import keep from '../Dashboard/keep.png'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import { ReorderOutlined } from '@mui/icons-material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Homee from '../../components/home/Home';
import SignOutPop from '../../components/Signout/Signout';
import Avatar from '@material-ui/core/Avatar';
import pic from "../../components/Signout/dp.jpg"
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';

import {
  Link, Switch, Route
} from "react-router-dom";
import Archive from '../Archive/Archive';
import Trash from '../Trash/Trash';
import { useHistory } from "react-router-dom";
import UserServices from '../../service/userservice';

const obj = new UserServices();
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

//avatar

//avatar

export default function Home() {

  // Drawer
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  // form
  const [show, setShow] = useState(false);
  const expand = () => {
    setShow(true);
  };

  const normal = () => {
    setShow(false);
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

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


  const openn = Boolean(anchorEl);
  const id = openn ? 'simple-popper' : undefined;



  return (
    <div className="dash">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <img src={keep} className='keep_logo' alt="keep image" />
            <Typography variant="h6" noWrap component="div">
              Fundoo Notes
            </Typography>
            <Search  >
              <SearchIconWrapper className='search'>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"

                sx={{ ml: 30, display: { sm: 'block' } }}
              >
                <RefreshIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"

                sx={{ ml: 2, display: { sm: 'block' } }}
              >
                <ReorderOutlined />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"

                sx={{ ml: 2, display: { sm: 'block' } }}
              >
                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                sx={{ ml: 4, display: { sm: 'block' } }}

              >
                <AppsIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"

                sx={{ ml: 2, mr: -7, display: { sm: 'block' } }}
              >
                <Avatar alt=""
                  src={pic}
                  type="button" onClick={handleClick} />
                <Popper id={id} open={openn} anchorEl={anchorEl} placement={'bottom'}>
                  <Box sx={{ border: 1, p: 5, bgcolor: 'background.paper', borderColor: '#cdcbcd' }}>
                    <div className="profile">
                      <div className="profile_content">
                        <img className="profile_pic" src={pic} alt="" />
                      </div>
                      <div className="profile_content">{localStorage.getItem('email')}</div>
                       <Button variant="text" size ="small" onClick ={signOut}>Sign Out</Button>  
                    </div>
                  </Box>
                </Popper>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
          </DrawerHeader>
          <Divider />
          <List>
            {['Notes', 'Reminders', 'Edit Labels', 'Archive', 'Bin'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index <= 0 ? <Link to="/Dashboard" >  <LightbulbOutlinedIcon /> </Link> : <InboxIcon /> && index <= 1 ? <NotificationsNoneIcon /> : <InboxIcon />
                    && index <= 2 ? <ModeEditOutlineOutlinedIcon /> : <InboxIcon />
                      && index <= 3 ? <Link to="/Dashboard/Archive" >      <ArchiveOutlinedIcon />   </Link> : <InboxIcon />
                        && index <= 4 ? <Link to="/Dashboard/Trash" >  <DeleteOutlineOutlinedIcon /> </Link> : <InboxIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Switch>
            <Route exact path="/Dashboard" component={Homee}>

            </Route>
            <Route exact path="/Dashboard/Archive" component={Archive}>

            </Route>
            <Route exact path="/Dashboard/Trash" component={Trash}>

            </Route>

          </Switch>
          {/* <Homee /> */}
        </Box>
      </Box>


    </div>
  );
}