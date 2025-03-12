import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "./MenuItem.scss";

export const MenuItem = ({ id, name, price, ingredients, descIsVisible }) => {
	//console.log("menuitem props: ", { id, name, price });
	const dispatch = useDispatch();

	const addToCart = () => {
		console.log("dispatching addItem: ", { id, name, price });
		dispatch(addItem({ id, name, price }));
	};

	// const addToCart = () => {
	// 	setCartItems((prevCart) => {
	// 		const existingItem = prevCart.find((item) => item.name === name);

	// 		if (existingItem) {
	// 			return prevCart.map((item) =>
	// 				item.name === name
	// 					? {
	// 							...item,
	// 							quantity: item.quantity + 1,
	// 							totalPrice: (item.totalPrice || 0) + price,
	// 					  }
	// 					: item
	// 			);
	// 		} else {
	// 			//Create an object that becomes the cartItem if item doesn't already exist in cart
	// 			return [
	// 				...prevCart,
	// 				{ name, price, ingredients, quantity: 1, totalPrice: price },
	// 			];
	// 		}

	// 		// setCartItems((prevCart) => [...prevCart, { name, price, ingredients }]);
	// 	});
	// };

	return (
		<div className="menuItem" onClick={addToCart}>
			<div className="menuItemMain">
				<h3 className="itemName">{name}</h3>
				<div className="dots"></div>
				<h3 className="itemPrice">{price} SEK</h3>
			</div>
			{descIsVisible && (ingredients ? <p>{ingredients.join(", ")}</p> : "")}
		</div>
	);
};

/*kantarell, scharlottenlök, morot, bladpersilja */
