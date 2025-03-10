import { AppNav } from "../components/AppNav";
import { Menu } from "../components/Menu";
import { CartModal } from "../components/CartModal";
import "./MenuPage.scss";

export const MenuPage = ({
	menu,
	isLoading,
	cartIsOpen,
	setCartIsOpen,
	cartItems,
	setCartItems,
}) => {
	return (
		<div className="menuPage">
			<AppNav showLogo={true} showCart={true} setCartIsOpen={setCartIsOpen} />
			<Menu
				menuItems={menu}
				isLoading={isLoading}
				setCartItems={setCartItems}
			/>
			{cartIsOpen && (
				<CartModal setCartIsOpen={setCartIsOpen} cartItems={cartItems} />
			)}
		</div>
	);
};
