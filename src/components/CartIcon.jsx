import "../assets/Cart.svg";
import cartIcon from "../assets/Cart.svg";
import "./CartIcon.scss";

export const CartIcon = ({ isVisible, setCartIsOpen }) => {
	if (!isVisible) return null;

	return (
		<img
			src={cartIcon}
			alt="Cart"
			onClick={() => {
				setCartIsOpen((prev) => !prev);
			}}
		/>
	);
};
