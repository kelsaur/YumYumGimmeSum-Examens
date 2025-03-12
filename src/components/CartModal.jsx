import "./CartModal.scss";
import { AppNav } from "./AppNav";
import { Button } from "./Button";
import "../components/Button.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export const CartModal = ({ setCartIsOpen }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cartItems = useSelector((state) => state.cart.items);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	console.log("Cart state in CartModal:", cartItems);
	// const { apiKey } = useSelector((state) => state.api);
	// const { status } = useSelector((state) => state.order);

	// dispatch();
	// const totalPrice = cartItems.reduce(
	// 	(sum, item) => sum + (item.totalPrice || item.price),
	// 	0
	// );

	// const itemRemove = (itemName) => {
	// 	setCartItems((prevCart) =>
	// 		prevCart
	// 			.map((item) =>
	// 				item.name === itemName
	// 					? {
	// 							...item,
	// 							quantity: item.quantity - 1,
	// 							totalPrice: item.totalPrice - item.price,
	// 					  }
	// 					: item
	// 			)
	// 			.filter((item) => item.quantity > 0)
	// 	);
	// };

	// const itemAdd = (itemName) => {
	// 	setCartItems((prevCart) =>
	// 		prevCart.map((item) =>
	// 			item.name === itemName
	// 				? {
	// 						...item,
	// 						quantity: item.quantity + 1,
	// 						totalPrice: item.totalPrice + item.price,
	// 				  }
	// 				: item
	// 		)
	// 	);
	// };

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
							<p onClick={() => dispatch(removeItem({ id: item.id }))}>➖</p>
							<p
								onClick={() =>
									dispatch(
										addItem({ id: item.id, name: item.name, price: item.price })
									)
								}
							>
								➕
							</p>
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
