/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "../../styles/Main_Section.css";

import icons_PNG from "../../assets/Company Icons/Figma/Icon_final.svg";
import { useAppContext } from "../../GlobalContext/AppContext";
import { IoMdLocate } from "react-icons/io";
import { FaCashRegister } from "react-icons/fa6";
import { MdOutlineWhereToVote } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/joy/CircularProgress";

const User_Page = () => {
	const [isLoading, setLoading] = useState(true);
	const { userData } = useAppContext();
	const navogate = useNavigate();

	useEffect(() => {
		const isUser = localStorage.getItem("isLoggedIn");

		if (!isUser) {
			toast.warning("Please login to Access this page !!", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});

			setTimeout(() => {
				navogate("/admin/login");
			}, 500);
		}

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			<section className="user_page_cards_container">
				{isLoading ? (
					<CircularProgress color="primary" size="lg" variant="soft" />
				) : (
					<>
						<article className="d-flex">
							<article className="position-relative z-1">
								<a href="/tracking">
									<article className="user_page_cards">
										<article className="" style={{ marginBottom: "4.5rem" }}>
											<article className="text-center fs-1 pb-3 ">
												<IoMdLocate />
											</article>
											<h4 className="fw-bold" style={{ zIndex: 10 }}>
												Track Consignment
											</h4>
										</article>
										<article className="text-center opacity-25 position-absolute z-0 text-end">
											<img
												src={icons_PNG}
												alt="APS Cargo Icon"
												height={100}
												style={{ marginBottom: "-8rem" }}
											/>
										</article>
									</article>
								</a>
							</article>

							<article className="position-relative z-1">
								<a href="/admin/book_parcel">
									<article className="user_page_cards">
										<article className="" style={{ marginBottom: "4.5rem" }}>
											<article className="text-center fs-1 pb-3 ">
												<FaCashRegister />
											</article>
											<h4 className="fw-bold" style={{ zIndex: 10 }}>
												Book a Parcels
											</h4>
										</article>

										<article className="text-center opacity-25 position-absolute z-0 text-end">
											<img
												src={icons_PNG}
												alt="APS Cargo Icon"
												height={100}
												style={{ marginBottom: "-8rem" }}
											/>
										</article>
									</article>
								</a>
							</article>

							<article className="position-relative z-1">
								<a href="/admin/tracking_update">
									<article className="user_page_cards">
										<article
											className=""
											style={{ marginBottom: "4.5rem", zIndex: "10" }}>
											<article className="text-center fs-1 pb-3 ">
												<MdOutlineWhereToVote />
											</article>
											<h4
												className="fw-bold px-1 text-center"
												style={{ zIndex: 10 }}>
												Update Consignment
											</h4>
										</article>

										<article className="text-center opacity-25 position-absolute z-0 text-end">
											<img
												src={icons_PNG}
												alt="APS Cargo Icon"
												height={100}
												style={{ marginBottom: "-8rem" }}
											/>
										</article>
									</article>
								</a>
							</article>
						</article>

						<article>
							<a href="/tracking">
								<article className="user_page_cards_for_list">
									<article
										className="d-flex justify-content-center align-items-center"
										style={{}}>
										<article className="text-center fs-1 pb-3 me-4">
											<FaRegRectangleList />
										</article>
										<h4 className="fw-bold" style={{ zIndex: 10 }}>
											View All Consignments
										</h4>
									</article>
								</article>
							</a>
						</article>
					</>
				)}
			</section>
		</>
	);
};

export default User_Page;
