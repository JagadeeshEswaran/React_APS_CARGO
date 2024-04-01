/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "../../styles/Main_Section.css";
import { useAppContext } from "../../GlobalContext/AppContext";
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
					<CircularProgress color="neutral" size="lg" variant="soft" />
				) : (
					<>
						<a href="/tracking">
							<article className="user_page_cards">
								{/* <h3 className={styles.cards_body_h3}>
						<a href="/tracking">Track Consignment</a>
					</h3> */}
								Track Consignment
							</article>
						</a>

						<a href="/admin/book_parcel">
							<article className="user_page_cards">Book a Parcel</article>
						</a>

						<a
							href="/admin/tracking_update
				">
							<article className="user_page_cards">Update Consignment</article>
						</a>
					</>
				)}
			</section>
		</>
	);
};

export default User_Page;
