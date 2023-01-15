import React, { useEffect, useState, useRef } from 'react';
import { UseState } from 'react';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import { createword, dbwords, english_tranclate, persian_tranclate, remover, tranclate } from '../services/services';
import Words from './Words';
import checker from '../components/Navbar'


const Input = ({ invalue, datawords, checker, clear }) => {


	const initialvalues = { english: "", persian: "" };

	return (
		<>
			<div className='container-fluid d-flex flex-row flex-wrap d-flex justify-content-center p-2 border  bg-danger' >
				<div className=' border container-fluid py-3' style={{ background: "#d3d3d3", borderRadius: "25px" }}>
					<Formik
						// onReset={handleReset}
						initialValues={initialvalues}
						validationSchema={tranclateSchema}
						onSubmit={async (values, { resetForm }) => {
							await checker(values)
							resetForm()
						}}


					>

						<Form >
							<div className='d-flex my-2'>

								<Field name="english" className='form-control ltr m-1 input' placeholder="english" value={invalue}></Field>
								<ErrorMessage name="english"
									render={(msg) => (<small className="text-danger position-absolute my-4 py-3">{msg}</small>)} />

								<Field name="persian" className='form-control m-1 input' placeholder="فارسی" value={invalue}></Field>

								<ErrorMessage name="persian"
									render={(msg) => (<small className="text-danger position-absolute">{msg}</small>)} />

							</div>


							{/* <input type="submit" value="ثبت" className="btn btn-primary w-100 my-2" /> */}
							<button type="submit" value="ثبت" className="btn btn-primary w-100 my-2">ثبت</button>


						</Form>
					</Formik>



					<div>
						<Words datawords={datawords} clear={clear}></Words>
						{/* <Outlet></Outlet> */}
					</div>


				</div>
			</div>
		</>
	)
};




export default Input;