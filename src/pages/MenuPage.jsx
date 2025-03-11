import { AppNav } from "../components/AppNav";
import { Menu } from "../components/Menu";
import { CartModal } from "../components/CartModal";
import "./MenuPage.scss";
import { useSelector } from "react-redux";

export const MenuPage = ({
	cartIsOpen,
	setCartIsOpen,
	cartItems,
	setCartItems,
}) => {
	//Access menu state from Redux store. useSelector gets the entire menu slice from Redux
	const {
		items: menuItems,
		status,
		error,
	} = useSelector((state) => state.menu);
	//console.log(status, menuItems);

	if (status === "loading") return <p>Loading menu...</p>;
	if (status === "failed") return <p>Error fetching menu: {error}</p>;

	return (
		<div className="menuPage">
			<AppNav showLogo={true} showCart={true} setCartIsOpen={setCartIsOpen} />
			<Menu
				menuItems={menuItems}
				status={status === "loading"}
				setCartItems={setCartItems}
			/>
			{cartIsOpen && (
				<CartModal
					setCartIsOpen={setCartIsOpen}
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>
			)}
		</div>
	);
};
