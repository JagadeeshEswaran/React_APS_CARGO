/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TimeLinePts2 = ({ title, date }) => {
	return (
		<article className="border border-0 border-bottom w-50 h-25 ps-4 position-relative d-flex flex-column justify-content-center align-items-center">
			<article className=" d-flex flex-column justify-content-center align-items-center">
				<h6>{title}</h6>
				<p>{new Date(date).toLocaleString()}</p>
			</article>

			<article
				className="border border-2 rounded-circle position-absolute"
				style={{
					left: "100px",
					bottom: "-12px",
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
		</article>
	);
};

export default TimeLinePts2;
