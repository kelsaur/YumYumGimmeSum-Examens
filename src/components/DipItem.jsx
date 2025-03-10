import "./DipItem.scss";
import { Button } from "./Button";

export const DipItem = ({ name, price, setCartItems }) => {
	const addToCart = () => {
		setCartItems((prevCart) => {
			const existingItem = prevCart.find((item) => item.name === name);

			if (existingItem) {
				return prevCart.map((item) =>
					item.name === name
						? {
								...item,
								quantity: item.quantity + 1,
								totalPrice: (item.totalPrice || 0) + price,
						  }
						: item
				);
			} else {
				return [...prevCart, { name, price, quantity: 1, totalPrice: price }];
			}
		});

		// setCartItems((prevCart) => [...prevCart, { name, price }]);
	};

	return (
		<div className="dipItem" onClick={addToCart}>
			<Button className="btn1">{name}</Button>
		</div>
	);
};
