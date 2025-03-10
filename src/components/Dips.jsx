import { DipItem } from "./DipItem";
import "./Dips.scss";

export const Dips = ({ menu, isLoading, setCartItems }) => {
	const addToCart = () => {
		<Link to="/"></Link>;
	};

	return (
		<div className="dipsArea">
			<div className="dipItemMain">
				<h3 className="dipTitle">Dipsås</h3>
				<div className="dots"></div>
				<h3 className="dipPrice">19 SEK</h3>
			</div>
			<div className="dips" onClick={addToCart}>
				{isLoading ? (
					<p>Loading menu...</p>
				) : (
					menu
						.slice(5, 11)
						.map((item) => <DipItem key={item.id} name={item.name} />)
				)}
			</div>
		</div>
	);
};
