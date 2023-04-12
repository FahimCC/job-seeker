const getDataFromJson = async () => {
	const categoryData = await fetch('/category.json');
	const categories = await categoryData.json();
	const jobData = await fetch('/job.json');
	const jobs = await jobData.json();

	return { categories, jobs };
};

export { getDataFromJson };
