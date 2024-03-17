/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import styles from "../styles/Login.module.css";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});
	const [errorMsg, setErrorMsg] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();

		if (userData.username.length < 8) {
			toast.error("Username should be at least 8 characters", {
				position: "bottom-right",
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
				position: "bottom-right",
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
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			handleSuccess();
		}
	};

	const handleSuccess = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3000/admin/login",
				userData
			);

			console.log(response);

			if (response.data.success) {
				console.log(response.data.msg);

				toast.success(`${response.data.msg}`, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} catch (error) {
			console.log(error);

			toast.warning(`${error.response.data.error}`, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<>
			<section className={styles.register_main_container}>
				<article className={styles.sign_up_form_container}>
					<form
						action="login"
						className={styles.signUp_form}
						onSubmit={handleLogin}>
						<h2>APS Cargo Staff Login</h2>

						<label htmlFor="username">
							Username <span>*</span> :{" "}
						</label>
						<input
							type="text"
							placeholder="Enter your Username"
							onChange={(e) =>
								setUserData({ ...userData, username: e.target.value })
							}
						/>

						<label htmlFor="password">
							Password <span>*</span> :{" "}
						</label>
						<input
							type="text"
							placeholder="Enter your password"
							onChange={(e) =>
								setUserData({ ...userData, password: e.target.value })
							}
						/>

						<article className={styles.signUp_form_btn_container}>
							<button>Login </button>
							<button>Cancel</button>
						</article>
					</form>
				</article>

				<article>
					<p className={styles.alert_subtle}>
						<span>* </span>Please contact Admin, if unable to Login
					</p>
				</article>
			</section>
		</>
	);
};

export default Login;
