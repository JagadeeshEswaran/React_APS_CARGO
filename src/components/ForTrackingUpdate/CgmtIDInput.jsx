/* eslint-disable no-unused-vars */
import React from "react";
import ConsignmentInfo from "./ConsignmentInfo";

const CgmtIDInput = () => {
	const consignmentInfoData = [
		{
			id: 1,
			infoHead: "Consignment ID",
			info: "XXXXXX",
		},
		{
			id: 2,
			infoHead: "Sender",
			info: "S_Name",
		},
		{
			id: 3,
			infoHead: "Receiver",
			info: "R_Name",
		},
		{
			id: 4,
			infoHead: "Origin",
			info: "Origin",
		},
		{
			id: 5,
			infoHead: "Destination",
			info: "Destination",
		},
	];

	const consignmentInfoData_2 = [
		{
			id: 1,
			infoHead: "G.Weight",
			info: "X.XX",
		},
		{
			id: 2,
			infoHead: "Goods Type",
			info: "Goods",
		},
	];

	const consignmentInfoData_3 = [
		{
			id: 1,
			infoHead: "Package Qty",
			info: "XX",
		},
		{
			id: 2,
			infoHead: "Agent",
			info: "Agent",
		},
	];

	return (
		<>
			{/* Column 1 : To get Consignment ID input & To Display consignment Data for Reference */}

			<article
				className="card shadow border border-2 col-7 bg-secondary bg-gradint"
				style={{ width: "30vw" }}>
				{/*  To get Consignment ID input */}
				<article className="input-group my-3 border rounded fw-bold fs-4 bg-light bg-gradient bg-opacity-25">
					<input
						type="text"
						className="form-control fw-semibold fs-6 bg-light bg-opacity-50 shadow-large"
						style={{ height: "3.5rem" }}
						placeholder="Consignment ID"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>

					<button
						className="btn btn-info fw-bold bg-gradient bg-opacity-50 w-25 shadow"
						type="button"
						id="button-addon2">
						Search
					</button>
				</article>

				{/* Devider */}
				<article className="border-2 border-bottom my-3 mx-4"></article>

				{/* To Display consignment Data for Reference */}
				<article className="card h-75 mt-3 p-4 bg-light bg-gradient bg-opacity-75 shadow-large ">
					<article>
						{consignmentInfoData.map((item) => (
							<ConsignmentInfo
								key={item.id}
								infoHead={item.infoHead}
								info={item.info}
							/>
						))}
					</article>

					<article
						className=" row d-flex flex-row justify-content-evenly align-items-center"
						style={{ width: "100%", height: "100%" }}>
						<article
							className="card px-3 py-4 d-flex justify-content-start align-items-start col-6 bg-info bg-opacity-50 shadow"
							style={{ width: "47.5%", height: "95%" }}>
							{consignmentInfoData_2.map((item) => (
								<ConsignmentInfo
									key={item.id}
									infoHead={item.infoHead}
									info={item.info}
								/>
							))}
						</article>
						<article
							className="card px-3 py-4 d-flex justify-content-start align-items-start col-6 bg-info bg-opacity-50 shadow"
							style={{ width: "47.5%", height: "95%" }}>
							{consignmentInfoData_3.map((item) => (
								<ConsignmentInfo
									key={item.id}
									infoHead={item.infoHead}
									info={item.info}
								/>
							))}
						</article>
					</article>
				</article>
			</article>
		</>
	);
};

export default CgmtIDInput;
