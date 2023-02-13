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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RiFileWord2Fill } from "react-icons/ri";
import AppContext from '../context/Context';
import AntSwitch from './mui/AntSwitch'

const Navbar = () => {

	const { setmode } = useContext(AppContext);



	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" component="div" className=''>
						<RiFileWord2Fill style={{ color: "yellow", fontSize: '50px' }} className='mx-2'></RiFileWord2Fill>
						تمرین لغت
					</Typography>
					<Typography component="div" className='mx-5'>
						<AntSwitch onClick={() => setmode((prevLoading) => !prevLoading)}></AntSwitch>
					</Typography>
				</Toolbar>
			</AppBar>

			<Box sx={{ my: 8 }}>

				<Outlet></Outlet>



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