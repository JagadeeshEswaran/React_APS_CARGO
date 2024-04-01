/* eslint-disable no-unused-vars */

import React from "react";
import Hero from "./Hero";
import Services from "./Services";

import "../../styles/Main_Section.css";
import Capabilities from "./Capabilities";
import Customers from "./Customers";

const Main_Section = () => {
	return (
		<>
			<section className="hero_container">
				<Hero />
			</section>

			<section>
				<Services />
			</section>

			<section>
				<Capabilities />
			</section>

			<section>
				<Customers />
			</section>
		</>
	);
};

export default Main_Section;
