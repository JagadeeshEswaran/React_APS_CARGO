/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

import styles from "../../styles/DataEntry.module.css";
import icons_PNG from "../../assets/Company Icons/Figma/Icon_final.svg";
import AddrInputs from "./AddrInputs";
import Buttons from "./Buttons";
import { toast } from "react-toastify";
import { globalInstanceForAxios } from "../../../Axios/GlobalInstance";

const Booking = () => {
	const [bookingDetails, setBookingDetails] = useState({
		sender: {
			first_name: "",
			last_name: "",
			phone_number: "",
			address: {
				door_number: "",
				street: "",
				town: "",
				district: "",
				state: "",
				country: "",
				pincode: "",
			},
		},
		receiver: {
			first_name: "",
			last_name: "",
			phone_number: "",
			address: {
				door_number: "",
				street: "",
				town: "",
				district: "",
				state: "",
				country: "",
				pincode: "",
			},
		},
		details: {
			gross_weight: "",
			type_of_goods: "",
			package_type: "",
			package_qty: "",
			delivery_agent: "",
			delhivery_lrn: "",
		},
		tracking: {
			curr_status: "booked",
			booked: {
				date: new Date().getTime(),
				status: true,
			},
			dispatch: {
				date: null,
				status: false,
			},
			in_transit: {
				date: null,
				status: false,
			},
			out_for_delivery: {
				date: null,
				status: false,
			},
			delivered: {
				date: null,
				status: false,
			},
		},
	});

	const handleSubmitBtn = async () => {
		setBookingDetails({
			...bookingDetails,
			tracking: {
				...bookingDetails.tracking,
				curr_status: "booked",
				booked: {
					...bookingDetails.tracking.booked,
					status: true,
				},
			},
		});

		console.log(bookingDetails);

		try {
			const response = await globalInstanceForAxios.post(
				"/consignment/create",
				bookingDetails
			);

			console.log(response);

			if (response.data.success === true) {
				console.log(response);

				toast.success(`${response.data.msg} `, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				if (
					// response.data.data.consignment_id === response.data.data.booking_id &&
					// response.data.data.consignment_id === response.data.data.tracking_id
					// response.data.data.consignment_id === response.data.data.booking_id
					response.data.cgmtId
				) {
					toast.success(`Consignment ID : ${response.data.cgmtId}`, {
						position: "bottom-right",
						autoClose: 100000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});

					setBookingDetails({
						sender: {
							first_name: "",
							last_name: "",
							phone_number: "",
							address: {
								door_number: "",
								street: "",
								town: "",
								district: "",
								state: "",
								country: "",
								pincode: "",
							},
						},
						receiver: {
							first_name: "",
							last_name: "",
							phone_number: "",
							address: {
								door_number: "",
								street: "",
								town: "",
								district: "",
								state: "",
								country: "",
								pincode: "",
							},
						},
						details: {
							gross_weight: "",
							type_of_goods: "",
							package_type: "",
							package_qty: "",
							delivery_agent: "",
							delhivery_lrn: "",
						},
						tracking: {
							curr_status: "",
							booked: {
								status: false,
							},
							dispatch: {
								date: null,
								status: false,
							},
							in_transit: {
								date: null,
								status: false,
							},
							out_for_delivery: {
								date: null,
								status: false,
							},
							delivered: {
								date: null,
								status: false,
							},
						},
					});
				} else {
					toast.error(`Something went wrong, Please contact Admin !!`, {
						position: "bottom-right",
						autoClose: 100000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
				}
			}
		} catch (error) {
			console.log(error);

			toast.error(`Something went wrong, Please contact Admin !!`, {
				position: "bottom-right",
				autoClose: 100000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}
	};

	// console.log(bookingDetails);

	return (
		<>
			<section className={styles.booking_form_container}>
				<article className={styles.booking_form}>
					{/* Address Component */}
					<article className={styles.card_1} style={{ width: "55rem" }}>
						<form action="" className={styles.form_ele}>
							{/* Date Component	 */}
							<article className={styles.form_date_ele}>
								<section className="row mb-2">
									<article className="col-6 me-3">
										<label htmlFor="">
											Date : <span className={styles.man_span}>*</span>{" "}
										</label>
										<input
											className="fw-bold"
											type="date"
											// min={new Date().toISOString().split("T")[0]}
											value={new Date().toISOString().split("T")[0]}
											disabled
											name=""
											id=""
											onChange={(e) => {
												const selectedDate = new Date(e.target.value);
												const currentDate = new Date();
												currentDate.setHours(0, 0, 0, 0);

												if (selectedDate.getTime() < currentDate.getTime()) {
													e.target.value = ""; // Clear the input if the selected date is before today
													alert("Please select today's date.");
												} else {
													const inMilliSec = selectedDate.getTime();
													setBookingDetails({
														...bookingDetails,
														booking_date_ms: inMilliSec,
													});
												}
											}}
										/>
									</article>

									<article
										className="col-5 ms-5 booking_banner d-flex justify-content-center align-items-center"
										style={{ color: "#182454" }}>
										<h3 className="fw-bold text-end">Consignment Booking</h3>
									</article>
								</section>
							</article>

							<AddrInputs
								addrType={"From Address"}
								person={"Sender"}
								bookingDetails={bookingDetails}
								setBookingDetails={setBookingDetails}
							/>
							<AddrInputs
								addrType={"To Address"}
								person={"Receiver"}
								bookingDetails={bookingDetails}
								setBookingDetails={setBookingDetails}
							/>
						</form>
					</article>
					{/* Consignment Details Component */}
					<article>
						<article
							className={styles.card_2}
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "center",
							}}>
							<form
								action=""
								className={styles.consDetails_container}
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "flex-start",

									flexDirection: "column",
								}}>
								<label className="mb-2">Consignment Details : </label>

								{/* For Weight of the Consignment */}
								<input
									type="number"
									step="0.5"
									min="0"
									max="9999"
									name=""
									id=""
									placeholder="Weight"
									value={bookingDetails.details.gross_weight}
									onChange={(e) => {
										const value = e.target.value;

										if (
											value === "" ||
											(!isNaN(value) &&
												parseFloat(value) >= 0 &&
												parseFloat(value) <= 10000)
										) {
											setBookingDetails({
												...bookingDetails,
												details: {
													...bookingDetails.details,
													gross_weight: e.target.value,
												},
											});
										}
									}}
								/>
								<input
									type="text"
									name=""
									id=""
									placeholder="Type of Item in the Parcel"
									value={bookingDetails.details.type_of_goods}
									onChange={(e) =>
										setBookingDetails({
											...bookingDetails,
											details: {
												...bookingDetails.details,
												type_of_goods: e.target.value,
											},
										})
									}
								/>

								{/* Radio button selection for consignment selection */}
								<label htmlFor="">Consignement Type : </label>
								<article className={styles.package_type_selection}>
									<article>
										<input
											type="radio"
											name="package_type"
											id="box"
											value="Box"
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														package_type: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="box">Box</label>
									</article>

									<article>
										<input
											type="radio"
											name="package_type"
											id="bag"
											value="Bag"
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														package_type: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="bag">Bag</label>
									</article>

									<article>
										<input
											type="radio"
											name="package_type"
											id="envelope"
											value="Envelop"
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														package_type: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="envelope">Envelope</label>
									</article>
								</article>

								<label htmlFor="">Package Qty : </label>
								<input
									type="text"
									name=""
									id=""
									placeholder="Nos"
									value={bookingDetails.details.package_qty}
									onChange={(e) =>
										setBookingDetails({
											...bookingDetails,
											details: {
												...bookingDetails.details,
												package_qty: +e.target.value,
											},
										})
									}
								/>

								<label htmlFor="">Delivery Agent : </label>
								<article className={styles.package_type_selection}>
									<article>
										<input
											type="radio"
											name="agent_handler"
											id="APS_Cargo"
											value="APS Cargo"
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														delivery_agent: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="APS_Cargo">APS Cargo</label>
									</article>

									<article>
										<input
											type="radio"
											name="agent_handler"
											id="delhivery"
											value="Delhivery"
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														delivery_agent: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="delhivery">Delhivery</label>
									</article>

									<article>
										<input
											type="radio"
											name="agent_handler"
											id="others"
											value="Others"
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														delivery_agent: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="others">Other</label>
									</article>
								</article>

								{bookingDetails.details.delivery_agent === "Delhivery" && (
									<article className="mt-2">
										<input
											type="number"
											placeholder="Delhivery LRN No."
											onInput={(e) =>
												(e.target.value = e.target.value.slice(0, 10))
											}
											onChange={(e) =>
												setBookingDetails({
													...bookingDetails,
													details: {
														...bookingDetails.details,
														delhivery_lrn: e.target.value,
													},
												})
											}
										/>
									</article>
								)}
							</form>

							{/* <article
								className={styles.card}
								style={{ width: "95%", height: "25rem" }}>
								<img src="" alt="" />
							</article> */}
						</article>

						<article className={styles.card_1}>
							<Buttons handleSubmitBtn={handleSubmitBtn} />
						</article>

						<article className="text-center opacity-25">
							<img src={icons_PNG} alt="APS Cargo Icon" height={280} />
						</article>
					</article>
					;
				</article>
			</section>
		</>
	);
};

export default Booking;
