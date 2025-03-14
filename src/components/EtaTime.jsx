import "./EtaTime.scss";
import boxTop from "../assets/Boxtop.svg";
import { useSelector } from "react-redux";

export const EtaTime = () => {
	const eta = useSelector((state) => state.cart.eta);
	const orderId = useSelector((state) => state.cart.orderId);

	const timeLeft = () => {
		const etaDate = new Date(eta);
		const now = new Date();
		const difference = etaDate - now;

		const minutesLeft = Math.ceil(difference / (1000 * 60));
		return minutesLeft;
	};

	return (
		<div className="etaTime">
			<img src={boxTop} alt="Food Box" />
			<h2>{"Dina Wontons Tillagas!"}</h2>
			<h3>ETA {/*eta || "Unknown"*/ timeLeft()} MIN</h3>
			<p>#{orderId || "N/A"}</p>
		</div>
	);
};
