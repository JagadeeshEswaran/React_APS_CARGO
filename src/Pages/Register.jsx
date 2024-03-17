/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import styles from "../styles/Register.module.css";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
		c_password: "",
	});
	const [errorMsg, setErrorMsg] = useState("");

	const handleRegFormSubmit = (e) => {
		e.preventDefault();

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
							theme: "light",
					  })
				: toast.error("Password should be at least 7 characters", {
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
				  })
			: toast.error("Username should be at least 8 characters", {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
			  });
	};

	const handleSuccess = async () => {
		console.log(userData);

		try {
			const resp = await axios.post(
				"http://localhost:3000/admin/register",
				userData
			);

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
					theme: "light",
				});
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
				theme: "light",
			});
		}
	};

	return (
		<>
			<section className={styles.register_main_container}>
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
							placeholder="Type your desired Username"
							onChange={(e) =>
								setUserData({ ...userData, username: e.target.value })
							}
						/>

						<label htmlFor="password">
							Enter your Password <span>*</span> :{" "}
						</label>
						<input
							type="password"
							placeholder="Please create a safe password"
							onChange={(e) =>
								setUserData({ ...userData, password: e.target.value })
							}
						/>

						<label htmlFor="c_password">
							Confirm your Password <span>*</span> :{" "}
						</label>
						<input
							type="password"
							placeholder="Please repeat password"
							onChange={(e) =>
								setUserData({ ...userData, c_password: e.target.value })
							}
						/>

						<article className={styles.signUp_form_btn_container}>
							<button>Register</button>
							<button>Cancel</button>
						</article>
					</form>

					<p className={styles.alert_subtle}>
						<span>* </span>Please contact Admin, if unable to Register
					</p>
				</article>
			</section>
		</>
	);
};

export default Register;
