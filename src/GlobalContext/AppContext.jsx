/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContextProvider = createContext();

export const useAppContext = () => useContext(GlobalContextProvider);

export const AppContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		username: "",
		token: "",
	});
	const [consignment_data, setConsignmentData] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("");
	const [isAdminUser, setIsAdminUser] = useState(false);

	useEffect(() => {
		const isUserLoggedIn = localStorage.getItem("isLoggedIn");
		const username = localStorage.getItem("username");
		const userType =
			localStorage.getItem("token") ===
			"4bdf3d11b0b33f7420cee64b888285ed3a155610";

		if (isUserLoggedIn) {
			setIsLoggedIn(true);
			setUsername(username);
			setIsAdminUser(userType);
		}
	}, []);

	return (
		<GlobalContextProvider.Provider
			value={{
				userData,
				setUserData,
				consignment_data,
				setConsignmentData,
				isLoggedIn,
				username,
				isAdminUser,
			}}>
			{children}
		</GlobalContextProvider.Provider>
	);
};
