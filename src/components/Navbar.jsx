import React, { useEffect, useState, useRef, Suspense, useContext } from 'react';
import { UseState } from 'react';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import { createword, dbwords, english_tranclate, persian_tranclate, remover, tranclate, update } from '../services/services';
import Words from './Words';
import Input from './Input';
import Logo from './Logo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RiFileWord2Fill } from "react-icons/ri";
import AppContext from '../context/Context';
import AntSwitch from './mui/AntSwitch'
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FaArrowCircleUp } from "react-icons/fa";
import PersistentDrawerRight from './mui/Sidebar';
import zIndex from '@mui/material/styles/zIndex';
import { boolean } from 'yup/lib/locale';


const Navbar = (props) => {

	const { setmode } = useContext(AppContext);

	function HideOnScroll(props) {
		const { children } = props;
		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 0,
		});
		return (
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
		);
	}

	function ScrollTop(props) {
		const { children, window } = props;
		const trigger = useScrollTrigger({
			target: window ? window() : undefined,
			disableHysteresis: true,
			threshold: 100,
		});

		const handleClick = (event) => {

			const anchor = (event.target.ownerDocument || document).querySelector(
				'#back-to-top-anchor',
			);

			if (anchor) {
				anchor.scrollIntoView({
					block: 'center',
				});
			}
		};

		return (
			<Fade in={trigger}>
				<Box
					onClick={handleClick}
					role="presentation"
					sx={{ position: 'fixed', bottom: 16, right: 16 }}
				>
					{children}
				</Box>
			</Fade>
		);
	}

	return (
		<>


			<span id='back-to-top-anchor'></span>


			<PersistentDrawerRight ></PersistentDrawerRight>

			<Box sx={{ my: 7 }} >
				<Outlet></Outlet>
				<ScrollTop {...props} >
					<Fab size="big" aria-label="scroll back to top" className='bg-warning'>
						<FaArrowCircleUp style={{ fontSize: "50px" }}></FaArrowCircleUp>
					</Fab>
				</ScrollTop>


				<div>
					<ToastContainer
						position="top-center"
						autoClose={1000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						// pauseOnFocusLoss
						draggable
						// pauseOnHover
						theme="colored"
					/>
				</div>


			</Box>



		</>

	)

};

export default Navbar;