import React, { useEffect, useState, useRef, useContext, Suspense } from 'react';
import Word from './Word';
import AppContext from '../context/Context';
import { getCities } from '../services/firebaseService';

const Words = () => {
	const { datawords, costomcolor, theme } = useContext(AppContext);

	const [cities, setCities] = useState(null);

	useEffect(() => {
	  getCities().then((firebaseCities) => {
		setCities(firebaseCities);
	  });
	}, []);

	return (

		<div className="words">
			{ cities != null ? cities.map(c => <small>{c.name}</small>) : <p>Loading</p>}
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