/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TimeLinePtr = ({ title, date }) => {
	return (
		<article className="border border-0 border-start py-2 w-50 h-25 ps-4 position-relative">
			<article
				className="border border-2 rounded-circle position-absolute"
				style={{
					left: "-12px",
					top: "12px",
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
			<h3>{title}</h3>
			<h5>{new Date(date).toLocaleString()}</h5>
		</article>
	);
};

export default TimeLinePtr;
