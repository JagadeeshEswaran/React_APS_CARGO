/* eslint-disable no-unused-vars */
import React from "react";

import ExpressServices_img from "../assets/collections/expressServices.png";
import airCargo_img from "../assets/collections/Aircargo_2.jpg";
import surface_cargo_img from "../assets/collections/serfaceCargo.jpg";
import logistics_soln_img from "../assets/collections/logisticsSolutions.webp";

import "../styles/Services.css";

const Services = () => {
	return (
		<section
			className="row d-flex justify-content-center align-items-center px-5"
			style={{
				width: "auto",
				minWidth: "95vw",
				height: "auto",
				minHeight: "90vh",
				color: "rgb(22, 29, 70)",
			}}>
			{/* Header */}
			<article
				className="card d-flex justify-content-center align-items-start ps-3 bg-dark-subtle"
				style={{ height: "6vh" }}>
				<h5 className="fw-bold fs-4 text-info-emphasis">Our Services</h5>
			</article>

			{/* Content */}
			<article
				className="card"
				style={{ height: "70vh", background: "rgb(22, 29, 70)" }}>
				<article className="text-light mt-4 ms-4">
					<h4 className="">National & Domestic</h4>
				</article>
				<article className="row" style={{ height: "65vh" }}>
					<article className="col-6 d-flex justify-content-evenly flex-column align-items-center">
						<article
							className="card bg-opacity-25 services_card p-4 text-light position-relative"
							style={{ height: "27vh", width: "40vw" }}>
							<h5 className="fw-bold mb-2">Express Service </h5>

							<p className="fw-semibold">
								<span className="ms-5"></span>At APS Cargo, we understand the
								importance of urgency when it comes to delivering time-sensitive
								documents and parcels. That's why we offer our express service,
								designed to ensure that your urgent shipments reach their
								destination on time, every time. Our express service includes
								next-day delivery on a priority basis, covering all major
								metros, cities, and towns across India. Whether it's a
								last-minute business proposal or an important contract, you can
								rely on APS Cargo to deliver your parcels swiftly and securely,
								so you can focus on what matters most.
							</p>

							<article
								className=" position-absolute opacity-25 object-fit-cover overflow-hidden end-0"
								style={{ zIndex: "-10" }}>
								<img
									src={ExpressServices_img}
									alt=""
									width={500}
									height={250}
									style={{ marginTop: "-2rem" }}
								/>
							</article>
						</article>
						<article
							className="card bg-opacity-25 services_card p-4 text-light position-relative"
							style={{ height: "27vh", width: "40vw" }}>
							<h5 className="fw-bold mb-2">Air Cargo</h5>

							<p className="fw-semibold">
								<span className="ms-5"></span>We partner with air cargo agencies
								of all major airlines for the delivery of critical and priority
								shipments, ensuring timely delivery of essential goods such as
								medicines and vaccines, perishable commodities like fruits and
								vegetables, and other time-sensitive cargo via air transport.
								Our collaboration with reputable airlines enables us to
								guarantee the swift and secure transportation of your valuable
								cargo. Whether it's a medical emergency or a perishable
								shipment, we understand the importance of speed and reliability.
							</p>

							<article className=" position-absolute opacity-25 object-fit-cover overflow-hidden end-0">
								<img
									src={airCargo_img}
									alt=""
									width={500}
									height={250}
									style={{ marginTop: "-2rem" }}
								/>
							</article>
						</article>
					</article>
					<article className="col-6 d-flex justify-content-evenly flex-column">
						<article
							className="card bg-opacity-25 services_card p-4 text-light"
							style={{ height: "27vh", width: "40vw" }}>
							<h5 className="fw-bold mb-2">Surface Cargo</h5>

							<p className="fw-semibold">
								<span className="ms-5"></span>When it comes to transporting your
								bulk consignments, APS Cargo provides reliable surface cargo
								solutions. We utilize our fleet of vehicles and leased railway
								wagons, along with other transportation modes, to transport your
								goods to various stations and destinations across India. Our
								dedicated team ensures the safe and timely delivery of your
								cargo, utilizing container LCVs to enhance safety measures
								during transit. Whether you're shipping large quantities of
								goods or specialized equipment, you can trust APS Cargo to
								deliver your surface cargo with precision and efficiency.
							</p>

							<article className=" position-absolute opacity-25 object-fit-cover overflow-hidden end-0">
								<img
									src={surface_cargo_img}
									alt=""
									width={500}
									height={250}
									style={{ marginTop: "-2rem" }}
								/>
							</article>
						</article>
						<article
							className="card bg-opacity-25 services_card p-4 text-light"
							style={{ height: "27vh", width: "40vw" }}>
							<h5 className="fw-bold mb-2">Logistic Solutions</h5>

							<p className="fw-semibold">
								<span className="ms-5"></span>We pride ourselves on being your
								one-stop-shop partner for all your logistics needs. With our
								comprehensive range of services and expertise, we provide
								tailored solutions to meet your specific requirements. From
								world-class warehouse storage facilities to specialized services
								in procurement, storage, processing, packaging, and dispatch of
								goods, we have the capabilities to handle every aspect of your
								logistics operations. With APS Cargo as your logistics partner,
								you can trust us to streamline your supply chain and optimize
								your operations, allowing you to focus on growing your business.
							</p>

							<article className=" position-absolute opacity-25 object-fit-cover overflow-hidden end-0">
								<img
									src={logistics_soln_img}
									alt=""
									width={500}
									height={250}
									style={{ marginTop: "-2rem" }}
								/>
							</article>
						</article>
					</article>
				</article>
			</article>

			{/* Footer */}
			<article
				className="card bg-dark-subtle shadow mb-2 d-flex justify-content-center align-items-center text-info-emphasis"
				style={{ height: "10vh" }}>
				<h4>
					For Any Queries or Support, Please Call us @ Ph : +91 00000 00000
				</h4>
			</article>
		</section>
	);
};

export default Services;
