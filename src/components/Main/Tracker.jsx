/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";

import "../../styles/Main_Section.css";

const Tracker = () => {
	const [tracking_id, setTracking_id] = useState();
	const [searchClicked, setSearchClicked] = useState(false);

	const handleSearchButton = (id) => {
		setSearchClicked(true);
	};

	return (
		<>
			<article className="tracker_form">
				<form action="#">
					<label
						htmlFor="tracker_label"
						className="tracker_form_label text-danger">
						<h1>Track Your Shipment</h1>
					</label>

					<input
						type="text"
						name="tracking_id"
						id=""
						placeholder="Enter the Tracking ID"
						className="tracker_form_input"
						onChange={(e) => setTracking_id(e.target.value)}
					/>

					<a href={`/tracking/${tracking_id}`}>
						<article
							className=""
							onClick={() => handleSearchButton(tracking_id)}>
							<IoSearchCircle className="search_icons  rounded-circle" />
						</article>
					</a>
				</form>
			</article>
		</>
	);
};

export default Tracker;
