import React, { useEffect, useState, useRef } from 'react';
import { dbwords } from "../services/services";
import Word from './Word';

const Words = ({ datawords, clear }) => {

	return (

		<div className=" border p-1 border-info" style={{ borderRadius: "25px" }}>

			<ol className=" justify-content-start d-flex flex-wrap">

				{datawords?.map(datawords => {
					return (


						<li >
							<Word datawords={datawords} clear={clear}></Word>
						</li>

					)
				}).reverse()}

			</ol>

		</div>
	)
};

export default Words;