import React from 'react';
import { UseState } from 'react';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";


const input = () => {


	const [word, setword] = UseState([]);

	return (
		<>
			<div className='container d-flex flex-row flex-wrap d-flex justify-content-center p-2'  >
				<div className=' border container py-3' style={{ background: "#d3d3d3", borderRadius: "25px" }}>


					<Formik
						initialValues={{ english: "", persian: "" }}
						validationSchema={tranclateSchema}
						onSubmit={(values) => { setword(values) }}>
						<Form >

							<Field name="english" className='form-control' placeholder="english" ></Field>
							<ErrorMessage name="english"
								render={(msg) => (<small className="text-danger position-absolute">{msg}</small>)} />


							<Field name="persian" className='form-control' placeholder="فارسی" ></Field>
							<ErrorMessage name="persian"
								render={(msg) => (<small className="text-danger position-absolute">{msg}</small>)} />


							<input type="submit" value="ثبت" className="btn btn-primary" />

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




export default input;