const getDataFromJson = async () => {
	const categoryData = await fetch('/category.json');
	const categories = await categoryData.json();
	const jobData = await fetch('/job.json');
	const jobs = await jobData.json();

	return [categories, jobs];
};
const getSingleDataFromJson = async id => {
	const jobData = await fetch('/job.json');
	const jobs = await jobData.json();

	// console.log(jobs, id);
	const job = jobs.find(job => job.id === parseInt(id));
	// console.log(job);

	return job;
};

export { getDataFromJson, getSingleDataFromJson };
