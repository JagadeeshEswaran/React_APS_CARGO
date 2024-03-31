/* eslint-disable no-unused-vars */
import React from "react";
import { useAppContext } from "../../GlobalContext/AppContext";

const Timer = () => {
	const { timeNow } = useAppContext();
	return (
		<>
			<article
				className="d-flex justify-content-center align-items-center rounded px-3 py-3 mt-5 shadow-lg border border-info border-1 bg-info bg-gradient fs-6 fw-semibold fw-semibold"
				style={{ height: "5rem" }}>
				{timeNow}
			</article>
		</>
	);
};

export default Timer;
