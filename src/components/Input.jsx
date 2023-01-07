import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Outlet } from 'react-router-dom';
import '../style/style.scss';

const input = () => {

	let english = useRef();

	const handle = (event) => {
		event.preventDefault();
		console.log(event);
	}


	return (
		<>
			<div className='container d-flex flex-row flex-wrap d-flex justify-content-center p-2'  >
				<div className=' border container py-3' style={{ background: "#d3d3d3", borderRadius: "25px" }}>


					<form className=' d-flex flex-wrap container  my-3 justify-content-center py-2' action={handle}>
						<input type="text" id="persian" name="persian" className='form-control input mx-1 my-2' placeholder='english' />
						<input type="text" id="english" name="english" className='form-control input mx-1 my-2' placeholder='فارسی' />
						<div className='col-12'>
							<input type="submit" className='btn btn-success col-12' />
						</div>
					</form>



					<div>
						<Outlet />
					</div>


				</div>
			</div>
		</>
	)
};




export default input;