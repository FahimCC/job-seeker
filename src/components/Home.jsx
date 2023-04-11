import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../src/assets/banner.json';
import Category from './Category';
import Job from './Job';

const Home = () => {
	const [isShowMore, setIsShowMore] = useState(false);

	const [categories, jobs] = useLoaderData();
	// console.log(categories);
	return (
		<>
			<div className='bg-[#faf8ff]'>
				<div className='my-container py-4 md:py-10'>
					<div className='flex flex-col-reverse md:flex-row justify-between items-center'>
						<div className='mt-8 md:mt-0'>
							<div className='font-extrabold text-4xl xl:text-6xl 2xl:text-7xl'>
								<h1 className='mb-4'>One Step</h1>
								<h1 className='mb-4'>Closer To Your</h1>
								<h1 className='active'>Dream Job</h1>
							</div>
							<p className='my-7 max-w-md font-medium'>
								Explore thousands of job opportunities with all the information
								you need. Its your future. Come find it. Manage all your job
								application from start to finish.
							</p>
							<button className='btn-primary'>Get Started</button>
						</div>
						<div className='md:-mr-16'>
							<Lottie animationData={banner} loop={true} />
						</div>
					</div>
				</div>
			</div>
			<div className='my-container'>
				<div className='my-24'>
					<h1 className='text-3xl md:text-5xl font-extrabold text-center mb-4'>
						Job Category List
					</h1>
					<p className='font-medium text-center text-gray'>
						Explore thousands of job opportunities with all the information you
						need. Its your future.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6  my-10'>
						{categories.map(category => (
							<Category key={category.id} category={category} />
						))}
					</div>
				</div>
				<div className='my-24'>
					<h1 className='text-3xl md:text-5xl font-extrabold text-center mb-4'>
						Featured Jobs
					</h1>
					<p className='font-medium text-center text-gray'>
						Explore thousands of job opportunities with all the information you
						need. Its your future.
					</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10'>
						{jobs.slice(0, isShowMore ? jobs.length : 4).map(job => (
							<Job key={job.id} job={job} />
						))}
					</div>
					{!isShowMore && (
						<div className='text-center'>
							<button
								onClick={() => setIsShowMore(true)}
								className='btn-primary'
							>
								See All Jobs
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
