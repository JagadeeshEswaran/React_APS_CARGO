/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icons_PNG from "../../assets/Company Icons/Figma/Icon_final.svg";

import { IoRefreshCircleSharp } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { useAppContext } from "../../GlobalContext/AppContext";

const AllUsersPage = () => {
	const { isAdminUser } = useAppContext();
	const [isLoading, setLoading] = useState(true);
	const [allUsers, setAllUsers] = useState([]);
	const navigate = useNavigate();

	const fetchAllUsers = async () => {
		try {
			const response = await axios.get("http://localhost:3000/user/all_users");

			if (response.status === 200) {
				setAllUsers(response.data);

				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteUser = useCallback(
		async (userId) => {
			try {
				const response = await fetch(`/user/remove/${userId}`, {
					method: "DELETE",
				});

				if (response.status === 200) {
					// User deleted successfully, update the state
					setAllUsers(allUsers.filter((user) => user._id !== userId));

					toast.warn(response.message, {
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						// transition: Bounce,
					});
				} else {
					console.error("Error deleting user:", response.statusText);
				}
			} catch (error) {
				console.error("Error deleting user:", error);
			}
		},
		[allUsers]
	);

	const handleUserRegistration = () => {
		if (isAdminUser) {
			navigate("/user/register");
		} else {
			navigate("/admin/staff_page");
		}
	};

	useEffect(() => {
		const isUser = localStorage.getItem("isLoggedIn");

		if (!isUser) {
			navigate("/admin/login");

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
				location.reload();
			}, 500);
		} else {
			fetchAllUsers();
		}

		// setTimeout(() => {
		// 	setLoading(false);
		// }, 1500);
	}, []);

	console.log(allUsers);

	return (
		<>
			<section className=" d-flex justify-content-center align-items-center">
				<article
					className="position-absolute"
					style={{ marginLeft: "0rem", zIndex: "-10", opacity: "10%" }}>
					<img src={icons_PNG} alt="APS Cargo Icon" height={500} />
				</article>

				<section
					className="m-2 w-100 d-flex flex-column justify-content-start align-items-center p-3 border rounded"
					style={{ height: "auto", minHeight: "90vh" }}>
					<article className="card w-50 py-3 d-flex flex-row justify-content-center align-items-center shadow-sm">
						<h4 className="m-0 p-0 fw-semibold text-info-emphasis">
							All Users Section
						</h4>

						<article
							className=" position-absolute end-0 border  me-3 p-1 rounded-circle"
							type="button"
							onClick={() => location.reload()}>
							<IoRefreshCircleSharp className="fs-1" />
						</article>
					</article>

					<table className="mt-5 border w-75 text-center rounded">
						<tr className="rounded text-info-emphasis">
							<th className="rounded py-2 border border-2 border-dark-subtle bg-body-secondary">
								S.No
							</th>
							<th className="rounded py-2 border border-2 border-dark-subtle bg-body-secondary">
								Name
							</th>
							<th className="rounded py-2 border border-2 border-dark-subtle bg-body-secondary">
								Username
							</th>
							<th className="rounded py-2 border border-2 border-dark-subtle bg-body-secondary">
								Access
							</th>
							<th className="rounded py-2 border border-2 border-dark-subtle bg-body-secondary">
								Manage User
							</th>
						</tr>

						{allUsers.map((item, idx) =>
							!item.access_privileges === "super_admin" ||
							item.access_privileges === "User" ||
							item.access_privileges === "Admin" ? (
								<>
									<tr key={item._id} className={`rounded px-2 `}>
										<td
											className="border border-dark-subtle col-1 py-2 text-center"
											style={{ height: "2rem" }}>
											<h6 className="p-0 m-0">{idx + 0}</h6>
										</td>

										<td
											className="border border-dark-subtle col-2 py-2 text-center"
											style={{ height: "2rem" }}>
											<h6 className="p-0 m-0">{item.username}</h6>
										</td>

										<td
											className="border border-dark-subtle col-2 py-2 text-center"
											style={{ height: "2rem" }}>
											<h6 className="p-0 m-0">{item.username}</h6>
										</td>

										<td
											className="border border-dark-subtle col-2 py-2 text-center"
											style={{ height: "2rem" }}>
											<h6 className="p-0 m-0">
												{item.access_privileges === "User"
													? "View"
													: item.access_privileges === "Admin"
													? "Admin"
													: "Super Admin"}
											</h6>
										</td>

										<td
											className="border border-dark-subtle col-2 py-3 text-center "
											style={{ height: "2rem" }}>
											<article className=" d-flex justify-content-center">
												{item.access_privileges === "User" ||
												item.access_privileges === "Admin" ? (
													<>
														<article
															className="px-3"
															type="button"
															onClick={() => item._id}>
															<MdLockReset className="fs-1" />
														</article>

														<article
															className="px-3"
															type="button"
															onClick={() => handleDeleteUser(item._id)}>
															<MdDeleteForever className="fs-1" />
														</article>
													</>
												) : (
													<></>
												)}
											</article>
										</td>
									</tr>
								</>
							) : (
								<></>
							)
						)}
					</table>

					<article
						className="mt-5 px-3 py-2 btn btn-info shadow"
						onClick={handleUserRegistration}>
						<h5 className="p-0 m-0">Add New User</h5>
					</article>
				</section>
			</section>
		</>
	);
};

export default AllUsersPage;
