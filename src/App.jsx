/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main_Section from "./components/Main/Main_Section";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tracking_Page from "./Pages/Tracking_Page";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User_Page from "./components/Main/User_Page";
import Booking from "./components/Data_Entry/Booking";
import ConsignmentUpdate from "./Pages/ConsignmentUpdate";

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
	{
		path: "/admin/login",
		element: <Login />,
	},
	{
		path: "/admin/register",
		element: <Register />,
	},
	{
		path: "/admin/staff_page",
		element: <User_Page />,
	},
	{
		path: "/admin/book_parcel",
		element: <Booking />,
	},
	{
		path: "/admin/tracking_update",
		element: <ConsignmentUpdate />,
	},
]);

const App = () => {
	return (
		<>
			<Navbar />

			<RouterProvider router={router} />

			<ToastContainer />

			<Footer />
		</>
	);
};

export default App;
