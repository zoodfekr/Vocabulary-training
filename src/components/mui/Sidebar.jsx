import * as React from 'react';
import { useEffect, useState, useRef, Suspense, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { RiFileWord2Fill } from "react-icons/ri";
import AntSwitch from './AntSwitch';
import AppContext from '../../context/Context';
import { GiNightSleep } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import { AiOutlineFileWord } from "react-icons/ai";
import RadioButtonsGroup from './Radio group';






const drawerWidth = 240;
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

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
	const { setmode } = useContext(AppContext);
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar className='w-100' >
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>


					<Typography variant="h6" Wrap component="div" className=' d-flex'>
						<Typography variant="h6" component="div" className='' noWrap >
							<RiFileWord2Fill style={{ color: "yellow", fontSize: '50px' }} className='mx-2'></RiFileWord2Fill>
							تمرین لغت
						</Typography>
						{/*
						<Typography component="div" className='mx-5 d-flex align-items-center'>
							<AntSwitch onClick={() => setmode((prevLoading) => !prevLoading)}></AntSwitch>
						</Typography> */}

					</Typography>


				</Toolbar>
			</AppBar>
			<Drawer

				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						// backgroundColor: 'red',
						// backgroundClip: 'contentbox',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}

			>
				<div className='side-bg h-100 w-100'>

				</div>
				<DrawerHeader >
					<ListItemText primary={"MENU"} className=" text-dark mx-5" />
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>

				<Divider className='bg-dark' />

				<List >

					{/* حالت شب */}
					<ListItem className=''>
						<ListItemIcon>
							<GiNightSleep className='side-icon' />
						</ListItemIcon>
						<ListItemText primary={" حالت شب"} className=" text-dark" />
						<Typography component="div" className=' d-flex align-items-center'>
							<AntSwitch onClick={() => setmode((prevLoading) => !prevLoading)}></AntSwitch>
						</Typography>
						{/* <ListItemButton>
						</ListItemButton> */}
					</ListItem>
					<Divider className='bg-dark' />
					<ListItem className=''>
						<RadioButtonsGroup></RadioButtonsGroup>
					</ListItem>
					<Divider className='bg-dark' />

				</List>


				<List >



				</List>
			</Drawer>

		</Box >
	);
}
