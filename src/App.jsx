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
import ListItems from "./components/UserUtils/ListItems";
import AboutUs from "./Pages/AboutUs";
import OurTeam from "./Pages/OurTeam";
import ContactUs from "./Pages/Customer Pages/ContactUs";
import Services from "./Pages/Services";
import ShipNow from "./Pages/Customer Pages/ShipNow";
import GetQutoe from "./Pages/Customer Pages/GetQutoe";
import AllUsersPage from "./Pages/Admin/AllUsersPage";

const router = createBrowserRouter([
	{
		path: "https://aps-test1.netlify.app/",
		element: <Main_Section />,
	},
	{
		path: "https://aps-test1.netlify.app/test",
		element: <div>Hello world!</div>,
	},
	{
		path: "https://aps-test1.netlify.app/about",
		element: <AboutUs />,
	},
	{
		path: "https://aps-test1.netlify.app/ourTeam",
		element: <OurTeam />,
	},
	{
		path: "https://aps-test1.netlify.app/contact",
		element: <ContactUs />,
	},
	{
		path: "https://aps-test1.netlify.app/services",
		element: <Services />,
	},
	{
		path: "https://aps-test1.netlify.app/services/ship_now",
		element: <ShipNow />,
	},
	{
		path: "https://aps-test1.netlify.app/services/get_quote",
		element: <GetQutoe />,
	},
	{
		path: "https://aps-test1.netlify.app/tracking/:id",
		element: <Tracking_Page />,
	},
	{
		path: "https://aps-test1.netlify.app/tracking",
		element: <Tracking_Page />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/login",
		element: <Login />,
	},
	{
		path: "https://aps-test1.netlify.app/user/register",
		element: <Register />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/staff_page",
		element: <User_Page />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/staff_page/all_bookings",
		element: <ListItems />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/book_parcel",
		element: <Booking />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/tracking_update",
		element: <ConsignmentUpdate />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/tracking_update/:id",
		element: <ConsignmentUpdate />,
	},
	{
		path: "https://aps-test1.netlify.app/admin/all_users",
		element: <AllUsersPage />,
	},
]);

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Main_Section />,
// 	},
// 	{
// 		path: "/test",
// 		element: <div>Hello world!</div>,
// 	},
// 	{
// 		path: "/tracking",
// 		element: <Tracking_Page />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Tracking_Page />,
// 			},
// 			{
// 				path: ":id",
// 				element: <Tracking_Page />,
// 			},
// 		],
// 	},
// 	{
// 		path: "/admin",
// 		element: <Login />,
// 		children: [
// 			{
// 				path: "login",
// 				element: <Login />,
// 			},
// 			{
// 				path: "register",
// 				element: <Register />,
// 			},
// 			{
// 				path: "staff_page",
// 				element: <User_Page />,
// 				children: [
// 					{
// 						path: "all_bookings",
// 						element: <ListItems />,
// 					},
// 				],
// 			},
// 			{
// 				path: "book_parcel",
// 				element: <Booking />,
// 			},
// 			{
// 				path: "tracking_update",
// 				element: <ConsignmentUpdate />,
// 			},
// 		],
// 	},
// ]);

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
