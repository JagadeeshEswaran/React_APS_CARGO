/* eslint-disable no-unused-vars */
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import main_logo_for_footer from "../../assets/Company Icons/Final/Icon_Full_Final.svg";

const Footer_1 = () => {
	return (
		<footer className="footer_1_container d-flex justify-content-evenly align-items-center w-75  h-100">
			<section className="">
				<article className="py-5">
					<img
						src={main_logo_for_footer}
						alt="APS Cargo Icon for Footer"
						width={400}
						height={100}
					/>
				</article>

				<article className="ms-5 mt-5 d-flex justify-content-center align-items-center fs-1">
					<article type="button">
						<FaSquareFacebook className="fs-1 me-5 footer_socialmedia_icons rounded" />
					</article>

					<article type="button">
						<FaSquareXTwitter className="fs-1 me-5 footer_socialmedia_icons rounded" />
					</article>

					<article type="button">
						<FaYoutube className="fs-1 me-5 footer_socialmedia_icons rounded " />
					</article>

					<article className="" type="button">
						<FaSquareInstagram className="fs-1 me-5 footer_socialmedia_icons rounded" />
					</article>
				</article>
			</section>

			<article
				className="navbar1_partition"
				style={{ height: "15rem" }}></article>

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
