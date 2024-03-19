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
								style={{ marginRight: "1rem", marginBottom: "1rem" }}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_F_name: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_F_name: e.target.value,
										  });
								}}
							/>

							<input
								type="textfield"
								name=""
								id=""
								placeholder="Last Name"
								style={{}}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_L_name: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_L_name: e.target.value,
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
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_DNo: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_DNo: e.target.value,
										  });
								}}
							/>
							{/* Street Name */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="Street Name *"
								style={{
									width: "70.7%",
									marginRight: "1rem",
									marginBottom: "1rem",
								}}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_street: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_street: e.target.value,
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
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_town: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_town: e.target.value,
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
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_Dt: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_Dt: e.target.value,
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
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_state: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_state: e.target.value,
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
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_country: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_country: e.target.value,
										  });
								}}
							/>

							{/* Pincode / Postal Code */}
							<input
								type="textfield"
								name=""
								id=""
								placeholder="Pincode *"
								style={{}}
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_addr_pincode: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_addr_pincode: e.target.value,
										  });
								}}
							/>
						</article>

						{/* Phone Number */}
						<article className={styles.addrLine_3}>
							<label htmlFor="">Phone : </label>
							<input
								type="number"
								placeholder="+91 XXXXX XXXXX *"
								onChange={(e) => {
									addrType === "From Address"
										? setBookingDetails({
												...bookingDetails,
												sender_Ph_num: e.target.value,
										  })
										: setBookingDetails({
												...bookingDetails,
												receiver_Ph_num: e.target.value,
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
