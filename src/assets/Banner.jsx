import React from 'react';

const Banner = ({ children }) => {
	return (
		<div className='bg-[#faf8ff] h-48 lg:h-72 flex justify-between items-center relative'>
			<img
				className='absolute left-0 bottom-0'
				src='https://i.ibb.co/wgJ56PZ/bleft.png'
				alt=''
			/>
			<h2 className='absolute top-[30%] left-0 right-0 bottom-0 text-3xl font-extrabold text-center'>
				{children}
			</h2>
			{/* <div className={`bg-[url(${bright}) z-10`}></div>
			<img src={bright} alt='' /> */}
			<img
				className='absolute -top-28 right-0 z-0 hidden lg:block'
				src='https://i.ibb.co/825QrX6/bright.png'
				alt=''
			/>
		</div>
	);
};

export default Banner;
