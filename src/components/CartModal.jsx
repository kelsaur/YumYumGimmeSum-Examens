import "./CartModal.scss";
import { AppNav } from "./AppNav";
import { Button } from "./Button";
import "../components/Button.scss";

export const CartModal = ({ setCartIsOpen, cartItems, setCartItems }) => {
	const totalPrice = cartItems.reduce(
		(sum, item) => sum + (item.totalPrice || item.price),
		0
	);

	const itemRemove = (itemName) => {
		setCartItems((prevCart) =>
			prevCart
				.map((item) =>
					item.name === itemName
						? {
								...item,
								quantity: item.quantity - 1,
								totalPrice: item.totalPrice - item.price,
						  }
						: item
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const itemAdd = (itemName) => {
		setCartItems((prevCart) =>
			prevCart.map((item) =>
				item.name === itemName
					? {
							...item,
							quantity: item.quantity + 1,
							totalPrice: item.totalPrice + item.price,
					  }
					: item
			)
		);
	};

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
							<p onClick={() => itemRemove(item.name)}>➖</p>
							<p onClick={() => itemAdd(item.name)}>➕</p>
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
