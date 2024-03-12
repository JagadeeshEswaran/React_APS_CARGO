/* eslint-disable no-unused-vars */
import React from "react";

import styles from "../../styles/Footer.module.css";

const Footer_2 = () => {
	const yearOfCR = 2024;

	return (
		<>
			<div>Footer_2</div>

			<h3 className={styles.footer_2_h1}>
				APS Cargo &#169; <span>{yearOfCR}</span>
			</h3>
		</>
	);
};

export default Footer_2;
