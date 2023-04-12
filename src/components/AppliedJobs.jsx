import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const AppliedJobs = () => {
	// const {logo_url,job_title,company_name,site, time, location, salary} /jobDetails/${id}
	return (
		<div>
			<Banner>Applied Jobs</Banner>
			<div className='my-container my-24'>
				<div className='flex justify-end gap-5 my-8'>
					<button className='btn-outline'>Onsite</button>
					<button className='btn-outline'>Remote</button>
				</div>
				<div>
					<div className='border border-[#e8e8e8] rounded-lg p-5 md:p-10 hover:border-primary'>
						<div className='flex justify-between h-40 items-center'>
							<div className='flex justify-start gap-10 h-72 items-center'>
								<div className='w-44 h-44 rounded-lg bg-[#F4F4F4] flex justify-center items-center'>
									<img
										className=''
										src='https://i.ibb.co/86h0Zr8/google.png'
										alt=''
									/>
								</div>
								<div>
									<h3 className='font-extrabold text-2xl'>job_title</h3>
									<p className='font-semibold text-xl text-gray'>
										company_name
									</p>
									<div className='my-6'>
										<span className='btn-outline mr-4'>site</span>
										<span className='btn-outline'>time</span>
									</div>
									<div className=' text-gray text-xl font-semibold'>
										<span className=' mr-4'>
											<MapPinIcon className='w-6 -mt-1 mr-2 text-gray inline' />
											location
										</span>
										<span>
											<CurrencyDollarIcon className='w-6 -mt-1 mr-2 text-gray inline' />
											Salary : salary
										</span>
									</div>
								</div>
							</div>
							<Link to={``}>
								<button className='btn-secondary'>View Details</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppliedJobs;
