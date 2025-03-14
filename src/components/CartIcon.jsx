import "./CartIcon.scss";
import "../assets/Cart.svg";
import cartIcon from "../assets/Cart.svg";
import { useSelector } from "react-redux";

export const CartIcon = ({ isVisible, setCartIsOpen }) => {
	const totalItems = useSelector((state) => state.cart.totalQuantity);
	console.log("total items: ", totalItems);
	if (!isVisible) return null;

	return (
		<div className="cartIcon-container">
			<img
				src={cartIcon}
				alt="Cart"
				onClick={() => {
					setCartIsOpen((prev) => !prev);
				}}
			/>
			{totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
		</div>
	);
};
