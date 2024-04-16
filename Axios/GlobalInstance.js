import axios from "axios";

export const globalInstanceForAxios = axios.create({
	baseURL: "https://aps-cargo-sql-server-codes.onrender.com/api/v2",
	// baseURL: "http://localhost:8001/api/v2",
	headers: {
		"Content-Type": "application/json",
	},
});
