/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Filters = ({ consignmentData, setFilteredData }) => {
	const [placeHolderAgentFilter, setPlaceHolderFilter] =
		useState("Select Agent");
	const [filterByStatusString, setFilterByStatusString] =
		useState("Select Status");

	const handleFilter = () => {
		const clonedConsignmentData = consignmentData.map((item) => ({
			...item,
		}));

		const newData = clonedConsignmentData.filter((item) => {
			const agentMatch =
				item.consignmentDetails[0].delivery_agent === placeHolderAgentFilter;
			const statusMatch =
				item.trackingDetails[0].curr_status === filterByStatusString;
			return agentMatch && statusMatch;
		});

		if (newData.length < 1) {
			setFilteredData(-1);
		} else {
			setFilteredData(newData);
		}
	};

	useEffect(() => {
		if (
			placeHolderAgentFilter !== "Select Agent" ||
			filterByStatusString !== "Select Status"
		) {
			handleFilter();
		}
	}, [placeHolderAgentFilter, filterByStatusString]);

	return (
		<>
			<section>
				<article>
					{/* Filter By Agent */}
					<div
						className="btn-group ms-3"
						style={{
							width: "12rem",
							boxShadow:
								"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
						}}>
						<button type="button" className="btn btn-info">
							{placeHolderAgentFilter}
						</button>
						<button
							type="button"
							className="btn btn-info dropdown-toggle dropdown-toggle-split"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="sr-only"></span>
						</button>

						<div className="dropdown-menu">
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="APS Cargo"
								type="button"
								href="#"
								onClick={(e) =>
									setPlaceHolderFilter(e.target.getAttribute("data-value"))
								}>
								APS Cargo
							</p>
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="Delhivery"
								type="button"
								href="#"
								onClick={(e) =>
									setPlaceHolderFilter(e.target.getAttribute("data-value"))
								}>
								Delhivery
							</p>

							<div className="dropdown-divider"></div>

							<a
								className="dropdown-item p-0 m-0 text-center "
								data-value="Others"
								href="#"
								onClick={(e) =>
									setPlaceHolderFilter(e.target.getAttribute("data-value"))
								}>
								Others
							</a>
						</div>
					</div>

					{/* Filter By Status */}
					<div
						className="btn-group ms-3"
						style={{
							width: "12rem",
							boxShadow:
								"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
						}}>
						<button type="button" className="btn btn-info">
							{filterByStatusString}
						</button>
						<button
							type="button"
							className="btn btn-info dropdown-toggle dropdown-toggle-split"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="sr-only"></span>
						</button>

						<div
							className="dropdown-menu"
							style={{ textTransform: "capitalize" }}>
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="booked"
								type="button"
								href="#"
								onClick={(e) =>
									setFilterByStatusString(e.target.getAttribute("data-value"))
								}>
								booked
							</p>
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="dispatched"
								type="button"
								href="#"
								onClick={(e) =>
									setFilterByStatusString(e.target.getAttribute("data-value"))
								}>
								dispatched
							</p>
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="in-transit"
								type="button"
								href="#"
								onClick={(e) =>
									setFilterByStatusString(e.target.getAttribute("data-value"))
								}>
								in-transit
							</p>
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="out for delivery"
								type="button"
								href="#"
								onClick={(e) =>
									setFilterByStatusString(e.target.getAttribute("data-value"))
								}>
								out for delivery
							</p>
							<p
								className="dropdown-item p-0 m-0 text-center mb-2 py-1"
								data-value="delivered"
								type="button"
								href="#"
								onClick={(e) =>
									setFilterByStatusString(e.target.getAttribute("data-value"))
								}>
								delivered
							</p>

							<div className="dropdown-divider"></div>

							<a
								className="dropdown-item p-0 m-0 text-center "
								data-value="query"
								href="#"
								onClick={(e) =>
									setFilterByStatusString(e.target.getAttribute("data-value"))
								}>
								query
							</a>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};

export default Filters;
