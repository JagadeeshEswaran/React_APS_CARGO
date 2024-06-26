/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import styles from "../styles/Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../GlobalContext/AppContext";

import icons_PNG from "../assets/Company Icons/Figma/Icon_final.svg";
import { globalInstanceForAxios } from "../../Axios/GlobalInstance";
import { isValidUsername } from "../Helpers/isValidUsername";

const Login = () => {
	const [userData, setUserData_] = useState({
		username: "",
		password: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();
	const { username } = useAppContext();

	const handleLogin = (e) => {
		e.preventDefault();

		if (userData.username.length < 8) {
			toast.error("Username should be at least 8 characters", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (userData.password.length < 7) {
			toast.error("Password should be at least 7 characters", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (errorMsg) {
			toast.error(`${errorMsg}`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (!isValidUsername(userData.username)) {
			toast.error(`Username contains Special Characters`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			return handleSuccess();
		}
	};

	const handleSuccess = async () => {
		console.log(userData);

		try {
			const response = await globalInstanceForAxios.post("/user/login", {
				username: userData.username,
				password: userData.password,
			});

			if (response.data.success) {
				console.log(response.data.msg);

				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem("username", userData.username);
				localStorage.setItem("token", response.data.token);

				setTimeout(() => {
					navigate("/admin/staff_page");
					location.reload();
				}, 1500);

				toast.success(`${response.data.msg}, Please wait...`, {
					position: "top-right",
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
			console.log(error.response.data.error);

			toast.error(error.response.data.error, {
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

	const handleCancel = () => {
		navigate("/");
	};

	useEffect(() => {
		const isLogged = localStorage.getItem("isLoggedIn");

		if (isLogged) {
			navigate("/admin/staff_page");
		}
	}, []);

	return (
		<>
			<section className={styles.register_main_container}>
				<article
					className="border-dark"
					style={{ marginLeft: "20rem", zIndex: "-10", opacity: "10%" }}>
					<img src={icons_PNG} alt="APS Cargo Icon" height={500} />
				</article>

				<article className={styles.sign_up_form_container}>
					<form
						action="login"
						className={styles.signUp_form}
						onSubmit={handleLogin}>
						<h2
							className="fw-bold"
							style={{
								color: "aliceblue",
								// textShadow: "red -5px 18px 30	px",
							}}>
							APS Cargo Staff Login
						</h2>

						<label htmlFor="username">
							Username <span>*</span> :{" "}
						</label>
						<input
							type="text"
							onInput={(e) => (e.target.value = e.target.value.slice(0, 20))}
							placeholder="Enter your Username"
							onChange={(e) =>
								setUserData_({ ...userData, username: e.target.value })
							}
						/>

						<label htmlFor="password">
							Password <span>*</span> :{" "}
						</label>
						<input
							type="password"
							onInput={(e) => (e.target.value = e.target.value.slice(0, 30))}
							placeholder="Enter your password"
							onChange={(e) =>
								setUserData_({ ...userData, password: e.target.value })
							}
						/>

						<article className={styles.signUp_form_btn_container}>
							<button onClick={handleLogin}>Login </button>
							<button onClick={handleCancel}>Cancel</button>
						</article>

						{/* <article className={styles.alert_subtle_container}>
							<p className={styles.alert_subtle_2}>
								If not Registered, Click hear to{" "}
								<span>
									<a href="/admin/register">Register</a>
								</span>
							</p>
						</article> */}

						<p className={styles.alert_subtle_1}>
							Please contact Admin, if unable to Login
						</p>
					</form>
				</article>
			</section>

			<ToastContainer />
		</>
	);
};

export default Login;
