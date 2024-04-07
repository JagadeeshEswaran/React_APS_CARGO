/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "../../styles/ListViewStyles.css";

const Filters = ({ consignmentData, setFilteredData }) => {
	const [placeHolderAgentFilter, setPlaceHolderFilter] =
		useState("Select Agent");
	const [filterByStatusString, setFilterByStatusString] =
		useState("Select Status");

	const handleFilter = () => {
		const newData = consignmentData.filter((item) => {
			const agentMatch =
				placeHolderAgentFilter === "Select Agent" ||
				item.consignmentDetails[0].delivery_agent === placeHolderAgentFilter;
			const statusMatch =
				filterByStatusString === "Select Status" ||
				item.trackingDetails[0].curr_status === filterByStatusString;
			return agentMatch && statusMatch;
		});

		console.log(newData);

		setFilteredData(() => (newData.length < 1 ? [] : newData));

		if (newData.length < 1) {
			setFilteredData(-1);
		} else {
			setFilteredData(newData);
		}
	};

	const handleReset = () => {
		setFilteredData(consignmentData);

		setPlaceHolderFilter("Select Agent");
		setFilterByStatusString("Select Status");
	};

	const handleClear = (id) => {
		id === 1
			? () => {
					setPlaceHolderFilter("Select Agent");
					handleFilter();
			  }
			: id === 2
			? () => {
					setFilterByStatusString("Select Status");
					handleFilter();
			  }
			: null;
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
				<article className=" d-flex justify-content-evenly">
					{/* Filter By Agent */}
					<div
						className="btn-group mx-3"
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
								onClick={() => handleClear(2)}>
								Clear
							</a>
						</div>
					</div>

					{/* Filter By Status */}
					<div
						className="btn-group mx-3"
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
								onClick={() => handleClear(1)}>
								clear
							</a>
						</div>
					</div>

					<article
						className="p-0 m-0 ms-4 list_reset_button d-flex justify-content-center align-items-center px-3 py-1"
						type="button">
						<h5 className="p-0 m-0" onClick={() => handleReset()}>
							Reset List
						</h5>
					</article>
				</article>
			</section>
		</>
	);
};

export default Filters;
