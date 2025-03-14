import "./CartModal.scss";
import "../components/Button.scss";
import { AppNav } from "./AppNav";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem, setOrderInfo } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { fetchOrderInfo } from "../api";

export const CartModal = ({ setCartIsOpen, apiKey, tenantId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cartItems = useSelector((state) => state.cart.items);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	//console.log("Cart state in CartModal: ", cartItems); //doesn't take quantity into account!!

	const handleCheckout = async () => {
		if (tenantId && !apiKey && cartItems.length === 0) {
			//console.log("Missing tenantId, apiKey, or cart is empty!");
			return;
		}

		//Send array of id's, not cartItems from Redux
		const itemIds = cartItems.flatMap((item) =>
			Array(item.quantity).fill(item.id)
		);
		//console.log("Sending order for items:", itemIds);

		try {
			// console.log("tenantId:", tenantId);
			// console.log("apiKey:", apiKey);

			const orderInfo = await fetchOrderInfo(tenantId, apiKey, itemIds);
			// console.log(
			// 	"Order confirmed: ",
			// 	orderInfo,
			// 	orderInfo.order.eta,
			// 	orderInfo.order.id
			// );
			dispatch(
				setOrderInfo({
					eta: orderInfo.order.eta,
					orderId: orderInfo.order.id,
					orderState: orderInfo.order.state,
				})
			);
			navigate("/eta");
		} catch (error) {
			console.log("Order failed: ", error);
		}
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

				<Button className="btn3" onClick={handleCheckout}>
					TAKE MY MONEY
				</Button>
			</div>
		</div>
	);
};
