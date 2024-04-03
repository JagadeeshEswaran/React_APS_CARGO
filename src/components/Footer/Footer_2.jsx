/* eslint-disable no-unused-vars */
import React from "react";

import "../../styles/Footer.css";
import main_logo_for_footer from "../../assets/Company Icons/Figma/Icon_Full_Light.svg";

const Footer_2 = () => {
	const yearOfCR = 2024;

	return (
		<section className="text position-relative d-flex justify-content-center align-items-center">
			<div className="">
				<img
					src={main_logo_for_footer}
					alt="APS Cargo Icon for Footer"
					width={400}
					height={100}
				/>

				<h3 className="footer_2_h1 w-100" style={{ bottom: "0" }}>
					APS Cargo &#169; <span className="me-4">{yearOfCR}</span>{" "}
					<span className="me-4">|</span> All Copyrights Reserved
				</h3>
			</div>
		</section>
	);
};

export default Footer_2;
