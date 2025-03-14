const BASE_URL = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
//Api url is saved in vite.config.js instead due to CORS errors

export const fetchApiKey = async () => {
	const response = await fetch(`/api/keys`, { method: "POST" });
	if (!response.ok) throw new Error("Failed to fetch API key");
	return response.json();
};

export const fetchMenu = async (apiKey) => {
	const response = await fetch(`/api/menu`, {
		method: "GET",
		headers: { "x-zocom": apiKey },
	});
	if (!response.ok) throw new Error("Failed to fetch menu");
	return response.json();
};

export const fetchTenantId = async (apiKey) => {
	try {
		const storedTenantId = localStorage.getItem("tenantId");
		if (storedTenantId) {
			console.log("Tenant ID already stored: ", storedTenantId);
			return storedTenantId;
		}

		let response = await fetch(`/api/tenants`, {
			method: "POST",
			headers: { "x-zocom": apiKey },
			body: JSON.stringify({ name: "Hhh12345" }),
		});

		if (!response.ok) {
			throw new Error("Could not register tenant");
		}

		let data = await response.json();
		console.log("Tenant registred. Tenant ID: ", data.id);

		localStorage.setItem("tenantId", data.id);
		return data.id;
	} catch (error) {
		console.log("Error when registering: ", error);
	}
};

export const fetchOrderInfo = async (tenantId, apiKey, itemIds) => {
	// console.log("Sending order request");
	// console.log("Tenant id: ", tenantId);
	// console.log("API key: ", apiKey);
	// console.log("Sent items: ", itemIds);

	if (!tenantId || !apiKey || !itemIds.length) {
		console.log("Missin tenantId, apiKey or no items in cart");
		return;
	}

	try {
		let response = await fetch(`/api/${tenantId}/orders`, {
			method: "POST",
			headers: {
				tenant: tenantId,
				"x-zocom": apiKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ items: itemIds }),
			mode: "cors",
		});

		console.log("Api response: ", response.status);

		if (!response.ok) {
			const errorResponse = await response.text();
			throw new Error(`API Error: ${response.status} - ${errorResponse}`);
			//throw new Error("Could not get order information");
		}

		let data = await response.json();
		console.log("Order info fetched: ", data);
		return data;
	} catch (error) {
		console.log("Error getting order info: ", error);
	}
};
