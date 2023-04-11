import {
	Bars3BottomRightIcon,
	BriefcaseIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className='bg-[#faf8ff]'>
			<div className='relative flex items-center justify-between'>
				<div className='my-container h-28 flex justify-between items-center'>
					<Link to='/'>
						<div className='flex font-extrabold text-3xl md:text-5xl'>
							<span>J</span>
							<BriefcaseIcon className='w-4 h-4 md:w-7 md:h-7 mt-3 border-2 md:border-4 text-primary border-black rounded-full' />
							<span>bSeeker</span>
						</div>
					</Link>
					<nav className='font-bold text-xl hidden lg:block'>
						<NavLink
							to='/'
							className={`${({ isActive }) =>
								isActive && 'active'} mr-5 xl:mr-8 hv text-gray`}
						>
							Home
						</NavLink>
						<NavLink
							to='/appliedJobs'
							className={`${({ isActive }) =>
								isActive && 'active'} mr-5 xl:mr-8 hv text-gray`}
						>
							Applied Jobs
						</NavLink>
						<NavLink
							to='/statistics'
							className={`${({ isActive }) =>
								isActive && 'active'} mr-5 xl:mr-8 hv text-gray`}
						>
							Statistics
						</NavLink>
						<NavLink
							to='/blog'
							className={`${({ isActive }) =>
								isActive && 'active'} mr-5 xl:mr-8 hv text-gray`}
						>
							Blog
						</NavLink>
					</nav>
					<button className='btn-primary hidden lg:block'>
						Start Applying
					</button>
				</div>

				{/* For Mobile Devices */}
				<div className='lg:hidden'>
					<button
						aria-label='Open Menu'
						title='Open Menu'
						onClick={() => setIsMenuOpen(true)}
					>
						<Bars3BottomRightIcon className='w-8 mr-4 text-[#1A1919]' />
					</button>
					{isMenuOpen && (
						<div className='absolute top-0 left-0 w-full z-10 '>
							<div className='py-5 px-8 m-3 md:m-5 shadow-md rounded-md bg-white'>
								<div className='flex justify-between items-center'>
									<Link>
										<h1 className='text-[#1A1919] font-extrabold text-3xl'>
											JobSeeker
										</h1>
									</Link>
									<button
										aria-label='Close Menu'
										title='Close Menu'
										onClick={() => setIsMenuOpen(false)}
									>
										<XMarkIcon className='w-7 md:mr-3 text-[#1A1919]' />
									</button>
								</div>
								<nav className='font-bold text-lg flex flex-col text-gray'>
									<NavLink
										to='/'
										className={`${({ isActive }) =>
											isActive && 'active'} mt-5  text-gray`}
									>
										Home
									</NavLink>
									<NavLink
										to='/appliedJobs'
										className={`${({ isActive }) =>
											isActive && 'active'} mt-5  text-gray`}
									>
										Applied Jobs
									</NavLink>
									<NavLink
										to='/statistics'
										className={`${({ isActive }) =>
											isActive && 'active'} mt-5  text-gray`}
									>
										Statistics
									</NavLink>
									<NavLink
										to='/blog'
										className={`${({ isActive }) =>
											isActive && 'active'} mt-5 text-gray`}
									>
										Blog
									</NavLink>
								</nav>
								<div className='text-center'>
									<button className='btn-secondary mt-4'>Start Applying</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
