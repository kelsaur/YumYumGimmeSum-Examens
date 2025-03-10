import { Logo } from "./Logo";
import { CartIcon } from "./CartIcon";
import "./AppNav.scss";
import { useState } from "react";

export const AppNav = ({ showLogo, showCart, setCartIsOpen }) => {
	// const handleCartClick = () => setCartIsOpen(true);

	return (
		<div className="appNav">
			<Logo isVisible={showLogo} />
			<CartIcon isVisible={showCart} setCartIsOpen={setCartIsOpen} />
		</div>
	);
};
