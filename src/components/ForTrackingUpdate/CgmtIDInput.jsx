/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ConsignmentInfo from "./ConsignmentInfo";

import "../../styles/ConsignmentUpdate.css";
import { toast } from "react-toastify";

const CgmtIDInput = ({
	setTrackingId,
	trackingId,
	handleUserInput,
	consignment_data,
	booking_data,
	errorMsg,
}) => {
	const consignmentInfoData = [
		{
			id: 1,
			infoHead: "Consignment ID",
			info: booking_data ? booking_data[0]?.booking_id : "",
		},
		{
			id: 2,
			infoHead: "Sender",
			info: booking_data
				? booking_data[0].sender_F_Name + " " + booking_data[0].sender_L_Name
				: "",
		},
		{
			id: 3,
			infoHead: "Receiver",
			info: booking_data
				? booking_data[0].receiver_F_Name +
				  " " +
				  booking_data[0].receiver_L_Name
				: "",
		},
		{
			id: 4,
			infoHead: "Origin",
			info: booking_data
				? booking_data[0].sender_addr_town +
				  ", " +
				  booking_data[0].sender_addr_Dt +
				  ", " +
				  booking_data[0].sender_addr_state +
				  ", " +
				  booking_data[0].sender_addr_pincode
				: "",
		},
		{
			id: 5,
			infoHead: "Destination",
			info: booking_data
				? booking_data[0].receiver_addr_town +
				  ", " +
				  booking_data[0].receiver_addr_Dt +
				  ", " +
				  booking_data[0].receiver_addr_state +
				  ", " +
				  booking_data[0].receiver_addr_pincode
				: "",
		},
	];

	// const consignmentInfoData = consignment_data;

	const consignmentInfoData_2 = [
		{
			id: 1,
			infoHead: "G.Weight",
			info: consignment_data ? consignment_data[0].gross_weight : "",
		},
		{
			id: 2,
			infoHead: "Goods Type",
			info: consignment_data ? consignment_data[0].type_of_goods : "",
		},
	];

	const consignmentInfoData_3 = [
		{
			id: 1,
			infoHead: "Package Qty",
			info: consignment_data ? consignment_data[0].package_qty : "",
		},
		{
			id: 2,
			infoHead: "Agent",
			info: consignment_data ? consignment_data[0].delivery_agent : "",
		},
	];

	if (errorMsg) {
		// console.log("received error message: " + errorMsg);

		toast.error(`${errorMsg}`, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	return (
		<>
			{/* Column 1 : To get Consignment ID input & To Display consignment Data for Reference */}
			<article
				className="card shadow border border-2 col-7 update_consignment_Input_container_1"
				style={{ width: "30vw" }}>
				{/*  To get Consignment ID input */}
				<article className="input-group my-3 border rounded fw-bold fs-4 bg-light bg-gradient bg-opacity-10">
					<input
						type="text"
						className="form-control fw-semibold fs-6 bg-light bg-opacity-50 shadow-large"
						style={{ height: "3.5rem" }}
						placeholder="Consignment ID"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
						onChange={(e) => setTrackingId(e.target.value)}
					/>

					<button
						className="btn btn-info fw-bold bg-gradient bg-opacity-50 w-25 shadow"
						type="button"
						onClick={() => handleUserInput(trackingId)}
						id="button-addon2">
						Search
					</button>
				</article>

				{errorMsg ? (
					<>
						<p className="fw-semibold text-light text-center p-0 m-0">
							<span className="text-danger"> *** </span>
							{errorMsg}
							<span className="text-danger"> *** </span>
						</p>
					</>
				) : null}

				{/* Devider */}
				<article className="border-2 border-bottom my-3 mx-4"></article>

				<>
					{/* To Display consignment Data for Reference */}
					<article className="card h-75 mt-3 p-4 bg-light bg-gradient bg-opacity-25 shadow-large ">
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
								className="card px-3 py-4 d-flex justify-content-start align-items-start col-6 bg-info shadow"
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
								className="card px-3 py-4 d-flex justify-content-start align-items-start col-6 bg-info shadow"
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
				</>
			</article>
		</>
	);
};

export default CgmtIDInput;
