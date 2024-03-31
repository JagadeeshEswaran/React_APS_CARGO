/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "../../styles/ConsignmentUpdate.css";
import { tracking_data } from "../../data/consignment_data";

const CgmtTrackingUpdateForm = ({ tracking_data_1 }) => {
	const [trackingStatus, setTrackingStatus] = useState([]);
	const [isLoading, setLoading] = useState(true);

	if (tracking_data_1) {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}

	const {
		cgmt_id,
		booked_date,
		curr_status,
		stat_dispatched,
		dispatch_date,
		stat_inTransit,
		stat_outForDeliver,
		ofd_date,
		stat_delivered,
		delivery_date,
	} = tracking_data_1[0];

	// console.log(cgmt_id);

	return (
		<>
			{isLoading ? (
				<h4>Loading</h4>
			) : (
				<section
					className="card shadow border border-2 col-7 row d-flex justify-content-center align-items-center update_consignment_Input_container_2"
					style={{ width: "55vw", height: "80vh" }}>
					{/* Update Form */}
					<article
						className="card col-6 bg-light bg-gradient bg-opacity-25 px-3 py-5 d-flex justify-content-between"
						style={{ width: "40%", minHeight: "96%", height: "auto" }}>
						<article className="w-100">
							<article className="btn-group px-3 py-3 shadow-lg border-primary border-2 border-2 bg-info fs-6 fw-semibold w-100">
								<button
									type="button"
									className="btn btn-info shadow border-2 bg-info bg-opacity-75 fs-6 fw-semibold bg-light fw-semibold opacity-75">
									Booked
								</button>
								<button
									type="button"
									className="btn btn-info dropdown-toggle dropdown-toggle-split shadow border-2 bg-info fs-6 fw-semibold"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									<span className="visually-hidden"></span>
								</button>
								<ul className="dropdown-menu bg-info bg-opacity-50 fw-bold">
									<li>
										<a
											className="dropdown-item fw-semibold opacity-75"
											href="#">
											Dispatched
										</a>
									</li>
									<li>
										<a
											className="dropdown-item fw-semibold opacity-75"
											href="#">
											In-Transit
										</a>
									</li>
									<li>
										<a
											className="dropdown-item fw-semibold opacity-75"
											href="#">
											Out-For-Delivery
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a
											className="dropdown-item fw-semibold opacity-75"
											href="#">
											Delivered
										</a>
									</li>
								</ul>
							</article>
						</article>

						<article className="my-5 card d-flex flex-row bg-light border-0 bg-opacity-25 justify-content-evenly align-items-center">
							<button
								className="btn btn-info px-4 my-3 border border-light border-2 shadow-lg fs-5 fw-semibold border-opacity-75"
								style={{ width: "8.5rem" }}>
								Submit
							</button>
							<button
								className="btn btn-danger px-4 my-3 border border-light border-2 shadow-lg fs-5 fw-semibold border-opacity-75"
								style={{ width: "8.5rem" }}>
								Reset
							</button>
						</article>
					</article>
				</section>
			)}
		</>
	);
};

export default CgmtTrackingUpdateForm;
