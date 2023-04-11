import React from 'react';
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	Tooltip,
} from 'recharts';
import Banner from './Banner';

const Statistics = () => {
	const data = [
		{
			subject: 'Assignment-01',
			mark: 57,
		},
		{
			subject: 'Assignment-02',
			mark: 60,
		},
		{
			subject: 'Assignment-03',
			mark: 60,
		},
		{
			subject: 'Assignment-04',
			mark: 57,
		},
		{
			subject: 'Assignment-05',
			mark: 50,
		},
		{
			subject: 'Assignment-06',
			mark: 60,
		},
		{
			subject: 'Assignment-07',
			mark: 60,
		},
	];

	return (
		<>
			<Banner>Statistics</Banner>
			<div className='w-full h-full flex justify-center items-center mt-8'>
				{/* <ResponsiveContainer></ResponsiveContainer> */}
				<RadarChart
					cx={300}
					cy={250}
					outerRadius={200}
					width={600}
					height={500}
					data={data}
				>
					<PolarGrid />
					<PolarAngleAxis dataKey='subject' />
					<PolarRadiusAxis />
					<Tooltip />
					<Radar
						name='Fahim Faysal'
						dataKey='mark'
						stroke='#8884d8'
						fill='#8884d8'
						fillOpacity={0.6}
					/>
				</RadarChart>
			</div>
		</>
	);
};

export default Statistics;
