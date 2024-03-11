/* eslint-disable no-unused-vars */

import React from "react";
import styles from "../../styles/Main_Section.module.css";

const Tracker = () => {
	return (
		<>
			<article className={styles.tracker_form}>
				<form action="#">
					<label htmlFor="tracker_label" className={styles.tracker_form_label}>
						<h1>Track your Shipment</h1>
					</label>

					<input
						type="text"
						name="tracking_id"
						id=""
						placeholder="Enter the Tracking ID"
						className={styles.tracker_form_input}
					/>
				</form>
			</article>
		</>
	);
};

export default Tracker;
