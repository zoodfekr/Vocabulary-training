import { Link, useNavigate } from "react-router-dom";

const Word = () => {

	return (

		<div className="  word d-flex p-1 justify-content-center">


			<input type="text" className="col-5 m-1 p-2" placeholder="English" disabled />
			<p className="d-flex align-items-center  my-0">:</p>
			<input type="text" className="col-5 m-1 p-2" placeholder="فارسی" disabled />


			<div className="d-flex flex-column justify-content-around ">
				<button className="btn btn-danger" title="delete"></button>
				<button className="btn btn-info" title="edite"></button>
			</div>


		</div >
	)
};

export default Word;