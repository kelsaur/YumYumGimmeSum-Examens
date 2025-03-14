import "./MenuItem.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export const MenuItem = ({ id, name, price, ingredients }) => {
	//console.log("menuitem props: ", { id, name, price });
	const dispatch = useDispatch();

	const addToCart = () => {
		//console.log("dispatching addItem: ", { id, name, price });
		dispatch(addItem({ id, name, price }));
	};

	return (
		<div className="menuItem" onClick={addToCart}>
			<div className="menuItemMain">
				<h3 className="itemName">{name}</h3>
				<div className="dots"></div>
				<h3 className="itemPrice">{price} SEK</h3>
			</div>
			<p>{ingredients.join(", ")}</p>
		</div>
	);
};

/*kantarell, scharlottenlök, morot, bladpersilja */
