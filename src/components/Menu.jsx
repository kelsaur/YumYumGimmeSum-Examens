import { MenuItem } from "./MenuItem";
import { Dips } from "./Dips";
import { Drinks } from "./Drinks";
import "./Menu.scss";

import { menuData } from "../data/menuData";

export const Menu = ({ menuItems, isLoading, setCartItems }) => {
	return (
		<div className="menu">
			<h1>Meny</h1>
			{isLoading ? (
				<p>Loading menu...</p>
			) : (
				menuItems
					.slice(0, 5)
					.map((item) => (
						<MenuItem
							key={item.id}
							name={item.name}
							price={item.price}
							ingredients={item.ingredients}
							descIsVisible={true}
							setCartItems={setCartItems}
						/>
					))
			)}

			{/* <MenuItem descIsVisible={true} />
			<MenuItem descIsVisible={true} />
			<MenuItem descIsVisible={true} />
			<MenuItem descIsVisible={true} />
			<MenuItem descIsVisible={true} /> */}
			<Dips
				menu={menuItems}
				isLoading={isLoading}
				setCartItems={setCartItems}
			/>
			<Drinks
				menu={menuItems}
				isLoading={isLoading}
				setCartItems={setCartItems}
			/>
		</div>
	);
};
