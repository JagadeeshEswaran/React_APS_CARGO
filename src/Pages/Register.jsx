/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import styles from "../styles/Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import icons_PNG from "../assets/Company Icons/Figma/Icon_final.svg";

import CircularProgress from "@mui/joy/CircularProgress";
import { globalInstanceForAxios } from "../../Axios/GlobalInstance";
import { isValidUsername } from "../Helpers/isValidUsername";

const Register = () => {
	const [isLoading, setLoading] = useState(true);
	const [userData, setUserData] = useState({
		username: "",
		password: "",
		c_password: "",
		access_priviliges: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	const handleRegFormSubmit = (e) => {
		e.preventDefault();

		if (!isValidUsername(userData.username)) {
			return toast.error(
				"Username contains Special Characters. '@' and '_' are only allowed to use",
				{
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				}
			);
		}

		userData.username && userData.username.length >= 8
			? userData.password && userData.password.length > 6
				? userData.c_password === userData.password
					? handleSuccess()
					: toast.error("Passwords do not match !!", {
							position: "bottom-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
					  })
				: toast.error("Password should be at least 7 characters", {
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
				  })
			: toast.error("Username should be at least 8 characters", {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
			  });
	};

	const handleSuccess = async () => {
		try {
			const resp = await globalInstanceForAxios.post("/admin/register", {
				username: userData.username,
				password: userData.password,
				access_privileges: userData.access_priviliges,
			});

			// console.log(resp);

			if (resp.data.success) {
				toast.success(`${resp.data.msg}`, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				setUserData({ username: "", password: "", c_password: "" });

				setTimeout(() => {
					navigate("/admin/all_users");
				}, 2000);
			}
		} catch (error) {
			console.log(error.response.data.msg);

			toast.warning(`${error.response.data.msg}`, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}
	};

	const handleClear = () => {
		setUserData({
			username: "",
			password: "",
			c_password: "",
			access_priviliges: "",
		});
	};

	useEffect(() => {
		const admin_token = localStorage.getItem("token");
		const db_token = "4bdf3d11b0b33f7420cee64b888285ed3a155610";

		if (admin_token !== db_token) {
			toast.warning("Administrator can Access this page !!", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});

			setTimeout(() => {
				setLoading(false);
			}, 1500);

			navigate("/admin/staff_page");
		}

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	// console.log(userData);

	return (
		<>
			<section className={styles.register_main_container}>
				{isLoading ? (
					<section className=" d-flex justify-content-center align-items-center w-100">
						<CircularProgress color="primary" size="lg" variant="soft" />
					</section>
				) : (
					<>
						<article
							className="border-dark"
							style={{ marginLeft: "20rem", zIndex: "-10", opacity: "10%" }}>
							<img src={icons_PNG} alt="APS Cargo Icon" height={500} />
						</article>

						<article className={styles.sign_up_form_container}>
							<form
								action=""
								className={styles.signUp_form}
								onSubmit={handleRegFormSubmit}>
								<h2>APS Cargo Sign Up</h2>

								<label htmlFor="username">
									Create Username <span>*</span> :{" "}
								</label>
								<input
									type="text"
									onInput={(e) =>
										(e.target.value = e.target.value.slice(0, 15))
									}
									placeholder="Type your desired Username"
									value={userData.username}
									onChange={(e) =>
										setUserData({ ...userData, username: e.target.value })
									}
								/>

								<label htmlFor="password">
									Enter your Password <span>*</span> :{" "}
								</label>
								<input
									type="password"
									onInput={(e) =>
										(e.target.value = e.target.value.slice(0, 20))
									}
									placeholder="Please create a safe password"
									value={userData.password}
									onChange={(e) =>
										setUserData({ ...userData, password: e.target.value })
									}
								/>

								<label htmlFor="c_password">
									Confirm your Password <span>*</span> :{" "}
								</label>
								<input
									type="password"
									onInput={(e) =>
										(e.target.value = e.target.value.slice(0, 20))
									}
									placeholder="Please repeat password"
									value={userData.c_password}
									onChange={(e) =>
										setUserData({ ...userData, c_password: e.target.value })
									}
								/>

								<div className="dropdown mt-4">
									<button
										className="btn btn-secondary dropdown-toggle bg-info border-light pe-2 w-50"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										{userData.access_priviliges
											? userData.access_priviliges
											: "Select User Type"}
									</button>
									<ul className="dropdown-menu dropdown-menu-dark">
										<li>
											<a
												className="dropdown-item"
												href="#"
												onClick={() =>
													setUserData({
														...userData,
														access_priviliges: "User",
													})
												}>
												User
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
												onClick={() =>
													setUserData({
														...userData,
														access_priviliges: "Admin",
													})
												}>
												Admin
											</a>
										</li>
									</ul>
								</div>

								<article className={styles.signUp_form_btn_container}>
									<button type="submit" onClick={() => handleRegFormSubmit()}>
										Register
									</button>
									<button type="button" onClick={handleClear}>
										Clear
									</button>
								</article>

								<article className=" d-flex justify-content-center align-items-center">
									<button
										className="my-4 fw-bold shadow w-75 btn btn-danger"
										onClick={() => navigate("/admin/all_users")}>
										Cancel
									</button>
								</article>
							</form>

							<article className={styles.alert_subtle_container_2}>
								<p className={styles.alert_subtle_1}>
									<span>* </span>Please contact Admin, if unable to Register
								</p>
							</article>
						</article>
					</>
				)}
			</section>

			<ToastContainer />
		</>
	);
};

export default Register;
