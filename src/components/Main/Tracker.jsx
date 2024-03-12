/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";

import styles from "../../styles/Main_Section.module.css";

const Tracker = () => {
	const [tracking_id, setTracking_id] = useState();
	const [searchClicked, setSearchClicked] = useState(false);

	const handleSearchButton = (id) => {
		setSearchClicked(true);
	};

	return (
		<>
			<article className={styles.tracker_form}>
				<form action="#">
					<label htmlFor="tracker_label" className={styles.tracker_form_label}>
						<h1>Track Your Shipment</h1>
					</label>

					<input
						type="text"
						name="tracking_id"
						id=""
						placeholder="Enter the Tracking ID"
						className={styles.tracker_form_input}
						onChange={(e) => setTracking_id(e.target.value)}
					/>

					<a href={`/tracking/${tracking_id}`}>
						<article
							className={styles.search_icons}
							onClick={() => handleSearchButton(tracking_id)}>
							<IoSearchCircle />
						</article>
					</a>
				</form>
			</article>
		</>
	);
};

export default Tracker;
