/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdNoteAlt } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

import { RiDeleteBin5Fill } from "react-icons/ri";

const ItemsOfList = ({ item, idx, handleDeleteItem }) => {
	const [hoveringItem, setHoveringItem] = useState();

	// console.log(hoveringItem);
	// console.log(item);

	return (
		<tbody
			key={item._id}
			className={`rounded px-2 ${
				hoveringItem === item._id ? "list_view_page_list_item" : ""
			}`}
			onMouseOver={() => setHoveringItem(item._id)}
			onMouseOut={() => setHoveringItem(null)}>
			<td
				onClick={() => console.log(item)}
				className="border border-dark-subtle col-2 py-2 text-center position-relative"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">
					{item.cgmtId ? item.cgmtId : ""}
					{item.details.delivery_agent === "Delhivery" ||
					item.details.delhivery_lrn ? (
						<>&nbsp; / {item.details.delhivery_lrn}</>
					) : (
						<></>
					)}
				</h6>
				<h6 className="p-0 m-0 mt-1" style={{ fontSize: "0.75rem" }}>
					{new Date(item.booking_date).toDateString()}
				</h6>

				{hoveringItem ? (
					<article
						onClick={() => handleDeleteItem(item._id)}
						type="button"
						className="ms-4 me-4 text-danger position-absolute"
						style={{ bottom: "14px", left: "-15px", transition: "0.3s" }}>
						<RiDeleteBin5Fill
							className="fs-3"
							style={{ transition: "0.35s" }}
						/>
					</article>
				) : (
					<></>
				)}
			</td>
			<td
				className="border border-dark-subtle col-2 py-2 px-1 text-center"
				style={{ height: "2rem", textTransform: "capitalize" }}>
				<h6 className="p-0 m-0">
					{item.sender.address.town +
						", " +
						item.sender.address.state +
						", " +
						item.sender.address.country +
						", " +
						item.sender.address.pincode}
				</h6>
			</td>
			<td
				className="border border-dark-subtle col-2 py-2 px-1 text-center"
				style={{ height: "2rem", textTransform: "capitalize" }}>
				<h6 className="p-0 m-0">
					{item.receiver.address.town +
						", " +
						item.receiver.address.state +
						", " +
						item.receiver.address.country +
						", " +
						item.receiver.address.pincode}
				</h6>
			</td>
			<td
				className="border border-dark-subtle col-1 py-2 text-center"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">
					{item.details.package_qty + " " + item.details.package_type}
				</h6>
			</td>

			<td
				className="border border-dark-subtle col-1 py-2 px-1 text-center"
				style={{ height: "2rem" }}>
				<h6 className="p-0 m-0">{item.details.delivery_agent}</h6>
			</td>

			<td
				className="border border-dark-subtle col-1 py-2 px-1 text-center"
				style={{ height: "2rem", textTransform: "capitalize" }}>
				<h6 className="p-0 m-0" style={{ textTransform: "capitalize" }}>
					{item.tracking.curr_status}
				</h6>
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
						href={`/admin/tracking_update/${item.cgmtId}`}
						target="_blank"
						title="Update Consignment">
						<article className="fs-1 list_item_update_icon d-flex justify-content-center align-items-center">
							<MdNoteAlt className="icon_font rounded-circle" />
						</article>
					</a>
					<a
						href={`/tracking/${item.cgmtId}`}
						target="_blank"
						title="Track Consignment">
						<article className="fs-1 list_item_track_icon d-flex justify-content-center align-items-center">
							<FaMapMarkedAlt className="icon_font rounded-circle" />
						</article>
					</a>
				</section>
			</td>
		</tbody>
	);
};

export default ItemsOfList;
