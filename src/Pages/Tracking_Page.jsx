/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

import CircularProgress from "@mui/joy/CircularProgress";

import TimeLinePtr2 from "../components/ForTrackingUpdate/TimeLinePts2";

import styles from "../styles/Tracking_page.module.css";
import { tracking_data } from "../data/consignment_data";
import { toast } from "react-toastify";

import icons_PNG from "../assets/Company Icons/Figma/Icon_final.svg";
import { globalInstanceForAxios } from "../../Axios/GlobalInstance";

const Tracking_Page = () => {
	const [new_tracking_data, setTracking_data] = useState(tracking_data);
	const [trackingId, setTrackingId] = useState();
	const [consignment_data, setConsignmentData] = useState();
	const [showAllTrackingUpdates, setShowAllTrackingUpdates] = useState(false);
	let [idFromURL, setIdFromURL] = useState();
	const [errorMsg, setErrorMsg] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const handleConsignmentData = (id) => {
		if (!id || id > 10) {
			setErrorMsg(true);

			setTimeout(() => {
				setErrorMsg("");
			}, 2000);
			return;
		}

		const tracking_id = +id;
		console.log("Consignment ID : ", tracking_id);
		// console.log(typeof tracking_id);

		const trackedConsigment = new_tracking_data.filter(
			(item) => item.id === tracking_id
		);

		setConsignmentData(trackedConsigment);

		console.log(consignment_data);
	};

	const handleShowAllUpdates = () => {
		setShowAllTrackingUpdates(!showAllTrackingUpdates);
	};

	const handleAxiosRequest = async (id) => {
		setLoading(true);
		setShowAllTrackingUpdates(false);

		// alert(id);

		try {
			const response = await globalInstanceForAxios.get(`/consignment/${id}`);

			if (response.data.success === true) {
				console.log(response.data.data);
				setConsignmentData(response.data.data);

				setTimeout(() => {
					setLoading(false);
				}, 900);
			} else {
				throw new Error("Something went wrong, please try again!!");
			}
		} catch (error) {
			if (error.isAxiosError) {
				console.log("Axios error message:", error.message);
				console.log("Response status:", error.response.status);
				console.log("Response data:", error.response.data);
				// You can also access other properties such as error.response.headers, error.request, etc.

				toast.error(error.response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} else {
				// If the error is not from Axios
				console.log("Other error:", error.message);
			}

			setLoading(false);
		}
	};

	useEffect(() => {
		const params = window.location.pathname;
		const paramsArr = params.split("/");

		const trackingIdFromURL = +paramsArr[paramsArr.length - 1];

		if (trackingIdFromURL) {
			setTrackingId(trackingIdFromURL);
			handleAxiosRequest(trackingIdFromURL);
		}
	}, []);

	// console.log(consignment_data);

	return (
		<>
			<section
				style={{
					height: "auto",
					minHeight: "68vh",
					background: "whitesmoke",
				}}
				className={styles.tracking_page_container}>
				<h3 className="m-0 fw-semibold" style={{ color: "rgb(5, 52, 119)" }}>
					TRACK CONSIGNMENTS
				</h3>

				<article
					className=" border-dark position-absolute	"
					style={{
						marginTop: "7rem",
						marginRight: "7rem",
						// zIndex: "-10",
						opacity: "10%",
					}}>
					<img src={icons_PNG} alt="APS Cargo Icon" height={500} />
				</article>

				{/* Trackign ID Input Form */}
				<article className={styles.tracingID_input}>
					{idFromURL ? (
						<input
							type="text"
							name="tracking_id"
							id=""
							placeholder="Please Enter the Tracking ID"
							onChange={(e) => setTrackingId(e.target.value)}
							value={idFromURL ? idFromURL : ""}
						/>
					) : (
						<input
							type="text"
							name="tracking_id"
							id=""
							placeholder="Please Enter the Tracking ID"
							onChange={(e) => setTrackingId(e.target.value)}
							value={trackingId}
						/>
					)}

					<button onClick={() => handleAxiosRequest(trackingId)}>
						<p style={{ fontSize: "1.3rem" }}>Track</p>
					</button>
				</article>

				{/* Message or Tracking Data to Display */}
				{isLoading ? (
					<CircularProgress size="md" variant="soft" className="mt-5" />
				) : errorMsg ? (
					<p>Please Enter a Valid Tracking ID</p>
				) : consignment_data ? (
					<section className={styles.tracking_data_container}>
						{/* Section 1 */}
						<article className={styles.tracking_data}>
							<div>
								<div style={{ paddingBottom: "0.5rem", display: "flex" }}>
									Tracking ID: &nbsp;
									<p
										className="p-0 m-0"
										style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
										{" "}
										{consignment_data?.cgmtId}
									</p>
								</div>

								<div
									style={{
										paddingBottom: "0.5rem",
										display: "flex",
									}}>
									Shipment Handled By: &nbsp;
									<p
										className="p-0 m-0"
										style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
										{consignment_data?.details?.delivery_agent}
									</p>
								</div>

								<div style={{ paddingBottom: "0.5rem", display: "flex" }}>
									Weight: &nbsp;
									<p
										className="p-0 m-0"
										style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
										{consignment_data?.details?.gross_weight} Kg
									</p>
								</div>

								<div style={{ paddingBottom: "0.5rem", display: "flex" }}>
									Consignment Type: &nbsp;
									<p
										className="p-0 m-0"
										style={{
											fontWeight: "bold",
											paddingLeft: "0.5rem",
										}}>
										{consignment_data?.details?.type_of_goods}
									</p>
								</div>
							</div>

							<div className={styles.print_POD_Btn}>
								<button>Print POD</button>
							</div>
						</article>

						{/* Section 2 */}
						<article className={styles.curr_status_container}>
							<div>
								<p className="p-0 m-0">
									Source: &nbsp;
									<span>{`${consignment_data?.sender.address.town}, ${consignment_data?.sender.address.state}, ${consignment_data?.sender.address.country}, ${consignment_data?.sender.address.pincode}`}</span>
								</p>
								<p className="p-0 m-0">
									Destination: &nbsp;
									<span
										style={{
											color: "green",
										}}>{`${consignment_data?.receiver.address.town}, ${consignment_data?.receiver.address.state}, ${consignment_data?.receiver.address.country}, ${consignment_data?.receiver.address.pincode}`}</span>
								</p>
							</div>

							<p className="p-0 m-0">
								Current Status: &nbsp;
								<span>{consignment_data?.tracking?.curr_status}</span>
							</p>
							<button onClick={handleShowAllUpdates} className="mt-3">
								{!showAllTrackingUpdates
									? "Show All Updates"
									: "Hide All Updates"}
							</button>
						</article>
					</section>
				) : (
					<></>
				)}

				{showAllTrackingUpdates ? (
					<section className={styles.all_updates_container}>
						<article className={styles.all_updates_data}>
							<h5>Tracking details</h5>
						</article>

						{/* Consignment Timeline */}
						<article
							className="col-6 bg-light bg-gradient bg-opacity-25 mx-5 mt-5 d-flex flex-row justify-content-start align-items-center"
							style={{
								width: "auto",
								minWidth: "10%",
								minHeight: "60%",
								height: "auto",
							}}>
							{consignment_data?.tracking.booked.status ? (
								<TimeLinePtr2
									title="Booked"
									date={consignment_data?.tracking?.booked.date}
								/>
							) : (
								<></>
							)}

							{consignment_data?.tracking.dispatch.status ? (
								<TimeLinePtr2
									title="Dispatched"
									date={consignment_data?.tracking.dispatch.date}
								/>
							) : (
								<></>
							)}

							{consignment_data?.tracking.in_transit.status ? (
								<TimeLinePtr2
									title="In-Transit"
									date={consignment_data?.tracking.in_transit.date}
								/>
							) : (
								<></>
							)}

							{consignment_data?.tracking.out_for_delivery.status ? (
								<TimeLinePtr2
									title="Out-For-Delivery"
									date={consignment_data?.tracking.out_for_delivery.status}
								/>
							) : (
								<></>
							)}

							{consignment_data?.tracking.delivered.status ? (
								<TimeLinePtr2
									title="Delivered"
									date={consignment_data?.tracking.delivered.date}
								/>
							) : (
								<></>
							)}
						</article>
					</section>
				) : null}
			</section>

			{/* <article className="position-absolute top-0 end-50">
				<img src={icon_logo} alt="" />
			</article> */}
		</>
	);
};

export default Tracking_Page;
