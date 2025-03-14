import "./Menu.scss";
import { MenuItem } from "./MenuItem";
import { DipItem } from "./DipItem";
import { DrinkItem } from "./DrinkItem";

export const Menu = ({ menuItems, isLoading }) => {
	return (
		<div className="menu">
			<h1>Meny</h1>
			{isLoading ? (
				<p>Menyn laddas...</p>
			) : (
				menuItems
					.slice(0, 5)
					.map((item) => (
						<MenuItem
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							ingredients={item.ingredients}
						/>
					))
			)}

			{
				<div className="dipsArea">
					<div className="dipItemMain">
						<h3 className="dipTitle">Dipsås</h3>
						<div className="dots"></div>
						<h3 className="dipPrice">19 SEK</h3>
					</div>
				</div>
			}

			<div className="dipItemsArea">
				{isLoading ? (
					<p>Loading menu...</p>
				) : (
					menuItems
						.slice(5, 11)
						.map((item) => (
							<DipItem
								key={item.id}
								id={item.id}
								name={item.name}
								price={item.price}
							/>
						))
				)}
			</div>

			{
				<div className="drinksArea">
					<div className="drinkItemMain">
						<h3 className="drinkTitle">Drickor</h3>
						<div className="dots"></div>
						<h3 className="drinkPrice">19 SEK</h3>
					</div>
				</div>
			}

			<div className="drinkItemsArea">
				{isLoading ? (
					<p>Loading menu...</p>
				) : (
					menuItems
						.slice(11, 17)
						.map((item) => (
							<DrinkItem
								key={item.id}
								id={item.id}
								name={item.name}
								price={item.price}
							/>
						))
				)}
			</div>
		</div>
	);
};
