import "./EtaPage.scss";
import { AppNav } from "../components/AppNav";
import { EtaTime } from "../components/EtaTime";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

export const EtaPage = ({ setCartIsOpen }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleNewOrder = () => {
		setCartIsOpen(false);
		dispatch(clearCart());
		navigate("/");
	};

	return (
		<div className="etaPage">
			<AppNav showLogo={true} showCart={false} setCartIsOpen={setCartIsOpen} />
			<EtaTime />
			<div className="etaBtn">
				<Button className="btn1" onClick={handleNewOrder}>
					GÖR EN NY BESTÄLLNING
				</Button>
				<Button className="btn3">SE KVITTO</Button>
			</div>
		</div>
		// <div className="etaPage">
		// 	<AppNav showLogo={true} showCart={false} />
		// 	<EtaTime />
		// 	<div className="etaBtn">
		// 		<Button className="btn1">GÖR EN NY BESTÄLLNING</Button>
		// 		<Button className="btn3">SE KVITTO</Button>
		// 	</div>
		// </div>
	);
};
