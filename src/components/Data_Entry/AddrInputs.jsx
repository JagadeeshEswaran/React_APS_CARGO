/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import styles from "../../styles/DataEntry.module.css";
import Buttons from "./Buttons";

const AddrInputs = ({
	addrType,
	person,
	bookingDetails,
	setBookingDetails,
}) => {
	return (
		<>
			{addrType === "From Address" || addrType === "To Address" ? (
				<article
					style={{ marginBottom: "1rem" }}
					className={styles.addrField_ele}>
					<label htmlFor="">{person} Details </label>

					<article className={styles.addrField_ele_inputs_container}>
						{/* Names Container */}
						<article className={styles.names_container}>
							<input
								type="textfield"
								name=""
								id=""
								placeholder="First Name *"
								value={
									person === "Sender"
										? bookingDetails.sender.first_name
										: bookingDetails.receiver.first_name
								}
								// value={bookingDetails.sender_F_name}
								style={{ marginRight: "1rem", marginBottom: "1rem" }}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													first_name: e.target.value,
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													first_name: e.target.value,
												},
										  });
								}}
							/>

							<input
								type="textfield"
								name=""
								id=""
								placeholder="Last Name"
								value={
									person === "Sender"
										? bookingDetails.sender.last_name
										: bookingDetails.receiver.last_name
								}
								style={{}}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													last_name: e.target.value,
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													last_name: e.target.value,
												},
										  });
								}}
							/>
						</article>

						{/* Address Container */}
						<label htmlFor="">{addrType} </label>
						<article className={styles.arrdLine_1}>
							{/* Door No. */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="Block / Door No *"
								style={{ width: "25%", marginRight: "1rem" }}
								value={
									person === "Sender"
										? bookingDetails.sender.address.door_number
										: bookingDetails.receiver.address.door_number
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														door_number: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														door_number: e.target.value,
													},
												},
										  });
								}}
							/>

							{/* Street Name */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="Street Name *"
								value={
									person === "Sender"
										? bookingDetails.sender.address.street
										: bookingDetails.receiver.address.street
								}
								style={{
									width: "70.7%",
									marginRight: "1rem",
									marginBottom: "1rem",
								}}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														street: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														street: e.target.value,
													},
												},
										  });
								}}
							/>
						</article>

						<article className={styles.addrLine_2}>
							{/* City / Town Name */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="City / Town Name *"
								style={{ width: "48%", marginRight: "1rem" }}
								value={
									person === "Sender"
										? bookingDetails.sender.address.town
										: bookingDetails.receiver.address.town
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														town: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														town: e.target.value,
													},
												},
										  });
								}}
							/>

							{/* District Name */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="District *"
								style={{
									width: "47.4%",
									marginRight: "1rem",
									marginBottom: "1rem",
								}}
								value={
									person === "Sender"
										? bookingDetails.sender.address.district
										: bookingDetails.receiver.address.district
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														district: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														district: e.target.value,
													},
												},
										  });
								}}
							/>
						</article>

						<article className={styles.addrLine_3}>
							{/* State Name */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="State *"
								style={{}}
								value={
									person === "Sender"
										? bookingDetails.sender.address.state
										: bookingDetails.receiver.address.state
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														state: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														state: e.target.value,
													},
												},
										  });
								}}
							/>

							{/* Country Name */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="Country"
								style={{}}
								value={
									person === "Sender"
										? bookingDetails.sender.address.country
										: bookingDetails.receiver.address.country
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														country: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														country: e.target.value,
													},
												},
										  });
								}}
							/>

							{/* Pincode / Postal Code */}
							<input
								type="number"
								onInput={(e) => (e.target.value = e.target.value.slice(0, 6))}
								name=""
								id=""
								placeholder="Pincode *"
								style={{}}
								value={
									person === "Sender"
										? bookingDetails.sender.address.pincode
										: bookingDetails.receiver.address.pincode
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													address: {
														...bookingDetails.sender.address,
														pincode: e.target.value,
													},
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													address: {
														...bookingDetails.receiver.address,
														pincode: e.target.value,
													},
												},
										  });
								}}
							/>
						</article>

						{/* Phone Number */}
						<article className={styles.addrLine_3}>
							<label htmlFor="">Phone : </label>
							<input
								type="number"
								onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
								placeholder="+91 XXXXX XXXXX *"
								value={
									person === "Sender"
										? bookingDetails.sender.phone_number
										: bookingDetails.receiver.phone_number
								}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender: {
													...bookingDetails.sender,
													phone_number: e.target.value,
												},
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver: {
													...bookingDetails.receiver,
													phone_number: e.target.value,
												},
										  });
								}}
							/>
						</article>
					</article>
				</article>
			) : (
				<>
					<article className={styles.consigment_booking_2}></article>
				</>
			)}
		</>
	);
};

export default AddrInputs;
