const storedCart = localStorage.getItem('shopping-cart');

// *use local storage to merge data
const addToDb = id => {
	let shoppingCart;

	//get the shopping cart
	// const storedCart = localStorage.getItem('shopping-cart');
	shoppingCart = storedCart ? JSON.parse(storedCart) : {};

	//add quantity
	const quantity = shoppingCart[id];
	shoppingCart[id] = quantity ? quantity + 1 : 1;

	//set the shopping cart
	localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

// *use local storage to remove data
const removeFromDb = id => {
	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart);
		if (id in shoppingCart) {
			delete shoppingCart[id];
			localStorage.setItem('shopping-cart', JSON.stringif(shoppingCart));
		}
	}
};

// *use local storage to delete whole data
const deleteWholeDataFromDb = () => {
	localStorage.removeItem('shopping-cart');
};

export { addToDb, removeFromDb, deleteWholeDataFromDb };
