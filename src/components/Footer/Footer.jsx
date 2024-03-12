/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../../styles/Footer.module.css";
import Footer_1 from "./Footer_1";
import Footer_2 from "./Footer_2";

const Footer = () => {
	return (
		<>
			<section className={styles.footer_container_1}>
				<Footer_1 />
			</section>

			<section className={styles.footer_container_2}>
				<Footer_2 />
			</section>
		</>
	);
};

export default Footer;
