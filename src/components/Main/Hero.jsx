/* eslint-disable no-unused-vars */
import React from "react";
import Tracker from "./Tracker";
import styles from "../../styles/Main_Section.module.css";

const Hero = () => {
	return (
		<>
			<section className={styles.hero_container}>
				<article className={styles.hero_img_container}>
					{/* <img src="/hero_img_2.jpg" alt="Hero Image" /> */}
				</article>

				<article className={styles.tracker_container}>
					<Tracker />
				</article>
			</section>
		</>
	);
};

export default Hero;
