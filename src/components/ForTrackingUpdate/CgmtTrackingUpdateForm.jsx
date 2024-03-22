/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { tracking_data } from "../../data/consignment_data";

const CgmtTrackingUpdateForm = () => {
	const [timeNow, setTimeNow] = useState(new Date().toLocaleString());

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeNow(new Date().toLocaleString());
		}, 1000);

		// Clean up the interval to prevent memory leaks
		return () => clearInterval(interval);
	}, []); // empty dependency array to run this effect only once after initial render

	const consignment_data = tracking_data.filter((item) => item.id === 2);

	return (
		<>
			<section
				className="card shadow border border-2 col-7 row d-flex justify-content-center align-items-center bg-secondary bg-gradint"
				style={{ width: "55vw", height: "80vh" }}>
				<article
					className="card col-6 d-flex justify-content-start align-items-center py-4 px-3 bg-light bg-gradient bg-opacity-75"
					style={{ width: "58%", height: "96%" }}>
					{consignment_data[0]?.tracking_status?.map(
						(item, idx) => (
							<div
								key={idx}
								className="d-flex flex-row justify-content-between align-items-center my-4 mx-5 card w-75 px-3 py-3 shadow border-1 bg-info bg-opacity-75 fs-6 fw-semibold">
								<p className="p-0 m-0">{item.date}</p>
								<span>-</span>

								{item.status === "delivered" ? (
									<p
										style={{ color: "green", fontWeight: "bold" }}
										className="p-0 m-0 card px-4 py-1 bg-light bg-opacity-75 shadow">
										{item.status}
									</p>
								) : (
									<p className="p-0 m-0">{item.status}</p>
								)}
							</div>
						)

						// console.log(item)
					)}
				</article>

				<article
					className="card col-6 bg-light bg-gradient bg-opacity-75 px-3 py-5 d-flex justify-content-between"
					style={{ width: "40%", minHeight: "96%", height: "auto" }}>
					<article className="w-100">
						<article className="btn-group px-3 py-3 shadow-lg border-primary border-2 border-2 bg-info bg-opacity-75 fs-6 fw-semibold w-100">
							<button
								type="button"
								className="btn btn-info shadow border-2 bg-info bg-opacity-75 fs-6 fw-semibold bg-light bg-opacity-25 fw-semibold opacity-75">
								Booked
							</button>
							<button
								type="button"
								className="btn btn-info dropdown-toggle dropdown-toggle-split shadow border-2 bg-info bg-opacity-75 fs-6 fw-semibold"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu bg-info bg-opacity-50 fw-bold">
								<li>
									<a className="dropdown-item fw-semibold opacity-75" href="#">
										Dispatched
									</a>
								</li>
								<li>
									<a className="dropdown-item fw-semibold opacity-75" href="#">
										In-Transit
									</a>
								</li>
								<li>
									<a className="dropdown-item fw-semibold opacity-75" href="#">
										Out-For-Delivery
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item fw-semibold opacity-75" href="#">
										Delivered
									</a>
								</li>
							</ul>
						</article>

						<article
							className="d-flex justify-content-center align-items-center rounded px-3 py-3 mt-5 shadow-lg border border-info border-1 bg-info bg-gradient bg-opacity-75 fs-6 fw-semibold fw-semibold"
							style={{ height: "5rem" }}>
							{timeNow}
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
		</>
	);
};

export default CgmtTrackingUpdateForm;
