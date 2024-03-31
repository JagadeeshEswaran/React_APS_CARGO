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
	const [userAuth, setUserAuth] = useState(false);

	useEffect(() => {
		const isUserLoggedIn = localStorage.getItem("isLoggedIn");
		if (isUserLoggedIn) {
			setUserAuth(true);
		}
	}, []);

	return (
		<GlobalContextProvider.Provider
			value={{
				userData,
				setUserData,
				consignment_data,
				setConsignmentData,
				userAuth,
				setUserAuth,
			}}>
			{children}
		</GlobalContextProvider.Provider>
	);
};
