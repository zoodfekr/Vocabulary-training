import React, { useEffect, useState, useRef } from 'react';
import { UseState } from 'react';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import { createword, dbwords, english_tranclate, persian_tranclate, remover, tranclate, update } from '../services/services';
import Words from './Words';
import Input from './Input';
import Logo from './Logo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

	const [word, setWord] = useState(null); //کلمه دریافتی از کاربر
	const [meaning, setmeaning] = useState(null); // کلمه معنی شده از گوگل
	const [datawords, setdatawords] = useState(null); // کلمه های خوانده شده از سرور داخلی
	const [invalue, setinvalue] = useState(null); // خالی کننده مقدار ورودی ها


	//  ترجمه کلمه
	useEffect(() => {
		const fetchData_google = async () => {
			if (word.english && word.persian) {
				setmeaning({ english: word.english, persian: word.persian })
				setinvalue("");
			} else {

				if (word.english && !word.persian) {
					setinvalue("");
					try {
						let { data: per } = await english_tranclate(word.english)
						setmeaning({ english: word.english, persian: per[0][0][0] })
						setinvalue(null);

					} catch (err) {
						setinvalue(null);
						console.log(' مشکل دریافت دیتا انگلیسی');
						alert("عدم دسترس به سرور")
					}
				}
				else if (word.persian && !word.english) {
					setinvalue("");
					try {
						let { data: eng } = await persian_tranclate(word.persian);
						setmeaning({ english: eng[0][0][0], persian: word.persian });
						setinvalue(null);
					} catch (err) {
						setinvalue(null);
						alert("عدم دسترس به سرور")
						console.log('مشکل دریافت دیتا فارسی');
					}
				}
			}
		};
		fetchData_google();
	}, [word]);

	// ثبت و خواندن اطلاعات از  سرور داخلی
	useEffect(() => {
		setmeaning(null);

		const creator = async () => {
			if (meaning != null && meaning.english != meaning.persian) {
				try {

					// const { status } = await toast.promise(createword(meaning))
					const { status } = await createword(meaning);
					if (status == 201) {
						toast.success("کلمه ساخته شد")
						console.log("کلمه ثبت شد");
						setinvalue(null);
					} else {
						toast.error("کلمه ساخته نشد")

					}

				} catch (err) {
					console.log("مشکل ثبت در سرور داخلی");
				}
			}

			if (meaning == null) {
				try {
					let { data: words } = await dbwords();
					setdatawords(words);
					setinvalue(null)
				}
				catch (err) {
					console.log("مشکل خواندن دیتا از سرور داخلی");
				}
			}
		};
		creator()
	}, [meaning]);

	//حذف کننده کلمه
	const clear = async (id) => {
		try {
			const { status } = await remover(id);
			if (status == 200) {
				toast.success("کلمه حذف شد")
				try {
					let { data: words } = await dbwords();
					setdatawords(words);
					alert("کلمات از سرور خوانده شد")
				}
				catch (err) {
					console.log("مشکل خواندن دیتا از سرور داخلی");
				}
			}
		} catch {
			console.log("مشکل در حذف کلمه");
		}
	}

	// چک کننده کلمات تکراری
	const checker = (value) => {
		let ebank = datawords.map(x => x.english);
		let pbank = datawords.map(x => x.persian);
		setinvalue("");
		if (ebank.includes(value.english) || pbank.includes(value.persian)) {
			setinvalue(null);
			alert("کلمه شما از قبل وجود دارد")
		} else {
			setWord(value)
			setinvalue(null);
		}
	}

	//به روزرسانی کلمه
	const handleupdate = async (id, data) => {
		try {
			const { status } = await update(id, data);
			if (status == 200) {
				console.log(" کلمه به روز شد ");
				toast.success("کلمه به روز شد  ")
			}
		} catch {
			console.log("مشکل در به روز رسانی کلمه");
		}
	}


	return (
		<>



			<nav class="navbar bg-dark navbar-dark navbar-expand-lg   shadow-lg" dir="rtl" >

				<div class="container" id="top">
					<Logo />
					{/* {location.pathname == "/" ? <Search query={query} finder={finder} /> : null} */}

				</div >
			</nav >

			<div className='d-flex'>


				<Input invalue={invalue} checker={checker} datawords={datawords} clear={clear} update={update} handleupdate={handleupdate} ></Input>

			</div>




			{/* toastify */}
			<div>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</div>

		</>
	)

};

export default Navbar;