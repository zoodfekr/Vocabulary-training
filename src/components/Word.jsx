import { Link, useNavigate } from "react-router-dom";

const Word = props => {
	console.log("props", props);

	return (

		<div className="  word d-flex p-1 justify-content-center">


			<input type="text" className="col-5 m-1 p-2" placeholder="English" disabled value={props.data.english} />
			<p className="d-flex align-items-center  my-0">:</p>
			<input type="text" className="col-5 m-1 p-2" placeholder="فارسی" disabled value={props.data.persian} />


			{/* <div className="d-flex flex-column justify-content-around ">
				<button className="btn btn-danger" title="delete"></button>
				<button className="btn btn-info" title="edite"></button>
			</div> */}


		</div >
	)
};

export default Word;