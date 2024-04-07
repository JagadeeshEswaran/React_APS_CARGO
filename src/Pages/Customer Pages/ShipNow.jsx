/* eslint-disable no-unused-vars */
import React from "react";

import aps_mai_logo from "../../assets/Company Icons/Final/Icon_Full_Final.svg";

const ShipNow = () => {
	return (
		<section
			className="row d-flex justify-content-center align-items-center mt-4 "
			style={{
				width: "auto",
				minWidth: "95vw",
				height: "auto",
				minHeight: "87.5vh",
			}}>
			<article className=" d-flex justify-content-center align-items-center">
				{/* Customer Form */}
				<article className="card w-50 me-2" style={{ height: "80vh" }}>
					<article className="card py-3 text-center  bg-body-secondary shadow-sm">
						<h5 className="p-0 m-0 fs-5 fw-bold">Please Fill the Details </h5>
					</article>

					<form action="" className="p-5">
						{/* Name / Company Name */}
						<div className="input-group mb-3">
							<span
								className="fw-semibold input-group-text w-25"
								id="basic-addon1">
								Your / Company Name :
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Please enter your / your Company's Name"
								aria-label="name"
								aria-describedby="basic-addon1"
							/>
						</div>

						{/* Contact Number */}
						<div className="input-group mb-3">
							<span
								className="fw-semibold input-group-text w-25"
								id="basic-addon1">
								Phone No.:
							</span>
							<input
								type="text"
								className="form-control w-25"
								placeholder="Please enter Contact Number"
								aria-label="phone_number"
								aria-describedby="basic-addon1"
							/>
						</div>

						{/* Source */}
						<div className="input-group mb-3">
							<span
								className="fw-semibold input-group-text w-25"
								id="basic-addon1">
								Source / Your Location :
							</span>
							<input
								type="text"
								className="form-control w-25"
								placeholder="Please enter the Location of Dispatch / Source"
								aria-label="phone_number"
								aria-describedby="basic-addon1"
							/>
						</div>

						{/* Destination */}
						<div className="input-group mb-3">
							<span
								className="fw-semibold input-group-text w-25"
								id="basic-addon1">
								Receiver&apos;s Location :
							</span>
							<input
								type="text"
								className="form-control w-25"
								placeholder="Please enter the Destination"
								aria-label="phone_number"
								aria-describedby="basic-addon1"
							/>
						</div>

						{/* Description about Goods */}
						<div className="input-group mb-4">
							<span className="fw-semibold input-group-text w-25">
								About Goods :{" "}
							</span>
							<textarea
								placeholder="Please give a Short Description about the Goods (Ex.: Weight, Quantity, Nature, etc.)"
								className="form-control"
								rows={4}
								aria-label="With textarea"></textarea>
						</div>

						{/* Date of Dispatch */}
						<div className="input-group mb-3">
							<span
								className="fw-semibold input-group-text w-25"
								id="basic-addon1">
								Date of Dispatch :
							</span>
							<input
								type="datetime-local"
								className="form-control w-25"
								placeholder="Please enter the Destination"
								aria-label="phone_number"
								aria-describedby="basic-addon1"
							/>
						</div>

						{/* Service Types */}
						<article className="w-75 d-flex justify-content-center align-items-center mt-4">
							<div className="input-group me-3">
								<div className="input-group-text">
									<input
										name="service_type"
										className="form-check-input mt-0"
										type="radio"
										value=""
										aria-label="Radio button for Service Type Selection - Express"
									/>
								</div>
								<input
									type="text"
									className="form-control"
									aria-label="Service Type - Express"
									value={"Express"}
									disabled
								/>
							</div>

							<div className="input-group me-3">
								<div className="input-group-text">
									<input
										name="service_type"
										className="form-check-input mt-0"
										type="radio"
										value=""
										aria-label="Radio button for Service Type Selection - Cargo"
									/>
								</div>
								<input
									type="text"
									className="form-control"
									aria-label="Service Type - Cargo"
									value={"Cargo"}
									disabled
								/>
							</div>

							<div className="input-group">
								<div className="input-group-text">
									<input
										name="service_type"
										className="form-check-input mt-0"
										type="radio"
										value=""
										aria-label="Radio button for Service Type Selection - Standard"
									/>
								</div>
								<input
									type="text"
									className="form-control"
									aria-label="Service Type - Standard"
									value={"Standard"}
									disabled
								/>
							</div>
						</article>
					</form>
				</article>

				{/* Contact / Any Query Tab */}
				<article
					className="card w-25 ms-2 d-flex justify-content-start align-items-center"
					style={{ height: "50vh" }}>
					<h5 className="mb-4 card py-2 w-100 text-center fw-bold text-info-emphasis bg-body-secondary shadow-sm">
						For Any Queries
					</h5>

					<article>
						<article className="mb-2">
							<img src={aps_mai_logo} alt="" width={280} />
						</article>

						<article className=" d-flex">
							<p>Address_line_1, </p>
							<p>Address_line_2, </p>
							<p>Address_line_3</p>
						</article>

						<p>Ph : +91 00000 00000</p>
						<p>Ph : +91 421 000 0000</p>

						<p>EMail : aps@aps.com</p>
					</article>
				</article>
			</article>
		</section>
	);
};

export default ShipNow;
