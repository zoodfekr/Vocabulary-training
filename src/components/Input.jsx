import React, { useEffect, useState, useRef } from 'react';
import { UseState } from 'react';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import { createword, dbwords, tranclate } from '../services/services';
import Words from './Words';


const Input = () => {
	const [word, setWord] = useState(null);

	const [meaning, setmeaning] = useState(null);

// متد ترجمه کلمه
	useEffect(() => {
		console.log("word", word);
		const fetchData_google = async () => {

			if (word.english && word.persian) {
				setmeaning({ english: word.english, persian: word.persian })
			}

			else if (word.english) {
				try {
					let { data: res } = await tranclate(word.english)
					setmeaning({ english: word.english, persian: res[0][0][0] })
					console.log("res", res);
				} catch (err) {
					console.log(err, 'مشکل دریافت دیتا');
				}
			}
		};
		fetchData_google();
	}, [word]);


// ثبت در سرور داخلی
	useEffect(() => {
		const creator = async () => {

			if (meaning != null && meaning.english != meaning.persian) {
				try {
					const { status } = await createword(meaning);
					if (status == 201) {
						console.log("کلمه ثبت شد");
						setmeaning(null);
						setWord(null);
					}
				} catch (err) {
					console.log(err, "مشکل ثبت در سرور داخلی");
				}
			}
		};
		creator()
	}, [meaning]);




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

								<ErrorMessage name="persian"
									render={(msg) => (<small className="text-danger position-absolute">{msg}</small>)} />

							</div>


							<input type="submit" value="ثبت" className="btn btn-primary w-100 my-2" />



						</Form>
					</Formik>



					<div>
						<Outlet></Outlet>
					</div>


				</div>
			</div>
		</>
	)
};




export default Input;