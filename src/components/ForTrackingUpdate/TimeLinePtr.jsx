/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TimeLinePtr = ({ title, date }) => {
	return (
		<article
			className={`border border-0 d-flex justify-content-start align-items-center py-2 w-50 h-25 ps-4 position-relative ${
				title === "Delivered" ? "border-start" : " border-start"
			}`}>
			<article
				className="border border-2 border-warning rounded-circle position-absolute"
				style={{
					left: "-12px",
					top: "47px",
					height: "1.5rem",
					width: "1.5rem",
				}}>
				<article
					className="border shadow rounded-circle bg-success shadow"
					style={{
						marginLeft: "2px",
						marginTop: "2px",
						height: "1rem",
						width: "1rem",
					}}></article>
			</article>

			<article>
				<h5 className="fw-semibold">{title}</h5>
				<h6 className="fw-semibold">{new Date(date).toLocaleString()}</h6>
			</article>
		</article>
	);
};

export default TimeLinePtr;
