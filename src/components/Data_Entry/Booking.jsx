/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

import styles from "../../styles/DataEntry.module.css";
import AddrInputs from "./AddrInputs";
import Buttons from "./Buttons";

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
			consignment_image: "",
		},
	});

	const handleSubmitBtn = async () => {
		console.log(bookingDetails);

		try {
			const response = await axios.post(
				"http://localhost:3000/admin/book_parcel",
				bookingDetails
			);

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section className={styles.booking_form_container}>
				<article
					className={styles.booking_form_header}
					style={{ padding: "1rem 4rem" }}>
					<h1>Consignment Booking</h1>
				</article>

				<article className={styles.booking_form}>
					{/* Address Component */}
					<article className={styles.card_1} style={{ width: "55rem" }}>
						<form action="" className={styles.form_ele}>
							<article className={styles.form_date_ele}>
								<label htmlFor="">
									Date : <span className={styles.man_span}>*</span>{" "}
								</label>
								<input
									type="date"
									name=""
									id=""
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
							</form>

							<article
								className={styles.card}
								style={{ width: "95%", height: "25rem" }}>
								<img src="" alt="" />
							</article>
						</article>

						<article className={styles.card_1}>
							<Buttons handleSubmitBtn={handleSubmitBtn} />
						</article>
					</article>
				</article>
			</section>
		</>
	);
};

export default Booking;
