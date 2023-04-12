import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedSingleJobInfo = ({ appliedSingleJobInfo }) => {
	const {
		logo_url,
		job_title,
		company_name,
		site,
		time,
		location,
		salary,
		id,
	} = appliedSingleJobInfo;

	// console.log('jobInfo: ', props);
	return (
		<div className='border border-[#e8e8e8] rounded-lg p-5 md:p-10 hover:border-primary my-5 md:my-10'>
			<div className='flex justify-between  lg:h-40 items-center flex-col lg:flex-row'>
				<div className='flex flex-col md:flex-row justify-start gap-10 lg:h-72 items-center'>
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
							<span className=' mr-4 block'>
								<MapPinIcon className='w-6 -mt-1 mr-2 text-gray inline max-w-md' />
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
					<button className='btn-secondary mt-6 lg:mt-0'>View Details</button>
				</Link>
			</div>
		</div>
	);
};

export default AppliedSingleJobInfo;
