import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MenuPage } from "./pages/MenuPage";
import { EtaPage } from "./pages/EtaPage";
import { fetchMenu } from "./redux/menuSlice";

const App = () => {
	const dispatch = useDispatch();
	const [apiKey, setApiKey] = useState(null);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";

	// const registerTenant = async (apiKey) => {
	// 	try {
	// 		let response = await fetch(`${BASE_URL}/tenants`, {
	// 			method: "POST",
	// 			headers: { "x-zocom": apiKey },
	// 			body: { name: "Hhh" },
	// 		});
	// 		if (!response.ok) {
	// 			throw new Error("COuld not register tenant");
	// 		}
	// 		let data = await response.json();
	// 		console.log("Tenant registred. Tenant ID: ", data.tenantId);

	// 		return data.tenantId;
	// 	} catch (error) {
	// 		console.log("Error when registering: ", error);
	// 	}
	// };

	useEffect(() => {
		const getApiKey = async () => {
			try {
				const keyRes = await fetch(`${BASE_URL}/keys`, { method: "POST" });
				const keyData = await keyRes.json();
				setApiKey(keyData.key);
			} catch (error) {
				console.log("There was an error loading API key");
			}
		};
		getApiKey();
	}, []);

	useEffect(() => {
		if (apiKey) {
			dispatch(fetchMenu(apiKey)); //Fetch meny when API key is rdy
		}
	}, [apiKey, dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<MenuPage
							apiKey={apiKey}
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
