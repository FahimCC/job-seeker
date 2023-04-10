import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<h1>JobSeeker</h1>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/'>Applied Jobs</Link>
				<Link to='/'>Statistics</Link>
				<Link to='/'>Blog</Link>
			</nav>
			<button className='py-5 px-7 rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold '>
				Start Applying
			</button>
		</div>
	);
};

export default Header;
