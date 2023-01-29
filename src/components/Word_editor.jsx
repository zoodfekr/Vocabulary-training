import { HiTrash, HiOutlinePencil, HiSave } from "react-icons/hi";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import AppContext from '../context/Context';
import Popup from "reactjs-popup";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { update, word_info } from "../services/services";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Word_editor = () => {

	const { handleupdate } = useContext(AppContext);
	const params = useParams(); //params.wid >>> return word id
	const navigate = useNavigate();
	const [word, setword] = useState()

	useEffect(() => {
		const recever = async () => {
			try {
				let { data: wdata } = await word_info(parseInt(params.wid)) //10
				setword(wdata);
				console.log(wdata);
			} catch {
				console.log("مشکلی پیش آمده");
			}
		}
		recever();

	}, []);


	const formik = <Formik

		initialValues={word}
		validationSchema={tranclateSchema}
		onSubmit={(value) => { handleupdate(value.id, value) }}>

		<Form className=" d-flex  justify-content-center flex-column">
			<div className='d-flex my-2  border-danger p-3'>
				<Field name="english" className='form-control ltr m-1  word-input' name="english"></Field>
				<p>:</p>
				<Field name="persian" className='form-control m-1  word-input' name="persian"></Field>
			</div>

			<div className="m-2  d-flex justify-content-center align-items-center">
				<div>
					<button type="submit" className="btn btn-warning mx-2" >ثبت</button>
					<Link to={"/"} className="btn btn-danger mx-2" >
						انصراف
					</Link>
				</div>
			</div>

		</Form>
	</Formik >;


	if (word) {

		return (
			<HelmetProvider>
				<Helmet>
					<title>ویرایش کلمه</title>
				</Helmet>
			<div className="container border border-danger m-5 p-5 bg-dark" style={{ borderRadius: "25px" }}>
				{formik}
			</div>
			</HelmetProvider>
		)
	}

};




export default Word_editor;


