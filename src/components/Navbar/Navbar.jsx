/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<section className={styles.navbar_container}>
				<article className={styles.logo}>
					<a href="/">APS_CARGO</a>
				</article>

				<article className={styles.Navbar_menu_items}>
					<menu>
						<li style={{ textDecoration: "none" }}>
							<a href="/tracking">Track</a>
						</li>
						<li>Link_2</li>
						<li>Link_3</li>
						<li>Link_4</li>
					</menu>
				</article>

				<article>Contacts</article>
			</section>
		</>
	);
};

export default Navbar;
