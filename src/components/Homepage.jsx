import React from 'react';
import '../style/style.scss'

import { Portal } from 'react-portal';

const Home = () => {

	return (

		<>
			<div className='container border bg-light d-flex flex-row flex-wrap d-flex justify-content-center p-2' >


				<div className=' d-flex justify-content-center'>


					<form action="" className=' p-2' style={{ borderRadius: "25px" }}>

						<input type="text" className='form-control rtl my-1 input' placeholder='لغت خود را وارد نمائید' />
						<input type="text" className='form-control my-1 input' placeholder='معنی' />

						<button type='submit' className='btn btn-success w-100'>ثبت</button>
					</form>

				</div>

			</div>


		</>
	)
}


export default Home;