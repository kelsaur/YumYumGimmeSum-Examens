import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "./Logo.scss";

export const Logo = ({ isVisible }) => {
	if (!isVisible) return null;

	return (
		<Link to="/">
			<img src={logo} alt="Logo" />
		</Link>
	);
};
