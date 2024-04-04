/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdNoteAlt } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

const ItemsOfList = ({ item, idx }) => {
	const [hoveringItem, setHoveringItem] = useState();

	// console.log(hoveringItem);

	return (
		<tr
			key={item.bookingDetails.booking_id}
			className={`rounded px-2 ${
				hoveringItem === idx ? "list_view_page_list_item" : ""
			}`}
			onMouseOver={() => setHoveringItem(idx)}
			onMouseOut={() => setHoveringItem(null)}>
			<td
				className="border border-dark-subtle col-1 py-2 text-center"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">{idx + 1}</h6>
			</td>
			<td
				className="border border-dark-subtle col-2 py-2 text-center"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">{item.bookingDetails.booking_id}</h6>
				<h6 className="p-0 m-0 mt-1" style={{ fontSize: "0.75rem" }}>
					{new Date(item.bookingDetails.booking_date).toDateString()}
				</h6>
			</td>
			<td
				className="border border-dark-subtle col-2 py-2 px-1 text-center"
				style={{ height: "2rem", textTransform: "capitalize" }}>
				<h6 className="p-0 m-0">
					{item.bookingDetails.sender_addr_town +
						", " +
						item.bookingDetails.sender_addr_Dt +
						", " +
						item.bookingDetails.sender_addr_state +
						", " +
						item.bookingDetails.sender_addr_pincode}
				</h6>
			</td>
			<td
				className="border border-dark-subtle col-2 py-2 px-1 text-center"
				style={{ height: "2rem", textTransform: "capitalize" }}>
				<h6 className="p-0 m-0">
					{item.bookingDetails.receiver_addr_town +
						", " +
						item.bookingDetails.receiver_addr_Dt +
						", " +
						item.bookingDetails.receiver_addr_state +
						", " +
						item.bookingDetails.receiver_addr_pincode}
				</h6>
			</td>
			<td
				className="border border-dark-subtle col-1 py-2 text-center"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">
					{item.consignmentDetails[0].package_qty +
						" " +
						item.consignmentDetails[0].package_type}
				</h6>
			</td>

			<td
				className="border border-dark-subtle col-1 py-2 px-1 text-center"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">{item.consignmentDetails[0].delivery_agent}</h6>
			</td>

			<td
				className="border border-dark-subtle col-1 py-2 px-1 text-center"
				style={{ height: "2rem", textTransform: "capitalize" }}>
				<h6 className="p-0 m-0">{item.trackingDetails[0].curr_status}</h6>
			</td>

			<td
				className="border border-dark-subtle col-1 py-2 text-center"
				style={{ height: "2rem" }}>
				<button className="btn btn-primary shadow-sm">Get POD</button>
			</td>
			<td
				className="border border-dark-subtle col-1 text-center "
				style={{ height: "2rem" }}>
				<section className="d-flex justify-content-evenly align-items-center w-100 p-0">
					<a
						href={`/admin/tracking_update/${item.bookingDetails.booking_id}`}
						target="_blank"
						title="Track Consignment">
						<article className="fs-1 list_item_update_icon d-flex justify-content-center align-items-center">
							<MdNoteAlt className="icon_font rounded-circle" />
						</article>
					</a>
					<a
						href={`/tracking/${item.bookingDetails.booking_id}`}
						target="_blank"
						title="Update Consignment">
						<article className="fs-1 list_item_track_icon d-flex justify-content-center align-items-center">
							<FaMapMarkedAlt className="icon_font rounded-circle" />
						</article>
					</a>
				</section>
			</td>
		</tr>
	);
};

export default ItemsOfList;
