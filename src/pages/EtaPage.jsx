import { AppNav } from "../components/AppNav";
import { EtaTime } from "../components/EtaTime";
import { Button } from "../components/Button";
import "./EtaPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const EtaPage = () => {
	const dispatch = useDispatch();
	const { tenantId } = useSelector((state) => state.tenant);
	const { apiKey } = useSelector((state) => state.api);
	const { eta, orderId, orderValue, status, error } = useSelector(
		(state) => state.order
	);

	useEffect(() => {
		if (tenantId && apiKey) {
			dispatch(fetchOrders({ tenantId, apiKey }));
		}
	}, [tenantId, apiKey, dispatch]);

	if (status === "loading") return <p>Fetching order status...</p>;
	if (status === "failed") return <p>Error: {error}</p>;

	return (
		<div className="etaPage">
			<AppNav showLogo={true} showCart={false} />
			<EtaTime eta={eta} orderId={orderId} />
			<div className="etaBtn">
				<Button className="btn1">GÖR EN NY BESTÄLLNING</Button>
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
