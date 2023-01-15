import { Link, useNavigate } from "react-router-dom";
import { remover } from "../services/services";

const Word = ({ datawords, clear }) => {

	const randomcolor = `rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 255)},0.34`

	return (

		<div className="  word d-flex  justify-content-between p-1 m-1 border" style={{ backgroundColor: randomcolor }}>

			<div className="d-flex p-1 pt-2">
				<p className=" m-1 " ><small>{datawords.english}</small></p>
				<p lassName="d-flex align-items-center  my-0">:</p>
				<p className=" m-1 " ><small>{datawords.persian}</small></p>
			</div>


			<div className="d-flex flex-column justify-content-around  ">
				<button className="btn btn-danger" title="delete"
					onClick={() => clear(datawords.id)}
				></button>
				<button className="btn btn-info" title="edite" onClick={() => console.log(randomcolor)}></button>
			</div>


		</div >
	)
};

export default Word;