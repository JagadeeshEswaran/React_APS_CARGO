/* eslint-disable no-unused-vars */
import React from "react";

import { IoCloseCircleSharp } from "react-icons/io5";

import "../../styles/Navbar.css";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";
import { FaPowerOff } from "react-icons/fa";
import { useAppContext } from "../../GlobalContext/AppContext";

const UserControl = () => {
	const { isAdminUser, username } = useAppContext();

	const handleSignOut = () => {
		localStorage.clear();

		// setTimeout(() => {
		location.reload();
		// }, 1000);
	};

	return (
		<>
			<article
				className="offcanvas offcanvas-end user_canvas me-3"
				style={{ height: "68vh", marginTop: "4.5rem" }}
				tabIndex="-1"
				id="user_canvas"
				data-bs-backdrop="false"
				aria-labelledby="user_canvasLabel">
				<article className="offcanvas-header d-flex flex-column justify-content-between w-100">
					<article className="w-100 d-flex justify-content-between align-items-center">
						<article>
							<button
								type="button"
								className="username_pill ms-4"
								// style={{ height: "1rem", width: "1rem" }}
								data-bs-dismiss="offcanvas"
								aria-label="Close">
								<IoCloseCircleSharp className="fs-1 border rounded-circle border-primary" />
							</button>
						</article>

						<article>
							<h5
								id="user_canvas_Label"
								className="card username_pill px-5 py-3">
								{username}
							</h5>
						</article>
					</article>

					<article
						className="offcanvas-body mt-4 text-light"
						style={{ width: "80%" }}>
						<a href="/admin/staff_page">
							<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">
								Dashboard{" "}
							</h5>
						</a>

						<a href="/admin/staff_page/all_bookings">
							<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">
								All Bookings
							</h5>
						</a>

						<a href="/admin/book_parcel">
							<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">
								Book a Parcel
							</h5>
						</a>
						<a href="/tracking">
							<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">
								Track Consignment
							</h5>
						</a>
						<a href="/admin/tracking_update">
							<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">
								Update Consignment
							</h5>
						</a>

						{isAdminUser ? (
							<>
								<a href="/admin/all_users">
									<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">
										All Users{" "}
									</h5>
								</a>
							</>
						) : (
							<></>
						)}

						<a href="/">
							<h5 className="mb-4 user_canvas_link w-100 py-1	px-3">Home</h5>
						</a>
					</article>

					<article
						className="w-100 d-flex justify-content-between align-items-center position-absolute ps-4 pe-3"
						style={{ bottom: "10px" }}>
						<article className="d-flex ">
							<article
								type="button"
								id="user_canvas_Label"
								className="card username_pill px-3 py-1 d-flex flex-row hcc align-items-center">
								<h6 className="p-0 m-0">
									Contact Support{" "}
									<span className="pb-2">
										<VscDebugBreakpointUnsupported className="fs-2" />
									</span>
								</h6>
							</article>
						</article>

						<article className="">
							<button
								type="button"
								className="logout_canvas_btn ms-4 rounded-circle"
								// style={{ height: "1rem", width: "1rem" }}
								data-bs-dismiss="offcanvas"
								aria-label="Close"
								onClick={() => handleSignOut()}>
								<FaPowerOff
									className="border rounded-circle p-2"
									style={{
										fontSize: "3.5rem",
									}}
								/>
							</button>
						</article>
					</article>
				</article>
			</article>
		</>
	);
};

export default UserControl;
