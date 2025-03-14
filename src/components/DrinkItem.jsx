import "./DrinkItem.scss";
import { Button } from "./Button";
import { useDispatch } from "react-redux"; // mport redux hook
import { addItem } from "../redux/cartSlice"; // import action

export const DrinkItem = ({ id, name, price }) => {
	const dispatch = useDispatch(); //hook to send actions to redux
	//console.log("drinkitem props: ", { id, name, price });

	const addToCart = () => {
		//console.log("dispatching addItem: ", { id, name, price });
		dispatch(addItem({ id, name, price })); //send item data to redux store
	};

	return (
		<div className="drinkItem" onClick={addToCart}>
			<Button className="btn1">{name}</Button>
		</div>
	);
};
