/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useAppContext } from "../GlobalContext/AppContext";

// Helper to handle the User Conext functionality
export const HandleUserLogin = ({ userData }) => {
	const { setUserData } = useAppContext();

	console.log(userData);

	setUserData(userData);

	return;
};
