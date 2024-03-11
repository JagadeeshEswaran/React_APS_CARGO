/* eslint-disable no-unused-vars */

import React from "react";
import Hero from "./Hero";
import Services from "./Services";

import styles from "../../styles/Main_Section.module.css";

const Main_Section = () => {
	return (
		<>
			<section className={styles.hero_container}>
				<Hero />
			</section>

			<section className={styles.services_container}>
				<Services />
			</section>
		</>
	);
};

export default Main_Section;
