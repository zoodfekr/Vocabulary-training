import React, { useEffect, useState, useRef, useContext, lazy, Suspense } from 'react';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import { createword, dbwords, english_tranclate, persian_tranclate, remover, tranclate } from '../services/services';
import Words from './Words';
import checker from '../components/Navbar';
import AppContext from '../context/Context';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';



const Input = () => {

	const { checker, invalue } = useContext(AppContext);

	const initialvalues = { english: "", persian: "" };

	return (
		<>
			<HelmetProvider>
				<Helmet>		  <title>برنامه تمرین لغت</title>
					<link rel="canonical" href="https://www.tacobell.com/" />
				</Helmet>


			</HelmetProvider>


			<div className='container-fluid d-flex flex-row flex-wrap d-flex justify-content-center p-2 ' >
				<div className=' border container-fluid py-3 input-bg' >
					<Formik
						initialValues={initialvalues}
						validationSchema={tranclateSchema}
						onSubmit={async (values, { resetForm }) => {
							await checker(values)
							resetForm()
						}}
					>

						<Form >
							<div className='d-flex my-2'>

								{/* <TextField id="outlined-basic"
									label="english"
									variant="outlined"
									name="english"
									className='form-control ltr m-1 input'
									value={invalue} /> */}

								<Field name="english" className='form-control ltr m-1 input' placeholder="english" value={invalue}></Field>
								<ErrorMessage name="english"
									render={(msg) => (<small className="text-danger position-absolute my-4 py-3">{msg}</small>)} />
								<Field name="persian" className='form-control m-1 input' placeholder="فارسی" value={invalue}></Field>

								<ErrorMessage name="persian"
									render={(msg) => (<small className="text-danger position-absolute">{msg}</small>)} />
							</div>
							<Button type="submit" value="ثبت" variant="contained" className="btn btn-primary w-100 my-2">ثبت</Button>

						</Form>
					</Formik>


					<div>
						<Words ></Words>

					</div>

				</div>
			</div>
		</>
	)
};




export default Input;