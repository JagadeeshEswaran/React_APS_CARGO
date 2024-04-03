/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import main_icon from "../../assets/Company Icons/Figma/Icon_Full_Light.svg";
import "../../styles/Navbar.css";
import { useAppContext } from "../../GlobalContext/AppContext";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
	const { userAuth } = useAppContext();

	const handleSignOut = () => {
		localStorage.clear();
	};

	return (
		<>
			<section className="navbar_container">
				<article className="logo">
					<a href="/" className="text-light">
						<img src={main_icon} alt="APS Cargo Icon" width={160} height={80} />
					</a>
				</article>

				<article className="Navbar_menu_items">
					<menu>
						<article>
							<a href="">About Us</a>
						</article>
						<article>
							<a href="/tracking">Track</a>
						</article>
						<article>
							<a href="">Our Team</a>
						</article>

						{userAuth ? (
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

						<article>
							<a href="/contacts">Contacts</a>
						</article>
					</menu>
				</article>

				<article
					className="d-flex justify-content-center align-items-center me-5 "
					style={{ width: "auto", height: "auto" }}>
					<article
						className="fs-2 border rounded-circle object-fit-cover d-flex justify-content-center align-items-center user_icon"
						type="button"
						style={{ height: "3rem", width: "3rem" }}>
						<FaUserAlt />
					</article>
				</article>
			</section>
		</>
	);
};

export default Navbar;
