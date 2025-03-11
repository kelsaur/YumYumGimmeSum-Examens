import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchMenu } from "../redux/menuSlice";

function MenuList({ apiKey }) {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.menu);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchMenu(apiKey));
		}
	}, [status, dispatch]);

	let content;

	if (status === "loading") {
		content = <p>Loading menu...</p>;
	} else if (status === "succeeded") {
		content = (
			<ul>
				{items.map((menu) => (
					<li key={menu.id}>{menu.name}</li>
				))}
			</ul>
		);
	} else if (status === "failed") {
		content = <p>Fel på hämtning av API:et: {error}</p>;
	}

	return (
		<div>
			<h2>JSON Menu</h2>
			{content}
		</div>
	);
}

export default MenuList;
