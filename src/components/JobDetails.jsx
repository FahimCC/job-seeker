import {
	CalendarDaysIcon,
	CurrencyDollarIcon,
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';

const JobDetails = () => {
	const {
		salary,
		job_title,
		contact_information,
		location,
		description,
		responsibility,
		educational_requirements,
		experiences,
	} = useLoaderData();
	return (
		<>
			<Banner>Job Details</Banner>
			<div className='my-container flex flex-col lg:flex-row justify-between my-24 gap-10'>
				<div className='w-full lg:w-2/3 font-medium mt-5 text-lg'>
					<span className='font-extrabold'>Job Description:</span>
					<p className='mb-4'>{description}</p>
					<span className='font-extrabold'>Job Responsibility:</span>
					<p className='mb-4'>{responsibility}</p>
					<span className='font-extrabold'>Educational Requirements:</span>
					<p className='mb-4'>{educational_requirements}</p>
					<span className='font-extrabold'>Experiences:</span>
					<p className='mb-4'>{experiences}</p>
				</div>
				<div className='w-full lg:w-1/3'>
					<div className='text-lg md:text-xl bg-[#f4f2ff] p-5 md:p-7 rounded-md'>
						<h4 className='text-2xl font-extrabold'>Job Details</h4>
						<hr className='my-6 text-[#d3d2ff]' />
						<p className='font-bold my-3'>
							<CurrencyDollarIcon className='w-6 -mt-1 mr-2 text-primary inline' />
							Salary :<span className='font-medium'> {salary} (Per Month)</span>
						</p>
						<p className='font-bold my-3'>
							<CalendarDaysIcon className='w-6 -mt-1 mr-2 text-primary inline' />
							Job Title :<span className='font-medium'> {job_title}</span>
						</p>

						<h4 className='text-2xl  font-extrabold mt-8'>
							Contact Information
						</h4>
						<hr className='my-6 text-[#d3d2ff]' />
						<p className='font-bold my-3'>
							<PhoneIcon className='w-6 -mt-1 mr-2 text-primary inline' />
							Phone :
							<span className='font-medium'> {contact_information.phone}</span>
						</p>
						<p className='font-bold my-3'>
							<EnvelopeIcon className='w-6 -mt-1 mr-2 text-primary inline' />
							Email :
							<span className='font-medium'> {contact_information.email}</span>
						</p>
						<p className='font-bold my-3'>
							<MapPinIcon className='w-6 -mt-1 mr-2 text-primary inline' />
							Address :<span className='font-medium'> {location}</span>
						</p>
					</div>
					<button className='btn-primary w-full mt-6'>Apply Now</button>
				</div>
			</div>
		</>
	);
};

export default JobDetails;
