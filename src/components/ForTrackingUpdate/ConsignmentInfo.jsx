/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ConsignmentInfo = ({ infoHead, info }) => {
	return (
		<>
			<p className="fs-5 fw-semibold ">
				{infoHead} :{" "}
				<span className="fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1">
					{info}
				</span>
			</p>
		</>
	);
};

export default ConsignmentInfo;
