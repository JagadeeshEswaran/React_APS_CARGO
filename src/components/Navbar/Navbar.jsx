/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<section className={styles.navbar_container}>
				<article className={styles.logo}>APS_LOGO</article>

				<article className={styles.Navbar_menu_items}>
					<menu>
						<li>NavLinks_Menu_1</li>
						<li>NavLinks_Menu_2</li>
						<li>NavLinks_Menu_3</li>
						<li>NavLinks_Menu_4</li>
					</menu>
				</article>

				<article>Contacts</article>
			</section>
		</>
	);
};

export default Navbar;
