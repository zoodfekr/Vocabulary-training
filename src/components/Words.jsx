import React, { useEffect, useState, useRef } from 'react';
import { words } from "../services/services";

const Words = () => {

	const [datawords, setdatawords] = useState(null);




	useEffect(() => {
		const loader = async () => {

			try {
				let { words } = await words();
				console.log(words);
				// setdatawords(data);
			}
			catch (err) {
				console.log("مشکل خواندن دیتا از سرور داخلی", err);
			}
		}
		loader();
	}, []);


	return (

		<div className="container border p-1 border-danger" style={{ background: "#d3d3d3", borderRadius: "25px" }}>

			<ol className=" d-flex flex-wrap p-2 justify-content-center">


			</ol>

		</div>
	)
};

export default Words;