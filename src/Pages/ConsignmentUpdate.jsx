/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "../styles/ConsignmentUpdate.css";
import axios from "axios";
import CgmtIDInput from "../components/ForTrackingUpdate/CgmtIDInput";
import CgmtTrackingUpdateForm from "../components/ForTrackingUpdate/CgmtTrackingUpdateForm";
import { toast } from "react-toastify";
import { useAppContext } from "../GlobalContext/AppContext";
import { globalInstanceForAxios } from "../../Axios/GlobalInstance";

const ConsignmentUpdate = () => {
	const [errorMsg, setErrorMsg] = useState("");
	const { consignment_data, setConsignmentData } = useAppContext([]);
	const [cgmtUpdateFlag, setCgmtUpdateFlag] = useState(false);
	const [cgmtId, serCgmtId] = useState();

	const handleAxiosRequest = async (trackingId) => {
		// console.log(trackingId);

		try {
			const response = await globalInstanceForAxios.get(
				`/consignment/${trackingId}`
			);

			console.log(response);

			if (response.data.success === true) {
				setConsignmentData(response.data.data);
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
		// console.log(trackingId);

		if (trackingId < 700555) {
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

	useEffect(() => {
		consignment_data.cgmtId && handleAxiosRequest(consignment_data.cgmtId);
	}, [cgmtUpdateFlag]);

	return (
		<>
			<section className="tracking_form_container">
				{/* Component Header */}
				<article
					className="tracking_form_header"
					style={{ padding: "1rem 4rem" }}>
					<h5 className="fw-bold m-0 p-0 text-info-emphasis">
						Consignment Update
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
						handleUserInput={handleUserInput}
						consignment_data={consignment_data}
						errorMsg={errorMsg}
						cgmtId={cgmtId}
					/>

					<CgmtTrackingUpdateForm
						setCgmtUpdateFlag={setCgmtUpdateFlag}
						cgmtUpdateFlag={cgmtUpdateFlag}
						tracking_data_1={
							consignment_data.tracking ? consignment_data.tracking : []
						}
						cgmtToken={consignment_data._id}
						prevTracking={consignment_data.tracking}
					/>
				</article>
			</section>
		</>
	);
};

export default ConsignmentUpdate;
