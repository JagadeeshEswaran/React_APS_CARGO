/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemsOfList from "./ItemsOfList";

import "./ListItem.css";
import Filters from "./Filters";

const ListItems = () => {
	const [consignmentData, setConsignmentData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const handleAxiosForFetchRequest = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3000/admin/staff_page/all_bookings"
			);

			// console.log(response.data.success);

			if (response.data.success) {
				setConsignmentData(response.data.data.reverse());
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleAxiosForFetchRequest();
	}, []);

	console.log(filteredData);

	return (
		<section
			className="d-flex flex-column justify-content-center align-items-center h-100"
			style={{ height: "auto", minHeight: "72vh" }}>
			<article className="card w-25 my-3 py-3 d-flex justify-content-center align-items-center ">
				<Filters
					consignmentData={consignmentData}
					setConsignmentData={setConsignmentData}
					setFilteredData={setFilteredData}
				/>
			</article>

			<article
				className="rounded shadow mb-4 "
				style={{ height: "auto", minHeight: "65vh", width: "80vw" }}>
				<table className="rounded m-1" style={{ width: "79.5vw" }}>
					<tr className="text-center">
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							S.No
						</th>
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							POD No.
						</th>
						<th className="border border-dark-subtle col-2 py-2 bg-primary-subtle">
							Source
						</th>
						<th className="border border-dark-subtle col-2 py-2 bg-primary-subtle">
							Destination
						</th>
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							Quantity
						</th>
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							Agent
						</th>
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							Current Status
						</th>
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							Download
						</th>
						<th className="border border-dark-subtle col-1 py-2 bg-primary-subtle">
							Update / Track
						</th>
					</tr>

					{filteredData.length > 0 ? (
						filteredData.map((item, idx) => (
							<ItemsOfList
								key={item.bookingDetails.booking_id}
								item={item}
								idx={idx}
							/>
						))
					) : filteredData === -1 ? (
						<tr className="col-12 border fs-6 fw-semibold m-3">
							<p>No data Found</p>
						</tr>
					) : (
						consignmentData.map((item, idx) => (
							<ItemsOfList
								key={item.bookingDetails.booking_id}
								item={item}
								idx={idx}
							/>
						))
					)}
				</table>
			</article>
		</section>
	);
};

export default ListItems;
