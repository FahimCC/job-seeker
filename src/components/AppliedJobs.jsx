import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../App';
import { getDataFromDb } from '../utils/fakedb';
import AppliedSingleJobInfo from './AppliedSingleJobInfo';
import Banner from './Banner';

const AppliedJobs = () => {
	const jobs = useContext(JobContext);

	const [appliedJobData, setAppliedJobData] = useState([]);
	const [duplicateAppliedJobData, setDuplicateAppliedJobData] = useState([]);

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
		setDuplicateAppliedJobData(newArr);
	}, []);

	const handleOnsiteJob = () => {
		const job = appliedJobData.filter(jobData => jobData.site === 'Onsite');
		setDuplicateAppliedJobData(job);
	};

	const handleRemoteJob = () => {
		const job = appliedJobData.filter(jobData => jobData.site === 'Remote');
		setDuplicateAppliedJobData(job);
	};
	// console.log(appliedJobData);

	return (
		<div>
			<Banner>Applied Jobs</Banner>
			<div className='my-container my-24'>
				<div className='flex justify-end gap-5 my-8'>
					<button onClick={handleOnsiteJob} className='btn-secondary '>
						Onsite
					</button>
					<button onClick={handleRemoteJob} className='btn-secondary'>
						Remote
					</button>
				</div>
				<div>
					{duplicateAppliedJobData.map(appliedSingleJobInfo => (
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
