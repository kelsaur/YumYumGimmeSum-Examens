import "./CartModal.scss";
import { AppNav } from "./AppNav";
import { Button } from "./Button";
import "../components/Button.scss";
import { MenuItem } from "./MenuItem";

export const CartModal = ({ setCartIsOpen, cartItems }) => {
	const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

	return (
		<div className="orderModalPage">
			<AppNav showLogo={false} showCart={true} setCartIsOpen={setCartIsOpen} />
			<div className="orderedMenu">
				{cartItems.length > 0 ? (
					cartItems.map((item, index) => (
						<div key={index} className="cartItem">
							<h3 className="cartItemTitle">{item.name}</h3>
							<div className="dots"></div>
							<h3 className="cartItemPrice">{item.totalPrice}</h3>
						</div>
					))
				) : (
					<p>Your cart is empty!</p>
				)}
			</div>
			<div className="cartButtons">
				<Button className="btn1">
					<span className="btnText">TOTAL</span>
					<span className="btnPrice">{totalPrice}</span>
				</Button>

				<Button className="btn3">TAKE MY MONEY</Button>
			</div>
		</div>
	);
};
