import React, { useEffect, useState, useRef, useContext, Suspense } from 'react';
import Word from './Word';
import AppContext from '../context/Context';

const Words = () => {
	const { datawords, costomcolor, theme } = useContext(AppContext);
	// const [color, setcolor] = useState();

	// const blue = theme.palette.C_blue.main
	// const gray = theme.palette.C_gray.main
	// const purple = theme.palette.C_purple.main
	const randomcolor = `rgba( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 255)},0.45)`;



	return (

		<div className="words">
			<ol className=" justify-content-evenly d-flex flex-wrap p-0 ">
				{datawords?.map(datawords => {
					return (
						<li className=" xs-12 sm-3 li">
							<Word datawords={datawords} costomcolor={costomcolor}></Word>
						</li>
					)
				}).reverse()}
			</ol>
		</div>

	)
};

export default Words;