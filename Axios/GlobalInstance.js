import axios from "axios";

export const globalInstanceForAxios = axios.create({
	baseURL: "http://127.0.0.1:8001/api/v2",
	headers: {
		"Content-Type": "application/json",
	},
});
