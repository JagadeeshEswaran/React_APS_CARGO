/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "../styles/Tracking_page.module.css";
import { tracking_data } from "../data/consignment_data";

const Tracking_Page = () => {
	const [new_tracking_data, setTracking_data] = useState(tracking_data);
	const [trackingId, setTrackingId] = useState();
	const [consignment_data, setConsignmentData] = useState();
	const [showAllTrackingUpdates, setShowAllTrackingUpdates] = useState(false);
	let [idFromURL, setIdFromURL] = useState();
	const [errorMsg, setErrorMsg] = useState(false);

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
		try {
			const response = await axios.post(
				`http://localhost:3000/api/tracking/${id}`
			);

			if (response.data.success === true) {
				setConsignmentData([
					{
						...response.data.data.bookingDetails,
						consignment_data: { ...response.data.data.consignmentDetails },
					},
				]);
			} else {
				// throw new Error("Something went wrong, please try again!!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		console.log(consignment_data);
	});

	useEffect(() => {
		const params = window.location.pathname;
		const paramsArr = params.split("/");

		const trackingIdFromURL = +paramsArr[paramsArr.length - 1];

		setIdFromURL(trackingIdFromURL);
		handleConsignmentData(trackingIdFromURL);

		handleAxiosRequest(trackingIdFromURL);
	}, []);

	return (
		<>
			<section
				style={{ height: "93vh" }}
				className={styles.tracking_page_container}>
				<h1>TRACK CONSIGNMENTS</h1>

				{/* Trackign ID Input Form */}
				<article className={styles.tracingID_input}>
					{idFromURL ? (
						<input
							type="text"
							name="tracking_id"
							id=""
							placeholder="Please Enter the Tracking ID"
							onChange={(e) => setTrackingId(e.target.value)}
							value={idFromURL}
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
				{errorMsg ? (
					<p>Please Enter a Valid Tracking ID</p>
				) : (
					consignment_data?.map((item) => (
						<section key={item.id} className={styles.tracking_data_container}>
							<article className={styles.tracking_data}>
								<div>
									<div style={{ paddingBottom: "0.5rem", display: "flex" }}>
										Tracking ID :{" "}
										<p style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
											{consignment_data[0]?.booking_id}
										</p>
									</div>
									<div
										style={{
											paddingBottom: "0.5rem",
											display: "flex",
										}}>
										Shipment Handled By :{" "}
										<p style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
											{item?.consignment_data?.delivery_agent}
										</p>
									</div>

									<div style={{ paddingBottom: "0.5rem", display: "flex" }}>
										Weight :{" "}
										<p style={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>
											{consignment_data[0]?.consignment_data.gross_weight} Kg
										</p>
									</div>
									<div style={{ paddingBottom: "0.5rem", display: "flex" }}>
										Consignment Type :{" "}
										<p
											style={{
												fontWeight: "bold",
												paddingLeft: "0.5rem",
											}}>
											{consignment_data[0]?.consignment_data.type_of_goods}
										</p>
									</div>
								</div>

								<div className={styles.print_POD_Btn}>
									<button>Print POD</button>
								</div>
							</article>

							<article className={styles.curr_status_container}>
								<div>
									<p>
										Source :{" "}
										<span>{`${item?.sender_addr_town}, ${item?.sender_addr_Dt}, ${item?.sender_addr_state}, ${item?.sender_addr_country},  ${item?.sender_addr_pincode}`}</span>
									</p>
									<p>
										Destination :{" "}
										<span
											style={{
												color: "green",
											}}>{`${item?.receiver_addr_town}, ${item?.receiver_addr_Dt}, ${item?.receiver_addr_state}, ${item?.receiver_addr_country},  ${item?.receiver_addr_pincode}`}</span>
									</p>
								</div>

								<p>
									Current Status : <span>{item.curr_location}</span>
								</p>
								<button onClick={handleShowAllUpdates}>
									{!showAllTrackingUpdates
										? "Show All Updates"
										: "Hide All Updates"}
								</button>
							</article>
						</section>
					))
				)}

				{showAllTrackingUpdates ? (
					<section className={styles.all_updates_container}>
						<article className={styles.all_updates_data}>
							<div>Showing All Updates !!</div>
						</article>

						<article>
							{consignment_data[0]?.tracking_status?.map(
								(item, idx) => (
									<div key={idx} className={styles.tracking_data_timeline}>
										<p>{item.date}</p>
										<span>-</span>

										{item.status === "delivered" ? (
											<p style={{ color: "green", fontWeight: "bold" }}>
												{item.status}
											</p>
										) : (
											<p>{item.status}</p>
										)}
									</div>
								)

								// console.log(item)
							)}
						</article>
					</section>
				) : null}
			</section>
		</>
	);
};

export default Tracking_Page;
