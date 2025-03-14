import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuPage } from "./pages/MenuPage";
import { EtaPage } from "./pages/EtaPage";
import { fetchApiKey, fetchMenu, fetchTenantId } from "./api";

const App = () => {
	const [apiKey, setApiKey] = useState(null);
	const [tenantId, setTenantId] = useState(
		localStorage.getItem("tenantId") || null
	);
	const [menuItems, setMenuItems] = useState([]);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getApiKey = async () => {
			try {
				const data = await fetchApiKey();
				setApiKey(data.key);
				//console.log("Api key has been fetched: ", data.key);
			} catch (err) {
				console.log("Error fetching API key: ", err);
			}
		};

		if (!apiKey) {
			getApiKey();
		}
	}, []);

	useEffect(() => {
		const getTenant = async () => {
			if (apiKey && !tenantId) {
				console.log("Checking for tenant id..");
				const id = await fetchTenantId(apiKey);
				if (id) {
					setTenantId(id);
					console.log("Stored tenant ID: ", id);
				}
			}
		};

		getTenant();
	}, [apiKey, tenantId]);

	useEffect(() => {
		const getMenu = async () => {
			if (apiKey) {
				try {
					const data = await fetchMenu(apiKey);
					setMenuItems(data.items);
					setLoading(false);
					//console.log("Menu fetched: ", data.items);
				} catch (err) {
					console.error("Error fetching menu: ", err);
					setError("Failed to fetch menu");
				}
			}
		};
		getMenu();
	}, [apiKey]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<MenuPage
							apiKey={apiKey}
							tenantId={tenantId}
							menuItems={menuItems}
							isLoading={loading}
							cartIsOpen={cartIsOpen}
							setCartIsOpen={setCartIsOpen}
						/>
					}
				/>
				<Route
					path="eta"
					element={
						<EtaPage cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
					}
				/>
				{/* <Route path="ordermodal" element={<OrderModal />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
