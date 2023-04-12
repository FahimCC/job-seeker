import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
	return (
		<div className='font-manrope'>
			<Header />
			<Outlet />
			<Toaster />
		</div>
	);
};

export default App;
