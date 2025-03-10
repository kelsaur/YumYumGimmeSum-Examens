import "./MenuItem.scss";

export const MenuItem = ({
	name,
	price,
	ingredients,
	descIsVisible,
	setCartItems,
}) => {
	const addToCart = () => {
		setCartItems((prevCart) => {
			const existingItem = prevCart.find((item) => item.name === name);

			if (existingItem) {
				return prevCart.map((item) =>
					item.name === name
						? {
								...item,
								quantity: item.quantity + 1,
								totalPrice: (item.totalPrice || 0) + price,
						  }
						: item
				);
			} else {
				return [
					...prevCart,
					{ name, price, ingredients, quantity: 1, totalPrice: price },
				];
			}

			// setCartItems((prevCart) => [...prevCart, { name, price, ingredients }]);
		});
	};

	return (
		<div className="menuItem" onClick={addToCart}>
			<div className="menuItemMain">
				<h3 className="itemName">{name}</h3>
				<div className="dots"></div>
				<h3 className="itemPrice">{price} SEK</h3>
			</div>
			{descIsVisible && (ingredients ? <p>{ingredients.join(", ")}</p> : "")}
		</div>
	);
};

/*kantarell, scharlottenlök, morot, bladpersilja */
