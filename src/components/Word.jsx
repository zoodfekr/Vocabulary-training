import { HiTrash, HiOutlinePencil, HiSave } from "react-icons/hi";
import { useContext, useState } from "react";
import AppContext from '../context/Context';
import { Link } from "react-router-dom";
import { HiSpeakerWave } from "react-icons/hi2";

const Word = ({ datawords }) => {
	const { handleupdate, clear_s1 } = useContext(AppContext);
	const randomcolor = `rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 255)},0.45`;
	const [disable, setdisbale] = useState(true);
	const update = () => setdisbale(!disable);

	const stylefont = {
		fontSize: "15px",
	}

	const reader = () => {
		let utterance = new SpeechSynthesisUtterance(datawords.english);
		utterance.volume = 1; // From 0 to 1
		utterance.rate = 0.5; // From 0.1 to 10
		utterance.pitch = 2; // From 0 to 2
		utterance.lang = 'en';
		speechSynthesis.speak(utterance);
	}

	const form = <div className='  mx-2  d-flex  w-100 justify-content-between p-0 flex-column'>

		<div className=" d-flex justify-content-start align-items-center p-0 ">
			<p className="  " style={stylefont}>{datawords.english}</p>
			<p>:</p>
			<p className="" style={stylefont}>{datawords.persian}</p>
		</div>

		<div className="d-flex  flex-row justify-content-end ">
			<Link to={`/editor/${datawords.id}`} className="btn word-btn-blue p-0" title="ویرایش کلمه"><HiOutlinePencil></HiOutlinePencil></Link>
			<a className="btn p-0 word-btn-red mx-2" title="delete" onClick={() => clear_s1(datawords.id)}> <HiTrash></HiTrash> </a>
			<a className="btn p-0 word-btn-green" onClick={reader}><HiSpeakerWave></HiSpeakerWave></a>
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
