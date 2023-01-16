import React, { useEffect, useState, useRef, useContext } from 'react';
import { dbwords } from "../services/services";
import Word from './Word';
import AppContext from '../context/Context';

const Words = () => {


	const { datawords } = useContext(AppContext);



	return (


		<div className=" border  border-info words" style={{ borderRadius: "25px" }}>
			<ol className=" justify-content-start d-flex flex-wrap">

				{datawords?.map(datawords => {
					return (


						<li style={{ minWidth: "250px" }}>
							<Word datawords={datawords} ></Word>
						</li>

					)
				}).reverse()}

			</ol>

		</div>

	)
};

export default Words;