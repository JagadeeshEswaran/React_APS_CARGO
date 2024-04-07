/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { IoIosApps } from "react-icons/io";

import main_icon from "../../assets/Company Icons/Final/Icon_Full_Final.svg";
import "../../styles/Navbar.css";
import { useAppContext } from "../../GlobalContext/AppContext";
import UserControl from "../../Utils/Convas/UserControl";

const Navbar = () => {
	const { isLoggedIn, username } = useAppContext();

	const handleSignOut = () => {
		localStorage.clear();

		// setTimeout(() => {
		location.reload();
		// }, 1000);
	};

	return (
		<>
			<section className="navbar_container">
				<article className="logo">
					<a href="/" className="text-light">
						<img src={main_icon} alt="APS Cargo Icon" width={160} height={80} />
					</a>
				</article>

				<article
					className="Navbar_menu_items rounded me-4 mt-2"
					style={{ width: "auto", minWidth: "70vw" }}>
					<menu>
						{isLoggedIn ? (
							<article>
								<a href="/">Home</a>
							</article>
						) : (
							<></>
						)}

						<article>
							<a href="/about">About Us</a>
						</article>
						<article>
							<a href="/services">Our Services</a>
						</article>
						<article>
							<a href="/tracking">Track</a>
						</article>
						<article>
							<a href="/ourTeam">Management</a>
						</article>

						{isLoggedIn ? (
							<article>
								<a href="/" onClick={() => handleSignOut()}>
									Sign out
								</a>
							</article>
						) : (
							<article>
								<a href="/admin/login">Sign In</a>
							</article>
						)}

						{!isLoggedIn ? (
							<article>
								<a href="/contact">Contacts</a>
							</article>
						) : (
							<article
								className="d-flex justify-content-center align-items-center me-2"
								style={{ width: "auto", height: "auto" }}>
								<article
									className="fs-2 rounded-circle object-fit-cover d-flex justify-content-center align-items-center user_icon"
									type="button"
									data-bs-toggle="offcanvas"
									data-bs-target="#user_canvas"
									aria-controls="user_canvas"
									style={{ height: "2.5rem", width: "2.5rem" }}>
									<IoIosApps />
								</article>
							</article>
						)}
					</menu>
				</article>

				{isLoggedIn ? <UserControl /> : <></>}
			</section>
		</>
	);
};

export default Navbar;
