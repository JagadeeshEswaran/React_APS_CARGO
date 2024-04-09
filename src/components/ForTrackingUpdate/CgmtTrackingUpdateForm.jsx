/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";

import "../../styles/ConsignmentUpdate.css";
import { tracking_data } from "../../data/consignment_data";
import TimeLinePtr from "./TimeLinePtr";
import axios from "axios";
import { toast } from "react-toastify";
import { globalInstanceForAxios } from "../../../Axios/GlobalInstance";

const CgmtTrackingUpdateForm = ({
	tracking_data_1,
	setCgmtUpdateFlag,
	cgmtUpdateFlag,
	cgmtToken,
	prevTracking,
}) => {
	const [currStatusToBeUpdated, setCurrentStatusToBeUpdated] = useState(
		tracking_data_1.curr_status
	);
	const [trackingUpdate, setTrackingUpdate] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [submitLoading, setSubmitLoading] = useState(false);

	if (tracking_data_1) {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}

	// Sending updated data to Back-end
	const handleAxiosCall = async () => {
		console.log(trackingUpdate);
		setSubmitLoading(true);

		try {
			const response = await globalInstanceForAxios.put(
				`/consignment/${cgmtToken}`,
				trackingUpdate
			);

			console.log(response);

			if (response.data.success) {
				toast.success(response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});

				setTimeout(() => {
					setSubmitLoading(false);
				}, 900);
			}

			setCgmtUpdateFlag(!cgmtUpdateFlag);
		} catch (error) {
			console.log(error);

			toast.error(error);

			setSubmitLoading(false);
		}
	};

	// Preparing and Sanitizing Updated Date
	const handleStatusUpate = (newStat, new_curr_stats) => {
		// alert(newStat);
		setCurrentStatusToBeUpdated(newStat);

		const currDateTime = new Date().toISOString();

		const dataToBackend = {
			tracking: {
				...prevTracking,
				curr_status: new_curr_stats,
				[newStat]: {
					date: currDateTime,
					status: true,
				},
			},
		};

		// console.log(dataToBackend);

		setTrackingUpdate(dataToBackend);
	};

	const handleReset = () => {};

	setTimeout(() => {
		setLoading(false);
	}, 1700);

	useEffect(() => {
		setLoading(true);

		setCurrentStatusToBeUpdated(tracking_data_1.curr_status);

		// tracking_data_1?.curr_status !== currStatusToBeUpdated
		// 	? setCurrentStatusToBeUpdated(tracking_data_1.curr_status)
		// 	: setCurrentStatusToBeUpdated("Booked");

		setTimeout(() => {
			setLoading(false);
		}, 1750);
	}, [tracking_data_1]);

	// alert(cgmtId);
	// console.log(prevTracking);

	return (
		<>
			<section
				className="card shadow border border-2 col-7 row d-flex justify-content-center align-items-center update_consignment_Input_container_2"
				style={{ width: "55vw", height: "80vh" }}>
				{isLoading ? (
					<CircularProgress
						color="primary"
						value={55}
						variant="plain"
						size="md"
					/>
				) : tracking_data_1.curr_status ? (
					<>
						{/* Consignment Timeline */}
						<article
							className="card col-6 bg-light bg-gradient bg-opacity-25 px-3 py-5 d-flex justify-content-start align-items-center"
							style={{
								width: "57%",
								minHeight: "96%",
								height: "auto",
							}}>
							{tracking_data_1.booked ? (
								<TimeLinePtr
									title="Booked"
									date={tracking_data_1.booked.date}
								/>
							) : (
								<></>
							)}

							{tracking_data_1.dispatch.status ? (
								<TimeLinePtr
									title="Dispatched"
									date={tracking_data_1.dispatch.date}
								/>
							) : (
								<></>
							)}

							{tracking_data_1.in_transit.status ? (
								<TimeLinePtr
									title="In-Transit"
									date={tracking_data_1.in_transit.date}
								/>
							) : (
								<></>
							)}

							{tracking_data_1.out_for_delivery.status ? (
								<TimeLinePtr
									title="Out-For-Delivery"
									date={tracking_data_1.out_for_delivery.date}
								/>
							) : (
								<></>
							)}

							{tracking_data_1.delivered.status ? (
								<TimeLinePtr
									title="Delivered"
									date={tracking_data_1.delivered.date}
								/>
							) : (
								<></>
							)}
						</article>

						{/* Update Form */}
						<article
							className="card col-6 bg-light bg-gradient bg-opacity-25 px-3 py-5 d-flex justify-content-between"
							style={{ width: "40%", minHeight: "96%", height: "auto" }}>
							<article className="w-100">
								<article className="btn-group px-3 py-3 shadow border-primary border-2 border-2 bg-info fs-6 fw-semibold w-100">
									<button
										type="button"
										className="btn btn-info shadow border-2 bg-info bg-opacity-75 fs-6 fw-semibold bg-light fw-semibold opacity-75">
										{currStatusToBeUpdated}
									</button>
									<button
										type="button"
										className="btn btn-info dropdown-toggle dropdown-toggle-split shadow border-2 bg-info fs-6 fw-semibold"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										<span className="visually-hidden"></span>
									</button>

									<ul
										className="dropdown-menu bg-info bg-opacity-50 fw-bold shadow mt-2"
										onChange={(e) => handleStatusUpate(e.target.value)}>
										<li>
											<a
												className="dropdown-item fw-semibold opacity-75"
												href="#"
												onClick={() =>
													handleStatusUpate("dispatch", "Dispatched")
												}>
												Dispatched
											</a>
										</li>
										<li>
											<a
												className="dropdown-item fw-semibold opacity-75"
												href="#"
												onClick={() =>
													handleStatusUpate("in_transit", "In-Transit")
												}>
												In-Transit
											</a>
										</li>
										<li>
											<a
												className="dropdown-item fw-semibold opacity-75"
												href="#"
												onClick={() =>
													handleStatusUpate(
														"out_for_delivery",
														"Out-For-Delivery"
													)
												}>
												Out-For-Delivery
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a
												className="dropdown-item fw-semibold opacity-75"
												href="#"
												onClick={() =>
													handleStatusUpate("delivered", "Delivered")
												}>
												Delivered
											</a>
										</li>
									</ul>
								</article>
							</article>

							<article className="my-5 card d-flex flex-row bg-light border-0 bg-opacity-25 justify-content-evenly align-items-center">
								{submitLoading ? (
									<CircularProgress className="my-3" />
								) : (
									<>
										<button
											className="btn btn-info px-4 my-3 border border-light border-2 shadow-lg fs-5 fw-semibold border-opacity-75"
											style={{ width: "8.5rem" }}
											onClick={() => handleAxiosCall()}>
											Submit
										</button>
										<button
											className="btn btn-danger px-4 my-3 border border-light border-2 shadow-lg fs-5 fw-semibold border-opacity-75"
											style={{ width: "8.5rem" }}
											onClick={handleReset}>
											Reset
										</button>
									</>
								)}
							</article>
						</article>
					</>
				) : (
					<></>
				)}
			</section>
		</>
	);
};

export default CgmtTrackingUpdateForm;
