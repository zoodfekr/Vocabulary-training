import { HiTrash, HiOutlinePencil, HiSave } from "react-icons/hi";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { tranclateSchema } from "../validation/validation";
import AppContext from '../context/Context';

const Word = ({ datawords }) => {

	const { handleupdate, clear } = useContext(AppContext);
	const randomcolor = `rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 255)},0.34`;
	const [disable, setdisbale] = useState(true);
	const update = () => setdisbale(!disable);

	const handlesubmit = (value) => {
		handleupdate(value.id, value)
		setdisbale(!disable)
	}

	const formik = <Formik initialValues={datawords} validationSchema={tranclateSchema} onSubmit={(values) => { handlesubmit(values); }}>
		<Form className=" d-flex">
			<div className='d-flex my-2'>
				<Field name="english" disabled={disable} className='form-control ltr m-1  word-input' name="english"></Field>
				<p>:</p>
				<Field name="persian" disabled={disable} className='form-control m-1  word-input' name="persian"></Field>
			</div>

			<div className="d-flex flex-column justify-content-around  ">
				<a className="btn p-0 word-btn-red" title="delete" onClick={() => clear(datawords.id)}> <HiTrash></HiTrash> </a>
				{disable ? <a className="btn p-0 word-btn-blue" title="edite" onClick={() => update()}> <HiOutlinePencil></HiOutlinePencil></a>
					:
					<button type="submit" className="btn" className=" btn p-0 word-btn-blue"><HiSave></HiSave></button>}
			</div>
		</Form>
	</Formik >;

	return (
		<div className="  word d-flex  justify-content-between p-1 m-1 border" style={{ backgroundColor: randomcolor }}>
			<div className="d-flex  pt-2">
				{formik}

			</div>
		</div >
	)


};

export default Word;
