import { HiTrash, HiOutlinePencil, HiSave } from "react-icons/hi";
import { useContext, useState } from "react";
import AppContext from '../context/Context';
import { Link } from "react-router-dom";
import { HiSpeakerWave } from "react-icons/hi2";

import Box from '@mui/material/Box';

const Word = ({ datawords, costomcolor }) => {
	const { handleupdate, clear_s1, theme, persianshow, englishshow } = useContext(AppContext); const [disable, setdisbale] = useState(true);
	const update = () => setdisbale(!disable);

	const randomcolor = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 255)}, 0.5)`;
	const [color, setcolor] = useState();
	const blue = theme.palette.C_blue.main
	const gray = theme.palette.C_gray.main
	const purple = theme.palette.C_purple.main

	// debugger;
	const style = {
		backgroundColor: costomcolor == "colorly"
			? (datawords.background ? datawords.background : randomcolor)
			: (costomcolor == "gray" ? gray :
				(costomcolor == "purple" ? purple : blue)
			)
	}

	const persian_stylefont = { fontSize: "15px", visibility: persianshow ? "" : "hidden" }
	const english_stylefont = { fontSize: "15px", visibility: englishshow ? "" : "hidden" }

	const reader = () => {
		let utterance = new SpeechSynthesisUtterance(datawords.english);
		utterance.volume = 1; // From 0 to 1
		utterance.rate = 0.5; // From 0.1 to 10
		utterance.pitch = 2; // From 0 to 2
		utterance.lang = 'en';
		speechSynthesis.speak(utterance);
	}

	const form = <div className='  mx-2  d-flex  w-100 justify-content-between p-0 flex-column ' >
		<div className=" d-flex justify-content-start align-items-center p-0 " onClick={reader}>
			<p className="" style={english_stylefont}>{datawords.english}</p>
			<p>:</p>
			<p className="" style={persian_stylefont}>{datawords.persian}</p>
		</div>
		<div className="d-flex  flex-row justify-content-end ">
			<Link to={`/editor/${datawords.id}`} className="btn word-btn-blue p-0" title="ویرایش کلمه"><HiOutlinePencil></HiOutlinePencil></Link>
			<a className="btn p-0 word-btn-red mx-2" title="delete" onClick={() => clear_s1(datawords.id)}> <HiTrash></HiTrash> </a>
			<a className="btn p-0 word-btn-green" onClick={reader}><HiSpeakerWave></HiSpeakerWave></a>
		</div>
	</div >


	return (
		<Box className="  word d-flex  justify-content-between p-1 m-1 "
			sx={{ bgcolor: style }}>
			<div className="d-flex  pt-0  w-100  " >
				{form}
			</div>
		</Box  >
	)
};

export default Word;
// style={style}
{/* <Popup trigger={<a className="btn" onClick={{}}> <HiOutlinePencil></HiOutlinePencil></a>} position="top center">
{loger()}
<div>Popup content here !!</div>
</Popup> */}
