import { AppNav } from "../components/AppNav";
import { EtaTime } from "../components/EtaTime";
import { Button } from "../components/Button";
import "./EtaPage.scss";

export const EtaPage = () => {
	return (
		<div className="etaPage">
			<AppNav showLogo={true} showCart={false} />
			<EtaTime />
			<div className="etaBtn">
				<Button className="btn1">GÖR EN NY BESTÄLLNING</Button>
				<Button className="btn3">SE KVITTO</Button>
			</div>
		</div>
	);
};
