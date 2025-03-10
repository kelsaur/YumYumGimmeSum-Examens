import "./DipItem.scss";
import { Button } from "./Button";

export const DipItem = ({ name, price, setCartItems }) => {
	const addToCart = () => {
		setCartItems((prevCart) => [...prevCart, { name, price }]);
	};

	return (
		<div className="dipItem" onClick={addToCart}>
			<Button className="btn1">{name}</Button>
		</div>
	);
};
