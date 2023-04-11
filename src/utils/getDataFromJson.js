export const getDataFromJson = async () => {
	const categoryData = await fetch('/category.json');
	const category = await categoryData.json();
	return category;
};
