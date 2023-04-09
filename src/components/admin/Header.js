import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {RiHomeLine} from "react-icons/ri";
import {BsFileBarGraph} from "react-icons/bs";
import {TbInbox } from "react-icons/tb";
import {MdOutlineListAlt} from "react-icons/md"
import {HiMenuAlt1} from "react-icons/hi";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { notifySuccess } from "../../utils/toastify";
import { useNavigate } from "react-router-dom";
import MainContent from './MainContent';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function logoutHandler() {
    notifySuccess("User logged out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{backgroundColor:"#111",display:"flex",justifyContent:"space-between"}}>
        <Tippy content="Expand">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <HiMenuAlt1/>
          </IconButton>
          </Tippy>
        { open && <IconButton style={{color:"white"}} onClick={handleDrawerClose}>
          <HiMenuAlt1/>
          </IconButton>}
        
          {/* Logout PART */ }
          <Tippy content="Log out">
          <Avatar onClick={logoutHandler} sx={{ m: 1, bgcolor: "red",cursor:"pointer"}}>
          <LockOutlinedIcon />
        </Avatar>
        </Tippy>
        </Toolbar>
      </AppBar>
      {/* DRAWER STARTS */ }
      <Drawer
      PaperProps={{
        sx: {
          height: 740,
          backgroundColor: "#111"
        }
      }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{backgroundColor:"#111",color:"#FFFFFF"}}>
        </DrawerHeader>
      <List style={{backgroundColor:"#111",color:"#FFFFFF",fontSize:"12px"}}>
          {['General', 'Subscribers', 'Data', 'Information','Views'].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon style={{color:"#FFFFFF"}}>
                {index===0&&<RiHomeLine/>}
                {index===1&&<BsFileBarGraph/>}
                {index===2&&<TbInbox/>}
                {index===3&&<MdOutlineListAlt/>}
                {index===4&&<BsFileBarGraph/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
       {/* DRAWER ENDS */ }

       {/*Essential for responsiveness when opening the drawer */}
       <Main open={open}>
       <DrawerHeader />

       {/*GRAPH SECTION */}
      <MainContent/>
     </Main>


    </Box>
  );
}