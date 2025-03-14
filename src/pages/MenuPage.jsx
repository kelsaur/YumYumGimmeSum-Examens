import "./MenuPage.scss";
import { AppNav } from "../components/AppNav";
import { Menu } from "../components/Menu";
import { CartModal } from "../components/CartModal";

export const MenuPage = ({
	menuItems,
	isLoading,
	cartIsOpen,
	setCartIsOpen,
	apiKey,
	tenantId,
}) => {
	return (
		<div className="menuPage">
			<AppNav showLogo={true} showCart={true} setCartIsOpen={setCartIsOpen} />
			<Menu menuItems={menuItems} isLoading={isLoading} />
			{cartIsOpen && (
				<CartModal
					setCartIsOpen={setCartIsOpen}
					apiKey={apiKey}
					tenantId={tenantId}
				/>
			)}
		</div>
	);
};
