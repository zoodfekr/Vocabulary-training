
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
				<FormControlLabel value="colorly" control={<Radio className='text-dark' />} label="رنگی" className=' my-2 FormControlLabel colorly text-dark' />
				<FormControlLabel value="gray" control={<Radio className='text-dark' />} label="خاکستری" className=' FormControlLabel gray text-dark' />
				<FormControlLabel value="blue" control={<Radio className='text-dark' />} label="آبی" className=' my-2 FormControlLabel blue text-dark' />
				<FormControlLabel value="purple" control={<Radio className='text-dark' />} label="بنفش" className='  FormControlLabel white text-dark' />
			</RadioGroup>
		</FormControl>
	);
}