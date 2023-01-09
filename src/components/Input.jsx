import React, { useEffect, useState } from 'react';
import { UseState } from 'react';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import { tranclate } from '../services/vocabservices';


const Input = () => {
	const [word, setWord] = useState([]);
	// const [meaning, setmeaning] = useState([]);


	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			let { data } = await tranclate(parseInt(word.english));
	// 			// setmeaning(data);
	// 			console.log(data)
	// 		} catch (err) {
	// 			console.log('مشکل دریافت دیتا');
	// 		}
	// 	};
	// 	fetchData();

	// }, [word]);




	return (
		<>
			<div className='container d-flex flex-row flex-wrap d-flex justify-content-center p-2'  >
				<div className=' border container py-3' style={{ background: "#d3d3d3", borderRadius: "25px" }}>


					<Formik

						initialValues={{ english: "", persian: "" }}
						validationSchema={tranclateSchema}
						onSubmit={(values) => { setWord(values) }}>
						<Form >
							<div className='d-flex my-2'>

								<Field name="english" className='form-control ltr m-1 input' placeholder="english" ></Field>
								<ErrorMessage name="english"
									render={(msg) => (<small className="text-danger position-absolute my-4 py-3">{msg}</small>)} />

								<Field name="persian" className='form-control m-1 input' placeholder="فارسی" ></Field>
								{/*
								<ErrorMessage name="persian"
									render={(msg) => (<small className="text-danger position-absolute">{msg}</small>)} /> */}

							</div>


							<input type="submit" value="ثبت" className="btn btn-primary w-100 my-2" />

							<button onClick={tranclate}>ok</button>

						</Form>
					</Formik>



					<div>
						<Outlet />
					</div>


				</div>
			</div>
		</>
	)
};




export default Input;