import React, { useEffect, useState, useRef } from 'react';
import { dbwords } from "../services/services";
import Word from './Word';

const Words = () => {

	const [datawords, setdatawords] = useState(null);


	// const updater = props.data.meaning;

	useEffect(() => {

		const loader = async () => {
			try {
				let { data: words } = await dbwords();
				console.log("words", words);
				setdatawords(words);
			}
			catch (err) {
				console.log("مشکل خواندن دیتا از سرور داخلی");
			}
		}

		loader();
	}, []);


	return (

		<div className="container border p-1 border-danger" style={{ background: "#d3d3d3", borderRadius: "25px" }}>

			<ol className=" d-flex flex-wrap p-2 justify-content-center">

				{datawords?.map(x => {
					return (
						<li>
							<Word data={x}></Word>
						</li>
					)
				})}

			</ol>

		</div>
	)
};

export default Words;