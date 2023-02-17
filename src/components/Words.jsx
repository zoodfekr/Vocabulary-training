import React, { useEffect, useState, useRef, useContext, Suspense } from 'react';
import Word from './Word';
import AppContext from '../context/Context';

const Words = () => {
	const { datawords } = useContext(AppContext);
	return (

		<div className="words">
			<ol className=" justify-content-evenly d-flex flex-wrap p-0 ">
				{datawords?.map(datawords => {
					return (
						<li className=" xs-12 sm-3 li">
							<Word datawords={datawords} ></Word>
						</li>
					)
				}).reverse()}
			</ol>
		</div>

	)
};

export default Words;