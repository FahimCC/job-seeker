import React from 'react';

const Category = ({ category }) => {
	const { logo_url, name, job_available } = category;
	return (
		<div className='rounded-md bg-[#f9f8ff] p-10 lg:p-5 xl:p-10 hover:border hover:border-primary'>
			<img src={logo_url} alt='' className='bg-[#efecff] p-3 rounded-md mb-8' />
			<h4 className='text-xl lg:text-lg xl:text-xl font-extrabold mb-2'>
				{name}
			</h4>
			<p className='font-medium text-gray'>{job_available} Jobs Available</p>
		</div>
	);
};

export default Category;
