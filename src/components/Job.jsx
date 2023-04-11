import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
	const {
		id,
		logo_url,
		job_title,
		company_name,
		site,
		time,
		location,
		salary,
	} = job;
	return (
		<div className='border border-[#e8e8e8] rounded-lg p-4 md:p-10 hover:border-primary'>
			<img className='mb-8' src={logo_url} alt='' />
			<h3 className='font-extrabold text-2xl mb-2'>{job_title}</h3>
			<p className='font-semibold text-xl text-gray'>{company_name}</p>
			<div className='my-6'>
				<span className='btn-outline mr-4'>{site}</span>
				<span className='btn-outline'>{time}</span>
			</div>
			<div className='mb-7 text-gray text-xl font-semibold'>
				<p className='mb-2'>
					<MapPinIcon className='w-6 -mt-1 mr-2 text-gray inline' />
					{location}
				</p>
				<p>
					<CurrencyDollarIcon className='w-6 -mt-1 mr-2 text-gray inline' />
					Salary : {salary}
				</p>
			</div>
			<Link to={`/jobDetails/${id}`}>
				<button className='btn-secondary'>View Details</button>
			</Link>
		</div>
	);
};

export default Job;
