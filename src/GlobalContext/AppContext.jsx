/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const GlobalContextProvider = createContext();

export const useAppContext = () => useContext(GlobalContextProvider);

export const AppContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		username: "",
		token: "",
	});

	return (
		<GlobalContextProvider.Provider value={{ userData, setUserData }}>
			{children}
		</GlobalContextProvider.Provider>
	);
};
