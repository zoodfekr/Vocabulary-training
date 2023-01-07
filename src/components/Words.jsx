import Word from "./Word";

const Words = () => {

	return (

		<div className="container border p-1 border-danger" style={{ background: "#d3d3d3", borderRadius: "25px" }}>

			<ol className=" d-flex flex-wrap p-2 justify-content-center">
				<li className="  mx-3 col-11 col-sm-5 col-lg-3  my-1">
					<Word ></Word>
				</li>

			</ol>

		</div>
	)
};

export default Words;