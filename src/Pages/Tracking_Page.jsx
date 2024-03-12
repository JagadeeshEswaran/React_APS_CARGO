/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import styles from "../styles/Tracking_page.module.css";
import { tracking_data } from "../../../Server/data";

const Tracking_Page = () => {
	const [new_tracking_data, setTracking_data] = useState(tracking_data);
	const [trackingId, setTrackingId] = useState();
	const [consignment_data, setConsignmentData] = useState();
	const [showAllTrackingUpdates, setShowAllTrackingUpdates] = useState(false);
	let [idFromURL, setIdFromURL] = useState();
	const [errorMsg, setErrorMsg] = useState();

	const handleConsignmentData = (id) => {
		if (!id) {
			setErrorMsg("Please Enter a Valid Tracking ID");

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

	useEffect(() => {
		const params = window.location.pathname;
		const paramsArr = params.split("/");

		const trackingIdFromURL = +paramsArr[paramsArr.length - 1];

		setIdFromURL(trackingIdFromURL);
		handleConsignmentData(trackingIdFromURL);
	}, []);

	return (
		<>
			<section
				style={{ height: "93vh" }}
				className={styles.tracking_page_container}>
				<h1>TRACK CONSIGNMENTS</h1>

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
						/>
					)}

					{/* <input
						type="text"
						name="tracking_id"
						id=""
						placeholder="Please Enter the Tracking ID"
						onChange={(e) => setTrackingId(e.target.value)}
					/> */}

					<button onClick={() => handleConsignmentData(trackingId)}>
						<p style={{ fontSize: "1.3rem" }}>Track</p>
					</button>
				</article>

				{errorMsg ? <p>{errorMsg}</p> : null}

				{consignment_data?.map((item) => (
					<section key={item.id} className={styles.tracking_data_container}>
						<article className={styles.tracking_data}>
							<div>
								<div style={{ paddingBottom: "0.5rem" }}>
									Tracking ID : {consignment_data[0]?.id}
								</div>
								<div style={{ paddingBottom: "0.5rem 0" }}>
									Shipment Handled By : {consignment_data[0]?.vendor}
								</div>
							</div>

							<div className={styles.print_POD_Btn}>
								<button>Print POD</button>
							</div>
						</article>

						<article className={styles.curr_status_container}>
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
				))}

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
