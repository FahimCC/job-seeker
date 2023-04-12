import React, { createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './components/Header';

export const CategoryContext = createContext([]);
export const JobContext = createContext([]);

const App = () => {
	const { categories, jobs } = useLoaderData();
	return (
		<div className='font-manrope'>
			<CategoryContext.Provider value={categories}>
				<JobContext.Provider value={jobs}>
					<Header />
					<Outlet />
					<Toaster />
				</JobContext.Provider>
			</CategoryContext.Provider>
		</div>
	);
};

export default App;
