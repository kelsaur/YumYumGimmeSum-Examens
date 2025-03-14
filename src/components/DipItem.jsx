import "./DipItem.scss";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export const DipItem = ({ id, name, price }) => {
	const dispatch = useDispatch();

	const addToCart = () => {
		//console.log("dispatching addItem: ", { id, name, price });
		dispatch(addItem({ id, name, price }));
	};

	return (
		<div className="dipItem" onClick={addToCart}>
			<Button className="btn1">{name}</Button>
		</div>
	);
};
