/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import leadership_img from "../assets/collections/leadership_img.jpg";

import "../styles/OutTeam.css";

const OurTeam = () => {
	return (
		<section
			className=""
			style={{
				width: "auto",
				minWidth: "95vw",
				height: "auto",
				minHeight: "90vh",
			}}>
			<article className="d-flex flex-column justify-content-center align-items-center position-relative mt-3 p-5">
				<article className="leadership_header p-5" style={{ height: "75vh" }}>
					<h4 className="mb-4 text-light fs-3 fw-bold">Our Management</h4>

					<article className="fs-6 fw-semibold text-light h-75">
						<p>
							At APS Cargo, our management team is the driving force behind our
							commitment to excellence in service delivery. Led by our visionary
							founders, our management embodies the core values of
							customer-centricity, expertise, and innovation.
						</p>

						<article className=" d-flex justify-content-center align-items-center flex-column">
							<p className="pointer_cards w-75 mb-4">
								<span className="fs-5 fw-bold text-dark-light ">
									Service Motive :{" "}
								</span>{" "}
								Our management team is driven by a strong service motive,
								dedicated to providing unparalleled logistics solutions to our
								valued customers. We prioritize customer satisfaction above all
								else, ensuring that every interaction with APS Cargo is met with
								professionalism, reliability, and efficiency.
							</p>

							<p className="pointer_cards w-75 mb-4">
								<span className="fs-5 fw-bold text-dark-light ">
									Customer-Centric Approach :{" "}
								</span>
								With a deep understanding of our customers' needs and
								challenges, our management team adopts a customer-centric
								approach in every aspect of our operations. From tailoring
								solutions to meet specific requirements to providing proactive
								support, we strive to exceed our customers' expectations at
								every opportunity.
							</p>

							<p className="pointer_cards w-75 mb-4">
								<span className="fs-5 fw-bold text-dark-light ">
									Experience and Expertise :{" "}
								</span>{" "}
								With decades of collective experience in the logistics industry,
								our management team brings a wealth of knowledge and expertise
								to the table. Drawing from diverse backgrounds and specialized
								skill sets, they lead by example, guiding our team to navigate
								complex logistics challenges with confidence and proficiency.
							</p>

							<p className="pointer_cards w-75 mb-4">
								<span className="fs-5 fw-bold text-dark-light ">
									Networking and Connectivity :{" "}
								</span>{" "}
								Our management team recognizes the importance of networking and
								connectivity in the logistics landscape. Leveraging their
								extensive industry connections and robust network, they
								continuously seek to expand our reach and enhance our
								capabilities, ensuring seamless transportation and delivery
								solutions across India.
							</p>

							<p className="pointer_cards w-75 mb-4">
								<span className="fs-5 fw-bold text-dark-light ">
									Innovation and Growth :{" "}
								</span>{" "}
								Committed to continuous improvement and innovation, our
								management team fosters a culture of growth and development
								within APS Cargo. They embrace emerging technologies, explore
								new market opportunities, and invest in the professional
								development of our team members, positioning APS Cargo at the
								forefront of the logistics industry.
							</p>
						</article>

						<p>
							At APS Cargo, our management is not just about leadership—it's
							about inspiring excellence, fostering collaboration, and driving
							positive change. Together, we are dedicated to delivering
							exceptional logistics solutions that empower our customers to
							succeed in an ever-evolving marketplace.
						</p>
					</article>
				</article>

				<article
					className=" d-flex justify-content-center align-items-center position-absolute top-0 "
					style={{ zIndex: "-10" }}>
					<img src={leadership_img} alt="" width={1850} height={840} />
				</article>
			</article>
		</section>
	);
};

export default OurTeam;
