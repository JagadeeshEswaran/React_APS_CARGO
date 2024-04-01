/* eslint-disable no-unused-vars */
import React from "react";
import Tracker from "./Tracker";
import "../../styles/Main_Section.css";

const Hero = () => {
	return (
		<>
			<section className="hero_container">
				<article className="hero_img_container">
					{/* <img src="/hero_img_2.jpg" alt="Hero Image" /> */}
				</article>

				<article className="tracker_container">
					{/* <article className={styles.tracker_container_2}> */}
					<Tracker />
				</article>
			</section>
		</>
	);
};

export default Hero;
