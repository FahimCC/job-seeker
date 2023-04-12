import React from 'react';

const appliedJob = ({ appliedJob }) => {
	const {
		logo_url,
		job_title,
		company_name,
		site,
		time,
		location,
		salary,
		id,
	} = appliedJob;
	return (
		<div className='flex justify-between h-40 items-center'>
			<div className='flex justify-start gap-10 h-72 items-center'>
				<div className='w-44 h-44 rounded-lg bg-[#F4F4F4] flex justify-center items-center'>
					<img className='' src={logo_url} alt='' />
				</div>
				<div>
					<h3 className='font-extrabold text-2xl'>{job_title}</h3>
					<p className='font-semibold text-xl text-gray'>{company_name}</p>
					<div className='my-6'>
						<span className='btn-outline mr-4'>{site}</span>
						<span className='btn-outline'>{time}</span>
					</div>
					<div className=' text-gray text-xl font-semibold'>
						<span className=' mr-4'>
							<MapPinIcon className='w-6 -mt-1 mr-2 text-gray inline' />
							{location}
						</span>
						<span>
							<CurrencyDollarIcon className='w-6 -mt-1 mr-2 text-gray inline' />
							Salary : {salary}
						</span>
					</div>
				</div>
			</div>
			<Link to={`/jobDetails/${id}`}>
				<button className='btn-secondary'>View Details</button>
			</Link>
		</div>
	);
};

export default appliedJob;
