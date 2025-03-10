import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/main.scss";
import { MenuPage } from "./pages/MenuPage";
import { EtaPage } from "./pages/EtaPage";

const App = () => {
	const [apiKey, setApiKey] = useState(null);
	const [menu, setMenu] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

	useEffect(() => {
		const getApiKey = async () => {
			try {
				const keyRes = await fetch(`${BASE_URL}/keys`, { method: "POST" });
				const keyData = await keyRes.json();
				setApiKey(keyData.key);
			} catch (error) {
				alert("There was an error loading API key");
			}
		};
		getApiKey();
	}, []);

	useEffect(() => {
		if (!apiKey) return;

		const fetchMenu = async () => {
			try {
				let res = await fetch(`${BASE_URL}/menu`, {
					method: "GET",
					headers: { "x-zocom": apiKey },
				});

				const data = await res.json();
				setMenu(data.items);
			} catch (error) {
				alert("There was an error fetching menu");
			} finally {
				setIsLoading(false);
			}
		};
		fetchMenu();
	}, [apiKey]);
	// console.log(apiKey, menu);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<MenuPage
							menu={menu}
							isLoading={isLoading}
							cartIsOpen={cartIsOpen}
							setCartIsOpen={setCartIsOpen}
							cartItems={cartItems}
							setCartItems={setCartItems}
						/>
					}
				/>
				<Route
					path="eta"
					element={<EtaPage />}
					isCartOpen={cartIsOpen}
					setCartIsOpen={setCartIsOpen}
				/>
				{/* <Route path="ordermodal" element={<OrderModal />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
