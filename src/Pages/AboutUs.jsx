/* eslint-disable no-unused-vars */
import React from "react";
import excellence_img from "../assets/collections/20Years_final.svg";

import "../styles/AboutPage.css";
import "animate.css";

const AboutUs = () => {
	return (
		<section
			className="card m-2 aboutUs_main_container d-flex flex-row justify-content-evenly align-items-center"
			style={{ height: "auto", minHeight: "87vh" }}>
			<article className="row" style={{ width: "45vw", color: "#0e1a57" }}>
				<article className="col-6" style={{ color: "#0e1a57" }}>
					<article
						className="border mb-2 rounded-4 px-3 pt-3 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
						style={{ width: "22vw" }}>
						<h5 className="mb-2">About APS</h5>

						<p className=" fw-semibold">
							<span className="ms-5"></span>APS Cargo is a leading provider of
							parcel, courier, and cargo services, serving customers across
							India with excellence and dedication. With a commitment to
							delivering the best-in-class services, we take pride in our
							experienced team and extensive network that spans the length and
							breadth of the nation.
						</p>
					</article>

					<article
						className="border mb-2 rounded-4 px-3 pt-3 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
						style={{ width: "22vw" }}>
						<h5>Our Expertise</h5>

						<p className=" fw-semibold">
							<span className="ms-5"></span>With over 20 years of expertise in
							the logistics industry, APS Cargo has established itself as a
							trusted partner for businesses and individuals alike. Our team
							brings a wealth of knowledge and skill to every shipment, ensuring
							that each parcel, courier, or cargo is handled with utmost care
							and efficiency.
						</p>
					</article>

					<article
						className="border mb-2 rounded-4 px-3 pt-3 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
						style={{ width: "22vw" }}>
						<h5>Local Network and Connectivity </h5>

						<p className=" fw-semibold">
							<span className="ms-5"></span>At APS Cargo, we understand the
							importance of local connections and seamless connectivity. Our
							vast network of branches and partners enables us to reach even the
							most remote locations across India, delivering your shipments
							promptly and reliably.
						</p>
					</article>
				</article>

				<article className="col-6">
					<article
						className="border mb-2 rounded-4 px-3 pt-3 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
						style={{ width: "22vw" }}>
						<h5>Our Commitment</h5>

						<p className=" fw-semibold">
							<span className="ms-5"></span>Customer satisfaction is at the
							heart of everything we do. We are dedicated to providing
							personalized solutions tailored to meet your unique shipping
							needs. Whether you are sending a small parcel or managing complex
							logistics operations, you can trust APS Cargo to deliver with
							precision and professionalism.
						</p>
					</article>

					<article
						className="border mb-2 rounded-4 px-3 pt-3 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
						style={{ width: "22vw" }}>
						<h5>Why Choose APS Cargo? </h5>

						<article className="">
							{/* <span className="ms-5"></span> */}
							<li className="mb-2">
								<span className="fw-semibold">Respanliability: </span>We pride
								ourselves on delivering reliable services that you can count on.{" "}
							</li>
							<li className="mb-2">
								<span className="fw-semibold">Efficiency: </span>Our streamlined
								processes ensure swift handling and delivery of your shipments.
							</li>
							<li className="mb-2">
								<span className="fw-semibold">Experience: </span>With two
								decades of experience, we have the knowledge and expertise to
								handle any challenge.{" "}
							</li>
							<li className="mb-2">
								<span className="fw-semibold">Local Presence: </span>Our
								extensive local network ensures that your shipments reach their
								destination, no matter where it may be in India.
							</li>
						</article>
					</article>

					<article
						className="border mb-2 rounded-4 px-3 pt-3 aboutUs_textfield_container me-5 animate__animated animate__fadeInLeft"
						style={{ width: "22vw" }}>
						<h5>Get in Touch </h5>

						<p className=" fw-semibold">
							<span className="ms-5"></span>Experience the difference with APS
							Cargo. Contact us today to learn more about our services or to
							discuss your shipping needs. Let us be your trusted partner in
							logistics, delivering excellence every step of the way.
						</p>
					</article>
				</article>
			</article>

			<article
				className="border rounded-4 d-flex justify-content-center align-items-center aboutUs_textfield_container animate__animated animate__fadeInRight"
				style={{ width: "30vw", height: "57.25vh" }}>
				<img src={excellence_img} alt="" width={500} />
			</article>
		</section>
	);
};

export default AboutUs;
