/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "../styles/ConsignmentUpdate.css";
import axios from "axios";
import CgmtIDInput from "../components/ForTrackingUpdate/CgmtIDInput";
import CgmtTrackingUpdateForm from "../components/ForTrackingUpdate/CgmtTrackingUpdateForm";
import { toast } from "react-toastify";
import { useAppContext } from "../GlobalContext/AppContext";

const ConsignmentUpdate = () => {
	const [trackingId, setTrackingId] = useState();
	const [errorMsg, setErrorMsg] = useState("");
	const { consignment_data, setConsignmentData } = useAppContext([]);

	const handleAxiosRequest = async (trackingId) => {
		console.log(trackingId);

		try {
			const response = await axios.get(
				`http://localhost:3000/api/tracking/${trackingId}`
			);

			if (response.data.success === true) {
				setConsignmentData(response.data.data);

				setTrackingId("");
			}
		} catch (error) {
			if (error.response.status === 404) {
				setErrorMsg(`${error.response.data}`);
				setConsignmentData([]);

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);
			} else if (error.request) {
				// The request was made but no response was received
				console.log("No response received from server:", error.request);
				setConsignmentData([]);

				// Set appropriate error message for network error
				setErrorMsg(
					"No response received from server. Please check your internet connection."
				);

				setTimeout(() => {
					setErrorMsg("");
				}, 5000);
			}
		}
	};

	const handleUserInput = async (trackingId) => {
		if (trackingId.length < 6 || trackingId < 700555) {
			setConsignmentData("");

			return toast.error("Invalid Consignment ID, Please try with valid ID", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}

		await handleAxiosRequest(trackingId);
	};

	// const handleCgmtUpdateAxios = () => {};

	// console.log(trackingId);
	console.log(consignment_data);
	// console.log(errorMsg);
	// console.log(consignment_data?.data?.tracking_data);

	return (
		<>
			<section className="tracking_form_container">
				{/* Component Header */}
				<article
					className="tracking_form_header"
					style={{ padding: "1rem 4rem" }}>
					<h5 className="fw-bold m-0 p-0 text-info-emphasis">
						Tracking Update
					</h5>
				</article>

				<article
					className="row d-flex justify-content-evenly mt-4 "
					style={{
						width: "auto",
						minWidth: "95vw",
						height: "auto",
						minHeight: "80vh",
					}}>
					{/* Results */}
					<CgmtIDInput
						setTrackingId={setTrackingId}
						trackingId={trackingId}
						handleUserInput={() => handleUserInput(trackingId)}
						consignment_data={consignment_data?.data?.consignment_data}
						booking_data={consignment_data?.data?.booking_data}
						errorMsg={errorMsg}
					/>

					{consignment_data ? (
						<CgmtTrackingUpdateForm
							// handleCgmtUpdateAxios={handleCgmtUpdateAxios}
							// booking_data={consignment_data?.data?.booking_data}
							// consignment_data={consignment_data?.data?.consignment_data}
							tracking_data_1={consignment_data?.tracking_data}
						/>
					) : null}
				</article>
			</section>
		</>
	);
};

export default ConsignmentUpdate;
