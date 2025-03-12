import boxTop from "../assets/Boxtop.svg";
import "./EtaTime.scss";

export const EtaTime = ({ eta, orderId, orderValue }) => {
	return (
		<div className="etaTime">
			<img src={boxTop} alt="Food Box" />
			<h2>Dina Wontons Tillagas!</h2>
			<h3>ETA: {eta ? new Date(eta).toLocaleTimeString() : "Unknown"}</h3>
			<p>Order #: {orderId || "N/A"}</p>
			<p>Total: {orderValue || 0} SEK</p>
		</div>
	);
};
