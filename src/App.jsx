/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main_Section from "./components/Main/Main_Section";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tracking_Page from "./Pages/Tracking_Page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main_Section />,
	},
	{
		path: "/test",
		element: <div>Hello world!</div>,
	},
	{
		path: "/tracking/:id",
		element: <Tracking_Page />,
	},
	{
		path: "/tracking",
		element: <Tracking_Page />,
	},
]);

const App = () => {
	return (
		<>
			<Navbar />

			<RouterProvider router={router} />

			<Footer />
		</>
	);
};

export default App;
