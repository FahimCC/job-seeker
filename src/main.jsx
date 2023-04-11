import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import Statistics from './components/Statistics';
import './index.css';
import { getDataFromJson, getSingleDataFromJson } from './utils/DataFromJson';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage/>,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: getDataFromJson,
			},
			{
				path: '/jobDetails/:id',
				element: <JobDetails />,
				loader: ({ params }) => getSingleDataFromJson(params.id),
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
