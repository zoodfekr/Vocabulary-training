import React, { useEffect, useState, useRef } from 'react';
import { dbwords } from "../services/services";
import Word from './Word';

const Words = ({ datawords, clear }) => {

	return (

		<div className="container border p-1 border-danger" style={{ background: "#d3d3d3", borderRadius: "25px" }}>

			<ol className=" d-flex flex-wrap p-2 justify-content-center">
				{/* {console.log("dataprops", props.data)} */}
				{datawords?.map(datawords => {
					return (
						<li>
							<Word datawords={datawords} clear={clear}></Word>
						</li>
					)
				})}

			</ol>

		</div>
	)
};

export default Words;