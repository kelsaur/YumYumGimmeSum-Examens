import "./OrderModal.scss";
import { AppNav } from "../components/AppNav";
import { MenuItem } from "./MenuItem";

export const OrderModal = ({ setCartIsOpen, cartItems }) => {
	return (
		<div className="orderModalPage">
			<AppNav showCart={true} setCartIsOpen={setCartIsOpen} />
			<div className="orderedMenu">
				{cartItems.length > 0 ? (
					cartItems.map((item, index) => (
						<p key={index}>
							{item.name} - {item.price}SEK
						</p>
					))
				) : (
					<p>Your cart is empty!</p>
				)}
			</div>
		</div>
	);
};
