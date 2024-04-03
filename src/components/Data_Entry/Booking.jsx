/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

import styles from "../../styles/DataEntry.module.css";
import icons_PNG from "../../assets/Company Icons/Figma/Icon_final.svg";
import AddrInputs from "./AddrInputs";
import Buttons from "./Buttons";
import { toast } from "react-toastify";

const Booking = () => {
	const [bookingDetails, setBookingDetails] = useState({
		booking_date: "",
		booking_date_ms: "",
		sender_F_name: "",
		sender_L_name: "",
		receiver_Ph_num: "",
		sender_addr_DNo: "",
		sender_addr_street: "",
		sender_addr_town: "",
		sender_addr_Dt: "",
		sender_addr_state: "",
		sender_addr_country: "",
		sender_addr_pincode: "",
		sender_Ph_num: "",
		receiver_F_name: "",
		receiver_L_name: "",
		receiver_addr_DNo: "",
		receiver_addr_street: "",
		receiver_addr_town: "",
		receiver_addr_Dt: "",
		receiver_addr_state: "",
		receiver_addr_country: "",
		receiver_addr_pincode: "",
		consignment_data: {
			gross_weight: "",
			type_of_goods: "",
			package_type: "",
			package_qty: 1,
			delivery_agent: "APS Cargo",
		},
	});

	const handleSubmitBtn = async () => {
		console.log(bookingDetails);

		try {
			const response = await axios.post(
				"http://localhost:3000/admin/book_parcel",
				bookingDetails
			);

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
					response.data.data.consignment_id === response.data.data.booking_id
				) {
					toast.success(
						`Consignment ID : ${response.data.data.booking_data_id}`,
						{
							position: "bottom-right",
							autoClose: 100000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						}
					);

					setBookingDetails({
						booking_date: "",
						booking_date_ms: "",
						sender_F_name: "",
						sender_L_name: "",
						receiver_Ph_num: "",
						sender_addr_DNo: "",
						sender_addr_street: "",
						sender_addr_town: "",
						sender_addr_Dt: "",
						sender_addr_state: "",
						sender_addr_country: "",
						sender_addr_pincode: "",
						sender_Ph_num: "",
						receiver_F_name: "",
						receiver_L_name: "",
						receiver_addr_DNo: "",
						receiver_addr_street: "",
						receiver_addr_town: "",
						receiver_addr_Dt: "",
						receiver_addr_state: "",
						receiver_addr_country: "",
						receiver_addr_pincode: "",
						consignment_data: {
							gross_weight: "",
							type_of_goods: "",
							package_type: "",
							package_qty: "",
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
									<article className="col-6">
										<label htmlFor="">
											Date : <span className={styles.man_span}>*</span>{" "}
										</label>
										<input
											type="date"
											name=""
											id=""
											value={bookingDetails.booking_date}
											onChange={(e) => {
												const selectedData = new Date(e.target.value);
												const inMilliSec = selectedData.getTime();

												setBookingDetails({
													...bookingDetails,
													booking_date_ms: inMilliSec,
													booking_date: e.target.value,
												});
											}}
										/>
									</article>

									<article className="col-6" style={{ color: "#182454" }}>
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
								<label>Consignment Details : </label>

								<input
									type="text"
									name=""
									id=""
									placeholder="Weight"
									value={bookingDetails.consignment_data.gross_weight}
									onChange={(e) =>
										setBookingDetails({
											...bookingDetails,
											consignment_data: {
												...bookingDetails.consignment_data,
												gross_weight: e.target.value,
											},
										})
									}
								/>
								<input
									type="text"
									name=""
									id=""
									placeholder="Type of Item in the Parcel"
									value={bookingDetails.consignment_data.type_of_goods}
									onChange={(e) =>
										setBookingDetails({
											...bookingDetails,
											consignment_data: {
												...bookingDetails.consignment_data,
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
													consignment_data: {
														...bookingDetails.consignment_data,
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
													consignment_data: {
														...bookingDetails.consignment_data,
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
													consignment_data: {
														...bookingDetails.consignment_data,
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
									value={bookingDetails.consignment_data.package_qty}
									onChange={(e) =>
										setBookingDetails({
											...bookingDetails,
											consignment_data: {
												...bookingDetails.consignment_data,
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
													consignment_data: {
														...bookingDetails.consignment_data,
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
													consignment_data: {
														...bookingDetails.consignment_data,
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
													consignment_data: {
														...bookingDetails.consignment_data,
														delivery_agent: e.target.value,
													},
												})
											}
										/>
										<label htmlFor="others">Other</label>
									</article>
								</article>
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
				</article>
			</section>
		</>
	);
};

export default Booking;
