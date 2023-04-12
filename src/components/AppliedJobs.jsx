import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../App';
import { getDataFromDb } from '../utils/fakedb';
import AppliedSingleJobInfo from './AppliedSingleJobInfo';
import Banner from './Banner';

const AppliedJobs = () => {
	const jobs = useContext(JobContext);

	const [appliedJobData, setAppliedJobData] = useState([]);

	useEffect(() => {
		const appliedJobId = getDataFromDb();
		// console.log(jobs, appliedJobId);
		let newArr = [];
		for (const id in appliedJobId) {
			const job = jobs.find(job => job.id === parseInt(id));

			if (job) {
				newArr.push(job);
			}
		}
		setAppliedJobData(newArr);
	}, []);

	// console.log(appliedJobData);

	return (
		<div>
			<Banner>Applied Jobs</Banner>
			<div className='my-container my-24'>
				<div className='flex justify-end gap-5 my-8'>
					<button className='btn-secondary'>Onsite</button>
					<button className='btn-secondary'>Remote</button>
				</div>
				<div>
					{appliedJobData.map(appliedSingleJobInfo => (
						<AppliedSingleJobInfo
							key={appliedSingleJobInfo.id}
							appliedSingleJobInfo={appliedSingleJobInfo}
						></AppliedSingleJobInfo>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppliedJobs;
