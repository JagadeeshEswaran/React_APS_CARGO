/* eslint-disable no-unused-vars */
import React from "react";

import main_logo_for_footer from "../../assets/Company Icons/Final/Icon_Full_Final.svg";

const Footer_1 = () => {
	return (
		<footer className="footer_1_container d-flex justify-content-evenly align-items-center w-75">
			<article>
				<img
					src={main_logo_for_footer}
					alt="APS Cargo Icon for Footer"
					width={400}
					height={100}
				/>
			</article>

			<article className="navbar1_partition"></article>

			<article className="navbar1_links_container">
				<a href="/" className="">
					<h5>Home</h5>
				</a>
				<a href="/about" className="">
					<h5>About</h5>
				</a>
				<a href="/services" className="">
					<h5>Services</h5>
				</a>
				<a href="/tracking" className="">
					<h5>Track Shipment</h5>
				</a>
				<a href="/contact">
					<h5>Contact Us</h5>
				</a>
			</article>
		</footer>
	);
};

export default Footer_1;
