/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */

import CircularProgress from "@mui/joy/CircularProgress";
import React, { useCallback, useEffect, useState } from "react";
import ItemsOfList from "./ItemsOfList";
import { toast } from "react-toastify";

import icons_PNG from "../../assets/Company Icons/Figma/Icon_final.svg";

import "./ListItem.css";
import Filters from "./Filters";
import { globalInstanceForAxios } from "../../../Axios/GlobalInstance";

const ListItems = () => {
	const [isLoading, setLoading] = useState(true);
	const [consignmentData, setConsignmentData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const handleAxiosForFetchRequest = async () => {
		try {
			const response = await globalInstanceForAxios.get("consignment/");

			// console.log(response);

			if (response.status === 200) {
				setConsignmentData(response.data);

				toast.warning(response.data.message, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteItem = async (id) => {
		alert("Please Confirm to Delete the Item");

		try {
			const response = await globalInstanceForAxios.delete(
				`/consignment/remove/${id}`
			);

			if (response.status === 200) {
				setFilteredData(consignmentData);
				location.reload();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleAxiosForFetchRequest();
	}, []);

	return (
		<section
			className="d-flex flex-column justify-content-center align-items-center h-100"
			style={{ height: "auto", minHeight: "72vh" }}>
			<article className="card w-50 my-3 py-3 d-flex justify-content-evenly align-items-center ">
				<Filters
					consignmentData={consignmentData}
					setConsignmentData={setConsignmentData}
					setFilteredData={setFilteredData}
				/>
			</article>

			<article
				className=" border-dark position-absolute	"
				style={{
					marginTop: "7rem",
					marginRight: "7rem",
					zIndex: "-10",
					opacity: "5%",
				}}>
				<img src={icons_PNG} alt="APS Cargo Icon" height={500} />
			</article>

			<article
				className="rounded shadow mb-4 "
				style={{ height: "auto", minHeight: "65vh", width: "85.5vw" }}>
				<table className="rounded m-1" style={{ width: "85vw" }}>
					<thead className="text-center">
						{/* <th className="border border-dark-subtle py-2 col-1 bg-primary-subtle">
							S.No
						</th> */}
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
					</thead>

					{filteredData.length > 0 ? (
						filteredData.map(
							(item, idx) => (
								<ItemsOfList
									key={item._id}
									item={item}
									idx={idx}
									handleDeleteItem={handleDeleteItem}
								/>
							)

							// console.log(item)
						)
					) : filteredData === -1 ? (
						<tbody className="col-12 border fs-6 fw-semibold m-3">
							<p>No data Found</p>
						</tbody>
					) : (
						consignmentData.map(
							(item, idx) => (
								<ItemsOfList
									key={item._id}
									item={item}
									idx={idx}
									handleDeleteItem={handleDeleteItem}
								/>
							)

							// console.log(item)
						)
					)}
				</table>
			</article>
		</section>
	);
};

export default ListItems;
