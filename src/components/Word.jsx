import { HiTrash, HiOutlinePencil, HiSave } from "react-icons/hi";
import { useContext, useState } from "react";
import AppContext from '../context/Context';
import { Link } from "react-router-dom";

const Word = ({ datawords }) => {
	const { handleupdate, clear, } = useContext(AppContext);
	const randomcolor = `rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 255)},0.45`;
	const [disable, setdisbale] = useState(true);
	const update = () => setdisbale(!disable);

	const stylefont = {
		fontSize: "15px",
	}

	const form = <div className='  mx-2  d-flex  w-100 justify-content-between p-0'>
		<div className=" d-flex justify-content-center align-items-center  ">
			<p className="  " style={stylefont}>{datawords.english}</p>
			<p>:</p>
			<p className="" style={stylefont}>{datawords.persian}</p>
		</div>

		<div className="d-flex  flex-column ">
			<Link to={`/editor/${datawords.id}`} className="btn word-btn-blue p-0" title="ویرایش کلمه"><HiOutlinePencil></HiOutlinePencil></Link>
			<a className="btn p-0 word-btn-red" title="delete" onClick={() => clear(datawords.id)}> <HiTrash></HiTrash> </a>
		</div>

	</div >


	return (
		<div className="  word d-flex  justify-content-between p-1 m-1 " style={{ backgroundColor: randomcolor }}>
			<div className="d-flex  pt-0  w-100  " >
				{form}
			</div>
		</div >
	)
};

export default Word;

{/* <Popup trigger={<a className="btn" onClick={{}}> <HiOutlinePencil></HiOutlinePencil></a>} position="top center">
{loger()}
<div>Popup content here !!</div>
</Popup> */}
