import "./DrinkItem.scss";
import { Button } from "./Button";
import { useDispatch } from "react-redux"; // mport redux hook
import { addItem } from "../redux/cartSlice"; // import action

export const DrinkItem = ({ id, name, price }) => {
	const dispatch = useDispatch(); //hook to send actions to redux
	//console.log("drinkitem props: ", { id, name, price });

	const addToCart = () => {
		dispatch(addItem({ id, name, price })); //send item data to redux store
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
	// 			return [...prevCart, { name, price, quantity: 1, totalPrice: price }];
	// 		}
	// 	});

	// 	// setCartItems((prevCart) => [...prevCart, { name, price }]);
	// };

	return (
		<div className="drinkItem" onClick={addToCart}>
			<Button className="btn1">{name}</Button>
		</div>
	);
};
