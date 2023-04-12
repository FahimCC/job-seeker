// *use local storage to merge data
const addToDb = id => {
	let appliedJob;

	const storedCart = localStorage.getItem('applied-job');
	appliedJob = storedCart ? JSON.parse(storedCart) : {};

	const quantity = appliedJob[id];
	if (quantity) {
		localStorage.setItem('applied-job', JSON.stringify(appliedJob));
		return false;
	} else {
		appliedJob[id] = 1;
		localStorage.setItem('applied-job', JSON.stringify(appliedJob));
		return true;
	}
};
export { addToDb };
