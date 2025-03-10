import { DrinkItem } from "../components/DrinkItem";
import "./Drinks.scss";

export const Drinks = ({ menu, isLoading }) => {
	const addToCart = () => {
		<Link to="/"></Link>;
	};

	return (
		<div className="drinksArea">
			<div className="drinkItemMain">
				<h3 className="drinkTitle">Drickor</h3>
				<div className="dots"></div>
				<h3 className="drinkPrice">19 SEK</h3>
			</div>
			<div className="drinks" onClick={addToCart}>
				{isLoading ? (
					<p>Loading menu...</p>
				) : (
					menu
						.slice(11, 17)
						.map((item) => <DrinkItem key={item.id} name={item.name} />)
				)}
			</div>
		</div>
	);
};
