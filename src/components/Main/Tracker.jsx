/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";

import "../../styles/Main_Section.css";

const Tracker = () => {
	const [errorMsg, setErrorMsg] = useState("");
	const [tracking_id, setTracking_id] = useState();
	const [searchClicked, setSearchClicked] = useState(false);
	const navigate = useNavigate(false);
	const inputRef = useRef();

	const handleSearchButton = (id) => {
		if (id < 1 || !id) {
			setErrorMsg("Please enter a Valid tracking Id");

			setTimeout(() => {
				setErrorMsg("");
			}, 2500);

			return;
		} else {
			setSearchClicked(true);
			navigate(`/tracking/${id}`);
		}
	};

	return (
		<>
			<article className="tracker_form">
				<form
					action="#"
					onSubmit={() => handleSearchButton(inputRef.current.value)}>
					<label htmlFor="tracker_label" className="tracker_form_label">
						<h1>Track Your Shipment</h1>
					</label>

					<input
						type="number"
						onInput={(e) => (e.target.value = e.target.value.slice(0, 15))}
						name="tracking_id"
						autoComplete="off"
						id=""
						placeholder="Enter the Tracking ID"
						className="tracker_form_input"
						// onChange={(e) => setTracking_id(e.target.value)}
						ref={inputRef}
					/>

					<article
						role="button"
						onClick={() => handleSearchButton(inputRef.current.value)}>
						<article
							className="pb-2"
							// onClick={() => handleSearchButton(tracking_id)}
						>
							<IoSearchCircle className="search_icons rounded-circle" />
						</article>
					</article>

					<p
						className="p-0 m-0 mt-4 me-5 text-light position-absolute top-50 end-0"
						style={{ fontSize: "0.8rem" }}>
						Ex.: 123 4567 8901 2345
					</p>
				</form>

				<article className="ps-4 fw-bold mt-2">
					<h6 className=" fw-semibold hero_tracker_alert_message">
						{errorMsg}
					</h6>
				</article>
			</article>
		</>
	);
};

export default Tracker;
