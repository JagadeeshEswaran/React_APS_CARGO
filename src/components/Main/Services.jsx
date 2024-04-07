/* eslint-disable no-unused-vars */
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineShutterSpeed } from "react-icons/md";
import { GiMeshNetwork } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri";

import "../../styles/Main_Section.css";

const Services = () => {
	return (
		<>
			<section
				className="services_container border border-2 flex-column"
				style={{ height: "auto", maxHeight: "110vh" }}>
				{/* Top Services Tabs */}
				<article className="top_services_container position-relative d-flex">
					{/* ShipNow */}
					<a href="/services/ship_now">
						<article
							className="border top_services_card flex-column"
							style={{ height: "10rem", width: "20rem" }}>
							<article className="mb-3 fs-1">
								<FaCalendarCheck />
							</article>
							<article>
								<h5 className="text-center">Ship Now</h5>
								<p>Anytime, Anywhere</p>
							</article>
						</article>
					</a>

					{/* GetQuote */}
					<a href="/services/get_quote">
						<article
							className="border top_services_card flex-column"
							style={{ height: "10rem", width: "20rem" }}>
							<article className="mb-3 fs-1">
								<MdEditDocument />
							</article>
							<article>
								<h5 className="text-center">Get Quotes</h5>
								<p>Bettwe Price, for Sure</p>
							</article>
						</article>
					</a>

					{/* ContactUs */}
					<a href="/contact">
						<article
							className="border top_services_card flex-column"
							style={{ height: "10rem", width: "20rem" }}>
							<article className="mb-3 fs-1">
								<LuPhoneCall />
							</article>
							<article>
								<h5 className="text-center">Contact Us</h5>
								<p>Get in Touch with Us</p>
							</article>
						</article>
					</a>
				</article>

				<article className="all_services_container d-flex  mt-5">
					<article
						className="all_service_1 d-flex justify-content-center align-items-center border me-3 card"
						style={{ width: "30rem", height: "40rem" }}>
						<article
							className="mb-5"
							style={{ fontSize: "10rem", color: "crimson" }}>
							<MdOutlineShutterSpeed />
						</article>
						<article className="text-center px-5">
							<h2>Express Services</h2>
							<p>
								The Express Parcels Vertical offers a wide range of domestic
								products and services catering to C2C and B2B customers for
								documents and parcels of all sizes including part-truck-load
								shipments. Our product offerings range from time-sensitive
								express services to cost-effective ground express solutions. Our
								extensive delivery network currently reaches 96% of India’s
								population, making it easy for you to send documents and parcels
								of any size to almost anywhere in India.
							</p>
						</article>
					</article>

					<article
						className="all_service_2 d-flex justify-content-center align-items-center border me-3 card"
						style={{ width: "30rem", height: "40rem" }}>
						<article>
							<article
								className="text-center mb-5"
								style={{ fontSize: "10rem", color: "crimson" }}>
								<GiMeshNetwork />
							</article>
							<article className="text-center px-5 mb-5">
								<h2>Huge Network</h2>
								<p className="pb-2">
									Our extensive global network ensures timely, reliable delivery
									to any destination, offering competitive rates and expedited
									options. With seamless connectivity and enhanced tracking
									capabilities, we prioritize transparency and efficiency,
									providing peace of mind throughout the shipping process.
									Leveraging our vast network, we offer personalized solutions,
									empowering customers to focus on their core business
									operations.
								</p>
							</article>
						</article>
					</article>

					<article
						className="all_service_3 d-flex justify-content-center align-items-center border me-3 card"
						style={{ width: "30rem", height: "40rem" }}>
						<article>
							<article
								className="text-center mb-5"
								style={{ fontSize: "10rem", color: "crimson" }}>
								<RiShoppingCartFill />
							</article>

							<article className="text-center px-5 mb-5">
								<h2>E-Commerce Logistics</h2>
								<p>
									Our global logistics network guarantees swift and dependable
									delivery for e-commerce businesses worldwide. With strategic
									hubs and diverse partnerships, we offer competitive rates,
									expedited options, and enhanced tracking capabilities.
									Leveraging our network, we provide tailored solutions,
									empowering e-commerce enterprises to scale seamlessly and meet
									customer demands effectively.
								</p>
							</article>
						</article>
					</article>
				</article>
			</section>
		</>
	);
};

export default Services;
