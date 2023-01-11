import { Link, useNavigate } from "react-router-dom";
import { remover } from "../services/services";

const Word = ({ datawords, clear }) => {

	// console.log("wwwwwwwww", datawords);

	// const clear = async () => {
	// 	// console.log(props.data.id);
	// 	try {
	// 		const { status } = remover(props.data.id);
	// 		if (status == 200) {
	// 			console.log("کلمه حذف شد");
	// 		}
	// 	} catch {
	// 		console.log("مشکل در حذف کلمه");
	// 	}
	// }

	return (

		<div className="  word d-flex p-1 justify-content-center">


			<input type="text" className="col-5 m-1 p-2" placeholder="English" disabled value={datawords.english} />
			<p className="d-flex align-items-center  my-0">:</p>
			<input type="text" className="col-5 m-1 p-2" placeholder="فارسی" disabled value={datawords.persian} />




			<div className="d-flex flex-column justify-content-around ">
				<button className="btn btn-danger" title="delete"
					onClick={() => clear(datawords.id)}
				></button>
				{/* <button className="btn btn-info" title="edite"></button> */}
			</div>


		</div >
	)
};

export default Word;