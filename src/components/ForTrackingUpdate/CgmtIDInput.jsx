/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import ConsignmentInfo from "./ConsignmentInfo";

import "../../styles/ConsignmentUpdate.css";
import { toast } from "react-toastify";
import CircularProgress from "@mui/joy/CircularProgress";

const CgmtIDInput = ({ handleUserInput, consignment_data, errorMsg }) => {
	const [isLoading, setLoading] = useState(false);
	const cgmtID = useRef();

	const handleCgmtSearch = async () => {
		setLoading(true);

		handleUserInput(cgmtID.current.value);

		setTimeout(() => {
			setLoading(false);
		}, 900);
	};

	// console.log(consignment_data);

	if (consignment_data || errorMsg) {
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
							aria-describedby="button-addon2"
							ref={cgmtID}
						/>

						<button
							className="btn btn-info fw-bold bg-gradient bg-opacity-50 w-25 shadow"
							type="button"
							onClick={() => handleCgmtSearch()}
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

							{toast.error(`${errorMsg}`, {
								position: "bottom-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "light",
							})}
						</>
					) : null}

					{/* Devider */}
					<article className="border-2 border-bottom my-3 mx-4"></article>

					{isLoading ? (
						<article className="mt-5 text-center">
							<CircularProgress />
						</article>
					) : consignment_data.booking_data &&
					  consignment_data.consignment_data &&
					  consignment_data.tracking_data ? (
						<>
							{/* To Display consignment Data for Reference */}
							<article className="card h-75 mt-3 p-4 bg-light bg-gradient bg-opacity-25 shadow-large ">
								<article>
									<p className="fs-5 fw-semibold">
										Consignment ID :{" "}
										<span
											className="fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.booking_data[0].booking_id}
										</span>
									</p>
									<p className="fs-5 fw-semibold">
										Sender :{" "}
										<span
											className="fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.booking_data[0].sender_F_Name}{" "}
											{consignment_data.booking_data[0].sender_L_Name}
										</span>
									</p>
									<p className="fs-5 fw-semibold">
										Receiver :{" "}
										<span
											className="fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.booking_data[0].receiver_F_Name}{" "}
											{consignment_data.booking_data[0].receiver_L_Name}
										</span>
									</p>
									<p className="fs-5 fw-semibold">
										Origin :{" "}
										<span
											className="fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.booking_data[0].sender_addr_town}
											{", "}
											{consignment_data.booking_data[0].sender_addr_country}
											{", "}
											{consignment_data.booking_data[0].sender_addr_pincode}
										</span>
									</p>
									<p className="fs-5 fw-semibold">
										Destination :{" "}
										<span
											className="fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.booking_data[0].receiver_addr_town}
											{", "}
											{consignment_data.booking_data[0].receiver_addr_country}
											{", "}
											{consignment_data.booking_data[0].receiver_addr_pincode}
										</span>
									</p>
								</article>

								<article
									className=" row d-flex flex-row justify-content-evenly align-items-center"
									style={{ width: "100%", height: "100%" }}>
									{/* Col - 1 */}
									<article
										className="card px-3 py-4 d-flex justify-content-evenly align-items-center col-6 bg-info shadow"
										style={{ width: "47.5%", height: "95%" }}>
										<p className="p-0 m-0 fs-5 fw-semibold">Gross Weight : </p>
										<p
											className="p-0 m-0 fs-6 fw-normal ms-2 mb-3 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.consignment_data[0].gross_weight}
										</p>
										<p className="p-0 m-0 fs-5 fw-semibold">Goods Type : </p>
										<p
											className="p-0 m-0 fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.consignment_data[0].type_of_goods}
										</p>
									</article>

									{/* Col - 2 */}
									<article
										className="card px-3 py-4 d-flex justify-content-evenly align-items-center col-6 bg-info shadow"
										style={{ width: "47.5%", height: "95%" }}>
										<p className="p-0 m-0 fs-5 fw-semibold">
											Box / Pack Qty :{" "}
										</p>
										<p
											className="p-0 m-0 fs-6 fw-normal ms-2 mb-3 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.consignment_data[0].package_qty}
										</p>

										<p className="p-0 m-0 fs-5 fw-semibold">Handled By : </p>
										<p
											className="p-0 m-0 fs-6 fw-normal ms-2 px-3 py-1 bg-light bg-opacity-50 shadow-sm rounded border border-1"
											style={{ textTransform: "capitalize" }}>
											{consignment_data.consignment_data[0].delivery_agent}
										</p>
									</article>
								</article>
							</article>
						</>
					) : (
						<></>
					)}

					{}
				</article>
			</>
		);
	}
};

export default CgmtIDInput;
