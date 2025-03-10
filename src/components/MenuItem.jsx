import { Link } from "react-router-dom";
import "./MenuItem.scss";

export const MenuItem = ({
	name,
	price,
	ingredients,
	descIsVisible,
	setCartItems,
}) => {
	const addToCart = () => {
		setCartItems((prevCart) => [...prevCart, { name, price, ingredients }]);
	};

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
