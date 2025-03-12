import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuPage } from "./pages/MenuPage";
import { EtaPage } from "./pages/EtaPage";
import { fetchApiKey } from "./redux/apiSlice";
import { fetchMenu } from "./redux/menuSlice";
import { registerTenant } from "./redux/tenantSlice";

const App = () => {
	const dispatch = useDispatch();
	const { apiKey, status: apiStatus } = useSelector((state) => state.api);
	const { status: tenantStatus } = useSelector((state) => state.tenant);
	// const [apiKey, setApiKey] = useState(null);
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
		if (!apiKey && apiStatus === "idle") {
			//Only fetch when status is idle to prevent reftching on every render
			dispatch(fetchApiKey());
		}
	}, [apiKey, apiStatus, dispatch]);

	useEffect(() => {
		const storedTenant = localStorage.getItem("tenantId");

		if (apiKey && !storedTenant && tenantStatus === "idle") {
			console.log("Registering tenant...");
			dispatch(registerTenant({ apiKey }));
		} else if (storedTenant) {
			//console.log("Tenant already exist: ", tenantId);
		}
	}, [apiKey, tenantStatus, dispatch]);

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
