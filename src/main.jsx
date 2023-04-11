import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import Home from './components/Home';
import Statistics from './components/Statistics';
import './index.css';
import { getDataFromJson } from './utils/getDataFromJson';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: getDataFromJson,
			},
			{
				path: '/appliedJobs',
				element: <AppliedJobs />,
			},
			{
				path: '/statistics',
				element: <Statistics />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
