import "./DrinkItem.scss";
import { Button } from "./Button";

export const DrinkItem = ({ name, price, setCartItems }) => {
	const addToCart = () => {
		setCartItems((prevCart) => [...prevCart, { name, price }]);
	};

	return (
		<div className="drinkItem" onClick={addToCart}>
			<Button className="btn1">{name}</Button>
		</div>
	);
};
