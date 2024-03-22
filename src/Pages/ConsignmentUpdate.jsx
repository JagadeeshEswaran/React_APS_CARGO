/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import styles from "../styles/ConsignmentUpdate.module.css";
import axios from "axios";
import CgmtIDInput from "../components/ForTrackingUpdate/CgmtIDInput";
import CgmtTrackingUpdateForm from "../components/ForTrackingUpdate/CgmtTrackingUpdateForm";

const ConsignmentUpdate = () => {
	const [trackingId, setTrackingId] = useState();
	const [consignment_data, setConsignmentData] = useState();

	const handleAxiosRequest = async (id) => {
		try {
			const response = await axios.post(
				`http://localhost:3000/api/update/${id}`
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

	return (
		<>
			<section className={styles.tracking_form_container}>
				{/* Component Header */}
				<article
					className={styles.tracking_form_header}
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
					<CgmtIDInput />
					<CgmtTrackingUpdateForm />
				</article>
			</section>
		</>
	);
};

export default ConsignmentUpdate;
