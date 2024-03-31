/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { useAppContext } from "../../GlobalContext/AppContext";

const Navbar = () => {
	const { userAuth } = useAppContext();

	const handleSignOut = () => {
		localStorage.clear();
	};

	return (
		<>
			<section className={styles.navbar_container}>
				<article className={styles.logo}>
					<a href="/">APS_CARGO</a>
				</article>

				<article className={styles.Navbar_menu_items}>
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
					</menu>
				</article>

				<article>Contacts</article>
			</section>
		</>
	);
};

export default Navbar;
