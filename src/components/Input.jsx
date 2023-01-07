import React from 'react';
import { Outlet } from 'react-router-dom'
import '../style/style.scss'

const input = () => {

	return (

		<>
			<div className='container border bg-light d-flex flex-row flex-wrap d-flex justify-content-center p-2' >
				<div className=' border container py-3'>

					<div className='d-flex flex-wrap container  my-3'>
						<input type="text" className='form-control my-1 input mx-1' placeholder='لغت انگلیسی' />
						<input type="text" className='form-control my-1 input mx-1' placeholder='معنی فارسی' />
					</div>

					<button type='submit' className='btn btn-success w-100 col-2'>ثبت</button>



				</div>

			</div>

			<Outlet />

		</>
	)
}


export default input;