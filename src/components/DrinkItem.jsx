import "./DrinkItem.scss";
import { Button } from "./Button";

export const DrinkItem = ({ name }) => {
	const addToCart = () => {
		<Link to="/"></Link>;
	};

	return (
		<>
			<div className="drinkItem" onClick={addToCart}>
				<Button className="btn1">{name}</Button>
			</div>
		</>
	);
};
