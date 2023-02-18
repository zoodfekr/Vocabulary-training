
import React, { useEffect, useState, useRef, useContext, Suspense } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AppContext from '../../context/Context';


export default function RadioButtonsGroup() {


	const { setwordcolor } = useContext(AppContext);

	const setbackgroundcolr = (data) => {
		setwordcolor(data);
		window.localStorage.setItem('word_bgcolor', JSON.stringify(data));
		testreader();
	}


	const testreader = () => {
		const test = window.localStorage.getItem('word_bgcolor');
		console.log("loader", test)
	}

	return (
		<FormControl className='  w-100' onChange={(event) => setbackgroundcolr(event.target.value)}
		>
			<FormLabel id="demo-radio-buttons-group-label" className='' >رنگ زمینه کلمات</FormLabel>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				defaultValue="female"
				name="radio-buttons-group"
			>
				<FormControlLabel value="colorly" control={<Radio />} label="رنگین کمان" className='border my-2 FormControlLabel colorly' />
				<FormControlLabel value="lightgray" control={<Radio />} label="خاکستری" className='border FormControlLabel gray' />
				<FormControlLabel value="skyblue" control={<Radio />} label="آبی" className='border my-2 FormControlLabel blue' />
				<FormControlLabel value="#ebebeb" control={<Radio />} label="سفید" className='border  FormControlLabel white' />
			</RadioGroup>
		</FormControl>
	);
}